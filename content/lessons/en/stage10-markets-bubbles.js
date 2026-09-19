export default {
  id: "markets-bubbles",
  stage: 10,
  order: 3,
  title: "Financial Markets through Austrian Eyes: Stocks, Bonds & Bubbles",
  difficulty: "systems",
  prereqs: ["abct-one-picture", "cantillon-inflation"],

  oneLiner:
    "What is the price of a share? The mainstream says “the discounted value of future cash flows” — and Austrians agree completely, then ask one more question: **where does the discount rate come from?** If it has been pushed down artificially by a central bank, every valuation is being lifted by the same lever, and **the further an asset's cash flows lie in the future, the higher it is lifted**. That is why, at zero rates in 2020–21, companies that would “turn a profit in ten years” saw their market values multiply, and why, when rates returned to 4% in 2022, they lost two-thirds of it. This lesson reads the stock market as a map of the capital structure and bubbles as credit phenomena rather than mere “crowd madness,” and repeats throughout: **theory gives you direction and fragility, not timing. Nothing here is investment advice.**",

  intuition: `
Start with the simplest thing in finance: **the price of any asset is what its future payments are worth today.** A company pays you 10 a year, forever. If you demand a 5% return it is worth 10 ÷ 0.05 = 200; if you demand only 1%, it is worth 10 ÷ 0.01 = 1,000. Same company, same 10 a year, and the price is five times higher simply because the discount rate went from 5% to 1%.

That is not an Austrian discovery; it is page one of every finance textbook. What Austrians do is bring in the question from Stage 3.5 and Stage 5.1: **where did that 5% or 1% come from?** If it reflects savers' real time preference — the natural rate — then valuations reflect how long society is genuinely willing to wait for the future. If it is the result of a central bank pushing the market rate below the natural rate, then every discounted price is telling a lie — the same lie, in different amounts.

Why different amounts? Because assets differ in **duration**. A company that makes money now (a utility, say) draws most of its value from the next five years of cash flow, and a change in the discount rate touches it only modestly. A company that will “be profitable in ten years” (a cash-burning software firm) draws almost all its value from the distant future, and a change in the discount rate swings its value like the end of a long lever. **When rates fall, long-duration assets rise the most; when rates rise, they fall the hardest.** In 2020–21 the Fed took rates to zero and doubled its balance sheet, and what rose most wildly were exactly the unprofitable “story stocks,” SPACs and cryptocurrencies; in 2022, with rates back above 4%, those assets fell 60–80% while the Nasdaq as a whole lost about a third — the same lever, swinging back.

That leads to the second Austrian angle on the stock market: **it is a map of the capital structure.** Mark Skousen pointed out that listed companies can be lined up by “distance from final consumption”: mining, semiconductor equipment and industrial machinery upstream; software platforms and biotech research further upstream still (their cash flows are the most distant); retail, food and utilities downstream. The three diagrams of Stage 10.1 say credit expansion stretches the upstream end of the triangle — and in the stock market that shows up as upstream and long-duration sectors rising first and most, and falling first when the boom breaks. What Wall Street calls “sector rotation” is, through Austrian eyes, the triangle being stretched and then snapping back.

The third angle concerns **bubbles**. The mainstream has two strong bubble theories: Shiller's “irrational exuberance,” in which bubbles are contagions of psychology and narrative; and Kindleberger and Minsky, for whom bubbles are endogenous to the financial system — a credit cycle that slides from “hedge” to “speculative” to “Ponzi” finance. To both, Austrians say “yes, and —”: narratives do spread, but **without new credit a narrative cannot afford to buy assets**; Minsky's credit cycle is right, but he never asked why credit can expand round after round — the answer is the fractional-reserve banking of Stage 4.4 and the central bank of Stage 4.5. A bubble is first a monetary phenomenon; psychology is its amplifier.

The last angle demands the most humility: **theory tells you direction and fragility, not timing.** Austrians can say “long-duration assets at zero rates are overvalued and the structure is fragile”; they cannot say “it falls next quarter.” Through the 2010s many Austrian investors who “knew” the bubble was inflating sat in cash for a decade and missed one of the longest bull markets in history — Stage 14.4 is devoted to that permabear lesson, and Stage 10.5 to turning the theory into a framework that does not depend on timing.

Before the mechanics, the first of three repetitions: **this lesson is about frameworks and history, and constitutes no investment advice of any kind.**

**In this lesson we break it into six pieces:**

- **① Prices are discounted expectations: how the rate flows straight into valuations**
- **② Duration: why a “story” is more rate-sensitive than “cash”**
- **③ The stock market as a capital-structure map: Skousen and sector rotation**
- **④ Bubbles are credit phenomena: Shiller and Minsky first, then the reply**
- **⑤ Bond yields vs the natural rate, and the 2020–22 everything bubble and repricing**
- **⑥ The Austrian caution: direction and fragility, not timing**
`,

  mechanics: `
### ① Prices are discounted expectations: how the rate flows straight into valuations

The basic formula of finance is one Austrians accept whole, because it is simply the time preference of Stage 3.1 applied:

$$
Asset price P = Σ CF_t ÷ (1 + r)^t
CF_t: the cash you expect in year t;  r: the discount rate (required return)
$$

It says: what an asset is worth today equals each future year's payment, discounted for “waiting t years,” summed. The discount rate r has three parts: the risk-free rate (the market price of time preference), a risk premium (compensation for uncertainty), and expected inflation. The central bank moves the first directly and the other two indirectly (holding rates down pushes people toward risk and compresses risk premia).

Take the simplest case: a utility that pays you a steady 10 a year forever (a perpetuity):

- r = 5%: P = 10 ÷ 0.05 = **200**
- r = 3%: P = 10 ÷ 0.03 = **333**
- r = 1%: P = 10 ÷ 0.01 = **1,000**

Not a cent of cash flow changed; the price rose fivefold. That is what “the rate flows straight into valuations” means — no story, no emotion, pure arithmetic. When the Fed cut to zero in March 2020 and promised to stay there “for an extended period,” it was announcing to every asset: the denominator just shrank.

The sentence Austrians add is this: **if r has been pushed below the natural rate, then the amount by which P is overvalued is exactly the size of the lie in the rate.** A society whose savers genuinely require 5%, turned by the central bank into a 1% market — of that 1,000 valuation, 800 is air. That is not “the market being wrong”; it is the market correctly discounting a wrong rate.

### ② Duration: why a “story” is more rate-sensitive than “cash”

Now compare two companies whose cash flows over the next 30 years add up to about the same total but are **distributed in time** completely differently:

- **The cash cow**: 10 a year from year 1, 300 over 30 years.
- **The growth story**: only 0.7 in year 1, growing 15% a year — 2.5 in year 10, 10 in year 20, about 40 in year 30; also about 300 over 30 years.

Value them at different discount rates:

$$
r = 5%:  cash cow ≈ 154,  growth story ≈ 100
r = 1%:  cash cow ≈ 258,  growth story ≈ 241
from 5% to 1%:  cash cow ×1.7,  growth story ×2.4
$$

The same rate cut lifts the growth story far more than the cash cow. In reverse, from 1% back to 5%, the growth story falls about 58% and the cash cow about 40%. Finance calls this sensitivity **duration** — roughly, “how many years, on average, until your money comes back.” The further out the cash flows, the longer the duration, the greater the rate sensitivity.

This is not abstract. The assets that rose most in 2020–21 all had extreme duration: unprofitable tech (cash flows “someday”), SPACs (cash flows “from some project after the merger”), cryptocurrencies (no cash flows; duration approaching infinity), 30-year Treasuries (duration around 20 years). When the Fed went from 0 to 4.5% in 2022, their declines lined up almost perfectly by duration: the ARK Innovation fund about 75% below its peak, long-Treasury ETFs down about 30%, the S&P 500 down about 25%, while utilities and consumer staples fell only single digits. **The theory predicts the ranking, not the numbers** — the numbers depend on countless other factors, but the ranking is explained almost entirely by duration.

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">The same rate change swings long-duration assets the most</text><line x1="60" y1="240" x2="600" y2="240" stroke="var(--line)" stroke-width="1.5"/><line x1="60" y1="240" x2="60" y2="50" stroke="var(--line)" stroke-width="1.5"/><text x="600" y="256" text-anchor="end" font-size="10" fill="var(--muted)">discount rate r</text><text x="66" y="60" font-size="10" fill="var(--muted)">value today</text><text x="120" y="256" text-anchor="middle" font-size="10" fill="var(--muted)">1%</text><text x="240" y="256" text-anchor="middle" font-size="10" fill="var(--muted)">2%</text><text x="360" y="256" text-anchor="middle" font-size="10" fill="var(--muted)">3%</text><text x="480" y="256" text-anchor="middle" font-size="10" fill="var(--muted)">4%</text><text x="590" y="256" text-anchor="middle" font-size="10" fill="var(--muted)">5%</text><polyline points="120,68 240,91 360,110 480,125 590,138" fill="none" stroke="var(--blue)" stroke-width="2.5"/><text x="128" y="62" font-size="11" fill="var(--blue)" font-weight="600">cash cow: 258 → 154 (−40%)</text><polyline points="120,79 240,113 360,138 480,158 590,174" fill="none" stroke="var(--red)" stroke-width="2.5"/><text x="300" y="196" font-size="11" fill="var(--red)" font-weight="600">growth story: 241 → 100 (−58%)</text><rect x="100" y="40" width="60" height="200" fill="var(--orange-soft)" opacity=".5"/><text x="130" y="230" text-anchor="middle" font-size="10" fill="var(--orange-ink)">2020–21</text><rect x="460" y="40" width="60" height="200" fill="var(--blue-soft)" opacity=".5"/><text x="490" y="230" text-anchor="middle" font-size="10" fill="var(--blue)">2022</text><text x="320" y="285" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">The further out the cash flows, the longer the lever — it rises most at zero rates and falls hardest when rates normalize</text></svg><figcaption>Two companies with similar 30-year cash-flow totals but different durations. From 5% to 1% the growth story rises 2.4× and the cash cow 1.7×; back at 5% the former falls about 58%, the latter about 40%.</figcaption></figure>

### ③ The stock market as a capital-structure map: Skousen and sector rotation

In *The Structure of Production* (1990) and later essays, Mark Skousen proposed a distinctively Austrian lens: **read the stock market as a cross-section of the Hayekian triangle.** Every listed company sits somewhere along the chain of production:

- **Farthest upstream / longest duration**: mining and energy exploration, semiconductor equipment, biotech research, foundational software platforms, venture-backed “companies of the future.” Their products pass through many stages before becoming consumer goods, or their cash flows arrive many years out.
- **Midstream**: industrial machinery, chemicals, components, logistics, enterprise software.
- **Downstream / shortest duration**: retail, food and beverages, utilities, everyday services. Their products go straight into consumption and their cash flows are steady.

The three diagrams of Stage 10.1 say credit expansion pushes the rate down, stretches the triangle's upstream end, lifts its downstream end and hollows out the middle. Mapped onto the stock market, that is **a predictable sector rotation**:

- **Early boom**: rates fall; long-duration assets (tech, biotech, property development) rise first and most. Mining and equipment follow as upstream orders swell.
- **Late boom**: the scramble for resources begins; raw-material and energy prices rise and eat upstream profits; inflation expectations stir and rates start to climb.
- **Bust**: long-duration assets fall first and hardest (a larger denominator plus downgraded cash-flow expectations); midstream machinery and components lose orders as upstream projects are abandoned; downstream staples and utilities hold up relatively well, because their cash flows do not depend on upstream projects being completed.

This rotation appeared, roughly, in 2000 (internet and telecom equipment collapsed first, staples held), in 2008 (property and finance first), and in 2022 (unprofitable tech and crypto first; energy and utilities held). **It is not an Austrian discovery** — Wall Street's “sector rotation” playbooks long predate it — but Austrians supply the causal explanation: it is not “style preferences” rotating; it is the triangle being stretched and snapping back.

### ④ Bubbles are credit phenomena: Shiller and Minsky first, then the reply

The mainstream has two very strong bubble theories, and they must be stated at full strength first.

**Robert Shiller, *Irrational Exuberance* (2000).** Shiller's argument: asset prices move far more than fundamentals (dividends, earnings) can justify — that is his 1981 “excess volatility” paper, the work that won him the Nobel. The extra movement comes from **contagious narratives**: stories like “the internet changes everything” or “house prices never fall” spread through populations like epidemics, amplified by media, social pressure and “everyone else is making money.” His cyclically adjusted price–earnings ratio (CAPE) flashed warnings in both 2000 and 2007. Shiller's theory has real explanatory power, and his warning record is better than most Austrians'.

**Kindleberger, *Manias, Panics, and Crashes* (1978), and Minsky's financial-instability hypothesis.** Minsky's argument: stability breeds instability. A calm stretch lets firms and households slide from “hedge finance” (cash flows cover interest and principal) to “speculative finance” (cash flows cover only interest; principal must be refinanced) to “Ponzi finance” (even interest is paid by new borrowing). The credit structure grows more fragile until a small shock — the “Minsky moment” — triggers deleveraging. Kindleberger applied the model to centuries of history: displacement (a new technology, a new market) → credit expansion → mania → distress → panic. It is a cycle theory endogenous to the financial system, and it was widely rediscovered after 2008.

The Austrian reply, to both, is “yes, and —”:

**To Shiller**: narrative contagion is real, and Austrians have no reason to deny psychology. But note an accounting fact: **to push the price of an asset class up threefold, someone has to bring three times the money to buy it.** A narrative can make people want to buy — but where does the money come from? Without credit expansion, one person buying more requires another buying less (or consuming less), and the room for asset prices to rise in aggregate is bounded by real saving. Every great bubble in history — the South Sea of 1720, US stocks in the 1920s, Japan in the 1980s, the Nasdaq of 2000, housing in 2006, everything in 2021 — coincided with rapid expansion of credit or the money supply. **Psychology is the amplifier; credit is the power supply.** Shiller explains why a particular asset class was chosen; Austrians explain why the money was there.

**To Minsky**: the slide from hedge to Ponzi finance is an accurate description of a boom — the malinvestment piling up in Stage 5.2 is, in Minsky's language, ever more projects turning into speculative finance. But Minsky never asked the next question: **why can credit expand round after round without being constrained by real saving?** In a world of 100% reserves or hard money, a bank can only lend what someone has first deposited, and Ponzi finance quickly hits a funding ceiling. Minsky treats elastic credit as a natural tendency of the financial system; Austrians point to its institutional preconditions — the fractional reserves of Stage 4.4 and the central bank as lender of last resort in Stage 4.5. Minsky's prescription is more regulation; the Austrian prescription is to remove the institutions that manufacture elastic credit.

Put the three together: **Shiller tells you where the bubble is, Minsky tells you how it becomes brittle, and the Austrians tell you what inflates it.**

### ⑤ Bond yields vs the natural rate, and the 2020–22 everything bubble and repricing

The bond market is the “denominator market” for all of this. The 10-year Treasury yield anchors nearly every discount rate. The Austrian question when looking at it: **how far is this yield from the natural rate?**

The natural rate is unobservable (Stage 3.5), but there are circumstantial witnesses: the real saving rate, labor-force growth, productivity growth. When a central bank buys government bonds on a large scale (quantitative easing) it pushes yields down directly — in 2020 the Fed's balance sheet expanded from about 4 trillion to about 9 trillion dollars, and the 10-year yield briefly fell below 0.6%. A rough judgment: if an economy's nominal growth is about 4–5% and its 10-year yield is 0.6%, the yield is almost certainly below the natural rate — because, over the long run, the rate cannot stay far below the economy's return without triggering malinvestment.

**The 2020–21 “everything bubble”** (all figures approximate):
- Fed funds at 0–0.25%; the 10-year yield bottoming near 0.5%.
- M2 grew about 40% over 2020–21 — unprecedented in peacetime.
- The Nasdaq rose about 130% from its March 2020 low to its November 2021 high; the ARK Innovation fund about 3.5×; Bitcoin from about 4,000 to about 69,000 dollars; SPAC issuance set records; US house prices rose about 35% in two years.
- A textbook Cantillon effect (Stage 4.3): the new money reached financial assets first, and CPI caught up a year later.

**The 2022 repricing**:
- The Fed hiked from March to December to 4.25–4.5%; the 10-year yield rose to about 4%.
- The Nasdaq fell about 33%, the S&P 500 about 19%; ARK about 75% from its peak; Bitcoin about 65%; long-Treasury ETFs about 30% — stocks and bonds fell together, and the classic 60/40 portfolio had one of its worst years in decades.
- The declines ranked almost perfectly by duration: the further from cash flow, the harder the fall.

The Austrian reading of this episode: **the denominator was pushed down and everything was lifted; the denominator normalized and everything was set back down.** Most of the magnitude can be explained without assuming “crowd madness” — though madness was present too. Stage 5.4 and Stage 13.4 cover this history from the cycle and policy sides; Stage 16.5 takes up GameStop as an extreme case of narrative and reflexivity; Stage 18.5 asks whether today's AI capital spending is the next instance.

### ⑥ The Austrian caution: direction and fragility, not timing

Second repetition: **nothing here is investment advice.** Now the reasons the theory itself demands that caution.

**The theory speaks to direction**: a depressed rate → long-duration assets overvalued → they fall hardest when the rate normalizes. That ranking follows from the logic of action, and history roughly confirms it.

**The theory speaks to fragility**: a valuation structure built on a 1% discount rate is more fragile than one built on 5% — more sensitive to changes in the denominator. That too can be read straight off the formula.

**The theory does not speak to timing**: when will the rate normalize? In the 2010s the answer was “ten years later.” In 2021 it was “one year later.” Austrian theory has nothing to say about that — it depends on central bankers' political decisions, on when inflation expectations slip, on which unexpected shock triggers the panic — all of which are “history” in the sense of Stage 2.3, not “theory.”

**Nor does the theory speak to magnitude**: a 30% fall or a 70% fall? That depends on leverage, liquidity and the strength of the narrative — none of it in the theory.

So all an honest Austrian investor can say is: “this structure is fragile, this direction carries risk, this class of asset is the most sensitive.” Not: “it crashes next year.” The lesson of the 2010s (Stage 14.4) is that those who said the latter, even when the direction was right, lost heavily by being a decade early — the opportunity cost of sitting in cash (Stage 1.4) is a real loss. Stage 10.5 shows how to turn “direction + fragility” into a decision framework that does not depend on timing: not forecasting when it will rain, but deciding whether to carry an umbrella.

Third and last repetition, and the lesson's closing sentence: **what you have read is a way of thinking and a piece of history, not a recommendation to buy or sell anything.**
`,

  demo: "rate-to-valuation",

  analogy: `
Picture every asset as **a weight hanging from a long beam**. The beam's pivot is “today,” and each weight hangs at a distance equal to “how many years until your money comes back.”

A utility's weight hangs close in — cash next year. A cash-burning tech company's weight hangs far out — cash in ten years. A cryptocurrency's weight hangs at the very end of the beam, or beyond it.

**The interest rate is the beam's angle.** When the central bank holds rates down, it raises the far end of the beam: weights near the pivot barely move; weights far out are lifted into the sky. That was 2020–21: utilities up a little, story stocks up severalfold.

**When rates rise, the beam levels**: the near weights settle gently; the far weights come crashing down. That was 2022.

**Shiller** sees people rushing to hang new weights at the far end (narratives persuade them that far-out things are valuable). **Minsky** sees the beam rising ever higher, with more and more weights hung by borrowed rope. **The Austrians** see who is lifting the beam — the central bank's hand.

**The Austrian caution** is this: you can see that the beam is raised too high and that the far weights are the most dangerous, but you do not know when the hand lets go. It could be tomorrow; it could be ten years from now. What you can do is decide where your own weight hangs — not bet on the hand's schedule.
`,

  misconceptions: [
    "**“Austrians deny that psychology plays a role in bubbles.”** — They do not. Shiller's narrative contagion is a real mechanism. What Austrians add is an accounting constraint: a narrative makes people want to buy, but pushing an asset class up threefold requires three times the money, and without credit expansion that money does not exist. Psychology is the amplifier, credit the power supply; both are needed.",
    "**“A rate cut affects all stocks the same way.”** — Same direction, hugely different magnitude. The further out the cash flows (the longer the duration), the more sensitive the valuation. From 5% to 1% the cash cow rises 1.7× and the growth story 2.4×; back at 5% the former falls about 40% and the latter about 58%. The 2022 declines ranked almost entirely by duration.",
    "**“If Austrians can explain bubbles, they can predict when they burst.”** — The theory gives direction (which assets are overvalued) and fragility (how sensitive the structure is to the denominator), not timing or magnitude. When the rate normalizes depends on politics and accidents — history, not theory. Austrian investors who said “crash next year” in the 2010s had the direction right and were a decade early; the opportunity cost of sitting out was a real loss.",
    "**“Minsky's financial-instability hypothesis and the Austrian theory are the same thing.”** — They overlap: the slide from hedge to Ponzi finance is the financial version of malinvestment piling up. But Minsky treats elastic credit as a natural tendency of finance and prescribes more regulation; Austrians point to its institutional preconditions — fractional reserves and a lender of last resort — and prescribe removing the institutions that manufacture elastic credit.",
    "**“This lesson is telling me what to buy.”** — It is not. It explains how rates lever valuations, how sectors rotate as the triangle stretches, and what inflates bubbles — frameworks and history throughout. It recommends no asset; Stage 10.5 explains why Austrian theory itself forbids treating it as an investment instruction.",
  ],

  quiz: [
    {
      q: "A company pays you a steady 10 a year forever. The discount rate falls from 5% to 1%. Its value goes from what to what?",
      options: [
        "200 → 250",
        "200 → 1,000",
        "100 → 500",
        "Unchanged, since the cash flow did not change",
      ],
      answer: 1,
      explain: "A perpetuity is worth CF ÷ r: 10 ÷ 0.05 = 200, 10 ÷ 0.01 = 1,000. Not a cent of cash flow changed and the price rose fivefold — the rate flowing straight into the valuation.",
    },
    {
      q: "Why did unprofitable tech companies fall far more than utilities when rates rose in 2022?",
      options: [
        "Because their products were bad",
        "Because utilities are protected by government",
        "Because investors irrationally dumped tech",
        "Because their cash flows lie in the distant future — long duration — so their valuations are the most sensitive to the discount rate",
      ],
      answer: 3,
      explain: "The further out the cash flows, the longer the lever. From 1% back to 5% the growth story falls about 58% and the cash cow about 40%. The 2022 declines ranked almost perfectly by duration.",
    },
    {
      q: "What is the Austrian reply to Shiller's “irrational exuberance”?",
      options: [
        "Psychology is not economics; Shiller is simply wrong",
        "Narrative contagion is real, but pushing assets up takes real money, and without credit expansion that money does not exist — psychology is the amplifier, credit the power supply",
        "Shiller is an Austrian",
        "Bubbles do not exist; markets are always efficient",
      ],
      answer: 1,
      explain: "Austrians do not deny the psychological mechanism; they add an accounting constraint — every great bubble coincided with rapid credit or money-supply expansion. Shiller explains why an asset class was chosen; Austrians explain why the money was there.",
    },
    {
      q: "On Skousen's view of the stock market as a capital-structure map, which sectors rise first and most in the early boom?",
      options: [
        "Retail and food (downstream)",
        "Utilities",
        "Long-duration upstream sectors: tech, biotech, property development, mining equipment",
        "All sectors rise evenly",
      ],
      answer: 2,
      explain: "Credit expansion stretches the triangle's upstream end; in the market that shows as the sectors farthest from consumption, with the most distant cash flows, rising first and most — and falling first in the bust. Downstream staples and utilities hold up relatively well.",
    },
    {
      q: "What can Austrian theory say about financial markets, and what can it not?",
      options: [
        "It can speak to direction and fragility; it cannot speak to timing or magnitude",
        "It can predict the exact date of a crash",
        "It can say nothing, because economics is a priori",
        "It can speak to timing but not direction",
      ],
      answer: 0,
      explain: "Depressed rate → long-duration assets overvalued → they fall hardest on normalization: that is direction. A structure built on 1% is more fragile than one built on 5%: that is fragility. When it normalizes and how far things fall depend on politics and accidents — history, not theory.",
    },
  ],

  further: [
    { label: "Mark Skousen, The Structure of Production (1990) — the source of the stock market as a cross-section of the capital structure", url: "https://mises.org/library/book/structure-production" },
    { label: "Robert Shiller, Irrational Exuberance — the book's official page, with CAPE data", url: "http://www.irrationalexuberance.com/" },
    { label: "Hyman Minsky, “The Financial Instability Hypothesis” (1992, Levy Institute working paper)", url: "https://www.levyinstitute.org/pubs/wp74.pdf" },
    { label: "Mises Institute: Business Cycles topic page (Austrian cycle theory applied to markets)", url: "https://mises.org/topics/business-cycles" },
    { label: "Econlib encyclopedia: Present Value (the foundation of discounting and valuation)", url: "https://www.econlib.org/library/Enc/PresentValue.html" },
  ],
};
