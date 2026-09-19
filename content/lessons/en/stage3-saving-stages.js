export default {
  id: "saving-stages",
  stage: 3,
  order: 3,
  title: "Saving, Investment & the Re-shaping of Production Stages",
  difficulty: "core",
  prereqs: ["roundabout-production"],

  oneLiner:
    "What happens when a whole society suddenly saves a little more? Keynes's answer: demand falls, incomes fall, everyone ends up poorer — the “paradox of thrift.” The Austrian answer is entirely different: **saving is not money “leaking” out of the economy; it is demand for future goods, and the interest rate translates that demand to entrepreneurs.** The rate falls; late stages close to the consumer (retail, restaurants) shrink; early stages (mining, R&D, machine-building) expand — resources migrate upstream along the Hayekian triangle. A little less consumption today, much more a few years from now. This lesson walks through the re-shaping with a five-stage numerical example, and answers Keynes head-on — after stating his case at its strongest.",

  intuition: `
The triangle of the last lesson (Stage 3.2) stood still: it pictured the structure of production at one moment. This lesson sets it in motion: **when people decide to save more, how does the triangle deform?**

A thought experiment first. A small town earns 1,000 a year, consuming 800 and saving 200. One year the townspeople collectively become more patient — perhaps the young start planning for retirement, perhaps a new conviction (“leave something for the children”) catches on — and consumption falls to 750 while saving rises to 250.

A Keynesian immediately worries: restaurants lose customers, shops sell fewer clothes, merchants' incomes fall, they lay people off, the laid-off spend even less … the whole town spirals down. This is the famous **paradox of thrift**: thrift is a virtue for the individual and a disaster for society.

The Austrian asks you to look one step further. Where did the extra 50 units of saving go? They did not vanish — they went into banks, bonds, equity. **The supply of saving rises and the interest rate falls**, say from 5% to 4%. Whom does a lower rate affect most? The projects **furthest from the consumer**: a mine that pays off in five years, a production line that takes three years to build, research that returns nothing for a decade. Projects that did not pay at 5% pay at 4%. Entrepreneurs borrow the cheaper money and begin hiring people to dig, build and research.

So the town shows a picture of **contrast**: restaurants and shops (late stages) really are shrinking, but mines, machine shops and laboratories (early stages) are expanding. **The waiter laid off by the restaurant is hired by the machine shop.** Total demand has not “fallen”; it has **changed address** — from the right end of the triangle (consumption) to the left end (early-stage investment). That is the **upstream migration** of resources along the chain of production.

Wait a few years. The mine is open, the machines are built, the research has paid off — the more roundabout structure starts to deliver. The town's annual output of consumer goods rises from 800 to 900, then 1,000. **The bite forgone back then bought several extra bites every year afterwards.** That is no paradox; it is planting a tree before sitting in its shade.

So where does Keynes go wrong? Not in the arithmetic but in the **structure**. Keynes's model has two buckets: consumption C and investment I. Saving rises, C falls, and if I does not automatically fill the gap, total demand drops. In the Austrian triangle there is no single bucket called “investment”; there is **a sequence of stages** — and a rise in saving produces not one number, “I goes up,” but a **relocation from late stages to early stages**, guided by the interest rate and relative prices. In the mechanics we state Keynes's version at its strongest, including the part he got right (the conditions under which the rate genuinely fails to transmit the signal), and then give the Austrian reply.

The lesson also sets up Stage 5.2: if the triangle's re-shaping is driven not by **real saving** but by **credit banks create out of nothing**, the same upstream expansion happens — but the late stages do not shrink. Both ends grab for resources at once, and that is where malinvestment begins.

**In this lesson we break it into six pieces:**

- **① The moment saving rises: the rate, consumer demand and derived demand**
- **② Resources migrate upstream: relative prices and the Ricardo effect**
- **③ A five-stage example in numbers: from 100/200/300/400/500 to a new chain**
- **④ The interest rate's intertemporal coordination: translating “later” into “now”**
- **⑤ Keynes's paradox of thrift: the strongest version and the Austrian reply**
- **⑥ A little less now, much more later: the shape of sustainable growth**
`,

  mechanics: `
### ① The moment saving rises: the rate, consumer demand and derived demand

Translate “people are more willing to save” into the language of Stage 3.1: **society's time preference has fallen.** At any given rate, more people are willing to trade present goods for future goods — the supply curve of loanable funds shifts right and the rate falls. That is the first signal.

The second signal appears in the market for consumer goods: more saving means **less current consumption spending.** Retailers see inventory turning over more slowly; restaurants see fewer tables filled. Revenue at these consumer-facing **late stages** falls, and so do their purchases from the stage above. That reduction travels a short way up the chain — but **the further up it goes, the weaker it gets.** Why?

Because demand at every upstream stage is **derived demand**: ore is wanted for steel, steel for parts, parts for finished goods. The value at each link is the **discounted value of the downstream future** selling price (the example in Stage 3.2). And the rate has just fallen — **the discount is smaller, so future selling prices are worth more today.** For the furthest upstream stages, the negative effect of “selling prices a little lower” is **outweighed** by the positive effect of “discount rate lower.” Like a 30-year bond: even with a slightly smaller coupon, if the rate falls enough, its price still rises.

Put the two signals together and the picture **diverges**:

- **Late stages** (retail, wholesale, restaurants): lower demand + small benefit from the lower rate → **contract**
- **Early stages** (mining, exploration, R&D, machine-building): slightly lower demand + large benefit from the lower rate → **expand**
- **Middle stages**: roughly unchanged

This is the most counter-intuitive and most important step in Austrian capital theory: **more saving does not push every industry into recession together; it tilts the industrial structure upstream.**

### ② Resources migrate upstream: relative prices and the Ricardo effect

How does the “tilt” actually happen? Through **relative prices**, not through anyone's plan.

- **Consumer-goods prices fall relatively.** People buy less; retail prices come under pressure.
- **Higher-order goods rise relatively.** The lower rate raises the present value of mines, equipment and research results; entrepreneurs bid for them.
- **Wages move by stage**: late-stage employers hire less, early-stage employers hire more. The waiter's wage slips a little, the miner's and engineer's rise a little, and labor moves accordingly.

In papers of 1939 and 1942 Hayek described a supplementary mechanism he called the **Ricardo effect** — after an observation in Ricardo's *Principles of Political Economy and Taxation*: **when wages rise relative to product prices, firms substitute machinery for labor.** In the rising-saving scenario, consumer-goods prices fall relatively, which means **real wages** (what wages buy) rise relatively. Firms find labor dearer and machinery cheaper (the rate is low), so they switch to more capital-intensive, more roundabout methods — which further raises demand for machines, the products of early stages. The Ricardo effect thus twists the “rate signal” and the “consumer-price signal” into one cord.

A candid footnote: the Ricardo effect is among the most contested parts of Hayek's theory. Nicholas Kaldor attacked it in 1942 as resting on too many auxiliary assumptions, and Hayek himself later stopped treating it as central. Most Austrians today (Garrison included) rely mainly on the **differing discount sensitivity of different stages** — the “30-year bond” logic of ① — to explain upstream migration. The Ricardo effect is a supplement, not the trunk.

### ③ A five-stage example in numbers: from 100/200/300/400/500 to a new chain

Walk through it with the numbers from Stage 3.2. **Before**: annual income 600, consumption 500, saving 100 (just enough to cover depreciation and turnover on 1,000 of goods-in-process; the figures are illustrative). Rate 5%. Accumulated value at five stages:

- Mining 100 → Refining 200 → Manufacturing 300 → Wholesale 400 → Retail 500

**Now time preference falls**: consumption drops to 450, saving rises to 150. The rate falls to 4%. Entrepreneurs find that at 4% one more, earlier stage (exploration/R&D) pays, so the chain goes from five links to six. The new chain spreads 450 of consumer-goods value across six stages:

- Exploration/R&D **75** → Mining **150** → Refining **225** → Manufacturing **300** → Wholesale **375** → Retail **450**

Stage by stage (old → new):

- Retail: 500 → 450, **−50** (late stage contracts)
- Wholesale: 400 → 375, **−25**
- Manufacturing: 300 → 300, **0** (middle unchanged)
- Refining: 200 → 225, **+25**
- Mining: 100 → 150, **+50** (early stage expands)
- Exploration/R&D: 0 → 75, **+75** (a new stage appears)

Goods-in-process (all stages except retail): old 100+200+300+400 = **1,000**; new 75+150+225+300+375 = **1,125**. The triangle is longer, the area larger, and it needs more saving to carry it — supplied by the extra 50 of saving (illustratively).

<figure><svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Re-shaping after a rise in saving: late stages shrink, early stages grow, the chain lengthens</text><g font-size="10.5" text-anchor="end" fill="var(--muted)"><text x="118" y="58">Exploration/R&amp;D</text><text x="118" y="92">Mining</text><text x="118" y="126">Refining</text><text x="118" y="160">Manufacturing</text><text x="118" y="194">Wholesale</text><text x="118" y="228">Retail</text></g><g fill="var(--blue)" opacity=".35"><rect x="126" y="80" width="80" height="12" rx="3"/><rect x="126" y="114" width="160" height="12" rx="3"/><rect x="126" y="148" width="240" height="12" rx="3"/><rect x="126" y="182" width="320" height="12" rx="3"/><rect x="126" y="216" width="400" height="12" rx="3"/></g><g fill="var(--orange)"><rect x="126" y="46" width="60" height="12" rx="3"/><rect x="126" y="94" width="120" height="12" rx="3"/><rect x="126" y="128" width="180" height="12" rx="3"/><rect x="126" y="162" width="240" height="12" rx="3"/><rect x="126" y="196" width="300" height="12" rx="3"/><rect x="126" y="230" width="360" height="12" rx="3"/></g><g font-size="10.5" font-weight="600"><text x="192" y="56" fill="var(--green)">0 → 75  +75</text><text x="252" y="104" fill="var(--green)">100 → 150  +50</text><text x="312" y="138" fill="var(--green)">200 → 225  +25</text><text x="372" y="172" fill="var(--muted)">300 → 300  0</text><text x="452" y="206" fill="var(--red)">400 → 375  −25</text><text x="532" y="240" fill="var(--red)">500 → 450  −50</text></g><g font-size="10.5" fill="var(--muted)"><rect x="126" y="262" width="14" height="10" fill="var(--blue)" opacity=".35"/><text x="146" y="271">before (rate 5%, 5 stages)</text><rect x="316" y="262" width="14" height="10" fill="var(--orange)"/><text x="336" y="271">after (rate 4%, 6 stages)</text></g><text x="320" y="300" text-anchor="middle" font-size="11" fill="var(--ink)">The 50 units released by retail reappear in mining and exploration — demand did not vanish, it moved</text><text x="320" y="320" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">goods-in-process 1,000 → 1,125: a longer chain, fed by the extra saving</text></svg><figcaption>The five-stage example: saving rises from 100 to 150, the rate falls from 5% to 4%. Late stages (retail, wholesale) contract, early stages (mining) expand, and a new earliest stage (exploration/R&D) is born.</figcaption></figure>

**Look three years ahead.** The six-stage structure is more roundabout and more productive than the five-stage one. Suppose it lifts annual income from 600 to 672 (illustratively). People still save a quarter, so consumption = 672 × 0.75 = **504** — already above the pre-shift 500, and still rising. That is the arithmetic of “one bite less now, several bites more later.”

### ④ The interest rate's intertemporal coordination: translating “later” into “now”

Look back at the most elegant feature of the re-shaping: **nobody gave an order.** No planning board decreed “retail shrinks 10%, mining expands 50%, open an exploration department.” Two price signals did it all: **the interest rate** and **relative prices**.

Think about what a saver is actually saying. Someone who eats 50 units less and puts them by is saying: “I don't want to consume now; I want to consume **later**.” That is a statement of **future demand**. The problem: how are entrepreneurs to know when “later” is, what will be wanted, how much?

The rate is the translator. It condenses the wishes of thousands of savers — “I'd rather consume later” — into a single number that tells every entrepreneur: **“Waiting has become cheaper; go do the things that take longer to finish.”** Relative prices (consumer goods down, higher-order goods up) tell them where exactly to go: out of retail, into mining. Hayek called this **intertemporal coordination** — the market coordinates not only “who produces what today” but also “whether what is done today matches what will be wanted tomorrow.” It is the time-dimension version of Stage 7.2's knowledge problem: **no single person knows society's time preference, but the rate does.**

It also explains why the credit expansion of Stage 5.1 is so damaging: it corrupts precisely this translator. When the rate is pushed down artificially, entrepreneurs hear “people want to consume later” when nobody actually said so.

### ⑤ Keynes's paradox of thrift: the strongest version and the Austrian reply

Now face Keynes directly. **First, his argument at its strongest** — far more formidable than the textbook cartoon:

“Suppose there are idle resources — unemployed workers, factories running below capacity. Saving rises and consumption spending falls. **Does investment automatically fill the gap?** Only if investment is sufficiently sensitive to the rate. But investment decisions depend mainly on entrepreneurs' expectations of **future sales** (‘animal spirits’), not on small movements in the rate. Watching consumption slide, entrepreneurs become **less** willing to invest, not more. So total demand falls and income falls — and since **saving is a function of income**, total saving may end up lower, not higher. Worse, if the rate is already very low (a liquidity trap) it cannot fall further, and the signal cannot get through. Individuals try to save more; society ends up saving less.”

Under **its assumptions** the argument is coherent, and Austrians should say so. The Austrian reply is not “Keynes miscalculated” but a check of each assumption:

**First, saving is not a leakage; it is demand for future goods.** Keynes's model has two aggregates, C and I, and no stages. Add the structure of production and “consumption falls” is no longer a net drop in total demand but a relocation of demand from late to early stages (the example in ③). Retail's −50 and mining-plus-exploration's +125 cancel invisibly in a C+I view (Stage 10.2 shows how aggregates hide structure), but for the allocation of resources they are the whole story.

**Second, investment is not insensitive to the rate; different stages are differently sensitive.** Keynes says investment follows expectations, not the rate — plausible for a retailer's store expansion; but for a 20-year mine or a 10-year research program, a move from 5% to 4% changes net present value by 15–20% (the bond analogy of Stage 3.2). When saving rises, exactly these long projects switch on.

**Third, saving is not hoarding.** Part of the paradox is right: if people do not lend the money but **stuff it in a mattress**, there is indeed no rate signal — but that is not saving; it is a rise in the **demand for money**, a different problem (Stage 4.2) resolved by an adjustment of the price level. Conflating “saving” with “hoarding cash” is the paradox's most common sleight of hand.

**Fourth, Austrians should honestly grant what Keynes got right**: if prices and wages are institutionally frozen (minimum wages, union contracts, price controls), or if the rate is pinned by the central bank and cannot reflect the change in saving, then the signal really does fail, the re-shaping really does jam, and Keynes's spiral really can occur. The Austrian answer: **those rigidities are usually the product of policy** (Stage 8.2), and the cure is to remove them, not to paper over them with more demand stimulus. Stage 11.1 lays out the whole Austrian–Keynesian dispute.

### ⑥ A little less now, much more later: the shape of sustainable growth

Plot this lesson's example over time and you get a curve of a particular shape: **consumption dips slightly, then rises steadily, and overtakes its old level within a few years.** Garrison, in *Time and Money* (2001), calls this **sustainable growth** — “sustainable” because the stretching of the triangle behind it is backed by real saving: the expansion of early stages is matched by a contraction of late stages that frees the resources, so nothing runs short halfway.

Contrast the **unsustainable boom** of Stage 5.2: credit expansion pushes the rate down and early stages expand — but because nobody actually saved more, late stages **do not contract**; with cheap consumer credit they may even expand too. Both ends of the triangle swell and the middle is stretched thin. In the GDP numbers it looks like rapid growth; in fact capital is being consumed. The two curves differ in exactly one respect: **whether the expansion of early stages is paired with a contraction of late stages.** This lesson is the paired version; the next two stages are the unpaired one.

The demo lets you drag a “share of income saved” slider and watch the six stage bars trade places, the rate fall and two-period consumption change; then flip the “Keynesian view” switch to see the wholly different story the same slider tells inside an aggregate model — side by side, you can see precisely at which level the disagreement lives.
`,

  demo: "saving-shift",

  analogy: `
Think of the structure of production as a **relay team**, passing the baton — value — from the first runner far upstream (exploration) to the last (retail), who hands it to the consumer.

One day the spectators (consumers) announce: “We're going to watch fewer races this year and save the ticket money; next year we want to see something better.” The Keynesian coach panics: ticket revenue is down, the team will have to disband!

The Austrian coach hears the second half of the sentence. The spectators have not stopped wanting races; they want **better races later.** The saved ticket money goes into a bank, the cost of borrowing falls — and the coach finds he can now afford things he couldn't before: send the first runner to altitude camp for two years, buy a new timing system, recruit an extra specialist in starts (a new furthest-upstream stage). So the last runner's (retail's) training budget is cut 10%, the first runner's is doubled, and the team gains a leg. **The team did not disband; it got longer, and its weight shifted forward.**

Two years later the altitude training pays off, the new recruit starts faster, and the whole team runs far better than before. The spectators return to races better than the ones they skipped — the few races forgone bought better racing every year after.

When does it go wrong? If the spectators **did not actually skip any races**, and the sports ministry forged a report saying “spectator saving is up,” the coach still sends people to altitude and still buys equipment — but the last runner's budget is not cut, because the tickets are still selling. Both ends of the team expand and there isn't enough food money in the middle. That is Stage 5.2. For now, remember: **real saving is the spectators themselves saying “later”; the interest rate is how the coach hears it.**
`,

  misconceptions: [
    "**“Saving is money leaking out of the economy; the more saving, the less demand.”** — Saving is demand for future goods: the saver is saying “I want to consume later,” and the falling rate carries that message to entrepreneurs. The 50 that disappeared from retail reappears as +125 in mining and exploration. Total demand did not fall; it moved along the chain — and looking only at the two aggregates C and I makes the move invisible.",
    "**“A lower rate benefits every industry equally.”** — The rate is a discount rate, and stages further from the consumer are more sensitive to it — as a 30-year bond is more rate-sensitive than a 1-year bill. When saving rises, late stages shrink because consumption fell, while early stages grow because the discount fell. That divergence is the mechanism of upstream migration.",
    "**“The paradox of thrift has proved saving is harmful.”** — Keynes's argument holds only under its assumptions: rigid prices, a rate that cannot transmit the signal, saving equated with hoarding cash. Austrians answer each: saving is not hoarding (that is money demand, Stage 4.2); long projects are highly rate-sensitive; price rigidity is usually policy-made. What Keynes got right — trouble when the signal is blocked — is an argument for unblocking it, not for stimulus.",
    "**“The re-shaping under more saving and the one under credit expansion are the same thing.”** — The crucial difference is whether late stages contract. Real saving: consumption falls, early stages rise, resources are freed, the re-shaping is sustainable. Credit expansion: the rate is pushed down, early stages rise, but consumption does not fall and late stages keep expanding — both ends grab resources at once, the malinvestment of Stage 5.2. The same-looking “investment boom,” a completely different structure.",
    "**“The Ricardo effect is the core mechanism of Austrian capital theory.”** — It is a supplementary mechanism Hayek proposed in 1939–42 (rising real wages → machinery substituted for labor), heavily contested, sharply criticized by Kaldor, and later de-emphasized by Hayek himself. Today Austrians explain upstream migration mainly through the differing rate-sensitivity of stages; the Ricardo effect is auxiliary. Treating it as the core would build the theory on its weakest brick.",
  ],

  quiz: [
    {
      q: "The five-stage chain 100/200/300/400/500 becomes, after saving rises, a six-stage chain 75/150/225/300/375/450. What are the changes at retail and at the furthest upstream stage, and what do they show?",
      options: [
        "Retail −50, exploration/R&D +75; total demand fell",
        "Retail +50, exploration/R&D −75; saving suppressed investment",
        "Retail −50, exploration/R&D +75; demand moved from late to early stages and did not vanish",
        "Neither changes, because the rate moved too little",
      ],
      answer: 2,
      explain: "**Saving is demand for future goods.** Retail's −50 pairs with mining's +50 and exploration's +75: resources migrate upstream and the chain lengthens (goods-in-process 1,000 → 1,125).",
    },
    {
      q: "Why do early stages expand when saving rises, even though consumer demand has fallen?",
      options: [
        "Because the government subsidizes upstream industries",
        "Because early-stage value is the discounted future downstream price, and the fall in the rate outweighs the slight fall in that price",
        "Because workers prefer mining jobs",
        "Because lower consumer demand automatically becomes raw-material demand",
      ],
      answer: 1,
      explain: "Early stages behave like long bonds: **the gain from a lower discount rate exceeds the loss from a slightly smaller coupon.** Late stages are the reverse. This difference in sensitivity is the main mechanism of upstream migration.",
    },
    {
      q: "On which key assumption does the strongest version of Keynes's paradox of thrift rest?",
      options: [
        "Investment depends mainly on expectations and is insensitive to the rate, and the rate may be unable to fall (liquidity trap), so a fall in consumption is not automatically offset by investment",
        "People never save",
        "Saving turns into investment instantly",
        "Prices are always perfectly flexible",
      ],
      answer: 0,
      explain: "That is the heart of Keynes's logic. The Austrian reply: long projects are highly rate-sensitive; saving differs from hoarding cash; price rigidity is often policy-made. **State it at its strongest, then answer point by point.**",
    },
    {
      q: "What is meant by the interest rate's “intertemporal coordination”?",
      options: [
        "The central bank using the rate to manage inflation",
        "The rate translating savers' wish to “consume later” into the signal to entrepreneurs that longer projects now pay",
        "The rate making everyone consume at the same time",
        "The rate setting the level of wages",
      ],
      answer: 1,
      explain: "No one knows society's time preference, but the rate does — it condenses thousands of people's demand for “later” into one number that guides entrepreneurs to lengthen the chain. This is the time-dimension version of Stage 7.2's knowledge problem.",
    },
    {
      q: "What is the decisive difference between a re-shaping driven by real saving and one driven by credit expansion?",
      options: [
        "The rate rises in the first and falls in the second",
        "The first affects only retail, the second only mining",
        "There is no difference; both are just more investment",
        "In the first, early stages expand while late stages contract and free resources; in the second, early stages expand but late stages do not contract, so both ends grab resources at once",
      ],
      answer: 3,
      explain: "Sustainable growth has the shape “consumption dips slightly, then rises steadily,” because upstream expansion is paired with downstream contraction. Credit expansion lacks the pairing — exactly where Stage 5.2's malinvestment begins.",
    },
  ],

  further: [
    { label: "Garrison, Time and Money (2001), Ch. 4 — sustainable growth driven by a rise in saving (full text, Mises Institute)", url: "https://mises.org/library/book/time-and-money-macroeconomics-capital-structure" },
    { label: "Hayek, Prices and Production (1931), Lecture II — how voluntary saving re-shapes the stages of production", url: "https://mises.org/library/book/prices-and-production" },
    { label: "Hayek, “Profits, Interest and Investment” (1939) — the original statement of the Ricardo effect", url: "https://mises.org/library/book/profits-interest-and-investment" },
    { label: "Keynes, The General Theory (1936), Ch. 7 “The Meaning of Saving and Investment” — the paradox of thrift in the original", url: "https://www.marxists.org/reference/subject/economics/keynes/general-theory/" },
    { label: "Rothbard, Man, Economy, and State, Ch. 8 “Production: Entrepreneurship and Change” — changes in saving and the structure of production", url: "https://mises.org/library/book/man-economy-and-state-power-and-market" },
  ],
};
