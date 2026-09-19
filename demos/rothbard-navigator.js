// 交互演示：罗斯巴德导航器——选一个问题，看该读罗斯巴德哪本书的哪一部分、他的主张、
// 以及奥派内部的反方；右侧“分歧强度表”真算出各问题上学派共识度，帮助读者知道哪里该多存疑。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // consensus: 0–100 奥派内部对罗斯巴德该主张的共识度（示意估计）
  const Q = [
    { id: "prices", q: T("价格是怎么形成的？", "How do prices form?"),
      where: T("《人、经济与国家》第 2 章“直接交换”（需求表/供给表与边际对的完整数字推导）；第 4 章“价格与消费”", "MES Ch. 2 “Direct Exchange” (full numerical derivation with demand/supply schedules and marginal pairs); Ch. 4 “Prices and Consumption”"),
      claim: T("价格由边际买卖双方的估值划定区间；市场需求曲线是个人序数估值的加总；成本不决定价格，价格向上归属为成本。", "Price is bracketed by the valuations of the marginal buyers and sellers; the market demand curve sums individual ordinal valuations; cost does not set price — price is imputed upward into cost."),
      counter: T("这里几乎没有分歧——罗斯巴德忠实于门格尔–庞巴维克–米塞斯。唯一的争议是他借用新古典的“边际产值（DMVP）”语言来讲要素定价（第 7 章），有人认为不够“奥地利”。", "Almost no disagreement here — Rothbard is faithful to Menger, Böhm-Bawerk and Mises. The only quibble is his borrowing of the neoclassical “DMVP” language for factor pricing (Ch. 7), which some find insufficiently Austrian."),
      consensus: 92, refs: ["1.3", "12.1"] },
    { id: "1929", q: T("1929 年是什么造成的？", "What caused 1929?"),
      where: T("《美国大萧条》第二部分“通货膨胀的繁荣 1921–1929”（尤其第 4–5 章的货币供给逐年表）与第三部分“胡佛的干预”", "America's Great Depression, Part II “The Inflationary Boom 1921–1929” (esp. the year-by-year money-supply tables in Ch. 4–5) and Part III on Hoover's interventions"),
      claim: T("1921–29 年美联储信用扩张（罗斯巴德口径下货币供给增约 61%）造成错误投资；物价稳定掩盖了通胀；胡佛的维持工资、关税、托价、救助阻止了清算，把两年衰退拖成十年。", "Fed credit expansion 1921–29 (money supply up ~61% by Rothbard's measure) bred malinvestment; stable prices masked the inflation; Hoover's wage maintenance, tariffs, price supports and bailouts blocked liquidation and stretched a two-year recession into a decade."),
      counter: T("奥派内部：哈耶克晚年承认 1929–33 的“二次通缩”确实有害，与罗斯巴德“收缩是清算的正常部分”不同；外部：货币口径过宽（含保险准备金等）；弗里德曼–施瓦茨认为美联储的错误在于放任货币收缩而非早年的扩张。", "Inside the school: the late Hayek conceded the 1929–33 “secondary deflation” was genuinely harmful, unlike Rothbard's “contraction is normal liquidation.” Outside: the monetary aggregate is too broad (insurance reserves etc.); Friedman–Schwartz locate the Fed's error in permitting contraction, not in the earlier expansion."),
      consensus: 70, refs: ["5.4", "13.2"] },
    { id: "frb", q: T("部分准备金是欺诈吗？", "Is fractional reserve fraud?"),
      where: T("《人、经济与国家》第 11 章第 3–5 节；《银行的秘密》第 1–8 章；《货币改革的方案》（100% 黄金美元）", "MES Ch. 11 §3–5; The Mystery of Banking Ch. 1–8; The Case for a 100 Percent Gold Dollar"),
      claim: T("把活期存款贷出去等于对同一笔钱发行两张所有权凭证，如同仓库超发仓单——在法律上是欺诈，应当禁止，与经济后果无关；央行是让所有银行同步扩张的“通货膨胀机器”。", "Lending out demand deposits issues two titles to the same money, like a warehouse over-issuing receipts — fraud in law, to be prohibited regardless of consequences; the central bank is the machine that lets all banks expand in step."),
      counter: T("自由银行派（怀特、塞尔金，接近米塞斯与哈耶克原始立场）：存款是贷款而非寄存，只要合同透明就不是欺诈；金本位下竞争性银行会互相清算、自我约束；100% 准备会消灭有用的信用中介。100% 派（德索托、许尔斯曼、萨勒诺）站罗斯巴德。", "The free-banking wing (White, Selgin, close to Mises's and Hayek's original view): a deposit is a loan, not a bailment, and with transparent contracts it is not fraud; under gold, competing banks clear against each other and self-limit; 100% reserves would kill useful credit intermediation. The 100% wing (Huerta de Soto, Hülsmann, Salerno) sides with Rothbard."),
      consensus: 50, refs: ["4.4", "9.4", "17.5"] },
    { id: "monopoly", q: T("什么是垄断？", "What is monopoly?"),
      where: T("《人、经济与国家》第 10 章“垄断与竞争”（尤其对“垄断价格”不可定义的论证）；《权力与市场》关于许可证、专利、反托拉斯的各节", "MES Ch. 10 “Monopoly and Competition” (esp. the argument that “monopoly price” is undefinable); the sections of Power and Market on licensing, patents and antitrust"),
      claim: T("自由市场上没有可观察的“竞争价格”做参照，所以“限制销量抬价”与正常定价无法区分，“垄断价格”无法定义；唯一有意义的垄断是政府授予的排他特权；一家企业吞掉某种资本品的整个市场就无法给它定价，所以企业规模有内在上限。", "With no observable “competitive price” on a free market, restricting sales is indistinguishable from ordinary pricing, so “monopoly price” cannot be defined; the only meaningful monopoly is a state-granted exclusive privilege; a firm that absorbs the whole market for a capital good cannot price it, so firm size has an intrinsic ceiling."),
      counter: T("米塞斯本人（《人的行动》第 16 章）认为自由市场上若一人控制全部供给且需求缺乏弹性，垄断价格可能存在；柯兹纳认为罗斯巴德扔掉了分析“资源垄断”的有用工具；GMU 一派多用哈耶克的“竞争是发现程序”而非罗斯巴德的定义。", "Mises himself (Human Action Ch. 16) held that a monopoly price can exist on a free market given single control of supply and inelastic demand; Kirzner thinks Rothbard discarded a useful tool for analyzing “resource monopoly”; the GMU wing mostly works with Hayek's “competition as discovery” rather than Rothbard's definition."),
      consensus: 62, refs: ["6.4", "15.2"] },
    { id: "interest", q: T("利息从哪里来？", "Where does interest come from?"),
      where: T("《人、经济与国家》第 6 章“利率与它的决定”；第 5 章的生产阶段总表", "MES Ch. 6 “The Rate of Interest and Its Determination”; the production-stage table in Ch. 5"),
      claim: T("纯时间偏好理论：利息完全由时间偏好决定；资本的“生产力”被竞争资本化进价格，解释不了利息；庞巴维克的第三个理由与费雪的“投资机会”被删除。", "Pure time-preference theory: interest is set entirely by time preference; capital's “productivity” is capitalized into prices by competition and cannot explain interest; Böhm-Bawerk's third ground and Fisher's “opportunity” are deleted."),
      counter: T("米塞斯把时间偏好定为范畴但对生产力留有余地；GMU 一派与外部批评者认为 PTPT 忽略了资本存量对利率的影响；加里森的模型里资本供给曲线也起作用。米塞斯研究院一派站罗斯巴德。", "Mises made time preference a category but left room for productivity; the GMU wing and outside critics say PTPT ignores the capital stock's effect on the rate; in Garrison's model the supply of loanable funds also matters. The Mises Institute wing sides with Rothbard."),
      consensus: 58, refs: ["3.1", "3.5", "10.1"] },
    { id: "state", q: T("国家是合法的吗？", "Is the state legitimate?"),
      where: T("《自由的伦理》（1982）第 1–2 部分；《权力与市场》最后一章“对市场的伦理批评”；注意 MES 本身刻意价值中立", "The Ethics of Liberty (1982) Parts 1–2; the last chapter of Power and Market on ethical critiques of the market; note MES itself is deliberately value-free"),
      claim: T("从自我所有权与先占原则推出财产权体系，国家作为垄断强制的机构是非法的（无政府资本主义）。这不是经济学结论。", "From self-ownership and homesteading follows a property-rights system under which the state, as a monopolist of coercion, is illegitimate (anarcho-capitalism). This is not an economic conclusion."),
      counter: T("米塞斯：古典自由主义、最小国家，功利主义论证；哈耶克：有限但真实的政府职能，演化论证；霍普：用论证伦理学为罗斯巴德的结论另辟证明；多数奥派经济学家接受 MES 而对此保持距离。", "Mises: classical liberal minimal state, utilitarian justification; Hayek: limited but real government functions, evolutionary justification; Hoppe: argumentation ethics as an alternative proof of Rothbard's conclusion; most Austrian economists accept MES while keeping their distance here."),
      consensus: 30, refs: ["9.1", "12.3", "14.3"] },
  ];

  let sel = "prices";

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧭 罗斯巴德导航器：带着问题去找他——以及找反对他的人", "🧭 Rothbard navigator: bring a question, find his text — and the Austrians who disagree")}</div>
      <div class="demo-block">
        <div class="demo-btns" id="rn-q">${Q.map((x) => `<button class="demo-btn${x.id === sel ? " active" : ""}" data-id="${x.id}">${x.q}</button>`).join("")}</div>
        <div class="cmp" id="rn-cmp"></div>
        <div class="scn-meta" id="rn-refs"></div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("奥派内部对罗斯巴德立场的共识度（示意估计）", "Degree of Austrian consensus behind Rothbard's position (illustrative estimate)")}</label>
        <div id="rn-bars"></div>
        <div class="demo-log" id="rn-log"></div>
      </div>
      <p class="demo-tip">${T(
        "看共识条的颜色：绿色的问题（价格形成）读罗斯巴德就够了；黄色的（垄断、利息、1929）要把米塞斯或哈耶克的版本写在页边；红色的（部分准备金、国家）是学派内部真正的分水岭——阶段 14.3 会正面处理。经济学的结论不依赖最后一个问题。",
        "Watch the bar colors: green questions (price formation) — Rothbard alone will do; yellow (monopoly, interest, 1929) — write Mises's or Hayek's version in the margin; red (fractional reserves, the state) — genuine watersheds inside the school, handled head-on in Stage 14.3. The economic conclusions do not depend on the last question."
      )}</p>
    </div>`;

  const cls = (c) => (c >= 80 ? "var(--green)" : c >= 55 ? "var(--orange)" : "var(--red)");

  const paint = () => {
    const x = Q.find((q) => q.id === sel);
    root.querySelectorAll("#rn-q button").forEach((b) => b.classList.toggle("active", b.dataset.id === sel));
    root.querySelector("#rn-cmp").innerHTML = `
      <div class="cmp-cell hl"><h5>${T("读哪里 · 他的主张", "Where to read · his claim")}</h5><div style="font-size:13px;margin-bottom:8px"><b>${x.where}</b></div><div>${x.claim}</div></div>
      <div class="cmp-cell cold"><h5>${T("学派内的反方", "The counter-view within the school")}</h5><div>${x.counter}</div></div>`;
    root.querySelector("#rn-refs").innerHTML = `<b>${T("本课相关", "In this course")}</b>：${x.refs.map((r) => `<span class="pill ok">${T("阶段 ", "Stage ")}${r}</span>`).join(" ")}`;
    root.querySelector("#rn-bars").innerHTML = Q.map((q) => `
      <div class="bar2" data-id="${q.id}" style="cursor:pointer">
        <span class="lab" style="width:150px;${q.id === sel ? "color:var(--orange-ink);font-weight:700" : ""}">${q.q}</span>
        <div class="track"><div class="fill" style="width:${q.consensus}%;background:${cls(q.consensus)};opacity:${q.id === sel ? 1 : 0.55}"></div></div>
        <span class="val">${q.consensus}%</span>
      </div>`).join("");
    const avg = Math.round(Q.reduce((s, q) => s + q.consensus, 0) / Q.length);
    const econOnly = Q.filter((q) => q.id !== "state");
    const avgEcon = Math.round(econOnly.reduce((s, q) => s + q.consensus, 0) / econOnly.length);
    root.querySelector("#rn-log").innerHTML = [
      `${T("六个问题的平均共识度约", "Average consensus across six questions ≈")} <b>${avg}%</b>；${T("去掉“国家”这个非经济学问题后约", "excluding the non-economic “state” question ≈")} <b>${avgEcon}%</b>。`,
      `<span class="${x.consensus >= 80 ? "ok" : x.consensus >= 55 ? "warn" : "bad"}">${x.consensus >= 80 ? T("当前问题：学派共识——放心读罗斯巴德。", "Current question: school consensus — read Rothbard with confidence.") : x.consensus >= 55 ? T("当前问题：有实质分歧——把反方写在页边再下判断。", "Current question: substantive disagreement — write the counter-view in the margin before judging.") : T("当前问题：学派分水岭——两边都读完再站队。", "Current question: a watershed — read both sides before choosing.")}</span>`,
    ].map((l) => `<div>${l}</div>`).join("");
  };

  root.querySelector("#rn-q").addEventListener("click", (e) => { const b = e.target.closest("button[data-id]"); if (!b) return; sel = b.dataset.id; paint(); });
  root.querySelector("#rn-bars").addEventListener("click", (e) => { const r = e.target.closest("[data-id]"); if (!r) return; sel = r.dataset.id; paint(); });
  paint();
}
