export default {
  id: "roundabout-production",
  stage: 3,
  order: 2,
  title: "Roundabout Production & the Hayekian Triangle",
  difficulty: "core",
  prereqs: ["time-preference"],

  oneLiner:
    "Catch fish by hand: 3 a day. Stop to make a spear: 6 a day afterwards. Stop to weave a net: 15 a day. Build a boat: 40 a day. **Taking the long way round (being roundabout) is more productive — but you have to eat while you take it.** During the two days spent on the spear there are no fish; those fish must have been saved beforehand. Böhm-Bawerk called this **roundabout production**, and in *Prices and Production* (1931) Hayek drew it as a triangle: time and stages of production along the base, the value of consumer goods as the height. **The shape of the triangle is a society's time preference** — the lower the interest rate (the more saving), the longer and flatter the triangle, the longer the chain of production, the higher output per head. This diagram is the canvas on which Stage 5.1 paints the business cycle.",

  intuition: `
The previous lesson (Stage 3.1) said interest is “the price of time.” This one answers the natural follow-up: **what does time buy?** Answer: longer, more circuitous, more productive methods of production.

In the *Positive Theory of Capital* (1889) Böhm-Bawerk told a story about a fisherman; let us retell it with numbers. A man on the shore catches fish by hand, 3 a day — just enough to live. He thinks: “With a spear I could catch 6 a day.” Making the spear takes 2 days, and during those 2 days there are no fish. What can he do? He must **eat less in advance** — say, eat 2 and save 1 for several days until he has 6 fish put by, enough to free up 2 days for spear-making. Once the spear exists, his catch doubles.

Further along: a net catches 15 a day but takes 10 days to weave. 10 days × 6 fish a day (his current ration) = 60 fish of saving. A small boat catches 40 a day but takes 40 days to build — 600 fish of saving.

You can see the pattern:

- **The more roundabout the method (make tools first, then produce with tools), the higher the final output.**
- **The more roundabout, the longer the wait, and the more “provisions” must be saved in advance.**

That is what “capital” is to an Austrian: not a pile of money, not an abstract “K,” but **a lengthened process of production held up by saving** — spear, net and boat are way-stations in that process, what Menger called **higher-order goods** (Stage 1.1).

In four lectures at the London School of Economics in 1931 (published as *Prices and Production*), Hayek compressed the idea into one diagram, now called the **Hayekian triangle**. Its horizontal axis is time — or, equivalently, the stages of production: from the earliest (mining, refining) to the latest (wholesale, retail). Its vertical axis is the accumulated value of the goods-in-process at each stage. Because value accumulates as you move downstream (ore 100 → steel 200 → parts 300 → assembled goods 400 → the finished product in the shop 500), the line is a sloping hypotenuse and the whole figure is a right triangle.

Why a triangle? Because it puts two things on the same sheet of paper: **a society's consumption (the height)** and **how much time and how many intermediate goods the society has committed in advance to produce it (the base and the area).** A long, flat triangle is a society willing to wait — high saving, low interest, long chains, high output per head. A short, steep triangle is a society that cannot afford to wait — low saving, high interest, quick-and-dirty methods only.

Note where the causal chain starts: **with human time preference.** Low time preference → more saving → lower interest → longer methods become worthwhile → the triangle stretches. Stage 3.3 shows how the triangle re-shapes when saving rises; Stage 5.1 shows what happens when a central bank counterfeits saving and stretches the triangle by force; Stage 10.1 has Garrison combine the triangle with two other diagrams into a complete macro model; and Stage 18.2 uses it to locate AI data centers — capital goods that stretch production chains to extraordinary lengths — within the structure.

**In this lesson we break it into six pieces:**

- **① The fisherman's story: hands, spear, net, boat**
- **② Why roundabout methods are more productive — and why not always**
- **③ The Hayekian triangle: time and value on one diagram**
- **④ A five-stage chain in numbers: from the mine to the shop**
- **⑤ The subsistence fund: why a longer structure needs a bigger pool of saving**
- **⑥ The triangle's shape is society's time preference**
`,

  mechanics: `
### ① The fisherman's story: hands, spear, net, boat

Lay the fisherman's four methods out as a table. The numbers are illustrative; the logic is exact:

- **Hands**: no preparation, 3 fish a day.
- **Spear**: 2 days to make, lasts 20 days, 6 fish a day. Input 2 days; over 20 days, (6−3) × 20 = 60 extra fish.
- **Net**: 10 days to weave, lasts 60 days, 15 a day. Input 10 days; over 60 days, (15−6) × 60 = 540 more than the spear.
- **Boat**: 40 days to build, lasts 200 days, 40 a day. Input 40 days; over 200 days, (40−15) × 200 = 5,000 more than the net.

Each step down the list brings the same three things: **higher output, a longer preparation period, more saving required in advance.** During the 2 spear-days he eats 6 saved fish; during the 10 net-days, 60; during the 40 boat-days, at least 600 (at a ration of 15 a day). Those stores **did not fall from the sky** — he built them by eating a little less each day; that is, his **time preference** was low enough to let him.

Böhm-Bawerk's one-line summary: **“present goods are sacrificed for a greater quantity of future goods.”** The “present goods” are the 600 stored fish; the “future goods” are the 40 fish a day once the boat exists. The ratio between them is the interest of Stage 3.1.

### ② Why roundabout methods are more productive — and why not always

Why does going the long way round raise output? Because it lets people **harness natural forces and tools.** Grabbing fish with your hands is limited by the speed of your hands; a net lets the current do the catching; a boat takes you where the fish are. Every roundabout step, Böhm-Bawerk said, splits production into two: first make intermediate goods, then produce with them — and intermediate goods amplify human effort.

But beware two common misreadings.

**First, not every detour is more productive.** Spending 40 days building a sandcastle is far more “roundabout” than fishing by hand, and yields nothing. Böhm-Bawerk's sentence carried a qualifier: **“wisely chosen”** roundabout methods. The entrepreneur's job (Stage 6.1) is precisely to judge which detours pay — there are infinitely many longer methods, and only those whose gain in output covers the cost of waiting (interest) get chosen.

**Second, “roundabout” is not the same as “takes a long time.”** Böhm-Bawerk tried to measure roundaboutness with an “average period of production,” and the concept took a beating (Knight attacked it; so, later, did the Cambridge school — see the side note in Stage 3.4). Hayek himself conceded in *The Pure Theory of Capital* (1941) that describing the capital structure by a single “length” was too crude. Contemporary Austrians (Garrison, *Time and Money*, 2001) still use the triangle but explicitly as a **schematic**: it captures the essence — production unfolds in time, and the value of goods-in-process accumulates stage by stage — not a physical quantity you could measure to two decimal places. That is an honest boundary: the triangle is a thinking tool, not an econometric model.

### ③ The Hayekian triangle: time and value on one diagram

In January 1931, at Lionel Robbins's invitation, Hayek gave four lectures at the LSE, published soon after as *Prices and Production*. The diagram from the second lecture is the hero of this lesson.

Each side means something:

- **The base (horizontal): production time / stages of production.** From the earliest stage on the far left (mining, forestry, exploration) to the last stage on the far right (retail, consumption).
- **The height (vertical, at the right end): the value of final consumer goods.** This is what the economy “puts on the table” each period, and the point to which the value of every upstream stage is ultimately imputed (Stage 1.1).
- **The hypotenuse: accumulated value at each stage.** Rising monotonically left to right, because each stage adds the contribution of original factors (labor, land) on top of the previous stage's output, plus interest for the time elapsed.

<figure><svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">The Hayekian triangle: time along the base, consumer-goods value as the height</text><polygon points="70,260 570,260 570,80" fill="var(--orange-soft)" stroke="var(--orange)" stroke-width="2"/><line x1="70" y1="260" x2="590" y2="260" stroke="var(--ink)" stroke-width="1.5"/><line x1="570" y1="270" x2="570" y2="60" stroke="var(--ink)" stroke-width="1.5"/><g stroke="var(--orange-line)" stroke-dasharray="3 3"><line x1="170" y1="260" x2="170" y2="224"/><line x1="270" y1="260" x2="270" y2="188"/><line x1="370" y1="260" x2="370" y2="152"/><line x1="470" y1="260" x2="470" y2="116"/></g><g font-size="10.5" fill="var(--muted)" text-anchor="middle"><text x="120" y="278">mining</text><text x="220" y="278">refining</text><text x="320" y="278">manufacturing</text><text x="420" y="278">wholesale</text><text x="520" y="278">retail</text></g><g font-size="10.5" fill="var(--orange-ink)" font-weight="600" text-anchor="middle"><text x="170" y="216">100</text><text x="270" y="180">200</text><text x="370" y="144">300</text><text x="470" y="108">400</text><text x="560" y="72">500</text></g><text x="320" y="300" text-anchor="middle" font-size="11.5" fill="var(--ink)">← earlier stages · production time · later stages →</text><text x="600" y="170" font-size="11" fill="var(--ink)" transform="rotate(90 600 170)" text-anchor="middle">value of consumer goods</text><text x="250" y="240" font-size="11" fill="var(--orange-ink)" font-weight="600">area ≈ goods-in-process (must be carried by saving)</text><text x="430" y="200" font-size="10.5" fill="var(--muted)" transform="rotate(-20 430 200)">slope ≈ value added per stage (incl. interest)</text></svg><figcaption>The Hayekian triangle (Prices and Production, 1931): stages/time on the horizontal axis, consumer-goods value of 500 as the height at the right, accumulated value along the hypotenuse. The area is the society's goods-in-process, which saving must feed.</figcaption></figure>

The **area** has an intuitive meaning: it is the total value of **everything currently in the pipeline and not yet in a consumer's hands** — ore at the mine, ingots at the smelter, parts in the warehouse, stock at the wholesaler. None of it can be eaten or worn, yet the workers producing it **must eat and be clothed today.** The bigger the area, the more the society has to “front.” Which brings us to the subsistence fund.

### ④ A five-stage chain in numbers: from the mine to the shop

Turn the triangle into an accounting table. Take a minimal economy with a five-stage chain, each stage taking one year, an interest rate of 5%, and 500 of consumer goods sold each year:

- **Stage 1, mining**: labor and land in, ore out, sold to the smelter → value **100**
- **Stage 2, refining**: buys ore for 100, adds labor and equipment, sells steel → value **200** (value added 100)
- **Stage 3, manufacturing**: buys steel for 200, makes parts → value **300** (value added 100)
- **Stage 4, wholesale**: buys parts for 300, assembles, ships, stores → value **400** (value added 100)
- **Stage 5, retail**: buys for 400, displays, sells → consumers pay **500** (value added 100)

Each stage's “value added 100” has two parts: the **return to original factors** at that stage (wages, rent) and **interest** — the smelter paid 100 for ore a year ago and only now recovers it; at 5%, that is 5 of interest. So, precisely, the refining stage pays 95 to original factors and 5 in interest; as downstream stages front more and more (manufacturing 200, wholesale 300, retail 400), the interest share rises stage by stage (10, 15, 20). **The sum of interest along the whole chain is the price society pays for “waiting five years.”**

Now the area: at any moment the chain holds ore (100), steel (200), parts (300) and assembled goods (400) in transit — **1,000** of goods-in-process, twice the annual consumption of 500. That is the triangle's “area.” If the chain had only three stages (100 → 300 → 500), goods-in-process would be just 400. **The longer the chain, the more sits on the road.**

The numbers also reveal something essential: **every stage's price is imputed upward from downstream, not marked up from upstream cost** (Stage 1.1). If consumers will only pay 400 next year, retailers will only pay wholesalers 320, and the squeeze runs all the way up until ore is worth about 80. Upstream prices are the **discounted** value of downstream prices, and the discount rate is the interest rate — a point that becomes decisive in Stage 5.1: **a change in the rate hits upstream prices far harder than downstream ones**, just as a long bond is more rate-sensitive than a short one.

### ⑤ The subsistence fund: why a longer structure needs a bigger pool of saving

Back to the fisherman. During the 40 boat-building days he eats 15 fish a day, and those 600 fish must **already exist.** Böhm-Bawerk called this stock of pre-existing consumer goods that feeds people during a production process the **subsistence fund**.

In a modern economy the subsistence fund is no longer dried fish in a shed; it is **saving** — the part of income people do not spend. Through banks, bonds and equity it flows to firms, which use it to pay miners, smelters and assemblers so they can live before the product reaches a consumer. **The essence of saving is that consumers temporarily release part of their consumer goods to feed those who are producing for the future.**

Hence a hard constraint: **how far the triangle can stretch depends on how large a subsistence fund the society has accumulated.** In numbers:

- Suppose consumption is 500 a year and saving 100 — just enough to cover the annual depreciation and turnover of a five-stage chain carrying 1,000 of goods-in-process (order-of-magnitude intuition only).
- If people become more willing to wait and saving rises to 200, the society can carry a chain of seven or eight stages with 2,000 in process; being more roundabout, it yields more than 500 of consumer goods a few years later.
- If people become impatient and saving falls to 50, the chain must shorten: upstream stages starved of funding are cut, goods-in-process are eaten and not replaced, future output falls — that is **capital consumption**.

Now the reverse question: **can the triangle be stretched without real saving?** In the short run, yes — banks create credit out of nothing (Stage 4.4), entrepreneurs get cheap money to open mines and build plants, and the base extends leftward. But the subsistence fund has not grown: consumers have not eaten any less. So upstream workers and downstream consumers are **simultaneously** grabbing at the same pile of consumer goods; prices rise, raw materials run short, upstream projects stall half-built. That is the whole plot of Stage 5.1. For now, remember the constraint: **a stretch without saving is an illusion.**

### ⑥ The triangle's shape is society's time preference

Now join Stage 3.1 to this lesson.

- A society with **low time preference**: people demand little compensation for waiting, so the rate is low — say 2%. At 2%, many long projects yielding 3% or 4% (deep wells, hydro dams, chip fabs, R&D that pays off in five years) are worthwhile. Entrepreneurs lengthen the chain and the triangle becomes **long and flat**: a long base (many stages) and a gentle slope (interest is a small share of each stage's value added). Current consumption dips slightly during the stretching years (saving rose), but the height of the consumer-goods column is **greater** every year thereafter.
- A society with **high time preference**: people are in a hurry to consume, so the rate is high — say 15%. Only very high-yield, quick projects pay; chains are short; the triangle is **short and steep**. Current consumption is high, but nothing accumulates and the future height does not grow.

The slope corresponds to the rate: **the higher the rate, the steeper the discount from upstream value to downstream value.** This also explains why a country's interest-rate level and its capital intensity are so tightly linked — not through a mechanical “low rates stimulate investment” relation, but because **a low rate itself means people are willing to give up more of the present for a more distant future.**

A final, honest footnote. The Hayekian triangle is a drastic simplification: real capital structures have loops (steel mills produce the steel that builds steel mills), durable goods (one machine serves several stages over many years), and general-purpose capital serving many final products (Lachmann's “multiple specificity,” Stage 3.4). The triangle drops all of that and keeps one core insight: **production unfolds in time, the value of goods-in-process is imputed downstream along the chain, the whole chain is fed by saving, and the chain's length is set by the interest rate — that is, by time preference.** Hold on to that, and Stage 3.3's “how saving re-shapes the stages” and Stage 5.1's “how credit expansion distorts them” both become legible. The demo lets you drag the saving slider yourself and watch the triangle deform.
`,

  demo: "hayek-triangle",

  analogy: `
Think of a society's structure of production as **the supply line of a long expedition.**

The destination is “consumption” — the meal at the end. The man catching fish by hand is eating on the beach where he stands: supply-line length zero. The spear-maker has walked two days inland; the net-weaver ten; the boat-builder forty — they are **further from that final meal**, but they come back with far more food.

At every station along the line (mine, smelter, factory, warehouse, shop) people are working, and **they must eat today**, even though what they make will not be edible for years. Who feeds them? **The people back home who ate a little less** — the savers. How long the line can be depends on how much provision has been stockpiled behind it. Ample provisions (low time preference) let the expedition push hundreds of miles in and bring back a big haul; scant provisions (high time preference) keep it circling the suburbs.

The Hayekian triangle is the map of that supply line: the base is the distance, the height is the haul at the end, the area is **all the material in transit along the way.** Interest is the rent on provisions — the more plentiful they are, the cheaper the rent, the further the expedition dares to go.

Now imagine a commander who, to look like he is making rapid progress, **forges the provisions ledger.** On paper the stores are ample, so the expedition drives hundreds of miles into the interior. Halfway there, headquarters discovers the real stock was only ever enough for the suburbs. Either the front starves and retreats (liquidation), or the people at home are forced to go hungry (forced saving). That is the story of Stage 5.1. For this lesson, just remember the map itself: **the length of the supply line is always bounded by the provisions.**
`,

  misconceptions: [
    "**“More roundabout methods are always more productive, so lengthening the chain is always good.”** — Böhm-Bawerk said “wisely chosen” roundabout methods. Spending 40 days on a sandcastle is more roundabout than fishing by hand and yields nothing. Which detours are worth taking depends on whether the gain in output covers the cost of waiting (interest) — a matter of entrepreneurial judgment, not a mechanical law.",
    "**“Capital is money, or a summable stock K.”** — To Austrians, capital is a production process unfolding in time and carried by saving: spear, net, boat, ore, steel, parts. Each has a place, a purpose, and partners it fits with; no segment of the triangle can be swapped at will (Stage 3.4 develops this). “K” erases the time dimension and the structure along with it.",
    "**“The Hayekian triangle is a precisely measurable model.”** — It is a schematic. Real structures have loops, durable goods and general-purpose capital serving many end products; Böhm-Bawerk's “average period of production” was shown long ago to be hard even to define. The triangle captures the core — production in time, value imputed downstream, the chain fed by saving — not a quantity to be estimated.",
    "**“Saving is hoarding money and withdrawing it from the economy, so more saving means more depression.”** — Saving releases part of present consumer goods to feed those producing for the future (the subsistence fund). If the fisherman never eats less, the boat never gets built. Saving is not a “leakage”; it is the only fuel that lets the triangle stretch — Stage 3.3 answers Keynes's paradox of thrift directly.",
    "**“A low rate just makes borrowing cheaper; it has nothing to do with the length of the chain.”** — The rate is the discount from upstream to downstream value, and hence the triangle's slope. Cut it from 5% to 2% and five-year projects that did not pay now do; the chain extends upstream. Behind a genuine low rate there is genuine saving; behind an artificial one there is none — the difference is whether the subsistence fund actually grew.",
  ],

  quiz: [
    {
      q: "The fisherman catches 3 fish a day by hand. A net takes 10 days to weave and then yields 15 a day. What must he do before weaving it?",
      options: [
        "Nothing — output doubles automatically once the net exists",
        "Save about 30 fish first (10 days × a 3-fish ration) so he can eat while weaving",
        "Borrow fish from his future self",
        "Sell the spear to buy a net",
      ],
      answer: 1,
      explain: "Roundabout production requires a **subsistence fund**: the 10 weaving days produce nothing, so the rations must be saved in advance. No saving, no roundaboutness — the hard constraint of capital theory.",
    },
    {
      q: "What does the height of the Hayekian triangle (the vertical side at the right) represent?",
      options: [
        "Society's total saving",
        "The interest rate",
        "The value of final consumer goods",
        "The number of production stages",
      ],
      answer: 2,
      explain: "The base is production time/stages, **the height is the value of final consumer goods each period**, the hypotenuse is accumulated value by stage, and the area is goods-in-process. All upstream value is imputed to that height.",
    },
    {
      q: "A five-stage chain: ore 100 → steel 200 → parts 300 → assembled 400 → finished 500. If consumers will pay only 400 next year, what is most likely?",
      options: [
        "Ore stays at 100 because its cost has not changed",
        "Only the retailer loses; upstream is unaffected",
        "The interest rate falls automatically to compensate",
        "Every stage is marked down proportionally and ore is worth about 80 — upstream prices are the discounted value of downstream prices",
      ],
      answer: 3,
      explain: "Prices are **imputed** from downstream to upstream (Stage 1.1), not marked up from cost. When downstream value shrinks, upstream value is discounted accordingly, and the furthest upstream stages are the most sensitive.",
    },
    {
      q: "A society's time preference falls (people become more willing to wait). How does the triangle change?",
      options: [
        "Longer and flatter: the rate falls, more long projects pay, the chain extends upstream",
        "Shorter and steeper, because consumption falls",
        "Same shape, just smaller overall",
        "Smaller area, because there are fewer goods in process",
      ],
      answer: 0,
      explain: "Low time preference → more saving → lower rate → long projects yielding 3% or 4% become worthwhile → more stages, gentler slope. Current consumption dips slightly; the future height is greater.",
    },
    {
      q: "What does the slope of the hypotenuse roughly correspond to?",
      options: [
        "The wage rate",
        "Value added per stage — of which the interest share rises with the interest rate",
        "The inflation rate",
        "The government's share of spending",
      ],
      answer: 1,
      explain: "Each stage's value added contains returns to original factors and interest. The higher the rate, the steeper the discount from upstream to downstream and the steeper the triangle; the lower the rate, the flatter and longer.",
    },
  ],

  further: [
    { label: "Hayek, Prices and Production (1931) — the triangle appears in Lecture II (full text, Mises Institute)", url: "https://mises.org/library/book/prices-and-production" },
    { label: "Böhm-Bawerk, Capital and Interest, Vol. II Positive Theory of Capital — roundabout production and the subsistence fund", url: "https://mises.org/library/book/capital-and-interest-three-volumes" },
    { label: "Garrison, Time and Money (2001) — the standard contemporary treatment of capital-based macro built on the triangle", url: "https://mises.org/library/book/time-and-money-macroeconomics-capital-structure" },
    { label: "Hayek, The Pure Theory of Capital (1941) — Hayek's own revision of the “average period of production” simplification", url: "https://mises.org/library/book/pure-theory-capital" },
    { label: "Econlib Encyclopedia: Austrian School of Economics (includes a section on the structure of production)", url: "https://www.econlib.org/library/Enc/AustrianSchoolofEconomics.html" },
  ],
};
