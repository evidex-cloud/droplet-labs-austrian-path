// 交互演示：批评法庭——五张批评卡，每张给出三种奥派回应，读者选“最强的那个”；
// 计分并解释为什么另外两种回应弱（稻草人 / 越界 / 错过要点）。最后给出“ABCT 声称什么、不声称什么”总结卡。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 每张卡：critic、claim（steelman）、replies[3]（text, grade: "best"|"straw"|"over"）、why
  const cards = [
    {
      critic: T("克鲁格曼：宿醉理论", "Krugman: the hangover theory"),
      claim: T("“如果部门间转移造成失业，繁荣期资源从下游转到上游时为什么没有失业？只有一个方向造成失业，说明萧条期的失业来自总需求不足，不是转移摩擦。”", "“If inter-sectoral transfer causes unemployment, why was there none when resources moved downstream → upstream in the boom? Only one direction causes unemployment, so bust unemployment comes from deficient demand, not transfer friction.”"),
      replies: [
        { text: T("克鲁格曼是凯恩斯主义者，他的批评只是意识形态偏见。", "Krugman is a Keynesian; his critique is just ideological bias."), grade: "straw" },
        { text: T("扩张靠新钱推——工人被加薪吸走，新岗位在等着；收缩靠损失拉——工人被解雇，下游吸收需要资本重组与真实储蓄。两个方向本就不对称，再加上萧条期的工资刚性。", "Expansion is pushed by new money — workers are drawn by higher pay into waiting jobs; contraction is pulled by losses — workers are laid off, and downstream absorption needs capital regrouping and real saving. The directions were never symmetric; add wage rigidity in the bust."), grade: "best" },
        { text: T("繁荣期也有失业，只是统计局没有测出来。", "There is unemployment in the boom too; the statistics just miss it."), grade: "over" },
      ],
      why: T("第一条是人身攻击而非论证；第三条编造事实。真正的回答是指出转移机制的不对称，并把萧条期失业的主因归到干预（托住工资）而非理论的必然。", "The first is ad hominem, not argument; the third invents a fact. The real answer points to the asymmetry of the transfer mechanism and attributes bust unemployment mainly to intervention (propped wages), not to the theory's necessity."),
    },
    {
      critic: T("弗里德曼：拨弦模型", "Friedman: the plucking model"),
      claim: T("“数据显示衰退深度能预测随后的复苏，但之前繁荣的幅度不能预测衰退的深度。如果繁荣越大萧条越深，相关性应该存在。它不存在。”", "“The data show recession depth predicts the subsequent recovery, but the size of the prior boom does not predict recession depth. If bigger booms meant deeper busts, the correlation should be there. It isn't.”"),
      replies: [
        { text: T("弗里德曼测的是 GDP 增长幅度，理论说的是生产结构的扭曲程度，两者不是一回事；而且萧条深度主要由断裂后的政策决定。但奥派也要承认：自己没有做出一个可测量的结构扭曲指数来替代 GDP。", "Friedman measured GDP growth; the theory speaks of the degree of structural distortion — not the same thing; and bust depth is mainly set by post-snap policy. But Austrians must also concede they have not built a measurable structural-distortion index to replace GDP."), grade: "best" },
        { text: T("统计数据不能检验先验理论，所以弗里德曼的结果无关紧要。", "Statistics cannot test an a priori theory, so Friedman's result is irrelevant."), grade: "over" },
        { text: T("弗里德曼的数据是 1993 年的，太旧了。", "Friedman's data are from 1993 — too old."), grade: "straw" },
      ],
      why: T("第二条把方法论辩护当作免死金牌，回避了一个公平的经验挑战；第三条无关。最强的回应既指出“总量 ≠ 结构”，又承认奥派在可测量指标上的欠账。", "The second turns the methodological defense into an immunity card and dodges a fair empirical challenge; the third is irrelevant. The strongest reply both says “aggregate ≠ structure” and concedes the Austrian debt on measurable indicators."),
    },
    {
      critic: T("理性预期：为什么会一次次被骗？", "Rational expectations: why fooled again and again?"),
      claim: T("“天天被市场筛选的企业家，为什么不识破央行压低的利率、不对冲、不等着抄底？如果他们识破了，信用扩张就不会引发错误投资。”", "“Why don't entrepreneurs — filtered by the market daily — see through the depressed rate, hedge, or wait to buy the wreckage? If they did, credit expansion would cause no malinvestment.”"),
      replies: [
        { text: T("企业家确实会犯错，这是人性。", "Entrepreneurs do make mistakes — that's human nature."), grade: "straw" },
        { text: T("信号是真的、贷款是真的、短期利润是真的：不参与在短期内是亏钱的策略；而且存在囚徒困境——每个人的最优选择都是参与并在别人之前退出。错误集群只需要边际上的企业家被推过可行线。", "The signal is real, the loans are real, the short-run profits are real: abstaining loses money in the short run; and there is a prisoner's dilemma — everyone's best move is to participate and exit before the others. The cluster only needs the marginal entrepreneurs pushed over the viability line."), grade: "best" },
        { text: T("理性预期学派假设人有完美信息，这在现实中不成立，所以整个批评无效。", "Rational expectations assumes perfect information, which is unrealistic, so the whole critique is void."), grade: "over" },
      ],
      why: T("第一条正是米塞斯 1930 年代表述被批评的“企业家是傻瓜”版本；第三条误读了理性预期（它不假设完美信息，只假设不会被系统性地骗）。最强的回应承认企业家是理性的，并说明参与为什么理性——同时这也暴露了理论需要金融市场扩展。", "The first is exactly the “entrepreneurs are fools” version of Mises's 1930s formulation that drew the critique; the third misreads rational expectations (it does not assume perfect information, only no systematic fooling). The strongest reply grants that entrepreneurs are rational and explains why participating is rational — which also exposes the theory's need for a financial-market extension."),
    },
    {
      critic: T("图洛克：为什么是萧条而不是一次性浪费？", "Tullock: why a depression rather than a one-off waste?"),
      claim: T("“就算信用扩张让人建了用不上的工厂，损失就是那些工厂的价值。为什么会有一场持续数年、波及所有行业的衰退？”", "“Even if credit expansion built some useless factories, the loss is the value of those factories. Why a multi-year, economy-wide contraction?”"),
      replies: [
        { text: T("因为政府总会在萧条里干预，把损失放大。", "Because government always intervenes in the bust and amplifies the loss."), grade: "over" },
        { text: T("资本是异质且互补的：半成品矿山意味着配套的铁路、港口、电力、培训好的工程师都失去用途，重新配置沿整条生产链传导。萧条是异质资本网络的连锁重估，不是单点损失。图洛克把资本当成了同质的橡皮泥。", "Capital is heterogeneous and complementary: a half-dug mine means the railway, port, power line and trained engineers built for it lose their purpose too, and re-allocation propagates along the whole chain. A depression is the cascading revaluation of a capital network, not a point loss. Tullock treated capital as homogeneous putty."), grade: "best" },
        { text: T("图洛克是公共选择学派的，不懂周期理论。", "Tullock was a public-choice theorist; he didn't understand cycle theory."), grade: "straw" },
      ],
      why: T("第一条把清算被延长的原因当作萧条存在的原因，混淆了两个问题；第三条是人身攻击。最强的回应直指奥派与主流在资本理论上的根本分歧：资本异质性。", "The first mistakes the reason liquidation is prolonged for the reason a depression exists at all — two different questions; the third is ad hominem. The strongest reply goes straight to the Austrian–mainstream divide in capital theory: heterogeneity."),
    },
    {
      critic: T("经验研究薄弱", "Thin empirical support"),
      claim: T("“一个 90 年历史的理论只能拿出几项小样本、代理变量粗糙、多发在自家期刊的研究。这本身就是证据。”", "“A 90-year-old theory can muster only several small-sample studies with crude proxies, mostly in its own journals. That is itself evidence.”"),
      replies: [
        { text: T("奥派从来不需要经验研究，先验为真就够了。", "Austrians never needed empirical work; a priori truth is enough."), grade: "over" },
        { text: T("主流期刊对奥派有偏见，所以发不出来。", "Mainstream journals are biased against Austrians, so the work can't get published."), grade: "straw" },
        { text: T("方法论上，奥派认为经验研究用于解释而非检验，这是内部一致的立场；国民账户也确实不记录生产阶段。但“先验为真”不是不去展示它在历史中的样子的借口——总产出统计 2014 年才被采纳，说明这件事可以做，而奥派做得太少。这是真实的软肋。", "Methodologically, Austrians hold that empirics explain rather than test — an internally consistent position; and national accounts really do not record stages of production. But “true a priori” is no excuse for not showing what it looks like in history — Gross Output was adopted only in 2014, proving the work can be done, and Austrians have done too little of it. This is a genuine weakness."), grade: "best" },
      ],
      why: T("第一条把方法论当作逃避的借口；第二条把责任全推给别人。最强的回应既陈述了方法论立场，又诚实承认了欠账——这是阶段 14.4 要讲的自我批评。", "The first uses methodology as an excuse to evade; the second shifts all blame outward. The strongest reply states the methodological position and honestly concedes the debt — the self-criticism Stage 14.4 addresses."),
    },
  ];

  let i = 0, picked = null, score = 0, done = [];

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("⚖️ 批评法庭：五组批评，选出最强的奥派回应", "⚖️ Critique court: five critiques — pick the strongest Austrian reply")}</div>
      <div class="demo-row">
        <span class="demo-meta">${T("第", "Card")} <b id="cc-n">1</b> / ${cards.length}　${T("得分：", "Score: ")}<b id="cc-score">0</b></span>
        <span class="demo-btns" style="margin:0"><button class="demo-btn" id="cc-next" disabled>${T("下一张 →", "Next →")}</button><button class="demo-btn" id="cc-reset">${T("⟲ 重来", "⟲ Restart")}</button></span>
      </div>
      <div class="scn" id="cc-card"></div>
      <div class="demo-log" id="cc-log" style="margin-top:12px" hidden></div>
      <div id="cc-summary" hidden></div>
      <p class="demo-tip">${T(
        "三种回应里总有一种是<strong>稻草人 / 人身攻击</strong>，一种是<strong>越界或回避</strong>（把方法论当免死金牌、编造事实），一种是<strong>既回答了要点、又诚实承认让步</strong>的。练习的目的不是背答案，而是学会分辨：一个好回应，通常比你想的更窄，也更硬。",
        "Of the three replies, one is always a <strong>straw man / ad hominem</strong>, one <strong>overreaches or evades</strong> (methodology as an immunity card, invented facts), and one <strong>answers the point while honestly conceding what must be conceded</strong>. The goal is not to memorize answers but to learn the tell: a good reply is usually narrower than you expect — and harder."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const paintCard = () => {
    const c = cards[i];
    $("cc-n").textContent = i + 1;
    $("cc-score").textContent = score;
    $("cc-card").innerHTML = `
      <div class="scn-q"><b>${c.critic}</b></div>
      <blockquote style="margin:0 0 12px;padding-left:12px;border-left:3px solid var(--blue);color:var(--text);font-size:14px;line-height:1.6">${c.claim}</blockquote>
      <div class="demo-label">${T("哪一个是最强的奥派回应？", "Which is the strongest Austrian reply?")}</div>
      <div class="demo-btns" style="flex-direction:column;align-items:stretch">
        ${c.replies.map((r, k) => `<button class="demo-btn ${picked === k ? "active" : ""}" data-r="${k}" style="text-align:left;line-height:1.5;${picked != null ? (r.grade === "best" ? "border-color:var(--green);" : picked === k ? "border-color:var(--red);" : "opacity:.6;") : ""}" ${picked != null ? "disabled" : ""}>${String.fromCharCode(65 + k)}. ${r.text}${picked != null ? ` <span class="pill ${r.grade === "best" ? "ok" : "bad"}">${r.grade === "best" ? T("最强", "strongest") : r.grade === "straw" ? T("稻草人 / 人身攻击", "straw man / ad hominem") : T("越界 / 回避", "overreach / evasion")}</span>` : ""}</button>`).join("")}
      </div>`;
    root.querySelectorAll("[data-r]").forEach((b) => b.addEventListener("click", () => {
      if (picked != null) return;
      picked = +b.dataset.r;
      const ok = c.replies[picked].grade === "best";
      if (ok) score++;
      done.push(ok);
      $("cc-log").hidden = false;
      $("cc-log").innerHTML = `<div class="${ok ? "ok" : "bad"}">${ok ? T("✔ 正确。", "✔ Correct.") : T("✘ 不是最强的。", "✘ Not the strongest.")}</div><div>${c.why}</div>`;
      $("cc-next").disabled = false;
      paintCard();
    }));
  };

  const paintSummary = () => {
    $("cc-card").innerHTML = "";
    $("cc-log").hidden = true;
    $("cc-summary").hidden = false;
    $("cc-summary").innerHTML = `
      <div class="done-banner">${T("法庭休庭。得分", "Court adjourned. Score")} ${score} / ${cards.length}。${score === cards.length ? T("你已经能分辨稻草人、越界与真正的回应了。", "You can now tell straw men, overreach and real replies apart.") : T("回头看看错的那几张：弱回应的共同点是——要么攻击人，要么拒绝承认任何让步。", "Look back at the ones you missed: weak replies either attack the person or refuse to concede anything.")}</div>
      <div class="cmp">
        <div class="cmp-cell hl"><h5>${T("批评之后，ABCT 仍然声称", "After the critiques, ABCT still claims")}</h5>
          <div style="font-size:13.5px;line-height:1.6">${T("· 信用扩张（非真实储蓄）压低利率，会系统性地把资本引向对折现率最敏感的项目<br>· 这些项目在真实储蓄下无法全部完成——繁荣不可持续<br>· 清算必然到来，且集中在那些项目上<br>· 阻止清算会延长萧条", "· Credit expansion (not real saving) that depresses the rate systematically steers capital toward the projects most sensitive to the discount rate<br>· They cannot all be completed with actual saving — the boom is unsustainable<br>· Liquidation must come, and concentrates in those projects<br>· Blocking liquidation prolongs the bust")}</div></div>
        <div class="cmp-cell cold"><h5>${T("ABCT 不声称（奥派的让步）", "ABCT does not claim (the Austrian concessions)")}</h5>
          <div style="font-size:13.5px;line-height:1.6">${T("· 不解释萧条的深度与长度——那由二次紧缩、杠杆、政策决定（阶段 5.3）<br>· 不靠“企业家是傻瓜”——需要金融市场扩展来说明理性参与（阶段 10.3）<br>· 不预测时点——“不可持续”不等于“即将发生”；奥派确实预测了太多次萧条（阶段 14.4）<br>· 不覆盖外生冲击造成的衰退（阶段 5.4）", "· Does not explain the depth or length of the bust — set by secondary deflation, leverage and policy (Stage 5.3)<br>· Does not rest on “entrepreneurs are fools” — needs a financial-market extension to explain rational participation (Stage 10.3)<br>· Does not predict timing — “unsustainable” is not “imminent”; Austrians really have predicted too many busts (Stage 14.4)<br>· Does not cover recessions from exogenous shocks (Stage 5.4)")}</div></div>
      </div>`;
  };

  $("cc-next").addEventListener("click", () => {
    i++; picked = null; $("cc-next").disabled = true; $("cc-log").hidden = true;
    if (i >= cards.length) paintSummary(); else paintCard();
  });
  $("cc-reset").addEventListener("click", () => { i = 0; picked = null; score = 0; done = []; $("cc-summary").hidden = true; $("cc-next").disabled = true; $("cc-log").hidden = true; paintCard(); });
  paintCard();
}
