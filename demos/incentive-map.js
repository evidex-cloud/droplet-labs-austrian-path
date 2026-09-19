// 交互演示：激励地图——面板一：一项净值为负的计划能不能通过？
// 四张角色卡（选民 / 政治家 / 官僚 / 游说者），调“每个选民的成本”与“每个游说者的收益”，
// 真算：每方行动的动机（收益 − 行动成本）、政治压力对比、净值、通过与否。
// 面板二：尼斯卡宁式预算最大化——官僚在没有利润与亏损的情况下，把预算推到立法机构愿付的上限。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);
  const fmt = (v) => {
    const a = Math.abs(v);
    if (a >= 1e8) return (v / 1e8).toFixed(2).replace(/\.?0+$/, "") + T(" 亿", "00M");
    if (a >= 1e4) return (v / 1e4).toFixed(1).replace(/\.?0+$/, "") + T(" 万", "0k");
    return Math.round(v).toString();
  };
  const fmtEn = (v) => {
    const a = Math.abs(v);
    if (a >= 1e9) return (v / 1e9).toFixed(2).replace(/\.?0+$/, "") + "B";
    if (a >= 1e6) return (v / 1e6).toFixed(1).replace(/\.?0+$/, "") + "M";
    if (a >= 1e3) return (v / 1e3).toFixed(1).replace(/\.?0+$/, "") + "k";
    return Math.round(v).toString();
  };
  const F = en ? fmtEn : fmt;
  const pct = (v) => Math.round(v) + "%";

  // ---- 面板一参数 ----
  const VOTERS = 10_000_000;     // 纳税人
  const LOBBY = 1000;            // 受益企业
  const LEAK = 0.4;              // 转移中蒸发的比例（无谓损失 + 行政）
  const ACT_COST_VOTER = 60;     // 选民弄清并反对一项政策的成本（时间折算）
  const ACT_COST_LOBBY = 8000;   // 一家企业参与游说的固定成本
  let costPerVoter = 10;
  let benefitPerLobby = 60000;

  // ---- 面板二参数 ----
  const OPT_BUDGET = 50;         // 百万：真正“最优”的机构规模（边际收益 = 边际成本）
  let budget = 50;
  let plTest = false;            // 是否有利润与亏损检验

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🗺️ 激励地图：为什么净值为负的计划会通过，为什么机构只会长大", "🗺️ Incentive map: why a negative-value programme passes, and why bureaus only grow")}</div>

      <div class="demo-block">
        <label class="demo-label">${T("面板一 · 一项计划：向 1000 万纳税人征税，补贴给 1000 家企业", "Panel 1 · A programme: tax 10 million taxpayers, subsidise 1,000 firms")}</label>
        <div class="demo-grid">
          <div>
            <label class="demo-label">${T("每个选民的成本：", "Cost per voter: ")}<b id="im-cv">10</b></label>
            <input class="demo-slider" id="im-cv-s" type="range" min="1" max="200" step="1" value="10" />
          </div>
          <div>
            <label class="demo-label">${T("每个游说者的收益：", "Benefit per lobbyist: ")}<b id="im-bl">60000</b></label>
            <input class="demo-slider" id="im-bl-s" type="range" min="1000" max="600000" step="1000" value="60000" />
          </div>
        </div>
        <div class="demo-grid" id="im-cards"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("总成本", "Total cost")}</div><div class="v neg" id="im-cost">–</div></div>
          <div class="stat"><div class="k">${T("总收益", "Total benefit")}</div><div class="v" id="im-ben">–</div></div>
          <div class="stat"><div class="k">${T("社会净值", "Net social value")}</div><div class="v" id="im-net">–</div></div>
          <div class="stat"><div class="k">${T("结果", "Outcome")}</div><div class="v acc" id="im-res">–</div></div>
        </div>
        <div class="bar2"><span class="lab">${T("反对压力", "Pressure against")}</span><div class="track"><div class="fill" id="im-p-against" style="background:var(--blue)"></div></div><span class="val" id="im-p-against-v">–</span></div>
        <div class="bar2"><span class="lab">${T("支持压力", "Pressure for")}</span><div class="track"><div class="fill" id="im-p-for" style="background:var(--orange)"></div></div><span class="val" id="im-p-for-v">–</span></div>
        <div class="demo-log" id="im-log1"></div>
      </div>

      <div class="demo-block">
        <label class="demo-label">${T("面板二 · 你是一个机构的负责人：把预算定在哪？", "Panel 2 · You run a bureau: where do you set the budget?")}</label>
        <div class="demo-row">
          <div class="demo-seg" id="im-pl"><button data-v="0" class="on">${T("无利润与亏损检验（政府机构）", "No profit-and-loss test (government bureau)")}</button><button data-v="1">${T("有利润与亏损检验（企业）", "Profit-and-loss test (a firm)")}</button></div>
        </div>
        <label class="demo-label">${T("预算（百万）：", "Budget (millions): ")}<b id="im-bud">50</b></label>
        <input class="demo-slider" id="im-bud-s" type="range" min="10" max="150" step="5" value="50" />
        <div class="stat-row">
          <div class="stat"><div class="k">${T("给公众的价值", "Value to the public")}</div><div class="v" id="im-val">–</div></div>
          <div class="stat"><div class="k">${T("成本", "Cost")}</div><div class="v" id="im-bcost">–</div></div>
          <div class="stat"><div class="k">${T("公众净值", "Net to the public")}</div><div class="v" id="im-bnet">–</div></div>
          <div class="stat"><div class="k">${T("负责人的回报", "Chief's payoff")}</div><div class="v acc" id="im-chief">–</div></div>
        </div>
        <div class="demo-log" id="im-log2"></div>
      </div>

      <p class="demo-tip">${T(
        "面板一：把“每个选民的成本”拖到 60 以上，选民才有动机反对——但那时总成本已经是 6 亿。在此之前，无论净值多负，计划都会通过：<strong>决定结果的不是净值，是谁有动机行动</strong>。面板二：在“无利润与亏损”下，公众净值在 50 就见顶，但负责人的回报一直随预算涨——他会推到 150；切到“企业”，亏损立刻让他停在 50。这就是米塞斯《官僚制》与尼斯卡宁模型的合体。",
        "Panel 1: drag “cost per voter” above 60 before voters have any motive to oppose — but by then the total cost is 600M. Below that, the programme passes however negative its net value: <strong>what decides the outcome is not net value but who has a motive to act</strong>. Panel 2: with no profit-and-loss test, net value to the public peaks at 50, yet the chief's payoff keeps rising with the budget — he pushes to 150; switch to “a firm” and losses stop him at 50. Mises's Bureaucracy and Niskanen's model in one picture."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const paint1 = () => {
    $("im-cv").textContent = costPerVoter;
    $("im-bl").textContent = benefitPerLobby;
    const totalCost = VOTERS * costPerVoter;
    const totalBen = LOBBY * benefitPerLobby;
    // 受益者拿到的总额受限于征来的钱扣除蒸发
    const deliverable = totalCost * (1 - LEAK);
    const actualBen = Math.min(totalBen, deliverable);
    const net = actualBen - totalCost;

    // 行动动机 = 个人得失 − 行动成本；若 ≤ 0 就不行动（理性无知 / 搭便车）
    const voterMotive = costPerVoter - ACT_COST_VOTER;
    const lobbyMotive = Math.min(benefitPerLobby, deliverable / LOBBY) - ACT_COST_LOBBY;
    const votersActing = voterMotive > 0 ? VOTERS * Math.min(1, voterMotive / 200) : 0;
    const lobbyActing = lobbyMotive > 0 ? LOBBY : 0;
    // 政治压力：行动的人数 × 人均投入（投入 ≈ 动机的一部分）
    const pressAgainst = votersActing * Math.max(0, voterMotive) * 0.3;
    const pressFor = lobbyActing * Math.max(0, lobbyMotive) * 0.3;
    const passes = pressFor > pressAgainst;

    const politicianGain = pressFor * 0.05;
    const bureauGain = totalCost * 0.08;

    const cards = [
      { icon: "🗳️", who: T("选民 × 1000 万", "Voters × 10M"), line1: T("每人损失 ", "each loses ") + F(costPerVoter), line2: T("弄清并反对的成本 ≈ ", "cost of learning & opposing ≈ ") + F(ACT_COST_VOTER), verdict: voterMotive > 0 ? T("值得行动", "worth acting") : T("理性地无知", "rationally ignorant"), ok: voterMotive > 0 },
      { icon: "💼", who: T("游说者 × 1000", "Lobbyists × 1,000"), line1: T("每家得 ", "each gains ") + F(Math.min(benefitPerLobby, deliverable / LOBBY)), line2: T("游说的固定成本 ≈ ", "fixed cost of lobbying ≈ ") + F(ACT_COST_LOBBY), verdict: lobbyMotive > 0 ? T("雇游说者", "hires lobbyists") : T("不值得游说", "not worth lobbying"), ok: lobbyMotive > 0 },
      { icon: "🎙️", who: T("政治家", "Politician"), line1: T("献金 + 选票 ≈ ", "donations + votes ≈ ") + F(politicianGain), line2: T("反对者的选票威胁 ≈ ", "threat from opponents ≈ ") + F(pressAgainst * 0.05), verdict: passes ? T("投赞成", "votes yes") : T("投反对", "votes no"), ok: passes },
      { icon: "🏛️", who: T("官僚", "Bureaucrat"), line1: T("新增管理预算 ≈ ", "new admin budget ≈ ") + F(bureauGain), line2: T("（总成本的 8% 用于“执行”）", "(8% of total cost goes to “administration”)"), verdict: T("支持——多一个项目", "supports — one more programme"), ok: true },
    ];
    $("im-cards").innerHTML = cards.map((c) => `
      <div class="cmp-cell ${c.ok ? "hl" : ""}">
        <h5>${c.icon} ${c.who}</h5>
        <div style="font-size:13px">${c.line1}</div>
        <div style="font-size:12.5px;color:var(--muted)">${c.line2}</div>
        <div style="margin-top:6px"><span class="pill ${c.ok ? "ok" : "bad"}">${c.verdict}</span></div>
      </div>`).join("");

    $("im-cost").textContent = F(totalCost);
    $("im-ben").textContent = F(actualBen);
    $("im-net").textContent = (net >= 0 ? "+" : "−") + F(Math.abs(net));
    $("im-net").className = "v " + (net >= 0 ? "pos" : "neg");
    $("im-res").textContent = passes ? T("通过", "PASSES") : T("否决", "FAILS");
    $("im-res").className = "v " + (passes ? (net < 0 ? "neg" : "pos") : "pos");

    const maxP = Math.max(pressFor, pressAgainst, 1);
    $("im-p-against").style.width = pct((pressAgainst / maxP) * 100);
    $("im-p-for").style.width = pct((pressFor / maxP) * 100);
    $("im-p-against-v").textContent = F(pressAgainst);
    $("im-p-for-v").textContent = F(pressFor);

    const lines = [];
    if (passes && net < 0) lines.push(`<span class="bad">${T("净值 " + (net >= 0 ? "+" : "−") + F(Math.abs(net)) + "，却通过了：1000 家企业每家有 " + F(lobbyMotive) + " 的净动机去游说；1000 万选民每人的动机是 " + F(voterMotive) + "——负数，所以没人行动。", "Net value " + (net >= 0 ? "+" : "−") + F(Math.abs(net)) + ", yet it passes: each of 1,000 firms has a net motive of " + F(lobbyMotive) + " to lobby; each of 10 million voters has a motive of " + F(voterMotive) + " — negative, so nobody acts.")}</span>`);
    else if (!passes && net < 0) lines.push(`<span class="ok">${T("否决。每个选民的损失已经大到值得行动（" + F(costPerVoter) + " > 行动成本 " + F(ACT_COST_VOTER) + "），分散的成本终于被“看见”了——注意这时总成本已经是 " + F(totalCost) + "。", "Fails. The loss per voter is now large enough to act on (" + F(costPerVoter) + " > action cost " + F(ACT_COST_VOTER) + "); the dispersed cost finally became “seen” — note the total cost is already " + F(totalCost) + ".")}</span>`);
    else if (!passes) lines.push(`<span class="warn">${T("游说者的人均收益不够覆盖游说成本，没人推动它——哪怕它净值为正。政治市场对“分散的收益”同样迟钝。", "The per-lobbyist gain does not cover the cost of lobbying, so nobody pushes it — even though net value is positive. The political market is just as deaf to dispersed benefits.")}</span>`);
    else lines.push(T("净值为正且通过——这是少数情况。注意它通过的原因仍然是集中的收益，而不是净值。", "Positive net value and it passes — the rarer case. Note that it passes because of concentrated benefits, still not because of net value."));
    lines.push(T("蒸发的 " + pct(LEAK * 100) + "（" + F(totalCost * LEAK) + "）= 无谓损失 + 行政 + 寻租开支；塔洛克：争夺特权的花费本身就是社会损失。", pct(LEAK * 100) + " evaporates (" + F(totalCost * LEAK) + ") = deadweight loss + administration + rent-seeking outlays; Tullock: spending to win the privilege is itself a social loss."));
    $("im-log1").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  // 面板二：公众价值 V(B) 凹函数，在 OPT_BUDGET 处边际价值 = 1；成本 = B
  // 公众价值 V(B)：凹函数，在 B = 50 处边际价值恰好 = 1（= 边际成本），所以公众净值在 50 见顶
  const value = (B) => 100 * Math.log(1 + B / 50) + 0.25 * B - 0.0025 * B * B;
  const paint2 = () => {
    $("im-bud").textContent = budget;
    const val = value(budget);
    const cost = budget;
    const net = val - cost;
    const netOpt = value(OPT_BUDGET) - OPT_BUDGET;
    // 负责人回报：无检验 → 随预算涨（薪酬、人手、地位）；有检验 → 与净值挂钩，亏损被淘汰
    const chief = plTest ? net : 0.6 * budget + 0.4 * Math.max(0, val - cost * 0.5);
    $("im-val").textContent = val.toFixed(1) + "M";
    $("im-bcost").textContent = cost.toFixed(1) + "M";
    $("im-bnet").textContent = (net >= 0 ? "+" : "") + net.toFixed(1) + "M";
    $("im-bnet").className = "v " + (net >= netOpt - 0.5 ? "pos" : net >= 0 ? "" : "neg");
    $("im-chief").textContent = chief.toFixed(1);
    const lines = [];
    if (!plTest) {
      if (budget > OPT_BUDGET + 2) lines.push(`<span class="bad">${T("预算 " + budget + "M 超过“最优”50M：公众净值从 " + netOpt.toFixed(1) + " 掉到 " + net.toFixed(1) + "，但你的回报还在涨。立法机构不知道你的真实成本，只看到“服务更多了”。", "Budget " + budget + "M exceeds the “optimum” of 50M: net value to the public falls from " + netOpt.toFixed(1) + " to " + net.toFixed(1) + ", but your payoff keeps rising. The legislature does not know your true costs; it only sees “more services.”")}</span>`);
      else if (budget < OPT_BUDGET - 2) lines.push(`<span class="warn">${T("预算低于最优——但你没有任何理由停在这里：多要一点，回报就多一点，而且没人能证明你错。", "Below the optimum — but you have no reason to stop here: ask for more and your payoff rises, and nobody can prove you wrong.")}</span>`);
      else lines.push(`<span class="warn">${T("恰好在 50M——可是你怎么知道的？没有价格告诉你这里是最优点。拖到 150 看看你的回报。", "Exactly at 50M — but how would you know? No price tells you this is the optimum. Drag to 150 and watch your payoff.")}</span>`);
      lines.push(T("米塞斯（1944）：没有利润与亏损，机构只能靠规则与预算管理；尼斯卡宁（1971）：负责人会把预算推到立法机构愿付的上限。", "Mises (1944): without profit and loss a bureau can only be run by rules and budgets; Niskanen (1971): the chief pushes the budget to the ceiling the legislature will pay."));
    } else {
      if (budget > OPT_BUDGET + 2) lines.push(`<span class="bad">${T("亏损：每多花 1 元只换回不到 1 元的价值。股东或市场会让你收缩到 50M——你的回报就是净值本身。", "A loss: every extra 1 spent returns less than 1 in value. Owners or the market will shrink you back to 50M — your payoff is the net value itself.")}</span>`);
      else if (budget < OPT_BUDGET - 2) lines.push(`<span class="ok">${T("每多花 1 元能换回超过 1 元——扩张有利可图，利润在告诉你“继续”。", "Every extra 1 spent returns more than 1 — expansion is profitable; profit is telling you “keep going.”")}</span>`);
      else lines.push(`<span class="ok">${T("停在 50M：边际收益 = 边际成本。你不需要知道这个数字，利润与亏损替你找到了它。", "Stop at 50M: marginal value = marginal cost. You did not need to know the number; profit and loss found it for you.")}</span>`);
      lines.push(T("同一个人、同一份工作——换一个反馈系统，行为完全不同。这就是为什么“让政府像企业一样运营”是空话：企业的反馈来自可以拒绝付款的消费者。", "Same person, same job — a different feedback system, entirely different behaviour. That is why “run government like a business” is empty: a firm's feedback comes from customers who can refuse to pay."));
    }
    $("im-log2").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("im-cv-s").addEventListener("input", (e) => { costPerVoter = +e.target.value; paint1(); });
  $("im-bl-s").addEventListener("input", (e) => { benefitPerLobby = +e.target.value; paint1(); });
  $("im-bud-s").addEventListener("input", (e) => { budget = +e.target.value; paint2(); });
  $("im-pl").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-v]"); if (!b) return;
    plTest = b.dataset.v === "1";
    root.querySelectorAll("#im-pl button").forEach((x) => x.classList.toggle("on", x.dataset.v === b.dataset.v));
    paint2();
  });
  paint1();
  paint2();
}
