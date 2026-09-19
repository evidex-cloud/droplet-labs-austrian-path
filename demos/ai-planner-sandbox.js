// 交互演示：AI 计划者沙盘——6 种商品、20 个生产者。
// “AI 计划者”从完美历史学到需求份额；“市场”是 20 个逐利的价格接受者。
// 稳态下两者一样好；按下“新颖性冲击”或打开“口味漂移”，计划者继续按旧世界配置；
// 打开“计划者读取市场实时价格”，误差消失——它没变聪明，只是重新接上了输入。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const NAMES = [
    T("面包", "Bread"), T("住房", "Housing"), T("衣物", "Clothing"),
    T("交通", "Transport"), T("娱乐", "Leisure"), T("？（尚不存在）", "? (not yet)"),
  ];
  const NEW_NAME = T("新品：便携设备", "New: handheld device");
  const AGENTS = 20, CAP = 10, TOTAL = AGENTS * CAP;
  const BASE = [0.30, 0.25, 0.18, 0.15, 0.12, 0];

  let S; // state
  const reset = () => {
    S = {
      t: 0,
      shares: BASE.slice(),          // 真实需求份额（会漂移/冲击）
      learned: BASE.slice(),         // 计划者从历史学到的份额（冻结）
      agents: [],                    // 市场：每个生产者选的商品
      drift: false, live: false, novelty: false,
      hist: { planner: [], market: [] },
    };
    // 市场初始配置 = 历史份额（也已学到）
    let k = 0;
    for (let g = 0; g < 6; g++) {
      const n = Math.round(BASE[g] * AGENTS);
      for (let i = 0; i < n && k < AGENTS; i++) S.agents[k++] = g;
    }
    while (k < AGENTS) S.agents[k++] = 0;
  };
  reset();

  const demand = () => S.shares.map((s) => s * TOTAL);
  const marketSupply = () => { const a = [0, 0, 0, 0, 0, 0]; S.agents.forEach((g) => (a[g] += CAP)); return a; };
  const plannerSupply = () => S.learned.map((s) => Math.round(s * TOTAL));
  const prices = (D, Sup) => D.map((d, i) => (Sup[i] > 0 ? Math.min(3, d / Sup[i]) : d > 0 ? 3 : 0));
  const score = (D, Sup) => {
    let waste = 0, short = 0;
    for (let i = 0; i < 6; i++) { waste += Math.max(0, Sup[i] - D[i]); short += Math.max(0, D[i] - Sup[i]); }
    return { waste, short, pct: (waste + short) / TOTAL * 100 };
  };

  const step = () => {
    S.t++;
    // 口味漂移：娱乐涨、面包跌
    if (S.drift && S.shares[0] > 0.12) { S.shares[0] -= 0.012; S.shares[4] += 0.012; }
    const D = demand();
    // 市场：读价，最低价商品的 2 个生产者转向最高价商品（有摩擦的企业家再配置）
    const Sm = marketSupply();
    for (let r = 0; r < 2; r++) {
      // 企业家看缺口：从过剩最大的商品转向短缺最大的商品，且只在转移后仍不过头时才转（阶段 6.1 的判断）
      let lo = -1, hi = -1, loGap = -Infinity, hiGap = -Infinity;
      for (let g = 0; g < 6; g++) {
        const surplus = Sm[g] - D[g], shortage = D[g] - Sm[g];
        if (Sm[g] > 0 && surplus > loGap) { loGap = surplus; lo = g; }
        if (shortage > hiGap) { hiGap = shortage; hi = g; }
      }
      if (lo >= 0 && hi >= 0 && lo !== hi && hiGap > CAP / 2 && loGap > CAP / 2) {
        const idx = S.agents.indexOf(lo);
        if (idx >= 0) { S.agents[idx] = hi; Sm[lo] -= CAP; Sm[hi] += CAP; }
      }
    }
    // 计划者：默认按冻结份额；若读取实时价格，则按市场价格修正份额
    if (S.live) {
      // 读取市场的“价格 × 成交量”（营收份额）——沃尔玛式：在价格体系之内计划
      const Sm2 = marketSupply(), p = prices(D, Sm2);
      const rev = Sm2.map((q, i) => q * p[i]);
      const sum = rev.reduce((a, b) => a + b, 0) || 1;
      S.learned = S.learned.map((s, i) => 0.4 * s + 0.6 * (rev[i] / sum));
    }
    const scP = score(D, plannerSupply()), scM = score(D, marketSupply());
    S.hist.planner.push(scP.pct); S.hist.market.push(scM.pct);
  };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧮 AI 计划者沙盘：稳态里它是完美的，新颖性出现时它在配置一个已经不存在的世界", "🧮 AI planner sandbox: perfect in steady state, allocating for a vanished world once novelty arrives")}</div>
      <div class="demo-block">
        <div class="demo-btns">
          <button class="demo-btn" id="aps-step">${T("推进 1 轮", "Run 1 round")}</button>
          <button class="demo-btn" id="aps-step10">${T("推进 10 轮", "Run 10 rounds")}</button>
          <button class="demo-btn" id="aps-novel">${T("⚡ 新颖性冲击（新需求出现）", "⚡ Novelty shock (a new want appears)")}</button>
          <button class="demo-btn" id="aps-drift">${T("口味漂移：关", "Taste drift: off")}</button>
          <button class="demo-btn" id="aps-live">${T("计划者读取市场实时价格：关", "Planner reads live market prices: off")}</button>
          <button class="demo-btn" id="aps-reset">${T("重置", "Reset")}</button>
        </div>
        <div class="demo-meta" id="aps-meta"></div>
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <div class="demo-label">${T("🤖 AI 计划者（从 100 年完美历史学到的份额）", "🤖 AI planner (shares learned from 100 years of perfect history)")}</div>
          <div class="stages" id="aps-plan"></div>
          <div class="stat-row">
            <div class="stat"><div class="k">${T("过剩（浪费）", "Surplus (waste)")}</div><div class="v neg" id="aps-pw">–</div></div>
            <div class="stat"><div class="k">${T("短缺", "Shortage")}</div><div class="v neg" id="aps-ps">–</div></div>
            <div class="stat"><div class="k">${T("错配 %", "Misallocation %")}</div><div class="v acc" id="aps-pp">–</div></div>
          </div>
        </div>
        <div class="demo-block">
          <div class="demo-label">${T("🏪 市场（20 个逐利的价格接受者，每轮最多 2 人转行）", "🏪 Market (20 profit-seeking price-takers, at most 2 switch per round)")}</div>
          <div class="stages" id="aps-mkt"></div>
          <div class="stat-row">
            <div class="stat"><div class="k">${T("过剩（浪费）", "Surplus (waste)")}</div><div class="v neg" id="aps-mw">–</div></div>
            <div class="stat"><div class="k">${T("短缺", "Shortage")}</div><div class="v neg" id="aps-ms">–</div></div>
            <div class="stat"><div class="k">${T("错配 %", "Misallocation %")}</div><div class="v acc" id="aps-mp">–</div></div>
          </div>
        </div>
      </div>
      <div class="demo-block">
        <div class="demo-label">${T("错配率随时间（实线金=市场，蓝=计划者）", "Misallocation over time (gold = market, blue = planner)")}</div>
        <div id="aps-chart"></div>
        <div class="demo-log" id="aps-log"></div>
      </div>
      <p class="demo-tip">${T(
        "先推进 10 轮：两边都接近零错配——稳态里计划者不输给市场。再按<strong>新颖性冲击</strong>：真实需求里出现一种历史里没有的商品，计划者对它的配置永远是 0（它不在训练数据里），而市场里的生产者看到高价就转行。打开<strong>口味漂移</strong>，看计划者的错配一轮轮累积。最后打开<strong>读取实时价格</strong>：计划者立刻修正——不是因为它变聪明了，而是因为它重新接上了价格这个输入。这就是“增强市场”与“取代市场”的差别。",
        "First run 10 rounds: both sides sit near zero misallocation — in a steady state the planner is as good as the market. Now press <strong>Novelty shock</strong>: a good with no history appears in real demand; the planner allocates 0 to it forever (it is not in the training data), while producers in the market see the high price and switch. Turn on <strong>taste drift</strong> and watch the planner's error accumulate round by round. Finally turn on <strong>live prices</strong>: the planner corrects immediately — not because it got smarter, but because it got prices back as an input. That is the difference between market-augmenting and market-replacing AI."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const bars = (el, D, Sup, p) => {
    const mx = Math.max(...D, ...Sup, 1);
    el.innerHTML = D.map((d, i) => {
      const name = S.novelty && i === 5 ? NEW_NAME : NAMES[i];
      const gap = Sup[i] - d;
      const col = Math.abs(gap) < TOTAL * 0.015 ? "var(--green)" : gap > 0 ? "var(--orange)" : "var(--red)";
      return `<div class="stage-bar">
        <span class="lab" title="${name}">${name}</span>
        <div class="track"><div class="fill" style="width:${(Sup[i] / mx) * 100}%;background:${col}"></div><div class="fill ghost" style="width:${(d / mx) * 100}%"></div></div>
        <span class="val">${Sup[i]}/${Math.round(d)}${p ? ` <span style="color:var(--muted)">p${p[i].toFixed(2)}</span>` : ""}</span>
      </div>`;
    }).join("");
  };

  const paint = () => {
    const D = demand(), Sp = plannerSupply(), Sm = marketSupply();
    const pm = prices(D, Sm);
    bars($("aps-plan"), D, Sp, null);
    bars($("aps-mkt"), D, Sm, pm);
    const a = score(D, Sp), b = score(D, Sm);
    $("aps-pw").textContent = Math.round(a.waste); $("aps-ps").textContent = Math.round(a.short); $("aps-pp").textContent = a.pct.toFixed(1) + "%";
    $("aps-mw").textContent = Math.round(b.waste); $("aps-ms").textContent = Math.round(b.short); $("aps-mp").textContent = b.pct.toFixed(1) + "%";
    $("aps-meta").innerHTML = `${T("第", "Round")} <b>${S.t}</b> ${T("轮", "")} · ${T("实心条 = 供给，虚线框 = 真实需求；绿=匹配，金=过剩，红=短缺", "solid = supply, dashed = real demand; green = match, gold = surplus, red = shortage")}`;
    $("aps-drift").textContent = T("口味漂移：", "Taste drift: ") + (S.drift ? T("开", "on") : T("关", "off"));
    $("aps-drift").classList.toggle("active", S.drift);
    $("aps-live").textContent = T("计划者读取市场实时价格：", "Planner reads live market prices: ") + (S.live ? T("开", "on") : T("关", "off"));
    $("aps-live").classList.toggle("active", S.live);
    $("aps-novel").disabled = S.novelty;

    const H = S.hist, n = Math.max(H.market.length, 2);
    const res = lineChart({
      fns: [
        { f: (x) => H.market[Math.min(H.market.length - 1, Math.max(0, Math.round(x)))] ?? 0, cls: "line" },
        { f: (x) => H.planner[Math.min(H.planner.length - 1, Math.max(0, Math.round(x)))] ?? 0, cls: "line2" },
      ],
      lo: 0, hi: n - 1, xlabel: T("轮", "round"), forceZero: true, H: 200, uid: "aps",
    });
    $("aps-chart").innerHTML = H.market.length ? chartBlock(res, [["var(--orange)", T("市场", "Market")], ["var(--blue)", T("AI 计划者", "AI planner")]]) : `<div class="demo-meta">${T("推进几轮后出现曲线。", "Run a few rounds to see the curve.")}</div>`;

    const lines = [];
    if (S.t === 0) lines.push(T("初始：计划者与市场都按历史份额配置。稳态里没有新东西，历史就是未来——计划者不需要价格。", "Start: both allocate by historical shares. In a steady state nothing is new, history is the future — the planner needs no prices."));
    if (S.novelty && !S.live) lines.push(`<span class="bad">${T("新颖性冲击后：真实需求里 15% 转向一种历史上不存在的商品。计划者的训练数据里没有它，配置为 0——它在为一个已经消失的世界生产。市场里的生产者看到 p≈3 的信号就转行。（阶段 6.1 的新颖性 + 阶段 7.1 的输入问题）", "After the shock: 15% of real demand moves to a good with no history. The planner's data contain nothing about it, so it allocates 0 — producing for a world that no longer exists. Market producers see the p≈3 signal and switch. (Novelty from Stage 6.1 plus the input problem of Stage 7.1.)")}</span>`);
    if (S.drift && !S.live) lines.push(`<span class="warn">${T("口味漂移中：每轮 1.2% 的需求从面包转向娱乐。计划者的份额冻结在训练那一刻，错配逐轮累积；市场每轮只允许 2 人转行，却在慢慢追上。", "Tastes drifting: each round 1.2% of demand moves from bread to leisure. The planner's shares are frozen at training time and the error accumulates; the market, allowed only 2 switches per round, slowly catches up.")}</span>`);
    if (S.live) lines.push(`<span class="ok">${T("计划者现在读取市场价格来修正份额：它变成了“价格体系之内的计划者”（沃尔玛式）。误差消失不是因为算力，而是因为输入回来了。注意：这需要旁边还有一个在产生价格的市场。", "The planner now reads market prices to correct its shares: it has become a planner inside the price system (Walmart-style). The error vanishes not because of compute but because the input is back. Note: this requires a market next door that is still generating prices.")}</span>`);
    if (S.t > 0 && a.pct > b.pct + 3) lines.push(T("此刻计划者的错配比市场高 ", "Right now the planner's misallocation exceeds the market's by ") + `<b>${(a.pct - b.pct).toFixed(1)}</b>` + T(" 个百分点。", " percentage points."));
    if (S.t > 0 && b.pct > a.pct + 3) lines.push(T("此刻市场的错配更高——市场的再配置有摩擦（每轮 2 人），需要几轮才能追上。", "Right now the market's misallocation is higher — market reallocation has friction (2 switches per round) and takes a few rounds to catch up."));
    $("aps-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("aps-step").onclick = () => { step(); paint(); };
  $("aps-step10").onclick = () => { for (let i = 0; i < 10; i++) step(); paint(); };
  $("aps-novel").onclick = () => {
    if (S.novelty) return;
    S.novelty = true;
    const take = 0.15;
    S.shares = S.shares.map((s, i) => (i === 5 ? take : s * (1 - take)));
    paint();
  };
  $("aps-drift").onclick = () => { S.drift = !S.drift; paint(); };
  $("aps-live").onclick = () => { S.live = !S.live; paint(); };
  $("aps-reset").onclick = () => { reset(); paint(); };
  paint();
}
