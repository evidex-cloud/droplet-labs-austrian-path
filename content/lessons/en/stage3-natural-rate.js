export default {
  id: "natural-rate",
  stage: 3,
  order: 5,
  title: "What the Interest Rate Is — and Isn't: Natural vs Market Rate",
  difficulty: "core",
  prereqs: ["time-preference"],

  oneLiner:
    "The “interest rate” in the news is a number a central bank announces: up 25 basis points, down 50. But Stage 3.1 showed that interest is the discount people apply to “later” relative to “now” — and nobody can announce that. So there are two rates: **the “natural rate,” set by society's real time preference, risk and inflation expectations**, and **the “market (money) rate,” set by the banking system and the central bank.** Wicksell separated them in 1898; Mises turned the gap into the engine of the business cycle. This lesson decomposes an observed rate into three layers — **pure time preference + entrepreneurial/risk premium + price (inflation) premium** — works an example (3% + 2% + 2% = 7% against a 1% policy rate) to see what “divergence” looks like, and explains why a central bank **cannot in principle** know the natural rate. Even the Fed's own attempts to estimate r* are an ironic admission of the point.",

  intuition: `
You go to a bank for a loan and get quoted 5%. Who decided that 5%?

The common answer is “the central bank.” That is half right. What a central bank directly controls is the overnight rate at which it deals with commercial banks (the federal funds rate in the United States); banks add a spread and lend to you. So “the central bank influences the rate” is true.

But go back to Stage 3.1: interest is, at bottom, the discount of future goods against present goods, arising from each person's time preference. Suppose people on average demand 3% before they will postpone this year's consumption to next year. Nobody decided that 3% — it is the marginal expression of hundreds of millions of value scales. If the central bank announces “the rate is 1%,” the 3% in people's heads does not follow.

So we have two different things:

- **The natural rate**: the rate that real saving and real investment demand would settle on without monetary or banking interference — essentially the market expression of society's time preference, plus reasonable compensation for risk and inflation.
- **The market rate / money rate**: the loan rate the banking system actually charges, shaped by central-bank policy and credit creation.

The Swedish economist Knut Wicksell was the first to draw the line clearly, in 1898, and to observe that **when the money rate sits below the natural rate, prices rise persistently; above it, they fall persistently** — his “cumulative process.” Mises took up the framework in *The Theory of Money and Credit* (1912) and added the capital structure of Stages 3.2 and 3.3: when the money rate is below the natural rate, prices do not merely rise — **the structure of production is distorted.** Entrepreneurs read the low rate as “saving has increased” and lengthen the chain, when in fact nobody has consumed any less. That is the whole plot of Stage 5.1. This lesson establishes its premise: **why the two rates differ, by how much, and who could possibly know.**

Start by taking an observed market rate apart. The 5% on your loan actually stacks three layers:

1. **Pure time preference**: even with a riskless borrower and stable prices, the lender demands compensation for “waiting” — say 3%.
2. **Entrepreneurial/risk premium**: the borrower may default, the project may fail — say 2%.
3. **Price premium**: if prices are expected to rise 2% next year, the lender demands 2% more, or the money repaid will buy less than the money lent — Irving Fisher spelled this out in 1896.

Together the three make a “natural” market rate of perhaps 7%. If the central bank pins its policy rate at 1% and banks lend at 2–3%, the **divergence** is 4–5 percentage points. That is not abstract: it means the “price of waiting” entrepreneurs see has been marked down by more than half, and they will undertake things that make no sense at 7%.

The last question is the most interesting: **does the central bank know what the natural rate is?** No — and it cannot in principle. The natural rate is not an observable quantity; it is something that shows itself only when hundreds of millions of time preferences interact in a market, and the central bank's intervention is precisely what stops it from showing. Remarkably, the Fed admits as much: it has spent two decades estimating something called r* (“r-star”), which is the natural rate, and the error bands are absurdly wide. This is Stage 7.2's knowledge problem in its most concrete form. Stage 13.5 teaches you to read what FOMC statements say about r*; Stage 17.5 asks whether, under a Bitcoin standard with no central bank, the two rates would still come apart.

**In this lesson we break it into six pieces:**

- **① Wicksell 1898: natural rate, money rate and the cumulative process**
- **② Mises: originary interest and the “gross” rate of the loan market**
- **③ Decomposing a market rate: time preference + risk premium + price premium (Fisher)**
- **④ A worked example: a 7% natural rate vs a 1% policy rate, and how the gap is misread**
- **⑤ Why the central bank cannot know the natural rate — and the irony of r* estimation**
- **⑥ Zero rates, negative rates and extreme divergence: what the rate is not**
`,

  mechanics: `
### ① Wicksell 1898: natural rate, money rate and the cumulative process

Knut Wicksell (1851–1926), in *Interest and Prices* (*Geldzins und Güterpreise*, 1898), drew a distinction that every monetary theory since has had to reckon with. He asked: why do prices rise or fall persistently? The quantity theory answered “because there is more money,” but Wicksell pressed on: *how* does money come to be more? Through bank lending. And how much banks lend depends on the relation between **the loan rate** and **the rate entrepreneurs are willing to pay.**

So he defined:

- **The natural rate**: the rate that would clear the market if capital were lent not as money but **in kind** (lend you 100 tons of steel, get 105 back). Equivalently, the rate at which **saving equals investment** and therefore **prices neither rise nor fall.**
- **The money rate**: the rate banks actually charge.

If the two coincide, money is “neutral” and prices are stable. If **the money rate is below the natural rate**, entrepreneurs find borrowing to invest profitable (project returns 5%, loan costs 3%), so they borrow, invest, bid for factors, and prices rise; the rise does not automatically push the money rate back up (banks can keep lending at 3%), so the process **cumulates** until reserve pressure forces banks to raise rates. That is Wicksell's **cumulative process**. The reverse — money rate above natural — yields cumulative deflation.

Wicksell was no Austrian; his definition of the natural rate carries a neoclassical “equilibrium” flavor (the rate that equates saving and investment). But he handed the Austrians two things: **the distinction between two rates**, and **the insight that their divergence produces a cumulative disequilibrium.**

### ② Mises: originary interest and the “gross” rate of the loan market

In Part III of *The Theory of Money and Credit* (1912) Mises took over Wicksell's framework and rebuilt it in two fundamental ways.

**First, “originary interest” in place of “natural rate.”** Stage 3.1 covered this: originary interest is the value ratio between present and future goods, arising from time preference, a category of action. It is not “the equilibrium rate that equates saving and investment” — a construct meaningful only in an evenly rotating economy (Stage 2.4) — but a ratio **present in people's valuations at every moment.** In Chapters XIX and XX of *Human Action* Mises deliberately avoids the phrase “natural rate,” because it suggests a computable equilibrium value; he prefers to say that **the loan-market rate forms around originary interest but never coincides with it exactly.**

**Second, the cumulative process moved from “prices” to “the structure of production.”** Wicksell saw prices rising; Mises saw this: when banks lend below originary interest, the signal entrepreneurs receive is “society's saving has increased” (Stage 3.3 showed that more saving does lower the rate), so they lengthen the chain — investing in early stages. But real saving has not increased; consumers have not eaten less. That is no longer a price-level problem but **a capital structure distorted by a false signal.** Stage 5.1 unfolds the process; for now, remember: **Mises's cycle theory is Wicksell's two rates plus the Böhm-Bawerk–Hayek capital structure.**

Mises called the rate observed in the loan market the **gross market rate of interest** and stated explicitly that it is built from three components — which brings us to the next section.

### ③ Decomposing a market rate: time preference + risk premium + price premium (Fisher)

<figure><svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">An observed market rate = three layers; policy rate minus that = divergence</text><g><rect x="80" y="220" width="120" height="60" fill="var(--orange)"/><rect x="80" y="180" width="120" height="40" fill="var(--orange)" opacity=".7"/><rect x="80" y="140" width="120" height="40" fill="var(--orange)" opacity=".45"/><text x="140" y="255" text-anchor="middle" font-size="11.5" fill="#fff" font-weight="700">time preference 3%</text><text x="140" y="205" text-anchor="middle" font-size="11.5" fill="#fff" font-weight="700">risk premium 2%</text><text x="140" y="165" text-anchor="middle" font-size="11.5" fill="var(--ink)" font-weight="700">price premium 2%</text><text x="140" y="128" text-anchor="middle" font-size="12" fill="var(--orange-ink)" font-weight="700">natural market rate ≈ 7%</text><text x="140" y="298" text-anchor="middle" font-size="11" fill="var(--muted)">without central-bank interference</text></g><g><rect x="300" y="260" width="120" height="20" fill="var(--blue)"/><text x="360" y="274" text-anchor="middle" font-size="11.5" fill="#fff" font-weight="700">policy rate 1%</text><rect x="300" y="240" width="120" height="20" fill="var(--blue)" opacity=".5"/><text x="360" y="254" text-anchor="middle" font-size="11" fill="var(--ink)">bank spread → 3%</text><text x="360" y="298" text-anchor="middle" font-size="11" fill="var(--muted)">after the central bank pins it</text><text x="360" y="228" text-anchor="middle" font-size="12" fill="var(--blue)" font-weight="700">rate entrepreneurs see ≈ 3%</text></g><g><line x1="430" y1="140" x2="430" y2="240" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 3"/><line x1="424" y1="140" x2="436" y2="140" stroke="var(--red)" stroke-width="2"/><line x1="424" y1="240" x2="436" y2="240" stroke="var(--red)" stroke-width="2"/><text x="445" y="185" font-size="12" fill="var(--red)" font-weight="700">divergence ≈ 4 points</text><text x="445" y="203" font-size="10.5" fill="var(--muted)">misread as “more saving”</text><text x="445" y="218" font-size="10.5" fill="var(--muted)">risk underpriced · inflation cover gone</text></g><line x1="60" y1="280" x2="600" y2="280" stroke="var(--line)" stroke-width="1.5"/><text x="320" y="60" text-anchor="middle" font-size="11" fill="var(--muted)">time preference from Stage 3.1 · risk premium from entrepreneurial judgment (Stage 6.1) · price premium from inflation expectations (Fisher, Stage 4.3)</text></svg><figcaption>An observed market rate stacks three layers: pure time preference (originary interest), an entrepreneurial/risk premium, and a price premium. With the policy rate pinned at 1% and banks lending at about 3%, a divergence of roughly 4 points opens against the natural level of about 7%.</figcaption></figure>

In Chapter XX of *Human Action* Mises splits the observed **gross market rate** into three components:

**(a) Originary interest** (pure time preference). The core: it exists even in a world with no risk and permanently stable prices. In Stage 3.1's numbers, society's marginal rate of time preference — say 3%.

**(b) The entrepreneurial component / risk premium.** The borrower may not repay; the project may fail. The lender demands extra compensation. Mises insists this is not really part of “interest” but part of **entrepreneurial profit and loss** — it reflects judgment under uncertainty (Stage 6.1). Still, it is stacked into the observed rate. The worse the credit and the riskier the project, the thicker the layer: near zero for a Treasury bill, 8% for a junk bond.

**(c) The price premium.** If the lender expects prices to rise 2% next year, he demands at least 2% more, or the money repaid will have lost purchasing power. Irving Fisher, in *Appreciation and Interest* (1896) and *The Theory of Interest* (1930), wrote this as the famous **Fisher equation**: nominal rate ≈ real rate + expected inflation. Mises added an Austrian detail: the price premium is always **lagging and incomplete**, because inflation is never uniform (the Cantillon effects of Stage 4.3) and people's expectations differ — so during inflations the price premium usually fails to keep up, and the real rate is pushed negative.

Stacked together, the three yield a “natural” market rate — and note that “natural” here means not “equilibrium” but “**what the market would form without the interference of credit creation.**” It moves with time preference, risk perception and inflation expectations; it is not a constant.

### ④ A worked example: a 7% natural rate vs a 1% policy rate, and how the gap is misread

Line up the numbers:

$$
natural market rate = time preference 3% + risk premium 2% + price premium 2% = 7%
policy rate = 1%; bank lending after spread ≈ 3%
divergence = 7% − 3% = 4 percentage points
$$

How will entrepreneurs misread that 3%? Hold it against the three layers and each sends a false signal:

- **Misreading one: “saving has increased.”** A lower rate is normally the signal that saving rose (Stage 3.3). Entrepreneurs conclude that society is willing to wait longer and long projects are viable. A 10-year project with negative net present value at 7% turns positive at 3% — they break ground. But nobody consumed less, the subsistence fund did not grow, and the project **will run out of provisions halfway.**
- **Misreading two: “risk has fallen.”** The 3% cost of borrowing contains almost no risk premium, so the borrower hears “the market thinks your project is safe” — when in fact the central bank has merely lowered everyone's price. Risky and safe projects are financed equally cheaply; risk pricing stops working.
- **Misreading three: “prices will be stable.”** The 3% leaves no room for 2% inflation; the lender is actually lending at a **real rate of 1%** (3% − 2%), nearly free. Who gets this cheap money first? Stage 4.3 answers: those closest to the bank.

Stack the three misreadings and you get the boom of Stage 5.1: a lengthened chain, underpriced risk, new money flowing first into assets and early stages. This lesson's demo lets you drag four sliders (the three layers plus the policy rate) to watch the divergence change, while the log tells you in real time what entrepreneurs would misread.

### ⑤ Why the central bank cannot know the natural rate — and the irony of r* estimation

A natural objection: “If divergence is harmful, why not just set the policy rate equal to the natural rate?” The trouble is that **the natural rate is unobservable and in principle incomputable.**

The reason is Stage 7.2's knowledge problem. The natural rate is the marginal outcome of hundreds of millions of individual time preferences, risk judgments and inflation expectations interacting in a market — it **exists in no one's head**, only in the actual behavior of borrowers and lenders. And every person's time preference keeps moving: a war, a technological breakthrough, a generational shift in values, each shifts it. To “know” the natural rate you would have to let people borrow and lend freely and then observe the rate that forms — but the central bank's intervention **replaces** that very process. It is like trying to learn the free-market price of bread by first imposing a price control and then having a committee estimate “what the price would have been.”

Hayek, in *Prices and Production* and in *Monetary Theory and the Trade Cycle* (1933), added a layer: even if the central bank guessed the natural rate correctly at one moment by luck, **pinning** the policy rate there would be wrong the next moment — because the natural rate moves. A pinned number is guaranteed to be wrong most of the time.

Here lies a contemporary irony. Since the late 1990s the Fed economists Thomas Laubach and John Williams (the latter later president of the New York Fed) have built a statistical model to estimate “**r\\***” — the modern name for the natural rate (Laubach–Williams 2003; Holston–Laubach–Williams 2017). The model remains the standard reference for central banks worldwide. Its result? The **standard errors frequently run to one or two percentage points** — for a number that may itself lie between 0.5% and 2%, that means “we do not know whether it is positive or negative.” In 2018, Fed Chair Jerome Powell, speaking at Jackson Hole, openly conceded that r\\* is “navigating by the stars,” and that the stars move and are often obscured.

The Austrian attitude here is not mockery but the observation that **this is exactly what the theory predicts**: a quantity that can only reveal itself through the market process cannot be reliably estimated by a model standing outside that process. The r\\* literature is an expensive and honest empirical confirmation of the knowledge problem. At the same time, Austrians must own a weakness: they cannot produce a number for the natural rate either — the Austrian claim is “let the market reveal it,” not “our estimate is more accurate.” A critic will ask: if neither side can compute it, why is “let the market decide” more credible? The answer belongs to Stage 9.4's discussion of free banking; we set it aside here.

### ⑥ Zero rates, negative rates and extreme divergence: what the rate is not

Use this lesson's framework on the past two decades:

- **Zero interest-rate policy (ZIRP)**: Japan's policy rate has been at or near zero for most of the time since 1999; the US federal funds rate sat near zero in 2008–2015 and 2020–2022; the euro area's deposit rate went negative from 2014 (bottoming at −0.5%), and Switzerland, Denmark and Sweden also ran negative policy rates.
- Apply ③'s decomposition: if time preference is positive (Stage 3.1 says it must be), risk is positive and expected inflation is positive, the natural market rate cannot be zero or negative. **A zero rate means the divergence equals the entire natural rate** — the most extreme distortion possible.

Does a negative rate show that time preference can be negative? No. **A nominal negative rate** is a price internal to the banking system — the central bank charging commercial banks for reserves parked with it — and implies nothing about anyone valuing “a loaf next year” above “a loaf this year.” Real time preference stays positive; it simply cannot express itself in a pinned loan market and expresses itself elsewhere instead: asset prices (Stage 10.3), house prices, the demand for “hard money” (Stage 17.2). When inflation reached about 8% in 2021–2022 with the policy rate still near zero, **the real rate was roughly −7%** — the extreme case of the price-premium layer wiped out entirely.

To close, a list of **what the rate is not**:

- **The rate is not the central bank's policy tool** — it is first an expression of society's time preference; the central bank merely overlays a number on it.
- **The rate is not “the price of funds”** — it is the ratio of present to future goods; funds are merely its carrier.
- **The rate is not an equilibrium value that can be computed and then set** — it is a product of the market process and shows itself only within that process.
- **A zero rate is not “cheap money”** — it is “the price of waiting misreported as zero,” and the real cost of waiting will surface somewhere else.

Carry this list into Stage 5.1 and you will find that business-cycle theory is simply this lesson's “divergence” placed in time, producing first a boom and then a bust. Stage 13.5 teaches you to spot the traces of divergence in the Fed's statements; Stage 17.5 asks a counterfactual: without a central bank and with a fixed money supply, would the two rates converge — or could fractional-reserve banks manufacture the divergence anyway?
`,

  demo: "rate-decomposer",

  analogy: `
Think of the interest rate as a city's **thermometer**, and the central bank as someone who can stick labels on it.

The city's real temperature (the natural rate) is set by millions of heat sources: people's time preference is the sun, risk is the cloud cover, inflation expectations are the humidity. Nobody can decree the temperature; it emerges — and it keeps changing, morning to evening, season to season.

Now an agency announces: “To encourage outdoor activity, the city's temperature is hereby set at 15 degrees.” It cannot alter the sun, but it can do two things: paste a 15-degree label over the thermometer's scale (the policy rate), and make every ice-cream shop and coat store stock up as if it were 15 degrees (the banking system's loan rate).

The result? The real temperature is 32 degrees (natural rate 7%), but every merchant sees 15 (market rate 3%). Ice-cream shops under-order, coat stores over-order, the outdoor pool stays shut while the ski slope opens (a distorted structure of production). At first everyone remarks that “business is strange this summer,” but as long as the label stays on, no one can read the truth off the thermometer. Then one day the coats pile up unsold, ice cream sells out, inventory financing snaps and the label finally peels off — the moment everyone sees 32 degrees is the bust of Stage 5.3.

Someone proposes: “Then let the agency measure the real temperature and paste the right label.” The trouble is that the only way to measure the temperature is to look at **an unlabeled thermometer** — and the agency has labeled every one in town. So it builds a model that back-solves the temperature from ice-cream sales and coat inventories (r\\* estimation), with an error of ±10 degrees. It admits as much: “we are navigating by the stars.”

A zero rate is the extreme version of the story: the label reads 0 degrees while it is 32 outside. A negative rate is a label reading −5 — not because the sun has vanished, but because the agency has begun charging people for holding thermometers. The sun is still there; people simply stop looking at the thermometer and look at other things instead: house prices, stock prices, gold, Bitcoin.
`,

  misconceptions: [
    "**“The central bank sets the interest rate.”** — It sets the policy rate, a number overlaid on the real rate. The real rate comes from society's time preference, risk judgments and inflation expectations — the marginal outcome of hundreds of millions of interactions. The central bank can change the number entrepreneurs see; it cannot change how much “now” outweighs “later” in people's minds. The gap between the two is the divergence, and the seed of the cycle.",
    "**“The natural rate is a computable equilibrium; the central bank just needs to set the policy rate equal to it.”** — The natural rate is unobservable: it reveals itself only in the process of free borrowing and lending, which central-bank intervention replaces. The Fed has estimated r* for two decades with standard errors of one or two percentage points; Powell himself called it “navigating by the stars.” This is Stage 7.2's knowledge problem in its most concrete form.",
    "**“Negative rates prove time preference can be negative.”** — A nominal negative rate is a price formed when the central bank charges banks for reserves; it says nothing about anyone valuing next year's bread above this year's. Time preference is necessarily positive (Stage 3.1); it simply cannot express itself in a pinned loan market and shows up instead in asset prices, house prices and the demand for hard money.",
    "**“The risk premium is part of interest, so a high rate means high time preference.”** — Mises splits the gross market rate into originary interest, an entrepreneurial/risk component and a price premium. The gap between an 8% junk bond and a 1% Treasury lies almost entirely in the risk layer, unrelated to time preference; the high nominal rates of an inflationary period are mostly price premium. Decompose first, judge afterwards.",
    "**“Austrians can compute the natural rate, so they are smarter than the central bank.”** — Austrians cannot compute it either. Their claim is “let the market reveal it,” not “our model is better.” This is a genuine weak spot: if neither side can produce a number, why is “let the market decide” more credible? The answer lies in Stage 9.4's discussion of free banking, not in mocking the opponent.",
  ],

  quiz: [
    {
      q: "Time preference 3%, risk premium 2%, expected inflation 2%; the policy rate is 1% and banks lend at 3%. What are the natural market rate and the rate entrepreneurs see, and what is the divergence?",
      options: [
        "Natural 7%, seen 3%, divergence 4 points",
        "Natural 5%, seen 1%, divergence 4 points",
        "Natural 7%, seen 1%, divergence 6 points",
        "Natural 3%, seen 3%, no divergence",
      ],
      answer: 0,
      explain: "**Three layers stacked**: 3 + 2 + 2 = 7%. Entrepreneurs actually face the bank's 3% after the spread — a 4-point divergence. Measured against the 1% policy rate the gap is 6 points; either way the price of waiting has been badly misreported.",
    },
    {
      q: "What does Wicksell's “cumulative process” describe?",
      options: [
        "A rise in the money supply directly raising prices",
        "With the money rate below the natural rate, entrepreneurs keep borrowing and investing and prices keep rising, and the process does not stop on its own until banks are forced to raise rates",
        "Rising saving accumulating into longer production chains",
        "Inflation expectations accumulating into higher nominal rates",
      ],
      answer: 1,
      explain: "Wicksell's 1898 insight: the driver of price movements is **the divergence between the two rates**, and the divergence does not self-correct because rising prices do not automatically lift the banks' loan rate. Mises moved the argument from “prices” to “the structure of production.”",
    },
    {
      q: "Why did Mises prefer to speak of “originary interest” rather than the “natural rate”?",
      options: [
        "Because the word “natural” is unscientific",
        "Because originary interest is set by the central bank",
        "The two are identical; only the translation differs",
        "Because “natural rate” suggests a computable equilibrium that equates saving and investment, whereas originary interest is the present/future ratio present in people's valuations at every moment, arising from time preference",
      ],
      answer: 3,
      explain: "Wicksell's definition carries a neoclassical equilibrium flavor; Mises's originary interest is **a category of action** (Stage 3.1) that does not depend on an equilibrium construct. The loan-market rate forms around it but never coincides with it exactly.",
    },
    {
      q: "Why can the central bank not, in principle, know the natural rate?",
      options: [
        "Because central-bank economists are not clever enough",
        "Because the natural rate is a state secret",
        "Because the natural rate reveals itself only in the process of free borrowing and lending, which the central bank's intervention replaces; and it keeps moving with time preference and other factors",
        "Because the natural rate is always zero",
      ],
      answer: 2,
      explain: "This is the **knowledge problem** (Stage 7.2): the natural rate exists in no one's head, only in people's actual borrowing and lending. The very wide error bands on the Fed's r* estimates are the empirical confirmation.",
    },
    {
      q: "In 2021–2022 inflation ran at about 8% while the policy rate stayed near zero. In this lesson's decomposition, what does that mean?",
      options: [
        "Time preference turned negative",
        "The price-premium layer was wiped out entirely and the real rate was about −7%; lenders were effectively paying to lend",
        "The risk premium rose to 8%",
        "The natural rate fell to zero",
      ],
      answer: 1,
      explain: "Fisher's equation: real rate ≈ nominal rate − expected inflation ≈ 0 − 8% (this lesson rounds to about −7%). Time preference stayed positive; it simply could not express itself in the loan market and surfaced in asset prices and the demand for hard money.",
    },
  ],

  further: [
    { label: "Wicksell, Interest and Prices (1898) — full English text (Mises Institute): the original distinction between natural and money rates", url: "https://mises.org/library/book/interest-and-prices" },
    { label: "Mises, The Theory of Money and Credit (1912), Part III — connecting Wicksell's two rates to the structure of production", url: "https://mises.org/library/book/theory-money-and-credit" },
    { label: "Mises, Human Action, Ch. XX “Interest, Credit Expansion, and the Trade Cycle” — the three components of the gross market rate", url: "https://mises.org/library/book/human-action" },
    { label: "Laubach & Williams, “Measuring the Natural Rate of Interest,” Review of Economics and Statistics (2003) — the founding r* estimate", url: "https://www.jstor.org/stable/3211722" },
    { label: "Powell, “Monetary Policy in a Changing Economy,” Jackson Hole speech (2018) — “navigating by the stars”", url: "https://www.federalreserve.gov/newsevents/speech/powell20180824a.htm" },
  ],
};
