export default {
  id: "entrepreneur-alertness",
  stage: 6,
  order: 1,
  title: "Entrepreneurship: Kirzner's Alertness & Mises's Judgment",
  difficulty: "core",
  prereqs: ["price-formation", "action-axiom"],

  oneLiner:
    "The textbook market is a snapshot of equilibrium: prices have already settled everything, and nobody can earn a cent of “excess profit.” Yet in the real world people earn profits every day — and lose money every day. What is missing? A character the mainstream model deleted: **the entrepreneur**. Kirzner says he is the **alert** one: he sees a price gap nobody else noticed and closes it. Mises says he is the one who **bears uncertainty**: he stakes his own resources on a **judgment** about the future and wins if right, loses if wrong. This lesson fits the two portraits together and answers a deeper question: **why, in a world without entrepreneurs, could prices never form at all?**",

  intuition: `
Start with the simplest possible story. Apples sell for $1.00 each in Town A and $1.60 each in Town B. Hauling one apple from A to B costs $0.30. The people of the two towns live their separate lives; neither knows the other's price.

One day someone — call him Zhang — happens to have visited both, and he **notices**. He buys apples in A for $1.00, pays $0.30 to ship them to B, and sells them for $1.60. Net gain: $0.30 per apple. On 1,000 apples, that is $300.

Now ask three questions.

**First: where did the $300 come from?** Not from labor — he hired people to haul the apples and paid the $0.30 freight. Not from capital — if he borrowed the money, the interest is a separate line item. The $300 is a reward for one thing: **he saw something others did not see.** The gap was sitting there before he came along; nobody had noticed it. Israel Kirzner, in *Competition and Entrepreneurship* (1973), called this capacity **alertness** — not “search” (search implies you already know what you are looking for) but the sudden **seeing of what everyone else has been looking straight past.**

**Second: can he keep earning it?** No. His own action destroys it. Buying in A pushes A's price up; selling in B pushes B's price down. Others see him profit and copy him. Before long the gap between the towns shrinks to roughly the freight cost of $0.30, and the profit is gone. **Entrepreneurial profit is self-liquidating** — and that is precisely its function. It squeezes information scattered across separate minds (“A has plenty of apples,” “B is short of them”) into a single price. Stage 1.3 explained how prices form; this lesson tells you **whose hand does the forming: the entrepreneur's.**

**Third: what if Zhang is not sure what B's price will be next week?** This is where the story gets interesting. In reality, when you buy the apples, B's price has not happened yet. Maybe a bigger fruit dealer shows up in B next week and the price falls to $1.20 — Zhang loses $0.10 an apple. Maybe B has a shortage and the price jumps to $2.00 — he cleans up. **He has to commit his money first, then wait for the future to be revealed.** That is not “seeing”; that is **judgment** — the side of entrepreneurship stressed by Mises, by Frank Knight, and by the contemporary theorists Nicolai Foss and Peter Klein. The entrepreneur is **the person who commits resources he owns to production under uncertainty.** Profit is the reward for judging right; loss is the price of judging wrong.

The two portraits — alertness and judgment — are not rivals. They are two faces of the same person. Kirzner's version explains **where the opportunity for profit comes from** (an unnoticed discoordination). Mises's version explains **who bears the outcome and why he gets to keep the profit** (the one who stakes his own resources on the future). Austrians have argued for forty years about which is more fundamental; we cover that fight in block ⑤.

Why does this deserve an entire stage of the course? Because the central models of mainstream economics — perfect competition, general equilibrium — **assume the entrepreneur out of existence.** All information is given, all prices are already at equilibrium, nobody needs to “see” anything, and there is no uncertainty to “bear.” The assumption makes the mathematics elegant; the cost is deleting the market's engine. Stage 6.2 shows why competition is a process and not a state; Stage 6.3 shows how profit and loss work as a feedback system; Stage 6.4 tackles monopoly. All three rest on this lesson's foundation. Further on, the accelerating creative destruction of Stage 15.5, the creator economy of Stage 16.3, and the question in Stage 18.3 of whether “AI can automate judgment” all come back to the two words defined here.

**In this lesson we break it into five pieces:**

- **① Kirzner's alertness: seeing the gap nobody else sees**
- **② Mises and Knight: the bearer of uncertainty — and why everyone is an entrepreneur**
- **③ Judgment: staking resources you own (Foss & Klein)**
- **④ Schumpeter's contrast: is the innovator a disrupter or an equilibrator?**
- **⑤ Three hats and one argument: entrepreneur ≠ manager ≠ capitalist; Rothbard vs Kirzner**
`,

  mechanics: `
### ① Kirzner's alertness: seeing the gap nobody else sees

Kirzner started from Mises but asked a much narrower, sharper question: **if you take an equilibrium model in which everything is already known, what must you add so that a market can move from disequilibrium toward equilibrium?** The neoclassical model describes what equilibrium looks like; it never explains how a market gets there. Walras simply assumed an “auctioneer” calling out prices — but there is no auctioneer in the real world.

Kirzner's answer: the **pure entrepreneur**. This person owns no resources and bears no risk. The only thing he does is **notice that the same thing sells at two different prices in two places**, then buy low and sell high. His income is **pure entrepreneurial profit** — not a wage (no labor), not interest (no capital), not rent (no land). It is the **reward for discovery**.

Back to the apples:

$$
Price in B 1.60 − price in A 1.00 − freight 0.30 = 0.30 pure profit per apple
$$

The crucial point is that the $0.30 **existed before Zhang appeared**; nobody had seen it. Kirzner distinguishes two kinds of not-knowing. One is **knowing that you don't know** (you know there is some price gap but not how large, so you spend money to find out — that is search, a costly input that can be written into a model). The other is **not knowing that you don't know** (it never crossed your mind that apple prices might differ between towns). Alertness targets the second. It has no cost, because you cannot “decide” to notice something you do not know exists — it arrives as a sudden “oh, of course.”

<figure><svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="24" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Arbitrage: alertness pulls two prices toward one number</text><rect x="40" y="60" width="180" height="110" rx="10" fill="var(--surface-2)" stroke="var(--line)"/><text x="130" y="86" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Town A (apples plentiful)</text><text x="130" y="118" text-anchor="middle" font-size="24" font-weight="800" fill="var(--blue)">$1.00</text><text x="130" y="148" text-anchor="middle" font-size="11" fill="var(--muted)">Zhang buys → price rises ↑</text><rect x="420" y="60" width="180" height="110" rx="10" fill="var(--surface-2)" stroke="var(--line)"/><text x="510" y="86" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Town B (apples scarce)</text><text x="510" y="118" text-anchor="middle" font-size="24" font-weight="800" fill="var(--orange)">$1.60</text><text x="510" y="148" text-anchor="middle" font-size="11" fill="var(--muted)">Zhang sells → price falls ↓</text><defs><marker id="ea-arrow-en" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--orange-ink)"/></marker></defs><line x1="225" y1="115" x2="410" y2="115" stroke="var(--orange-ink)" stroke-width="2.5" marker-end="url(#ea-arrow-en)"/><text x="318" y="104" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">freight $0.30</text><text x="318" y="136" text-anchor="middle" font-size="11" fill="var(--green)" font-weight="700">pure profit $0.30 each</text><line x1="60" y1="215" x2="580" y2="215" stroke="var(--line)"/><text x="60" y="205" font-size="11" fill="var(--muted)">Before: gap 0.60, unnoticed</text><text x="580" y="205" text-anchor="end" font-size="11" fill="var(--muted)">After: gap → about 0.30 (= freight), profit gone</text><rect x="60" y="225" width="520" height="8" rx="4" fill="var(--blue-soft)"/><rect x="60" y="225" width="260" height="8" rx="4" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="320" y="262" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">Entrepreneurial profit destroys itself in the act of being earned — that is how it presses knowledge into prices</text></svg><figcaption>Kirznerian arbitrage: alertness discovers an unnoticed gap, and the action itself compresses the gap down to freight cost. The profit is temporary; what it leaves behind is a more accurate price.</figcaption></figure>

This is what Kirzner means by calling the entrepreneur an **equilibrating** force: every successful arbitrage pushes the market one step closer to “one good, one price.” Note that he does not say the market **arrives** at equilibrium — new changes (harvests, tastes, technology) keep creating new discoordination — only that the entrepreneur's direction is **toward** it. This is the other face of Hayek's argument in Stage 7.2 about how dispersed knowledge gets used: Hayek explains that prices **transmit** knowledge; Kirzner explains **who** stuffs the knowledge into the price.

### ② Mises and Knight: the bearer of uncertainty — and why everyone is an entrepreneur

In *Human Action* (1949) Mises defined the entrepreneur differently from Kirzner. He first built a thought-tool, the **evenly rotating economy** (ERE): imagine that everything repeats at a fixed rhythm, tomorrow is identical to today, and nothing unexpected ever happens. In that world prices, wages and interest are all certain, and **there is neither profit nor loss** — because profit can only come from a gap between expectation and outcome, and in the ERE there is no gap.

Then Mises says: **the entrepreneur is precisely the role that does not exist in the ERE.** He is the person who buys factors of production, combines them, and sells the product on some future day — and the future is uncertain. The prices he pays for factors are based on his **guess** about what consumers will pay later; when the product reaches the market, a right guess earns, a wrong guess loses. In Mises's words, the entrepreneur is “acting man exclusively seen from the aspect of the uncertainty inherent in every action.”

Here Frank Knight comes in. In *Risk, Uncertainty and Profit* (1921) Knight separated **risk** (probabilities known; insurable and poolable — fire, for instance) from **uncertainty** (probabilities unknowable, because the event is unique — “will consumers like this new drink next year?”). Risk can be priced, so it yields no profit; **only uncertainty yields profit**, because whoever bears it cannot sell it to anyone else. Mises and Knight agree completely on this point: **profit is the reward for bearing genuine uncertainty.** It also echoes the action axiom of Stage 2.1 — action is action precisely because the future is open; if everything were settled there would be only mechanical response, not choice.

Mises added something that is often overlooked: **entrepreneurship is not the attribute of a class of people; it is an element present in every action.** Choosing a major, changing jobs, deciding whether to buy a house this year — each time you stake scarce resources (time, money, opportunities) against an uncertain future. The professional “entrepreneur” is simply that element magnified and specialized. So Austrians do not speak of an “entrepreneurial class,” only of the **entrepreneurial function** — **whoever is bearing uncertainty is performing it, even if only for a minute.**

The difference between risk and uncertainty in numbers:

- Zhang ships 1,000 apples; historically about 2% spoil in transit. That is **risk**: he can build a 20-apple loss into his costs, or buy insurance.
- Zhang does not know whether a bigger competitor will arrive in B next week. That is **uncertainty**: there is no historical frequency to consult, because “next week in B” happens only once. He can only **judge**, then bear the consequences.

### ③ Judgment: staking resources you own (Foss & Klein)

Nicolai Foss and Peter Klein, in *Organizing Entrepreneurial Judgment* (2012), carried the Mises–Knight line into the present and gave it a precise definition: **judgment = decisions about the deployment of heterogeneous resources that you own, under uncertainty.** All three terms matter:

- **Uncertainty**: not risk with known probabilities, but an open future that calculation cannot close.
- **Own**: judgment must land on resources you have the right to dispose of; otherwise it is merely an opinion. Saying “that shop should be on the corner” without putting up money is commentary; putting up the money to open it on the corner is judgment.
- **Heterogeneous resources**: recall Lachmann's jigsaw from Stage 3.4 — capital goods are not a homogeneous pile of “K” but specific things with specific uses that must be fitted together. The content of judgment is **deciding how the pieces fit**: this machine with those workers, making this rather than that, for these customers rather than those.

One important corollary in Foss and Klein: **judgment cannot be bought or sold.** You can hire a manager to execute and consultants to advise, but there is no market for “who ultimately decides and whose resources bear the consequences” — because if judgment could be bought at a price, its seller would use it himself. This explains **why firms exist**: the entrepreneur needs an organization to implement his judgment across a bundle of heterogeneous resources, and delegates “proxy judgment” to managers. The point becomes sharp in Stage 18.3: an AI can produce recommendations and compute probabilities, but **the person who stakes his own resources on the AI's recommendation and bears the outcome** is the entrepreneur. The AI is a capital good; the judgment remains human.

Run the apple example once more as an exercise in judgment. Zhang has $1,300 of his own money, all of it spent buying and shipping 1,000 apples (1,000 × $1.00 + 1,000 × $0.30), and faces three possible prices in B next week:

$$
B at $2.00 (shortage): revenue 2,000 − cost 1,300 = +700
B at $1.60 (as usual): revenue 1,600 − cost 1,300 = +300
B at $1.20 (a big dealer arrives): revenue 1,200 − cost 1,300 = −100
$$

If he “believes” the three cases are equally likely, the expected value is +$300 — but **that “one-third each” is his own gut estimate, not something any statistic handed him.** He might ship only 500 apples (halving the worst-case loss), or go all in (betting on the shortage). There is no correct answer; there is only **a verdict delivered afterward by consumers.** That is judgment.

### ④ Schumpeter's contrast: is the innovator a disrupter or an equilibrator?

For many people the first name that comes to mind with “entrepreneur” is Joseph Schumpeter — educated in Vienna alongside Mises, but on a different path. In *The Theory of Economic Development* (1911/1912) Schumpeter defined the entrepreneur as the **innovator**: the one who introduces new products, new methods, new markets, new sources of supply, new forms of organization. Later, in *Capitalism, Socialism and Democracy* (1942), he named the force **creative destruction**: the entrepreneur does not tidy up the market, he **blows up old structures** — the automobile destroys the carriage trade, streaming destroys the video store.

Set Kirzner against Schumpeter and there is an apparent contradiction:

- **Kirzner's entrepreneur is equilibrating**: he finds an existing discoordination and irons it out, moving the market toward equilibrium.
- **Schumpeter's entrepreneur is disequilibrating**: he creates new discoordination, blowing a settled market apart.

Kirzner answered this himself in 1973: the two are not in conflict; they are **looking at different moments.** The Schumpeterian innovator has also, at bottom, “seen” something others did not — that **existing resources can be combined into something consumers want more.** What he “breaks” is the old equilibrium, but relative to the not-yet-discovered new possibility, he is moving the market toward a **better** equilibrium. Put differently, arbitrage can be across space (Town A to Town B), across time (buy today, sell next year), or **across technology** (combine these parts into a machine no one has built). Schumpeter's “new combinations” are simply the most radical form of Kirznerian alertness.

Still, Schumpeter does remind us of something Kirzner's pure-arbitrage model underplays: **entrepreneurs often do not passively “discover” demand; they actively create things consumers did not know they wanted** (nobody in 2006 “needed” a touchscreen phone). This matters enormously in Stage 15.5 on creative destruction at internet speed — the internet has made experiments in “new combinations” extremely cheap, so the rhythm of creative destruction has shortened from decades to years.

### ⑤ Three hats and one argument: entrepreneur ≠ manager ≠ capitalist; Rothbard vs Kirzner

The real-world “boss” usually wears three hats at once. Austrians insist on separating them, because **each hat is paid from a different source**:

- **The capitalist** supplies funds and bears waiting — his return is **interest** (the time preference of Stage 3.1).
- **The manager** executes a given plan and optimizes within a given framework — his return is a **wage** (payment for labor, however senior).
- **The entrepreneur** judges the future, decides what to produce, and bears uncertainty — his return is **profit or loss**.

A shopkeeper who puts up his own money, makes the calls and runs the counter wears all three. In a public company, shareholders are capitalists (and partly entrepreneurs, since their money absorbs the final loss); the CEO is a senior manager (but when she decides to enter a new market she is exercising entrepreneurial judgment); a fund manager is … you see the point. The functions are clean; the people are mixed. Mises stresses that the split is an **analytical tool**, not a sociological classification.

Now the argument. In a 1985 review essay, Murray Rothbard (followed later by Joseph Salerno and others) put a sharp question to Kirzner's “pure entrepreneur”: **how can someone who owns nothing ever lose?** If the entrepreneur is nothing but alertness, he can only win (spot a gap, profit) and never lose (misjudge, and simply don't act). Yet real entrepreneurs lose money every day — and loss is the market's most important corrective mechanism (Stage 6.3). Rothbard therefore held that **an “entrepreneur” without ownership is an empty concept**: the real entrepreneur must be a “capitalist-entrepreneur,” the person who stakes his own capital.

Kirzner's reply: the “pure entrepreneur” is an **analytical abstraction**, meant to separate the **source** of profit (unnoticed discoordination) from its **bearer** (the owner of capital), just as the ERE is meant to separate profit from interest. He conceded that in the real world alertness must be realized through people who own resources, and that a mistaken “alertness” of course produces losses — only that, analytically, the loss is charged to capital, not to pure discovery.

Our view: **each side of this debate is half right.** Kirzner explains where the opportunity comes from (without an unnoticed discoordination there is nothing to earn); Mises, Rothbard, Foss and Klein explain how it gets cashed and by whom (without staking your own resources, it is just an idea). Put together, they give this lesson's complete definition:

$$
Entrepreneurship = alertness (seeing the opportunity) × judgment (staking resources, bearing uncertainty)
$$

Neither works alone. Alertness without judgment is a “commentator”; judgment without alertness is a “gambler.” The market pays profit to those who have both and charges losses to anyone in whom either has failed — **and that is the engine of the market process.** In the next lesson (Stage 6.2) we watch this engine run when many entrepreneurs compete with one another.
`,

  demo: "arbitrage-alert",

  analogy: `
Picture the market as a **big-city flea market**: hundreds of stalls, each stallholder knowing only the going rate at his own table.

**Alertness** is the browser who reaches stall 37 and suddenly remembers that stall 4 has the same vintage records at half the price. He was not “searching” — he had no checklist and was not comparing prices stall by stall — he simply **happened to see it, and actually noticed.** He runs back to stall 4, buys the lot, and sells at stall 37. Stall 4's owner sees his records are gone and raises his price; stall 37's owner sees nobody buying and lowers his. A day later, the price of vintage records across the whole market has converged — not because anyone ordered it, but because one person's alertness connected two pockets of information.

**Judgment** is a different person. She sees a new housing development going up outside the market and **bets** that young families will flood in six months from now. So she rents three stalls today and stocks them with children's furniture — for which, right now, there are no buyers. Six months later, if the development fills up, she makes a killing; if the developer goes bust and the site is abandoned, her furniture sits in a warehouse losing value. **Nobody can tell her which it will be. She can only stake.**

The first person closed a gap that already existed and made the market more efficient today; the second is preparing for a market that does not yet exist, so the flea market can serve new wants in six months. If the first person does nothing, he loses nothing; the moment the second person acts, her money is on the chopping block. **A real entrepreneur is almost always doing both at once**: inside the gap she sees today lies a bet about tomorrow.

Looking ahead: Stage 6.3 shows how the market grades every stallholder with profit and loss; Stage 16.3 asks what happens when a stall becomes an account on a phone and millions of people are doing both things simultaneously; and Stage 18.3 considers an AI that can help the first person find gaps faster and the second estimate probabilities better — but cannot replace either of them at the moment of **staking**.
`,

  misconceptions: [
    "**“An entrepreneur is a founder or a boss.”** — Austrians describe a **function**, not an identity. Anyone who commits scarce resources toward an uncertain future is performing the entrepreneurial function — including you, when you decide to change jobs. Conversely, a boss who merely executes an established routine is wearing the “manager” hat and earning a wage, not profit.",
    "**“Profit is the return on capital, so entrepreneurial profit is just interest.”** — Interest is the reward for time (waiting) and exists even in an evenly rotating economy with no uncertainty at all; profit comes only from the gap between expectation and outcome, and in the ERE it is exactly zero. A borrower running a business pays interest first — what is left after that is entrepreneurial profit (or loss).",
    "**“Alertness just means having more information and searching harder.”** — Search is what you do when you already know what you are looking for and spend resources to find it; alertness is “suddenly seeing” in a place where you did not know you were ignorant. Search can be modeled and purchased (a paid database); alertness cannot, because you cannot decide to notice something you do not know exists.",
    "**“Kirzner and Schumpeter are opposites: one stabilizes the market, the other disrupts it.”** — They are the same alertness at different scales. The innovator “blows up” an old equilibrium, but relative to the better combination not yet discovered, he moves the market toward a new coordination that fits consumer preferences more closely. Kirzner made this reconciliation himself in 1973.",
    "**“With AI and big data, entrepreneurial judgment can be replaced by algorithms.”** — Algorithms handle risk (known probabilities); they cannot handle Knightian uncertainty (unique events). More fundamentally, judgment by definition includes bearing the consequences with resources you own. AI is a capital good: it can make judgment faster and better informed, but the person who decides and absorbs the loss is still human (Stage 18.3).",
  ],

  quiz: [
    {
      q: "Apples are $1.00 in Town A and $1.60 in Town B; freight is $0.30. Zhang ships 1,000 apples and sells them. On Kirzner's analysis, what is the $300 he earns a reward for?",
      options: [
        "The labor of hauling the apples",
        "Interest on the money he advanced",
        "The discovery of a price gap nobody else had noticed",
        "An insurance premium for bearing transport risk",
      ],
      answer: 2,
      explain: "Hauling earns wages, capital earns interest, insurable risk earns a premium — all already in the costs. The remaining $300 is **pure entrepreneurial profit**, born of alertness: the gap was there all along; nobody had noticed.",
    },
    {
      q: "Why does Kirzner call the entrepreneur's action “equilibrating”?",
      options: [
        "Because entrepreneurs comply with government price guidance",
        "Because arbitrage itself raises the low price and lowers the high one, squeezing the gap toward the cost of transport",
        "Because entrepreneurs always prefer stable income",
        "Because equilibrium is the market's natural state and entrepreneurs merely go along with it",
      ],
      answer: 1,
      explain: "Zhang's buying pushes A's price up; his selling pushes B's price down; imitators follow, and the gap tends toward $0.30. **Profit destroys itself in the act of being earned**, and in doing so presses dispersed information into a more accurate price.",
    },
    {
      q: "Knight distinguishes “risk” from “uncertainty.” Which of the following is uncertainty?",
      options: [
        "On average 2% of apples spoil in transit",
        "Whether a bigger competitor will appear in Town B next week",
        "The annual probability of a warehouse fire",
        "The probability of rolling a six",
      ],
      answer: 1,
      explain: "Spoilage rates, fires and dice all have frequencies to consult; they can be priced and insured — that is risk. “Next week in Town B” happens once; there is no frequency, only **judgment** and its consequences — the uncertainty that generates profit.",
    },
    {
      q: "On Foss and Klein's definition, what must “judgment” involve?",
      options: [
        "An MBA and a market-research study",
        "A forecast about the future, publicly stated",
        "A decision, under uncertainty, about deploying heterogeneous resources that you own",
        "Computing the probabilities of each outcome and picking the highest expected value",
      ],
      answer: 2,
      explain: "Three keywords: **uncertainty** (not known probabilities), **ownership** (bearing the consequences with your own resources — otherwise it is opinion), and **heterogeneous resources** (deciding how the jigsaw fits). This is also why judgment cannot be bought and why firms exist.",
    },
    {
      q: "What is the core of Rothbard's criticism of Kirzner's “pure entrepreneur”?",
      options: [
        "Kirzner underestimates the role of regulation",
        "Someone who owns no resources cannot lose, yet loss is the market's most important corrective",
        "Alertness is a psychological concept that does not belong in economics",
        "Schumpeter's innovation theory is sufficient and Kirzner adds nothing",
      ],
      answer: 1,
      explain: "Rothbard held that an ownerless “entrepreneur” can only win and never lose, and is therefore an empty concept; the real entrepreneur is the capitalist-entrepreneur who stakes capital. Kirzner replied that the pure entrepreneur is an abstraction separating profit's **source** from its **bearer**.",
    },
  ],

  further: [
    { label: "Israel Kirzner, Competition and Entrepreneurship (1973) — the original statement of alertness and the pure entrepreneur (Mises Institute)", url: "https://mises.org/library/book/competition-and-entrepreneurship" },
    { label: "Mises, Human Action, Chapters XIV–XV — the evenly rotating economy and the entrepreneurial function", url: "https://mises.org/library/book/human-action" },
    { label: "Frank Knight, Risk, Uncertainty and Profit (1921), full text (Econlib)", url: "https://www.econlib.org/library/Knight/knRUP.html" },
    { label: "Foss & Klein, Organizing Entrepreneurial Judgment (Cambridge University Press, 2012) — the judgment-based theory of the firm", url: "https://doi.org/10.1017/CBO9781139021173" },
    { label: "Kirzner, “Entrepreneurial Discovery and the Competitive Market Process: An Austrian Approach,” Journal of Economic Literature (1997) — Kirzner's systematic reply to his critics", url: "https://www.jstor.org/stable/2729693" },
  ],
};
