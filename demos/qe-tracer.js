// 交互演示：QE 追踪器——把同一笔新钱注入“银行”或“家庭”，按季度追踪它停在哪里：
// 准备金 / 资产价格 / 消费品价格。参数：注入规模、银行放贷意愿（准备金付息会压低它）、
// 收款人的囤钱倾向（货币需求）、供给冲击。预设“2008 模式”与“2020 模式”。风格化模型，只求形状对。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const presets = {
    y2008: { point: "banks", amt: 3.5, lend: 0.15, hoard: 0.6, supply: 0, label: T("2008 模式", "2008 mode"),
      desc: T("美联储买证券 → 银行准备金；准备金付息、银行资本受损、家庭去杠杆——放贷意愿低、囤钱倾向高。", "Fed buys securities → bank reserves; IOER, impaired bank capital, household deleveraging — low willingness to lend, high hoarding.") },
    y2020: { point: "households", amt: 5, lend: 0.5, hoard: 0.35, supply: 0.12, label: T("2020 模式", "2020 mode"),
      desc: T("财政部借钱（美联储买单）→ 支票、失业金、PPP 直达家庭；封锁期先囤、重开后花；叠加供应链断裂。", "Treasury borrows (Fed buys) → checks, UI, PPP straight to households; hoarded in lockdown, spent on reopening; plus broken supply chains.") },
  };
  let p = { ...presets.y2008 };
  const ROUNDS = 12;

  function simulate() {
    let R = 0, H = 0, A = 0, C = 0;
    const path = [];
    for (let r = 0; r <= ROUNDS; r++) {
      const inj = r < 4 ? p.amt / 4 : 0;
      if (p.point === "banks") {
        R += inj;
        const flow = R * p.lend * 0.25;            // 每季度从准备金漏出的比例
        R -= flow;
        A += flow * (1 - p.hoard * 0.6) * 0.65;    // 银行放贷/买资产：主要推资产
        C += flow * (1 - p.hoard * 0.6) * 0.35;    // 少部分经借款人到消费端
      } else {
        H += inj;
        const spend = H * (1 - p.hoard) * 0.5;     // 家庭把手里的钱花掉的比例
        H -= spend;
        C += spend * 0.85;                          // 主要买消费品
        A += spend * 0.15;                          // 少量进股市（散户）
      }
      const asset = 100 * (1 + A * 0.5);
      const cpi = 100 * (1 + C * 0.04 / Math.max(0.5, 1 - p.supply));
      path.push({ r, R, H, A, C, asset, cpi });
    }
    return path;
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🚰 QE 追踪器：同一笔新钱，注入银行还是家庭？", "🚰 QE tracer: the same new money, injected into banks or households?")}</div>
      <div class="demo-row">
        <div class="demo-seg" id="qt-point">
          <button data-p="banks">${T("注入银行（美联储买证券）", "Into banks (Fed buys securities)")}</button>
          <button data-p="households">${T("注入家庭（财政转移）", "Into households (fiscal transfers)")}</button>
        </div>
        <div class="demo-btns" style="margin:0">
          <button class="demo-btn" data-preset="y2008">${presets.y2008.label}</button>
          <button class="demo-btn" data-preset="y2020">${presets.y2020.label}</button>
        </div>
      </div>
      <div class="demo-meta" id="qt-desc"></div>
      <div class="demo-grid">
        <div class="demo-block"><label class="demo-label">${T("注入规模（万亿美元）：", "Injection size ($ trillion): ")}<b id="qt-amt-v"></b></label><input class="demo-slider" type="range" min="0.5" max="8" step="0.5" id="qt-amt"/></div>
        <div class="demo-block"><label class="demo-label">${T("银行放贷意愿（准备金付息 ↓、监管 ↓、资本受损 ↓）：", "Banks' willingness to lend (IOER ↓, regulation ↓, impaired capital ↓): ")}<b id="qt-lend-v"></b></label><input class="demo-slider" type="range" min="0" max="1" step="0.05" id="qt-lend"/></div>
        <div class="demo-block"><label class="demo-label">${T("收款人囤钱倾向（货币需求）：", "Recipients' hoarding (money demand): ")}<b id="qt-hoard-v"></b></label><input class="demo-slider" type="range" min="0" max="0.9" step="0.05" id="qt-hoard"/></div>
        <div class="demo-block"><label class="demo-label">${T("供给冲击（消费品供给缩减）：", "Supply shock (consumer-goods supply cut): ")}<b id="qt-supply-v"></b></label><input class="demo-slider" type="range" min="0" max="0.3" step="0.02" id="qt-supply"/></div>
      </div>
      <div id="qt-chart"></div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("12 季度后停在准备金/现金里", "Still in reserves / cash after 12 qtrs")}</div><div class="v" id="qt-stuck">–</div></div>
        <div class="stat"><div class="k">${T("流向资产", "Flowed to assets")}</div><div class="v acc" id="qt-A">–</div></div>
        <div class="stat"><div class="k">${T("流向消费品", "Flowed to consumer goods")}</div><div class="v" id="qt-C">–</div></div>
        <div class="stat"><div class="k">${T("资产指数 / CPI", "Asset index / CPI")}</div><div class="v" id="qt-idx">–</div></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="qt-log"></div></div>
      <p class="demo-tip">${T(
        "先点“2008 模式”，再点“2020 模式”：注入规模差不多，<strong>资产指数与 CPI 的位置却互换了</strong>。然后在 2008 模式下把“放贷意愿”拉到 0.8、“囤钱倾向”降到 0.1——准备金被放空、资产接近翻倍、CPI 开始明显上行：这就是 2010 年代奥派预言者假设的世界，而它没有发生，因为准备金付息和去杠杆把这两根滑块钉在了 0.15 和 0.6。“印钱”不是一个变量，是三个：从哪进、谁拿到、想不想花。",
        "Click “2008 mode,” then “2020 mode”: similar injection sizes, yet <strong>the asset index and CPI swap places.</strong> Then, in 2008 mode, drag “willingness to lend” up to 0.8 and “hoarding” down to 0.1 — reserves drain, assets nearly double, and CPI starts rising visibly. That is the world the Austrian doomsayers of the 2010s assumed, and it did not happen because IOER and deleveraging pinned those sliders at 0.15 and 0.6. “Printing money” is not one variable but three: where it enters, who gets it, whether they spend it."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const sliders = { amt: $("qt-amt"), lend: $("qt-lend"), hoard: $("qt-hoard"), supply: $("qt-supply") };

  function syncControls() {
    for (const k of Object.keys(sliders)) sliders[k].value = p[k];
    $("qt-amt-v").textContent = p.amt.toFixed(1);
    $("qt-lend-v").textContent = p.lend.toFixed(2);
    $("qt-hoard-v").textContent = p.hoard.toFixed(2);
    $("qt-supply-v").textContent = Math.round(p.supply * 100) + "%";
    root.querySelectorAll("#qt-point button").forEach((b) => b.classList.toggle("on", b.dataset.p === p.point));
    root.querySelectorAll("[data-preset]").forEach((b) => {
      const q = presets[b.dataset.preset];
      b.classList.toggle("active", ["point", "amt", "lend", "hoard", "supply"].every((k) => q[k] === p[k]));
    });
    const match = Object.values(presets).find((q) => ["point", "amt", "lend", "hoard", "supply"].every((k) => q[k] === p[k]));
    $("qt-desc").textContent = match ? match.desc : T("自定义参数。", "Custom parameters.");
  }

  function paint() {
    syncControls();
    const path = simulate();
    const last = path[ROUNDS];
    const at = (arr, key) => (x) => { const i = Math.min(ROUNDS, Math.max(0, Math.round(x))); return arr[i][key]; };
    const res = lineChart({
      fns: [
        { f: at(path, "asset"), cls: "line" },
        { f: at(path, "cpi"), cls: "line3" },
        { f: (x) => 100 + (p.point === "banks" ? at(path, "R")(x) : at(path, "H")(x)) * 10, cls: "line2" },
      ],
      lo: 0, hi: ROUNDS, xlabel: T("注入后的季度", "Quarters after injection"), uid: "qt", samples: 60,
    });
    $("qt-chart").innerHTML = chartBlock(res, [
      ["var(--orange)", T("资产价格指数（100 起）", "Asset-price index (from 100)")],
      ["var(--red)", T("消费品价格指数 CPI（100 起）", "Consumer-price index (from 100)")],
      ["var(--blue)", T("停在准备金/家庭现金里的钱（100 + 万亿 × 10）", "Money parked in reserves / household cash (100 + $T × 10)")],
    ]);
    const stuck = p.point === "banks" ? last.R : last.H;
    $("qt-stuck").textContent = stuck.toFixed(2) + " T";
    $("qt-A").textContent = last.A.toFixed(2) + " T";
    $("qt-C").textContent = last.C.toFixed(2) + " T";
    $("qt-idx").textContent = last.asset.toFixed(0) + " / " + last.cpi.toFixed(0);
    const lines = [];
    const cpiUp = last.cpi - 100, assetUp = last.asset - 100;
    if (p.point === "banks" && stuck / p.amt > 0.5) lines.push(`<span class="warn">${T("超过一半的新钱停在准备金里——这就是 2010 年代：基础货币不是信用。", "More than half the new money is parked in reserves — the 2010s: base money is not credit.")}</span>`);
    if (assetUp > cpiUp * 2 && assetUp > 5) lines.push(`<span class="warn">${T("通胀没有消失，它在资产价格里：先到者（金融机构、资产持有者）的东西先涨——坎蒂隆效应。", "Inflation did not vanish; it is in asset prices: what the first recipients (financial institutions, asset holders) own rises first — the Cantillon effect.")}</span>`);
    if (cpiUp > 3 && cpiUp <= 8) lines.push(`<span class="warn">${T("CPI 开始明显上行：钱终于走到了消费端。", "CPI is rising visibly: the money has finally reached the consumer end.")}</span>`);
    if (cpiUp > 8) lines.push(`<span class="bad">${T("CPI 涨幅超过 8%：钱直达消费端（或银行终于放贷），叠加供给缩减——2021–22。", "CPI up more than 8%: money reached consumers directly (or banks finally lent), on top of a supply cut — 2021–22.")}</span>`);
    if (p.point === "households" && p.hoard > 0.7) lines.push(`<span class="ok">${T("囤钱倾向很高：即使直达家庭，货币需求上升也会吸收大部分新钱——阶段 4.2。", "Very high hoarding: even money wired to households is mostly absorbed by rising money demand — Stage 4.2.")}</span>`);
    if (p.supply > 0 && cpiUp > 0) lines.push(T("供给冲击放大了同样货币流量下的 CPI 涨幅——但没有货币流量，供给冲击只改变相对价格。", "The supply shock amplifies the CPI rise for the same money flow — but without the money flow a supply shock only changes relative prices."));
    $("qt-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("") || `<div>${T("调整参数，看钱停在哪一站。", "Adjust the parameters and watch which station the money stops at.")}</div>`;
  }

  for (const k of Object.keys(sliders)) sliders[k].addEventListener("input", () => { p[k] = +sliders[k].value; paint(); });
  root.querySelectorAll("#qt-point button").forEach((b) => b.addEventListener("click", () => { p.point = b.dataset.p; paint(); }));
  root.querySelectorAll("[data-preset]").forEach((b) => b.addEventListener("click", () => { p = { ...presets[b.dataset.preset] }; paint(); }));
  paint();
}
