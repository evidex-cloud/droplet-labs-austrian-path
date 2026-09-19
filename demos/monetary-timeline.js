// 交互演示：货币时间线——点开每个时代看“黄金锁链解开了哪一环”，
// 用 _chart.js 画美元购买力的近似曲线（标注为近似），每个时代可切换“金链 开/关”看反事实路径。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  // 各时代：起止年、历史上金链状态、该时代美元购买力年均变化（近似，按 CPI）、反事实（金链保持时）年均变化
  const ERAS = [
    { id: "classical", from: 1880, to: 1913, gold: true, hist: 0.000, cf: 0.000, name: T("古典金本位", "Classical gold standard"), lock: T("任何人可凭纸币兑黄金", "Anyone can redeem notes for gold"),
      what: T("1880–1913：美国在古典金本位下，任何人可按 $20.67/盎司兑换黄金。生产率提高带来温和的增长型通缩，美元购买力大致持平甚至略升。周期与恐慌仍存在（1893、1907），多与部分准备金银行有关。", "1880–1913: the U.S. on the classical gold standard; anyone could redeem at $20.67/oz. Productivity growth delivered mild growth deflation; the dollar's purchasing power was roughly flat or slightly rising. Cycles and panics still occurred (1893, 1907), mostly tied to fractional-reserve banking."),
      change: T("没有解锁——这是基准线。", "No unlocking — this is the baseline.") },
    { id: "fed-wwi", from: 1913, to: 1922, gold: true, hist: -0.045, cf: -0.010, name: T("美联储成立 · 一战", "Fed founded · WWI"), lock: T("美国仍可兑换；欧洲 1914 停兑", "U.S. still redeemable; Europe suspends 1914"),
      what: T("1913 年 12 月《联邦储备法》签署。1914 年一战爆发，欧洲交战国停止兑金、印钞打仗；美国仍在金本位上，但美联储为协约国和 1917 年后美国自己的参战融资，货币供给大幅扩张，1917–20 年物价几乎翻倍。", "The Federal Reserve Act was signed in December 1913. War broke out in 1914; European belligerents suspended gold and printed to fight. The U.S. stayed on gold, but the Fed financed the Allies and, after 1917, America's own war; the money supply expanded sharply and prices nearly doubled in 1917–20."),
      change: T("解锁第一环：一个能凭空创造准备金的机构出现了；欧洲的“战时临时停兑”再也没有完整恢复。", "First link unlocked: an institution that can create reserves from nothing now exists; Europe's “temporary wartime suspension” was never fully reversed.") },
    { id: "gold-exchange", from: 1922, to: 1933, gold: true, hist: -0.005, cf: 0.000, name: T("金汇兑本位", "Gold-exchange standard"), lock: T("英镑/美元充当黄金准备金", "Pounds/dollars count as gold reserves"),
      what: T("1922 年热那亚会议后，各国央行可用英镑和美元代替黄金做准备金——同一盎司黄金支撑几层货币。美国 1920 年代信用膨胀，CPI 平稳但股市与房地产暴涨（坎蒂隆第一站），1929 年崩盘，1930–33 年银行信用型通缩。", "After the 1922 Genoa Conference, central banks could hold pounds and dollars instead of gold as reserves — one ounce of gold now supported several layers of money. The U.S. credit inflation of the 1920s left CPI flat while stocks and real estate soared (Cantillon's first station); the 1929 crash was followed by bank-credit deflation in 1930–33."),
      change: T("解锁第二环：黄金被稀释。物价看似稳定，但资产价格与错误投资已在堆积。", "Second link: gold diluted. Prices looked stable while asset prices and malinvestment piled up.") },
    { id: "confiscation", from: 1933, to: 1944, gold: false, hist: -0.020, cf: -0.010, name: T("1933 没收黄金 · 1934 贬值", "1933 confiscation · 1934 devaluation"), lock: T("公民不得持有黄金；只有外国政府可兑", "Citizens may not hold gold; only foreign governments redeem"),
      what: T("1933 年 4 月 5 日第 6102 号行政命令要求美国公民上缴金币金条；1934 年 1 月《黄金储备法》把美元从 1/20.67 盎司贬到 1/35 盎司——约 41%，黄金此时已在政府手中。国内兑换权从此消失。二战期间美联储把国债利率钉在 2.5% 以下为战争融资。", "Executive Order 6102 (5 April 1933) required Americans to surrender gold coin and bullion; the Gold Reserve Act (January 1934) cut the dollar from 1/20.67 to 1/35 oz — about 41% — after the gold was already in government hands. Domestic redemption ended. During WWII the Fed pegged Treasury yields below 2.5% to finance the war."),
      change: T("解锁第三环：公民对黄金的权利被没收，美元只对外国政府可兑。", "Third link: citizens' claim on gold confiscated; the dollar redeemable only by foreign governments.") },
    { id: "bretton", from: 1944, to: 1971, gold: false, hist: -0.025, cf: -0.008, name: T("布雷顿森林", "Bretton Woods"), lock: T("只有外国央行可按 $35/盎司兑换", "Only foreign central banks redeem at $35/oz"),
      what: T("1944 年 44 国协议：各国货币盯住美元，美元以 $35/盎司盯住黄金，仅对外国央行兑换。美元成为世界储备货币，美国对全世界行使坎蒂隆特权。1960 年代越战与“伟大社会”开支下，美国黄金储备从约 2 万吨降到约 8 千吨，法国等国持续兑金。", "In 1944 forty-four nations pegged their currencies to the dollar and the dollar to gold at $35/oz, redeemable only by foreign central banks. The dollar became the world reserve currency and the U.S. exercised the Cantillon privilege globally. Under 1960s Vietnam and Great Society spending, U.S. gold reserves fell from about 20,000 to about 8,000 tonnes as France and others kept redeeming."),
      change: T("解锁第四环：一根缆绳拴住全世界的船；只有外国船长能检查它。", "Fourth link: one line moors every ship in the world; only foreign captains may inspect it.") },
    { id: "fiat", from: 1971, to: 2024, gold: false, hist: -0.039, cf: -0.008, name: T("纯法币时代", "Pure fiat era"), lock: T("没有任何人可以兑换", "Nobody can redeem"),
      what: T("1971 年 8 月 15 日尼克松“暂时”关闭黄金窗口；1973 年主要货币浮动。1970 年代两位数通胀，1979–82 年沃尔克以高利率压回；2008 与 2020 年美联储资产负债表分别扩张数万亿美元。美元自 1913 年累计损失约 96–97% 购买力，其中约 87% 发生在 1971 年之后。它没有崩溃——部分奥派的崩溃预言是错的——但也没有兑现“稳定”。", "On 15 August 1971 Nixon “temporarily” closed the gold window; major currencies floated from 1973. Double-digit inflation in the 1970s was broken by Volcker's high rates in 1979–82; the Fed's balance sheet expanded by trillions in 2008 and again in 2020. The dollar has lost about 96–97% of its 1913 purchasing power, about 87% of it after 1971. It has not collapsed — some Austrian collapse calls were wrong — but neither did it deliver “stability.”"),
      change: T("最后一环解开：所有主要货币同时脱锚——人类历史上没有先例的实验，至今仍在进行。", "The last link undone: all major currencies unanchored at once — an experiment without precedent, still running.") },
  ];

  let sel = 5;
  const goldOn = ERAS.map((e) => e.gold);

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🕰️ 货币时间线：黄金锁链是怎样一环一环解开的", "🕰️ The monetary timeline: how the gold chain came undone link by link")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("点一个时代查看它改变了什么；切换“金链”看反事实路径", "Click an era to see what changed; toggle “gold link” for the counterfactual path")}</label>
          <div class="tl" id="mt-tl"></div>
        </div>
        <div class="demo-block">
          <label class="demo-label" id="mt-title"></label>
          <div class="scn" id="mt-scn"></div>
          <div class="demo-btns">
            <button class="demo-btn" id="mt-hist">${T("恢复历史设定", "Restore history")}</button>
            <button class="demo-btn" id="mt-allgold">${T("假设金链从未解开", "Suppose gold was never unlocked")}</button>
          </div>
        </div>
      </div>
      <div class="demo-block">
        <label class="demo-label">${T("美元购买力（1913 = 100）——近似值，按 CPI 粗略示意，非精确统计", "Purchasing power of the dollar (1913 = 100) — approximate, a rough CPI-based illustration, not precise statistics")}</label>
        <div id="mt-chart"></div>
        <div class="stat-row">
          <div class="stat"><div class="k">${T("2024 购买力（历史）", "2024 purchasing power (history)")}</div><div class="v neg" id="mt-h">–</div></div>
          <div class="stat"><div class="k">${T("2024 购买力（你的设定）", "2024 purchasing power (your setting)")}</div><div class="v acc" id="mt-c">–</div></div>
          <div class="stat"><div class="k">${T("累计损失（你的设定）", "Cumulative loss (your setting)")}</div><div class="v" id="mt-loss">–</div></div>
        </div>
        <div class="demo-log" id="mt-log"></div>
      </div>
      <p class="demo-tip">${T(
        "先看历史线：1913 年前大致持平，1913 年后一路向下，1971 年后斜率最陡。然后逐个把时代的“金链”打开：反事实线假设那个时代黄金约束仍在（年均贬值按金本位时代的经验取约 0–1%，纯属示意）。注意每一环的解锁都发生在紧急状态下、都被宣布为“临时”——而没有一环恢复过。这不是巧合，是能创造准备金的机构在每次危机中的激励。",
        "Read the historical line first: roughly flat before 1913, falling steadily after, steepest after 1971. Then switch each era's “gold link” back on: the counterfactual line assumes gold discipline held in that era (annual depreciation of about 0–1%, taken from gold-era experience, purely illustrative). Notice that every unlocking happened in an emergency and was declared “temporary” — and none was ever reversed. Not coincidence, but the incentive facing an institution that can create reserves, in every crisis."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const pathFn = (useSetting) => (year) => {
    let v = 100;
    for (const [i, e] of ERAS.entries()) {
      if (year <= e.from) break;
      const yrs = Math.min(year, e.to) - e.from;
      const rate = useSetting ? (goldOn[i] ? e.cf : e.hist) : e.hist;
      v *= Math.pow(1 + rate, yrs);
    }
    return v;
  };

  const paint = () => {
    $("mt-tl").innerHTML = ERAS.map((e, i) => `<div class="tl-item" style="cursor:pointer;${i === sel ? "color:var(--orange-ink);font-weight:700" : ""}" data-i="${i}"><span class="when" style="font-family:var(--mono);font-size:12px;color:var(--muted)">${e.from}–${e.to}</span> · ${e.name}
      <span class="pill ${goldOn[i] ? "ok" : "bad"}" style="margin-left:6px;cursor:pointer" data-toggle="${i}">${goldOn[i] ? T("金链 开", "gold link ON") : T("金链 关", "gold link OFF")}</span>
      ${goldOn[i] !== e.gold ? `<span style="font-size:11px;color:var(--blue)">${T("（反事实）", "(counterfactual)")}</span>` : ""}</div>`).join("");
    const e = ERAS[sel];
    $("mt-title").textContent = e.from + "–" + e.to + " · " + e.name;
    $("mt-scn").innerHTML = `<div class="scn-q">${e.lock}</div><div style="font-size:14px;line-height:1.65">${e.what}</div><div class="scn-meta"><b>${T("这一环：", "This link: ")}</b>${e.change}</div>`;

    const fH = pathFn(false), fC = pathFn(true);
    const res = lineChart({ fns: [{ f: fH, cls: "line" }, { f: fC, cls: "line2" }], lo: 1880, hi: 2024, xlabel: T("年份", "year"), markerX: e.from, markerLabel: String(e.from), forceZero: true, uid: "mt", H: 250 });
    $("mt-chart").innerHTML = chartBlock(res, [["var(--orange)", T("历史（近似）", "History (approx.)")], ["var(--blue)", T("你的设定（反事实）", "Your setting (counterfactual)")]]);
    const h = fH(2024), c = fC(2024);
    $("mt-h").textContent = h.toFixed(1);
    $("mt-c").textContent = c.toFixed(1);
    $("mt-loss").textContent = "−" + (100 - c).toFixed(0) + "%";

    const lines = [];
    lines.push(T(`历史：2024 年的 1 美元只剩 1913 年的约 ${h.toFixed(0)}%——损失约 ${(100 - h).toFixed(0)}%（真实数据约 96–97%）。1913–1971 损失约 ${(100 - fH(1971)).toFixed(0)}%，1971 年后再损失约 ${(100 - 100 * h / fH(1971)).toFixed(0)}%。`, `History: a 2024 dollar retains about ${h.toFixed(0)}% of 1913 purchasing power — a loss of about ${(100 - h).toFixed(0)}% (real data: about 96–97%). 1913–1971 lost about ${(100 - fH(1971)).toFixed(0)}%; after 1971 a further ${(100 - 100 * h / fH(1971)).toFixed(0)}%.`));
    const changed = ERAS.filter((x, i) => goldOn[i] !== x.gold).length;
    if (changed) lines.push(`<span class="warn">${T(`你把 ${changed} 个时代的金链改了。反事实下 2024 年购买力约 ${c.toFixed(0)}，而不是 ${h.toFixed(0)}。反事实只是示意：金本位下仍会有周期与恐慌，但央行无法让所有银行同步扩张、无法为战争无限融资。`, `You changed the gold link in ${changed} era(s). Under the counterfactual, 2024 purchasing power is about ${c.toFixed(0)} instead of ${h.toFixed(0)}. The counterfactual is only illustrative: cycles and panics would still occur under gold, but a central bank could not make every bank expand at once or finance wars without limit.`)}</span>`);
    else lines.push(T("每一环都在紧急状态下解开，都被宣布为“临时”，没有一环恢复过。切换金链看看反事实。", "Every link was unlocked in an emergency, declared “temporary,” and never restored. Toggle a gold link to see the counterfactual."));
    if (sel === 5) lines.push(`<span class="ok">${T("诚实的一面：法币运转了五十多年，美元仍是储备货币——“必崩”是奥派应当反省的错误预言（阶段 14.4）。回归定理解释了它为何能运转：它继承了黄金美元的价格记忆。", "The honest side: fiat has run for over fifty years and the dollar is still the reserve currency — “it must collapse” is an Austrian prediction to be reflected on (Stage 14.4). The regression theorem explains why it works: it inherited the gold dollar's price memory.")}</span>`);
    $("mt-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");

    $("mt-tl").querySelectorAll("[data-i]").forEach((el) => el.addEventListener("click", (ev) => { if (ev.target.dataset.toggle != null) return; sel = +el.dataset.i; paint(); }));
    $("mt-tl").querySelectorAll("[data-toggle]").forEach((el) => el.addEventListener("click", (ev) => { ev.stopPropagation(); const i = +el.dataset.toggle; goldOn[i] = !goldOn[i]; sel = i; paint(); }));
  };

  $("mt-hist").addEventListener("click", () => { ERAS.forEach((e, i) => (goldOn[i] = e.gold)); paint(); });
  $("mt-allgold").addEventListener("click", () => { ERAS.forEach((_, i) => (goldOn[i] = true)); paint(); });
  paint();
}
