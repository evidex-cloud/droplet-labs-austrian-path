// 交互演示：资本拼图——选一个生产计划，把互补的资本品拼进去；然后按下“需求冲击”，
// 看哪些拼图能折价重组、哪些彻底搁浅，算出真实损失；再切到“橡皮泥资本”，看主流模型怎么把损失定义掉。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);
  const money = (v) => (en ? "$" + v.toFixed(v >= 100 ? 0 : 1) + "k" : v.toFixed(v >= 100 ? 0 : 1) + " 万");

  const PLANS = {
    bakery: { n: T("街角面包房", "Corner bakery"), icon: "🥐" },
    fab: { n: T("芯片代工厂", "Chip foundry"), icon: "🔬" },
    dc: { n: T("AI 数据中心", "AI data center"), icon: "🖥️" },
  };
  // fits: 能进入哪些计划；alt: 原计划外的最佳替代用途保留比例（专用性越高越低）
  const GOODS = [
    { id: "van", n: T("送货车", "Delivery van"), cost: 3, fits: ["bakery", "fab", "dc"], alt: 0.85, tag: T("通用", "general") },
    { id: "shop", n: T("临街铺面", "Storefront lease"), cost: 2, fits: ["bakery"], alt: 0.9, tag: T("通用", "general") },
    { id: "oven", n: T("专业烤箱", "Professional oven"), cost: 5, fits: ["bakery"], alt: 0.6, tag: T("中等专用", "semi-specific") },
    { id: "molds", n: T("定制蛋糕模具", "Custom cake molds"), cost: 1, fits: ["bakery"], alt: 0.1, tag: T("高度专用", "highly specific") },
    { id: "chef", n: T("面点师培训", "Chef training"), cost: 1, fits: ["bakery"], alt: 0.6, tag: T("人力资本", "human capital") },
    { id: "litho", n: T("光刻机", "Lithography tool"), cost: 150, fits: ["fab"], alt: 0.35, tag: T("高度专用", "highly specific") },
    { id: "clean", n: T("洁净室厂房", "Clean-room building"), cost: 60, fits: ["fab", "dc"], alt: 0.5, tag: T("中等专用", "semi-specific") },
    { id: "power", n: T("变电站与供电", "Substation & power"), cost: 20, fits: ["fab", "dc"], alt: 0.8, tag: T("通用", "general") },
    { id: "gpu", n: T("GPU 集群", "GPU cluster"), cost: 80, fits: ["dc"], alt: 0.4, tag: T("专用", "specific") },
    { id: "cool", n: T("液冷系统", "Liquid cooling"), cost: 15, fits: ["dc", "fab"], alt: 0.5, tag: T("中等专用", "semi-specific") },
    { id: "data", n: T("专有训练数据", "Proprietary training data"), cost: 25, fits: ["dc"], alt: 0.05, tag: T("极端专用", "extremely specific") },
    { id: "ml", n: T("算法团队", "ML engineering team"), cost: 30, fits: ["dc", "fab"], alt: 0.7, tag: T("人力资本", "human capital") },
  ];

  let plan = "bakery";
  let chosen = new Set(["van", "shop", "oven", "molds", "chef"]);
  let shocked = false;
  let putty = false;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧩 资本拼图：拼一个计划，然后让它失败", "🧩 The capital jigsaw: assemble a plan, then let it fail")}</div>
      <div class="demo-block">
        <div class="demo-row">
          <div class="demo-seg" id="cj-plans">${Object.entries(PLANS).map(([k, p]) => `<button data-plan="${k}" class="${k === plan ? "on" : ""}">${p.icon} ${p.n}</button>`).join("")}</div>
          <div class="demo-seg" id="cj-putty"><button data-putty="0" class="on">${T("拼图资本（拉赫曼）", "Jigsaw capital (Lachmann)")}</button><button data-putty="1">${T("橡皮泥资本（索洛 K）", "Putty capital (Solow's K)")}</button></div>
        </div>
        <label class="demo-label">${T("点击资本品把它拼进计划（灰色的与这个计划不互补）：", "Click capital goods to fit them into the plan (greyed ones are not complementary to this plan):")}</label>
        <div class="demo-grid-3" id="cj-grid"></div>
      </div>
      <div class="demo-btns">
        <button class="demo-btn" id="cj-shock"></button>
        <button class="demo-btn" id="cj-reset">${T("重来", "Reset")}</button>
      </div>
      <div class="stat-row" id="cj-stats"></div>
      <div class="demo-log" id="cj-log" style="margin-top:10px"></div>
      <p class="demo-tip">${T(
        "先看“计划里的价值”：互补的拼图拼在一起时，整体比零件之和更值钱。按下“需求冲击”后看三个数：<strong>可重组</strong>（通用件，折价进别的计划）、<strong>搁浅</strong>（专用件，谁的计划都进不去）、<strong>真实损失</strong>。再切到“橡皮泥资本”：损失变成 0——不是因为损失消失了，而是模型假设资本可以无成本重捏。这个假设一旦成立，错误投资和商业周期就都不存在了。",
        "First watch “value in the plan”: complementary pieces locked together are worth more than the sum of the parts. After the demand shock, read three numbers: <strong>recombinable</strong> (general pieces, discounted into other plans), <strong>stranded</strong> (specific pieces no plan will take), and the <strong>real loss</strong>. Then switch to “putty capital”: the loss becomes 0 — not because it vanished, but because the model assumes capital reshapes costlessly. Grant that assumption and malinvestment and the business cycle both cease to exist."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const compat = (g) => g.fits.includes(plan);
  const inPlan = () => GOODS.filter((g) => chosen.has(g.id) && compat(g));

  const paint = () => {
    const sel = inPlan();
    const cost = sel.reduce((a, g) => a + g.cost, 0);
    const bonus = sel.length >= 4 ? 0.25 : sel.length >= 2 ? 0.1 : 0;   // 互补性溢价
    const planValue = cost * (1 + bonus);

    $("cj-grid").innerHTML = GOODS.map((g) => {
      const ok = compat(g), on = chosen.has(g.id) && ok;
      const retain = putty ? 1 : g.alt;
      let after = "";
      if (shocked && on) {
        const v = g.cost * retain;
        const stranded = retain <= 0.2;
        after = `<div style="margin-top:6px;font-size:12px"><span class="pill ${stranded ? "bad" : "ok"}">${stranded ? T("搁浅", "stranded") : T("可重组", "recombinable")}</span> <span style="color:${stranded ? "var(--red)" : "var(--ink)"}">${money(g.cost)} → ${money(v)}</span></div>`;
      }
      return `<div class="cmp-cell ${on ? "hl" : ""}" data-good="${g.id}" style="cursor:${ok ? "pointer" : "not-allowed"};opacity:${ok ? 1 : 0.4};padding:10px">
        <div style="font-weight:600;font-size:13.5px;color:var(--ink)">${g.n}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:3px">${money(g.cost)} · ${g.tag}</div>
        ${after}
      </div>`;
    }).join("");

    $("cj-shock").textContent = shocked ? T("⚡ 已发生需求冲击（计划失败）", "⚡ Demand shock applied (plan failed)") : T("⚡ 需求冲击：这个计划的产品没人要了", "⚡ Demand shock: nobody wants this plan's product");
    $("cj-shock").disabled = shocked || sel.length === 0;

    let stats = `
      <div class="stat"><div class="k">${T("拼进计划的资本品", "Pieces in the plan")}</div><div class="v">${sel.length}</div></div>
      <div class="stat"><div class="k">${T("投入成本", "Cost put in")}</div><div class="v">${money(cost)}</div></div>
      <div class="stat"><div class="k">${T("计划里的价值（含互补溢价）", "Value in the plan (incl. complementarity)")}</div><div class="v acc">${money(planValue)}</div></div>`;
    const lines = [];
    if (!shocked) {
      lines.push(T(
        sel.length >= 4 ? "四件以上互补的资本品拼在一起，整体价值比零件之和高 " + Math.round(bonus * 100) + "%——这就是互补性：烤箱的价值来自它旁边有铺面、面点师和货车。" : sel.length > 0 ? "拼图还太少，互补性溢价只有 " + Math.round(bonus * 100) + "%。再拼几块看看。" : "还没有拼任何东西。点击上面的资本品。",
        sel.length >= 4 ? "Four or more complementary pieces locked together are worth " + Math.round(bonus * 100) + "% more than the sum of the parts — that is complementarity: the oven is valuable because the storefront, chef and van sit next to it." : sel.length > 0 ? "Too few pieces yet; the complementarity premium is only " + Math.round(bonus * 100) + "%. Fit a few more." : "Nothing assembled yet. Click the goods above."
      ));
      lines.push(T("这些资本品单独看都不值它们的价格——它们的价值在这个计划里。现在按下需求冲击，让计划失败。", "None of these goods is worth its price on its own — the value lives in this plan. Now apply the demand shock and let the plan fail."));
    } else {
      const rec = sel.map((g) => ({ g, v: g.cost * (putty ? 1 : g.alt), stranded: !putty && g.alt <= 0.2 }));
      const recovered = rec.reduce((a, r) => a + r.v, 0);
      const stranded = rec.filter((r) => r.stranded);
      const recomb = rec.filter((r) => !r.stranded);
      const loss = planValue - recovered;
      stats += `
        <div class="stat"><div class="k">${T("可重组", "Recombinable")}</div><div class="v pos">${recomb.length}</div></div>
        <div class="stat"><div class="k">${T("搁浅", "Stranded")}</div><div class="v neg">${stranded.length}</div></div>
        <div class="stat"><div class="k">${T("重组后拿回", "Recovered")}</div><div class="v">${money(recovered)}</div></div>
        <div class="stat"><div class="k">${T("真实损失", "Real loss")}</div><div class="v ${loss > 0.05 ? "neg" : ""}">${money(loss)}${planValue > 0 ? "（" + Math.round(loss / planValue * 100) + "%）" : ""}</div></div>`;
      if (putty) {
        lines.push(`<span class="warn">${T("橡皮泥资本：每一件资本品都按原价“流”进别的用途，损失只剩互补溢价 " + money(loss) + "（在多数总量模型里连这一项也没有）。这不是损失消失了，是模型假设它不存在——于是错误投资无成本，商业周期在逻辑上也就不可能。", "Putty capital: every piece “flows” into another use at full price, and the only loss left is the complementarity premium " + money(loss) + " (most aggregate models drop even that). The loss did not disappear; the model assumed it away — so malinvestment costs nothing and a business cycle becomes logically impossible.")}</span>`);
      } else {
        lines.push(`<span class="bad">${T("计划失败。计划里的价值 " + money(planValue) + " → 重组后 " + money(recovered) + "：真实损失 " + money(loss) + "。这些钢材、工时和储蓄被切成了没人要的形状。", "The plan failed. Value in the plan " + money(planValue) + " → after regrouping " + money(recovered) + ": a real loss of " + money(loss) + ". Steel, hours and savings were cut into shapes nobody wants.")}</span>`);
        if (stranded.length) lines.push(T("搁浅：" + stranded.map((r) => r.g.n).join("、") + "——用途集合几乎只有一个，原计划一消失就没有任何计划要它们。", "Stranded: " + stranded.map((r) => r.g.n).join(", ") + " — their set of uses has essentially one member; once the original plan is gone no plan will take them."));
        if (recomb.length) lines.push(T("可重组：" + recomb.map((r) => r.g.n + "（保留 " + Math.round(r.g.alt * 100) + "%）").join("、") + "——通用件折价进入别人的计划。", "Recombinable: " + recomb.map((r) => r.g.n + " (keeps " + Math.round(r.g.alt * 100) + "%)").join(", ") + " — general pieces enter someone else's plan at a discount."));
        lines.push(T("现在切到“橡皮泥资本”看同一次冲击。", "Now switch to “putty capital” and look at the same shock."));
      }
    }
    $("cj-stats").innerHTML = stats;
    $("cj-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelector("#cj-grid").addEventListener("click", (e) => {
    const cell = e.target.closest("[data-good]"); if (!cell || shocked) return;
    const g = GOODS.find((x) => x.id === cell.dataset.good);
    if (!compat(g)) return;
    if (chosen.has(g.id)) chosen.delete(g.id); else chosen.add(g.id);
    paint();
  });
  $("cj-plans").addEventListener("click", (e) => {
    const b = e.target.closest("[data-plan]"); if (!b) return;
    plan = b.dataset.plan; shocked = false;
    $("cj-plans").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    const defaults = { bakery: ["van", "shop", "oven", "molds", "chef"], fab: ["litho", "clean", "power", "cool", "ml"], dc: ["gpu", "clean", "power", "cool", "data", "ml"] };
    chosen = new Set(defaults[plan]);
    paint();
  });
  $("cj-putty").addEventListener("click", (e) => {
    const b = e.target.closest("[data-putty]"); if (!b) return;
    putty = b.dataset.putty === "1";
    $("cj-putty").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    paint();
  });
  $("cj-shock").addEventListener("click", () => { shocked = true; paint(); });
  $("cj-reset").addEventListener("click", () => { shocked = false; paint(); });
  paint();
}
