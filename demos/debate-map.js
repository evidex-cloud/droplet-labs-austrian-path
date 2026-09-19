// 交互演示：奥派内部辩论地图——8 个争议问题，每个问题摆出各方立场（代表人物、关键文本、最强论证、
// “什么会让我改变看法”）；读者为每个问题选一个暂定立场（或“未定”），工具按与 5 个原型立场的距离
// 算出“你最接近谁、离谁最远”。不判对错——这些是学派内部尚未裁决的争论。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // ---------- 8 个问题与各方立场 ----------
  const Q = [
    {
      id: "method", short: T("方法", "Method"),
      title: T("① 方法：经济学定律是先验演绎的，还是演化 / 经验的？", "① Method: are economic laws a priori deductions, or evolutionary and empirical?"),
      ctx: T("米塞斯《人的行动》(1949) vs 哈耶克《经济学与知识》(1937)；哈奇森 (1981) 的“两个哈耶克”与考德威尔 (1988) 的回应。见阶段 2.1、2.2。", "Mises, Human Action (1949) vs Hayek, “Economics and Knowledge” (1937); Hutchison's “two Hayeks” (1981) and Caldwell's reply (1988). See Stage 2.1, 2.2."),
      pos: [
        { id: "apriori", name: T("先验演绎（米塞斯派）", "A priori deduction (Misesian)"),
          who: T("米塞斯《经济学的认识论问题》1933、《人的行动》1949；罗斯巴德《人、经济与国家》1962；霍普《经济科学与奥地利方法》1995", "Mises, Epistemological Problems (1933), Human Action (1949); Rothbard, Man, Economy, and State (1962); Hoppe, Economic Science and the Austrian Method (1995)"),
          arg: T("经济学里没有常数：人的评价随学习而变，所以统计拟合出来的“参数”只是历史描述。真正普遍的命题只能来自行动的逻辑结构——“人有目的地行动”一否认就自相矛盾。", "There are no constants in economics: valuations change as people learn, so a fitted “parameter” is history, not law. Universal propositions can only come from the logical structure of action — “humans act purposefully” cannot be denied without contradiction."),
          move: T("如果有人能展示一条只靠先验推理就能确定、在真实政策争论里有用、且不需要无限“辅助假设”保护的命题失效了，我会重新考虑。", "I would reconsider if someone showed a purely a priori proposition that is useful in a real policy dispute failing without being rescued by an endless supply of auxiliary assumptions.") },
        { id: "evol", name: T("演化 / 经验（哈耶克派）", "Evolutionary / empirical (Hayekian)"),
          who: T("哈耶克《经济学与知识》1937、《知识在社会中的运用》1945、《法律、立法与自由》1973–79；考德威尔《哈耶克的挑战》2004；贝特克与 GMU 传统", "Hayek, “Economics and Knowledge” (1937), “The Use of Knowledge in Society” (1945), Law, Legislation and Liberty (1973–79); Caldwell, Hayek's Challenge (2004); Boettke and the GMU tradition"),
          arg: T("纯粹选择逻辑只描述一个人的计划是否内部一致；许多人的计划能否互相协调，取决于人们如何获得知识与修正预期——这是经验命题。行动学告诉你均衡是什么，告诉不了你它会不会来。", "The pure logic of choice only describes whether one person's plan is internally consistent; whether many plans become compatible depends on how people acquire knowledge and revise expectations — an empirical matter. Praxeology tells you what equilibrium is, not whether it will arrive."),
          move: T("如果“协调如何发生”能被证明是从行动公理直接推出的，而不需要任何关于学习的经验假设，我会靠近米塞斯。", "I would move toward Mises if “how coordination happens” could be shown to follow from the action axiom alone, without any empirical assumption about learning.") },
      ],
    },
    {
      id: "calc", short: T("计算 vs 知识", "Calc vs knowledge"),
      title: T("② 社会主义为什么失败：经济计算、分散知识，还是两者？", "② Why socialism fails: calculation, dispersed knowledge, or both?"),
      ctx: T("“去同质化”之争。萨勒诺《后记》(1990)、《米塞斯与哈耶克去同质化》(1993)；柯兹纳 (1996)、贝特克 (1998)、拉沃伊《对抗与中央计划》(1985)。见阶段 7.1、7.2、18.1。", "The “dehomogenization” debate. Salerno, “Postscript” (1990), “Mises and Hayek Dehomogenized” (1993); Kirzner (1996), Boettke (1998), Lavoie, Rivalry and Central Planning (1985). See Stage 7.1, 7.2, 18.1."),
      pos: [
        { id: "calc", name: T("计算 / 评估（萨勒诺派）", "Calculation / appraisement (Salerno)"),
          who: T("萨勒诺 1990、1993；许尔斯曼《知识、判断与财产的使用》1997；赫本纳 1996", "Salerno (1990, 1993); Hülsmann, “Knowledge, Judgment, and the Use of Property” (1997); Herbener (1996)"),
          arg: T("就算计划者拥有全部知识，没有生产资料的产权与交换，就没有生产资料的货币价格，就没有比较异质资本品的共同单位。缺的不是数据，是尺子。把问题说成“知识”反而给大数据留了后门。", "Even a planner with all knowledge has no money prices for capital goods without property in and exchange of them — hence no common unit for comparing heterogeneous capital. What is missing is not data but a yardstick. Framing it as “knowledge” leaves a back door open for big data."),
          move: T("如果有人能展示一个没有生产资料市场的体系如何对未来做经济（而非技术）评估，我会改变看法。", "I would change my mind if someone showed how a system without markets for capital goods could appraise the future economically, not merely technically.") },
        { id: "know", name: T("知识 / 发现过程（柯兹纳–拉沃伊派）", "Knowledge / discovery process (Kirzner–Lavoie)"),
          who: T("拉沃伊《对抗与中央计划》1985；柯兹纳《对米塞斯遗产的反思》1996；贝特克《计算与协调》2001", "Lavoie, Rivalry and Central Planning (1985); Kirzner, “Reflections on the Misesian Legacy” (1996); Boettke, Calculation and Coordination (2001)"),
          arg: T("价格之所以能承载评估，是因为它是对抗性发现过程的产物——无数企业家在其中冒险、出价、纠错。拿走过程，价格表就是死数字。把计算和知识分开，等于把体温计读数和发烧分开。", "Prices can carry appraisement only because they are products of a rivalrous discovery process in which entrepreneurs risk, bid and correct. Remove the process and a price list is dead numbers. Separating calculation from knowledge is separating the thermometer from the fever."),
          move: T("如果有人能说明为什么必须是货币价格而不是任何别的知识传递装置，我会承认“尺子”论证有独立地位。", "I would grant the “yardstick” argument independent standing if someone explained why it must be money prices rather than any other device for transmitting knowledge.") },
        { id: "both", name: T("两者（在不同层次上）", "Both (at different levels)"),
          who: T("耶格尔《米塞斯与哈耶克论计算与知识》1994；贝特克后期表述；本课程立场", "Yeager, “Mises and Hayek on Calculation and Knowledge” (1994); Boettke's later formulations; this course's position"),
          arg: T("哈耶克解释知识为什么无法集中、价格如何生成；米塞斯解释即使集中了也无法评估。三层楼抽掉任何一层都会塌。对计划者说“你没有尺子”，也说“你没有过程”。", "Hayek explains why knowledge cannot be centralised and how prices arise; Mises explains why, even if centralised, nothing could be appraised. Remove any floor and the building falls. Tell the planner “you have no yardstick” and “you have no process.”"),
          move: T("如果有人证明两个论证在逻辑上互相蕴含（因而不是两层），或者互相矛盾（因而必须选一个），我会重选。", "I would pick a side if someone proved the two arguments logically entail each other (so they are not two levels) or contradict each other (so one must be chosen).") },
      ],
    },
    {
      id: "eq", short: T("均衡趋势", "Equilibrium"),
      title: T("③ 市场趋向均衡吗？企业家是警觉者、承担者，还是万花筒里的一片？", "③ Does the market tend toward equilibrium? Is the entrepreneur an alert discoverer, an uncertainty-bearer, or a piece in a kaleidoscope?"),
      ctx: T("柯兹纳《竞争与企业家精神》(1973) vs 罗斯巴德《人、经济与国家》(1962)、萨勒诺 (2008) vs 拉赫曼《作为经济过程的市场》(1986)、沙克尔；奥德里斯科尔与里佐 (1985)。见阶段 6.1。", "Kirzner, Competition and Entrepreneurship (1973) vs Rothbard, Man, Economy, and State (1962), Salerno (2008) vs Lachmann, The Market as an Economic Process (1986), Shackle; O'Driscoll and Rizzo (1985). See Stage 6.1."),
      pos: [
        { id: "alert", name: T("警觉与均衡化趋势（柯兹纳）", "Alertness and an equilibrating tendency (Kirzner)"),
          who: T("柯兹纳《竞争与企业家精神》1973、《市场过程的意义》1992、JEL 综述 1997", "Kirzner, Competition and Entrepreneurship (1973), The Meaning of Market Process (1992), JEL survey (1997)"),
          arg: T("企业家注意到别人没注意到的机会，无数这样的发现叠加起来纠正错误价格。没有这个趋势，我们就没有任何理由说市场“协调”了什么，“市场比计划好”的全部论证都失去地基。", "Entrepreneurs notice opportunities others missed; countless discoveries add up to correct wrong prices. Without that tendency there is no reason to say markets “coordinate” anything, and the whole case that markets beat planning loses its ground."),
          move: T("如果有人能展示一个产权稳定、货币健全的市场系统性地远离而不是靠近协调，我会靠近拉赫曼。", "I would move toward Lachmann if someone showed a market with secure property and sound money systematically moving away from, not toward, coordination.") },
        { id: "judge", name: T("判断与资本家—企业家（罗斯巴德–萨勒诺）", "Judgment and the capitalist-entrepreneur (Rothbard–Salerno)"),
          who: T("罗斯巴德《人、经济与国家》1962；萨勒诺《企业家：真实的与想象的》2008；福斯与克莱因《组织企业家判断》2012", "Rothbard, Man, Economy, and State (1962); Salerno, “The Entrepreneur: Real and Imagined” (2008); Foss and Klein, Organizing Entrepreneurial Judgment (2012)"),
          arg: T("纯警觉是没有身体的幽灵。真实的企业家先拥有或借到资本，在不确定性下下注，然后承担盈亏。利润是承担不确定性的回报，不是发现套利的奖金。去掉资本与风险，企业家就变成了新古典的价格机器。", "Pure alertness is a ghost without a body. The real entrepreneur first owns or borrows capital, bets under uncertainty, then bears profit or loss. Profit rewards uncertainty-bearing, not a finder's fee for arbitrage. Strip out capital and risk and the entrepreneur becomes a neoclassical price-adjuster."),
          move: T("如果有人能解释判断之前的“发现”环节从哪里来，而不引入警觉概念，我会承认柯兹纳的补充是多余的。", "I would concede Kirzner's addition is redundant if someone explained where the “discovery” step before judgment comes from without any notion of alertness.") },
        { id: "kaleid", name: T("万花筒（拉赫曼：没有可假设的趋势）", "Kaleidic (Lachmann: no tendency to assume)"),
          who: T("拉赫曼《从米塞斯到沙克尔》1976、《作为经济过程的市场》1986；沙克尔《认识论与经济学》1972；奥德里斯科尔与里佐《时间与无知的经济学》1985（中间立场）", "Lachmann, “From Mises to Shackle” (1976), The Market as an Economic Process (1986); Shackle, Epistemics and Economics (1972); O'Driscoll and Rizzo, The Economics of Time and Ignorance (1985) (a middle position)"),
          arg: T("真正的主观主义不能只用在偏好上而把预期当作外生给定。预期分歧是常态，每次企业家行动既纠正旧错误也制造新的不协调。趋势只能靠制度——货币、合同、产权——部分地压住万花筒。", "Real subjectivism cannot stop at preferences and treat expectations as given. Divergent expectations are the norm; every entrepreneurial act corrects old errors and creates new discoordination. A tendency can only be partly produced by institutions — money, contract, property — holding the kaleidoscope still."),
          move: T("如果有人能解释为什么现实市场并没有像万花筒那样彻底混乱，而不诉诸制度，我会承认存在内生的均衡趋势。", "I would grant an endogenous tendency if someone explained why real markets are not as chaotic as a kaleidoscope without appealing to institutions.") },
      ],
    },
    {
      id: "bank", short: T("银行", "Banking"),
      title: T("④ 没有央行时，银行应该 100% 准备金，还是自由银行（允许信用媒介）？", "④ With no central bank, should banks hold 100% reserves or practise free banking (fiduciary media allowed)?"),
      ctx: T("罗斯巴德《银行的秘密》(1983)、德索托 (1998) vs 塞尔金《自由银行理论》(1988)、怀特《英国的自由银行》(1984)。见阶段 4.4、9.4；在阶段 17.1、17.5 以比特币重演。", "Rothbard, The Mystery of Banking (1983), Huerta de Soto (1998) vs Selgin, The Theory of Free Banking (1988), White, Free Banking in Britain (1984). See Stage 4.4, 9.4; re-run with Bitcoin in Stage 17.1, 17.5."),
      pos: [
        { id: "full", name: T("100% 准备金", "100% reserves"),
          who: T("罗斯巴德《为 100% 黄金美元辩护》1962、《银行的秘密》1983；霍普、许尔斯曼、布洛克《反对信用媒介》1998；德索托《货币、银行信贷与经济周期》1998", "Rothbard, The Case for a 100 Percent Gold Dollar (1962), The Mystery of Banking (1983); Hoppe, Hülsmann and Block, “Against Fiduciary Media” (1998); Huerta de Soto, Money, Bank Credit, and Economic Cycles (1998)"),
          arg: T("经济上：任何超出准备金的发行都是没有储蓄支撑的信用扩张，压低利率、误导生产结构——即使没有央行，部分准备金也是内生的周期发动机。法律上：活期存款是保管合同，把保管物借出去是侵占，两个人不能同时完整拥有同一枚硬币。", "Economically: any issue beyond reserves is credit expansion unbacked by saving; it lowers the rate and misdirects production — fractional reserves are an endogenous cycle engine even without a central bank. Legally: a demand deposit is a bailment; lending it out is misappropriation, and two people cannot both fully own the same coin."),
          move: T("如果苏格兰、加拿大的自由银行记录经得起细看——没有系统性周期、倒闭率更低——我会给“内生周期”加上限定条件。", "I would qualify the “endogenous cycle” claim if the Scottish and Canadian free-banking records held up on close inspection — no systematic cycle, lower failure rates.") },
        { id: "free", name: T("自由银行与货币均衡", "Free banking and monetary equilibrium"),
          who: T("怀特《英国的自由银行》1984；塞尔金《自由银行理论》1988、《少于零》1997；塞尔金与怀特《为信用媒介辩护》1996；多德", "White, Free Banking in Britain (1984); Selgin, The Theory of Free Banking (1988), Less Than Zero (1997); Selgin and White, “In Defense of Fiduciary Media” (1996); Dowd"),
          arg: T("历史：苏格兰 1716–1844、加拿大 1817–1935 没有央行却稳定。理论：竞争性清算使单家银行无法单方面扩张，钞票量只随公众持币意愿变化——这是货币中性的最佳近似。法律：普通法里存款是债务不是保管，储户收利息就是知情的证据。", "History: Scotland 1716–1844 and Canada 1817–1935 were stable with no central bank. Theory: competitive clearing stops any bank expanding unilaterally; the note stock tracks the public's demand to hold money — the best approximation to monetary neutrality. Law: in common law a deposit is a debt, not a bailment; the interest depositors accept proves they know."),
          move: T("如果有人能证明所有银行协调扩张时清算约束会系统性失效，而公众兑现需求不足以约束，我会向 100% 派靠近。", "I would move toward the 100% side if someone showed the clearing constraint systematically fails when all banks expand together and the public's redemption demand cannot discipline them.") },
      ],
    },
    {
      id: "ethics", short: T("伦理基础", "Ethics"),
      title: T("⑤ 自由的根基：自然权利、功利，还是论证伦理？", "⑤ The foundation of liberty: natural rights, utility, or argumentation ethics?"),
      ctx: T("罗斯巴德《自由的伦理》(1982) vs 米塞斯《自由主义》(1927)；霍普《社会主义与资本主义理论》(1989) 及弗里德曼、墨菲与卡拉汉 (2006) 的批评。见阶段 0.2、9.1。", "Rothbard, The Ethics of Liberty (1982) vs Mises, Liberalism (1927); Hoppe, A Theory of Socialism and Capitalism (1989) and the critiques by Friedman and by Murphy and Callahan (2006). See Stage 0.2, 9.1."),
      pos: [
        { id: "rights", name: T("自然权利 / 论证伦理（罗斯巴德–霍普）", "Natural rights / argumentation ethics (Rothbard–Hoppe)"),
          who: T("罗斯巴德《自由的伦理》1982；霍普《私有财产伦理的最终辩护》1988、《社会主义与资本主义理论》1989", "Rothbard, The Ethics of Liberty (1982); Hoppe, “The Ultimate Justification of the Private Property Ethic” (1988), A Theory of Socialism and Capitalism (1989)"),
          arg: T("功利主义在关键时刻会出卖自由：如果一个人可以为“社会”被牺牲，那谁都可以。只有把权利放在后果之前，自由才有不可谈判的地基。霍普进一步：参与论证已经预设了自我所有权，否认它是行为矛盾。", "Utilitarianism sells out liberty at the decisive moment: if one person may be sacrificed for “society,” anyone may. Only rights placed before consequences give liberty a non-negotiable foundation. Hoppe adds: arguing already presupposes self-ownership, so denying it is a performative contradiction."),
          move: T("如果批评者能说明“辩论时预设 X”到“X 在伦理上正确”之间的鸿沟无法跨越，而且自然法起点没有别的支撑，我会退回功利主义。", "I would fall back to utilitarianism if the critics showed the gulf between “I presuppose X while debating” and “X is ethically correct” cannot be crossed, and the natural-law starting point has no other support.") },
        { id: "util", name: T("功利主义自由主义（米塞斯）", "Utilitarian liberalism (Mises)"),
          who: T("米塞斯《自由主义》1927、《人的行动》1949；耶格尔《作为社会科学的伦理学》2001；弗里德曼、墨菲与卡拉汉对论证伦理的批评", "Mises, Liberalism (1927), Human Action (1949); Yeager, Ethics as Social Science (2001); Friedman, and Murphy and Callahan, on argumentation ethics"),
          arg: T("自由主义正确，是因为分工下的社会合作生产力远高于任何替代方案，几乎所有人几乎总能获益。这个论证不要求对手先接受任何形而上学，可以和任何人对话。论证伦理只预设了论证期间对身体的使用，推不出永久、排他、扩展到外部财产的权利。", "Liberalism is right because social cooperation under the division of labour outproduces every alternative and nearly everyone gains nearly always. The argument demands no prior metaphysics and can be made to anyone. Argumentation ethics presupposes only the use of one's body during the argument, not permanent, exclusive rights over external property."),
          move: T("如果有人能给出一个不依赖“人的本性”这类有争议前提、又能推出排他财产权的论证，我会认真考虑权利优先。", "I would take rights-first seriously if someone gave an argument that yields exclusive property rights without relying on contested premises such as “the nature of man.”") },
      ],
    },
    {
      id: "state", short: T("国家", "The state"),
      title: T("⑥ 国家：取消、缩到最小，还是有安全网的法治国？", "⑥ The state: abolish it, shrink it to a minimum, or keep a rule-of-law state with a safety net?"),
      ctx: T("罗斯巴德《权力与市场》(1970)、霍普《民主：失败的上帝》(2001) vs 米塞斯《自由主义》(1927) vs 哈耶克《自由宪章》(1960)、《法律、立法与自由》(1973–79)。见阶段 8.4、9.3。", "Rothbard, Power and Market (1970), Hoppe, Democracy: The God That Failed (2001) vs Mises, Liberalism (1927) vs Hayek, The Constitution of Liberty (1960), Law, Legislation and Liberty (1973–79). See Stage 8.4, 9.3."),
      pos: [
        { id: "anarchy", name: T("无政府资本主义", "Anarcho-capitalism"),
          who: T("罗斯巴德《权力与市场》1970、《为了新自由》1973；霍普《民主：失败的上帝》2001；斯特林厄姆《私人治理》2015（经验研究）", "Rothbard, Power and Market (1970), For a New Liberty (1973); Hoppe, Democracy: The God That Failed (2001); Stringham, Private Governance (2015) (empirical)"),
          arg: T("如果垄断是坏的，对暴力与司法的垄断是最坏的；防卫、仲裁、法律都能由竞争的私人机构提供，商人法与普通法是历史先例。让步：私人法秩序如何运转不能演绎，只能靠历史与案例。", "If monopoly is bad, the monopoly of force and adjudication is worst; defence, arbitration and law can be supplied by competing private agencies, with merchant law and common law as precedents. Concession: how a private legal order works cannot be deduced, only shown from history and cases."),
          move: T("如果有人能展示竞争性防卫机构在历史上系统性地演变成战争而非仲裁，我会退回最小国家。", "I would fall back to the minimal state if someone showed competing defence agencies systematically turning into war rather than arbitration in history.") },
        { id: "minarchy", name: T("最小国家 / 古典自由主义（米塞斯）", "Minimal state / classical liberalism (Mises)"),
          who: T("米塞斯《自由主义》1927、《人的行动》1949；诺齐克《无政府、国家与乌托邦》1974（非奥派但常被引用）", "Mises, Liberalism (1927), Human Action (1949); Nozick, Anarchy, State, and Utopia (1974) (not Austrian, often cited)"),
          arg: T("国家是强制的机器，唯一正当功能是保护财产与和平；但取消它是乌托邦，因为总有人会用暴力，私人防卫机构之间的竞争可能演变成战争。让步：任何地区只要多数居民愿意都可以分离——这已经离无政府很近。", "The state is an apparatus of coercion whose only legitimate job is protecting property and peace; abolishing it is utopian, since some will always use violence and competing defence agencies could turn into war. Concession: any region may secede if its majority wishes — already very close to anarchy."),
          move: T("如果公共选择的证据显示“只做守夜人”的国家从来无法保持在那个规模，我会认真考虑无政府一方。", "I would take the anarchist side seriously if public-choice evidence showed that a night-watchman state never stays at that size.") },
        { id: "classical", name: T("有安全网的法治国（哈耶克）", "Rule-of-law state with a safety net (Hayek)"),
          who: T("哈耶克《自由宪章》1960、《法律、立法与自由》1973–79、《货币的非国家化》1976", "Hayek, The Constitution of Liberty (1960), Law, Legislation and Liberty (1973–79), Denationalisation of Money (1976)"),
          arg: T("国家的正当性在于法治——普遍、抽象、平等适用的规则；在此框架内提供公共品与最低保障不违反自由，只要不试图“分配”结果。让步：连货币这样的核心领域也应由竞争取代国家。", "The state's legitimacy lies in the rule of law — general, abstract, equally applied rules; within that frame public goods and a minimum income do not violate liberty as long as the state does not “distribute” outcomes. Concession: even money, a core domain, should be opened to competition."),
          move: T("如果有人能画出一条抵抗政治压力的安全网边界，或者证明画不出来，我会相应地向前或向后移动。", "I would move forward or back depending on whether someone could draw a safety-net boundary that resists political pressure, or prove that none can be drawn.") },
      ],
    },
    {
      id: "mono", short: T("垄断价格", "Monopoly price"),
      title: T("⑦ 自由市场上可能出现“垄断价格”吗？", "⑦ Can a “monopoly price” arise on a free market?"),
      ctx: T("米塞斯《人的行动》第十六章 vs 罗斯巴德《人、经济与国家》第十章；柯兹纳的中间立场。后果见阶段 6.4、15.2。", "Mises, Human Action ch. XVI vs Rothbard, Man, Economy, and State ch. 10; Kirzner's intermediate view. Consequences in Stage 6.4, 15.2."),
      pos: [
        { id: "possible", name: T("可能（米塞斯）", "Possible (Mises)"),
          who: T("米塞斯《人的行动》1949 第十六章；柯兹纳（垄断＝独一无二资源的所有权，但不必然低效）", "Mises, Human Action (1949) ch. XVI; Kirzner (monopoly = ownership of a unique resource, not necessarily inefficient)"),
          arg: T("当全部供给被一个卖家或卡特尔控制、且需求在竞争价格之上足够缺乏弹性以至于减少销售反而提高总收入时，卖家会选择高于竞争价格的垄断价格，消费者主权被部分架空。这是一个可以在概念上讨论的现象。", "When the whole supply is controlled by one seller or a cartel and demand above the competitive price is inelastic enough that restricting sales raises total revenue, the seller picks a monopoly price above the competitive one and consumer sovereignty is partly overridden. It is a phenomenon one can discuss conceptually."),
          move: T("如果有人证明“竞争价格”在自由市场上原则上无法识别，那“高于竞争价格”就没有意义，我会靠近罗斯巴德。", "I would move toward Rothbard if someone proved the “competitive price” cannot in principle be identified on a free market, since then “above the competitive price” would be meaningless.") },
        { id: "none", name: T("没有意义（罗斯巴德）", "Meaningless (Rothbard)"),
          who: T("罗斯巴德《人、经济与国家》1962 第十章；阿门塔诺《反垄断与垄断》1982", "Rothbard, Man, Economy, and State (1962) ch. 10; Armentano, Antitrust and Monopoly (1982)"),
          arg: T("每个卖家都在寻找收益最大的价格，都是在按需求弹性限制销售，你无法识别哪个价格是“竞争的”。唯一有意义的垄断是国家授予的排他特权。反垄断法在自由市场上没有任何可以瞄准的东西。", "Every seller searches for the revenue-maximising price and restricts sales according to elasticity, so no price can be identified as “the competitive one.” The only meaningful monopoly is a state grant of exclusive privilege. Antitrust has nothing to aim at on a free market."),
          move: T("如果有人能给出一个不依赖假想“竞争价格”、却能在自由市场上识别垄断价格的标准，我会重新考虑米塞斯的定义。", "I would reconsider Mises's definition if someone gave a criterion for identifying a monopoly price on a free market that does not depend on a hypothetical “competitive price.”") },
      ],
    },
    {
      id: "inst", short: T("研究纲领", "Programme"),
      title: T("⑧ 研究纲领：罗斯巴德式体系建构（奥本）还是哈耶克式比较制度分析（GMU）？", "⑧ Research programme: Rothbardian system-building (Auburn) or Hayekian comparative institutional analysis (GMU)?"),
      ctx: T("米塞斯研究所（1982，奥本）与《奥地利经济学季刊》 vs 乔治梅森大学 / 默卡图斯中心与《奥地利经济学评论》、“协调问题”博客。两者是研究口味，不是教派；人是会跨线的。见阶段 14.5。", "The Mises Institute (1982, Auburn) and the QJAE vs George Mason University / Mercatus and the RAE, the Coordination Problem blog. Two research tastes, not two churches; people cross the lines. See Stage 14.5."),
      pos: [
        { id: "auburn", name: T("体系建构与政治激进（奥本）", "System-building and political radicalism (Auburn)"),
          who: T("罗斯巴德、萨勒诺、霍普、许尔斯曼、赫本纳；《奥地利经济学季刊》；米塞斯大学", "Rothbard, Salerno, Hoppe, Hülsmann, Herbener; Quarterly Journal of Austrian Economics; Mises University"),
          arg: T("从行动学出发把经济学、伦理学、历史整合成一套内部一致的体系，敢于说出推到底的结论：100% 准备金、无政府资本主义、对央行与国家的激进批评。一致性与勇气是它的最强之处。", "From praxeology, integrate economics, ethics and history into one internally consistent system and say where it leads when pushed to the end: 100% reserves, anarcho-capitalism, radical critique of central banks and the state. Consistency and nerve are its strength."),
          move: T("如果体系推到底的结论反复被历史与案例证伪，而只能靠重新定义来保护，我会向比较制度分析靠近。", "I would move toward comparative institutional analysis if the system's end-conclusions were repeatedly contradicted by history and cases and could only be protected by redefinition.") },
        { id: "gmu", name: T("比较制度分析与对话主流（GMU）", "Comparative institutional analysis and mainstream engagement (GMU)"),
          who: T("拉沃伊、贝特克、科因、利森、斯托尔；默卡图斯中心；《奥地利经济学评论》；“协调问题”博客", "Lavoie, Boettke, Coyne, Leeson, Storr; Mercatus Center; Review of Austrian Economics; Coordination Problem blog"),
          arg: T("把市场过程理论与公共选择、新制度经济学、多中心治理结合，用田野、历史与案例研究“不同制度下人们怎么协调”，主动进入主流期刊。经验性与对话能力是它的最强之处。", "Combine market-process theory with public choice, new institutional economics and polycentric governance; use fieldwork, history and cases to study how people coordinate under different institutions; publish in mainstream journals. Empirical range and the ability to converse are its strength."),
          move: T("如果“对话”的代价被证明是系统性放弃奥派对货币与周期的独特主张，我会向奥本靠近。", "I would move toward Auburn if the price of “conversation” proved to be a systematic abandonment of the school's distinctive claims about money and the cycle.") },
        { id: "cross", name: T("跨线（两翼都读、都用）", "Cross the lines (read and use both wings)"),
          who: T("加里森（奥本大学，两翼共用）、克莱因、霍维茨、许尔斯曼；奥地利经济学发展学会（SDAE，1996）", "Garrison (Auburn University, used by both wings), Klein, Horwitz, Hülsmann; Society for the Development of Austrian Economics (SDAE, 1996)"),
          arg: T("奥派的未解问题几乎都落在两翼的接缝处；一个新人最可能做出贡献的地方也在那里。两本期刊都读，两边的会议都去。", "The school's open problems sit almost entirely at the seam between the wings — and that is where a newcomer is most likely to contribute. Read both journals, attend both conferences."),
          move: T("如果两个纲领在方法上被证明不可通约，我会承认必须选一个。", "I would admit one must choose if the two programmes were shown to be methodologically incommensurable.") },
      ],
    },
  ];

  // ---------- 5 个原型立场（null = 该原型对此问题没有典型立场，不参与距离计算） ----------
  const ARCH = [
    { id: "roth", name: T("罗斯巴德派", "Rothbardian"),
      prof: { method: "apriori", calc: "calc", eq: "judge", bank: "full", ethics: "rights", state: "anarchy", mono: "none", inst: "auburn" } },
    { id: "mises", name: T("米塞斯派", "Misesian"),
      prof: { method: "apriori", calc: "calc", eq: "alert", bank: "free", ethics: "util", state: "minarchy", mono: "possible", inst: "auburn" } },
    { id: "hayek", name: T("哈耶克派 / GMU", "Hayekian / GMU"),
      prof: { method: "evol", calc: "both", eq: "alert", bank: "free", ethics: "util", state: "classical", mono: "possible", inst: "gmu" } },
    { id: "freebank", name: T("自由银行派", "Free-banking"),
      prof: { method: "evol", calc: "know", eq: "alert", bank: "free", ethics: "util", state: "minarchy", mono: "possible", inst: "gmu" } },
    { id: "lachmann", name: T("拉赫曼派", "Lachmannian"),
      prof: { method: "evol", calc: "know", eq: "kaleid", bank: null, ethics: null, state: null, mono: null, inst: "gmu" } },
  ];

  const UND = "undecided";
  let cur = 0;
  const picks = {};
  Q.forEach((q) => { picks[q.id] = UND; });

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🗺️ 辩论地图：八场奥派内部争论，你暂时站在哪里？", "🗺️ The debate map: eight arguments inside the school — where do you provisionally stand?")}</div>
      <div class="demo-meta">${T("先点一个问题，读每一方的代表人物、最强论证与“什么会让我改变看法”；再在下方选你的暂定立场（或“未定”）。工具不判对错——这些是尚未裁决的争论；它只算你离五个原型立场各有多远。", "Pick a question, read each side's proponents, strongest argument and “what would move me”; then choose your provisional position below (or “undecided”). Nothing is scored right or wrong — these are unsettled arguments; the tool only computes how far you sit from five archetype profiles.")}</div>
      <div class="demo-btns" id="dm-qs">${Q.map((q, i) => `<button class="demo-btn" data-q="${i}">${q.short}</button>`).join("")}</div>
      <div class="demo-block">
        <div class="demo-label" id="dm-title"></div>
        <div class="demo-meta" id="dm-ctx"></div>
        <div id="dm-cards"></div>
        <div class="demo-row" style="margin-top:12px">
          <span class="demo-label" style="margin:0">${T("你的暂定立场：", "Your provisional position:")}</span>
          <div class="demo-seg" id="dm-seg"></div>
        </div>
      </div>
      <div class="demo-block">
        <div class="demo-label">${T("你的分歧档案", "Your profile across the eight debates")}</div>
        <div class="stat-row" id="dm-stats"></div>
        <div id="dm-bars" style="margin-top:12px"></div>
        <div class="demo-out" id="dm-out"></div>
      </div>
      <div class="demo-btns"><button class="demo-btn" id="dm-reset">${T("清空所有选择", "Clear all choices")}</button></div>
      <p class="demo-tip">${T(
        "看两件事：第一，每张卡片最后一行“什么会让我改变看法”——能说出这句话的立场才是论证，说不出的是信仰。第二，档案里“最接近”和“最远”之间的距离常常很小：多数认真读过两翼的人都是混合型，这不是骑墙，是这些争论本来就还没裁决。",
        "Watch two things. First, the last line on each card, “what would move me” — a position that can say this is an argument; one that cannot is a creed. Second, the gap between your “closest” and “furthest” archetype is often small: most people who have read both wings carefully are hybrids. That is not fence-sitting; these debates are genuinely unsettled."
      )}</p>
    </div>`;

  const posName = (qid, pid) => {
    if (pid === UND) return T("未定", "Undecided");
    const q = Q.find((x) => x.id === qid);
    const p = q.pos.find((x) => x.id === pid);
    return p ? p.name : "?";
  };

  const paintQuestion = () => {
    const q = Q[cur];
    root.querySelectorAll("#dm-qs .demo-btn").forEach((b) => b.classList.toggle("active", +b.dataset.q === cur));
    root.querySelector("#dm-title").innerHTML = `<b style="color:var(--ink)">${q.title}</b>`;
    root.querySelector("#dm-ctx").textContent = q.ctx;
    const cls = q.pos.length === 3 ? "cmp-3" : "cmp";
    root.querySelector("#dm-cards").innerHTML = `<div class="${cls}">${q.pos.map((p, i) => {
      const mine = picks[q.id] === p.id;
      const cell = mine ? "hl" : (i === 1 && q.pos.length === 2 ? "cold" : "");
      return `<div class="cmp-cell ${cell}">
        <h5>${p.name}${mine ? ` <span class="pill ok">${T("你的立场", "your pick")}</span>` : ""}</h5>
        <div class="demo-meta" style="margin:0 0 8px"><b>${T("代表与文本：", "Proponents and texts: ")}</b>${p.who}</div>
        <div style="font-size:13.5px;line-height:1.6"><b>${T("最强论证：", "Strongest argument: ")}</b>${p.arg}</div>
        <div class="demo-meta" style="margin-top:8px;border-top:1px dashed var(--line);padding-top:8px"><b>${T("什么会让我改变看法：", "What would move me: ")}</b>${p.move}</div>
      </div>`;
    }).join("")}</div>`;
    const seg = root.querySelector("#dm-seg");
    const opts = q.pos.map((p) => [p.id, p.name.split(/[（(]/)[0].trim()]).concat([[UND, T("未定", "Undecided")]]);
    seg.innerHTML = opts.map(([id, lab]) => `<button class="${picks[q.id] === id ? "on" : ""}" data-p="${id}">${lab}</button>`).join("");
    seg.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
      picks[q.id] = b.dataset.p;
      paintQuestion();
      paintProfile();
    }));
  };

  // 距离 = 在你已表态且原型有典型立场的问题上，不一致的比例
  const distances = () => {
    return ARCH.map((a) => {
      let cmp = 0, miss = 0;
      for (const q of Q) {
        const mine = picks[q.id];
        const theirs = a.prof[q.id];
        if (mine === UND || theirs == null) continue;
        cmp++;
        if (mine !== theirs) miss++;
      }
      return { a, cmp, miss, d: cmp ? miss / cmp : null };
    });
  };

  const paintProfile = () => {
    const answered = Q.filter((q) => picks[q.id] !== UND);
    root.querySelector("#dm-stats").innerHTML = Q.map((q) => {
      const p = picks[q.id];
      const lab = p === UND ? T("未定", "Undecided") : posName(q.id, p).split(/[（(]/)[0].trim();
      return `<div class="stat"><div class="k">${q.short}</div><div class="v ${p === UND ? "" : "acc"}" style="font-size:13px;line-height:1.35">${lab}</div></div>`;
    }).join("");

    const ds = distances();
    root.querySelector("#dm-bars").innerHTML = ds.map(({ a, cmp, d }) => {
      const aff = d == null ? 0 : (1 - d);
      const pct = Math.round(aff * 100);
      const color = d == null ? "var(--line)" : (aff >= 0.75 ? "var(--green)" : aff >= 0.5 ? "var(--orange)" : "var(--blue)");
      return `<div class="bar2"><span class="lab">${a.name}</span><div class="track"><div class="fill" style="width:${d == null ? 0 : pct}%;background:${color}"></div></div><span class="val">${d == null ? "–" : `${pct}% · ${cmp}${T(" 题", " q")}`}</span></div>`;
    }).join("");

    const out = root.querySelector("#dm-out");
    if (answered.length === 0) {
      out.textContent = T("还没有表态。每个问题都可以选“未定”——但至少选三个，档案才有意义。", "No positions yet. “Undecided” is always allowed — but pick at least three to make the profile meaningful.");
      return;
    }
    const leanTxt = answered.map((q) => `${T("在“", "on ")}${q.short}${T("”上偏向", ": ")}${posName(q.id, picks[q.id]).split(/[（(]/)[0].trim()}`).join(T("；", "; "));
    const und = Q.filter((q) => picks[q.id] === UND).map((q) => q.short);
    const valid = ds.filter((x) => x.d != null);
    let verdict = "";
    if (answered.length < 3 || valid.length === 0) {
      verdict = T("（再选几题，距离才稳定。）", "(Answer a few more for the distances to settle.)");
    } else {
      const minD = Math.min(...valid.map((x) => x.d));
      const maxD = Math.max(...valid.map((x) => x.d));
      const closest = valid.filter((x) => x.d === minD).map((x) => x.a.name);
      const furthest = valid.filter((x) => x.d === maxD).map((x) => x.a.name);
      const sep = T("、", " / ");
      if (minD === maxD) {
        verdict = T(`离五个原型一样远（不一致率 ${Math.round(minD * 100)}%）——你是彻底的混合型，或者还没选够题。`, `Equidistant from all five archetypes (${Math.round(minD * 100)}% disagreement) — either a thorough hybrid, or not enough questions answered yet.`);
      } else {
        verdict = T(`最接近：${closest.join(sep)}（不一致率 ${Math.round(minD * 100)}%）；最远：${furthest.join(sep)}（不一致率 ${Math.round(maxD * 100)}%）。`, `Closest to: ${closest.join(sep)} (${Math.round(minD * 100)}% disagreement); furthest from: ${furthest.join(sep)} (${Math.round(maxD * 100)}% disagreement).`);
      }
      const exact = valid.filter((x) => x.miss === 0 && x.cmp >= 3);
      if (exact.length && answered.length === Q.length) verdict += T(` 你与 ${exact.map((x) => x.a.name).join(sep)} 在所有可比问题上完全一致——先确认这是读完两翼后的结论，而不是只读了一翼。`, ` You agree with ${exact.map((x) => x.a.name).join(sep)} on every comparable question — make sure that is the result of reading both wings, not just one.`);
    }
    out.innerHTML = `${T("你", "You lean ")}${leanTxt}${und.length ? T(`；在 ${und.join("、")} 上未定`, `; undecided on ${und.join(", ")}`) : ""}${T("。", ".")}<br>${verdict}`;
  };

  root.querySelectorAll("#dm-qs .demo-btn").forEach((b) => b.addEventListener("click", () => { cur = +b.dataset.q; paintQuestion(); }));
  root.querySelector("#dm-reset").addEventListener("click", () => { Q.forEach((q) => { picks[q.id] = UND; }); paintQuestion(); paintProfile(); });

  paintQuestion();
  paintProfile();
}
