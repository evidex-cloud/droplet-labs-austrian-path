// 交互演示：利率分解器——三根滑块（时间偏好、风险溢价、预期通胀）叠成“自然的市场利率”，
// 第四根滑块是央行政策利率；两者之差标为“背离”；日志实时叙述企业家此刻会误读什么。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);
  const pct = (v) => v.toFixed(1) + "%";

  let tp = 3, risk = 2, infl = 2, policy = 1;
  const SPREAD = 2; // 银行加点（示意）

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧮 利率分解器：自然利率是叠出来的，政策利率是钉上去的", "🧮 The rate decomposer: the natural rate is stacked, the policy rate is pinned")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("① 纯时间偏好（原始利息）：", "① Pure time preference (originary interest):")} <b id="rd-tp-v">3.0%</b></label>
          <input class="demo-slider" type="range" min="0.5" max="8" step="0.5" value="3" id="rd-tp" />
          <label class="demo-label">${T("② 企业家/风险溢价：", "② Entrepreneurial / risk premium:")} <b id="rd-risk-v">2.0%</b></label>
          <input class="demo-slider" type="range" min="0" max="8" step="0.5" value="2" id="rd-risk" />
          <label class="demo-label">${T("③ 预期通胀（价格溢价）：", "③ Expected inflation (price premium):")} <b id="rd-infl-v">2.0%</b></label>
          <input class="demo-slider" type="range" min="-2" max="10" step="0.5" value="2" id="rd-infl" />
          <label class="demo-label" style="margin-top:14px;color:var(--blue)">${T("④ 央行政策利率：", "④ Central-bank policy rate:")} <b id="rd-policy-v">1.0%</b></label>
          <input class="demo-slider" type="range" min="-1" max="12" step="0.25" value="1" id="rd-policy" style="accent-color:var(--blue)" />
        </div>
        <div class="demo-block">
          <div id="rd-svg"></div>
          <div class="stat-row">
            <div class="stat"><div class="k">${T("自然的市场利率", "Natural market rate")}</div><div class="v acc" id="rd-nat">–</div></div>
            <div class="stat"><div class="k">${T("企业家看到的利率", "Rate entrepreneurs see")}</div><div class="v" id="rd-seen">–</div></div>
            <div class="stat"><div class="k">${T("背离（扭曲）", "Divergence (distortion)")}</div><div class="v" id="rd-gap">–</div></div>
            <div class="stat"><div class="k">${T("实际利率（看到 − 通胀）", "Real rate (seen − inflation)")}</div><div class="v" id="rd-real">–</div></div>
          </div>
        </div>
      </div>
      <div class="demo-block">
        <div class="demo-label">${T("企业家此刻会误读什么：", "What entrepreneurs will misread right now:")}</div>
        <div class="demo-log" id="rd-log"></div>
      </div>
      <div class="demo-btns">
        <button class="demo-btn" data-preset="base">${T("课文算例（7% vs 1%）", "Lesson example (7% vs 1%)")}</button>
        <button class="demo-btn" data-preset="zirp">${T("零利率（2009–15）", "ZIRP (2009–15)")}</button>
        <button class="demo-btn" data-preset="2022">${T("2022：通胀 8%、利率≈0", "2022: 8% inflation, rate ≈ 0")}</button>
        <button class="demo-btn" data-preset="tight">${T("过紧：政策高于自然", "Too tight: policy above natural")}</button>
        <button class="demo-btn" data-preset="match">${T("恰好吻合（运气）", "Exact match (by luck)")}</button>
      </div>
      <p class="demo-tip">${T(
        "自然利率不是一个数，是三层叠加的结果，而且每一层都在变。把政策利率拉低，看<strong>背离</strong>怎么变红、日志里的误读怎么一条条出现；拉到“恰好吻合”，再随便动一下前三根滑块——吻合立刻失效。这就是为什么“把政策利率设成自然利率”在原则上做不到：它得先被市场显现出来，而钉住它恰恰阻止了显现。",
        "The natural rate is not one number but the sum of three layers, each of which keeps moving. Pull the policy rate down and watch the <strong>divergence</strong> turn red and the misreadings appear one by one in the log; set “exact match,” then nudge any of the first three sliders — the match breaks instantly. That is why “set the policy rate equal to the natural rate” cannot be done in principle: the natural rate has to be revealed by the market, and pinning it is exactly what prevents the revelation."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const drawStack = (nat, seen, gap) => {
    const W = 420, H = 230, B = 200, scale = 12; // 每 1% = 12px
    const y = (v) => B - v * scale;
    const layers = [
      [T("时间偏好", "time pref."), tp, 1],
      [T("风险", "risk"), risk, 0.7],
      [T("通胀", "inflation"), infl, 0.45],
    ];
    let acc = 0, bars = "";
    for (const [lab, v, op] of layers) {
      const h = Math.abs(v) * scale;
      const top = v >= 0 ? y(acc + v) : y(acc);
      bars += `<rect x="60" y="${top.toFixed(1)}" width="110" height="${h.toFixed(1)}" fill="var(--orange)" opacity="${op}"/>`;
      if (h > 12) bars += `<text x="115" y="${(top + h / 2 + 4).toFixed(1)}" text-anchor="middle" font-size="10.5" fill="${op > 0.5 ? "#fff" : "var(--ink)"}" font-weight="700">${lab} ${pct(v)}</text>`;
      acc += v;
    }
    const seenTop = Math.min(y(seen), B), seenH = Math.abs(seen) * scale;
    const gapY1 = y(nat), gapY2 = y(seen);
    const svg = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif" style="width:100%;height:auto;display:block">
      ${bars}
      <text x="115" y="${(Math.min(y(nat), B) - 8).toFixed(1)}" text-anchor="middle" font-size="11.5" fill="var(--orange-ink)" font-weight="700">${T("自然 ", "natural ")}${pct(nat)}</text>
      <rect x="230" y="${seenTop.toFixed(1)}" width="110" height="${seenH.toFixed(1)}" fill="var(--blue)" opacity=".8"/>
      <text x="285" y="${(seenTop - 8).toFixed(1)}" text-anchor="middle" font-size="11.5" fill="var(--blue)" font-weight="700">${T("看到 ", "seen ")}${pct(seen)}</text>
      <line x1="30" y1="${B}" x2="${W - 10}" y2="${B}" stroke="var(--ink)" stroke-width="1.5"/>
      <line x1="360" y1="${gapY1.toFixed(1)}" x2="360" y2="${gapY2.toFixed(1)}" stroke="${Math.abs(gap) < 0.26 ? "var(--green)" : "var(--red)"}" stroke-width="2.5" stroke-dasharray="5 3"/>
      <text x="368" y="${((gapY1 + gapY2) / 2 + 4).toFixed(1)}" font-size="11" fill="${Math.abs(gap) < 0.26 ? "var(--green)" : "var(--red)"}" font-weight="700">${gap >= 0 ? "−" : "+"}${Math.abs(gap).toFixed(1)}</text>
      <text x="115" y="${B + 16}" text-anchor="middle" font-size="10.5" fill="var(--muted)">${T("三层叠加", "three layers")}</text>
      <text x="285" y="${B + 16}" text-anchor="middle" font-size="10.5" fill="var(--muted)">${T("政策 + 银行加点", "policy + bank spread")}</text>
    </svg>`;
    $("rd-svg").innerHTML = svg;
  };

  const paint = () => {
    $("rd-tp-v").textContent = pct(tp); $("rd-risk-v").textContent = pct(risk);
    $("rd-infl-v").textContent = pct(infl); $("rd-policy-v").textContent = pct(policy);
    const nat = tp + risk + infl;
    const seen = policy + SPREAD;
    const gap = nat - seen;
    const real = seen - infl;
    $("rd-nat").textContent = pct(nat);
    $("rd-seen").textContent = pct(seen);
    const g = $("rd-gap");
    g.textContent = (gap > 0 ? "−" : gap < 0 ? "+" : "") + Math.abs(gap).toFixed(1) + T(" 个百分点", " pts");
    g.className = "v " + (Math.abs(gap) < 0.26 ? "pos" : "neg");
    const r = $("rd-real"); r.textContent = pct(real); r.className = "v " + (real < 0 ? "neg" : "");
    drawStack(nat, seen, gap);

    const lines = [];
    if (Math.abs(gap) < 0.26) {
      lines.push(`<span class="ok">${T("此刻政策利率 + 加点恰好等于三层之和——但这是运气：时间偏好、风险感知、通胀预期任何一个动一下，吻合就消失。没有人能持续做到这一点，因为自然利率只在自由借贷中显现，而钉住它正好阻止了显现。", "Right now policy + spread happens to equal the three layers — by luck: move time preference, risk perception or inflation expectations even slightly and the match is gone. Nobody can sustain this, because the natural rate reveals itself only in free lending, and pinning it prevents exactly that.")}</span>`);
    } else if (gap > 0) {
      lines.push(`<span class="bad">${T("企业家看到的等待价格被谎报低了 " + gap.toFixed(1) + " 个百分点。", "The price of waiting entrepreneurs see is under-reported by " + gap.toFixed(1) + " points.")}</span>`);
      lines.push(`<span class="warn">${T("误读一：“社会储蓄增加了。” 一个 10 年期项目在 " + pct(nat) + " 下净现值为负、在 " + pct(seen) + " 下为正——他开工了。但没有人少消费，生存基金没变大，项目中途会缺粮（阶段 5.1）。", "Misreading one: “saving has increased.” A 10-year project with negative NPV at " + pct(nat) + " turns positive at " + pct(seen) + " — ground is broken. But nobody consumed less; the subsistence fund did not grow; the project will run out of provisions (Stage 5.1).")}</span>`);
      if (seen - infl < tp + risk) lines.push(`<span class="warn">${T("误读二：“风险变小了。” 借款成本里的风险溢价被压到 " + Math.max(0, seen - infl - tp).toFixed(1) + "%（应为 " + pct(risk) + "）——高风险项目和低风险项目被同样便宜地融资，风险定价失效。", "Misreading two: “risk has fallen.” The risk premium inside the borrowing cost is squeezed to " + Math.max(0, seen - infl - tp).toFixed(1) + "% (should be " + pct(risk) + ") — risky and safe projects are financed equally cheaply; risk pricing stops working.")}</span>`);
      if (real < tp) lines.push(`<span class="warn">${T("误读三：“物价会稳定。” 实际利率只有 " + pct(real) + (real < 0 ? "——出借人在倒贴" : "，低于时间偏好 " + pct(tp)) + "。谁先拿到便宜的钱？离银行最近的人（阶段 4.3 坎蒂隆效应）。", "Misreading three: “prices will be stable.” The real rate is only " + pct(real) + (real < 0 ? " — lenders are paying to lend" : ", below time preference of " + pct(tp)) + ". Who gets the cheap money first? Those closest to the bank (Cantillon effects, Stage 4.3).")}</span>`);
      if (seen <= 0.01) lines.push(`<span class="bad">${T("零/负利率：背离等于整个自然利率——最极端的失真。时间偏好没有变负，它只是无法在贷款市场表达，会转到房价、股价、硬钱需求里去。", "Zero/negative rate: the divergence equals the whole natural rate — the most extreme distortion. Time preference has not turned negative; it simply cannot express itself in the loan market and moves into house prices, stocks and the demand for hard money.")}</span>`);
    } else {
      lines.push(`<span class="warn">${T("政策利率高于自然水平 " + (-gap).toFixed(1) + " 个百分点：企业家看到的等待价格被谎报高了。原本在 " + pct(nat) + " 下划算的项目在 " + pct(seen) + " 下放弃——这是维克塞尔的累积性通缩方向，也是奥派承认“过紧”同样会扭曲结构的地方。", "The policy rate sits " + (-gap).toFixed(1) + " points above the natural level: the price of waiting is over-reported. Projects that pay at " + pct(nat) + " are abandoned at " + pct(seen) + " — Wicksell's cumulative-deflation direction, and where Austrians concede that “too tight” distorts the structure too.")}</span>`);
    }
    lines.push(T("提醒：自然利率不可观察。这里的三层是你输入的；现实里没有人知道它们的值——包括拉动滑块的央行。", "Reminder: the natural rate is unobservable. The three layers here are your inputs; in reality nobody knows their values — including the central bank pulling the slider."));
    $("rd-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  const bind = (id, set) => $(id).addEventListener("input", (e) => { set(+e.target.value); paint(); });
  bind("rd-tp", (v) => (tp = v)); bind("rd-risk", (v) => (risk = v)); bind("rd-infl", (v) => (infl = v)); bind("rd-policy", (v) => (policy = v));
  const setAll = (a, b, c, d) => { tp = a; risk = b; infl = c; policy = d; $("rd-tp").value = a; $("rd-risk").value = b; $("rd-infl").value = c; $("rd-policy").value = d; paint(); };
  root.querySelectorAll("[data-preset]").forEach((btn) => btn.addEventListener("click", () => {
    root.querySelectorAll("[data-preset]").forEach((x) => x.classList.toggle("active", x === btn));
    const p = btn.dataset.preset;
    if (p === "base") setAll(3, 2, 2, 1);
    if (p === "zirp") setAll(3, 2, 1.5, 0);
    if (p === "2022") setAll(3, 2, 8, 0.25);
    if (p === "tight") setAll(3, 2, 2, 9);
    if (p === "match") setAll(3, 2, 2, 5);
  }));
  paint();
}
