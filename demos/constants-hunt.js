// 交互演示：找“经济常数”——切换年代，看弹性、货币流通速度、菲利普斯曲线斜率、货币乘数怎么漂；
// 对照一个真正的物理常数（光速）纹丝不动。下半部分：随机“换一个时代”重新抽样并做最小二乘回归，
// 看回归系数每次都变、但符号从不变——符号是定律（先验），数值是历史（后验）。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const periods = ["1960s", "1970s", "1990s", "2000s", "2010s", "2020s"];
  // 各“常数”的年代示意值（文献大致范围，仅作示意；符号/量级可信，小数位不可信）
  const series = [
    {
      id: "gas", name: T("汽油短期价格弹性", "Gasoline short-run price elasticity"), unit: "",
      vals: [-0.20, -0.27, -0.15, -0.05, -0.30, -0.20], fmt: (v) => v.toFixed(2),
      why: T("弹性 = 一群人在一段时间里对油价变化的反应摘要。住得多远、开什么车、预期油价会不会一直涨——全会变。符号一直为负（定律），数值来回漂（历史）。",
             "An elasticity summarizes how some people reacted to price changes over some period. How far they live, what they drive, whether they expect the rise to last — all shift. The sign stays negative (law); the number wanders (history)."),
    },
    {
      id: "vel", name: T("M2 货币流通速度（美国）", "M2 velocity (US)"), unit: "",
      vals: [1.7, 1.8, 2.0, 1.9, 1.5, 1.2], fmt: (v) => v.toFixed(1),
      why: T("货币主义曾把流通速度当“近似常数”，MV=PY 才能拿来预测。1990 年代末冲到约 2.2，2020 年跌到约 1.1——因为人们持币的意愿（阶段 4.2 的货币需求）变了。",
             "Monetarists once treated velocity as “roughly constant,” which is what made MV=PY usable for forecasting. It peaked near 2.2 in the late 1990s and fell to about 1.1 in 2020 — because people's willingness to hold money (Stage 4.2's money demand) changed."),
    },
    {
      id: "phil", name: T("菲利普斯曲线斜率（示意）", "Phillips-curve slope (illustrative)"), unit: "",
      vals: [-0.7, 0.3, -0.3, -0.2, -0.1, -0.4], fmt: (v) => (v > 0 ? "+" : "") + v.toFixed(1),
      why: T("1960 年代通胀与失业漂亮地负相关，政策据此“买”就业；1970 年代两者一起飙升，斜率变号；2010 年代几乎躺平。曲线“仿佛”成立了十年，然后消失——模型里没有“人会学习”这一项。",
             "In the 1960s inflation and unemployment traded off neatly and policy tried to “buy” jobs; in the 1970s both soared and the slope flipped sign; in the 2010s it went nearly flat. The curve held “as if” for a decade, then vanished — the model had no term for “people learn.”"),
    },
    {
      id: "mult", name: T("货币乘数 M2 / 基础货币", "Money multiplier M2 / base"), unit: "×",
      vals: [6.0, 7.0, 9.0, 8.0, 3.5, 3.8], fmt: (v) => v.toFixed(1),
      why: T("教科书把乘数写成 1/准备金率，像个常数。2008 年后基础货币暴增、银行把准备金堆在央行，乘数从约 9 跌到约 3.5。“常数”是银行家与储户在特定制度下的选择结果。",
             "Textbooks write the multiplier as 1/reserve ratio, as if it were a constant. After 2008 the base exploded and banks parked reserves at the central bank; the multiplier fell from about 9 to about 3.5. The “constant” is the outcome of bankers' and depositors' choices under a particular regime."),
    },
  ];
  const light = { name: T("光速（米/秒）", "Speed of light (m/s)"), val: "299,792,458" };

  let p = 1; // 当前年代索引
  let sample = null;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔍 寻找“经济常数”：切换年代，看数字怎么漂", "🔍 Hunting for “economic constants”: switch decades and watch the numbers drift")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("选一个年代", "Pick a decade")}</label>
        <div class="demo-seg" id="ch-seg">${periods.map((x, i) => `<button data-i="${i}" class="${i === p ? "on" : ""}">${x}</button>`).join("")}</div>
      </div>
      <div class="demo-block">
        <div class="stat-row" id="ch-stats"></div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("同一个“常数”在六个年代的取值（条越长 = 绝对值越大；高亮 = 当前年代）", "The same “constant” across six decades (longer bar = larger absolute value; highlighted = current decade)")}</label>
        <div id="ch-bars"></div>
      </div>
      <div class="demo-block">
        <div class="demo-log" id="ch-why"></div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("为什么回归系数不是定律：随机“换一个时代”，重新抽 40 个观测，做最小二乘", "Why a regression coefficient is not a law: draw a random “era,” resample 40 observations, run least squares")}</label>
        <div class="demo-btns"><button class="demo-btn" id="ch-draw">${T("🎲 换一个时代，重新估计", "🎲 New era, re-estimate")}</button><button class="demo-btn" id="ch-draw10">${T("连抽 10 个时代", "Draw 10 eras in a row")}</button></div>
        <div class="demo-grid">
          <div class="chart" id="ch-scatter"></div>
          <div>
            <div class="stat-row" style="margin-top:0">
              <div class="stat"><div class="k">${T("估计弹性", "Estimated elasticity")}</div><div class="v acc" id="ch-slope">–</div></div>
              <div class="stat"><div class="k">${T("符号为负的次数", "Times sign was negative")}</div><div class="v" id="ch-signs">0 / 0</div></div>
            </div>
            <div class="demo-log" id="ch-hist" style="margin-top:8px;min-height:40px"></div>
          </div>
        </div>
      </div>
      <p class="demo-tip">${T(
        "看两件事：<strong>光速那格永远不动</strong>，其它四格换个年代就换个数——这不是测量误差，是被测的人变了。下半部分连抽十个“时代”，估计出来的弹性没有一次相同，但<strong>符号没有一次是正的</strong>：符号来自行动逻辑（先验定律），数值来自那一批人（历史）。",
        "Watch two things: <strong>the speed-of-light tile never moves</strong>; the other four change with every decade — not measurement error, the people measured changed. In the lower half, draw ten “eras”: no two elasticity estimates agree, yet <strong>the sign is never positive</strong>. The sign comes from the logic of action (a priori law); the number comes from that particular crowd (history)."
      )}</p>
    </div>`;

  const $ = (s) => root.querySelector(s);

  const paint = () => {
    root.querySelectorAll("#ch-seg button").forEach((b) => b.classList.toggle("on", +b.dataset.i === p));
    $("#ch-stats").innerHTML = series.map((s) => `
      <div class="stat"><div class="k">${s.name}</div><div class="v ${s.vals[p] < 0 ? "neg" : "acc"}">${s.fmt(s.vals[p])}${s.unit}</div></div>`).join("")
      + `<div class="stat" style="border-color:var(--blue)"><div class="k">${light.name}</div><div class="v" style="color:var(--blue);font-size:15px">${light.val}</div></div>`;
    $("#ch-bars").innerHTML = series.map((s) => {
      const max = Math.max(...s.vals.map(Math.abs));
      return `<div style="margin:10px 0"><div class="demo-meta" style="margin:0 0 2px;font-weight:600;color:var(--ink)">${s.name}</div>` +
        s.vals.map((v, i) => `<div class="bar2"><span class="lab">${periods[i]}</span><div class="track"><div class="fill" style="width:${(Math.abs(v) / max * 100).toFixed(0)}%;background:${i === p ? "var(--orange)" : "var(--orange-soft)"};border:1px solid var(--orange-line)"></div></div><span class="val" style="${i === p ? "color:var(--orange-ink);font-weight:700" : ""}">${s.fmt(v)}${s.unit}</span></div>`).join("") + `</div>`;
    }).join("") + `<div style="margin:10px 0"><div class="demo-meta" style="margin:0 0 2px;font-weight:600;color:var(--blue)">${light.name}</div>` +
      periods.map((x) => `<div class="bar2"><span class="lab">${x}</span><div class="track"><div class="fill" style="width:100%;background:var(--blue-soft);border:1px solid var(--blue)"></div></div><span class="val" style="color:var(--blue)">${T("不变", "same")}</span></div>`).join("") + `</div>`;
    $("#ch-why").innerHTML = `<div class="warn"><b>${periods[p]}</b></div>` + series.map((s) => `<div>• <b>${s.name}</b>：${s.why}</div>`).join("")
      + `<div style="color:var(--muted)">${T("数值为各时期文献与官方统计的大致范围，仅作示意；符号与量级可信，小数位不可信。", "Values are rough ranges from the literature and official statistics, for illustration only; trust the sign and order of magnitude, not the decimals.")}</div>`;
  };

  // —— 下半部分：随机时代 + OLS ——
  let nNeg = 0, nTot = 0;
  const hist = [];
  const rnd = (a, b) => a + Math.random() * (b - a);
  const drawEra = () => {
    // 这个“时代”的真实反应强度：来自不同的人群/预期/替代品，[-0.45, -0.08] 之间随机
    const trueElas = -rnd(0.08, 0.45);
    const noise = rnd(0.02, 0.05);
    const pts = [];
    for (let k = 0; k < 40; k++) {
      const lp = rnd(-0.35, 0.35); // ln(价格) 相对水平
      const lq = trueElas * lp + (Math.random() - 0.5) * 2 * noise; // ln(数量)
      pts.push([lp, lq]);
    }
    // OLS
    const n = pts.length, mx = pts.reduce((s, q) => s + q[0], 0) / n, my = pts.reduce((s, q) => s + q[1], 0) / n;
    let sxy = 0, sxx = 0;
    for (const [x, y] of pts) { sxy += (x - mx) * (y - my); sxx += (x - mx) * (x - mx); }
    const b = sxy / sxx;
    nTot++; if (b < 0) nNeg++;
    hist.unshift(b); if (hist.length > 10) hist.pop();
    sample = { pts, b, trueElas };
    paintSample();
  };
  const paintSample = () => {
    if (!sample) return;
    const W = 300, H = 200, L = 36, R = 8, Tt = 10, B = 26;
    const xm = (x) => L + (x + 0.4) / 0.8 * (W - L - R);
    const ym = (y) => (H - B) - (y + 0.25) / 0.5 * (H - B - Tt);
    const dots = sample.pts.map(([x, y]) => `<circle cx="${xm(x).toFixed(1)}" cy="${ym(Math.max(-0.25, Math.min(0.25, y))).toFixed(1)}" r="3" fill="var(--orange)" opacity=".75"/>`).join("");
    const x0 = -0.4, x1 = 0.4;
    const line = `<line x1="${xm(x0)}" y1="${ym(sample.b * x0).toFixed(1)}" x2="${xm(x1)}" y2="${ym(sample.b * x1).toFixed(1)}" stroke="var(--blue)" stroke-width="2"/>`;
    $("#ch-scatter").innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img">
      <line class="axis" x1="${L}" y1="${Tt}" x2="${L}" y2="${H - B}"/><line class="axis" x1="${L}" y1="${H - B}" x2="${W - R}" y2="${H - B}"/>
      <line class="zero" x1="${L}" y1="${ym(0).toFixed(1)}" x2="${W - R}" y2="${ym(0).toFixed(1)}"/>
      ${dots}${line}
      <text class="lbl-axis" x="${(L + W - R) / 2}" y="${H - 6}" text-anchor="middle">${T("ln 价格（相对水平）", "ln price (relative)")}</text>
      <text class="lbl-axis" x="${L - 4}" y="${Tt + 8}" text-anchor="end">${T("ln 量", "ln qty")}</text>
    </svg>`;
    $("#ch-slope").textContent = sample.b.toFixed(2);
    $("#ch-slope").className = "v " + (sample.b < 0 ? "neg" : "pos");
    $("#ch-signs").textContent = `${nNeg} / ${nTot}`;
    $("#ch-hist").innerHTML = `<div>${T("最近的估计：", "Recent estimates: ")}${hist.map((b) => `<span class="${b < 0 ? "ok" : "bad"}" style="font-family:var(--mono)">${b.toFixed(2)}</span>`).join("　")}</div>` +
      `<div style="color:var(--muted)">${T("每一次抽样都是“另一群人、另一种预期”。回归找到的是这群人这段时间的反应强度；它能告诉你的是历史，能预测的只有“符号”。", "Each draw is “a different crowd with different expectations.” The regression finds how strongly that crowd reacted in that period; what it tells you is history, and the only thing it can predict is the sign.")}</div>`;
  };

  root.querySelectorAll("#ch-seg button").forEach((b) => b.addEventListener("click", () => { p = +b.dataset.i; paint(); }));
  $("#ch-draw").addEventListener("click", drawEra);
  $("#ch-draw10").addEventListener("click", () => { for (let k = 0; k < 10; k++) drawEra(); });
  paint();
  drawEra();
}
