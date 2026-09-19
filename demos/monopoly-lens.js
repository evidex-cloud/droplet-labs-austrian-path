// 交互演示：垄断透镜——10 张案例卡。对每张卡，读者判断它的地位来自“国家授予 / 市场赢得 / 混合”，
// 并预测“没有国家帮助它还能持续吗”。提交后给出奥派的解读与理由，计分并总结。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const SRC = { state: T("国家授予", "State-granted"), market: T("市场赢得", "Market-earned"), mixed: T("混合", "Mixed") };
  const PER = { no: T("不会——门一开就被替代", "No — replaced once the door opens"), best: T("只在它持续做得最好时", "Only while it keeps serving best"), yes: T("会——即使无人保护", "Yes — even with nobody protecting it") };

  const cards = [
    { t: T("一款专利药：20 年内只有原研厂可以生产", "A patented drug: for 20 years only the originator may produce it"),
      d: T("同类仿制药厂有能力以十分之一的价格生产，但法律禁止。", "Generic makers could produce it at a tenth of the price, but the law forbids them."),
      src: "state", per: "no",
      why: T("这是教科书意义上最纯粹的垄断：进入被法律禁止，限产抬价可行。专利到期当天仿制药进入、价格常跌去八九成——说明支撑它的是法律而非产品。奥派内部对专利是否该存在有争议（罗斯巴德、金塞拉主张废除），但都同意它属于“国家授予的排他权”。", "The purest textbook monopoly: entry is forbidden by law, so restricting output to raise price works. On the day the patent expires generics enter and the price often falls 80–90% — proof that the law, not the product, was holding it up. Austrians disagree about whether patents should exist at all (Rothbard and Kinsella say abolish), but all agree they are a state-granted exclusive right.") },
    { t: T("纽约出租车牌照：车辆数量由市政府限定", "A New York taxi medallion: the city caps the number of cabs"),
      d: T("2013 年前后一张牌照曾交易到约 100 万美元；网约车出现后暴跌。", "A medallion traded for roughly $1 million around 2013; the price collapsed after ride-hailing appeared."),
      src: "state", per: "no",
      why: T("牌照的价格就是“被禁止的竞争”的市价：它值 100 万，是因为法律挡住了本来会进来的司机。网约车绕开牌照制度后，牌照价格跌去大半——市场一旦找到进入的缝隙，国家授予的地位立刻贬值。", "The medallion's price is the market value of forbidden competition: it was worth a million dollars because the law kept out the drivers who would otherwise have entered. Once ride-hailing bypassed the medallion system, the price lost most of its value — the moment the market finds a crack in the door, a state-granted position collapses.") },
    { t: T("标准石油，1880 年代：精炼煤油市场份额约 90%", "Standard Oil in the 1880s: roughly 90% of refined kerosene"),
      d: T("没有任何法律禁止别人炼油；煤油价格在这一时期持续大幅下跌。", "No law stopped anyone from refining oil; kerosene prices fell steeply throughout the period."),
      src: "market", per: "best",
      why: T("阿门塔诺认为：份额来自更低的成本与更低的价格，而不是限产抬价；到 1911 年被拆分时份额已降到约 65%，一百多家对手正在进入。它的地位只在它持续最便宜时才存在——这正是“企业家地位”而非垄断。此解读有争议，但“进入自由”这一点没有争议。", "Armentano argued the share came from lower costs and lower prices, not from restricting output; by the 1911 breakup the share had already fallen to about 65% with over a hundred rivals entering. Its position existed only while it stayed cheapest — an entrepreneurial position, not a monopoly. The reading is contested; the fact that entry was free is not.") },
    { t: T("谷歌搜索：全球份额约 90%", "Google Search: about 90% of global queries"),
      d: T("没有法律禁止做搜索引擎；用户每一次搜索都可以零成本换到别家。", "No law prevents building a search engine; every user can switch at zero cost on any query."),
      src: "market", per: "best",
      why: T("进入自由，切换成本接近零，所以它的地位每天都在被每一次搜索重新检验。网络效应与数据积累确实抬高了新进入者的门槛——这是奥派必须认真面对的问题（阶段 15.2、15.4）——但门槛高不等于门被锁上：AI 聊天工具正在成为它十几年来第一个真正的替代品。", "Entry is free and switching costs are near zero, so its position is re-tested by every search, every day. Network effects and accumulated data do raise the bar for entrants — a question Austrians must take seriously (Stages 15.2, 15.4) — but a high bar is not a locked door: AI chat tools are becoming its first real substitute in over a decade.") },
    { t: T("本地水电公司：市政府授予的独家特许经营权", "A local water/electric utility with an exclusive municipal franchise"),
      d: T("铺第二套管网成本极高（“自然垄断”论），同时法律禁止第二家进入。", "Laying a second network is very costly (the “natural monopoly” argument), and the law also forbids a second entrant."),
      src: "mixed", per: "best",
      why: T("两种壁垒叠在一起：成本壁垒是真实的，但特许状把“很贵”变成了“不许”。历史上（20 世纪初的美国城市）曾有多家电力公司并行竞争，价格更低；今天的分布式发电与储能正在侵蚀“自然垄断”的技术前提。没有特许状，它只能靠持续做得最便宜来保住地位。", "Two barriers stacked: the cost barrier is real, but the franchise turns “expensive” into “forbidden.” Historically (early-1900s American cities) several electric companies competed side by side at lower prices; today distributed generation and storage are eroding the technical premise of “natural monopoly.” Without the franchise, it keeps its position only by staying cheapest.") },
    { t: T("一个比特币矿池：掌握全网约 30% 的算力", "A Bitcoin mining pool with about 30% of network hashpower"),
      d: T("矿工可以随时把算力切到别的矿池；没有任何法律或合约锁定他们。", "Miners can redirect their hashpower to another pool at any moment; nothing legal or contractual locks them in."),
      src: "market", per: "best",
      why: T("这是“可竞争市场”的极端形式：份额每十分钟都在被重新计算，矿工切换只要改一行配置。历史上算力一度接近 50% 的矿池（如 2014 年的 GHash）在社区压力下自行分流——不是靠监管，而是靠矿工用脚投票。它的 30% 只在它手续费最低、支付最准时时存在。", "The extreme case of a contestable market: the share is recomputed every ten minutes, and switching takes one line of config. A pool that once approached 50% (GHash in 2014) shed hashpower under community pressure — not through regulation, but through miners voting with their feet. Its 30% exists only while its fees are lowest and its payouts most reliable.") },
    { t: T("戴比尔斯：20 世纪大部分时间控制全球钻石原石流通的大半", "De Beers: for most of the 20th century controlled most of the world's rough-diamond flow"),
      d: T("私人卡特尔，但依赖南非等国的采矿特许与殖民时期的法律安排。", "A private cartel, but one resting on mining concessions and colonial-era legal arrangements in South Africa and elsewhere."),
      src: "mixed", per: "no",
      why: T("最接近米塞斯“控制全部供给 + 需求缺乏弹性”的垄断价格案例——但它的供给控制一半靠国家特许（矿权），一半靠私人卡特尔。当俄罗斯、加拿大、澳大利亚的矿脱离卡特尔、人造钻石进入后，它的份额从约 80–90% 跌到 30% 左右。说明即便是资源垄断，也挡不住替代品与新供给。", "The closest real case to Mises's monopoly price (control of total supply plus inelastic demand) — but that control rested half on state concessions (mining rights) and half on a private cartel. When Russian, Canadian and Australian mines left the cartel and lab-grown diamonds entered, its share fell from roughly 80–90% to around 30%. Even a resource monopoly cannot hold back substitutes and new supply.") },
    { t: T("美国邮政的信件专营权：法律禁止私人递送普通信件", "The U.S. Postal Service's letter monopoly: private carriers may not deliver ordinary letters"),
      d: T("包裹市场早已开放（UPS、FedEx 竞争激烈），信件市场则由法律保留。", "The parcel market has long been open (UPS and FedEx compete fiercely); the letter market is reserved by statute."),
      src: "state", per: "no",
      why: T("同一家机构在两个市场里：包裹市场它只是众多竞争者之一，信件市场它是法定垄断者。这个对照本身就是实验——同样的组织，一旦门打开，地位立刻变成“众多之一”。19 世纪美国曾有私人邮递公司（如 Lysander Spooner 的公司）以更低价格递信，被法律取缔。", "One institution in two markets: in parcels it is merely one competitor among many; in letters it is a statutory monopolist. The contrast is itself the experiment — same organization, and the moment the door opens its position becomes “one of many.” In the 19th century private mail companies (Lysander Spooner's among them) delivered letters more cheaply and were shut down by law.") },
    { t: T("微信：中国几乎人人在用的社交与支付平台", "WeChat: the social and payments platform nearly everyone in China uses"),
      d: T("网络效应极强；同时，主要的外国竞争者被法律屏蔽在市场之外。", "Very strong network effects; at the same time, its main foreign competitors are legally blocked from the market."),
      src: "mixed", per: "best",
      why: T("这是当代最典型的“混合”：网络效应是市场赢得的（人们因为朋友在用而用），但对 WhatsApp、Facebook 等的屏蔽是国家授予的保护。用奥派的尺子看，要问的是：如果屏蔽解除，它还是最好的吗？很可能仍然是——但这个“可能”只有在门打开后才能被检验。", "The most typical contemporary “mixed” case: the network effect is market-earned (people use it because their friends do), but the blocking of WhatsApp, Facebook and others is state-granted protection. By the Austrian test the question is: if the block were lifted, would it still be the best? Quite possibly — but that “possibly” can only be tested once the door is open.") },
    { t: T("理发师执照：无证上岗违法，考证需上千小时培训", "A barber's license: cutting hair without one is illegal; certification takes over a thousand hours of training"),
      d: T("持证者的收入高于无证时；培训学校与行业协会强烈支持维持制度。", "License holders earn more than they would without it; training schools and the trade association strongly support keeping the system."),
      src: "state", per: "no",
      why: T("小规模的国家授予垄断，覆盖了成千上万个行业（美国约四分之一的劳动者需要执照）。它的经济学和出租车牌照一样：限制进入 → 抬高价格 → 在位者受益 → 在位者游说维持。没有执照制度，理发店的数量与价格会由消费者决定。这是阶段 8.3 的主题。", "A small-scale state-granted monopoly, replicated across thousands of occupations (roughly a quarter of American workers need a license). Its economics are the taxi medallion's: restrict entry → raise prices → incumbents benefit → incumbents lobby to keep it. Without licensing, the number and prices of barbershops would be set by consumers. This is the subject of Stage 8.3.") },
  ];

  let i = 0, picks = { src: null, per: null }, score = { src: 0, per: 0 }, done = [];

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔍 垄断透镜：这 10 家的地位是谁给的？", "🔍 The monopoly lens: who granted these ten their position?")}</div>
      <div class="demo-block" id="ml-card"></div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("进度", "Progress")}</div><div class="v" id="ml-prog">0 / 10</div></div>
        <div class="stat"><div class="k">${T("来源判断正确", "Source correct")}</div><div class="v pos" id="ml-s1">0</div></div>
        <div class="stat"><div class="k">${T("持续性预测正确", "Persistence correct")}</div><div class="v acc" id="ml-s2">0</div></div>
      </div>
      <div class="demo-block" id="ml-summary" hidden></div>
      <p class="demo-tip">${T(
        "每张卡只问两个问题：<strong>门是谁关的？</strong>（法律，还是别人“还没有”做得更好）以及 <strong>没有法律护着它还能撑多久？</strong> 你会发现规律：国家授予的地位一旦失去保护就迅速崩塌（牌照、专利、邮政），市场赢得的地位只在它持续做得最好时存在（标准石油、谷歌、矿池），而当代最难判断的都是“混合”——网络效应加上一点法律保护。",
        "Each card asks only two questions: <strong>who closed the door?</strong> (the law, or simply nobody else doing it better yet) and <strong>how long would it last with no law protecting it?</strong> A pattern emerges: state-granted positions collapse quickly once protection goes (medallions, patents, postal monopolies); market-earned positions exist only while the firm keeps serving best (Standard Oil, Google, mining pools); and the hardest contemporary cases are “mixed” — network effects plus a little legal protection."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const seg = (name, opts, cur) => `<div class="demo-seg" data-q="${name}">${Object.entries(opts).map(([k, v]) => `<button data-v="${k}" class="${cur === k ? "on" : ""}">${v}</button>`).join("")}</div>`;

  const paintCard = () => {
    $("ml-prog").textContent = `${done.length} / ${cards.length}`;
    $("ml-s1").textContent = score.src; $("ml-s2").textContent = score.per;
    if (i >= cards.length) { showSummary(); return; }
    const c = cards[i];
    $("ml-card").innerHTML = `<div class="scn">
      <div class="scn-q"><b>${T("案例", "Case")} ${i + 1}：</b>${c.t}</div>
      <div class="scn-meta">${c.d}</div>
      <div class="demo-block"><div class="demo-label">${T("① 它的地位来自哪里？", "① Where does its position come from?")}</div>${seg("src", SRC, picks.src)}</div>
      <div class="demo-block"><div class="demo-label">${T("② 没有国家帮助，它还能持续吗？", "② Would it persist without state help?")}</div>${seg("per", PER, picks.per)}</div>
      <div class="demo-btns"><button class="demo-btn" id="ml-submit" ${picks.src && picks.per ? "" : "disabled"}>${T("提交判断", "Submit")}</button></div>
      <div id="ml-verdict"></div>
    </div>`;
    root.querySelectorAll("[data-q] button").forEach((b) => b.addEventListener("click", () => {
      picks[b.closest("[data-q]").dataset.q] = b.dataset.v; paintCard();
    }));
    $("ml-submit").addEventListener("click", submit);
  };

  const submit = () => {
    const c = cards[i];
    const okS = picks.src === c.src, okP = picks.per === c.per;
    if (okS) score.src++; if (okP) score.per++;
    done.push({ c, okS, okP });
    $("ml-s1").textContent = score.src; $("ml-s2").textContent = score.per; $("ml-prog").textContent = `${done.length} / ${cards.length}`;
    root.querySelectorAll("[data-q] button").forEach((b) => (b.disabled = true));
    $("ml-submit").hidden = true;
    $("ml-verdict").innerHTML = `<div class="demo-log">
      <div class="${okS ? "ok" : "bad"}">${T("来源：", "Source: ")}<b>${SRC[c.src]}</b>${okS ? T("（你答对了）", " (you got it)") : T("（你选的是 " + SRC[picks.src] + "）", " (you chose " + SRC[picks.src] + ")")}</div>
      <div class="${okP ? "ok" : "bad"}">${T("持续性：", "Persistence: ")}<b>${PER[c.per]}</b>${okP ? T("（你答对了）", " (you got it)") : T("（你选的是 " + PER[picks.per] + "）", " (you chose " + PER[picks.per] + ")")}</div>
      <div>${c.why}</div>
    </div>
    <div class="demo-btns"><button class="demo-btn" id="ml-next">${i + 1 < cards.length ? T("下一张 →", "Next card →") : T("看总结", "See summary")}</button></div>`;
    $("ml-next").addEventListener("click", () => { i++; picks = { src: null, per: null }; paintCard(); });
  };

  const showSummary = () => {
    $("ml-card").innerHTML = "";
    const s = $("ml-summary"); s.hidden = false;
    const groups = { state: [], market: [], mixed: [] };
    for (const d of done) groups[d.c.src].push(d);
    s.innerHTML = `<div class="cmp-3">
      ${["state", "market", "mixed"].map((k) => `<div class="cmp-cell ${k === "state" ? "cold" : k === "market" ? "hl" : ""}"><h5>${SRC[k]} · ${groups[k].length}</h5>${groups[k].map((d) => `<div style="font-size:13px;margin:4px 0"><span class="pill ${d.okS ? "ok" : "bad"}">${d.okS ? "✓" : "✗"}</span> ${d.c.t}</div>`).join("")}</div>`).join("")}
    </div>
    <div class="demo-log" style="margin-top:12px">
      <div class="ok">${T("你的成绩：来源 " + score.src + "/10，持续性 " + score.per + "/10。", "Your score: source " + score.src + "/10, persistence " + score.per + "/10.")}</div>
      <div>${T("透镜的规律：<b>国家授予</b>的地位不需要服务任何人，失去保护即崩塌；<b>市场赢得</b>的地位每天都在被消费者重新投票，只在它持续做得最好时存在；<b>混合</b>案例需要把两种壁垒拆开看——先问“如果法律那部分消失，它还剩什么”。这就是阶段 6.4 的核心测试，也是阶段 15.2 评估平台时要用的尺子。", "The lens's rule: a <b>state-granted</b> position serves nobody and collapses once protection goes; a <b>market-earned</b> position is re-voted by consumers daily and exists only while the firm keeps serving best; <b>mixed</b> cases must be pulled apart — ask first “if the legal part vanished, what would remain?” That is the core test of Stage 6.4, and the ruler for judging platforms in Stage 15.2.")}</div>
    </div>
    <div class="demo-btns"><button class="demo-btn" id="ml-again">${T("再来一遍", "Play again")}</button></div>`;
    $("ml-again").addEventListener("click", () => { i = 0; picks = { src: null, per: null }; score = { src: 0, per: 0 }; done = []; s.hidden = true; paintCard(); });
  };

  paintCard();
}
