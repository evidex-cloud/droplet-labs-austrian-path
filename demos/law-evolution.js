// 交互演示：法律怎么“长”。纠纷一个个到来（每个纠纷是二维“情境”里的一个点，世界在漂移）。
// 普通法模式：每次裁决留下一个先例，后案比照最近的先例——规则集随案件增长、随世界漂移。
// 成文法模式：一部固定法典（若干条文点），新情况与条文错配，直到若干回合后修法一次（滞后）。
// 读数：需要“无先例/无条文可循”的案件数、规则贴合度、规则条数。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  let drift = 0.015;   // 世界每回合漂移速度
  let lag = 20;        // 成文法修法周期（回合）
  let t = 40;          // 已到来的案件数
  let mode = "common"; // 详细查看哪种模式
  const MAXT = 200, FIT_R = 0.25, NEW_R = 0.12, K = 5;

  const rng = (seed) => () => { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let x = Math.imul(seed ^ (seed >>> 15), 1 | seed); x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x; return ((x ^ (x >>> 14)) >>> 0) / 4294967296; };
  const gauss = (r) => { const u = 1 - r(), v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

  // 生成案件序列：情境中心沿一条曲线漂移（新技术、新商业形态），案件在中心周围散布
  function makeCases(N, speed) {
    const r = rng(42);
    const cases = [];
    let ang = 0.4;
    for (let i = 0; i < N; i++) {
      // 每 50 个案件出现一次“跳变”（一项新技术突然到来），跳变幅度也随漂移速度放大
      const jump = Math.floor(i / 50) * 0.18 * (speed > 0 ? 1 : 0) * ((Math.floor(i / 50) % 2) ? -1 : 1);
      const cx = 0.3 + 0.45 * (1 - Math.cos(speed * i * 3)) / 2 + 0.25 * speed * i;
      const cy = 0.5 + 0.3 * Math.sin(speed * i * 4 + ang) + jump;
      cases.push([Math.min(1, Math.max(0, cx + 0.09 * gauss(r))), Math.min(1, Math.max(0, cy + 0.09 * gauss(r)))]);
    }
    return cases;
  }

  // 模拟两种模式
  function simulate(cases, lagRounds) {
    const out = { common: { rules: [], fit: [], novel: [], nRules: [] }, statute: { rules: [], fit: [], novel: [], nRules: [], amendedAt: [] } };
    // 成文法：一次性围绕最初的情境写 K 条
    const c0 = cases.slice(0, 5).reduce((s, c) => [s[0] + c[0] / 5, s[1] + c[1] / 5], [0, 0]);
    const code = (center) => { const arr = []; for (let k = 0; k < K; k++) { const a = (2 * Math.PI * k) / K; arr.push([center[0] + 0.12 * Math.cos(a), center[1] + 0.12 * Math.sin(a)]); } return arr; };
    let statute = code(c0);
    const precedents = [];
    for (let i = 0; i < cases.length; i++) {
      const c = cases[i];
      // 普通法
      let dmin = Infinity;
      for (const p of precedents) dmin = Math.min(dmin, dist(p, c));
      const fitC = precedents.length ? Math.max(0, 1 - dmin / FIT_R) : 0;
      const novelC = dmin > FIT_R;
      if (dmin > NEW_R) precedents.push(c); // 足够不同 → 裁决成为新先例（区分/延伸）
      out.common.fit.push(fitC); out.common.novel.push(novelC ? 1 : 0); out.common.nRules.push(precedents.length);
      // 成文法
      let dS = Infinity;
      for (const p of statute) dS = Math.min(dS, dist(p, c));
      const fitS = Math.max(0, 1 - dS / FIT_R);
      out.statute.fit.push(fitS); out.statute.novel.push(dS > FIT_R ? 1 : 0); out.statute.nRules.push(statute.length);
      // 修法：每 lag 回合，立法者按“最近 lag 个案件的平均情境”重写法典（追赶过去）
      if ((i + 1) % lagRounds === 0) {
        const recent = cases.slice(Math.max(0, i + 1 - lagRounds), i + 1);
        const m = recent.reduce((s, x) => [s[0] + x[0] / recent.length, s[1] + x[1] / recent.length], [0, 0]);
        statute = code(m); out.statute.amendedAt.push(i + 1);
      }
    }
    out.common.rules = precedents; out.statute.rules = statute;
    return out;
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("⚖️ 法律的生长：先例累积 vs 法典修订——纠纷一个个到来，世界在变", "⚖️ How law grows: accumulating precedent vs amending a code — disputes arrive one by one while the world moves")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("世界漂移速度（新技术、新商业形态出现的快慢）：", "Speed of drift (how fast new technologies and business forms appear):")} <b id="le-drift-v">${drift.toFixed(3)}</b></label>
          <input class="demo-slider" type="range" min="0" max="0.04" step="0.001" value="${drift}" id="le-drift" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("成文法修法周期（回合）：", "Statute amendment cycle (rounds):")} <b id="le-lag-v">${lag}</b></label>
          <input class="demo-slider" type="range" min="5" max="60" step="5" value="${lag}" id="le-lag" />
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("已到来的纠纷数：", "Disputes arrived so far:")} <b id="le-t-v">${t}</b></label>
        <input class="demo-slider" type="range" min="1" max="${MAXT}" step="1" value="${t}" id="le-t" />
        <div class="demo-btns">
          <button class="demo-btn" id="le-step">${T("下一个纠纷 →", "Next dispute →")}</button>
          <button class="demo-btn" id="le-step10">${T("+10 个", "+10")}</button>
          <button class="demo-btn" id="le-reset">${T("重置", "Reset")}</button>
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("详细查看的模式", "Mode to inspect")}</label>
        <div class="demo-seg" id="le-seg"><button data-m="common" class="on">${T("普通法：先例累积", "Common law: precedent")}</button><button data-m="statute">${T("成文法：固定法典 + 定期修法", "Statute: fixed code + periodic amendment")}</button></div>
      </div>
      <div class="demo-grid">
        <div class="demo-block"><div id="le-map"></div></div>
        <div class="demo-block">
          <div class="stat-row">
            <div class="stat"><div class="k">${T("无规则可循的案件", "Cases with no fitting rule")}</div><div class="v neg" id="le-novel">–</div></div>
            <div class="stat"><div class="k">${T("规则贴合度（近 20 案）", "Rule fit (last 20)")}</div><div class="v acc" id="le-fit">–</div></div>
            <div class="stat"><div class="k">${T("规则条数", "Rules in force")}</div><div class="v" id="le-n">–</div></div>
          </div>
          <div class="demo-log" id="le-log" style="margin-top:10px"></div>
        </div>
      </div>
      <div class="demo-block" id="le-chart"></div>
      <p class="demo-tip">${T(
        "把漂移速度调到 0：法典和先例表现差不多——世界不变时，一次写好的规则够用。把漂移调高、修法周期拉长：看<strong>成文法的贴合度</strong>在每次修法之间一路下滑、修法时跳回，而<strong>普通法</strong>的贴合度平稳——代价是规则条数不断增长。这就是莱奥尼的“立法 = 中央计划”：立法者要预知的东西，法官只需逐案发现。",
        "Set drift to 0: the code and the precedents perform about the same — when the world stands still, rules written once are enough. Raise drift and lengthen the amendment cycle: watch the <strong>statute's fit</strong> slide between amendments and jump back at each one, while the <strong>common law's</strong> fit stays steady — at the price of an ever-growing rule count. That is Leoni's “legislation = central planning”: what a legislator must foresee, a judge need only discover case by case."
      )}</p>
    </div>`;

  const paint = () => {
    root.querySelector("#le-drift-v").textContent = drift.toFixed(3);
    root.querySelector("#le-lag-v").textContent = lag;
    root.querySelector("#le-t-v").textContent = t;
    root.querySelector("#le-t").value = t;
    root.querySelectorAll("#le-seg button").forEach((b) => b.classList.toggle("on", b.dataset.m === mode));

    const cases = makeCases(MAXT, drift);
    const full = simulate(cases.slice(0, t), lag);
    const S = full[mode];
    const novelTotal = S.novel.reduce((a, b) => a + b, 0);
    const last = S.fit.slice(-20);
    const fitAvg = last.length ? last.reduce((a, b) => a + b, 0) / last.length : 0;
    root.querySelector("#le-novel").textContent = `${novelTotal} / ${t}`;
    root.querySelector("#le-fit").textContent = (fitAvg * 100).toFixed(0) + "%";
    root.querySelector("#le-n").textContent = S.nRules[t - 1] ?? 0;

    // 规则地图：横轴“关系类型”（陌生人 ↔ 长期合作），纵轴“技术情境”（老 ↔ 新）
    const W = 300, H = 220, m = 18;
    const X = (v) => m + v * (W - 2 * m), Y = (v) => H - m - v * (H - 2 * m);
    const recent = cases.slice(Math.max(0, t - 15), t);
    const rulesSvg = S.rules.map((p) => `<circle cx="${X(p[0]).toFixed(1)}" cy="${Y(p[1]).toFixed(1)}" r="${mode === "common" ? 4 : 7}" fill="${mode === "common" ? "var(--orange)" : "var(--blue)"}" opacity=".75"/>`).join("");
    const casesSvg = recent.map((c, i) => `<circle cx="${X(c[0]).toFixed(1)}" cy="${Y(c[1]).toFixed(1)}" r="3" fill="var(--muted)" opacity="${(0.25 + 0.5 * (i / recent.length)).toFixed(2)}"/>`).join("");
    const cur = cases[t - 1];
    const curSvg = `<circle cx="${X(cur[0]).toFixed(1)}" cy="${Y(cur[1]).toFixed(1)}" r="6" fill="none" stroke="var(--red)" stroke-width="2.5"/>`;
    // 从当前案件到最近规则的连线
    let near = null, dn = Infinity;
    for (const p of S.rules) { const d = dist(p, cur); if (d < dn) { dn = d; near = p; } }
    const linkSvg = near ? `<line x1="${X(cur[0]).toFixed(1)}" y1="${Y(cur[1]).toFixed(1)}" x2="${X(near[0]).toFixed(1)}" y2="${Y(near[1]).toFixed(1)}" stroke="${dn > FIT_R ? "var(--red)" : "var(--green)"}" stroke-width="1.5" stroke-dasharray="4 3"/>` : "";
    const ringSvg = `<circle cx="${X(cur[0]).toFixed(1)}" cy="${Y(cur[1]).toFixed(1)}" r="${(FIT_R * (W - 2 * m)).toFixed(1)}" fill="none" stroke="var(--line)" stroke-dasharray="2 3"/>`;
    root.querySelector("#le-map").innerHTML = `<div class="chart"><svg viewBox="0 0 ${W} ${H}" role="img">
      <rect x="${m}" y="${m}" width="${W - 2 * m}" height="${H - 2 * m}" fill="var(--surface-2)" stroke="var(--line)"/>
      ${ringSvg}${rulesSvg}${casesSvg}${linkSvg}${curSvg}
      <text class="lbl-axis" x="${W / 2}" y="${H - 3}" text-anchor="middle">${T("关系类型：陌生人 → 长期合作", "Relationship: strangers → long-term partners")}</text>
      <text class="lbl-axis" x="8" y="${H / 2}" text-anchor="middle" transform="rotate(-90 8 ${H / 2})">${T("技术情境：旧 → 新", "Technology: old → new")}</text>
    </svg><div class="chart-legend"><span><i style="background:${mode === "common" ? "var(--orange)" : "var(--blue)"}"></i> ${mode === "common" ? T("先例", "precedents") : T("法典条文", "code provisions")}</span><span><i style="background:var(--muted)"></i> ${T("近期案件", "recent cases")}</span><span><i style="background:var(--red)"></i> ${T("当前案件（虚线圈 = 可比范围）", "current case (dashed ring = fit radius)")}</span></div></div>`;

    const lines = [];
    const curNovel = S.novel[t - 1] === 1, curFit = S.fit[t - 1];
    if (mode === "common") {
      lines.push(curNovel
        ? `<span class="warn">${T("第", "Dispute #")} ${t} ${T("号纠纷：没有可比先例（最近的相距", ": no comparable precedent (nearest is")} ${dn.toFixed(2)}${T("）。法官只能依据一般原则裁决——这次裁决成为新先例，以后的类似案件就有了规则。", " away). The judge rules from general principle — and this ruling becomes a precedent, so the next similar case has a rule.")}</span>`
        : `<span class="ok">${T("第", "Dispute #")} ${t} ${T("号纠纷：找到可比先例，贴合度", ": a comparable precedent exists, fit")} ${(curFit * 100).toFixed(0)}%${T("。法官区分或延伸它；若情境足够新，裁决会作为新先例加入。", ". The judge distinguishes or extends it; if the facts are new enough the ruling joins the precedents.")}</span>`);
      lines.push(`${T("先例总数", "Precedents")} ${S.nRules[t - 1]}${T("：规则集在生长，没有人通盘设计它，但每个新案件都比上一个更有据可循。", ": the rule set grows; nobody designs it as a whole, yet each new case has more to lean on than the last.")}`);
    } else {
      const nextAmend = lag - (t % lag);
      lines.push(curNovel
        ? `<span class="bad">${T("第", "Dispute #")} ${t} ${T("号纠纷：法典条文与情境错配（最近条文相距", ": the code does not fit (nearest provision is")} ${dn.toFixed(2)}${T("）。法官只能硬套或沉默，等修法——还有", " away). The judge must force a fit or fall silent until the amendment — ")} ${nextAmend} ${T("回合。", "rounds away.")}</span>`
        : `<span class="ok">${T("第", "Dispute #")} ${t} ${T("号纠纷：法典仍能覆盖，贴合度", ": the code still covers it, fit")} ${(curFit * 100).toFixed(0)}%。</span>`);
      lines.push(`${T("法典固定", "The code holds")} ${K} ${T("条；上次修法在第", "provisions; last amended at dispute #")} ${S.amendedAt.length ? S.amendedAt[S.amendedAt.length - 1] : 0}${T("，修法按“过去", ", rewritten around the average of the past")} ${lag} ${T("个案件的平均情境”重写——立法者永远在追赶已经过去的世界。", " cases — the legislator is forever catching up with a world that has already moved.")}`);
    }
    const nc = full.common.novel.reduce((a, b) => a + b, 0), ns = full.statute.novel.reduce((a, b) => a + b, 0);
    lines.push(`${T("到目前为止“无规则可循”的案件：普通法", "Cases with no fitting rule so far: common law")} <b>${nc}</b> ${T("vs 成文法", "vs statute")} <b>${ns}</b>${T("。普通法的“无先例”多发生在最初几案；成文法的错配则在每次修法之间反复出现。", ". The common law's gaps cluster in the first few cases; the statute's mismatches recur between every pair of amendments.")}`);
    root.querySelector("#le-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");

    // 贴合度曲线（两种模式并列，20 案滑动平均）
    const ma = (arr) => arr.map((_, i) => { const s = arr.slice(Math.max(0, i - 19), i + 1); return s.reduce((a, b) => a + b, 0) / s.length; });
    const fc = ma(full.common.fit), fs = ma(full.statute.fit);
    const res = lineChart({
      fns: [{ f: (x) => fc[Math.min(fc.length - 1, Math.max(0, Math.round(x)))] * 100, cls: "line" }, { f: (x) => fs[Math.min(fs.length - 1, Math.max(0, Math.round(x)))] * 100, cls: "line2" }],
      lo: 0, hi: Math.max(2, t - 1), xlabel: T("纠纷序号", "Dispute #"), forceZero: true, uid: "le", H: 220,
    });
    root.querySelector("#le-chart").innerHTML = chartBlock(res, [["var(--orange)", T("普通法贴合度（%）", "Common-law fit (%)")], ["var(--blue)", T("成文法贴合度（%）", "Statute fit (%)")]]);
  };

  root.querySelector("#le-drift").addEventListener("input", (e) => { drift = +e.target.value; paint(); });
  root.querySelector("#le-lag").addEventListener("input", (e) => { lag = +e.target.value; paint(); });
  root.querySelector("#le-t").addEventListener("input", (e) => { t = +e.target.value; paint(); });
  root.querySelector("#le-step").addEventListener("click", () => { t = Math.min(MAXT, t + 1); paint(); });
  root.querySelector("#le-step10").addEventListener("click", () => { t = Math.min(MAXT, t + 10); paint(); });
  root.querySelector("#le-reset").addEventListener("click", () => { t = 1; paint(); });
  root.querySelectorAll("#le-seg button").forEach((b) => b.addEventListener("click", () => { mode = b.dataset.m; paint(); }));
  paint();
}
