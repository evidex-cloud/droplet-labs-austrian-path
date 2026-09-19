// 交互演示：信息流沙盘——一群口味各异的用户，四种排序规则（时间线 / 互动 / 多样性加权 / 用户自选）并行演化；
// 每轮给每人推 5 条，用户按“相似 + 煽动”停下来（事中行动），再按“质量 − 煽动”打反思分；
// 反身性滑块让用户的立场向他们停下来的内容漂移。读出互动、多样性、极化指数，看“没有一条规则是中性的”。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const N = 120, K = 5, PER = 5, POOL = 80;
  const RULES = [
    { id: "chrono", name: T("时间线", "Chronological"), desc: T("按发布时间倒序，不看用户", "Newest first, ignores the user") },
    { id: "engage", name: T("互动排序", "Engagement"), desc: T("预测“会停下来”，煽动加分", "Predicts “will stop,” outrage scores") },
    { id: "divers", name: T("多样性加权", "Diversity-weighted"), desc: T("相似但压煽动、强制话题覆盖", "Similar but damps outrage, forces topic spread") },
    { id: "user", name: T("用户自选", "User-picked"), desc: T("每个用户按自己的反思倾向挑规则", "Each user picks a rule by their own reflectiveness") },
  ];
  const topics = [T("科学", "science"), T("政治", "politics"), T("娱乐", "fun"), T("手艺", "crafts"), T("财经", "money")];

  let seed = 11;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  let drift = 0.10;      // 反身性：立场向停下来的内容漂移的速率
  let outrageShare = 0.3; // 内容池里煽动内容的比例
  let sel = "engage";
  let round = 0;
  let pops = {}, hist = {};

  const makePop = () => Array.from({ length: N }, () => ({
    x: clamp((rnd() + rnd() + rnd()) / 1.5 - 1, -1, 1),  // 立场，钟形分布在 0 附近
    topic: Math.floor(rnd() * K),
    refl: rnd(),                                          // 反思倾向：决定“用户自选”时挑哪条规则
  }));
  const reset = () => {
    seed = 11;
    const base = makePop();
    pops = {}; hist = {};
    for (const r of RULES) { pops[r.id] = base.map((u) => ({ ...u })); hist[r.id] = { eng: [], var: [], pol: [], sat: [] }; }
    round = 0;
  };

  const makePool = () => Array.from({ length: POOL }, () => {
    const out = rnd() < outrageShare;
    const o = out ? 0.6 + 0.4 * rnd() : 0.15 * rnd();
    // 煽动内容的立场更极端
    const s = out ? (rnd() < 0.5 ? -1 : 1) * (0.6 + 0.4 * rnd()) : clamp((rnd() + rnd()) - 1, -1, 1);
    return { s, o, topic: Math.floor(rnd() * K), q: 0.3 + 0.7 * rnd(), t: rnd() };
  });

  const sim = (u, it) => (1 - Math.abs(u.x - it.s) / 2) * 0.7 + (u.topic === it.topic ? 0.3 : 0);
  const pEngage = (u, it) => 1 / (1 + Math.exp(-(3 * sim(u, it) + 1.8 * it.o - 2.2)));

  function pick(rule, u, pool) {
    if (rule === "chrono") return [...pool].sort((a, b) => b.t - a.t).slice(0, PER);
    if (rule === "engage") return [...pool].sort((a, b) => pEngage(u, b) - pEngage(u, a)).slice(0, PER);
    if (rule === "divers") {
      const chosen = [], used = new Set();
      const scored = [...pool].map((it) => ({ it, sc: sim(u, it) - 0.8 * it.o + 0.3 * it.q })).sort((a, b) => b.sc - a.sc);
      for (const { it } of scored) { if (chosen.length >= PER) break; if (used.has(it.topic) && chosen.length < K) continue; chosen.push(it); used.add(it.topic); }
      for (const { it } of scored) { if (chosen.length >= PER) break; if (!chosen.includes(it)) chosen.push(it); }
      return chosen;
    }
    // user-picked：反思倾向高的挑多样性，中等挑时间线，低的挑互动
    return pick(u.refl > 0.6 ? "divers" : u.refl > 0.3 ? "chrono" : "engage", u, pool);
  }

  function step() {
    const pool = makePool();
    for (const r of RULES) {
      const pop = pops[r.id];
      let eng = 0, varSum = 0, sat = 0;
      for (const u of pop) {
        const items = pick(r.id, u, pool);
        const seen = new Set(); let meanS = 0, n = 0;
        for (const it of items) {
          if (rnd() < pEngage(u, it)) {
            eng++; n++; meanS += it.s; seen.add(it.topic);
            sat += it.q - 0.6 * it.o + (u.topic === it.topic ? 0.2 : 0);   // 反思评分：质量减煽动
          }
        }
        varSum += seen.size;
        if (n > 0) u.x = clamp(u.x + drift * (meanS / n - u.x), -1, 1);    // 反身性：立场漂移
      }
      const pol = pop.reduce((s, u) => s + Math.abs(u.x), 0) / N;
      hist[r.id].eng.push(eng / N); hist[r.id].var.push(varSum / N); hist[r.id].pol.push(pol); hist[r.id].sat.push(sat / Math.max(1, eng));
    }
    round++;
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("📡 信息流沙盘：四种排序规则并行，没有一条是中性的", "📡 Feed sandbox: four ranking rules side by side — none is neutral")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("反身性（立场向停下来的内容漂移）：", "Reflexivity (stance drifts toward what you stop for): ")}<b id="fs-dv">0.10</b></label>
          <input class="demo-slider" id="fs-drift" type="range" min="0" max="0.3" step="0.01" value="0.1" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("内容池里煽动内容的比例：", "Share of outrage content in the pool: ")}<b id="fs-ov">30%</b></label>
          <input class="demo-slider" id="fs-out" type="range" min="0" max="0.7" step="0.05" value="0.3" />
        </div>
      </div>
      <div class="demo-row">
        <div class="demo-seg" id="fs-rule">${RULES.map((r) => `<button class="${r.id === sel ? "on" : ""}" data-r="${r.id}">${r.name}</button>`).join("")}</div>
        <div class="demo-btns" style="margin:0">
          <button class="demo-btn" id="fs-run1">${T("跑 1 轮", "Run 1 round")}</button>
          <button class="demo-btn" id="fs-run10">${T("跑 10 轮", "Run 10 rounds")}</button>
          <button class="demo-btn" id="fs-reset">${T("重置人群", "Reset population")}</button>
        </div>
      </div>
      <div class="demo-meta" id="fs-desc"></div>
      <div id="fs-chart"></div>
      <div class="demo-block">
        <div class="demo-label">${T("第 N 轮各规则的读数（同一批人、同一内容池、同一随机种子）", "Readouts by rule after round N (same people, same pool, same random seed)")}</div>
        <div class="cmp" id="fs-cmp"></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="fs-log"></div></div>
      <p class="demo-tip">${T(
        "先跑 10 轮，比较四格：<strong>互动排序</strong>的停留最高、反思分最低、极化最快——它发现的是“会停下来”，不是“值得看”；<strong>时间线</strong>不看人，多样性靠运气，煽动内容照样进；<strong>多样性加权</strong>是另一种设计，不是“不干预”。把反身性拉到 0，极化不再增长——极化不是排序规则单独造成的，是规则 × 漂移的乘积；把它拉到 0.3，再看用户自选：让人挑规则会改变结果，但不会消除差异。",
        "Run 10 rounds and compare the four cells: <strong>engagement</strong> has the highest dwell, the lowest reflective score and the fastest polarization — it discovers “will stop,” not “worth watching”; <strong>chronological</strong> ignores the person, so variety is luck and outrage gets in anyway; <strong>diversity-weighted</strong> is another design, not “non-intervention.” Drag reflexivity to 0 and polarization stops growing — it is not the rule alone but rule × drift; drag it to 0.3 and watch user-picked: letting people choose rules changes outcomes without erasing the differences."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const fmt = (v) => (isFinite(v) ? v.toFixed(2) : "–");

  const paint = () => {
    $("fs-dv").textContent = drift.toFixed(2);
    $("fs-ov").textContent = Math.round(outrageShare * 100) + "%";
    const r = RULES.find((x) => x.id === sel);
    $("fs-desc").textContent = r.name + " · " + r.desc + T(" · 第 ", " · round ") + round + T(" 轮", "");

    const h = hist[sel];
    if (round >= 2) {
      const fE = (x) => h.eng[Math.min(h.eng.length - 1, Math.max(0, Math.round(x)))] / PER;
      const fP = (x) => h.pol[Math.min(h.pol.length - 1, Math.max(0, Math.round(x)))];
      const fS = (x) => h.sat[Math.min(h.sat.length - 1, Math.max(0, Math.round(x)))];
      const res = lineChart({ fns: [{ f: fE, cls: "line" }, { f: fP, cls: "line3" }, { f: fS, cls: "line4" }], lo: 0, hi: round - 1, samples: Math.max(2, round - 1), xlabel: T("轮次", "round"), forceZero: true, uid: "fs" + sel, H: 220 });
      $("fs-chart").innerHTML = chartBlock(res, [["var(--orange)", T("停留率（每 5 条停几条 / 5）", "engagement rate (stopped / 5)")], ["var(--red)", T("极化指数（平均 |立场|）", "polarization (mean |stance|)")], ["var(--green)", T("反思分（停下来的内容的质量 − 煽动）", "reflective score (quality − outrage of what you stopped for)")]]);
    } else {
      $("fs-chart").innerHTML = `<div class="demo-meta">${T("跑几轮后这里画曲线。", "Curves appear after a few rounds.")}</div>`;
    }

    $("fs-cmp").innerHTML = RULES.map((x) => {
      const hh = hist[x.id], last = hh.eng.length - 1;
      const eng = last >= 0 ? hh.eng[last] / PER : NaN, va = last >= 0 ? hh.var[last] / Math.min(K, PER) : NaN, pol = last >= 0 ? hh.pol[last] : NaN, sat = last >= 0 ? hh.sat[last] : NaN;
      const pol0 = hh.pol.length ? hh.pol[0] : NaN;
      return `<div class="cmp-cell ${x.id === sel ? "hl" : ""}">
        <h5>${x.name}</h5>
        <div class="demo-row" style="margin:4px 0"><span>${T("停留率", "Engagement")}</span><b>${fmt(eng)}</b></div>
        <div class="demo-row" style="margin:4px 0"><span>${T("多样性", "Variety")}</span><b>${fmt(va)}</b></div>
        <div class="demo-row" style="margin:4px 0"><span>${T("极化", "Polarization")}</span><b style="color:${pol > pol0 + 0.03 ? "var(--red)" : pol < pol0 - 0.03 ? "var(--green)" : "inherit"}">${fmt(pol)}</b></div>
        <div class="demo-row" style="margin:4px 0"><span>${T("反思分", "Reflective")}</span><b>${fmt(sat)}</b></div>
      </div>`;
    }).join("");

    const lines = [];
    if (round === 0) lines.push(T("点“跑 10 轮”。四个人群从同一个初始状态出发，只有排序规则不同。", "Click “Run 10 rounds.” Four populations start from the same state; only the ranking rule differs."));
    else {
      const last = round - 1;
      const byEng = [...RULES].sort((a, b) => hist[b.id].eng[last] - hist[a.id].eng[last]);
      const bySat = [...RULES].sort((a, b) => hist[b.id].sat[last] - hist[a.id].sat[last]);
      const byPol = [...RULES].sort((a, b) => hist[b.id].pol[last] - hist[a.id].pol[last]);
      lines.push(`${T("停留率最高：", "Highest engagement: ")}<b>${byEng[0].name}</b>${T("；反思分最高：", "; highest reflective score: ")}<b>${bySat[0].name}</b>${byEng[0].id !== bySat[0].id ? ` → <span class="warn">${T("两者不是同一条规则：“会停下来”≠“值得看”。", "not the same rule: “will stop” ≠ “worth watching.”")}</span>` : ""}`);
      const p0 = hist[byPol[0].id].pol[0], p1 = hist[byPol[0].id].pol[last];
      lines.push(`${T("极化最高：", "Most polarized: ")}<b>${byPol[0].name}</b> (${fmt(p0)} → ${fmt(p1)})${drift === 0 ? `<span class="ok"> ${T("反身性为 0，立场不动——极化没有增长，规则只改变了人看到什么。", "reflexivity 0, stances fixed — polarization did not grow; the rule only changed what people saw.")}</span>` : p1 > p0 + 0.05 ? `<span class="bad"> ${T("规则 × 漂移：互动排序偏爱煽动，煽动内容立场更极端，人向它漂。", "rule × drift: engagement favors outrage, outrage is more extreme, people drift toward it.")}</span>` : ""}`);
      const chronoPol = hist.chrono.pol[last], divPol = hist.divers.pol[last];
      if (divPol < chronoPol - 0.03) lines.push(`${T("多样性加权把极化压到了时间线之下——它不是“中性”，它是朝另一个方向的设计。", "Diversity-weighting pushed polarization below chronological — not “neutral,” a design pointing the other way.")}`);
      lines.push(`${T("用户自选：", "User-picked: ")}${T("停留", "engagement")} ${fmt(hist.user.eng[last] / PER)}，${T("反思分", "reflective")} ${fmt(hist.user.sat[last])}，${T("极化", "polarization")} ${fmt(hist.user.pol[last])} —— ${T("介于各规则之间：让人挑规则改变了结果，但不让任何一条规则消失。这是阶段 6.2 发现程序再往上一层。", "in between: letting people pick rules changes the outcome without making any rule disappear. That is Stage 6.2's discovery procedure one level up.")}`);
    }
    $("fs-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("fs-drift").addEventListener("input", (e) => { drift = +e.target.value; paint(); });
  $("fs-out").addEventListener("input", (e) => { outrageShare = +e.target.value; paint(); });
  $("fs-rule").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
    sel = b.dataset.r;
    $("fs-rule").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    paint();
  }));
  $("fs-run1").addEventListener("click", () => { step(); paint(); });
  $("fs-run10").addEventListener("click", () => { for (let i = 0; i < 10; i++) step(); paint(); });
  $("fs-reset").addEventListener("click", () => { reset(); paint(); });
  reset();
  paint();
}
