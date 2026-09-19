// 交互演示：错误投资地图——把一池新信用（100 单位）分配到 6 个行业；真实储蓄是隐藏的。
// 按“揭晓”：真实储蓄按“离消费最近的先满足”分配，撑不住的部分搁浅；搁浅资本按行业专用性折价。
// 试着找一个不亏的分配——只要放出去的信用 > 真实储蓄，就找不到。这就是课文的论点。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const POOL = 100;
  // 行业：名称、时间强度（每单位项目需锁定多少储蓄才能完工）、专用性折价（搁浅后只能按多少比例回收）
  const sectors = [
    { id: "housing", name: T("房地产 / 土地", "Real estate / land"), f: 1.6, salvage: 0.45, init: 25 },
    { id: "capital", name: T("工厂 / 矿山 / 基建", "Factories / mines / infrastructure"), f: 1.5, salvage: 0.35, init: 20 },
    { id: "tech", name: T("平台型科技 / 研发", "Platform tech / R&amp;D"), f: 1.4, salvage: 0.25, init: 20 },
    { id: "ma", name: T("并购 / 金融工程", "M&amp;A / financial engineering"), f: 1.3, salvage: 0.6, init: 15 },
    { id: "retail", name: T("零售 / 服务", "Retail / services"), f: 1.0, salvage: 0.8, init: 10 },
    { id: "consumer", name: T("消费品生产", "Consumer-goods production"), f: 0.9, salvage: 0.85, init: 10 },
  ];
  const alloc = Object.fromEntries(sectors.map((s) => [s.id, s.init]));

  // 隐藏的真实储蓄：每一轮不同（确定性伪随机，避免读者背答案）
  let round = 1;
  const trueSaving = (r) => 25 + ((r * 7919) % 31);   // 25–55
  let revealed = false;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🗺️ 错误投资地图：把新信用分给谁，才能不亏？", "🗺️ Malinvestment map: who can you lend the new credit to without losses?")}</div>
      <div class="demo-block">
        <div class="demo-label">${T("银行凭空放出了 <b>100</b> 单位新信用。你是“市场”，决定它流向哪些行业。真实储蓄是多少？——你和企业家一样，看不见。", "The banks have created <b>100</b> units of new credit. You are “the market” — decide where it flows. How much real saving exists? Like the entrepreneurs, you cannot see it.")}</div>
        <div id="mm-sliders"></div>
        <div class="demo-row">
          <span class="demo-meta">${T("已分配：", "Allocated: ")}<b id="mm-total">0</b> / ${POOL}　${T("未放贷（留作准备金）：", "Not lent (held as reserves): ")}<b id="mm-rest">0</b></span>
          <span class="demo-btns" style="margin:0">
            <button class="demo-btn" id="mm-reveal">${T("🔍 揭晓真实储蓄（清算来了）", "🔍 Reveal real saving (the bust arrives)")}</button>
            <button class="demo-btn" id="mm-next">${T("🎲 新一轮（换一个隐藏储蓄）", "🎲 New round (new hidden saving)")}</button>
          </span>
        </div>
      </div>
      <div class="demo-block" id="mm-result" hidden>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("真实储蓄", "Real saving")}</div><div class="v acc" id="mm-s">–</div></div>
          <div class="stat"><div class="k">${T("需要的储蓄", "Saving needed")}</div><div class="v" id="mm-need">–</div></div>
          <div class="stat"><div class="k">${T("搁浅资本", "Stranded capital")}</div><div class="v neg" id="mm-strand">–</div></div>
          <div class="stat"><div class="k">${T("真实损失（折价后）", "Real loss (after salvage)")}</div><div class="v neg" id="mm-loss">–</div></div>
        </div>
        <div id="mm-bars" style="margin-top:12px"></div>
        <div class="demo-log" id="mm-log" style="margin-top:12px"></div>
      </div>
      <p class="demo-tip">${T(
        "先随便分一次、揭晓，看哪些行业搁浅。然后试着找一个<strong>零损失</strong>的分配。你会发现：只要放出去的信用总量超过真实储蓄，无论怎么分，<strong>离消费最远的行业</strong>总会有一部分完不成——因为消费者先把资源拉回了近端。唯一的零损失解，是少放贷。这就是“错位，不是过量”。",
        "Allocate, reveal, and see which sectors get stranded. Then try to find a <strong>zero-loss</strong> allocation. You will find that whenever the credit lent exceeds real saving, no matter how you split it, part of the <strong>sectors furthest from the consumer</strong> cannot be finished — consumers pull resources back to the near end first. The only zero-loss solution is to lend less. That is “wrong place, not too much.”"
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  // 滑块
  $("mm-sliders").innerHTML = sectors.map((s) => `
    <div class="demo-row" style="margin:6px 0">
      <label class="demo-label" style="margin:0;width:230px;flex:none">${s.name}　<b id="mm-v-${s.id}">${alloc[s.id]}</b></label>
      <input class="demo-slider" type="range" min="0" max="60" step="1" value="${alloc[s.id]}" data-sec="${s.id}" style="flex:1;margin:0" />
    </div>`).join("");

  const total = () => sectors.reduce((a, s) => a + alloc[s.id], 0);

  function clampToPool(changedId) {
    // 超过 100 时，把超出的部分从刚改的滑块上扣掉（池子是固定的）
    const over = total() - POOL;
    if (over > 0) alloc[changedId] = Math.max(0, alloc[changedId] - over);
  }

  function compute(S) {
    // 真实储蓄按“离消费最近的先满足”分配：消费者的需求把资源先拉回近端
    const order = [...sectors].sort((a, b) => a.f - b.f);
    let left = S;
    const res = {};
    for (const s of order) {
      const need = alloc[s.id] * s.f;
      const fundedNeed = Math.min(need, left);
      left -= fundedNeed;
      const funded = s.f > 0 ? fundedNeed / s.f : 0;
      const stranded = alloc[s.id] - funded;
      res[s.id] = { funded, stranded, loss: stranded * (1 - s.salvage) };
    }
    const need = sectors.reduce((a, s) => a + alloc[s.id] * s.f, 0);
    const stranded = sectors.reduce((a, s) => a + res[s.id].stranded, 0);
    const loss = sectors.reduce((a, s) => a + res[s.id].loss, 0);
    return { res, need, stranded, loss };
  }

  function paintSliders() {
    for (const s of sectors) {
      $("mm-v-" + s.id).textContent = alloc[s.id];
      root.querySelector(`[data-sec="${s.id}"]`).value = alloc[s.id];
    }
    $("mm-total").textContent = total();
    $("mm-rest").textContent = POOL - total();
  }

  function paintResult() {
    const box = $("mm-result");
    if (!revealed) { box.hidden = true; return; }
    box.hidden = false;
    const S = trueSaving(round);
    const { res, need, stranded, loss } = compute(S);
    $("mm-s").textContent = S;
    $("mm-need").textContent = need.toFixed(0);
    $("mm-need").className = "v " + (need > S ? "neg" : "pos");
    $("mm-strand").textContent = stranded.toFixed(1);
    $("mm-loss").textContent = loss.toFixed(1);
    const maxA = 60;
    $("mm-bars").innerHTML = sectors.map((s) => {
      const r = res[s.id], a = alloc[s.id];
      const fw = (r.funded / maxA) * 100, sw = (r.stranded / maxA) * 100;
      const ok = r.stranded < 0.05;
      return `<div class="bar2">
        <span class="lab" style="width:190px">${s.name}</span>
        <div class="track" style="position:relative"><div class="fill" style="width:${fw.toFixed(1)}%;background:var(--green);display:inline-block;vertical-align:top"></div><div class="fill" style="width:${sw.toFixed(1)}%;background:var(--red);display:inline-block;vertical-align:top;border-radius:0 6px 6px 0"></div></div>
        <span class="val" style="width:150px">${a === 0 ? "–" : ok ? `<span class="pill ok">${T("完工", "completed")}</span>` : `<span class="pill bad">${T("搁浅", "stranded")} ${r.stranded.toFixed(0)}</span>`}</span>
      </div>`;
    }).join("");

    const lines = [];
    const lent = total();
    if (stranded < 0.05) {
      lines.push(`<span class="ok">${T("零损失！但看看你是怎么做到的：放贷", "Zero loss! But look at how you did it: you lent")} ${lent}${T("，真实储蓄", ", real saving was")} ${S}${T("——你放出去的信用没有超过真实储蓄（或全放在了短回收期行业）。这不是“分配得好”，是“没有信用扩张”。", " — the credit you lent did not exceed real saving (or all went to short-payback sectors). That is not clever allocation; it is the absence of credit expansion.")}</span>`);
    } else {
      lines.push(`<span class="bad">${T("放贷", "Lent")} ${lent}${T("，但真实储蓄只有", ", but real saving is only")} ${S}${T("；完成所有项目需要", "; completing everything needs")} ${need.toFixed(0)}${T(" 单位储蓄。消费者先把资源拉回近端，最远的行业先断粮。", " units of saving. Consumers pull resources back to the near end first; the furthest sectors starve first.")}</span>`);
      const worst = sectors.filter((s) => res[s.id].stranded > 0.05).sort((a, b) => res[b.id].loss - res[a.id].loss);
      if (worst.length) lines.push(`${T("搁浅最重：", "Worst stranded: ")}${worst.slice(0, 3).map((s) => `${s.name}（${T("损失", "loss")} ${res[s.id].loss.toFixed(1)}${T("，专用性越高折价越狠", ", the more specific the capital, the deeper the haircut")}）`).join("；")}。`);
      lines.push(`<span class="warn">${T("试试把钱全挪到零售和消费品——损失会变小，但只要总放贷 > 储蓄，就还是有搁浅。唯一的零损失解：放贷 ≤ 真实储蓄。", "Try moving everything into retail and consumer goods — losses shrink, but as long as total lending > saving there is still stranding. The only zero-loss solution: lend ≤ real saving.")}</span>`);
    }
    if (lent <= S) lines.push(`${T("注意：这一轮你放出的信用（", "Note: the credit you lent this round (")}${lent}${T("）本来就不超过真实储蓄（", ") did not exceed real saving (")}${S}${T("）。若仍有搁浅，是因为长回收期行业每单位需要锁定更多储蓄。", "). Any stranding left is because long-payback sectors need more saving locked per unit.")}`);
    $("mm-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  }

  root.querySelectorAll("[data-sec]").forEach((sl) => sl.addEventListener("input", () => {
    alloc[sl.dataset.sec] = +sl.value;
    clampToPool(sl.dataset.sec);
    paintSliders();
    paintResult();
  }));
  $("mm-reveal").addEventListener("click", () => { revealed = true; paintResult(); });
  $("mm-next").addEventListener("click", () => { round++; revealed = false; paintResult(); });
  paintSliders();
  paintResult();
}
