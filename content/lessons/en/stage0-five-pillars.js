export default {
  id: "five-pillars",
  stage: 0,
  order: 4,
  title: "The Map: Five Pillars of Austrian Economics",
  difficulty: "intro",
  prereqs: ["what-is-austrian"],

  oneLiner:
    "The first three lessons covered what economics studies, what the Austrian School is, and where it came from. This one hands you a **map**: the 96 lessons of this course are all building five pillars — **subjectivism, marginalism, methodological individualism and praxeology, real time with capital and uncertainty, and the price system as knowledge with spontaneous order.** Each pillar maps to particular stages ahead; the five together are what “thinking like an Austrian economist” means. This lesson defines each pillar, locates it in the course, and then runs two live problems — a rent-control ordinance and the release of a new AI model — to show all five pillars working **at once**. After this, whenever you read an economic headline you will be able to ask: which pillar is this?",

  intuition: `
Compress the Austrian School into five sentences and you get these:

**① Value lives in minds, not in things (subjectivism).** A glass of water in a desert and a glass by a river are two entirely different things; the same phone is a tool to one person and a toy to another. Nothing is worth some amount “in itself” — what it is worth is always **a particular person's judgment in a particular situation**. All of Stage 1 builds this pillar (Stage 1.2 is its direct statement).

**② People choose at the margin (marginalism).** You never choose between “water” and “diamonds,” only between “one more bucket” and “one more diamond”; a shop never chooses between “selling” and “not selling,” only between “one more unit at this price, or cut the price?” Value, price and cost all happen at **the unit on the boundary**. Stage 1.1 builds it with diamonds and water; Stage 1.3 uses it to explain how prices form.

**③ Only individuals act, and action is purposeful (methodological individualism and praxeology).** “The market panicked,” “the state decided,” “society needs” — none of those subjects can actually act. Only particular people act, and their action is purposeful: means pursuing ends. The laws of economics are deduced from that one fact (Stage 2).

**④ Time is real, capital is heterogeneous, the future is uncertain (real time, capital and uncertainty).** Production takes time, and waiting must be paid for (interest); capital goods are not putty — a printing press cannot be reshaped into a tractor; and every action points at a future nobody knows, so every entrepreneur is **placing a bet**. Stage 3 covers time and capital, Stage 5 what happens when a distorted interest rate makes a whole society bet wrong together, Stage 6 how entrepreneurs find their way through uncertainty.

**⑤ Prices carry knowledge, and order can grow rather than be designed (the price system and spontaneous order).** Nobody knows the full state of the world's copper mines, demand, substitutes and shipping, but the price of copper compresses all of it into one number that tells everyone “economize now” or “use freely.” Without prices there is no economic calculation — Mises's 1920 argument (Stage 7.1); prices transmit dispersed knowledge — Hayek's 1945 argument (Stage 7.2). And money, law, language and the market itself are orders nobody designed that work very well (Stage 7.4, Stage 9).

The five pillars are not five separate facts but **five faces of one thing.** A way to hold them: pillars ① and ② say where value comes from; pillar ③ says how economics is studied; pillar ④ says why things go wrong; pillar ⑤ says why coordination happens without a coordinator.

A map is most useful when you are lost. Ninety-odd lessons lie ahead, and somewhere in the middle you will forget why you are learning a given thing. Come back here and ask: **which pillar is this?** The Cantillon effect of Stage 4.3 — pillar ③ (new money is always spent first by some particular person) plus pillar ⑤ (the price signal is falsified). Network effects in Stage 15.1 — pillars ① and ② (my valuation of a platform depends on whether others use it too, and that valuation happens at the margin of “one more user”). “Can AI replace entrepreneurial judgment?” in Stage 18.3 — pillar ④ (judgment is betting under uncertainty, and uncertainty is not a shortage of data but a future that has not happened yet).

**In this lesson we break it into six pieces:**

- **① Pillar one · Subjectivism: value lives in minds (→ Stage 1)**
- **② Pillar two · Marginalism: everything happens at the boundary (→ Stage 1.1, Stage 1.3)**
- **③ Pillar three · Methodological individualism and praxeology: only people act (→ Stage 2)**
- **④ Pillar four · Real time, capital and uncertainty: why things go wrong (→ Stages 3, 5, 6)**
- **⑤ Pillar five · Prices as knowledge and spontaneous order: coordination without a coordinator (→ Stages 7, 9)**
- **⑥ All five at once: a rent-control ordinance, and a new AI model release**
`,

  mechanics: `
### ① Pillar one · Subjectivism: value lives in minds (→ Stage 1)

**What it says:** Value is not a property of an object; it is an acting person's judgment of how much a thing helps them reach their ends. Judgments differ across people, across time and across situations — and they **can only be ranked, never measured**. You can say “I want A more,” not “A is worth 3.7 units of happiness to me.”

**What it rules out:** The labor theory of value (Stage 11.5) — spend 1,000 hours carving a wooden figure nobody wants and those hours create no value. Cost-determines-price — cost is itself imputed from consumers' valuations (Stage 1.1). “Objective needs” — no central body can judge for you what you “really need.”

**A numerical example:** One concert ticket, face value $50. A is a devoted fan who would pay $300; B is tagging along with a friend and would pay at most $20; C does not want to go at any price. What is the ticket “worth”? There is no answer — it is worth one number to A, another to B, another to C. A market price of $50 tells you exactly one thing: at the margin, someone will buy at 50 and someone will sell at 50. Which brings in pillar two.

**Where it lives in the course:** Stage 1.2 states it directly; Stage 1.4 (opportunity cost is subjective), Stage 4.2 (the value of money is subjective too), Stage 15.3 (why zero-marginal-cost software sells for money) and Stage 16.1 (why attention is valuable) apply it.

### ② Pillar two · Marginalism: everything happens at the boundary (→ Stage 1.1, Stage 1.3)

**What it says:** People never choose between whole classes of things, only between “one more unit” and “one less.” The value of a thing equals the least important use served by its **marginal unit**; a market's price is bracketed by the **marginal buyers and sellers**; the cost of a decision is the option **given up at the margin**.

**What it solves:** The diamond–water paradox (Stage 1.1) — water's total usefulness is enormous, but the marginal use of the bucket in your hand is tiny. Price formation (Stage 1.3) — Böhm-Bawerk's marginal pairs: the price sits between the last pair that trades and the first pair that does not.

**A numerical example:** An airline flies a 180-seat plane. Three months out it sells seats at $800; the day before departure 12 seats are empty and it sells them at $300. The airline is not “losing money.” The **marginal cost** of those 12 seats is close to zero (the plane flies regardless), marginal revenue of $300 exceeds zero, so it sells. Pricing never looks at “average cost”; it looks at the margin.

**Where it lives in the course:** Built in Stage 1.1 and Stage 1.3; Stage 3.1 (marginal time preference sets the interest rate), Stage 6.3 (profit and loss are signals at the margin) and Stage 15.1 (a network effect is the rising marginal value of “one more user”) all rest on it.

### ③ Pillar three · Methodological individualism and praxeology: only people act (→ Stage 2)

**What it says:** Two sentences. **Methodological individualism:** any social phenomenon must ultimately be explained through the actions of particular people — “the class,” “the state,” “the market,” “AI” do not act. **Praxeology:** human action is purposeful (means pursuing ends), and the laws of economics are deduced logically from that, not induced from statistics (Stage 2.1, Stage 2.2).

**What it rules out:** Treating aggregates as actors (“aggregate demand wants…”); treating people as measurable physical variables (the “economy as machine” of Stage 0.1); substituting correlation for causation (“the data show X moves with Y, so X causes Y” — Stage 13.1 shows how Austrians do empirical work instead).

**A numerical example:** “The central bank injects $100 billion of liquidity and the economy gets a boost.” Pillar three makes you ask: **who** got the $100 billion first? Banks. Whom did they lend it to? Large firms and property developers. What did those buy? Land, machines, shares. Those prices rise first; wage earners see higher prices at the supermarket months later — the Cantillon effect of Stage 4.3. “The economy gets a boost” has no subject; put the subject back and the conclusion changes.

**Where it lives in the course:** All of Stage 2; Stage 8.4 (“the state” is also a group of purposeful people: public choice), Stage 18.2 (AI is a capital good; the people using it are the actors), Stage 18.6 (behind algorithmic pricing there are still people who set the algorithm).

### ④ Pillar four · Real time, capital and uncertainty: why things go wrong (→ Stages 3, 5, 6)

**What it says:** Three things. **Real time:** production is a process — from sowing to harvest, from drawing to mass production — with waiting in between; waiting must be paid for, that payment is interest, and its root is time preference (Stage 3.1). **Heterogeneous capital:** capital goods are specific to uses and arranged in stages from upstream to downstream (Stage 3.2, Stage 3.4); capital invested in the wrong place cannot be moved back without loss. **Uncertainty:** the future is not “risk with known probabilities” but genuine unknown; entrepreneurial judgment is betting inside that unknown (Stage 6.1).

**What it explains:** The business cycle (Stage 5.1) — push the interest rate below the natural rate and the whole society believes saving has risen, so it starts too many long projects at once; there are not enough resources to finish them all, and liquidation follows. Not “market failure,” but “collective misjudgment after the signal was falsified.”

**A numerical example:** Natural rate 5%; the central bank pushes it to 2%. A 10-year project has a net present value of −$8 million at 5% (don't do it) and +$12 million at 2% (do it). A hundred such projects across the city break ground together. But real saving has not changed; two years later steel, workers and finance are all short, and half the projects are abandoned. Unfinished plants cannot become anything else — that is the price of heterogeneous capital. Stage 5.2 walks the process step by step in numbers.

**Where it lives in the course:** All of Stages 3, 5 and 6; Stage 10.1 (Garrison's three diagrams), Stage 17.5 (would there be cycles under a Bitcoin standard?), Stage 18.5 (is the AI capex frenzy malinvestment?).

### ⑤ Pillar five · Prices as knowledge and spontaneous order: coordination without a coordinator (→ Stages 7, 9)

**What it says:** One sentence from each master. **Mises 1920:** without private ownership of the means of production there is no market for them, without a market no prices, without prices no economic calculation — you cannot know whether a ton of steel is better used in a bridge or a ship, because “better” can only be compared in prices (Stage 7.1). **Hayek 1945:** knowledge is dispersed across countless minds, most of it tacit knowledge that cannot be stated (“this machine is running oddly today,” “these customers have grown pickier lately”); prices compress that knowledge into a number, so everyone who knows only their corner can adjust consistently with the whole (Stage 7.2). Add one more: the market, money, law and language are **spontaneous orders** — nobody designed them and they work (Stage 7.4, Stage 9.3).

**What it rules out:** Central planning (why Lange's model failed, Stage 7.3); “big data or AI can replace prices” (Stage 7.5, Stage 18.1) — the problem is not compute, it is that **the data do not exist before prices form**: without prices, nobody has a reason to discover and express that knowledge.

**A numerical example:** Since the 1990s the price of copper has ranged from about $2,000 a ton to above $8,000 in some years. No agency ordered anyone to “economize on copper,” but when the price rose, cable makers switched to aluminum, builders changed materials, miners opened new mines, scrap yards recycled harder — millions of decisions shifted in the same direction with nobody seeing the whole. That is what the price system does.

**Where it lives in the course:** All of Stages 7 and 9; Stage 6.2 (competition as a discovery procedure), Stage 15.4 (is data the new oil?), Stage 16.2 (are recommendation algorithms a discovery procedure or a manipulation machine?), Stage 17.4 (DeFi as spontaneous order in code).

<figure><svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Five pillars hold up one way of thinking</text><path d="M40 70 L320 40 L600 70 L600 84 L40 84 Z" fill="var(--orange)"/><text x="320" y="66" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">Thinking like an Austrian economist</text><g font-size="10.5" text-anchor="middle"><rect x="52" y="96" width="96" height="150" rx="6" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="100" y="118" font-weight="700" fill="var(--orange-ink)">① Subjectivism</text><text x="100" y="140" fill="var(--ink)">Value is in minds</text><text x="100" y="156" fill="var(--muted)">ordinal, personal</text><text x="100" y="230" fill="var(--orange-ink)" font-weight="600">→ Stage 1</text><rect x="162" y="96" width="96" height="150" rx="6" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="210" y="118" font-weight="700" fill="var(--orange-ink)">② Marginalism</text><text x="210" y="140" fill="var(--ink)">The unit on the edge</text><text x="210" y="156" fill="var(--muted)">value · price · cost</text><text x="210" y="230" fill="var(--orange-ink)" font-weight="600">→ 1.1 · 1.3</text><rect x="272" y="96" width="96" height="150" rx="6" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="320" y="118" font-weight="700" fill="var(--orange-ink)">③ Individualism</text><text x="320" y="132" font-weight="700" fill="var(--orange-ink)">&amp; praxeology</text><text x="320" y="152" fill="var(--ink)">Only people act</text><text x="320" y="168" fill="var(--muted)">deduced from the axiom</text><text x="320" y="230" fill="var(--orange-ink)" font-weight="600">→ Stage 2</text><rect x="382" y="96" width="96" height="150" rx="6" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="430" y="118" font-weight="700" fill="var(--orange-ink)">④ Time · capital</text><text x="430" y="132" font-weight="700" fill="var(--orange-ink)">· uncertainty</text><text x="430" y="152" fill="var(--ink)">interest · heterogeneity</text><text x="430" y="168" fill="var(--muted)">entrepreneurial bets · cycles</text><text x="430" y="230" fill="var(--orange-ink)" font-weight="600">→ Stages 3·5·6</text><rect x="492" y="96" width="96" height="150" rx="6" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="540" y="118" font-weight="700" fill="var(--orange-ink)">⑤ Prices as knowledge</text><text x="540" y="132" font-weight="700" fill="var(--orange-ink)">· spontaneous order</text><text x="540" y="152" fill="var(--ink)">economic calculation</text><text x="540" y="168" fill="var(--muted)">dispersed knowledge · grown order</text><text x="540" y="230" fill="var(--orange-ink)" font-weight="600">→ Stages 7·9</text></g><rect x="40" y="258" width="560" height="14" rx="4" fill="var(--surface-2)" stroke="var(--line)"/><text x="320" y="269" text-anchor="middle" font-size="9.5" fill="var(--muted)">Foundation: scarcity → choice → purposeful action (Stage 0.1)</text><g font-size="10" text-anchor="middle" fill="var(--blue)"><text x="150" y="300">Pillars ①②: where value comes from</text><text x="320" y="300">Pillar ③: how economics is studied</text><text x="490" y="300">Pillars ④⑤: why things go wrong · why they coordinate</text></g><text x="320" y="322" text-anchor="middle" font-size="10" fill="var(--orange-ink)" font-weight="600">Applications: Stage 8 intervention · 10 macro · 11 debates · 15–18 the new economy</text></svg><figcaption>Five pillars stand on one foundation (scarcity and purposeful action) and hold up one roof (Austrian thinking). Every later stage either reinforces one pillar or uses several together to analyze a problem.</figcaption></figure>

### ⑥ All five at once: a rent-control ordinance, and a new AI model release

Real problems never involve just one pillar. Two examples.

**Example one: a city caps rents at 60% of the market rate.** Say the market rent is $2,500 a month and the cap is $1,500.

- **Pillar ① (subjective):** The ordinance changes the legal price, not anyone's valuation. Landlords value “renting this unit out” exactly as before; tenants value “living here” exactly as before — only the trade at $2,500 has been forbidden.
- **Pillar ② (marginal):** At $1,500, everyone who valued the unit between $1,500 and $2,500 and could not afford it before now wants in — quantity demanded rises from 10,000 units to 12,000; landlords whose opportunity cost exceeds $1,500 (short-term rental, selling, leaving it empty until the cap lifts) exit — supply falls from 10,000 to 8,500. A shortage of 3,500 units, **all of it at the margin.**
- **Pillar ③ (individuals):** “The city” does not allocate housing; individual landlords do — they cut maintenance (why spend, when the rent is fixed?), charge key money, convert to commercial use, rent only to friends. Every one of those is a purposeful action.
- **Pillar ④ (time and capital):** In year one the shortage is small, because the existing stock is still there; three to five years on, nobody builds (a 4-year project has negative net present value at $1,500) and old buildings decay — **capital consumption.** And developers cannot know whether the cap will extend to new buildings; that uncertainty itself freezes investment.
- **Pillar ⑤ (prices as knowledge):** The number $2,500 was telling the whole city “housing is short here, come build.” Replace it with $1,500 and that message is gone. Nobody knows which district or which unit type is most needed; queues, connections and luck replace the price.

The five pillars together conclude (worked out in Stage 8.2): **the people the ordinance meant to protect are, a few years later, the ones who cannot find a place.** That is not ideology; it is five pillars, each deduced in turn.

**Example two: a lab releases a new AI model.** A preview of Stage 18.

- **Pillar ①:** The model's “capability scores” do not determine its value; to a programmer it is worth $200 a month, to someone who never uses a computer it is worth nothing. Pricing asks **whose valuation**, not how strong the model is.
- **Pillar ②:** The marginal cost of serving one more user is near zero, but the price is set by the marginal user's valuation, not by copying cost (Stage 15.3); tiered subscriptions are pricing at different margins.
- **Pillar ③:** Sentences of the form “AI will…” have no subject. AI is a **capital good** (Stage 18.2) — an unusually powerful machine. The actors are the firm that built it, the developers who use it, the businesses that buy it; the analysis has to land on their ends and means.
- **Pillar ④:** Training a model takes years and billions of dollars of GPUs and data centers — highly specific **heterogeneous capital** that is hard to repurpose if demand disappoints. The financing cost of those projects depends on the interest rate; if the rate is held too low, will some of them turn out to be projects that cannot be completed? Stage 18.5 asks that question with ABCT (and is not investment advice). And which use cases will actually pay is something nobody knows — the territory of entrepreneurial judgment, and the starting point for Stage 18.3's question “can judgment be automated?”
- **Pillar ⑤:** The prices of compute and tokens are telling the whole industry “economize” or “use freely”; and whether AI can replace prices to run central planning (Stage 18.1) — the five pillars answer no, because the data it would need are only produced in the process of prices forming.

Compress the lesson into one sentence: **subjectivism and marginalism tell you where value comes from; methodological individualism and praxeology tell you how economics is studied; real time and uncertainty tell you why things go wrong; prices and spontaneous order tell you why coordination happens without a coordinator.** With the five pillars standing, the next step is Stage 1.1 — building the first one yourself, starting from a bucket of water.
`,

  demo: "pillar-map",

  analogy: `
Think of Austrian economics as **a five-bladed Swiss Army knife.**

The first blade is **subjectivism**: an “appraiser's lens” that, before looking at any object, asks “to whom, and in what situation?” The second is **marginalism**: an “edge cutter” that always cuts at the “one more” slice, no matter how large the whole block. The third is **methodological individualism and praxeology**: a pair of “subject-finding tweezers” that pull the real actor out of sentences like “the market panicked,” “the state decided,” “AI replaced.” The fourth is **time, capital and uncertainty**: an “hourglass” reminding you that production requires waiting, that capital cannot be reshaped at will, and that the future cannot be computed — so every decision is a bet. The fifth is **prices and spontaneous order**: a set of “night-vision goggles” that let you see the knowledge of thousands of people compressed inside a price, and the orders nobody designed that are nevertheless running.

Facing a real problem — rent control, an AI release, Bitcoin, a minimum wage — you do not use one blade; you use **all five in turn**: the lens to see who is valuing what, the cutter to find the margin, the tweezers to find the actor, the hourglass to see how time and capital will move, the goggles to check whether the price signal has been tampered with. Once all five have been used, the conclusion surfaces by itself.

The ninety-odd lessons that follow are the sharpening of each blade.
`,

  misconceptions: [
    "**“The five pillars are five separate theories; you can learn one or two.”** — They are five faces of one thing. You can hardly accept the business cycle theory (pillar ④) without time preference, or prices-as-knowledge (pillar ⑤) without subjective value (pillar ①) — because what prices compress is precisely subjective valuations. Real problems always use several at once; the rent-control example uses all five.",
    "**“Subjectivism means ‘anything goes’ and economics has no objective laws.”** — What is subjective is value (each person's judgment); what is objective is the law (given those judgments, what scarcity forces). “Value lives in minds” and “rent control causes shortages” do not conflict — the second is deduced from the first plus the logic of margins and action.",
    "**“Methodological individualism = people are selfish atoms and there is no society.”** — It says only that individuals alone act, not that they act only for themselves. Donating, forming a cooperative, sacrificing for family are all purposeful individual actions. Society, institutions and culture are real — but they are the results and background of human action, not independent actors.",
    "**“Uncertainty is just missing data; once AI gathers enough, judgment can be automated.”** — The uncertainty Austrians mean is not “risk with unknown probabilities” but a future that has not happened and depends on choices not yet made. Which use case will pay, what consumers will like next year — these are not data hidden somewhere awaiting collection; they come into existence only after people act. That is the heart of Stage 18.3.",
    "**“The price system = markets are perfect; Austrians deny all failure.”** — Pillar ⑤ says prices carry knowledge and that without prices there is no economic calculation; it does not say markets always reach the best result. Austrians hold that error is everywhere — entrepreneurs err daily, which is exactly why profit and loss exist (Stage 6.3). What they deny is that an institution without prices could err less than a market with them.",
  ],

  quiz: [
    {
      q: "“Same concert ticket: A would pay $300, B at most $20, C wouldn't go if paid.” Which pillar does this most directly illustrate?",
      options: [
        "Pillar ④ real time and uncertainty",
        "Pillar ① subjectivism: value is an acting person's judgment in a specific situation, not a property of the ticket",
        "Pillar ⑤ spontaneous order",
        "Pillar ③ methodological individualism",
      ],
      answer: 1,
      explain: "The ticket is worth nothing “in itself”; it is worth a different number to each person, and those numbers can only be ranked, not measured. A market price of $50 says only that at the margin someone will buy and someone will sell — where pillar ② takes over.",
    },
    {
      q: "An airline cuts its last 12 seats from $800 to $300 the day before departure. Which pillar explains it best?",
      options: [
        "Pillar ② marginalism: the marginal cost of those 12 seats is near zero, marginal revenue of $300 exceeds it, and pricing looks at the margin rather than average cost",
        "Pillar ① subjectivism: the airline decided seats are worthless",
        "Pillar ⑤ prices as knowledge: the government told the airline to cut prices",
        "Pillar ④: the airline is pessimistic about the future",
      ],
      answer: 0,
      explain: "The plane flies regardless; carrying one more passenger costs almost nothing. As long as marginal revenue exceeds marginal cost, sell. Pricing never looks at “average cost” — that is pillar ②.",
    },
    {
      q: "“The central bank injects $100 billion of liquidity and the economy gets a boost.” What does pillar ③ make you ask?",
      options: [
        "Whether $100 billion is too little",
        "What parameters the central bank's model uses",
        "How many percentage points the economy was boosted",
        "Who received the $100 billion first, what they bought, and who saw higher prices last — putting the subject back into a subjectless sentence",
      ],
      answer: 3,
      explain: "“The economy” cannot be boosted; particular people are affected: banks and large firms who get the money first buy assets at old prices, and wage earners face higher prices months later (the Cantillon effect, Stage 4.3). Put the subject back and the conclusion changes.",
    },
    {
      q: "In the rent-control example, why is the shortage small in year one and severe after three to five years?",
      options: [
        "Because landlords need time to read the ordinance",
        "Because of pillar ④: the existing stock is still there, but new buildings (4-year projects) have negative NPV at the capped rent and old ones go unmaintained — capital consumption takes time to show",
        "Because of pillar ①: tenants' valuations slowly change",
        "Because the government relaxes the cap year by year",
      ],
      answer: 1,
      explain: "Real time and heterogeneous capital: housing is a stock that does not vanish overnight; but construction and maintenance stop, and supply shrinks over time. That is also why controls look “effective in the short run” — Stage 8.2 works it through.",
    },
    {
      q: "“Once AI has gathered all the data, it can replace prices and run central planning.” What do the five pillars answer?",
      options: [
        "Yes, given enough compute",
        "Yes, because prices are just a function of historical data",
        "No, because the data that price formation requires (people's subjective valuations, tacit knowledge, choices not yet made) are produced only in the process of prices forming and people acting — they are not sitting somewhere waiting to be collected",
        "No, because AI is biased",
      ],
      answer: 2,
      explain: "Pillar ① (valuations live in minds) + pillar ⑤ (prices compress valuations) + pillar ④ (the future has not happened): the difficulty of central planning is not compute but “the data do not exist before prices.” Stage 7.5 and Stage 18.1 develop this.",
    },
  ],

  further: [
    { label: "Econlib Encyclopedia: Austrian School of Economics (Peter Boettke) — the “pillar map” in ten-proposition form", url: "https://www.econlib.org/library/Enc/AustrianSchoolofEconomics.html" },
    { label: "Mises Institute: What Is Austrian Economics? — the school's own summary of its core propositions", url: "https://mises.org/what-austrian-economics" },
    { label: "Hayek, “The Use of Knowledge in Society” (1945) — the source text for pillar ⑤ (full text, Econlib)", url: "https://www.econlib.org/library/Essays/hykKnw1.html" },
    { label: "Mises, “Economic Calculation in the Socialist Commonwealth” (1920) — the other half of pillar ⑤ (full text, Mises Institute)", url: "https://mises.org/library/book/economic-calculation-socialist-commonwealth" },
    { label: "Rothbard, Man, Economy, and State, Ch. 1 “Fundamentals of Human Action” — a systematic statement of pillars ①, ② and ③", url: "https://mises.org/library/book/man-economy-and-state-power-and-market" },
  ],
};
