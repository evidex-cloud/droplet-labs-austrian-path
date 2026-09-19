export default {
  id: "ai-capital-good",
  stage: 18,
  order: 2,
  title: "AI as a Capital Good: New Stages in the Structure of Production",
  difficulty: "newera",
  prereqs: ["roundabout-production", "heterogeneous-capital"],

  oneLiner:
    "Behind one AI chat reply stands one of the longest production chains in human history: Dutch lithography machines → Taiwanese fabs → Nvidia's chip designs → data centers costing billions apiece → hundreds of megawatts of power → models trained for months → application layers → the answer on your phone. This lesson treats AI **as a capital good**: a **higher-order good** in Menger's sense (Stage 1.1), sitting at the far end of an extremely roundabout structure of production (Stage 3.2) and therefore acutely sensitive to interest rates (Stages 3.3, 10.3); built from **complementary and specific** heterogeneous capital — GPUs, models, data (Stage 3.4) — with short economic lives, so depreciation is a real cost; complementary to labor and a substitute for it at once (Stage 18.4); and with the whole uncertainty borne by identifiable owners (Stage 6.1). We end honestly: Austrian capital theory needs updating on **intangible capital and near-zero replication.**",

  intuition: `
You open a chat window, type a question, and two seconds later an answer appears. The “cost” of that experience looks like zero — or twenty dollars a month. Pull the camera back and you see a chain.

At the very top sits ASML's extreme-ultraviolet lithography machine in the Netherlands, roughly two hundred million dollars each, a few dozen built per year. It is shipped to a TSMC fab in Taiwan — a leading-edge fab costs roughly twenty to thirty billion dollars and takes three to five years to build. The fab cuts GPUs to Nvidia's design; a flagship card sells for tens of thousands of dollars. Tens of thousands of cards go into a data center — billions of dollars, plus hundreds of megawatts of power, cooling and fiber. Those cards then train a model over months, at a cost anywhere from tens of millions to billions. The model is wrapped in an application, and the application is sold to you. **Your twenty dollars is the consumer valuation at the very end of that chain, and the value of every link above it is imputed upward, order by order, from that twenty dollars.**

This is Menger's “orders of goods” from Stage 1.1: bread is a first-order good, flour second, wheat third. The AI application is first-order, the model second, the data center third, the GPU fourth, the fab fifth, the lithography machine sixth. **No order carries value of its own** — the lithography machine is worth two hundred million dollars because, at the end of the line, someone will pay twenty dollars for the answers it indirectly produces, and hundreds of millions of someones will.

Once you see this, a lot of popular claims fall into place on their own:

- “AI will make everything free” — no. Its **marginal** cost of use may be very low, but upstream of it stands the most expensive and longest capital structure ever built, and that capital must be recovered from paying consumers or it becomes the malinvestment of Stage 5.2.
- “Nvidia is taking all the money” — by imputation, high profits upstream are the shadow of high **expected** valuations downstream plus temporary upstream scarcity. If the expectations come true, competition and new capacity flatten the profits; if they fail, upstream gets hurt first.
- “AI data centers are the new power plants and railways” — half right. All are roundabout, capital-intensive infrastructure. The other half is wrong: **a GPU's economic life may be three to six years; a railway embankment lasts a century.** That difference is one of the cores of this lesson.

Why are Austrians especially well placed to analyze AI? Because the three foundation stones of Austrian capital theory line up exactly with three features of AI:

1. **Roundaboutness and time** (Stage 3.2): the AI chain is extremely long — years from lithography to answer. The longer the chain, the more sensitive to interest rates: a one-point cut in rates moves the present value of upstream stages far more than downstream ones. That explains why AI investment took off in the low-rate years, and where its fragility lies.
2. **Heterogeneity and specificity** (Stage 3.4): a GPU is not “one unit of capital”; it is a specific thing. A model is more specific still; a dataset is specific almost to the point of non-transferability. And they are **complements** — a GPU without power is scrap; a model without data is an empty shell.
3. **Ownership and uncertainty** (Stage 6.1): hundreds of billions in capex is not “society” investing; it is a handful of named companies, their shareholders and their creditors placing bets. Right, and the profit is theirs; wrong, and so is the loss — which is the precondition for markets to self-correct.

Austrians also have something to update. The capital goods Böhm-Bawerk and Hayek described were physical: machines, buildings, inventories. AI's core asset — the model weights — is a file that can be copied at near-zero cost. It does not wear out like a machine, yet it can become **obsolete** overnight when the next generation ships. Capital theory has to take that seriously; Stage 15.3 opened the topic, and this lesson takes one more step.

**In this lesson we break it into six pieces:**

- **① Menger's orders: from lithography machine to that one answer**
- **② Roundaboutness, interest and duration: why AI investment is so rate-sensitive**
- **③ Complementarity and specificity: GPUs, models, data and power as one jigsaw**
- **④ Depreciation is a real cost: how fast short-lived capital must earn itself back**
- **⑤ AI and labor: complement or substitute, and who bears the uncertainty**
- **⑥ Where Austrian theory needs updating: intangible capital and near-zero replication**
`,

  mechanics: `
### ① Menger's orders: from lithography machine to that one answer

In the very first chapter of the *Principles of Economics* (1871), Menger sorted goods into **orders**: goods that satisfy wants directly are first-order; goods used to produce them are second-order; and so on. His key proposition is **imputation** (Stage 1.1): the value of a higher-order good derives from the value of the lower-order goods it helps produce, and ultimately from consumers' valuations.

Lay out the AI stack by order, with rough magnitudes (approximate, circa 2025):

- **First order**: AI applications and services — chat subscriptions, coding assistants, customer-service bots, ad recommendation. Consumers and firms pay for these.
- **Second order**: models — training a frontier model costs on the order of tens of millions to billions of dollars; inference (each answer) costs from a fraction of a cent to a few dollars.
- **Third order**: data centers and power — a large AI data center runs from several billion to over ten billion dollars and draws hundreds of megawatts up to gigawatts; in 2024–25 the hyperscalers (Microsoft, Alphabet, Amazon, Meta and others) together spent roughly hundreds of billions of dollars a year on capital equipment.
- **Fourth order**: GPUs and accelerators — Nvidia's data-center revenue runs at roughly a hundred billion dollars or more a year; a flagship card costs tens of thousands.
- **Fifth order**: fabs — a TSMC leading-edge fab costs roughly twenty to thirty billion dollars and takes three to five years.
- **Sixth order**: lithography and equipment — an ASML EUV machine costs roughly two hundred million dollars; a few dozen ship per year.
- **Higher still**: rare earths, helium, ultrapure water, chemicals, and the universities that trained the engineers.

Read the table through imputation and two things are immediately clear. First, **high prices upstream are the shadow of expected valuations downstream.** GPUs are scarce and fabs run full not because they carry value “in themselves,” but because hundreds of millions of users and hundreds of thousands of firms at the end of the chain are expected to keep paying. Second, **expectations can be wrong.** If first-order valuations fall short, the price signal **floods back up the chain**: apps cut prices → model labs shrink training budgets → data-center utilization drops → GPU orders get cancelled → fabs cut output. That is exactly the path along which malinvestment surfaces in Stage 5.2 — only the chain is longer and the transmission slower.

### ② Roundaboutness, interest and duration: why AI investment is so rate-sensitive

The core of Böhm-Bawerk's *Positive Theory of Capital* (1889): **more roundabout production is more productive but takes more time**; willingness to wait is set by time preference and shows up as the interest rate (Stages 3.1, 3.2). Hayek's *Prices and Production* (1931) drew it as a triangle — stages of production along the horizontal axis, value at each stage on the vertical; the lower the rate, the longer the triangle, as society is willing to send resources further upstream (Stage 3.3).

The AI stack is one of the longest Hayekian triangles you can draw. Count the time: a lithography machine takes one to two years from order to delivery; a fab three to five years to build; a data center one to three; model training months to a year; an application a few months more to launch. **From “decide to invest” to “the first consumer pays,” five to ten years elapse.**

That brings in **duration** from Stage 10.3. Duration is originally a bond concept: the further away the cash flows, the more the price responds to the interest rate. A zero-coupon bond paying in ten years rises about 21% in price when the rate falls from 5% to 3%; one paying in a year rises about 2%. Capital goods behave the same way: **the further an investment's returns lie in the future, the more its present value swings with the rate.**

A worked example. Suppose a data center will throw off one billion dollars of net cash flow a year in years 3 through 8:

- At 8%: present value about $4.0 billion.
- At 4%: about $4.8 billion.
- At 1%: about $5.7 billion.

A project further upstream — a fab that starts producing in five years and runs for ten more — is more rate-sensitive still. That explains two things: **why the near-zero rates of 2020–21 gave AI infrastructure a shove at takeoff** (the 2020–22 episode of Stage 5.4), and **why, after rates rose sharply in 2022–23, markets started asking over and over “when does the capex pay back?”** Austrians need not say “it is all a bubble.” They need only point out that **the value of this chain is extremely elastic to the interest rate, and the interest rate is something that can be artificially pushed down** (Stage 3.5) — which is the doorway to Stage 18.5.

<figure><svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">AI's Hayekian triangle: the further upstream, the more rate-sensitive the present value</text><g font-size="11" fill="var(--muted)"><text x="70" y="290" text-anchor="middle">Lithography</text><text x="150" y="290" text-anchor="middle">Fabs</text><text x="230" y="290" text-anchor="middle">GPUs</text><text x="310" y="290" text-anchor="middle">Data centers</text><text x="390" y="290" text-anchor="middle">Models</text><text x="470" y="290" text-anchor="middle">Apps</text><text x="550" y="290" text-anchor="middle">Consumers</text></g><line x1="40" y1="270" x2="600" y2="270" stroke="var(--line)" stroke-width="1.5"/><polygon points="40,270 580,270 580,90" fill="var(--orange-soft)" stroke="var(--orange)" stroke-width="2"/><polygon points="120,270 580,270 580,150" fill="none" stroke="var(--blue)" stroke-width="2" stroke-dasharray="6 4"/><text x="588" y="94" font-size="11" fill="var(--orange-ink)" font-weight="600">low rate</text><text x="588" y="154" font-size="11" fill="var(--blue)" font-weight="600">high rate</text><g font-size="10.5"><text x="70" y="252" text-anchor="middle" fill="var(--red)">5–10 yrs</text><text x="150" y="252" text-anchor="middle" fill="var(--red)">3–5 yrs</text><text x="230" y="252" text-anchor="middle" fill="var(--orange-ink)">1–2 yrs</text><text x="310" y="252" text-anchor="middle" fill="var(--orange-ink)">1–3 yrs</text><text x="390" y="252" text-anchor="middle" fill="var(--muted)">months</text><text x="470" y="252" text-anchor="middle" fill="var(--muted)">weeks</text></g><text x="60" y="60" font-size="11" fill="var(--muted)">time until “the consumer pays” →</text><text x="320" y="312" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">As rates fall the triangle stretches left: the furthest stages (lithography, fabs) open up — and close first when rates rise</text></svg><figcaption>The AI production structure as a Hayekian triangle. At low rates the triangle reaches upstream (gold); at high rates the furthest stages disappear (blue dashed). The links furthest from the consumer have the longest duration and the greatest rate sensitivity.</figcaption></figure>

### ③ Complementarity and specificity: GPUs, models, data and power as one jigsaw

Lachmann's two concepts from Stage 3.4 — **complementarity** and **multiple specificity** — show up in textbook form across the AI stack.

**Complementarity.** A GPU needs power, cooling, networking, a building, a software stack, data and engineers; remove any one and its output is close to zero. That is not a metaphor: in 2024–25 several reports described data centers leaving purchased GPUs idle while waiting in queues for grid connections. **The value of a capital good lies not in itself but in the plan it is embedded in** — Lachmann's line has never been more vivid than in the image of a card worth tens of thousands of dollars sitting in a warehouse for want of a cable.

**Specificity.** Rank the AI stack's capital goods by “how many things can it do”:

- **Power and buildings**: most general. A data-center shell and substation can be repurposed (at a discount).
- **GPUs**: moderately specific. They can train, run inference, do scientific computing, render — but nothing else, and once the next generation ships they become uneconomic at all of it.
- **Model weights**: highly specific. A model fine-tuned for one task loses most of its value in another; a frontier model falls off a cliff when its successor appears.
- **Proprietary datasets**: almost perfectly specific. Valuable for training one class of model, nearly worthless for anything else.

Specificity determines **how large the loss is when a plan fails** (the “stranding” of Stage 3.4). General capital goods can be picked up by other plans; specific ones collapse to salvage value. If a data center completed in 2025 finds that the demand it assumed never arrives, its shell and grid connection can be resold, its GPUs resold at a discount, and the model it trained may be worth nothing. **Specificity in the AI stack rises as you move downstream — and downstream is exactly the end closest to consumers and most exposed to novelty shocks** (Stage 18.1).

There is one more complement peculiar to AI: **people.** A model needs labelers, fine-tuning engineers, prompt designers and the people who wire it into a business. A job “replaced by AI” is often replaced along the chain by three jobs “working with AI” — a preview of Stage 18.4, and the boundary between “complement” and “substitute” in this section.

### ④ Depreciation is a real cost: how fast short-lived capital must earn itself back

Austrians are sometimes criticized for “drawing triangles and ignoring depreciation.” This lesson puts depreciation at dead center, because it is the most underrated variable in any analysis of AI investment.

Railway embankments, hydroelectric dams and fiber conduits have economic lives of thirty to a hundred years. A GPU? Physically a card can run five to seven years, but its **economic life** — the period over which it can still produce at a competitive cost — depends on when the next generation ships. Nvidia's cadence is roughly a generation every one to two years, each roughly doubling or better in compute per dollar. So the **economic** life of a card is widely discussed as somewhere between three and six years, and cloud providers' accounting assumptions differ (several companies have in recent years lengthened server depreciation to about six years; some investors have publicly argued that this is too optimistic). We do not adjudicate that dispute; we just do the arithmetic:

Take a $10 billion AI data center: $6 billion in GPUs (economic life 4 years) and $4 billion in shell and power (life 20 years). Annual **depreciation**: $1.5 billion on GPUs, $0.2 billion on the shell — $1.7 billion. Add cost of capital (say 6%, $0.6 billion) and power plus operations (about $1 billion). **This data center must generate roughly $3.3 billion of gross margin a year just to avoid a loss.** If its downstream customer is an application charging $20 a month, that is about 14 million continuously paying users — for this one data center.

Generalize: **the shorter the life of the capital, the higher and faster the cash flow needed to recover it.** That is what the “annual depreciation” slider and the readout “years of consumer demand needed to justify this capex” in this lesson's demo mean. It is not a forecast; it is a constraint: an AI investment either finds paying consumers within a very short window or, when the next hardware generation lands, writes this generation's account **down to zero** — at which point it is a liquidation in the sense of Stage 5.3, however good the story was at the outset.

A key question for Stage 18.5 is buried here too: **who is paying for the depreciation of short-lived capital?** If it is the investor's retained profit, then saving is bearing the risk; if it is debt raised in a low-rate environment, then the depreciation cost has been temporarily “hidden” inside the interest rate.

### ⑤ AI and labor: complement or substitute, and who bears the uncertainty

The relation between capital goods and labor has been clear in Austrian theory since Böhm-Bawerk: **capital goods make labor more productive** — one person with an excavator produces dozens of times what one person with a shovel produces. That is **complementarity.** But the same excavator also **substitutes** for dozens of people with shovels. Both are true at once; which dominates depends on prices: when the labor released can be hired profitably elsewhere, total output rises and real wages rise.

AI as a capital good is no exception; it merely operates on **cognitive labor.** A model can replace entry-level translation, summarization and code, while multiplying the output of a lawyer, a physician or an engineer. This lesson only touches the point — Stage 18.4 takes “technological unemployment” all the way from the Luddites to the 1964 Automation Commission and gives the comparative-advantage answer (Stage 1.5). Here we stress only what belongs to capital theory: **which labor AI complements and which it substitutes for is decided by relative prices, not by technology.** The same model is a substitute where engineers cost $100 an hour and may not pay for itself where they cost $10 — just as excavators are not bought where labor is extremely cheap.

Finally, the question of Stage 6.1: **who bears all this uncertainty?** Hundreds of billions in capex is not “humanity” investing; it is the boards of a few listed companies, their shareholders, creditors and suppliers placing bets. The bet is that, years from now, consumer valuations of first-order goods will be high enough to impute today's prices all the way up the chain. In Knight's terms this is not insurable **risk**; it is **uncertainty** with no computable probability — nobody has a historical distribution for “investing hundreds of billions in a capital good that becomes obsolete in four years.” The people who bear it have a name: entrepreneurs. Judge rightly and the profit is theirs; judge wrongly and so is the loss — the precondition for the market's error-correction to work. **The AI itself bears nothing: it is the chip being wagered, not the player placing the bet.**

### ⑥ Where Austrian theory needs updating: intangible capital and near-zero replication

This course is honest throughout, and this lesson is no exception. The capital goods in Böhm-Bawerk, Hayek and Lachmann are **physical**: they occupy space, wear out, and can be used in only one place at a time. AI's core asset is not.

**Model weights** are a file. Copying them costs nearly nothing; the same weights can serve a hundred million people on ten thousand servers at once; they do not wear out. But they **go obsolete** — faster than any machine. That creates several phenomena traditional capital theory did not directly address:

- **Enormous fixed cost, near-zero marginal cost**: Stage 15.3 already covered pricing at zero marginal cost — subjective value still rules, and price is set by the marginal user's valuation; but capital theory must add a line: **the window for recovering fixed cost is set by the arrival of the next model, not by physical wear.** This is depreciation determined by competition rather than by physics.
- **Non-rivalry** (one person's use does not impede another's) makes the notion of a “capital stock” harder to define: is a set of weights used by a hundred million people one unit of capital or a hundred million? Lachmann's answer (value depends on the plan) still applies, but the “plan” may now exist a hundred million times over.
- **Data as a capital good**: specific, intangible, copyable, and with value that depends overwhelmingly on context. Stage 15.4 argued “data is not knowledge”; from the capital-theory side, data behaves like a **specific intermediate good** whose value is imputed almost entirely from the model it trains.

None of this overturns the skeleton of Austrian capital theory — imputation, roundaboutness, heterogeneity, complementarity, specificity, rate sensitivity all hold for AI, arguably more strongly than for a steel mill. But they require Austrian economists to **write intangible capital into the theory properly**, rather than treating it as a special case of physical capital. It is one of the open problems listed in Stage ∞.1.

In one sentence: **AI is among the most roundabout, most specific, shortest-lived and most rate-sensitive capital goods ever built; every order of its value is imputed upward from the consumer's twenty dollars; and its success or failure is borne by named owners, not by the AI itself.**
`,

  demo: "ai-stack-stages",

  analogy: `
Think of the AI stack as an **aqueduct running from a mountain to a kitchen tap.**

At the top is the snow-capped mountain (lithography machines and fabs) — you must spend five years cutting a channel up there before any water flows. Midway are the reservoir (data centers) and the pumps (GPUs). Downstream is the treatment plant (the model), and at the end, your tap (the application). You turn the tap, pay a small water bill, and that bill is **the only reason the entire aqueduct exists.**

**The interest rate** is how steep the mountain is. When rates are low the slope is gentle and engineers dare to cut channels higher and further; when rates rise the mountain steepens and the highest stretch of channel is abandoned first — not because it is useless, but because it is too far away.

**Complementarity**: channel, reservoir, pumps and plant — remove any one and no water reaches the tap. GPUs waiting for power in 2024 were “pumps bought before the channel was connected.”

**Depreciation**: this aqueduct has a strange property — the pumps must be replaced wholesale every four years, because the new ones cost half as much and push twice as hard. So you cannot plan on a Roman aqueduct's hundred-year life; you must recover the cost of the pumps from water bills within four years.

And **who bears it all?** Not “the water,” not “the channel,” but the few companies that paid to cut it. Water reaches the tap, they profit; nobody on that side of the mountain wanted water after all, they lose. The aqueduct is not responsible for its own success or failure — it is a capital good.
`,

  misconceptions: [
    "**“AI will make everything free.”** — Its marginal cost of use may be very low, but upstream stands the longest, most expensive capital structure in history (lithography, fabs, data centers, power, training), which must be recovered by imputation from paying consumers. Only the margin is free; fixed cost is either recovered or written off as liquidation when the next hardware generation arrives (Stage 5.3).",
    "**“Nvidia's profits show it is ‘extracting’ the value of the whole chain.”** — By Menger's imputation, high upstream profit is the shadow of high expected downstream valuations plus temporary upstream scarcity. If expectations are met, new capacity and competition flatten the profit; if not, upstream gets hurt first. Profit is not extracted; it is imputed upward by expectations.",
    "**“AI data centers are like railways and grids — century infrastructure.”** — Half true. Shells and grid connections do last; but a GPU's economic life is widely discussed as three to six years and a model's is shorter. A railway embankment lasts a hundred years; the most expensive part of the AI stack must earn itself back within a few — that is the point of depreciation as a real cost.",
    "**“Where the money for AI comes from doesn't matter, as long as the technology is real.”** — For ABCT the source determines the character (Stages 5.1, 18.5): retained profit means saving is bearing the risk; debt at artificially low rates hides the depreciation of short-lived capital inside the interest rate. Whether the technology is real and whether it is being built too much and too early are two different questions.",
    "**“AI will decide for itself where to invest.”** — No. AI is a capital good — the chip being wagered; the bettors are boards, shareholders and creditors. Judge rightly and the profit is theirs; wrongly and the loss is theirs — the precondition for market correction (Stage 6.1). Treating AI as an actor hides the most important question: who bears the uncertainty.",
  ],

  quiz: [
    {
      q: "By Menger's theory of imputation, where does the value of a $200 million EUV lithography machine ultimately come from?",
      options: [
        "Its manufacturing cost and R&D",
        "Its technical complexity",
        "Consumers' valuation of AI applications and other final goods at the end of the chain, imputed upward stage by stage",
        "Government industrial subsidies",
      ],
      answer: 2,
      explain: "The value of a higher-order good derives from the lower-order goods it helps produce and ultimately from consumers (Stage 1.1). Cost does not set price; price sets cost.",
    },
    {
      q: "Why is AI infrastructure investment especially sensitive to interest rates?",
      options: [
        "Because AI firms borrow heavily",
        "Because the chain is extremely long — five to ten years from investment to paying consumer — and the further away the returns, the more present value swings with the rate (duration)",
        "Because chip prices move with rates",
        "Because central banks set a special rate for AI",
      ],
      answer: 1,
      explain: "The longer the Hayekian triangle, the more rate-sensitive the upstream stages; the duration concept of Stage 10.3 quantifies it.",
    },
    {
      q: "A $10 billion data center: $6 billion in GPUs (4-year economic life) and $4 billion in shell and power (20-year life). Depreciation alone comes to roughly how much per year?",
      options: ["$0.5 billion", "$1.0 billion", "$1.7 billion", "$2.5 billion"],
      answer: 2,
      explain: "GPUs 6÷4 = 1.5; shell 4÷20 = 0.2; total $1.7 billion. Depreciation of short-lived capital is the largest real cost.",
    },
    {
      q: "What is the most textbook example of Lachmann's complementarity in the AI stack?",
      options: [
        "GPUs can replace CPUs",
        "Without power, cooling, data or engineers, a GPU's output is near zero — a capital good's value lies in the plan it is embedded in",
        "All capital goods are interchangeable",
        "Models don't need data",
      ],
      answer: 1,
      explain: "Complementarity is the mutual dependence of capital goods within a plan; the 2024–25 reports of GPUs waiting for grid connections are the live example.",
    },
    {
      q: "Where does Austrian capital theory most need updating for AI?",
      options: [
        "Imputation no longer holds",
        "Interest rates no longer affect investment",
        "Intangible capital such as model weights copies at near-zero cost, does not wear out, yet goes obsolete fast through competition — something the physical-capital framework did not directly address",
        "Capital is no longer heterogeneous",
      ],
      answer: 2,
      explain: "The skeleton (imputation, roundaboutness, heterogeneity, complementarity, specificity, rate sensitivity) holds; but intangible, non-rival capital whose depreciation is set by competition rather than wear needs to be written into the theory (Stages 15.3, ∞.1).",
    },
  ],

  further: [
    { label: "Böhm-Bawerk, The Positive Theory of Capital (1889) — the source on roundabout production (Econlib full text)", url: "https://www.econlib.org/library/BohmBawerk/bbPTC.html" },
    { label: "Hayek, Prices and Production (1931) — origin of the Hayekian triangle (Mises Institute)", url: "https://mises.org/library/book/prices-and-production" },
    { label: "Lachmann, Capital and Its Structure (1956) — complementarity and multiple specificity (Mises Institute)", url: "https://mises.org/library/book/capital-and-its-structure" },
    { label: "Menger, Principles of Economics (1871), Chapter I on the orders of goods", url: "https://mises.org/library/book/principles-economics" },
    { label: "Garrison, Time and Money (2001) — the modern statement of capital-based macro (author's page)", url: "https://www.auburn.edu/~garriro/tam.htm" },
  ],
};
