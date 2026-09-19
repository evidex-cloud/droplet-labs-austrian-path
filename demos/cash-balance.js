// 交互演示：现金余额与购买力——两个滑块（货币供给、持币需求）决定购买力的 12 轮路径；
// 切换“新钱从哪里进入”（银行/企业 vs 家庭），看部门价格分道扬镳，即使总平均差不多。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const SECTORS = [
    { name: T("资本品", "Capital goods") },
    { name: T("房地产/建筑", "Real estate / construction") },
    { name: T("耐用消费品", "Durable consumer goods") },
    { name: T("食品与日用", "Food & staples") },
    { name: T("服务/工资", "Services / wages") },
  ];
  // 注入点 → 各部门收到新钱的先后（lag，轮）与最终相对涨幅（m，加权平均 = 1）
  const PROFILES = {
    banks: { lag: [0, 1, 2.5, 3.5, 4.5], m: [1.45, 1.25, 0.95, 0.75, 0.6] },
    households: { lag: [4.5, 3, 1.5, 0, 0.5], m: [0.6, 0.8, 1.05, 1.35, 1.2] },
  };
  const ROUNDS = 12;
  let dM = 10, dD = 0, inj = "banks", view = ROUNDS;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("💵 现金余额与购买力：货币供给 × 持币需求 × 新钱从哪里进", "💵 Cash balances & purchasing power: money supply × demand to hold × where the new money enters")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("货币供给变化：", "Change in money supply:")} <b id="cb-m-v">+10%</b></label>
          <input class="demo-slider" type="range" min="-20" max="50" step="1" value="10" id="cb-m" />
          <label class="demo-label" style="margin-top:10px">${T("持币需求变化（人们想多/少持有多少现金）：", "Change in demand to hold money (how much more/less cash people want):")} <b id="cb-d-v">0%</b></label>
          <input class="demo-slider" type="range" min="-20" max="50" step="1" value="0" id="cb-d" />
          <div class="demo-row" style="margin-top:12px">
            <span class="demo-label" style="margin:0">${T("新钱的注入点", "Injection point")}</span>
            <div class="demo-seg" id="cb-inj">
              <button data-v="banks" class="on">${T("银行贷款给企业", "Bank loans to firms")}</button>
              <button data-v="households">${T("直接发给家庭", "Direct to households")}</button>
            </div>
          </div>
          <label class="demo-label" style="margin-top:10px">${T("查看第几轮：", "View round:")} <b id="cb-r-v">12</b></label>
          <input class="demo-slider" type="range" min="1" max="${ROUNDS}" step="1" value="${ROUNDS}" id="cb-r" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("各部门价格指数（起点 100）——同一个总量，两条完全不同的路", "Sector price indexes (start = 100) — same aggregate, two entirely different paths")}</label>
          <div id="cb-bars"></div>
          <div class="stat-row">
            <div class="stat"><div class="k">${T("总价格指数", "Aggregate index")}</div><div class="v" id="cb-agg">–</div></div>
            <div class="stat"><div class="k">${T("货币购买力", "Purchasing power")}</div><div class="v acc" id="cb-ppm">–</div></div>
            <div class="stat"><div class="k">${T("最大相对价差", "Max relative gap")}</div><div class="v neg" id="cb-gap">–</div></div>
          </div>
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("货币购买力（PPM，起点 1.00）随 12 轮的路径", "Purchasing power of money (PPM, start = 1.00) over 12 rounds")}</label>
        <div id="cb-chart"></div>
        <div class="demo-log" id="cb-log"></div>
      </div>
      <p class="demo-tip">${T(
        "先把供给拉到 +10%、需求留在 0，在两个注入点之间切换：<strong>总指数都落在 110 附近</strong>（MV=PT 在平均数上没错），但部门条完全不同——银行注入时资本品先涨、涨最多；家庭注入时食品先涨。再把“持币需求”拉到 +10%：总指数几乎回到 100，购买力被需求撑住——“囤积”不是漏出，它由物价来满足。把轮次滑块往前拨，看早期的相对价差比最终更夸张：企业家就是在那几轮做决定的。",
        "Set supply to +10% and demand to 0, then switch injection points: <strong>the aggregate index lands near 110 either way</strong> (MV=PT is right on average), but the sector bars are entirely different — with bank injection, capital goods rise first and most; with household injection, food rises first. Now raise “demand to hold” to +10%: the aggregate returns almost to 100 — purchasing power is held up by demand; “hoarding” is not a leakage, it is satisfied through prices. Slide the round back and notice the early relative gaps are wider than the final ones: those are the rounds in which entrepreneurs make their decisions."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const ramp = (t, lag) => { const x = t - lag; return x <= 0 ? 0 : 1 - Math.exp(-x / (1.2 + 0.45 * lag)); };
  // 早到部门的暂时超调：新钱刚到时需求集中，价格先冲高再回落
  const overshoot = (t, lag) => { const x = t - lag; return x <= 0 ? 0 : 0.9 * x * Math.exp(-x / 1.1); };
  const sectorPrice = (s, t) => {
    const p = PROFILES[inj], m = dM / 100, d = dD / 100;
    const moneyPart = m * (p.m[s] * ramp(t, p.lag[s]) + (m > 0 ? overshoot(t, p.lag[s]) : 0));
    const demandPart = d * ramp(t, 0);
    return (1 + moneyPart) / (1 + demandPart);
  };
  const aggregate = (t) => SECTORS.reduce((acc, _, s) => acc + sectorPrice(s, t), 0) / SECTORS.length;

  const paint = () => {
    $("cb-m-v").textContent = (dM >= 0 ? "+" : "") + dM + "%";
    $("cb-d-v").textContent = (dD >= 0 ? "+" : "") + dD + "%";
    $("cb-r-v").textContent = view;
    const prices = SECTORS.map((_, s) => sectorPrice(s, view) * 100);
    const agg = aggregate(view) * 100;
    const hi = Math.max(...prices), lo = Math.min(...prices);
    const scaleMax = Math.max(140, hi + 5);
    $("cb-bars").innerHTML = SECTORS.map((sec, s) => {
      const first = PROFILES[inj].lag[s] === Math.min(...PROFILES[inj].lag);
      return `<div class="bar2"><span class="lab" style="${first ? "color:var(--orange-ink);font-weight:700" : ""}">${sec.name}</span><div class="track"><div class="fill" style="width:${(prices[s] / scaleMax) * 100}%;background:${prices[s] >= agg ? "var(--orange)" : "var(--blue)"};opacity:${first ? 1 : 0.75}"></div></div><span class="val">${prices[s].toFixed(1)}</span></div>`;
    }).join("") + `<div class="bar2"><span class="lab" style="font-weight:700;color:var(--ink)">${T("平均", "Average")}</span><div class="track"><div class="fill" style="width:${(agg / scaleMax) * 100}%;background:var(--ink);opacity:.6"></div></div><span class="val" style="font-weight:700">${agg.toFixed(1)}</span></div>`;
    $("cb-agg").textContent = agg.toFixed(1);
    $("cb-ppm").textContent = (100 / agg).toFixed(3);
    $("cb-gap").textContent = "+" + ((hi / lo - 1) * 100).toFixed(1) + "%";

    const fPPM = (t) => 1 / aggregate(t);
    const fNeutral = (t) => 1 / ((1 + (dM / 100) * ramp(t, 0)) / (1 + (dD / 100) * ramp(t, 0)));
    const res = lineChart({ fns: [{ f: fPPM, cls: "line" }, { f: fNeutral, cls: "line2" }], lo: 0, hi: ROUNDS, xlabel: T("轮次", "round"), markerX: view, markerLabel: T("当前轮", "viewing"), uid: "cb", H: 230 });
    $("cb-chart").innerHTML = chartBlock(res, [["var(--orange)", T("实际购买力路径（新钱逐轮扩散）", "Actual PPM path (money diffusing round by round)")], ["var(--blue)", T("“中性”参照：所有价格同步变动", "“Neutral” reference: all prices move together")]]);

    const lines = [];
    const target = ((1 + dM / 100) / (1 + dD / 100)) * 100;
    lines.push(T(`供给 ${dM >= 0 ? "+" : ""}${dM}%、持币需求 ${dD >= 0 ? "+" : ""}${dD}% → 总价格指数的长期落点约 <b>${target.toFixed(1)}</b>（购买力 ${(100 / target).toFixed(3)}）。这是供求决定购买力：供给压低它，需求撑高它。`, `Supply ${dM >= 0 ? "+" : ""}${dM}%, demand to hold ${dD >= 0 ? "+" : ""}${dD}% → the aggregate index settles near <b>${target.toFixed(1)}</b> (purchasing power ${(100 / target).toFixed(3)}). That is supply and demand setting purchasing power: supply pushes it down, demand holds it up.`));
    if (dM !== 0) {
      const p = PROFILES[inj];
      const firstS = p.lag.indexOf(Math.min(...p.lag)), lastS = p.lag.indexOf(Math.max(...p.lag));
      lines.push(`<span class="warn">${T(`第 ${view} 轮：新钱${inj === "banks" ? "经银行贷款先到企业手里" : "直接到家庭手里"}，<b>${SECTORS[firstS].name}</b> 最先涨（${prices[firstS].toFixed(1)}），<b>${SECTORS[lastS].name}</b> 最后才动（${prices[lastS].toFixed(1)}）。最大相对价差 ${((hi / lo - 1) * 100).toFixed(1)}%——这就是总量公式看不见的东西。`, `Round ${view}: the new money ${inj === "banks" ? "reaches firms first through bank loans" : "reaches households directly"}; <b>${SECTORS[firstS].name}</b> rises first (${prices[firstS].toFixed(1)}), <b>${SECTORS[lastS].name}</b> moves last (${prices[lastS].toFixed(1)}). The widest relative gap is ${((hi / lo - 1) * 100).toFixed(1)}% — the thing the aggregate formula cannot see.`)}</span>`);
      lines.push(T(inj === "banks" ? "资本品相对服务变贵 → 企业家读到“市场要更多资本品”的信号，扩大长期项目——这是阶段 5.1 商业周期的起点。" : "食品与耐用品相对资本品变贵 → 企业家读到“少投资、多生产当下消费品”的信号——同样 10% 的货币，相反的结构。", inj === "banks" ? "Capital goods become dearer relative to services → entrepreneurs read “the market wants more capital goods” and expand long projects — the starting point of the business cycle in Stage 5.1." : "Food and durables become dearer relative to capital goods → entrepreneurs read “invest less, produce more for present consumption” — the same 10% of money, the opposite structure."));
    }
    if (dD > 0 && dM <= 0) lines.push(`<span class="ok">${T("人们想多持有现金，货币供给没变：物价下降，每个人的实际余额上升——需求被购买力满足，而不是被印钞满足。这是“现金积累型通缩”，是调整不是病。", "People want larger cash balances and the money supply is unchanged: prices fall and everyone's real balance rises — the demand is satisfied by purchasing power, not by printing. This is “cash-building deflation”: an adjustment, not a disease.")}</span>`);
    if (dM < 0) lines.push(`<span class="bad">${T("货币供给收缩：如果这是之前信用扩张的退潮（存款货币消失），就是“银行信用型通缩”——痛苦来自前面的膨胀，而不是收缩本身。", "The money supply contracts: if this is the ebb of an earlier credit expansion (deposit money vanishing), it is “bank-credit deflation” — the pain comes from the prior expansion, not from the contraction itself.")}</span>`);
    $("cb-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("cb-m").addEventListener("input", (e) => { dM = +e.target.value; paint(); });
  $("cb-d").addEventListener("input", (e) => { dD = +e.target.value; paint(); });
  $("cb-r").addEventListener("input", (e) => { view = +e.target.value; paint(); });
  $("cb-inj").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
    inj = b.dataset.v;
    $("cb-inj").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    paint();
  }));
  paint();
}
