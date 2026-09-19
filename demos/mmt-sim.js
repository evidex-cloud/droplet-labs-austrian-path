// 交互演示：MMT 沙盘——读者每一轮“印钱花钱”，看四件事：
// ① 物价水平（滞后 2–3 轮才反映）② 先拿到钱的人 vs 最后拿到钱的人的实际购买力（坎蒂隆）
// ③ 真实资源约束什么时候被撞上（闲置 → 用尽）④ 打开“就业保障”，看固定工资岗位的计算问题。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // —— 经济体参数 ——
  const CAP0 = 100;           // 真实产能（单位）
  let state;
  const groups = [
    { id: "contractor", name: T("承包商/首批收款人", "Contractors / first receivers"), share: 0.55, lag: 0 },
    { id: "supplier", name: T("供应商/房东", "Suppliers / landlords"), share: 0.30, lag: 1 },
    { id: "worker", name: T("普通工薪", "Wage earners"), share: 0.10, lag: 2 },
    { id: "saver", name: T("退休者/存款人", "Pensioners / savers"), share: 0.05, lag: 3 },
  ];

  function reset() {
    state = {
      round: 0, price: 100, money: 100, idle: 30, jg: false,
      spendHist: [], priceHist: [100], idleHist: [30],
      real: { contractor: 100, supplier: 100, worker: 100, saver: 100 },
      nominal: { contractor: 100, supplier: 100, worker: 100, saver: 100 },
      pipeline: [],           // 尚未传导到物价的新钱
      jgWorkers: 0, jgOutput: 0, jgWaste: 0, crowd: 0,
      log: [],
    };
  }
  reset();

  // 一轮：政府印 s 单位并花出去
  function step(s) {
    const st = state;
    st.round++;
    st.spendHist.push(s);
    st.money += s;
    // ① 新钱分配：按 share 分给各组（名义）
    for (const g of groups) st.nominal[g.id] += s * g.share;
    // ② 真实资源：闲置先被吸收，每单位新钱吸收 0.25 单位闲置（直到用尽）
    const absorbed = Math.min(st.idle, s * 0.25);
    st.idle = Math.max(0, st.idle - absorbed);
    // 就业保障：把闲置里的一部分变成固定工资岗位（产出低于市场用途）
    if (st.jg) {
      const hire = Math.min(st.idle, 6);
      st.idle -= hire; st.jgWorkers += hire;
      // 无价格信号：产出中约 40% 是有用的，其余是“擦已经干净的桌子”
      st.jgOutput += hire * 0.4; st.jgWaste += hire * 0.6;
      // 固定工资挤出：每轮 1.5 单位私人岗位被挤出（低生产率地区）
      st.crowd += 1.5;
      st.money += hire * 1.2; // 工资也是新钱
    }
    // ③ 物价：新钱进入管道，滞后 2–3 轮传导；闲置越少，传导越强
    const pressure = 1 - Math.min(1, st.idle / 30);           // 0（全闲置）→ 1（用尽）
    st.pipeline.push({ amt: s + (st.jg ? 7 : 0), age: 0, pressure });
    let dP = 0;
    for (const p of st.pipeline) {
      p.age++;
      if (p.age === 2) dP += p.amt * 0.25 * (0.35 + 0.65 * p.pressure);
      if (p.age === 3) dP += p.amt * 0.35 * (0.35 + 0.65 * p.pressure);
      if (p.age === 4) dP += p.amt * 0.15 * (0.35 + 0.65 * p.pressure);
    }
    // 闲置用尽后，价格对新钱几乎一比一
    if (st.idle <= 0.5) dP += s * 0.3;
    st.price += dP;
    st.priceHist.push(st.price); st.idleHist.push(st.idle);
    // ④ 各组实际购买力：名义 / 该组拿到钱时面对的价格（滞后 lag 轮）
    for (const g of groups) {
      const pAtReceipt = st.priceHist[Math.max(0, st.priceHist.length - 1 - g.lag)];
      // 已持有的存量按当前价格贬值，新拿到的按拿到时价格
      st.real[g.id] = st.nominal[g.id] / st.price * 100 * (0.7) + (st.nominal[g.id] / pAtReceipt * 100) * 0.3;
    }
    // 日志
    const cpi = ((st.price / st.priceHist[Math.max(0, st.priceHist.length - 2)] - 1) * 100);
    let msg;
    if (st.idle > 15) msg = ['ok', T("闲置资源还多，CPI 几乎没动——MMT 的仪表盘说“安全”。但看看下面：承包商已经赢了。", "Plenty of idle resources, CPI barely moved — MMT's dashboard says “safe.” But look below: contractors have already won.")];
    else if (st.idle > 0.5) msg = ['warn', T("闲置快用完了。管道里还有 " + st.pipeline.filter((p) => p.age < 4).reduce((a, p) => a + p.amt, 0).toFixed(0) + " 单位新钱没传导到物价——刹车现在踩也晚了。", "Idle resources nearly exhausted. " + st.pipeline.filter((p) => p.age < 4).reduce((a, p) => a + p.amt, 0).toFixed(0) + " units of new money are still in the pipeline, not yet in prices — braking now is already late.")];
    else msg = ['bad', T("真实资源用尽：现在每一单位新钱几乎全部变成物价。MMT 说“这时加税”——你愿意在这一轮加吗？", "Real resources exhausted: every unit of new money now goes almost entirely into prices. MMT says “tax now” — would you, this round?")];
    st.log.unshift('<span class="' + msg[0] + '">' + T("第 " + st.round + " 轮：花 " + s + "。", "Round " + st.round + ": spend " + s + ". ") + "</span>" + T("本轮 CPI ", "CPI this round ") + (cpi >= 0 ? "+" : "") + cpi.toFixed(1) + "%。" + msg[1]);
    st.log = st.log.slice(0, 6);
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🖨️ MMT 沙盘：先花钱，直到通胀——然后看看谁付了账", "🖨️ The MMT sandbox: spend first, until inflation — then see who paid")}</div>
      <div class="demo-row">
        <div class="demo-btns" style="margin:0">
          <button class="demo-btn" data-spend="10">${T("印 10 花出去", "Print & spend 10")}</button>
          <button class="demo-btn" data-spend="25">${T("印 25 花出去", "Print & spend 25")}</button>
          <button class="demo-btn" data-spend="0">${T("这一轮不花（观察管道）", "Spend 0 (watch the pipeline)")}</button>
          <button class="demo-btn" id="mm-jg">${T("就业保障：关", "Job guarantee: off")}</button>
          <button class="demo-btn" id="mm-reset">${T("重置", "Reset")}</button>
        </div>
      </div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("轮次", "Round")}</div><div class="v" id="mm-round">0</div></div>
        <div class="stat"><div class="k">${T("物价水平", "Price level")}</div><div class="v" id="mm-price">100</div></div>
        <div class="stat"><div class="k">${T("货币量", "Money")}</div><div class="v acc" id="mm-money">100</div></div>
        <div class="stat"><div class="k">${T("闲置资源", "Idle resources")}</div><div class="v" id="mm-idle">30</div></div>
        <div class="stat"><div class="k">${T("管道里的新钱", "Money in pipeline")}</div><div class="v" id="mm-pipe">0</div></div>
      </div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("各组实际购买力（起点 100）：谁先拿到钱，谁赢", "Real purchasing power by group (start 100): first receivers win")}</label>
          <div id="mm-groups"></div>
        </div>
        <div class="demo-block" id="mm-chart"></div>
      </div>
      <div class="demo-block" id="mm-jgblock" style="display:none">
        <label class="demo-label">${T("就业保障岗位：没有价格信号的生产", "Job-guarantee positions: production without a price signal")}</label>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("JG 雇员", "JG workers")}</div><div class="v" id="mm-jgw">0</div></div>
          <div class="stat"><div class="k">${T("有用产出", "Useful output")}</div><div class="v pos" id="mm-jgo">0</div></div>
          <div class="stat"><div class="k">${T("“擦干净的桌子”", "“Wiping clean tables”")}</div><div class="v neg" id="mm-jgx">0</div></div>
          <div class="stat"><div class="k">${T("被挤出的私人岗位", "Private jobs crowded out")}</div><div class="v neg" id="mm-jgc">0</div></div>
        </div>
        <div class="demo-meta">${T("固定工资 + 政府决定“做什么”= 没有利润亏损的反馈（阶段 6.3）。这里假设约 40% 的 JG 产出是社会真正需要的——这个比例没人知道，因为没人能算。这正是问题所在。", "Fixed wage + government decides “what to do” = no profit-and-loss feedback (Stage 6.3). We assume about 40% of JG output is genuinely wanted — nobody knows that number, because nobody can calculate it. That is the point.")}</div>
      </div>
      <div class="demo-block"><div class="demo-log" id="mm-log">${T("点“印 10 花出去”几次。前几轮 CPI 几乎不动——这是 MMT 说“看，没通胀”的阶段。", "Click “Print & spend 10” a few times. For the first rounds CPI barely moves — this is the phase where MMT says “see, no inflation.”")}</div></div>
      <p class="demo-tip">${T(
        "看三个时差：① 新钱进来的当轮，承包商的购买力已经上升、退休者已经下降——分配先变；② 物价要 2–3 轮后才涨——MMT 的刹车（CPI）是滞后表；③ 等闲置用尽、CPI 报警时，管道里还有一堆没传导的钱——你现在“加税”也拦不住。再打开就业保障，看没有价格的生产长什么样。",
        "Watch three lags: ① the round new money arrives, contractors' purchasing power is already up and pensioners' already down — distribution moves first; ② prices rise only 2–3 rounds later — MMT's brake (CPI) is a lagging gauge; ③ by the time idle resources are gone and CPI alarms, the pipeline still holds unspent pressure — “taxing now” cannot stop it. Then switch on the job guarantee and see what production without prices looks like."
      )}</p>
    </div>`;

  const paint = () => {
    const st = state;
    root.querySelector("#mm-round").textContent = st.round;
    root.querySelector("#mm-price").textContent = st.price.toFixed(0);
    root.querySelector("#mm-price").className = "v" + (st.price > 115 ? " neg" : "");
    root.querySelector("#mm-money").textContent = st.money.toFixed(0);
    root.querySelector("#mm-idle").textContent = st.idle.toFixed(0);
    root.querySelector("#mm-idle").className = "v" + (st.idle <= 0.5 ? " neg" : st.idle < 15 ? " acc" : "");
    root.querySelector("#mm-pipe").textContent = st.pipeline.filter((p) => p.age < 4).reduce((a, p) => a + p.amt * (p.age < 2 ? 1 : p.age < 3 ? 0.75 : 0.4), 0).toFixed(0);
    root.querySelector("#mm-groups").innerHTML = groups.map((g) => {
      const v = st.real[g.id];
      const col = v >= 100.5 ? "var(--green)" : v <= 99.5 ? "var(--red)" : "var(--orange)";
      return '<div class="bar2"><span class="lab" style="width:130px">' + g.name + '</span><div class="track"><div class="fill" style="width:' + Math.min(100, v / 1.6).toFixed(1) + '%;background:' + col + '"></div></div><span class="val" style="color:' + col + '">' + v.toFixed(0) + "</span></div>";
    }).join("");
    const n = st.priceHist.length;
    const interp = (arr) => (x) => { const i = Math.min(arr.length - 2, Math.max(0, Math.floor(x))); const w = x - i; return arr.length < 2 ? arr[0] : arr[i] * (1 - w) + arr[i + 1] * w; };
    const res = lineChart({ fns: [{ f: interp(st.priceHist), cls: "line3" }, { f: (x) => interp(st.idleHist)(x) * 3 + 10, cls: "line4" }], lo: 0, hi: Math.max(6, n - 1), xlabel: T("轮次", "round"), uid: "mm", samples: 80 });
    root.querySelector("#mm-chart").innerHTML = chartBlock(res, [["var(--red)", T("物价水平", "Price level")], ["var(--green)", T("闲置资源（缩放）", "Idle resources (scaled)")]]);
    root.querySelector("#mm-jg").textContent = st.jg ? T("就业保障：开", "Job guarantee: on") : T("就业保障：关", "Job guarantee: off");
    root.querySelector("#mm-jg").classList.toggle("active", st.jg);
    root.querySelector("#mm-jgblock").style.display = st.jg || st.jgWorkers > 0 ? "" : "none";
    root.querySelector("#mm-jgw").textContent = st.jgWorkers.toFixed(0);
    root.querySelector("#mm-jgo").textContent = st.jgOutput.toFixed(1);
    root.querySelector("#mm-jgx").textContent = st.jgWaste.toFixed(1);
    root.querySelector("#mm-jgc").textContent = st.crowd.toFixed(1);
    if (st.log.length) root.querySelector("#mm-log").innerHTML = st.log.map((l) => "<div>" + l + "</div>").join("");
  };

  root.querySelectorAll("[data-spend]").forEach((b) => b.addEventListener("click", () => { step(+b.dataset.spend); paint(); }));
  root.querySelector("#mm-jg").addEventListener("click", () => { state.jg = !state.jg; paint(); });
  root.querySelector("#mm-reset").addEventListener("click", () => { reset(); root.querySelector("#mm-log").innerHTML = T("已重置。", "Reset."); paint(); });
  paint();
}
