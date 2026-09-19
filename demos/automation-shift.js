// 交互演示：自动化转移——10 个职业、各 100 人。拖动“AI 接管的任务比例”，
// 在“灵活工资”下被释放的劳动流向替代岗位与新创造的岗位；在“僵硬工资/执照”下变成失业。
// 读数：总产出、实际工资、失业率。“新目的出现”开关 = 企业家创造出从前买不起的服务。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const OCC = [
    { n: T("客服", "Customer service"), w: 0.6, a: 0.5 },
    { n: T("翻译", "Translation"), w: 0.8, a: 0.6 },
    { n: T("初级程序员", "Junior developer"), w: 1.2, a: 0.4 },
    { n: T("会计/记账", "Bookkeeping"), w: 0.9, a: 0.5 },
    { n: T("放射科读片", "Radiology reading"), w: 2.0, a: 0.3 },
    { n: T("卡车司机", "Truck driver"), w: 0.9, a: 0.2 },
    { n: T("律师助理", "Paralegal"), w: 1.0, a: 0.4 },
    { n: T("护理", "Nursing"), w: 1.0, a: 0.1 },
    { n: T("水电工", "Plumber / electrician"), w: 1.1, a: 0.05 },
    { n: T("教师", "Teacher"), w: 1.0, a: 0.15 },
  ];
  const N = 100, AI_COST = 0.3, SPECIFIC = 0.7, NEW_PROD = 0.95, FLOOR = 0.9, LICENSE_BLOCK = 0.4;
  let regime = "flex", newEnds = true;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("⚙️ 自动化转移：任务被机器接管后，人去了哪里——取决于价格能不能动", "⚙️ Automation shift: where people go once machines take the tasks — it depends on whether prices can move")}</div>
      <div class="demo-block">
        <div class="demo-row" style="display:flex;flex-wrap:wrap;gap:12px;align-items:center">
          <div class="demo-seg" id="as-reg">
            <button data-r="flex" class="on">${T("灵活工资、自由进入", "Flexible wages, free entry")}</button>
            <button data-r="rigid">${T("僵硬工资 + 执照", "Rigid wages + licensing")}</button>
          </div>
          <button class="demo-btn active" id="as-new">${T("新目的出现：开", "New ends appear: on")}</button>
          <button class="demo-btn" id="as-all">${T("全部拉到 60%", "Set all to 60%")}</button>
          <button class="demo-btn" id="as-reset">${T("重置", "Reset")}</button>
        </div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("总产出（基线 100）", "Output (base 100)")}</div><div class="v acc" id="as-out">–</div></div>
          <div class="stat"><div class="k">${T("实际工资（基线 100）", "Real wage (base 100)")}</div><div class="v" id="as-rw">–</div></div>
          <div class="stat"><div class="k">${T("失业率", "Unemployment")}</div><div class="v" id="as-u">–</div></div>
          <div class="stat"><div class="k">${T("新岗位人数", "In newly created jobs")}</div><div class="v pos" id="as-newj">–</div></div>
        </div>
      </div>
      <div class="demo-block">
        <div class="demo-label">${T("每个职业：拖动“AI 接管的任务比例”。条形：留守（金）· 转入替代岗位（绿）· 新岗位（蓝）· 失业（红）", "Each occupation: drag “share of tasks AI takes.” Bars: stayed (gold) · moved to substitute jobs (green) · new jobs (blue) · unemployed (red)")}</div>
        <div id="as-list"></div>
        <div class="demo-log" id="as-log"></div>
      </div>
      <p class="demo-tip">${T(
        "先在“灵活工资”下把几个滑块拉高：产出和实际工资一起上升，失业几乎为零——被释放的人以稍低的工资转去别处，再流向新创造的岗位。切到“僵硬工资 + 执照”：同样的滑块，红色出现了——不是机器造成的，是工资不能降、证考不下来。再关掉“新目的出现”：看灵活情形下实际工资涨幅缩小、转移岗位的工资更低——企业家创造新目的，是实际工资上升的另一半。",
        "Under “flexible wages,” push a few sliders up: output and real wages rise together and unemployment stays near zero — released workers take slightly lower wages elsewhere, then flow into newly created jobs. Switch to “rigid wages + licensing”: same sliders, and red appears — not caused by the machine, but by wages that cannot fall and licenses that take years. Then turn off “new ends appear”: in the flexible case the real-wage gain shrinks and the substitute jobs pay less — entrepreneurs creating new ends are the other half of rising real wages."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const compute = () => {
    const avgW = OCC.reduce((s, o) => s + o.w, 0) / OCC.length;
    const baseOut = OCC.reduce((s, o) => s + N * o.w, 0);
    let out = 0, cost = 0, employed = 0, wageBill = 0, unemployed = 0, newJobs = 0, moved = 0;
    const rows = OCC.map((o) => {
      const released = Math.round(N * o.a), stay = N - released;
      // 留守者产出与工资不变；AI 接管的任务以 30% 成本完成
      out += N * o.w; cost += stay * o.w + released * o.w * AI_COST;
      employed += stay; wageBill += stay * o.w;
      // 被释放者：替代岗位生产率 = 0.7×原工资（技能专用）；新岗位生产率 = 0.95×平均工资
      const altProd = SPECIFIC * o.w, newProd = newEnds ? NEW_PROD * avgW : 0;
      const best = Math.max(altProd, newProd), toNew = newEnds && newProd >= altProd;
      let hired = released;
      if (regime === "rigid") {
        const floor = FLOOR * o.w;
        hired = best >= floor ? released : 0;               // 工资地板：生产率低于地板者无法被雇
        hired = Math.round(hired * (1 - LICENSE_BLOCK));    // 执照：四成的转行被卡住
      }
      const un = released - hired;
      out += hired * best; cost += hired * best; employed += hired; wageBill += hired * best; unemployed += un;
      if (toNew) newJobs += hired; else moved += hired;
      return { o, stay, released, hired, un, toNew, best };
    });
    const price = cost / out;                         // 单位产出的成本 = 价格水平（竞争把成本传给消费者）
    const nomWage = employed ? wageBill / employed : 0;
    const baseWage = baseOut / (N * OCC.length);
    const realWage = (nomWage / baseWage) / price * 100;
    return { rows, out: out / baseOut * 100, realWage, u: unemployed / (N * OCC.length) * 100, newJobs, moved, unemployed };
  };

  const paint = () => {
    root.querySelectorAll("#as-reg button").forEach((b) => b.classList.toggle("on", b.dataset.r === regime));
    $("as-new").textContent = T("新目的出现：", "New ends appear: ") + (newEnds ? T("开", "on") : T("关", "off"));
    $("as-new").classList.toggle("active", newEnds);
    const R = compute();
    $("as-out").textContent = R.out.toFixed(1);
    const rw = $("as-rw"); rw.textContent = R.realWage.toFixed(1); rw.className = "v " + (R.realWage >= 100 ? "pos" : "neg");
    const u = $("as-u"); u.textContent = R.u.toFixed(1) + "%"; u.className = "v " + (R.u > 3 ? "neg" : "pos");
    $("as-newj").textContent = R.newJobs;
    if (!$("as-list").children.length) {
      $("as-list").innerHTML = R.rows.map((r, i) => `<div class="bar2">
        <span class="lab" style="width:120px">${r.o.n} <span style="color:var(--muted)">w${r.o.w}</span></span>
        <div class="track" style="white-space:nowrap" id="as-track-${i}"></div>
        <span class="val" style="width:150px;display:flex;gap:6px;align-items:center;justify-content:flex-end"><input type="range" min="0" max="90" step="5" value="${Math.round(r.o.a * 100)}" data-i="${i}" style="width:90px;margin:0" /><b id="as-pct-${i}">${Math.round(r.o.a * 100)}%</b></span>
      </div>`).join("");
      root.querySelectorAll("#as-list input[data-i]").forEach((s) => s.addEventListener("input", () => { OCC[+s.dataset.i].a = +s.value / 100; paint(); }));
    }
    R.rows.forEach((r, i) => {
      const seg = (n, col) => n > 0 ? `<div style="display:inline-block;height:100%;width:${n}%;background:${col}"></div>` : "";
      const hiredNew = r.toNew ? r.hired : 0, hiredAlt = r.toNew ? 0 : r.hired;
      $("as-track-" + i).innerHTML = seg(r.stay, "var(--orange)") + seg(hiredAlt, "var(--green)") + seg(hiredNew, "var(--blue)") + seg(r.un, "var(--red)");
      $("as-pct-" + i).textContent = Math.round(r.o.a * 100) + "%";
      const sl = root.querySelector(`#as-list input[data-i="${i}"]`); if (sl && +sl.value !== Math.round(r.o.a * 100)) sl.value = Math.round(r.o.a * 100);
    });

    const lines = [];
    const released = R.rows.reduce((s, r) => s + r.released, 0);
    lines.push(T("被 AI 释放的劳动：", "Labor released by AI: ") + `<b>${released}</b>` + T(" 人；其中转入替代岗位 ", " people; of whom ") + `<b>${R.moved}</b>` + T("，新岗位 ", " moved to substitute jobs, ") + `<b>${R.newJobs}</b>` + T("，失业 ", " to new jobs, ") + `<b>${R.unemployed}</b>` + T("。", " unemployed."));
    if (regime === "flex") lines.push(`<span class="ok">${T("灵活工资：被释放者以 0.7× 原工资（技能专用，阶段 3.4）被别处雇用，或以 0.95× 平均工资进入新岗位。AI 以 30% 成本完成任务 → 价格下降 → 实际工资上升。这就是比较优势 + 目的无限 + 企业家再配置。", "Flexible wages: released workers are hired elsewhere at 0.7× their old wage (specific skills, Stage 3.4) or enter new jobs at 0.95× the average wage. AI does the tasks at 30% of the cost → prices fall → real wages rise. Comparative advantage + unlimited ends + entrepreneurial redeployment.")}</span>`);
    else lines.push(`<span class="bad">${T("僵硬工资 + 执照：工资地板 = 0.9× 原工资，生产率低于地板的人无法被合法雇用；四成的转行被执照卡住。同样的机器、同样的滑块，失业出现了——技术从不造成永久失业，价格僵硬才会（阶段 8.2、8.3）。", "Rigid wages + licensing: wage floor = 0.9× the old wage, so anyone whose productivity falls below it cannot legally be hired; 40% of career moves are blocked by licenses. Same machines, same sliders — unemployment appears. Technology never causes permanent unemployment; price rigidity does (Stages 8.2, 8.3).")}</span>`);
    if (!newEnds) lines.push(`<span class="warn">${T("“新目的出现”已关闭：被释放者只能去从前就存在的岗位，生产率 0.7×。劳动总量谬误的世界就是这个样子——而现实里企业家会创造 1900 年不存在的几千万个岗位。", "“New ends appear” is off: released workers can only go to jobs that already existed, at 0.7× productivity. This is what the lump-of-labor world looks like — whereas in reality entrepreneurs create tens of millions of jobs that did not exist in 1900.")}</span>`);
    $("as-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelectorAll("#as-reg button").forEach((b) => b.addEventListener("click", () => { regime = b.dataset.r; paint(); }));
  $("as-new").onclick = () => { newEnds = !newEnds; paint(); };
  $("as-all").onclick = () => { OCC.forEach((o) => (o.a = 0.6)); paint(); };
  const INIT = OCC.map((o) => o.a);
  $("as-reset").onclick = () => { OCC.forEach((o, i) => (o.a = INIT[i])); regime = "flex"; newEnds = true; paint(); };
  paint();
}
