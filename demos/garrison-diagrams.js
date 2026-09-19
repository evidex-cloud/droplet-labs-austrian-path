// 交互演示：加里森的三张联动图——生产可能性边界、可贷资金市场、哈耶克三角。
// 拨“储蓄率”看三张图一起沿边界滑动（可持续增长）；拨“信用扩张”看点越出边界、储蓄与投资被拉开、
// 三角形两头受力；切到“繁荣—崩溃”模式后可一步步走完崩溃过程。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // —— 模型 ——
  // 可贷资金：S(r) = s0 + 4(r-5)；I(r) = 20 - 4(r-5)；新钱 dM 加在资金供给上。
  // 均衡：s0 + 4(r-5) + dM = 20 - 4(r-5)  →  r = 5 + (20 - s0 - dM)/8
  // PPF：C = F(I) = 100 - I + 0.0006·I·(100-I)（轻微外凸）
  // 三角形：底边长度 L = 4 + 0.8·(5 - r)，高度 = C
  const F = (I) => 100 - I + 0.0006 * I * (100 - I);
  const solve = (s0, dM) => {
    const r = 5 + (20 - s0 - dM) / 8;
    const S = s0 + 4 * (r - 5);
    const I = S + dM;
    const C = F(S);
    const L = 4 + 0.8 * (5 - r);
    return { r, S, I, C, L };
  };

  let s0 = 20, dM = 0, mode = "sustain", step = 0;

  const STEPS = [
    { t: T("起点：没有新钱，利率 5%，储蓄 = 投资", "Start: no new money, rate 5%, saving = investment"), dm: 1, slack: 0 },
    { t: T("① 注入信贷：利率被压低，储蓄者少存、投资者多投，储蓄与投资被拉开一个楔子", "① Credit injected: the rate is pushed down, savers save less, investors invest more — a wedge opens between S and I"), dm: 1, slack: 0 },
    { t: T("② 越界：投资与消费同时膨胀，点跑到 PPF 外面；三角形上游拉长、下游垫高、中间掏空", "② Beyond the frontier: investment and consumption swell together; the triangle is stretched upstream and lifted downstream, hollowed in the middle"), dm: 1, slack: 0 },
    { t: T("③ 资源争抢：投入品与工资上涨，新项目超预算，利率开始反弹，新钱的效果一次性用完", "③ Scramble for resources: input prices and wages rise, projects run over budget, the rate starts to rebound, the new money's effect is spent"), dm: 0.45, slack: 0 },
    { t: T("④ 清算：长期项目烂尾、抛售设备、裁员——点跌进 PPF 内部（失业与闲置）", "④ Liquidation: long projects abandoned, equipment dumped, workers laid off — the point falls inside the PPF (unemployment, idle capacity)"), dm: 0, slack: 0.12 },
    { t: T("⑤ 恢复：利率回到储蓄决定的水平，点回到边界上——比起点没有更富，反而少了烂尾的资本", "⑤ Recovery: the rate returns to the saving-determined level and the point returns to the frontier — no richer than at the start, minus the capital wasted in unfinished projects"), dm: 0, slack: 0 },
  ];

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔗 加里森的三张联动图：拨一个旋钮，三张图一起动", "🔗 Garrison's three linked diagrams: turn one dial, all three move")}</div>
      <div class="demo-row">
        <div class="demo-seg" id="gd-mode">
          <button class="on" data-m="sustain">${T("储蓄驱动的可持续增长", "Saving-driven sustainable growth")}</button>
          <button data-m="boom">${T("信用驱动的繁荣—崩溃", "Credit-driven boom–bust")}</button>
        </div>
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("储蓄意愿（时间偏好越低，储蓄越多）：", "Desired saving (lower time preference = more saving): ")}<b id="gd-s0v">20</b></label>
          <input class="demo-slider" id="gd-s0" type="range" min="10" max="32" step="1" value="20" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("信用扩张（凭空新增的可贷资金）：", "Credit expansion (loanable funds created from nothing): ")}<b id="gd-dmv">0</b></label>
          <input class="demo-slider" id="gd-dm" type="range" min="0" max="15" step="1" value="0" disabled />
        </div>
      </div>
      <div class="demo-btns" id="gd-steps" style="display:none">
        <button class="demo-btn" id="gd-prev">◀ ${T("上一步", "Back")}</button>
        <button class="demo-btn" id="gd-next">${T("下一步", "Next step")} ▶</button>
        <button class="demo-btn" id="gd-reset">${T("回到起点", "Reset")}</button>
      </div>
      <div class="chart" id="gd-svg"></div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("利率 r", "Rate r")}</div><div class="v acc" id="gd-r">–</div></div>
        <div class="stat"><div class="k">${T("真实储蓄 S", "Real saving S")}</div><div class="v" id="gd-S">–</div></div>
        <div class="stat"><div class="k">${T("投资 I", "Investment I")}</div><div class="v" id="gd-I">–</div></div>
        <div class="stat"><div class="k">${T("消费 C", "Consumption C")}</div><div class="v" id="gd-C">–</div></div>
        <div class="stat"><div class="k">${T("楔子 I − S", "Wedge I − S")}</div><div class="v" id="gd-W">–</div></div>
        <div class="stat"><div class="k">${T("三角底边（阶段）", "Triangle base (stages)")}</div><div class="v" id="gd-L">–</div></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="gd-log"></div></div>
      <p class="demo-tip">${T(
        "先在左边模式里拖<strong>储蓄意愿</strong>：利率下降、投资上升、消费下降，PPF 上的点<strong>沿边界滑动</strong>，三角形变长变矮——三张图说同一句话。再切到右边模式拖<strong>信用扩张</strong>：同样是利率下降，但储蓄反而减少，点<strong>越出边界</strong>，三角形两头同时被拉。然后按“下一步”看崩溃怎么一步步发生。",
        "In the left mode, drag <strong>desired saving</strong>: the rate falls, investment rises, consumption falls, the PPF point <strong>slides along the frontier</strong> and the triangle gets longer and lower — all three diagrams say the same thing. Switch to the right mode and drag <strong>credit expansion</strong>: the rate falls again, but saving shrinks, the point <strong>leaves the frontier</strong> and the triangle is pulled at both ends. Then press “Next step” to watch the collapse unfold."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const f1 = (v) => v.toFixed(1);

  const draw = (m, base, outside, inside) => {
    // —— 面板 1：PPF —— x: I 0..60 → 40..210 ; y: C 0..115 → 235..45
    const px = (I) => 40 + (I / 60) * 170, py = (C) => 235 - (C / 115) * 190;
    let ppf = "";
    for (let I = 0; I <= 60; I += 2) ppf += (I ? " " : "") + px(I).toFixed(1) + "," + py(F(I)).toFixed(1);
    const p1 = `
      <text x="125" y="34" text-anchor="middle" font-size="11" font-weight="600" fill="var(--muted)">${T("① 生产可能性边界", "① Production-possibilities frontier")}</text>
      <line x1="40" y1="235" x2="215" y2="235" stroke="var(--line)" stroke-width="1.5"/><line x1="40" y1="235" x2="40" y2="45" stroke="var(--line)" stroke-width="1.5"/>
      <text x="212" y="250" text-anchor="end" font-size="10" fill="var(--muted)">${T("投资 I", "Investment I")}</text><text x="46" y="54" font-size="10" fill="var(--muted)">${T("消费 C", "Consumption C")}</text>
      <polyline points="${ppf}" fill="none" stroke="var(--ink)" stroke-width="2"/>
      <circle cx="${px(base.I).toFixed(1)}" cy="${py(base.C).toFixed(1)}" r="4" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="2 2"/>
      <line x1="${px(base.I).toFixed(1)}" y1="${py(base.C).toFixed(1)}" x2="${px(m.I).toFixed(1)}" y2="${py(m.C).toFixed(1)}" stroke="${outside ? "var(--red)" : "var(--blue)"}" stroke-width="1.2" stroke-dasharray="3 3"/>
      <circle cx="${px(m.I).toFixed(1)}" cy="${py(m.C).toFixed(1)}" r="6" fill="${outside ? "var(--red)" : inside ? "var(--muted)" : "var(--orange)"}"/>
      <text x="${(px(m.I) + 9).toFixed(1)}" y="${(py(m.C) - 6).toFixed(1)}" font-size="10" fill="${outside ? "var(--red)" : "var(--orange-ink)"}">(${m.I.toFixed(0)}, ${m.C.toFixed(0)})${outside ? T(" 越界", " beyond") : inside ? T(" 内部", " inside") : ""}</text>`;

    // —— 面板 2：可贷资金 —— x: 数量 0..45 → 280..450 ; y: r 0..10 → 235..45
    const qx = (q) => 280 + (q / 45) * 170, ry = (r) => 235 - (r / 10) * 190;
    const Sline = (s, sh) => `${qx(s + sh + 4 * (0 - 5)).toFixed(1)},${ry(0).toFixed(1)} ${qx(s + sh + 4 * (10 - 5)).toFixed(1)},${ry(10).toFixed(1)}`;
    const Iline = `${qx(20 - 4 * (0 - 5)).toFixed(1)},${ry(0).toFixed(1)} ${qx(20 - 4 * (10 - 5)).toFixed(1)},${ry(10).toFixed(1)}`;
    const dmEff = m.I - m.S;
    const p2 = `
      <text x="365" y="34" text-anchor="middle" font-size="11" font-weight="600" fill="var(--muted)">${T("② 可贷资金市场", "② Loanable-funds market")}</text>
      <clipPath id="gd-clip2"><rect x="280" y="45" width="170" height="190"/></clipPath>
      <line x1="280" y1="235" x2="455" y2="235" stroke="var(--line)" stroke-width="1.5"/><line x1="280" y1="235" x2="280" y2="45" stroke="var(--line)" stroke-width="1.5"/>
      <text x="452" y="250" text-anchor="end" font-size="10" fill="var(--muted)">S · I</text><text x="286" y="54" font-size="10" fill="var(--muted)">r</text>
      <g clip-path="url(#gd-clip2)">
        <polyline points="${Sline(20, 0)}" fill="none" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="3 3"/>
        <polyline points="${Sline(s0, 0)}" fill="none" stroke="var(--blue)" stroke-width="2"/>
        ${dmEff > 0.05 ? `<polyline points="${Sline(s0, dmEff)}" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 3"/>` : ""}
        <polyline points="${Iline}" fill="none" stroke="var(--orange)" stroke-width="2"/>
        <line x1="${qx(m.S).toFixed(1)}" y1="${ry(m.r).toFixed(1)}" x2="${qx(m.I).toFixed(1)}" y2="${ry(m.r).toFixed(1)}" stroke="var(--red)" stroke-width="3"/>
        <line x1="280" y1="${ry(m.r).toFixed(1)}" x2="${qx(m.I).toFixed(1)}" y2="${ry(m.r).toFixed(1)}" stroke="var(--muted)" stroke-width="1" stroke-dasharray="2 3"/>
        <circle cx="${qx(m.S).toFixed(1)}" cy="${ry(m.r).toFixed(1)}" r="4.5" fill="var(--blue)"/>
        <circle cx="${qx(m.I).toFixed(1)}" cy="${ry(m.r).toFixed(1)}" r="4.5" fill="var(--orange)"/>
      </g>
      <text x="${(qx(m.I) + 8).toFixed(1)}" y="${(ry(m.r) + 4).toFixed(1)}" font-size="10" fill="var(--orange-ink)">r=${f1(m.r)}%</text>
      <text x="442" y="${(ry(9.2)).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--blue)">S</text>
      <text x="292" y="${(ry(9.2)).toFixed(1)}" font-size="10" fill="var(--orange-ink)">I</text>
      ${dmEff > 0.05 ? `<text x="365" y="250" text-anchor="middle" font-size="10" fill="var(--red)">${T("红色粗线 = 楔子（新钱）", "thick red = wedge (new money)")}</text>` : ""}`;

    // —— 面板 3：哈耶克三角 —— x: 阶段 0..8 → 520..690 ; y: 高度 0..115 → 235..45
    const tx = (s) => 520 + (s / 8) * 170, ty = (h) => 235 - (h / 115) * 190;
    const tri = (o, cls, fill) => `<polygon points="${tx(0)},${ty(0)} ${tx(o.L).toFixed(1)},${ty(0)} ${tx(o.L).toFixed(1)},${ty(o.C).toFixed(1)}" fill="${fill}" stroke="${cls}" stroke-width="2" ${fill === "none" ? 'stroke-dasharray="4 3"' : ""}/>`;
    const p3 = `
      <text x="605" y="34" text-anchor="middle" font-size="11" font-weight="600" fill="var(--muted)">${T("③ 哈耶克三角", "③ Hayekian triangle")}</text>
      <line x1="520" y1="235" x2="695" y2="235" stroke="var(--line)" stroke-width="1.5"/>
      <text x="692" y="250" text-anchor="end" font-size="10" fill="var(--muted)">${T("生产时间（阶段）", "Production time (stages)")}</text><text x="526" y="54" font-size="10" fill="var(--muted)">${T("消费品价值", "Consumer-goods value")}</text>
      ${tri(base, "var(--muted)", "none")}
      ${tri(m, outside ? "var(--red)" : "var(--orange)", outside ? "var(--red-soft)" : "var(--orange-soft)")}
      ${outside ? `<text x="${tx(m.L / 2).toFixed(1)}" y="${(ty(m.C * 0.25)).toFixed(1)}" text-anchor="middle" font-size="10" fill="var(--red)">${T("中间被掏空", "middle hollowed out")}</text>` : ""}
      <text x="${tx(m.L).toFixed(1)}" y="${(ty(m.C) - 6).toFixed(1)}" text-anchor="end" font-size="10" fill="${outside ? "var(--red)" : "var(--orange-ink)"}">${f1(m.L)} ${T("段 · 高", "stages · height")} ${m.C.toFixed(0)}</text>`;

    return `<svg viewBox="0 0 720 262" preserveAspectRatio="xMidYMid meet" role="img">${p1}${p2}${p3}</svg>`;
  };

  const paint = () => {
    $("gd-s0v").textContent = s0;
    $("gd-dmv").textContent = dM;
    const base = solve(20, 0);
    let m, outside = false, inside = false, msg = [];
    if (mode === "sustain") {
      m = solve(s0, 0);
      const d = s0 - 20;
      msg.push(`${T("储蓄意愿", "Desired saving")} ${d >= 0 ? "+" : ""}${d} → ${T("利率", "rate")} ${f1(m.r)}%，${T("投资", "investment")} ${m.I.toFixed(0)}，${T("消费", "consumption")} ${m.C.toFixed(0)}。<span class="ok">${T("S = I，点在边界上，三张图一致。", "S = I, the point is on the frontier, all three diagrams agree.")}</span>`);
      if (d > 0) msg.push(T("消费者自愿少消费 " + d + "，这 " + d + " 单位资源才有资格被拉到上游——三角形变长变矮，几年后 PPF 整体外推。", "Consumers voluntarily gave up " + d + " units of consumption, so exactly those units can be pulled upstream — the triangle gets longer and lower, and a few years later the whole PPF moves out."));
      if (d < 0) msg.push(`<span class="warn">${T("储蓄减少：利率上升、生产链缩短。若投资低于折旧，社会开始吃老本（资本消耗）。", "Less saving: the rate rises and the chain shortens. If investment falls below depreciation, the society starts eating its capital (capital consumption).")}</span>`);
    } else {
      const st = STEPS[step];
      const dmEff = dM * st.dm;
      m = solve(s0, dmEff);
      if (st.slack > 0) {
        const s = st.slack * (dM / 10);
        m.I *= 1 - s; m.C *= 1 - s; inside = dM > 0;
      }
      outside = dmEff > 0.05 && dM > 0;
      msg.push(`<b>${st.t}</b>`);
      if (dM === 0) msg.push(`<span class="warn">${T("信用扩张为 0——把滑块拉起来再走步骤。", "Credit expansion is 0 — raise the slider, then step through.")}</span>`);
      else if (outside) {
        msg.push(`${T("利率", "Rate")} ${f1(m.r)}%：${T("真实储蓄降到", "real saving falls to")} <b>${m.S.toFixed(0)}</b>，${T("投资升到", "investment rises to")} <b>${m.I.toFixed(0)}</b>，${T("消费升到", "consumption rises to")} <b>${m.C.toFixed(0)}</b>。<span class="bad">${T("I + C = " + (m.I + m.C).toFixed(0) + " > 100：物理上不可能长期停留。差额 " + (m.I - m.S).toFixed(0) + " 是不对应任何人“愿意等待”的新钱。", "I + C = " + (m.I + m.C).toFixed(0) + " > 100: physically impossible to hold. The gap of " + (m.I - m.S).toFixed(0) + " is new money corresponding to nobody's willingness to wait.")}</span>`);
      } else if (inside) {
        msg.push(`<span class="bad">${T("投资 " + m.I.toFixed(0) + "、消费 " + m.C.toFixed(0) + "：点在边界内部——失业、闲置产能、烂尾的资本品。这是凯恩斯交叉描述的那个状态，但它是掉下来的结果，不是起因。", "Investment " + m.I.toFixed(0) + ", consumption " + m.C.toFixed(0) + ": the point is inside the frontier — unemployment, idle capacity, abandoned capital goods. This is the state the Keynesian cross describes, but it is the result of the fall, not its cause.")}</span>`);
      } else {
        msg.push(`${T("利率", "Rate")} ${f1(m.r)}%，S = I = ${m.S.toFixed(0)}。<span class="ok">${T("回到储蓄决定的结构。", "Back to the saving-determined structure.")}</span>`);
      }
    }
    $("gd-svg").innerHTML = draw(m, base, outside, inside);
    $("gd-r").textContent = f1(m.r) + "%";
    $("gd-S").textContent = m.S.toFixed(0);
    $("gd-I").textContent = m.I.toFixed(0);
    $("gd-C").textContent = m.C.toFixed(0);
    const W = m.I - m.S;
    const w = $("gd-W"); w.textContent = (W > 0.05 ? "+" : "") + W.toFixed(0); w.className = "v " + (W > 0.05 ? "neg" : "pos");
    $("gd-L").textContent = f1(m.L);
    $("gd-log").innerHTML = msg.map((l) => `<div>${l}</div>`).join("");
    $("gd-prev").disabled = step === 0;
    $("gd-next").disabled = step === STEPS.length - 1;
  };

  root.querySelectorAll("#gd-mode button").forEach((b) => b.addEventListener("click", () => {
    root.querySelectorAll("#gd-mode button").forEach((x) => x.classList.remove("on"));
    b.classList.add("on");
    mode = b.dataset.m;
    const boom = mode === "boom";
    $("gd-dm").disabled = !boom;
    $("gd-steps").style.display = boom ? "" : "none";
    if (boom && dM === 0) { dM = 10; $("gd-dm").value = 10; }
    if (!boom) { dM = 0; $("gd-dm").value = 0; }
    step = boom ? 1 : 0;
    paint();
  }));
  $("gd-s0").addEventListener("input", (e) => { s0 = +e.target.value; paint(); });
  $("gd-dm").addEventListener("input", (e) => { dM = +e.target.value; if (step > 2) step = 2; paint(); });
  $("gd-next").addEventListener("click", () => { step = Math.min(STEPS.length - 1, step + 1); paint(); });
  $("gd-prev").addEventListener("click", () => { step = Math.max(0, step - 1); paint(); });
  $("gd-reset").addEventListener("click", () => { step = 0; paint(); });
  paint();
}
