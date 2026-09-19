// 交互演示：1921–33 年的同一组（近似）数据，用两副眼镜看：
// “货币主义”眼镜盯 1929–33 的货币存量崩塌与美联储的不作为（滑块：美联储若托住货币存量）；
// “奥派”眼镜盯 1921–29 的信用扩张与资本品行业的膨胀（滑块：若 1920 年代没有那场扩张）。
// 数据为示意性近似值（标注），只求形状对，不求精确。
import { lineChart, chartBlock } from "./_chart.js";

export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const years = [1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933];
  // 近似指数（1921 = 100）
  const money  = [100, 106, 112, 120, 130, 136, 143, 152, 161, 155, 140, 118, 108];  // 广义货币，1921–29 +约 60%，1929–33 −约 1/3
  const prices = [100, 94, 96, 96, 98, 99, 97, 96, 96, 93, 85, 76, 72];               // 物价：1920 年代大致平稳，之后下跌
  const output = [100, 126, 146, 138, 154, 162, 162, 170, 186, 155, 129, 100, 118];    // 工业产出
  const capgd  = [100, 130, 158, 150, 175, 190, 192, 205, 232, 160, 110, 70, 90];      // 资本品/建筑（示意，波动远大于消费品）
  const unemp  = [11.7, 6.7, 2.4, 5.0, 3.2, 1.8, 3.3, 4.2, 3.2, 8.7, 15.9, 23.6, 24.9]; // 失业率 %（近似）

  let lens = "monetarist";
  let fedProp = 0;     // 货币主义反事实：美联储托住货币存量的力度 0–100%
  let noBoom = 0;      // 奥派反事实：抹去 1920 年代信用扩张的比例 0–100%

  // —— 反事实计算 ——
  function monetaristCF(k) {
    // 1930 年后，货币存量被托回 1929 水平的 k 比例；产出缺口按 0.75 的弹性部分修复
    const m = money.map((v, i) => (i <= 8 ? v : v + (money[8] - v) * k));
    const y = output.map((v, i) => (i <= 8 ? v : v + (output[8] - v) * k * 0.75));
    const u = unemp.map((v, i) => (i <= 8 ? v : v - (v - unemp[8]) * k * 0.7));
    return { m, y, u };
  }
  function austrianCF(k) {
    // 1921–29 的货币增长被压回“中性”路径（每年约 +2%）的 k 比例；资本品膨胀随之缩小；
    // 萧条深度与此前的膨胀成比例（错误投资少 → 需要清算的少）。
    const neutral = years.map((_, i) => 100 * Math.pow(1.02, i));
    const m = money.map((v, i) => (i <= 8 ? v + (neutral[i] - v) * k : null));
    // 繁荣期资本品膨胀 = capgd − output；反事实按 k 缩小
    const c = capgd.map((v, i) => (i <= 8 ? output[i] + (v - output[i]) * (1 - k) : null));
    // 1929 年后：跌幅 = 原跌幅 × (1 − 0.8k)（无法完全消除，普通衰退仍会有）
    const fall = output.map((v, i) => (i > 8 ? output[8] - v : 0));
    const y = output.map((v, i) => (i <= 8 ? v - (capgd[i] - output[i]) * 0.15 * k : output[8] - fall[i] * (1 - 0.8 * k)));
    for (let i = 9; i < years.length; i++) m[i] = m[8] * (money[i] / money[8]) ** (1 - 0.8 * k);
    for (let i = 9; i < years.length; i++) c[i] = y[i] * (capgd[i] / output[i]) ** (1 - 0.8 * k);
    const u = unemp.map((v, i) => (i <= 8 ? v : unemp[8] + (v - unemp[8]) * (1 - 0.8 * k)));
    return { m, c, y, u };
  }

  const checklist = {
    monetarist: {
      title: T("货币主义眼镜：1929–33 的“大收缩”", "The monetarist lens: the Great Contraction of 1929–33"),
      explains: [
        T("为什么普通衰退变成大萧条：货币存量下降约 1/3，三波银行恐慌，美联储袖手旁观", "Why an ordinary recession became a depression: money stock −about 1/3, three bank panics, the Fed stood aside"),
        T("为什么物价与产出一起坠落（名义支出崩塌）", "Why prices and output fell together (nominal spending collapsed)"),
        T("为什么 1933 年后（脱离金本位、货币回升）复苏开始", "Why recovery began after 1933 (leaving gold, money growth resumed)"),
      ],
      leaves: [
        T("1921–29 货币供给 +约 60% 去了哪里——为什么物价没涨而资本品行业膨胀了一倍多", "Where the +about 60% of money in 1921–29 went — why prices were flat while capital goods more than doubled"),
        T("为什么 1929 年的衰退会从资本品、建筑、股市开始（而不是均匀收缩）", "Why the 1929 downturn began in capital goods, construction and stocks rather than uniformly"),
        T("胡佛的维持工资、关税、公共工程为什么让清算拖了十年", "Why Hoover's wage propping, tariff and public works stretched the liquidation for a decade"),
      ],
    },
    austrian: {
      title: T("奥派眼镜：1921–29 的信用扩张与 1930 年后被阻止的清算", "The Austrian lens: the 1921–29 credit expansion and the obstructed liquidation after 1930"),
      explains: [
        T("为什么“物价稳定”的 1920 年代其实是一场通胀：生产率进步本该让物价下跌", "Why the “price-stable” 1920s were in fact an inflation: productivity should have pushed prices down"),
        T("为什么崩溃从资本品、建筑与股市开始：错误投资集中在离消费最远的阶段", "Why the crash began in capital goods, construction and stocks: malinvestment sits farthest from consumption"),
        T("为什么 1930 年后的干预（维持工资、关税）让萧条拖了十年：清算被阻止", "Why post-1930 intervention (wage props, tariff) prolonged the slump: liquidation was blocked"),
      ],
      leaves: [
        T("1930–33 的“二次通缩”把健康企业也拖垮——哈耶克自己承认低估了这一点", "The secondary deflation of 1930–33 dragged down healthy firms too — Hayek admitted he underestimated this"),
        T("究竟多少产出下降是“必要的清算”、多少是货币崩塌造成的额外伤害，奥派没有给出可量化的答案", "How much of the output fall was “necessary liquidation” and how much was extra damage from monetary collapse — Austrians give no quantified answer"),
        T("罗斯巴德 60% 的口径（含储蓄存款、寿险准备金）有争议；用较窄口径增幅小得多", "Rothbard's 60% measure (including savings deposits and life-insurance reserves) is contested; narrower measures grow far less"),
      ],
    },
  };

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🔍 1921–33：同一组数据，两副眼镜", "🔍 1921–33: one data set, two lenses")}</div>
      <div class="demo-row">
        <div class="demo-seg" id="tl-seg">
          <button data-lens="monetarist" class="on">${T("货币主义（弗里德曼）", "Monetarist (Friedman)")}</button>
          <button data-lens="austrian">${T("奥派（罗斯巴德/哈耶克）", "Austrian (Rothbard / Hayek)")}</button>
        </div>
        <span class="demo-meta" style="margin:0">${T("数据为近似示意（指数 1921 = 100），只保证形状", "Approximate sketch data (index 1921 = 100); shape only")}</span>
      </div>
      <div class="demo-block" id="tl-sliderblock"></div>
      <div class="demo-block" id="tl-chart"></div>
      <div class="stat-row" id="tl-stats"></div>
      <div class="demo-block"><div class="tl" id="tl-events"></div></div>
      <div class="cmp" id="tl-check"></div>
      <div class="demo-block"><div class="demo-log" id="tl-log"></div></div>
      <p class="demo-tip">${T(
        "切换眼镜，注意图上被加粗的那一段：货币主义只盯 1929 之后的下坡，奥派先看 1929 之前的上坡（尤其是资本品那条线飞得多高）。把各自的滑块拉到 100%：货币主义的反事实能大幅缩短萧条，却对 1920 年代的膨胀无话可说；奥派的反事实让萧条本身变浅，代价是 1920 年代的“繁荣”也没了。两副眼镜各看见一半。",
        "Switch lenses and watch which segment is emphasized: the monetarist looks only at the slope down after 1929; the Austrian first looks at the slope up before it (especially how far the capital-goods line flies). Push each slider to 100%: the monetarist counterfactual shortens the depression a lot but says nothing about the 1920s expansion; the Austrian counterfactual makes the bust itself shallower, at the price of the 1920s “boom.” Each lens sees half."
      )}</p>
    </div>`;

  const interp = (arr) => (x) => {
    const i = Math.min(years.length - 2, Math.max(0, Math.floor(x - years[0])));
    const w = x - years[0] - i;
    const a = arr[i], b = arr[i + 1];
    if (a == null || b == null) return NaN;
    return a * (1 - w) + b * w;
  };

  const paint = () => {
    let fns, legend, stats, events, logs;
    if (lens === "monetarist") {
      root.querySelector("#tl-v1").textContent = fedProp + "%";
      const cf = monetaristCF(fedProp / 100);
      fns = [
        { f: interp(money), cls: "line2" },
        { f: interp(output), cls: "line" },
        { f: interp(prices), cls: "line4" },
        { f: interp(cf.m), cls: "line3" },
      ];
      legend = [["var(--blue)", T("货币存量（实际）", "Money stock (actual)")], ["var(--orange)", T("工业产出", "Industrial output")], ["var(--green)", T("物价", "Prices")], ["var(--red)", T("货币存量（反事实）", "Money stock (counterfactual)")]];
      const y33 = cf.y[12], u33 = cf.u[12];
      stats = [
        [T("货币 1929→33", "Money 1929→33"), ((cf.m[12] / money[8] - 1) * 100).toFixed(0) + "%", cf.m[12] < money[8] * 0.9 ? "neg" : ""],
        [T("产出 1929→33", "Output 1929→33"), ((y33 / output[8] - 1) * 100).toFixed(0) + "%", y33 < output[8] * 0.9 ? "neg" : "pos"],
        [T("失业率 1933", "Unemployment 1933"), u33.toFixed(1) + "%", u33 > 10 ? "neg" : ""],
        [T("货币 1921→29", "Money 1921→29"), "+" + ((money[8] / money[0] - 1) * 100).toFixed(0) + "%", ""],
      ];
      events = [
        ["1928", T("纽约联储行长斯特朗去世，美联储群龙无首", "Benjamin Strong of the New York Fed dies; the System is leaderless")],
        ["1929.10", T("股市崩盘——货币主义视之为普通衰退的开端", "Stock-market crash — to monetarists, the start of an ordinary recession")],
        ["1930.11", T("第一波银行恐慌；美联储未大规模买入国债", "First banking panic; the Fed does not buy bonds on a large scale")],
        ["1931.9", T("英国脱离金本位，美联储反而加息", "Britain leaves gold; the Fed raises rates")],
        ["1933.3", T("银行假日；货币存量已比 1929 年低约 1/3", "Bank holiday; money stock about a third below 1929")],
      ];
      logs = [
        '<span class="ok">' + T("这副眼镜解释得好：", "What this lens explains well: ") + "</span>" + T("1930–33 年的坠落深度。把滑块拉到 100%，产出 1933 年只比 1929 年低 " + Math.abs((y33 / output[8] - 1) * 100).toFixed(0) + "%——这就是弗里德曼“本可避免”的意思。", "the depth of the 1930–33 fall. At 100%, output in 1933 is only " + Math.abs((y33 / output[8] - 1) * 100).toFixed(0) + "% below 1929 — that is what Friedman meant by “avoidable.”"),
        '<span class="bad">' + T("这副眼镜看不见：", "What this lens cannot see: ") + "</span>" + T("蓝线在 1921–29 年涨了约 60%，绿线却纹丝不动——它把这叫“健康”。资本品那条线（切到奥派眼镜看）在同一时期翻了一倍多。", "the blue line rose about 60% in 1921–29 while the green line stayed flat — it calls that “healthy.” The capital-goods line (switch to the Austrian lens) more than doubled in the same years."),
      ];
    } else {
      root.querySelector("#tl-v2").textContent = noBoom + "%";
      const cf = austrianCF(noBoom / 100);
      fns = [
        { f: interp(money), cls: "line2" },
        { f: interp(capgd), cls: "line3" },
        { f: interp(output), cls: "line" },
        { f: interp(cf.c), cls: "line4" },
      ];
      legend = [["var(--blue)", T("货币供给（实际）", "Money supply (actual)")], ["var(--red)", T("资本品/建筑（实际）", "Capital goods / construction (actual)")], ["var(--orange)", T("工业产出", "Industrial output")], ["var(--green)", T("资本品（反事实）", "Capital goods (counterfactual)")]];
      const peak = cf.c[8], trough = Math.min(...cf.c.slice(9));
      stats = [
        [T("资本品 1921→29", "Capital goods 1921→29"), "+" + ((peak / 100 - 1) * 100).toFixed(0) + "%", peak > 180 ? "neg" : ""],
        [T("资本品 峰→谷", "Capital goods peak→trough"), ((trough / peak - 1) * 100).toFixed(0) + "%", trough / peak < 0.6 ? "neg" : ""],
        [T("产出 1929→32", "Output 1929→32"), ((cf.y[11] / cf.y[8] - 1) * 100).toFixed(0) + "%", cf.y[11] / cf.y[8] < 0.8 ? "neg" : "pos"],
        [T("失业率 1933", "Unemployment 1933"), cf.u[12].toFixed(1) + "%", cf.u[12] > 10 ? "neg" : ""],
      ];
      events = [
        ["1921–24", T("美联储压低贴现率，货币供给开始扩张；物价因生产率进步而“稳定”", "The Fed lowers the discount rate; money begins expanding; prices “stable” thanks to productivity")],
        ["1927", T("为帮英国维持金本位，美联储再度放松——哈耶克与米塞斯此时已警告", "The Fed eases again to help Britain hold gold — Hayek and Mises are already warning")],
        ["1929.10", T("崩盘从最远离消费的地方开始：股市、建筑、资本品", "The crash starts farthest from consumption: stocks, construction, capital goods")],
        ["1929.11", T("胡佛召集企业家：不要降工资——清算被阻止的起点", "Hoover summons business leaders: do not cut wages — liquidation obstructed begins")],
        ["1930.6", T("斯穆特–霍利关税；1933 年《全国工业复兴法》继续钉住价格", "Smoot–Hawley tariff; the 1933 NIRA keeps pinning prices")],
      ];
      logs = [
        '<span class="ok">' + T("这副眼镜解释得好：", "What this lens explains well: ") + "</span>" + T("为什么红线（资本品）在 1920 年代飞到 +" + ((capgd[8] / 100 - 1) * 100).toFixed(0) + "% 而绿线（物价）不动，以及为什么崩溃从这里开始。滑块拉到 100%，资本品的过山车被抹平，1929–32 的产出跌幅从 " + Math.abs((output[11] / output[8] - 1) * 100).toFixed(0) + "% 缩到 " + Math.abs((cf.y[11] / cf.y[8] - 1) * 100).toFixed(0) + "%。", "why the red line (capital goods) flew to +" + ((capgd[8] / 100 - 1) * 100).toFixed(0) + "% in the 1920s while prices stayed flat, and why the collapse started there. At 100% the capital-goods roller-coaster is flattened and the 1929–32 output fall shrinks from " + Math.abs((output[11] / output[8] - 1) * 100).toFixed(0) + "% to " + Math.abs((cf.y[11] / cf.y[8] - 1) * 100).toFixed(0) + "%."),
        '<span class="bad">' + T("这副眼镜的短板：", "Where this lens is weak: ") + "</span>" + T("即使抹去繁荣，1930–33 的银行倒闭仍会把货币存量拖下来、把健康企业也拖垮——这部分伤害奥派解释不好，弗里德曼解释得好。诚实的答案是两副眼镜都得戴。", "even with the boom removed, the bank failures of 1930–33 would still drag the money stock down and take healthy firms with it — Austrians explain that damage poorly, Friedman well. The honest answer is to wear both lenses."),
      ];
    }
    const res = lineChart({ fns, lo: 1921, hi: 1933, xlabel: T("年份", "year"), markerX: 1929, markerLabel: "1929", uid: "tl", samples: 120 });
    root.querySelector("#tl-chart").innerHTML = chartBlock(res, legend);
    root.querySelector("#tl-stats").innerHTML = stats.map(([k, v, cls]) => '<div class="stat"><div class="k">' + k + '</div><div class="v ' + cls + '">' + v + "</div></div>").join("");
    root.querySelector("#tl-events").innerHTML = events.map(([w, t]) => '<div class="tl-item"><span class="when">' + w + "</span>" + t + "</div>").join("");
    const ck = checklist[lens];
    root.querySelector("#tl-check").innerHTML =
      '<div class="cmp-cell ' + (lens === "austrian" ? "hl" : "cold") + '"><h5>' + T("解释了什么", "What it explains") + "</h5>" + ck.explains.map((x) => '<div class="demo-meta" style="margin:4px 0"><span class="pill ok">✓</span> ' + x + "</div>").join("") + "</div>" +
      '<div class="cmp-cell"><h5>' + T("留下了什么", "What it leaves out") + "</h5>" + ck.leaves.map((x) => '<div class="demo-meta" style="margin:4px 0"><span class="pill bad">?</span> ' + x + "</div>").join("") + "</div>";
    root.querySelector("#tl-log").innerHTML = logs.map((l) => "<div>" + l + "</div>").join("");
  };

  const paintControls = () => {
    root.querySelectorAll("#tl-seg button").forEach((b) => b.classList.toggle("on", b.dataset.lens === lens));
    const sb = root.querySelector("#tl-sliderblock");
    if (lens === "monetarist") {
      sb.innerHTML = '<label class="demo-label">' + T("反事实：美联储从 1930 年起托住货币存量的力度 ", "Counterfactual: how hard the Fed props the money stock from 1930 ") + '<b id="tl-v1">' + fedProp + '%</b></label><input class="demo-slider" id="tl-s1" type="range" min="0" max="100" step="5" value="' + fedProp + '" />';
      root.querySelector("#tl-s1").addEventListener("input", (e) => { fedProp = +e.target.value; paint(); });
    } else {
      sb.innerHTML = '<label class="demo-label">' + T("反事实：抹去 1921–29 年信用扩张的比例 ", "Counterfactual: share of the 1921–29 credit expansion removed ") + '<b id="tl-v2">' + noBoom + '%</b></label><input class="demo-slider" id="tl-s2" type="range" min="0" max="100" step="5" value="' + noBoom + '" />';
      root.querySelector("#tl-s2").addEventListener("input", (e) => { noBoom = +e.target.value; paint(); });
    }
    paint();
  };

  root.querySelectorAll("#tl-seg button").forEach((b) => b.addEventListener("click", () => { lens = b.dataset.lens; paintControls(); }));
  paintControls();
}
