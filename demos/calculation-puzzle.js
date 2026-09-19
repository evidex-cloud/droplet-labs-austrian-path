// 交互演示：计算难题——你是计划者，要在三种“做 1000 条面包”的方法中选最省的一种。
// 模式 A：只有技术数据（吨、工时、公顷、升）——每种方法都“可行”，却无法排序；
// 模式 B：有价格——一分钟算出成本、排序；再拨动一种稀缺（燃料危机、劳动短缺…）看排序瞬间重排。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 三种方法：生产 1000 条面包所需的实物投入
  const methods = [
    { id: "A", name: T("A · 人力农场", "A · Hand farming"), icon: "🌾", labor: 400, land: 20, tractor: 0, fuel: 40 },
    { id: "B", name: T("B · 机械化大田", "B · Mechanized field"), icon: "🚜", labor: 80, land: 25, tractor: 60, fuel: 300 },
    { id: "C", name: T("C · 温室密植", "C · Heated greenhouse"), icon: "🏭", labor: 150, land: 5, tractor: 20, fuel: 1500 },
  ];
  const factors = [
    { k: "labor", name: T("劳动", "Labor"), unit: T("工时", "hours"), min: 5, max: 80, step: 1, def: 20 },
    { k: "land", name: T("土地", "Land"), unit: T("公顷·季", "ha·season"), min: 20, max: 800, step: 10, def: 200 },
    { k: "tractor", name: T("拖拉机", "Tractor"), unit: T("机时", "machine-hours"), min: 5, max: 120, step: 1, def: 30 },
    { k: "fuel", name: T("燃料", "Fuel"), unit: T("升", "liters"), min: 0.5, max: 8, step: 0.1, def: 1.5 },
  ];
  const scenarios = [
    { id: "base", name: T("基准", "Baseline"), p: { labor: 20, land: 200, tractor: 30, fuel: 1.5 } },
    { id: "oil", name: T("燃料危机 ×3", "Fuel shock ×3"), p: { labor: 20, land: 200, tractor: 30, fuel: 4.5 } },
    { id: "labor", name: T("劳动短缺 ×2.5", "Labor shortage ×2.5"), p: { labor: 50, land: 200, tractor: 30, fuel: 1.5 } },
    { id: "land", name: T("土地稀缺 ×3", "Land scarce ×3"), p: { labor: 20, land: 600, tractor: 30, fuel: 1.5 } },
    { id: "tech", name: T("拖拉机变便宜 ÷3", "Tractors cheap ÷3"), p: { labor: 20, land: 200, tractor: 10, fuel: 1.5 } },
    { id: "poor", name: T("劳动与土地都便宜", "Labor & land abundant"), p: { labor: 5, land: 20, tractor: 30, fuel: 1.5 } },
  ];

  let mode = "none"; // none | prices
  let price = { ...scenarios[0].p };
  let picked = null;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧮 计算难题：没有价格，你能选出最省的面包方案吗？", "🧮 The calculation puzzle: without prices, can you pick the least wasteful way to bake bread?")}</div>
      <div class="demo-row">
        <span class="demo-label" style="margin:0">${T("你手上的信息", "What you can see")}</span>
        <div class="demo-seg" id="cp-seg">
          <button data-m="none" class="on">${T("模式 A · 只有技术数据", "Mode A · technical data only")}</button>
          <button data-m="prices">${T("模式 B · 有市场价格", "Mode B · with market prices")}</button>
        </div>
      </div>
      <div class="cmp-3" id="cp-cards"></div>
      <div class="demo-block" id="cp-pick">
        <label class="demo-label">${T("作为计划者，你选哪个方案生产 1000 条面包？", "As the planner, which method do you choose for 1,000 loaves?")}</label>
        <div class="demo-btns" id="cp-btns">${methods.map((m) => `<button class="demo-btn" data-pick="${m.id}">${m.icon} ${m.name}</button>`).join("")}</div>
      </div>
      <div class="demo-block" id="cp-prices" hidden>
        <label class="demo-label">${T("要素价格（来自成千上万个所有者的买卖）", "Factor prices (formed by thousands of owners buying and selling)")}</label>
        <div class="demo-grid" id="cp-sliders">
          ${factors.map((f) => `
            <div>
              <label class="demo-label">${f.name}：<b id="cp-p-${f.k}"></b> / ${f.unit}</label>
              <input class="demo-slider" type="range" min="${f.min}" max="${f.max}" step="${f.step}" data-f="${f.k}" />
            </div>`).join("")}
        </div>
        <label class="demo-label" style="margin-top:12px">${T("拨动一种稀缺（价格替你压缩了背后的原因）", "Shift one scarcity (the price compresses the cause for you)")}</label>
        <div class="demo-btns" id="cp-scn">${scenarios.map((s) => `<button class="demo-btn" data-scn="${s.id}">${s.name}</button>`).join("")}</div>
      </div>
      <div class="demo-block">
        <div class="demo-log" id="cp-log"></div>
      </div>
      <p class="demo-tip">${T(
        "模式 A 里，三种方法各有一项“最省”（工时、土地、燃料），但吨和工时没法相加——你只能判断“可行”，判断不了“划算”。切到模式 B，同样的数据加上价格，成本立刻排出先后；再点“燃料危机”，排序瞬间重排，而你完全不需要知道油田出了什么事。",
        "In Mode A each method is “thriftiest” on one dimension (hours, land, or fuel), but hours and liters do not add up — you can judge “feasible,” never “worthwhile.” Switch to Mode B: the same data plus prices ranks the costs at once. Then click “Fuel shock” and watch the ranking flip instantly, without you knowing anything about what happened at the oil field."
      )}</p>
    </div>`;

  const cardsEl = root.querySelector("#cp-cards");
  const logEl = root.querySelector("#cp-log");
  const pricesEl = root.querySelector("#cp-prices");
  const pickEl = root.querySelector("#cp-pick");

  const cost = (m) => factors.reduce((s, f) => s + m[f.k] * price[f.k], 0);
  const fmt = (v) => Math.round(v).toLocaleString(en ? "en-US" : "zh-CN");

  const paint = () => {
    const withP = mode === "prices";
    pricesEl.hidden = !withP;
    pickEl.hidden = withP;
    root.querySelectorAll("#cp-seg button").forEach((b) => b.classList.toggle("on", b.dataset.m === mode));

    // 每个要素上谁最省（用于模式 A 的“各有所长”）
    const bestOn = {};
    for (const f of factors) bestOn[f.k] = methods.reduce((a, b) => (b[f.k] < a[f.k] ? b : a)).id;

    let ranked = null;
    if (withP) ranked = methods.map((m) => ({ ...m, c: cost(m) })).sort((a, b) => a.c - b.c);

    cardsEl.innerHTML = methods.map((m) => {
      const r = ranked ? ranked.findIndex((x) => x.id === m.id) : -1;
      const cls = withP ? (r === 0 ? "hl" : "") : (picked === m.id ? "hl" : "");
      const rows = factors.map((f) => {
        const isBest = bestOn[f.k] === m.id;
        const line = withP
          ? `${m[f.k]} × ${price[f.k]} = <b>${fmt(m[f.k] * price[f.k])}</b>`
          : `<b>${m[f.k]}</b> ${f.unit}${isBest ? ` <span class="pill ok">${T("最省", "least")}</span>` : ""}`;
        return `<div style="display:flex;justify-content:space-between;gap:6px;font-size:12.5px;margin:3px 0"><span style="color:var(--muted)">${f.name}</span><span>${line}</span></div>`;
      }).join("");
      const foot = withP
        ? `<div style="margin-top:8px;font-weight:700;color:${r === 0 ? "var(--green)" : "var(--ink)"}">${T("成本", "Cost")} ${fmt(cost(m))} · ${T("第", "#")}${r + 1}${T("名", "")}</div>`
        : `<div style="margin-top:8px;font-weight:600;color:var(--muted)">${T("技术上：可行 ✓", "Technically: feasible ✓")}</div>`;
      return `<div class="cmp-cell ${cls}"><h5>${m.icon} ${m.name}</h5>${rows}${foot}</div>`;
    }).join("");

    for (const f of factors) {
      const sl = root.querySelector(`[data-f="${f.k}"]`);
      if (sl) sl.value = price[f.k];
      const lab = root.querySelector(`#cp-p-${f.k}`);
      if (lab) lab.textContent = price[f.k];
    }
    root.querySelectorAll("[data-pick]").forEach((b) => b.classList.toggle("active", b.dataset.pick === picked));

    const lines = [];
    if (!withP) {
      lines.push(T(
        "你看到的是工程师的清单：工时、公顷、机时、升。A 最省燃料，B 最省劳动，C 最省土地——<b>每种方法都在某一项上“最省”</b>。",
        "You are looking at the engineers' list: hours, hectares, machine-hours, liters. A uses the least fuel, B the least labor, C the least land — <b>each method is “thriftiest” on some dimension</b>."
      ));
      if (picked) {
        const m = methods.find((x) => x.id === picked);
        lines.push(`<span class="warn">${T(`你选了 ${m.name}。它可行。但它是不是最不浪费的？<b>没有共同单位，这个问题无法回答</b>：省下的 ${m.id === "A" ? "燃料" : m.id === "B" ? "工时" : "土地"} 能不能抵上多用的其他东西？吨、公顷和工时之间没有换算率。`, `You chose ${m.name}. It is feasible. Is it the least wasteful? <b>Without a common unit the question cannot be answered</b>: does the ${m.id === "A" ? "fuel" : m.id === "B" ? "labor" : "land"} it saves outweigh the extra of everything else it uses? There is no exchange rate between hectares, liters and hours.`)}</span>`);
        lines.push(`<span class="bad">${T("这就是米塞斯 1920 年的论点：计划者可以做技术计算（“能不能做”），做不了经济计算（“值不值得这样做”）。", "That is Mises's 1920 point: the planner can do technical calculation (“can it be done?”) but not economic calculation (“is it worth doing this way?”).")}</span>`);
      } else {
        lines.push(T("点一个方案试试——然后问自己：凭什么？", "Pick one — then ask yourself: on what grounds?"));
      }
    } else {
      const [w, s, t] = ranked;
      lines.push(`<span class="ok">${T(`排序：${w.name}（${fmt(w.c)}） < ${s.name}（${fmt(s.c)}） < ${t.name}（${fmt(t.c)}）。同样的实物数据，乘上价格、加起来，一秒钟就有了答案。`, `Ranking: ${w.name} (${fmt(w.c)}) < ${s.name} (${fmt(s.c)}) < ${t.name} (${fmt(t.c)}). Same physical data, multiplied by prices and summed — an answer in a second.`)}</span>`);
      lines.push(T(
        `选 ${w.id} 而不是 ${t.id}，每 1000 条面包给社会省下 <b>${fmt(t.c - w.c)}</b> 元的其他用途——这就是“不浪费”的确切含义。`,
        `Choosing ${w.id} over ${t.id} frees up <b>${fmt(t.c - w.c)}</b> worth of other people's uses per 1,000 loaves — that is what “not wasting” means, precisely.`
      ));
      lines.push(`<span class="warn">${T("注意：价格不是你定的。它们来自成千上万个所有者对劳动、土地、机时和燃料的争夺。拿走私有产权，这些数字就没有来源——你会回到模式 A。", "Note: you did not set these prices. They come from thousands of owners competing for labor, land, machine-hours and fuel. Remove private ownership and these numbers have no source — you are back in Mode A.")}</span>`);
    }
    logEl.innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelectorAll("#cp-seg button").forEach((b) => b.addEventListener("click", () => { mode = b.dataset.m; paint(); }));
  root.querySelectorAll("[data-pick]").forEach((b) => b.addEventListener("click", () => { picked = b.dataset.pick; paint(); }));
  root.querySelectorAll("[data-f]").forEach((sl) => sl.addEventListener("input", () => { price[sl.dataset.f] = +sl.value; paint(); }));
  root.querySelectorAll("[data-scn]").forEach((b) => b.addEventListener("click", () => {
    const s = scenarios.find((x) => x.id === b.dataset.scn);
    price = { ...s.p };
    root.querySelectorAll("[data-scn]").forEach((x) => x.classList.toggle("active", x === b));
    paint();
  }));
  paint();
}
