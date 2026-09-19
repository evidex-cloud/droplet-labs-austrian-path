// 交互演示：论证搭建器——选一个命题，用六块积木（定义、理论、钢人、回应、证据、边界）拼出一篇奥派分析的骨架；
// 工具会真的扫描你的文字：缺哪块、哪些术语该翻译成人话、有没有带日期的预言、有没有“诉诸米塞斯”，并给出完整度。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);
  const NOW_YEAR = new Date().getFullYear();

  /* ---------- 六块积木 ---------- */
  const BLOCKS = [
    { k: "def", name: T("① 定义", "① Definition"), hint: T("命题里每个承重的词，“我说的 X 是指……”", "every load-bearing word in the thesis: “by X I mean …”") },
    { k: "theory", name: T("② 理论", "② Theory"), hint: T("从行动逻辑推出来的那一步，不加“或许”", "the step deduced from action — no “perhaps”") },
    { k: "steel", name: T("③ 钢人", "③ Steelman"), hint: T("对手自己会点头的最强版本", "the strongest version the opponent would sign") },
    { k: "reply", name: T("④ 回应", "④ Reply"), hint: T("只攻承重墙，承认对方对的部分", "attack only the load-bearing wall; concede what is right") },
    { k: "evid", name: T("⑤ 证据", "⑤ Evidence"), hint: T("说明而非证明；展示反例序列", "illustrate, don't prove; show the counter-series") },
    { k: "limits", name: T("⑥ 什么会改变我", "⑥ What would change my mind"), hint: T("写出反证长什么样", "describe what the disproof would look like") },
  ];

  /* ---------- 预设命题与积木片段（每块 A / B 两段，其中一段故意带毛病） ---------- */
  const THESES = [
    {
      id: "rent",
      t: T("租金管制会减少住房供给", "Rent control reduces the housing supply"),
      s: {
        def: [
          T("我说的“租金管制”是指法律规定的租金上限，低于当前市场租金，并限制续约涨幅。“住房供给”指可出租单元的数量与质量。", "By “rent control” I mean a legal ceiling on rents set below the current market rent, with limits on increases at renewal. By “housing supply” I mean the number and quality of units offered for rent."),
          T("租金管制就是典型的干预主义价格管制，行动学告诉我们它必然失败。", "Rent control is textbook interventionist price control; praxeology tells us it must fail."),
        ],
        theory: [
          T("租金是房东为“把这套房子出租而不是自住、卖掉或空置”所要的价格。把价格压到市场之下，等于禁止一切房东只在更高租金下才愿意提供的出租——这一步不依赖数据。调整会走哪条边（少盖、改售、减少维护、转为短租）理论不指定。", "Rent is the price a landlord asks for offering a unit for rent rather than living in it, selling it or leaving it empty. A ceiling below the market rent forbids every rental that only pays at a higher rent — that step needs no data. Which margin adjusts (fewer new units, conversion to condos, less maintenance, a shift to short-term lets) theory does not specify."),
          T("根据奥派理论，租金管制必然导致住房短缺，米塞斯早已证明这一点，无需多言。", "Austrian theory shows rent control must cause a shortage; Mises proved this long ago and nothing more needs saying."),
        ],
        steel: [
          T("支持者最强的版本：住房供给在短期内几乎固定（盖楼要好几年），所以短期内房东提高租金不会带来新供给，只是把租户的收入转移给地主；管制在这段时间里保护了现有租户，且新建住房可以豁免以保留建房激励。", "The strongest case for it: in the short run the housing stock is nearly fixed (building takes years), so a rent rise brings no new supply and merely transfers tenant income to landlords; control protects sitting tenants during that window, and new construction can be exempted to preserve the incentive to build."),
          T("支持者认为房东都是贪婪的，租户需要保护，他们根本不懂供给。", "Supporters think landlords are greedy and tenants need protecting; they simply do not understand supply."),
        ],
        reply: [
          T("承重墙是“短期供给固定”。但供给不只是新楼：现有房东每天都在决定是否继续出租、是否维护、是否改成自住或短租——这些边际上的调整在几个月内就会发生。豁免新建住房也不能消除“未来可能被管制”的预期，而预期正是建房决策的输入。", "The load-bearing wall is “supply is fixed in the short run.” But supply is not only new buildings: existing landlords decide daily whether to keep renting, maintain, convert to owner-occupancy or short-term lets — and those margins move within months. Exempting new construction does not remove the expectation that it may be controlled later, and expectations are exactly what building decisions run on."),
          T("这完全是错的，主流经济学家早就被证明是傻瓜，任何懂点行动学的人都知道价格管制的后果。", "This is simply wrong; mainstream economists have been shown to be fools, and anyone who knows a little praxeology understands what price controls do."),
        ],
        evid: [
          T("用作说明而非证明：圣保罗 2021 年通过租金管制后，有研究记录到受管制房源的挂牌量下降、部分转售——但也要展示反例：某些豁免新建住房的城市，新开工没有明显下降。理论预测的是“某条边会调整”，不预测是哪一条。", "Illustration, not proof: after St. Paul passed rent control in 2021, studies documented fewer listings of controlled units and some conversions to sale — but also show the counter-case: in cities that exempt new construction, housing starts did not fall clearly. The theory predicts that some margin adjusts, not which one."),
          T("数据证明了一切：2027 年之前所有实行租金管制的城市都会出现住房崩溃。", "The data prove everything: by 2027 every city with rent control will see a housing collapse."),
        ],
        limits: [
          T("什么会改变我的看法：如果一个城市的租金管制温和（上限接近市场租金）、豁免新建住房、且五年内出租房源数量与维护支出相对可比城市没有下降，我会认为在那个区间内它的供给效应可以忽略。", "What would change my mind: if a city's control is mild (ceiling close to market rent), exempts new construction, and after five years its rental listings and maintenance spending have not fallen relative to comparable cities, I would conclude the supply effect is negligible in that range."),
          T("没有什么能改变我的看法，因为这是先验真理。", "Nothing could change my mind, because this is an a priori truth."),
        ],
      },
    },
    {
      id: "rate",
      t: T("2020 年的降息造成了错误投资", "The 2020 rate cut caused malinvestment"),
      s: {
        def: [
          T("我说的“错误投资”是指只在被压低的利率下才显得划算、一旦利率回到储蓄者真实愿意接受的水平就无法完成或无法盈利的项目。“2020 年的降息”指美联储 2020 年 3 月把政策利率降到接近零并配合大规模资产购买。", "By “malinvestment” I mean projects that only looked profitable at the suppressed rate and cannot be completed or made profitable once the rate returns to what savers actually accept. By “the 2020 rate cut” I mean the Fed taking its policy rate to near zero in March 2020 alongside large asset purchases."),
          T("2020 年的信用扩张是教科书级的 ABCT 案例，坎蒂隆效应和错误投资都出现了。", "The 2020 credit expansion is a textbook ABCT case; the Cantillon effect and malinvestment both showed up."),
        ],
        theory: [
          T("利率是“等多久”的价格。央行把它压到零，等于对企业家说“社会愿意多等”，可储蓄者并没有多存钱。于是十年后才回本的项目被开工。这一步是逻辑；哪些行业、多大规模、何时暴露，理论不给答案。", "The interest rate is the price of waiting. Pushing it to zero tells entrepreneurs “society is willing to wait longer,” but savers have not saved more. So projects that pay back only in ten years get started. That step is logic; which sectors, how large, and when it surfaces, theory does not say."),
          T("行动学演绎表明，人为压低的利率必然在两年内引发萧条，这是不可反驳的。", "Praxeological deduction shows an artificially low rate must produce a bust within two years; this is irrefutable."),
        ],
        steel: [
          T("最强的反方：2020 年是一场外生冲击（疫情），不是自发的信用繁荣。若央行不降息，一场流动性挤兑会让本来健康的企业倒闭——这是次生萧条，哈耶克晚年也承认应当阻止。降息买的是时间，而非错误的项目。", "The strongest opposing case: 2020 was an exogenous shock (the pandemic), not a spontaneous credit boom. Without the cut, a liquidity run would have bankrupted otherwise healthy firms — a secondary deflation the older Hayek agreed should be prevented. The cut bought time, not bad projects."),
          T("凯恩斯主义者只会说“不降息会更糟”，他们从不承认自己错。", "Keynesians just say “it would have been worse without it”; they never admit they are wrong."),
        ],
        reply: [
          T("我承认阻止流动性挤兑的理由。但“买时间”与“压低利率两年并伴随货币增长约 25%”是两件事：前者是短期贷款给有偿付能力的企业，后者改变了所有长期项目的折现率。承重墙是“只是买时间”——2021 年的 SPAC 潮、零利润科技股估值与长期债券发行量说明信号被当成了永久的。", "I accept the case for stopping a liquidity run. But “buying time” and “holding the rate near zero for two years while broad money grew about 25%” are different things: the first lends short-term to solvent firms, the second changes the discount rate on every long project. The load-bearing wall is “it only bought time” — the 2021 SPAC wave, valuations of profitless tech and record long-dated bond issuance suggest the signal was read as permanent."),
          T("米塞斯说过信用扩张必然以崩溃告终，所以美联储在 2027 年前一定会引发大萧条 2.0。", "Mises said credit expansion must end in collapse, so the Fed will certainly trigger Great Depression 2.0 before 2027."),
        ],
        evid: [
          T("用作说明：2020–21 年长期项目的比例上升（长久期债券发行、未盈利公司的 IPO），2022 年加息后这些领域最先受伤。同时展示反例：整体失业率没有出现教科书式周期理论会暗示的飙升——部分因为劳动力市场紧张吸收了重新配置。", "Illustration: in 2020–21 the share of long-dated projects rose (long-duration bond issuance, IPOs of profitless firms) and after the 2022 hikes those areas were hit first. Also show the counter-series: aggregate unemployment never spiked the way a textbook Austrian cycle story might suggest — partly because a tight labor market absorbed the reallocation."),
          T("M2 图表证明了 ABCT，任何看过这张图的人都不可能再相信主流。", "The M2 chart proves ABCT; nobody who has seen it could still believe the mainstream."),
        ],
        limits: [
          T("什么会改变我的看法：如果 2022–24 年加息后，2020–21 年开工的长期项目的完工率与盈利能力和 2010 年代的同类项目没有差别，我会认为这次扩张主要被货币需求吸收，错误投资规模有限。", "What would change my mind: if, after the 2022–24 hikes, the completion rate and profitability of long projects started in 2020–21 turned out no worse than comparable 2010s projects, I would conclude the expansion was mostly absorbed by money demand and malinvestment was limited."),
          T("理论已经先验地证明了这一点，不存在改变看法的可能。", "The theory has already established this a priori; there is no possibility of changing my mind."),
        ],
      },
    },
    {
      id: "btc",
      t: T("比特币还不是货币", "Bitcoin is not money yet"),
      s: {
        def: [
          T("我说的“货币”是指被普遍接受的交换媒介——人们收下它不是为了自用，而是为了再换别的东西。“还不是”指它目前主要被当作资产持有，而不是在日常交易中被普遍接受。", "By “money” I mean a generally accepted medium of exchange — something people take not to use but to trade on. By “not yet” I mean it is currently held mainly as an asset rather than generally accepted in everyday trade."),
          T("比特币不满足回归定理，所以按行动学它不可能是货币。", "Bitcoin fails the regression theorem, so praxeologically it cannot be money."),
        ],
        theory: [
          T("门格尔的故事：货币不是被发明的，而是从最好卖的商品里长出来的——越多人接受，它就越好卖，越好卖就越多人接受。这是一个程度问题，不是开关。所以问题不是“比特币是不是货币”，而是“它在这条路上走到了哪里”。", "Menger's story: money is not invented but grows out of the most saleable good — the more people accept it, the more saleable it becomes, and the more saleable, the more accept it. This is a matter of degree, not a switch. So the question is not “is Bitcoin money” but “how far along that road is it.”"),
          T("可销售性和回归定理决定了一切，其余都是主流的噪音。", "Saleableness and the regression theorem settle everything; the rest is mainstream noise."),
        ],
        steel: [
          T("最强的反方：在几个高通胀国家，比特币已经被用于日常支付与汇款；美元在 1971 年后也曾经历“信任真空”却仍是货币；而“广泛接受”本身是逐渐发生的——货币化的早期阶段看起来正是像一种波动的资产。", "The strongest opposing case: in several high-inflation countries Bitcoin is already used for everyday payments and remittances; the dollar survived its own trust vacuum after 1971 and remained money; and “general acceptance” always arrives gradually — the early stage of monetization looks exactly like a volatile asset."),
          T("比特币支持者只是想让币价上涨，他们不懂货币理论。", "Bitcoin supporters just want the price to go up; they do not understand monetary theory."),
        ],
        reply: [
          T("我接受“货币化是渐进的”。承重墙是“已经普遍接受”——在多数经济体中，以比特币计价的工资、租金与商品价格仍然稀少，人们心里的记账单位仍是本币。这不否定它未来成为货币的可能，只说明“还不是”。", "I accept that monetization is gradual. The load-bearing wall is “already generally accepted” — in most economies, wages, rents and shelf prices denominated in Bitcoin remain rare, and the unit people think in is still the local currency. That does not rule out its becoming money; it only says “not yet.”"),
          T("正如罗斯巴德所说，只有黄金才是真正的货币，比特币在 2027 年前就会归零。", "As Rothbard said, only gold is true money; Bitcoin will go to zero before 2027."),
        ],
        evid: [
          T("用作说明：链上数据显示大部分比特币长期不动（被持有而非流通）；同时展示反例：在阿根廷、尼日利亚等地，稳定币与比特币的点对点交易量持续增长。理论预测“接受度是渐进的”，不预测时间表。", "Illustration: on-chain data show most Bitcoin sits unmoved for long periods (held, not spent); also show the counter-case: in Argentina, Nigeria and elsewhere, peer-to-peer volumes in stablecoins and Bitcoin keep growing. The theory predicts acceptance is gradual; it does not predict a timetable."),
          T("所有数据都证明比特币永远不会被接受为货币。", "All the data prove Bitcoin will never be accepted as money."),
        ],
        limits: [
          T("什么会改变我的看法：如果某个中等规模经济体中，多数工资与租金开始以比特币计价并且不再即时换回本币，我会认为它在那里已经成为货币。", "What would change my mind: if in some mid-sized economy most wages and rents came to be denominated in Bitcoin and were no longer converted immediately into local currency, I would conclude it had become money there."),
          T("不需要讨论反证，理论已经决定了结论。", "No need to discuss counter-evidence; the theory has settled the conclusion."),
        ],
      },
    },
    {
      id: "minwage",
      t: T("上调最低工资会减少最低技能工人的工时", "The minimum wage rise will reduce hours for the least skilled"),
      s: {
        def: [
          T("我说的“上调”是指本市最低时薪从 12 美元升到 18 美元。“最低技能工人”指目前时薪在 12–18 美元之间的人。“工时”包括每周小时数与非工资福利。", "By “the rise” I mean this city's minimum hourly wage going from $12 to $18. By “the least skilled” I mean workers currently earning between $12 and $18. By “hours” I include weekly hours and non-wage benefits."),
          T("最低工资是价格管制，行动学证明它必然造成失业。", "The minimum wage is a price floor; praxeology proves it must cause unemployment."),
        ],
        theory: [
          T("工资是雇主对一名工人边际产出的估价。禁止低于 18 美元的雇佣，就是禁止一切估价低于 18 美元的岗位——这一步不靠数据。但调整不只走“裁人”一条边：砍工时、取消免费餐、提高招聘门槛、换自助点餐机、涨价。理论说“总有一条边在动”，不说是哪条。", "A wage is an employer's estimate of a worker's marginal product. Forbidding employment below $18 forbids every job valued below $18 — no data needed for that step. But adjustment does not run only along “fire people”: cut hours, drop the free meal, raise hiring standards, install kiosks, raise prices. Theory says some margin moves; it does not say which."),
          T("根据奥派理论，2027 年底前该市青少年失业率必将翻倍。", "On Austrian theory, teen unemployment in this city will inevitably double by the end of 2027."),
        ],
        steel: [
          T("最强的反方：如果低薪雇主有买方垄断力量（工人难以换雇主），工资会被压在边际产出之下；在那个区间内提高最低工资不减少就业，甚至可能增加——这是卡德与克鲁格 1994 年新泽西快餐店研究的主张，且后来的若干研究发现小幅上调的就业效应接近零。", "The strongest opposing case: if low-wage employers have monopsony power (workers cannot easily switch), wages sit below marginal product; raising the floor inside that gap does not reduce employment and may raise it — the claim of Card and Krueger's 1994 New Jersey fast-food study, and several later studies find near-zero employment effects for modest rises."),
          T("支持者根本不懂供需，只想讨好选民。", "Supporters do not understand supply and demand; they just want to please voters."),
        ],
        reply: [
          T("买方垄断在个别小镇可能成立，但承重墙是“上调幅度在那个缺口之内”。50% 的涨幅把下限推到接近本地中位工资，远超任何合理的买方垄断缺口。而且多数研究测量的是人数而非工时与福利——正是我预期调整发生的地方。", "Monopsony may hold in a one-employer town, but the load-bearing wall is “the rise stays inside that gap.” A 50% jump pushes the floor near the local median wage, far beyond any plausible monopsony gap. And most studies measure headcount, not hours and benefits — exactly where I expect the adjustment to land."),
          T("卡德和克鲁格的研究早就被证明是垃圾，主流经济学家都是意识形态的奴隶。", "Card and Krueger's study was long ago shown to be garbage; mainstream economists are slaves to ideology."),
        ],
        evid: [
          T("用作说明：西雅图 2015–17 年逐步上调至 15 美元后，华盛顿大学团队的研究记录到低薪工人的工时下降；同时展示反例：伯克利团队用不同样本得出就业效应接近零。分歧提示测量方法（工时 vs 人数）比结论本身更关键。", "Illustration: after Seattle's phased rise toward $15 in 2015–17, the University of Washington team documented falling hours for low-wage workers; also show the counter-case: the Berkeley team, with a different sample, found employment effects near zero. The disagreement suggests the measurement choice (hours vs headcount) matters more than the headline."),
          T("数据不重要，理论已经证明了结论。", "Data do not matter; the theory has already proved the conclusion."),
        ],
        limits: [
          T("什么会改变我的看法：如果 18 美元实施三年后，该区间工人的总工时与福利相对可比城市没有下降、雇主也没有加速自动化，我会认为买方垄断解释在此更强。对从 12 到 13 美元的小幅上调，我不预言任何可见后果。", "What would change my mind: if three years after the $18 floor, total hours and benefits for the affected band have not fallen relative to comparable cities and employers have not accelerated automation, I would conclude the monopsony story is stronger here. For a rise from $12 to $13 I predict no visible effect at all."),
          T("没有任何证据能改变一个先验结论。", "No evidence can change an a priori conclusion."),
        ],
      },
    },
    {
      id: "steel",
      t: T("钢铁关税毁掉的岗位多于它保住的", "Tariffs on steel destroy more jobs than they save"),
      s: {
        def: [
          T("我说的“钢铁关税”是指对进口钢材征收 25% 的关税。“毁掉的岗位”指用钢行业（汽车、建筑、机械）因成本上升而减少的就业；“保住的岗位”指炼钢行业因此维持的就业。", "By “steel tariffs” I mean a 25% duty on imported steel. By “jobs destroyed” I mean employment lost in steel-using industries (autos, construction, machinery) as their costs rise; by “jobs saved” I mean employment in steel-making kept alive by the duty."),
          T("关税是干预主义，巴斯夏早就驳倒了保护主义。", "Tariffs are interventionism; Bastiat refuted protectionism long ago."),
        ],
        theory: [
          T("关税抬高国内钢价。炼钢厂受益是看得见的；用钢企业成本上升、竞争力下降、少雇人是看不见的。用钢行业的就业人数通常远大于炼钢行业——在美国大约是数十比一。理论说“看不见的损失存在”，规模要靠事实。", "A tariff raises the domestic steel price. The steel mills' gain is seen; the higher costs, lost competitiveness and reduced hiring of steel-using firms are unseen. Steel-using industries typically employ far more people than steel-making — in the US roughly dozens to one. Theory says the unseen loss exists; its size is a matter of fact."),
          T("根据奥派理论，关税必然摧毁经济，主流经济学家全是傻子才看不到。", "Austrian theory shows tariffs must wreck the economy; only a fool in the mainstream could miss it."),
        ],
        steel: [
          T("最强的反方：钢铁是国防必需品，产能一旦关闭就很难重建；外国政府补贴的倾销在摧毁本国产能，短期关税是对补贴的纠正；并且炼钢岗位集中在少数社区，损失是集中的、可见的，而用钢行业的损失分散、每人很小。", "The strongest opposing case: steel is a defense necessity and closed capacity is hard to rebuild; dumping subsidized by foreign governments is destroying domestic capacity, and a temporary tariff corrects the subsidy; and steel jobs are concentrated in a few communities, so the losses are concentrated and visible while steel-users' losses are diffuse and small per person."),
          T("保护主义者只是不懂比较优势。", "Protectionists simply do not understand comparative advantage."),
        ],
        reply: [
          T("国防论证只支持一个小得多的、针对特定产能的措施，而非全行业关税。承重墙是“损失集中所以更重要”——集中的损失更可见，但不因此更大；分散在几十万用钢岗位上的损失加总起来通常超过被保住的岗位。至于补贴倾销：外国纳税人替我们的用钢企业付钱，而关税让我们自己付两次。", "The defense argument supports a far smaller, capacity-specific measure, not an industry-wide tariff. The load-bearing wall is “concentrated losses matter more” — they are more visible, not larger; losses spread over hundreds of thousands of steel-using jobs usually sum to more than the jobs saved. As for subsidized dumping: foreign taxpayers are paying for our steel-users, while a tariff makes us pay twice."),
          T("正如米塞斯所证明的，任何关税都是对消费者的抢劫，2027 年前制造业必将崩溃。", "As Mises proved, every tariff is robbery of consumers, and manufacturing will certainly collapse before 2027."),
        ],
        evid: [
          T("用作说明：2002 年美国钢铁关税期间，有研究估计用钢行业的就业损失超过整个炼钢行业的就业总数；2018 年关税后的研究得出类似方向。也展示反例：炼钢行业的产能利用率确实在关税期间上升——理论没有说保护无效，只说它有看不见的代价。", "Illustration: during the 2002 US steel tariffs, one study estimated job losses in steel-using industries exceeding total employment in steel-making; studies of the 2018 tariffs point the same way. Also show the counter-case: steel-making capacity utilization did rise during the tariff — the theory never said protection fails to protect, only that it has an unseen cost."),
          T("所有关税都证明了奥派是对的，这一点毋庸置疑。", "Every tariff proves the Austrians right; that is beyond doubt."),
        ],
        limits: [
          T("什么会改变我的看法：如果关税期间用钢行业的就业与产出相对可比行业没有下降，且国内钢价没有明显高于世界价格，我会认为这次关税的净就业效应接近零。", "What would change my mind: if during the tariff, employment and output in steel-using industries did not fall relative to comparable industries, and domestic steel prices did not rise clearly above world prices, I would conclude the net employment effect was close to zero."),
          T("这是先验真理，不需要反证。", "This is an a priori truth; no counter-evidence is needed."),
        ],
      },
    },
    {
      id: "custom",
      t: T("✎ 自定义命题", "✎ Custom thesis"),
      s: {
        def: [T("我说的“X”是指……；“Y”是指……（把命题里承担重量的词定义清楚）", "By “X” I mean …; by “Y” I mean … (define every word in the thesis that carries weight)")],
        theory: [T("……是……的价格。禁止/压低它，等于……——这一步是逻辑，不靠数据。调整会走哪条边，理论不指定。", "… is the price of …. Forbidding / suppressing it means … — that step is logic, not data. Which margin adjusts, theory does not specify.")],
        steel: [T("最强的反方版本：……（写到对方自己会点头为止）", "The strongest opposing case: … (write it until the opponent would nod)")],
        reply: [T("承重墙是“……”。我承认……是对的；但……", "The load-bearing wall is “…”. I concede … is right; but …")],
        evid: [T("用作说明而非证明：……；同时展示反例：……。理论预测……，不预测……。", "Illustration, not proof: …; also show the counter-series: …. The theory predicts …, not ….")],
        limits: [T("什么会改变我的看法：如果……，我会认为……", "What would change my mind: if …, I would conclude …")],
      },
    },
  ];

  /* ---------- 术语 → 人话 ---------- */
  const JARGON = [
    { re: /\bpraxeolog(y|ical|ically)\b/i, zh: /行动学/, tr: T("从“人有目的地行动”推出来的逻辑", "the logic that follows from people acting purposefully") },
    { re: /\bmalinvestments?\b/i, zh: /错误投资/, tr: T("只在被压低的利率下才显得划算的项目", "projects that only looked profitable at the artificially low rate") },
    { re: /\bCantillon\b/i, zh: /坎蒂隆/, tr: T("谁先拿到新钱谁赢", "whoever gets the new money first wins") },
    { re: /\btime[- ]preference\b/i, zh: /时间偏好/, tr: T("你对“明年的一块钱”打几折", "how steeply you discount next year's dollar") },
    { re: /\ba[- ]?priori\b/i, zh: /先验/, tr: T("不靠数据、只靠逻辑就能知道的推论", "known by logic alone, without data") },
    { re: /\b(ERE|evenly rotating economy)\b/, zh: /均匀轮转经济/, tr: T("一个永远不变的假想经济，用来反衬利润从哪来", "an imaginary economy where nothing ever changes, used to show where profit comes from") },
    { re: /\bnatural rate\b/i, zh: /自然利率/, tr: T("没人干预时储蓄者和借款人自己谈出来的利率", "the rate savers and borrowers would settle on with nobody intervening") },
    { re: /\beconomic calculation\b/i, zh: /经济计算/, tr: T("没有价格，苹果和钢材没法加在一起比较", "without prices you cannot add up apples and steel") },
    { re: /\bknowledge problem\b/i, zh: /知识问题/, tr: T("没有人知道全部，价格让不知道的人也能协调", "nobody knows everything; prices let people who don't know coordinate anyway") },
    { re: /\bcredit expansion\b/i, zh: /信用扩张/, tr: T("银行放出了没人真正存进去的钱", "banks lending out money nobody actually saved") },
    { re: /\bspontaneous order\b/i, zh: /自发秩序/, tr: T("没人设计、像语言一样长出来的秩序", "order nobody designed, like a language") },
    { re: /\bcatallactics?\b/i, zh: /交换学/, tr: T("关于交换与市场的理论", "the theory of exchange and the market") },
    { re: /\bHayekian triangle\b/i, zh: /哈耶克三角/, tr: T("“生产要花多长时间 vs 产出多少”的示意图", "a picture of how long production takes versus what it yields") },
    { re: /\broundabout(ness)?\b/i, zh: /迂回生产/, tr: T("先造工具再用工具生产", "making tools first, then producing with them") },
    { re: /\bhigher[- ]order goods?\b/i, zh: /高[级阶](财货|商品|物品)/, tr: T("工具、机器、原料——而非消费品", "tools, machines and materials rather than consumer goods") },
    { re: /\bheterogeneous capital\b/i, zh: /异质资本/, tr: T("机器不是橡皮泥，不能随意改作他用", "machines are not putty; they cannot be reshaped for any use") },
    { re: /\bregression theorem\b/i, zh: /回归定理/, tr: T("货币今天的价值可以一路追溯到它作为普通商品时的价值", "money's value today traces back to its value as a plain commodity") },
    { re: /\bforced saving\b/i, zh: /强制储蓄/, tr: T("消费者在没有选择的情况下把资源让给了投资者", "consumers lose resources to investors without choosing to") },
    { re: /\bconsumer sovereignty\b/i, zh: /消费者主权/, tr: T("最终决定生产什么的是买不买", "buyers ultimately decide what gets made") },
    { re: /\bliquidation\b/i, zh: /清算/, tr: T("把投错的项目重新定价、卖掉、改作他用", "repricing, selling off and re-purposing the mistaken projects") },
    { re: /\binterventionis(m|t)\b/i, zh: /干预主义/, tr: T("政府在市场之外用强制改变价格或数量", "government using coercion to alter prices or quantities") },
    { re: /\bsaleable?ness\b|\bmarketability\b/i, zh: /可销售性/, tr: T("一件东西能多容易、以多小的折价卖掉", "how easily and with how little discount a thing can be sold") },
    { re: /\bABCT\b/, zh: /ABCT/, tr: T("奥地利学派商业周期理论：被压低的利率→投错项目→清算", "Austrian business cycle theory: suppressed rate → misdirected projects → liquidation") },
  ];

  /* ---------- 带日期的预言 ---------- */
  const DATED = [
    { re: /\b(by|before|until|through)\s+(the\s+end\s+of\s+)?(q[1-4]\s+)?(20\d\d)\b/gi, yearIdx: 4 },
    { re: /\b(will|going to|must|inevitably|certainly|is bound to|guaranteed to)\b[^.!?]{0,60}?\b(20\d\d)\b/gi, yearIdx: 2 },
    { re: /\b(next|this coming|the coming)\s+(quarter|year|month|decade)\b/gi },
    { re: /\bwithin\s+(a|an|one|two|three|four|five|six|\d+)\s+(few\s+)?(years?|months?|quarters?|weeks?)\b/gi },
    { re: /\b(20\d\d)\b[^.!?]{0,40}?\b(crash|collapse|hyperinflation|go(es)? to zero|zero)\b/gi, yearIdx: 1 },
    { re: /(20\d\d)\s*年\s*(之前|以前|前|底前|底|内|以内)/g, yearIdx: 1 },
    { re: /(明年|后年|下个?季度|下季度|下半年|未来\s*[\d一二三四五六七八九十两几]+\s*(年|个月|季度)|[\d一二三四五六七八九十两几]+\s*年[之以]?内)/g },
    { re: /(必将|注定|一定会|肯定会|必然会?)[^。！？]{0,30}?(20\d\d\s*年|崩盘|归零|恶性通胀|崩溃|翻倍)/g },
  ];

  /* ---------- 诉诸权威 ---------- */
  const AUTHORITY = [
    /\b(Mises|Hayek|Rothbard|Menger|B(ö|o)hm-Bawerk|Hoppe|Bastiat|Hazlitt)\b\s+(has\s+|had\s+|already\s+|long\s+ago\s+)?(proved|proves|showed|shown|demonstrated|refuted|settled|established|said|says|wrote|warned)\b/gi,
    /\bas\s+(Mises|Hayek|Rothbard|Menger|Hoppe)\s+(said|wrote|put it|showed|proved|explained)\b/gi,
    /\baccording to\s+(Mises|Hayek|Rothbard|Menger|Hoppe)\b/gi,
    /(米塞斯|哈耶克|罗斯巴德|门格尔|庞巴维克|霍普|巴斯夏|哈兹利特)(早就|早已|已经|曾经)?(证明|驳倒|说过|指出|证明了|驳倒了)/g,
    /正如(米塞斯|哈耶克|罗斯巴德|门格尔|霍普)所(说|言|写|证明)/g,
    /(根据|按照)(米塞斯|哈耶克|罗斯巴德|门格尔)的?(说法|话|理论)?/g,
  ];

  /* ---------- 其它修辞失败 ---------- */
  const OTHER = [
    { name: T("阴谋叙事", "conspiracy framing"), re: /\b(conspiracy|cabal|banksters?|the elites?|globalists?|deep state)\b|阴谋|银行家集团|精英集团|深层政府/gi },
    { name: T("“主流都是蠢货”", "“the mainstream is stupid”"), re: /\b(mainstream|keynesians?|economists|academics|supporters|protectionists)\b[^.!?]{0,80}?\b(stupid|idiots?|fools?|foolish|clueless|morons?|shills?|brainwashed|slaves|garbage|do(es)? not understand|don'?t understand|never admit)\b|\b(fools?|idiots?|morons?)\b[^.!?]{0,20}?\b(mainstream|keynesians?)\b|(主流|凯恩斯主义者|经济学家|支持者|保护主义者)[^。！？]{0,20}?(蠢|傻|白痴|愚蠢|脑残|洗脑|奴隶|垃圾|不懂|从不承认)/gi },
    { name: T("道德说教代替机制", "moralizing instead of mechanism"), re: /\b(theft|thieves|stealing|criminal|crime|evil|immoral|robbery|robbing|tyranny)\b|盗窃|偷窃|抢劫|犯罪|邪恶|暴政|罪行/gi },
    { name: T("“无需数据 / 不可反驳 / 图表证明了”", "“needs no data / irrefutable / the chart proves”"), re: /\b(irrefutable|beyond doubt|nothing (could|can) change my mind|no possibility of changing|no evidence can|data do(es)? not matter|no need to discuss counter|no counter-evidence is needed|settled? (everything|the conclusion)|(chart|data|figures?|graph) proves?\b|all the data prove|already proved the conclusion|the rest is (mainstream )?noise)\b|无需多言|不可反驳|毋庸置疑|没有什么能改变|没有任何证据能|不需要(讨论)?反证|决定了一切|证明了一切|图表证明|数据(都)?证明了|数据不重要|不存在改变看法|理论已经(决定|证明)/gi },
  ];

  /* ---------- 状态 ---------- */
  let thesisIdx = 0;
  const text = {}; // k → string
  BLOCKS.forEach((b) => (text[b.k] = ""));
  let customThesis = "";

  const currentThesisText = () => (THESES[thesisIdx].id === "custom" ? customThesis.trim() : THESES[thesisIdx].t);
  const escHtml = (s) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  // 去掉互相包含的命中（“before 2027” ⊂ “will go to zero before 2027”），只留最长的
  const dedupe = (arr) => {
    const u = [...new Set(arr)];
    return u.filter((a) => !u.some((b) => b !== a && b.includes(a)));
  };

  /* ---------- DOM ---------- */
  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧱 论证搭建器：六块积木拼出一篇奥派分析", "🧱 Argument builder: six blocks make an Austrian analysis")}</div>

      <div class="demo-block">
        <label class="demo-label">${T("第一步 · 选一个命题（或自己写）", "Step 1 · Pick a thesis (or write your own)")}</label>
        <div class="demo-btns" id="ab-theses">${THESES.map((th, i) => `<button class="demo-btn${i === 0 ? " active" : ""}" data-th="${i}">${th.t}</button>`).join("")}</div>
        <input class="demo-inp" id="ab-custom" style="display:none" placeholder="${T("写下你的命题，一句话，例如：“限价令会造成汽油排队”", "Write your thesis in one sentence, e.g. “A price cap on gasoline causes queues”")}" />
      </div>

      <div class="demo-block">
        <label class="demo-label">${T("第二步 · 给每一块选一段（A / B），或直接改写成你自己的话。其中一段是故意写坏的——看看工具能不能抓到。", "Step 2 · For each block pick a snippet (A / B) or rewrite it in your own words. One snippet per block is deliberately flawed — see whether the checker catches it.")}</label>
        <div id="ab-blocks"></div>
      </div>

      <div class="demo-block">
        <div class="demo-row"><span class="demo-label" style="margin:0">${T("完整度", "Completeness")}</span><b id="ab-score">0%</b></div>
        <div class="demo-bar"><span id="ab-fill"></span></div>
        <div class="demo-log" id="ab-log" style="margin-top:12px"></div>
      </div>

      <div class="demo-block">
        <div class="demo-row"><span class="demo-label" style="margin:0">${T("第三步 · 拼好的骨架（可复制到你的文档里继续写）", "Step 3 · The assembled skeleton (copy it into your document and keep writing)")}</span><button class="demo-btn" id="ab-copy">${T("复制", "Copy")}</button></div>
        <div class="demo-out" id="ab-out" style="white-space:pre-wrap;word-break:normal"></div>
        <div class="demo-out-sm" id="ab-outsm"></div>
      </div>

      <p class="demo-tip">${T(
        "看三件事：<strong>哪一块空着</strong>（最常被漏掉的是⑥“什么会改变我”）；<strong>哪些词被标成术语</strong>——把它们换成人话，再看警告消不消失；<strong>B 段为什么被抓</strong>——带日期的预言、“米塞斯证明了”、“主流都是傻子”，每一个都是阶段 14.2 里讲过的修辞失败。理论要硬，应用要软。",
        "Watch three things: <strong>which block is empty</strong> (⑥ “what would change my mind” is the one most often skipped); <strong>which words get flagged as jargon</strong> — swap them for plain English and see whether the warning disappears; and <strong>why snippet B gets caught</strong> — dated prophecy, “Mises proved,” “the mainstream is stupid,” each a rhetorical failure from Stage 14.2. Hard on the theory, soft on the application."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const renderBlocks = () => {
    const th = THESES[thesisIdx];
    $("ab-blocks").innerHTML = BLOCKS.map((b) => {
      const snips = th.s[b.k] || [];
      const btns = snips.map((s, i) => `<button class="demo-btn" data-k="${b.k}" data-i="${i}">${th.id === "custom" ? T("模板", "Template") : String.fromCharCode(65 + i)}</button>`).join("");
      return `<div class="demo-block">
        <label class="demo-label"><b style="color:var(--ink)">${b.name}</b> — ${b.hint} <span class="pill bad" id="ab-pill-${b.k}">${T("空", "empty")}</span></label>
        <div class="demo-btns" style="margin:6px 0">${btns}<button class="demo-btn" data-k="${b.k}" data-i="-1">${T("清空", "Clear")}</button></div>
        <textarea class="demo-ta" id="ab-ta-${b.k}" rows="3" placeholder="${T("在这里写你自己的版本……", "Write your own version here …")}">${escHtml(text[b.k])}</textarea>
      </div>`;
    }).join("");
    root.querySelectorAll("#ab-blocks [data-k]").forEach((btn) => btn.addEventListener("click", () => {
      const k = btn.dataset.k, i = +btn.dataset.i;
      text[k] = i < 0 ? "" : (THESES[thesisIdx].s[k][i] || "");
      $("ab-ta-" + k).value = text[k];
      btn.parentElement.querySelectorAll(".demo-btn").forEach((x) => x.classList.toggle("active", x === btn && i >= 0));
      analyze();
    }));
    root.querySelectorAll("#ab-blocks textarea").forEach((ta) => ta.addEventListener("input", () => {
      const k = ta.id.replace("ab-ta-", "");
      text[k] = ta.value;
      ta.parentElement.querySelectorAll(".demo-btn").forEach((x) => x.classList.remove("active"));
      analyze();
    }));
  };

  /* ---------- 真正的检查 ---------- */
  const analyze = () => {
    const thesis = currentThesisText();
    const filled = BLOCKS.filter((b) => text[b.k].trim().length >= 10);
    const missing = BLOCKS.filter((b) => text[b.k].trim().length < 10);
    BLOCKS.forEach((b) => {
      const p = $("ab-pill-" + b.k), ok = text[b.k].trim().length >= 10;
      p.className = "pill " + (ok ? "ok" : "bad");
      p.textContent = ok ? T("已填", "filled") : T("空", "empty");
    });
    const all = [thesis].concat(BLOCKS.map((b) => text[b.k])).join("\n");

    // (b) 术语
    const jargonHits = [];
    const defBlock = text.def, defines = /\bmean(s|t)?\b|是指|指的是|定义为/i.test(defBlock);
    for (const j of JARGON) {
      const m = all.match(j.re) || all.match(j.zh);
      if (!m) continue;
      // “先定义，再使用”：术语若在①里被定义过（“我说的 X 是指……”），不算裸露
      if (defines && (j.re.test(defBlock) || j.zh.test(defBlock))) continue;
      jargonHits.push({ word: m[0], tr: j.tr });
    }
    // (c) 带日期的预言。⑥ 里“如果三年内……我会……”是反证条件，不是预言——只扫 ⑥ 中没有条件词的句子
    const limitsScan = text.limits.split(/[.!?。！？]\s*/).filter((s) => !/\b(if|unless|were|should)\b|如果|若|倘若|除非|假如/i.test(s)).join(" ");
    const scanText = [thesis].concat(BLOCKS.filter((b) => b.k !== "limits").map((b) => text[b.k])).join("\n") + "\n" + limitsScan;
    const datedHits = [];
    for (const d of DATED) {
      d.re.lastIndex = 0; let m;
      while ((m = d.re.exec(scanText))) {
        if (d.yearIdx != null) { const y = parseInt(m[d.yearIdx], 10); if (y < NOW_YEAR) continue; }
        datedHits.push(m[0].trim());
        if (datedHits.length > 6) break;
      }
    }
    const datedShown = dedupe(datedHits);
    // (d) 诉诸权威
    const authHitsRaw = [];
    for (const a of AUTHORITY) { a.lastIndex = 0; let m; while ((m = a.exec(all))) { authHitsRaw.push(m[0]); if (authHitsRaw.length > 6) break; } }
    const authHits = dedupe(authHitsRaw);
    // 其它修辞失败
    const otherHits = [];
    for (const o of OTHER) { o.re.lastIndex = 0; const m = o.re.exec(all); if (m) otherHits.push({ name: o.name, word: m[0] }); }
    // ⑥ 没有条件句？
    const lim = text.limits.trim();
    const limNoIf = lim.length >= 10 && !/\b(if|unless|would|were)\b|如果|若|倘若|除非|假如/i.test(lim);
    // ③ 钢人里有嘲讽？
    const st = text.steel.trim();
    const steelSneer = st.length >= 10 && /\b(just want|simply do not|do not understand|don'?t understand|never admit|stupid|naive|greedy)\b|只是想|根本不懂|从不承认|贪婪|天真|愚蠢/i.test(st);

    // 完整度 = 覆盖率 × 卫生系数：六块齐但满是毛病，也只能拿到 35%
    let hygiene = 30;
    if (jargonHits.length) hygiene -= Math.min(10, 3 + jargonHits.length * 2);
    if (datedHits.length) hygiene -= 8;
    if (authHits.length) hygiene -= 8;
    if (otherHits.length) hygiene -= Math.min(8, otherHits.length * 4);
    if (limNoIf) hygiene -= 4;
    if (steelSneer) hygiene -= 4;
    hygiene = Math.max(0, hygiene);
    const coverage = filled.length / BLOCKS.length;
    const score = Math.round(100 * coverage * (0.35 + 0.65 * (hygiene / 30)));
    $("ab-score").textContent = score + "%";
    $("ab-fill").style.width = score + "%";
    $("ab-fill").style.background = score >= 85 ? "var(--green)" : score >= 50 ? "var(--orange)" : "var(--red)";

    // 日志
    const lines = [];
    if (!thesis) lines.push(`<span class="bad">${T("先写下你的命题。", "Write your thesis first.")}</span>`);
    if (missing.length) lines.push(`<span class="bad">${T("缺少：", "Missing: ")}${missing.map((b) => b.name).join(T("、", ", "))}${missing.some((b) => b.k === "limits") ? T("——没有⑥，读者无法核对你，可信度会打折。", " — without ⑥ the reader has nothing to check you against.") : ""}</span>`);
    else lines.push(`<span class="ok">${T("六块齐了：问题→理论→应用→什么会改变我。", "All six blocks present: question → theory → application → what would change my mind.")}</span>`);
    if (jargonHits.length) lines.push(`<span class="warn">${T("术语未翻译（第一次出现时加一句人话）：", "Untranslated jargon (add one plain sentence at first appearance): ")}${jargonHits.map((h) => `<b>${escHtml(h.word)}</b> → ${h.tr}`).join(T("；", "; ")).slice(0, 900)}</span>`);
    else lines.push(`<span class="ok">${T("没有裸露的术语——非奥派读者也能跟上。", "No naked jargon — a non-Austrian reader can follow.")}</span>`);
    if (datedHits.length) lines.push(`<span class="bad">${T("带日期的预言（理论给模式，不给时点——见阶段 14.4 的失败清单）：", "Dated prophecy (theory gives patterns, not timestamps — see the failure list in Stage 14.4): ")}${datedShown.map((h) => `“${escHtml(h)}”`).join(T("、", ", "))}</span>`);
    if (authHits.length) lines.push(`<span class="bad">${T("诉诸权威（名字不是论证——把米塞斯的论证复述出来）：", "Appeal to authority (a name is not an argument — restate the reasoning): ")}${authHits.map((h) => `“${escHtml(h)}”`).join(T("、", ", "))}</span>`);
    for (const o of otherHits) lines.push(`<span class="bad">${o.name}${T("：", ": ")}“${escHtml(o.word)}”${T(" —— 用机制代替它。", " — replace it with a mechanism.")}</span>`);
    if (limNoIf) lines.push(`<span class="warn">${T("⑥ 里没有“如果……”——“什么会改变我”必须是一个条件句，否则它不是反证。", "⑥ contains no “if …” — a “what would change my mind” must be a conditional, or it is not a disproof.")}</span>`);
    if (steelSneer) lines.push(`<span class="warn">${T("③ 读起来像稻草人（“只是想”“根本不懂”）。钢人的标准：对方看了会点头。", "③ reads like a strawman (“just want,” “do not understand”). The test of a steelman: the opponent would nod.")}</span>`);
    if (!datedHits.length && !authHits.length && !otherHits.length && filled.length === BLOCKS.length && !limNoIf && !steelSneer) lines.push(`<span class="ok">${T("理论硬、应用软、对手被钢人化、留了反证——这是阶段 ∞.3 毕业设计的合格骨架。", "Hard theory, soft application, a steelmanned opponent and a stated disproof — a skeleton fit for the Stage ∞.3 capstone.")}</span>`);
    $("ab-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");

    // 骨架输出
    const out = [T("命题：", "Thesis: ") + (thesis || T("（未填）", "(none)")), ""];
    for (const b of BLOCKS) out.push(b.name + T("：", ": ") + (text[b.k].trim() || T("（空）", "(empty)")), "");
    $("ab-out").textContent = out.join("\n").trim();
    $("ab-outsm").textContent = T(
      `完整度 ${score}% = 覆盖率 ${Math.round(coverage * 100)}%（已填 ${filled.length}/6）× 写作卫生系数（卫生分 ${hygiene}/30 → 系数 ${(0.35 + 0.65 * hygiene / 30).toFixed(2)}）。`,
      `Completeness ${score}% = coverage ${Math.round(coverage * 100)}% (filled ${filled.length}/6) × writing-hygiene factor (hygiene ${hygiene}/30 → factor ${(0.35 + 0.65 * hygiene / 30).toFixed(2)}).`
    );
  };

  /* ---------- 事件 ---------- */
  $("ab-theses").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-th]"); if (!btn) return;
    thesisIdx = +btn.dataset.th;
    $("ab-theses").querySelectorAll(".demo-btn").forEach((x) => x.classList.toggle("active", x === btn));
    $("ab-custom").style.display = THESES[thesisIdx].id === "custom" ? "block" : "none";
    BLOCKS.forEach((b) => (text[b.k] = ""));
    renderBlocks();
    analyze();
  });
  $("ab-custom").addEventListener("input", (e) => { customThesis = e.target.value; analyze(); });
  $("ab-copy").addEventListener("click", () => {
    const s = $("ab-out").textContent;
    const done = () => { $("ab-copy").textContent = T("已复制 ✓", "Copied ✓"); setTimeout(() => ($("ab-copy").textContent = T("复制", "Copy")), 1500); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(s).then(done, () => fallback());
    else fallback();
    function fallback() {
      const ta = document.createElement("textarea"); ta.value = s; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (err) { /* ignore */ }
      document.body.removeChild(ta);
    }
  });

  renderBlocks();
  analyze();
}
