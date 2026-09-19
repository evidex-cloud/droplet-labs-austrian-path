export default {
  id: "cheat-sheet",
  stage: 14,
  order: 6,
  title: "附录：概念、人物与年份速查表",
  difficulty: "mastery",
  prereqs: [],

  oneLiner:
    "这是一张可以撕下来贴在墙上的纸：**40 个概念**各配一句定义和教它的那一课，**20 个人物**各配生卒年与一项贡献，**25 个关键年份**，**12 本按顺序读的书**，以及贯穿全课的**四条主线**。它不教新东西，它把你已经学过的东西压成一页——当你在阶段 ∞.3 写毕业设计、或者五年后在某场争论里忽然想不起“回归定理到底说了什么”时，从这里查。演示区是它的可搜索版本，每一行都能点回对应的课。",

  intuition: `
每一门学科到了某个阶段，都需要一张“一页纸”。医学生有解剖速查表，飞行员有检查清单，程序员有语法卡片。它们的共同点是：**不解释，只索引**。解释在别处（在课里、在原著里）；速查表的任务是让你在三秒钟内找到“那个词是什么意思、谁提出的、去哪一课复习”。

奥地利学派尤其需要这样一张纸，原因有三。

第一，它的概念是**链式**的。主观价值推出边际效用，边际效用推出价格形成，价格推出经济计算，经济计算推出对社会主义的批判，时间偏好推出利息，利息加信用扩张推出商业周期……链条上任何一环忘了，后面的推理就悬空。速查表把链条摊平，让你一眼看到每一环在哪。

第二，它的人物**跨了 150 年、四代人**，而且名字很像：两个“米塞斯”（路德维希是经济学家，弟弟理查德是数学家），“哈耶克三角”和“哈耶克的弧线”，罗斯巴德既写资本理论又写大萧条史，柯兹纳的“警觉”和米塞斯的“判断”长得像但不是一回事。一张有生卒年和一句贡献的人物表，能省掉很多混淆。

第三，它的年份有**戏剧性**。1871 与 1883 是门格尔的两次开战；1912 与 1920 是米塞斯的两次奠基；1929–1931 是周期理论撞上大萧条；1936 是凯恩斯把奥派赶出主流的那一年；1944–1949 是流亡中的两本大书；1971 是法币时代的开端；1974 是诺贝尔奖带来的复兴；2008 与 2020–22 是两次“教科书案例”实时上演；2009 年 1 月 3 日，比特币的创世区块里嵌着一条关于银行救助的新闻标题。把这些年份排成一条线，你会看到这门学派不是一堆抽象命题，而是一段和货币史、政治史纠缠在一起的历史。

怎么用这张表：**不要背**。第一遍从头扫一遍，找出你看到定义仍然说不出“为什么”的那些词——那就是你该回去复习的课。第二遍在写作时查（阶段 14.2）：引用人名年份之前，先对一下。第三遍在阶段 ∞.3 的毕业设计里当清单用：一篇合格的奥派分析，通常至少会调用表中 8–10 个概念。

演示区提供了这张表的**可搜索版本**：输入“利率”或“Hayek”，按概念 / 人物 / 年份 / 书籍筛选，每一行点一下就跳到教它的那一课。

**这一节，我们拆成五块：**

- **① 40 个概念：一句话定义 + 教它的课**
- **② 20 个人物：生卒年 + 一项贡献**
- **③ 25 个关键年份：一条时间线**
- **④ 12 本书：按这个顺序读**
- **⑤ 四条主线与一页地图**
`,

  mechanics: `
### ① 40 个概念：一句话定义 + 教它的课

按课程顺序排列。括号里是教它的那一课。

- **主观价值** —— 价值是行动人对物品能否满足其目的的评价，不是物品的属性（阶段 1.2）。
- **边际效用递减** —— 每多一单位被分配到更次要的用途，所以每一单位的价值等于边际那一单位；从行动逻辑推出，不是心理学（阶段 1.1）。
- **边际对** —— 庞巴维克：市场价被夹在最后一对成交者与第一对未成交者的估值之间（阶段 1.3）。
- **机会成本与看不见的** —— 成本是你放弃的最有价值的替代；巴斯夏的好经济学家看见“不存在的东西”（阶段 1.4）。
- **比较优势** —— 即使你样样更强，专注相对最强的事再交换，双方总产出更高；米塞斯称之为联合法则（阶段 1.5）。
- **行动公理** —— 人有目的地行动；否认它本身就是一个有目的的行动（阶段 2.1）。
- **人的行动学** —— 从行动公理逻辑演绎经济规律的方法，而不是从统计归纳（阶段 2.2）。
- **先验** —— 不靠经验观察就知道为真的命题；统计既不能证实也不能证伪它（阶段 2.2）。
- **方法论个人主义** —— 只有个人会行动、评价、选择；“国家”“市场”不会（阶段 2.3）。
- **均匀轮转经济** —— 米塞斯的思维实验：没有变化和不确定性的经济，用来反衬利润从哪来（阶段 2.4）。
- **时间偏好** —— 其他条件相同，人偏好现在的满足胜过未来；利息由此而来（阶段 3.1）。
- **迂回生产** —— 先造工具再生产，更费时但更多产；庞巴维克（阶段 3.2）。
- **哈耶克三角** —— 一张图：横轴生产时间，纵轴各阶段价值；利率决定它的形状（阶段 3.2）。
- **生产结构** —— 从原料到消费品的一系列阶段；储蓄拉长它，消费缩短它（阶段 3.3）。
- **异质资本** —— 资本品不是同质的“K”，而是各有专用性的拼图块；拉赫曼（阶段 3.4）。
- **自然利率** —— 由储蓄者与投资者的时间偏好决定的利率；市场利率被信贷压低于它就撒了谎（阶段 3.5）。
- **回归定理** —— 米塞斯：货币今天的购买力回溯自昨天，直到它还是普通商品的那一天（阶段 4.1）。
- **可销售性** —— 门格尔：货币是可销售性最高的商品演化出来的，不是发明出来的（阶段 4.1）。
- **货币非中性** —— 新钱不是均匀落下的雨，它改变相对价格与财富分配（阶段 4.2）。
- **坎蒂隆效应** —— 先拿到新钱的人以旧价格买东西，后拿到的人承受涨价（阶段 4.3）。
- **信用扩张** —— 部分准备金银行创造没有储蓄支撑的贷款，压低市场利率（阶段 4.4）。
- **法币** —— 靠法律而非商品支撑的货币；1971 年之后的世界（阶段 4.5）。
- **奥地利学派商业周期理论** —— 人为压低的利率诱发错误投资，繁荣必然以萧条清算收场（阶段 5.1）。
- **错误投资** —— 不是“投资太多”，而是投错了阶段：只在假利率下看起来划算的项目（阶段 5.2）。
- **强制储蓄** —— 信用扩张把资源从消费者手里转到投资者手里，而消费者并未选择少消费（阶段 5.2）。
- **清算** —— 萧条是错误投资被重新配置的过程，是治疗不是疾病（阶段 5.3）。
- **崩溃繁荣** —— 米塞斯：若信用扩张永不停止，公众对货币失去信心，终点是恶性通货膨胀（阶段 5.3）。
- **企业家精神** —— 柯兹纳的警觉（发现被忽视的机会）与米塞斯的判断（在不确定下押注）（阶段 6.1）。
- **发现程序** —— 哈耶克：竞争是发现谁能以什么成本做什么的程序，而不是一种状态（阶段 6.2）。
- **消费者主权** —— 利润与亏损把资源交给最能服务消费者的人；企业家是替消费者跑腿的船长（阶段 6.3）。
- **经济计算** —— 米塞斯 1920：没有生产资料的市场价格，就没法比较不同用途的成本（阶段 7.1）。
- **知识问题** —— 哈耶克 1945：决策所需的知识分散在无数人头脑里，且随时间地点变化（阶段 7.2）。
- **默会知识** —— 说不出来但用得上的知识（“这个客户快跑了”）；它无法被集中（阶段 7.2）。
- **自发秩序** —— 人的行动的结果，而非人的设计的结果：语言、货币、普通法、市场（阶段 7.4）。
- **干预主义** —— 米塞斯：每次干预制造新问题，召唤下一次干预；中间道路走不通（阶段 8.1）。
- **寻租** —— 用资源去争取政府赐予的特权，而不是去服务消费者；公共选择学派（阶段 8.4）。
- **先占原则** —— 对无主物的首先使用建立产权；洛克与罗斯巴德（阶段 9.1）。
- **自由银行** —— 无央行、可竞争发钞的银行制度；塞尔金与怀特 vs 百分百准备金派（阶段 9.4）。
- **网络效应** —— 你的估值取决于别人是否也在用；主观价值论的一个特例而非例外（阶段 15.1）。
- **反身性** —— 索罗斯：价格影响基本面，基本面又影响价格；与奥派的预期与不确定性相接（阶段 16.5）。

### ② 20 个人物：生卒年 + 一项贡献

<table style="width:100%;border-collapse:collapse;font-size:14px">
<tr style="background:var(--surface-2)"><th style="text-align:left;padding:7px 8px;border-bottom:1px solid var(--line)">人物</th><th style="text-align:left;padding:7px 8px;border-bottom:1px solid var(--line)">年份</th><th style="text-align:left;padding:7px 8px;border-bottom:1px solid var(--line)">一项贡献</th></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>理查德·坎蒂隆</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">约 1680–1734</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">《商业性质概论》：新钱从注入点扩散，改变相对价格——坎蒂隆效应</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>弗雷德里克·巴斯夏</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1801–1850</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">“看得见的与看不见的”“破窗”“蜡烛商请愿书”：经济学写作的典范</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>卡尔·门格尔</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1840–1921</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1871《国民经济学原理》：主观价值、商品级别、货币的演化起源；学派创始人</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>欧根·冯·庞巴维克</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1851–1914</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">《资本与利息》：时间偏好解释利息、迂回生产、边际对；对马克思的批判</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>弗里德里希·冯·维塞尔</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1851–1926</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">“机会成本”与“归属”两个术语的提出者</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>弗兰克·费特</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1863–1949</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">美国的奥派先驱：纯时间偏好利息理论、对地租理论的主观化</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>路德维希·冯·米塞斯</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1881–1973</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1912 货币理论与周期、1920 经济计算、1949《人的行动》：把学派建成体系</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>弗里德里希·哈耶克</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1899–1992</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">知识问题、自发秩序、发现程序、货币非国家化；1974 年诺贝尔奖</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>亨利·哈兹利特</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1894–1993</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1946《一课经济学》：把巴斯夏写成 20 世纪最畅销的经济学入门</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>伦纳德·里德</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1898–1983</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1946 创办 FEE；1958《铅笔的故事》：没有人会造一支铅笔</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>路德维希·拉赫曼</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1906–1990</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1956《资本及其结构》：异质资本；激进主观主义——预期与万花筒式的市场</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>布鲁诺·莱奥尼</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1913–1967</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1961《自由与法律》：法律像语言一样长出来，立法是对法律的干预</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>默里·罗斯巴德</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1926–1995</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1962《人、经济与国家》、1963《美国大萧条》：体系化、百分百准备金、无政府资本主义</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>伊斯雷尔·柯兹纳</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1930–</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1973《竞争与企业家精神》：警觉、均衡趋向、市场过程</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>罗杰·加里森</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1944–</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">2001《时间与货币》：用三张图把 ABCT 讲成资本宏观</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>汉斯-赫尔曼·霍普</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1949–</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">论证伦理学；2001《民主：失败的上帝》：时间偏好与政治制度</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>约瑟夫·萨勒诺</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1950–</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">“计算 vs 知识”之争中米塞斯一方的旗手；货币非中性的历史研究</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>赫苏斯·韦尔塔·德索托</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1956–</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1998《货币、银行信贷与经济周期》：部分准备金的法律史与周期理论的集大成</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>乔治·塞尔金</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1957–</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1988《自由银行理论》（与劳伦斯·怀特同为自由银行派）：货币均衡、历史证据</td></tr>
<tr><td style="padding:6px 8px;border-bottom:1px solid var(--line)"><b>彼得·贝奇克</b></td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">1960–</td><td style="padding:6px 8px;border-bottom:1px solid var(--line)">乔治梅森大学传统的领军人：比较制度分析、把奥派带回与主流的对话</td></tr>
</table>

不在表里但你该认得的名字：**萨伊**（萨伊定律）、**熊彼特**（创造性破坏，维也纳出身但不算奥派）、**哈伯勒、马赫卢普、摩根斯特恩**（米塞斯私人研讨班的第四代）、**劳伦斯·怀特**（自由银行）、**奥德里斯科尔与里佐**（《时间与无知的经济学》）、**布洛克**（《百辩经济学》）。

### ③ 25 个关键年份：一条时间线

<table style="width:100%;border-collapse:collapse;font-size:14px">
<tr style="background:var(--surface-2)"><th style="text-align:left;padding:7px 8px;border-bottom:1px solid var(--line);width:70px">年份</th><th style="text-align:left;padding:7px 8px;border-bottom:1px solid var(--line)">发生了什么</th></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1871</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">门格尔《国民经济学原理》；同年杰文斯、三年后瓦尔拉斯——边际革命</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1883</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">门格尔《社会科学方法探究》，与施穆勒的方法论之争开始；“奥地利学派”得名</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1889</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">庞巴维克《资本实证论》：时间偏好与迂回生产</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1912</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">米塞斯《货币与信用理论》：回归定理、周期理论的雏形</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1920</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">米塞斯《社会主义国家的经济计算》：计算争论开场</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1922</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">米塞斯《社会主义》全书；哈耶克读后转向</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1929</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">10 月华尔街崩盘；米塞斯《干预主义批判》同年出版</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1931</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">哈耶克《价格与生产》，到伦敦经济学院；与凯恩斯论战开始</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1936</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">凯恩斯《通论》；奥派在英语世界被边缘化的开端</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1944</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">哈耶克《通往奴役之路》；米塞斯《全能政府》与《官僚体制》</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1945</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">哈耶克《知识在社会中的运用》；二战结束，布雷顿森林体系运行</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1949</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">米塞斯《人的行动》英文版；奥派的完整体系问世</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1962</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">罗斯巴德《人、经济与国家》；同年弗里德曼《资本主义与自由》</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1963</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">罗斯巴德《美国大萧条》；弗里德曼与施瓦茨《美国货币史》——两种大萧条叙事同年问世</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1971</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">8 月 15 日尼克松关闭黄金窗口：纯法币时代开始</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1973</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">柯兹纳《竞争与企业家精神》；米塞斯逝世；布雷顿森林体系终结、石油危机</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1974</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">哈耶克获诺贝尔奖；南罗亚尔顿会议——奥派复兴之年</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1976</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">哈耶克《货币的非国家化》：让货币竞争</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1982</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">米塞斯研究院在阿拉巴马州奥本成立；罗斯巴德《自由的伦理》</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>1998</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">德索托《货币、银行信贷与经济周期》；长期资本管理公司倒闭</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>2001</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">加里森《时间与货币》；霍普《民主：失败的上帝》；互联网泡沫破裂后美联储连续降息</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>2008</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">雷曼倒闭，全球金融危机；量化宽松开始；奥派的“我早说过”与随后的教训</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>2009</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">1 月 3 日比特币创世区块，内嵌当日《泰晤士报》关于银行救助的标题</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>2020</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">疫情；史无前例的货币与财政扩张；零利率与资产价格狂潮</td></tr>
<tr><td style="padding:5px 8px;border-bottom:1px solid var(--line)"><b>2022</b></td><td style="padding:5px 8px;border-bottom:1px solid var(--line)">四十年来最高的通胀读数；美联储快速加息；加密市场与长久期资产重挫</td></tr>
</table>

### ④ 12 本书：按这个顺序读

顺序的原则：**先直觉，后体系；先短，后长；先价格，后货币，再周期**。每本给出一句“为什么排在这里”。

- **1. 哈兹利特《一课经济学》（1946）** —— 两小时读完，装上“看不见的”这副眼镜。
- **2. 巴斯夏《看得见的与看不见的》与《经济诡辩》（1845–1850）** —— 学写作，也学破窗、蜡烛商、负铁路。
- **3. 门格尔《国民经济学原理》（1871）** —— 学派的种子：主观价值、商品级别、货币起源；阶段 12.1 有导读。
- **4. 罗斯巴德《政府对我们的货币做了什么？》（1963）** —— 一百页讲清货币的起源与国家如何接管它。
- **5. 哈耶克《个人主义与经济秩序》（1948）** —— 收录 1937《经济学与知识》、1945《知识在社会中的运用》、1946《竞争的含义》。
- **6. 米塞斯《社会主义国家的经济计算》（1920）** —— 三十页的论文，计算争论的原点；配阶段 7.1。
- **7. 罗斯巴德《人、经济与国家》（1962）** —— 体系的教科书版：从行动公理一路推到垄断与干预；阶段 12.4。
- **8. 米塞斯《人的行动》（1949）** —— 体系的原版；阶段 12.2 给了 900 页的地图。
- **9. 米塞斯《货币与信用理论》（1912）** —— 回归定理与周期理论的源头；读过第 8 本再读它。
- **10. 柯兹纳《竞争与企业家精神》（1973）** —— 企业家、警觉、市场过程；阶段 6.1。
- **11. 加里森《时间与货币》（2001）** —— ABCT 的现代图示版；阶段 10.1。
- **12. 德索托《货币、银行信贷与经济周期》（1998）** —— 部分准备金的法律史加周期理论的集大成；阶段 4.4 与 5.x 的总复习。

读完 12 本之后：拉赫曼《资本及其结构》（1956）、哈耶克《法律、立法与自由》（1973–79）、罗斯巴德《美国大萧条》（1963）、霍普《民主：失败的上帝》（2001）、莱奥尼《自由与法律》（1961）。阶段 14.3 会告诉你这些书之间哪些地方在吵架。

### ⑤ 四条主线与一页地图

整门课只有四句话，所有 40 个概念都挂在它们上面：

- **价值是主观的** —— 边际效用、边际对、机会成本、归属、消费者主权、网络效应（阶段 1 与 15）。
- **人有目的地行动** —— 行动公理、先验、方法论个人主义、企业家的判断、对总量与模型的怀疑（阶段 2、6、10.2、11）。
- **价格传递知识** —— 经济计算、知识问题、发现程序、自发秩序、对大数据与 AI 计划的回答（阶段 7、15.4、18.1）。
- **时间与不确定性无法消去** —— 时间偏好、生产结构、自然利率、信用扩张、错误投资、周期（阶段 3、4、5、10、17.5、18.5）。

<figure><svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">奥地利学派一页地图：四条主线 → 核心命题 → 应用</text><rect x="16" y="40" width="148" height="58" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="90" y="62" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--orange-ink)">① 价值是主观的</text><text x="90" y="78" text-anchor="middle" font-size="9.5" fill="var(--muted)">门格尔 1871 · 庞巴维克</text><text x="90" y="91" text-anchor="middle" font-size="9.5" fill="var(--muted)">边际效用 · 边际对 · 归属</text><rect x="172" y="40" width="148" height="58" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="246" y="62" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--orange-ink)">② 人有目的地行动</text><text x="246" y="78" text-anchor="middle" font-size="9.5" fill="var(--muted)">米塞斯 1949</text><text x="246" y="91" text-anchor="middle" font-size="9.5" fill="var(--muted)">行动公理 · 先验 · 个人主义</text><rect x="328" y="40" width="148" height="58" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="402" y="62" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--orange-ink)">③ 价格传递知识</text><text x="402" y="78" text-anchor="middle" font-size="9.5" fill="var(--muted)">米塞斯 1920 · 哈耶克 1945</text><text x="402" y="91" text-anchor="middle" font-size="9.5" fill="var(--muted)">经济计算 · 知识问题 · 自发秩序</text><rect x="484" y="40" width="140" height="58" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="554" y="62" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--orange-ink)">④ 时间与不确定性</text><text x="554" y="78" text-anchor="middle" font-size="9.5" fill="var(--muted)">庞巴维克 · 米塞斯 1912</text><text x="554" y="91" text-anchor="middle" font-size="9.5" fill="var(--muted)">时间偏好 · 资本结构 · 利率</text><path d="M90 98 L90 130 M246 98 L246 130 M402 98 L402 130 M554 98 L554 130" stroke="var(--orange)" stroke-width="1.5"/><rect x="16" y="130" width="148" height="50" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="90" y="150" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink)">价格形成 · 利润与亏损</text><text x="90" y="166" text-anchor="middle" font-size="9.5" fill="var(--muted)">阶段 1 · 6.3</text><rect x="172" y="130" width="148" height="50" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="246" y="150" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink)">企业家 · 市场过程</text><text x="246" y="166" text-anchor="middle" font-size="9.5" fill="var(--muted)">阶段 2 · 6</text><rect x="328" y="130" width="148" height="50" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="402" y="150" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink)">计算争论 · 干预主义</text><text x="402" y="166" text-anchor="middle" font-size="9.5" fill="var(--muted)">阶段 7 · 8 · 9</text><rect x="484" y="130" width="140" height="50" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="554" y="150" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--ink)">货币 · 信用 · 周期</text><text x="554" y="166" text-anchor="middle" font-size="9.5" fill="var(--muted)">阶段 3 · 4 · 5 · 10</text><path d="M90 180 L90 212 M246 180 L246 212 M402 180 L402 212 M554 180 L554 212" stroke="var(--line)" stroke-width="1.5"/><rect x="16" y="212" width="608" height="44" rx="8" fill="var(--blue-soft)" stroke="var(--blue)"/><text x="320" y="230" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">新经济：网络效应 · 注意力 · 比特币与货币竞争 · AI 作为资本品 · 算法定价</text><text x="320" y="246" text-anchor="middle" font-size="9.5" fill="var(--muted)">阶段 15 · 16 · 17 · 18 —— 同样的四条主线，新的对象</text><rect x="16" y="270" width="296" height="44" rx="8" fill="var(--green-soft)" stroke="var(--green)"/><text x="164" y="288" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">工具箱：五步法 · 写作 · 自我批评</text><text x="164" y="304" text-anchor="middle" font-size="9.5" fill="var(--muted)">阶段 13 · 14</text><rect x="328" y="270" width="296" height="44" rx="8" fill="var(--red-soft)" stroke="var(--red)"/><text x="476" y="288" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">内部分歧：方法 · 银行 · 伦理 · 国家</text><text x="476" y="304" text-anchor="middle" font-size="9.5" fill="var(--muted)">阶段 14.3 —— 有分歧，不是有定论</text></svg><figcaption>一页地图：四条主线（上）各自长出一组核心命题（中），一起延伸到新经济（下），旁边是工具箱与学派内部仍在争论的问题。</figcaption></figure>

最后一个提醒：这张表把学派压成了一页，代价是**把争论压没了**。表里说“回归定理”，阶段 17.1 会告诉你它对比特币是否成立仍有争议；表里说“自由银行”，阶段 9.4 与 14.3 会告诉你学派在这上面分裂成两半；表里说“清算是治疗”，阶段 11.2 会告诉你哈耶克晚年承认 1930–33 年的二次通缩不该放任。速查表是索引，不是判决书。
`,

  demo: "cheat-sheet",

  analogy: `
把这门课想成你走过的一座**城市**。前面十四个阶段，你是步行穿过它的：在阶段 1 的市场广场学会看价格，在阶段 3 的工厂区看见迂回生产的流水线，在阶段 4 的银行街看见新钱从哪一扇门流出，在阶段 7 的图书馆里看见哈耶克讲知识为什么装不进一本书，在阶段 15–18 的新城区看见同样的街道规则怎么适用于平台、比特币和算力中心。

这一节是这座城市的**地铁图**。

地铁图不画建筑的样子，只画站名、线路和换乘点。四条主线就是四条地铁线：**黄线**（价值是主观的）从门格尔站出发，**红线**（人有目的地行动）从米塞斯站出发，**蓝线**（价格传递知识）在哈耶克站与红线交汇，**绿线**（时间与不确定性）从庞巴维克站一路开到 2008 站和 2022 站。40 个概念是站名，20 个人是修线路的人，25 个年份是通车日期，12 本书是你该按顺序坐的车次。

你不会拿着地铁图去欣赏城市——它太简陋了。但当你在某个陌生的街角迷路（“回归定理到底是在说什么？”“清算和通缩是一回事吗？”），你会掏出它，找到最近的站，坐回去看一眼。而且，当你要给别人介绍这座城市（阶段 14.2）或者自己规划一条新的线路（阶段 ∞.3），你会先在地铁图上把换乘点标好。

地铁图的最后一个用处：它让你看见**哪些站还没修好**。图上有些线路是虚线——自由银行还是百分百准备金、均衡趋向还是万花筒、比特币是不是货币——那是阶段 14.3 与阶段 ∞.1 的工地。一张诚实的地图会把工地也画上。
`,

  misconceptions: [
    "**“把这 40 个概念背下来，就算学会了奥派。”** —— 速查表是索引，不是理解。奥派的概念是链式的：主观价值推出边际效用，边际效用推出价格，价格推出经济计算……背下 40 个词而不能从上一个推出下一个，等于记住了 40 个站名却不知道线路怎么连。看到定义仍说不出“为什么”的词，就是该回去复习的课。",
    "**“表里列的都是奥派的定论。”** —— 表里至少有四处仍在争论：回归定理对比特币是否成立（阶段 17.1）、自由银行还是百分百准备金（阶段 9.4）、市场是否趋向均衡（拉赫曼）、垄断价格是否存在于自由市场（米塞斯 vs 罗斯巴德）。阶段 14.3 专门讲这些分歧；速查表为了压缩把争论压没了，读者要自己补回来。",
    "**“12 本书要按顺序读完才能开始用奥派。”** —— 顺序是推荐，不是门槛。前两本（哈兹利特与巴斯夏）加上本课的阶段 1–8，已经足够让你用五步法分析一项政策。原著的作用是把你的理解从“能用”提高到“能辩护、能修正”。",
    "**“熊彼特是奥派，他讲创造性破坏。”** —— 熊彼特在维也纳受教于庞巴维克，但他的方法（瓦尔拉斯式均衡出发、企业家作为均衡的破坏者）与奥派主流相距甚远，他自己也不认同奥派。课程借用“创造性破坏”一词（阶段 15.5），但要知道它的来源不在表内。",
    "**“1974 年哈耶克得诺贝尔奖，说明奥派回到了主流。”** —— 那一年是复兴的起点，不是终点。哈耶克与冈纳·缪尔达尔分享奖项，获奖理由是货币与周期理论和对制度的分析；之后奥派仍长期处于主流经济学系的边缘（阶段 0.3 与 14.5）。年份表记录的是转折，不是胜利。",
  ],

  quiz: [
    {
      q: "下面哪一组年份与事件对应正确？",
      options: [
        "1912 米塞斯《人的行动》；1949 米塞斯《货币与信用理论》",
        "1871 门格尔《国民经济学原理》；1920 米塞斯《社会主义国家的经济计算》；1974 哈耶克获诺贝尔奖",
        "1936 哈耶克《通往奴役之路》；1944 凯恩斯《通论》",
        "1962 罗斯巴德《美国大萧条》；1963 柯兹纳《竞争与企业家精神》",
      ],
      answer: 1,
      explain: "1871 边际革命、1920 计算争论开场、1974 诺贝尔奖与复兴——三个转折点。其余选项把年份互换了：《人的行动》是 1949，《货币与信用理论》是 1912；《通论》1936、《通往奴役之路》1944；《美国大萧条》1963、柯兹纳 1973。",
    },
    {
      q: "“新钱先到谁手上，谁就能以旧价格买东西”——这个概念叫什么，最早由谁提出？",
      options: [
        "回归定理，米塞斯",
        "强制储蓄，哈耶克",
        "坎蒂隆效应，理查德·坎蒂隆",
        "货币均衡，塞尔金",
      ],
      answer: 2,
      explain: "坎蒂隆（约 1680–1734）在《商业性质概论》里描述了新钱从注入点扩散、改变相对价格的过程，阶段 4.3 详述；回归定理讲的是货币购买力的历史连续性。",
    },
    {
      q: "按本课推荐的阅读顺序，为什么《一课经济学》排在《人的行动》之前？",
      options: [
        "因为哈兹利特比米塞斯更重要",
        "因为顺序原则是先直觉后体系、先短后长：两小时装上“看不见的”眼镜，再去啃 900 页的体系",
        "因为《人的行动》已经绝版",
        "因为《一课经济学》包含了《人的行动》的全部内容",
      ],
      answer: 1,
      explain: "阅读顺序的原则是**先直觉后体系、先短后长、先价格后货币再周期**。哈兹利特是入口，米塞斯是体系；阶段 12.2 给了读《人的行动》的地图。",
    },
    {
      q: "四条主线里，“经济计算”“知识问题”“自发秩序”挂在哪一条上？",
      options: [
        "价值是主观的",
        "人有目的地行动",
        "价格传递知识",
        "时间与不确定性无法消去",
      ],
      answer: 2,
      explain: "第三条主线：价格把分散的知识压缩成数字，没有价格就没有计算；米塞斯 1920 与哈耶克 1945 是它的两块基石，阶段 7 整个阶段展开它。",
    },
    {
      q: "速查表里哪一项在学派内部仍有实质争论，而不是定论？",
      options: [
        "边际效用递减是从行动逻辑推出的",
        "自由银行 vs 百分百准备金",
        "价值是主观的",
        "只有个人会行动",
      ],
      answer: 1,
      explain: "自由银行（塞尔金、怀特）与百分百准备金（罗斯巴德、霍普、德索托）是学派内部最持久的分歧之一，阶段 9.4 与 14.3 详述；其余三项是全学派共享的地基。",
    },
  ],

  further: [
    { label: "Mises Institute：Austrian Economics — An Introduction（学派概览与人物）", url: "https://mises.org/austrian-economics" },
    { label: "Econlib 百科：Austrian School of Economics（Peter Boettke）", url: "https://www.econlib.org/library/Enc/AustrianSchoolofEconomics.html" },
    { label: "Mises Institute 图书馆：本课 12 本书中多数可免费在线阅读", url: "https://mises.org/library" },
    { label: "Econlib：Bastiat 全集（“看得见的与看不见的”“经济诡辩”）", url: "https://www.econlib.org/library/Bastiat/basEss.html" },
    { label: "Hayek 1974 年诺贝尔演讲 “The Pretence of Knowledge”", url: "https://www.nobelprize.org/prizes/economic-sciences/1974/hayek/lecture/" },
  ],
};
