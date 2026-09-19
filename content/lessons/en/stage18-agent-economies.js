export default {
  id: "agent-economies",
  stage: 18,
  order: 6,
  title: "Algorithmic Pricing, AI-Agent Economies & the Market Process",
  difficulty: "newera",
  prereqs: ["ai-judgment", "defi-code-order", "competition-process"],

  oneLiner:
    "Prices on Amazon change millions of times a day, airfares move with the hour you search, ride-hailing surges in the rain, and hotel rates are reset by revenue-management systems minute by minute. Is this Hayek's dream — local knowledge entering prices at the speed of light (Stage 7.2) — or a crowd of algorithms that learned **tacit collusion** with nobody giving the order? This lesson first states the collusion worry at full strength (the Calvano et al. 2020 simulations; the RealPage rent-pricing **allegations**), then gives the Austrian reply: collusion without entry barriers is unstable (Stage 6.4), entrants and multi-homing consumers break it (Stage 15.2), and the remedy is entry, not price caps (Stage 8.2). Then the newer layer: AI agents transacting on behalf of humans — agent marketplaces, machine-to-machine payments, x402-style protocols are emerging. Does praxeology change? No: **agents are means; their principals act** (Stage 2.1). What changes is speed (Stage 6.2) and the shape of failure (flash crashes, monocultures, oracle errors, Stage 17.4). The close: the more capable the tools, the scarcer human ends and judgment become (Stage 18.3).",

  intuition: `
Start with four algorithmic pricing systems that are already running — not the future, but the last ten to forty years:

- **Airline revenue management**: in 1985 American Airlines launched its “Ultimate Super Saver” fares to fight low-cost carriers, and dynamic pricing by remaining seats, days-ahead and demand forecasts became the industry standard. Two adjacent seats on the same flight can differ in price fivefold.
- **Hotel revenue management**: Marriott carried the airline methods into hotels in the 1980s–90s; rates now move by week, day and hour.
- **Ride-hailing surge**: Uber introduced surge pricing around 2012 — rain, concert exits, New Year's Eve — with prices rising in real time to pull drivers from farther away.
- **E-commerce dynamic pricing**: third-party sellers on Amazon widely use repricing software, and prices on the platform change millions of times a day.

Seen through Hayek (Stage 7.2), these systems do exactly what prices are supposed to do: compress **local, momentary knowledge** — how many seats remain on this flight, how many people on this street want a ride right now, how much stock sits in this warehouse — into a number that lets millions of strangers coordinate. They are far faster and more accurate than human pricing. Surge in the rain is not gouging — it calls distant drivers into the rain and lets the most urgent riders go first. It is the price signal doing its best work.

But there is a worry, and a serious one. In 2020 four economists (Calvano, Calzolari, Denicolò and Pastorello) published a simulation in the *American Economic Review*: two reinforcement-learning pricing algorithms playing a simple market repeatedly, **with no communication and no programming to collude**, eventually learned to hold prices above the competitive level and to “punish” whichever one cut price, then return to the high price. That is “tacit collusion” — not a handshake in a back room, but two algorithms each discovering that “no price war is better for both of us.” The real-world counterpart is RealPage, a company supplying pricing software to landlords of US rental apartments, **sued** by the US Department of Justice in 2024 on the **allegation** that by pooling competing landlords' non-public data and recommending rents to each, it effectively coordinated landlords who should have competed — landlords who **allegedly** accepted the recommendations. As of this writing the cases and settlements are still in motion; everything remains an allegation.

How do Austrians reply? Not by denying the worry, but by putting it back into the framework of Stage 6.4: **the problem with collusion was never whether it can form but whether it can last.** Cartels — from OPEC to diamonds to airlines — have formed countless times, and only one thing has ever sustained them: **barriers to entry.** Without barriers, a high price is an invitation letter to entrants; an entrant does not need to “communicate,” only to see the profit. Calvano's simulation has two algorithms in a closed market; reality has a third and fourth seller, multi-homing consumers (three apps open at once to compare), and price-comparison sites scraping the history. **Multi-homing, from Stage 15.2, is the most direct antidote to algorithmic collusion.** And if the RealPage allegations hold, the problem lies in “pooling competitors' non-public data” — an information-sharing problem, not a problem with “algorithmic pricing” as such, and the remedy is still entry and transparency, not rent control (Stage 8.2 already did the arithmetic on rent control).

Then the newer layer. In 2024–25 AI agents began transacting on people's behalf: booking flights, comparing prices, placing orders; buying compute and negotiating ad slots for firms; and protocols appeared (for instance x402, launched by Coinbase in 2025, which turns HTTP's “402 Payment Required” status code into machine-to-machine stablecoin payment) that let agents settle with one another automatically. All of this is new, and we describe it as “emerging.” So the question: if buyer and seller are both algorithms, is the market still a market of human action? Stage 18.3 gave half the answer: **agents are means; the principal acts.** This lesson supplies the other half: agents do not change praxeology, but they **change the speed of the market process and the shape of its failures** — program trading in 1987, the flash crash of 2010, Knight Capital losing $440 million in 45 minutes in 2012 are all cases of algorithmic traders reacting to one another faster than humans could correct. When every agent runs the same model and reads the same oracle (Stage 17.4), errors point **the same way** instead of cancelling.

The close returns to the course's spine: the more capable the tools, the scarcer human ends and judgment. An agent that can compare, order and negotiate for you cannot decide for you what you want.

**In this lesson we break it into six pieces:**

- **① What algorithmic pricing does today: airlines, hotels, ride-hailing, e-commerce**
- **② The Hayekian view: local knowledge enters prices at light speed**
- **③ The worry at full strength: Calvano's simulations and the RealPage allegations**
- **④ The Austrian reply: collusion without barriers is unstable; entry and multi-homing are the cure, price caps are not**
- **⑤ AI agents transacting: praxeology unchanged, speed and failure modes changed**
- **⑥ Prediction markets, price discovery, and the last scarce good**
`,

  mechanics: `
### ① What algorithmic pricing does today: airlines, hotels, ride-hailing, e-commerce

Take “algorithmic pricing” apart and it contains at least four different things; lumping them together produces mistakes:

- **Revenue (yield) management**: sellers of perishable goods (seats, rooms, tickets) adjust prices by remaining inventory and forecast demand. Robert Crandall's use of it at American Airlines in 1985 against People Express is generally taken as the start of modern dynamic pricing. The logic: an empty seat is worth zero after takeoff, so selling cheaper early and dearer late is charging different prices to **travelers with different time preferences** (Stage 3.1's time preference turned directly into a price difference).
- **Real-time supply-demand matching**: ride-hailing surge, delivery peak fees. Prices float with momentary supply and demand to pull supply toward demand.
- **Repricing**: e-commerce sellers use software that tracks competitors' prices and adjusts automatically — “one cent below the lowest” or “match the second lowest.” This is the category closest to what Calvano studied.
- **Personalized pricing**: different prices by buyer characteristics (device, history, location). The most controversial category, but economically an old problem — price discrimination — in a new form.

What the four share: **pricing decisions moved from the human quarterly meeting to the machine's millisecond loop.** Where they differ is what they mean for competition: the first two pull supply toward demand; the third may promote or undermine competition; the fourth is a distributional question. This lesson mainly deals with the third, because that is where the worry concentrates.

### ② The Hayekian view: local knowledge enters prices at light speed

Stage 7.2 gave the core of Hayek 1945: prices compress dispersed, local, momentary knowledge into a number that lets people coordinate without understanding the whole. The bottleneck of traditional pricing is the **human**: a manager who reprices at a weekly meeting means every local change that week — a competitor stocking out, a road closing, a holiday approaching — never made it into the price.

Algorithmic pricing removes that bottleneck. Take ride-hailing: Friday, 11 p.m., two thousand people pour out of a stadium into one neighborhood. Without surge, two thousand people wait and a hundred drivers are nearby; at 2.5× surge, three hundred drivers five kilometers away see the signal and come, and twenty minutes later the price falls back. **Nobody knows the whole** — drivers do not know how many are waiting, riders do not know how many cars are en route — yet the price coordinates them. That is Hayek's “marvel,” ten thousand times faster.

Now repricing. A seller of phone cases who once checked prices monthly now runs software that checks hourly. A competitor cuts, he follows within the hour; a competitor stocks out, he raises within the hour. **The delay between local knowledge (who is out of stock, who cut) and the price shrinks from a month to an hour.** From the standpoint of Stage 6.2 this is the discovery procedure accelerating: mispricing survives for less time, arbitrage closes faster, profits thin — the same phenomenon as “faster imitation, thinner profits” in Stage 18.3.

One point Austrians should stress and the mainstream often skips: **the informational basis of algorithmic pricing is still private property and voluntary exchange.** The prices the software can read were set by other sellers with their own goods and their own money; the demand it reads is what consumers expressed with their own money. The algorithm does not replace the mechanism of Stage 7.1; it only runs it faster. This is the same line as “market-augmenting” in Stage 18.1.

### ③ The worry at full strength: Calvano's simulations and the RealPage allegations

Now the opponent at full strength.

**Calvano, Calzolari, Denicolò and Pastorello (2020, *American Economic Review*).** They let two (later more) Q-learning pricing algorithms play a standard repeated Bertrand competition. The algorithms knew only their own and their rival's past prices and their own profit; they were not programmed to collude and could not communicate. The result: after millions of rounds of trial and error, the algorithms **settled reliably at prices between the competitive and monopoly levels** (typically capturing a large share of monopoly profit in the simulations), and displayed classic collusive strategies — when one deviated and cut, the other cut briefly to “punish,” and both returned to the high price. The authors' conclusion was careful: tacit collusion **can** emerge spontaneously among algorithms, and existing antitrust law (which requires proof of an “agreement”) may fail to catch it. Follow-up work is mixed: some replicate the result; others find collusion weakens sharply when the learning algorithm changes, more competitors are added, or demand fluctuates.

**RealPage (allegations, 2024–).** RealPage supplies pricing software (YieldStar and others) to landlords of a large share of US rental apartments. In August 2024 the Department of Justice and several states filed an antitrust suit **alleging** that RealPage pooled competing landlords' non-public leasing data (rents, vacancies, renewal terms), used algorithms to recommend rents to each, and allegedly encouraged landlords to accept the recommendations — so that landlords who should have competed effectively coordinated rents. Several private class actions preceded it. RealPage denies the allegations, saying its software only makes suggestions that landlords are free to reject. As of this writing some cases have settled or advanced, and the core dispute has not been finally adjudicated — **everything here is “alleged.”**

Together the two make this argument: **algorithmic pricing may allow collusion that used to be hard to form (because of communication costs and legal risk) to arise spontaneously without anyone communicating illegally, and in a form existing law struggles to recognize.** That is a serious argument and deserves a serious answer.

### ④ The Austrian reply: collusion without barriers is unstable; entry and multi-homing are the cure, price caps are not

Stage 6.4 gave the core Austrian proposition on monopoly and collusion: **the difficulty for a cartel is not forming but lasting.** Every member has an incentive to cheat (cut price secretly and sell more), and more important, the cartel's high price is an invitation to **outside entrants.** The cartels that lasted in history — from medieval guilds to OPEC to airline alliances — almost all relied on one thing: **entry barriers enforced by the state** (charters, quotas, licenses, tariffs). A cartel without barriers lives for years at most, often months.

Apply that framework to algorithmic collusion and three key assumptions of Calvano's simulation stand out, none of which holds in reality:

- **A closed market**: only two (or a few) sellers, no entry. In reality, a high price for phone cases draws new sellers within weeks — who also run repricing software, and the first thing new software does is “one cent below the lowest.” **An entrant does not need to understand the collusion, only to see the profit.**
- **Homogeneous algorithms and stable demand**: in the simulation both algorithms use the same learning method and demand is fixed. Follow-up work finds that with different algorithms, randomly fluctuating demand or a third seller, collusion weakens substantially — the “punishment” signal drowns in noise, and an algorithm cannot tell whether its rival deviated or demand shifted. Real markets are far noisier than simulations.
- **Passive consumers**: in the simulation consumers buy on price only. In reality consumers **multi-home** (Stage 15.2) — Amazon, a rival marketplace and a comparison site open at once; raise one price and the other platform's price becomes its ceiling. Multi-homing is the mechanism that breaks two-sided “winner-take-all,” and it is the mechanism that breaks algorithmic collusion.

<figure><svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Stability of algorithmic collusion: holds in a closed market, collapses when entrants and multi-homing arrive</text><line x1="50" y1="240" x2="600" y2="240" stroke="var(--line)" stroke-width="1.5"/><line x1="50" y1="240" x2="50" y2="50" stroke="var(--line)" stroke-width="1.5"/><text x="40" y="60" text-anchor="end" font-size="10.5" fill="var(--muted)">price</text><line x1="50" y1="90" x2="600" y2="90" stroke="var(--red)" stroke-width="1" stroke-dasharray="4 3"/><text x="596" y="84" text-anchor="end" font-size="10.5" fill="var(--red)">monopoly price</text><line x1="50" y1="200" x2="600" y2="200" stroke="var(--green)" stroke-width="1" stroke-dasharray="4 3"/><text x="596" y="214" text-anchor="end" font-size="10.5" fill="var(--green)">competitive price</text><path d="M50 200 C 90 195, 120 160, 160 120 C 190 100, 220 100, 260 105 L 300 105" fill="none" stroke="var(--orange)" stroke-width="3"/><text x="140" y="150" font-size="10.5" fill="var(--orange-ink)" font-weight="600">two learning algorithms: price drifts to the collusive level</text><line x1="300" y1="60" x2="300" y2="240" stroke="var(--blue)" stroke-width="2" stroke-dasharray="6 4"/><text x="300" y="52" text-anchor="middle" font-size="10.5" fill="var(--blue)" font-weight="600">entrant / multi-homing consumers arrive</text><path d="M300 105 C 330 110, 350 160, 390 185 C 430 200, 500 200, 600 200" fill="none" stroke="var(--orange)" stroke-width="3"/><text x="440" y="180" font-size="10.5" fill="var(--orange-ink)" font-weight="600">collusion collapses, back to competitive</text><text x="320" y="270" text-anchor="middle" font-size="10.5" fill="var(--muted)">rounds →</text><text x="320" y="298" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">The cure is entry, not a cap: a cap nails the price down and tears up the invitation to entrants</text></svg><figcaption>The algorithmic pricing sandbox (this lesson's demo): in a closed market two learning algorithms push price toward the collusive level; add one entrant or multi-homing consumers and the collusion unravels within a few rounds. What sustains collusion is always a barrier, never the algorithm.</figcaption></figure>

And RealPage? If the allegations hold, the heart of the matter is **pooling competitors' non-public data** — conduct antitrust law cared about long before algorithms (trade associations exchanging price information). The Austrian position is consistent: information sharing as such is not the problem; using it to coordinate an entry-restricted market is; and the first reason big-city US rental markets are entry-restricted is that **zoning and building permits** limit new supply (the regulatory costs of Stage 8.3). **Rent control** (Stage 8.2 did the sums: less supply, lower quality, queues) does not break algorithmic collusion — it merely nails the price at a lower level while tearing up the invitation to new supply. The remedy is the one in Stage 6.4: **make entry easy, and make the information public rather than proprietary to one software vendor.**

Austrians should also give a step here: Calvano's work exposes a **real blind spot** — antitrust law requires proof of an “agreement,” and tacit understanding between algorithms needs none. That is not a market failure, but it does show that the legal tool's definitions lag reality. The Austrian reply is to shift the law's attention from “was there an agreement?” to “is there a barrier?” — which was Stage 6.4's recommendation all along.

### ⑤ AI agents transacting: praxeology unchanged, speed and failure modes changed

What appeared in 2024–25: agents that compare and book for you; firms using agents to buy compute, negotiate ad slots and process supplier invoices; and at the protocol layer, machine-to-machine payment — x402, launched by Coinbase in 2025, turns the HTTP 402 status code into “pay, then receive the data,” settled in stablecoins (Stage 17.3); several companies are building “agent marketplaces” where agents discover, haggle with and pay one another. All early, all small, all “emerging.”

The question: when buyer and seller are both agents, is the market still a market of human action?

**Praxeology's answer: yes.** Stage 18.3 settled it: an agent's ends are set by its principal, its resources are the principal's, its losses are the principal's. When an agent booking your flight “chooses” a flight, praxeologically **you** chose “have this agent book under these parameters.” It is a means on a longer causal chain, in the same class as the automatic loom and program trading. Mises's framework has no category of “non-human actor,” and needs none — every agent's resources trace back to someone betting their own money, or it would have nothing to trade. **An agent economy does not increase the number of actors; it increases the number of transactions each actor can initiate at once.**

**But the shape of the market process changes, in two directions.**

The good direction: **speed.** The discovery procedure of Stage 6.2 — mispricing arbitraged away, scarcity reflected in price, new supply drawn in — happens among agents in milliseconds. The delay between local knowledge and price tends to zero. Procurement negotiations between firms shrink from weeks to minutes. This is progress in Hayek's sense.

The bad direction: **new coordination failures.** History supplies three samples:

- **October 19, 1987**: “portfolio insurance” programs sold automatically into a falling market, the selling deepened the fall, and more selling was triggered. The Dow fell 22% in a day.
- **The flash crash of May 6, 2010**: high-frequency algorithms reacting to one another took the Dow down roughly 9% within minutes before it rebounded; some stocks briefly traded at a cent or at $100,000.
- **Knight Capital, August 1, 2012**: a botched deployment sent millions of erroneous orders in 45 minutes, losing about $440 million and nearly bankrupting the firm.

The common structure: **algorithms react to one another faster than humans can correct, and the errors point the same way rather than cancelling.** An AI-agent economy generalizes that structure to every market and adds two new risks. **Monoculture**: if most agents run on the same base model, their errors are highly correlated, and one model's systematic bias becomes the whole market's — the “cluster of errors” of Stage 5.2 no longer needs an interest rate as its shared signal; a shared model suffices. **Oracle errors**: Stage 17.4 showed that DeFi code “sees only the world its oracle feeds it”; the same holds for agents — if the prices, inventories and reviews they read are manipulated or wrong, they act confidently on a false world, and far faster than a person would.

The Austrian attitude is not “ban the agents” but the approach of Stages 7.4 and 9.3: **let the order grow its own rules** — circuit breakers, limit orders, attribution of agent identity and liability, diversity of model sources — most of which the people bearing the losses will demand spontaneously, because the losses are theirs. The circuit breakers exchanges installed on their own after 2010 are the precedent.

### ⑥ Prediction markets, price discovery, and the last scarce good

One more positive application. During the 2024 US election, prediction markets such as Polymarket and Kalshi traded volumes in the billions of dollars, and on election night their prices reflected the outcome earlier than most polls. A prediction market is the purest form of Hayek's “price as knowledge aggregator”: each participant stakes money on their local knowledge, and the price is the aggregated probability. AI has two uses here: **lowering the cost of participation** (agents can bet for people with different information sources) and **widening the market's scope** (more questions can be priced). It also brings the same risk: if all the agents read the same model, the market aggregates not dispersed knowledge but one model's opinion — **the value of price discovery comes from the diversity of participants, not their number.**

That gathers up the whole of Stage 18. The conclusion of each lesson:

- 18.1: AI is a consumer of prices, not a producer; it is most useful augmenting markets and exhausts its own input replacing them.
- 18.2: AI is among the most roundabout, most specific and shortest-lived capital goods in history; its value is imputed up from consumers, and its success or failure is borne by owners.
- 18.3: AI takes over computable risk and extends alertness; it cannot reach judgment, which needs ownership and ends.
- 18.4: technology replaces tasks, not ends; when prices can move, the transition is short.
- 18.5: real innovation and credit booms can coexist; look at rates, financing, duration and clustering.
- 18.6: algorithms and agents speed up the market process without changing the actors; the cure for collusion is entry; failure modes change, and rules grow.

The six share one sentence: **the more capable the tools, the scarcer human ends and judgment become.** An agent that can compare, order, negotiate and forecast for you cannot decide what you want, and will not bear the consequences when you are wrong about it. Economics has been, since Stage 0.1, the study of scarce means and human ends; AI makes the means abundant as never before, while ends — have only ever belonged to people.

Stage ∞.1 lists the problems left open here: a theory of intangible capital, the decomposability of judgment, order rules for algorithmic markets, and the finer ABCT account needed for “capex accelerating while rates rise.” Those are left to you — not to a model.
`,

  demo: "algo-pricing-arena",

  analogy: `
Think of a market as a **bazaar**, and algorithmic pricing as every stallholder hiring an **assistant with impossibly fast eyes.**

The stallholder used to glance at the neighbor's price board once a day; the assistant glances once a second. Neighbor out of stock — the assistant raises within a second; neighbor cuts — the assistant follows within a second. The bazaar's prices track real supply and demand more closely. That is the part Hayek would love.

But if the bazaar has only two stalls, the two assistants soon discover: “If I don't cut and you don't cut, we both do well.” They need no conversation — a few hundred tries teach it. That is Calvano's simulation.

A real bazaar has more than two stalls. A high price is a flag; a third stallholder sees the flag and wheels in a cart, and the first thing his assistant does is “one cent below the lowest.” The shoppers are no fools either — they carry price lists from three bazaars (multi-homing). The two assistants' understanding dissolves the moment the third cart rolls through the gate. **What sustains the understanding is never how clever the assistants are, but whether a guard at the gate is keeping new stalls out.** So the cure is to remove the guard, not to pin a “maximum price” on every stall — that sign nails the price in place and also ensures the third cart never comes.

Now the bazaar changes again: the shoppers hire assistants too. Buying assistants and selling assistants haggle a hundred times a second. Is it still a human bazaar? Yes — every assistant spends its master's money, and a bad purchase is the master's loss. It is just ten thousand times faster, and if every assistant graduated from the same school, they will all make the same mistake in the same second.

And however fast or clever the assistants, one thing only the master can do: **decide what to have for dinner tonight.**
`,

  misconceptions: [
    "**“Algorithmic pricing is gouging — surge pricing in the rain proves it.”** — Surge in the rain is the price signal doing its best work: calling distant drivers into the rain, letting the most urgent riders go first, and falling back within twenty minutes. Local, momentary knowledge entering prices at light speed is exactly the function Hayek described in 1945, ten thousand times faster.",
    "**“Calvano's simulations prove algorithms must collude, so algorithmic pricing should be banned or capped.”** — The simulation's three assumptions — closed market, homogeneous algorithms with stable demand, passive consumers — all fail in reality. Follow-up work shows collusion weakens sharply with entrants, noise or different algorithms. The difficulty for collusion was never forming but lasting, and lasting requires barriers. A cap nails the price down and tears up the invitation to entrants.",
    "**“The RealPage case proves algorithmic pricing is inherently anticompetitive.”** — The heart of the allegation is pooling competitors' non-public data to coordinate — conduct antitrust cared about long before algorithms. Everything remains alleged. Even if proven, the remedy is public information and freed supply (zoning, permits), not rent control.",
    "**“Once buyers and sellers are both AI agents, the market is no longer a market of human action.”** — An agent's ends are set by its principal; its resources and losses are the principal's; it is a means on a longer causal chain. An agent economy does not add actors, only the number of transactions each actor can launch at once. What changes is speed and failure modes, not praxeology.",
    "**“Flash crashes and monoculture risk in algorithmic markets mean we should go back to human markets.”** — These are real new coordination failures (1987, 2010 and 2012 are samples), but the Austrian reply is to let rules grow: circuit breakers, limit orders, liability attribution, model diversity — the people bearing the losses demand them spontaneously, as exchanges' post-2010 circuit breakers show. The value of price discovery comes from the diversity of participants, not their number.",
  ],

  quiz: [
    {
      q: "From the standpoint of Hayek 1945, what is the function of ride-hailing surge pricing in the rain?",
      options: [
        "Letting the platform profit from the weather",
        "Compressing the local, momentary knowledge “how many people want a ride on this block right now” into a price that draws distant drivers in and lets the most urgent riders go first",
        "Punishing people who go out in the rain",
        "Nothing to do with knowledge",
      ],
      answer: 1,
      explain: "Nobody knows the whole, yet the price coordinates drivers and riders — prices as knowledge carriers, ten thousand times faster.",
    },
    {
      q: "What did Calvano et al. (2020) find, and what is the key qualification?",
      options: [
        "The algorithms were programmed to collude, so they colluded",
        "Algorithms always drive price to cost",
        "Consumers benefit from algorithmic pricing",
        "Two learning algorithms, not programmed to collude and unable to communicate, spontaneously held prices above the competitive level and punished deviation in a closed repeated game; but this depends on a closed market, homogeneous algorithms and stable demand",
      ],
      answer: 3,
      explain: "Serious evidence of tacit collusion, but follow-up work shows it weakens substantially with entrants, noise or different algorithms.",
    },
    {
      q: "What is the core Austrian reply to the algorithmic-collusion worry?",
      options: [
        "Algorithms cannot collude",
        "The difficulty for collusion is not forming but lasting; without entry barriers a high price is an invitation to entrants, and entrants plus multi-homing consumers break it — the remedy is entry, not price caps",
        "Set maximum prices for all algorithmic pricing",
        "Ban repricing software",
      ],
      answer: 1,
      explain: "Stage 6.4's framework: cartels that lasted relied on state-enforced entry barriers. A cap nails the price down and tears up the invitation to entrants.",
    },
    {
      q: "How does praxeology view a market where buyers and sellers are both AI agents?",
      options: [
        "Agents are the principal's means: ends, resources and losses are the principal's; the number of actors is unchanged, while the number of transactions each can launch, the speed of the process and the failure modes change",
        "Non-human actors have appeared",
        "The market no longer needs prices",
        "Agents have ends of their own",
      ],
      answer: 0,
      explain: "Mises's framework has and needs no category of non-human actor; every agent's resources trace back to someone betting their own money.",
    },
    {
      q: "Why is “all agents running on the same base model” a new kind of coordination-failure risk?",
      options: [
        "Because models are expensive",
        "Because the model will refuse to trade",
        "Because errors become highly correlated and pile up in one direction instead of cancelling — a cluster of errors no longer needs a rate as its shared signal, a shared model suffices; price discovery's value comes from participant diversity",
        "It is not a risk",
      ],
      answer: 2,
      explain: "1987, 2010 and 2012 show algorithms reacting faster than humans can correct; monoculture aligns the errors. The cure is spontaneously grown rules and model diversity, not a return to human markets.",
    },
  ],

  further: [
    { label: "Hayek, Competition as a Discovery Procedure (1968), English translation (Mises Institute)", url: "https://mises.org/library/competition-discovery-procedure-0" },
    { label: "Hayek, The Use of Knowledge in Society (1945), full text (Econlib)", url: "https://www.econlib.org/library/Essays/hykKnw.html" },
    { label: "Calvano, Calzolari, Denicolò & Pastorello, Artificial Intelligence, Algorithmic Pricing, and Collusion, American Economic Review 110(10), 2020", url: "https://www.aeaweb.org/articles?id=10.1257/aer.20190623" },
    { label: "Rothbard, Man, Economy, and State, Chapter 10 “Monopoly and Competition” — the Austrian analysis of cartel instability", url: "https://mises.org/library/book/man-economy-and-state-power-and-market" },
    { label: "Econlib Encyclopedia: Antitrust — includes the economics of cartels and collusion", url: "https://www.econlib.org/library/Enc/Antitrust.html" },
  ],
};
