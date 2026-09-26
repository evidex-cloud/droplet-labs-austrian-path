---
id: zero-marginal-cost
prereqs: diamonds-water, profit-loss
demo: digital-pricing
---

# Pricing at Zero Marginal Cost: Subjective Value Still Rules

## @hook
Copying a piece of software, a song, a video or a model's weights costs nothing. The textbook says “price tends toward marginal cost,” so many conclude that digital goods “should” be priced at zero, that charging is monopoly, that paying is exploitation, and that the future is a “zero marginal cost society.” The Austrian reply begins with the first sentence of [[diamonds-water|Stage 1.1]]: **price is never set by cost; it is set by the marginal buyer's valuation, and cost is imputed backward from price.** Digital goods do not overturn that law — they magnify it until it is visible to the naked eye: when cost is zero, all that remains is valuation. This lesson explains why software that costs nothing to copy sells for $200, why “free + subscription + ads” is entrepreneurs discovering the distribution of valuations, why open source is not anti-economics, why “piracy losses” are mis-computed — and where Austrians still owe a theory about recovering fixed costs.

## @intuition
Start by putting the opposing case at its strongest.

Mainstream microeconomics has an elegant result: under perfect competition, **price equals marginal cost.** The reasoning: as long as price exceeds the cost of producing one more unit, someone will produce that unit to capture the difference, until the difference vanishes. The result carries a welfare implication: when price equals marginal cost, every consumer who values the good above its production cost is served, and nothing is wasted — the so-called first welfare theorem.

Now apply it to digital goods. Once the software is written, the second copy, the ten-thousandth and the hundred-millionth cost nothing to make. By the logic above, its “efficient price” is zero: any positive price shuts out people who would have paid a little, creating “deadweight loss.” Kenneth Arrow identified the dilemma in 1962: an information good is either priced at marginal cost (zero, so nobody has an incentive to produce it) or protected by patents and copyright at a high price (deadweight loss) — wrong either way. Jeremy Rifkin's *The Zero Marginal Cost Society* (2014) pushes it to the limit: as more and more goods approach zero marginal cost, capitalism's pricing mechanism will progressively fail and a “collaborative commons” will replace it. Chris Anderson's *Free* (2009) says the same from the business side: online, “free” is not a marketing tactic but an economic law.

The argument is internally consistent on its own premise. The premise is: **price is determined by cost.** And that is exactly what [[diamonds-water|Stage 1.1]] spent an entire lesson overturning.

Return to the five buckets of water in the desert. When you sell a bucket, you reference not how hard it was to fetch but “which use do I give up with one bucket less.” A piece of software is the same: the seller's price references not the cost of copying it (zero) but **what the marginal buyer will pay** — the person who just barely finds it worth it. Zero copying cost establishes exactly one thing: **supply can be unlimited.** Unlimited supply does not mean zero valuation; it means the seller need not worry about “running out” and can put all attention on “who will pay how much.”

That is why the digital economy is the best classroom subjective value theory ever had. In the physical economy, cost and valuation are tangled, and you can fool yourself with “it costs me 80 so I sell for 100.” In the digital economy cost is zero and there is nowhere to hide — **price is valuation, and only valuation.** Software sells for $200 because enough people think it is worth $200; a song sells for $0.99 because someone thinks so; a model's API is priced per call because callers think each call is worth it. Not one of these numbers comes from cost.

Then something more interesting appears. If price is valuation and valuations differ across people ([[subjective-value|Stage 1.2]]), then a *single* price is wasteful: it shuts out the person who would pay 30 while charging the person who would pay 300 only 200. So the history of digital pricing is the history of **entrepreneurs discovering the distribution of valuations**: free tier plus pro tier, student pricing, subscriptions, ad support, bundles, season passes, cosmetic skins — each one Kirznerian alertness ([[entrepreneur-alertness|Stage 6.1]]), each one graded by profit and loss ([[profit-loss|Stage 6.3]]).

We also have three natural follow-ups. Do open source, Wikipedia and “gifting” transcend economics? If ideas are not scarce, what exactly is being paid for (the intellectual-property debate of [[why-property|Stage 9.1]])? Does piracy really cause “losses”? And finally we must say honestly: how the fixed cost of the *first* copy — tens of millions or billions of dollars — gets recovered is something Austrians have no complete theory for, and that is where venture capital and the interest rate ([[time-preference|Stages 3.1]] and 5.2) enter the story.

**In this lesson we break it into six pieces:**

- **① Steelman first: P = MC, Arrow's dilemma and Rifkin's zero-marginal-cost society**
- **② The [[diamonds-water|Stage 1.1]] answer: price is the marginal buyer's valuation, cost is imputed backward**
- **③ Versioning, bundling, freemium, subscriptions and ads: entrepreneurs discovering the distribution of valuations**
- **④ Open source, gifts and reputation: non-price exchange is still purposeful action**
- **⑤ Intellectual property revisited: if ideas aren't scarce, what is being paid for?**
- **⑥ The Austrian IOU: fixed costs, venture capital and the interest rate**

## @mechanics
### ① Steelman first: P = MC, Arrow's dilemma and Rifkin's zero-marginal-cost society

Stating “price tends toward marginal cost” at its strongest takes three layers.

**The first layer is the logic of competition.** If a copy of software sells for $200 and costs nothing to copy, anyone holding a copy can resell it for $199 at a profit, then $198, $197 … until the price approaches zero. That is not a moral argument but arbitrage logic: **zero marginal cost + free copying = price tends to zero.** This layer is correct — which is why digital sellers must somehow prevent free copying (copyright, encryption, accounts, cloud delivery), or the price really does go to zero.

**The second layer is welfare logic.** Suppose 1,000 potential users with willingness to pay spread uniformly from $100 down to $0. At a price of $50, 500 buy and 500 are shut out — each of whom could have been served at zero cost. The mainstream says those 500 people's unsatisfied valuations are pure waste, about $12,500 of deadweight loss. The higher the price, the more waste; only at a price of zero is waste zero.

**The third layer is institutional logic.** Arrow's 1962 paper noted: information costs money to produce, but once produced its marginal-cost price is zero, so producers cannot recover their costs. Either nobody produces (market failure) or the state grants patents and copyrights so producers can charge (creating the second-layer waste). His conclusion: markets for information fail by nature and need public funding or intellectual property. Rifkin (2014) projected this into the future: as the marginal costs of communication, energy and logistics all approach zero, market pricing will withdraw from ever more domains, replaced by the “collaborative commons.”

All three layers share one foundation: **cost is the anchor of price.** Layer one says arbitrage pushes price down to cost; layer two says any departure of price from cost is waste; layer three says unrecovered cost is failure. Keep that foundation in view, because it is what we now dismantle.

### ② The [[diamonds-water|Stage 1.1]] answer: price is the marginal buyer's valuation, cost is imputed backward

The core of [[diamonds-water|Stage 1.1]] was an arrow of causation: **consumers' valuation → price of the final product → prices of the factors (costs)**, never the reverse. Menger called it imputation. Applied to digital goods:

- What a copy of software is worth depends on what the marginal buyer (the marginal pair of [[price-formation|Stage 1.3]]) will pay.
- What the programmers, servers and offices that produced it are worth is **imputed backward** from the software's price — if nobody wants the software, those programmers' hours are worth nothing in that use.
- Zero copying cost is a fact about **supply**: it means the seller is never constrained by inventory. It has no bearing on **demand** — that is, on the marginal buyer's valuation.

Now turn the first-layer arbitrage question around: why does nobody in reality resell software for $199? Because sellers prevent free copying. That is not “distorting the market”; it is **defining the good.** [[why-property|Stage 9.1]] explained that property is a rule for resolving conflict over scarce resources; what a digital seller actually sells is not “an arrangement of bits” but **a licensed right of use, an account, updates, service, trust** — all of which are scarce (servers, maintenance, support, developers' ongoing attention), excludable, and therefore priceable. Part ⑤ develops this.

Now the second layer's “deadweight loss.” It has two problems. First, it counts “the person who would pay $30 didn't get it” as a loss, but by the same logic the person who would pay $300 paid only $200, and that “underpayment” is also a transfer; one price for everyone was never going to work — which is precisely the room for differential pricing in ③. Second, and more fundamentally: “social waste” assumes that different people's valuations can be added and compared (the cardinal utility of [[diamonds-water|Stage 1.1]]), a step Austrians have rejected since Menger — you can say “A wants it more than B,” not “A's wanting plus B's wanting equals $12,500.” Deadweight loss is a triangle that exists only in an equilibrium snapshot; in the market process it is a **profit opportunity** waiting for an entrepreneur ([[entrepreneur-alertness|Stage 6.1]]) — every “would pay $30 but shut out” person is a potential customer for a free tier, a student edition, an ad-supported version.

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">The willingness-to-pay staircase of 1,000 users: price is set by the marginal buyer, not by copy cost (0)</text><line x1="60" y1="250" x2="600" y2="250" stroke="var(--line)" stroke-width="1.5"/><line x1="60" y1="40" x2="60" y2="250" stroke="var(--line)" stroke-width="1.5"/><text x="330" y="278" text-anchor="middle" font-size="11" fill="var(--muted)">users ranked from highest to lowest willingness to pay (0 → 1,000)</text><text x="22" y="145" text-anchor="middle" font-size="11" fill="var(--muted)" transform="rotate(-90 22 145)">willingness to pay ($)</text><text x="52" y="46" text-anchor="end" font-size="10" fill="var(--muted)">100</text><text x="52" y="149" text-anchor="end" font-size="10" fill="var(--muted)">50</text><text x="52" y="253" text-anchor="end" font-size="10" fill="var(--muted)">0</text><rect x="60" y="145" width="270" height="105" fill="var(--orange-soft)" stroke="none"/><rect x="60" y="82" width="108" height="63" fill="var(--blue-soft)" stroke="var(--blue)" stroke-width="1" stroke-dasharray="4 3"/><line x1="60" y1="40" x2="600" y2="250" stroke="var(--orange)" stroke-width="2.5"/><line x1="60" y1="145" x2="330" y2="145" stroke="var(--red)" stroke-width="2" stroke-dasharray="6 4"/><line x1="330" y1="145" x2="330" y2="250" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="3 3"/><circle cx="330" cy="145" r="6" fill="var(--red)"/><text x="345" y="140" font-size="11" fill="var(--red)" font-weight="700">marginal buyer: user #500, WTP = price = 50</text><text x="195" y="205" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">one price 50: 500 × 50 = 25,000</text><text x="114" y="118" text-anchor="middle" font-size="10" fill="var(--blue)" font-weight="600">add a “Pro” tier at 80</text><text x="114" y="131" text-anchor="middle" font-size="10" fill="var(--blue)">+200 users × 30 = +6,000</text><line x1="60" y1="250" x2="600" y2="250" stroke="var(--green)" stroke-width="3"/><text x="590" y="243" text-anchor="end" font-size="11" fill="var(--green)" font-weight="700">marginal cost = 0 (the textbook's “right price” → revenue 0)</text><text x="470" y="215" text-anchor="middle" font-size="10" fill="var(--muted)">the 500 users with WTP &lt; 50:</text><text x="470" y="229" text-anchor="middle" font-size="10" fill="var(--muted)">“deadweight loss” to the mainstream, “customers awaiting discovery” to Austrians</text></svg><figcaption>Willingness to pay runs uniformly from 100 to 0. Price at 50: the marginal buyer is user #500 and revenue is 25,000. Price at 0 (marginal cost): revenue is 0 — who writes the first copy? Add an $80 Pro tier and collect 6,000 more from the 200 users with WTP 80–100. Versioning is simply another cut on the staircase.</figcaption></figure>

Walk through the numbers in the figure: 1,000 users, willingness to pay falling linearly from $100 to $0. Price at 50 and user #500 just barely finds it worth it — the marginal buyer — for revenue of 25,000. Price at 30: 700 buy, revenue 21,000. Price at 60: 400 buy, revenue 24,000. **Not one number comes from cost**; all come from the shape of the staircase. And the “textbook's correct price” — marginal cost, zero — corresponds to revenue of zero.

### ③ Versioning, bundling, freemium, subscriptions and ads: entrepreneurs discovering the distribution of valuations

If valuations differ across people, one price means two kinds of miss: the person who would pay 30 is shut out, and the person who would pay 100 pays only 50. Every innovation in digital pricing solves this one problem. Shapiro and Varian call it **versioning** in *Information Rules*: make several versions of the same product and let users **sort themselves** by their own valuation.

- **Freemium**: the free tier serves people whose willingness to pay is near zero (they bring network effects, word of mouth and data); the paid tier serves those who value it highly. Spotify, Dropbox, most mobile games.
- **Student and regional pricing**: the same software priced differently for different groups and countries — not “discrimination” but acknowledgment that valuations (and incomes) differ.
- **Subscriptions**: in 2013 Adobe replaced a one-time purchase (about $2,600 for the full suite) with a subscription of about $50 a month, letting moderate-but-continuing valuers in and aligning the seller's revenue with users' ongoing valuation. Microsoft's Office 365 and Netflix follow the same logic.
- **Ad support**: selling users' attention to advertisers so the product is free to users — the price structure of the two-sided market in [[platforms-winner|Stage 15.2]] and the subject of [[attention-economy|Stage 16.1]]. Netflix's 2022 ad-supported tier is one more cut on the staircase.
- **Bundling**: packaging several products so that people who value A highly and B little, and people the other way round, both find the whole “worth it” — Microsoft Office is the textbook case.
- **In-game purchases**: the game is free, skins and season passes cost money — people who would pay 0 play, “whales” who would pay $1,000 pay, and each needs the other (without the former, nobody sees the latter's skins).

Compute the power of versioning with the figure's example: one price at 50 yields 25,000. Two tiers — Pro at 80, Basic at 40 — and the 200 users with WTP 80–100 buy Pro (16,000) while the 400 with WTP 40–80 buy Basic (16,000): revenue 32,000, users up from 500 to 600. **Revenue and coverage rise together.** The demo lets you make a third and fourth cut yourself.

The Austrian point here: **none of these price structures is derived from cost, and none is computed from a formula.** Adobe did not know whether subscriptions would work; Netflix did not know whether an ad tier would dilute the brand. Every attempt is Kirzner's alertness (seeing a group of unserved valuations) plus Mises's judgment (committing resources to the bet), then graded by the profit and loss of [[profit-loss|Stage 6.3]]. The mainstream's “optimal price discrimination” models assume the seller knows the demand curve; real sellers do not — they **discover** it. [[creator-economy|Stage 16.3]]'s creator economy pushes this discovery down to the individual: a YouTuber's “free videos + memberships + merchandise + sponsorships” is versioning by one person.

### ④ Open source, gifts and reputation: non-price exchange is still purposeful action

A large part of the digital world appears to charge nothing: Linux, Wikipedia, Python, nearly every internet protocol, countless free tutorials and model weights. Rifkin takes this as proof that a “collaborative economy outside the market” is displacing pricing. What do Austrians say?

The action axiom of [[action-axiom|Stage 2.1]] says: **people act purposefully, using means to pursue ends.** It does not say the end must be money. Mises insisted throughout *Human Action* that economics studies all purposeful action, including charity, gift-giving and fighting for honor. So the question is not whether open source is economic behavior (of course it is) but **what means open-source contributors use to pursue what ends**:

- **Reputation and signaling**: a programmer maintaining a well-known project on GitHub exchanges code for visible proof of ability — hard currency on the labor market. Eric Raymond's *The Cathedral and the Bazaar* (1997) described the open-source community as a “gift culture”: status comes from what you give away.
- **Complements**: Red Hat gave Linux away and sold support, certification and enterprise services; IBM bought it in 2019 for about $34 billion. Google gives Android away and sells search and the app store. The bits are free; what is charged for is the scarce services around the bits (see ⑤).
- **Own use and collaboration**: many open-source projects begin as “I need this tool myself,” and opening the source is a way to get others to help fix it — a form of the division of labor and exchange of [[exchange-division|Stage 1.5]], only the currency is labor rather than money.
- **Eroding rivals' rents**: a big firm open-sourcing a component is often trying to destroy the value of a competitor's paid product — competitive strategy, not charity.

So open source is not “beyond the market”; it is the market process extended to **non-monetary prices**: people still compare means and ends, still respond to rewards, still make entrepreneurial judgments (“will open-sourcing this get me what I want?”). It does not refute subjective value theory; it is a case of it: **when copying costs nothing, “giving it away” can itself be the cheapest means.** [[defi-code-order|Stage 17.4]] applies the same reasoning to the open-source governance of DeFi protocols.

What Austrians should concede: open source does show that the intellectual-property argument “without property protection, innovation disappears” is far too strong — Linux grew into the world's most important operating system with no patents at all. That leads straight to ⑤.

### ⑤ Intellectual property revisited: if ideas aren't scarce, what is being paid for?

[[why-property|Stage 9.1]] gave the reason property exists: scarcity causes conflict, and property is the rule that resolves it. But ideas, code and melodies are **not scarce** — your using my algorithm does not stop me using it; a song copied a hundred million times is not diminished. Stephan Kinsella's “Against Intellectual Property” (2001) draws the conclusion: patents and copyrights are not property but **state-granted restrictions on the use of other people's tangible property** (you may not use your own computer to copy those bits) — that is, monopoly as defined in [[monopoly-question|Stage 6.4]]. Boldrin and Levine's *Against Intellectual Monopoly* (2008) adds the evidence: most historical innovation happened in industries with no or weak patents, and patents are used more to block rivals than to reward inventors. Austrians are not unanimous (Mises and Rothbard were gentler on copyright, viewing it as something achievable by contract), but the direction is shared: **“ownership” of ideas is a suspect concept.**

Then if ideas are not scarce and copying is free, what are people paying for? Take Netflix, Steam, Spotify, ChatGPT Plus and a subscription newspaper apart and the answer is a set of **scarce things**:

- **Access and convenience**: when Steve Jobs launched the iTunes Music Store in 2003, pirated downloads were already free; iTunes won on “one click, reliable, no viruses.” Steam shrank the market for pirated games with automatic updates, cloud saves and community — it sells **time.**
- **Service and continuity**: software updates, security patches, support; a model's inference compute, latency and uptime. Each consumes real scarce resources.
- **Trust and curation**: something a platform has screened, verified and priced for you saves you the cost of judging it yourself.
- **Early access and identity**: seeing it first, limited skins, a creator's signed edition — high valuers are buying “first” and “belonging,” fully consistent with the subjectivity of valuation in [[subjective-value|Stage 1.2]].

So the “piracy costs X billion dollars” arithmetic — pirated copies times retail price — is a classic **valuation fallacy**: a person who downloads a pirated copy valued it below the retail price to begin with (otherwise they would have bought it); counting them as “one lost retail sale” assumes the marginal buyer's valuation equals the top price. The U.S. Government Accountability Office criticized the industry's loss estimates as unsupported in a 2010 report. The Austrian addendum: what piracy really harms is **the users who could have been served by a cheaper version** — precisely what versioning in ③ addresses — and the history of iTunes and Steam shows that **priced convenience and trust can beat “free.”**

One candid sentence: this does not mean piracy has no substitution effect; for some goods (a new film's opening week) substitution is real. The Austrian claim is “the losses are systematically overstated and the remedy is price discovery rather than more law,” not “piracy is harmless.”

### ⑥ The Austrian IOU: fixed costs, venture capital and the interest rate

At this point the price question is settled: price is set by the marginal buyer's valuation, independent of copying cost. But half of Arrow's dilemma remains: **what about the cost of the first copy?** A AAA game often costs more than $100 million to develop, a film $200 million, a frontier AI model hundreds of millions to billions to train. These are fixed costs — sunk when it comes to pricing (Rothbard was right: sunk costs play no role in price) but **not sunk when deciding whether to invest.**

The Austrian answer has three parts, one of them incomplete.

**Part one is entrepreneurial judgment ([[entrepreneur-alertness|Stage 6.1]]).** Whether to invest the $100 million depends on the entrepreneur's judgment of “the sum of future marginal buyers' valuations”: they anticipate the staircase's shape, how many cuts can be made and how much each collects, then commit resources. Right, profit; wrong, loss ([[profit-loss|Stage 6.3]]). The logic is identical to the physical economy — steam-engine works, railways and chip fabs are all huge fixed cost plus low marginal cost. Digital goods created no new problem; they pushed the ratio to an extreme.

**Part two is time preference and the interest rate ([[time-preference|Stages 3.1]] and 3.5).** The fixed cost is paid today; revenue arrives over years — a classic case of roundabout production ([[roundabout-production|Stage 3.2]]). Whether it can be financed depends on the interest rate: a low rate raises the present value of distant revenue and more long-payback projects get approved; a high rate does the opposite. That is why the zero-rate decade of 2010–2021 financed so much software, so many platforms and so much “blitzscaling,” and it is the digital form of the malinvestment of [[boom-malinvestment|Stage 5.2]]: when the rate is artificially suppressed, too many “burn cash for users now, price later” projects launch at once, and the marginal buyers' valuations behind them cannot support them all. The mass tech layoffs and valuation collapses after rates rose in 2022 are the bill for this paragraph. [[ai-bubble-abct|Stage 18.5]] applies the same analysis to the AI capex frenzy.

**Part three is what Austrians have not finished.** The mainstream has a theory of “high fixed cost, zero marginal cost” industries: natural monopoly, average-cost pricing, contestable markets (Baumol 1982). Austrian criticisms of these are correct (“average cost” is not something an acting person faces; contestability holds only absent legal barriers), but Austrians **have not supplied a replacement theory** answering: in an economy where nearly all marginal costs approach zero, what will price structures, firm sizes and profit rates look like? Where does venture capital — a form of capital specialized in fixed-cost-plus-zero-marginal-cost projects — belong in Austrian capital theory (the heterogeneous capital of [[heterogeneous-capital|Stage 3.4]])? That is an open problem for [[open-problems|Stage ∞.1]], and the honest boundary of this lesson.

The lesson in one sentence: **zero marginal cost does not overturn subjective value; it magnifies it until price is nothing but valuation; versioning, subscriptions, ads and free tiers are entrepreneurs discovering the distribution of valuations; open source and gifts remain purposeful action; what is paid for is never the bits but scarce access, service and trust; and recovering fixed costs rests on entrepreneurial judgment and the interest rate — where Austrian theory is still unwritten.** [[creator-economy|Stage 16.3]] carries this price discovery to individual creators; [[ai-capital-good|Stage 18.2]] asks what is left to price when AI drives the cost of the *first* copy toward zero as well.

## @analogy
Think of a digital product as a **concert** — but in a hall with infinite seats, where letting one more person in costs nothing.

The textbook says: since one more person costs nothing, the ticket price “should” be zero and any charge shuts people out. But if the ticket is free, who pays for rehearsals, the composer, the venue? That is Arrow's dilemma.

What do real promoters do? They do not look at “the cost of one more person”; they look at **what each person in the audience would pay**: the die-hard fans up front would pay 800, the middle rows 200, the students at the back 50, and the passers-by 0 — but they will post clips to social media (bringing the next crowd). So there are VIP tickets, regular tickets, student tickets, a free livestream — **each ticket tier is a cut on the audience's valuation staircase**, and the more precisely you cut, the higher the revenue and the more people get in. Not one tier is computed from “cost.”

“Piracy” in this picture is people climbing over the fence. The promoter says “every fence-climber costs me 800” — wrong: the climber would have paid at most 50, so you lost one student ticket, and if you never offered a student ticket you lost nothing. What actually reduces fence-climbing is not a higher fence (which costs money and scares off paying fans) but making a ticket easier than the fence: one-click purchase, no queue, a guaranteed seat — which is how iTunes and Steam beat piracy.

And the rehearsals, the composer — the $100 million cost of the “first copy” — who fronts it before the concert? Someone who believes “this band is worth it” (venture capital), borrowing at the going interest rate ([[time-preference|Stage 3.1]]). When the rate is pushed too low, too many bands rehearse at once, halls fight over the same audience, and many bands discover the audience's valuations cannot cover the rehearsals. That is the malinvestment of [[boom-malinvestment|Stage 5.2]], with the stage swapped for software.

## @misconceptions
- **“Digital goods have zero marginal cost, so their ‘correct’ price is zero and charging is monopoly.”** — Price is set by the marginal buyer's valuation, independent of copy cost. Zero marginal cost only means supply can be unlimited, not that valuation is zero. “Price = marginal cost” is a condition inside an equilibrium snapshot, not a cause of price formation; [[diamonds-water|Stage 1.1]] reversed that arrow long ago.
- **“Freemium, subscriptions, ads and regional pricing ‘discriminate’ against consumers.”** — They are versioning: acknowledging that valuations differ and letting users sort themselves. Two tiers often raise both revenue and the number of people served. None of these structures is derived from cost or a formula; they are entrepreneurs discovering the distribution of valuations, graded by profit and loss.
- **“Open source, Wikipedia and gift economies prove market pricing is being transcended.”** — The action axiom does not require money as the end. Contributors pursue reputation, ability signals, complement sales, collaborative bug-fixing and weakening rivals — all purposeful action. When copying is free, “giving it away” can be the cheapest means. That is a case of subjective value theory, not a counterexample.
- **“Every pirated copy is a lost sale.”** — The pirate valued it below the retail price (otherwise they would have bought), so counting them as a lost retail sale treats the marginal buyer's valuation as the top price. The real remedy is serving those people with cheaper versions, convenience and trust — how iTunes and Steam beat “free.” This does not mean piracy has no substitution effect at all.
- **“Austrians have fully explained the zero-marginal-cost economy.”** — No. The price problem is solved; the fixed-cost problem only half: whether to invest in the first copy rests on entrepreneurial judgment, whether it can be financed on the interest rate, but Austrians lack a theory of price structure and firm size for “high fixed cost + zero marginal cost” industries, and have not placed venture capital within their capital theory. An open problem for [[open-problems|Stage ∞.1]].

## @quiz
1. 1,000 users have willingness to pay falling uniformly from $100 to $0. At a price of $50, what determines the price?
   - [ ] Copy cost (zero) plus a reasonable profit
   - [x] The valuation of user #500 — who just barely finds it worth $50 and is the marginal buyer
   - [ ] The average of all users' valuations
   - [ ] Development cost divided by the number of users
   > At $50, the 500 users with WTP ≥ 50 buy and user #500 is the marginal buyer (the marginal pair of [[price-formation|Stage 1.3]]). Revenue of 25,000 comes entirely from the staircase's shape; no number comes from cost.

2. Replace the single $50 price with two tiers (Pro at 80, Basic at 40) in the example above. What happens?
   - [ ] Revenue falls, because some people drop from 50 to 40
   - [x] Revenue rises from 25,000 to 32,000 and users from 500 to 600 — revenue and coverage rise together
   - [ ] Users and revenue are unchanged
   - [ ] It violates antitrust law
   > The 200 users with WTP 80–100 buy Pro (16,000); the 400 with WTP 40–80 buy Basic (16,000). Versioning lets users sort themselves by valuation — entrepreneurs discovering the distribution, not deriving prices from cost.

3. How do Austrians view open-source software?
   - [ ] It proves market pricing is being replaced by a “collaborative commons”
   - [ ] It is irrational altruism that economics cannot explain
   - [x] It is purposeful action: free bits exchanged for reputation, complement sales, collaboration and competitive advantage — a case of subjective value theory
   - [ ] It can only exist with government funding
   > The action axiom does not require money as the end. Red Hat sold services and was bought by IBM for about $34 billion; programmers trade open-source work for ability signals; big firms open-source to weaken rivals — all comparisons of means and ends.

4. What is the core of Kinsella's argument “against intellectual property”?
   - [x] Ideas are not scarce, so “ownership” of an idea is really a state-granted restriction on the use of other people's tangible property — a monopoly privilege
   - [ ] All creative work should be free
   - [ ] Copyright is more legitimate than patents
   - [ ] Intellectual property is the most important form of property
   > Property is a rule for resolving conflict over scarce resources ([[why-property|Stage 9.1]]); ideas are not scarce, so “you may not use your computer to copy these bits” restricts your tangible property. Austrians differ on copyright, but the direction is shared.

5. Why were so many “burn cash for users now, price later” digital projects financed in the zero-rate era, and why did they contract sharply after rates rose in 2022?
   - [ ] Because network effects disappeared
   - [x] Because fixed costs are paid today and revenue arrives over years; the lower the rate, the higher the present value of distant revenue and the more long-payback projects get approved — with rates artificially suppressed, too many launched at once: malinvestment in digital form
   - [ ] Because governments stopped subsidizing them
   - [ ] Because consumers' valuations suddenly fell
   > This is the time preference of [[time-preference|Stage 3.1]], the roundabout production of [[roundabout-production|Stage 3.2]] and the malinvestment of [[boom-malinvestment|Stage 5.2]] applied to the digital economy. [[ai-bubble-abct|Stage 18.5]] applies the same logic to AI capex.

## @further
- [Shapiro & Varian, Information Rules (1998), Ch. 3 “Versioning Information” — the original treatment of versioning](https://www.inforules.com/)
- [Stephan Kinsella, “Against Intellectual Property” (JLS 2001 / Mises Institute)](https://mises.org/library/book/against-intellectual-property)
- [Boldrin & Levine, Against Intellectual Monopoly (2008) — full text online](http://www.dklevine.com/general/intellectual/againstfinal.htm)
- [Rothbard, Man, Economy, and State, Ch. 10 — the Austrian statement on cost, sunk cost and pricing](https://mises.org/library/book/man-economy-and-state-power-and-market)
- [Mises, Human Action, Ch. XVI “Prices” — price formation and the imputation of costs](https://mises.org/library/book/human-action)
