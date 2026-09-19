export default {
  id: "network-effects",
  stage: 15,
  order: 1,
  title: "Network Effects: When Your Valuation Depends on Everyone Else's",
  difficulty: "newera",
  prereqs: ["subjective-value", "origin-of-money"],

  oneLiner:
    "A telephone that only you own is worthless; one that a hundred million people own is worth a fortune. Silicon Valley calls this a **network effect** and gave it a “law”: a network's value grows with the square of its users. Austrians see something much older: **the extreme case of the subjective value of Stage 1.2 — your valuation of a thing depends on other people's valuation of it.** Money (Stage 4.1), language and law (Stage 7.4) are networks that grew exactly this way. This lesson steelmans Metcalfe's law, then takes it apart with the marginal user, heterogeneous valuations, entrepreneurial “seeding” and the coordination of expectations: n² is not a law, the tipping point is not an equilibrium, and lock-in is far weaker than the legend.",

  intuition: `
Start with a thought experiment. You have built a brand-new messaging app: beautiful interface, solid encryption, completely free. You install it on your phone and open it — and there is nobody to message. What is it worth to you? Zero. Not “cheap” — **zero.** The entire usefulness of a communication tool is that someone is on the other end.

Now suppose ten friends install it. Its value to you becomes “I can talk to ten people.” A hundred friends, a thousand acquaintances, the whole city — every additional person who installs it moves its value to you up a notch. Notice the strange thing that just happened: **nobody changed a single line of the app's code, yet its value to you kept changing.** What changed was not the thing; it was other people.

That is a network effect: the value of a good to you rises with the number of other people using it. Telephones, fax machines, WeChat, Alipay, Ethernet, the USB port, a games console, a programming language — even which hand you hold your chopsticks with — all carry some of this property.

Silicon Valley gave it an elegant formula. Robert Metcalfe, the inventor of Ethernet, told customers in the 1980s that n machines can form n(n−1)/2 connections, so a network's value is roughly proportional to **n²**. In 1993 George Gilder christened it “Metcalfe's law,” and it became the creed of internet founders: double the users, quadruple the value; grab users first, the money follows.

The formula has a kernel of truth and a dangerous illusion. The kernel: **valuations are interdependent.** The illusion: mistaking an arithmetic fact about *possible connections* for a law about *value*. Value lives in minds (Stage 1.2), and minds do not automatically multiply their valuation because the number of possible connections went up. You may have a thousand contacts in WeChat; you talk regularly with fewer than twenty. The marginal value to you of contact number 1,001 is close to nothing.

The Austrian angle on this is more interesting than a “law.” When Menger explained value in 1871 he was explaining one person's valuation of one unit of a good. But when he explained the origin of money in 1892 (Stage 4.1), he was explaining precisely a good **whose valuation depends on other people's valuations**: a commodity becomes more and more “saleable” because more and more people expect others to accept it. Money is the first and largest network good in human history. When Hayek wrote about language and law (Stage 7.4), he was describing the same thing: nobody designed them, everyone uses them because others do, and the more people use them the more useful they are. So for Austrians, network effects are not an invention of the digital economy. They are a phenomenon the school has studied for over a century — one that today simply grows faster and is easier to see.

This lesson answers four questions. Why do valuations depend on each other? What is a “tipping point” — an equilibrium or a process? Why is n² not a law? And once a network has formed, are its users locked in?

**In this lesson we break it into six pieces:**

- **① Steelman first: Metcalfe, Reed and “value ∝ n²”**
- **② Direct vs indirect network effects: Katz–Shapiro and Information Rules**
- **③ The Austrian reading: interdependent valuation, and money as the first network good**
- **④ Expectations and coordination: Schelling points, Lachmann, and entrepreneurial “seeding”**
- **⑤ Why n² is not a law: heterogeneous users, the marginal user, congestion**
- **⑥ The lock-in debate: the QWERTY fable and the Liebowitz–Margolis rebuttal**
`,

  mechanics: `
### ① Steelman first: Metcalfe, Reed and “value ∝ n²”

Getting Metcalfe's law right takes three steps.

**Step one: the arithmetic of connections.** n nodes, each connected to every other, form n(n−1)/2 edges. Two telephones share 1 line; 10 telephones, 45; 100, 4,950; 1,000, 499,500. Multiply the users by 100 and the possible connections multiply by roughly 10,000. If each connection is worth a little to someone, the sum tracks n².

**Step two: push it to the limit — Reed's law.** In 1999 David Reed pointed out that if a network's value comes not only from pairwise links but from *any subgroup* (group chats, communities, working groups), the number of possible subgroups among n people is 2ⁿ − n − 1, which grows far faster than n². Ten people can form 1,013 groups; twenty can form about a million. This is the theory of “group-forming networks,” and it is the intellectual backbone of every social-platform valuation story.

**Step three: what it explains.** The arithmetic accounts for at least three real things. (a) Why early networks grow slowly and late ones explode — the first 100 users bring 4,950 edges; users 1,000 to 2,000 bring about 1.5 million. (b) Why platforms burn money on early subsidies — every user you lose money on today makes every other user more valuable tomorrow. (c) Why winners get bigger — the network with the most users is the most attractive to the next user.

Austrians deny none of this. **What they deny is the word “law.”** Replacing “law” with “process” is the whole work of this lesson.

### ② Direct vs indirect network effects: Katz–Shapiro and Information Rules

The most rigorous mainstream treatment comes from Michael Katz and Carl Shapiro's 1985 *American Economic Review* paper “Network Externalities, Competition, and Compatibility,” and from Shapiro and Hal Varian's 1998 *Information Rules*, still on every Silicon Valley desk. They distinguish two kinds:

- **Direct network effects**: one more user directly benefits the others. Telephones, messaging, social networks, a language, a money. You gain because the other person is there.
- **Indirect network effects**: one more user does not help you directly but attracts more **complements**, which help you. More Windows buyers → more Windows developers → more software → a Windows PC is more useful to you. Consoles and games, electric cars and chargers, credit cards and merchants, app stores and developers. The extreme form of the indirect effect is the **two-sided market** of Stage 15.2.

Katz and Shapiro also introduced a crucial word: **expectations.** If which console you buy today depends on “how many games there will be,” and which console developers build for depends on “how many players there will be,” then what actually decides the outcome is what each side expects the other to do. Whoever can make the market believe “I will win” is more likely to actually win. That is the sentence in the mainstream literature closest to the Austrian view, and we pick it up in ④.

*Information Rules* turned positive feedback into strategy: **subsidize first, charge later; open first, lock in later; set the standard first, collect the rent later.** The playbook works — but it also convinced a generation of founders that “grabbing users” *is* the business model, forgetting what Stage 6.3 says: it is consumers who vote in the end, not user counts.

### ③ The Austrian reading: interdependent valuation, and money as the first network good

Now put on the Austrian glasses. Stage 1.2 says value is not in the thing but in a person's judgment about whether the thing serves their ends. So **when your end is “to communicate or exchange with others,” your valuation naturally depends on whether others are in the network.** Network effects need no new axiom; they are a direct implication of subjective value for goods whose purpose involves other people. Notice the reverse: if value really were *in* the thing (the labor theory of value, Stage 11.5), network effects would be inexplicable — same code, same software, why is it “worth” a million times more once a hundred million people have installed it?

Menger ran this logic in his 1892 paper “On the Origin of Money” (Stage 4.1). His key word is **saleableness**: how quickly and at how small a discount a good can be sold. A more saleable good gets adopted by more people as a medium of exchange; adoption makes it more saleable still. A self-reinforcing process, designed by nobody, converging on one or two commodities (gold, silver). **What Menger described is a complete network effect going from zero to one** — a century before Metcalfe, and more accurately, because he treated it from the outset as a *process* rather than a formula.

Mises's regression theorem of 1912 (Stage 4.1) adds the link of expectations: you accept this money today because you expect others to accept it tomorrow, and that expectation rests on yesterday's purchasing power. So money's “network value” does not appear from nowhere; it has a causal chain reaching back from the present into the past. Stage 17.1 uses exactly this to examine whether Bitcoin is money.

Hayek generalized the same logic to language, custom and law (Stage 7.4). Nobody invented English; each person learns it because others speak it. Common law (Stage 9.3) has authority because people expect judges to follow precedent. These are all **spontaneous orders**, all network goods, and all grew without any “law” and without any central coordinator. **Network effects are the everyday form of spontaneous order** — that is the Austrian's one-line placement of the whole topic.

### ④ Expectations and coordination: Schelling points, Lachmann, and entrepreneurial “seeding”

If my valuation depends on yours and yours on mine, how does anything get started? This is the chicken-and-egg problem of network goods, and the most interesting part of the lesson.

Thomas Schelling's *The Strategy of Conflict* (1960) provides a tool: the **focal point** (Schelling point). Two people agree to meet in New York without naming a place or time; most pick Grand Central at noon — not because it is best, but because it is the most conspicuous and the easiest to guess the other will guess. Network goods start the same way: people gravitate to whichever network “looks most likely to win,” and looking most likely to win is itself what makes it win.

Austrians have their own vocabulary for this. Ludwig Lachmann, in his 1943 essay “The Role of Expectations in Economics as a Social Science,” insisted that **expectations are not data but interpretations**: different people can expect different things about the same facts, and their expectations influence and revise one another. So the launch of a network good is not a problem of “solving for the equilibrium” but a **process of mutually coordinating expectations.** Who coordinates them? The **entrepreneur** of Stage 6.1.

Watch entrepreneurs seed. Facebook in 2004 opened only to Harvard students — not out of modesty, but to reach high density fast in a small circle, so that “everyone you know is on it” became true; then it copied the trick school by school. Early PayPal paid every new user about $10, and about $10 more for each referred friend — literally scattering seed with cash. Uber entering a new city subsidized drivers first (so riders always found a car), then riders (so drivers always found a fare). None of this is “computing an equilibrium.” It is entrepreneurs **betting on an expectation and acting to make it come true** — Kirzner's alertness plus Mises's judgment.

The textbook draws the situation as a picture. The horizontal axis is the share of users already in, x; the vertical axis is “what the marginal user will pay.” It rises at first (a bigger network is more useful) and then falls (later joiners care less to begin with): a hump. Draw the price as a horizontal line and there are **two crossings**: the left one is the **tipping point** (below it the network shrinks), the right one is the **steady state** (where the network settles). The textbook calls this “multiple equilibria” and says “historical accident decides which one you land on.”

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">The network-good “hump”: the marginal user's valuation vs the price</text><line x1="60" y1="240" x2="600" y2="240" stroke="var(--line)" stroke-width="1.5"/><line x1="60" y1="40" x2="60" y2="240" stroke="var(--line)" stroke-width="1.5"/><text x="330" y="268" text-anchor="middle" font-size="11" fill="var(--muted)">share of users already in, x (0 → 100%)</text><text x="22" y="140" text-anchor="middle" font-size="11" fill="var(--muted)" transform="rotate(-90 22 140)">marginal user will pay</text><polyline fill="none" stroke="var(--orange)" stroke-width="2.5" stroke-linejoin="round" points="60,240 87,212 114,180 141,155 168,133 195,115 222,100 249,88 276,80 303,75 330,73 357,75 384,80 411,88 438,100 465,115 492,133 519,155 546,180 573,212 600,240"/><line x1="60" y1="107" x2="600" y2="107" stroke="var(--blue)" stroke-width="2" stroke-dasharray="6 4"/><text x="596" y="100" text-anchor="end" font-size="11" fill="var(--blue)" font-weight="600">price = 20</text><circle cx="209" cy="107" r="6" fill="var(--red)"/><text x="209" y="90" text-anchor="middle" font-size="11" fill="var(--red)" font-weight="700">tipping point 28%</text><circle cx="451" cy="107" r="6" fill="var(--green)"/><text x="451" y="90" text-anchor="middle" font-size="11" fill="var(--green)" font-weight="700">steady state 72%</text><path d="M120,225 L200,225" stroke="var(--red)" stroke-width="2" marker-end="url(#ne-arrL)"/><path d="M230,225 L440,225" stroke="var(--green)" stroke-width="2" marker-end="url(#ne-arrR)"/><path d="M590,225 L462,225" stroke="var(--green)" stroke-width="2" marker-end="url(#ne-arrR)"/><defs><marker id="ne-arrL" markerWidth="8" markerHeight="8" refX="1" refY="4" orient="auto"><path d="M8,0 L0,4 L8,8 z" fill="var(--red)"/></marker><marker id="ne-arrR" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--green)"/></marker></defs><text x="135" y="215" font-size="10" fill="var(--red)">seed too small → shrinks to 0</text><text x="300" y="215" text-anchor="middle" font-size="10" fill="var(--green)">past the tipping point → self-reinforcing</text><text x="330" y="60" text-anchor="middle" font-size="10.5" fill="var(--muted)">user's value = θ × x × 100, θ uniform on 0–1 → marginal user will pay 100·x·(1−x)</text></svg><figcaption>At a price of 20 there are two crossings: 28% is the tipping point (a seed below it withers) and 72% the steady state. Raise the price to 25 and the two merge into one (50%); any higher and the network never starts. The textbook says “multiple equilibria”; Austrians say the points are still pictures — the road from the left one to the right one is walked by entrepreneurs.</figcaption></figure>

The picture is worth walking through with numbers. Suppose 100 potential users; each values the network at θ × x × 100, where θ is how much this person cares, spread uniformly between 0 and 1, and x is the share already in. Set the price at 20. At x = 28%, the people willing to pay 20 are exactly those with θ ≥ 0.71 — the top 28% — so the state is **self-consistent**, but fragile: lose a few, the rest find it no longer worth it, a few more leave … all the way to zero. At x = 72%, the people willing to pay 20 are those with θ ≥ 0.28 — the top 72% — also self-consistent, and stable: lose a few and the remaining marginal users still pay. Raise the price to 25 and the two crossings merge into one at 50%; raise it to 26 and there is no crossing at all — the network cannot start.

The Austrian attitude to this diagram is clear: **the picture is useful, the word “equilibrium” is harmful.** No real network “lands on” any point; it is pushed around every day by new users, defectors, rivals and shifting expectations. The road from 28% to 72% is not “historical accident” but the result of **entrepreneurs deliberately seeding, subsidizing, manufacturing focal points and persuading expectations.** The road from 72% back to zero is not “equilibrium collapse” but somebody (Stage 15.5) building something better. The two points are **thinking tools** for seeing directions, exactly like the equilibrium construct of Stage 2.4 — not descriptions of reality.

### ⑤ Why n² is not a law: heterogeneous users, the marginal user, congestion

Now the direct answer: why does value not grow as n²? Three reasons, all derived straight from Stages 1.1 and 1.2.

**First, users are heterogeneous, and the earliest care most.** Metcalfe's arithmetic assumes every connection is worth the same. But Stage 1.1 says each extra unit serves a less important use. Network goods are no exception: the first users are those who need it most (the expatriate using WeChat to reach family); the hundred-millionth user is the “everyone else has it, I suppose I'll install it” person. **The marginal user's valuation diminishes**, so total value grows far more slowly than n².

**Second, you do not care about all connections, only a few.** Of your 1,000 contacts, 90% you will not message this year. The jump from “possible connections” to “value” skips a word: *useful* connections. The mathematicians Andrew Odlyzko and Benjamin Tilly, in their 2005 paper “A refutation of Metcalfe's Law,” offered a more realistic estimate: **n·log n.** The reasoning: if you rank your contacts by importance and the k-th most important is worth about 1/k to you, then n contacts are worth about log n to you, and the whole network about n·log n. Compare: as n goes from 1,000 to 1,000,000 (100×), n² rises 10,000×; n·log n rises about 200×. That gap explains a great many dead internet valuations — the 2000 bubble of Stage 10.3 was full of firms telling an n² story while earning at n·log n or slower.

**Third, congestion and pollution.** Past a certain size, one more user can make others *worse off*: spam, harassment, noise, moderation failure, cultural dilution. “Mom and Dad joined Facebook,” or a Twitter timeline drowned in ads and bots, are negative network effects. Now the marginal user's value not only diminishes; it can go below zero.

Put the three together: **a network's value curve is subjective, heterogeneous and has a peak**; its shape must be discovered by the market process, not decreed by an exponent. That is why the demo lets you compare three curves — n², n·log n, and a curve built by actually summing heterogeneous users' valuations. You will see that the third almost never resembles the first two.

One candid remark. **Austrians do not have their own “correct formula” here.** The Austrian contribution is to show why no such formula can exist (valuations are subjective, heterogeneous and expectation-dependent) and how the market process discovers value without one. That is explanatory power, not predictive power — and Stage 14.4 argued that Austrians should be honest about the difference.

### ⑥ The lock-in debate: the QWERTY fable and the Liebowitz–Margolis rebuttal

The last controversy is **lock-in**: once a standard has won, are users stuck with it even if something better appears?

**Steelman first.** Paul David's 1985 paper “Clio and the Economics of QWERTY” told a story that spread everywhere: the QWERTY keyboard was laid out to keep 19th-century typewriter arms from jamming, and is not itself efficient; the Dvorak layout of the 1930s was supposedly faster, but because typists had learned QWERTY and manufacturers built QWERTY, nobody could afford to switch, and an inferior standard was locked in by “historical accident” for over a century. Brian Arthur generalized it in 1989: in a world of increasing returns, small early accidents can decide the final winner, and the market does not guarantee the best technology. This is the theory of **path dependence**. Its policy implication is direct: markets may lock into bad standards, so government should step in early to pick the “right” one, or force compatibility or break-ups afterward.

**Now the rebuttal.** Stan Liebowitz and Stephen Margolis, in “The Fable of the Keys” (*Journal of Law and Economics*, 1990), went back to the sources: the evidence that Dvorak was faster came mainly from a Navy study in which Dvorak himself was involved, with serious methodological problems; later, stricter tests (such as a 1956 U.S. General Services Administration test) found little or no difference between the layouts. In “Network Externality: An Uncommon Tragedy” (1994) they argued further that **if a rival standard really were clearly better, someone would have an incentive to pay the switching costs** — entrepreneurs can subsidize early adopters, ship conversion tools, build compatibility layers, and treat “lock-in” as a profit opportunity to be broken. In *Winners, Losers & Microsoft* (1999) they examined a series of software markets (spreadsheets, word processors) and found that changes of market leader lined up closely with changes in product-review quality — **users switched to the better product, not the earlier one.**

The Austrian position sits near the rebuttal, but it should be stated precisely:

- **Switching costs are subjective.** Stage 1.4 taught that cost is whatever the actor gives up, as judged by the actor. For someone who runs a business on WeChat every day, the cost of switching is enormous; for someone who only reads news on it, it is near zero. “Lock-in” is not a property of the network; it is **each user's own marginal calculation** — which is why networks always start unraveling at the margin.
- **Lock-in is an entrepreneurial opportunity, not a market failure.** Every group of “stuck” users is a profit waiting to be discovered: whoever lowers the switching cost (one-click contact import, cross-platform compatibility, running both side by side) can pry them loose. That is the alertness of Stage 6.1.
- **History sides with the rebuttal.** Internet Explorer held about 95% of browsers around 2003 and has essentially vanished; MySpace, Nokia, BlackBerry and Yahoo were each declared “too network-locked to dislodge” (Stage 15.2 walks through them). Lock-in exists — but it locks in **the period during which nobody does better**, not forever.
- **Where Austrians should concede**: for some standards (weights and measures, driving on the left or right, electrical voltage) switching costs really are so high that no private entrepreneur will bear them, and there lock-in is real — though not necessarily bad, since coordination is itself valuable and a “suboptimal but unified” standard often beats “optimal but fragmented.” Austrian theory does not tell you which standard is best; it only insists that **the ruler for “best” remains consumers' marginal valuations, not an engineer's efficiency metric.**

The lesson in one sentence: **network effects are the extreme case of interdependent subjective valuation; their “tipping point” is a road walked by entrepreneurs rather than an equilibrium, their value curve is discovered by the market rather than decreed by n², and their “lock-in” is the temporary result of subjective switching costs rather than a permanent prison.** Stage 15.2 asks whether a network that really has won has thereby become a “monopoly”; Stage 17.1 applies this toolkit to Bitcoin; and Stage 18.6 asks what interdependent valuation looks like when a network's nodes are no longer only people, but algorithmic agents too.
`,

  demo: "network-value",

  analogy: `
Think of a network good as a **dance party.**

The hall is rented, the music is on, the lights are up — and an empty dance floor is worth nothing to anyone. **The whole value of the party is that other people are there.** The first arrivals are the awkward ones: either the people who most wanted to dance (the highest-θ users), or the “plants” the organizer paid to show up (the entrepreneur's seed subsidy), or people who heard “so-and-so will be there tonight” (a Schelling point: a focal expectation).

When the floor is about a third full, things change: passers-by look in, think “this seems fine,” and come in too. At about seventy percent it runs itself — nobody regrets coming, nobody's leaving matters. Those are the two crossings on the hump diagram: **a third is the tipping point, seventy percent is the steady state.** What the organizer worries about is never “how many people can the floor hold” (the n² arithmetic) but “how do we survive the first half hour” (entrepreneurial seeding).

But no party stays hot forever. At ninety percent the floor is too packed to dance and people get annoyed (congestion — a negative network effect). A hall with better music opens next door; the first to leave are the people who never much cared (the marginal users), then their friends, then … the last to go are the die-hard regulars, and the day they leave is the day this hall's “network effect” is officially over. **No hall stays open because it is crowded.** It stays open for one reason only: every night, enough people decide it is worth coming.

Money is the same party on a grand scale: you accept a banknote not to keep it but because you believe others will accept it tomorrow (Stage 4.1). Language, law, open-source protocols, Bitcoin (Stage 17.1) — all are parties of different sizes, and all turn on the same two things: **interdependent expectations, and a few people willing to step into the middle of the floor first.**
`,

  misconceptions: [
    "**“Metcalfe's law is a law: double the users, quadruple the value.”** — It is arithmetic about *possible connections*, not a law about *value*. Value lives in minds; the marginal user's valuation diminishes, only a few connections are useful, and big networks get congested. Odlyzko's n·log n is closer to reality, and the Austrian answer is that the curve's shape can only be discovered by the market process, never decreed by an exponent.",
    "**“Network effects are new — a digital-age phenomenon.”** — Menger's 1892 account of the origin of money is precisely the story of a good whose valuation depends on others' valuations growing from zero to one; Hayek's account of language and law is the same. Money is humanity's first and largest network good. The digital economy just runs the old process faster and in plain sight.",
    "**“Network effects create multiple equilibria, and historical accident decides which one the market lands on.”** — The two crossings on the hump are useful thinking tools, but no real network lands on any point. The road from tipping point to steady state is walked by entrepreneurs who seed, subsidize, manufacture focal points and persuade expectations; the road back to zero is walked by someone building something better. “Accident” hides the action.",
    "**“Once a network forms it locks users in, so markets lock into inferior standards.”** — The QWERTY story does not survive the sources (Liebowitz and Margolis). Switching costs are subjective and differ across people, so networks unravel from the margin; every group of “stuck” users is a profit opportunity for whoever lowers the switching cost. IE, MySpace and Nokia were all declared unassailable.",
    "**“If valuation depends on other people, then network goods aren't subjectively valued.”** — The opposite: they are the extreme case of subjective value. Your valuation still comes from your own end (talking to certain people); the end just involves others. Their presence is a factual condition of your valuation; the valuation itself is still in your head. The same network being worth wildly different amounts to different people is proof it is subjective.",
  ],

  quiz: [
    {
      q: "100 potential users each value a network at θ × x × 100 (θ uniform on 0–1, x the share already in); the price is 20. Which statement is correct?",
      options: [
        "There is exactly one self-consistent share: 50%",
        "There are two self-consistent points: 28% is a fragile tipping point, 72% a stable steady state",
        "The network is guaranteed to start as long as the price is below 100",
        "All 100 will eventually join, since value rises with x",
      ],
      answer: 1,
      explain: "Solving 100·x·(1−x) = 20 gives x ≈ 0.28 and 0.72. Below 28% the marginal user finds it not worth it and leaves, and the network shrinks; above 28% it reinforces itself up to 72%. At a price of 25 the two merge (50%); above that the network cannot start.",
    },
    {
      q: "Why do Austrians call money “the first network good”?",
      options: [
        "Because money is a unified standard designed by the state",
        "Because Menger's saleableness logic is precisely a self-reinforcing process in which valuation depends on others' valuation",
        "Because money's value is proportional to the square of its holders",
        "Because money has no intrinsic value",
      ],
      answer: 1,
      explain: "Menger (1892) described a good becoming more saleable because more people expect others to accept it, and therefore being accepted by more people — a network effect with no designer and no formula. Mises's regression theorem added the link of expectations.",
    },
    {
      q: "Odlyzko and Tilly argue a network's value is closer to n·log n than n². Why?",
      options: [
        "Because bandwidth is limited",
        "Because people value their contacts in diminishing rank order, so only a small share of connections is useful",
        "Because large networks have higher server costs",
        "Because governments limit network size",
      ],
      answer: 1,
      explain: "If the k-th most important contact is worth about 1/k to you, n contacts are worth about log n and the whole network about n·log n. This is diminishing marginal utility from Stage 1.1 applied to a network good.",
    },
    {
      q: "In the Austrian process view, what carries a network from its tipping point to its steady state?",
      options: [
        "Historical accident",
        "A government-chosen standard",
        "Entrepreneurs seeding, subsidizing early users, manufacturing focal expectations and acting to make them true",
        "The automatic operation of Metcalfe's law",
      ],
      answer: 2,
      explain: "Facebook starting at Harvard, PayPal's sign-up bonuses and Uber's driver subsidies are entrepreneurs betting on an expectation and acting to coordinate it — Kirzner's alertness and Mises's judgment, not the automatic realization of an equilibrium.",
    },
    {
      q: "What is the core of Liebowitz and Margolis's rebuttal of the “QWERTY lock-in” story?",
      options: [
        "The Dvorak layout never existed",
        "The evidence for Dvorak's superiority is unreliable, and if a rival really were clearly better, entrepreneurs would have an incentive to pay the switching costs and break the lock-in",
        "Keyboard layouts are set by government, so markets are irrelevant",
        "All standards are eventually unified by the state",
      ],
      answer: 1,
      explain: "“The Fable of the Keys” (1990) showed the Dvorak evidence came from flawed tests; *Winners, Losers & Microsoft* (1999) showed changes of market leader in software tracked changes in product quality — users switched to the better product.",
    },
  ],

  further: [
    { label: "Carl Menger, “On the Origin of Money” (1892) — the earliest account of a network-effect process (Mises Institute)", url: "https://mises.org/library/book/origins-money" },
    { label: "Shapiro & Varian, Information Rules (1998) — the classic mainstream text on network economics (authors' site)", url: "https://www.inforules.com/" },
    { label: "Liebowitz & Margolis, “The Fable of the Keys” (JLE 1990) — the source-based rebuttal of the QWERTY lock-in story", url: "https://www.utdallas.edu/~liebowit/keys1.html" },
    { label: "Odlyzko & Tilly, “A refutation of Metcalfe's Law” (2005) — the original n·log n estimate", url: "https://www.dtc.umn.edu/~odlyzko/doc/metcalfe.pdf" },
    { label: "Hayek, “The Use of Knowledge in Society” (1945) — how dispersed knowledge and expectations get coordinated (Econlib)", url: "https://www.econlib.org/library/Essays/hykKnw.html" },
  ],
};
