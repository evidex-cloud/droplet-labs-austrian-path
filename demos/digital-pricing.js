// 交互演示：零边际成本定价——1,000 个用户各有自己的愿付价（分布形状可选），复制成本为 0。
// 拖动价格，看收入、服务人数与“边际买家”；加一档专业版（版本化），看收入与覆盖同时上升；
// 对照“按边际成本定价”（收入 0）与固定成本能否回收。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const N = 1000;
  const rng = (seed) => () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };

  const SHAPES = {
    uniform: { label: T("均匀：从 100 到 0", "Uniform: 100 down to 0"), gen: (r) => r() * 100 },
    longtail: { label: T("长尾：少数人极想要，多数人只想要一点", "Long tail: a few want it badly, most only a little"), gen: (r) => 100 * Math.pow(r(), 3) },
    bimodal: { label: T("双峰：铁杆 vs 路人", "Bimodal: fans vs casuals"), gen: (r) => (r() < 0.25 ? 60 + 40 * r() : 25 * r()) },
  };

  let shape = "uniform", price = 50, pro = false, proPrice = 80, proMult = 1.6, fixed = 30000;
  let wtp = [];

  const regen = () => {
    const r = rng(1234567);
    wtp = Array.from({ length: N }, () => SHAPES[shape].gen(r)).sort((a, b) => b - a);
  };

  // 每个用户在“基础版 / 专业版 / 不买”里选剩余最大的那个；专业版对他的价值 = 基础版价值 × proMult
  const compute = () => {
    let basic = 0, proN = 0, rev = 0, marginal = null;
    for (const w of wtp) {
      const sB = w - price, sP = pro ? w * proMult - proPrice : -Infinity;
      if (sP >= 0 && sP >= sB) { proN++; rev += proPrice; marginal = w; }
      else if (sB >= 0) { basic++; rev += price; marginal = w; }
    }
    return { basic, proN, served: basic + proN, rev, marginal, unserved: N - basic - proN };
  };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("💾 零边际成本定价沙盘：价格只剩评价", "💾 Zero-marginal-cost pricing sandbox: price is nothing but valuation")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("1,000 个用户的愿付价怎么分布", "How the 1,000 users' willingness to pay is distributed")}</label>
        <div class="demo-seg" id="dp-shape">${Object.entries(SHAPES).map(([k, s]) => `<button data-k="${k}" class="${k === shape ? "on" : ""}">${s.label}</button>`).join("")}</div>
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("基础版价格", "Basic price")}：<b id="dp-p">${price}</b></label>
          <input class="demo-slider" id="dp-price" type="range" min="0" max="100" step="1" value="${price}" />
          <label class="demo-label">${T("第一份的固定成本（开发费）", "Fixed cost of the first copy (development)")}：<b id="dp-f">${fixed.toLocaleString()}</b></label>
          <input class="demo-slider" id="dp-fixed" type="range" min="0" max="60000" step="1000" value="${fixed}" />
        </div>
        <div class="demo-block">
          <div class="demo-btns"><button class="demo-btn" id="dp-pro">${T("加一档“专业版”（版本化）", "Add a “Pro” tier (versioning)")}</button></div>
          <label class="demo-label">${T("专业版价格", "Pro price")}：<b id="dp-pp">${proPrice}</b></label>
          <input class="demo-slider" id="dp-proprice" type="range" min="0" max="160" step="1" value="${proPrice}" />
          <label class="demo-label">${T("专业版对用户的价值 = 基础版 ×", "Pro's value to a user = Basic ×")}<b id="dp-pm">${proMult}</b></label>
          <input class="demo-slider" id="dp-promult" type="range" min="1" max="2.5" step="0.1" value="${proMult}" />
        </div>
      </div>
      <div class="demo-block">
        <div id="dp-chart"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("收入", "Revenue")}</div><div class="v acc" id="dp-rev">–</div></div>
          <div class="stat"><div class="k">${T("服务人数", "Users served")}</div><div class="v" id="dp-served">–</div></div>
          <div class="stat"><div class="k">${T("边际买家的愿付", "Marginal buyer's WTP")}</div><div class="v" id="dp-marg">–</div></div>
          <div class="stat"><div class="k">${T("固定成本回收", "Fixed-cost recovery")}</div><div class="v" id="dp-profit">–</div></div>
        </div>
        <div class="cmp" id="dp-cmp"></div>
        <div class="demo-log" id="dp-log"></div>
      </div>
      <p class="demo-tip">${T(
        "先拖价格找收入最高点——注意它和“复制成本 = 0”毫无关系，只和阶梯的形状有关；换一种分布，最优价立刻变。然后加专业版，再把基础版价格降到 40：收入和服务人数同时超过最优单一价——那块“无谓损失”变成了被发现的客户。最后把固定成本拉到 40,000：单一价回收不了，两档能——这就是为什么“第一份”的成本要靠企业家去发现价格结构，而不是靠“价格 = 边际成本”。",
        "Drag the price to find the revenue peak — note it has nothing to do with “copy cost = 0,” only with the staircase's shape; switch the distribution and the best price moves at once. Then add the Pro tier and lower the Basic price to 40: revenue and users served both beat the best single price — the “deadweight loss” becomes discovered customers. Finally push fixed cost to 40,000: one price cannot recover it, two tiers can — which is why the cost of the “first copy” is recovered by entrepreneurs discovering a price structure, not by “price = marginal cost.”"
      )}</p>
    </div>`;

  const fmt = (n) => Math.round(n).toLocaleString();

  const paint = () => {
    root.querySelector("#dp-p").textContent = price;
    root.querySelector("#dp-pp").textContent = proPrice;
    root.querySelector("#dp-pm").textContent = proMult;
    root.querySelector("#dp-f").textContent = fixed.toLocaleString();
    root.querySelector("#dp-pro").classList.toggle("active", pro);
    const c = compute();
    root.querySelector("#dp-rev").textContent = fmt(c.rev);
    root.querySelector("#dp-served").textContent = `${c.served} / ${N}`;
    root.querySelector("#dp-marg").textContent = c.marginal == null ? "–" : c.marginal.toFixed(1);
    const profit = c.rev - fixed;
    const pe = root.querySelector("#dp-profit");
    pe.textContent = (profit >= 0 ? "+" : "") + fmt(profit);
    pe.className = "v " + (profit >= 0 ? "pos" : "neg");

    // 最优单一价（网格搜索）
    let bestP = 0, bestR = 0;
    for (let p = 0; p <= 100; p++) { let r = 0; for (const w of wtp) if (w >= p) r += p; if (r > bestR) { bestR = r; bestP = p; } }

    root.querySelector("#dp-cmp").innerHTML = `
      <div class="cmp-cell cold"><h5>${T("教科书：价格 = 边际成本 = 0", "Textbook: price = marginal cost = 0")}</h5>
        <div>${T("服务人数", "Users served")}：<b>1,000</b> · ${T("收入", "revenue")}：<b>0</b><br>${T("固定成本回收", "fixed cost recovered")}：<b style="color:var(--red)">−${fmt(fixed)}</b><br><span class="demo-meta">${T("谁来写第一份？", "Who writes the first copy?")}</span></div></div>
      <div class="cmp-cell hl"><h5>${T("你的定价", "Your pricing")}${pro ? T("（两档）", " (two tiers)") : T("（单一价）", " (one price)")}</h5>
        <div>${T("服务人数", "Users served")}：<b>${c.served}</b>${pro ? `（${T("专业版", "Pro")} ${c.proN} + ${T("基础版", "Basic")} ${c.basic}）` : ""} · ${T("收入", "revenue")}：<b>${fmt(c.rev)}</b><br>${T("固定成本回收", "fixed cost recovered")}：<b style="color:${profit >= 0 ? "var(--green)" : "var(--red)"}">${(profit >= 0 ? "+" : "") + fmt(profit)}</b><br><span class="demo-meta">${T(`最优单一价 ≈ ${bestP}（收入 ${fmt(bestR)}）`, `best single price ≈ ${bestP} (revenue ${fmt(bestR)})`)}</span></div></div>`;

    const lines = [];
    lines.push(T(`价格 ${price}：愿付 ≥ ${price} 的人买，边际买家的愿付 ≈ ${c.marginal == null ? "—" : c.marginal.toFixed(1)}。收入 ${fmt(c.rev)} 里没有一分钱来自复制成本。`, `Price ${price}: those with WTP ≥ ${price} buy; the marginal buyer's WTP ≈ ${c.marginal == null ? "—" : c.marginal.toFixed(1)}. Not a cent of the ${fmt(c.rev)} revenue comes from copy cost.`));
    if (pro) {
      const bestN = wtp.filter((w) => w >= bestP).length;
      const dR = c.rev - bestR, dN = c.served - bestN;
      lines.push(`<span class="${dR > 0 && dN >= 0 ? "ok" : "warn"}">${T(`版本化：相比最优单一价 ${bestP}（收入 ${fmt(bestR)}、服务 ${bestN} 人），现在收入 ${dR >= 0 ? "+" : ""}${fmt(dR)}，服务人数 ${dN >= 0 ? "+" : ""}${dN}。${dR > 0 && dN > 0 ? "收入与覆盖同时上升——愿付高的人自己选了专业版，愿付低的人留在基础版，本来被挡在门外的人也进来了。" : dR > 0 ? "收入上升了，但覆盖没变：把基础版价格降下来，让专业版去收高评价的人、基础版去接低评价的人。" : "这一刀切得不好：试试把专业版价格调到基础版价格 × 专业版倍数以上，再把基础版价格降下来。"}`, `Versioning: vs. the best single price ${bestP} (revenue ${fmt(bestR)}, ${bestN} served), revenue is now ${dR >= 0 ? "+" : ""}${fmt(dR)} and users served ${dN >= 0 ? "+" : ""}${dN}. ${dR > 0 && dN > 0 ? "Revenue and coverage rise together — high valuers sorted themselves into Pro, low valuers stayed on Basic, and people once shut out got in." : dR > 0 ? "Revenue rose but coverage did not: lower the Basic price so Pro collects from high valuers and Basic catches low valuers." : "That cut is poorly placed: set the Pro price above Basic price × Pro multiplier, then lower the Basic price."}`)}</span>`);
    }
    lines.push(T(`未被服务的 ${c.unserved} 人：主流叫“无谓损失”，奥派叫“等待企业家发现的客户”——免费版、学生版、广告版都是切向他们的下一刀。`, `${c.unserved} users unserved: “deadweight loss” to the mainstream, “customers awaiting entrepreneurial discovery” to Austrians — a free tier, a student edition, an ad-supported version are the next cuts aimed at them.`));
    if (profit < 0) lines.push(`<span class="bad">${T(`固定成本 ${fmt(fixed)} 没有回收：按这个价格结构，第一份不该被写出来——除非企业家能发现更好的结构，或者利率低到让远期收入的现值撑得起它（阶段 3.1、5.2）。`, `Fixed cost of ${fmt(fixed)} not recovered: at this price structure the first copy should not be written — unless an entrepreneur discovers a better structure, or the interest rate is low enough that the present value of distant revenue carries it (Stages 3.1, 5.2).`)}</span>`);
    else lines.push(`<span class="ok">${T(`固定成本回收了，余下 ${fmt(profit)} 是企业家判断正确的回报（阶段 6.3）。`, `Fixed cost recovered; the remaining ${fmt(profit)} is the return to correct entrepreneurial judgment (Stage 6.3).`)}</span>`);
    root.querySelector("#dp-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");

    const fns = [{ f: (i) => wtp[Math.max(0, Math.min(N - 1, Math.round(i)))], cls: "line" }, { f: () => price, cls: "line3" }, { f: () => 0, cls: "line4" }];
    if (pro) fns.push({ f: () => proPrice / proMult, cls: "line2" });
    const res = lineChart({ fns, lo: 0, hi: N - 1, xlabel: T("用户（按愿付价从高到低）", "users (ranked by WTP, high to low)"), forceZero: true, uid: "dp", markerX: c.served, markerLabel: T("边际买家", "marginal buyer") });
    const legend = [["var(--orange)", T("愿付价阶梯", "WTP staircase")], ["var(--red)", T("基础版价格", "Basic price")], ["var(--green)", T("边际成本 = 0", "marginal cost = 0")]];
    if (pro) legend.push(["var(--blue)", T("专业版的“基础版等价价格”", "Pro price in Basic-equivalent terms")]);
    root.querySelector("#dp-chart").innerHTML = chartBlock(res, legend);
  };

  root.querySelector("#dp-price").addEventListener("input", (e) => { price = +e.target.value; paint(); });
  root.querySelector("#dp-fixed").addEventListener("input", (e) => { fixed = +e.target.value; paint(); });
  root.querySelector("#dp-proprice").addEventListener("input", (e) => { proPrice = +e.target.value; paint(); });
  root.querySelector("#dp-promult").addEventListener("input", (e) => { proMult = +e.target.value; paint(); });
  root.querySelector("#dp-pro").addEventListener("click", () => { pro = !pro; paint(); });
  root.querySelectorAll("#dp-shape button").forEach((b) => b.addEventListener("click", () => {
    shape = b.dataset.k;
    root.querySelectorAll("#dp-shape button").forEach((x) => x.classList.toggle("on", x === b));
    regen(); paint();
  }));
  regen(); paint();
}
