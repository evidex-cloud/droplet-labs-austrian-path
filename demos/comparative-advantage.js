// 交互演示：比较优势与联合法则——两个生产者、两种商品，四个生产率滑块；
// 实时算机会成本、谁在什么上有比较优势、单干 vs 分工＋交换的产出与双方所得；
// 关税滑块：看交换收益怎样被吃掉、直到贸易彻底停止。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const P = {
    A: { name: T("老张", "Zhang"), bread: 20, fish: 10 },
    B: { name: T("小李", "Li"), bread: 8, fish: 8 },
  };
  let tariff = 0; // %
  const f1 = (v) => (Math.round(v * 100) / 100).toFixed(2).replace(/\.?0+$/, "");

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🍞🐟 联合法则沙盘：什么都更强的人，也需要分工", "🍞🐟 The law of association: even the one who is better at everything gains from specializing")}</div>
      <div class="demo-grid" id="ca-sliders">
        ${["A", "B"].map((k) => `
          <div class="demo-block">
            <label class="demo-label"><b>${P[k].name}</b> ${T("一天能烤面包：", "loaves per day: ")}<b id="ca-${k}-bread">${P[k].bread}</b></label>
            <input class="demo-slider" type="range" min="1" max="30" step="1" value="${P[k].bread}" data-p="${k}" data-g="bread" />
            <label class="demo-label" style="margin-top:8px"><b>${P[k].name}</b> ${T("一天能钓鱼：", "fish per day: ")}<b id="ca-${k}-fish">${P[k].fish}</b></label>
            <input class="demo-slider" type="range" min="1" max="30" step="1" value="${P[k].fish}" data-p="${k}" data-g="fish" />
          </div>`).join("")}
      </div>
      <div class="stat-row" id="ca-oc"></div>
      <div class="cmp-3" id="ca-cmp"></div>
      <div class="demo-block">
        <label class="demo-label">${T("关税（对交换的鱼按面包计征）：", "Tariff on the traded fish (paid in bread): ")}<b id="ca-tval">${tariff}%</b></label>
        <input class="demo-slider" type="range" min="0" max="100" step="5" value="${tariff}" id="ca-tariff" />
      </div>
      <div class="demo-block"><div class="demo-log" id="ca-log"></div></div>
      <p class="demo-tip">${T(
        "默认里老张两样都更强，可分工＋交换后<strong>两个人都多了</strong>。试试把小李的鱼拉到 2——他钓鱼变得极差，但只要机会成本不同他仍有比较优势；把两人的比例调成一样（比如 20/10 与 10/5），收益归零——<strong>比较优势来自机会成本的差异，不是产量</strong>。再拉关税：先是收益被吃掉，然后贸易彻底停止，两人退回单干。",
        "By default Zhang is better at both, yet after specializing and trading <strong>both have more</strong>. Drag Li's fish down to 2 — he becomes terrible at fishing, but as long as opportunity costs differ he still has a comparative advantage somewhere; set the two ratios equal (say 20/10 and 10/5) and the gains vanish — <strong>comparative advantage comes from differing opportunity costs, not output</strong>. Then raise the tariff: gains get eaten, and past a point trade stops and both fall back to working alone."
      )}</p>
    </div>`;

  const compute = () => {
    const A = P.A, B = P.B;
    const ocA = A.bread / A.fish, ocB = B.bread / B.fish; // 1 鱼的机会成本（面包）
    const same = Math.abs(ocA - ocB) < 1e-9;
    // 自给：各半天
    const aut = { A: { bread: A.bread / 2, fish: A.fish / 2 }, B: { bread: B.bread / 2, fish: B.fish / 2 } };
    const autTot = { bread: aut.A.bread + aut.B.bread, fish: aut.A.fish + aut.B.fish };
    if (same) return { ocA, ocB, same, aut, autTot, spec: null };
    // 谁在鱼上有比较优势（机会成本低）
    const F = ocA < ocB ? "A" : "B", Br = F === "A" ? "B" : "A";
    const pf = P[F], pb = P[Br];
    // 鱼专家全天钓鱼；面包方至少八成时间烤面包（与课文一致），并保证面包总量不低于单干，其余时间钓鱼
    const t = Math.min(1, Math.max(0.8, autTot.bread / pb.bread));
    const prod = { [F]: { bread: 0, fish: pf.fish }, [Br]: { bread: t * pb.bread, fish: (1 - t) * pb.fish } };
    const specTot = { bread: prod.A.bread + prod.B.bread, fish: prod.A.fish + prod.B.fish };
    // 交换：比率取两人机会成本的中点；面包方多出的面包（= 鱼专家单干时的面包）换鱼
    const r = (ocA + ocB) / 2;
    const surplus = prod[Br].bread - aut[Br].bread;
    const tau = tariff / 100;
    const rEff = r * (1 + tau);
    const ocBr = Br === "A" ? ocA : ocB;
    const trades = rEff < ocBr - 1e-9 && surplus > 0;
    let end, customs = 0, q = 0;
    if (trades) {
      q = surplus / rEff;
      customs = surplus - q * r;
      end = {
        [F]: { bread: q * r, fish: prod[F].fish - q },
        [Br]: { bread: aut[Br].bread, fish: prod[Br].fish + q },
      };
    } else {
      end = { A: { ...aut.A }, B: { ...aut.B } };
    }
    // 以各自的机会成本把篮子折成“面包当量”——这是生产上的换算，不是效用
    const val = (k, b) => b.bread + b.fish * (k === "A" ? ocA : ocB);
    const gain = { A: val("A", end.A) - val("A", aut.A), B: val("B", end.B) - val("B", aut.B) };
    const gain0 = (() => { // 无关税时的总收益，用于算被关税吃掉的部分
      const q0 = surplus / r;
      const e0 = { [F]: { bread: q0 * r, fish: prod[F].fish - q0 }, [Br]: { bread: aut[Br].bread, fish: prod[Br].fish + q0 } };
      return (val("A", e0.A) - val("A", aut.A)) + (val("B", e0.B) - val("B", aut.B));
    })();
    return { ocA, ocB, same, aut, autTot, spec: { F, Br, t, prod, specTot, r, rEff, trades, q, customs, end, gain, gain0 } };
  };

  const bundle = (b) => `${f1(b.bread)} ${T("面包", "loaves")} + ${f1(b.fish)} ${T("鱼", "fish")}`;
  const gainPill = (g) => g > 1e-9 ? `<span class="pill ok">+${f1(g)} ${T("面包当量", "bread-eq.")}</span>` : g < -1e-9 ? `<span class="pill bad">${f1(g)} ${T("面包当量", "bread-eq.")}</span>` : `<span class="pill" style="background:var(--surface-2);color:var(--muted)">±0</span>`;

  const paint = () => {
    for (const k of ["A", "B"]) { root.querySelector(`#ca-${k}-bread`).textContent = P[k].bread; root.querySelector(`#ca-${k}-fish`).textContent = P[k].fish; }
    root.querySelector("#ca-tval").textContent = tariff + "%";
    const R = compute();
    const A = P.A, B = P.B;
    const absA = A.bread > B.bread && A.fish > B.fish, absB = B.bread > A.bread && B.fish > A.fish;
    root.querySelector("#ca-oc").innerHTML = `
      <div class="stat"><div class="k">${A.name} · 1 ${T("鱼的机会成本", "fish costs")}</div><div class="v">${f1(R.ocA)} ${T("面包", "loaves")}</div></div>
      <div class="stat"><div class="k">${B.name} · 1 ${T("鱼的机会成本", "fish costs")}</div><div class="v">${f1(R.ocB)} ${T("面包", "loaves")}</div></div>
      <div class="stat"><div class="k">${T("绝对优势", "Absolute advantage")}</div><div class="v" style="font-size:14px">${absA ? A.name + T(" 两样都强", " at both") : absB ? B.name + T(" 两样都强", " at both") : T("各有所长", "split")}</div></div>
      <div class="stat"><div class="k">${T("比较优势", "Comparative advantage")}</div><div class="v acc" style="font-size:14px">${R.same ? T("无（机会成本相同）", "none (equal costs)") : `${P[R.spec.F].name} ${T("鱼", "fish")} · ${P[R.spec.Br].name} ${T("面包", "bread")}`}</div></div>`;

    const cells = [];
    cells.push(`<div class="cmp-cell"><h5>${T("① 各自单干（半天半天）", "① Each alone (half day each)")}</h5>
      <div style="font-size:13px">${A.name}：${bundle(R.aut.A)}</div><div style="font-size:13px">${B.name}：${bundle(R.aut.B)}</div>
      <div style="font-size:13px;margin-top:6px;font-weight:700">${T("合计", "Total")}：${bundle(R.autTot)}</div></div>`);
    if (R.same) {
      cells.push(`<div class="cmp-cell cold"><h5>${T("② 分工", "② Specialize")}</h5><div style="font-size:13px">${T("两人机会成本完全相同——换谁干什么都不会多出任何东西。分工的收益来自差异。", "Identical opportunity costs — no reassignment produces anything extra. The gains from specialization come from difference.")}</div></div>`);
      cells.push(`<div class="cmp-cell"><h5>${T("③ 交换", "③ Trade")}</h5><div style="font-size:13px">${T("没有可交换的收益。", "No gains to trade.")}</div></div>`);
    } else {
      const s = R.spec;
      cells.push(`<div class="cmp-cell hl"><h5>${T("② 分工：", "② Specialize: ")}${P[s.F].name}${T(" 全天钓鱼，", " all fish, ")}${P[s.Br].name} ${Math.round(s.t * 100)}% ${T("时间烤面包", "of the day on bread")}</h5>
        <div style="font-size:13px">${A.name}：${bundle(s.prod.A)}</div><div style="font-size:13px">${B.name}：${bundle(s.prod.B)}</div>
        <div style="font-size:13px;margin-top:6px;font-weight:700">${T("合计", "Total")}：${bundle(s.specTot)} <span style="color:var(--green)">(${T("面包", "bread")} ${s.specTot.bread - R.autTot.bread >= -1e-9 ? "+" : ""}${f1(s.specTot.bread - R.autTot.bread)}, ${T("鱼", "fish")} +${f1(s.specTot.fish - R.autTot.fish)})</span></div></div>`);
      cells.push(`<div class="cmp-cell ${s.trades ? "" : "cold"}"><h5>${T("③ 交换：1 鱼 = ", "③ Trade: 1 fish = ")}${f1(s.r)} ${T("面包", "loaves")}${tariff ? `${T("，含税 ", ", with tariff ")}${f1(s.rEff)}` : ""}</h5>
        ${s.trades
          ? `<div style="font-size:13px">${A.name}：${bundle(s.end.A)} ${gainPill(s.gain.A)}</div><div style="font-size:13px">${B.name}：${bundle(s.end.B)} ${gainPill(s.gain.B)}</div>
             <div style="font-size:12.5px;margin-top:6px;color:var(--muted)">${T("成交", "traded")} ${f1(s.q)} ${T("鱼", "fish")}${tariff ? `${T("；海关收走", "; customs took")} ${f1(s.customs)} ${T("面包", "loaves")}` : ""}</div>`
          : `<div style="font-size:13px;color:var(--red)">${T("含税价格 ", "The tariff-inclusive price ")}${f1(s.rEff)} ${T("已经高于", "exceeds")} ${P[s.Br].name}${T(" 自己钓鱼的机会成本 ", "'s own cost of fishing, ")}${f1(s.Br === "A" ? R.ocA : R.ocB)}${T("——他宁可自己钓。贸易停止，两人退回单干。", " — he would rather fish himself. Trade stops; both fall back to working alone.")}</div>`}
      </div>`);
    }
    root.querySelector("#ca-cmp").innerHTML = cells.join("");

    const lines = [];
    if (R.same) lines.push(`<span class="warn">${T("机会成本相同时没有比较优势——这几乎不会在现实中发生：两个人的技能、资源、时间安排总有差别。", "With equal opportunity costs there is no comparative advantage — which almost never happens in reality: two people always differ in skills, resources or what else they could be doing.")}</span>`);
    else {
      const s = R.spec;
      const strong = absA ? A.name : absB ? B.name : null;
      if (strong) lines.push(`<b>${strong}</b>${T(" 两样都比对方强，", " is better at both, ")}${s.trades ? T("分工＋交换后他仍然多得了 ", "and after specializing and trading still gains ") + f1(s.gain[strong === A.name ? "A" : "B"]) + T(" 面包当量——“强者不需要弱者”是算错了账。", " bread-equivalents — “the strong don't need the weak” is bad arithmetic.") : T("但关税让交换停止了——他也回到了单干的产出。", "but the tariff has stopped the trade — and he too is back to his solo output.")}`);
      lines.push(`${T("交换比率必须落在两人机会成本之间（", "The exchange ratio must lie between the two opportunity costs (")}${f1(Math.min(R.ocA, R.ocB))} – ${f1(Math.max(R.ocA, R.ocB))}${T("）——这就是阶段 1.3 的价格区间。", ") — that is the price band of Stage 1.3.")}`);
      if (tariff && s.trades) lines.push(`<span class="bad">${T("关税把两人的总收益从 ", "The tariff cut the two parties' total gain from ")}${f1(s.gain0)} ${T("压到 ", "to ")}${f1(s.gain.A + s.gain.B)}${T("；海关收走 ", "; customs collected ")}${f1(s.customs)}${T("（转移），另有 ", " (a transfer), and ")}${f1(s.gain0 - s.gain.A - s.gain.B - s.customs)} ${T("面包当量纯粹消失了（看不见的那一栏，阶段 1.4）。", "bread-equivalents simply vanished — the unseen column of Stage 1.4.")}</span>`);
      if (!s.trades) lines.push(`<span class="bad">${T("禁止性关税：没有人交换，海关也一分钱收不到，两人退回 ", "Prohibitive tariff: nobody trades, customs collects nothing, and both are back to ")}${bundle(R.autTot)}${T("。被“保护”的，是单干的贫穷。", ". What is being “protected” is the poverty of working alone.")}</span>`);
      if (!tariff) lines.push(`<span class="ok">${T("没有新工具、没有新技术、没有人更努力——只是换了谁干什么，两人合计多了 ", "No new tool, no new technique, nobody worked harder — only a change in who does what, and together they gained ")}${f1(s.gain0)} ${T("面包当量。这就是米塞斯说的：社会本身，就是这条定律的产物。", "bread-equivalents. This is what Mises meant: society itself is the product of this law.")}</span>`);
    }
    root.querySelector("#ca-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelectorAll("#ca-sliders input").forEach((sl) => sl.addEventListener("input", () => { P[sl.dataset.p][sl.dataset.g] = +sl.value; paint(); }));
  root.querySelector("#ca-tariff").addEventListener("input", (e) => { tariff = +e.target.value; paint(); });
  paint();
}
