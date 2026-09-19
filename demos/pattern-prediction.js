// 交互演示：模式预测——100 个随机租客、50 个随机房东，每一轮所有人的评价重新随机；
// 拖动限价，跑 20 轮：每轮的市场价、成交者、短缺数量都不同，但只要限价低于市价，“短缺 > 0”一次不缺席。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const NB = 100, NS = 50;           // 租客数、房东数
  const ROUNDS = 20;
  let ceiling = 1000;
  let rounds = [];                    // 每轮结果
  const rnd = (a, b) => a + Math.random() * (b - a);

  // 一轮：重新随机所有人的评价，算市场价与限价下的短缺
  const runRound = (k) => {
    const buyers = Array.from({ length: NB }, () => Math.round(rnd(500, 3000)));   // 最高愿付
    const sellers = Array.from({ length: NS }, () => Math.round(rnd(800, 2500)));  // 最低要价
    const Qd = (p) => buyers.filter((v) => v >= p).length;
    const Qs = (p) => sellers.filter((c) => c <= p).length;
    // 市场价：使 |Qd - Qs| 最小的价格（步长 10）
    let best = 500, gap = Infinity;
    for (let p = 500; p <= 3000; p += 10) { const g = Math.abs(Qd(p) - Qs(p)); if (g < gap) { gap = g; best = p; } }
    const pStar = best, qStar = Math.min(Qd(pStar), Qs(pStar));
    const binding = ceiling < pStar;
    const pEff = binding ? ceiling : pStar;
    const qd = Qd(pEff), qs = Qs(pEff);
    const shortage = binding ? Math.max(0, qd - qs) : 0;
    // “谁成交了”：随机挑 qs 个愿租者（限价下的非价格配给）——每轮不同
    const eligible = buyers.map((v, i) => [v, i]).filter(([v]) => v >= pEff).map(([, i]) => i);
    const lucky = eligible.slice().sort(() => Math.random() - 0.5).slice(0, Math.min(qs, eligible.length)).sort((a, b) => a - b);
    return { k, buyers, sellers, Qd, Qs, pStar, qStar, binding, pEff, qd, qs, shortage, lucky };
  };
  const runAll = () => { rounds = Array.from({ length: ROUNDS }, (_, k) => runRound(k + 1)); paint(); };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🎯 模式预测：随机的人，不变的短缺", "🎯 Pattern prediction: random people, invariant shortage")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("租金上限（限价）：", "Rent ceiling: ")}<b id="pp-c">${ceiling}</b> ${T("元/月 —— 拖到市场价以上就不再有约束力", "$/month — drag above the market price and it stops binding")}</label>
        <input class="demo-slider" type="range" min="500" max="3000" step="50" value="${ceiling}" id="pp-slider" />
        <div class="demo-btns"><button class="demo-btn" id="pp-run">${T("🎲 重新随机所有人，再跑 20 轮", "🎲 Re-randomize everyone, run 20 rounds again")}</button></div>
      </div>
      <div class="demo-block">
        <div class="stat-row" id="pp-stats"></div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("20 轮结果（红 = 出现短缺，绿 = 无短缺）；下面是每轮的市场价与短缺数——注意数字每轮都不同", "20 rounds (red = shortage, green = none); below, each round's market price and shortage — notice the numbers differ every round")}</label>
        <div class="strip" id="pp-strip"></div>
        <div class="demo-log" id="pp-rounds" style="font-family:var(--mono);font-size:12.5px"></div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("最后一轮的需求与供给（横轴：租金；纵轴：人数）", "Demand and supply in the last round (x: rent; y: number of people)")}</label>
        <div id="pp-chart"></div>
        <div class="demo-log" id="pp-last"></div>
      </div>
      <p class="demo-tip">${T(
        "看三件事：① 每一轮的市场价、成交名单、短缺数量都不一样——因为每个人的评价都是随机重抽的；② 只要限价低于市场价，<strong>20 轮里 20 轮出现短缺</strong>，一次不落——这是“模式预测”，它不依赖任何具体的人；③ 把限价拖到市场价以上，短缺立即消失——定律是条件式的：“<strong>如果</strong>限价低于市价，<strong>那么</strong>短缺”。",
        "Watch three things: ① each round's market price, list of who gets a flat, and size of shortage all differ — every valuation is re-drawn at random; ② as long as the ceiling is below the market price, <strong>20 rounds out of 20 show a shortage</strong>, never once missing — that is a pattern prediction, independent of any particular person; ③ drag the ceiling above the market price and the shortage vanishes at once — the law is conditional: “<strong>if</strong> the ceiling is below the market price, <strong>then</strong> a shortage.”"
      )}</p>
    </div>`;

  const $ = (s) => root.querySelector(s);

  function paint() {
    $("#pp-c").textContent = ceiling;
    const nShort = rounds.filter((r) => r.shortage > 0).length;
    const nBind = rounds.filter((r) => r.binding).length;
    const shorts = rounds.map((r) => r.shortage);
    const avg = shorts.reduce((a, b) => a + b, 0) / rounds.length;
    const pmin = Math.min(...rounds.map((r) => r.pStar)), pmax = Math.max(...rounds.map((r) => r.pStar));
    $("#pp-stats").innerHTML = `
      <div class="stat"><div class="k">${T("出现短缺的轮数", "Rounds with a shortage")}</div><div class="v ${nShort > 0 ? "neg" : "pos"}">${nShort} / ${rounds.length}</div></div>
      <div class="stat"><div class="k">${T("限价有约束力的轮数", "Rounds where ceiling binds")}</div><div class="v">${nBind} / ${rounds.length}</div></div>
      <div class="stat"><div class="k">${T("市场价范围", "Market-price range")}</div><div class="v acc" style="font-size:15px">${pmin}–${pmax}</div></div>
      <div class="stat"><div class="k">${T("短缺：最小 / 平均 / 最大", "Shortage: min / avg / max")}</div><div class="v" style="font-size:15px">${Math.min(...shorts)} / ${avg.toFixed(1)} / ${Math.max(...shorts)}</div></div>`;
    $("#pp-strip").innerHTML = rounds.map((r) => `<div class="strip-cell ${r.shortage > 0 ? "lose" : "win"}" title="${T("第", "Round ")}${r.k}${T("轮", "")}: ${r.shortage}" style="width:22px;height:22px"></div>`).join("");
    $("#pp-rounds").innerHTML = rounds.map((r) =>
      `<div>${T("第", "R")}${String(r.k).padStart(2, " ")}${T("轮", "")}: ${T("市场价", "p*")} ${r.pStar} · ${T("均衡量", "q*")} ${r.qStar} · ${r.binding ? `${T("限价下 想租", "at ceiling: want")} ${r.qd} / ${T("愿出租", "offered")} ${r.qs} → <span class="bad">${T("短缺", "shortage")} ${r.shortage}</span>` : `<span class="ok">${T("限价高于市价，无约束，无短缺", "ceiling above p*: not binding, no shortage")}</span>`}</div>`
    ).join("");
    const last = rounds[rounds.length - 1];
    const res = lineChart({
      fns: [{ f: (p) => last.Qd(p), cls: "line2" }, { f: (p) => last.Qs(p), cls: "line" }],
      lo: 500, hi: 3000, xlabel: T("租金（元/月）", "Rent ($/month)"), markerX: ceiling, markerLabel: T("限价", "ceiling"), forceZero: true, samples: 250, uid: "pp",
    });
    $("#pp-chart").innerHTML = chartBlock(res, [["var(--blue)", T("想租的人数 Qd(p)", "People wanting to rent, Qd(p)")], ["var(--orange)", T("愿出租的房东数 Qs(p)", "Landlords willing to let, Qs(p)")]]);
    const luckyTxt = last.lucky.length ? last.lucky.slice(0, 12).map((i) => "#" + (i + 1)).join(" ") + (last.lucky.length > 12 ? " …" : "") : T("（无人）", "(nobody)");
    $("#pp-last").innerHTML = `
      <div>${T("这一轮：市场价", "This round: market price")} <b>${last.pStar}</b>，${T("均衡成交", "clearing quantity")} <b>${last.qStar}</b>。${last.binding
        ? T(`限价 ${ceiling} 低于市价 → 想租 ${last.qd} 人，只有 ${last.qs} 个房东愿出租 → <span class="bad">短缺 ${last.shortage} 套</span>。价格不能涨来筛人，于是靠运气/关系/排队来配给。`, `Ceiling ${ceiling} is below p* → ${last.qd} want to rent, only ${last.qs} landlords will let → <span class="bad">shortage of ${last.shortage}</span>. The price may not rise to sort people, so luck, connections and queues ration instead.`)
        : T(`限价 ${ceiling} 高于市价 → 没有约束力，市场照常在 ${last.pStar} 出清，<span class="ok">无短缺</span>。`, `Ceiling ${ceiling} is above p* → not binding; the market clears at ${last.pStar} as usual, <span class="ok">no shortage</span>.`)}</div>
      <div style="color:var(--muted)">${T("这一轮“幸运”租到房的租客编号（每轮不同）：", "Tenants who got a flat this round (different every round): ")}${luckyTxt}</div>
      <div style="color:var(--muted)">${T("个人层面：谁租到、市价多少、短缺几套——全是历史，每轮重抽就变。模式层面：限价 < 市价 ⇒ 短缺——这是理论，重抽一万轮也不变。", "Individual level: who got a flat, what p* was, how big the shortage — all history, changing with every redraw. Pattern level: ceiling < p* ⇒ shortage — that is theory, unchanged after ten thousand redraws.")}</div>`;
  }

  $("#pp-slider").addEventListener("input", (e) => {
    ceiling = +e.target.value;
    // 限价变了，用同一批人重算（不重抽），这样能看到“同一群人，只改限价”的效果
    rounds = rounds.map((r) => {
      const binding = ceiling < r.pStar, pEff = binding ? ceiling : r.pStar;
      const qd = r.Qd(pEff), qs = r.Qs(pEff), shortage = binding ? Math.max(0, qd - qs) : 0;
      const eligible = r.buyers.map((v, i) => [v, i]).filter(([v]) => v >= pEff).map(([, i]) => i);
      const lucky = eligible.slice().sort(() => Math.random() - 0.5).slice(0, Math.min(qs, eligible.length)).sort((a, b) => a - b);
      return { ...r, binding, pEff, qd, qs, shortage, lucky };
    });
    paint();
  });
  $("#pp-run").addEventListener("click", runAll);
  runAll();
}
