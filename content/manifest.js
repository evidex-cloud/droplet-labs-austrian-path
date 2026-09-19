// 课程地图（双语 + 元数据）。路线图/侧栏只读这个文件。
// 每节字段：id, title(中), titleEn(英), module(中文正文路径), status('ready'可学/其它=编写中),
//           difficulty(1基础/2进阶/3高级), personas(相关学习目标)
// 英文正文在 ./content/lessons/en/ 下同名文件；难度与 persona 与语言无关。
// 加一节课 = 写一个 lessons 文件 + 把这里的 status 改成 'ready'，不动核心代码。

export const COURSE = {
  title: "Droplet Labs · 奥派之路",
  titleEn: "Droplet Labs · Austrian Path",
  subtitle: "从浅到深，学会像奥地利学派经济学家一样思考——从钻石与水的悖论，到用奥派眼镜看网络效应、社交媒体、比特币与 AI",
  subtitleEn: "From the surface to the depths — learn to think like an Austrian economist: from the diamond–water paradox to reading network effects, social media, Bitcoin and AI through Austrian eyes.",

  tiers: [
    { id: "intro",    label: "入门层 · 浅",        labelEn: "Beginner · Surface",       color: "#d4a017" },
    { id: "core",     label: "原理层",              labelEn: "Principles",               color: "#b7791f" },
    { id: "systems",  label: "系统层",              labelEn: "Systems",                  color: "#9a6217" },
    { id: "mastery",  label: "精通层 · 深",         labelEn: "Mastery · Deep",           color: "#7a4b10" },
    { id: "newera",   label: "新经济时代 · 奥派应用", labelEn: "The New Economy · Austrian Lenses", color: "#2563eb" },
    { id: "infinity", label: "∞ 之后 · 成为奥派经济学家", labelEn: "∞ Beyond · Becoming an Austrian Economist", color: "#9333ea" },
  ],

  goals: [
    { id: "investor", label: "投资者",     labelEn: "Investor" },
    { id: "builder",  label: "创业者/开发者", labelEn: "Builder / Developer" },
    { id: "scholar",  label: "学者/学生",   labelEn: "Scholar / Student" },
    { id: "curious",  label: "好奇者",     labelEn: "Curious" },
  ],

  stages: [
    {
      n: 0, tier: "intro", title: "为什么是奥地利学派", titleEn: "Why the Austrian School",
      blurb: "经济学在研究什么 · 奥派是什么、不是什么 · 150 年谱系 · 五大支柱地图", blurbEn: "What economics studies · What Austrian is (and isn't) · A 150-year lineage · The five-pillar map",
      lessons: [
        { id: "what-economics-studies", title: "经济学在研究什么：稀缺、选择与人的行动", titleEn: "What Economics Studies: Scarcity, Choice & Human Action", module: "./content/lessons/stage0-what-economics-studies.js", status: "ready", difficulty: 1, personas: ["investor", "builder", "scholar", "curious"] },
        { id: "what-is-austrian", title: "奥地利学派是什么、不是什么", titleEn: "What the Austrian School Is — and Isn't", module: "./content/lessons/stage0-what-is-austrian.js", status: "ready", difficulty: 1, personas: ["investor", "builder", "scholar", "curious"] },
        { id: "vienna-lineage", title: "从维也纳到今天：一部 150 年的谱系", titleEn: "From Vienna to Today: A 150-Year Lineage", module: "./content/lessons/stage0-vienna-lineage.js", status: "ready", difficulty: 1, personas: ["scholar", "curious"] },
        { id: "five-pillars", title: "一张地图：奥派的五大支柱", titleEn: "The Map: Five Pillars of Austrian Economics", module: "./content/lessons/stage0-five-pillars.js", status: "ready", difficulty: 1, personas: ["investor", "builder", "scholar", "curious"] },
      ],
    },
    {
      n: 1, tier: "intro", title: "价值与价格的秘密", titleEn: "The Secret of Value & Price",
      blurb: "钻石与水 · 主观价值 · 价格怎么形成 · 机会成本与看不见的 · 交换与分工", blurbEn: "Diamonds & water · Subjective value · How prices form · Opportunity cost & the unseen · Exchange & division of labor",
      lessons: [
        { id: "diamonds-water", title: "钻石与水：边际革命怎么解开千年悖论", titleEn: "Diamonds & Water: How the Marginal Revolution Cracked a 2,000-Year Paradox", module: "./content/lessons/stage1-diamonds-water.js", status: "ready", difficulty: 1, personas: ["investor", "builder", "scholar", "curious"] },
        { id: "subjective-value", title: "主观价值：价值在心里，不在物里", titleEn: "Subjective Value: Value Lives in Minds, Not in Things", module: "./content/lessons/stage1-subjective-value.js", status: "ready", difficulty: 1, personas: ["investor", "builder", "scholar", "curious"] },
        { id: "price-formation", title: "价格怎么形成：从边际对到市场价", titleEn: "How Prices Form: From Marginal Pairs to the Market Price", module: "./content/lessons/stage1-price-formation.js", status: "ready", difficulty: 2, personas: ["investor", "builder", "scholar"] },
        { id: "opportunity-cost", title: "机会成本与“看不见的”：巴斯夏的破窗", titleEn: "Opportunity Cost & the Unseen: Bastiat's Broken Window", module: "./content/lessons/stage1-opportunity-cost.js", status: "ready", difficulty: 1, personas: ["investor", "builder", "scholar", "curious"] },
        { id: "exchange-division", title: "交换、分工与比较优势：为什么合作总比单干强", titleEn: "Exchange, Division of Labor & Comparative Advantage: Why Cooperation Beats Going Alone", module: "./content/lessons/stage1-exchange-division.js", status: "ready", difficulty: 1, personas: ["builder", "scholar", "curious"] },
      ],
    },
    {
      n: 2, tier: "core", title: "方法论：人的行动学", titleEn: "Method: Praxeology",
      blurb: "行动公理 · 先验 vs 经验 · 方法论个人主义 · 理论 vs 历史 · 奥派 vs 数学模型（非学者可先跳到阶段 3，回头再读）", blurbEn: "The action axiom · A priori vs empirical · Methodological individualism · Theory vs history · Austrians vs math models (non-scholars may skip ahead to Stage 3 and return later)",
      lessons: [
        { id: "action-axiom", title: "行动公理：人有目的地行动，其余皆推论", titleEn: "The Action Axiom: Humans Act Purposefully — Everything Else Follows", module: "./content/lessons/stage2-action-axiom.js", status: "ready", difficulty: 2, personas: ["scholar", "curious"] },
        { id: "apriori-empirical", title: "先验与经验：为什么奥派不做“实验”", titleEn: "A Priori vs Empirical: Why Austrians Don't Run Experiments", module: "./content/lessons/stage2-apriori-empirical.js", status: "ready", difficulty: 3, personas: ["scholar"] },
        { id: "individualism-history", title: "方法论个人主义与“理论 vs 历史”", titleEn: "Methodological Individualism & Theory vs History", module: "./content/lessons/stage2-individualism-history.js", status: "ready", difficulty: 2, personas: ["scholar", "curious"] },
        { id: "vs-math-models", title: "奥派 vs 主流：数学、均衡与模型到底争什么", titleEn: "Austrians vs the Mainstream: What the Fight over Math, Equilibrium & Models Is Really About", module: "./content/lessons/stage2-vs-math-models.js", status: "ready", difficulty: 2, personas: ["investor", "scholar", "curious"] },
      ],
    },
    {
      n: 3, tier: "core", title: "资本、时间与利息", titleEn: "Capital, Time & Interest",
      blurb: "时间偏好 · 迂回生产 · 储蓄与生产阶段 · 异质资本 · 自然利率", blurbEn: "Time preference · Roundabout production · Saving & the stages of production · Heterogeneous capital · The natural rate",
      lessons: [
        { id: "time-preference", title: "时间偏好：利息从哪里来", titleEn: "Time Preference: Where Interest Comes From", module: "./content/lessons/stage3-time-preference.js", status: "ready", difficulty: 2, personas: ["investor", "builder", "scholar", "curious"] },
        { id: "roundabout-production", title: "迂回生产与哈耶克三角", titleEn: "Roundabout Production & the Hayekian Triangle", module: "./content/lessons/stage3-roundabout-production.js", status: "ready", difficulty: 2, personas: ["investor", "builder", "scholar"] },
        { id: "saving-stages", title: "储蓄、投资与生产阶段的重排", titleEn: "Saving, Investment & the Re-shaping of Production Stages", module: "./content/lessons/stage3-saving-stages.js", status: "ready", difficulty: 3, personas: ["investor", "scholar"] },
        { id: "heterogeneous-capital", title: "异质资本：拉赫曼的拼图与企业家的重组", titleEn: "Heterogeneous Capital: Lachmann's Jigsaw & Entrepreneurial Recombination", module: "./content/lessons/stage3-heterogeneous-capital.js", status: "ready", difficulty: 3, personas: ["builder", "scholar"] },
        { id: "natural-rate", title: "利率是什么、不是什么：自然利率 vs 市场利率", titleEn: "What the Interest Rate Is — and Isn't: Natural vs Market Rate", module: "./content/lessons/stage3-natural-rate.js", status: "ready", difficulty: 2, personas: ["investor", "scholar"] },
      ],
    },
    {
      n: 4, tier: "core", title: "货币", titleEn: "Money",
      blurb: "货币的起源与回归定理 · 货币需求与购买力 · 坎蒂隆效应 · 部分准备金 · 央行与法币", blurbEn: "Origin of money & the regression theorem · Money demand & purchasing power · Cantillon effects · Fractional reserves · Central banks & fiat",
      lessons: [
        { id: "origin-of-money", title: "货币的起源：门格尔的演化与米塞斯的回归定理", titleEn: "The Origin of Money: Menger's Evolution & Mises's Regression Theorem", module: "./content/lessons/stage4-origin-of-money.js", status: "ready", difficulty: 2, personas: ["investor", "builder", "scholar", "curious"] },
        { id: "money-demand", title: "货币需求与购买力：为什么货币从不“中性”", titleEn: "Money Demand & Purchasing Power: Why Money Is Never Neutral", module: "./content/lessons/stage4-money-demand.js", status: "ready", difficulty: 2, personas: ["investor", "scholar"] },
        { id: "cantillon-inflation", title: "通货膨胀的真相：坎蒂隆效应与谁先拿到新钱", titleEn: "The Truth about Inflation: Cantillon Effects & Who Gets the New Money First", module: "./content/lessons/stage4-cantillon-inflation.js", status: "ready", difficulty: 2, personas: ["investor", "builder", "scholar", "curious"] },
        { id: "fractional-reserve", title: "部分准备金银行与信用扩张", titleEn: "Fractional-Reserve Banking & Credit Expansion", module: "./content/lessons/stage4-fractional-reserve.js", status: "ready", difficulty: 3, personas: ["investor", "scholar"] },
        { id: "central-banks-fiat", title: "中央银行与法币：从金本位到 1971 年之后", titleEn: "Central Banks & Fiat Money: From the Gold Standard to After 1971", module: "./content/lessons/stage4-central-banks-fiat.js", status: "ready", difficulty: 2, personas: ["investor", "scholar", "curious"] },
      ],
    },
    {
      n: 5, tier: "core", title: "奥地利学派商业周期理论", titleEn: "The Austrian Business Cycle",
      blurb: "一图讲清 ABCT · 繁荣与错误投资 · 萧条是治疗 · 用 ABCT 读历史 · 批评与回应", blurbEn: "ABCT in one picture · Boom & malinvestment · The bust as cure · Reading history with ABCT · Critiques & replies",
      lessons: [
        { id: "abct-one-picture", title: "ABCT 一图讲清：人为压低的利率如何撒谎", titleEn: "ABCT in One Picture: How an Artificially Low Rate Lies", module: "./content/lessons/stage5-abct-one-picture.js", status: "ready", difficulty: 2, personas: ["investor", "builder", "scholar", "curious"] },
        { id: "boom-malinvestment", title: "繁荣：错误投资是怎么一点点堆起来的", titleEn: "The Boom: How Malinvestment Piles Up", module: "./content/lessons/stage5-boom-malinvestment.js", status: "ready", difficulty: 2, personas: ["investor", "builder", "scholar"] },
        { id: "bust-liquidation", title: "萧条：清算是治疗，不是疾病", titleEn: "The Bust: Liquidation Is the Cure, Not the Disease", module: "./content/lessons/stage5-bust-liquidation.js", status: "ready", difficulty: 2, personas: ["investor", "scholar", "curious"] },
        { id: "abct-history", title: "用 ABCT 读历史：1929 · 2000 · 2008 · 2020–22", titleEn: "Reading History with ABCT: 1929 · 2000 · 2008 · 2020–22", module: "./content/lessons/stage5-abct-history.js", status: "ready", difficulty: 2, personas: ["investor", "scholar", "curious"] },
        { id: "abct-critiques", title: "ABCT 的批评与回应：克鲁格曼、弗里德曼与理性预期", titleEn: "Critiques of ABCT & the Replies: Krugman, Friedman & Rational Expectations", module: "./content/lessons/stage5-abct-critiques.js", status: "ready", difficulty: 3, personas: ["scholar", "investor"] },
      ],
    },
    {
      n: 6, tier: "core", title: "企业家、竞争与市场过程", titleEn: "Entrepreneurship, Competition & the Market Process",
      blurb: "警觉与判断 · 竞争是过程 · 利润与亏损 · 垄断问题", blurbEn: "Alertness & judgment · Competition as a process · Profit & loss · The monopoly question",
      lessons: [
        { id: "entrepreneur-alertness", title: "企业家精神：柯兹纳的警觉与米塞斯的判断", titleEn: "Entrepreneurship: Kirzner's Alertness & Mises's Judgment", module: "./content/lessons/stage6-entrepreneur-alertness.js", status: "ready", difficulty: 2, personas: ["builder", "investor", "scholar"] },
        { id: "competition-process", title: "竞争是过程，不是状态：哈耶克的“发现程序”", titleEn: "Competition Is a Process, Not a State: Hayek's Discovery Procedure", module: "./content/lessons/stage6-competition-process.js", status: "ready", difficulty: 2, personas: ["builder", "scholar", "curious"] },
        { id: "profit-loss", title: "利润与亏损：市场的反馈系统与消费者主权", titleEn: "Profit & Loss: The Market's Feedback System & Consumer Sovereignty", module: "./content/lessons/stage6-profit-loss.js", status: "ready", difficulty: 2, personas: ["investor", "builder", "scholar"] },
        { id: "monopoly-question", title: "垄断问题：奥派为什么不怕“大”", titleEn: "The Monopoly Question: Why Austrians Don't Fear 'Big'", module: "./content/lessons/stage6-monopoly-question.js", status: "ready", difficulty: 3, personas: ["builder", "scholar", "curious"] },
      ],
    },
    {
      n: 7, tier: "systems", title: "知识、价格与社会主义计算争论", titleEn: "Knowledge, Prices & the Socialist Calculation Debate",
      blurb: "米塞斯 1920 · 哈耶克的知识 · 兰格与市场社会主义 · 自发秩序 · 大数据能计划吗", blurbEn: "Mises 1920 · Hayek on knowledge · Lange & market socialism · Spontaneous order · Can big data plan?",
      lessons: [
        { id: "mises-1920", title: "米塞斯 1920：没有价格，就没有经济计算", titleEn: "Mises 1920: No Prices, No Economic Calculation", module: "./content/lessons/stage7-mises-1920.js", status: "ready", difficulty: 2, personas: ["scholar", "builder", "curious"] },
        { id: "hayek-knowledge", title: "哈耶克：知识在社会中的运用", titleEn: "Hayek: The Use of Knowledge in Society", module: "./content/lessons/stage7-hayek-knowledge.js", status: "ready", difficulty: 2, personas: ["scholar", "builder", "investor", "curious"] },
        { id: "lange-market-socialism", title: "兰格模型与“市场社会主义”为什么失败", titleEn: "Lange's Model & Why 'Market Socialism' Failed", module: "./content/lessons/stage7-lange-market-socialism.js", status: "ready", difficulty: 3, personas: ["scholar"] },
        { id: "spontaneous-order", title: "自发秩序：设计出来的 vs 长出来的", titleEn: "Spontaneous Order: Designed vs Grown", module: "./content/lessons/stage7-spontaneous-order.js", status: "ready", difficulty: 2, personas: ["builder", "scholar", "curious"] },
        { id: "bigdata-planning", title: "计算争论的当代回响：大数据能中央计划吗", titleEn: "The Debate Today: Can Big Data Central-Plan?", module: "./content/lessons/stage7-bigdata-planning.js", status: "ready", difficulty: 2, personas: ["builder", "scholar", "curious"] },
      ],
    },
    {
      n: 8, tier: "systems", title: "干预主义经济学", titleEn: "The Economics of Intervention",
      blurb: "干预的逻辑 · 价格管制 · 税收补贴与监管 · 国家的经济学", blurbEn: "The logic of intervention · Price controls · Taxes, subsidies & regulation · The economics of the state",
      lessons: [
        { id: "intervention-logic", title: "干预的逻辑：米塞斯的“中间道路”为何走不通", titleEn: "The Logic of Intervention: Why Mises's 'Middle of the Road' Leads Nowhere", module: "./content/lessons/stage8-intervention-logic.js", status: "ready", difficulty: 2, personas: ["scholar", "investor", "curious"] },
        { id: "price-controls", title: "价格管制：最低工资、租金管制与限价令", titleEn: "Price Controls: Minimum Wages, Rent Control & Price Caps", module: "./content/lessons/stage8-price-controls.js", status: "ready", difficulty: 1, personas: ["investor", "builder", "scholar", "curious"] },
        { id: "taxes-regulation", title: "税收、补贴与监管的隐性成本", titleEn: "Taxes, Subsidies & Regulation: The Hidden Costs", module: "./content/lessons/stage8-taxes-regulation.js", status: "ready", difficulty: 2, personas: ["builder", "investor", "scholar"] },
        { id: "economics-of-state", title: "国家的经济学：公共选择、战争与福利", titleEn: "The Economics of the State: Public Choice, War & Welfare", module: "./content/lessons/stage8-economics-of-state.js", status: "ready", difficulty: 3, personas: ["scholar", "curious"] },
      ],
    },
    {
      n: 9, tier: "systems", title: "产权、法律与制度", titleEn: "Property, Law & Institutions",
      blurb: "产权为何存在 · 外部性与科斯 · 自发演化的法律 · 自由银行与货币竞争", blurbEn: "Why property exists · Externalities & Coase · Spontaneously evolved law · Free banking & currency competition",
      lessons: [
        { id: "why-property", title: "产权为什么存在：稀缺、冲突与先占", titleEn: "Why Property Rights Exist: Scarcity, Conflict & First Use", module: "./content/lessons/stage9-why-property.js", status: "ready", difficulty: 2, personas: ["scholar", "builder", "curious"] },
        { id: "externalities-coase", title: "外部性、公地与科斯：奥派的回应", titleEn: "Externalities, the Commons & Coase: The Austrian Reply", module: "./content/lessons/stage9-externalities-coase.js", status: "ready", difficulty: 3, personas: ["scholar", "builder"] },
        { id: "spontaneous-law", title: "法律也能“长出来”：普通法、商人法与莱奥尼", titleEn: "Law Can Grow Too: Common Law, Lex Mercatoria & Leoni", module: "./content/lessons/stage9-spontaneous-law.js", status: "ready", difficulty: 3, personas: ["scholar", "curious"] },
        { id: "free-banking", title: "自由银行与货币竞争：哈耶克的去国有化", titleEn: "Free Banking & Currency Competition: Hayek's Denationalisation", module: "./content/lessons/stage9-free-banking.js", status: "ready", difficulty: 3, personas: ["investor", "builder", "scholar"] },
      ],
    },
    {
      n: 10, tier: "systems", title: "奥派宏观与金融", titleEn: "Austrian Macro & Finance",
      blurb: "加里森模型 · GDP/CPI 的局限 · 金融市场与泡沫 · 债务与僵尸企业 · 奥派投资框架", blurbEn: "Garrison's model · Limits of GDP/CPI · Financial markets & bubbles · Debt & zombie firms · An Austrian investing framework",
      lessons: [
        { id: "garrison-macro", title: "加里森模型：用三张图讲资本宏观", titleEn: "Garrison's Model: Capital-Based Macro in Three Diagrams", module: "./content/lessons/stage10-garrison-macro.js", status: "ready", difficulty: 3, personas: ["investor", "scholar"] },
        { id: "aggregates-limits", title: "GDP、CPI 与总量统计的局限", titleEn: "GDP, CPI & the Limits of Aggregates", module: "./content/lessons/stage10-aggregates-limits.js", status: "ready", difficulty: 2, personas: ["investor", "scholar", "curious"] },
        { id: "markets-bubbles", title: "金融市场的奥派解读：股票、债券与泡沫", titleEn: "Financial Markets through Austrian Eyes: Stocks, Bonds & Bubbles", module: "./content/lessons/stage10-markets-bubbles.js", status: "ready", difficulty: 2, personas: ["investor", "curious"] },
        { id: "debt-zombies", title: "债务、僵尸企业与长期停滞", titleEn: "Debt, Zombie Firms & Secular Stagnation", module: "./content/lessons/stage10-debt-zombies.js", status: "ready", difficulty: 2, personas: ["investor", "scholar"] },
        { id: "austrian-investing", title: "奥派投资：把理论变成决策框架", titleEn: "Austrian Investing: Turning Theory into a Decision Framework", module: "./content/lessons/stage10-austrian-investing.js", status: "ready", difficulty: 2, personas: ["investor", "builder"] },
      ],
    },
    {
      n: 11, tier: "systems", title: "奥派 vs 其他学派", titleEn: "Austrians vs the World",
      blurb: "vs 凯恩斯 · vs 芝加哥/货币主义 · vs 新古典/DSGE · vs MMT/后凯恩斯 · vs 马克思/行为经济学", blurbEn: "vs Keynes · vs Chicago/Monetarism · vs Neoclassical/DSGE · vs MMT/Post-Keynesian · vs Marx/Behavioral",
      lessons: [
        { id: "vs-keynes", title: "vs 凯恩斯：总需求、乘数与“动物精神”", titleEn: "vs Keynes: Aggregate Demand, Multipliers & 'Animal Spirits'", module: "./content/lessons/stage11-vs-keynes.js", status: "ready", difficulty: 2, personas: ["investor", "scholar", "curious"] },
        { id: "vs-chicago", title: "vs 芝加哥与货币主义：弗里德曼与哈耶克的分歧", titleEn: "vs Chicago & Monetarism: Where Friedman and Hayek Part Ways", module: "./content/lessons/stage11-vs-chicago.js", status: "ready", difficulty: 2, personas: ["investor", "scholar"] },
        { id: "vs-neoclassical", title: "vs 新古典与 DSGE：均衡建模的问题", titleEn: "vs Neoclassical & DSGE: The Trouble with Equilibrium Modeling", module: "./content/lessons/stage11-vs-neoclassical.js", status: "ready", difficulty: 3, personas: ["scholar"] },
        { id: "vs-mmt", title: "vs MMT 与后凯恩斯：钱能凭空印出繁荣吗", titleEn: "vs MMT & Post-Keynesians: Can Printing Money Buy Prosperity?", module: "./content/lessons/stage11-vs-mmt.js", status: "ready", difficulty: 2, personas: ["investor", "scholar", "curious"] },
        { id: "vs-marx-behavioral", title: "vs 马克思与行为经济学：劳动价值论与“非理性”", titleEn: "vs Marx & Behavioral Economics: Labor Value & 'Irrationality'", module: "./content/lessons/stage11-vs-marx-behavioral.js", status: "ready", difficulty: 2, personas: ["scholar", "curious"] },
      ],
    },
    {
      n: 12, tier: "mastery", title: "读原著：核心文本精读", titleEn: "Reading the Canon",
      blurb: "门格尔《原理》 · 《人的行动》 · 哈耶克的弧线 · 罗斯巴德 · 当代经典", blurbEn: "Menger's Principles · Human Action · Hayek's arc · Rothbard · Contemporary classics",
      lessons: [
        { id: "read-menger", title: "门格尔《国民经济学原理》：一切的起点", titleEn: "Menger's Principles of Economics: Where It All Began", module: "./content/lessons/stage12-read-menger.js", status: "ready", difficulty: 2, personas: ["scholar", "curious"] },
        { id: "read-human-action", title: "《人的行动》怎么读：一本 900 页的地图", titleEn: "How to Read Human Action: A Map for 900 Pages", module: "./content/lessons/stage12-read-human-action.js", status: "ready", difficulty: 3, personas: ["scholar"] },
        { id: "read-hayek", title: "哈耶克的弧线：从《通往奴役之路》到《法律、立法与自由》", titleEn: "Hayek's Arc: From The Road to Serfdom to Law, Legislation and Liberty", module: "./content/lessons/stage12-read-hayek.js", status: "ready", difficulty: 2, personas: ["scholar", "curious"] },
        { id: "read-rothbard", title: "罗斯巴德：《人、经济与国家》与《美国大萧条》", titleEn: "Rothbard: Man, Economy, and State & America's Great Depression", module: "./content/lessons/stage12-read-rothbard.js", status: "ready", difficulty: 3, personas: ["scholar", "investor"] },
        { id: "read-contemporary", title: "当代经典：柯兹纳、拉赫曼、加里森、德索托、霍普", titleEn: "Contemporary Classics: Kirzner, Lachmann, Garrison, Huerta de Soto, Hoppe", module: "./content/lessons/stage12-read-contemporary.js", status: "ready", difficulty: 3, personas: ["scholar"] },
      ],
    },
    {
      n: 13, tier: "mastery", title: "经验研究：用奥派解释历史", titleEn: "Applied Research: Explaining History the Austrian Way",
      blurb: "奥派怎么做经验研究 · 大萧条 · 日本失去的三十年 · 2008 与 QE 时代 · 读懂美联储 · 中国的信用周期", blurbEn: "How Austrians do empirical work · The Great Depression · Japan's lost decades · 2008 & the QE era · Reading the Fed · China's credit cycle",
      lessons: [
        { id: "empirical-method", title: "奥派怎么做经验研究：解释，而非检验", titleEn: "How Austrians Do Empirical Work: Explain, Don't Test", module: "./content/lessons/stage13-empirical-method.js", status: "ready", difficulty: 3, personas: ["scholar"] },
        { id: "case-great-depression", title: "案例：大萧条——罗斯巴德 vs 弗里德曼", titleEn: "Case: The Great Depression — Rothbard vs Friedman", module: "./content/lessons/stage13-case-great-depression.js", status: "ready", difficulty: 2, personas: ["investor", "scholar", "curious"] },
        { id: "case-japan", title: "案例：日本失去的三十年", titleEn: "Case: Japan's Lost Decades", module: "./content/lessons/stage13-case-japan.js", status: "ready", difficulty: 2, personas: ["investor", "scholar"] },
        { id: "case-2008-qe", title: "案例：2008、量化宽松与 2021–23 通胀", titleEn: "Case: 2008, Quantitative Easing & the 2021–23 Inflation", module: "./content/lessons/stage13-case-2008-qe.js", status: "ready", difficulty: 2, personas: ["investor", "scholar", "curious"] },
        { id: "reading-the-fed", title: "读懂美联储：用奥派眼镜看 FOMC 声明", titleEn: "Reading the Fed: FOMC Statements through Austrian Glasses", module: "./content/lessons/stage13-reading-the-fed.js", status: "ready", difficulty: 2, personas: ["investor", "curious"] },
        { id: "case-china-cycle", title: "案例：中国的信用周期——房地产、地方债与产业政策", titleEn: "Case: China's Credit Cycle — Real Estate, Local Government Debt & Industrial Policy", module: "./content/lessons/stage13-case-china-cycle.js", status: "ready", difficulty: 3, personas: ["investor", "builder", "scholar", "curious"] },
      ],
    },
    {
      n: 14, tier: "mastery", title: "奥派经济学家的工具箱", titleEn: "The Austrian Economist's Toolkit",
      blurb: "五步政策分析法 · 写作与论证 · 奥派内部分歧 · 常见错误与自我批评 · 学术与职业路径 · 速查表", blurbEn: "Five-step policy analysis · Writing & argument · Internal debates · Common mistakes & self-critique · Academic & career paths · Cheat sheet",
      lessons: [
        { id: "five-step-analysis", title: "五步法：用奥派逻辑分析任何政策", titleEn: "The Five-Step Method: Analyze Any Policy with Austrian Logic", module: "./content/lessons/stage14-five-step-analysis.js", status: "ready", difficulty: 2, personas: ["investor", "builder", "scholar", "curious"] },
        { id: "writing-argument", title: "写作与论证：像米塞斯一样清晰，像哈耶克一样谦逊", titleEn: "Writing & Argument: Clear like Mises, Humble like Hayek", module: "./content/lessons/stage14-writing-argument.js", status: "ready", difficulty: 2, personas: ["scholar", "builder"] },
        { id: "internal-debates", title: "奥派内部分歧：米塞斯派、哈耶克派与罗斯巴德派", titleEn: "Debates within the School: Misesians, Hayekians & Rothbardians", module: "./content/lessons/stage14-internal-debates.js", status: "ready", difficulty: 3, personas: ["scholar"] },
        { id: "common-mistakes", title: "常见奥派错误与自我批评：永久熊、恶性通胀预言与教条主义", titleEn: "Common Austrian Mistakes & Self-Critique: Permabears, Hyperinflation Calls & Dogmatism", module: "./content/lessons/stage14-common-mistakes.js", status: "ready", difficulty: 2, personas: ["investor", "scholar", "curious"] },
        { id: "career-paths", title: "学术与职业路径：期刊、学会、机构与社区", titleEn: "Academic & Career Paths: Journals, Societies, Institutes & Communities", module: "./content/lessons/stage14-career-paths.js", status: "ready", difficulty: 1, personas: ["scholar", "builder"] },
        { id: "cheat-sheet", title: "附录：概念、人物与年份速查表", titleEn: "Appendix: Concepts, People & Dates Cheat Sheet", module: "./content/lessons/stage14-cheat-sheet.js", status: "ready", difficulty: 1, personas: ["investor", "builder", "scholar", "curious"] },
      ],
    },
    {
      n: 15, tier: "newera", title: "网络效应与数字经济", titleEn: "Network Effects & the Digital Economy",
      blurb: "网络效应的主观价值论 · 平台与赢家通吃 · 零边际成本定价 · 数据是新石油吗 · 创造性破坏加速", blurbEn: "Network effects as subjective value · Platforms & winner-take-all · Zero-marginal-cost pricing · Is data the new oil? · Creative destruction at speed",
      lessons: [
        { id: "network-effects", title: "网络效应：当你的估值取决于别人的估值", titleEn: "Network Effects: When Your Valuation Depends on Everyone Else's", module: "./content/lessons/stage15-network-effects.js", status: "ready", difficulty: 2, personas: ["builder", "investor", "scholar", "curious"] },
        { id: "platforms-winner", title: "平台、双边市场与“赢家通吃”：垄断指控再审", titleEn: "Platforms, Two-Sided Markets & 'Winner-Take-All': The Monopoly Charge Revisited", module: "./content/lessons/stage15-platforms-winner.js", status: "ready", difficulty: 2, personas: ["builder", "investor", "scholar"] },
        { id: "zero-marginal-cost", title: "零边际成本时代的定价：主观价值依然成立", titleEn: "Pricing at Zero Marginal Cost: Subjective Value Still Rules", module: "./content/lessons/stage15-zero-marginal-cost.js", status: "ready", difficulty: 2, personas: ["builder", "investor", "scholar"] },
        { id: "data-new-oil", title: "数据是新石油吗：知识问题 2.0", titleEn: "Is Data the New Oil? The Knowledge Problem 2.0", module: "./content/lessons/stage15-data-new-oil.js", status: "ready", difficulty: 2, personas: ["builder", "scholar", "curious"] },
        { id: "creative-destruction", title: "创造性破坏加速：从百视达到 TikTok", titleEn: "Creative Destruction at Internet Speed: From Blockbuster to TikTok", module: "./content/lessons/stage15-creative-destruction.js", status: "ready", difficulty: 1, personas: ["builder", "investor", "curious"] },
      ],
    },
    {
      n: 16, tier: "newera", title: "社交媒体、注意力与文化", titleEn: "Social Media, Attention & Culture",
      blurb: "注意力经济 · 算法与自发秩序 · 创作者经济 · 平台治理与私有产权 · 迷因与反身性", blurbEn: "The attention economy · Algorithms & spontaneous order · The creator economy · Platform governance & private property · Memes & reflexivity",
      lessons: [
        { id: "attention-economy", title: "注意力经济：稀缺的资源变了", titleEn: "The Attention Economy: The Scarce Resource Has Changed", module: "./content/lessons/stage16-attention-economy.js", status: "ready", difficulty: 1, personas: ["builder", "investor", "scholar", "curious"] },
        { id: "algorithms-order", title: "推荐算法与自发秩序：发现程序还是操纵机器", titleEn: "Recommendation Algorithms & Spontaneous Order: Discovery Procedure or Manipulation Machine?", module: "./content/lessons/stage16-algorithms-order.js", status: "ready", difficulty: 2, personas: ["builder", "scholar", "curious"] },
        { id: "creator-economy", title: "创作者经济：企业家精神的民主化", titleEn: "The Creator Economy: Entrepreneurship Democratized", module: "./content/lessons/stage16-creator-economy.js", status: "ready", difficulty: 1, personas: ["builder", "curious"] },
        { id: "platform-governance", title: "平台治理、言论与私有产权", titleEn: "Platform Governance, Speech & Private Property", module: "./content/lessons/stage16-platform-governance.js", status: "ready", difficulty: 2, personas: ["builder", "scholar", "curious"] },
        { id: "memes-reflexivity", title: "迷因、叙事与反身性：GameStop 与群体行为", titleEn: "Memes, Narratives & Reflexivity: GameStop & Crowd Behavior", module: "./content/lessons/stage16-memes-reflexivity.js", status: "ready", difficulty: 2, personas: ["investor", "curious"] },
      ],
    },
    {
      n: 17, tier: "newera", title: "比特币与货币的未来", titleEn: "Bitcoin & the Future of Money",
      blurb: "回归定理之争 · 硬钱与时间偏好 · 稳定币、CBDC 与货币竞争 · DeFi 与代码化秩序 · 比特币标准下的周期", blurbEn: "The regression-theorem debate · Hard money & time preference · Stablecoins, CBDCs & currency competition · DeFi & codified order · Cycles under a Bitcoin standard",
      lessons: [
        { id: "bitcoin-regression", title: "比特币是门格尔式货币吗：回归定理之争", titleEn: "Is Bitcoin Mengerian Money? The Regression-Theorem Debate", module: "./content/lessons/stage17-bitcoin-regression.js", status: "ready", difficulty: 2, personas: ["investor", "builder", "scholar", "curious"] },
        { id: "hard-money", title: "固定供给、时间偏好与“硬钱”：赞美与批评", titleEn: "Fixed Supply, Time Preference & 'Hard Money': The Case and the Critique", module: "./content/lessons/stage17-hard-money.js", status: "ready", difficulty: 2, personas: ["investor", "scholar", "curious"] },
        { id: "stablecoins-cbdc", title: "稳定币、CBDC 与哈耶克的货币竞争成真", titleEn: "Stablecoins, CBDCs & Hayek's Currency Competition Come True", module: "./content/lessons/stage17-stablecoins-cbdc.js", status: "ready", difficulty: 2, personas: ["investor", "builder", "scholar"] },
        { id: "defi-code-order", title: "DeFi 与智能合约：自发秩序的代码化", titleEn: "DeFi & Smart Contracts: Spontaneous Order in Code", module: "./content/lessons/stage17-defi-code-order.js", status: "ready", difficulty: 3, personas: ["builder", "investor"] },
        { id: "bitcoin-cycles", title: "比特币标准下还有商业周期吗", titleEn: "Would There Be Business Cycles under a Bitcoin Standard?", module: "./content/lessons/stage17-bitcoin-cycles.js", status: "ready", difficulty: 3, personas: ["investor", "scholar"] },
      ],
    },
    {
      n: 18, tier: "newera", title: "人工智能与人的行动", titleEn: "AI & Human Action",
      blurb: "AI 能中央计划吗 · AI 作为资本品 · AI 与企业家判断 · 技术性失业 · AI 泡沫与 ABCT · 算法定价与代理人经济", blurbEn: "Can AI central-plan? · AI as a capital good · AI & entrepreneurial judgment · Technological unemployment · An AI bubble & ABCT · Algorithmic pricing & agent economies",
      lessons: [
        { id: "ai-central-planning", title: "AI 能中央计划吗：计算争论的终极测试", titleEn: "Can AI Central-Plan? The Ultimate Test of the Calculation Debate", module: "./content/lessons/stage18-ai-central-planning.js", status: "ready", difficulty: 2, personas: ["builder", "scholar", "investor", "curious"] },
        { id: "ai-capital-good", title: "AI 是资本品：生产结构里的新阶段", titleEn: "AI as a Capital Good: New Stages in the Structure of Production", module: "./content/lessons/stage18-ai-capital-good.js", status: "ready", difficulty: 2, personas: ["builder", "investor", "scholar"] },
        { id: "ai-judgment", title: "AI 与企业家精神：判断能被自动化吗", titleEn: "AI & Entrepreneurship: Can Judgment Be Automated?", module: "./content/lessons/stage18-ai-judgment.js", status: "ready", difficulty: 2, personas: ["builder", "scholar", "curious"] },
        { id: "ai-jobs", title: "就业、工资与“技术性失业”的奥派回答", titleEn: "Jobs, Wages & the Austrian Answer to Technological Unemployment", module: "./content/lessons/stage18-ai-jobs.js", status: "ready", difficulty: 1, personas: ["builder", "curious", "scholar"] },
        { id: "ai-bubble-abct", title: "AI 泡沫？用 ABCT 看当下的资本支出狂潮", titleEn: "An AI Bubble? Reading the Capex Frenzy with ABCT", module: "./content/lessons/stage18-ai-bubble-abct.js", status: "ready", difficulty: 2, personas: ["investor", "builder"] },
        { id: "agent-economies", title: "算法定价、AI 代理人经济与市场过程", titleEn: "Algorithmic Pricing, AI-Agent Economies & the Market Process", module: "./content/lessons/stage18-agent-economies.js", status: "ready", difficulty: 3, personas: ["builder", "scholar", "investor"] },
      ],
    },
    {
      n: "∞", tier: "infinity", title: "之后去哪：成为奥派经济学家", titleEn: "Where It Goes: Becoming an Austrian Economist",
      blurb: "未解问题与前沿 · 你的机会 · 毕业设计：写一篇奥派分析", blurbEn: "Open problems & frontiers · Your opportunities · Capstone: write an Austrian analysis",
      lessons: [
        { id: "open-problems", title: "奥派的未解问题与前沿", titleEn: "Open Problems & Frontiers of the Austrian School", module: "./content/lessons/stageInf-open-problems.js", status: "ready", difficulty: 3, personas: ["scholar", "builder", "investor"] },
        { id: "your-opportunities", title: "你的机会：研究、创业、投资与写作的切入点", titleEn: "Your Opportunities: Research, Building, Investing & Writing", module: "./content/lessons/stageInf-your-opportunities.js", status: "ready", difficulty: 2, personas: ["investor", "builder", "scholar", "curious"] },
        { id: "capstone", title: "毕业设计：亲手写一篇奥派分析", titleEn: "Capstone: Write an Austrian Analysis by Hand", module: "./content/lessons/stageInf-capstone.js", status: "ready", difficulty: 3, personas: ["investor", "builder", "scholar", "curious"] },
      ],
    },
  ],
};
