// 交互演示：偏见还是有目的？——10 个场景，读者先贴标签（“偏见” / “不确定性下的有目的行动”），
// 再看行动学怎么读、行为经济学补充了什么、以及市场过程会不会纠正它。
// 没有“标准答案”式的评分：计的是你与两派各自的一致度，以及“市场能否纠错”这一维度。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // lean: 'bias' = 行为经济学的标签更贴切；'purpose' = 行动学读法更贴切；'both' = 两者都成立
  // corrects: 市场过程是否会纠正它（true/false/'partly'）
  const scenarios = [
    {
      t: T("沉没成本：你花 300 元买了音乐会票，当晚下暴雨还发烧，你还是去了。", "Sunk cost: you paid $60 for a concert ticket; it is pouring and you have a fever; you go anyway."),
      lean: "both", corrects: "partly",
      prax: T("“票钱已经花了”只是一个框架。如果你在意的是“说到做到”或“不轻易放弃计划”，去听是在服务另一个目的——经济学家无权替你决定哪个目的是真的。但如果你去了之后后悔，这就是关于手段的错误。", "“The money is spent” is only one frame. If what you care about is keeping your word to yourself or not abandoning plans lightly, going serves a different end — the economist has no standing to pick which end is “real.” If you regret it afterward, it was an error about means."),
      beh: T("卡尼曼–特沃斯基的经典：人把已付出的成本纳入未来决策，违反“只看边际”。实验里稳健、可复制。", "A Kahneman–Tversky classic: people let costs already paid weigh on future choices, violating “look only at the margin.” Robust and replicable in the lab."),
      mkt: T("部分纠正：反复因沉没成本赔钱的人会学；但一次性决定（这场音乐会）没有反馈回路。", "Partly: someone who repeatedly loses money to sunk costs learns; a one-off decision (this concert) has no feedback loop."),
    },
    {
      t: T("损失厌恶：一个赌局 50% 赢 150 元、50% 输 100 元（期望值 +25），你拒绝了。", "Loss aversion: a bet pays $150 with 50% and costs $100 with 50% (expected value +$25); you decline."),
      lean: "purpose", corrects: "partly",
      prax: T("如果这 100 元是你这周的饭钱，拒绝是理性的：损失与收益不对称是你处境的属性，不是心理缺陷。“期望值为正”只在你能重复玩很多次、且单次损失不会让你出局时才是正确的准绳。", "If that $100 is this week's food money, declining is rational: the asymmetry between loss and gain is a property of your situation, not a defect of your mind. “Positive expected value” is the right yardstick only when you can play many times and no single loss knocks you out."),
      beh: T("前景理论：损失的痛苦约是等量收益的 2 倍。实验中即使赌注很小、可重复，人也拒绝——这部分确实像“偏见”。", "Prospect theory: losses hurt about twice as much as equal gains. In experiments people decline even when stakes are tiny and repeatable — that part does look like a bias."),
      mkt: T("部分纠正：在可重复的市场里（保险、投资），过度损失厌恶会让你系统性地少赚，你会慢慢调整；在一次性的大决定里不会。", "Partly: in repeatable markets (insurance, investing) excessive loss aversion costs you systematically and you adjust; in one-off big decisions it does not."),
    },
    {
      t: T("禀赋效应：你随机分到一个马克杯，有人出 40 元买，你要 80 元；而没分到杯子的人只愿出 35 元。", "Endowment effect: you were randomly handed a mug; someone offers $8, you ask $16; people without a mug would pay only $7."),
      lean: "purpose", corrects: true,
      prax: T("主观价值论的预测，不是反例：价值是你与杯子的关系的属性，拥有改变了这个关系（它已经在你桌上、进了你的计划）。说“估价不该取决于拥有”的是新古典，不是奥派。", "A prediction of subjective value theory, not a counterexample: value is a property of your relationship to the mug, and owning it changed that relationship (it is on your desk, in your plans). It is neoclassicism, not the Austrian School, that says valuation “should not” depend on ownership."),
      beh: T("塞勒 1980、卡尼曼–克内奇–塞勒 1990：要价中位数约为出价的 2 倍。它推翻了“无差异曲线不依赖初始禀赋”这条新古典假设。", "Thaler 1980; Kahneman–Knetsch–Thaler 1990: median asking price about twice the bid. It refutes the neoclassical assumption that indifference curves do not depend on endowments."),
      mkt: T("会纠正：如果你的要价系统性高于市场，你就是卖不掉——市场会告诉你。专业交易员几乎没有禀赋效应（李斯特 2003 的实地实验）。", "Corrected: if your asking price is systematically above the market, you simply do not sell — the market tells you. Professional traders show almost no endowment effect (List's 2003 field experiments)."),
    },
    {
      t: T("2021 年 1 月，你在 GameStop 股价 300 美元时买入，因为 Reddit 上所有人都在买。", "January 2021: you buy GameStop at $300 because everyone on Reddit is buying."),
      lean: "both", corrects: true,
      prax: T("你的目的可能不是“最大化期望收益”，而是参与一场对冲基金的围剿、或者为一个故事付门票——那是有目的的消费，不是错误。但如果你以为 300 美元反映了基本面，那是关于手段的错误——而且是在反身性（阶段 16.5）里做出的：价格取决于别人的预期。", "Your end may not be “maximize expected return” but taking part in a raid on hedge funds, or paying for a story — purposeful consumption, not an error. If you believed $300 reflected fundamentals, that was an error about means — made under reflexivity (Stage 16.5): the price depended on what others expected."),
      beh: T("羊群效应、可得性启发（新闻铺天盖地）、过度自信。行为金融学的教科书案例。", "Herding, availability (wall-to-wall coverage), overconfidence. A textbook case for behavioral finance."),
      mkt: T("会纠正，而且很快：一个月后股价跌去约 80%。买在顶部的人付了学费——市场把犯错的成本压到犯错的人身上。", "Corrected, fast: within a month the price fell about 80%. Those who bought the top paid tuition — the market pushes the cost of the error onto the one who made it."),
    },
    {
      t: T("一个创业者估计自己成功的概率是 70%，而同类创业公司的实际存活率约 30%。", "A founder puts her chance of success at 70%; the actual survival rate of comparable startups is about 30%."),
      lean: "purpose", corrects: true,
      prax: T("企业家判断（阶段 6.1）恰恰是对“基率”的有意偏离：她认为自己看到了别人没看到的东西。如果所有人都按基率行动，就没有人创业，也没有人发现新机会。她可能错——但“错”只能事后由利润亏损裁定，不能事前由统计裁定。", "Entrepreneurial judgment (Stage 6.1) is precisely a deliberate departure from the base rate: she believes she sees what others do not. If everyone acted on base rates, nobody would found anything and nobody would discover new opportunities. She may be wrong — but “wrong” can only be adjudicated afterward by profit and loss, not beforehand by statistics."),
      beh: T("过度自信、忽略基率（代表性启发）。卡尼曼称之为“规划谬误”，并指出创业者系统性地高估自己。", "Overconfidence, base-rate neglect (representativeness). Kahneman calls it the “planning fallacy” and notes founders systematically overrate themselves."),
      mkt: T("会纠正：70% 里错的那部分会亏损、关门；对的那部分会赚利润——这正是市场用来筛选判断的机制。没有这种“过度自信”，就没有创新的试错。", "Corrected: the wrong share of that 70% will lose money and close; the right share earns profit — exactly the mechanism markets use to sort judgment. Without this “overconfidence” there is no trial-and-error of innovation."),
    },
    {
      t: T("锚定：一家店先标价 999 元再划掉写 499 元，你觉得很划算，买了——虽然你本来打算最多花 300。", "Anchoring: a shop lists $999, crosses it out and writes $499; you feel it is a bargain and buy — though you had planned to spend at most $300."),
      lean: "bias", corrects: "partly",
      prax: T("这是最接近“真正错误”的一类：你的评价被一个与你目的无关的数字拉动了。行动学承认错误存在——问题是它会不会被纠正，以及谁有权替你纠正。", "This is the closest thing to a genuine error: your valuation was pulled by a number irrelevant to your ends. Praxeology grants that errors exist — the question is whether they get corrected, and who is entitled to correct them for you."),
      beh: T("锚定效应，特沃斯基–卡尼曼 1974 的转盘实验的商业版。零售业系统性地利用它。", "Anchoring — the commercial version of Tversky–Kahneman's 1974 wheel-of-fortune experiment. Retail exploits it systematically."),
      mkt: T("部分纠正：比价网站、评论、退货政策都是市场对这种利用的反制；但利用者也在竞争，所以它不会消失——阶段 16.1 会讨论注意力经济里的“操纵”。", "Partly: price-comparison sites, reviews and return policies are the market's counter-measures; but exploiters compete too, so it never disappears — Stage 16.1 takes up “manipulation” in the attention economy."),
    },
    {
      t: T("你每月把 1000 元存进一个“旅行基金”账户，同时信用卡上有 5000 元 18% 利息的欠款没还。", "You put $200 a month into a “travel fund” while carrying $1,000 of credit-card debt at 18%."),
      lean: "both", corrects: "partly",
      prax: T("心理账户可以是一种自我约束的技术：你知道“旅行基金”一旦并入总账就会被花掉。这是对自己未来行为的不信任——一个有目的的承诺机制。但如果你没意识到 18% 的利息，那就是关于手段的错误。", "Mental accounting can be a self-binding technique: you know the “travel fund” would get spent if merged into the general account. That is distrust of your future self — a purposeful commitment device. If you simply had not noticed the 18% interest, that is an error about means."),
      beh: T("心理账户（塞勒）：钱被贴上标签后不再可替代。教科书案例。", "Mental accounting (Thaler): once labeled, money stops being fungible. A textbook case."),
      mkt: T("部分纠正：利息账单每月提醒你；但如果“承诺机制”对你的价值大于利息成本，市场不会（也不该）纠正它。", "Partly: the interest bill reminds you monthly; but if the commitment device is worth more to you than the interest, the market will not (and should not) correct it."),
    },
    {
      t: T("养老金默认“自动加入”后，参与率从约 40% 升到约 90%。政府据此推出更多“有益的默认选项”。", "After pensions switched to automatic enrollment, participation rose from about 40% to about 90%. Government proposes more “beneficial defaults” on that basis."),
      lean: "purpose", corrects: false,
      prax: T("前一半是真实的改善（对多数人）。后一半是知识问题：助推者怎么知道哪个默认对谁好？对正在还高息债的人，自动加入是坏事。里佐–惠特曼：助推者用一个“代表性的你”替换了真实的你，而且他自己有偏见与激励。", "The first half is a genuine improvement (for most). The second is the knowledge problem: how does the nudger know which default is good for whom? For someone paying down high-interest debt, auto-enrollment is bad. Rizzo–Whitman: the nudger substitutes a “representative you” for the real you — and has biases and incentives of his own."),
      beh: T("塞勒–桑斯坦《助推》的旗舰案例：默认选项的力量，“自由家长制”的正面证据。", "The flagship case of Thaler–Sunstein's Nudge: the power of defaults, the positive evidence for “libertarian paternalism.”"),
      mkt: T("不会纠正：这不是市场决定，是政策决定。助推者设错了默认不赔一分钱——这正是与市场纠错的根本区别。", "Not corrected: this is a policy decision, not a market one. A nudger who sets the wrong default pays nothing — the fundamental difference from market correction."),
    },
    {
      t: T("一位农民拒绝采用统计上更高产的新品种，坚持种祖辈的老品种。", "A farmer refuses a statistically higher-yielding new seed variety and keeps planting his grandfather's."),
      lean: "purpose", corrects: true,
      prax: T("他优化的可能不是平均产量，而是最坏年份的产量（老品种他知道怎么应对旱涝）。在分布未知、且一次歉收就破产的世界里，“方差小”比“均值高”更重要——这是吉仁泽的生态理性，也是默会知识（阶段 7.2）。", "He may be optimizing not the average yield but the worst-year yield (he knows how the old variety behaves in drought and flood). In a world where the distribution is unknown and one bad harvest bankrupts you, low variance beats high mean — Gigerenzer's ecological rationality, and tacit knowledge (Stage 7.2)."),
      beh: T("现状偏见、损失厌恶、对新事物的可得性不足。发展经济学里常被归为“非理性的技术采纳障碍”。", "Status-quo bias, loss aversion, low availability of the new. Development economics often files this under “irrational barriers to technology adoption.”"),
      mkt: T("会纠正：如果新品种真的更好（包括坏年份），采用它的邻居会更富，他会看到、会跟；如果不是，他的“固执”会被证明是对的。市场让两种判断并行试错。", "Corrected: if the new seed really is better (bad years included), neighbors who adopt it grow richer and he will see and follow; if not, his “stubbornness” is vindicated. The market lets both judgments run in parallel."),
    },
    {
      t: T("同一手术，医生说“90% 存活率”时你同意了；换一个医生说“10% 死亡率”，你犹豫了。", "The same operation: when the doctor says “90% survive,” you consent; a different doctor says “10% die,” and you hesitate."),
      lean: "both", corrects: false,
      prax: T("两句话逻辑等价，但在真实对话里，医生选择哪种说法本身就是信息：说“10% 死亡”的医生可能在暗示风险对你更高、或者他见过更多失败。从框架推断说话者知道什么，是不确定性下的合理推断。", "The two statements are logically equivalent, but in a real conversation the doctor's choice of framing is itself information: one who says “10% die” may be hinting the risk is higher for you, or that he has seen more failures. Inferring what the speaker knows from how he frames it is a reasonable inference under uncertainty."),
      beh: T("框架效应，特沃斯基–卡尼曼 1981“亚洲疾病问题”的医疗版。实验中即使被告知两者等价，人仍会被框架影响。", "Framing — the medical version of Tversky–Kahneman's 1981 “Asian disease problem.” In experiments people remain influenced even when told the frames are equivalent."),
      mkt: T("不会纠正：一次性的、非市场的决定，没有反馈回路。这是行为经济学最有力的领域——奥派应当承认。", "Not corrected: a one-off, non-market decision with no feedback loop. This is behavioral economics' strongest ground — Austrians should concede it."),
    },
  ];

  let idx = 0, answers = Array(scenarios.length).fill(null), revealed = false;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🃏 偏见，还是不确定性下的有目的行动？——10 个场景", "🃏 Bias, or purposeful action under uncertainty? — 10 scenarios")}</div>
      <div class="demo-meta" id="bp-progress"></div>
      <div class="scn" id="bp-card"></div>
      <div class="demo-btns" id="bp-nav">
        <button class="demo-btn" id="bp-prev">${T("← 上一个", "← Previous")}</button>
        <button class="demo-btn" id="bp-next">${T("下一个 →", "Next →")}</button>
      </div>
      <div class="demo-block" id="bp-summary" style="display:none"></div>
      <p class="demo-tip">${T(
        "先贴标签再看解析。注意三件事：① 很多“偏见”在行动学里是关于目的的分歧（谁说你的目的必须是最大化期望值？）；② 真正的错误（锚定）行动学也承认，问题在“会不会被纠正”；③ 看最后一栏——市场能纠错的场景与不能纠错的场景，正是奥派与行为经济学各自最强的地盘。",
        "Label first, then read. Watch three things: ① many “biases” are, in praxeological terms, disagreements about ends (who says your end must be maximizing expected value?); ② genuine errors (anchoring) are granted by praxeology too — the question is whether they get corrected; ③ read the last column: the scenarios markets can correct and those they cannot are exactly the strongest ground of Austrians and of behavioral economics, respectively."
      )}</p>
    </div>`;

  const leanLabel = (l) => l === "bias" ? T("行为经济学的标签更贴切", "The behavioral label fits better") : l === "purpose" ? T("行动学的读法更贴切", "The praxeological reading fits better") : T("两种读法都成立——取决于目的", "Both readings hold — it depends on the end");
  const mktPill = (c) => c === true ? '<span class="pill ok">' + T("市场会纠错", "Market corrects") + "</span>" : c === false ? '<span class="pill bad">' + T("市场不会纠错", "Market does not correct") + "</span>" : '<span class="pill" style="background:var(--orange-soft);color:var(--orange-ink)">' + T("部分纠错", "Partly corrects") + "</span>";

  const paint = () => {
    const s = scenarios[idx], a = answers[idx];
    root.querySelector("#bp-progress").textContent = T("场景 " + (idx + 1) + " / " + scenarios.length + " · 已标记 " + answers.filter((x) => x).length, "Scenario " + (idx + 1) + " / " + scenarios.length + " · labeled " + answers.filter((x) => x).length);
    let html = '<div class="scn-q">' + s.t + "</div>";
    html += '<div class="demo-btns" style="margin:8px 0">' +
      '<button class="demo-btn ' + (a === "bias" ? "active" : "") + '" data-ans="bias">' + T("偏见（非理性）", "Bias (irrational)") + "</button>" +
      '<button class="demo-btn ' + (a === "purpose" ? "active" : "") + '" data-ans="purpose">' + T("不确定性下的有目的行动", "Purposeful action under uncertainty") + "</button>" +
      '<button class="demo-btn ' + (a === "both" ? "active" : "") + '" data-ans="both">' + T("都是——取决于目的", "Both — depends on the end") + "</button></div>";
    if (a) {
      const agree = a === s.lean;
      html += '<div class="demo-log">' +
        '<div><span class="' + (agree ? "ok" : "warn") + '">' + (agree ? T("与本课读法一致：", "Matches this lesson's reading: ") : T("本课的读法：", "This lesson's reading: ")) + "</span>" + leanLabel(s.lean) + " " + mktPill(s.corrects) + "</div>" +
        '<div><b>' + T("行动学怎么读：", "Praxeology: ") + "</b>" + s.prax + "</div>" +
        '<div><b>' + T("行为经济学补充了什么：", "What behavioral economics adds: ") + "</b>" + s.beh + "</div>" +
        '<div><b>' + T("市场过程会纠正吗：", "Would the market correct it? ") + "</b>" + s.mkt + "</div></div>";
    } else {
      html += '<div class="scn-meta">' + T("先选一个标签，再看两派各自怎么读。", "Pick a label first; then see how each school reads it.") + "</div>";
    }
    root.querySelector("#bp-card").innerHTML = html;
    root.querySelectorAll("[data-ans]").forEach((b) => b.addEventListener("click", () => { answers[idx] = b.dataset.ans; paint(); }));
    root.querySelector("#bp-prev").disabled = idx === 0;
    root.querySelector("#bp-next").textContent = idx === scenarios.length - 1 ? T("看总结", "See summary") : T("下一个 →", "Next →");

    const done = answers.every((x) => x);
    const sum = root.querySelector("#bp-summary");
    if (done && revealed) {
      const nBias = answers.filter((x) => x === "bias").length, nPur = answers.filter((x) => x === "purpose").length, nBoth = answers.filter((x) => x === "both").length;
      const agree = answers.filter((x, i) => x === scenarios[i].lean).length;
      const corr = scenarios.filter((s) => s.corrects === true).length, part = scenarios.filter((s) => s.corrects === "partly").length, no = scenarios.filter((s) => s.corrects === false).length;
      sum.style.display = "";
      sum.innerHTML = '<div class="done-banner">' + T("10 个场景标完了。", "All 10 scenarios labeled.") + "</div>" +
        '<div class="stat-row">' +
        '<div class="stat"><div class="k">' + T("你标“偏见”", "You said “bias”") + '</div><div class="v">' + nBias + "</div></div>" +
        '<div class="stat"><div class="k">' + T("你标“有目的”", "You said “purposeful”") + '</div><div class="v acc">' + nPur + "</div></div>" +
        '<div class="stat"><div class="k">' + T("你标“都是”", "You said “both”") + '</div><div class="v">' + nBoth + "</div></div>" +
        '<div class="stat"><div class="k">' + T("与本课一致", "Match this lesson") + '</div><div class="v ' + (agree >= 6 ? "pos" : "") + '">' + agree + "/10</div></div>" +
        "</div>" +
        '<div class="demo-meta">' + T(
          "本课的分布：偏见 1、有目的 5、都是 4。这不是“正确答案”——它是奥派的读法，而它的核心主张只有一条：<b>“偏见”预设了一个正确目的，而目的是行动人自己的</b>。再看纠错那一列：市场会纠错 " + corr + " 个、部分 " + part + " 个、不会 " + no + " 个。不会纠错的两个（默认选项、手术框架）恰恰不是市场决定——那是行为经济学最有力的地盘，也是奥派该承认的地方。",
          "This lesson's distribution: bias 1, purposeful 5, both 4. That is not “the right answer” — it is the Austrian reading, whose core claim is just one sentence: <b>“bias” presupposes a correct end, and ends belong to the actor.</b> Now the correction column: the market corrects " + corr + ", partly " + part + ", not at all " + no + ". The two it does not correct (defaults, surgical framing) are precisely non-market decisions — behavioral economics' strongest ground, and the place Austrians should concede."
        ) + "</div>";
    } else sum.style.display = "none";
  };

  root.querySelector("#bp-prev").addEventListener("click", () => { if (idx > 0) { idx--; paint(); } });
  root.querySelector("#bp-next").addEventListener("click", () => { if (idx < scenarios.length - 1) { idx++; } else { revealed = true; } paint(); });
  paint();
}
