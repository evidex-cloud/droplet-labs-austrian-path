// 交互演示：僵尸企业沙盘——20 家企业各有随机的资本回报率；拖动利率看谁的回报覆盖不了资金成本；
// 打开“廉价再融资”后它们不再倒闭而成为僵尸，占着资本与工人；看僵尸份额、平均生产率、被锁定的资本怎么变。
export default function mount(root, lang) {
  const en = lang === "en";
  const T = (zh, e) => (en ? e : zh);

  const N = 20;
  // 确定性伪随机，让每次打开的分布一致、按钮可重抽
  let seed = 7;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  let firms = [];
  const draw = () => {
    firms = Array.from({ length: N }, (_, i) => {
      // 回报率：0.5%–12%，偏向低端（更多平庸企业）
      const u = rnd();
      const ret = 0.5 + 11.5 * Math.pow(u, 1.4);
      const cap = 60 + Math.round(rnd() * 80); // 资本 60–140
      return { id: i + 1, ret, cap, years: 0 };
    }).sort((a, b) => b.ret - a.ret);
  };
  draw();

  let rate = 6, cheap = false, held = 0; // held：利率被压住的年数（用于“年份”步进）

  root.innerHTML = `
    <div class="demo">
      <div class="demo-head">${T("🧟 僵尸沙盘：利率是死线，压低它会发生什么", "🧟 Zombie sandbox: the rate is the death line — what happens when you push it down")}</div>
      <div class="demo-grid">
        <div class="demo-block">
          <label class="demo-label">${T("市场利率（企业的资金成本）：", "Market rate (firms' cost of funds): ")}<b id="zs-rv">6.0%</b></label>
          <input class="demo-slider" id="zs-r" type="range" min="0.5" max="8" step="0.25" value="6" />
        </div>
        <div class="demo-block">
          <div class="demo-label">${T("回报低于利率的企业怎么办？", "What happens to firms whose return is below the rate?")}</div>
          <div class="demo-seg" id="zs-mode">
            <button class="on" data-m="liq">${T("倒闭清算（资本释放）", "Fail and liquidate (capital released)")}</button>
            <button data-m="cheap">${T("廉价再融资（僵尸化）", "Cheap refinancing (zombified)")}</button>
          </div>
        </div>
      </div>
      <div class="demo-btns">
        <button class="demo-btn" id="zs-year">${T("再压一年 ▶（僵尸年限 +1，生产率衰减）", "Hold one more year ▶ (zombie age +1, productivity decays)")}</button>
        <button class="demo-btn" id="zs-redraw">${T("重抽 20 家企业", "Redraw 20 firms")}</button>
      </div>
      <div class="stages" id="zs-firms"></div>
      <div class="stat-row">
        <div class="stat"><div class="k">${T("健康企业", "Healthy")}</div><div class="v pos" id="zs-h">–</div></div>
        <div class="stat"><div class="k">${T("僵尸企业", "Zombies")}</div><div class="v neg" id="zs-z">–</div></div>
        <div class="stat"><div class="k">${T("已清算", "Liquidated")}</div><div class="v" id="zs-l">–</div></div>
        <div class="stat"><div class="k">${T("僵尸份额", "Zombie share")}</div><div class="v acc" id="zs-share">–</div></div>
        <div class="stat"><div class="k">${T("平均生产率（在营企业）", "Avg productivity (operating)")}</div><div class="v" id="zs-prod">–</div></div>
        <div class="stat"><div class="k">${T("被僵尸锁定的资本", "Capital locked in zombies")}</div><div class="v" id="zs-lock">–</div></div>
      </div>
      <div class="demo-block"><div class="demo-log" id="zs-log"></div></div>
      <p class="demo-tip">${T(
        "先在“倒闭清算”模式把利率从 6% 拖到 1%：本该倒闭的企业一家家“活”过来——它们的回报一分没变。再切到“廉价再融资”，按几次“再压一年”：僵尸的回报逐年衰减、被锁定的资本越来越多、<strong>在营企业的平均生产率一路下滑</strong>。这就是 BIS 数出来的“僵尸份额从约 2% 升到约 12%”背后的机制。最后把利率拖回 6%，看清算一次性发生——痛，但平均生产率立刻回升。",
        "In “fail and liquidate” mode, drag the rate from 6% to 1%: firms that should have failed come back to “life” one by one — their returns have not changed at all. Switch to “cheap refinancing” and press “hold one more year” a few times: zombie returns decay, locked capital grows, and <strong>average productivity of operating firms slides</strong>. That is the mechanism behind the BIS finding that the zombie share rose from about 2% to about 12%. Finally drag the rate back to 6% and watch liquidation happen at once — painful, but average productivity jumps back."
      )}</p>
    </div>`;

  const $ = (id) => root.querySelector("#" + id);

  const paint = () => {
    $("zs-rv").textContent = rate.toFixed(2).replace(/0$/, "") + "%";
    const maxRet = 12;
    let healthy = 0, zombies = 0, liq = 0, lockCap = 0, prodSum = 0, prodN = 0, totalCap = 0;
    const rows = firms.map((f) => {
      const effRet = f.ret * Math.pow(0.85, f.years); // 僵尸年限越长，回报衰减（设备老化、降价求生）
      const below = effRet < rate;
      let status;
      if (!below) { status = "healthy"; healthy++; prodSum += effRet * f.cap; prodN += f.cap; }
      else if (cheap) { status = "zombie"; zombies++; lockCap += f.cap; prodSum += effRet * f.cap; prodN += f.cap; }
      else { status = "liq"; liq++; }
      totalCap += f.cap;
      const color = status === "healthy" ? "var(--orange)" : status === "zombie" ? "var(--red)" : "var(--line)";
      const label = status === "healthy" ? T("健康", "healthy") : status === "zombie" ? T("僵尸 " + f.years + " 年", "zombie " + f.years + "y") : T("清算→释放", "liquidated → released");
      return `<div class="stage-bar"><span class="lab" style="color:${status === "zombie" ? "var(--red)" : status === "liq" ? "var(--muted)" : "var(--ink)"}">#${f.id} · ${T("资本", "cap")} ${f.cap}</span><div class="track"><div class="fill" style="width:${(effRet / maxRet) * 100}%;background:${color};opacity:${status === "liq" ? 0.35 : 1}"></div><div class="fill ghost" style="width:${(Math.min(rate, maxRet) / maxRet) * 100}%"></div></div><span class="val" style="color:${status === "zombie" ? "var(--red)" : "inherit"}">${effRet.toFixed(1)}% · ${label}</span></div>`;
    });
    $("zs-firms").innerHTML = rows.join("");
    const share = (zombies / N) * 100;
    const prod = prodN ? prodSum / prodN : 0;
    $("zs-h").textContent = healthy;
    $("zs-z").textContent = zombies;
    $("zs-l").textContent = liq;
    $("zs-share").textContent = share.toFixed(0) + "%";
    const pe = $("zs-prod"); pe.textContent = prod.toFixed(2) + "%"; pe.className = "v " + (zombies ? "neg" : "pos");
    $("zs-lock").textContent = lockCap + " / " + totalCap + T("（" + (lockCap / totalCap * 100).toFixed(0) + "%）", " (" + (lockCap / totalCap * 100).toFixed(0) + "%)");

    const lines = [];
    lines.push(`${T("蓝色虚线 = 利率死线", "Blue dashed = the rate death line")} ${rate.toFixed(2).replace(/0$/, "")}%：${T("回报够不到它的企业", "firms whose return does not reach it")} ${zombies + liq} ${T("家。", ".")}`);
    if (!cheap) {
      if (liq) lines.push(`<span class="ok">${T("清算模式：这 " + liq + " 家倒闭，资本 " + (totalCap - prodN) + " 被释放给能用好它的人。在营企业平均生产率 " + prod.toFixed(2) + "%——清算本身就是生产率的来源。", "Liquidation mode: those " + liq + " firms fail and " + (totalCap - prodN) + " of capital is released to those who can use it better. Average productivity of operating firms is " + prod.toFixed(2) + "% — liquidation itself is where productivity comes from.")}</span>`);
      else lines.push(`<span class="warn">${T("利率这么低，没有一家企业“该死”——包括回报只有 1% 的那些。它们的真实回报没变，变的只是死线。", "At a rate this low, no firm “should die” — including those returning barely 1%. Their real returns did not change; only the death line did.")}</span>`);
    } else {
      lines.push(`<span class="bad">${T("再融资模式：" + zombies + " 家本该清算的企业靠借新还旧活着，锁定资本 " + lockCap + "（" + (lockCap / totalCap * 100).toFixed(0) + "%）。它们占着工人与贷款额度，平均生产率被拉到 " + prod.toFixed(2) + "%。", "Refinancing mode: " + zombies + " firms that should have been liquidated survive by borrowing to pay interest, locking " + lockCap + " of capital (" + (lockCap / totalCap * 100).toFixed(0) + "%). They hold workers and credit lines; average productivity is pulled to " + prod.toFixed(2) + "%.")}</span>`);
      if (held > 0) lines.push(T("已压 " + held + " 年：僵尸的设备老化、降价求生，回报逐年衰减（BIS 的“拥挤效应”）。注意有些企业起初健康，压几年后也滑进了僵尸区。", "Held " + held + " year(s): zombies' equipment ages and they cut prices to survive, so returns decay year by year (the BIS “congestion” effect). Note that some firms that started healthy have slid into the zombie zone."));
      if (share >= 10) lines.push(`<span class="warn">${T("僵尸份额 ≥ 10%：这就是 BIS 在 2016 年前后测到的发达经济体水平。“没有衰退”，也不再增长。", "Zombie share ≥ 10%: the level the BIS measured for advanced economies around 2016. “No recession,” and no growth.")}</span>`);
    }
    $("zs-log").innerHTML = lines.map((l) => `<div>${l}</div>`).join("");
  };

  $("zs-r").addEventListener("input", (e) => { rate = +e.target.value; paint(); });
  root.querySelectorAll("#zs-mode button").forEach((b) => b.addEventListener("click", () => {
    root.querySelectorAll("#zs-mode button").forEach((x) => x.classList.remove("on"));
    b.classList.add("on");
    cheap = b.dataset.m === "cheap";
    if (!cheap) { held = 0; firms.forEach((f) => { f.years = 0; }); }
    paint();
  }));
  $("zs-year").addEventListener("click", () => {
    if (!cheap) { cheap = true; root.querySelectorAll("#zs-mode button").forEach((x) => x.classList.toggle("on", x.dataset.m === "cheap")); }
    held++;
    firms.forEach((f) => { const effRet = f.ret * Math.pow(0.85, f.years); if (effRet < rate) f.years++; });
    paint();
  });
  $("zs-redraw").addEventListener("click", () => { draw(); held = 0; paint(); });
  paint();
}
