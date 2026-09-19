// 交互演示：谱系时间线——奥地利学派 150 年的关键事件，按分支（门格尔 / 米塞斯 / 哈耶克 / 罗斯巴德）与年代过滤；
// 点击任一事件弹出人物卡（.person）。底部“活跃度条”按年代统计事件数——1940–60 年代的凹陷就是“近乎消失”。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const BR = {
    menger: { label: T("门格尔一脉", "Mengerian"), color: "var(--orange)" },
    mises: { label: T("米塞斯一脉", "Misesian"), color: "var(--orange-ink)" },
    hayek: { label: T("哈耶克一脉", "Hayekian"), color: "var(--blue)" },
    rothbard: { label: T("罗斯巴德一脉", "Rothbardian"), color: "var(--green)" },
  };

  const P = {
    menger: { n: T("卡尔·门格尔", "Carl Menger"), y: "1840–1921", who: T("第一代。维也纳大学教授，皇储鲁道夫的老师。", "First generation. Professor at Vienna; tutor to Crown Prince Rudolf."), works: T("《国民经济学原理》1871 · 《社会科学方法论探究》1883 · 《论货币的起源》1892", "Principles of Economics 1871 · Investigations into the Method 1883 · On the Origin of Money 1892"), link: T("学生/追随者：维塞尔、庞巴维克", "Students/followers: Wieser, Böhm-Bawerk"), keep: T("价值在心里不在物里；制度是人的行动的结果而非设计的结果。", "Value lives in minds, not things; institutions are the result of human action, not design.") },
    bb: { n: T("欧根·冯·庞巴维克", "Eugen von Böhm-Bawerk"), y: "1851–1914", who: T("第二代。三任奥地利财政部长；1905 年起的研讨班培养了米塞斯与熊彼特。", "Second generation. Three-time Austrian finance minister; his seminar (from 1905) trained Mises and Schumpeter."), works: T("《资本与利息》三卷 1884–1889 · 《卡尔·马克思及其体系的终结》1896", "Capital and Interest, 3 vols. 1884–1889 · Karl Marx and the Close of His System 1896"), link: T("师承门格尔；学生：米塞斯", "Follower of Menger; student: Mises"), keep: T("利息来自时间偏好；迂回生产更有产出但要等待。", "Interest comes from time preference; roundabout production yields more but requires waiting.") },
    wieser: { n: T("弗里德里希·冯·维塞尔", "Friedrich von Wieser"), y: "1851–1926", who: T("第二代。造出“边际效用”一词；1917–18 年任商业部长。", "Second generation. Coined “marginal utility”; minister of commerce 1917–18."), works: T("《自然价值》1889 · 《社会经济学》1914", "Natural Value 1889 · Social Economics 1914"), link: T("师承门格尔；学生：哈耶克", "Follower of Menger; student: Hayek"), keep: T("机会成本与归属：要素的价值从产品归属回来。", "Opportunity cost and imputation: factor values are imputed back from products.") },
    mises: { n: T("路德维希·冯·米塞斯", "Ludwig von Mises"), y: "1881–1973", who: T("第三代。维也纳商会经济顾问；1920–34 私人研讨会；1940 年流亡纽约；1945–69 纽约大学晚间研讨会。", "Third generation. Economic adviser at the Vienna Chamber of Commerce; private seminar 1920–34; fled to New York 1940; NYU evening seminar 1945–69."), works: T("《货币与信用理论》1912 · 《社会主义国家的经济计算》1920 · 《社会主义》1922 · 《人的行动》1949", "The Theory of Money and Credit 1912 · Economic Calculation in the Socialist Commonwealth 1920 · Socialism 1922 · Human Action 1949"), link: T("师承庞巴维克；学生：哈耶克、马克卢普、哈伯勒、罗斯巴德、柯兹纳", "Student of Böhm-Bawerk; students: Hayek, Machlup, Haberler, Rothbard, Kirzner"), keep: T("没有价格就没有经济计算；经济学是从行动公理演绎的行动学。", "No prices, no economic calculation; economics is praxeology deduced from the action axiom.") },
    hayek: { n: T("弗里德里希·冯·哈耶克", "Friedrich von Hayek"), y: "1899–1992", who: T("第四代。1931 年赴伦敦经济学院；1950 年芝加哥；1962 年弗莱堡；1974 年诺贝尔奖。", "Fourth generation. LSE from 1931; Chicago 1950; Freiburg 1962; Nobel Prize 1974."), works: T("《价格与生产》1931 · 《经济学与知识》1937 · 《通往奴役之路》1944 · 《知识在社会中的运用》1945 · 《货币的非国家化》1976", "Prices and Production 1931 · Economics and Knowledge 1937 · The Road to Serfdom 1944 · The Use of Knowledge in Society 1945 · Denationalisation of Money 1976"), link: T("师承维塞尔、米塞斯；学生：拉赫曼", "Student of Wieser and Mises; student: Lachmann"), keep: T("知识分散在无数人头脑里，价格是它的载体；自发秩序。", "Knowledge is dispersed across countless minds and prices carry it; spontaneous order.") },
    rothbard: { n: T("默里·罗斯巴德", "Murray Rothbard"), y: "1926–1995", who: T("第五代。1949 年起参加米塞斯纽约研讨会；1982 年参与创办米塞斯研究所。", "Fifth generation. Attended Mises's NYU seminar from 1949; co-founded the Mises Institute in 1982."), works: T("《人、经济与国家》1962 · 《美国大萧条》1963 · 《为了新的自由》1973 · 《自由的伦理》1982", "Man, Economy, and State 1962 · America's Great Depression 1963 · For a New Liberty 1973 · The Ethics of Liberty 1982"), link: T("师承米塞斯；影响：霍普、塞勒诺、德索托", "Student of Mises; influenced Hoppe, Salerno, Huerta de Soto"), keep: T("把《人的行动》系统化为教科书；用 ABCT 解释 1929。", "Systematized Human Action into a treatise; explained 1929 with ABCT.") },
    kirzner: { n: T("伊斯雷尔·柯兹纳", "Israel Kirzner"), y: T("1930–", "born 1930"), who: T("第五代。1957 年在米塞斯指导下获纽约大学博士，终身任教纽约大学。", "Fifth generation. NYU doctorate under Mises in 1957; taught at NYU his whole career."), works: T("《经济学的观点》1960 · 《竞争与企业家精神》1973", "The Economic Point of View 1960 · Competition and Entrepreneurship 1973"), link: T("师承米塞斯；纽约大学柯兹纳–里佐研讨会", "Student of Mises; the Kirzner–Rizzo colloquium at NYU"), keep: T("市场过程的引擎是企业家对未被注意的机会的警觉。", "The engine of the market process is entrepreneurial alertness to unnoticed opportunities.") },
    lachmann: { n: T("路德维希·拉赫曼", "Ludwig Lachmann"), y: "1906–1990", who: T("柏林出生；1930 年代在伦敦跟随哈耶克；1948 年起任教约翰内斯堡；1975–87 年每年访问纽约大学。", "Born in Berlin; studied under Hayek at LSE in the 1930s; Witwatersrand from 1948; visited NYU yearly 1975–87."), works: T("《资本及其结构》1956 · 《从米塞斯到沙克尔》1976", "Capital and Its Structure 1956 · From Mises to Shackle 1976"), link: T("师承哈耶克；南罗亚尔顿三位主讲之一", "Student of Hayek; one of the three South Royalton lecturers"), keep: T("资本是异质的拼图；预期不可预测——“激进主观主义”。", "Capital is a heterogeneous jigsaw; expectations are unpredictable — “radical subjectivism.”") },
    sr: { n: T("南罗亚尔顿会议", "The South Royalton conference"), y: T("1974 年 6 月", "June 1974"), who: T("人文研究所在佛蒙特州小镇办的一周暑期班，约 50 名年轻学者参加。", "A week-long summer school run by the Institute for Humane Studies in a Vermont village; about 50 young scholars attended."), works: T("讲稿结集：《现代奥地利经济学的基础》1976", "Lectures published as The Foundations of Modern Austrian Economics, 1976"), link: T("主讲：罗斯巴德、柯兹纳、拉赫曼", "Lecturers: Rothbard, Kirzner, Lachmann"), keep: T("奥派复兴的起点；四个月后哈耶克获诺贝尔奖。", "The start of the Austrian revival; Hayek's Nobel came four months later.") },
    mi: { n: T("米塞斯研究所", "The Mises Institute"), y: T("1982 年成立", "Founded 1982"), who: T("阿拉巴马州奥本。创办人卢·罗克韦尔，罗斯巴德任学术副所长，米塞斯遗孀玛吉特任董事长。", "Auburn, Alabama. Founded by Lew Rockwell, with Rothbard as academic vice president and Margit von Mises as chairman."), works: T("出版、暑期大学、《奥地利经济学季刊》（1998–）", "Publishing, a summer university, the Quarterly Journal of Austrian Economics (1998–)"), link: T("塞勒诺、霍普、许尔斯曼、克莱因等", "Salerno, Hoppe, Hülsmann, Klein and others"), keep: T("米塞斯–罗斯巴德一系的机构中心。", "The institutional center of the Mises–Rothbard line.") },
    gmu: { n: T("乔治梅森大学奥派项目", "The George Mason program"), y: T("1980 年代起", "From the 1980s"), who: T("弗吉尼亚州费尔法克斯。市场过程研究中心、博士项目、《奥地利经济学评论》。", "Fairfax, Virginia. The Center for the Study of Market Processes, a doctoral program, the Review of Austrian Economics."), works: T("拉沃伊、沃恩，后来的伯特克、李森、科因", "Lavoie, Vaughn; later Boettke, Leeson, Coyne"), link: T("哈耶克–柯兹纳一系，与主流对话更多", "The Hayek–Kirzner line, more engaged with the mainstream"), keep: T("学院派中心；与米塞斯研究所在方法与政治上有真实张力。", "The academic center; real tension with the Mises Institute on method and politics.") },
    hds: { n: T("赫苏斯·韦尔塔·德索托", "Jesús Huerta de Soto"), y: T("1956–", "born 1956"), who: T("马德里雷伊·胡安·卡洛斯大学；欧洲奥派的中心。", "Rey Juan Carlos University, Madrid; the center of European Austrian economics."), works: T("《社会主义、经济计算与企业家精神》1992 · 《货币、银行信贷与经济周期》1998", "Socialism, Economic Calculation and Entrepreneurship 1992 · Money, Bank Credit, and Economic Cycles 1998"), link: T("罗斯巴德一系；主张 100% 准备金", "Rothbardian line; advocates 100% reserves"), keep: T("把 ABCT 与部分准备金银行史合成一部大书。", "Fused ABCT with the history of fractional-reserve banking into one big book.") },
    garrison: { n: T("罗杰·加里森", "Roger Garrison"), y: T("1944–", "born 1944"), who: T("奥本大学。", "Auburn University."), works: T("《时间与货币》2001", "Time and Money 2001"), link: T("哈耶克一系（三角图）", "Hayekian line (the triangles)"), keep: T("用三张图把 ABCT 画成“基于资本的宏观经济学”。", "Drew ABCT as “capital-based macroeconomics” in three diagrams.") },
    salerno: { n: T("约瑟夫·塞勒诺", "Joseph Salerno"), y: T("当代", "contemporary"), who: T("佩斯大学；米塞斯研究所学术副所长；《奥地利经济学季刊》主编。", "Pace University; academic vice president of the Mises Institute; editor of the QJAE."), works: T("货币理论、米塞斯与哈耶克分歧研究", "Monetary theory; the Mises–Hayek divide"), link: T("米塞斯–罗斯巴德一系", "Mises–Rothbard line"), keep: T("强调米塞斯的经济计算论证与哈耶克知识论的区别。", "Stresses the difference between Mises's calculation argument and Hayek's knowledge argument.") },
    hulsmann: { n: T("约尔格·吉多·许尔斯曼", "Jörg Guido Hülsmann"), y: T("1966–", "born 1966"), who: T("法国昂热大学。", "University of Angers, France."), works: T("《米塞斯：自由主义的最后骑士》2007 · 《货币生产的伦理》2008", "Mises: The Last Knight of Liberalism 2007 · The Ethics of Money Production 2008"), link: T("米塞斯研究所一系", "Mises Institute line"), keep: T("最详尽的米塞斯传记作者。", "Author of the most thorough Mises biography.") },
    boettke: { n: T("彼得·伯特克", "Peter Boettke"), y: T("1960–", "born 1960"), who: T("乔治梅森大学；《奥地利经济学评论》主编。", "George Mason University; editor of the Review of Austrian Economics."), works: T("《生活经济学》2012 · 大量关于计算争论、制度与转型的研究", "Living Economics 2012 · extensive work on the calculation debate, institutions and transition"), link: T("哈耶克–柯兹纳一系", "Hayek–Kirzner line"), keep: T("把奥派与制度经济学、公共选择连接起来。", "Connects Austrian economics with institutional economics and public choice.") },
    klein: { n: T("彼得·克莱因", "Peter Klein"), y: T("1966–", "born 1966"), who: T("贝勒大学；米塞斯研究所。", "Baylor University; the Mises Institute."), works: T("《资本家与企业家》2012 · 与福斯合著《组织判断》2012", "The Capitalist and the Entrepreneur 2012 · Organizing Entrepreneurial Judgment (with Foss) 2012"), link: T("米塞斯一系（判断）", "Misesian line (judgment)"), keep: T("企业家精神 = 在不确定性下对资源的判断性投入。", "Entrepreneurship = judgmental deployment of resources under uncertainty.") },
    hoppe: { n: T("汉斯–赫尔曼·霍普", "Hans-Hermann Hoppe"), y: T("1949–", "born 1949"), who: T("内华达大学拉斯维加斯分校荣休；产权与自由学会创办人。", "Emeritus, University of Nevada, Las Vegas; founder of the Property and Freedom Society."), works: T("《民主：失败的上帝》2001", "Democracy: The God That Failed 2001"), link: T("罗斯巴德一系", "Rothbardian line"), keep: T("论证伦理学；把罗斯巴德的政治哲学推向更彻底的方向。", "Argumentation ethics; pushed Rothbard's political philosophy further.") },
    china: { n: T("奥派在中文世界", "Austrian economics in Chinese"), y: T("1990 年代–", "1990s–"), who: T("哈耶克的著作在 1990 年代广被讨论；米塞斯《人的行动》有夏道平在台湾完成的译本；罗斯巴德、柯兹纳、德索托在 2000–2010 年代陆续译出。", "Hayek widely discussed in the 1990s; Human Action translated in Taiwan by Hsia Tao-ping; Rothbard, Kirzner and Huerta de Soto translated during the 2000s–2010s."), works: T("传播主要靠译本、公众号、播客与社群，而非大学课程", "Spread mainly through translations, online accounts, podcasts and communities rather than university courses"), link: T("公开同情者如北京大学张维迎（自述从新古典转向米塞斯–哈耶克）", "Open sympathizers such as Zhang Weiying of Peking University (who describes moving from neoclassical to the Mises–Hayek line)"), keep: T("接受史仍在进行中，没有定论。", "The reception is still unfolding; no settled verdict.") },
  };

  const events = [
    { y: 1871, br: ["menger"], p: "menger", t: T("门格尔《国民经济学原理》出版", "Menger publishes Principles of Economics") },
    { y: 1883, br: ["menger"], p: "menger", t: T("《社会科学方法论探究》：方法论之争开始，“奥地利学派”得名", "Investigations into the Method: the Methodenstreit begins; the school gets its name") },
    { y: 1884, br: ["menger"], p: "bb", t: T("庞巴维克《资本与利息》第一卷；维塞尔造出“边际效用”一词", "Böhm-Bawerk's Capital and Interest vol. 1; Wieser coins “marginal utility”") },
    { y: 1889, br: ["menger"], p: "bb", t: T("庞巴维克《资本实证论》；维塞尔《自然价值》", "Böhm-Bawerk's Positive Theory of Capital; Wieser's Natural Value") },
    { y: 1892, br: ["menger"], p: "menger", t: T("门格尔《论货币的起源》", "Menger, On the Origin of Money") },
    { y: 1896, br: ["menger"], p: "bb", t: T("庞巴维克《卡尔·马克思及其体系的终结》", "Böhm-Bawerk, Karl Marx and the Close of His System") },
    { y: 1905, br: ["menger", "mises"], p: "bb", t: T("庞巴维克研讨班开班：米塞斯、熊彼特、鲍尔、希法亭在座", "Böhm-Bawerk's seminar opens: Mises, Schumpeter, Bauer, Hilferding attend") },
    { y: 1912, br: ["mises"], p: "mises", t: T("米塞斯《货币与信用理论》", "Mises, The Theory of Money and Credit") },
    { y: 1920, br: ["mises"], p: "mises", t: T("米塞斯《社会主义国家的经济计算》；私人研讨会开始", "Mises, “Economic Calculation in the Socialist Commonwealth”; the private seminar begins") },
    { y: 1927, br: ["mises", "hayek"], p: "hayek", t: T("米塞斯与哈耶克创办奥地利商业周期研究所", "Mises and Hayek found the Austrian Institute for Business Cycle Research") },
    { y: 1931, br: ["hayek"], p: "hayek", t: T("哈耶克赴伦敦经济学院；《价格与生产》；与凯恩斯论战", "Hayek to LSE; Prices and Production; the debate with Keynes") },
    { y: 1934, br: ["mises"], p: "mises", t: T("米塞斯离开维也纳赴日内瓦；私人研讨会结束", "Mises leaves Vienna for Geneva; the private seminar ends") },
    { y: 1937, br: ["hayek"], p: "hayek", t: T("哈耶克《经济学与知识》：转向知识问题", "Hayek, “Economics and Knowledge”: the turn to the knowledge problem") },
    { y: 1940, br: ["mises"], p: "mises", t: T("米塞斯流亡纽约", "Mises escapes to New York") },
    { y: 1944, br: ["hayek"], p: "hayek", t: T("哈耶克《通往奴役之路》", "Hayek, The Road to Serfdom") },
    { y: 1945, br: ["hayek", "mises"], p: "mises", t: T("哈耶克《知识在社会中的运用》；米塞斯纽约大学研讨会开始", "Hayek, “The Use of Knowledge in Society”; Mises's NYU seminar begins") },
    { y: 1949, br: ["mises", "rothbard"], p: "mises", t: T("米塞斯《人的行动》；罗斯巴德加入研讨会", "Mises, Human Action; Rothbard joins the seminar") },
    { y: 1956, br: ["hayek"], p: "lachmann", t: T("拉赫曼《资本及其结构》", "Lachmann, Capital and Its Structure") },
    { y: 1957, br: ["mises"], p: "kirzner", t: T("柯兹纳在米塞斯指导下获博士", "Kirzner takes his doctorate under Mises") },
    { y: 1962, br: ["rothbard"], p: "rothbard", t: T("罗斯巴德《人、经济与国家》", "Rothbard, Man, Economy, and State") },
    { y: 1963, br: ["rothbard"], p: "rothbard", t: T("罗斯巴德《美国大萧条》", "Rothbard, America's Great Depression") },
    { y: 1973, br: ["mises"], p: "kirzner", t: T("柯兹纳《竞争与企业家精神》；米塞斯去世", "Kirzner, Competition and Entrepreneurship; Mises dies") },
    { y: 1974, br: ["mises", "hayek", "rothbard"], p: "sr", t: T("6 月南罗亚尔顿会议；10 月哈耶克获诺贝尔奖", "June: South Royalton conference; October: Hayek's Nobel Prize") },
    { y: 1976, br: ["hayek"], p: "hayek", t: T("哈耶克《货币的非国家化》", "Hayek, Denationalisation of Money") },
    { y: 1982, br: ["rothbard", "mises"], p: "mi", t: T("米塞斯研究所在奥本成立", "The Mises Institute is founded in Auburn") },
    { y: 1985, br: ["hayek"], p: "gmu", t: T("乔治梅森大学奥派项目成形（约 1980 年代中）", "The George Mason program takes shape (about the mid-1980s)") },
    { y: 1995, br: ["rothbard"], p: "rothbard", t: T("罗斯巴德去世；哈耶克已于 1992 年去世", "Rothbard dies (Hayek had died in 1992)") },
    { y: 1997, br: ["hayek"], p: "china", t: T("《通往奴役之路》公开发行的中译本出版；哈耶克在中国被广泛讨论", "A public Chinese edition of The Road to Serfdom; Hayek widely discussed in China") },
    { y: 1998, br: ["rothbard"], p: "hds", t: T("德索托《货币、银行信贷与经济周期》", "Huerta de Soto, Money, Bank Credit, and Economic Cycles") },
    { y: 2001, br: ["hayek", "rothbard"], p: "garrison", t: T("加里森《时间与货币》；霍普《民主：失败的上帝》", "Garrison, Time and Money; Hoppe, Democracy: The God That Failed") },
    { y: 2007, br: ["mises"], p: "hulsmann", t: T("许尔斯曼《米塞斯：自由主义的最后骑士》", "Hülsmann, Mises: The Last Knight of Liberalism") },
    { y: 2012, br: ["mises", "hayek"], p: "klein", t: T("克莱因《资本家与企业家》；伯特克《生活经济学》", "Klein, The Capitalist and the Entrepreneur; Boettke, Living Economics") },
    { y: 2015, br: ["mises", "hayek", "rothbard"], p: "china", t: T("米塞斯、罗斯巴德、柯兹纳、德索托的中译本陆续问世（约 2000–2010 年代）", "Chinese translations of Mises, Rothbard, Kirzner and Huerta de Soto appear (about the 2000s–2010s)") },
  ];

  const decades = [];
  for (let d = 1870; d <= 2010; d += 10) decades.push(d);

  let brFilter = "all";
  let decFilter = "all";
  let selected = null;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🕰️ 谱系时间线：谁在什么时候把火传给了谁", "🕰️ The lineage timeline: who passed the flame, and when")}</div>
      <div class="demo-block">
        <div class="demo-label">${T("按分支过滤", "Filter by branch")}</div>
        <div class="demo-btns" id="lt-br">
          <button class="demo-btn active" data-br="all">${T("全部", "All")}</button>
          ${Object.entries(BR).map(([k, v]) => `<button class="demo-btn" data-br="${k}"><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${v.color};margin-right:6px"></span>${v.label}</button>`).join("")}
        </div>
        <div class="demo-label">${T("按年代过滤", "Filter by decade")}</div>
        <div class="demo-btns" id="lt-dec">
          <button class="demo-btn active" data-dec="all">${T("全部", "All")}</button>
          ${decades.map((d) => `<button class="demo-btn" data-dec="${d}">${d}s</button>`).join("")}
        </div>
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <div class="demo-label" id="lt-count"></div>
          <div class="tl" id="lt-list" style="max-height:420px;overflow:auto"></div>
        </div>
        <div class="demo-block">
          <div class="demo-label">${T("人物 / 机构卡", "Person / institution card")}</div>
          <div id="lt-card"><div class="demo-meta">${T("点击左侧任一事件。", "Click any event on the left.")}</div></div>
          <div class="demo-label" style="margin-top:14px">${T("每个年代的事件数（红色 = 流亡与近乎消失期 1934–74）", "Events per decade (red = exile and near-extinction, 1934–74)")}</div>
          <div class="stages" id="lt-density"></div>
        </div>
      </div>
      <p class="demo-tip">${T(
        "先把年代过滤切到 1940s、1950s、1960s：红色时期里的每一条几乎都只有米塞斯和哈耶克两个人的名字，没有一个机构——这就是“近乎消失”的三十年。再切回“全部”，点“罗斯巴德一脉”或“哈耶克一脉”，看 1974 年以后两条线怎么各自长出研究所、大学项目和期刊。点“1974”那一条，读人物卡。",
        "Filter by decade to the 1940s, 1950s and 1960s first: nearly every item in the red period carries only two names, Mises and Hayek, and not a single institution — that is the thirty years of near-extinction. Switch back to “All,” then to “Rothbardian” or “Hayekian,” and watch each line grow its own institute, university program and journal after 1974. Click the 1974 item and read the card."
      )}</p>
    </div>`;

  const list = root.querySelector("#lt-list");
  const card = root.querySelector("#lt-card");

  const visible = () => events.filter((e) =>
    (brFilter === "all" || e.br.includes(brFilter)) &&
    (decFilter === "all" || (e.y >= +decFilter && e.y < +decFilter + 10)));

  const paint = () => {
    const vis = visible();
    root.querySelector("#lt-count").textContent = T(`事件：${vis.length} / ${events.length}`, `Events: ${vis.length} / ${events.length}`);
    list.innerHTML = vis.length ? vis.map((e) => {
      const idx = events.indexOf(e);
      const dots = e.br.map((b) => `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${BR[b].color};margin-right:3px"></span>`).join("");
      const on = selected === idx;
      return `<div class="tl-item ${on ? "" : ""}" data-i="${idx}" style="cursor:pointer;${on ? "background:var(--orange-soft);border-radius:6px;padding:4px 6px;margin-left:-6px" : ""}">
        <span class="when">${e.y}</span>${dots}${e.t}
      </div>`;
    }).join("") : `<div class="demo-meta">${T("这个组合下没有事件——试试别的分支或年代。", "No events for this combination — try another branch or decade.")}</div>`;

    // 活跃度：按年代统计（不受过滤影响，但高亮当前过滤的年代）
    const counts = decades.map((d) => events.filter((e) => e.y >= d && e.y < d + 10 && (brFilter === "all" || e.br.includes(brFilter))).length);
    const maxC = Math.max(1, ...counts);
    root.querySelector("#lt-density").innerHTML = decades.map((d, i) => {
      const c = counts[i];
      const dim = decFilter !== "all" && +decFilter !== d;
      const exile = d >= 1930 && d <= 1960; // 流亡与近乎消失时期（1934–1974）
      return `<div class="stage-bar">
        <span class="lab" style="width:60px">${d}s</span>
        <div class="track" style="height:12px"><div class="fill" style="width:${(c / maxC) * 100}%;background:${exile ? "var(--red)" : brFilter === "all" ? "var(--orange)" : BR[brFilter].color};opacity:${dim ? 0.3 : 1}"></div></div>
        <span class="val" style="width:24px;font-size:12px">${c}</span>
      </div>`;
    }).join("");

    if (selected != null) {
      const e = events[selected];
      const p = P[e.p];
      card.innerHTML = `<div class="person">
        <div class="yr">${p.y}</div>
        <div>
          <b>${p.n}</b>
          <p>${p.who}</p>
          <p><strong>${T("关键作品：", "Key works: ")}</strong>${p.works}</p>
          <p><strong>${T("师承 / 传承：", "Lineage: ")}</strong>${p.link}</p>
          <p style="color:var(--orange-ink)"><strong>${T("记住这一句：", "Remember this: ")}</strong>${p.keep}</p>
          <p style="margin-top:6px">${T("触发事件：", "Triggering event: ")}<span class="when">${e.y}</span>${e.t}</p>
        </div>
      </div>`;
    }
  };

  root.querySelector("#lt-br").addEventListener("click", (ev) => {
    const b = ev.target.closest("button[data-br]");
    if (!b) return;
    brFilter = b.dataset.br;
    root.querySelectorAll("#lt-br button").forEach((x) => x.classList.toggle("active", x === b));
    paint();
  });
  root.querySelector("#lt-dec").addEventListener("click", (ev) => {
    const b = ev.target.closest("button[data-dec]");
    if (!b) return;
    decFilter = b.dataset.dec;
    root.querySelectorAll("#lt-dec button").forEach((x) => x.classList.toggle("active", x === b));
    paint();
  });
  list.addEventListener("click", (ev) => {
    const it = ev.target.closest(".tl-item[data-i]");
    if (!it) return;
    selected = +it.dataset.i;
    paint();
  });
  paint();
}
