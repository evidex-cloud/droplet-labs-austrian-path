// 交互演示：数据 vs 知识——一个拥有海量历史数据的推荐系统，对一个只看眼前的本地小店主。
// 稳态时推荐系统赢；“新奇”出现（口味突变）时，小店主先适应，推荐系统要等新数据稀释旧数据。
// 拖动“数据存量”“本地观察敏锐度”“新奇出现频率”，看两条命中率曲线怎么交叉。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const K = 6, ROUNDS = 80, PER_ROUND = 100;
  const rng = (seed) => () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };

  let memory = 20, acuity = 6, every = 25;

  // 偏好向量：主流品类 0.35，次流 0.25，其余各 0.10；“命中率”按相对最优（选中主流 = 100%）计
  const PMAX = 0.35;
  const prefs = (dom, run) => Array.from({ length: K }, (_, k) => (k === dom ? PMAX : k === run ? 0.25 : 0.10));
  const draw = (p, r) => { let u = r(), acc = 0; for (let k = 0; k < K; k++) { acc += p[k]; if (u < acc) return k; } return K - 1; };
  const argmax = (a) => a.indexOf(Math.max(...a));

  const simulate = () => {
    const r = rng(90210);
    let dom = 0, run = 1, p = prefs(dom, run);
    // 推荐系统的数据仓：预先装满 memory 轮的稳态数据
    const store = [];
    for (let t = 0; t < memory; t++) { const c = Array(K).fill(0); for (let i = 0; i < PER_ROUND; i++) c[draw(p, r)]++; store.push(c); }
    const rec = [], loc = [], events = [];
    for (let t = 0; t < ROUNDS; t++) {
      if (every > 0 && t > 0 && t % every === 0) {
        const nd = (dom + 1 + Math.floor(r() * (K - 1))) % K;
        let nr = Math.floor(r() * K); while (nr === nd) nr = Math.floor(r() * K);
        dom = nd; run = nr; p = prefs(dom, run); events.push(t);
      }
      // 推荐系统：按仓里全部数据的品类计数预测
      const tot = Array(K).fill(0); for (const c of store) for (let k = 0; k < K; k++) tot[k] += c[k];
      const recPick = argmax(tot);
      // 小店主：只看这一轮眼前的少量顾客（此时此地的观察，样本小但是当下的）
      const seen = Array(K).fill(0); for (let i = 0; i < acuity; i++) seen[draw(p, r)]++;
      const locPick = argmax(seen);
      rec.push(p[recPick] / PMAX); loc.push(p[locPick] / PMAX);
      // 这一轮真实的购买进入数据仓
      const c = Array(K).fill(0); for (let i = 0; i < PER_ROUND; i++) c[draw(p, r)]++;
      store.push(c); if (store.length > memory) store.shift();
    }
    return { rec, loc, events };
  };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔭 数据 vs 知识：海量历史 vs 此时此地", "🔭 Data vs knowledge: a huge past vs the here and now")}</div>
      <div class="demo-grid-3">
        <div class="demo-block">
          <label class="demo-label">${T("推荐系统的数据存量（记住多少轮历史）", "Recommender's data store (rounds of history kept)")}：<b id="dk-m">${memory}</b></label>
          <input class="demo-slider" id="dk-mem" type="range" min="3" max="120" step="1" value="${memory}" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("小店主每轮亲眼观察的顾客数", "Customers the shopkeeper watches each round")}：<b id="dk-a">${acuity}</b></label>
          <input class="demo-slider" id="dk-acu" type="range" min="2" max="60" step="1" value="${acuity}" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("新奇出现的间隔（每几轮口味突变一次；0 = 从不）", "Novelty interval (taste shifts every N rounds; 0 = never)")}：<b id="dk-e">${every}</b></label>
          <input class="demo-slider" id="dk-ev" type="range" min="0" max="60" step="1" value="${every}" />
        </div>
      </div>
      <div class="demo-block">
        <div id="dk-chart"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("平均命中率：推荐系统（相对最优）", "Avg. hit rate: recommender (relative to best)")}</div><div class="v" id="dk-r">–</div></div>
          <div class="stat"><div class="k">${T("平均命中率：小店主（相对最优）", "Avg. hit rate: shopkeeper (relative to best)")}</div><div class="v" id="dk-l">–</div></div>
          <div class="stat"><div class="k">${T("稳定期领先者", "Leader in stable periods")}</div><div class="v acc" id="dk-stable">–</div></div>
          <div class="stat"><div class="k">${T("突变后 5 轮领先者", "Leader in 5 rounds after a shift")}</div><div class="v acc" id="dk-shock">–</div></div>
          <div class="stat"><div class="k">${T("推荐系统重新学会要几轮", "Rounds for recommender to relearn")}</div><div class="v" id="dk-relearn">–</div></div>
        </div>
        <div class="demo-log" id="dk-log"></div>
      </div>
      <p class="demo-tip">${T(
        "默认设置下：稳定期推荐系统（蓝）稳稳领先——这是“数据是新石油”说对的部分。每次口味突变（竖线），小店主（金）一两轮就回来了，推荐系统要花十几轮把旧数据稀释掉。把数据存量拖到 120：稳定期它更准，突变后它更慢——数据越多，惯性越大。把新奇间隔拖到 0（世界不变）：推荐系统全程赢。把间隔拖到 8：小店主全程赢。真实经济里，世界多久变一次？",
        "By default the recommender (blue) leads comfortably in stable periods — the part of “data is the new oil” that is right. At each taste shift (vertical lines) the shopkeeper (gold) recovers within a round or two; the recommender needs a dozen rounds to dilute the old data. Drag the data store to 120: more accurate in stable times, slower after a shift — more data, more inertia. Set the novelty interval to 0 (a world that never changes): the recommender wins throughout. Set it to 8: the shopkeeper wins throughout. In the real economy, how often does the world change?"
      )}</p>
    </div>`;

  const pct = (x) => (x * 100).toFixed(0) + "%";
  const mean = (a) => (a.length ? a.reduce((s, v) => s + v, 0) / a.length : 0);

  const paint = () => {
    root.querySelector("#dk-m").textContent = memory;
    root.querySelector("#dk-a").textContent = acuity;
    root.querySelector("#dk-e").textContent = every === 0 ? T("从不", "never") : every;
    const { rec, loc, events } = simulate();
    const evSet = new Set();
    for (const e of events) for (let d = 0; d < 5; d++) evSet.add(e + d);
    const stR = [], stL = [], shR = [], shL = [];
    for (let t = 0; t < ROUNDS; t++) { if (evSet.has(t)) { shR.push(rec[t]); shL.push(loc[t]); } else { stR.push(rec[t]); stL.push(loc[t]); } }
    root.querySelector("#dk-r").textContent = pct(mean(rec));
    root.querySelector("#dk-l").textContent = pct(mean(loc));
    root.querySelector("#dk-stable").textContent = stR.length ? (mean(stR) >= mean(stL) ? T(`推荐系统 ${pct(mean(stR))} vs ${pct(mean(stL))}`, `recommender ${pct(mean(stR))} vs ${pct(mean(stL))}`) : T(`小店主 ${pct(mean(stL))} vs ${pct(mean(stR))}`, `shopkeeper ${pct(mean(stL))} vs ${pct(mean(stR))}`)) : "–";
    root.querySelector("#dk-shock").textContent = shR.length ? (mean(shL) > mean(shR) ? T(`小店主 ${pct(mean(shL))} vs ${pct(mean(shR))}`, `shopkeeper ${pct(mean(shL))} vs ${pct(mean(shR))}`) : T(`推荐系统 ${pct(mean(shR))} vs ${pct(mean(shL))}`, `recommender ${pct(mean(shR))} vs ${pct(mean(shL))}`)) : T("（没有突变）", "(no shifts)");
    // 重新学会：突变后推荐系统命中率首次回到 0.45 需要几轮
    const relearn = events.map((e) => { for (let t = e; t < ROUNDS; t++) if (rec[t] >= 0.99) return t - e; return ROUNDS - e; });
    root.querySelector("#dk-relearn").textContent = relearn.length ? T(`约 ${mean(relearn).toFixed(0)} 轮`, `about ${mean(relearn).toFixed(0)} rounds`) : "–";

    const lines = [];
    if (every === 0) lines.push(`<span class="ok">${T("世界不变：过去的记录就是对未来最好的预测，数据最多的一方全程领先——《经济学人》说对的那部分。", "A world that never changes: the record of the past is the best predictor of the future, and the side with the most data leads throughout — the part The Economist gets right.")}</span>`);
    else {
      lines.push(`${T(`口味在第 ${events.join("、")} 轮突变。`, `Tastes shifted at rounds ${events.join(", ")}.`)} ${mean(shL) > mean(shR) ? `<span class="warn">${T("突变后小店主先适应：他看的是眼前的顾客（此时此地的知识），推荐系统看的是过去的记录。", "After each shift the shopkeeper adapts first: she watches the customers in front of her (knowledge of time and place); the recommender watches records of the past.")}</span>` : ""}`);
      lines.push(T(`推荐系统平均要 ${mean(relearn).toFixed(0)} 轮才重新学会——数据存量越大，旧记录越难被稀释。这就是“数据越多，惯性越大”。`, `The recommender takes about ${mean(relearn).toFixed(0)} rounds to relearn — the bigger the store, the harder the old records are to dilute. That is “more data, more inertia.”`));
      lines.push(mean(rec) >= mean(loc)
        ? `<span class="ok">${T(`整体上推荐系统仍赢（${pct(mean(rec))} vs ${pct(mean(loc))}）：新奇不够频繁时，数据的稳定期优势压过了它的惯性。`, `Overall the recommender still wins (${pct(mean(rec))} vs ${pct(mean(loc))}): when novelty is rare, data's stable-period edge outweighs its inertia.`)}</span>`
        : `<span class="bad">${T(`整体上小店主赢了（${pct(mean(loc))} vs ${pct(mean(rec))}）：世界变得够快时，此时此地的知识胜过海量的过去。`, `Overall the shopkeeper wins (${pct(mean(loc))} vs ${pct(mean(rec))}): when the world changes fast enough, knowledge of the here and now beats a mountain of the past.`)}</span>`);
    }
    lines.push(T("注意两条曲线都不是“计算”：它们都只回答“人们想要什么”，不回答“进这批货值不值”——那一步仍然需要价格（阶段 7.1）。", "Note that neither curve is “calculation”: both only answer “what people want,” not “is stocking this batch worth it” — that step still needs prices (Stage 7.1)."));
    root.querySelector("#dk-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");

    const at = (arr) => (t) => arr[Math.max(0, Math.min(ROUNDS - 1, Math.round(t)))] * 100;
    const res = lineChart({ fns: [{ f: at(rec), cls: "line2" }, { f: at(loc), cls: "line" }], lo: 0, hi: ROUNDS - 1, xlabel: T("轮次（命中率 = 所选品类的需求 ÷ 最优品类的需求）", "round (hit rate = demand for chosen category ÷ demand for the best one)"), forceZero: true, uid: "dk", samples: ROUNDS - 1 });
    // 在图上加突变竖线
    let svg = res.svg;
    const marks = events.map((e) => { const px = 50 + (e / (ROUNDS - 1)) * (560 - 50 - 14); return `<line x1="${px.toFixed(1)}" y1="16" x2="${px.toFixed(1)}" y2="${280 - 32}" stroke="var(--red)" stroke-width="1" stroke-dasharray="3 3"/>`; }).join("");
    svg = svg.replace("</svg>", marks + "</svg>");
    root.querySelector("#dk-chart").innerHTML = chartBlock({ svg }, [["var(--blue)", T("推荐系统（海量历史数据）", "recommender (huge data store)")], ["var(--orange)", T("小店主（此时此地）", "shopkeeper (here and now)")], ["var(--red)", T("口味突变", "taste shift")]]);
  };

  root.querySelector("#dk-mem").addEventListener("input", (e) => { memory = +e.target.value; paint(); });
  root.querySelector("#dk-acu").addEventListener("input", (e) => { acuity = +e.target.value; paint(); });
  root.querySelector("#dk-ev").addEventListener("input", (e) => { every = +e.target.value; paint(); });
  paint();
}
