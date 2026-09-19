// 交互演示：创作者阶梯——选小众/大众、发帖频率、平台；36 个月的受众增长带幂律运气；
// 第 18–24 个月之间来一次“平台规则变更”（去货币化 / 算法转向 / 抽成上调），看特定资本怎么被重估；
// 开关“分散化”把资本从平台特定挪向半特定；读出蒙特卡洛的期望收入 vs 这一次的实现收入。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const MONTHS = 36, RUNS = 400;
  const PLATS = {
    video: { name: T("长视频（广告分成）", "Long video (ad split)"), grow: 0.14, rate: 0.030, viralP: 0.06, cap: 1, shock: T("去货币化：广告分成 ×0.35", "Demonetized: ad rate ×0.35"), shockRate: 0.35, shockAud: 1.0 },
    short: { name: T("短视频（创作者基金）", "Short video (creator fund)"), grow: 0.24, rate: 0.006, viralP: 0.12, cap: 4, shock: T("算法转向：触达 ×0.45", "Algorithm pivot: reach ×0.45"), shockRate: 1.0, shockAud: 0.45 },
    news:  { name: T("邮件通讯（付费订阅）", "Newsletter (paid subs)"), grow: 0.08, rate: 0.28, viralP: 0.03, cap: 0.25, shock: T("抽成上调：净收入 ×0.85", "Fee hike: net ×0.85"), shockRate: 0.85, shockAud: 1.0 },
  };

  let niche = 0.35;     // 0 = 极小众，1 = 大众
  let cadence = 3;      // 每周条数
  let plat = "video";
  let diversify = false;
  let seedBase = 3;

  let seed = 1;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const pareto = (alpha, cap) => Math.min(cap, Math.pow(1 - rnd() + 1e-9, -1 / alpha)); // ≥1 的幂律乘数

  // 一次 36 个月的模拟；返回 { aud[], inc[], shockAt, peak }
  function simulate(s) {
    seed = s;
    const P = PLATS[plat];
    // 小众：天花板小、转化高、竞争少；大众：天花板大、命中率低
    let ceiling = 5000 * Math.pow(100, niche) * P.cap * pareto(1.4, 60) / 2; // 5k → 500k，乘平台系数，再乘幂律“你的市场有多大”
    const convert = 1.6 - 1.0 * niche;                          // 小众的付费/忠诚倍数
    const hitP = P.viralP * (0.6 + 0.8 * (1 - niche)) * Math.min(1, cadence / 4);
    const g = P.grow * (0.4 + 0.6 * Math.min(1, cadence / 5));
    const shockAt = 18 + Math.floor(rnd() * 7);
    let aud = 120 + 80 * rnd(), list = 0, rateMul = 1, audMul = 1, peak = 0;
    const audS = [], incS = [];
    for (let m = 1; m <= MONTHS; m++) {
      // 逻辑增长 + 幂律运气
      aud += g * aud * (1 - aud / ceiling) + 40 * cadence;
      if (m !== shockAt && rnd() < hitP) { const k = pareto(1.2, 30); aud *= 1 + 0.8 * (k - 1); ceiling *= 1 + 0.35 * (k - 1); }
      aud = Math.max(50, Math.min(aud, 1.5 * ceiling));
      aud *= 0.985; // 自然流失
      if (diversify) list += 0.02 * aud;                         // 把一部分受众变成邮件列表（半特定）
      if (m === shockAt) { rateMul = P.shockRate; audMul = P.shockAud; }
      const exposed = diversify ? 0.5 : 1;                       // 分散化：只有一半资本暴露在这家平台的规则下
      const effAud = aud * (audMul * exposed + (1 - exposed));
      const effRate = P.rate * (rateMul * exposed + (1 - exposed));
      let inc = effAud * effRate * convert;
      if (diversify) inc = inc * 0.75 + list * 0.01 * convert;   // 分散化的代价：算法奖励专注，主平台收入打折；收益：列表直付
      peak = Math.max(peak, inc);
      audS.push(effAud); incS.push(inc);
    }
    return { aud: audS, inc: incS, shockAt, peak };
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🪜 创作者阶梯：一次判断、36 个月、一场规则变更", "🪜 The creator ladder: one judgment, 36 months, one rule change")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("受众定位：", "Audience: ")}<b id="cl-nv"></b></label>
          <input class="demo-slider" id="cl-niche" type="range" min="0" max="1" step="0.05" value="0.35" />
          <label class="demo-label" style="margin-top:12px">${T("发布频率（条/周）：", "Cadence (posts/week): ")}<b id="cl-cv">3</b></label>
          <input class="demo-slider" id="cl-cad" type="range" min="1" max="7" step="1" value="3" />
        </div>
        <div class="demo-block">
          <div class="demo-label">${T("主平台", "Main platform")}</div>
          <div class="demo-seg" id="cl-plat">${Object.entries(PLATS).map(([k, p]) => `<button class="${k === plat ? "on" : ""}" data-p="${k}">${p.name}</button>`).join("")}</div>
          <div class="demo-btns">
            <button class="demo-btn" id="cl-div">${T("分散化：关", "Diversify: off")}</button>
            <button class="demo-btn" id="cl-roll">${T("再掷一次运气", "Roll the dice again")}</button>
          </div>
        </div>
      </div>
      <div id="cl-chart"></div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("第 36 月收入（这一次）", "Month-36 income (this run)")}</div><div class="v acc" id="cl-real">–</div></div>
        <div class="stat"><div class="k">${T("期望（400 次均值）", "Expected (mean of 400)")}</div><div class="v" id="cl-mean">–</div></div>
        <div class="stat"><div class="k">${T("中位数", "Median")}</div><div class="v" id="cl-med">–</div></div>
        <div class="stat"><div class="k">${T("前 5%", "Top 5%")}</div><div class="v" id="cl-top">–</div></div>
      </div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("规则变更那月的收入损失", "Income lost in the rule-change month")}</div><div class="v neg" id="cl-loss">–</div></div>
        <div class="stat"><div class="k">${T("月入 ≥ $2,000 的概率", "P(income ≥ $2,000/mo)")}</div><div class="v" id="cl-p2k">–</div></div>
        <div class="stat"><div class="k">${T("均值 ÷ 中位数（偏斜）", "Mean ÷ median (skew)")}</div><div class="v" id="cl-skew">–</div></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="cl-log"></div></div>
      <p class="demo-tip">${T(
        "看三件事：① <strong>均值远高于中位数</strong>——幂律：期望收入被少数爆款拉高，“典型”创作者挣得少；多掷几次运气，同一套判断能给出天差地别的结果，这就是承担不确定性。② 规则变更那个月的<strong>断崖</strong>：内容没变、受众没变，嵌入的生产计划变了——完全特定资本被重估（阶段 3.4）。③ 打开<strong>分散化</strong>：断崖变浅，但曲线也变缓——把拼图块从“平台特定”挪向“自己的”，回报慢一点，归零的风险小一点。没有标准答案，这是判断。",
        "Watch three things: ① <strong>the mean far exceeds the median</strong> — a power law: expected income is dragged up by a few hits while the “typical” creator earns little; roll the dice a few times and the same judgment yields wildly different outcomes — that is bearing uncertainty. ② The <strong>cliff</strong> in the rule-change month: content unchanged, audience unchanged, the production plan it was embedded in changed — fully specific capital revalued (Stage 3.4). ③ Turn on <strong>diversify</strong>: the cliff gets shallower but the curve gets flatter — moving jigsaw pieces from “platform-specific” toward “your own,” slower returns, smaller risk of zero. No standard answer; that is judgment."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);
  const money = (v) => "$" + Math.round(v).toLocaleString();

  const paint = () => {
    $("cl-nv").textContent = niche < 0.25 ? T("极小众", "very niche") : niche < 0.5 ? T("小众", "niche") : niche < 0.75 ? T("中等", "mid") : T("大众", "broad");
    $("cl-cv").textContent = cadence;
    $("cl-div").textContent = diversify ? T("分散化：开", "Diversify: on") : T("分散化：关", "Diversify: off");
    $("cl-div").classList.toggle("active", diversify);

    const me = simulate(seedBase * 7919 + 1);
    const finals = [];
    for (let i = 0; i < RUNS; i++) finals.push(simulate(100003 + i * 31).inc[MONTHS - 1]);
    finals.sort((a, b) => a - b);
    const mean = finals.reduce((s, v) => s + v, 0) / RUNS;
    const med = finals[Math.floor(RUNS / 2)], top = finals[Math.floor(RUNS * 0.95)];
    const p2k = finals.filter((v) => v >= 2000).length / RUNS;

    const fA = (x) => me.inc[Math.min(MONTHS - 1, Math.max(0, Math.round(x) - 1))];
    const res = lineChart({ fns: [{ f: fA, cls: "line" }], lo: 1, hi: MONTHS, samples: MONTHS - 1, xlabel: T("月", "month"), markerX: me.shockAt, markerLabel: T("规则变更", "rule change"), forceZero: true, uid: "cl", H: 230 });
    $("cl-chart").innerHTML = chartBlock(res, [["var(--orange)", T("月收入（美元，这一次运气）", "monthly income ($, this run)")]]);

    const before = me.inc[me.shockAt - 2], after = me.inc[me.shockAt - 1];
    const lossPct = before > 0 ? (before - after) / before : 0;
    $("cl-real").textContent = money(me.inc[MONTHS - 1]);
    $("cl-mean").textContent = money(mean);
    $("cl-med").textContent = money(med);
    $("cl-top").textContent = money(top);
    $("cl-loss").textContent = (lossPct * 100).toFixed(0) + "%";
    $("cl-p2k").textContent = (p2k * 100).toFixed(0) + "%";
    $("cl-skew").textContent = med > 0 ? (mean / med).toFixed(1) + "×" : "–";

    const P = PLATS[plat];
    const lines = [];
    lines.push(`${T("这一次：第 36 月", "This run: month 36 ")} <b>${money(me.inc[MONTHS - 1])}</b>${T("，期望", ", expected ")} ${money(mean)}${T("，中位数", ", median ")} ${money(med)} → ${me.inc[MONTHS - 1] > mean ? `<span class="ok">${T("运气在你这边——同样的判断，多数人拿到的是中位数。", "luck was on your side — most people with the same judgment get the median.")}</span>` : me.inc[MONTHS - 1] >= med ? `<span class="warn">${T("普通的一次：高于中位数，低于期望——幂律的常态。", "an ordinary run: above the median, below the mean — the power law's normal state.")}</span>` : `<span class="bad">${T("低于中位数：判断没变，方差如此。这不是“失败”，是不确定性的报酬为负。", "below the median: the judgment did not change, the variance did. Not “failure” — the reward for uncertainty came out negative.")}</span>`}`);
    lines.push(`${T("第 ", "Month ")}${me.shockAt}${T(" 月规则变更：", " rule change: ")}<b>${P.shock}</b>${T("，当月收入 ", ", income ")}${money(before)} → ${money(after)}（−${(lossPct * 100).toFixed(0)}%）。${diversify ? `<span class="ok">${T("分散化把暴露度压到一半，邮件列表的直付收入不受规则影响。", "Diversification halves exposure; direct income from the email list is untouched by the rule.")}</span>` : `<span class="bad">${T("全部资本特定于这家平台：内容还在，受众还在，收入没了。", "All capital specific to this platform: content still there, audience still there, income gone.")}</span>`}`);
    lines.push(`${T("均值 ÷ 中位数 = ", "Mean ÷ median = ")}${med > 0 ? (mean / med).toFixed(1) : "–"}×${T("；月入 ≥ $2,000 的概率 ", "; P(≥ $2,000/mo) ")}${(p2k * 100).toFixed(0)}%${T("。这条分布不是平台的阴谋，是承担不确定性的报酬的形状（阶段 6.3）。", ". That distribution is not a platform conspiracy; it is the shape of the reward for bearing uncertainty (Stage 6.3).")}`);
    if (plat === "news") lines.push(T("付费订阅：增长最慢、单位受众最值钱、规则风险最小——因为你卖的是内容而不是注意力，双边市场变回了单边。", "Paid subscriptions: slowest growth, highest value per reader, smallest rule risk — you sell content rather than attention, and the two-sided market becomes one-sided again."));
    if (plat === "short") lines.push(T("短视频：增长最快、单位受众最不值钱、算法风险最大——你的资本几乎全是“触达”，而触达是平台的，不是你的。", "Short video: fastest growth, lowest value per viewer, biggest algorithm risk — your capital is almost all “reach,” and reach belongs to the platform, not to you."));
    $("cl-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("cl-niche").addEventListener("input", (e) => { niche = +e.target.value; paint(); });
  $("cl-cad").addEventListener("input", (e) => { cadence = +e.target.value; paint(); });
  $("cl-plat").querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
    plat = b.dataset.p;
    $("cl-plat").querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    paint();
  }));
  $("cl-div").addEventListener("click", () => { diversify = !diversify; paint(); });
  $("cl-roll").addEventListener("click", () => { seedBase++; paint(); });
  paint();
}
