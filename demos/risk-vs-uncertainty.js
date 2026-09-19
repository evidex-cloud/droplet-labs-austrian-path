// 交互演示：风险 vs 不确定性——12 个决策，把它们分到“可计算的风险（工具能做）”与“判断（所有者必须决定）”两边；
// 第二个面板：把判断“委托”给工具/经理/代理人，看损失的箭头最终指向谁。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // r = 风险（可计算）, j = 判断（不确定性）
  const TASKS = [
    { t: T("给一份标准车险合同定价（一千万份历史保单）", "Price a standard auto policy (ten million policies of history)"), k: "r", why: T("有分布：事故率可估到小数点后三位。大数定律让它可保险，报酬被竞争算进成本。", "There is a distribution: accident rates estimated to three decimals. Law of large numbers makes it insurable; the return is competed into cost.") },
    { t: T("在给定价格下预测明天某门店的牛奶销量", "Forecast tomorrow's milk sales at one store, at given prices"), k: "r", why: T("价格给定、历史充分——这是阶段 18.1 说的“价格体系之内的计划”。模型比人准。", "Prices given, ample history — the “planning inside the price system” of Stage 18.1. The model beats a person.") },
    { t: T("决定开一条从没人做过的产品线", "Decide to launch a product line nobody has ever made"), k: "j", why: T("没有历史可取样，“成功率”没有定义。只能判断并用自己的资源承担——利润只在这里产生。", "No history to sample; “success rate” is undefined. Only judgment and bearing with one's own resources — profit arises only here.") },
    { t: T("进入一个没人定过价的市场", "Enter a market nobody has priced"), k: "j", why: T("没有价格就没有可计算的东西。这是奈特的不确定性，也是米塞斯的企业家功能。", "No price, nothing to compute. Knight's uncertainty; Mises's entrepreneurial function.") },
    { t: T("审批一笔小额消费贷款", "Approve a small consumer loan"), k: "r", why: T("违约率有几十年的分布。模型在这里早已取代人工。", "Default rates have decades of distribution. Models replaced people here long ago.") },
    { t: T("在一万份专利里找出可以组合的技术", "Find combinable technologies in ten thousand patents"), k: "r", why: T("这是柯兹纳式的警觉——发现已存在但未被注意的组合。模式识别的主场，AI 能放大它。", "Kirznerian alertness — discovering an existing but unnoticed combination. Pattern recognition's home ground; AI amplifies it.") },
    { t: T("给一家刚成立两年的自动驾驶车队定保费", "Set an insurance premium for a two-year-old driverless-taxi fleet"), k: "j", why: T("历史太短、技术与法律每年在变——没有稳定的分布。900 还是 9000？押错了公司赔。", "History too short, technology and law changing yearly — no stable distribution. $900 or $9,000? Get it wrong and the company pays.") },
    { t: T("为广告位实时出价", "Bid in real time for an ad slot"), k: "r", why: T("每天几十亿次相似的拍卖，转化率有分布。纯计算。", "Billions of similar auctions a day; conversion rates have a distribution. Pure computation.") },
    { t: T("决定公司五年后要成为什么", "Decide what the company is to become in five years"), k: "j", why: T("这是设定框架本身——经理在框架内优化，企业家决定框架。没有分布可学。", "This sets the framework itself — managers optimize within it, entrepreneurs decide it. No distribution to learn.") },
    { t: T("比对三百个城市的价格找套利空间", "Compare prices across 300 cities to find arbitrage"), k: "r", why: T("价差“本来就在那里”，只是没人注意。警觉的模式识别部分，AI 擅长。", "The gap was “already there,” just unnoticed. The pattern-recognition part of alertness; AI is good at it.") },
    { t: T("辞职去做一件市场上没有先例的事", "Quit your job to do something with no market precedent"), k: "j", why: T("用自己的时间与资源下注，结果无法计算。判断的三要素——目的、所有权、承担——全在。", "Staking your own time and resources on an incomputable outcome. All three elements of judgment — ends, ownership, bearing.") },
    { t: T("按历史需求为仓库补货", "Restock a warehouse from historical demand"), k: "r", why: T("在给定价格下的库存优化。沃尔玛式的内部计划——工具做得更好。", "Inventory optimization at given prices. Walmart-style internal planning — the tool does it better.") },
  ];

  const answered = new Array(TASKS.length).fill(null);
  let who = "ai", stake = 200, outcome = "fail";

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔪 奈特的刀：这 12 个决定，哪些是工具能算的风险，哪些是所有者必须做的判断？", "🔪 Knight's knife: which of these 12 decisions are risk a tool can compute, and which are judgment an owner must make?")}</div>
      <div class="demo-block">
        <div class="stat-row">
          <div class="stat"><div class="k">${T("已分类", "Sorted")}</div><div class="v" id="rvu-n">0/12</div></div>
          <div class="stat"><div class="k">${T("正确", "Correct")}</div><div class="v pos" id="rvu-ok">0</div></div>
          <div class="stat"><div class="k">${T("需要重想", "Rethink")}</div><div class="v neg" id="rvu-bad">0</div></div>
        </div>
        <div id="rvu-list"></div>
        <div class="demo-btns"><button class="demo-btn" id="rvu-reset">${T("重来", "Start over")}</button></div>
      </div>
      <div class="demo-block">
        <div class="demo-label">${T("🎲 第二面板：把判断“委托”出去，损失落在谁头上？", "🎲 Panel two: “delegate” the judgment — where does the loss land?")}</div>
        <div class="demo-row" style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
          <div class="demo-seg" id="rvu-who">
            <button data-w="owner">${T("所有者自己决定", "Owner decides")}</button>
            <button data-w="mgr">${T("交给雇来的经理", "Hired manager")}</button>
            <button data-w="ai" class="on">${T("交给 AI 代理人", "AI agent")}</button>
          </div>
          <div class="demo-seg" id="rvu-out">
            <button data-o="win">${T("结果：成功 +50%", "Outcome: success +50%")}</button>
            <button data-o="fail" class="on">${T("结果：失败 −100%", "Outcome: failure −100%")}</button>
          </div>
        </div>
        <label class="demo-label" style="margin-top:10px">${T("押上的资源（百万美元）", "Resources staked ($ millions)")}：<b id="rvu-stake">${stake}</b></label>
        <input class="demo-slider" id="rvu-stake-sl" type="range" min="10" max="1000" step="10" value="${stake}" />
        <div class="cmp-3" id="rvu-cmp"></div>
        <div class="demo-log" id="rvu-log"></div>
      </div>
      <p class="demo-tip">${T(
        "分类的标准只有一条：<strong>这件事有没有可学的历史分布？</strong> 有，就是风险，工具能做且做得更好；没有，就是判断，只能由拥有资源、有自己目的的人下注。第二面板里无论你把决定“交给”谁，亏损那一格永远在所有者名下——经理最多丢工作，AI 代理人什么都不会失去。承担损失的人，才是行动者。",
        "There is only one sorting rule: <strong>is there a learnable historical distribution?</strong> If yes, it is risk — a tool can do it, and better. If no, it is judgment — only someone who owns resources and has their own ends can place the bet. In panel two, whoever you “hand” the decision to, the loss cell always sits under the owner's name — a manager at most loses a job; an AI agent loses nothing. The one who bears the loss is the one who acts."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const paintList = () => {
    $("rvu-list").innerHTML = TASKS.map((x, i) => {
      const a = answered[i];
      const right = a === x.k;
      const pill = a == null ? "" : `<span class="pill ${right ? "ok" : "bad"}">${right ? T("对", "Right") : T("再想想", "Rethink")}</span>`;
      return `<div class="scn" style="margin-bottom:8px">
        <div class="scn-q">${i + 1}. ${x.t} ${pill}</div>
        <div class="demo-btns" style="margin:6px 0">
          <button class="demo-btn ${a === "r" ? "active" : ""}" data-i="${i}" data-k="r">${T("可计算的风险（工具能做）", "Computable risk (tool can do)")}</button>
          <button class="demo-btn ${a === "j" ? "active" : ""}" data-i="${i}" data-k="j">${T("判断（所有者必须决定）", "Judgment (owner must decide)")}</button>
        </div>
        ${a != null ? `<div class="scn-meta">${right ? "✓ " : "✗ "}${x.why}</div>` : ""}
      </div>`;
    }).join("");
    root.querySelectorAll("#rvu-list [data-i]").forEach((b) => b.addEventListener("click", () => { answered[+b.dataset.i] = b.dataset.k; paintList(); }));
    const n = answered.filter((a) => a != null).length;
    const ok = answered.filter((a, i) => a === TASKS[i].k).length;
    $("rvu-n").textContent = n + "/12"; $("rvu-ok").textContent = ok; $("rvu-bad").textContent = n - ok;
  };

  const paintPanel = () => {
    $("rvu-stake").textContent = stake;
    root.querySelectorAll("#rvu-who button").forEach((b) => b.classList.toggle("on", b.dataset.w === who));
    root.querySelectorAll("#rvu-out button").forEach((b) => b.classList.toggle("on", b.dataset.o === outcome));
    const pnl = outcome === "win" ? stake * 0.5 : -stake;
    const cell = (title, val, note, cls) => `<div class="cmp-cell ${cls}"><h5>${title}</h5><div style="font-size:20px;font-weight:700;color:${val > 0 ? "var(--green)" : val < 0 ? "var(--red)" : "var(--muted)"}">${val > 0 ? "+" : ""}${val === 0 ? "0" : val.toFixed(0)}${val !== 0 ? " M" : ""}</div><div class="scn-meta">${note}</div></div>`;
    const ownerNote = T("资源是他的，目的是他的：无论谁“决定”，盈亏都记在这里。", "The resources and the ends are theirs: whoever “decides,” profit and loss are booked here.");
    const mgrNote = who === "mgr"
      ? T("拿固定薪水；失败最多丢工作，不赔本金。他执行的是所有者的判断——“我信任这个经理”。", "Draws a salary; failure at most costs the job, never the principal. Executes the owner's judgment — “I trust this manager.”")
      : T("未参与。", "Not involved.");
    const aiNote = who === "ai"
      ? T("没有资源可失去、没有目的可落空。它的“目标”是委托人设定的；它是手段，不是行动者（阶段 2.1）。", "No resources to lose, no ends to disappoint. Its “goal” was set by the principal; it is a means, not an actor (Stage 2.1).")
      : T("未参与。", "Not involved.");
    $("rvu-cmp").innerHTML =
      cell(T("所有者（委托人）", "Owner (principal)"), pnl, ownerNote, "hl") +
      cell(T("经理", "Manager"), 0, mgrNote, who === "mgr" ? "" : "cold") +
      cell(T("AI 代理人", "AI agent"), 0, aiNote, who === "ai" ? "" : "cold");
    const lines = [];
    if (who === "owner") lines.push(T("所有者自己判断：目的、所有权、承担三要素合一——这是福斯–克莱因意义上的企业家。", "The owner judges: ends, ownership and bearing in one person — the entrepreneur in the Foss–Klein sense."));
    if (who === "mgr") lines.push(T("雇经理不是把判断交出去，而是把“执行”交出去；“雇谁、给多大权限”本身就是所有者的判断。", "Hiring a manager does not hand over judgment, only execution; “whom to hire and how much authority to give” is itself the owner's judgment."));
    if (who === "ai") lines.push(`<span class="warn">${T("“交给 AI”在行动学里等于：所有者做了一个判断——“我信任这个工具做这件事”。责任没有移动，只是被技术外衣遮住了。", "“Handing it to AI” means, praxeologically: the owner made a judgment — “I trust this tool with this task.” Responsibility did not move; it was draped in a technical costume.")}</span>`);
    lines.push(outcome === "fail"
      ? `<span class="bad">${T("失败：", "Failure: ")}${stake}${T(" M 的损失全部落在所有者名下。这正是阶段 6.3 的反馈系统——亏损把资源从错误的计划里抽走。一个不会亏损的东西，不在这个回路里。", " M of loss lands entirely on the owner. That is the feedback system of Stage 6.3 — losses pull resources out of mistaken plans. Something that cannot lose is not in the loop.")}</span>`
      : `<span class="ok">${T("成功：利润 ", "Success: profit of ")}${(stake * 0.5).toFixed(0)}${T(" M 归所有者。奈特说利润是承担不确定性的报酬——承担的人拿报酬，工具拿的是租金/工资。", " M goes to the owner. Knight: profit is the reward for bearing uncertainty — the bearer gets the reward; tools get rent or wages.")}</span>`);
    $("rvu-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("rvu-reset").onclick = () => { answered.fill(null); paintList(); };
  root.querySelectorAll("#rvu-who button").forEach((b) => b.addEventListener("click", () => { who = b.dataset.w; paintPanel(); }));
  root.querySelectorAll("#rvu-out button").forEach((b) => b.addEventListener("click", () => { outcome = b.dataset.o; paintPanel(); }));
  $("rvu-stake-sl").addEventListener("input", (e) => { stake = +e.target.value; paintPanel(); });
  paintList(); paintPanel();
}
