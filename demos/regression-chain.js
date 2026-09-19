// 交互演示：回归定理之链——模式一：沿比特币的价值史逐站检查“定理的哪一条件被满足”；
// 模式二：试着从零启动一个全新代币，看没有任何“先前评价”时采用为何起不来（示意模型，非预测）。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // ---------- 模式一：里程碑（近似，标注为示意） ----------
  // cond: a = 先前非货币评价 / b = 先前价格历史 / c = 普遍接受为交换媒介
  // 值：1 = 满足，0 = 不满足，2 = 有争议
  const steps = [
    { when: "2009.01", title: T("创世区块：价格 = 0", "Genesis block: price = 0"),
      desc: T("没有任何市场、任何报价。几十个人为“试一试这个协议”花电费挖矿。", "No market, no quote. A few dozen people spend electricity mining ‘to try the protocol’."),
      key: { a: 2, b: 0, c: 0 },
      note: T("条件 a 是整场辩论的焦点：Šurda/Graf/Davidson-Block 说“收藏/实验/意识形态用途”算非货币评价；Shostak/Gertchev 说那只是对未来货币性的投机。b、c 显然不满足。", "Condition a is the whole debate: Šurda/Graf/Davidson-Block count the collectible/experimental/ideological use as non-monetary valuation; Shostak/Gertchev call it speculation on future money-ness. b and c are plainly unmet.") },
    { when: "2009.10", title: T("首个报价：约 1,309 枚 = 1 美元", "First quote: about 1,309 BTC = $1"),
      desc: T("New Liberty Standard 按挖矿电费折算出一个汇率。不是市场成交价，但它是第一个“可以被记住”的数字。", "New Liberty Standard derives a rate from mining electricity cost. Not a market trade, but the first number that could be ‘remembered’."),
      key: { a: 1, b: 1, c: 0 },
      note: T("从这一站起，回归定理的“昨天的购买力”有了参照物；但它是成本推算，不是交换价格。", "From here the theorem's ‘yesterday's purchasing power’ has a referent — though it is a cost estimate, not an exchange price.") },
    { when: "2010.05", title: T("披萨日：10,000 枚换两个披萨", "Pizza Day: 10,000 BTC for two pizzas"),
      desc: T("第一次用比特币换到实物（当时约 25–41 美元）。", "First exchange of bitcoin for a real good (about $25–41 at the time)."),
      key: { a: 1, b: 1, c: 0 },
      note: T("第一个真正的交换价格。链条从此接上，之后再也不会回到“零参照”。", "The first genuine exchange price. The chain is connected and will never again lack a referent.") },
    { when: "2010.07", title: T("Mt. Gox 开张：连续报价", "Mt. Gox opens: continuous quotes"),
      desc: T("有了持续的买卖盘，价格历史变成一条线而不是几个点。", "Continuous bids and asks turn the price history from dots into a line."),
      key: { a: 1, b: 1, c: 0 },
      note: T("这是“次级交换媒介”的起点：流动性很高，但几乎没人拿它买日用品。", "This is where the ‘secondary medium of exchange’ begins: highly liquid, hardly used for groceries.") },
    { when: "2013–14", title: T("首次破千美元；Mt. Gox 倒闭", "First $1,000; Mt. Gox collapses"),
      desc: T("交易所倒闭、约 85 万枚丢失，价格腰斩——但没有归零。", "The exchange fails, roughly 850k BTC lost, price halves — but does not go to zero."),
      key: { a: 1, b: 1, c: 0 },
      note: T("回归定理只要求链条不断；价格暴跌不等于链条断裂。托管风险的教训留到阶段 17.5。", "The theorem only needs the chain unbroken; a crash is not a break. The custody lesson waits for Stage 17.5.") },
    { when: "2021.09", title: T("萨尔瓦多定为法币", "El Salvador makes it legal tender"),
      desc: T("政府发钱包、送 30 美元；多数人领完补贴即停用；2025 年取消强制接受。", "Government wallet and $30 bonus; most users stop after the bonus; mandatory acceptance repealed in 2025."),
      key: { a: 1, b: 1, c: 0 },
      note: T("法令没有制造出普遍接受。这与阶段 4.1 反驳国家货币论的立场一致。", "A decree did not manufacture general acceptance — consistent with Stage 4.1's rejection of the state theory of money.") },
    { when: "2024.01", title: T("美国现货 ETF 获批", "US spot ETFs approved"),
      desc: T("一年内流入数百亿美元；持有更方便，支付没有更方便。", "Tens of billions flow in within a year; easier to hold, no easier to pay with."),
      key: { a: 1, b: 1, c: 0 },
      note: T("机构接受强化的是“货币资产”那一面。按米塞斯定义，c 仍未满足。", "Institutional acceptance strengthens the ‘monetary asset’ side. By Mises's definition, c is still unmet.") },
  ];
  const condLabel = {
    a: T("a · 先有非货币的评价（有人为它本身付出代价）", "a · Prior non-monetary valuation (someone paid a cost for it as such)"),
    b: T("b · 先有一段价格历史（“昨天的购买力”可参照）", "b · Prior price history (“yesterday's purchasing power” to refer to)"),
    c: T("c · 被普遍接受为交换媒介（米塞斯的“货币”）", "c · Generally accepted medium of exchange (Mises's “money”)"),
  };

  let mode = "chain", step = 0, checked = { a: false, b: false, c: false }, verdicts = [];

  // ---------- 模式二：从零启动代币（示意模型） ----------
  let boot = { u0: 0, n0: 50, air: 0 };

  function simulateBoot() {
    // 示意：p0 = 初始非货币评价（美元/枚）；采用率 n；每轮：有参照价才有人愿意“为转售而收”。
    const N = 10000, rounds = 16;
    const P = [], A = [];
    let p = boot.u0 * 0.02, n = boot.n0;
    for (let t = 0; t <= rounds; t++) {
      P.push(p); A.push(n);
      const hasRef = p > 0;
      // 网络增长：只有存在参照价格时，新人才能评估“收了能不能再花出去”
      const organic = hasRef ? 0.35 * n * (1 - n / N) : 0;
      // 空投/营销：直接塞给新人代币；没有参照价时他们只能弃置（对价格无支撑）
      const dropped = boot.air * 40;
      const dumpers = hasRef ? dropped * 0.6 : dropped; // 大多数空投用户会卖
      n = Math.min(N, n + organic + (hasRef ? dropped * 0.4 : 0));
      if (hasRef) {
        const demandGrowth = organic / Math.max(n, 1);
        const sellPressure = dumpers / Math.max(n, 1);
        p = Math.max(0, p * (1 + 1.2 * demandGrowth - 0.8 * sellPressure));
      }
    }
    return { P, A };
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("⛓️ 回归定理之链：比特币的“之前”在哪里？", "⛓️ The regression chain: where is Bitcoin's “before”?")}</div>
      <div class="demo-row" style="margin-bottom:10px">
        <div class="demo-seg" id="rc-seg">
          <button class="on" data-m="chain">${T("模式一 · 沿价值史检查定理", "Mode 1 · Check the theorem along the history")}</button>
          <button data-m="boot">${T("模式二 · 从零启动一个新代币", "Mode 2 · Bootstrap a brand-new token")}</button>
        </div>
      </div>
      <div id="rc-body"></div>
      <p class="demo-tip" id="rc-tip"></p>
    </div>`;

  const body = root.querySelector("#rc-body");
  const tip = root.querySelector("#rc-tip");

  function paintChain() {
    const s = steps[step];
    body.innerHTML = `
      <div class="demo-block">
        <div class="tl">${steps.map((x, i) => `<div class="tl-item ${i > step ? "dim" : ""}" style="${i === step ? "font-weight:700;color:var(--ink)" : ""}"><span class="when">${x.when}</span>${x.title}</div>`).join("")}</div>
      </div>
      <div class="demo-block">
        <div class="scn">
          <div class="scn-q"><span class="pill">${s.when}</span> ${s.title}</div>
          <div class="scn-meta">${s.desc}</div>
          <div style="margin-top:12px;display:flex;flex-direction:column;gap:6px">
            ${["a", "b", "c"].map((k) => `<label class="demo-check"><input type="checkbox" data-c="${k}" ${checked[k] ? "checked" : ""}/> ${condLabel[k]}</label>`).join("")}
          </div>
          <div class="demo-btns" style="margin-top:12px">
            <button class="demo-btn" id="rc-check">${T("检查这一站", "Check this step")}</button>
            <button class="demo-btn" id="rc-prev" ${step === 0 ? "disabled" : ""}>${T("← 上一站", "← Previous")}</button>
            <button class="demo-btn" id="rc-next" ${step === steps.length - 1 ? "disabled" : ""}>${T("下一站 →", "Next →")}</button>
            <button class="demo-btn" id="rc-reset">${T("重来", "Reset")}</button>
          </div>
        </div>
        <div class="demo-log" id="rc-log">${verdicts[step] || `<span style="color:var(--muted)">${T("勾选你认为在这一站已经满足的条件，然后点“检查”。", "Tick the conditions you think are satisfied at this step, then press “Check.”")}</span>`}</div>
      </div>`;
    tip.innerHTML = T(
      "看一件事：条件 <strong>c</strong>（普遍接受）在每一站都没被打勾——这就是“满足回归定理”与“是货币”的区别。争议只发生在第一站的条件 a。",
      "Notice one thing: condition <strong>c</strong> (general acceptance) is never ticked at any step — that is the difference between “satisfies the regression theorem” and “is money.” The only contested box is condition a at step one."
    );
    body.querySelectorAll("[data-c]").forEach((cb) => cb.addEventListener("change", () => { checked[cb.dataset.c] = cb.checked; }));
    body.querySelector("#rc-check").addEventListener("click", () => {
      const lines = [];
      let score = 0;
      for (const k of ["a", "b", "c"]) {
        const want = s.key[k], got = checked[k];
        if (want === 2) {
          lines.push(`<span class="warn">${condLabel[k]} → ${T("有争议", "contested")}：${got ? T("你站在 Šurda/Graf 一边", "you side with Šurda/Graf") : T("你站在 Shostak/Gertchev 一边", "you side with Shostak/Gertchev")}</span>`);
          score++;
        } else if ((want === 1) === got) {
          lines.push(`<span class="ok">✓ ${condLabel[k]} → ${want ? T("满足", "satisfied") : T("不满足", "not satisfied")}</span>`);
          score++;
        } else {
          lines.push(`<span class="bad">✗ ${condLabel[k]} → ${want ? T("其实已满足", "actually satisfied") : T("其实不满足", "actually not satisfied")}</span>`);
        }
      }
      lines.push(`<div style="margin-top:4px">${s.note}</div>`);
      lines.push(`<div><b>${score}/3</b> ${T("与文献一致", "in line with the literature")}</div>`);
      verdicts[step] = lines.map((l) => `<div>${l}</div>`).join("");
      body.querySelector("#rc-log").innerHTML = verdicts[step];
    });
    body.querySelector("#rc-prev").addEventListener("click", () => { step = Math.max(0, step - 1); checked = { a: false, b: false, c: false }; paintChain(); });
    body.querySelector("#rc-next").addEventListener("click", () => { step = Math.min(steps.length - 1, step + 1); checked = { a: false, b: false, c: false }; paintChain(); });
    body.querySelector("#rc-reset").addEventListener("click", () => { step = 0; checked = { a: false, b: false, c: false }; verdicts = []; paintChain(); });
  }

  function paintBoot() {
    const { P, A } = simulateBoot();
    const last = P.length - 1;
    const pc = lineChart({ fns: [{ f: (x) => P[Math.round(x)] || 0, cls: "line" }], lo: 0, hi: last, samples: last, xlabel: T("回合", "Round"), forceZero: true, uid: "rc-p" });
    const ac = lineChart({ fns: [{ f: (x) => A[Math.round(x)] || 0, cls: "line2" }], lo: 0, hi: last, samples: last, xlabel: T("回合", "Round"), forceZero: true, uid: "rc-a" });
    const hasRef = boot.u0 > 0;
    const verdict = !hasRef
      ? `<span class="bad">${T("初始评价 = 0 → 没有任何参照价格 → 没有人能评估“收了它能不能再花出去” → 采用曲线是一条平线。", "Initial valuation = 0 → no reference price → nobody can evaluate whether they could spend it on → the adoption curve is flat.")}</span>`
      : `<span class="ok">${T("哪怕初始评价很小，只要非零，回归定理的链条就能接上：今天的人参照昨天的价格。之后采用和价格互相拉动（阶段 15.1 的网络效应）。", "Even a tiny initial valuation, as long as it is non-zero, lets the chain connect: today's people refer to yesterday's price. From there adoption and price pull each other (Stage 15.1's network effects).")}</span>`;
    const airNote = boot.air > 0
      ? (hasRef
        ? `<span class="warn">${T("空投带来用户，但多数人立刻卖出——价格被压，采用却更快。营销能加速，不能替代第一环。", "Airdrops bring users, but most sell at once — price is pressured while adoption speeds up. Marketing can accelerate; it cannot replace the first link.")}</span>`
        : `<span class="bad">${T("空投了一堆“值零”的代币：收到的人无法评价它，只能弃置。营销预算 ≠ 先前评价。", "You airdropped tokens ‘worth zero’: recipients cannot value them and drop them. A marketing budget is not a prior valuation.")}</span>`)
      : "";
    body.innerHTML = `
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("初始非货币评价（美分/枚，示意）", "Initial non-monetary valuation (cents per token, illustrative)")}：<b id="rc-u0">${(boot.u0 * 2).toFixed(0)}</b></label>
          <input class="demo-slider" type="range" min="0" max="10" step="1" value="${boot.u0}" data-b="u0" />
          <label class="demo-label" style="margin-top:8px">${T("初始社区人数", "Initial community size")}：<b id="rc-n0">${boot.n0}</b></label>
          <input class="demo-slider" type="range" min="10" max="500" step="10" value="${boot.n0}" data-b="n0" />
          <label class="demo-label" style="margin-top:8px">${T("空投/营销预算（0–10）", "Airdrop / marketing budget (0–10)")}：<b id="rc-air">${boot.air}</b></label>
          <input class="demo-slider" type="range" min="0" max="10" step="1" value="${boot.air}" data-b="air" />
          <div class="stat-row">
            <div class="stat"><div class="k">${T("第 16 回合价格", "Price at round 16")}</div><div class="v ${P[last] > 0 ? "pos" : "neg"}">$${P[last].toFixed(3)}</div></div>
            <div class="stat"><div class="k">${T("采用人数", "Adopters")}</div><div class="v">${Math.round(A[last]).toLocaleString()}</div></div>
            <div class="stat"><div class="k">${T("链条", "Chain")}</div><div class="v ${hasRef ? "pos" : "neg"}">${hasRef ? T("已接上", "connected") : T("断的", "broken")}</div></div>
          </div>
        </div>
        <div class="demo-block">
          <div class="demo-label">${T("价格（美元/枚）", "Price ($ per token)")}</div>
          ${chartBlock(pc, [["var(--orange)", T("价格", "price")]])}
          <div class="demo-label">${T("采用人数", "Adopters")}</div>
          ${chartBlock(ac, [["var(--blue)", T("采用者", "adopters")]])}
        </div>
      </div>
      <div class="demo-block"><div class="demo-log"><div>${verdict}</div>${airNote ? `<div>${airNote}</div>` : ""}<div style="color:var(--muted)">${T("这是一个示意模型：它只表达“采用需要一个非零的参照评价”这一逻辑，不模拟任何真实代币，更不是预测。", "An illustrative model only: it expresses the logic ‘adoption needs a non-zero reference valuation’; it simulates no real token and forecasts nothing.")}</div></div></div>`;
    tip.innerHTML = T(
      "把“初始评价”拖到 0，再把营销拉满：曲线纹丝不动。把初始评价拖到 1（仅 2 美分）：链条接上，采用开始自我强化。<strong>定理要求的是“非零”，不是“很大”</strong>——这正是比特币争论的全部内容：2009 年那一点点评价到底有没有。",
      "Drag the initial valuation to 0 and max out marketing: nothing moves. Drag it to 1 (just 2 cents): the chain connects and adoption starts feeding on itself. <strong>The theorem needs “non-zero,” not “large”</strong> — which is the whole Bitcoin debate: was that sliver of valuation there in 2009 or not?"
    );
    body.querySelectorAll("[data-b]").forEach((sl) => sl.addEventListener("input", () => { boot[sl.dataset.b] = +sl.value; paintBoot(); }));
  }

  function paint() { if (mode === "chain") paintChain(); else paintBoot(); }

  root.querySelectorAll("#rc-seg button").forEach((b) => b.addEventListener("click", () => {
    root.querySelectorAll("#rc-seg button").forEach((x) => x.classList.toggle("on", x === b));
    mode = b.dataset.m; paint();
  }));
  paint();
}
