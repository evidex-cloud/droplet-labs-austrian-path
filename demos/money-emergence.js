// 交互演示：货币的涌现——30 个只为自己打算的交易者，每轮随机配对；
// 每个人只接受“自己想要的”或“比手上这件更好出手的”东西。看某一种商品怎样滚雪球成为交换媒介。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const GOODS = [
    { name: T("小麦", "Wheat"), color: "var(--green)" },
    { name: T("盐", "Salt"), color: "var(--orange)" },
    { name: T("布", "Cloth"), color: "var(--blue)" },
    { name: T("贝壳", "Cowries"), color: "var(--red)" },
    { name: T("牛", "Cattle"), color: "var(--muted)" },
  ];
  const DEFAULT_SAL = [0.35, 0.55, 0.45, 0.3, 0.25];
  const N = 30, G = GOODS.length;

  const makeRng = (seed) => { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; };

  let world, sal = DEFAULT_SAL.slice(), seed = 11, timer = null;

  const makeWorld = () => {
    const rng = makeRng(seed);
    const agents = [];
    for (let i = 0; i < N; i++) {
      const p = i % G;
      let w = Math.floor(rng() * (G - 1)); if (w >= p) w++;
      agents.push({ p, w, h: p });
    }
    world = { rng, agents, round: 0, medShare: sal.map(() => 1 / G), hist: [sal.map(() => 1 / G)], direct: 0, indirect: 0, lastAccepted: sal.map(() => 0) };
  };

  // 一轮：随机配对；每人对对方手上的东西做三选一——想要（消费）/ 比我手上的更好卖（当中转物）/ 不要
  const step = () => {
    const { rng, agents } = world;
    const perceived = sal.map((s, g) => s * (0.6 + 1.6 * world.medShare[g]) * (0.9 + 0.2 * rng()));
    const idx = agents.map((_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
    const accepted = sal.map(() => 0);
    const wants = (a, g) => {
      if (g === a.w) return 2;
      if (a.h === a.w || g === a.h) return 0;
      return perceived[g] > perceived[a.h] * 1.02 ? 1 : 0;
    };
    for (let k = 0; k + 1 < idx.length; k += 2) {
      const A = agents[idx[k]], B = agents[idx[k + 1]];
      const a = wants(A, B.h), b = wants(B, A.h);
      if (a && b) {
        const ha = A.h, hb = B.h;
        A.h = hb; B.h = ha;
        if (a === 1) { accepted[hb]++; world.indirect++; }
        if (b === 1) { accepted[ha]++; world.indirect++; }
        if (a === 2) { world.direct++; A.h = A.p; }
        if (b === 2) { world.direct++; B.h = B.p; }
      }
    }
    const hold = sal.map(() => 0); let tot = 0;
    for (const a of agents) if (a.h !== a.p && a.h !== a.w) { hold[a.h]++; tot++; }
    const accTot = accepted.reduce((s, x) => s + x, 0);
    for (let g = 0; g < G; g++) {
      const obs = accTot ? accepted[g] / accTot : (tot ? hold[g] / tot : 1 / G);
      world.medShare[g] = 0.7 * world.medShare[g] + 0.3 * obs;
    }
    world.lastAccepted = accepted;
    world.round++;
    world.hist.push(world.medShare.slice());
  };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧂 货币的涌现：30 个只为自己打算的交易者，谁的商品会变成“钱”", "🧂 The emergence of money: 30 self-interested traders — whose good becomes “money”?")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("各商品的固有可销售性（需求广度、耐久、可分割……）", "Intrinsic saleableness of each good (breadth of demand, durability, divisibility …)")}</label>
          <div id="me-sal"></div>
          <div class="demo-btns">
            <button class="demo-btn" id="me-step">${T("走一轮", "One round")}</button>
            <button class="demo-btn" id="me-run">${T("连跑 25 轮", "Run 25 rounds")}</button>
            <button class="demo-btn" id="me-reset">${T("重置（默认可销售性）", "Reset (default saleableness)")}</button>
            <button class="demo-btn" id="me-shuffle">${T("重置：随机可销售性", "Reset with random saleableness")}</button>
            <button class="demo-btn" id="me-equal">${T("重置：五种商品完全相同", "Reset: all five goods identical")}</button>
          </div>
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("各商品被当作“中转物”（接受但不消费）的份额", "Share of each good accepted as a way-station (accepted but not consumed)")}</label>
          <div id="me-share"></div>
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("30 个交易者此刻手上拿着什么（想要的商品到手就立刻消费，所以手上的通常是产品或中转物）", "What the 30 traders are holding right now (a wanted good is consumed on arrival, so holdings are products or way-stations)")}</label>
        <div class="strip" id="me-strip"></div>
        <div class="demo-meta" id="me-legend"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("轮次", "Round")}</div><div class="v" id="me-round">0</div></div>
          <div class="stat"><div class="k">${T("直接交换（累计）", "Direct swaps (total)")}</div><div class="v" id="me-direct">0</div></div>
          <div class="stat"><div class="k">${T("间接接受（累计）", "Indirect acceptances (total)")}</div><div class="v acc" id="me-indirect">0</div></div>
          <div class="stat"><div class="k">${T("领先商品的份额", "Leading good's share")}</div><div class="v acc" id="me-top">–</div></div>
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("领先商品作为交换媒介的份额，随轮次变化", "The leading good's share as a medium of exchange, round by round")}</label>
        <div id="me-chart"></div>
        <div class="demo-log" id="me-log"></div>
      </div>
      <p class="demo-tip">${T(
        "看<strong>份额条</strong>：起初五种商品被当作中转物的份额差不多；几轮之后，固有可销售性最高的那种开始吃掉其他——这就是门格尔的正反馈。按“随机可销售性”多试几次：赢家通常是最好卖的那个，但偶尔会被路径依赖改写；按“完全相同”你会发现即使五种商品一模一样，反馈也会随机挑出一个赢家——这就是网络效应的本性。",
        "Watch the <strong>share bars</strong>: at first all five goods are used as way-stations about equally; after a few rounds the one with the highest intrinsic saleableness starts eating the others — Menger's positive feedback. Try “random saleableness” several times: the winner is usually the most saleable good, but path dependence occasionally rewrites the result. Try “all identical” and you will see that even with five identical goods, feedback randomly crowns one winner — that is the nature of a network effect."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const pct = (x) => (x * 100).toFixed(0) + "%";

  const paint = () => {
    $("me-sal").innerHTML = GOODS.map((g, i) => `<div class="bar2"><span class="lab">${g.name}</span><div class="track"><div class="fill" style="width:${sal[i] * 100}%;background:${g.color};opacity:.55"></div></div><span class="val">${sal[i].toFixed(2)}</span></div>`).join("");
    const top = world.medShare.reduce((b, x, i) => (x > world.medShare[b] ? i : b), 0);
    $("me-share").innerHTML = GOODS.map((g, i) => `<div class="bar2"><span class="lab" style="${i === top ? "color:var(--orange-ink);font-weight:700" : ""}">${g.name}</span><div class="track"><div class="fill" style="width:${world.medShare[i] * 100}%;background:${g.color}"></div></div><span class="val">${pct(world.medShare[i])}</span></div>`).join("");
    $("me-strip").innerHTML = world.agents.map((a) => `<div class="strip-cell" title="${GOODS[a.h].name}" style="width:14px;height:22px;background:${GOODS[a.h].color};border-color:${GOODS[a.h].color};opacity:${a.h === a.p ? 0.45 : 1}"></div>`).join("");
    $("me-legend").innerHTML = GOODS.map((g) => `<span style="display:inline-flex;align-items:center;gap:4px;margin-right:12px"><i style="width:10px;height:10px;border-radius:2px;background:${g.color};display:inline-block"></i>${g.name}</span>`).join("") + `<span style="color:var(--muted)">${T("（淡色 = 拿着自己的产品；深色 = 拿着中转物）", "(faded = holding own product; solid = holding a way-station)")}</span>`;
    $("me-round").textContent = world.round;
    $("me-direct").textContent = world.direct;
    $("me-indirect").textContent = world.indirect;
    $("me-top").textContent = GOODS[top].name + " " + pct(world.medShare[top]);

    const hist = world.hist;
    const hi = Math.max(10, hist.length - 1);
    const f = (x) => { const i = Math.min(hist.length - 1, Math.max(0, Math.round(x))); return hist[i][top] * 100; };
    const f2 = (x) => { const i = Math.min(hist.length - 1, Math.max(0, Math.round(x))); const others = hist[i].filter((_, g) => g !== top); return Math.max(...others) * 100; };
    const res = lineChart({ fns: [{ f, cls: "line" }, { f: f2, cls: "line2" }], lo: 0, hi, xlabel: T("轮次", "round"), forceZero: true, uid: "me", H: 220 });
    $("me-chart").innerHTML = chartBlock(res, [["var(--orange)", T("领先商品 " + GOODS[top].name + " 的份额 %", "Leading good (" + GOODS[top].name + ") share %")], ["var(--blue)", T("第二名的份额 %", "Runner-up share %")]]);

    const lines = [];
    const rank = sal.map((s, i) => i).sort((a, b) => sal[b] - sal[a]);
    if (world.round === 0) {
      lines.push(T("每个人生产一种商品、想要另一种。每轮随机配对：如果对方手上正好是我想要的，就换来消费；如果不是，但它比我手上的<b>更好出手</b>（固有可销售性 × 别人接受它的频率），我也换——不是为了用，是为了下一次更好卖。", "Each trader produces one good and wants another. Each round they pair off at random: if the other person holds what I want, I swap and consume; if not, but it is <b>easier to sell on</b> than what I hold (intrinsic saleableness × how often others have been accepting it), I swap anyway — not to use it, but because it will sell better next time."));
    } else {
      if (world.medShare[top] > 0.6) lines.push(`<span class="ok">${T(GOODS[top].name + " 已被 " + pct(world.medShare[top]) + " 的间接交换采用——它成了这个村子的“钱”。没有任何人下令，每个人只是在挑更好出手的东西。", GOODS[top].name + " now carries " + pct(world.medShare[top]) + " of indirect exchange — it has become this village's “money.” Nobody ordered it; everyone merely picked the good that was easier to sell on.")}</span>`);
      else lines.push(`<span class="warn">${T("还在竞争中：领先的是 " + GOODS[top].name + "（" + pct(world.medShare[top]) + "）。继续跑几轮，看正反馈把差距拉开。", "Still contested: " + GOODS[top].name + " leads at " + pct(world.medShare[top]) + ". Run a few more rounds and watch feedback widen the gap.")}</span>`);
      if (top !== rank[0]) lines.push(`<span class="bad">${T("注意：固有可销售性最高的是 " + GOODS[rank[0]].name + "（" + sal[rank[0]].toFixed(2) + "），但赢家是 " + GOODS[top].name + "。早期的偶然采用被正反馈锁定了——门格尔的逻辑说“最好卖的倾向于赢”，不是“必然赢”。", "Note: the highest intrinsic saleableness belongs to " + GOODS[rank[0]].name + " (" + sal[rank[0]].toFixed(2) + "), yet " + GOODS[top].name + " won. Early accidental adoption was locked in by feedback — Menger's logic says the most saleable good *tends* to win, not that it must.")}</span>`);
      else lines.push(T("固有可销售性最高的 " + GOODS[rank[0]].name + " 正在赢——它的领先被每一个“为了下一次更好卖”的决定放大。", "The most saleable good, " + GOODS[rank[0]].name + ", is winning — its lead is amplified by every “easier to sell next time” decision."));
      const ratio = world.direct + world.indirect ? world.indirect / (world.direct + world.indirect) : 0;
      lines.push(T("到目前为止，" + pct(ratio) + " 的接受行为是“间接”的（接受自己不消费的东西）。间接交换的占比，就是这个经济体货币化的程度。", "So far " + pct(ratio) + " of acceptances were “indirect” (taking something one will not consume). The share of indirect exchange is how monetized this economy has become."));
    }
    $("me-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  const stopTimer = () => { if (timer) { clearInterval(timer); timer = null; $("me-run").textContent = T("连跑 25 轮", "Run 25 rounds"); } };
  $("me-step").addEventListener("click", () => { stopTimer(); step(); paint(); });
  $("me-run").addEventListener("click", () => {
    if (timer) { stopTimer(); return; }
    let n = 0; $("me-run").textContent = T("停止", "Stop");
    timer = setInterval(() => { step(); paint(); if (++n >= 25) stopTimer(); }, 160);
  });
  const reset = (newSal) => { stopTimer(); sal = newSal; seed = (seed * 7 + 3) % 1000 + 1; makeWorld(); paint(); };
  $("me-reset").addEventListener("click", () => reset(DEFAULT_SAL.slice()));
  $("me-shuffle").addEventListener("click", () => { const r = makeRng(Date.now() & 0xffff); reset(GOODS.map(() => +(0.2 + 0.5 * r()).toFixed(2))); });
  $("me-equal").addEventListener("click", () => reset(GOODS.map(() => 0.4)));

  makeWorld();
  paint();
}
