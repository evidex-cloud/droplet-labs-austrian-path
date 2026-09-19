export default {
  id: "aggregates-limits",
  stage: 10,
  order: 2,
  title: "GDP, CPI & the Limits of Aggregates",
  difficulty: "systems",
  prereqs: ["garrison-macro", "money-demand"],

  oneLiner:
    "Open any financial news site: “GDP grew 2.5%,” “consumption is 70% of the economy,” “CPI rose 3.2%.” The numbers read like thermometer readings — objective, precise, beyond dispute. This lesson takes them apart. **GDP counts only the last link of the chain and nets out every intermediate stage of production**, which is why “consumption drives the economy” is an accounting artifact; **CPI is not a price but a construction full of choices**; and squeezing a whole economy into one number is exactly what Hayek warned against in his 1974 Nobel lecture, “The Pretence of Knowledge.” Learn how these numbers are **made**, and you will see the structure they hide — the very triangle from the three diagrams of Stage 10.1.",

  intuition: `
Start with a grade-school sum. Here is a four-stage chain of production:

- A mine sells iron ore to a steel mill for **20**.
- The mill sells steel to an auto-parts maker for **45**.
- The parts maker sells components to a car assembler for **80**.
- The assembler sells you the car for **100**.

How much trading happened along this chain? 20 + 45 + 80 + 100 = **245**. Yet GDP records **100** — because GDP is defined as “the market value of final goods and services,” and sales of intermediate goods are “netted out” to avoid “double counting.” The rule itself is not wrong: if your question is “how much did society produce for consumers this year?”, 100 is the right answer.

But notice what it erases. It erases the **145 of business-to-business transactions** between the mine, the mill and the parts maker — real economic activity in which someone paid and someone was paid. Those transactions are the upstream and midstream of the triangle; they are the whole content of the roundabout production of Stage 3.2. GDP flattens the triangle into its bottom line.

This produces a claim everyone has heard and almost nobody questions: “consumption is 70% of the US economy.” That 70% is consumption divided by GDP. Change the denominator to all transactions (245 rather than 100) and consumption's share drops below a third — the bulk of the rest is firms buying from firms in order to produce. **“Consumption drives the economy” is not an economic fact; it is a ratio manufactured by the denominator.** Mark Skousen campaigned for more than twenty years, starting with *The Structure of Production* (1990), for a fuller measure: **Gross Output (GO)**, which counts sales at every stage. In 2014 the US Bureau of Economic Analysis (BEA) began publishing GO quarterly — it runs roughly 1.7 to 2 times GDP, and consumption is only a bit more than a third of it.

The second number is CPI. It sounds like “prices,” but it is “a price index of a basket of things,” and what goes into the basket, how much each item weighs, how quality changes are handled, what happens when people switch to substitutes — every step is a choice. In 1996 the Boskin Commission concluded that US CPI overstated inflation by about 1.1 percentage points a year; the statisticians then introduced substitution adjustments and quality adjustments (hedonics); critics reply that these adjustments now understate inflation. Who is right? The Austrian answer goes deeper than “who is right”: Stage 1.2 showed that value is subjective, and **there is no such thing as a “general price level” for the index to measure**. CPI is a useful rough description, not a thermometer.

The third problem is the deepest. Hayek's Nobel lecture on 11 December 1974 was titled “The Pretence of Knowledge,” and it attacked exactly this practice: compressing complex phenomena into a few measurable aggregates and then pretending that what can be measured is what matters. Aggregate demand, total investment, the price level — each adds a crowd of heterogeneous things into one number, while cycles, malinvestment and distorted relative prices all live in the **relations among** those things. The moment you add them up is the moment you hide them.

Does that mean Austrians don't use statistics? No. Mises and Rothbard both used data; Rothbard's *America's Great Depression* is full of money-supply tables. The difference is in the use: **statistics describe history; they are not the source of economic laws** (Stage 2.2, Stage 13.1). You can use GO to describe “the upstream collapsed first in 2008,” but you cannot “discover” cycle theory in GO — the theory comes from the logic of action, and data is where it gets applied.

One last trap. GDP = C + I + G + net exports. That G — government spending — enters at cost. A bridge nobody uses that cost a billion adds a billion to GDP; the private investment it crowded out, which would otherwise have happened, appears nowhere. This is the “seen and unseen” of Stage 1.4 in statistical form.

**In this lesson we break it into six pieces:**

- **① What GDP counts and what it omits: a four-stage chain**
- **② Gross Output: Skousen and the BEA in 2014**
- **③ “Consumption drives the economy”: an artifact of the denominator**
- **④ CPI: the index is a construction, not a price**
- **⑤ The tyranny of one number: Hayek's Nobel lecture and the vanishing structure**
- **⑥ How an Austrian uses statistics: description, not law — and the “seen” G**
`,

  mechanics: `
### ① What GDP counts and what it omits: a four-stage chain

Get the definition exact. **GDP (gross domestic product)** is the market value of **final** goods and services produced within a country in a period. The word “final” is the key: goods sold to consumers, to government, or as investment goods count; goods sold to another firm as inputs for further processing do not.

There are three equivalent ways to compute it, all verifiable on our four-stage chain:

- **Final-product method**: count only the last sale — the car, 100.
- **Value-added method**: each stage's sales minus the intermediate goods it bought — mine 20 − 0 = 20, mill 45 − 20 = 25, parts 80 − 45 = 35, assembler 100 − 80 = 20; total 20 + 25 + 35 + 20 = **100**.
- **Income method**: each stage's value added is paid out as wages, rent, interest and profit; the total is again 100.

All three give 100. GDP is internally consistent on its own terms — it sets out to answer “how much was delivered to consumers (and investors and government)?”

Now look at what it leaves out:

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">One chain of production, two ways of counting: GDP counts the last link, GO counts them all</text><g><rect x="30" y="60" width="110" height="60" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="85" y="84" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">Mine → Mill</text><text x="85" y="104" text-anchor="middle" font-size="13" fill="var(--orange-ink)" font-weight="700">sale 20</text></g><g><rect x="185" y="60" width="110" height="60" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="240" y="84" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">Mill → Parts</text><text x="240" y="104" text-anchor="middle" font-size="13" fill="var(--orange-ink)" font-weight="700">sale 45</text></g><g><rect x="340" y="60" width="110" height="60" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="395" y="84" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">Parts → Assembler</text><text x="395" y="104" text-anchor="middle" font-size="13" fill="var(--orange-ink)" font-weight="700">sale 80</text></g><g><rect x="495" y="60" width="110" height="60" rx="8" fill="var(--orange-soft)" stroke="var(--orange)" stroke-width="2"/><text x="550" y="84" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">Assembler → You</text><text x="550" y="104" text-anchor="middle" font-size="13" fill="var(--orange-ink)" font-weight="700">sale 100</text></g><path d="M140 90 L185 90" stroke="var(--muted)" stroke-width="1.5"/><path d="M295 90 L340 90" stroke="var(--muted)" stroke-width="1.5"/><path d="M450 90 L495 90" stroke="var(--muted)" stroke-width="1.5"/><text x="85" y="140" text-anchor="middle" font-size="11" fill="var(--muted)">value added 20</text><text x="240" y="140" text-anchor="middle" font-size="11" fill="var(--muted)">value added 25</text><text x="395" y="140" text-anchor="middle" font-size="11" fill="var(--muted)">value added 35</text><text x="550" y="140" text-anchor="middle" font-size="11" fill="var(--muted)">value added 20</text><rect x="30" y="170" width="575" height="46" rx="8" fill="var(--blue-soft)" stroke="var(--blue)"/><text x="45" y="190" font-size="12" font-weight="700" fill="var(--blue)">GDP = final link only = 100</text><text x="45" y="207" font-size="11" fill="var(--muted)">(= sum of value added 20+25+35+20; the three B2B sales 20+45+80 = 145 are “netted out”)</text><rect x="30" y="228" width="575" height="46" rx="8" fill="var(--orange-soft)" stroke="var(--orange)"/><text x="45" y="248" font-size="12" font-weight="700" fill="var(--orange-ink)">GO (gross output) = sales at every stage = 20+45+80+100 = 245</text><text x="45" y="265" font-size="11" fill="var(--muted)">Consumption of 100 is 100% of GDP but only 41% of GO; B2B trade is 59% of GO</text><text x="320" y="292" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">The netted-out 145 is the upstream and midstream of the Hayekian triangle — exactly where the cycle breaks out first</text></svg><figcaption>GDP is consistent on its own terms, but it flattens the triangle into its bottom line. GO restores the upstream.</figcaption></figure>

The netted-out 145 is not a phantom of “double counting” but real activity: the mill really bought ore; the parts maker really bought steel. In the Hayekian triangle of Stage 3.2 these are the upstream and midstream segments. GDP omits them because the question it answers is “how much reached consumers?” — but if your question is “what does the structure of production look like, and where does it break first?”, GDP answers the wrong question.

### ② Gross Output: Skousen and the BEA in 2014

Mark Skousen argued in *The Structure of Production* (1990) that if the whole of Austrian macro is about stages of production, there should be a statistic that puts the stages back. He called it **Gross Output (GO)**: total sales by all firms at all stages, intermediate goods included.

The proposal got official recognition in 2014, when the BEA began publishing GO quarterly alongside GDP. The magnitudes run roughly like this (“roughly,” because they move with the year): when US GDP is around 25–28 trillion dollars, GO is around 45–50 trillion — **GO is about 1.7 to 2 times GDP**. Skousen also proposes a wider measure, “gross domestic expenditures” (GDE), which adds the wholesale and retail intermediate links and comes out somewhat larger than GO; he often says “GDE is about double GDP.”

What does GO tell you that GDP does not? Three things.

**First, business spending is the largest component.** In GO, business-to-business spending (raw materials, equipment, components, business services) is roughly 55–60%, and consumption a bit more than a third. The economy's “lead actor” changes from the consumer to the whole chain of production.

**Second, GO swings far more than GDP, and it moves first.** That is precisely what Austrian cycle theory predicts: malinvestment piles up upstream, so recessions begin upstream. In 2008–09, US GDP fell about 4% peak to trough while GO fell about 8%, with intermediate sales in manufacturing and mining falling further still; in the 2009 recovery, GO turned up first. GDP is smooth because it counts only the bottom line of the triangle, and consumption is the steadiest of all spending categories.

**Third, it gives the triangle a ruler.** BEA publishes GO by industry, so you can line up mining, manufacturing, wholesale and retail from upstream to downstream and watch each segment move over the cycle. This is not a measurement of the Hayekian triangle (Stage 10.1 said the triangle has no scale), but it is the first time official data can **describe** changes in the triangle's shape.

GO's limits should be stated too. It does have a “double-counting” feature — the same steel is counted at four stages — so industries with long chains (manufacturing) are naturally weighted up. The Austrian reply is that this is not a flaw but the point: **the length of the chain is itself information**. But it does mean GO cannot replace GDP; they answer different questions. GDP answers “how much was delivered”; GO answers “how many steps did society go through to deliver it.”

### ③ “Consumption drives the economy”: an artifact of the denominator

Now the most popular claim can be addressed head-on.

US personal consumption expenditure is roughly 68–70% of GDP. Every time the economy slows, commentators say “as long as the consumer keeps spending, we're fine”; every stimulus is justified by “put money in consumers' hands, they spend it, and the economy turns over.”

State the claim at its strongest first. In a depression there really are masses of idle resources; if consumers close their wallets out of fear, orders fall, firms lay off workers, consumption falls further — this is the interior-of-the-PPF state described by the Keynesian cross in Stage 10.1, and it is real. In that particular state, consumer spending really does put idle resources back to work.

The Austrian reply has two layers.

**The first is accounting.** 70% is consumption over GDP. Switch the denominator to GO and the share drops to about 35–40%; switch to Skousen's GDE and it drops to about 30%. **The same consumption goes from 70% to 30% only because the denominator changed.** No ratio is “the true one” — but using only the 70% leads you to think business spending is a supporting actor. Yet the netted-out 55–60% is exactly where employment, investment and the cycle happen.

**The second is causal.** Consumption cannot “drive” production, because what you consume must first have been produced. The car you buy today is the result of decisions made by the mine three years ago, the mill two years ago, the parts maker last year. **What drives the economy is the saving-and-investment decisions that send resources upstream** (Stage 3.3); consumption is the end of the chain, not its start. Handing money to consumers pulls demand to the far downstream, but what lies unfinished in a bust is the upstream — Stage 5.2 showed that boom-time malinvestment piles up furthest from the consumer. Stimulating consumption adds height at the triangle's shortest end and does nothing for the end that was overstretched.

In numbers: suppose the government gives each consumer 10 and they all spend it on cars. The assembler's sales go from 100 to 110. But the parts maker's, the mill's and the mine's investments were fixed three years ago; their capacity does not change because of today's 10. If they overbuilt in the boom (say, for sales of 130), 110 is still not enough. Consumer stimulus does not fix the structural mismatch; it lifts the downstream number a little and makes GDP look better — because GDP counts only the downstream.

### ④ CPI: the index is a construction, not a price

Producing the CPI (consumer price index) takes roughly five steps, each involving choices:

**1. Choose the basket.** The statistics bureau surveys household spending and decides which goods and services go in and with what weights (housing about a third, food about 13%, transport about 16% …). Which household? The “average urban household” — a person who does not exist.

**2. Collect prices.** Each month, prices of sample items in sample stores in sample cities. Which store? Which brand? Which size?

**3. Substitution.** Beef gets dearer and people switch to chicken — with a fixed basket the index overstates the rise in the “cost of living,” because people have already dodged the increase. The 1996 Boskin Commission estimated that biases of this kind overstated CPI by about 1.1 points a year, after which US CPI adopted “geometric weighting” to capture some substitution. Critics answer: substitution does not mean “the cost of living did not rise”; it means “you were forced to eat worse.”

**4. Quality adjustment (hedonics).** This year's phone is twice as fast as last year's at the same price — the bureau may record a “30% price decline,” since the price per unit of performance fell. In reverse, smaller houses and worse service are rarely adjusted the other way. This step is the most contested, because “quality” is subjective: to someone who only makes calls, twice the speed is worth nothing.

**5. Weighting and chaining.** Weights are updated over time and the index is chained into a series.

Each step is a reasonable technical choice, but together they mean **CPI is not “prices” but a construction about “a hypothetical basket of a hypothetical household.”** Its reading depends on basket choice, substitution treatment and quality adjustment. Two equally honest bureaus can produce CPIs a point or two apart, and neither is “truer.”

The Austrian critique goes further. Stage 1.2 and Stage 4.2 established that value is subjective and that the purchasing power of money is not one number but **a whole array** — one exchange ratio per good. The “general price level” is what Mises called a convenient shorthand with no counterpart in reality. When new money enters the economy (Stage 4.3) it does not lift a “price level” uniformly; it lifts some prices first (assets, upstream inputs) and others later (wages, consumer goods). CPI looks only at the last group, which is why house and stock prices could double in the 2010s while CPI stayed low — the inflation happened outside the CPI. That is not CPI miscalculating; it is CPI doing exactly what it was designed to do, which is to measure one basket.

### ⑤ The tyranny of one number: Hayek's Nobel lecture and the vanishing structure

On 11 December 1974 Hayek delivered his Nobel lecture, “The Pretence of Knowledge.” Its central charge: economics imitates physics by admitting only “measurable” things as scientific evidence; it therefore concentrates on aggregates — aggregate demand, total employment, the price level — because those can be measured; while the things that actually govern the economy — the relations among countless relative prices, each person's local knowledge, the fit between stages of production — are treated as nonexistent because they cannot.

His example was the stagflation of the 1970s. The Keynesian theory that “aggregate demand determines employment” said that as long as demand was maintained there would be full employment. Unemployment and inflation arrived together. Hayek's explanation: unemployment came from **misallocation of labor across industries** — jobs sustained by inflation vanished when the inflation stopped; a structural problem invisible to the number “aggregate demand,” and therefore untreatable by policy aimed at that number.

Made concrete on our example:

$$
GDP = 100 tells you only the final link's number
GO = 245 tells you the distribution: upstream 20, midstream 45, downstream 80, final 100
Cycle theory asks: did the 20 and the 45 grow too fast relative to the 100?
$$

One number (100) contains no such information. Four numbers (20, 45, 80, 100) do. Garrison's triangle (Stage 10.1) is a drawing of the shape those four numbers make. When you say “GDP grew 3%,” you do not know whether the upstream stretched 10% while the downstream shrank 2% (the classic boom pattern) or whether everything grew evenly — and the two have entirely different futures.

That is why Austrians hold reservations about both DSGE (Stage 11.3) and the monetarist quantity theory (Stage 11.2): not because the mathematics is wrong, but because **structural variables are treated as if they did not exist**.

### ⑥ How an Austrian uses statistics: description, not law — and the “seen” G

After all that criticism a line must be drawn: Austrians do not oppose statistics; they oppose **substituting statistics for theory**.

Mises's position (Stage 2.2, Stage 13.1): economic laws come from the logic of action and are a priori; statistics are history, describing what happened at a particular time and place. You cannot “test” diminishing marginal utility with statistics any more than you can test the Pythagorean theorem with a ruler; but you can perfectly well **describe** with statistics that the upstream collapsed before the downstream in 2008, or that the money supply grew about 40% in 2020–21. Theory tells you where to look; data tells you what you saw.

So the posture of an Austrian economist reading statistics is:

- Watch the **ratio of GO to GDP** over the cycle (is the upstream stretching or shrinking relative to the downstream?).
- Watch the **money supply** (M2, or the Austrians' own “true money supply”) rather than CPI, because inflation is a monetary phenomenon and CPI is only one lagging symptom of it.
- Watch **relative prices** (asset prices against consumer prices, upstream inputs against final goods) rather than “the price level.”
- Watch **interest rates and credit** rather than “aggregate demand.”

Finally, that G. GDP = C + I + G + (X − M). Government spending enters at **cost**: whatever was spent is what it contributes. So a bridge nobody uses, a war, a redundant conference — each “adds” its cost to GDP. Private goods enter at market price — if nobody buys, the contribution is zero. That asymmetry gives GDP a built-in tilt: **government spending always “visibly” raises GDP**, while the private activity it crowds out (the “unseen” of Stage 1.4) never appears. That is not a conspiracy; it is the definition — but you must remember it whenever you read GDP.

Stage 13.5 teaches you to read Federal Reserve statements, and it uses every tool in this lesson: when the FOMC says “inflation has returned to the 2% target,” you ask “which basket?”; when it says “consumer spending remains resilient,” you ask “and upstream?”; when it says “growth is solid,” you look at GO. Aggregates are the borders on a map; structure is the terrain.
`,

  demo: "gdp-vs-go",

  analogy: `
Think of an economy as a **film**, and GDP as the **box office**.

The box office tells you what audiences finally paid for tickets — real, useful information. But the number contains none of this: the two years a writer spent on the script, the six months the prop department spent on sets, the year of post-production, the three months the distributor spent negotiating with cinemas. Those “intermediate stages” all involved real spending, and the box office “nets them out” — because the ticket price “already includes” them.

So when someone says “audiences decide the film industry,” they are right in the box-office sense: if nobody buys a ticket, everything goes to zero. But in the **time** sense they are wrong: by the time the audience buys a ticket, the film was decided three years ago — whether to make it, how, at what cost. What really “drives” the industry is the producers' investment decisions three years back; the audience is the end, not the beginning. If producers collectively misjudged three years ago (say, everyone assumed superhero films would sell forever), a few more tickets today cannot rescue the mistakes already sunk — **the box office can look fine while the industry is in trouble**.

GO is the “production ledger” that lists the spending on script, props, effects and distribution. It is much larger than the box office, swings far more, and always moves earlier: production budgets get cut a year before ticket sales fall.

And CPI? It is like “the average ticket price” — but at which cinema? IMAX or standard? The seats are more comfortable this year: is that a price rise or a quality improvement? “Average ticket price” is a useful rough number, but it is not any actual ticket.

Hayek's warning, in this analogy: **an analyst who watches only the box office will still be saying “record ticket sales, industry healthy” a year before the industry collapses.**
`,

  misconceptions: [
    "**“Excluding intermediate goods from GDP is a mistake; GO should replace it.”** — GDP is consistent on its own terms: it answers “how much was delivered to consumers?”, a meaningful question. GO answers a different one: “how many steps did society go through to produce that?” They complement each other. The Austrian criticism is that using GDP alone hides the structure — not that GDP is miscalculated.",
    "**“Consumption is 70% of GDP, so stimulating consumption lifts the economy.”** — The 70% is manufactured by the denominator: against GO the share falls to about a third. More fundamentally, causation runs the other way — what you consume must first be produced, and production is driven by upstream saving and investment decisions. Stimulating consumption adds height to the triangle's shortest end and does nothing for the upstream that was overstretched in the boom.",
    "**“CPI is the price level; the bureau either gets it right or wrong.”** — CPI is a construction: basket, weights, substitution treatment, quality adjustment — each a reasonable but contestable choice. Two honest bureaus can differ by a point or two. Austrians go further: there is no “general price level” at all; purchasing power is an array of exchange ratios, and the question is which prices new money lifts first.",
    "**“Austrians don't use statistics, since they think economics is a priori.”** — Rothbard's America's Great Depression is full of monetary data; Mises's works cite history constantly. The Austrian position is that statistics describe history and do not generate laws: you cannot “test” diminishing marginal utility with data, but you can certainly use GO to describe the upstream collapsing first in 2008. Theory tells you where to look; data tells you what you saw.",
    "**“Government spending raises GDP, so it creates wealth.”** — G enters GDP at cost: whatever was spent is added, whether or not anyone wanted the result. Private goods enter at market price — zero if nobody buys. That asymmetry means government spending always “visibly” lifts GDP while the private activity it crowds out never appears — Bastiat's broken window in statistical form.",
  ],

  quiz: [
    {
      q: "A four-stage chain: the mine sells for 20, the mill for 45, the parts maker for 80, the assembler for 100. What are GDP and GO?",
      options: [
        "GDP 100, GO 245",
        "GDP 245, GO 100",
        "GDP 100, GO 145",
        "GDP 145, GO 245",
      ],
      answer: 0,
      explain: "GDP counts only the final product, 100 (equal to value added 20+25+35+20); GO counts every stage, 20+45+80+100 = 245. The netted-out 145 is the three B2B sales.",
    },
    {
      q: "What is the main problem with the statement “consumption is 70% of the economy”?",
      options: [
        "The bureau overcounts consumption",
        "Its denominator is GDP, which nets out all business-to-business trade; against GO the share falls to roughly a third",
        "Consumption is actually 90%",
        "Nothing — it proves consumption drives the economy",
      ],
      answer: 1,
      explain: "The same consumption goes from about 70% to about 35–40% when the denominator changes from GDP to GO. No ratio is “the true one,” but seeing only the 70% makes business spending look like a supporting actor.",
    },
    {
      q: "Why does GO fall earlier and deeper than GDP in a recession?",
      options: [
        "Because GO is measured less accurately",
        "Because government spending is only counted in GO",
        "Because GO includes the upstream and midstream, where malinvestment piles up and where recessions begin; GDP counts only the steadiest component, consumption",
        "Because GO is not adjusted for inflation",
      ],
      answer: 2,
      explain: "This is what Austrian cycle theory predicts: in 2008–09 GDP fell about 4% peak to trough while GO fell about 8%. GDP is smooth because it counts only the bottom line of the triangle.",
    },
    {
      q: "From an Austrian standpoint, what is the fundamental problem with CPI's hedonic quality adjustment?",
      options: [
        "It always overstates inflation",
        "It assumes “quality” can be measured objectively and converted into price, but value is subjective — for someone who does not need the added feature, the improvement is worth nothing",
        "It is illegal",
        "There is no problem; it is purely technical",
      ],
      answer: 1,
      explain: "Recording a twice-as-fast phone as a “price decline” assumes everyone values speed equally. Subjective value denies that premise; more fundamentally, a “general price level” has no counterpart in reality.",
    },
    {
      q: "What is the core charge of Hayek's 1974 Nobel lecture, “The Pretence of Knowledge”?",
      options: [
        "Economists use too much mathematics",
        "Statistical agencies falsify data",
        "Keynesians cannot do calculus",
        "Economics admits only measurable aggregates as evidence and thereby treats the structural relations that actually govern the economy (relative prices, the fit between stages) as if they did not exist",
      ],
      answer: 3,
      explain: "Hayek's example was 1970s stagflation: unemployment came from misallocation of labor across industries, which the number “aggregate demand” cannot see and policy aimed at it cannot cure. The moment of aggregation is the moment structure is hidden.",
    },
  ],

  further: [
    { label: "F. A. Hayek, “The Pretence of Knowledge” (Nobel lecture, 1974) — full text", url: "https://www.nobelprize.org/prizes/economic-sciences/1974/hayek/lecture/" },
    { label: "Mark Skousen, The Structure of Production (1990) — the origin of the Gross Output concept (Mises Institute catalog)", url: "https://mises.org/library/book/structure-production" },
    { label: "BEA: Gross Output by Industry (official data page)", url: "https://www.bea.gov/data/industries/gross-output-by-industry" },
    { label: "Rothbard, America's Great Depression — a model of Austrian historical description using monetary statistics", url: "https://mises.org/library/book/americas-great-depression" },
    { label: "Econlib encyclopedia: Consumer Price Indexes (construction of the CPI and the Boskin Commission debate)", url: "https://www.econlib.org/library/Enc/ConsumerPriceIndexes.html" },
  ],
};
