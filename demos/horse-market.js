// 交互演示：庞巴维克马市——10 个买家的最高价、8 个卖家的最低价可用 ± 调整；
// 实时算出成交对数、价格区间与四个边际交易者；画阶梯供需 SVG；
// 另有“试一个价格”滑块，看在任意价格下愿买/愿卖的人数怎么把价格往区间里挤。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const B0 = [30, 28, 26, 24, 22, 21, 20, 18, 17, 15];
  const S0 = [10, 11, 15, 17, 20, 21.5, 25, 26];
  let buyers = B0.slice(), sellers = S0.slice();
  let testP = 18;

  const fmt = (v) => (Math.round(v * 100) / 100).toString();

  // 核心计算：排序、配对、边际对、价格区间
  const solve = () => {
    const B = buyers.map((v, i) => ({ v, i })).sort((a, b) => b.v - a.v);
    const S = sellers.map((v, i) => ({ v, i })).sort((a, b) => a.v - b.v);
    let n = 0;
    while (n < B.length && n < S.length && B[n].v >= S[n].v) n++;
    const lastB = n ? B[n - 1] : null, lastS = n ? S[n - 1] : null;
    const firstOutB = B[n] || null, firstOutS = S[n] || null;
    const hi = Math.min(lastB ? lastB.v : Infinity, firstOutS ? firstOutS.v : Infinity);
    const lo = Math.max(lastS ? lastS.v : -Infinity, firstOutB ? firstOutB.v : -Infinity);
    return { B, S, n, lastB, lastS, firstOutB, firstOutS, hi, lo };
  };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🐎 庞巴维克的马市：谁在边际上，谁就定价", "🐎 Böhm-Bawerk's horse market: whoever sits at the margin sets the price")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("买家 · 最多肯出（点 ± 改，步长 0.5）", "Buyers · maximum they will pay (± steps of 0.5)")}</label>
          <div id="hm-buyers"></div>
        </div>
        <div class="demo-block">
          <label class="demo-label">${T("卖家 · 最少要收", "Sellers · minimum they will accept")}</label>
          <div id="hm-sellers"></div>
        </div>
      </div>
      <div class="demo-btns">
        <button class="demo-btn" id="hm-addb">${T("＋ 来一个新买家（出价 23）", "＋ Add a new buyer (bids 23)")}</button>
        <button class="demo-btn" id="hm-adds">${T("＋ 来一个新卖家（要价 19）", "＋ Add a new seller (asks 19)")}</button>
        <button class="demo-btn" id="hm-reset">${T("↺ 恢复原书数字", "↺ Reset to the book's numbers")}</button>
      </div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("成交匹数", "Horses traded")}</div><div class="v acc" id="hm-n">–</div></div>
        <div class="stat"><div class="k">${T("价格下限", "Price floor")}</div><div class="v" id="hm-lo">–</div></div>
        <div class="stat"><div class="k">${T("价格上限", "Price ceiling")}</div><div class="v" id="hm-hi">–</div></div>
        <div class="stat"><div class="k">${T("区间宽度", "Band width")}</div><div class="v" id="hm-w">–</div></div>
      </div>
      <div class="demo-block">
        <div class="chart" id="hm-chart"></div>
      </div>
      <div class="demo-block">
        <div class="demo-log" id="hm-log"></div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("试一个价格：", "Try a price:")} <b id="hm-tp">${testP}</b></label>
        <input class="demo-slider" type="range" min="8" max="32" step="0.5" value="${testP}" id="hm-test" />
        <div class="demo-out" id="hm-testout"></div>
      </div>
      <p class="demo-tip">${T(
        "试三件事：把 A1 的 30 改成 40——价格纹丝不动（他不在边际上）；点“来一个新买家（23）”——成交多一匹、区间上移半元；把滑块拖到 18 或 24——看愿买和愿卖的人数怎么对不上，把价格往 21–21.5 挤。<strong>四个高亮的人就是边际对。</strong>",
        "Try three things: raise A1 from 30 to 40 — the price does not move (he is not at the margin); click “Add a new buyer (23)” — one more horse trades and the band shifts up half a dollar; drag the slider to 18 or 24 — watch the counts of willing buyers and sellers fail to match, squeezing the price toward 21–21.5. <strong>The four highlighted people are the marginal pairs.</strong>"
      )}</p>
    </div>`;

  const listHtml = (arr, prefix, r, isBuyer) => arr.map((v, i) => {
    const role = isBuyer
      ? (r.lastB && r.lastB.i === i ? "last" : r.firstOutB && r.firstOutB.i === i ? "out" : null)
      : (r.lastS && r.lastS.i === i ? "last" : r.firstOutS && r.firstOutS.i === i ? "out" : null);
    const rank = (isBuyer ? r.B : r.S).findIndex((x) => x.i === i);
    const trades = rank < r.n;
    const tag = role === "last" ? `<span class="pill ok">${T("最后一对成交", "last to trade")}</span>` : role === "out" ? `<span class="pill bad">${T("第一对没成交", "first left out")}</span>` : "";
    return `<div class="demo-row" style="margin:4px 0;padding:4px 8px;border-radius:6px;background:${role ? "var(--orange-soft)" : "transparent"};opacity:${trades || role ? 1 : 0.55}">
      <span style="font-size:13px;min-width:34px;font-weight:${role ? 700 : 500};color:${isBuyer ? "var(--blue)" : "var(--orange-ink)"}">${prefix}${i + 1}</span>
      <span style="display:flex;align-items:center;gap:6px">
        <button class="demo-btn" data-k="${isBuyer ? "b" : "s"}" data-i="${i}" data-d="-0.5" style="padding:2px 8px;font-size:12px">−</button>
        <b style="min-width:36px;text-align:center;font-variant-numeric:tabular-nums">${fmt(v)}</b>
        <button class="demo-btn" data-k="${isBuyer ? "b" : "s"}" data-i="${i}" data-d="0.5" style="padding:2px 8px;font-size:12px">＋</button>
      </span>
      <span style="min-width:96px;text-align:right;font-size:12px">${tag || (trades ? `<span style="color:var(--green)">✓ ${T("成交", "trades")}</span>` : `<span style="color:var(--muted)">${T("出局", "out")}</span>`)}</span>
    </div>`;
  }).join("");

  const chartHtml = (r) => {
    const W = 560, H = 280, mL = 44, mR = 14, mT = 18, mB = 30;
    const maxN = Math.max(r.B.length, r.S.length);
    const allV = [...buyers, ...sellers];
    const ymax = Math.max(...allV) + 2, ymin = Math.max(0, Math.min(...allV) - 2);
    const x = (k) => mL + (k / maxN) * (W - mL - mR);
    const y = (v) => H - mB - ((v - ymin) / (ymax - ymin)) * (H - mB - mT);
    const step = (arr, cls) => {
      let d = "";
      arr.forEach((p, k) => { d += (k === 0 ? "M" : "L") + x(k).toFixed(1) + " " + y(p.v).toFixed(1) + " L" + x(k + 1).toFixed(1) + " " + y(p.v).toFixed(1) + " "; });
      return `<path class="${cls}" d="${d}"/>`;
    };
    let grid = "";
    for (let k = 0; k <= maxN; k++) grid += `<line class="grid" x1="${x(k).toFixed(1)}" y1="${mT}" x2="${x(k).toFixed(1)}" y2="${H - mB}"/><text class="lbl-axis" x="${x(k).toFixed(1)}" y="${H - mB + 14}" text-anchor="middle">${k}</text>`;
    let ylab = "";
    for (const v of [ymin, (ymin + ymax) / 2, ymax]) ylab += `<text class="lbl-axis" x="${mL - 6}" y="${(y(v) + 3).toFixed(1)}" text-anchor="end">${fmt(Math.round(v * 2) / 2)}</text>`;
    let band = "";
    if (r.n > 0 && isFinite(r.hi) && isFinite(r.lo)) {
      band = `<rect x="${x(r.n - 0.5).toFixed(1)}" y="${y(r.hi).toFixed(1)}" width="${(x(1) - x(0)).toFixed(1)}" height="${Math.max(2, y(r.lo) - y(r.hi)).toFixed(1)}" fill="var(--red)" opacity=".85"/>
        <line class="marker" x1="${x(r.n).toFixed(1)}" y1="${mT}" x2="${x(r.n).toFixed(1)}" y2="${H - mB}"/>
        <text class="lbl-axis" x="${x(r.n).toFixed(1)}" y="${mT - 4}" text-anchor="middle" style="fill:var(--red);font-weight:700">${T("价格区间", "band")} ${fmt(r.lo)}–${fmt(r.hi)}</text>`;
    }
    const dot = (p, k, cls, label, above) => p ? `<circle cx="${x(k + 0.5).toFixed(1)}" cy="${y(p.v).toFixed(1)}" r="4.5" style="fill:${cls}"/><text class="lbl-axis" x="${x(k + 0.5).toFixed(1)}" y="${(y(p.v) + (above ? -8 : 14)).toFixed(1)}" text-anchor="middle" style="fill:${cls};font-weight:700">${label} ${fmt(p.v)}</text>` : "";
    const marks = dot(r.lastB, r.n - 1, "var(--blue)", "A" + (r.lastB ? r.lastB.i + 1 : ""), true)
      + dot(r.lastS, r.n - 1, "var(--orange)", "B" + (r.lastS ? r.lastS.i + 1 : ""), false)
      + dot(r.firstOutB, r.n, "var(--blue)", "A" + (r.firstOutB ? r.firstOutB.i + 1 : ""), false)
      + dot(r.firstOutS, r.n, "var(--orange)", "B" + (r.firstOutS ? r.firstOutS.i + 1 : ""), true);
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img">${grid}
      <line class="axis" x1="${mL}" y1="${mT}" x2="${mL}" y2="${H - mB}"/><line class="axis" x1="${mL}" y1="${H - mB}" x2="${W - mR}" y2="${H - mB}"/>
      ${step(r.B, "line2")}${step(r.S, "line")}${band}${marks}${ylab}
      <text class="lbl-axis" x="${((mL + W - mR) / 2).toFixed(1)}" y="${H - 2}" text-anchor="middle">${T("第 n 对（买家由高到低 / 卖家由低到高）", "n-th pair (buyers high→low / sellers low→high)")}</text>
    </svg><div class="chart-legend"><span><i style="background:var(--blue)"></i>${T("需求阶梯（买家最高价）", "demand steps (buyers' maxima)")}</span><span><i style="background:var(--orange)"></i>${T("供给阶梯（卖家最低价）", "supply steps (sellers' minima)")}</span><span><i style="background:var(--red)"></i>${T("价格区间", "price band")}</span></div>`;
  };

  const paint = () => {
    const r = solve();
    root.querySelector("#hm-buyers").innerHTML = listHtml(buyers, "A", r, true);
    root.querySelector("#hm-sellers").innerHTML = listHtml(sellers, "B", r, false);
    root.querySelectorAll("[data-k]").forEach((b) => b.addEventListener("click", () => {
      const arr = b.dataset.k === "b" ? buyers : sellers;
      arr[+b.dataset.i] = Math.max(0, Math.round((arr[+b.dataset.i] + +b.dataset.d) * 2) / 2);
      paint();
    }));
    root.querySelector("#hm-n").textContent = r.n;
    root.querySelector("#hm-lo").textContent = isFinite(r.lo) ? fmt(r.lo) : "–";
    root.querySelector("#hm-hi").textContent = isFinite(r.hi) ? fmt(r.hi) : "–";
    root.querySelector("#hm-w").textContent = isFinite(r.lo) && isFinite(r.hi) ? fmt(r.hi - r.lo) : "–";
    root.querySelector("#hm-chart").innerHTML = chartHtml(r);

    const lines = [];
    if (r.n === 0) {
      lines.push(`<span class="bad">${T("没有任何一对买卖双方的估值相反——没有交换发生。价格不存在，因为没有人成交。", "No buyer's maximum reaches any seller's minimum — no exchange happens. There is no price, because nobody trades.")}</span>`);
    } else {
      const nm = (p, pre) => p ? `<b>${pre}${p.i + 1}</b>（${fmt(p.v)}）` : T("（无）", "(none)");
      lines.push(`${T("最后一对成交：", "Last pair that trades: ")}${nm(r.lastB, "A")} ↔ ${nm(r.lastS, "B")}${T("；第一对没成交：", "; first pair that does not: ")}${nm(r.firstOutB, "A")} ↔ ${nm(r.firstOutS, "B")}。`);
      lines.push(`${T("上限 = min(最后成交买家，第一出局卖家) = ", "Ceiling = min(last buyer in, first seller out) = ")}<b>${isFinite(r.hi) ? fmt(r.hi) : "∞"}</b>${T("；下限 = max(最后成交卖家，第一出局买家) = ", "; floor = max(last seller in, first buyer out) = ")}<b>${isFinite(r.lo) ? fmt(r.lo) : "0"}</b>。`);
      if (isFinite(r.hi) && isFinite(r.lo) && r.hi - r.lo < 0.01) lines.push(`<span class="warn">${T("区间宽度为 0——两个边际估值正好相等，价格被钉成一个点。", "Band width is 0 — two marginal valuations coincide exactly, and the price is pinned to a point.")}</span>`);
      lines.push(`<span class="ok">${T("其余", "The other")} ${buyers.length + sellers.length - [r.lastB, r.lastS, r.firstOutB, r.firstOutS].filter(Boolean).length} ${T("个人的估值只要不越过边际，改成多少都不影响价格。", "people can change their numbers freely without touching the price, as long as they do not cross the margin.")}</span>`);
    }
    root.querySelector("#hm-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");

    // 试价
    const wb = buyers.filter((v) => v >= testP).length, ws = sellers.filter((v) => v <= testP).length;
    root.querySelector("#hm-tp").textContent = fmt(testP);
    const verdict = wb > ws
      ? T(`${wb} 人想买，只有 ${ws} 人肯卖 → ${wb - ws} 个买家买不到，会加价 → 价格往上走`, `${wb} want to buy, only ${ws} will sell → ${wb - ws} buyers go empty-handed and bid higher → price rises`)
      : ws > wb
        ? T(`${ws} 人肯卖，只有 ${wb} 人想买 → ${ws - wb} 匹马卖不掉，会降价 → 价格往下走`, `${ws} will sell, only ${wb} want to buy → ${ws - wb} horses go unsold and asks fall → price falls`)
        : T(`${wb} 人想买 = ${ws} 人肯卖 → 市场出清，价格停在这里`, `${wb} want to buy = ${ws} will sell → the market clears; the price can rest here`);
    root.querySelector("#hm-testout").innerHTML = `${T("价格 = ", "price = ")}${fmt(testP)}：${verdict}`;
  };

  root.querySelector("#hm-test").addEventListener("input", (e) => { testP = +e.target.value; paint(); });
  root.querySelector("#hm-addb").addEventListener("click", () => { buyers.push(23); paint(); });
  root.querySelector("#hm-adds").addEventListener("click", () => { sellers.push(19); paint(); });
  root.querySelector("#hm-reset").addEventListener("click", () => { buyers = B0.slice(); sellers = S0.slice(); paint(); });
  paint();
}
