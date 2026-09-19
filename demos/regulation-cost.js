// 交互演示：监管成本——初创公司 vs 在位巨头。逐条打开法规（许可证、合规团队、报告义务、最低资本），
// 每条法规对每家公司都是一笔固定成本（外加少量随规模变动的部分）；固定成本对小公司的打击远大于大公司。
// 读数：生存边际、消费者价格、市场份额（现在 / 五年后）；再切换“谁在游说这条规则？”看在位者的净收益。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);
  const M = (v) => (Math.round(v * 100) / 100).toString();
  const pct = (v) => (Math.round(v * 10) / 10).toString() + "%";

  // 单位：百万元/年
  const inc = { name: T("在位巨头", "Incumbent"), rev: 400, gm: 0.30, fixed: 60 };
  let startupRev = 8;
  const su = () => ({ name: T("初创公司", "Startup"), rev: startupRev, gm: 0.32, fixed: startupRev * 0.19 });

  const rules = [
    { id: "license", name: T("① 职业/经营许可证", "① Operating license"), fixed: 0.4, varp: 0.000,
      baptist: T("“保护消费者免受不合格经营者伤害”", "“Protect consumers from unqualified operators”"),
      bootlegger: T("在位者的行业协会——它的成员已经持证，考试委员会由它们的人组成", "The incumbents' trade association — its members already hold licenses and staff the exam board") },
    { id: "staff", name: T("② 强制合规团队 + 年度审计", "② Mandatory compliance team + annual audit"), fixed: 0.9, varp: 0.001,
      baptist: T("“防止欺诈与洗钱”", "“Prevent fraud and money laundering”"),
      bootlegger: T("巨头（已有几十人的合规部门）与大型审计咨询公司（多了一项强制业务）", "The giant (it already has a compliance department of dozens) and the big audit/consulting firms (a new compulsory service line)") },
    { id: "report", name: T("③ 季度监管报告 + 数据合规", "③ Quarterly regulatory reporting + data compliance"), fixed: 0.6, varp: 0.002,
      baptist: T("“透明度与隐私保护”", "“Transparency and privacy protection”"),
      bootlegger: T("巨头——它的报告系统早已建好，边际成本接近零；欧盟 GDPR 之后小型广告技术公司份额下降、大平台上升", "The giant — its reporting systems are already built, marginal cost near zero; after GDPR, small ad-tech firms lost share and the largest platforms gained") },
    { id: "capital", name: T("④ 最低资本要求（占用 10M，机会成本 8%）", "④ Minimum capital requirement (10M locked up, 8% opportunity cost)"), fixed: 0.8, varp: 0.000,
      baptist: T("“确保经营者有能力承担责任”", "“Make sure operators can bear their liabilities”"),
      bootlegger: T("资本雄厚的在位者——10M 对它是零头，对初创公司是全部融资", "Well-capitalised incumbents — 10M is pocket change to them and an entire funding round to a startup") },
  ];
  let on = new Set();
  let showLobby = false;

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🏰 监管成本：同一条规则，为什么小公司死、大公司笑", "🏰 Regulation cost: the same rule, and why the small firm dies while the big one smiles")}</div>
      <div class="demo-block">
        <label class="demo-label">${T("初创公司年营收（百万）：", "Startup annual revenue (millions): ")}<b id="rc-rev">8</b></label>
        <input class="demo-slider" id="rc-slider" type="range" min="2" max="80" step="1" value="8" />
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("逐条打开法规（每条对每家公司都是固定成本）", "Switch on rules one at a time (each is a fixed cost per firm)")}</label>
        <div class="demo-btns" id="rc-rules">
          ${rules.map((r) => `<button class="demo-btn" data-id="${r.id}">${r.name}</button>`).join("")}
        </div>
      </div>
      <div class="cmp" id="rc-cmp"></div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("消费者价格指数", "Consumer price index")}</div><div class="v" id="rc-price">100</div></div>
        <div class="stat"><div class="k">${T("初创份额 · 现在", "Startup share · now")}</div><div class="v" id="rc-share0">–</div></div>
        <div class="stat"><div class="k">${T("初创份额 · 5 年后", "Startup share · in 5 yrs")}</div><div class="v acc" id="rc-share5">–</div></div>
      </div>
      <div class="demo-block">
        <div class="demo-row">
          <label class="demo-label" style="margin:0">${T("谁在游说这条规则？", "Who lobbied for this rule?")}</label>
          <div class="demo-seg" id="rc-lobby"><button data-v="0" class="on">${T("只看表面理由", "Stated reason only")}</button><button data-v="1">${T("揭开：私酒贩子", "Reveal: the bootleggers")}</button></div>
        </div>
        <div class="demo-log" id="rc-log"></div>
      </div>
      <p class="demo-tip">${T(
        "先把四条规则全打开，看初创公司的<strong>生存边际</strong>掉到负数；再把营收滑块拖大，找到它重新活过来的营收门槛——那就是这条护城河的“高度”。然后切到“揭开”，看在位巨头为这些规则付了多少、又从竞争消失中赚回多少：<strong>它的净收益是正的</strong>，这就是它“负责任地支持监管”的原因。",
        "Switch on all four rules and watch the startup's <strong>survival margin</strong> go negative; then drag the revenue slider up until it comes back to life — that revenue threshold is the “height” of the moat. Then flip to “Reveal” and see how much the incumbent paid for these rules and how much it earned back from vanished competition: <strong>its net gain is positive</strong>, which is why it “responsibly supports regulation.”"
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const costFor = (firm) => {
    let c = 0;
    for (const r of rules) if (on.has(r.id)) c += r.fixed + r.varp * firm.rev;
    return c;
  };

  const paint = () => {
    const s = su();
    $("rc-rev").textContent = startupRev;
    const cs = costFor(s), ci = costFor(inc);
    const profS = s.rev * s.gm - s.fixed - cs, profI = inc.rev * inc.gm - inc.fixed - ci;
    const mS = profS / s.rev, mI = profI / inc.rev;
    const dead = profS < 0;

    // 价格：在位者把法规成本按 60% 传导；初创退出后竞争压力下降，再加 4%
    const passI = 0.6 * ci / inc.rev;
    const price = 100 * (1 + passI) * (dead ? 1.04 : 1);

    // 份额：初创增长率随生存边际变化（边际 10% → 年增 40%）；在位者年增 3%
    const share0 = s.rev / (s.rev + inc.rev);
    const g = dead ? -1 : Math.max(0, Math.min(0.5, mS * 4));
    const rev5 = dead ? 0 : s.rev * Math.pow(1 + g, 5);
    const inc5 = inc.rev * Math.pow(1.03, 5);
    const share5 = rev5 / (rev5 + inc5);

    const cell = (f, cost, prof, m, isS) => `
      <div class="cmp-cell ${isS ? (dead ? "" : "hl") : "cold"}">
        <h5>${f.name} · ${T("营收", "revenue")} ${M(f.rev)}M</h5>
        <div class="bar2"><span class="lab">${T("毛利", "Gross profit")}</span><div class="track"><div class="fill" style="width:${Math.min(100, f.gm * 100 * 2.5)}%;background:var(--green)"></div></div><span class="val">${M(f.rev * f.gm)}M</span></div>
        <div class="bar2"><span class="lab">${T("原有固定成本", "Existing fixed")}</span><div class="track"><div class="fill" style="width:${Math.min(100, (f.fixed / (f.rev * f.gm)) * 100)}%;background:var(--muted)"></div></div><span class="val">${M(f.fixed)}M</span></div>
        <div class="bar2"><span class="lab">${T("法规成本", "Rule costs")}</span><div class="track"><div class="fill" style="width:${Math.min(100, (cost / (f.rev * f.gm)) * 100)}%;background:var(--red)"></div></div><span class="val">${M(cost)}M</span></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("法规成本 / 营收", "Rules / revenue")}</div><div class="v ${cost / f.rev > 0.05 ? "neg" : ""}">${pct((cost / f.rev) * 100)}</div></div>
          <div class="stat"><div class="k">${T("生存边际", "Survival margin")}</div><div class="v ${m < 0 ? "neg" : "pos"}">${pct(m * 100)}</div></div>
        </div>
        ${isS && dead ? `<div style="margin-top:8px"><span class="pill bad">${T("退出市场", "Exits the market")}</span></div>` : ""}
        ${isS && !dead && m < 0.05 ? `<div style="margin-top:8px"><span class="pill bad">${T("勉强存活，无法融资扩张", "Barely alive, cannot raise growth capital")}</span></div>` : ""}
      </div>`;
    $("rc-cmp").innerHTML = cell(s, cs, profS, mS, true) + cell(inc, ci, profI, mI, false);

    $("rc-price").textContent = M(price);
    $("rc-price").className = "v " + (price > 100.5 ? "neg" : "");
    $("rc-share0").textContent = pct(share0 * 100);
    $("rc-share5").textContent = pct(share5 * 100);
    $("rc-share5").className = "v " + (dead ? "neg" : "acc");

    // 日志
    const lines = [];
    if (on.size === 0) {
      lines.push(T("还没有法规。初创公司边际 " + pct(mS * 100) + "，增长快；五年后份额可达 " + pct(share5 * 100) + "。这就是在位者害怕的未来。", "No rules yet. The startup's margin is " + pct(mS * 100) + " and it grows fast; in five years its share could reach " + pct(share5 * 100) + ". That is the future the incumbent fears."));
    } else {
      lines.push(T("同样的法规成本：初创公司 " + M(cs) + "M（营收的 " + pct((cs / s.rev) * 100) + "），在位者 " + M(ci) + "M（营收的 " + pct((ci / inc.rev) * 100) + "）。固定成本不看规模——所以它按比例压垮小的。", "Same rule costs: startup " + M(cs) + "M (" + pct((cs / s.rev) * 100) + " of revenue), incumbent " + M(ci) + "M (" + pct((ci / inc.rev) * 100) + " of revenue). A fixed cost ignores scale — so proportionally it crushes the small firm."));
      if (dead) lines.push(`<span class="bad">${T("初创公司退出。消费者价格 +" + M(price - 100) + "%——其中 4 个点来自竞争消失，不来自任何法规条文。", "The startup exits. Consumer prices +" + M(price - 100) + "% — 4 points of that come from vanished competition, not from any clause in the rule.")}</span>`);
      else lines.push(`<span class="warn">${T("初创公司还活着，但增长率从 " + pct(Math.min(50, (s.gm - s.fixed / s.rev) * 400)) + " 降到 " + pct(g * 100) + "；五年后份额 " + pct(share5 * 100) + "。", "The startup survives, but its growth rate falls from " + pct(Math.min(50, (s.gm - s.fixed / s.rev) * 400)) + " to " + pct(g * 100) + "; share in five years " + pct(share5 * 100) + ".")}</span>`);
      if (showLobby) {
        // 在位者的净收益：法规成本 vs 涨价收益 + 五年后多占的份额
        const gain = inc.rev * ((price / 100) - 1) ;
        lines.push(`<span class="ok">${T("在位者的账：为法规付 " + M(ci) + "M/年；从涨价与减弱的竞争中多赚约 " + M(gain) + "M/年 → 净 " + (gain - ci >= 0 ? "+" : "") + M(gain - ci) + "M/年。" + (gain - ci >= 0 ? "所以它“负责任地支持”这些规则。" : "此刻它还在亏——再开一条规则试试。"), "The incumbent's ledger: pays " + M(ci) + "M/yr for the rules; earns about " + M(gain) + "M/yr more from higher prices and weaker competition → net " + (gain - ci >= 0 ? "+" : "") + M(gain - ci) + "M/yr. " + (gain - ci >= 0 ? "That is why it “responsibly supports” these rules." : "Still a loss for now — switch on one more rule."))}</span>`);
        for (const r of rules) if (on.has(r.id)) lines.push(`<b>${r.name}</b> — ${T("浸信会：", "Baptist: ")}${r.baptist}；<span class="warn">${T("私酒贩子：", "Bootlegger: ")}${r.bootlegger}</span>`);
      } else {
        for (const r of rules) if (on.has(r.id)) lines.push(`<b>${r.name}</b> — ${T("表面理由：", "Stated reason: ")}${r.baptist}`);
      }
    }
    $("rc-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("rc-slider").addEventListener("input", (e) => { startupRev = +e.target.value; paint(); });
  $("rc-rules").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-id]"); if (!b) return;
    const id = b.dataset.id;
    if (on.has(id)) on.delete(id); else on.add(id);
    b.classList.toggle("active", on.has(id));
    paint();
  });
  $("rc-lobby").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-v]"); if (!b) return;
    showLobby = b.dataset.v === "1";
    root.querySelectorAll("#rc-lobby button").forEach((x) => x.classList.toggle("on", x.dataset.v === b.dataset.v));
    paint();
  });
  paint();
}
