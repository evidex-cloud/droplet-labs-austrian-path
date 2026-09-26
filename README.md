<div align="center">

<img src="assets/logo-horizontal-dark-t.png" width="260" alt="Droplet Labs" />

# Droplet Labs · 奥派之路 / Austrian Path

**A local-first, bilingual, interactive master course on Austrian economics — from zero to thinking like an Austrian economist, and on into the new economy of network effects, social media, Bitcoin and AI.**

中文 · English · runs in any browser · no build step

</div>

> 🔗 **Live · 在线体验** — <https://evidex-cloud.github.io/droplet-labs-austrian-path/>

---

## English

**Austrian Path** takes someone with zero background and walks them, one shallow-to-deep path, to the point of *thinking like an Austrian economist* — a literate Austrian, not a credentialed expert: reading *Human Action* with a map, explaining the Great Depression and 2008 with business-cycle theory, dissecting any policy in five steps — and then aiming the whole toolkit at the world we actually live in: platforms and network effects, the attention economy, Bitcoin and stablecoins, and artificial intelligence.

### What's inside
- **6 tiers · 19 stages · 96 lessons**, each paired with an **in-browser interactive demo** (96 in total).
- **Foundations from zero**: what economics studies · the diamond–water paradox and the marginal revolution · subjective value · Böhm-Bawerk's marginal pairs · Bastiat's unseen · the division of labor.
- **The core theory**: praxeology and the action axiom · a priori vs empirical · methodological individualism · time preference and interest · roundabout production and the Hayekian triangle · heterogeneous capital · the origin of money and the regression theorem · Cantillon effects · fractional reserves and central banks · the **Austrian business cycle** (with its critics steelmanned) · entrepreneurship, competition as a discovery procedure, profit and loss, the monopoly question.
- **Systems**: the socialist calculation debate (Mises 1920, Hayek 1945, Lange) and whether big data can plan · the logic of intervention, price controls, regulation and public choice · property, externalities, spontaneously evolved law, free banking · Garrison's capital-based macro, the limits of GDP/CPI, bubbles, zombie firms · Austrians vs Keynes, Chicago, DSGE, MMT, Marx and behavioral economics.
- **Mastery**: reading the canon (Menger, *Human Action*, Hayek's arc, Rothbard, the contemporary classics) · applied history (the Great Depression, Japan, 2008/QE/2021–23, reading the Fed, China's credit cycle) · the economist's toolkit (five-step policy analysis, writing, internal debates, common Austrian mistakes, career paths, cheat sheet).
- **The New Economy through Austrian eyes**: network effects and platforms · zero-marginal-cost pricing · data vs knowledge · the attention economy, algorithms and spontaneous order, the creator economy, platform governance, memes and reflexivity · Bitcoin and the regression theorem, hard money, stablecoins and CBDCs, DeFi as codified order, cycles under a Bitcoin standard · AI and the calculation debate, AI as a capital good, entrepreneurial judgment vs computation, technological unemployment, the AI capex boom and ABCT, agent economies.
- **Stage ∞**: open problems, your opportunities, and a capstone — write an Austrian analysis by hand.
- A fixed lesson template — **Intuition → Mechanics → Demo → Analogy → Misconceptions → Quiz → Further reading** — to keep cognitive load low, with an "intuition only" reading mode, an on-page table of contents and hover cards for 260+ glossary terms.
- **Real formulas**: every worked calculation and equation is typeset with KaTeX (vendored, works offline) — present values, supply and demand, the equation of exchange, balance sheets.
- Hand-drawn **inline SVG** diagrams for the hard ideas; many demos **compute for real** (marginal-utility tables, marginal-pair pricing, Hayekian triangles, credit-expansion cycle simulators, Cantillon tracers, planner-vs-market sandboxes).
- **Bilingual** 中文 / English (toggle in the UI). Progress lives only in your browser (`localStorage`). Filter lessons by persona (Investor / Builder / Scholar / Curious).
- **Fair but committed**: an Austrian course with a clear point of view that steelmans its opponents and is candid about the school's own weak spots.

### Run it
There's no build and no dependencies — it's a static site. You only need a local server, because lesson content and demos load via dynamic `import`, which doesn't work over `file://`.

```bash
# Windows — just double-click, or:
launch.bat

# Any OS:
python -m http.server 8786
```

Then open **http://localhost:8786/**.

### Project layout
| Path | What it is |
| --- | --- |
| `index.html`, `app.js`, `styles.css` | The shell + Markdown renderer (vanilla JS), in the Droplet Labs design language shared with the sister paths |
| `math.js`, `vendor/katex/` | Formula typesetting (KaTeX, vendored) used by the app and the checker |
| `content/manifest.js` | The course map (tiers, stages, lessons, personas) |
| `content/glossary.js` | Bilingual glossary that auto-links in every lesson |
| `content/lessons/zh/<id>.md` | Chinese lessons — one Markdown file per lesson |
| `content/lessons/en/<id>.md` | English lessons — same ids |
| `demos/*.js` | One interactive demo per lesson (bilingual); `_chart.js` is the shared chart engine |
| `AUTHORING.md` | How to write a lesson/demo in this format |
| `tools/check.mjs` | Validator: structure, links, quiz, and every formula type-checked with KaTeX (`node tools/check.mjs`) |
| `assets/` | Droplet Labs logos and icons |

### Tech
Plain HTML/CSS/JavaScript — no framework, no bundler, no npm. Lessons are Markdown fetched on demand and rendered in the browser; formulas use a vendored KaTeX. Works fully offline after the first load (the web fonts are the only external request).

---

## 中文

**奥派之路** 把奥地利学派经济学——从门格尔的边际革命，到米塞斯、哈耶克、罗斯巴德，再到今天——拆成一条**从浅到深**的主线，让没有基础的人也能一步步走到「像奥派经济学家一样思考」（能读懂、能分析，而不是一张专家证书）：带着地图读《人的行动》、用商业周期理论解释大萧条与 2008、用五步法拆解任何政策——然后把整套工具箱用到我们真正生活的世界：平台与网络效应、注意力经济、比特币与稳定币、人工智能。

### 里面有什么
- **6 个层 · 19 个阶段 · 96 节课**，每节都配一个**浏览器内交互演示**（共 96 个）。
- **从零打地基**：经济学在研究什么 · 钻石与水与边际革命 · 主观价值 · 庞巴维克的边际对 · 巴斯夏的“看不见的” · 分工与比较优势。
- **核心理论**：行动学与行动公理 · 先验与经验 · 方法论个人主义 · 时间偏好与利息 · 迂回生产与哈耶克三角 · 异质资本 · 货币的起源与回归定理 · 坎蒂隆效应 · 部分准备金与央行 · **奥派商业周期理论**（含对批评者的公平陈述）· 企业家精神、作为发现程序的竞争、利润与亏损、垄断问题。
- **系统层**：社会主义计算争论（米塞斯 1920、哈耶克 1945、兰格）与“大数据能不能计划” · 干预的逻辑、价格管制、监管与公共选择 · 产权、外部性、自发演化的法律、自由银行 · 加里森的资本宏观、GDP/CPI 的局限、泡沫与僵尸企业 · 奥派 vs 凯恩斯、芝加哥、DSGE、MMT、马克思与行为经济学。
- **精通层**：读原著（门格尔、《人的行动》、哈耶克的弧线、罗斯巴德、当代经典）· 用奥派解释历史（大萧条、日本、2008/QE/2021–23 通胀、读懂美联储、中国的信用周期）· 经济学家的工具箱（五步政策分析法、写作、内部分歧、常见奥派错误、职业路径、速查表）。
- **新经济时代 · 奥派应用**：网络效应与平台 · 零边际成本定价 · 数据 vs 知识 · 注意力经济、算法与自发秩序、创作者经济、平台治理、迷因与反身性 · 比特币与回归定理、硬钱、稳定币与 CBDC、DeFi 作为代码化的秩序、比特币标准下的周期 · AI 与计算争论、AI 作为资本品、企业家判断 vs 计算、技术性失业、AI 资本开支狂潮与 ABCT、代理人经济。
- **阶段 ∞**：未解问题、你的机会，以及毕业设计——亲手写一篇奥派分析。
- 固定课模板——**直觉 → 原理 → 演示 → 类比 → 常见误解 → 自测 → 延伸**——把认知负担降到最低；支持“只看直觉版”、页内目录，260 多个术语自动加悬浮释义卡。
- **真正的公式**：每一处计算与方程都用 KaTeX 排版（已随仓库附带，离线可用）——现值、供给与需求、交易方程、资产负债表。
- 难点配**手绘内联 SVG** 图；很多演示**真算**（边际效用表、边际对定价、哈耶克三角、信用扩张周期模拟、坎蒂隆追踪、计划者 vs 市场沙盘）。
- **双语** 中文 / English（界面内切换）。进度只存在你自己的浏览器（`localStorage`）。可按学习目标（投资者 / 创业者·开发者 / 学者·学生 / 好奇者）过滤课程。
- **公平但有立场**：这是一门奥派课程，立场清楚；对手先陈述最强版本再回应，对奥派自己的软肋直言不讳。

### 怎么运行
无需构建、零依赖——纯静态网页。只需一个本地服务器（课程内容与演示按需 `import`，在 `file://` 下不可用）。

```bash
# Windows：直接双击，或：
launch.bat

# 任意系统：
python -m http.server 8786
```

然后打开 **http://localhost:8786/**。

### 技术
纯 HTML/CSS/JavaScript——无框架、无打包、无 npm。课文是 Markdown，按需加载并在浏览器里渲染；公式用随仓库附带的 KaTeX。首次加载后可完全离线使用（只有网页字体来自外部）。

---

## License

**Proprietary — © 2026 Droplet Labs. All rights reserved.** See [LICENSE](LICENSE).

This repository is shared publicly for reference. It is **not** open-source: no reuse, modification, redistribution, or derivative works without prior written permission from Droplet Labs.

<div align="center"><sub>Developed by <b>Droplet Labs</b> · Internal Only</sub></div>
