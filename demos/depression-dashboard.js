// 交互演示：大萧条仪表盘（1921–1939，近似示意数据）。
// 三层可切换的叠加：货币与信用 / 政策干预 / 失业与产出；一个“叙事开关”在奥派与货币主义之间切换，
// 高亮各自盯住的事件；下方是一份“如果这个故事是对的，哪些事实必须成立”的清单，读者勾选后得到自己的权重。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const years = []; for (let y = 1921; y <= 1939; y++) years.push(y);
  // 近似指数（1929 = 100）与百分比；只求形状对。来源：Rothbard 1963、Friedman & Schwartz 1963、Lebergott、美联储工业产出
  const money = [62, 66, 70, 75, 81, 84, 89, 94, 100, 96, 87, 73, 67, 75, 84, 93, 96, 93, 102];
  const ip    = [54, 68, 79, 75, 83, 87, 87, 91, 100, 83, 69, 54, 63, 69, 80, 94, 103, 81, 100];
  const unemp = [11.7, 6.7, 2.4, 5.0, 3.2, 1.8, 3.3, 4.2, 3.2, 8.7, 15.9, 23.6, 24.9, 21.7, 20.1, 16.9, 14.3, 19.0, 17.2];
  const rate  = [6.0, 4.3, 4.5, 3.5, 3.5, 4.0, 3.7, 4.7, 5.5, 3.0, 2.5, 2.9, 2.5, 1.6, 1.5, 1.5, 1.2, 1.0, 1.0];

  // 事件：tag A=奥派叙事关注 M=货币主义叙事关注 B=两者都关注
  const events = [
    { t: 1924.5, tag: "A", s: T("美联储放松：贴现率降到 3%，公开市场买入（助英国回归金本位）", "Fed eases: discount rate to 3%, open-market purchases (to help Britain return to gold)") },
    { t: 1927.6, tag: "A", s: T("斯特朗–诺曼长岛会议：贴现率降到 3.5%", "Strong–Norman Long Island meeting: rate cut to 3.5%") },
    { t: 1928.5, tag: "A", s: T("券商贷款激增；美联储开始收紧", "Broker loans surge; Fed begins tightening") },
    { t: 1929.6, tag: "A", s: T("贴现率提到 6%（8 月）", "Discount rate to 6% (Aug)") },
    { t: 1929.8, tag: "B", s: T("10 月股市崩盘", "October stock-market crash") },
    { t: 1929.9, tag: "A", s: T("胡佛白宫会议：企业承诺不减工资（11 月）", "Hoover's White House conference: business pledges no wage cuts (Nov)") },
    { t: 1930.4, tag: "A", s: T("斯穆特–霍利关税（6 月）", "Smoot–Hawley Tariff (Jun)") },
    { t: 1930.8, tag: "M", s: T("第一波银行恐慌（10 月）", "First banking panic (Oct)") },
    { t: 1931.2, tag: "M", s: T("第二波银行恐慌（3 月）", "Second banking panic (Mar)") },
    { t: 1931.7, tag: "M", s: T("英国脱离金本位；美联储反而加息（9–10 月）", "Britain leaves gold; the Fed raises rates (Sep–Oct)") },
    { t: 1932.0, tag: "A", s: T("复兴金融公司 RFC 成立（1 月）", "Reconstruction Finance Corporation founded (Jan)") },
    { t: 1932.4, tag: "A", s: T("1932 年岁入法案：最高税率 25%→63%", "Revenue Act of 1932: top rate 25%→63%") },
    { t: 1933.2, tag: "B", s: T("银行假日；没收黄金（3–4 月）", "Bank holiday; gold confiscation (Mar–Apr)") },
    { t: 1933.4, tag: "A", s: T("AAA、NIRA：农业与工业卡特尔化（5–6 月）", "AAA and NIRA: farm and industrial cartels (May–Jun)") },
    { t: 1934.0, tag: "M", s: T("金价定为 35 美元：美元贬值约 41%，黄金流入、货币回升", "Gold at $35: dollar devalued about 41%; gold inflows, money grows") },
    { t: 1935.5, tag: "A", s: T("瓦格纳法；NIRA 被判违宪", "Wagner Act; NIRA struck down") },
    { t: 1936.7, tag: "M", s: T("法定准备金率翻倍（1936.8–1937.5）", "Reserve requirements doubled (Aug 1936–May 1937)") },
    { t: 1937.0, tag: "A", s: T("未分配利润税、社保工资税；试图平衡预算", "Undistributed-profits tax, payroll tax; budget-balancing") },
    { t: 1937.5, tag: "B", s: T("1937–38 二次衰退", "The 1937–38 slump") },
  ];

  const checklist = {
    austrian: {
      title: T("奥派叙事要成立，下面哪些必须为真？", "For the Austrian story to hold, which of these must be true?"),
      items: [
        { s: T("1921–29 年货币与信用大幅增长，尽管物价平稳", "Money and credit grew substantially in 1921–29 despite flat prices"), st: "ok", note: T("成立：罗斯巴德口径约 +60%，M2 口径约 +40%", "Supported: about +60% on Rothbard's definition, about +40% on M2") },
        { s: T("新信用集中流向股票、建筑与资本品，而非消费品", "New credit concentrated in stocks, construction and capital goods, not consumer goods"), st: "ok", note: T("成立：券商贷款约 85 亿美元，资本品产出增幅远超消费品", "Supported: broker loans about $8.5B; capital-goods output rose far more than consumer goods") },
        { s: T("1929–31 年名义工资被政策托住，实际工资在萧条中上升", "Nominal wages were propped by policy in 1929–31, so real wages rose in the slump"), st: "ok", note: T("成立，但原因有争议（胡佛劝说 vs 工会/效率工资）", "Supported, though the cause is disputed (Hoover's jawboning vs unions/efficiency wages)") },
        { s: T("关税、RFC、NIRA、工资地板阻止了清算，复苏因此慢于 1921", "Tariff, RFC, NIRA and wage floors blocked liquidation, so recovery was slower than in 1921"), st: "ok", note: T("成立：科尔–奥哈尼安 2004 用主流方法给出支持", "Supported: Cole–Ohanian 2004 provide mainstream support") },
        { s: T("1930–33 年的通缩螺旋深度可以只用 ABCT 解释", "The depth of the 1930–33 deflationary spiral can be explained by ABCT alone"), st: "bad", note: T("不成立：这一段需要借用弗里德曼–施瓦茨的货币崩塌论", "Not supported: this stretch needs Friedman–Schwartz's money-collapse account") },
      ],
    },
    monetarist: {
      title: T("货币主义叙事要成立，下面哪些必须为真？", "For the monetarist story to hold, which of these must be true?"),
      items: [
        { s: T("1929–33 年货币存量下降约三分之一", "The money stock fell by about a third in 1929–33"), st: "ok", note: T("成立：这是《美国货币史》最扎实的部分", "Supported: the best-documented part of the Monetary History") },
        { s: T("美联储当时有能力用公开市场购买抵消收缩", "The Fed could have offset the contraction with open-market purchases at the time"), st: "warn", note: T("有争议：金本位约束（艾肯格林）与联储内部分裂", "Contested: gold-standard constraints (Eichengreen) and the split inside the Fed") },
        { s: T("倒闭的银行多数是“有清偿力但缺流动性”", "Most failing banks were solvent but illiquid"), st: "warn", note: T("有争议：怀特、卡洛米里斯发现倒闭者多本已脆弱", "Contested: White and Calomiris find the failures were mostly already weak") },
        { s: T("1920 年代货币政策中性，没有造成结构扭曲", "1920s policy was neutral and caused no structural distortion"), st: "bad", note: T("不成立：资本品产出翻倍、股市近三倍、券商贷款激增", "Not supported: capital-goods output doubled, stocks nearly tripled, broker loans surged") },
        { s: T("1933 年后复苏与货币增长同步，1937 年准备金率翻倍引发二次衰退", "Recovery after 1933 tracked money growth; the 1937 reserve-requirement doubling caused the second slump"), st: "ok", note: T("大体成立，但加拿大无央行、无银行倒闭却同样萧条", "Broadly supported — but Canada had no central bank, no bank failures, and the same depression") },
      ],
    },
  };

  let show = { money: true, policy: true, unemp: true, ip: false, rate: false };
  let lens = "austrian";
  const ticks = { austrian: new Set(), monetarist: new Set() };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("📊 大萧条仪表盘：同一段历史，两副眼镜（1921–1939，示意数据）", "📊 Depression dashboard: one history, two lenses (1921–1939, illustrative data)")}</div>
      <div class="demo-row">
        <div class="demo-seg" id="dd-lens">
          <button data-l="austrian" class="on">${T("奥派叙事", "Austrian narrative")}</button>
          <button data-l="monetarist">${T("货币主义叙事", "Monetarist narrative")}</button>
        </div>
        <div class="demo-btns" id="dd-layers" style="margin:0">
          <button class="demo-btn active" data-k="money">${T("货币", "Money")}</button>
          <button class="demo-btn" data-k="ip">${T("工业产出", "Industrial output")}</button>
          <button class="demo-btn active" data-k="unemp">${T("失业率", "Unemployment")}</button>
          <button class="demo-btn" data-k="rate">${T("贴现率", "Discount rate")}</button>
          <button class="demo-btn active" data-k="policy">${T("政策事件", "Policy events")}</button>
        </div>
      </div>
      <div class="chart" id="dd-chart"></div>
      <div class="stat-row" id="dd-stats"></div>
      <div class="demo-block"><div class="tl" id="dd-tl"></div></div>
      <div class="demo-block">
        <label class="demo-label" id="dd-ck-title"></label>
        <div id="dd-ck"></div>
        <div class="demo-log" id="dd-log"></div>
      </div>
      <p class="demo-tip">${T(
        "切换叙事，看高亮的事件<strong>落在哪一段</strong>：奥派的事件几乎全在 1929 年前和政策端，货币主义的几乎全在 1930–33 的银行恐慌。再看清单：两个故事各有一条“不成立”——奥派解释不了通缩螺旋的深度，货币主义解释不了 1920 年代的结构膨胀。把两条都勾上的人，才是在做经验研究。",
        "Switch narratives and watch <strong>where the highlighted events fall</strong>: the Austrian ones sit almost entirely before 1929 and on the policy side; the monetarist ones almost entirely in the 1930–33 bank panics. Then read the checklist: each story has one item marked “not supported” — Austrians cannot explain the depth of the deflationary spiral, monetarists cannot explain the structural expansion of the 1920s. Whoever ticks both is doing empirical work."
      )}</p>
    </div>`;

  // —— 图 ——
  const W = 620, H = 260, L = 44, R = 44, Tp = 18, B = 30;
  const xOf = (y) => L + (y - 1921) / (1939 - 1921) * (W - L - R);
  const yL = (v) => Tp + (1 - (v - 40) / (120 - 40)) * (H - Tp - B);   // 左轴：指数 40–120
  const yR = (v) => Tp + (1 - v / 30) * (H - Tp - B);                   // 右轴：% 0–30
  const poly = (arr, f, cls, extra = "") => `<polyline class="${cls}" ${extra} points="${arr.map((v, i) => `${xOf(years[i]).toFixed(1)},${f(v).toFixed(1)}`).join(" ")}"/>`;

  function paintChart() {
    let g = "";
    for (let y = 1921; y <= 1939; y += 2) g += `<line class="grid" x1="${xOf(y)}" y1="${Tp}" x2="${xOf(y)}" y2="${H - B}"/><text class="lbl-axis" x="${xOf(y)}" y="${H - B + 14}" text-anchor="middle">${y}</text>`;
    for (const v of [40, 60, 80, 100, 120]) g += `<text class="lbl-axis" x="${L - 4}" y="${yL(v) + 3}" text-anchor="end">${v}</text>`;
    for (const v of [0, 10, 20, 30]) g += `<text class="lbl-axis" x="${W - R + 4}" y="${yR(v) + 3}">${v}%</text>`;
    let lines = "";
    if (show.money) lines += poly(money, yL, "line");
    if (show.ip) lines += poly(ip, yL, "line4");
    if (show.unemp) lines += poly(unemp, yR, "line3", 'stroke-dasharray="5 3"');
    if (show.rate) lines += poly(rate.map((r) => r * 4), yR, "line2");  // 贴现率 ×4 画在右轴上（0–7.5%）
    let ev = "";
    if (show.policy) {
      for (const e of events) {
        const on = e.tag === "B" || (lens === "austrian" ? e.tag === "A" : e.tag === "M");
        const col = e.tag === "B" ? "var(--ink)" : e.tag === "A" ? "var(--orange)" : "var(--blue)";
        ev += `<line x1="${xOf(e.t).toFixed(1)}" y1="${Tp}" x2="${xOf(e.t).toFixed(1)}" y2="${H - B}" stroke="${col}" stroke-width="${on ? 2 : 1}" opacity="${on ? 0.9 : 0.18}" stroke-dasharray="${e.tag === "B" ? "2 2" : "none"}"/>`;
      }
    }
    root.querySelector("#dd-chart").innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img">${g}<line class="axis" x1="${L}" y1="${Tp}" x2="${L}" y2="${H - B}"/><line class="axis" x1="${L}" y1="${H - B}" x2="${W - R}" y2="${H - B}"/>${ev}${lines}</svg>
      <div class="chart-legend">
        ${show.money ? `<span><i style="background:var(--orange)"></i> ${T("广义货币（1929=100，左轴）", "Broad money (1929=100, left)")}</span>` : ""}
        ${show.ip ? `<span><i style="background:var(--green)"></i> ${T("工业产出（1929=100，左轴）", "Industrial output (1929=100, left)")}</span>` : ""}
        ${show.unemp ? `<span><i style="background:var(--red)"></i> ${T("失业率（右轴）", "Unemployment (right)")}</span>` : ""}
        ${show.rate ? `<span><i style="background:var(--blue)"></i> ${T("纽约联储贴现率 ×4（右轴）", "NY Fed discount rate ×4 (right)")}</span>` : ""}
        ${show.policy ? `<span><i style="background:var(--orange)"></i> ${T("奥派关注的事件", "Events the Austrian lens watches")}</span><span><i style="background:var(--blue)"></i> ${T("货币主义关注的事件", "Events the monetarist lens watches")}</span>` : ""}
      </div>`;
  }

  function paintStats() {
    const i29 = years.indexOf(1929), i33 = years.indexOf(1933), i21 = 0;
    const g2129 = ((money[i29] / money[i21] - 1) * 100).toFixed(0);
    const g2933 = ((money[i33] / money[i29] - 1) * 100).toFixed(0);
    const ipFall = ((ip[i33 - 1] / ip[i29] - 1) * 100).toFixed(0);
    root.querySelector("#dd-stats").innerHTML = `
      <div class="stat"><div class="k">${T("货币 1921→29", "Money 1921→29")}</div><div class="v ${lens === "austrian" ? "acc" : ""}">+${g2129}%</div></div>
      <div class="stat"><div class="k">${T("货币 1929→33", "Money 1929→33")}</div><div class="v ${lens === "monetarist" ? "acc" : ""}">${g2933}%</div></div>
      <div class="stat"><div class="k">${T("工业产出 1929→32", "Ind. output 1929→32")}</div><div class="v neg">${ipFall}%</div></div>
      <div class="stat"><div class="k">${T("失业率峰值", "Peak unemployment")}</div><div class="v neg">${Math.max(...unemp)}%</div></div>`;
  }

  function paintTimeline() {
    root.querySelector("#dd-tl").innerHTML = events.map((e) => {
      const on = e.tag === "B" || (lens === "austrian" ? e.tag === "A" : e.tag === "M");
      return `<div class="tl-item ${on ? "" : "dim"}" style="opacity:${on ? 1 : 0.45}"><span class="when">${Math.floor(e.t)}</span>${e.s}</div>`;
    }).join("");
  }

  function paintChecklist() {
    const c = checklist[lens];
    root.querySelector("#dd-ck-title").textContent = c.title;
    root.querySelector("#dd-ck").innerHTML = c.items.map((it, i) => `
      <label class="demo-check" style="margin:8px 0;align-items:flex-start">
        <input type="checkbox" data-i="${i}" ${ticks[lens].has(i) ? "checked" : ""} style="margin-top:3px"/>
        <span><span style="color:var(--ink)">${it.s}</span><br><span class="pill ${it.st === "ok" ? "ok" : it.st === "bad" ? "bad" : ""}" style="${it.st === "warn" ? "background:var(--orange-soft);color:var(--orange-ink)" : ""}">${it.st === "ok" ? T("证据支持", "supported") : it.st === "bad" ? T("不成立", "not supported") : T("有争议", "contested")}</span> <span style="color:var(--muted);font-size:12.5px">${it.note}</span></span>
      </label>`).join("");
    root.querySelectorAll("#dd-ck input").forEach((cb) => cb.addEventListener("change", () => {
      const i = +cb.dataset.i; if (cb.checked) ticks[lens].add(i); else ticks[lens].delete(i); paintLog();
    }));
    paintLog();
  }

  function paintLog() {
    const a = ticks.austrian.size, m = ticks.monetarist.size;
    const aBad = ticks.austrian.has(4), mBad = ticks.monetarist.has(3);
    const lines = [];
    lines.push(`${T("你认为成立的前提：奥派", "Premises you accept: Austrian")} <b>${a}/5</b> · ${T("货币主义", "monetarist")} <b>${m}/5</b>`);
    if (aBad) lines.push(`<span class="bad">${T("你勾了“通缩螺旋深度只用 ABCT 解释”——罗斯巴德自己都没做到；这一段要借弗里德曼–施瓦茨的工具。", "You ticked “the deflationary spiral is explained by ABCT alone” — Rothbard himself never managed that; this stretch borrows Friedman–Schwartz's tools.")}</span>`);
    if (mBad) lines.push(`<span class="bad">${T("你勾了“1920 年代政策中性”——但资本品翻倍、股市近三倍、券商贷款激增；这是货币主义叙事最难解释的残余。", "You ticked “1920s policy was neutral” — yet capital goods doubled, stocks nearly tripled and broker loans surged; that is the residue the monetarist story struggles with.")}</span>`);
    if (a >= 4 && m >= 3 && !aBad && !mBad) lines.push(`<span class="ok">${T("这是阶段 13.1 说的“诚实的应用”：繁荣的结构与被禁止的清算用奥派，1930–33 的放大用货币主义，各自标明边界。", "This is the “honest application” of Stage 13.1: Austrian for the boom's structure and the forbidden liquidation, monetarist for the 1930–33 amplification, each with its boundary marked.")}</span>`);
    else if (a + m === 0) lines.push(T("勾选你认为证据支持的前提。注意每份清单都夹了一条“不成立”的诱饵。", "Tick the premises you think the evidence supports. Each list contains one “not supported” decoy."));
    root.querySelector("#dd-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  }

  root.querySelectorAll("#dd-lens button").forEach((b) => b.addEventListener("click", () => {
    lens = b.dataset.l;
    root.querySelectorAll("#dd-lens button").forEach((x) => x.classList.toggle("on", x === b));
    paintChart(); paintStats(); paintTimeline(); paintChecklist();
  }));
  root.querySelectorAll("#dd-layers button").forEach((b) => b.addEventListener("click", () => {
    show[b.dataset.k] = !show[b.dataset.k];
    b.classList.toggle("active", show[b.dataset.k]);
    paintChart();
  }));

  paintChart(); paintStats(); paintTimeline(); paintChecklist();
}
