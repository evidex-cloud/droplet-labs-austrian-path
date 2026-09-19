// 交互演示：锡的冲击——六个用锡行业，各有自己的替代方案。供给突然减少，
// 每个行业只看到锡价和自己的选择；一轮轮看调整如何在各行业间扩散，而没有人知道原因。
// 切换“带调查问卷的中央计划者”：它按上一轮的问卷分配，永远慢一拍，还把锡分给了本该放弃的用途。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 行业：q = 满负荷用锡量（千吨），r = 保留价（千元/吨）——价格超过 1.2r 完全退出，低于 0.8r 满负荷
  const sectors = [
    { id: "solder", name: T("电子焊料", "Electronic solder"), icon: "🔌", q: 90, r: 40, alt: T("无替代，只能付更高价", "no substitute — pays up") },
    { id: "chem", name: T("化工稳定剂", "Chemical stabilizers"), icon: "🧪", q: 30, r: 32, alt: T("改用有机锌配方", "switch to zinc-based formula") },
    { id: "plating", name: T("电镀", "Plating"), icon: "✨", q: 20, r: 28, alt: T("镀镍替代", "nickel plating") },
    { id: "cans", name: T("马口铁罐头", "Tinplate cans"), icon: "🥫", q: 100, r: 26, alt: T("改铝罐", "aluminum cans") },
    { id: "bearing", name: T("锡合金轴承", "Tin-alloy bearings"), icon: "⚙️", q: 40, r: 23, alt: T("换替代合金", "alternative alloy") },
    { id: "pewter", name: T("锡器工艺品", "Pewter crafts"), icon: "🏺", q: 20, r: 21, alt: T("减产", "cut output") },
  ];
  const P0 = 20, S0 = 300; // 初始价格（千元/吨）与基准供给（千吨）

  const demandOf = (s, p) => {
    const lo = 0.8 * s.r, hi = 1.2 * s.r;
    if (p <= lo) return s.q;
    if (p >= hi) return 0;
    return s.q * (hi - p) / (hi - lo);
  };
  const totalDemand = (p) => sectors.reduce((a, s) => a + demandOf(s, p), 0);
  const supplyOf = (p, shock) => S0 * (1 - shock) * Math.pow(p / P0, 0.3); // 短期供给缺乏弹性，价高时低品位矿开工

  // 价值代理：每吨锡在某行业的“价值”≈ 该行业的保留价（简化）
  const valueDelivered = (alloc) => sectors.reduce((a, s) => a + (alloc[s.id] || 0) * s.r, 0);
  // 给定供给 S，市场把锡分给保留价最高的用途：找到出清价，各行业按需求函数取用
  const clearingPrice = (shock) => {
    let lo = 5, hi = 80;
    for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (totalDemand(m) > supplyOf(m, shock)) lo = m; else hi = m; }
    return (lo + hi) / 2;
  };

  let mode = "market"; // market | planner
  let round = 0, shock = 0, cause = null, revealed = false;
  let price = clearingPrice(0);
  let hist = [];
  let prevAlloc = null, prevSupply = null; // 计划者的“上一轮问卷”
  let lastLog = [];

  const stepMarket = () => {
    const D = totalDemand(price), S = supplyOf(price, shock);
    // 摸索调整：价格按超额需求比例变动（阻尼）
    const next = price * (1 + 0.6 * (D - S) / S);
    price = Math.max(5, Math.min(80, next));
    const alloc = {}; sectors.forEach((s) => (alloc[s.id] = demandOf(s, price)));
    const D2 = totalDemand(price), S2 = supplyOf(price, shock);
    return { alloc, D: D2, S: S2, gap: D2 - S2, price };
  };
  const stepPlanner = () => {
    // 官方价固定在 P0；各行业按官方价“申报需求”（满负荷）；计划者按上一轮问卷与上一轮供给分配
    const reported = {}; sectors.forEach((s) => (reported[s.id] = demandOf(s, P0)));
    const S = supplyOf(P0, shock);
    const basisAlloc = prevAlloc || reported, basisS = prevSupply == null ? S : prevSupply;
    const need = sectors.reduce((a, s) => a + basisAlloc[s.id], 0);
    const ratio = Math.min(1, basisS / need);
    let promised = {}; sectors.forEach((s) => (promised[s.id] = basisAlloc[s.id] * ratio));
    // 承诺量 vs 实际供给：多出的部分“交付失败”（按行业顺序排在后面的先断供）
    const totalPromised = sectors.reduce((a, s) => a + promised[s.id], 0);
    let short = Math.max(0, totalPromised - S);
    const alloc = { ...promised };
    for (let i = sectors.length - 1; i >= 0 && short > 0; i--) { const s = sectors[i]; const cut = Math.min(alloc[s.id], short); alloc[s.id] -= cut; short -= cut; }
    prevAlloc = reported; prevSupply = S;
    return { alloc, D: need, S, gap: totalPromised - S, price: P0 };
  };

  const doRound = () => {
    round++;
    const r = mode === "market" ? stepMarket() : stepPlanner();
    const marketBest = (() => { const p = clearingPrice(shock); const a = {}; sectors.forEach((s) => (a[s.id] = demandOf(s, p))); return valueDelivered(a); })();
    const v = valueDelivered(r.alloc);
    hist.push({ round, price: r.price, D: r.D, S: r.S, gap: r.gap, value: v, best: marketBest, alloc: r.alloc, shock });
    paint();
  };

  const reset = () => {
    round = 0; shock = 0; cause = null; revealed = false; price = clearingPrice(0); hist = []; prevAlloc = null; prevSupply = null;
    // 先让市场热身到均衡
    for (let i = 0; i < 6; i++) doRound();
    hist = hist.slice(-1); hist[0].round = 0; round = 0;
    paint();
  };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("📡 锡的冲击：一部谁都不用懂的电讯系统", "📡 The tin shock: a telecommunications system nobody needs to understand")}</div>
      <div class="demo-row">
        <div class="demo-seg" id="ts-seg">
          <button data-m="market" class="on">${T("市场：每人只看价格", "Market: each sees only the price")}</button>
          <button data-m="planner">${T("计划者：靠问卷分配（慢一轮）", "Planner: survey-based (one round late)")}</button>
        </div>
        <div class="demo-btns" style="margin:0">
          <button class="demo-btn" id="ts-next">${T("▶ 下一轮", "▶ Next round")}</button>
          <button class="demo-btn" id="ts-shock">${T("💥 供给冲击 −20%", "💥 Supply shock −20%")}</button>
          <button class="demo-btn" id="ts-recover">${T("🔧 供给恢复", "🔧 Supply recovers")}</button>
          <button class="demo-btn" id="ts-reset">${T("↺ 重置", "↺ Reset")}</button>
        </div>
      </div>
      <div class="stat-row" id="ts-stats"></div>
      <div class="demo-grid" style="margin-top:12px">
        <div class="demo-block" style="margin:0">
          <label class="demo-label">${T("各行业本轮用锡（千吨）与反应", "Tin used this round (kt) and each sector's response")}</label>
          <div class="stages" id="ts-sectors"></div>
        </div>
        <div class="demo-block" style="margin:0">
          <label class="demo-label">${T("锡价（千元/吨）随轮次", "Tin price (k per ton) by round")}</label>
          <div id="ts-chart"></div>
          <div class="demo-log" id="ts-log" style="margin-top:8px"></div>
        </div>
      </div>
      <div class="demo-row" id="ts-cause-row" hidden>
        <span class="demo-meta" id="ts-cause"></span>
        <button class="demo-btn" id="ts-reveal">${T("🔍 发生了什么？（没有人需要知道）", "🔍 What happened? (nobody needed to know)")}</button>
      </div>
      <p class="demo-tip">${T(
        "点“供给冲击”后连按几轮“下一轮”：锡价上升，锡器工艺品先退出，轴承换合金，罐头改铝罐，焊料付更高价继续买——<strong>没有一个行业知道原因</strong>，它们只看到价格。再切到“计划者”：官方价不动，问卷总是上一轮的，第一轮有人拿不到货，之后按比例配给——工艺品和焊料被砍得一样多，<strong>“交付价值”始终低于市场</strong>。",
        "Click “Supply shock,” then “Next round” several times: the price rises, pewter drops out first, bearings switch alloys, canners move to aluminum, solder pays up and keeps buying — <strong>no sector knows why</strong>; each sees only the price. Now switch to “Planner”: the official price stays put, the survey is always last round's, someone gets nothing in the first round, and afterwards rationing is pro rata — crafts and solder are cut alike, and <strong>“value delivered” stays below the market's</strong>."
      )}</p>
    </div>`;

  const fmt1 = (v) => (Math.round(v * 10) / 10).toString();

  const paint = () => {
    root.querySelectorAll("#ts-seg button").forEach((b) => b.classList.toggle("on", b.dataset.m === mode));
    const h = hist[hist.length - 1];
    if (!h) return;
    const eff = h.best > 0 ? (h.value / h.best) * 100 : 100;
    root.querySelector("#ts-stats").innerHTML = `
      <div class="stat"><div class="k">${T("轮次", "Round")}</div><div class="v">${h.round}</div></div>
      <div class="stat"><div class="k">${T("锡价", "Tin price")}</div><div class="v acc">${fmt1(h.price)}</div></div>
      <div class="stat"><div class="k">${T("供给 (kt)", "Supply (kt)")}</div><div class="v">${fmt1(h.S)}</div></div>
      <div class="stat"><div class="k">${mode === "market" ? T("超额需求", "Excess demand") : T("短缺（承诺−实供）", "Shortage (promised − real)")}</div><div class="v ${Math.abs(h.gap) < 3 ? "pos" : "neg"}">${fmt1(h.gap)}</div></div>
      <div class="stat"><div class="k">${T("交付价值 / 市场最优", "Value delivered / market best")}</div><div class="v ${eff > 97 ? "pos" : eff > 85 ? "acc" : "neg"}">${eff.toFixed(0)}%</div></div>`;

    root.querySelector("#ts-sectors").innerHTML = sectors.map((s) => {
      const a = h.alloc[s.id] || 0, share = a / s.q;
      let status;
      if (mode === "market") {
        status = share > 0.98 ? (h.price > 0.8 * s.r ? T("付更高价继续买", "pays up, keeps buying") : T("照常", "as usual"))
          : share > 0.02 ? T("部分转向：", "partly →") + " " + s.alt : T("退出：", "exit →") + " " + s.alt;
      } else {
        status = share > 0.98 ? T("按申报全额拿到", "gets full reported need") : share > 0.02 ? T("按比例配给", "rationed pro rata") : T("本轮没拿到货", "got nothing this round");
      }
      const color = share > 0.98 ? "var(--green)" : share > 0.02 ? "var(--orange)" : "var(--red)";
      return `<div class="stage-bar">
        <span class="lab" style="width:150px">${s.icon} ${s.name}<br><span style="font-size:11px;color:var(--muted)">${T("保留价", "reservation")} ${s.r}</span></span>
        <div class="track"><div class="fill" style="width:${(share * 100).toFixed(0)}%;background:${color}"></div></div>
        <span class="val" style="width:150px;text-align:left;font-size:11.5px">${fmt1(a)} · ${status}</span>
      </div>`;
    }).join("");

    const n = hist.length;
    const res = lineChart({
      fns: [{ f: (x) => { const i = Math.max(0, Math.min(n - 1, Math.round(x))); return hist[i].price; }, cls: "line" }],
      lo: 0, hi: Math.max(8, n - 1), samples: Math.max(8, (n - 1) * 4), xlabel: T("轮次", "round"), forceZero: true, uid: "ts",
    });
    root.querySelector("#ts-chart").innerHTML = chartBlock(res, [["var(--orange)", T("锡价", "tin price")]]);

    root.querySelector("#ts-cause-row").hidden = !cause;
    root.querySelector("#ts-cause").textContent = revealed
      ? (cause === "mine" ? T("原因：一座大矿塌了。", "Cause: a major mine collapsed.") : T("原因：一种新电池工艺突然需要大量的锡。", "Cause: a new battery process suddenly needs a lot of tin."))
        + " " + T("注意：无论哪种原因，各行业的反应完全一样——它们收到的是同一个数字。", "Note: whichever the cause, every sector reacted identically — they received the same number.")
      : T("供给变紧了。各行业只看到价格。", "Supply tightened. Sectors see only the price.");

    const lines = [];
    if (mode === "market") {
      if (Math.abs(h.gap) < 3) lines.push(`<span class="ok">${T("市场在新价格上出清：锡流向了保留价最高的用途。", "Market clears at the new price: tin flows to the highest-valued uses.")}</span>`);
      else lines.push(`<span class="warn">${T("还在摸索：价格朝超额需求的方向调整，各行业据此各自决定。", "Still groping: price moves with excess demand, and each sector decides for itself.")}</span>`);
      lines.push(T("每个行业需要的信息：<b>锡价 + 自己的替代方案</b>。仅此而已。", "What each sector needs to know: <b>the tin price + its own alternatives</b>. Nothing else."));
    } else {
      if (h.gap > 3) lines.push(`<span class="bad">${T(`承诺了 ${fmt1(h.D)} 千吨的申报需求按上一轮供给分配，实际只有 ${fmt1(h.S)}：排在后面的行业断供。`, `Allocation was based on last round's survey and supply; real supply is ${fmt1(h.S)} kt — sectors at the end of the queue get nothing.`)}</span>`);
      else lines.push(`<span class="warn">${T("计划者追上了上一轮的数字——但配给是按申报比例，不看谁更需要。", "The planner has caught up with last round's numbers — but rations by reported share, not by who needs it most.")}</span>`);
      lines.push(T(`交付价值只有市场最优的 ${eff.toFixed(0)}%：工艺品拿到了它本该放弃的锡，焊料却被砍了同样的比例。`, `Value delivered is ${eff.toFixed(0)}% of the market's best: crafts got tin they would have given up, while solder was cut by the same share.`));
    }
    root.querySelector("#ts-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelectorAll("#ts-seg button").forEach((b) => b.addEventListener("click", () => { mode = b.dataset.m; prevAlloc = null; prevSupply = null; if (mode === "market") price = hist.length ? Math.max(price, P0) : P0; doRound(); }));
  root.querySelector("#ts-next").addEventListener("click", doRound);
  root.querySelector("#ts-shock").addEventListener("click", () => { shock = Math.min(0.6, shock + 0.2); cause = cause || (Math.random() < 0.5 ? "mine" : "battery"); revealed = false; doRound(); });
  root.querySelector("#ts-recover").addEventListener("click", () => { shock = 0; doRound(); });
  root.querySelector("#ts-reset").addEventListener("click", reset);
  root.querySelector("#ts-reveal").addEventListener("click", () => { revealed = true; paint(); });
  reset();
}
