// 交互演示：模型假设开关——一个极简的“主体基”市场：30 个买家、30 个卖家，各自只知道自己的评价和一个
// 关于“行情”的信念，随机配对成交、事后学习；3 个企业家靠“警觉”撮合被错过的买卖对赚差价；
// 第 14、28 期出现“新技术/新产品”。四个开关分别把“异质性 / 不完全信息 / 真实时间 / 新奇”假设掉，
// 看企业家利润、价格摸索、调整期、周期振幅怎么一个个从模拟里消失——以及每个开关抹掉的是哪个奥派概念。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const opts = { homog: false, perfect: false, notime: false, nonovel: false };
  let seed = 7;

  // 可复现的随机数（同一批人，只换开关）
  const mulberry = (a) => () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };

  function simulate(o, sd) {
    const rng = mulberry(sd);
    const N = 30, TT = o.notime ? 1 : 40;
    const known = o.perfect || o.notime || o.homog;   // 大家都“知道”出清价（代表性个体 = 模型直接解出）
    const v = Array.from({ length: N }, () => (o.homog ? 55 : 40 + rng() * 60));
    const c = Array.from({ length: N }, () => (o.homog ? 55 : 10 + rng() * 60));
    const bb = Array.from({ length: N }, () => (o.homog ? 55 : 30 + rng() * 50)); // 买家信念
    const bs = Array.from({ length: N }, () => (o.homog ? 55 : 30 + rng() * 50)); // 卖家信念
    const shocks = (o.nonovel || o.notime) ? [] : [{ t: 14, kind: "tech" }, { t: 28, kind: "product" }];
    const clearing = () => {
      if (o.homog) return (v[0] + c[0]) / 2;
      let best = 0, gap = Infinity;
      for (let p = 0; p <= 130; p += 0.5) { const g = Math.abs(v.filter((x) => x >= p).length - c.filter((x) => x <= p).length); if (g < gap) { gap = g; best = p; } }
      return best;
    };
    const rows = []; let profit = 0, volume = 0, surplus = 0, entTrades = 0, lastAvg = null;
    for (let t = 1; t <= TT; t++) {
      for (const s of shocks) if (s.t === t) { if (s.kind === "tech") for (let i = 0; i < N; i++) c[i] *= 0.7; else for (let i = 0; i < N; i++) v[i] *= 1.2; }
      const pStar = clearing();
      const prices = []; const tradedB = new Set(), tradedS = new Set();
      if (known) {
        for (let i = 0; i < N; i++) { bb[i] = pStar; bs[i] = pStar; }
        const eb = v.map((x, i) => [x, i]).filter(([x]) => x >= pStar), es = c.map((x, j) => [x, j]).filter(([x]) => x <= pStar);
        const q = Math.min(eb.length, es.length);
        for (let k = 0; k < q; k++) { prices.push(pStar); tradedB.add(eb[k][1]); tradedS.add(es[k][1]); surplus += eb[k][0] - es[k][0]; }
      } else {
        const ib = [...Array(N).keys()].sort(() => rng() - 0.5), is = [...Array(N).keys()].sort(() => rng() - 0.5);
        const bids = v.map((x, i) => Math.min(x, bb[i] * 1.04)), asks = c.map((x, j) => Math.max(x, bs[j] * 0.96));
        for (let k = 0; k < N; k++) {
          const i = ib[k], j = is[k];
          if (bids[i] >= asks[j]) { prices.push((bids[i] + asks[j]) / 2); tradedB.add(i); tradedS.add(j); surplus += v[i] - c[j]; }
        }
        // 企业家：看到被错过的高出价与低要价（警觉），撮合并赚差价
        const rb = [...Array(N).keys()].filter((i) => !tradedB.has(i)).sort((a, b2) => bids[b2] - bids[a]);
        const rs = [...Array(N).keys()].filter((j) => !tradedS.has(j)).sort((a, b2) => asks[a] - asks[b2]);
        for (let k = 0; k < 3 && k < rb.length && k < rs.length; k++) {
          const i = rb[k], j = rs[k];
          if (bids[i] - asks[j] > 2) { profit += bids[i] - asks[j]; entTrades++; prices.push(asks[j], bids[i]); tradedB.add(i); tradedS.add(j); surplus += v[i] - c[j]; }
        }
      }
      volume += tradedB.size;
      const avg = prices.length ? prices.reduce((a, b2) => a + b2, 0) / prices.length : (lastAvg ?? pStar);
      lastAvg = avg;
      const sd2 = prices.length > 1 ? Math.sqrt(prices.reduce((a, p) => a + (p - avg) ** 2, 0) / prices.length) : 0;
      if (!known) {
        for (let i = 0; i < N; i++) { bb[i] += 0.35 * (avg - bb[i]); if (!tradedB.has(i)) bb[i] += 1.5; }
        for (let j = 0; j < N; j++) { bs[j] += 0.35 * (avg - bs[j]); if (!tradedS.has(j)) bs[j] -= 1.5; }
      }
      rows.push({ t, avg, pStar, disp: sd2, n: tradedB.size });
    }
    // 调整期：每次冲击后，平均价回到出清价 ±3 以内需要几期
    const adj = shocks.map((s) => { for (let t = s.t; t <= TT; t++) { const r = rows[t - 1]; if (Math.abs(r.avg - r.pStar) < 3) return t - s.t; } return 12; });
    const amp = rows.filter((r) => r.t >= 8).reduce((m, r) => Math.max(m, Math.abs(r.avg - r.pStar)), 0);
    const disp = rows.reduce((a, r) => a + r.disp, 0) / rows.length;
    return { rows, profit, volume, surplus, entTrades, adj, amp, disp, shocks: shocks.length, TT };
  }

  const toggles = [
    { k: "homog", label: T("同质个体（代表性个体）", "Homogeneous agents (representative agent)"),
      gone: T("交换的收益 → 0。所有人评价相同，交换不再创造价值（阶段 1.5 的互利需要评价相反）；边际对消失（阶段 1.3）；企业家无差价可赚。被抹掉的概念：<b>异质性</b>——拉赫曼的异质资本、哈耶克的分散知识，全部以“人不一样”为前提。", "Gains from exchange → 0. Everyone values things identically, so exchange no longer creates value (Stage 1.5's mutual gain needs opposite rankings); marginal pairs vanish (Stage 1.3); entrepreneurs have no spread to earn. Concept erased: <b>heterogeneity</b> — Lachmann's heterogeneous capital and Hayek's dispersed knowledge both presuppose that people differ.") },
    { k: "perfect", label: T("完全信息", "Perfect information"),
      gone: T("价格离散度 → 0，企业家利润 → 0，调整期 → 0。人人知道出清价，就没有“别人没看到的机会”。被抹掉的概念：<b>柯兹纳的警觉</b>（阶段 6.1）与<b>哈耶克的知识问题</b>（阶段 7.2）——价格之所以有信息功能，正因为没人事先知道它。", "Price dispersion → 0, entrepreneurial profit → 0, adjustment → 0. When everyone knows the clearing price there is no “opportunity others haven't seen.” Concept erased: <b>Kirzner's alertness</b> (Stage 6.1) and <b>Hayek's knowledge problem</b> (Stage 7.2) — prices carry information precisely because nobody knows them in advance.") },
    { k: "notime", label: T("没有时间（一次性出清）", "No time (one-shot clearing)"),
      gone: T("整个过程压成一张快照：没有摸索、没有调整期、没有周期，也没有“新东西出现”的余地。被抹掉的概念：<b>市场过程</b>（阶段 6.2）与<b>资本结构</b>（阶段 3.2）——这就是米塞斯的均匀轮转经济：它的唯一用途是反衬现实。", "The whole process collapses into one snapshot: no groping, no adjustment, no cycle, and no room for anything new to appear. Concept erased: the <b>market process</b> (Stage 6.2) and the <b>structure of production</b> (Stage 3.2) — this is Mises's evenly rotating economy, whose only use is to show reality by contrast.") },
    { k: "nonovel", label: T("没有新奇（无冲击）", "No novelty (no shocks)"),
      gone: T("没有新技术、新产品，就没有调整期与周期；企业家利润只剩开头那一点（初始的信念差），很快被竞争掉。被抹掉的概念：<b>真不确定性</b>（阶段 2.2、6.1）与<b>创造性破坏</b>（阶段 15.5）——遍历性假设的世界里，未来只是过去的重演。", "With no new technology or product there is no adjustment and no cycle; entrepreneurial profit shrinks to the opening sliver (initial differences in beliefs) and is quickly competed away. Concept erased: <b>true uncertainty</b> (Stages 2.2, 6.1) and <b>creative destruction</b> (Stage 15.5) — in an ergodic world the future is only a replay of the past.") },
  ];

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧪 模型假设开关：每关掉一个现实，就少掉一个现象", "🧪 Model-assumption switches: every piece of reality you assume away takes a phenomenon with it")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("点亮 = 采用该假设（像标准模型那样）；全灭 = 奥派眼中的真实市场", "Lit = adopt that assumption (as a standard model does); all off = the market as Austrians see it")}</label>
        <div class="demo-btns">${toggles.map((g) => `<button class="demo-btn ma-tg" data-k="${g.k}">${g.label}</button>`).join("")}<button class="demo-btn" id="ma-reset">${T("全部关闭", "All off")}</button><button class="demo-btn" id="ma-seed">${T("🎲 换一批人", "🎲 New crowd")}</button></div>
      </div>
      <div class="demo-block"><div class="stat-row" id="ma-stats"></div></div>
      <div class="demo-block">
        <label class="demo-label">${T("平均成交价（金）vs 出清价（蓝）——摸索、调整与周期都在两条线的差距里", "Average trade price (gold) vs clearing price (blue) — groping, adjustment and cycles live in the gap between the two lines")}</label>
        <div id="ma-chart"></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="ma-log"></div></div>
      <p class="demo-tip">${T(
        "先看全关的状态：企业家有利润、价格有离散、冲击后要花几期才回到出清价、还会过冲（周期）。然后一个一个点亮开关——<strong>四个开关全亮，就是标准的均衡模型</strong>：交易照常发生，但企业家利润、摸索、调整、周期全部为零。不是“近似掉了”，是<strong>逻辑上不可能出现</strong>。这就是奥派与主流真正的分歧所在。",
        "Start with everything off: entrepreneurs earn profit, prices are dispersed, it takes several periods after a shock to return to the clearing price, and the price overshoots (a cycle). Then light the switches one at a time — <strong>all four lit is the standard equilibrium model</strong>: trade still happens, but entrepreneurial profit, groping, adjustment and cycles are all zero. Not “approximated away” — <strong>logically impossible</strong>. That is the real disagreement between Austrians and the mainstream."
      )}</p>
    </div>`;

  const $ = (s) => root.querySelector(s);
  const base = () => simulate({ homog: false, perfect: false, notime: false, nonovel: false }, seed);

  function paint() {
    root.querySelectorAll(".ma-tg").forEach((b) => b.classList.toggle("active", opts[b.dataset.k]));
    const r = simulate(opts, seed), b0 = base();
    const f1 = (x) => x.toFixed(1);
    const tile = (k, val, ref, cls) => `<div class="stat"><div class="k">${k}</div><div class="v ${cls || ""}">${val}</div><div class="k" style="margin-top:3px;font-weight:400">${T("全关时", "all off")}: ${ref}</div></div>`;
    $("#ma-stats").innerHTML =
      tile(T("交易量（累计）", "Trades (total)"), r.volume, b0.volume) +
      tile(T("交换总收益 Σ(v−c)", "Total gains Σ(v−c)"), f1(r.surplus), f1(b0.surplus), r.surplus <= 0.01 ? "neg" : "pos") +
      tile(T("企业家利润", "Entrepreneurial profit"), f1(r.profit), f1(b0.profit), r.profit <= 0.01 ? "neg" : "acc") +
      tile(T("价格离散度（均值）", "Price dispersion (avg)"), f1(r.disp), f1(b0.disp), r.disp <= 0.01 ? "neg" : "") +
      tile(T("冲击后调整期数", "Adjustment periods after shocks"), r.shocks ? r.adj.map((a) => (a >= 12 ? "12+" : a)).join(" / ") : "—", b0.adj.join(" / "), r.shocks ? "" : "neg") +
      tile(T("周期振幅（最大偏离）", "Cycle amplitude (max gap)"), f1(r.amp), f1(b0.amp), r.amp <= 0.5 ? "neg" : "") +
      tile(T("新技术/新产品事件", "New tech / product events"), r.shocks, b0.shocks, r.shocks ? "" : "neg");
    // 图
    const TT = r.TT, rows = r.rows;
    const at = (x) => rows[Math.max(0, Math.min(TT - 1, Math.round(x) - 1))];
    const res = lineChart({
      fns: [{ f: (x) => at(x).pStar, cls: "line2" }, { f: (x) => at(x).avg, cls: "line" }],
      lo: 1, hi: Math.max(2, TT), xlabel: T("期", "period"), samples: Math.max(2, TT - 1) * 2, uid: "ma", forceZero: false,
      markerX: r.shocks ? 14 : null, markerLabel: r.shocks ? T("新技术 ↓成本", "new tech ↓cost") : "",
    });
    $("#ma-chart").innerHTML = chartBlock(res, [["var(--orange)", T("平均成交价", "avg trade price")], ["var(--blue)", T("出清价（模型的“解”）", "clearing price (the model's “solution”)")]]) +
      (TT === 1 ? `<div class="demo-meta">${T("“没有时间”：只有一期，图退化成一个点——这就是均衡快照。", "“No time”: a single period; the chart degenerates to one point — that is the equilibrium snapshot.")}</div>` : "");
    // 说明
    const on = toggles.filter((g) => opts[g.k]);
    $("#ma-log").innerHTML = (on.length
      ? on.map((g) => `<div class="bad"><b>${T("已假设掉：", "Assumed away: ")}${g.label}</b> — ${g.gone}</div>`).join("")
      : `<div class="ok"><b>${T("真实市场（全关）", "Real market (all off)")}</b> — ${T("30 个不同的买家和卖家，各自只知道自己的评价和一个关于行情的猜测；随机相遇、成交、学习；3 个企业家撮合被错过的交易赚差价；第 14 期新技术压低成本、第 28 期新产品抬高评价。", "30 different buyers and sellers, each knowing only their own valuation and a guess about the going price; they meet at random, trade, learn; 3 entrepreneurs earn a spread by matching missed trades; at period 14 a new technology cuts costs, at period 28 a new product raises valuations.")}</div>`)
      + (on.length === 4 ? `<div class="warn"><b>${T("四个全亮 = 标准均衡模型。", "All four lit = the standard equilibrium model.")}</b> ${T("交易照常发生（模型没有“错”），但企业家、摸索、周期、发现全部为零。米塞斯：均衡方程回答的问题，不是经济学的问题。", "Trade still happens (the model is not “wrong”), but entrepreneurs, groping, cycles and discovery are all zero. Mises: the question equilibrium equations answer is not the economic question.")}</div>` : "");
  }

  root.querySelectorAll(".ma-tg").forEach((b) => b.addEventListener("click", () => { opts[b.dataset.k] = !opts[b.dataset.k]; paint(); }));
  $("#ma-reset").addEventListener("click", () => { for (const k in opts) opts[k] = false; paint(); });
  $("#ma-seed").addEventListener("click", () => { seed = Math.floor(Math.random() * 1e6); paint(); });
  paint();
}
