// 交互演示：ABCT 信用扩张模拟——拖动“信用扩张占货币供给的百分比”，跑 24 个季度：
// 政策利率被压到自然利率之下 → 长项目开工 → 成本上涨 → 利率反弹 → 半成品被抛弃。
// 上下游生产阶段条（.stages）随之拉伸/收缩，时间带（.strip）显示繁荣（金）与萧条（红）。
// 模型是“思维实验的沙盘”：确定性、示意性，不是对真实经济的估计。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const NQ = 24;          // 季度数
  const R_NAT = 5;        // 自然利率 %
  const LONG_Q = 16;      // 长项目工期（季度）
  const SHORT_Q = 4;      // 短项目工期（季度）

  let expansion = 20;     // 信用扩张（% 货币供给）
  let timer = null;

  // ---------- 模型 ----------
  function simulate(e) {
    const boomLen = e > 0 ? Math.min(14, 7 + Math.floor(e / 5)) : 0;   // 银行能压多久
    const rLow = Math.max(0.5, R_NAT - 0.15 * e);                       // 被压低的利率
    const overshoot = 0.5 + 0.10 * e;                                   // 反弹幅度（通胀预期）
    const projects = [];   // {long, start, r0, prog, status}
    const frames = [];
    let costIdx = 100;
    for (let q = 0; q < NQ; q++) {
      // 1) 政策利率路径
      let rp;
      if (e === 0) rp = R_NAT;
      else if (q < boomLen) rp = rLow;
      else {
        const t = q - boomLen;                       // 反弹后逐季回落
        rp = R_NAT + overshoot * Math.max(0, 1 - t / 7);
      }
      // 2) 成本指数：繁荣期上下游拔河 → 要素价格上涨
      const activeLong = projects.filter((p) => p.long && p.status === "active").length;
      if (q < boomLen) costIdx *= 1 + 0.002 * e / 10 * (1 + activeLong / 6);
      else costIdx += (100 - costIdx) * 0.08;
      // 3) 开工决策（按利率“信”办事）
      // 真实储蓄支撑 1 个长项目/季；利率每被压低 1 个点，多开 1.5 个（上限 6）
      const nLong = Math.min(6, Math.max(0, Math.round((R_NAT + 0.5 - rp) * 1.5)));   // rp=5→1, 3.5→3, 2→5
      const nShort = rp <= 6 ? 2 : 1;
      for (let i = 0; i < nLong; i++) projects.push({ long: true, start: q, r0: rp, prog: 0, status: "active" });
      for (let i = 0; i < nShort; i++) projects.push({ long: false, start: q, r0: rp, prog: 0, status: "active" });
      // 4) 推进 / 完工 / 抛弃
      let abandonedNow = 0;
      for (const p of projects) {
        if (p.status !== "active") continue;
        const dur = p.long ? LONG_Q : SHORT_Q;
        p.prog += 1 / dur;
        if (p.prog >= 1 - 1e-9) { p.status = "done"; continue; }
        if (p.long) {
          // 按开工时的利率 r0 算的账：利率反弹越多、工程越早期、成本涨得越多，越容易被放弃；快完工的会硬撑完
          const threshold = p.r0 + 0.5 + 8 * p.prog - (costIdx - 100) / 15;
          if (rp > threshold) { p.status = "abandoned"; abandonedNow++; }
        }
      }
      const cnt = (f) => projects.filter(f).length;
      const started = projects.length;
      const done = cnt((p) => p.status === "done");
      const abandoned = cnt((p) => p.status === "abandoned");
      const activeL = cnt((p) => p.long && p.status === "active");
      const activeS = cnt((p) => !p.long && p.status === "active");
      const phase = e === 0 ? "calm" : q < boomLen ? "boom" : rp > R_NAT + 0.3 ? "bust" : "recover";
      frames.push({ q, rp, costIdx, started, done, abandoned, activeL, activeS, abandonedNow, phase,
        early: 100 + 2.2 * activeL,                      // 上游活动指数
        late: 100 + (phase === "boom" ? 0.35 * e : 0) + 2 * activeS });   // 下游（消费）活动指数
    }
    return { frames, boomLen, rLow };
  }

  // ---------- 界面 ----------
  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔁 信用扩张模拟：一封被涂改的信，24 个季度后会怎样", "🔁 Credit-expansion simulator: what a forged letter does over 24 quarters")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("信用扩张（占货币供给的 %）：", "Credit expansion (% of money supply): ")}<b id="ab-e">${expansion}%</b></label>
        <input class="demo-slider" id="ab-slider" type="range" min="0" max="30" step="1" value="${expansion}" />
        <div class="demo-btns">
          <button class="demo-btn" id="ab-run">${T("▶ 逐季运行", "▶ Run quarter by quarter")}</button>
          <button class="demo-btn" id="ab-end">${T("⏭ 直接看第 24 季", "⏭ Jump to quarter 24")}</button>
          <button class="demo-btn" id="ab-reset">${T("⟲ 重置", "⟲ Reset")}</button>
        </div>
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <div class="demo-label">${T("第 <b id=\"ab-q\">0</b> 季 · 生产结构（100 = 扩张前）", "Quarter <b id=\"ab-q\">0</b> · structure of production (100 = pre-expansion)")}</div>
          <div class="stages" id="ab-stages"></div>
          <div class="demo-label">${T("时间带：金 = 繁荣，红 = 萧条，绿 = 恢复", "Timeline: gold = boom, red = bust, green = recovery")}</div>
          <div class="strip" id="ab-strip"></div>
        </div>
        <div class="demo-block">
          <div class="stat-row">
            <div class="stat"><div class="k">${T("政策利率", "Policy rate")}</div><div class="v acc" id="ab-rp">–</div></div>
            <div class="stat"><div class="k">${T("自然利率", "Natural rate")}</div><div class="v" id="ab-rn">${R_NAT}%</div></div>
            <div class="stat"><div class="k">${T("要素成本指数", "Input-cost index")}</div><div class="v" id="ab-cost">–</div></div>
          </div>
          <div class="stat-row">
            <div class="stat"><div class="k">${T("已开工", "Started")}</div><div class="v" id="ab-started">–</div></div>
            <div class="stat"><div class="k">${T("已完工", "Completed")}</div><div class="v pos" id="ab-done">–</div></div>
            <div class="stat"><div class="k">${T("被抛弃", "Abandoned")}</div><div class="v neg" id="ab-aband">–</div></div>
          </div>
          <div class="demo-log" id="ab-log" style="margin-top:12px"></div>
        </div>
      </div>
      <p class="demo-tip">${T(
        "看三件事：<strong>上游阶段条</strong>在繁荣期被拉长，而<strong>下游（消费）</strong>并没有缩短——这就是拔河；成本指数一路上涨，直到利率反弹，<strong>被抛弃</strong>的数字才突然跳出来——它们都是在 2% 时“算得过来账”的长项目。把扩张拖到 0，什么也不会发生；拖到 30，繁荣更久，塌得也更狠。",
        "Watch three things: the <strong>upstream stage bars</strong> stretch during the boom while the <strong>downstream (consumption)</strong> bar does not shrink — that is the tug-of-war; the input-cost index climbs until the rate rebounds, and only then does the <strong>abandoned</strong> count jump — every one of them a long project that ‘penciled out’ at 2%. Drag expansion to 0 and nothing happens; drag it to 30 and the boom lasts longer and collapses harder."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  let sim = simulate(expansion);
  let cur = 0;

  const paint = () => {
    const f = sim.frames[Math.max(0, Math.min(NQ - 1, cur))];
    const showing = cur > 0;
    $("ab-q").textContent = cur;
    $("ab-e").textContent = expansion + "%";
    $("ab-rp").textContent = showing ? f.rp.toFixed(1) + "%" : R_NAT + "%";
    $("ab-rp").className = "v " + (showing && f.rp < R_NAT - 0.3 ? "acc" : showing && f.rp > R_NAT + 0.3 ? "neg" : "");
    $("ab-cost").textContent = showing ? f.costIdx.toFixed(0) : "100";
    $("ab-started").textContent = showing ? f.started : 0;
    $("ab-done").textContent = showing ? f.done : 0;
    $("ab-aband").textContent = showing ? f.abandoned : 0;

    const early = showing ? f.early : 100, late = showing ? f.late : 100;
    const maxW = 280;
    const bar = (lab, v, ghost) => `<div class="stage-bar">
        <span class="lab">${lab}</span>
        <div class="track"><div class="fill" style="width:${Math.min(100, (v / maxW) * 100).toFixed(1)}%"></div><div class="fill ghost" style="width:${((ghost / maxW) * 100).toFixed(1)}%"></div></div>
        <span class="val">${v.toFixed(0)}</span></div>`;
    $("ab-stages").innerHTML =
      bar(T("上游·长项目", "Upstream · long"), early, 100) +
      bar(T("中游", "Middle"), 100 + (early - 100) * 0.4, 100) +
      bar(T("下游·消费", "Downstream · consumer"), late, 100);

    $("ab-strip").innerHTML = sim.frames.map((fr, i) => {
      const seen = i < cur;
      const cls = !seen ? "" : fr.phase === "boom" ? "on" : fr.phase === "bust" ? "lose" : fr.phase === "recover" ? "win" : "";
      return `<div class="strip-cell ${cls}" title="Q${i + 1}: ${fr.rp.toFixed(1)}%" style="width:14px;height:18px"></div>`;
    }).join("");

    const lines = [];
    if (!showing) {
      lines.push(T("按“逐季运行”。扩张 = 0 时，贷款利率始终等于自然利率，只有短项目和少量长项目按真实储蓄开工。", "Press “Run.” With expansion = 0 the loan rate equals the natural rate the whole time; only short projects and a few long ones start, backed by real saving."));
    } else {
      if (f.phase === "boom") lines.push(`<span class="warn">${T("繁荣：利率", "Boom: the rate is")} ${f.rp.toFixed(1)}% &lt; ${R_NAT}%${T("，长项目在‘算得过来账’，上游拉长；消费没有减少。要素成本已到", "; long projects ‘pencil out’ and upstream stretches — but consumption has not fallen. Input costs are at")} ${f.costIdx.toFixed(0)}。</span>`);
      if (f.phase === "bust") lines.push(`<span class="bad">${T("断裂：利率反弹到", "Snap: the rate rebounds to")} ${f.rp.toFixed(1)}%${T("，本季又有", " and this quarter another")} ${f.abandonedNow} ${T("个长项目被抛弃——它们只在低利率下才可行。", "long projects are abandoned — they were only viable at the low rate.")}</span>`);
      if (f.phase === "recover") lines.push(`<span class="ok">${T("清算后：利率回到自然利率附近，剩下的项目是真实储蓄撑得住的。", "After liquidation: the rate is back near the natural rate; what remains is what real saving can support.")}</span>`);
      if (f.phase === "calm") lines.push(`<span class="ok">${T("没有信用扩张：没有繁荣，也没有萧条。", "No credit expansion: no boom, and no bust.")}</span>`);
      if (cur >= NQ) {
        const rate = f.started ? (f.abandoned / f.started * 100).toFixed(0) : 0;
        lines.push(`${T("24 季合计：开工", "After 24 quarters: started")} ${f.started}${T("，完工", ", completed")} ${f.done}${T("，抛弃", ", abandoned")} ${f.abandoned}（${rate}%）。${expansion > 0 ? T("被抛弃的全是长项目——错误不是随机的，是系统性地偏向‘太长、太远’。", "Every abandoned project is a long one — the errors are not random; they are systematically biased toward ‘too long, too far.’") : ""}`);
      }
    }
    $("ab-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
  $("ab-slider").addEventListener("input", (ev) => { stop(); expansion = +ev.target.value; sim = simulate(expansion); cur = 0; paint(); });
  $("ab-run").addEventListener("click", () => {
    stop();
    if (cur >= NQ) cur = 0;
    timer = setInterval(() => { cur++; paint(); if (cur >= NQ) stop(); }, 160);
  });
  $("ab-end").addEventListener("click", () => { stop(); cur = NQ; paint(); });
  $("ab-reset").addEventListener("click", () => { stop(); cur = 0; paint(); });
  paint();
}
