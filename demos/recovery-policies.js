// 交互演示：萧条政策沙盘——勾选政策组合（救助 / 托住工资 / 再通胀 QE / 公共工程 / 自由放任），
// 模拟 20 个季度：未清算的错误投资、失业率路径、到复苏的时间。与“自由放任”基线并排比较。
// 模型把课文的论证逻辑做成可视化（罗斯巴德的清单 + 二次紧缩的对冲选项），是示意而非估计。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const NQ = 20;
  const policies = [
    { id: "bailout", name: T("救助摇摇欲坠的企业 / 银行", "Bail out shaky firms / banks"), desc: T("阻止重新定价：错误投资不被清算", "Blocks repricing: malinvestment is not liquidated") },
    { id: "wage", name: T("托住工资（不许降薪 / 提高最低工资）", "Prop up wages (no pay cuts / higher minimum)"), desc: T("阻止重新部署：企业只能裁人", "Blocks redeployment: firms can only shed workers") },
    { id: "qe", name: T("再通胀：降息 + 量化宽松", "Reflate: rate cuts + QE"), desc: T("推迟清算，并制造新的错误投资", "Postpones liquidation and creates fresh malinvestment") },
    { id: "works", name: T("公共工程 / 刺激消费", "Public works / stimulate consumption"), desc: T("消耗萧条里最稀缺的真实储蓄", "Consumes the scarcest thing in a bust: real saving") },
    { id: "liquidity", name: T("仅对冲货币需求暴增（吕佩克式）", "Only offset the money-demand spike (Röpke-style)"), desc: T("学派内有争议：稳住名义支出，但不救任何项目", "Contested inside the school: stabilize nominal spending, rescue no project") },
  ];
  const on = Object.fromEntries(policies.map((p) => [p.id, false]));
  on.bailout = true; on.qe = true;

  // ---------- 模型 ----------
  function simulate(sel) {
    let M = 100;             // 未清算的错误投资（占初始的 %）
    let U = 4.5;             // 失业率 %
    let pool = 0;            // 已释放但尚未重新部署的劳动力（% 劳动力）
    const path = [];
    let recovered = null;
    for (let q = 0; q < NQ; q++) {
      // 清算速度：基线每季清掉 16%；干预逐项拖慢
      let clear = 0.16;
      if (sel.bailout) clear -= 0.07;
      if (sel.qe) clear -= 0.04;
      if (sel.works) clear -= 0.02;
      if (sel.wage) clear -= 0.01;
      clear = Math.max(0.015, clear);
      // 二次紧缩：不对冲时，前几季有额外拖累（健康企业也被拖垮）；对冲后消失
      const secondary = sel.liquidity ? 0 : 2.0 * Math.max(0, 1 - q / 5);
      // 再通胀：每季注入新的错误投资
      const newMal = sel.qe ? 2.5 : 0;
      const cleared = M * clear;
      M = M - cleared + newMal;
      // 释放的劳动力进入重新部署池；工资刚性让池子排空得慢
      pool += cleared * 0.28 + secondary * 0.5;
      const reabsorb = sel.wage ? 0.12 : 0.40;
      const absorbed = pool * reabsorb * (sel.works ? 0.8 : 1);   // 公共工程与私营部门抢人
      pool -= absorbed;
      // 失业率 = 自然率 + 池子 + 工资刚性造成的滞留 + 二次紧缩
      U = 4.5 + pool + (sel.wage ? 0.035 * M : 0.015 * M) + secondary;
      path.push({ q: q + 1, M: Math.max(0, M), U });
      if (recovered == null && M < 15 && U < 6) recovered = q + 1;
    }
    return { path, recovered };
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🩺 萧条政策沙盘：你来当财政部长兼央行行长", "🩺 Bust-policy sandbox: you are the Treasury and the central bank")}</div>
      <div class="demo-block">
        <div class="demo-label">${T("经济刚刚断裂：100 单位错误投资待清算，失业率开始上升。选择你的政策组合，看 20 个季度。", "The snap just happened: 100 units of malinvestment await liquidation and unemployment is rising. Choose your policy mix and watch 20 quarters.")}</div>
        <div class="demo-btns" id="rp-btns"></div>
        <div class="demo-btns"><button class="demo-btn" id="rp-lf">${T("🕊️ 自由放任（全部取消）", "🕊️ Laissez-faire (clear all)")}</button></div>
      </div>
      <div class="demo-grid">
        <div class="demo-block"><div class="demo-label">${T("失业率（%）：你的组合（红） vs 自由放任（蓝）", "Unemployment (%): your mix (red) vs laissez-faire (blue)")}</div><div id="rp-chartU"></div></div>
        <div class="demo-block"><div class="demo-label">${T("未清算的错误投资（%）：你的组合（金） vs 自由放任（蓝）", "Uncleared malinvestment (%): your mix (gold) vs laissez-faire (blue)")}</div><div id="rp-chartM"></div></div>
      </div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("20 季后已清算", "Cleared after 20 quarters")}</div><div class="v" id="rp-cleared">–</div></div>
        <div class="stat"><div class="k">${T("失业率峰值", "Peak unemployment")}</div><div class="v neg" id="rp-peak">–</div></div>
        <div class="stat"><div class="k">${T("累计失业（面积）", "Cumulative unemployment (area)")}</div><div class="v" id="rp-area">–</div></div>
        <div class="stat"><div class="k">${T("到复苏的时间", "Time to recovery")}</div><div class="v acc" id="rp-time">–</div></div>
      </div>
      <div class="demo-log" id="rp-log" style="margin-top:12px"></div>
      <p class="demo-tip">${T(
        "反直觉的地方：救助与再通胀确实把<strong>失业率峰值</strong>削平了——但看<strong>曲线下的面积</strong>和<strong>到复苏的时间</strong>。自由放任是 V 形：深、短；干预是 L 形：浅、长，而且 20 季后错误投资还没清完。再试试只勾“对冲货币需求暴增”：这是奥派内部的争议选项——它削掉了二次紧缩的额外痛苦，却不阻碍清算。",
        "The counterintuitive part: bailouts and reflation really do shave the <strong>peak</strong> of unemployment — but look at the <strong>area under the curve</strong> and the <strong>time to recovery</strong>. Laissez-faire is a V: deep, short; intervention is an L: shallow, long, with malinvestment still uncleared after 20 quarters. Now try ticking only “offset the money-demand spike”: this is the contested option inside the school — it trims the extra pain of secondary deflation without obstructing liquidation."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  $("rp-btns").innerHTML = policies.map((p) => `<button class="demo-btn ${on[p.id] ? "active" : ""}" data-pol="${p.id}" title="${p.desc}">${p.name}</button>`).join("");

  const at = (arr, key) => (x) => { const i = Math.max(0, Math.min(arr.length - 1, Math.round(x) - 1)); return arr[i][key]; };

  const paint = () => {
    root.querySelectorAll("[data-pol]").forEach((b) => b.classList.toggle("active", !!on[b.dataset.pol]));
    const mine = simulate(on);
    const base = simulate({});
    const cU = lineChart({ fns: [{ f: at(base.path, "U"), cls: "line2" }, { f: at(mine.path, "U"), cls: "line3" }], lo: 1, hi: NQ, xlabel: T("季度", "quarter"), forceZero: true, uid: "rpU", H: 220 });
    const cM = lineChart({ fns: [{ f: at(base.path, "M"), cls: "line2" }, { f: at(mine.path, "M"), cls: "line" }], lo: 1, hi: NQ, xlabel: T("季度", "quarter"), forceZero: true, uid: "rpM", H: 220 });
    $("rp-chartU").innerHTML = chartBlock(cU, [["var(--blue)", T("自由放任", "laissez-faire")], ["var(--red)", T("你的组合", "your mix")]]);
    $("rp-chartM").innerHTML = chartBlock(cM, [["var(--blue)", T("自由放任", "laissez-faire")], ["var(--orange)", T("你的组合", "your mix")]]);

    const last = mine.path[NQ - 1];
    const peak = Math.max(...mine.path.map((p) => p.U));
    const area = mine.path.reduce((s, p) => s + (p.U - 4.5), 0);
    const areaBase = base.path.reduce((s, p) => s + (p.U - 4.5), 0);
    const peakBase = Math.max(...base.path.map((p) => p.U));
    $("rp-cleared").textContent = (100 - last.M).toFixed(0) + "%";
    $("rp-peak").textContent = peak.toFixed(1) + "%";
    $("rp-area").textContent = area.toFixed(0) + T(" 点·季", " pt·q");
    $("rp-time").textContent = mine.recovered ? mine.recovered + T(" 季", " q") : T("20 季内未复苏", "none within 20 q");

    const anyProp = on.bailout || on.wage || on.qe || on.works;
    const lines = [];
    if (!anyProp && !on.liquidity) {
      lines.push(`<span class="ok">${T("自由放任：失业率冲到", "Laissez-faire: unemployment spikes to")} ${peakBase.toFixed(1)}%${T("，但清算在", " but liquidation is done by quarter")} ${base.recovered}${T(" 季内走完。V 形——1920–21 年的形状。", ". A V — the shape of 1920–21.")}</span>`);
    } else if (!anyProp && on.liquidity) {
      lines.push(`<span class="ok">${T("只对冲货币需求暴增：峰值比自由放任低（", "Offsetting only the money-demand spike: the peak is lower than laissez-faire (")}${peak.toFixed(1)}% vs ${peakBase.toFixed(1)}%${T("），复苏时间几乎一样。这就是吕佩克与晚年哈耶克的立场——也是罗斯巴德派认为不必要的一步。", "), and recovery takes about the same time. This is the Röpke / later-Hayek position — and the step Rothbardians consider unnecessary.")}</span>`);
    } else {
      lines.push(`<span class="warn">${T("峰值被削平：", "Peak shaved: ")}${peak.toFixed(1)}% vs ${T("自由放任", "laissez-faire")} ${peakBase.toFixed(1)}%${T("。这是干预看起来“有效”的原因。", ". This is why intervention looks like it ‘works.’")}</span>`);
      lines.push(`<span class="bad">${T("但累计失业面积 ", "But the cumulative unemployment area is ")}${area.toFixed(0)} vs ${areaBase.toFixed(0)}${T("，20 季后仍有 ", ", and after 20 quarters ")}${last.M.toFixed(0)}%${T(" 的错误投资没清算——", " of malinvestment is still uncleared — ")}${mine.recovered ? T("复苏推迟到第 ", "recovery is pushed to quarter ") + mine.recovered : T("20 季内没有复苏。L 形——1930 年代与 1990 年后日本的形状。", "there is no recovery within 20 quarters. An L — the shape of the 1930s and post-1990 Japan.")}</span>`);
      if (on.qe) lines.push(T("再通胀每季注入新的错误投资：曲线不落，因为你在一边清算一边制造。", "Reflation injects new malinvestment every quarter: the curve does not come down because you are manufacturing while liquidating."));
      if (on.wage) lines.push(T("托住工资：释放出来的工人无法被以更低工资重新雇用，滞留在池子里。", "Propped wages: released workers cannot be re-hired at lower wages and stay stuck in the pool."));
      if (on.bailout) lines.push(T("救助：错误投资不被重新定价，健康企业拿不到本该流向它们的资金。", "Bailouts: malinvestment is not repriced, and healthy firms cannot get the funds that should have flowed to them."));
    }
    lines.push(`<span style="color:var(--muted)">${T("模型说明：示意性沙盘，把课文的论证逻辑可视化，不是对任何真实经济的估计。", "Model note: an illustrative sandbox that visualizes the lesson's argument; not an estimate of any real economy.")}</span>`);
    $("rp-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelectorAll("[data-pol]").forEach((b) => b.addEventListener("click", () => { on[b.dataset.pol] = !on[b.dataset.pol]; paint(); }));
  $("rp-lf").addEventListener("click", () => { for (const k in on) on[k] = false; paint(); });
  paint();
}
