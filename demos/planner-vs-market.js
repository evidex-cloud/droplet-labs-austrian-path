// 交互演示：计划者 vs 市场。一个玩具经济：六种产品，消费者偏好逐轮演变。
// “计划者”拥有过去所有数据的完美记录，按（加权的）历史需求分配产能；
// “市场”里有价格与企业家：企业家把产能挪向利润高的产品，猜错的亏钱退出。
// 稳态下两者差不多；注入“新需求”或“新技术”后，计划者继续给旧世界配货，市场先亏后发现。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const names = [T("面包", "Bread"), T("布料", "Cloth"), T("灯具", "Lamps"), T("自行车", "Bicycles"), T("收音机", "Radios"), T("？新产品", "? New product")];
  const icons = ["🍞", "🧵", "💡", "🚲", "📻", "✨"];
  const CAP = 600; // 总产能（单位/轮）

  let round, want, plannerAlloc, marketAlloc, hist, novelWant, novelTech, memory, cumP, cumM, ents;
  const init = () => {
    round = 0; novelWant = false; novelTech = false;
    want = [180, 130, 110, 90, 90, 0]; // 真实需求（单位/轮），第 6 项一开始不存在
    memory = want.slice();               // 计划者的“历史数据库”（指数平滑的历史需求）
    plannerAlloc = want.slice(); marketAlloc = want.slice();
    ents = Array.from({ length: 6 }, (_, i) => ({ cap: want[i], cost: 1 })); // 市场里每个产品线的企业家产能与单位成本
    hist = []; cumP = 0; cumM = 0;
  };
  init();

  const unitCost = (i) => (novelTech && i === 3 ? 0.5 : 1); // 新技术：自行车成本减半（市场里企业家能发现，计划者的历史数据里没有）
  const priceOf = (i, supply) => { // 简化：需求曲线 p = 2·want/supply（需求弹性 1），缺货价高、过剩价低
    if (want[i] <= 0) return 0.2;
    return Math.max(0.2, Math.min(6, 2 * want[i] / Math.max(1, supply)));
  };

  const step = () => {
    round++;
    // 世界演变：偏好慢漂移；新需求：收音机→新产品；新技术：自行车更便宜 → 真实需求上升
    for (let i = 0; i < 5; i++) want[i] = Math.max(20, want[i] * (1 + 0.03 * (Math.random() - 0.5) * 2));
    if (novelWant) { const shift = Math.min(want[4] * 0.25, 25); want[4] -= shift; want[5] += shift * 1.6; want[1] = Math.max(20, want[1] - 4); }
    if (novelTech) want[3] = Math.min(260, want[3] * 1.06);

    // 计划者：按历史数据库分配产能（完美记录，但只有过去）；新产品在数据库里为 0
    const memSum = memory.reduce((a, b) => a + b, 0);
    plannerAlloc = memory.map((m) => (CAP * m) / memSum);
    // 计划者按上报的“需求”更新数据库——上报只有实际卖出量（缺货时看不到未满足的需求）
    const sold = plannerAlloc.map((a, i) => Math.min(a, want[i]));
    memory = memory.map((m, i) => 0.7 * m + 0.3 * sold[i]);
    // 计划者本轮浪费：过剩（造了没人要）+ 短缺（有人要没造）按价值计
    const pWaste = plannerAlloc.reduce((s, a, i) => s + Math.max(0, a - want[i]) * unitCost(i), 0);
    const pShort = want.reduce((s, w, i) => s + Math.max(0, w - plannerAlloc[i]), 0);

    // 市场：企业家看价格与成本，产能向利润高的产品线转移；亏损的线收缩
    const supply = ents.map((e) => e.cap);
    const prices = supply.map((s, i) => priceOf(i, s));
    const profitRate = prices.map((p, i) => p - unitCost(i));
    // 每条线：利润为正就扩产（含新产品线——只要有人试探性生产，价格就会告诉他），亏损就减产
    let total = 0;
    ents.forEach((e, i) => {
      const explore = i === 5 && e.cap < 30 ? 8 : 0; // 企业家的试探：小规模尝试新东西（稳态下这是“发现的成本”）
      e.cap = Math.max(explore, e.cap * (1 + 0.6 * Math.tanh(profitRate[i])) + explore);
      total += e.cap;
    });
    ents.forEach((e) => (e.cap = (e.cap * CAP) / total)); // 总产能守恒
    marketAlloc = ents.map((e) => e.cap);
    const mWaste = marketAlloc.reduce((s, a, i) => s + Math.max(0, a - want[i]) * unitCost(i), 0);
    const mShort = want.reduce((s, w, i) => s + Math.max(0, w - marketAlloc[i]), 0);

    cumP += pWaste + pShort; cumM += mWaste + mShort;
    hist.push({ round, p: pWaste + pShort, m: mWaste + mShort, prices });
    paint();
  };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🖥️ 计划者 vs 市场：过去的完美数据，能不能对付一个会变的世界", "🖥️ Planner vs market: can perfect data about the past cope with a world that changes?")}</div>
      <div class="demo-row">
        <div class="demo-btns" style="margin:0">
          <button class="demo-btn" id="pm-next">${T("▶ 下一轮", "▶ Next round")}</button>
          <button class="demo-btn" id="pm-auto">${T("⏩ 自动跑 12 轮", "⏩ Auto-run 12 rounds")}</button>
          <button class="demo-btn" id="pm-want">${T("✨ 注入新需求", "✨ Inject a new want")}</button>
          <button class="demo-btn" id="pm-tech">${T("🔧 注入新技术", "🔧 Inject a new technology")}</button>
          <button class="demo-btn" id="pm-reset">${T("↺ 重置", "↺ Reset")}</button>
        </div>
      </div>
      <div class="cmp" id="pm-cmp"></div>
      <div class="stat-row" id="pm-stats"></div>
      <div class="demo-block">
        <label class="demo-label">${T("每轮浪费 + 短缺（按价值计）", "Waste + shortage per round (value-weighted)")}</label>
        <div id="pm-chart"></div>
        <div class="demo-log" id="pm-log" style="margin-top:8px"></div>
      </div>
      <p class="demo-tip">${T(
        "先按“自动跑 12 轮”：稳态里计划者干得不错——过去的数据够用，它的浪费和市场差不多（这是奥派该承认的）。然后点“注入新需求”：一种新产品出现，收音机的需求往它那里转——计划者的数据库里这一行是 0，它继续把产能配给旧世界；市场里有企业家小规模试探，价格告诉他“对”，产能跟着挪。再点“注入新技术”：自行车成本减半、真实需求上升——计划者的历史需求里看不到这件事。<strong>看两条曲线在注入之后分开。</strong>",
        "First “Auto-run 12 rounds”: in steady state the planner does fine — past data suffices, and its waste is close to the market's (this is what Austrians should concede). Then “Inject a new want”: a new product appears and radio demand shifts toward it — the planner's database has a zero in that row, so it keeps stocking the old world; in the market an entrepreneur tries a little, the price says “yes,” and capacity follows. Then “Inject a new technology”: bicycle costs halve and real demand rises — nothing in the planner's historical demand shows it. <strong>Watch the two curves separate after each injection.</strong>"
      )}</p>
    </div>`;

  const f0 = (v) => Math.round(v).toString();

  const paint = () => {
    root.querySelector("#pm-want").classList.toggle("active", novelWant);
    root.querySelector("#pm-tech").classList.toggle("active", novelTech);
    const maxW = Math.max(...want, ...plannerAlloc, ...marketAlloc, 1);
    const bars = (alloc, cls) => names.map((n, i) => {
      if (i === 5 && !novelWant && alloc[i] < 1 && want[i] < 1) return "";
      const a = alloc[i], w = want[i];
      const gap = a - w; const col = Math.abs(gap) < w * 0.12 + 3 ? "var(--green)" : gap > 0 ? "var(--orange)" : "var(--red)";
      return `<div class="stage-bar">
        <span class="lab" style="width:86px">${icons[i]} ${n}</span>
        <div class="track" style="position:relative"><div class="fill ghost" style="width:${(w / maxW * 100).toFixed(0)}%;position:absolute;left:0;top:0;height:100%"></div><div class="fill" style="width:${(a / maxW * 100).toFixed(0)}%;background:${col};opacity:.85"></div></div>
        <span class="val" style="width:74px;font-size:11.5px">${f0(a)} / ${f0(w)}</span>
      </div>`;
    }).join("");
    root.querySelector("#pm-cmp").innerHTML = `
      <div class="cmp-cell cold"><h5>${T("🗄️ 计划者：过去的完美数据", "🗄️ Planner: perfect data about the past")}</h5><div class="stages" style="margin:6px 0">${bars(plannerAlloc)}</div><div class="demo-meta">${T("按历史需求分配产能；数据库只记录卖出量。", "Allocates capacity by historical demand; the database records only what sold.")}</div></div>
      <div class="cmp-cell hl"><h5>${T("🏪 市场：价格 + 企业家", "🏪 Market: prices + entrepreneurs")}</h5><div class="stages" style="margin:6px 0">${bars(marketAlloc)}</div><div class="demo-meta">${T("产能追着利润走；亏损的线收缩；有人小规模试探新东西。", "Capacity chases profit; losing lines shrink; someone tries new things at small scale.")}</div></div>`;
    const h = hist[hist.length - 1];
    root.querySelector("#pm-stats").innerHTML = `
      <div class="stat"><div class="k">${T("轮次", "Round")}</div><div class="v">${round}</div></div>
      <div class="stat"><div class="k">${T("计划者本轮浪费+短缺", "Planner waste+shortage now")}</div><div class="v ${h && h.p > (h.m * 1.3 + 10) ? "neg" : ""}">${h ? f0(h.p) : "–"}</div></div>
      <div class="stat"><div class="k">${T("市场本轮浪费+短缺", "Market waste+shortage now")}</div><div class="v ${h && h.m > (h.p * 1.3 + 10) ? "neg" : ""}">${h ? f0(h.m) : "–"}</div></div>
      <div class="stat"><div class="k">${T("累计：计划者", "Cumulative: planner")}</div><div class="v" style="color:var(--blue)">${f0(cumP)}</div></div>
      <div class="stat"><div class="k">${T("累计：市场", "Cumulative: market")}</div><div class="v acc">${f0(cumM)}</div></div>`;
    const n = hist.length;
    if (n >= 2) {
      const res = lineChart({
        fns: [
          { f: (x) => hist[Math.max(0, Math.min(n - 1, Math.round(x)))].p, cls: "line2" },
          { f: (x) => hist[Math.max(0, Math.min(n - 1, Math.round(x)))].m, cls: "line" },
        ], lo: 0, hi: Math.max(12, n - 1), samples: Math.max(12, (n - 1) * 4), xlabel: T("轮次", "round"), forceZero: true, uid: "pm",
      });
      root.querySelector("#pm-chart").innerHTML = chartBlock(res, [["var(--blue)", T("计划者", "planner")], ["var(--orange)", T("市场", "market")]]);
    } else root.querySelector("#pm-chart").innerHTML = `<div class="demo-meta">${T("跑几轮后这里会出现两条曲线。", "Two curves appear after a few rounds.")}</div>`;

    const lines = [];
    if (!novelWant && !novelTech) {
      lines.push(round < 3
        ? T("稳态：偏好只是缓慢漂移。计划者的历史数据够用。", "Steady state: tastes only drift slowly. The planner's historical data suffices.")
        : `<span class="ok">${T("稳态里两者相差不大——大数据在“明年像今年”的世界里确实好用。奥派不该假装不是这样。", "In steady state the two are close — big data really works in a world where next year looks like this year. Austrians should not pretend otherwise.")}</span>`);
    }
    if (novelWant) {
      const pNew = plannerAlloc[5], mNew = marketAlloc[5], wNew = want[5];
      lines.push(`<span class="bad">${T(`新需求出现：消费者想要 ${f0(wNew)} 单位的新产品。计划者配了 ${f0(pNew)}——它的数据库里这一行本来是 0，而且它只记录“卖出量”，卖出为 0 就永远学不到需求。市场配了 ${f0(mNew)}：有人试探性地做了几件，价格飙高，产能跟着挪。`, `A new want: consumers want ${f0(wNew)} units of the new product. The planner allocated ${f0(pNew)} — that row was zero in its database, and since it records only what sold, zero sales means it never learns the demand. The market allocated ${f0(mNew)}: someone tried a few, the price shot up, capacity followed.`)}</span>`);
      lines.push(T(`同时收音机的需求在流失，计划者还在按老数据造收音机：过剩 ${f0(Math.max(0, plannerAlloc[4] - want[4]))} 单位。`, `Meanwhile radio demand is draining away and the planner keeps building radios on old data: surplus ${f0(Math.max(0, plannerAlloc[4] - want[4]))} units.`));
    }
    if (novelTech) {
      lines.push(`<span class="warn">${T(`新技术：自行车成本减半。市场里利润率跳高，企业家扩产到 ${f0(marketAlloc[3])}；计划者只看到过去的需求 ${f0(memory[3])}，配了 ${f0(plannerAlloc[3])}——它的数据里没有“便宜了以后会有多少人想要”。`, `New technology: bicycle cost halves. In the market the profit rate jumps and entrepreneurs expand to ${f0(marketAlloc[3])}; the planner sees only past demand of ${f0(memory[3])} and allocates ${f0(plannerAlloc[3])} — its data has no “how many would want one once it's cheaper.”`)}</span>`);
    }
    if (novelWant || novelTech) lines.push(T("这就是“数据 ≠ 知识”与“新东西是创造出来的，不是观察出来的”：计划者不是算力不够，是它要的那一行数据在市场发现它之前不存在。", "This is “data ≠ knowledge” and “new things are created, not observed”: the planner is not short of computing power — the row of data it needs does not exist until a market discovers it."));
    root.querySelector("#pm-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  let timer = null;
  root.querySelector("#pm-next").addEventListener("click", step);
  root.querySelector("#pm-auto").addEventListener("click", () => { if (timer) return; let k = 0; timer = setInterval(() => { step(); if (++k >= 12) { clearInterval(timer); timer = null; } }, 200); });
  root.querySelector("#pm-want").addEventListener("click", () => { novelWant = !novelWant; step(); });
  root.querySelector("#pm-tech").addEventListener("click", () => { novelTech = !novelTech; step(); });
  root.querySelector("#pm-reset").addEventListener("click", () => { if (timer) { clearInterval(timer); timer = null; } init(); paint(); });
  paint();
}
