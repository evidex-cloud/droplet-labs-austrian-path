// 交互演示：行动学推导机——从“人有目的地行动”出发，一步一步选出“下一步必然蕴含什么”。
// 每一步给三个选项（一个是逻辑推论，两个是常见的偷渡假设/错误），选完即时反馈；
// 走完全链后给出“折叠视图”：整条从公理到阶段 1 定律的推导链，一眼看完。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 推导链：每一步 = { given: 当前已确立的命题, ask: 提问, options: [{t, ok, why}], cat: 得到的范畴, ref: 交叉引用 }
  const steps = [
    {
      given: T("人有目的地行动。", "Humans act purposefully."),
      ask: T("这句话直接蕴含了什么？", "What does this sentence directly imply?"),
      cat: T("目的 · 手段", "Ends · Means"),
      options: [
        { t: T("行动人总是自私的", "The actor is always selfish"), ok: false, why: T("“有目的”不等于“自利”。目的可以是利他的、宗教的、荒唐的——公理对目的的内容一言不发。", "“Purposeful” is not “self-interested.” Ends may be altruistic, religious or absurd — the axiom says nothing about their content.") },
        { t: T("行动人有一个目的，并选用某种手段去达成它", "The actor has an end and employs some means to reach it"), ok: true, why: T("这就是“有目的的行为”这五个字的展开：没有目的不是行动，没有手段只是愿望。", "That is simply what “purposeful behavior” unpacks to: no end, no action; no means, only a wish.") },
        { t: T("行动人总能达成目的", "The actor always attains the end"), ok: false, why: T("公理只说行动指向目的，不说它成功。失败的行动仍是行动。", "The axiom says action aims at an end, not that it succeeds. A failed action is still an action.") },
      ],
    },
    {
      given: T("行动人用手段追求目的。", "The actor uses means to pursue ends."),
      ask: T("手段一定具有什么性质？", "What must be true of the means?"),
      cat: T("稀缺", "Scarcity"),
      options: [
        { t: T("手段总是充足的，只是分配不均", "Means are always plentiful, just unevenly distributed"), ok: false, why: T("如果手段对行动人而言充足到能同时满足一切目的，他根本不必“行动”——想要什么直接有。", "If means were ample enough to satisfy every end at once, there would be nothing to act about — you would simply have what you want.") },
        { t: T("手段是稀缺的：不够同时达成所有目的", "Means are scarce: not enough to attain every end at once"), ok: true, why: T("行动的存在本身就证明手段不够用；否则就没有“为了这个放弃那个”的必要。", "The very existence of action proves means are insufficient; otherwise there would be no need to give up one thing for another.") },
        { t: T("行动人知道所有可得的手段", "The actor knows every available means"), ok: false, why: T("这是一个额外的、通常为假的知识假设，公理里没有它。", "That is an extra — and usually false — assumption about knowledge; the axiom contains no such thing.") },
      ],
    },
    {
      given: T("手段是稀缺的。", "Means are scarce."),
      ask: T("稀缺逼出了什么？", "What does scarcity force?"),
      cat: T("选择", "Choice"),
      options: [
        { t: T("选择：把手段用在某些目的上，就放弃了其他目的", "Choice: means applied to some ends are withheld from others"), ok: true, why: T("手段不够，就必须决定用在哪——这就是选择。没有稀缺就没有选择。", "If means are insufficient you must decide where they go — that is choice. No scarcity, no choice.") },
        { t: T("冲突：稀缺必然导致人与人争夺", "Conflict: scarcity necessarily makes people fight"), ok: false, why: T("稀缺蕴含的是行动人自己的“取舍”；人与人之间是争夺还是交换，取决于制度与判断（阶段 1.5、9.1）。", "Scarcity implies trade-offs for the actor himself; whether people fight or trade depends on institutions and judgment (Stages 1.5, 9.1).") },
        { t: T("平均分配：稀缺的东西应该平分", "Equal division: scarce things should be shared equally"), ok: false, why: T("这是一个价值判断，从“稀缺”这个事实里推不出“应该怎样”。", "That is a value judgment; no “ought” follows from the fact of scarcity.") },
      ],
    },
    {
      given: T("行动人做出了选择。", "The actor makes a choice."),
      ask: T("选择暴露了什么？", "What does choice reveal?"),
      cat: T("偏好（序数）", "Preference (ordinal)"),
      options: [
        { t: T("偏好可以用数字度量：A 的效用是 B 的 1.4 倍", "Preference can be measured: A yields 1.4 times B's utility"), ok: false, why: T("选 A 弃 B 只告诉你 A 排在 B 前面，不告诉你“前多少”。基数效用是一个额外假设（阶段 2.4）。", "Choosing A over B tells you only that A ranks above B, not by how much. Cardinal utility is an extra assumption (Stage 2.4).") },
        { t: T("行动人对 A 和 B 是无差异的", "The actor is indifferent between A and B"), ok: false, why: T("无差异不会表现为行动——如果真的无所谓，就没有“选”这回事。行动只能暴露排序。", "Indifference never shows up in action — if it truly did not matter there would be no choosing. Action reveals only rankings.") },
        { t: T("一个排序：被选的目的排在被放弃的目的之前", "A ranking: the chosen end stands above the forgone one"), ok: true, why: T("选择就是排序的落地。这就是阶段 1.1 说的“效用是序数的”的来源。", "Choice is a ranking made real. This is where Stage 1.1's “utility is ordinal” comes from.") },
      ],
    },
    {
      given: T("被选的目的排在被放弃的目的之前。", "The chosen end ranks above the forgone one."),
      ask: T("被放弃的那个次优目的，叫什么？", "What is the forgone next-best end called?"),
      cat: T("成本", "Cost"),
      options: [
        { t: T("成本 = 花掉的钱", "Cost = the money spent"), ok: false, why: T("钱只是手段的一种；成本的本质是被放弃的东西。少睡两小时也是成本，哪怕一分钱没花。", "Money is just one means; the essence of cost is what is given up. Two hours of lost sleep is a cost even if not a cent changes hands.") },
        { t: T("成本 = 被放弃的最高价值的替代目的", "Cost = the most valuable alternative end forgone"), ok: true, why: T("这就是机会成本（阶段 1.4）——它是主观的、向前看的，只存在于选择的那一刻。", "That is opportunity cost (Stage 1.4) — subjective, forward-looking, existing only at the moment of choice.") },
        { t: T("成本由生产者投入的劳动决定", "Cost is set by the labor the producer put in"), ok: false, why: T("这是古典劳动价值论的残余；阶段 1.1 已经翻转了因果：投入的价值来自产出的价值。", "A leftover of the classical labor theory; Stage 1.1 already reversed the causation: inputs get their value from outputs.") },
      ],
    },
    {
      given: T("行动有目的，也有成本。", "Action has an end and a cost."),
      ask: T("行动完成后，行动人会怎样评估？", "After the action, how does the actor assess it?"),
      cat: T("利润与亏损（心理的）", "Profit & loss (psychic)"),
      options: [
        { t: T("行动一定成功，所以总是有利润", "Action always succeeds, so there is always profit"), ok: false, why: T("公理没有承诺成功。事后发现“不值”的行动多得很。", "The axiom promises no success. Plenty of actions turn out not to have been worth it.") },
        { t: T("达成的目的 vs 放弃的成本：值，是利润；不值，是亏损", "End attained vs cost paid: worth it = profit, not worth it = loss"), ok: true, why: T("这是“心理利润/亏损”，先于货币。货币利润只是它在市场里的可计算影子（阶段 6.3）。", "This is psychic profit/loss, prior to money. Money profit is only its calculable shadow in a market (Stage 6.3).") },
        { t: T("利润只存在于企业的账本里", "Profit exists only on a firm's books"), ok: false, why: T("账面利润是派生的。一个人 6 点起床开店觉得“值”，就是心理利润，哪怕她不记账。", "Book profit is derivative. A barista who gets up at 6 and feels it was worth it has made a psychic profit, ledger or no ledger.") },
      ],
    },
    {
      given: T("行动从现状指向一个更好的状态。", "Action moves from the present toward a better state."),
      ask: T("这蕴含了关于时间的什么？", "What does this imply about time?"),
      cat: T("时间", "Time"),
      options: [
        { t: T("行动在时间中展开，且行动人希望目的早点而不是晚点达成", "Action unfolds in time, and the actor wants the end sooner rather than later"), ok: true, why: T("从“现在”到“更好”必须经过时间；而“现在就动手”本身就暗示了偏好早于晚——时间偏好的种子（阶段 3.1）。", "Getting from “now” to “better” takes time; and acting now already implies preferring sooner to later — the seed of time preference (Stage 3.1).") },
        { t: T("行动是瞬时的，没有先后", "Action is instantaneous, with no before and after"), ok: false, why: T("一个没有“之前/之后”的行动不可想象：起床、磨豆、等客人，必有顺序。", "An action with no before and after is unthinkable: wake, grind, wait — there is always a sequence.") },
        { t: T("时间是一个外部参数，与行动无关", "Time is an external parameter unrelated to action"), ok: false, why: T("这是数学模型里的“t”。对行动人而言，时间是他必须“等”的东西，等待本身有代价（阶段 2.4）。", "That is the “t” of a math model. For the actor, time is something he must wait through, and waiting has a price (Stage 2.4).") },
      ],
    },
    {
      given: T("行动指向未来。", "Action points at the future."),
      ask: T("行动人对未来处于什么状态？", "In what state is the actor with respect to the future?"),
      cat: T("不确定性", "Uncertainty"),
      options: [
        { t: T("行动人能算出所有结果的概率", "The actor can compute the odds of every outcome"), ok: false, why: T("能算概率的是“风险”（骰子）；行动面对的多是没有概率分布可查的“不确定性”（奈特、米塞斯）。", "Computable odds are “risk” (dice); action mostly faces “uncertainty” with no distribution to look up (Knight, Mises).") },
        { t: T("未来由过去决定，所以是可预测的", "The future is determined by the past, hence predictable"), ok: false, why: T("如果未来已定，就没有什么可“决定”的——你只是执行剧本。行动的存在本身反驳了这一点。", "If the future were settled there would be nothing to decide — you would be reading a script. The existence of action refutes this.") },
        { t: T("不确定：行动人在不知道结果的情况下押注", "Uncertain: the actor bets without knowing the outcome"), ok: true, why: T("确定的世界不需要行动，只需要执行。不确定性是企业家利润存在的根本原因（阶段 6.1）。", "A certain world needs no action, only execution. Uncertainty is the root reason entrepreneurial profit exists (Stage 6.1).") },
      ],
    },
    {
      given: T("行动人相信手段能带来目的。", "The actor believes the means will bring about the end."),
      ask: T("这个“相信”预设了什么？", "What does that belief presuppose?"),
      cat: T("因果", "Causality"),
      options: [
        { t: T("因果性：行动人头脑里有“做 X 会导致 Y”的模型", "Causality: the actor carries a model “doing X brings about Y”"), ok: true, why: T("不相信任何因果联系的人不知道该动哪根手指。经济学的对象，是一群带着因果模型行动的人（阶段 7.2）。", "Someone who believed in no causal links would not know which finger to move. Economics studies people acting on causal models (Stage 7.2).") },
        { t: T("行动人的因果模型总是正确的", "The actor's causal model is always correct"), ok: false, why: T("模型可以错——错了就亏损。公理只要求“有模型”，不要求“模型对”。", "Models can be wrong — that is what loss is. The axiom requires a model, not a correct one.") },
        { t: T("运气：结果与行动无关", "Luck: outcomes are unrelated to actions"), ok: false, why: T("如果结果与行动无关，就没有理由选任何手段。行动本身就是对因果的押注。", "If outcomes had nothing to do with actions there would be no reason to pick any means. Action is a bet on causation.") },
      ],
    },
    {
      given: T("行动人把稀缺的手段（若干同质单位）分配给排好序的目的。", "The actor allocates scarce means (several identical units) to ranked ends."),
      ask: T("每多一单位，会被用于什么？", "Where does each additional unit go?"),
      cat: T("边际效用递减 → 阶段 1.1", "Diminishing marginal utility → Stage 1.1"),
      options: [
        { t: T("随机的某个目的", "Some random end"), ok: false, why: T("有目的的行动人不会随机分配——他先满足最重要的。", "A purposeful actor does not allocate at random — he serves the most important end first.") },
        { t: T("尚未满足的最重要目的，因此下一单位必然去了更次要的目的", "The most important end not yet served — so the next unit must go to a lesser one"), ok: true, why: T("这就是边际效用递减——从行动逻辑推出，不靠“吃腻了”的心理学（阶段 1.1）。", "That is diminishing marginal utility — derived from the logic of action, not from the psychology of getting bored (Stage 1.1).") },
        { t: T("同样重要的目的，所以每单位价值相同", "Equally important ends, so every unit is worth the same"), ok: false, why: T("如果目的同样重要，就谈不上排序；而选择必然暴露排序。", "If ends were equally important there would be no ranking — but choice necessarily reveals one.") },
      ],
    },
    {
      given: T("两个行动人各自持有一物，并自愿交换。", "Two actors each hold a good and trade voluntarily."),
      ask: T("自愿交换蕴含什么？", "What does voluntary exchange imply?"),
      cat: T("交换互利 → 阶段 1.5", "Gains from trade → Stage 1.5"),
      options: [
        { t: T("两物价值相等，所以才交换", "The two goods are of equal value, which is why they trade"), ok: false, why: T("如果等值，交换没有意义。交换发生恰恰因为双方评价**相反**。", "If they were equal, trading would be pointless. Exchange happens precisely because the two rank the goods in opposite order.") },
        { t: T("必有一方吃亏", "One side must lose"), ok: false, why: T("这是重商主义与劳动价值论的残余。每一方都拿自己排得低的换排得高的，事前双方都预期获益。", "A leftover of mercantilism and the labor theory. Each side gives what it ranks lower for what it ranks higher; both expect to gain.") },
        { t: T("双方把对方的东西排在自己的之前——所以事前双方都预期获益", "Each ranks the other's good above his own — so both expect to gain"), ok: true, why: T("这是“自愿”和“交换”两个词的含义，不是统计结论。阶段 1.3 的边际对，就是把它用到许多人身上。", "That is what the words “voluntary” and “exchange” mean, not a statistical finding. Stage 1.3's marginal pairs apply it to many people at once.") },
      ],
    },
  ];

  let i = 0, score = 0, tries = 0, picked = null;
  const chain = []; // 已确立的范畴

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔗 行动学推导机：从一句公理，一步步推出经济学的范畴", "🔗 The praxeology deriver: from one axiom, step by step, to the categories of economics")}</div>
      <div class="demo-block">
        <div class="demo-row">
          <span class="demo-label" style="margin:0" id="ad-prog"></span>
          <span class="pill ok" id="ad-score"></span>
        </div>
        <div class="demo-bar"><span id="ad-bar"></span></div>
      </div>
      <div class="demo-block" id="ad-stage"></div>
      <div class="demo-block" id="ad-chain"></div>
      <p class="demo-tip">${T(
        "每一步只有一个选项是<strong>从上一句话里逻辑推出来</strong>的；另外两个都偷渡了额外假设（自私、可度量、总是成功、能算概率……）。注意：链条越往下，得到的东西越具体——最后两步就是阶段 1 的定律。",
        "At each step exactly one option is <strong>logically implied by the previous sentence</strong>; the other two smuggle in extra assumptions (selfishness, measurability, guaranteed success, computable odds …). Notice how the chain gets more concrete as it descends — the last two steps are the laws of Stage 1."
      )}</p>
    </div>`;

  const $ = (s) => root.querySelector(s);

  const paintChain = (final) => {
    const items = [`<div class="tl-item"><span class="when">${T("公理", "axiom")}</span><b>${steps[0].given}</b></div>`]
      .concat(chain.map((c, k) => `<div class="tl-item"><span class="when">${T("推论", "step")} ${k + 1}</span>${c}</div>`));
    const rest = steps.slice(chain.length).map((s, k) => `<div class="tl-item dim"><span class="when">${T("推论", "step")} ${chain.length + k + 1}</span><span style="color:var(--muted)">?</span></div>`);
    $("#ad-chain").innerHTML = `
      <label class="demo-label">${final ? T("折叠视图：整条推导链", "Collapsed view: the whole derivation chain") : T("已经确立的链条", "Established so far")}</label>
      <div class="tl">${items.join("")}${final ? "" : rest.join("")}</div>
      ${final ? `<div class="done-banner">${T(
        "十一步，零统计。顶端一句话，底端是阶段 1 的两条定律。每一环靠的都是“这句话的含义里已经有了什么”，不是“数据里拟合出了什么”。这就是米塞斯说的“经济学是人的行动学的一部分”。",
        "Eleven steps, zero statistics. One sentence at the top, two laws of Stage 1 at the bottom. Every link rests on “what the previous sentence already contains,” not on “what the data happened to fit.” That is what Mises meant by “economics is a branch of praxeology.”"
      )}</div>` : ""}`;
  };

  const paintStage = () => {
    $("#ad-prog").textContent = T(`第 ${Math.min(i + 1, steps.length)} / ${steps.length} 步`, `Step ${Math.min(i + 1, steps.length)} of ${steps.length}`);
    $("#ad-score").textContent = T(`一次选对 ${score}`, `First-try correct: ${score}`);
    $("#ad-bar").style.width = (chain.length / steps.length * 100) + "%";
    if (i >= steps.length) {
      $("#ad-stage").innerHTML = `
        <div class="scn">
          <div class="scn-q">${T("推导完成。", "Derivation complete.")}</div>
          <div class="scn-meta">${T(`你在 ${steps.length} 步里有 ${score} 步一次选对，共尝试 ${tries} 次。`, `You got ${score} of ${steps.length} steps right on the first try, in ${tries} attempts total.`)}
          ${score < steps.length ? T(" 选错的那些步，正是最常被偷渡进“经济人”里的假设——值得回头再看一遍。", " The steps you missed are exactly the assumptions most often smuggled into “economic man” — worth a second look.") : T(" 全对——你已经能把公理和它的推论分开了。", " Perfect — you can now separate the axiom from what people smuggle in beside it.")}</div>
          <div class="demo-btns"><button class="demo-btn" id="ad-restart">${T("重来一遍", "Start over")}</button></div>
        </div>`;
      $("#ad-restart").addEventListener("click", () => { i = 0; score = 0; tries = 0; picked = null; chain.length = 0; paintStage(); paintChain(false); });
      paintChain(true);
      return;
    }
    const s = steps[i];
    $("#ad-stage").innerHTML = `
      <div class="scn">
        <div class="demo-meta" style="margin:0 0 6px">${T("已知：", "Given: ")}<b style="color:var(--ink)">${s.given}</b></div>
        <div class="scn-q">${s.ask}</div>
        <div class="demo-btns" style="flex-direction:column;align-items:stretch">
          ${s.options.map((o, k) => `<button class="demo-btn ad-opt" data-k="${k}" style="text-align:left;${picked === k ? (o.ok ? "border-color:var(--green);background:var(--green-soft)" : "border-color:var(--red);background:var(--red-soft)") : ""}">${String.fromCharCode(65 + k)}. ${o.t}</button>`).join("")}
        </div>
        <div class="demo-log" id="ad-fb">${picked == null ? `<span style="color:var(--muted)">${T("选一个：哪一句是从“已知”里逻辑推出来的？", "Pick one: which follows logically from the “given”?")}</span>` : ""}</div>
        <div class="demo-btns"><button class="demo-btn" id="ad-next" ${picked != null && s.options[picked].ok ? "" : "disabled"}>${T("下一步 →", "Next →")}</button></div>
      </div>`;
    root.querySelectorAll(".ad-opt").forEach((b) => b.addEventListener("click", () => {
      const k = +b.dataset.k, o = s.options[k];
      tries++;
      if (picked == null && o.ok) score++;
      if (picked == null || !s.options[picked].ok) picked = k; // 选对后锁定
      paintStage();
      $("#ad-fb").innerHTML = `<div class="${o.ok ? "ok" : "bad"}"><b>${o.ok ? T("✓ 是推论。", "✓ Follows.") : T("✗ 偷渡了假设。", "✗ Smuggles an assumption.")}</b> ${o.why}</div>${o.ok ? `<div class="warn">${T("得到范畴：", "Category obtained: ")}<b>${s.cat}</b></div>` : ""}`;
    }));
    const nx = $("#ad-next");
    if (nx) nx.addEventListener("click", () => {
      chain.push(`<b>${s.cat}</b> — ${s.options.find((o) => o.ok).t}`);
      i++; picked = null;
      paintStage(); paintChain(false);
    });
  };

  paintStage();
  paintChain(false);
}
