// 交互演示：时间偏好实验室——
// ① 一连串“现在 100 vs 一年后 X”的选择，用二分法逼出你的隐含年利率；
// ② 把几位时间偏好不同的人叠成“现在商品”的供给线与需求线，看市场利率在哪里成交。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);
  const money = (v) => (en ? "$" + v.toFixed(0) : v.toFixed(0) + " 元");

  // ---------- ① 你的隐含利率（二分搜索） ----------
  let lo = 0, hi = 60;          // 年利率区间（%）：你在 lo 时肯定选“现在”，在 hi 时肯定选“等一年”
  let steps = 0;
  const MAX_STEPS = 6;
  const mid = () => (lo + hi) / 2;

  // ---------- ② 市场利率 ----------
  const base = [
    { n: T("退休的甲", "A (retiree)"), tp: 2, k: 30 },
    { n: T("会计乙", "B (accountant)"), tp: 4, k: 28 },
    { n: T("教师丙", "C (teacher)"), tp: 6, k: 22 },
    { n: T("店主丁", "D (shopkeeper)"), tp: 8, k: 22 },
    { n: T("学生戊", "E (student)"), tp: 10, k: 25 },
    { n: T("创业者己", "F (founder)"), tp: 13, k: 20 },
  ];
  let shift = 0;          // 全社会耐心变化（百分点）
  let includeYou = false; // 把你自己加入市场
  let yourRate = null;

  const people = () => {
    const list = base.map((p) => ({ ...p, tp: Math.max(0.2, p.tp + shift) }));
    if (includeYou && yourRate != null) list.push({ n: T("你", "You"), tp: Math.max(0.2, yourRate + shift), k: 26, you: true });
    return list;
  };
  // 现在商品的供给：时间偏好低于 r 的人出借，出借量随 (r - tp) 增加；需求：高于 r 的人借入
  const supply = (r, ps) => ps.reduce((s, p) => s + Math.max(0, r - p.tp) * p.k, 0);
  const demand = (r, ps) => ps.reduce((s, p) => s + Math.max(0, p.tp - r) * p.k, 0);
  const solve = (ps) => {
    let a = 0, b = 30;
    for (let i = 0; i < 40; i++) { const m = (a + b) / 2; if (supply(m, ps) - demand(m, ps) > 0) b = m; else a = m; }
    return (a + b) / 2;
  };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("⏳ 时间偏好实验室：先测你自己的利率，再看市场利率怎么涌现", "⏳ Time-preference lab: measure your own rate, then watch a market rate emerge")}</div>

      <div class="demo-block">
        <label class="demo-label">${T("① 现在拿 100 元，还是 12 个月后拿 X 元？（每答一次，区间收窄一次）", "① Take $100 today, or $X in 12 months? (each answer narrows the range)")}</label>
        <div class="scn">
          <div class="scn-q" id="tp-q"></div>
          <div class="demo-btns">
            <button class="demo-btn" id="tp-now"></button>
            <button class="demo-btn" id="tp-later"></button>
            <button class="demo-btn" id="tp-reset">${T("重来", "Reset")}</button>
          </div>
          <div class="scn-meta" id="tp-meta"></div>
        </div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("隐含年利率", "Implied annual rate")}</div><div class="v acc" id="tp-rate">–</div></div>
          <div class="stat"><div class="k">${T("对你而言 100 元今天 ≈", "To you, $100 today ≈")}</div><div class="v" id="tp-eq">–</div></div>
          <div class="stat"><div class="k">${T("一年后 105 元今天值", "$105 next year is worth today")}</div><div class="v" id="tp-pv">–</div></div>
          <div class="stat"><div class="k">${T("两年后等值", "Two-year equivalent")}</div><div class="v" id="tp-2y">–</div></div>
        </div>
      </div>

      <div class="demo-block">
        <label class="demo-label">${T("② 六个人、六种时间偏好，叠成一个市场", "② Six people, six rates of time preference, stacked into one market")}</label>
        <div class="demo-row">
          <span style="font-size:13px;color:var(--muted)">${T("全社会耐心变化：", "Society-wide patience shift:")} <b id="tp-shift-v">0</b> ${T("个百分点", "pts")}</span>
          <label class="demo-check"><input type="checkbox" id="tp-you" /> ${T("把“你”也加入市场", "Add “you” to the market")}</label>
        </div>
        <input class="demo-slider" type="range" min="-3" max="6" step="0.5" value="0" id="tp-shift" />
        <div id="tp-chart"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("市场利率", "Market rate")}</div><div class="v acc" id="tp-mkt">–</div></div>
          <div class="stat"><div class="k">${T("出借者", "Lenders")}</div><div class="v pos" id="tp-lenders">–</div></div>
          <div class="stat"><div class="k">${T("借入者", "Borrowers")}</div><div class="v neg" id="tp-borrowers">–</div></div>
        </div>
        <div id="tp-people" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:10px"></div>
        <div class="demo-log" id="tp-log" style="margin-top:10px"></div>
      </div>

      <p class="demo-tip">${T(
        "看两件事：<strong>①</strong> 你的利率是在没有银行、没有机器的情况下被测出来的——它只是你对“早一点”的定价。<strong>②</strong> 市场利率落在“最后一位肯出借的人”与“最后一位肯借入的人”之间；把耐心滑块往右拉（全社会时间偏好下降），供给线上移、利率下降——这是<em>真实</em>的低利率；央行压低数字时，人心并没有动，这条线也没有动。",
        "Watch two things: <strong>①</strong> your rate was measured with no bank and no machine in sight — it is simply your price for “sooner.” <strong>②</strong> the market rate lands between the last person willing to lend and the last willing to borrow; push the patience slider right (society's time preference falls) and the supply line rises while the rate falls — that is a <em>genuine</em> low rate. When a central bank lowers the number instead, nobody's mind has changed and this line has not moved."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  // ---------- ① 绘制 ----------
  const paintA = () => {
    const m = mid();
    const X = 100 * (1 + m / 100);
    const done = steps >= MAX_STEPS;
    $("tp-q").textContent = done
      ? T("测完了：你大约在下面这个数字上无所谓。", "Done: you are roughly indifferent at the number below.")
      : T("现在拿 100 元，还是 12 个月后拿 " + X.toFixed(1) + " 元？", "Take $100 today, or $" + X.toFixed(1) + " in 12 months?");
    $("tp-now").textContent = T("现在拿 100", "Take $100 now");
    $("tp-later").textContent = T("等一年拿 " + X.toFixed(1), "Wait for $" + X.toFixed(1));
    $("tp-now").disabled = done; $("tp-later").disabled = done;
    $("tp-meta").innerHTML = T(
      "第 " + steps + "/" + MAX_STEPS + " 步 · 目前区间：你的年利率在 <b>" + lo.toFixed(1) + "%</b> 与 <b>" + hi.toFixed(1) + "%</b> 之间",
      "Step " + steps + "/" + MAX_STEPS + " · current range: your annual rate lies between <b>" + lo.toFixed(1) + "%</b> and <b>" + hi.toFixed(1) + "%</b>"
    );
    const r = m / 100;
    yourRate = m;
    $("tp-rate").textContent = m.toFixed(1) + "%";
    $("tp-eq").textContent = money(100 * (1 + r)) + T("（明年）", " (next year)");
    $("tp-pv").textContent = money(105 / (1 + r));
    $("tp-2y").textContent = money(100 * (1 + r) * (1 + r));
    if (includeYou) paintB();
  };
  $("tp-now").addEventListener("click", () => { if (steps < MAX_STEPS) { lo = mid(); steps++; paintA(); } });
  $("tp-later").addEventListener("click", () => { if (steps < MAX_STEPS) { hi = mid(); steps++; paintA(); } });
  $("tp-reset").addEventListener("click", () => { lo = 0; hi = 60; steps = 0; paintA(); });

  // ---------- ② 绘制 ----------
  const paintB = () => {
    const ps = people();
    const rStar = solve(ps);
    const res = lineChart({
      fns: [
        { f: (r) => supply(r, ps), cls: "line" },
        { f: (r) => demand(r, ps), cls: "line2" },
      ],
      lo: 0, hi: 18, xlabel: T("年利率（%）", "annual rate (%)"), forceZero: true,
      markerX: rStar, markerLabel: T("市场利率 ", "market rate ") + rStar.toFixed(1) + "%", uid: "tp",
    });
    $("tp-chart").innerHTML = chartBlock(res, [
      ["var(--orange)", T("现在商品的供给（出借）", "supply of present goods (lending)")],
      ["var(--blue)", T("现在商品的需求（借入）", "demand for present goods (borrowing)")],
    ]);
    const lenders = ps.filter((p) => p.tp < rStar), borrowers = ps.filter((p) => p.tp > rStar);
    $("tp-mkt").textContent = rStar.toFixed(1) + "%";
    $("tp-lenders").textContent = lenders.length;
    $("tp-borrowers").textContent = borrowers.length;
    $("tp-shift-v").textContent = (shift > 0 ? "+" : "") + shift.toFixed(1);
    $("tp-people").innerHTML = ps.map((p) => {
      const lender = p.tp < rStar;
      return `<span class="pill ${lender ? "ok" : "bad"}" style="${p.you ? "outline:2px solid var(--orange-line)" : ""}">${p.n} · ${p.tp.toFixed(1)}% → ${lender ? T("出借", "lends") : T("借入", "borrows")}</span>`;
    }).join("");
    const marginalL = lenders.length ? lenders.reduce((a, b) => (a.tp > b.tp ? a : b)) : null;
    const marginalB = borrowers.length ? borrowers.reduce((a, b) => (a.tp < b.tp ? a : b)) : null;
    const lines = [];
    lines.push(T(
      "在 " + rStar.toFixed(1) + "% 处，出借的现在商品 = 借入的现在商品。利率不是“资金的价格”，是这群人时间偏好的<b>边际</b>表达。",
      "At " + rStar.toFixed(1) + "% the present goods lent equal the present goods borrowed. The rate is not “the price of funds” — it is the <b>marginal</b> expression of these people's time preference."
    ));
    if (marginalL && marginalB) lines.push(T(
      "边际出借者：" + marginalL.n + "（" + marginalL.tp.toFixed(1) + "%）；边际借入者：" + marginalB.n + "（" + marginalB.tp.toFixed(1) + "%）。市场利率被夹在两人之间——和阶段 1.3 的边际对一模一样。",
      "Marginal lender: " + marginalL.n + " (" + marginalL.tp.toFixed(1) + "%); marginal borrower: " + marginalB.n + " (" + marginalB.tp.toFixed(1) + "%). The market rate is pinned between them — exactly the marginal pairs of Stage 1.3."
    ));
    if (shift < 0) lines.push(`<span class="ok">${T("全社会更有耐心 → 更多人在同一利率下愿意出借 → 供给线上移 → 利率下降。这是真实储蓄支撑的低利率。", "Society grew more patient → more people lend at any given rate → supply shifts up → the rate falls. This is a low rate backed by real saving.")}</span>`);
    if (shift > 0) lines.push(`<span class="warn">${T("全社会更急躁 → 借入者变多、出借者变少 → 利率上升。战争、通胀、产权不安全都会这样推高时间偏好（霍普）。", "Society grew more impatient → more borrowers, fewer lenders → the rate rises. War, inflation and insecure property push time preference up this way (Hoppe).")}</span>`);
    if (includeYou && yourRate != null) {
      const you = ps.find((p) => p.you);
      lines.push(`<span class="${you.tp < rStar ? "ok" : "bad"}">${you.tp < rStar
        ? T("你的时间偏好低于市场利率——在这个市场里你是出借者：拿 100 元现在换来 " + (100 * (1 + rStar / 100)).toFixed(1) + " 元明年，比你自己要求的 " + (100 * (1 + you.tp / 100)).toFixed(1) + " 元还多。", "Your time preference is below the market rate — here you are a lender: $100 now buys $" + (100 * (1 + rStar / 100)).toFixed(1) + " next year, more than the $" + (100 * (1 + you.tp / 100)).toFixed(1) + " you required.")
        : T("你的时间偏好高于市场利率——在这个市场里你是借入者：付 " + rStar.toFixed(1) + "% 就能把明年的钱搬到今天，比你心里的折扣 " + you.tp.toFixed(1) + "% 便宜。", "Your time preference is above the market rate — here you are a borrower: paying " + rStar.toFixed(1) + "% moves next year's money to today, cheaper than your own discount of " + you.tp.toFixed(1) + "%.")}</span>`);
    }
    $("tp-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("tp-shift").addEventListener("input", (e) => { shift = +e.target.value; paintB(); });
  $("tp-you").addEventListener("change", (e) => { includeYou = e.target.checked; paintB(); });

  paintA();
  paintB();
}
