// 交互演示：节俭悖论——同一笔“储蓄增加”放进两个模型：
// 左：凯恩斯循环流（支出漏出 → 收入乘数收缩，投资不动）；
// 右：奥派生产结构（利率下降 → 早期阶段扩张 → 产出在时间轴上挪位置，三年后更高）。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const Y0 = 1000;         // 初始收入
  const MPC = 0.8;         // 边际消费倾向
  const R0 = 5.0;          // 初始利率 %
  const Q = 12;            // 模拟季度数（3 年）
  let dS = 5;              // 储蓄增加，占收入 %

  // —— 模型 1：循环流（凯恩斯）——
  // Y_t = A_t + MPC·Y_{t-1}，A 下降 dS·Y0，投资固定。
  function circular(ds) {
    const A0 = Y0 * (1 - MPC);          // 自发支出使 Y0 为稳态
    const A1 = A0 - Y0 * ds / 100;      // 少花的钱直接漏出
    const path = [Y0];
    for (let t = 1; t <= Q; t++) path.push(A1 + MPC * path[t - 1]);
    const I = Y0 * 0.2;                 // 投资不变（示意：20% 的收入）
    return { path, I: Array(Q + 1).fill(I), C: path.map((y, t) => (t === 0 ? Y0 - I : y - I)), r: Array(Q + 1).fill(R0) };
  }

  // —— 模型 2：生产结构（奥派）——
  // 储蓄进入信贷市场 → 利率下降 → 投资分几个季度吸收储蓄（摩擦）→ 新资本提高产能。
  function structure(ds) {
    const S = Y0 * ds / 100;
    const r1 = Math.max(0.5, R0 - 0.28 * ds);         // 利率随储蓄下降（示意弹性）
    const absorb = [0, 0.55, 0.85, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; // 投资吸收储蓄的进度
    const path = [Y0], C = [Y0 * 0.8], I = [Y0 * 0.2], r = [R0];
    let K = 0; // 累积新增资本
    for (let t = 1; t <= Q; t++) {
      const inv = Y0 * 0.2 + S * absorb[t];
      const friction = S * (1 - absorb[t]) * 0.6;       // 未被吸收的储蓄 → 暂时的资源闲置
      K += S * absorb[t] / 4;                            // 每季投资的 1/4 是“额外”资本（示意）
      const gain = K * 0.09 / 4;                         // 新资本每季带来的额外产出（年化 9%）
      const y = Y0 - friction + gain;
      path.push(y); I.push(inv); C.push(y - inv); r.push(t < 2 ? (R0 + r1) / 2 : r1);
    }
    return { path, C, I, r, r1 };
  }

  // 生产阶段（5 级）：储蓄让早期阶段扩张、晚期阶段收缩
  const stageNames = [T("原材料/研发", "Raw materials / R&D"), T("机器设备", "Machinery"), T("零部件", "Components"), T("装配/批发", "Assembly / wholesale"), T("零售消费", "Retail / consumption")];
  const base = [10, 15, 20, 25, 30];
  function stages(ds) {
    const k = ds / 100;
    return base.map((b, i) => {
      const tilt = (2 - i) / 2;            // +1 最早 … −1 最晚
      return b * (1 + tilt * k * 3.2);
    });
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("💰 节俭悖论：同一笔储蓄，两个模型，两种命运", "💰 The paradox of thrift: one act of saving, two models, two fates")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("镇民决定多储蓄（占收入的比例）：", "Townspeople decide to save more (share of income): ")}<b id="tp-ds">${dS}%</b></label>
        <input class="demo-slider" id="tp-slider" type="range" min="0" max="15" step="1" value="${dS}" />
      </div>
      <div class="cmp">
        <div class="cmp-cell cold">
          <h5>${T("凯恩斯：循环流（支出 = 收入）", "Keynes: circular flow (spending = income)")}</h5>
          <div class="stat-row">
            <div class="stat"><div class="k">${T("今天产出", "Output today")}</div><div class="v" id="tp-c-now">–</div></div>
            <div class="stat"><div class="k">${T("三年后产出", "Output in 3 yrs")}</div><div class="v" id="tp-c-later">–</div></div>
            <div class="stat"><div class="k">${T("利率", "Interest rate")}</div><div class="v" id="tp-c-r">–</div></div>
          </div>
          <div class="demo-meta" id="tp-c-meta"></div>
        </div>
        <div class="cmp-cell hl">
          <h5>${T("奥派：生产结构（储蓄 = 对未来商品的需求）", "Austrians: structure of production (saving = demand for future goods)")}</h5>
          <div class="stat-row">
            <div class="stat"><div class="k">${T("今天产出", "Output today")}</div><div class="v" id="tp-s-now">–</div></div>
            <div class="stat"><div class="k">${T("三年后产出", "Output in 3 yrs")}</div><div class="v" id="tp-s-later">–</div></div>
            <div class="stat"><div class="k">${T("利率", "Interest rate")}</div><div class="v acc" id="tp-s-r">–</div></div>
          </div>
          <div class="demo-meta" id="tp-s-meta"></div>
        </div>
      </div>
      <div class="demo-block" id="tp-chart"></div>
      <div class="demo-block">
        <label class="demo-label">${T("生产阶段的重排（奥派模型，宽度 = 该阶段占用的资源）", "Re-shaping of the stages (Austrian model; width = resources in the stage)")}</label>
        <div class="stages" id="tp-stages"></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="tp-log"></div></div>
      <p class="demo-tip">${T(
        "把滑块从 0 拉到 10%：左边收入一路缩到新“均衡”，三年后也不回来——因为模型里投资与储蓄没有价格联系；右边今天先有一个小坑（转产摩擦），利率下降把储蓄送进早期阶段，三年后产出反超。分歧不在算术，在“少花的钱去哪了”。",
        "Drag the slider from 0 to 10%: on the left, income shrinks to a new “equilibrium” and never comes back — the model has no price linking saving to investment. On the right there is a small dip today (retooling friction), then the lower rate carries the saving into early stages and output overtakes within three years. The disagreement is not arithmetic; it is “where did the unspent money go?”"
      )}</p>
    </div>`;

  const f0 = (v) => v.toFixed(0);
  const pct = (a, b) => ((a / b - 1) * 100).toFixed(1) + "%";

  const paint = () => {
    root.querySelector("#tp-ds").textContent = dS + "%";
    const c = circular(dS), s = structure(dS);
    const cNow = c.path[1], cLater = c.path[Q], sNow = s.path[1], sLater = s.path[Q];
    const set = (id, v, cls) => { const el = root.querySelector(id); el.textContent = v; el.className = "v" + (cls ? " " + cls : ""); };
    set("#tp-c-now", f0(cNow), cNow < Y0 - 0.5 ? "neg" : "");
    set("#tp-c-later", f0(cLater) + " (" + pct(cLater, Y0) + ")", cLater < Y0 - 0.5 ? "neg" : "");
    set("#tp-c-r", R0.toFixed(1) + "%");
    set("#tp-s-now", f0(sNow), sNow < Y0 - 0.5 ? "neg" : "");
    set("#tp-s-later", f0(sLater) + " (" + pct(sLater, Y0) + ")", sLater > Y0 + 0.5 ? "pos" : "");
    set("#tp-s-r", s.r1.toFixed(1) + "%", "acc");

    const plannedS = Y0 * dS / 100;
    root.querySelector("#tp-c-meta").innerHTML = T(
      "乘数 = 1 ÷ (1 − " + MPC + ") = " + (1 / (1 - MPC)).toFixed(0) + "。计划多储蓄 " + f0(plannedS) + "，收入却少了 " + f0(Y0 - cLater) + "；投资钉死在 " + f0(c.I[0]) + "，所以实现的储蓄没有增加——这就是“悖论”。",
      "Multiplier = 1 ÷ (1 − " + MPC + ") = " + (1 / (1 - MPC)).toFixed(0) + ". Planned extra saving " + f0(plannedS) + ", but income falls by " + f0(Y0 - cLater) + "; investment is pinned at " + f0(c.I[0]) + ", so realized saving does not rise — that is the “paradox.”"
    );
    root.querySelector("#tp-s-meta").innerHTML = T(
      "利率 " + R0.toFixed(1) + "% → " + s.r1.toFixed(1) + "%：原先不划算的长期项目变得划算。投资从 " + f0(s.I[0]) + " 升到 " + f0(s.I[Q]) + "，消费从 " + f0(s.C[0]) + " 降到 " + f0(s.C[Q]) + "。今天的小坑 = 转产摩擦（" + f0(Y0 - sNow) + "）；三年后的增量 = 新资本的产出。",
      "Rate " + R0.toFixed(1) + "% → " + s.r1.toFixed(1) + "%: long projects that did not pay now do. Investment rises from " + f0(s.I[0]) + " to " + f0(s.I[Q]) + "; consumption falls from " + f0(s.C[0]) + " to " + f0(s.C[Q]) + ". Today's dip = retooling friction (" + f0(Y0 - sNow) + "); the gain in 3 years = output of the new capital."
    );

    const interp = (arr) => (x) => { const i = Math.min(Q - 1, Math.max(0, Math.floor(x))); const w = x - i; return arr[i] * (1 - w) + arr[i + 1] * w; };
    const res = lineChart({
      fns: [{ f: interp(c.path), cls: "line2" }, { f: interp(s.path), cls: "line" }, { f: () => Y0, cls: "line4" }],
      lo: 0, hi: Q, xlabel: T("季度", "quarter"), uid: "tp", samples: 96,
    });
    root.querySelector("#tp-chart").innerHTML = chartBlock(res, [
      ["var(--blue)", T("循环流：收入", "Circular flow: income")],
      ["var(--orange)", T("生产结构：产出", "Structure: output")],
      ["var(--green)", T("原水平 1000", "Baseline 1000")],
    ]);

    const st = stages(dS), mx = 40;
    root.querySelector("#tp-stages").innerHTML = st.map((w, i) => {
      const up = w > base[i] + 0.01, dn = w < base[i] - 0.01;
      return '<div class="stage-bar"><span class="lab">' + stageNames[i] + '</span><div class="track"><div class="fill ghost" style="width:' + (base[i] / mx * 100).toFixed(1) + '%"></div><div class="fill" style="width:' + (w / mx * 100).toFixed(1) + '%;background:' + (up ? "var(--green)" : dn ? "var(--red)" : "var(--orange)") + '"></div></div><span class="val">' + (up ? "+" : "") + (w - base[i]).toFixed(1) + '</span></div>';
    }).join("");

    const lines = [];
    if (dS === 0) lines.push('<span class="warn">' + T("储蓄没变，两个模型都停在 1000。往右拉滑块。", "No change in saving; both models sit at 1,000. Drag the slider right.") + "</span>");
    else {
      lines.push('<span class="bad">' + T("循环流：", "Circular flow: ") + "</span>" + T("三年后产出 " + f0(cLater) + "，永久低于原来——储蓄是一个洞。", "output in 3 years " + f0(cLater) + ", permanently below baseline — saving is a hole."));
      lines.push('<span class="ok">' + T("生产结构：", "Structure: ") + "</span>" + T("三年后产出 " + f0(sLater) + "，高于原来——储蓄是被利率送去未来的需求。早期阶段（虚线 = 原来）扩张，零售收缩：这就是阶段 3.3 的重排。", "output in 3 years " + f0(sLater) + ", above baseline — saving is demand the interest rate carried into the future. Early stages (dashed = before) expand, retail contracts: the re-shaping of Stage 3.3."));
      lines.push(T("两个模型差别的全部来源：<b>投资是否对利率做出反应</b>。把这条价格联系切断，你就得到凯恩斯；接回去，你就得到奥派。", "The entire difference between the models: <b>whether investment responds to the interest rate</b>. Cut that price link and you get Keynes; reconnect it and you get the Austrians."));
    }
    root.querySelector("#tp-log").innerHTML = lines.map((l) => "<div>" + l + "</div>").join("");
  };

  root.querySelector("#tp-slider").addEventListener("input", (e) => { dS = +e.target.value; paint(); });
  paint();
}
