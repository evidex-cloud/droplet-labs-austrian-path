// 交互演示：算法定价竞技场——4 个定价机器人向 200 个消费者卖同一种商品。
// 机器人策略：“独立爬山”（只看自己的利润）或“匹配再抬价”（Calvano 式默契合谋的简化版）。
// 拖动“多归属消费者比例”、按“加入一个进入者”，看价格是漂向垄断价还是被打回竞争价。
// 读数：平均价、消费者剩余、卖家利润；价格轨迹曲线。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const NC = 200, COST = 10, PMAX = 45, MONO = 30; // WTP 均匀分布 10–50 → 垄断价 30
  const WTP = Array.from({ length: NC }, (_, i) => 10 + (40 * (i + 0.5)) / NC);
  let S;
  const reset = () => {
    S = {
      t: 0, strat: "collude", multi: 100, entrant: false,
      bots: [14, 14, 14, 14].map((p) => ({ p, last: null, prev: null, dir: 1, profit: 0, sales: 0 })),
      hist: [],
    };
  };
  reset();

  const sim = () => {
    const bots = S.bots, n = bots.length;
    bots.forEach((b) => { b.sales = 0; });
    const mShare = S.multi / 100;
    // 每个消费者：多归属者看到所有卖家，买最便宜的；单归属者被随机分配给一个卖家
    WTP.forEach((w, i) => {
      const multi = (i % 100) / 100 < mShare;
      if (multi) {
        let min = Infinity; bots.forEach((b) => { if (b.p < min) min = b.p; });
        if (min <= w) { const winners = bots.filter((b) => Math.abs(b.p - min) < 1e-9); winners.forEach((b) => (b.sales += 1 / winners.length)); }
      } else {
        const b = bots[i % n]; if (b.p <= w) b.sales += 1;
      }
    });
    bots.forEach((b) => { b.prev = b.last; b.last = b.profit; b.profit = (b.p - COST) * b.sales; });
    const buyers = [];
    let surplus = 0, revenue = 0, units = 0;
    WTP.forEach((w, i) => {
      const multi = (i % 100) / 100 < mShare;
      let p;
      if (multi) { p = Math.min(...bots.map((b) => b.p)); } else { p = bots[i % n].p; }
      if (p <= w) { surplus += w - p; revenue += p; units += 1; }
    });
    return { surplus, avg: units ? revenue / units : NaN, units, profit: bots.reduce((s, b) => s + b.profit, 0) };
  };

  // 给定自己的价格与对手当前价格，估计自己的销量（与 sim 同一套消费者规则）
  const salesAt = (i, price) => {
    const bots = S.bots, n = bots.length, mShare = S.multi / 100;
    let sales = 0;
    WTP.forEach((w, k) => {
      const multi = (k % 100) / 100 < mShare;
      if (multi) {
        let min = price, ties = 1;
        bots.forEach((b, j) => { if (j === i) return; if (b.p < min - 1e-9) { min = b.p; ties = 0; } else if (Math.abs(b.p - min) < 1e-9) ties++; });
        if (min === price && ties > 0 && price <= w) sales += 1 / ties;
      } else if (k % n === i && price <= w) sales += 1;
    });
    return sales;
  };

  const decide = () => {
    const bots = S.bots;
    bots.forEach((b, i) => {
      const rivals = bots.filter((_, j) => j !== i).map((x) => x.p);
      const minR = Math.min(...rivals);
      if (b.entrant) { b.p = Math.max(COST + 1, Math.min(minR - 1, PMAX)); return; }
      if (S.strat === "collude") {
        // 匹配再抬价：被压价就匹配到最低价（惩罚/跟随），没被压价就抬 1，直到垄断价
        if (minR < b.p - 0.5) b.p = Math.max(COST + 1, minR);
        else if (b.p < MONO) b.p = Math.min(MONO, b.p + 1);
      } else {
        // 独立最优反应：对手价格给定，在 p±2 里选自己利润最高的价（各自试错，不看对手利润）
        let bestP = b.p, bestPi = -Infinity;
        for (let d = -2; d <= 2; d++) {
          const cand = Math.max(COST + 1, Math.min(PMAX, b.p + d));
          const pi = (cand - COST) * salesAt(i, cand);
          if (pi > bestPi + 1e-9) { bestPi = pi; bestP = cand; }
        }
        b.p = bestP;
      }
    });
  };

  const step = () => { S.t++; decide(); const r = sim(); S.hist.push(r.avg); return r; };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🤖 算法定价竞技场：4 个机器人会把价格抬到垄断水平吗？进入者和多归属消费者能打散它吗？", "🤖 Algorithmic pricing arena: will 4 bots push price to the monopoly level? Can entrants and multi-homing consumers break it?")}</div>
      <div class="demo-block">
        <div class="demo-row" style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
          <div class="demo-seg" id="apa-strat">
            <button data-s="collude" class="on">${T("匹配再抬价（默契合谋）", "Match-and-raise (tacit collusion)")}</button>
            <button data-s="climb">${T("独立爬山（各自试错）", "Independent hill-climb")}</button>
          </div>
          <button class="demo-btn" id="apa-step">${T("推进 1 轮", "Run 1 round")}</button>
          <button class="demo-btn" id="apa-step20">${T("推进 20 轮", "Run 20 rounds")}</button>
          <button class="demo-btn" id="apa-entrant">${T("➕ 加入一个进入者（压价机器人）", "➕ Add an entrant (undercutting bot)")}</button>
          <button class="demo-btn" id="apa-reset">${T("重置", "Reset")}</button>
        </div>
        <label class="demo-label" style="margin-top:10px">${T("多归属消费者比例（同时看所有卖家、买最便宜的）", "Share of multi-homing consumers (see all sellers, buy the cheapest)")}：<b id="apa-multi-v">${S.multi}%</b></label>
        <input class="demo-slider" id="apa-multi" type="range" min="0" max="100" step="10" value="${S.multi}" />
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <div class="demo-label">${T("机器人报价（成本 10，竞争价≈11，垄断价 30）", "Bot prices (cost 10, competitive ≈ 11, monopoly 30)")}</div>
          <div id="apa-bots"></div>
          <div class="stat-row">
            <div class="stat"><div class="k">${T("平均成交价", "Average price paid")}</div><div class="v acc" id="apa-avg">–</div></div>
            <div class="stat"><div class="k">${T("消费者剩余", "Consumer surplus")}</div><div class="v" id="apa-cs">–</div></div>
            <div class="stat"><div class="k">${T("卖家总利润", "Total seller profit")}</div><div class="v" id="apa-pr">–</div></div>
            <div class="stat"><div class="k">${T("成交量 / 200", "Units sold / 200")}</div><div class="v" id="apa-q">–</div></div>
          </div>
        </div>
        <div class="demo-block">
          <div class="demo-label">${T("平均价随轮次", "Average price by round")}</div>
          <div id="apa-chart"></div>
        </div>
      </div>
      <div class="demo-block"><div class="demo-log" id="apa-log"></div></div>
      <p class="demo-tip">${T(
        "默认设置是 Calvano 模拟的最坏情形：封闭市场、四个用同一规则的机器人、消费者全部比价。推进 20 轮，价格在没有任何“沟通”的情况下爬到 30——这就是默契合谋。然后按<strong>加入一个进入者</strong>：一个只会“比最低价低 1”的笨机器人，几轮内把价格打回 11 附近——维持合谋的从来是壁垒，不是算法。再试“独立爬山”策略并把多归属拖到 0%：这次是<strong>被套牢的消费者</strong>让每个机器人各自爬到垄断价；把多归属拖回 100%，压价就有了回报，价格回落。解药是进入与多归属，不是限价。",
        "The default is Calvano's worst case: a closed market, four bots on the same rule, every consumer comparing prices. Run 20 rounds and the price climbs to 30 with no “communication” at all — that is tacit collusion. Now press <strong>Add an entrant</strong>: a dumb bot that only knows “one below the lowest” drives the price back near 11 within a few rounds — what sustains collusion is always a barrier, never the algorithm. Then try “independent hill-climb” with multi-homing at 0%: this time <strong>captive consumers</strong> let each bot climb to the monopoly price on its own; drag multi-homing back to 100% and undercutting pays again, so the price falls. The cure is entry and multi-homing, not a price cap."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  let last = null;
  const paint = () => {
    $("apa-multi-v").textContent = S.multi + "%";
    root.querySelectorAll("#apa-strat button").forEach((b) => b.classList.toggle("on", b.dataset.s === S.strat));
    $("apa-entrant").disabled = S.entrant;
    $("apa-bots").innerHTML = S.bots.map((b, i) => `<div class="bar2">
      <span class="lab" style="width:110px">${b.entrant ? T("进入者", "Entrant") : T("机器人", "Bot") + " " + (i + 1)}</span>
      <div class="track"><div class="fill" style="width:${((b.p - COST) / (PMAX - COST)) * 100}%;background:${b.entrant ? "var(--blue)" : b.p >= MONO - 1 ? "var(--red)" : b.p <= COST + 3 ? "var(--green)" : "var(--orange)"}"></div></div>
      <span class="val">${b.p.toFixed(0)} · ${T("售", "sold")} ${b.sales.toFixed(0)}</span>
    </div>`).join("");
    if (last) {
      $("apa-avg").textContent = isNaN(last.avg) ? "–" : last.avg.toFixed(1);
      $("apa-cs").textContent = last.surplus.toFixed(0);
      $("apa-pr").textContent = last.profit.toFixed(0);
      $("apa-q").textContent = last.units;
    }
    const H = S.hist;
    if (H.length >= 2) {
      const res = lineChart({ fns: [{ f: (x) => H[Math.min(H.length - 1, Math.max(0, Math.round(x)))], cls: "line" }, { f: () => MONO, cls: "line3" }, { f: () => COST + 1, cls: "line4" }], lo: 0, hi: H.length - 1, xlabel: T("轮", "round"), H: 220, uid: "apa" });
      $("apa-chart").innerHTML = chartBlock(res, [["var(--orange)", T("平均价", "Average price")], ["var(--red)", T("垄断价 30", "Monopoly 30")], ["var(--green)", T("竞争价 ≈ 11", "Competitive ≈ 11")]]);
    } else $("apa-chart").innerHTML = `<div class="demo-meta">${T("推进几轮后出现曲线。", "Run a few rounds to see the curve.")}</div>`;

    const lines = [];
    const avg = last ? last.avg : NaN;
    if (S.t === 0) lines.push(T("四个机器人从 14 起步。它们不能沟通，也没被编程去合谋——只按各自的规则调价。", "Four bots start at 14. They cannot communicate and were not programmed to collude — each just follows its rule."));
    if (S.t > 0 && avg >= MONO - 2) lines.push(`<span class="bad">${T("价格已到垄断水平：没有任何协议，只有“被压就匹配、没被压就抬”——这正是 Calvano 等 2020 年模拟里出现的默契合谋。注意它需要的条件：封闭市场、同质规则。", "Price has reached the monopoly level: no agreement, just “match if undercut, raise if not” — the tacit collusion seen in Calvano et al. (2020). Note what it requires: a closed market and homogeneous rules.")}</span>`);
    if (S.t > 0 && avg <= COST + 3) lines.push(`<span class="ok">${T("价格贴近成本：压价有回报（多归属消费者会跑）或有进入者不断压价，合谋维持不住——阶段 6.4 的“卡特尔不稳定”。", "Price sits near cost: undercutting pays (multi-homing consumers switch) or an entrant keeps undercutting, and collusion cannot hold — the cartel instability of Stage 6.4.")}</span>`);
    if (S.entrant) lines.push(T("进入者规则只有一条：比最低价低 1。它不需要理解合谋，只需要看到利润——这就是高价作为“邀请函”的含义。", "The entrant's only rule: one below the lowest. It does not need to understand the collusion, only to see the profit — that is what a high price as an “invitation letter” means."));
    if (S.multi === 0) lines.push(`<span class="warn">${T("多归属 0%：每个消费者被套牢在一个卖家那里，压价赢不到任何人——机器人各自爬到垄断价。这不是合谋，是套牢；解药是让消费者能比价（阶段 15.2）。", "Multi-homing 0%: every consumer is captive to one seller, so undercutting wins nobody — each bot climbs to the monopoly price alone. That is not collusion but captivity; the cure is letting consumers compare (Stage 15.2).")}</span>`);
    if (last) lines.push(T("消费者剩余 + 卖家利润 = 总剩余；价格越高，成交量越少（WTP 低于价格的人不买），总剩余越小——这是合谋的真实成本。", "Consumer surplus + seller profit = total surplus; the higher the price, the fewer units trade (people with WTP below price don't buy) and the smaller the total — the real cost of collusion."));
    $("apa-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("apa-step").onclick = () => { last = step(); paint(); };
  $("apa-step20").onclick = () => { for (let i = 0; i < 20; i++) last = step(); paint(); };
  $("apa-entrant").onclick = () => { if (S.entrant) return; S.entrant = true; S.bots.push({ p: Math.min(...S.bots.map((b) => b.p)) - 1, last: null, prev: null, dir: -1, profit: 0, sales: 0, entrant: true }); last = sim(); paint(); };
  $("apa-reset").onclick = () => { const st = S.strat, m = S.multi; reset(); S.strat = st; S.multi = m; last = null; paint(); };
  root.querySelectorAll("#apa-strat button").forEach((b) => b.addEventListener("click", () => { S.strat = b.dataset.s; paint(); }));
  $("apa-multi").addEventListener("input", (e) => { S.multi = +e.target.value; paint(); });
  paint();
}
