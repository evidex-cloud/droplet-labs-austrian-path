// 交互演示：奥派透镜清单——抽一张宏观情景卡，回答五个框架问题（注入在哪？繁荣板块？久期？什么脆弱？我的时间视角？），
// 输出一份定性的“透镜总结”，从不给出回报预测。明确声明：不构成投资建议。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const SCENARIOS = [
    {
      id: "zirp",
      title: T("情景 A：利率降到零 + 央行扩表", "Scenario A: rates cut to zero + central-bank balance sheet expands"),
      body: T("央行把政策利率从 2.5% 降到 0，宣布无限量购买国债与抵押债券；M2 一年增长约 25%；10 年期收益率 0.6%；未盈利科技公司与 SPAC 发行创纪录；CPI 暂时只有 1.5%。",
        "The central bank cuts from 2.5% to 0 and announces unlimited purchases of government and mortgage bonds; M2 grows about 25% in a year; the 10-year yield is 0.6%; unprofitable tech and SPAC issuance set records; CPI is only 1.5% for now."),
      hint: { inj: "banks", boom: "tech", dur: "long", frag: "refi", hor: null },
    },
    {
      id: "capex",
      title: T("情景 B：资本支出狂潮", "Scenario B: a capex boom"),
      body: T("利率 4%，但一个新技术叙事让大型公司宣布未来三年数千亿美元的数据中心、芯片与电力投资；相关设备供应商订单排到两年后；上游板块市值一年翻倍；信贷市场为这些项目提供大量长期融资。",
        "Rates are 4%, but a new-technology narrative has large firms announcing hundreds of billions in data-center, chip and power investment over three years; equipment suppliers' order books run two years out; upstream sectors double in a year; credit markets provide heavy long-term financing for the projects."),
      hint: { inj: "corp", boom: "upstream", dur: "long", frag: "capex", hor: null },
    },
    {
      id: "hike",
      title: T("情景 C：加息 + 债务到期墙", "Scenario C: rate hikes + a debt maturity wall"),
      body: T("央行在 12 个月内从 0 加到 4.5%；10 年期收益率 4%；商业地产与杠杆收购贷款将在两年内大量到期再融资；僵尸企业比例约 15%；政府债务为 GDP 的 120%，利息支出占税收比重快速上升。",
        "The central bank hikes from 0 to 4.5% within 12 months; the 10-year yield is 4%; commercial-property and leveraged-buyout loans face heavy refinancing within two years; the zombie share is about 15%; government debt is 120% of GDP and interest is a fast-rising share of tax revenue."),
      hint: { inj: "none", boom: "none", dur: "short", frag: "refi", hor: null },
    },
    {
      id: "fiscal",
      title: T("情景 D：财政刺激 + 消费补贴", "Scenario D: fiscal stimulus + consumer transfers"),
      body: T("政府向每个家庭发放现金补贴，由央行购买国债融资；零售销售一年增长 20%；下游消费品企业利润创纪录；上游产能没有变化；CPI 从 2% 升到 6%；工资涨幅落后于物价。",
        "The government mails cash to every household, financed by central-bank bond purchases; retail sales grow 20% in a year; downstream consumer firms post record profits; upstream capacity is unchanged; CPI rises from 2% to 6%; wages lag prices."),
      hint: { inj: "consumers", boom: "downstream", dur: "short", frag: "wages", hor: null },
    },
  ];

  const QUESTIONS = [
    { key: "inj", q: T("① 新钱（或信贷）从哪里注入？谁先拿到？", "① Where is the new money (or credit) injected? Who gets it first?"),
      opts: [
        ["banks", T("央行→银行→金融资产（坎蒂隆链前端）", "Central bank → banks → financial assets (front of the Cantillon chain)")],
        ["corp", T("信贷市场→大企业的长期项目", "Credit markets → large firms' long-term projects")],
        ["consumers", T("财政→消费者→下游零售", "Fiscal → consumers → downstream retail")],
        ["none", T("没有注入，反而在抽走（紧缩）", "No injection — it is being withdrawn (tightening)")],
      ] },
    { key: "boom", q: T("② 哪个板块正在被“拉长”（繁荣板块）？", "② Which sector is being “stretched” (the boom sector)?"),
      opts: [
        ["tech", T("长久期资产：未盈利科技、SPAC、加密", "Long-duration assets: unprofitable tech, SPACs, crypto")],
        ["upstream", T("上游资本品：设备、芯片、能源、数据中心", "Upstream capital goods: equipment, chips, energy, data centers")],
        ["downstream", T("下游消费品与零售", "Downstream consumer goods and retail")],
        ["none", T("没有板块在扩张，之前拉长的在收缩", "No sector expanding; previously stretched ones are contracting")],
      ] },
    { key: "dur", q: T("③ 被推高的资产久期是长还是短？", "③ Is the duration of the lifted assets long or short?"),
      opts: [
        ["long", T("长：现金流在很多年后（对利率极敏感）", "Long: cash flows many years out (extremely rate-sensitive)")],
        ["short", T("短：现金流就在眼前（对利率不敏感）", "Short: cash flows are near (rate-insensitive)")],
      ] },
    { key: "frag", q: T("④ 什么东西的存活依赖“利率不回归”？", "④ What depends on the rate not normalizing in order to survive?"),
      opts: [
        ["refi", T("靠再融资付息的债务：僵尸企业、杠杆地产、高债务政府", "Debt serviced by refinancing: zombies, leveraged property, indebted governments")],
        ["capex", T("按低利率算账的长期项目：若融资成本上升会烂尾", "Long projects penciled at low rates: they stall if funding costs rise")],
        ["wages", T("靠补贴维持的消费：补贴停、物价不回落，实际工资受损", "Consumption sustained by transfers: when they stop, prices stay up and real wages suffer")],
        ["nothing", T("几乎没有：结构建立在利润而非再融资上", "Almost nothing: the structure rests on profit, not refinancing")],
      ] },
    { key: "hor", q: T("⑤ 我的时间视角是？（理论不替你选，但要求你先选）", "⑤ What is my time horizon? (The theory will not choose for you, but requires you to choose first)"),
      opts: [
        ["short", T("1–3 年", "1–3 years")],
        ["mid", T("3–10 年", "3–10 years")],
        ["long", T("10 年以上", "10+ years")],
      ] },
  ];

  let si = 0, answers = {};

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔍 奥派透镜清单：一张情景卡，五个问题，一份定性总结", "🔍 The Austrian lens checklist: one scenario card, five questions, one qualitative summary")}</div>
      <div class="demo-warn" style="margin-bottom:12px">${T("<b>声明：</b>本演示是思维框架练习，输出的是“透镜总结”，不是回报预测，不构成任何投资建议。它永远不会告诉你买什么、什么时候买。", "<b>Disclaimer:</b> this demo is a thinking exercise. Its output is a “lens summary,” not a return forecast, and it constitutes no investment advice. It will never tell you what to buy or when.")}</div>
      <div class="demo-block">
        <div class="demo-seg" id="fc-scn">${SCENARIOS.map((s, i) => `<button class="${i === 0 ? "on" : ""}" data-i="${i}">${["A", "B", "C", "D"][i]}</button>`).join("")}</div>
        <div class="scn" id="fc-card"></div>
      </div>
      <div id="fc-questions"></div>
      <div class="demo-btns"><button class="demo-btn" id="fc-hint">${T("按理论提示自动作答", "Auto-answer from the theory's hints")}</button><button class="demo-btn" id="fc-clear">${T("清空", "Clear")}</button></div>
      <div class="demo-block"><div class="demo-label">${T("透镜总结（定性）", "Lens summary (qualitative)")}</div><div class="demo-log" id="fc-out"></div></div>
      <p class="demo-tip">${T(
        "回答五个问题后，总结只会说三类话：<strong>扭曲在哪、方向朝哪、什么脆弱</strong>——外加“你的时间视角意味着什么”。它不会出现任何“预计涨/跌 X%”“建议买入”的字样。如果你发现自己想从这份总结里读出一个买卖信号，回去重读阶段 10.5 的第 ④ 节：永久熊陷阱。",
        "Once you answer the five questions, the summary says only three kinds of things: <strong>where the distortion is, which way things lean, what is fragile</strong> — plus what your time horizon implies. It will never contain “expected +X%” or “buy.” If you catch yourself trying to read a trade signal out of it, go back to section ④ of Stage 10.5: the permabear trap."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const paintCard = () => {
    const s = SCENARIOS[si];
    $("fc-card").innerHTML = `<div class="scn-q">${s.title}</div><div class="scn-meta">${s.body}</div>`;
    $("fc-questions").innerHTML = QUESTIONS.map((qq) => `
      <div class="demo-block">
        <div class="demo-label">${qq.q}</div>
        <div class="demo-btns" style="margin:4px 0">${qq.opts.map(([v, l]) => `<button class="demo-btn ${answers[qq.key] === v ? "active" : ""}" data-k="${qq.key}" data-v="${v}">${l}</button>`).join("")}</div>
      </div>`).join("");
    root.querySelectorAll("[data-k]").forEach((b) => b.addEventListener("click", () => { answers[b.dataset.k] = b.dataset.v; paintCard(); paintOut(); }));
  };

  const paintOut = () => {
    const a = answers;
    const done = QUESTIONS.every((q) => a[q.key]);
    const lines = [];
    if (!done) { $("fc-out").innerHTML = `<div class="warn">${T("还有 " + QUESTIONS.filter((q) => !a[q.key]).length + " 个问题没回答。", QUESTIONS.filter((q) => !a[q.key]).length + " question(s) still unanswered.")}</div>`; return; }

    // 扭曲
    if (a.inj === "banks") lines.push(`<b>${T("扭曲：", "Distortion: ")}</b>${T("利率由央行而非储蓄决定；新钱先到金融资产。靠工资与存款生活的人在坎蒂隆链末端——CPI 暂时平静不是安全信号（阶段 4.3、10.2）。", "the rate is set by the central bank, not by saving; new money reaches financial assets first. Those living on wages and deposits are at the end of the Cantillon chain — a calm CPI is not a safety signal (Stages 4.3, 10.2).")}`);
    if (a.inj === "corp") lines.push(`<b>${T("扭曲：", "Distortion: ")}</b>${T("信贷把资源引向上游长期项目，项目的账目建立在当前融资成本上（阶段 10.1 的三角形被拉长）。", "credit is steering resources into long upstream projects whose accounts rest on today's funding cost (the triangle of Stage 10.1 being stretched).")}`);
    if (a.inj === "consumers") lines.push(`<b>${T("扭曲：", "Distortion: ")}</b>${T("新钱从下游注入，抬高消费品价格与零售利润，但上游产能不变——三角形最矮的一端被垫高（阶段 10.2 的“刺激消费”）。", "new money enters downstream, lifting consumer prices and retail profits while upstream capacity is unchanged — the shortest end of the triangle is being propped up (the “consumer stimulus” of Stage 10.2).")}`);
    if (a.inj === "none") lines.push(`<b>${T("扭曲：", "Distortion: ")}</b>${T("之前的扭曲正在被拆除；这是清算阶段而非注入阶段（阶段 5.3）。", "an earlier distortion is being unwound; this is the liquidation phase, not the injection phase (Stage 5.3).")}`);

    // 方向
    const dirMap = {
      tech: T("方向：长久期资产先涨、涨最多；扩张停止时它们先回落（阶段 10.3）。", "Direction: long-duration assets rise first and most; when the expansion stops they fall first (Stage 10.3)."),
      upstream: T("方向：上游资本品与设备供应商先扩张；资源争抢将抬高它们的成本；若融资条件收紧，它们最先烂尾（阶段 5.2、18.5）。", "Direction: upstream capital goods and equipment suppliers expand first; the scramble for resources will raise their costs; if financing tightens, they are the first to stall (Stages 5.2, 18.5)."),
      downstream: T("方向：下游利润是暂时的——补贴停止或物价追上后，零售利润回落；上游没有跟着扩张，所以没有产能可以“交付”这些需求。", "Direction: downstream profits are temporary — once transfers stop or prices catch up, retail margins fall back; upstream did not expand, so there is no capacity to “deliver” this demand."),
      none: T("方向：之前被拉长的板块在收缩，久期越长跌越狠；下游必需品与靠利润活的企业相对稳健。", "Direction: previously stretched sectors are contracting, the longer the duration the harder; downstream staples and profit-funded firms are relatively robust."),
    };
    lines.push(`<b>${T("方向：", "Direction: ")}</b>${dirMap[a.boom].replace(/^(方向：|Direction: )/, "")}`);

    // 脆弱
    const fragMap = {
      refi: T("脆弱：任何靠再融资付息的东西——僵尸企业、杠杆地产、高债务政府——它们的存活取决于利率不回归。这是阶段 10.4 的核心指标。", "Fragility: anything servicing interest by refinancing — zombies, leveraged property, indebted governments — survives only if the rate does not normalize. This is the core index of Stage 10.4."),
      capex: T("脆弱：按低利率算账的长期项目。融资成本上升 2 个百分点就能让“很赚钱”的项目变成烂尾（阶段 10.4 ②）。", "Fragility: long projects penciled at low rates. A two-point rise in funding cost can turn a “very profitable” project into an abandoned one (Stage 10.4 ②)."),
      wages: T("脆弱：实际工资。补贴一次性，物价不回落；工资落后于物价的人是通胀税的纳税人（阶段 4.3）。", "Fragility: real wages. Transfers are one-off, prices do not fall back; those whose wages lag prices pay the inflation tax (Stage 4.3)."),
      nothing: T("脆弱：结构相对稳健——但请检查你是否漏看了再融资依赖。", "Fragility: the structure is relatively robust — but check whether you have overlooked refinancing dependence."),
    };
    lines.push(fragMap[a.frag]);
    if (a.dur === "long") lines.push(T("久期提示：被推高的是长久期资产，估值对折现率的杠杆最长——这说明的是“最敏感”，不是“何时跌”。", "Duration note: the lifted assets are long-duration, with the longest lever to the discount rate — this says “most sensitive,” not “when it falls”."));
    else lines.push(T("久期提示：被推高的是短久期资产，利率变化对它们的估值影响有限；风险更多来自需求的一次性而非折现率。", "Duration note: the lifted assets are short-duration, so rate changes move their valuations little; the risk is more the one-off nature of demand than the discount rate."));

    // 时间视角
    const horMap = {
      short: T("时间视角 1–3 年：你面对的恰恰是理论沉默的部分——时机。脆弱的结构可以站得比你的耐心久（阶段 10.5 ④）。这个视角下，“为不确定性定价”（保留选择权）比“押方向”更符合理论。", "Horizon 1–3 years: you face exactly what the theory is silent on — timing. Fragile structures can stand longer than your patience (Stage 10.5 ④). On this horizon, “pricing uncertainty” (keeping optionality) fits the theory better than betting on direction."),
      mid: T("时间视角 3–10 年：方向与脆弱性的判断在这个尺度上更可能兑现，但 2010 年代的教训是它也可能兑现得很晚。谦逊原则：把错误的代价限制在可承受范围内。", "Horizon 3–10 years: direction and fragility judgments are more likely to play out on this scale, but the lesson of the 2010s is that they can play out very late. Humility principle: keep the cost of being wrong bearable."),
      long: T("时间视角 10 年以上：结构问题几乎必然显现，但你会经历完整的周期。理论提醒的是“钱不是财富”——问你拥有的东西的产出能力是否增加，而不是账面数字。", "Horizon 10+ years: structural problems will almost certainly surface, but you will live through full cycles. The theory's reminder: money is not wealth — ask whether the productive capacity of what you own has grown, not whether the paper number has."),
    };
    lines.push(`<b>${T("时间视角：", "Time horizon: ")}</b>${horMap[a.hor]}`);
    lines.push(`<span class="warn">${T("这份总结说了扭曲、方向、脆弱与视角。它没有说——也不能说——涨跌幅度与时间。不构成投资建议。", "This summary has stated distortion, direction, fragility and horizon. It has not said — and cannot say — magnitude or timing. Not investment advice.")}</span>`);
    $("fc-out").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelectorAll("#fc-scn button").forEach((b) => b.addEventListener("click", () => {
    root.querySelectorAll("#fc-scn button").forEach((x) => x.classList.remove("on"));
    b.classList.add("on"); si = +b.dataset.i; answers = {}; paintCard(); paintOut();
  }));
  $("fc-hint").addEventListener("click", () => {
    const h = SCENARIOS[si].hint;
    for (const k of Object.keys(h)) if (h[k]) answers[k] = h[k];
    if (!answers.hor) answers.hor = "mid";
    paintCard(); paintOut();
  });
  $("fc-clear").addEventListener("click", () => { answers = {}; paintCard(); paintOut(); });
  paintCard(); paintOut();
}
