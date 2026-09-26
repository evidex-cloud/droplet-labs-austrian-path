# 奥派之路 · 课程编写指南（Authoring Guide · v2, 2026-09）

写课的人（人或 AI 子代理）先读这份，再照着黄金范例填空：
`content/lessons/zh/diamonds-water.md`、`content/lessons/en/diamonds-water.md`（课文），`demos/marginal-utility-table.js`（演示），
`content/lessons/zh/time-preference.md`（公式写法）。
**内容与代码分离**：你只写 Markdown 课文和演示 mount 函数，绝不改 `app.js` / `styles.css` / `math.js` / `content/manifest.js` 的内核逻辑。
UI 与姊妹课程（Satoshi Path、Options Path、Finance Path）共用 Droplet Labs 设计语言；本课的强调色是金色（`--orange*` 变量）。

## 0. 课程的灵魂（写每一节之前先读）

这门课的目标是把读者从零带到「能像奥派经济学家一样思考」，并能把这套思维用到**今天**的世界——网络效应、社交媒体、比特币、AI。贯穿全课的主线只有四句话：

1. **价值是主观的**（在心里不在物里）→ 一切从边际效用与行动人的评价出发。
2. **人有目的地行动**（行动学）→ 经济规律是从行动逻辑演绎出来的，不是统计拟合出来的。
3. **价格传递知识**（哈耶克）→ 市场是一个发现过程，不是一张均衡快照；没有价格就没有经济计算。
4. **时间与不确定性无法消去**（资本结构、时间偏好、企业家判断）→ 人为压低利率会撒谎，周期由此而来。

每一节都要让读者感到「这节课是这条主线上的一颗珠子」，并明确指出它和前后珠子怎么串（用 `[[lesson-id|阶段 X.Y]]` 交叉引用，见 §3）。

**公平但有立场**：这是一门奥派课程，立场清楚；但每次批评主流（凯恩斯、芝加哥、DSGE、MMT、行为经济学）时，要**先用对方最强的版本陈述对方**（steelman），再回应。不要稻草人，不要嘲讽。奥派自己的软肋（永久熊、恶性通胀预言失败、教条主义、经验研究薄弱）要坦率写出来。

## 1. 一节课 = 两个 Markdown 文件

`content/lessons/zh/<id>.md` 与 `content/lessons/en/<id>.md`（同一个 id，UTF-8，LF 换行）：

```markdown
---
id: diamonds-water
prereqs: what-economics-studies
demo: marginal-utility-table
---

# 钻石与水：边际革命怎么解开千年悖论

## @hook
一句话点睛（150–250 字），讲清这节课解决的那个问题；可含 **加粗**。

## @intuition
直觉解释：零基础也能懂。结尾用「**这一节，我们拆成 N 块：**」+ 一组 - 列表当主干地图（N = 4~6，与 mechanics 的 ### 小标题一一对应，用 ①②③ 编号）。

## @mechanics
### ① 第一个分支
……（4~6 个 ### 小标题；至少一张内联 SVG 图；计算与方程用公式，见 §2）

## @analogy
一个贴近生活的类比（300–600 字），把整节课压成一个画面。

## @misconceptions
- **“误解原文。”** —— 纠正……
（4~5 条）

## @quiz
1. 题干？
   - [ ] 错误选项
   - [x] 正确选项
   - [ ] 错误选项
   - [ ] 错误选项
   > **解析**……（答题后显示）
（4~5 题，每题 4 个选项、恰好一个 [x]；界面会打乱选项顺序，所以题干里别写“选项 A/B”）

## @further
- [来源名（一句话说明）](https://…)
（3~5 条权威外链：mises.org、econlib.org、cato.org、期刊、原著全文）
```

- `# 标题` 必须与 manifest 的 `title`（中文）/ `titleEn`（英文）**逐字一致**。`prereqs` 用逗号分隔；`demo` 是 `demos/<name>.js` 的文件名。
- 可选区块（渲染器支持，旧课没有也没关系）：`## @bridge`（我们走到哪了）、`## @takeaways`（本节要点列表）、`## @next`（引出下一课的问题）。
- **英文版**是同一课的完整英文重写（不是逐句翻译）：同样的结构、同样的 id / demo / 数字例子 / 图示 / 公式 / 测验（同样的题、同样的顺序）；SVG 图里的文字换成英文；英文文件里不出现中文字符（引用中文人名时例外）。

### 1.1 正文支持的 Markdown

`**加粗**`（渲染为荧光高亮）· `*斜体*`（书名、强调）· `` `代码` `` · `[文字](https://…)` · `- 列表` / `1. 有序列表`（可缩进 2 格嵌套一层）·
`> 引用` · `### 小标题` / `#### 小标题` · GFM 表格 `| a | b |` · 空行分段。行内只允许 `<sub> <sup> <kbd> <br> <mark> <small>` 标签。

- **注意单个星号**：`*` 成对出现会变成斜体。写变量 r*、P* 时一律用公式 `\(r^{*}\)`，不要写裸的 `r*`。
- **提示框（callout）**：以 `> [!TYPE] 可选标题` 开头的引用块：`KEY` 核心结论 · `EXAMPLE` 算一算 · `THINK` 想一想（问题与答案之间放一行 `> ---`，答案点开才显示）·
  `RECALL` 回顾 · `WARN` 注意 · `HISTORY` 历史 · `DEEP` 深挖一层 · `FACT` 最新现状（写明日期）· `FORMULA` 公式卡。
- **内联演示**：独占一行的 `::demo[名字]` 会把 `demos/名字.js` 挂在那个位置（主演示仍写在 front matter 的 `demo:` 里，显示在「动手玩一玩」）。
- **内联图示**：以 `<figure>` 开头、独立成段的块原样透传（块内不能有空行）：
  `<figure><svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">…</svg><figcaption>一句话图注</figcaption></figure>`
  颜色只用 CSS 变量：`var(--ink)` 标题、`var(--muted)` 次要字、`var(--orange)`/`var(--orange-ink)`/`var(--orange-soft)`/`var(--orange-line)` 金色强调、
  `var(--blue)`/`var(--blue-soft)` 冷色对照（需求线、主流学派）、`var(--green)`/`var(--green-soft)`、`var(--red)`/`var(--red-soft)`、`var(--surface-2)` 浅底、`var(--line)` 边线；
  深色底上的白字用 `fill="#fff"`。字体不用写（样式表统一成 Outfit）。`<marker id>` 等 SVG id 以本课 id 开头，避免同页冲突。图注里可以用 `\( … \)` 公式和 `**加粗**`。
  **每节 mechanics 至少一张图**，画“机制”而不是装饰：哈耶克三角、供需曲线、生产阶段、坎蒂隆传导链、时间线、对比表。

## 2. 公式：写成真正的数学式（KaTeX）

所有公式、方程与分步计算都用 KaTeX 排版（`vendor/katex`，离线可用；`math.js` 被 app 与校验器共用，所见即所验）。**不要**把公式写成纯文本或 `代码`。

- **行内公式**：`\( … \)`，例：`\(MV = PT\)`、`\(Q_{d} = 100 - 2P\)`、`\(r^{*}\)`。
- **独立公式块**：独占一段的 `$$ … $$`（可跨多行）。多行计算用 `aligned` 对齐：

```markdown
$$
\begin{aligned}
\text{现值} &= \dfrac{\text{未来值}}{1 + \text{利率}} \\
100 &= \dfrac{105}{1.05}
\end{aligned}
$$
```

- **`$` 永远只是美元符号**：`$100` 写在正文里就是钱；公式里的美元写 `\$2.00`。行内公式只能用 `\( … \)`，不能用 `$x$`。
- 文字放进 `\text{…}`（中文也一样：`\text{净现值}`）；单字母变量保持斜体（P、Q、r、g、M、V）；缩写用 `\text{MC}` 或宏 `\NPV`、`\PV`、`\GDP`（定义在 `math.js`）。
- 符号：× → `\times`，÷ → `\div` 或 `\dfrac{}{}`，≈ → `\approx`，− → `-`，→ → `\;\rightarrow\;`，% → `\%`，½ → `\tfrac{1}{2}`，上下标 `^{2}` / `_{d}`（不要用 ² ₁ 之类的 Unicode 上下标）。
- 版面：正文栏约 660px 宽。长式子拆成多行对齐，不要让一行超出；中英两版拆法保持一致。
- 资产负债表之类的“表”可以写成 `\begin{array}{l|l}` 的 T 型账户，或直接用 GFM 表格。
- **用 Edit / Write 工具改公式，别用 shell heredoc / sed**——shell 会吞掉反斜杠。

## 3. 知识卡片与超链接

- **术语小卡片**：`content/glossary.js` 里的词，在每节**首次出现**时自动加虚线下划线 + 悬浮释义。你只要在正文**自然地用上这些术语**即可。
  若用到术语表里没有的重要新词，可在 `glossary.js` 追加一条（`{ zh:{n:[…],d:"…"}, en:{n:[…],d:"…"} }`，def 内用弯引号 “ ”）。**不要改已有条目。**
- **课程交叉引用**：写成 `[[lesson-id|阶段 X.Y]]`（英文版 `[[lesson-id|Stage X.Y]]`）——显示为你写的文字，悬浮显示课名，点击跳转；
  写成 `[[lesson-id]]` 则显示“编号 + 课名”的小标签。id 必须存在于 manifest（校验器会查）。
  **多用它把知识串成网**：每节至少 3 处，至少一处回指前面、一处前指后面（尤其要前指阶段 15–18 的新经济应用）。

## 4. 写作风格（务必遵守）

- **既专业有深度，又用大白话和例子讲清**。每个抽象概念都配一个**具体数字例子**（几桶水、几匹马、利率从 5% 压到 2%、100 美元新钱怎么流）。
- 直觉版要让**零基础**也能懂；深入原理可上原著概念与术语，但每个术语都要先说“它在说什么”。
- **引用原著要准**：人名、书名、年份要对（门格尔 1871《国民经济学原理》；庞巴维克 1884–89《资本与利息》；米塞斯 1912《货币与信用理论》、1920《社会主义国家的经济计算》、1949《人的行动》；哈耶克 1931《价格与生产》、1937《经济学与知识》、1944《通往奴役之路》、1945《知识在社会中的运用》、1976《货币的非国家化》；罗斯巴德 1962《人、经济与国家》、1963《美国大萧条》；柯兹纳 1973《竞争与企业家精神》；拉赫曼 1956《资本及其结构》；加里森 2001《时间与货币》；德索托 1998《货币、银行信贷与经济周期》；霍普 2001《民主：失败的上帝》）。不确定的具体数字宁可写“约”“大致”，不要编造精确统计。
- 多用 **加粗** 标出关键结论；列表化、口语化；避免空话套话。
- **平衡与诚实**：批评对手先 steelman；奥派的失败预言与内部分歧要坦率。不神化任何人。
- **新经济时代（阶段 15–18）**：把前面学到的工具**逐个点名**地用上（“这就是阶段 1.2 的主观价值论”“回到阶段 7.2 的知识问题”），指出奥派解释力强的地方，也指出它需要发展的地方。涉及 AI 时，把 AI 当作资本品与工具来分析，而不是当作会“行动”的主体。
- 涉及投资（阶段 10.5、17、18.5）：只讲思维框架与历史案例，**不构成投资建议**，并在正文说明。

## 5. 演示 = `demos/<name>.js`，默认导出 `mount(root, lang)`

- 双语：`const en = lang === "en"; const T = (zh, e) => (en ? e : zh);` 然后所有可见文案都走 `T()`。
- 需要在演示里显示公式时：`import { tex } from "../math.js";` 然后 ``tex(String.raw`\frac{a}{b}`, true)``（与课文同一套 KaTeX）。
- 只用 `styles.css` 里已有的类：`.demo`、`.demo-head`、`.demo-block`、`.demo-label`、`.demo-row`、`.demo-grid`、`.demo-grid-3`、`.demo-slider`、`.demo-seg`（`button.on`）、`.demo-btn`（`.active`）、`.demo-btns`、`.demo-out`、`.demo-log`（`.ok/.bad/.warn`）、`.demo-tip`、`.demo-meta`、`.demo-bar`、`.stat-row/.stat`（`.k/.v`，`.v.pos/.neg/.acc`）、`.bar2`（`.lab/.track/.fill/.val`）、`.cmp/.cmp-3/.cmp-cell`（`.hl/.cold`）、`.scn/.scn-q/.scn-meta`、`.pill`（`.ok/.bad`）、`.stages/.stage-bar`（`.lab/.track/.fill/.fill.ghost/.val`，哈耶克三角/生产阶段用）、`.person`（`.yr`）、`.tl/.tl-item`（`.when`）、`.strip/.strip-cell`、`.chart`、`.done-banner`。需要新类就加到 styles.css 末尾，别改旧类。
- **曲线图**：`import { lineChart, chartBlock } from "./_chart.js";`
  - `lineChart({fns:[{f, cls, label}], lo, hi, xlabel, markerX, markerLabel, forceZero, uid})` → `{svg, ymin, ymax}`；
    `f(x)` 返回 y；`cls`：`'line'`(金)/`'line2'`(蓝)/`'line3'`(红)/`'line4'`(绿)。`chartBlock(res, [[color,label],…])` 加图例（color 用 `"var(--orange)"` 等）。
  - 例：供需曲线 `lineChart({fns:[{f:(q)=>100-2*q, cls:'line2'},{f:(q)=>20+1.5*q, cls:'line'}], lo:0, hi:40, xlabel:'数量', forceZero:true})`
  - 需要更特别的图（哈耶克三角动画、周期时间线）再自己拼 `<svg>`，颜色走 CSS 变量。
- 演示要**真算**、可交互（滑块/按钮/分段切换），并给一句 `.demo-tip` 点出“看什么”。演示的 DOM id 用本演示专属前缀（如 `mu-`），避免与页面其它元素冲突。
- 共享引擎文件名以 `_` 开头（`_chart.js`），不会被当作课程演示直接加载。
- 演示是**思维实验的沙盘**：边际效用表、边际对定价、哈耶克三角拉伸、信用扩张模拟、坎蒂隆效应追踪、政策五步法自检、网络效应估值、AI 计划者沙盘……让读者动手改参数看结论怎么变。

## 6. 缓存（开发时）

改了 `content/lessons/` 或 `demos/` 后，把 `app.js` 里的 `const V` +1；改 `app.js` / `styles.css` 后把 `index.html` 里对应的 `?v=` +1；
改 `manifest.js` / `glossary.js` 后把 `app.js` 顶部对应 import 的 `?v=` 与 `index.html` 的 `app.js?v=` 一起 +1。

## 7. 质量自检

先跑 `node tools/check.mjs <lesson-id>`（不带 id = 全课程）：它检查 front matter、标题与 manifest 一致、区块齐全、测验格式与中英一致、
`[[链接]]` 目标存在、`<figure>` 内无空行、演示能 import，并用与网页相同的 KaTeX **逐个排版检查每个公式**。必须 0 个 ✗。然后人工核对：

- [ ] 七个区块齐全（hook、直觉、原理、类比、误解、自测、延伸），与范例深度相当。
- [ ] intuition 结尾的「拆成 N 块」列表与 mechanics 的 ### 小标题一一对应。
- [ ] 至少 3 处 `[[…]]` 交叉引用；自然用上若干术语表词。
- [ ] mechanics 至少一张内联 SVG 图，颜色只用 CSS 变量；英文版的 SVG 文字是英文。
- [ ] 每个计算都是 KaTeX 公式，桌面宽度下不溢出正文栏。
- [ ] 演示能跑、真算、双语、用既有 CSS 类，且有 `.demo-tip`；`export default function mount(root, lang)`。
- [ ] 数字例子正确；人名/书名/年份正确；批评对手先 steelman。
- [ ] 在浏览器里打开这一课（`launch.bat` 或 `python -m http.server 8786`），中英各看一遍。
