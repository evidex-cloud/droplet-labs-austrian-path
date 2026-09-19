export default {
  id: "ai-bubble-abct",
  stage: 18,
  order: 5,
  title: "An AI Bubble? Reading the Capex Frenzy with ABCT",
  difficulty: "newera",
  prereqs: ["abct-history", "markets-bubbles"],

  oneLiner:
    "In 2023–25 a handful of hyperscalers spent roughly hundreds of billions of dollars a year on capital equipment, Nvidia's market value reached several trillion dollars, data-center and power construction was booked years ahead, and **circular financing** arrangements among chip makers, cloud providers and model labs were widely reported. Is this the railways of the 1840s, the internet of the 1990s, or neither? This lesson applies ABCT (Stages 5.1, 5.2) **honestly** to the present: a genuine innovation can **coexist** with a credit-shaped boom — the railways were real and so was the crash of 1847; fiber was real and so was the dark fiber of 2001. To answer “is this malinvestment?” you ask four testable questions: **what is the interest rate doing** (Stage 3.5), **where does the money come from** (retained earnings, debt or credit expansion — decisive for ABCT), **how long is the asset's duration** (Stage 10.3), and **are the errors clustered?** And you watch for the most common Austrian trap — calling every boom a bubble (Stage 14.4). This lesson is framework and history only; **it is not investment advice.**",

  intuition: `
Start with the picture of 2023–25, every number prefixed with “roughly,” because they change every quarter:

- **Capital spending**: Microsoft, Alphabet, Amazon and Meta together spent roughly two hundred billion dollars-plus in 2024, with 2025 guidance summing to roughly three to four hundred billion, most of it on AI data centers, GPUs and power. Add Oracle, CoreWeave and others, plus the Chinese cloud providers, and global AI-related capex is widely estimated in the hundreds of billions a year.
- **Market value**: Nvidia's market capitalization exceeded four trillion dollars at points in 2025, making it one of the largest listed companies in history; its data-center revenue had roughly doubled annually for more than two years.
- **Power and land**: reports across the US of multi-year queues for grid connections; a data-center developer signing to restart a nuclear plant; gigawatt-scale campuses announced.
- **Circular financing**: in the second half of 2025 several arrangements were reported — a chip maker investing tens of billions in a model lab, which uses the money to buy chips from that chip maker; cloud providers signing multi-year compute contracts worth hundreds of billions with labs whose current revenue is far below those commitments; GPU-cloud companies borrowing against their GPUs as collateral. We say “reported” and “roughly” because the terms and sizes keep evolving.

Anyone who has studied ABCT will instinctively shout “bubble.” **Hold that instinct.** Stage 14.4 catalogued the most common Austrian mistakes: the permabear, calling every boom a credit bubble, treating every crash as a vindication of ABCT. ABCT is a theory with a **specific trigger**: an artificially low interest rate misleads entrepreneurs about time, stretching the structure of production beyond what society's real saving can support (Stage 5.1). It is not “whatever rises fast must fall.”

So the right question is not “is it a bubble?” but: **how much of the shape of this boom is set by real saving and real demand, and how much by credit conditions?** History offers three reference points:

- **Britain's railway mania of the 1840s**: railways were real and remade Britain; but in 1845–47, driven by low interest rates and shares bought on installment, Parliament approved far more mileage than the economy could bear; when credit tightened in 1847 the crash came and many lines were never finished. Real innovation + credit boom + crash + real use afterward.
- **The internet and fiber of the 1990s**: the internet was real; but the fiber laid in 1998–2000 under low rates and equity mania was, by 2002, only a small fraction lit (“dark fiber”); Global Crossing and WorldCom went bankrupt; and then that fiber was consumed in the video and cloud era of 2005–15. **The innovation was real and so was the overbuilding — no contradiction.**
- **Electrification and radio in the 1920s**: the same structure.

The job of this lesson is to give you a **testable checklist**, not a conclusion. ABCT says that to judge whether a boom is malinvestment you look at four things: the interest rate relative to the natural rate (Stage 3.5), the source of financing, the duration of the assets (Stage 10.3), and whether errors are clustered. All four are observable today, and the answers they give **do not agree** — which is exactly what honest analysis should look like.

One spoiler, the most valuable Austrian insight here: **the same technology investment made from retained earnings and made from credit expansion are two different things.** In the first case society really did save and hand resources to the future; in the second the interest rate lied and resources were pulled from elsewhere without anyone knowing. A striking feature of AI capex through 2025 is that it was **mostly** paid from the operating cash flow of a few enormously profitable companies — fundamentally unlike the telecom carriers of 1999 financed by junk bonds and IPOs. But that feature began to change in 2025: bond issuance, GPU-backed loans, private credit and circular arrangements rose in share. **Watching the financing structure change is closer to the core of ABCT than watching market values change.**

**In this lesson we break it into six pieces:**

- **① The picture: the 2023–25 capex frenzy, in “roughlies”**
- **② Railways, electricity, fiber: real innovation and credit booms coexist**
- **③ Questions one and two: what is the rate doing? Where does the money come from?**
- **④ Questions three and four: how long is the duration? Are the errors clustered?**
- **⑤ The Austrian trap: not every boom is a bubble**
- **⑥ What would confirm or refute the ABCT reading — and why this is not investment advice**
`,

  mechanics: `
### ① The picture: the 2023–25 capex frenzy, in “roughlies”

Drawing the structure of the boom clearly matters more than memorizing any single number. Money flows down the chain from Stage 18.2:

- **Demand end**: consumers and firms pay for AI services. In 2025 the leading model labs' annualized revenue was reported in the billions to low tens of billions of dollars — against annual capex in the hundreds of billions, **the gap between revenue and investment is the boom's most conspicuous feature.**
- **Midstream**: cloud providers build data centers, buy GPUs, sign power contracts. Their logic is “build first, demand will come” — since construction takes two or three years, waiting for demand to be confirmed means being too late. That is a judgment about **time**, exactly the kind ABCT cares about.
- **Upstream**: Nvidia, TSMC, equipment makers, utilities and builders receive the orders. Upstream margins are extreme, imputed upward from downstream expectations (Stage 18.2 ①).
- **Financing**: through 2025, the big four's capex was mostly covered by operating cash flow (together they generate hundreds of billions a year); but from 2025 a visible shift appeared — large bond issues, GPU-collateralized private credit, off-balance-sheet joint ventures, and circular commitments between model labs and chip makers or cloud providers.

“Circular financing” deserves its own paragraph, because from an ABCT standpoint it is the signal most worth watching. The reported pattern: chip maker A invests in lab B, which commits to buy chips from A; cloud provider C gives B a multi-year compute contract worth hundreds of billions, which B's revenue cannot remotely cover, yet C builds to the contract and books it as backlog; GPU-cloud company D borrows against A's chips and pays A. Each link on its own can be ordinary business; **taken together, the same money circulates several times around the chain, and each lap is recorded as “demand.”** This need not be fraud, but it means that some of the demand on paper is **financed by the suppliers themselves** rather than supported by final consumers' valuations. Logically it is the same structure as the “vendor financing” of the 1990s, when telecom equipment makers lent to carriers who used the money to buy their equipment.

### ② Railways, electricity, fiber: real innovation and credit booms coexist

Where ABCT is most often misused is as a theory that “the technology is fake.” It never was. Stage 5.2 showed that boom-time investments are rational **at the prevailing rate** — the error is not entrepreneurial stupidity but a lying interest rate. So a genuine, world-changing technology can be built **too much, too early and too concentrated** during a credit boom. Three cases, each with two sides:

**The railway mania (1844–47).** British railway mileage rose from roughly two thousand miles in 1840 to roughly six thousand by 1850. Drivers: low Bank of England rates in the early 1840s, shares purchasable with a ten-percent deposit and installments, and the correct narrative that “railways change everything.” In 1845 alone Parliament approved more new mileage than all existing lines combined. In 1847 the Bank tightened as gold flowed out, rates rose, installment calls came due, investors defaulted en masse, railway shares collapsed, and many approved lines were never built. **The innovation was real**: the lines that were built formed the skeleton of the British economy for a century. **The malinvestment was also real**: vast capital went into duplicate, parallel lines to nowhere.

**Fiber and telecom (1996–2002).** Internet traffic really was growing; the claim that it “doubles every hundred days” (later shown to be exaggerated) made it into government reports. Low rates, equity mania and tens of billions in “vendor financing” from equipment makers to carriers drove the laying of tens of millions of kilometers of fiber worldwide. By 2001–02 the reported share of fiber actually lit was in the single digits; Global Crossing, WorldCom and Level 3 went bankrupt or restructured, and hundreds of billions in equity and debt were wiped out. **Then**: after 2005 nearly all that fiber was consumed by the video and cloud era, and because it was already sunk it made bandwidth extraordinarily cheap — some argue it indirectly subsidized the entire later application layer. **Overbuilding destroyed the investors and benefited the later users.**

**The 1920s: electrification, automobiles, radio.** The same structure: real general-purpose technologies, plus the Fed's easing of 1924 and 1927 (Rothbard's analysis in Stages 5.4 and 13.2), plus stock bought on margin, then 1929.

The common lesson of the three: **“the technology is real” and “this is malinvestment” are not opposing propositions.** ABCT does not care whether the technology is real; it cares whether **the timing, scale and structure of the build-out were shaped by a distorted interest rate.** AI's champions say “this time the technology is real.” That sentence was equally true in 1846 and 1999, and equally unable to answer the question.

<figure><svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Real innovation + credit boom: building runs ahead of use; after the crash, use catches up</text><line x1="50" y1="250" x2="600" y2="250" stroke="var(--line)" stroke-width="1.5"/><text x="600" y="268" text-anchor="end" font-size="10.5" fill="var(--muted)">time →</text><path d="M50 240 C 150 235, 200 200, 250 90 C 270 60, 285 60, 300 110 C 320 170, 340 210, 380 215 C 440 220, 520 225, 600 230" fill="none" stroke="var(--orange)" stroke-width="3"/><text x="255" y="52" font-size="11" fill="var(--orange-ink)" font-weight="600">capex / construction</text><path d="M50 245 C 200 243, 300 235, 380 200 C 450 170, 520 110, 600 60" fill="none" stroke="var(--blue)" stroke-width="3" stroke-dasharray="7 4"/><text x="530" y="52" font-size="11" fill="var(--blue)" font-weight="600">real use / revenue</text><rect x="200" y="70" width="130" height="150" fill="var(--red)" opacity=".08" rx="6"/><text x="265" y="240" text-anchor="middle" font-size="10.5" fill="var(--red)">building ≫ use: the malinvestment zone</text><line x1="300" y1="70" x2="300" y2="250" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="4 3"/><text x="300" y="290" text-anchor="middle" font-size="10.5" fill="var(--red)">credit tightens / crash</text><text x="130" y="290" text-anchor="middle" font-size="10.5" fill="var(--muted)">low rates + correct narrative</text><text x="470" y="290" text-anchor="middle" font-size="10.5" fill="var(--muted)">sunk cost makes use cheap</text><text x="320" y="312" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">Railways 1847 · fiber 2001 · ? — the technology is real, so is the overbuilding; no contradiction</text></svg><figcaption>The shared shape of three “real innovation + credit boom” episodes: the construction curve (gold) races far ahead of the use curve (blue) under low rates and a correct narrative; construction collapses when credit tightens; use then catches up and consumes the sunk capital. ABCT is about the cause of the red zone.</figcaption></figure>

### ③ Questions one and two: what is the rate doing? Where does the money come from?

ABCT's trigger is **the market rate pushed below the natural rate** (Stage 3.5). So the first testable question: where was the rate when this boom started and when it accelerated?

- **2020–21**: policy rates near zero, the ten-year Treasury yield briefly below 1%, the Fed's balance sheet expanded by roughly four trillion dollars. This was the backdrop for the first big AI-infrastructure investment decisions (the 2020–22 passage of Stage 5.4). Low rates matter most for long-duration assets — Stage 18.2 computed that a data center's present value rises by roughly forty percent when the rate falls from 8% to 1%.
- **2022–24**: policy rates rose above 5%. By ABCT this should have been when malinvestment surfaced — yet AI capex **accelerated** over exactly this period. That is a genuine challenge to the simple version of ABCT, and it must be faced honestly. Two candidate explanations: first, the large-model wave after November 2022 supplied a **new, real demand signal** strong enough to justify investment even at high rates; second, the investors were a few companies with enormous cash, whose investment decisions are insensitive to market rates — which leads to the second question.
- **2024–25**: rates began to fall but remained well above the 2010s; long rates stayed high on fiscal deficits.

The second question — **where does the money come from** — is decisive for ABCT and bears repeating. In the Mises–Hayek mechanism, malinvestment originates in **funds created by credit expansion with no corresponding saving** (Stages 4.4, 5.1). So:

- **Retained earnings**: if a company builds a data center from cash it earned, that is **real saving** — its shareholders forwent dividends or buybacks and handed resources to the future. It may be a mistaken judgment, but it is not malinvestment in the ABCT sense, because no interest rate lied; it is an entrepreneurial bet in the sense of Stage 6.3, borne by shareholders if wrong. Through 2025, most big-four capex fell in this category. **That is the single most important difference between the AI boom and the telecom boom of 1999.**
- **Debt and equity raised in markets**: still other people's saving — unless that saving was itself created by credit expansion. The test is whether the rates on those bonds and loans reflect real time preference or a central bank's balance sheet.
- **Credit expansion**: credit created from nothing by the banking system, liquidity released by central-bank asset purchases. This kind of money flowing into long-duration assets is the classic ABCT path.

The change in 2025 is exactly here: **the financing structure is moving from the first category toward the second and third.** Large bond issues, GPU-backed loans, private-credit funds, off-balance-sheet ventures and circular commitments are all signals of capex exceeding operating cash flow. What an Austrian should say is not “this is a bubble” but: **the more a boom's financing depends on credit rather than profit, the more likely its shape has been distorted by the interest rate.** The “financing source” switch in the demo is precisely this variable.

### ④ Questions three and four: how long is the duration? Are the errors clustered?

**Duration** (Stages 10.3, 18.2). ABCT's malinvestment concentrates in the stages **furthest from consumption, with the longest duration** — because that is where present values inflate most when rates fall. The AI stack has a peculiar duality here:

- Its **construction chain** is extremely long (lithography to application, five to ten years), making it highly rate-sensitive — the classic ABCT profile.
- But its most expensive asset — the GPU — has an **extremely short economic life** (three to six years). That is nothing like a railway embankment or a fiber conduit: fiber can wait underground for a decade until demand arrives and it gets lit; a GPU cannot wait, because in four years it is obsolete.

The implication of the duality: **if AI capex is malinvestment, it will surface faster than the railways or fiber did, and the losses will be more concentrated and harder for latecomers to scavenge.** The unfinished railway embankments of 1847 were usable decades later; the dark fiber of 2002 was lit by 2010; but if the GPUs of 2024 have not found paying demand by 2028, they are not “sunk capital waiting to be used” — they are a pile of outdated silicon. Depreciation as a real cost runs ABCT's clock faster.

**Clustering of errors.** What separates ABCT from “individual entrepreneurs make mistakes” is the **cluster** (Stage 5.2): someone in the market is always wrong, and normally the errors cancel; only when a shared signal (the rate) misleads everyone do errors pile up in one direction. Observe 2023–25:

- **The concentrated side**: nearly every large technology company, at the same time and in the same direction (data centers, GPUs, power), committing unprecedented capital; upstream supply concentrated in one or two firms; financing arrangements beginning to intertwine. This has the shape of a cluster.
- **The dispersed side**: investors are betting on **different things** — some on training, some on inference; some on closed models, some on open; some on the application layer, some on infrastructure; some building their own chips to hedge Nvidia. If malinvestment occurs it need not be “everyone was wrong”; it may be “the shape of the build-out was wrong” — for instance, inference demand growing far faster than training, leaving training-optimized clusters idle.

The honest conclusion: **the shape of a cluster is present, but whether the rate is its cause is a mixed picture.** A genuine technological breakthrough after 2022 can by itself send everyone running in the same direction — that is a “shared real signal,” not a “shared false one.” The only way to tell them apart is the financing source in ③.

### ⑤ The Austrian trap: not every boom is a bubble

Stage 14.4 listed the common Austrian mistakes, and every one applies here:

- **The permabear.** Someone who has called “bubble” every year since 2010 may finally be right in 2025, but they missed fifteen years — and the reason they were “right” may not be their theory. ABCT is not a timing tool (Stage 10.5); it explains **why** malinvestment occurs, not **when.**
- **Mistaking “rose fast” for “credit-driven.”** Nvidia going from one trillion to four is not, by itself, evidence for ABCT. The evidence for ABCT is rates and financing structure, not the size of the price rise. A profit-driven asset backed by real demand can also quadruple.
- **Smuggling technology skepticism into economics.** “LLMs can't reason,” “AI is overhyped” — these are technological judgments, not economic ones. ABCT is **agnostic** about whether the technology is real; it cares only about the timing and financing of the build-out. An Austrian can believe AI is a genuine general-purpose technology and still think it is being built too early and too much; or the reverse.
- **Treating every decline as vindication.** If AI stocks fall 40% in 2026, that does not automatically confirm ABCT — it may be a revision of expectations (Stage 10.3: a share price is discounted future cash flow; change the expectation and the price moves, credit or no credit). Confirming ABCT requires the evidence of ③ and ④: misled duration, credit-amplified construction, losses surfacing with the rate.

Austrian honesty has to go one step further: **ABCT needs a finer explanation than the standard version for “capex accelerated while rates rose.”** It may be the role of internal funds (large firms' investment insensitive to market rates), it may be a technology signal overpowering the rate signal, or it may be something the standard version misses. Put that on the open-problems list of Stage ∞.1.

### ⑥ What would confirm or refute the ABCT reading — and why this is not investment advice

A good framework tells you **what evidence would change its verdict.** Reading the AI boom through ABCT, the following would **strengthen** the “credit-driven malinvestment” reading:

- Capex persistently exceeding operating cash flow, with the gap filled by debt, private credit, off-balance-sheet structures and circular arrangements, at rates below what comparable risk commands in the market.
- Central banks re-expanding balance sheets or pushing policy rates down while AI-related credit spreads narrow.
- Mismatch between the shape of the build-out and the shape of final demand becoming visible: falling utilization of training-built clusters, collapsing second-hand GPU prices and rental rates, data-center projects delayed or cancelled.
- Upstream margins staying at historic extremes while demand remains unconfirmed.

The following would **weaken** it, supporting the “saving-funded real innovation” reading:

- Capex continuing to be covered mostly by operating cash flow, with circular arrangements shrinking or being unwound.
- Downstream revenue growing fast enough to recover capital within the GPUs' economic life (the arithmetic of Stage 18.2).
- Capex not contracting when rates rise, with no concentrated loss exposure — showing investment insensitive to the rate, hence not shaped by it.
- Builders **dispersed** and betting in **different** directions, so that errors offset rather than pile up.

The purpose of this lesson is not to have you bet on either side. **It is explicitly not investment advice**, and the reason is not boilerplate but the course's own theory: Stage 6.1 showed that judgment under uncertainty can only be exercised by someone bearing the consequences with their own resources; Stage 10.5 showed that ABCT explains mechanisms, not timing; Stage 14.4 showed that the Austrian track record of using theory as a timing tool is poor. What someone who has studied this lesson should take away is **a checklist that distinguishes types of evidence**, not a direction.

The whole lesson in one sentence: **real innovation and credit booms can coexist — railways and fiber are the precedents; whether AI capex is malinvestment is decided not by whether the technology is real or how far prices rose, but by rates, financing source, duration and clustering — and as of 2025 those four indicators give a mixed answer that is moving toward greater dependence on credit.** Stage 18.6 turns to the final question: what happens to the market process when more and more of the participants are themselves algorithms?
`,

  demo: "capex-boom-lens",

  analogy: `
Think of a technology boom as **a city building a subway.**

The subway is a genuinely good thing — once built it carries millions of people a day for decades. But the city can build it in two ways. First way: the citizens **actually spend less and save more**, and hand those savings to the subway company; how much track gets laid depends on how long the citizens are willing to wait. Second way: the city's bank prints money and lends it to the subway company at a rate so low it is almost free; the company concludes the citizens are willing to wait twenty years and plans thirty lines.

For the first few years the two ways look **identical**: excavators, scaffolding, steel mills running flat out, property heating up. The technology is real in both cases; the engineers are equally capable. The only difference is one thing: **how much the citizens actually saved.** Under the second way there comes a day when the bank finds the money running short, rates jump, and twenty of the thirty lines stop — those tunnels are not useless, just built too early, too many, too concentrated.

AI capex is peculiar in two respects. First, through 2025 the few companies digging the tunnels were building **mostly from their own savings** (operating cash flow) — closer to the first way; but they have begun borrowing and guaranteeing one another (circular financing) — sliding toward the second. Second, this subway's **trains** (GPUs) are scrapped after four years, unlike tunnels that can wait — so if the build is wrong, it shows up fast, the losses are concentrated, and latecomers find no bargains.

And an Austrian's job is not to stand at the site gate shouting “bubble.” It is to audit the books: **savings or loans? A market rate or a printed one? How long can the trains wait? Is everyone digging the same line?** — and then hand you the checklist, not place the bet for you.
`,

  misconceptions: [
    "**“AI is a real technological revolution, so it can't be a bubble.”** — Railways, electricity and fiber were all real technological revolutions, and all came with credit-driven overbuilding and crashes. ABCT is not about whether the technology is real but whether the timing, scale and financing of the build-out were shaped by a distorted rate. “The technology is real” was equally true in 1846 and 1999, and equally unable to answer the question.",
    "**“Capex this large and market values rising this fast — obviously a credit bubble.”** — The size of the rise is not ABCT evidence; rates and financing structure are. Through 2025 most of the investment was paid from operating cash flow (real saving) — fundamentally unlike the telecoms of 1999 financed by junk bonds and vendor credit. What to watch is whether that structure is shifting toward debt, private credit and circular arrangements.",
    "**“Rates rose in 2022 and AI investment accelerated, so ABCT is refuted.”** — A genuine challenge to the simple version, and Austrians should admit it. Candidate explanations: internal funds insensitive to market rates; a post-2022 technology breakthrough supplying a real demand signal that overpowered the rate. This does not overturn the mechanism, but it demands finer theory — an open problem.",
    "**“If AI stocks crash next year, that proves ABCT.”** — Not automatically. A share price is discounted future cash flow; a revision of expectations can drop it with no credit involved (Stage 10.3). Confirming ABCT requires credit-amplified construction, clustered losses surfacing with the rate, and mismatched duration. Treating every decline as vindication is the dogmatism of Stage 14.4.",
    "**“The Austrian conclusion is to short AI.”** — This lesson is explicitly not investment advice, and the reason is the theory itself: judgment under uncertainty belongs to whoever bears the consequences (Stage 6.1); ABCT explains mechanisms, not timing (Stage 10.5); the Austrian record of using theory as a timing tool is poor. What this lesson gives is a checklist for sorting evidence, not a direction.",
  ],

  quiz: [
    {
      q: "What is the shared lesson of Britain's 1840s railway mania and the 1990s fiber overbuild?",
      options: [
        "Both technologies were frauds",
        "Real innovation and credit-driven overbuilding can coexist; the crash destroyed investors and the sunk capital was later consumed by users",
        "A real technology never crashes",
        "Governments should ban investment in new technology",
      ],
      answer: 1,
      explain: "The railways became Britain's skeleton after 1847; dark fiber was lit after 2005 — real technology, real overbuilding. ABCT is about the timing and financing of the build-out.",
    },
    {
      q: "For an ABCT verdict, which of the following is most decisive?",
      options: [
        "How far asset prices rose",
        "Whether the technology will succeed",
        "The source of the investment funds: retained earnings (real saving), market debt and equity, or money created by credit expansion",
        "Investor sentiment",
      ],
      answer: 2,
      explain: "Malinvestment originates in credit with no corresponding saving. A data center built from one's own profits may be a mistaken judgment, but it is not ABCT malinvestment, because no rate lied.",
    },
    {
      q: "What is the peculiar duality of AI capex with respect to duration?",
      options: [
        "The construction chain is extremely long (rate-sensitive) while the most expensive asset, the GPU, has a very short economic life — so if it is malinvestment it surfaces faster, losses concentrate, and latecomers find few bargains",
        "All the assets are long-lived",
        "GPUs can wait a decade like fiber",
        "Duration is irrelevant to AI",
      ],
      answer: 0,
      explain: "Fiber can wait underground for demand; a GPU is obsolete in four years. Depreciation as a real cost runs ABCT's clock faster.",
    },
    {
      q: "Why is “circular financing” (chip maker invests in a lab, the lab buys its chips, a cloud provider signs contracts far beyond the lab's revenue) a warning sign from the ABCT standpoint?",
      options: [
        "Because it is necessarily fraud",
        "Because the same money laps the chain several times with each lap booked as demand, so part of the demand on paper is financed by suppliers rather than supported by final consumers — structurally the vendor financing of the 1990s",
        "Because it raises interest rates",
        "Because it reduces capex",
      ],
      answer: 1,
      explain: "Each link alone can be ordinary business; together they mean the demand signal is amplified by supplier financing — a form of price-signal distortion.",
    },
    {
      q: "Which evidence would weaken the reading that the AI boom is credit-driven malinvestment?",
      options: [
        "Capex persistently exceeding operating cash flow with the gap filled by private credit and circular arrangements",
        "Capex not contracting when rates rise with no concentrated losses; downstream revenue growing fast enough to recover capital within the GPUs' life; builders dispersed and betting in different directions",
        "Central banks re-expanding balance sheets while AI credit spreads narrow",
        "Second-hand GPU prices collapsing",
      ],
      answer: 1,
      explain: "Rate-insensitive investment was not shaped by the rate; revenue catching up means imputation holds; dispersed rather than clustered errors mean no shared false signal.",
    },
  ],

  further: [
    { label: "Mises, The Theory of Money and Credit (1912) — the source on credit expansion and the cycle (Mises Institute)", url: "https://mises.org/library/book/theory-money-and-credit" },
    { label: "Hayek, Prices and Production (1931) — how the rate stretches the structure of production", url: "https://mises.org/library/book/prices-and-production" },
    { label: "Rothbard, America's Great Depression (1963) — the classic analysis of a real technology boom coexisting with credit expansion in the 1920s", url: "https://mises.org/library/book/americas-great-depression" },
    { label: "Garrison, Time and Money (2001) — three diagrams separating saving-funded growth from credit-driven booms", url: "https://www.auburn.edu/~garriro/tam.htm" },
    { label: "Econlib Encyclopedia: Austrian School of Economics — includes an overview and critiques of ABCT", url: "https://www.econlib.org/library/Enc/AustrianSchoolofEconomics.html" },
  ],
};
