// 交互演示：边际效用阶梯——拖动“你拥有几桶水/几颗钻石”，看每一单位的价值怎么随边际用途跳变；
// 右侧对照“总效用”，直观看到“总用处大 ≠ 单位价值高”，钻石与水的悖论当场消失。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 两种商品的“需求阶梯”：按重要性排好的用途（序数，但为了画图给一个示意分值）
  const goods = {
    water: {
      name: T("水（桶）", "Water (buckets)"),
      icon: "💧",
      max: 12,
      uses: [
        [T("活命", "Survive"), 10], [T("做饭", "Cook"), 8], [T("给狗喝", "The dog"), 6], [T("洗脸", "Wash"), 4],
        [T("浇仙人掌", "The cactus"), 2], [T("洗衣服", "Laundry"), 1.5], [T("擦地", "Mop the floor"), 1], [T("洗车", "Wash the car"), 0.8],
        [T("浇草坪", "Water the lawn"), 0.5], [T("装饰喷泉", "A fountain"), 0.3], [T("打水仗", "A water fight"), 0.2], [T("倒掉", "Pour it out"), 0.05],
      ],
    },
    diamond: {
      name: T("钻石（颗）", "Diamonds (stones)"),
      icon: "💎",
      max: 6,
      uses: [
        [T("求婚戒指", "Engagement ring"), 9], [T("传家宝", "Family heirloom"), 6], [T("送母亲", "Gift for mother"), 4],
        [T("袖扣", "Cufflinks"), 2], [T("收藏", "Collection"), 1], [T("压箱底", "Bottom of a drawer"), 0.4],
      ],
    },
  };

  let qty = { water: 5, diamond: 1 };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🪜 边际效用阶梯：你手上的每一单位到底值多少", "🪜 The marginal-utility staircase: what each unit in your hand is really worth")}</div>
      <div class="demo-grid" id="mu-grid">
        ${["water", "diamond"].map((k) => `
          <div class="demo-block">
            <label class="demo-label">${goods[k].icon} ${goods[k].name}：<b id="mu-q-${k}">${qty[k]}</b></label>
            <input class="demo-slider" type="range" min="0" max="${goods[k].max}" step="1" value="${qty[k]}" data-good="${k}" />
            <div class="stages" id="mu-stairs-${k}"></div>
            <div class="stat-row">
              <div class="stat"><div class="k">${T("边际用途", "Marginal use")}</div><div class="v acc" id="mu-mu-${k}">–</div></div>
              <div class="stat"><div class="k">${T("每单位价值", "Value per unit")}</div><div class="v" id="mu-val-${k}">–</div></div>
              <div class="stat"><div class="k">${T("总效用（示意）", "Total utility (illustrative)")}</div><div class="v" id="mu-tot-${k}">–</div></div>
            </div>
          </div>`).join("")}
      </div>
      <div class="demo-block">
        <div class="demo-log" id="mu-log"></div>
      </div>
      <p class="demo-tip">${T(
        "看两个数字：<strong>总效用</strong>水远大于钻石——那是“整类东西的用处”；<strong>每单位价值</strong>却是钻石远大于水——那是“再多一单位的用处”。把水拖到 1 桶、钻石拖到 6 颗，价值会反转：稀缺决定边际，边际决定价格。",
        "Watch two numbers: <strong>total utility</strong> is far higher for water — that is “the usefulness of the whole class”; <strong>value per unit</strong> is far higher for diamonds — that is “the usefulness of one more unit.” Drag water down to 1 bucket and diamonds up to 6 and the values flip: scarcity sets the margin, the margin sets the price."
      )}</p>
    </div>`;

  const paint = () => {
    const out = {};
    for (const k of ["water", "diamond"]) {
      const g = goods[k], n = qty[k];
      root.querySelector(`#mu-q-${k}`).textContent = n;
      const maxImp = g.uses[0][1];
      root.querySelector(`#mu-stairs-${k}`).innerHTML = g.uses.map(([u, imp], i) => {
        const on = i < n, marginal = i === n - 1;
        return `<div class="stage-bar">
          <span class="lab" style="${marginal ? "color:var(--orange-ink);font-weight:700" : ""}">${i + 1}. ${u}</span>
          <div class="track"><div class="fill" style="width:${(imp / maxImp) * 100}%;opacity:${on ? (marginal ? 1 : 0.45) : 0.08};${marginal ? "outline:2px solid var(--red);outline-offset:-2px" : ""}"></div></div>
          <span class="val" style="color:${on ? "var(--ink)" : "var(--muted)"}">${imp}</span>
        </div>`;
      }).join("");
      const mu = n > 0 ? g.uses[n - 1] : null;
      const total = g.uses.slice(0, n).reduce((s, [, imp]) => s + imp, 0);
      root.querySelector(`#mu-mu-${k}`).textContent = mu ? mu[0] : T("（没有）", "(none)");
      root.querySelector(`#mu-val-${k}`).textContent = mu ? mu[1] : T("无穷大？", "∞?");
      root.querySelector(`#mu-tot-${k}`).textContent = total.toFixed(2).replace(/\.?0+$/, "");
      out[k] = { mu, total, n };
    }
    const w = out.water, d = out.diamond;
    const lines = [];
    if (w.n === 0 || d.n === 0) {
      lines.push(`<span class="warn">${T("拥有 0 单位时，“再多一单位”会服务最重要的用途——所以第一单位的价值最高。这就是为什么沙漠里的第一桶水贵过一颗钻石。", "With 0 units, “one more unit” would serve the most important use — so the first unit is worth the most. That is why the first bucket in a desert beats a diamond.")}</span>`);
    }
    if (w.mu && d.mu) {
      const cmp = d.mu[1] > w.mu[1];
      lines.push(`${T("总效用：水", "Total utility: water")} ${w.total.toFixed(1)} ${T("vs 钻石", "vs diamonds")} ${d.total.toFixed(1)} → <span class="${w.total > d.total ? "ok" : "warn"}">${w.total > d.total ? T("水“更有用”", "water is “more useful”") : T("钻石总效用反超", "diamonds now lead in total")}</span>`);
      lines.push(`${T("每单位价值：水", "Value per unit: water")} ${w.mu[1]}（${w.mu[0]}）${T("vs 钻石", "vs diamond")} ${d.mu[1]}（${d.mu[0]}）→ <span class="${cmp ? "bad" : "ok"}">${cmp ? T("一颗钻石 > 一桶水——“悖论”出现，但只是因为你比较错了东西", "one diamond > one bucket — the “paradox” appears, only because you compared the wrong things") : T("一桶水 > 一颗钻石——水稀缺时悖论消失", "one bucket > one diamond — the paradox vanishes when water is scarce")}</span>`);
      const ratio = w.mu[1] > 0 ? (d.mu[1] / w.mu[1]) : Infinity;
      lines.push(`${T("按边际价值，此刻 1 颗钻石 ≈", "By marginal value, right now 1 diamond ≈")} <b>${isFinite(ratio) ? ratio.toFixed(1) : "∞"}</b> ${T("桶水。这就是交换比率的来源——不是劳动，不是总用处，是两条阶梯上各自的边际那一级。", "buckets of water. That is where the exchange ratio comes from — not labor, not total usefulness, but the marginal step on each staircase.")}`);
    }
    root.querySelector("#mu-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelectorAll("[data-good]").forEach((sl) => sl.addEventListener("input", () => {
    qty[sl.dataset.good] = +sl.value;
    paint();
  }));
  paint();
}
