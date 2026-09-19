// 交互演示：网络效应的估值沙盘——200 个估值各异的用户，每个人对网络的估值取决于“已经有多少人在用”。
// 拖动价格与早期种子，逐轮模拟采用/退出，看网络是“翻越临界点”还是“萎缩归零”；
// 右侧对照三条价值曲线：n²（梅特卡夫）、n·log n（奥德里兹科）、以及由异质用户真实加总出来的曲线。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const N = 200;
  // 固定种子的伪随机数，保证每次打开结果一致
  const rng = (seed) => () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };

  const DIST = {
    uniform: { label: T("均匀：在乎程度平均分布", "Uniform: caring spread evenly"), gen: (r) => r() },
    skewed: { label: T("偏态：少数人极在乎，多数人无所谓", "Skewed: a few care a lot, most barely"), gen: (r) => Math.pow(r(), 2.2) },
    bimodal: { label: T("双峰：两群人，一群铁杆一群路人", "Bimodal: die-hards and passers-by"), gen: (r) => (r() < 0.35 ? 0.65 + 0.35 * r() : 0.05 + 0.35 * r()) },
  };

  let dist = "uniform", price = 20, seedPct = 20;
  let thetas = [], seedSet = [];

  const regen = () => {
    const r = rng(20240917);
    thetas = Array.from({ length: N }, () => DIST[dist].gen(r));
    const r2 = rng(777);
    const order = Array.from({ length: N }, (_, i) => i).sort(() => r2() - 0.5);
    seedSet = order;
  };

  // 给定采用比例 x，愿意付 price 的人数
  const willing = (x) => thetas.filter((t) => t * x * 100 >= price).length;

  // 数值求自洽点：x = willing(x)/N
  // 临界点 = 最小的 x>0 使得“愿意的人 ≥ 已在的人”；稳态 = 最大的这样的 x（再往上愿意的人就少于已在的人）
  const fixedPoints = () => {
    let tip = null, steady = null;
    for (let k = 1; k <= 200; k++) {
      const x = k / 200;
      if (willing(x) / N >= x) { if (tip === null) tip = x; steady = x; }
    }
    if (tip === null) return [];
    return steady - tip < 0.02 ? [steady] : [tip, steady];
  };

  const simulate = () => {
    const seedN = Math.round((seedPct / 100) * N);
    const inSet = new Set(seedSet.slice(0, seedN));
    const hist = [inSet.size];
    for (let round = 1; round <= 40; round++) {
      const x = inSet.size / N;
      const next = new Set();
      for (let i = 0; i < N; i++) if (thetas[i] * x * 100 >= price) next.add(i);
      hist.push(next.size);
      const same = next.size === inSet.size;
      inSet.clear(); next.forEach((i) => inSet.add(i));
      if (same) break;
    }
    return { hist, final: inSet };
  };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🕸️ 网络效应沙盘：临界点是怎么被“走”过去的", "🕸️ Network-effect sandbox: how a tipping point gets crossed")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("用户的“在乎程度” θ 怎么分布", "How users' “caring” θ is distributed")}</label>
        <div class="demo-seg" id="nv-dist">${Object.entries(DIST).map(([k, d]) => `<button data-k="${k}" class="${k === dist ? "on" : ""}">${d.label}</button>`).join("")}</div>
        <div class="demo-meta">${T("每个用户对网络的估值 = θ × 已加入比例 × 100。θ 是主观的、因人而异的——这正是阶段 1.2。", "Each user values the network at θ × share-already-in × 100. θ is subjective and differs across people — that is Stage 1.2.")}</div>
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("价格", "Price")}：<b id="nv-p">${price}</b></label>
          <input class="demo-slider" id="nv-price" type="range" min="0" max="40" step="1" value="${price}" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("企业家播下的种子（早期用户比例）", "Entrepreneur's seed (share of early adopters)")}：<b id="nv-s">${seedPct}%</b></label>
          <input class="demo-slider" id="nv-seed" type="range" min="0" max="80" step="1" value="${seedPct}" />
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("逐轮采用（每轮每人重新问自己：值不值这个价？）", "Round by round (each round everyone re-asks: is it worth the price?)")}</label>
        <div class="strip" id="nv-strip"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("最终用户数", "Final users")}</div><div class="v" id="nv-final">–</div></div>
          <div class="stat"><div class="k">${T("轮数", "Rounds")}</div><div class="v" id="nv-rounds">–</div></div>
          <div class="stat"><div class="k">${T("理论临界点 / 稳态", "Theoretical tipping / steady")}</div><div class="v acc" id="nv-fp">–</div></div>
          <div class="stat"><div class="k">${T("边际用户的估值", "Marginal user's valuation")}</div><div class="v" id="nv-marg">–</div></div>
        </div>
        <div class="demo-log" id="nv-log"></div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("网络总价值随用户数怎么长：三条曲线（都以满员 = 100 归一）", "How total network value grows with users: three curves (each normalized to 100 at full size)")}</label>
        <div id="nv-chart"></div>
        <div class="demo-meta" id="nv-chart-meta"></div>
      </div>
      <p class="demo-tip">${T(
        "先把种子拖到 10%，再慢慢往上拖：在某个点之前网络一路萎缩到 0，过了那个点却自己长到稳态——那个点就是临界点，而“把种子撒过临界点”正是企业家在做的事。然后把价格从 20 拖到 26，看临界点与稳态怎么合并、消失。最后看右下的曲线：异质用户真实加总的曲线（金）比 n²（红）平缓得多，而且换一种 θ 分布它的形状就变——没有任何指数能替代对真实用户的发现。",
        "Drag the seed to 10%, then slowly upward: below some point the network withers to 0, past it it grows to the steady state on its own — that point is the tipping point, and “scattering seed past it” is exactly what entrepreneurs do. Then drag the price from 20 to 26 and watch the tipping point and steady state merge and vanish. Finally look at the curves: the heterogeneous-user sum (gold) is far flatter than n² (red), and its shape changes with the θ distribution — no exponent can substitute for discovering the actual users."
      )}</p>
    </div>`;

  const paintChart = () => {
    const sorted = [...thetas].sort((a, b) => b - a);
    const prefix = [0];
    for (let i = 0; i < N; i++) prefix.push(prefix[i] + sorted[i]);
    const sumVal = (n) => { const k = Math.max(0, Math.min(N, Math.round(n))); return prefix[k] * (k / N) * 100; };
    const sumMax = sumVal(N);
    const sq = (n) => 100 * (n * n) / (N * N);
    const nlogn = (n) => (n <= 1 ? 0 : 100 * (n * Math.log(n)) / (N * Math.log(N)));
    const het = (n) => 100 * sumVal(n) / sumMax;
    const res = lineChart({
      fns: [{ f: sq, cls: "line3" }, { f: nlogn, cls: "line2" }, { f: het, cls: "line" }],
      lo: 0, hi: N, xlabel: T("用户数 n", "users n"), forceZero: true, uid: "nv",
    });
    root.querySelector("#nv-chart").innerHTML = chartBlock(res, [
      ["var(--red)", T("n²（梅特卡夫）", "n² (Metcalfe)")],
      ["var(--blue)", T("n·log n（奥德里兹科–蒂利）", "n·log n (Odlyzko–Tilly)")],
      ["var(--orange)", T("异质用户真实加总", "heterogeneous users, actually summed")],
    ]);
    const half = het(N / 2).toFixed(0);
    root.querySelector("#nv-chart-meta").innerHTML = T(
      `用户到一半时，n² 说价值只有满员的 25%，n·log n 说约 ${nlogn(N / 2).toFixed(0)}%，而把这群用户的估值真的加起来是 ${half}%。三条曲线的差别，就是“公式”与“主观估值”的差别。`,
      `At half the users, n² says value is only 25% of full; n·log n says about ${nlogn(N / 2).toFixed(0)}%; actually summing these users' valuations gives ${half}%. The gap between the curves is the gap between “formula” and “subjective valuation.”`
    );
  };

  const paint = () => {
    root.querySelector("#nv-p").textContent = price;
    root.querySelector("#nv-s").textContent = seedPct + "%";
    const { hist, final } = simulate();
    root.querySelector("#nv-strip").innerHTML = thetas.map((t, i) => `<div class="strip-cell ${final.has(i) ? "on" : ""}" title="θ=${t.toFixed(2)}"></div>`).join("");
    root.querySelector("#nv-final").textContent = `${final.size} / ${N}`;
    root.querySelector("#nv-rounds").textContent = hist.length - 1;
    const fps = fixedPoints();
    root.querySelector("#nv-fp").textContent = fps.length ? fps.map((x) => (x * 100).toFixed(0) + "%").join(" / ") : T("无（起不来）", "none (cannot start)");
    const x = final.size / N;
    const margin = final.size ? Math.min(...[...final].map((i) => thetas[i] * x * 100)) : null;
    root.querySelector("#nv-marg").textContent = margin == null ? "–" : margin.toFixed(1) + T(" vs 价格 ", " vs price ") + price;

    const lines = [];
    lines.push(`${T("采用轨迹：", "Adoption path: ")}${hist.map((h) => (h / N * 100).toFixed(0) + "%").join(" → ")}`);
    const seedN = Math.round((seedPct / 100) * N);
    if (final.size === 0) {
      lines.push(`<span class="bad">${T("萎缩归零：种子撒下去，边际用户觉得“人太少，不值这个价”，退出；人更少了，下一批也退出……这就是临界点以下的世界。", "Withered to zero: the seed went in, the marginal user judged “too few people, not worth this price” and left; fewer people, the next batch left … the world below the tipping point.")}</span>`);
      if (fps.length >= 2) lines.push(`<span class="warn">${T(`把种子拖过约 ${(fps[0] * 100).toFixed(0)}%，或把价格降下来，再试一次。`, `Drag the seed past about ${(fps[0] * 100).toFixed(0)}%, or lower the price, and try again.`)}</span>`);
      if (fps.length === 0) lines.push(`<span class="warn">${T("这个价格下根本没有自洽点：无论撒多少种子，网络都起不来——先降价。", "At this price there is no self-consistent point at all: no amount of seed will start the network — cut the price first.")}</span>`);
    } else if (final.size >= seedN) {
      lines.push(`<span class="ok">${T(`翻越临界点：从 ${seedN} 个种子用户长到 ${final.size} 个，自我加强后停在稳态。注意最后一个加入的人估值 ≈ 价格——他就是阶段 1.3 的边际对。`, `Tipped: grew from ${seedN} seeded users to ${final.size}, reinforced itself and settled at the steady state. Note the last joiner's valuation ≈ price — that is the marginal pair of Stage 1.3.`)}</span>`);
    } else {
      lines.push(`<span class="warn">${T(`种子多于稳态：撒了 ${seedN} 个，但只有 ${final.size} 个人真的觉得值这个价——补贴撑不出比稳态更大的网络，多撒的种子会流失。`, `More seed than steady state: ${seedN} were seeded but only ${final.size} actually judge it worth the price — subsidy cannot hold a network above its steady state; the extra seed leaks away.`)}</span>`);
    }
    if (dist === "skewed") lines.push(T("偏态分布下，铁杆用户少而路人多：临界点更高，稳态更小——很多“小众但忠诚”的产品就是这样。", "Under a skewed distribution die-hards are few and passers-by many: a higher tipping point and a smaller steady state — the profile of many “niche but loyal” products."));
    if (dist === "bimodal") lines.push(T("双峰分布下，两群人之间有一道断层：网络要么停在铁杆圈子里，要么一口气吞下路人——“出圈”是跳跃，不是渐进。", "Under a bimodal distribution there is a gap between the two groups: the network either stays in the die-hard circle or swallows the passers-by in one go — “crossing over” is a jump, not a gradient."));
    root.querySelector("#nv-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelector("#nv-price").addEventListener("input", (e) => { price = +e.target.value; paint(); });
  root.querySelector("#nv-seed").addEventListener("input", (e) => { seedPct = +e.target.value; paint(); });
  root.querySelectorAll("#nv-dist button").forEach((b) => b.addEventListener("click", () => {
    dist = b.dataset.k;
    root.querySelectorAll("#nv-dist button").forEach((x) => x.classList.toggle("on", x === b));
    regen(); paintChart(); paint();
  }));

  regen(); paintChart(); paint();
}
