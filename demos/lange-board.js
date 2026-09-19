// 交互演示：你是兰格的中央计划局——五种生产资料，你只能看到过剩/短缺，按“短缺涨价、过剩降价”调。
// 静止的世界里价格会收敛；打开“偏好变化 / 新产品 / 资本品相互依赖”，计划局永远追不上——每轮读出短缺与浪费。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 五种商品：真实需求 D = a − b·p（+ 派生项），真实供给 S = c + d·p。计划局看不到 a,b,c,d，只看到 D−S。
  const base = [
    { id: "flour", name: T("面粉", "Flour"), icon: "🌾", a: 200, b: 4, c: 20, d: 2, consumer: true },
    { id: "power", name: T("电力", "Electricity"), icon: "⚡", a: 300, b: 3, c: 60, d: 3, consumer: false },
    { id: "steel", name: T("钢", "Steel"), icon: "🏗️", a: 240, b: 2, c: 40, d: 2, consumer: false },
    { id: "trucks", name: T("卡车", "Trucks"), icon: "🚚", a: 160, b: 1, c: 10, d: 1, consumer: true },
    { id: "labor", name: T("工时", "Labor"), icon: "👷", a: 500, b: 8, c: 100, d: 8, consumer: false },
  ];
  const eqPrice = (g) => (g.a - g.c) / (g.b + g.d);

  let goods, price, round, hist, opts, newProduct, totalWaste, totalShort, autoTimer = null;
  const rnd = (lo, hi) => lo + Math.random() * (hi - lo);
  const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) * 2; // 近似 N(0,1)

  const init = () => {
    goods = base.map((g) => ({ ...g }));
    price = {}; goods.forEach((g) => (price[g.id] = eqPrice(g) * rnd(0.6, 1.4)));
    round = 0; hist = []; newProduct = 0; totalWaste = 0; totalShort = 0;
    opts = opts || { tastes: false, novelty: false, capital: false };
  };
  init();

  const supplyOf = (g) => Math.max(0, g.c + g.d * price[g.id]);
  const demandOf = (g) => {
    let D = g.a - g.b * price[g.id];
    if (opts.capital) {
      const S = Object.fromEntries(goods.map((x) => [x.id, supplyOf(x)]));
      if (g.id === "steel") D += 1.0 * S.trucks;               // 卡车厂用钢
      if (g.id === "power") D += 0.5 * S.steel + 0.3 * S.flour; // 炼钢、磨面用电
      if (g.id === "labor") D += 0.6 * (S.flour + S.steel + S.trucks); // 派生的劳动需求
    }
    if (opts.novelty && newProduct > 0) {
      if (g.id === "power") D += 10 * newProduct;  // “电动卡车/电池”没有价格行，需求表现为电与钢的莫名短缺
      if (g.id === "steel") D += 7 * newProduct;
    }
    return Math.max(0, D);
  };

  const step = (applyRule) => {
    round++;
    if (opts.tastes) goods.forEach((g) => { if (g.consumer) g.a *= 1 + 0.12 * gauss(); });
    if (opts.novelty && round >= 4) newProduct += 1; // 新产品的需求持续成长——价格表里始终没有它
    if (applyRule) {
      for (const g of goods) {
        const D = demandOf(g), S = supplyOf(g);
        price[g.id] = Math.max(1, price[g.id] * (1 + 0.5 * (D - S) / Math.max(1, S)));
      }
    }
    const rows = goods.map((g) => { const D = demandOf(g), S = supplyOf(g); return { g, D, S, gap: D - S }; });
    const short = rows.reduce((a, r) => a + Math.max(0, r.gap), 0);
    const waste = rows.reduce((a, r) => a + Math.max(0, -r.gap), 0);
    totalShort += short; totalWaste += waste;
    hist.push({ round, short, waste, imb: short + waste });
    paint(rows);
  };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🏛️ 兰格的计划局：短缺就涨价，过剩就降价——你追得上世界吗？", "🏛️ Lange's planning board: raise on shortage, cut on surplus — can you keep up with the world?")}</div>
      <div class="demo-row">
        <div class="demo-seg" id="lb-world">
          <button data-w="static" class="on">${T("静止的世界", "Static world")}</button>
          <button data-w="dynamic">${T("变化的世界", "Changing world")}</button>
        </div>
        <div class="demo-btns" style="margin:0" id="lb-opts">
          <button class="demo-btn" data-o="tastes">${T("偏好在变", "Tastes change")}</button>
          <button class="demo-btn" data-o="novelty">${T("新产品出现", "New products appear")}</button>
          <button class="demo-btn" data-o="capital">${T("资本品相互依赖", "Capital goods interdepend")}</button>
        </div>
      </div>
      <div class="demo-grid">
        <div class="demo-block" style="margin:0">
          <label class="demo-label">${T("你的会计价格（拖动调价，或让规则自动调）", "Your accounting prices (drag to adjust, or let the rule do it)")}</label>
          <div id="lb-prices"></div>
          <div class="demo-btns">
            <button class="demo-btn" id="lb-next">${T("▶ 下一轮（按我的价格）", "▶ Next round (my prices)")}</button>
            <button class="demo-btn" id="lb-rule">${T("⚙ 按兰格规则调一轮", "⚙ Apply Lange's rule once")}</button>
            <button class="demo-btn" id="lb-auto">${T("⏩ 自动跑 15 轮", "⏩ Auto-run 15 rounds")}</button>
            <button class="demo-btn" id="lb-reset">${T("↺ 重置", "↺ Reset")}</button>
          </div>
        </div>
        <div class="demo-block" style="margin:0">
          <label class="demo-label">${T("计划局看到的：过剩 / 短缺（看不到背后的需求曲线）", "What the board sees: surplus / shortage (never the curves behind them)")}</label>
          <div class="stages" id="lb-gaps"></div>
        </div>
      </div>
      <div class="stat-row" id="lb-stats"></div>
      <div class="demo-block">
        <label class="demo-label">${T("每轮总失衡（短缺 + 过剩）", "Total imbalance per round (shortage + surplus)")}</label>
        <div id="lb-chart"></div>
        <div class="demo-log" id="lb-log" style="margin-top:8px"></div>
      </div>
      <p class="demo-tip">${T(
        "先在“静止的世界”按“自动跑 15 轮”：失衡曲线一路掉到零——兰格在静态世界里是对的。再切到“变化的世界”并打开三个开关：你每轮只能调一次价，而偏好在漂、新产品没有价格行、钢的需求随卡车产量变——失衡不再归零，累计短缺与浪费不断上涨。<strong>问题不是你调得不够快，而是世界不等你。</strong>",
        "First, in “Static world,” click “Auto-run 15 rounds”: the imbalance line falls to zero — Lange is right in a static world. Now switch to “Changing world” and turn on all three switches: you can adjust once per round, but tastes drift, the new product has no price row, and steel demand moves with truck output — the imbalance never returns to zero and cumulative shortage and waste keep climbing. <strong>The problem is not that you adjust too slowly; it is that the world does not wait for you.</strong>"
      )}</p>
    </div>`;

  const f1 = (v) => (Math.round(v * 10) / 10).toString();

  const paintPrices = () => {
    root.querySelector("#lb-prices").innerHTML = goods.map((g) => `
      <div class="demo-row" style="margin:6px 0">
        <span style="width:110px;font-size:13px">${g.icon} ${g.name}</span>
        <input class="demo-slider" style="flex:1;margin:0 10px" type="range" min="1" max="${Math.round(eqPrice(base.find((b) => b.id === g.id)) * 2.5)}" step="0.5" value="${price[g.id].toFixed(1)}" data-g="${g.id}" />
        <b style="width:52px;text-align:right" id="lb-p-${g.id}">${price[g.id].toFixed(1)}</b>
      </div>`).join("");
    root.querySelectorAll("[data-g]").forEach((sl) => sl.addEventListener("input", () => {
      price[sl.dataset.g] = +sl.value;
      root.querySelector(`#lb-p-${sl.dataset.g}`).textContent = (+sl.value).toFixed(1);
    }));
  };

  const paint = (rows) => {
    root.querySelectorAll("#lb-world button").forEach((b) => b.classList.toggle("on", (b.dataset.w === "dynamic") === (opts.tastes || opts.novelty || opts.capital)));
    root.querySelectorAll("#lb-opts button").forEach((b) => b.classList.toggle("active", !!opts[b.dataset.o]));
    paintPrices();
    rows = rows || goods.map((g) => { const D = demandOf(g), S = supplyOf(g); return { g, D, S, gap: D - S }; });
    const maxAbs = Math.max(20, ...rows.map((r) => Math.abs(r.gap)));
    root.querySelector("#lb-gaps").innerHTML = rows.map((r) => {
      const pct = Math.min(100, Math.abs(r.gap) / maxAbs * 100);
      const shortage = r.gap > 0;
      const lab = Math.abs(r.gap) < 3 ? `<span class="pill ok">${T("出清", "clears")}</span>` : shortage ? `<span class="pill bad">${T("短缺", "short")} ${f1(r.gap)}</span>` : `<span class="pill" style="background:var(--orange-soft);color:var(--orange-ink)">${T("过剩", "surplus")} ${f1(-r.gap)}</span>`;
      return `<div class="stage-bar">
        <span class="lab" style="width:100px">${r.g.icon} ${r.g.name}</span>
        <div class="track"><div class="fill" style="width:${pct.toFixed(0)}%;background:${Math.abs(r.gap) < 3 ? "var(--green)" : shortage ? "var(--red)" : "var(--orange)"}"></div></div>
        <span class="val" style="width:110px;text-align:left">${lab}</span>
      </div>`;
    }).join("");
    const h = hist[hist.length - 1] || { short: 0, waste: 0, imb: rows.reduce((a, r) => a + Math.abs(r.gap), 0) };
    const cleared = hist.length && hist.slice(-3).every((x) => x.imb < 12) && hist.length >= 3;
    root.querySelector("#lb-stats").innerHTML = `
      <div class="stat"><div class="k">${T("轮次", "Round")}</div><div class="v">${round}</div></div>
      <div class="stat"><div class="k">${T("本轮短缺", "Shortage now")}</div><div class="v ${h.short < 6 ? "pos" : "neg"}">${f1(h.short)}</div></div>
      <div class="stat"><div class="k">${T("本轮过剩（浪费）", "Surplus (waste) now")}</div><div class="v ${h.waste < 6 ? "pos" : "neg"}">${f1(h.waste)}</div></div>
      <div class="stat"><div class="k">${T("累计短缺", "Cumulative shortage")}</div><div class="v">${f1(totalShort)}</div></div>
      <div class="stat"><div class="k">${T("累计浪费", "Cumulative waste")}</div><div class="v">${f1(totalWaste)}</div></div>
      <div class="stat"><div class="k">${T("状态", "Status")}</div><div class="v ${cleared ? "pos" : "acc"}" style="font-size:14px">${cleared ? T("已收敛", "Converged") : T("追赶中", "Chasing")}</div></div>`;

    const n = hist.length;
    if (n >= 2) {
      const res = lineChart({
        fns: [{ f: (x) => { const i = Math.max(0, Math.min(n - 1, Math.round(x))); return hist[i].imb; }, cls: "line3" }],
        lo: 0, hi: Math.max(10, n - 1), samples: Math.max(10, (n - 1) * 4), xlabel: T("轮次", "round"), forceZero: true, uid: "lb",
      });
      root.querySelector("#lb-chart").innerHTML = chartBlock(res, [["var(--red)", T("总失衡", "total imbalance")]]);
    } else {
      root.querySelector("#lb-chart").innerHTML = `<div class="demo-meta">${T("跑几轮后这里会出现曲线。", "The curve appears after a few rounds.")}</div>`;
    }

    const lines = [];
    const dyn = opts.tastes || opts.novelty || opts.capital;
    if (!dyn) {
      lines.push(cleared
        ? `<span class="ok">${T("静止的世界里，试错法收敛了——这是兰格论证成立的那一部分。", "In a static world trial and error converges — this is the part of Lange's argument that holds.")}</span>`
        : T("世界不动，你每轮调一次价，失衡会一路缩小。", "The world holds still; adjust once a round and the imbalance keeps shrinking."));
    } else {
      if (opts.novelty && newProduct > 0) lines.push(`<span class="bad">${T("一种新产品（电动卡车）出现了——你的价格表里没有它这一行。它的需求表现为电和钢的“莫名短缺”，你只能追着这两个价格涨，却不知道为什么。", "A new product (electric trucks) has appeared — your price sheet has no row for it. Its demand shows up as “unexplained” shortages of electricity and steel; you chase those two prices upward without knowing why.")}</span>`);
      if (opts.capital) lines.push(`<span class="warn">${T("钢的需求跟着卡车产量走，电的需求跟着钢和面粉走，工时跟着所有产出走——你调一个价，另外四个的短缺就变了。", "Steel demand follows truck output, electricity follows steel and flour, labor follows all of them — move one price and the other four gaps shift.")}</span>`);
      if (opts.tastes) lines.push(`<span class="warn">${T("消费者对面粉和卡车的偏好每轮都在漂移——你调完的价，是针对上一轮的口味。", "Consumers' tastes for flour and trucks drift every round — the price you just set answers last round's tastes.")}</span>`);
      lines.push(T("市场里，这些调整由成千上万个用自己的钱出价的人同时完成，每笔交易一次；而你一轮只能调一次，并且没有人为猜错承担亏损。", "In a market these adjustments are made simultaneously by thousands of people bidding with their own money, once per trade; you adjust once per round, and nobody bears a loss for guessing wrong."));
    }
    root.querySelector("#lb-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelectorAll("#lb-world button").forEach((b) => b.addEventListener("click", () => {
    const dyn = b.dataset.w === "dynamic";
    opts = dyn ? { tastes: true, novelty: true, capital: true } : { tastes: false, novelty: false, capital: false };
    init(); paint();
  }));
  root.querySelectorAll("#lb-opts button").forEach((b) => b.addEventListener("click", () => { opts[b.dataset.o] = !opts[b.dataset.o]; paint(); }));
  root.querySelector("#lb-next").addEventListener("click", () => step(false));
  root.querySelector("#lb-rule").addEventListener("click", () => step(true));
  root.querySelector("#lb-auto").addEventListener("click", () => {
    if (autoTimer) return;
    let k = 0;
    autoTimer = setInterval(() => { step(true); if (++k >= 15) { clearInterval(autoTimer); autoTimer = null; } }, 220);
  });
  root.querySelector("#lb-reset").addEventListener("click", () => { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } init(); paint(); });
  paint();
}
