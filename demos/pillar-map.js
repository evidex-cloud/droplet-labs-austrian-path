// 交互演示：五大支柱地图——点一根柱子看定义、它在课程里对应的课、一个日常例子；
// 然后做“这是哪根柱子的问题？”8 题小测，按柱子统计你的命中率，指出你最需要加固的那根。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const pillars = [
    {
      id: "subj", num: "①", name: T("主观主义", "Subjectivism"),
      def: T("价值不是物品的属性，是行动人在具体处境下对“它能多大程度帮我达到目的”的评价——只能排序，不能测量。", "Value is not a property of things but an acting person's judgment, in a particular situation, of how much a thing helps reach their ends — it can be ranked, never measured."),
      lessons: [T("阶段 1.2 主观价值", "Stage 1.2 Subjective value"), T("阶段 1.4 机会成本", "Stage 1.4 Opportunity cost"), T("阶段 4.2 货币的价值", "Stage 4.2 The value of money"), T("阶段 15.3 零边际成本定价", "Stage 15.3 Zero-marginal-cost pricing"), T("阶段 16.1 注意力经济", "Stage 16.1 The attention economy")],
      ex: T("同一张演唱会门票：铁杆歌迷愿出 3000，陪朋友的最多 200，不想去的人倒贴也不要。票“本身”不值任何数。", "One concert ticket: the devoted fan would pay $300, the tag-along $20, the reluctant friend nothing at all. The ticket is worth no number “in itself.”"),
      rules: T("排除：劳动价值论、成本决定价格、“客观需要”。", "Rules out: the labor theory of value, cost-determines-price, “objective needs.”"),
    },
    {
      id: "marg", num: "②", name: T("边际主义", "Marginalism"),
      def: T("人只在“再多一单位”与“再少一单位”之间选择。价值等于边际单位的用途，价格由边际买卖双方划定，成本是边际上被放弃的选项。", "People choose only between “one more unit” and “one less.” Value equals the use of the marginal unit, price is bracketed by the marginal buyers and sellers, cost is the option given up at the margin."),
      lessons: [T("阶段 1.1 钻石与水", "Stage 1.1 Diamonds and water"), T("阶段 1.3 价格形成", "Stage 1.3 Price formation"), T("阶段 3.1 时间偏好与利率", "Stage 3.1 Time preference and interest"), T("阶段 6.3 利润与亏损", "Stage 6.3 Profit and loss"), T("阶段 15.1 网络效应", "Stage 15.1 Network effects")],
      ex: T("航空公司起飞前一天把剩下 12 个座位从 800 降到 300：飞机反正要飞，边际成本近零，边际收益 300 > 0。定价看边际，不看平均成本。", "An airline cuts its last 12 seats from $800 to $300 the day before: the plane flies anyway, marginal cost is near zero, marginal revenue $300 > 0. Pricing looks at the margin, not average cost."),
      rules: T("解开：钻石与水的悖论；教科书的“需求曲线”从这里长出来。", "Solves: the diamond–water paradox; the textbook demand curve grows from here."),
    },
    {
      id: "indiv", num: "③", name: T("方法论个人主义与行动学", "Methodological individualism & praxeology"),
      def: T("只有具体的人会行动；“市场”“国家”“阶级”“AI”都不会。人的行动是有目的的，经济学定律从这一点逻辑演绎，而不是从统计归纳。", "Only particular people act; “the market,” “the state,” “the class,” “AI” do not. Action is purposeful, and the laws of economics are deduced from that fact rather than induced from statistics."),
      lessons: [T("阶段 2.1 行动公理", "Stage 2.1 The action axiom"), T("阶段 2.2 先验与经验", "Stage 2.2 A priori vs empirical"), T("阶段 2.3 方法论个人主义", "Stage 2.3 Methodological individualism"), T("阶段 8.4 国家的经济学", "Stage 8.4 The economics of the state"), T("阶段 18.2 AI 是资本品", "Stage 18.2 AI as a capital good")],
      ex: T("“央行注入 1000 亿，经济获得提振。”谁先拿到？银行 → 大企业 → 资产价格先涨 → 工薪阶层几个月后在超市看到涨价。把主语找回来，结论就变了。", "“The central bank injects $100 billion and the economy gets a boost.” Who gets it first? Banks → large firms → asset prices rise first → wage earners see higher prices months later. Put the subject back and the conclusion changes."),
      rules: T("排除：把总量当行动者、把人当物理变量、用相关代替因果。", "Rules out: aggregates as actors, people as physical variables, correlation as causation."),
    },
    {
      id: "time", num: "④", name: T("真实时间、资本与不确定性", "Real time, capital & uncertainty"),
      def: T("生产要等待，等待要报酬（利息）；资本品各有专用性、排成阶段，投错了挪不回来；未来是真正的未知，企业家的判断是在未知里下注。", "Production requires waiting and waiting must be paid (interest); capital goods are specific and arranged in stages, and cannot be moved back once misplaced; the future is genuinely unknown, and entrepreneurial judgment is betting inside that unknown."),
      lessons: [T("阶段 3.1 时间偏好", "Stage 3.1 Time preference"), T("阶段 3.4 异质资本", "Stage 3.4 Heterogeneous capital"), T("阶段 5.1 ABCT 一图讲清", "Stage 5.1 ABCT in one picture"), T("阶段 6.1 企业家精神", "Stage 6.1 Entrepreneurship"), T("阶段 18.3 判断能否自动化", "Stage 18.3 Can judgment be automated?"), T("阶段 18.5 AI 泡沫？", "Stage 18.5 An AI bubble?")],
      ex: T("自然利率 5% 被压到 2%：一个 10 年项目的净现值从 −800 万变成 +1200 万，全城 100 个项目同时开工；真实储蓄没变，两年后钢材、工人、资金都不够，一半烂尾——厂房改不成别的。", "The natural rate of 5% is pushed to 2%: a 10-year project's NPV flips from −$8m to +$12m and a hundred break ground at once; real saving is unchanged, and two years later steel, workers and finance run short — half are abandoned, and a plant cannot become anything else."),
      rules: T("解释：商业周期不是“市场失灵”，是信号被篡改后的集体误判。", "Explains: the cycle is not “market failure” but collective misjudgment after the signal was falsified."),
    },
    {
      id: "price", num: "⑤", name: T("价格作为知识与自发秩序", "Prices as knowledge & spontaneous order"),
      def: T("没有产权就没有价格，没有价格就没有经济计算（米塞斯 1920）；知识分散在无数人头脑里，价格把它压成一个数（哈耶克 1945）；市场、货币、法律都是没人设计却运转的秩序。", "No property, no prices, no economic calculation (Mises 1920); knowledge is dispersed across countless minds and prices compress it into a number (Hayek 1945); markets, money and law are orders nobody designed that nonetheless work."),
      lessons: [T("阶段 7.1 米塞斯 1920", "Stage 7.1 Mises 1920"), T("阶段 7.2 哈耶克的知识", "Stage 7.2 Hayek on knowledge"), T("阶段 7.4 自发秩序", "Stage 7.4 Spontaneous order"), T("阶段 9.3 法律也能长出来", "Stage 9.3 Law can grow"), T("阶段 18.1 AI 能中央计划吗", "Stage 18.1 Can AI central-plan?")],
      ex: T("铜价从每吨约 2000 美元涨到某些年份 8000 以上：没有人下令节约用铜，但电缆厂改用铝、矿商开新矿、废品站更积极回收——几百万个决定同向调整，没人看见全局。", "Copper rises from about $2,000 a ton to above $8,000 in some years: nobody orders anyone to economize, but cable makers switch to aluminum, miners open mines, scrap yards recycle harder — millions of decisions shift together with nobody seeing the whole."),
      rules: T("排除：中央计划；“大数据/AI 能替代价格”——数据在价格之前不存在。", "Rules out: central planning; “big data/AI can replace prices” — the data do not exist before prices."),
    },
  ];

  const quiz = [
    { s: T("一辆二手自行车：卖家开价 300，买家心里只值 150，没有成交。谁“错”了？", "A used bike: the seller asks $300, the buyer thinks it is worth $150, no trade happens. Who is “wrong”?"), a: "subj",
      why: T("谁都没错。评价在各自心里，只能排序不能测量；没有成交只说明两人的评价没有交叠。", "Neither. Valuations live in each mind and can only be ranked; no trade just means the two valuations do not overlap.") },
    { s: T("第三块披萨你还是会吃，但你不愿意再为它付第一块的价钱。", "You would still eat a third slice of pizza, but you would not pay what you paid for the first."), a: "marg",
      why: T("边际效用递减：第三块服务的是更次要的用途，所以边际那一块的价值低。", "Diminishing marginal utility: the third slice serves a less important use, so the marginal slice is worth less.") },
    { s: T("新闻标题：“市场陷入恐慌，抛售一切。”", "Headline: “The market panics, sells everything.”"), a: "indiv",
      why: T("“市场”不会恐慌。是哪些基金经理、哪些散户、出于什么目的在卖？把主语找回来才有解释。", "“The market” cannot panic. Which fund managers, which retail traders, with what ends, are selling? Only with the subject restored is there an explanation.") },
    { s: T("一家为 3D 电视建的专用工厂，在 3D 电视退潮后几乎无法改做别的。", "A factory built specifically for 3D televisions can hardly be repurposed after 3D TV fades."), a: "time",
      why: T("异质资本：资本品有专用性，投错了挪不回来——这也是为什么错误投资是真损失。", "Heterogeneous capital: capital goods are specific and cannot be moved back once misplaced — which is why malinvestment is a real loss.") },
    { s: T("政府把汽油价格封顶在市价之下，一周之内加油站排长队、油站断货。", "The government caps gasoline below the market price; within a week there are queues and stations run dry."), a: "price",
      why: T("价格信号被篡改：市价本来在告诉所有人“省着用、多运来”；封顶后这条信息消失，排队取代了价格。（柱 ② 的边际分析也在，但核心是信号丢失。）", "The price signal was falsified: the market price was telling everyone “economize, ship more”; the cap erased that message and queues replaced the price. (Pillar ② is present too, but the core is the lost signal.)") },
    { s: T("一个创始人押上 18 个月跑道做一个还没有人要求过的产品。", "A founder bets an 18-month runway on a product nobody has asked for yet."), a: "time",
      why: T("不确定性与企业家判断：未来不是概率已知的风险，用例会不会付钱要等行动之后才知道。这是下注，不是计算。", "Uncertainty and entrepreneurial judgment: the future is not risk with known odds; whether the use case pays is known only after acting. This is a bet, not a computation.") },
    { s: T("没有人设计过英语的语法，也没有人指挥过比特币被谁先接受、后来怎么传播。", "Nobody designed English grammar, and nobody directed who first accepted Bitcoin or how it spread."), a: "price",
      why: T("自发秩序：人的行动的结果，而非人的设计的结果（门格尔、哈耶克）。语言、货币、普通法都是。", "Spontaneous order: the result of human action but not of human design (Menger, Hayek). Language, money and common law all are.") },
    { s: T("水维持生命，钻石只是好看，但一颗钻石能换几万桶水。", "Water sustains life and a diamond merely sparkles, yet one diamond buys tens of thousands of buckets of water."), a: "marg",
      why: T("边际主义：你从不在“水”和“钻石”之间选，只在“再多一桶”和“再多一颗”之间选——阶段 1.1 的钻石与水。", "Marginalism: you never choose between “water” and “diamonds,” only between “one more bucket” and “one more stone” — Stage 1.1.") },
  ];

  let sel = "subj";
  const picks = new Array(quiz.length).fill(null);

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🏛️ 五大支柱地图：点一根柱子，再判断“这是哪根柱子的问题”", "🏛️ The five-pillar map: click a pillar, then judge “which pillar is this?”")}</div>
      <div class="demo-btns" id="pm-btns">
        ${pillars.map((p) => `<button class="demo-btn ${p.id === sel ? "active" : ""}" data-p="${p.id}">${p.num} ${p.name}</button>`).join("")}
      </div>
      <div class="demo-block" id="pm-detail"></div>
      <div class="demo-block">
        <div class="demo-label">${T("小测：这是哪根柱子的问题？（8 题）", "Quiz: which pillar is this? (8 items)")}</div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("已答", "Answered")}</div><div class="v" id="pm-done">0/${quiz.length}</div></div>
          <div class="stat"><div class="k">${T("答对", "Correct")}</div><div class="v pos" id="pm-ok">0</div></div>
          <div class="stat"><div class="k">${T("最需加固", "Weakest pillar")}</div><div class="v acc" id="pm-weak" style="font-size:14px">–</div></div>
        </div>
        <div id="pm-quiz"></div>
        <div class="demo-btns"><button class="demo-btn" id="pm-reset">${T("重做小测", "Reset quiz")}</button></div>
        <div class="stages" id="pm-tally"></div>
      </div>
      <p class="demo-tip">${T(
        "真实问题往往同时涉及几根柱子，小测里选的是“最核心”的那根——看解释里提到的第二根柱子。做完看底部的柱子命中率：命中最低的那根，就是你在后面阶段里要特别留心的。",
        "Real problems usually involve several pillars; the quiz asks for the “most central” one — and the explanations name the second pillar in play. When done, check the per-pillar hit rate at the bottom: the lowest one is the pillar to watch for in later stages."
      )}</p>
    </div>`;

  const byId = (id) => pillars.find((p) => p.id === id);

  const paintDetail = () => {
    const p = byId(sel);
    root.querySelector("#pm-detail").innerHTML = `
      <div class="demo-label" style="font-size:15px;color:var(--orange-ink)">${p.num} ${p.name}</div>
      <p style="margin:6px 0 10px">${p.def}</p>
      <div class="cmp">
        <div class="cmp-cell hl"><h5>${T("在课程里的位置", "Where it lives in the course")}</h5>${p.lessons.map((l) => `<div>· ${l}</div>`).join("")}</div>
        <div class="cmp-cell"><h5>${T("一个日常例子", "An everyday example")}</h5><div>${p.ex}</div><div class="demo-meta">${p.rules}</div></div>
      </div>`;
  };

  const paintQuiz = () => {
    root.querySelector("#pm-quiz").innerHTML = quiz.map((q, i) => {
      const pk = picks[i];
      const right = pk && pk === q.a;
      return `<div class="scn" style="margin-top:10px;${pk ? (right ? "border-color:var(--green)" : "border-color:var(--red)") : ""}">
        <div class="scn-q"><span style="color:var(--muted);font-size:12px;margin-right:8px">${i + 1}/${quiz.length}</span>${q.s}</div>
        <div class="demo-btns" style="margin:6px 0">
          ${pillars.map((p) => `<button class="demo-btn ${pk === p.id ? "active" : ""}" data-q="${i}" data-a="${p.id}" ${pk ? "disabled" : ""} style="padding:6px 10px;font-size:13px">${p.num} ${p.name}</button>`).join("")}
        </div>
        ${pk ? `<div class="scn-meta"><span class="pill ${right ? "ok" : "bad"}">${right ? T("答对", "Correct") : T("答错", "Missed")}</span> ${T("核心柱子：", "Central pillar: ")}<b>${byId(q.a).num} ${byId(q.a).name}</b>。${q.why}</div>` : ""}
      </div>`;
    }).join("");

    const done = picks.filter(Boolean).length;
    const ok = picks.filter((p, i) => p === quiz[i].a).length;
    root.querySelector("#pm-done").textContent = `${done}/${quiz.length}`;
    root.querySelector("#pm-ok").textContent = ok;

    // 按柱子统计命中率（只统计已答题）
    const tally = pillars.map((p) => {
      const idx = quiz.map((q, i) => (q.a === p.id ? i : -1)).filter((i) => i >= 0);
      const answered = idx.filter((i) => picks[i]);
      const hit = answered.filter((i) => picks[i] === p.id).length;
      return { p, n: idx.length, answered: answered.length, hit };
    });
    root.querySelector("#pm-tally").innerHTML = tally.map((t) => `<div class="stage-bar">
      <span class="lab" style="width:190px;text-align:left">${t.p.num} ${t.p.name}</span>
      <div class="track" style="height:12px"><div class="fill" style="width:${t.answered ? (t.hit / t.n) * 100 : 0}%;background:${t.answered && t.hit === t.answered ? "var(--green)" : "var(--orange)"}"></div></div>
      <span class="val" style="width:40px;font-size:12px">${t.hit}/${t.n}</span>
    </div>`).join("");
    const weakest = tally.filter((t) => t.answered).sort((a, b) => (a.hit / a.n) - (b.hit / b.n))[0];
    root.querySelector("#pm-weak").textContent = done ? (weakest && weakest.hit < weakest.n ? `${weakest.p.num} ${weakest.p.name}` : T("都稳", "All solid")) : "–";
  };

  root.querySelector("#pm-btns").addEventListener("click", (ev) => {
    const b = ev.target.closest("button[data-p]");
    if (!b) return;
    sel = b.dataset.p;
    root.querySelectorAll("#pm-btns button").forEach((x) => x.classList.toggle("active", x === b));
    paintDetail();
  });
  root.querySelector("#pm-quiz").addEventListener("click", (ev) => {
    const b = ev.target.closest("button[data-q]");
    if (!b || b.disabled) return;
    picks[+b.dataset.q] = b.dataset.a;
    paintQuiz();
  });
  root.querySelector("#pm-reset").addEventListener("click", () => { picks.fill(null); paintQuiz(); });

  paintDetail();
  paintQuiz();
}
