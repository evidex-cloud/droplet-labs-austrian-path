# 奥派之路 · 课程编写指南（Authoring Guide）

写课的人（人或 AI 子代理）先读这份，再照着 `content/lessons/stage1-diamonds-water.js`（中文黄金范例）与
`content/lessons/en/stage1-diamonds-water.js`（英文黄金范例）以及 `demos/marginal-utility-table.js`（演示范例）填空。
**内容与代码分离**：你只写「课文对象」和「演示 mount 函数」，绝不改 `app.js` / `styles.css` / `manifest.js` 的内核逻辑。

## 0. 课程的灵魂（写每一节之前先读）

这门课的目标是把读者从零带到「能像奥派经济学家一样思考」，并能把这套思维用到**今天**的世界——网络效应、社交媒体、比特币、AI。贯穿全课的主线只有四句话：

1. **价值是主观的**（在心里不在物里）→ 一切从边际效用与行动人的评价出发。
2. **人有目的地行动**（行动学）→ 经济规律是从行动逻辑演绎出来的，不是统计拟合出来的。
3. **价格传递知识**（哈耶克）→ 市场是一个发现过程，不是一张均衡快照；没有价格就没有经济计算。
4. **时间与不确定性无法消去**（资本结构、时间偏好、企业家判断）→ 人为压低利率会撒谎，周期由此而来。

每一节都要让读者感到「这节课是这条主线上的一颗珠子」，并明确指出它和前后珠子怎么串（用「阶段 X.Y」交叉引用）。

**公平但有立场**：这是一门奥派课程，立场清楚；但每次批评主流（凯恩斯、芝加哥、DSGE、MMT、行为经济学）时，要**先用对方最强的版本陈述对方**（steelman），再回应。不要稻草人，不要嘲讽。奥派自己的软肋（永久熊、恶性通胀预言失败、教条主义、经验研究薄弱）要坦率写出来。

## 1. 一节课 = 一个默认导出的对象

文件放在 `content/lessons/stageX-<id>.js`（中文）与 `content/lessons/en/stageX-<id>.js`（英文，同名），结构如下（字段顺序照范例）：

```js
export default {
  id: "diamonds-water",         // 与 manifest 里的 id 完全一致
  stage: 1, order: 1,
  title: "钻石与水：边际革命怎么解开千年悖论",   // 与 manifest 的 title / titleEn 一致
  difficulty: "intro",          // 所属层 id：intro / core / systems / mastery / newera / infinity（星级在 manifest 里）
  prereqs: ["what-economics-studies"], // 前置课 id（会渲染成可点链接）；可为 []
  oneLiner: "一句话点睛，可含 **加粗** 与 `代码`。150–250 字，讲清这节课解决的那个问题。",
  intuition: `直觉解释：零基础也能懂，中文 900–1400 字 / 英文 1000–1600 词，结尾用一段「**这一节，我们拆成 N 块：**」+ 一组 - 列表当“主干地图”（N = 4~6，与 mechanics 的 ### 小标题一一对应，用 ①②③ 编号）。`,
  mechanics: `深入原理：用 ### ① ② ③… 小标题拆 4~6 个分支，中文 3000–4500 字 / 英文 2500–4000 词；至少一张内联 SVG 图（见 §2）；可用 $$ 公式块。`,
  demo: "marginal-utility-table", // 对应 demos/marginal-utility-table.js；每节都必须有演示
  analogy: `一个贴近生活的类比（300–600 字），把整节课压成一个画面。`,
  misconceptions: ["**“误解原文。”** —— 纠正……", "……"],  // 4~5 条，每条 60–150 字
  quiz: [{ q: "题干", options: ["A","B","C","D"], answer: 1, explain: "**解析**……" }], // 4~5 题，正确答案索引要打乱（不要全是 1）
  further: [{ label: "来源名（一句话说明）", url: "https://…" }],  // 3~5 条权威外链（mises.org、econlib.org、cato.org、期刊、原著全文）
};
```

**英文版**是同一课的完整英文重写（不是逐句翻译）：同样的结构、同样的 id / demo / 数字例子 / 图示；`title` 用 manifest 的 `titleEn`；行文要像英语母语的经济学教师写的。SVG 图里的文字要换成英文。

## 2. 正文支持的极简 Markdown

`**加粗**`（正文里会自动荧光高亮）· `` `代码` `` · `[文字](https链接)` · `- 列表` · `> 引用` · `### 小标题` · 空行分段 ·
`$$ 公式`（以 `$$` 开头的块＝公式框，块内每行用换行；公式里别用 `**`）。

**内联图示**：以 `<figure>` 开头、独立成段（前后空行）的块会原样透传。格式：
`<figure><svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif">…</svg><figcaption>一句话图注</figcaption></figure>`
颜色只用 CSS 变量：`var(--ink)` 标题、`var(--muted)` 次要字、`var(--orange)`/`var(--orange-ink)`/`var(--orange-soft)`/`var(--orange-line)` 品牌金、`var(--blue)`/`var(--blue-soft)` 冷色对照（需求线、主流学派）、`var(--green)`/`var(--green-soft)`、`var(--red)`/`var(--red-soft)`、`var(--surface-2)` 浅底、`var(--line)` 边线。**每节 mechanics 至少一张图**，画“机制”而不是装饰：哈耶克三角、供需曲线、生产阶段、坎蒂隆传导链、时间线、对比表。

## 3. 知识卡片与超链接（自动，无需手动写）

- **术语小卡片**：`content/glossary.js` 里的词，在每节**首次出现**时自动加虚线下划线 + 悬浮释义。
  → 你只要在正文**自然地用上这些术语**（主观价值、边际效用、时间偏好、自然利率、错误投资、坎蒂隆效应、经济计算、知识问题、自发秩序、企业家精神、警觉、判断、网络效应……）即可，渲染器会处理。
  → 若用到术语表里没有的重要新词，可在 `glossary.js` 追加一条（中英各 terms+def，def 内用弯引号 “ ”）。**不要改已有条目。**
- **课程交叉引用**：在正文写「阶段 X.Y」（如 `阶段 5.2`；英文版写 `Stage 5.2`）会自动变成跳转链接。**多用它把知识串成网**，
  X=阶段号、Y=该阶段第几节（见 manifest 顺序）。每节至少 3 处交叉引用：至少一处回指前面、一处前指后面（尤其要前指阶段 15–18 的新经济应用）。

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

改了 `lessons/` 或 `demos/` 后，把 `app.js` 里的 `const V` +1；改 `app.js`/`styles.css` 后把 `index.html` 的 `?v=N` +1；
改 `manifest.js`/`glossary.js` 后把 `app.js` 顶部对应 `?v=` 和 `index.html` 的 `app.js?v=` 一起 +1。

## 7. 质量自检

- [ ] 七个区块齐全（直觉、原理、演示、类比、误解、自测、延伸），且与范例深度相当（中文正文合计 ≥ 6000 字符；英文正文合计 ≥ 9000 字符——范例中文约 6800、英文约 12000）。
- [ ] intuition 结尾的「拆成 N 块」列表与 mechanics 的 ### 小标题一一对应。
- [ ] 至少 3 处「阶段 X.Y」交叉引用（英文版 `Stage X.Y`）；自然用上若干术语表词。
- [ ] mechanics 至少一张内联 SVG 图，颜色只用 CSS 变量；英文版的 SVG 文字是英文。
- [ ] 演示能跑、真算、双语、用既有 CSS 类，且有 `.demo-tip`；`export default function mount(root, lang)`。
- [ ] 数字例子正确；人名/书名/年份正确；批评对手先 steelman。
- [ ] quiz 的 `answer` 索引对得上正确选项且分布打乱，`explain` 给出理由。
- [ ] 文件是合法的 ES 模块（模板字符串里不要出现未转义的反引号 `` ` `` 和 `${`；用 ' 或 “ ” 替代）。
