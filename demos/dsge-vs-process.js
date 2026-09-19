// 交互演示：同一个信用冲击（央行压低利率 s 个百分点、持续 D 个季度）打进两个玩具模型：
// ① 代表性行动人 DSGE：一条线性差分方程，光滑地回到趋势——没有人借错、没有清算。
// ② 异质主体的过程模型：60 家企业分布在 5 个生产阶段，各自的项目长度与乐观程度不同；
//    利率回升时未完工的长项目集群失败，沿供应链传染，再慢慢重新协调。
// 开关：给 DSGE 加上异质性 / 不确定性，看它的“干净”行为怎么消失。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const Q = 24;                // 模拟季度
  let shock = 2.0;             // 利率压低幅度（百分点）
  let dur = 8;                 // 冲击持续季度
  let hetero = false, uncert = false;
  let seed = 7;

  // 可复现的伪随机数
  function rng(s) { let a = s >>> 0; return () => { a += 0x6D2B79F5; let t = Math.imul(a ^ (a >>> 15), 1 | a); t ^= t + Math.imul(t ^ (t >>> 7), 61 | t); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

  // —— ① DSGE 玩具：y_t = ρ y_{t-1} + β (r* − r_t) ——
  function dsge(s, D, het, unc, sd) {
    const r = rng(sd * 31 + 1);
    const N = het ? 40 : 1;
    const agents = [];
    for (let i = 0; i < N; i++) {
      agents.push({
        rho: het ? 0.55 + r() * 0.35 : 0.7,
        beta: het ? 0.15 + r() * 1.1 : 0.5,
        // 不确定性：对冲击“会持续多久”的信念 —— 有人以为是永久的
        belief: unc ? (r() < 0.45 ? 1 : 0) : 0,
        y: 0, over: 0, fail: 0,
      });
    }
    const path = [0];
    let fails = 0;
    for (let t = 1; t <= Q; t++) {
      const gap = t <= D ? s : 0;
      let sum = 0;
      for (const a of agents) {
        let y = a.rho * a.y + a.beta * gap;
        if (a.belief) {
          // 以为利率永久压低 → 额外过度投资累积；冲击结束后暴露为损失
          if (t <= D) a.over += a.beta * s * 0.35;
          else if (a.over > 0 && a.fail === 0) { a.fail = t; fails++; }
          if (a.fail && t - a.fail < 6) y -= a.over * (1 - (t - a.fail) / 6);
        }
        a.y = y; sum += y;
      }
      path.push(sum / N);
    }
    return { path, fails };
  }

  // —— ② 过程模型：60 家企业，5 个阶段 ——
  function process(s, D, sd) {
    const r = rng(sd * 97 + 3);
    const firms = [];
    const stagesN = 5, per = 12;
    for (let st = 0; st < stagesN; st++) for (let j = 0; j < per; j++) {
      const L = Math.round(3 + (stagesN - 1 - st) * 3 + r() * 3);   // 越早期阶段，项目越长
      firms.push({ st, L, opt: r(), inv: 0, start: 0, state: "idle", failAt: 0, y: 1 });
    }
    const path = [0], stageOut = [];
    let fails = 0, boomPeak = 0;
    const base = firms.length;
    for (let t = 1; t <= Q; t++) {
      const rate = t <= D ? -s : 0;
      // 繁荣：乐观且项目长的企业借新信用扩张
      if (t <= D) for (const f of firms) {
        if (f.state === "idle" && f.opt * s * (f.L / 8) > 0.55 + r() * 0.5) { f.state = "expand"; f.start = t; f.inv = 0.35 + f.opt * s * 0.25; }
      }
      // 利率回升：未完工的扩张项目失败（越长、越靠早期、投入越大越容易）
      if (t === D + 1) for (const f of firms) {
        if (f.state === "expand" && t - f.start < f.L) {
          const exposure = f.inv * (f.L - (t - f.start)) / f.L;
          if (exposure > 0.28) { f.state = "fail"; f.failAt = t; fails++; }
          else f.state = "done";
        } else if (f.state === "expand") f.state = "done";
      }
      // 供应链传染：某阶段失败比例高 → 下游阶段暂时减产
      const failShare = Array(stagesN).fill(0);
      for (const f of firms) if (f.state === "fail" && t - f.failAt < 5) failShare[f.st] += 1 / per;
      let total = 0;
      for (const f of firms) {
        let y = 1;
        if (f.state === "expand") y = 1 + f.inv * 0.6;                       // 繁荣期计入产出
        else if (f.state === "done") y = 1 + f.inv * 0.25;                    // 完工项目带来真实增量
        else if (f.state === "fail") {
          const age = t - f.failAt;
          y = age < 4 ? 0.15 : Math.min(1, 0.15 + (age - 4) * 0.12);           // 清算 → 重新协调
        }
        if (f.st > 0) y *= 1 - failShare[f.st - 1] * 0.5;                       // 上游失败传染
        total += y;
      }
      const gap = (total / base - 1) * 100 + rate * 0; // 产出缺口 %
      if (gap > boomPeak) boomPeak = gap;
      path.push(gap);
    }
    const trough = Math.min(...path.slice(D + 1));
    let recover = Q;
    for (let t = D + 1; t <= Q; t++) if (path[t] >= -0.3 && path[t] <= path[Q] + 0.3 && t > D + 3) { recover = t; break; }
    return { path, firms, fails, boomPeak, trough, recover };
  }

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧮 同一个信用冲击：代表性行动人 vs 异质主体的市场过程", "🧮 One credit shock: representative agent vs a heterogeneous market process")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("央行把利率压低（百分点）：", "Central bank lowers the rate by (pct. points): ")}<b id="dp-s">${shock.toFixed(1)}</b></label>
          <input class="demo-slider" id="dp-shock" type="range" min="0" max="4" step="0.5" value="${shock}" />
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("压低持续（季度）：", "Kept low for (quarters): ")}<b id="dp-d">${dur}</b></label>
          <input class="demo-slider" id="dp-dur" type="range" min="2" max="14" step="1" value="${dur}" />
        </div>
      </div>
      <div class="demo-btns">
        <button class="demo-btn" id="dp-het">${T("给 DSGE 加异质性", "Add heterogeneity to DSGE")}</button>
        <button class="demo-btn" id="dp-unc">${T("给 DSGE 加不确定性", "Add uncertainty to DSGE")}</button>
        <button class="demo-btn" id="dp-reroll">${T("🎲 换一批企业家", "🎲 New set of entrepreneurs")}</button>
      </div>
      <div class="demo-block" id="dp-chart"></div>
      <div class="cmp">
        <div class="cmp-cell cold">
          <h5>${T("① 代表性行动人 DSGE", "① Representative-agent DSGE")}</h5>
          <div class="stat-row">
            <div class="stat"><div class="k">${T("峰值缺口", "Peak gap")}</div><div class="v" id="dp-a-peak">–</div></div>
            <div class="stat"><div class="k">${T("最低缺口", "Trough")}</div><div class="v" id="dp-a-tr">–</div></div>
            <div class="stat"><div class="k">${T("失败", "Failures")}</div><div class="v" id="dp-a-f">–</div></div>
          </div>
          <div class="demo-meta" id="dp-a-meta"></div>
        </div>
        <div class="cmp-cell hl">
          <h5>${T("② 异质主体的过程模型", "② Heterogeneous-agent process model")}</h5>
          <div class="stat-row">
            <div class="stat"><div class="k">${T("峰值缺口", "Peak gap")}</div><div class="v" id="dp-b-peak">–</div></div>
            <div class="stat"><div class="k">${T("最低缺口", "Trough")}</div><div class="v" id="dp-b-tr">–</div></div>
            <div class="stat"><div class="k">${T("失败", "Failures")}</div><div class="v" id="dp-b-f">–</div></div>
          </div>
          <div class="demo-meta" id="dp-b-meta"></div>
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("60 家企业的结局（左 = 最早期阶段，右 = 零售）：绿 = 扩张且完工，红 = 失败并清算，灰 = 未参与", "Fate of 60 firms (left = earliest stage, right = retail): green = expanded and completed, red = failed and liquidated, grey = untouched")}</label>
        <div id="dp-strips"></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="dp-log"></div></div>
      <p class="demo-tip">${T(
        "先看默认设置：蓝线（DSGE）鼓起一个光滑的包，然后平滑回到 0——没有萧条，因为一个人不可能被自己的钱骗。金线（过程模型）在利率回升那一季出现一簇失败，先跌破 0，再靠清算与重新协调爬回来。然后点“加异质性”“加不确定性”：蓝线开始出现过冲、失败与下跌——你每往 DSGE 里加一点奥派认为重要的东西，它的干净就少一分。",
        "Start with the defaults: the blue line (DSGE) forms a smooth hump and glides back to 0 — no bust, because one agent cannot be fooled by its own money. The gold line (process model) shows a cluster of failures the quarter the rate normalizes, drops below 0, then climbs back through liquidation and re-coordination. Now click “add heterogeneity” and “add uncertainty”: the blue line starts to overshoot, fail and dip — every Austrian ingredient you add to DSGE costs it some of its cleanliness."
      )}</p>
    </div>`;

  const interp = (arr) => (x) => { const i = Math.min(Q - 1, Math.max(0, Math.floor(x))); const w = x - i; return arr[i] * (1 - w) + arr[i + 1] * w; };
  const f1 = (v) => (v > 0 ? "+" : "") + v.toFixed(1) + "%";

  const paint = () => {
    root.querySelector("#dp-s").textContent = shock.toFixed(1);
    root.querySelector("#dp-d").textContent = dur;
    root.querySelector("#dp-het").classList.toggle("active", hetero);
    root.querySelector("#dp-unc").classList.toggle("active", uncert);

    const a = dsge(shock, dur, hetero, uncert, seed);
    const b = process(shock, dur, seed);
    const res = lineChart({
      fns: [{ f: interp(a.path), cls: "line2" }, { f: interp(b.path), cls: "line" }],
      lo: 0, hi: Q, xlabel: T("季度（利率在第 " + dur + " 季后回升）", "quarter (rate normalizes after quarter " + dur + ")"), forceZero: true, markerX: dur, markerLabel: T("利率回升", "rate up"), uid: "dp", samples: 120,
    });
    root.querySelector("#dp-chart").innerHTML = chartBlock(res, [["var(--blue)", T("DSGE 产出缺口 %", "DSGE output gap %")], ["var(--orange)", T("过程模型产出缺口 %", "Process-model output gap %")]]);

    const aPeak = Math.max(...a.path), aTr = Math.min(...a.path.slice(dur));
    const set = (id, v, cls) => { const el = root.querySelector(id); el.textContent = v; el.className = "v" + (cls ? " " + cls : ""); };
    set("#dp-a-peak", f1(aPeak), "pos"); set("#dp-a-tr", f1(aTr), aTr < -0.3 ? "neg" : ""); set("#dp-a-f", a.fails, a.fails ? "neg" : "");
    set("#dp-b-peak", f1(b.boomPeak), "pos"); set("#dp-b-tr", f1(b.trough), b.trough < -0.3 ? "neg" : ""); set("#dp-b-f", b.fails, b.fails ? "neg" : "");

    root.querySelector("#dp-a-meta").innerHTML = hetero || uncert
      ? T("加了" + (hetero ? "异质性" : "") + (hetero && uncert ? "与" : "") + (uncert ? "不确定性" : "") + "之后：" + (uncert ? "约 45% 的主体误以为低利率是永久的，冲击结束时集体暴露损失（" + a.fails + " 个失败）；" : "") + (hetero ? "各主体的反应速度不同，加总后出现拖尾与过冲；" : "") + "“光滑回到趋势”不见了。", "With " + (hetero ? "heterogeneity" : "") + (hetero && uncert ? " and " : "") + (uncert ? "uncertainty" : "") + " added: " + (uncert ? "about 45% of agents believe the low rate is permanent and expose losses together when it ends (" + a.fails + " failures); " : "") + (hetero ? "agents respond at different speeds, so the aggregate shows tails and overshoot; " : "") + "the “smooth return to trend” is gone.")
      : T("一个主体、一条差分方程：冲击期间产出缺口鼓起，之后按 0.7 的惯性衰减回 0。没有借贷双方，没有阶段，没有失败——萧条在结构上不可能出现。", "One agent, one difference equation: the gap swells during the shock and decays back to 0 with persistence 0.7. No borrowers and lenders, no stages, no failures — a bust is structurally impossible.");
    root.querySelector("#dp-b-meta").innerHTML = T(
      "繁荣期 " + b.firms.filter((f) => f.state !== "idle").length + " 家企业借新信用扩张（乐观、项目长的优先）；利率回升时 " + b.fails + " 家未完工项目失败，失败沿供应链向下游传染；约 " + Math.max(0, b.recover - dur) + " 个季度后重新协调完成。",
      b.firms.filter((f) => f.state !== "idle").length + " firms expanded on new credit during the boom (the optimistic and long-horizon ones first); " + b.fails + " unfinished projects failed when the rate normalized, and failures propagated downstream; re-coordination took about " + Math.max(0, b.recover - dur) + " quarters."
    );

    const stageLab = [T("原材料/研发", "Raw / R&D"), T("机器设备", "Machinery"), T("零部件", "Components"), T("装配", "Assembly"), T("零售", "Retail")];
    root.querySelector("#dp-strips").innerHTML = [0, 1, 2, 3, 4].map((st) => {
      const cells = b.firms.filter((f) => f.st === st).map((f) => '<span class="strip-cell ' + (f.state === "fail" ? "lose" : f.state === "done" ? "win" : f.state === "expand" ? "on" : "") + '" title="L=' + f.L + '"></span>').join("");
      const nf = b.firms.filter((f) => f.st === st && f.state === "fail").length;
      return '<div class="bar2"><span class="lab">' + stageLab[st] + '</span><div class="strip" style="margin:0;flex:1">' + cells + '</div><span class="val" style="color:' + (nf ? "var(--red)" : "var(--muted)") + '">' + nf + " " + T("失败", "failed") + "</span></div>";
    }).join("");

    const lines = [];
    if (shock === 0) lines.push('<span class="warn">' + T("没有冲击，两个模型都躺在 0 上。往右拉滑块。", "No shock; both models lie flat at 0. Drag the slider right.") + "</span>");
    else {
      lines.push('<span class="ok">' + T("DSGE：", "DSGE: ") + "</span>" + T("峰值 " + f1(aPeak) + "，最低 " + f1(aTr) + "。" + (aTr > -0.3 ? "从不跌破趋势——冲击只是被“平滑”掉了。" : "加了奥派的配料后，它也开始跌破趋势了。"), "peak " + f1(aPeak) + ", trough " + f1(aTr) + ". " + (aTr > -0.3 ? "Never falls below trend — the shock is merely “smoothed.”" : "With Austrian ingredients added, it now dips below trend too.")));
      lines.push('<span class="bad">' + T("过程模型：", "Process model: ") + "</span>" + T("峰值 " + f1(b.boomPeak) + "（繁荣期误建的项目也计入产出——这就是拨弦模型看不出病态的原因，阶段 11.2），最低 " + f1(b.trough) + "，失败集中在最早期阶段：错误投资离消费越远越脆弱。", "peak " + f1(b.boomPeak) + " (projects that should not exist count as output during the boom — why the plucking model sees nothing wrong, Stage 11.2), trough " + f1(b.trough) + ", failures concentrated in the earliest stages: malinvestment is most fragile farthest from consumption."));
      lines.push(T("把“持续季度”拉长：过程模型的失败簇变大（更多长项目被启动），DSGE 只是包更宽。这就是“均衡是起点”与“均衡是过程”的差别。", "Lengthen “kept low for”: the process model's failure cluster grows (more long projects get started), while DSGE's hump merely widens. That is the difference between equilibrium as premise and equilibrium as process."));
    }
    root.querySelector("#dp-log").innerHTML = lines.map((l) => "<div>" + l + "</div>").join("");
  };

  root.querySelector("#dp-shock").addEventListener("input", (e) => { shock = +e.target.value; paint(); });
  root.querySelector("#dp-dur").addEventListener("input", (e) => { dur = +e.target.value; paint(); });
  root.querySelector("#dp-het").addEventListener("click", () => { hetero = !hetero; paint(); });
  root.querySelector("#dp-unc").addEventListener("click", () => { uncert = !uncert; paint(); });
  root.querySelector("#dp-reroll").addEventListener("click", () => { seed = (seed * 13 + 5) % 1000; paint(); });
  paint();
}
