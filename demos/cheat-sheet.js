// 交互演示：可搜索的速查表——概念 / 人物 / 年份 / 书籍四类，文本过滤 + 分类按钮；每一行链接到教它的那一课（#lesson/<id>）。
// “自测”模式把定义遮住，点一下再显示，用来检查自己记住了多少。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // ---------- 数据（ref = 阶段.序号，id = 课程 id）
  const C = (zh, e, dzh, de, ref, id) => ({ cat: "concept", name: T(zh, e), def: T(dzh, de), ref, id, alt: zh + " " + e });
  const concepts = [
    C("主观价值", "Subjective value", "价值是行动人对物品能否满足其目的的评价，不是物品的属性。", "Value is an acting person's judgment about how well a thing serves their ends, not a property of the thing.", "1.2", "subjective-value"),
    C("边际效用递减", "Diminishing marginal utility", "每多一单位被分配到更次要的用途，所以每一单位的价值等于边际那一单位。", "Each additional unit goes to a less important use, so every unit is worth the marginal one.", "1.1", "diamonds-water"),
    C("边际对", "Marginal pairs", "庞巴维克：市场价被夹在最后一对成交者与第一对未成交者的估值之间。", "Böhm-Bawerk: the market price is bracketed by the last pair that trades and the first that does not.", "1.3", "price-formation"),
    C("机会成本 · 看不见的", "Opportunity cost · the unseen", "成本是你放弃的最有价值的替代；好经济学家看见“不存在的东西”。", "Cost is the most valuable alternative you give up; the good economist sees what is not seen.", "1.4", "opportunity-cost"),
    C("比较优势", "Comparative advantage", "专注相对最强的事再交换，双方总产出更高；米塞斯的联合法则。", "Specialize where your relative edge is largest and trade for the rest; Mises's law of association.", "1.5", "exchange-division"),
    C("行动公理", "Action axiom", "人有目的地行动；否认它本身就是一个有目的的行动。", "Humans act purposefully; denying it is itself a purposeful act.", "2.1", "action-axiom"),
    C("人的行动学", "Praxeology", "从行动公理逻辑演绎经济规律，而不是从统计归纳。", "Deducing economic laws logically from the action axiom rather than inducing them from statistics.", "2.2", "apriori-empirical"),
    C("先验", "A priori", "不靠经验观察就知道为真的命题；统计既不能证实也不能证伪它。", "A proposition known true without observation; statistics can neither confirm nor refute it.", "2.2", "apriori-empirical"),
    C("方法论个人主义", "Methodological individualism", "只有个人会行动、评价、选择；“国家”“市场”不会。", "Only individuals act, value and choose; “the state” and “the market” do not.", "2.3", "individualism-history"),
    C("均匀轮转经济", "Evenly rotating economy", "没有变化和不确定性的经济，用来反衬利润从哪来。", "An economy without change or uncertainty, used to show by contrast where profit comes from.", "2.4", "vs-math-models"),
    C("时间偏好", "Time preference", "其他条件相同，人偏好现在的满足胜过未来；利息由此而来。", "Other things equal, present satisfaction beats the same satisfaction later; interest follows.", "3.1", "time-preference"),
    C("迂回生产", "Roundabout production", "先造工具再生产，更费时但更多产；庞巴维克。", "Build tools first, produce later: slower but more productive; Böhm-Bawerk.", "3.2", "roundabout-production"),
    C("哈耶克三角", "Hayekian triangle", "横轴生产时间、纵轴各阶段价值的一张图；利率决定它的形状。", "Production time on one axis, stage value on the other; the interest rate sets its shape.", "3.2", "roundabout-production"),
    C("生产结构", "Structure of production", "从原料到消费品的一系列阶段；储蓄拉长它，消费缩短它。", "The stages from raw materials to consumer goods; saving lengthens it, consumption shortens it.", "3.3", "saving-stages"),
    C("异质资本", "Heterogeneous capital", "资本品不是同质的 K，而是各有专用性的拼图块；拉赫曼。", "Capital goods are not a homogeneous K but jigsaw pieces with specific uses; Lachmann.", "3.4", "heterogeneous-capital"),
    C("自然利率", "Natural rate of interest", "由储蓄者与投资者的时间偏好决定的利率；被信贷压低的市场利率在撒谎。", "The rate set by savers' and investors' time preferences; a credit-depressed market rate lies.", "3.5", "natural-rate"),
    C("回归定理", "Regression theorem", "货币今天的购买力回溯自昨天，直到它还是普通商品的那一天。", "Money's purchasing power today traces back to yesterday, and to the day it was a commodity.", "4.1", "origin-of-money"),
    C("可销售性", "Saleableness", "门格尔：货币是可销售性最高的商品演化出来的，不是发明出来的。", "Menger: money evolved from the most saleable commodity; it was not invented.", "4.1", "origin-of-money"),
    C("货币非中性", "Non-neutrality of money", "新钱不是均匀落下的雨，它改变相对价格与财富分配。", "New money is not rain falling evenly; it changes relative prices and wealth.", "4.2", "money-demand"),
    C("坎蒂隆效应", "Cantillon effect", "先拿到新钱的人以旧价格买东西，后拿到的人承受涨价。", "Whoever gets new money first buys at old prices; whoever gets it last pays the new ones.", "4.3", "cantillon-inflation"),
    C("信用扩张", "Credit expansion", "部分准备金银行创造没有储蓄支撑的贷款，压低市场利率。", "Fractional-reserve banks create loans unbacked by saving and push the market rate down.", "4.4", "fractional-reserve"),
    C("法币", "Fiat money", "靠法律而非商品支撑的货币；1971 年之后的世界。", "Money backed by law rather than a commodity; the world after 1971.", "4.5", "central-banks-fiat"),
    C("奥地利学派商业周期理论", "Austrian business cycle theory", "人为压低的利率诱发错误投资，繁荣必然以萧条清算收场。", "An artificially low rate induces malinvestment; the boom ends in a liquidating bust.", "5.1", "abct-one-picture"),
    C("错误投资", "Malinvestment", "不是投资太多，而是投错了阶段：只在假利率下看起来划算的项目。", "Not too much investment but the wrong stages: projects that pay only at the false rate.", "5.2", "boom-malinvestment"),
    C("强制储蓄", "Forced saving", "信用扩张把资源从消费者转到投资者手里，而消费者并未选择少消费。", "Credit expansion shifts resources to investors without consumers choosing to consume less.", "5.2", "boom-malinvestment"),
    C("清算", "Liquidation", "萧条是错误投资被重新配置的过程，是治疗不是疾病。", "The bust reallocates malinvested resources: the cure, not the disease.", "5.3", "bust-liquidation"),
    C("崩溃繁荣", "Crack-up boom", "信用扩张永不停止时，公众对货币失去信心，终点是恶性通胀。", "If expansion never stops, the public loses faith in money; the end is hyperinflation.", "5.3", "bust-liquidation"),
    C("企业家精神", "Entrepreneurship", "柯兹纳的警觉（发现被忽视的机会）与米塞斯的判断（在不确定下押注）。", "Kirzner's alertness (spotting overlooked opportunities) and Mises's judgment (betting under uncertainty).", "6.1", "entrepreneur-alertness"),
    C("发现程序", "Discovery procedure", "哈耶克：竞争是发现谁能以什么成本做什么的程序，不是一种状态。", "Hayek: competition is a procedure for discovering who can do what at what cost, not a state.", "6.2", "competition-process"),
    C("消费者主权", "Consumer sovereignty", "利润与亏损把资源交给最能服务消费者的人。", "Profit and loss hand resources to whoever serves consumers best.", "6.3", "profit-loss"),
    C("经济计算", "Economic calculation", "米塞斯 1920：没有生产资料的市场价格，就没法比较不同用途的成本。", "Mises 1920: without market prices for the means of production, alternative uses cannot be compared.", "7.1", "mises-1920"),
    C("知识问题", "Knowledge problem", "哈耶克 1945：决策所需的知识分散在无数人头脑里，随时间地点变化。", "Hayek 1945: the knowledge decisions need is dispersed across minds and shifts with time and place.", "7.2", "hayek-knowledge"),
    C("默会知识", "Tacit knowledge", "说不出来但用得上的知识；它无法被集中。", "Knowledge you use but cannot state; it cannot be centralized.", "7.2", "hayek-knowledge"),
    C("自发秩序", "Spontaneous order", "人的行动的结果，而非人的设计的结果：语言、货币、普通法、市场。", "The result of human action but not of human design: language, money, common law, markets.", "7.4", "spontaneous-order"),
    C("干预主义", "Interventionism", "米塞斯：每次干预制造新问题，召唤下一次干预；中间道路走不通。", "Mises: each intervention creates a problem that summons the next; the middle road leads nowhere.", "8.1", "intervention-logic"),
    C("寻租", "Rent-seeking", "用资源去争取政府赐予的特权，而不是去服务消费者。", "Spending resources to win privileges from government rather than to serve consumers.", "8.4", "economics-of-state"),
    C("先占原则", "Homesteading", "对无主物的首先使用建立产权；洛克与罗斯巴德。", "First use of an unowned resource establishes property; Locke and Rothbard.", "9.1", "why-property"),
    C("自由银行", "Free banking", "无央行、可竞争发钞的银行制度；塞尔金与怀特 vs 百分百准备金派。", "Banking without a central bank and with competitive note issue; Selgin and White vs the 100%-reserve wing.", "9.4", "free-banking"),
    C("网络效应", "Network effect", "你的估值取决于别人是否也在用；主观价值论的特例而非例外。", "Your valuation depends on whether others use it too; a special case of subjective value.", "15.1", "network-effects"),
    C("反身性", "Reflexivity", "索罗斯：价格影响基本面，基本面又影响价格。", "Soros: prices affect fundamentals, which affect prices.", "16.5", "memes-reflexivity"),
  ];

  const Pp = (zh, e, yrs, czh, ce, ref, id) => ({ cat: "person", name: T(zh, e), yrs, def: T(czh, ce), ref, id, alt: zh + " " + e });
  const people = [
    Pp("理查德·坎蒂隆", "Richard Cantillon", T("约 1680–1734", "c. 1680–1734"), "《商业性质概论》：新钱从注入点扩散，改变相对价格。", "Essay on the Nature of Commerce: new money spreads from its injection point and changes relative prices.", "4.3", "cantillon-inflation"),
    Pp("弗雷德里克·巴斯夏", "Frédéric Bastiat", "1801–1850", "“看得见的与看不见的”“破窗”“蜡烛商请愿书”：经济学写作的典范。", "“What Is Seen and What Is Not Seen,” the broken window, the candlemakers' petition: the model of economic writing.", "1.4", "opportunity-cost"),
    Pp("卡尔·门格尔", "Carl Menger", "1840–1921", "1871《国民经济学原理》：主观价值、商品级别、货币的演化起源；学派创始人。", "Principles of Economics (1871): subjective value, orders of goods, the origin of money; founder.", "12.1", "read-menger"),
    Pp("欧根·冯·庞巴维克", "Eugen von Böhm-Bawerk", "1851–1914", "《资本与利息》：时间偏好解释利息、迂回生产、边际对；对马克思的批判。", "Capital and Interest: time preference explains interest, roundabout production, marginal pairs; the critique of Marx.", "3.1", "time-preference"),
    Pp("弗里德里希·冯·维塞尔", "Friedrich von Wieser", "1851–1926", "“机会成本”与“归属”两个术语的提出者。", "Coined “opportunity cost” and “imputation.”", "1.4", "opportunity-cost"),
    Pp("弗兰克·费特", "Frank Fetter", "1863–1949", "美国的奥派先驱：纯时间偏好利息理论。", "The American pioneer: the pure time-preference theory of interest.", "3.1", "time-preference"),
    Pp("路德维希·冯·米塞斯", "Ludwig von Mises", "1881–1973", "1912 货币与周期、1920 经济计算、1949《人的行动》：把学派建成体系。", "Money and the cycle (1912), calculation (1920), Human Action (1949): built the school into a system.", "12.2", "read-human-action"),
    Pp("弗里德里希·哈耶克", "Friedrich A. Hayek", "1899–1992", "知识问题、自发秩序、发现程序、货币非国家化；1974 年诺贝尔奖。", "The knowledge problem, spontaneous order, the discovery procedure, denationalised money; Nobel 1974.", "12.3", "read-hayek"),
    Pp("亨利·哈兹利特", "Henry Hazlitt", "1894–1993", "1946《一课经济学》：把巴斯夏写成 20 世纪最畅销的经济学入门。", "Economics in One Lesson (1946): Bastiat as the century's best-selling primer.", "14.2", "writing-argument"),
    Pp("伦纳德·里德", "Leonard Read", "1898–1983", "1946 创办 FEE；1958《铅笔的故事》。", "Founded FEE (1946); “I, Pencil” (1958).", "14.2", "writing-argument"),
    Pp("路德维希·拉赫曼", "Ludwig Lachmann", "1906–1990", "1956《资本及其结构》：异质资本；激进主观主义。", "Capital and Its Structure (1956): heterogeneous capital; radical subjectivism.", "3.4", "heterogeneous-capital"),
    Pp("布鲁诺·莱奥尼", "Bruno Leoni", "1913–1967", "1961《自由与法律》：法律像语言一样长出来。", "Freedom and the Law (1961): law grows like language.", "9.3", "spontaneous-law"),
    Pp("默里·罗斯巴德", "Murray Rothbard", "1926–1995", "1962《人、经济与国家》、1963《美国大萧条》：体系化、百分百准备金、无政府资本主义。", "Man, Economy, and State (1962), America's Great Depression (1963): system, 100% reserves, anarcho-capitalism.", "12.4", "read-rothbard"),
    Pp("伊斯雷尔·柯兹纳", "Israel Kirzner", T("1930–", "b. 1930"), "1973《竞争与企业家精神》：警觉、均衡趋向、市场过程。", "Competition and Entrepreneurship (1973): alertness, the equilibrating tendency, the market process.", "6.1", "entrepreneur-alertness"),
    Pp("罗杰·加里森", "Roger Garrison", T("1944–", "b. 1944"), "2001《时间与货币》：用三张图把 ABCT 讲成资本宏观。", "Time and Money (2001): ABCT as capital-based macro in three diagrams.", "10.1", "garrison-macro"),
    Pp("汉斯-赫尔曼·霍普", "Hans-Hermann Hoppe", T("1949–", "b. 1949"), "论证伦理学；2001《民主：失败的上帝》。", "Argumentation ethics; Democracy: The God That Failed (2001).", "14.3", "internal-debates"),
    Pp("约瑟夫·萨勒诺", "Joseph Salerno", T("1950–", "b. 1950"), "“计算 vs 知识”之争中米塞斯一方的旗手。", "Standard-bearer of the Misesian side in the calculation-vs-knowledge debate.", "14.3", "internal-debates"),
    Pp("赫苏斯·韦尔塔·德索托", "Jesús Huerta de Soto", T("1956–", "b. 1956"), "1998《货币、银行信贷与经济周期》。", "Money, Bank Credit, and Economic Cycles (1998).", "12.5", "read-contemporary"),
    Pp("乔治·塞尔金", "George Selgin", T("1957–", "b. 1957"), "1988《自由银行理论》；与怀特同为自由银行派。", "The Theory of Free Banking (1988); with White, the free-banking wing.", "9.4", "free-banking"),
    Pp("彼得·贝奇克", "Peter Boettke", T("1960–", "b. 1960"), "乔治梅森大学传统的领军人：比较制度分析。", "Leader of the George Mason tradition: comparative institutional analysis.", "14.5", "career-paths"),
  ];

  const D = (year, zh, e, ref, id) => ({ cat: "date", name: String(year), def: T(zh, e), ref, id, alt: zh + " " + e });
  const dates = [
    D(1871, "门格尔《国民经济学原理》；边际革命", "Menger's Principles; the marginal revolution", "1.1", "diamonds-water"),
    D(1883, "门格尔《社会科学方法探究》；方法论之争", "Menger's Investigations; the Methodenstreit", "12.1", "read-menger"),
    D(1889, "庞巴维克《资本实证论》", "Böhm-Bawerk's Positive Theory of Capital", "3.2", "roundabout-production"),
    D(1912, "米塞斯《货币与信用理论》", "Mises's The Theory of Money and Credit", "4.1", "origin-of-money"),
    D(1920, "米塞斯《社会主义国家的经济计算》", "Mises's “Economic Calculation in the Socialist Commonwealth”", "7.1", "mises-1920"),
    D(1922, "米塞斯《社会主义》", "Mises's Socialism", "7.1", "mises-1920"),
    D(1929, "华尔街崩盘；米塞斯《干预主义批判》", "The Wall Street crash; Mises's A Critique of Interventionism", "5.4", "abct-history"),
    D(1931, "哈耶克《价格与生产》，到伦敦经济学院", "Hayek's Prices and Production; he moves to the LSE", "11.1", "vs-keynes"),
    D(1936, "凯恩斯《通论》", "Keynes's General Theory", "11.1", "vs-keynes"),
    D(1944, "哈耶克《通往奴役之路》", "Hayek's The Road to Serfdom", "12.3", "read-hayek"),
    D(1945, "哈耶克《知识在社会中的运用》", "Hayek's “The Use of Knowledge in Society”", "7.2", "hayek-knowledge"),
    D(1949, "米塞斯《人的行动》", "Mises's Human Action", "12.2", "read-human-action"),
    D(1962, "罗斯巴德《人、经济与国家》", "Rothbard's Man, Economy, and State", "12.4", "read-rothbard"),
    D(1963, "罗斯巴德《美国大萧条》；弗里德曼与施瓦茨《美国货币史》", "Rothbard's America's Great Depression; Friedman & Schwartz's Monetary History", "13.2", "case-great-depression"),
    D(1971, "尼克松关闭黄金窗口：法币时代", "Nixon closes the gold window: the fiat era", "4.5", "central-banks-fiat"),
    D(1973, "柯兹纳《竞争与企业家精神》；米塞斯逝世", "Kirzner's Competition and Entrepreneurship; Mises dies", "6.1", "entrepreneur-alertness"),
    D(1974, "哈耶克获诺贝尔奖；南罗亚尔顿会议", "Hayek's Nobel; the South Royalton conference", "0.3", "vienna-lineage"),
    D(1976, "哈耶克《货币的非国家化》", "Hayek's Denationalisation of Money", "9.4", "free-banking"),
    D(1982, "米塞斯研究院成立；罗斯巴德《自由的伦理》", "The Mises Institute founded; Rothbard's The Ethics of Liberty", "0.3", "vienna-lineage"),
    D(1998, "德索托《货币、银行信贷与经济周期》", "Huerta de Soto's Money, Bank Credit, and Economic Cycles", "12.5", "read-contemporary"),
    D(2001, "加里森《时间与货币》；霍普《民主：失败的上帝》", "Garrison's Time and Money; Hoppe's Democracy: The God That Failed", "10.1", "garrison-macro"),
    D(2008, "雷曼倒闭；量化宽松开始", "Lehman fails; quantitative easing begins", "13.4", "case-2008-qe"),
    D(2009, "1 月 3 日比特币创世区块", "3 January: the Bitcoin genesis block", "17.1", "bitcoin-regression"),
    D(2020, "疫情；空前的货币与财政扩张", "The pandemic; unprecedented monetary and fiscal expansion", "5.4", "abct-history"),
    D(2022, "四十年最高通胀；美联储快速加息", "Four-decade-high inflation; rapid Fed hikes", "13.4", "case-2008-qe"),
  ];

  const B = (n, zh, e, year, wzh, we, ref, id) => ({ cat: "book", name: n + ". " + T(zh, e), yrs: String(year), def: T(wzh, we), ref, id, alt: zh + " " + e });
  const books = [
    B(1, "哈兹利特《一课经济学》", "Hazlitt, Economics in One Lesson", 1946, "两小时读完，装上“看不见的”这副眼镜。", "Two hours, and you are wearing the “unseen” glasses.", "1.4", "opportunity-cost"),
    B(2, "巴斯夏《看得见的与看不见的》《经济诡辩》", "Bastiat, “What Is Seen and What Is Not Seen” & Economic Sophisms", "1845–50", "学写作，也学破窗、蜡烛商、负铁路。", "Learn to write; meet the broken window, the candlemakers, the negative railroad.", "14.2", "writing-argument"),
    B(3, "门格尔《国民经济学原理》", "Menger, Principles of Economics", 1871, "学派的种子：主观价值、商品级别、货币起源。", "The seed: subjective value, orders of goods, the origin of money.", "12.1", "read-menger"),
    B(4, "罗斯巴德《政府对我们的货币做了什么？》", "Rothbard, What Has Government Done to Our Money?", 1963, "一百页讲清货币的起源与国家如何接管它。", "A hundred pages on where money comes from and how the state took it over.", "4.5", "central-banks-fiat"),
    B(5, "哈耶克《个人主义与经济秩序》", "Hayek, Individualism and Economic Order", 1948, "收录 1937、1945、1946 三篇关键论文。", "Collects the key essays of 1937, 1945 and 1946.", "7.2", "hayek-knowledge"),
    B(6, "米塞斯《社会主义国家的经济计算》", "Mises, “Economic Calculation in the Socialist Commonwealth”", 1920, "三十页的论文，计算争论的原点。", "A thirty-page essay, the origin of the calculation debate.", "7.1", "mises-1920"),
    B(7, "罗斯巴德《人、经济与国家》", "Rothbard, Man, Economy, and State", 1962, "体系的教科书版：从行动公理推到垄断与干预。", "The textbook version of the system, from the action axiom to monopoly and intervention.", "12.4", "read-rothbard"),
    B(8, "米塞斯《人的行动》", "Mises, Human Action", 1949, "体系的原版；阶段 12.2 给了 900 页的地图。", "The system in the original; Stage 12.2 gives the map.", "12.2", "read-human-action"),
    B(9, "米塞斯《货币与信用理论》", "Mises, The Theory of Money and Credit", 1912, "回归定理与周期理论的源头。", "The source of the regression theorem and the cycle theory.", "4.1", "origin-of-money"),
    B(10, "柯兹纳《竞争与企业家精神》", "Kirzner, Competition and Entrepreneurship", 1973, "企业家、警觉、市场过程。", "The entrepreneur, alertness, the market process.", "6.1", "entrepreneur-alertness"),
    B(11, "加里森《时间与货币》", "Garrison, Time and Money", 2001, "ABCT 的现代图示版。", "The modern diagrammatic ABCT.", "10.1", "garrison-macro"),
    B(12, "德索托《货币、银行信贷与经济周期》", "Huerta de Soto, Money, Bank Credit, and Economic Cycles", 1998, "部分准备金的法律史加周期理论的集大成。", "The legal history of fractional reserves plus the grand synthesis of cycle theory.", "12.5", "read-contemporary"),
  ];

  const ALL = [...concepts, ...people, ...dates, ...books];
  const CATS = [
    ["all", T("全部", "All")], ["concept", T("概念", "Concepts")], ["person", T("人物", "People")], ["date", T("年份", "Dates")], ["book", T("书籍", "Books")],
  ];
  const CAT_LABEL = { concept: T("概念", "concept"), person: T("人物", "person"), date: T("年份", "date"), book: T("书", "book") };

  const state = { cat: "all", q: "", mode: "browse", revealed: new Set() };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🗂️ 速查表：搜索概念、人物、年份与书籍，点任意一行回到那一课", "🗂️ Cheat sheet: search concepts, people, dates and books — click any row to jump to its lesson")}</div>
      <div class="demo-block">
        <div class="demo-row">
          <input class="demo-inp" id="cs-q" type="text" placeholder="${T("输入关键词：利率 / Hayek / 1920 / 计算……", "Type a keyword: interest / Hayek / 1920 / calculation…")}" style="flex:1;min-width:200px" />
          <div class="demo-seg" id="cs-mode">
            <button class="on" data-mode="browse">${T("浏览", "Browse")}</button>
            <button data-mode="quiz">${T("自测（遮住定义）", "Quiz me (hide definitions)")}</button>
          </div>
        </div>
        <div class="demo-btns" id="cs-cats">
          ${CATS.map(([k, l]) => `<button class="demo-btn ${k === "all" ? "active" : ""}" data-cat="${k}">${l}</button>`).join("")}
        </div>
      </div>
      <div class="demo-block">
        <div class="demo-row"><label class="demo-label" id="cs-count" style="margin:0"></label><span class="demo-meta" id="cs-hint" style="margin:0"></span></div>
        <div id="cs-list"></div>
      </div>
      <p class="demo-tip">${T(
        "试试搜“1945”“利率”或“Hayek”——同一个关键词会同时命中概念、人物、年份和书，这正是它们在课程里互相勾连的方式。切到<strong>自测</strong>模式，先在心里说出定义再点开核对；说不出“为什么”的，就点右侧链接回那一课。",
        "Try “1945,” “interest” or “Hayek” — one keyword hits concepts, people, dates and books at once, which is exactly how they are linked in the course. Switch to <strong>Quiz me</strong>, state the definition in your head before clicking to check; whenever you cannot say the “why,” follow the link on the right back to the lesson."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const norm = (s) => String(s).toLowerCase();

  const matches = (it) => {
    if (state.cat !== "all" && it.cat !== state.cat) return false;
    const q = norm(state.q.trim());
    if (!q) return true;
    return q.split(/\s+/).every((w) => norm(it.name + " " + it.def + " " + (it.yrs || "") + " " + it.ref + " " + it.alt + " " + it.id).includes(w));
  };
  const hl = (s) => {
    const q = state.q.trim(); if (!q) return esc(s);
    let out = esc(s);
    for (const w of q.split(/\s+/).filter(Boolean)) {
      const re = new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
      out = out.replace(re, '<mark style="background:var(--orange-soft);color:inherit;padding:0 1px;border-radius:2px">$1</mark>');
    }
    return out;
  };

  const paint = () => {
    const rows = ALL.filter(matches);
    const quiz = state.mode === "quiz";
    const total = { concept: 0, person: 0, date: 0, book: 0 };
    rows.forEach((r) => total[r.cat]++);
    $("cs-count").textContent = T("命中 ", "") + rows.length + T(" 条", " results") + (state.cat === "all" ? `（${T("概念", "concepts")} ${total.concept} · ${T("人物", "people")} ${total.person} · ${T("年份", "dates")} ${total.date} · ${T("书", "books")} ${total.book}）` : "");
    $("cs-hint").textContent = quiz ? T("点一行显示定义", "Click a row to reveal its definition") : T("点右侧链接跳到课程", "Click the link on the right to open the lesson");
    if (!rows.length) {
      $("cs-list").innerHTML = `<div class="demo-log"><div class="warn">${T("没有命中。换个词，或者清空过滤——速查表不会为你编造新条目。", "No match. Try another word or clear the filter — the sheet will not invent an entry for you.")}</div></div>`;
      return;
    }
    $("cs-list").innerHTML = rows.map((it, i) => {
      const k = it.cat + ":" + it.name;
      const shown = !quiz || state.revealed.has(k);
      const tag = `<span class="pill" style="background:var(--surface-2);color:var(--muted);margin-right:6px">${CAT_LABEL[it.cat]}</span>`;
      const yrs = it.yrs ? `<span class="yr" style="font-family:var(--mono);font-size:12px;color:var(--orange-ink);margin-left:8px">${esc(it.yrs)}</span>` : "";
      const link = it.id ? `<a href="#lesson/${it.id}" style="font-size:12.5px;white-space:nowrap;color:var(--orange-ink)">${T("阶段", "Stage")} ${it.ref} →</a>` : "";
      return `<div class="tl-item ${shown ? "" : "dim"}" data-k="${esc(k)}" style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start;padding:7px 8px;margin:0 0 4px -8px;border-radius:6px;${quiz ? "cursor:pointer" : ""}${i % 2 ? "background:var(--surface-2)" : ""}">
        <div style="min-width:0">
          <div>${tag}<b>${hl(it.name)}</b>${yrs}</div>
          <div class="demo-out-sm" style="margin-top:3px;${shown ? "" : "color:var(--muted);font-style:italic"}">${shown ? hl(it.def) : T("…（点此显示定义）", "… (click to reveal)")}</div>
        </div>
        ${link}
      </div>`;
    }).join("");
  };

  $("cs-q").addEventListener("input", (e) => { state.q = e.target.value; paint(); });
  $("cs-cats").addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]"); if (!b) return;
    state.cat = b.dataset.cat;
    root.querySelectorAll("#cs-cats .demo-btn").forEach((x) => x.classList.toggle("active", x === b));
    paint();
  });
  $("cs-mode").addEventListener("click", (e) => {
    const b = e.target.closest("[data-mode]"); if (!b) return;
    state.mode = b.dataset.mode; state.revealed.clear();
    root.querySelectorAll("#cs-mode button").forEach((x) => x.classList.toggle("on", x === b));
    paint();
  });
  $("cs-list").addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    if (state.mode !== "quiz") return;
    const row = e.target.closest("[data-k]"); if (!row) return;
    const k = row.dataset.k;
    if (state.revealed.has(k)) state.revealed.delete(k); else state.revealed.add(k);
    paint();
  });
  paint();
}
