export default {
  id: "attention-economy",
  stage: 16,
  order: 1,
  title: "The Attention Economy: The Scarce Resource Has Changed",
  difficulty: "newera",
  prereqs: ["what-economics-studies", "profit-loss"],

  oneLiner:
    "Stage 0.1 said economics studies scarcity. For two centuries the scarce things were grain, steel, capital, information. In 1971 Herbert Simon pointed out that **once information is abundant, the scarce thing becomes whatever information consumes — attention.** Today each of us has about 16 waking hours, and dozens of platforms bid for them. This lesson takes Stage 1.1's marginal utility, Stage 1.2's subjective value, Stage 6.3's consumer sovereignty and Stage 15.2's two-sided market and uses them to take “free” apart: who pays, what you pay, whether advertising informs or manipulates — and where the Austrian toolkit explains well, and where it needs behavioral economics to fill a gap.",

  intuition: `
Start with the plainest sum there is. You have 24 hours in a day. Sleep takes 8. That leaves 16. Those 16 hours are **the one resource you cannot buy more of.** A rich person can buy more houses, more computers, more services — but not a 17th waking hour. Of everything you own, time is the hardest constraint.

Now count how many companies are **bidding against each other** for those 16 hours. Short video, long video, social feeds, games, news, podcasts, group chats, live-stream shopping … and almost all of them are “free.” Why free? Because what they sell is not content. What they sell is **you** — more precisely, the minutes you spend inside their interface. On an ad-funded platform's books, revenue comes from advertisers, costs are mostly content and algorithms, and the thing being bought and sold in between is your attention.

That is what “the attention economy” means. It is not a new economics. It is the old sentence from Stage 0.1 — **economics studies the allocation of scarce means among competing ends** — with a different scarce object plugged in. In 1971 Herbert Simon, who would later win the Nobel, wrote the line that has since been quoted hundreds of thousands of times: a wealth of information creates a poverty of attention. The internet did not exist yet. Fifty years later that sentence describes an entire industry's business model.

The old Austrian tools work surprisingly well here. How do you allocate 16 hours? Exactly the way you allocated 5 buckets of water in Stage 1.1: each hour goes to the most urgent use you have not yet satisfied, and the 16th hour goes to the least urgent one — so whether “ten more minutes of scrolling” is worth it is always decided by **those marginal ten minutes**, never by “is social media useful in general.” How do you value those ten minutes? Stage 1.2: subjectively, in your own head. Who decides whether a platform survives? Stage 6.3's consumer sovereignty: you vote with your feet, advertisers vote with money. How can a platform be free and profitable at once? Stage 15.2's two-sided market: subsidize one side, charge the other.

But this lesson also has to be honest. There is one place where the old tools slip: **last night you “chose” three hours of short video and this morning you regret it — were those three hours your preference or not?** Stage 1.2's demonstrated preference says action is preference. Stage 3.1's time preference says valuing the present is not an error. Yet you yourself say it was not what you wanted. Here, behavioral economics (Stage 11.5) and its work on present bias genuinely adds something, and Austrians need to be clear about their own boundary: the toolkit explains how the market works, but “is the platform engineering impulse?” cannot be fully answered by “action is preference.”

There is also a price nobody prints. “Free” has never meant zero. You pay in time, in data, and in steered choices. What those three are worth to you, only you know — which is precisely why market remedies (paid ad-free tiers, focus tools, competition) are more likely to match each person's own valuation than a single rule for everyone. Stage 16.2 goes on to ask whether the algorithm that allocates your attention is a spontaneous order or a designed machine; Stage 18.6 asks what the attention trade becomes once an AI agent does your filtering for you.

**In this lesson we break it into six pieces:**

- **① Simon 1971: the scarce resource changed places**
- **② Attention is a means: allocating 16 hours**
- **③ The business model of “free”: who pays, who is the product**
- **④ Advertising — information or manipulation? Kirzner vs Galbraith, Harris and Zuboff**
- **⑤ Is sovereignty intact? Demonstrated preference, time preference, and the piece behavioral economics adds**
- **⑥ Remedies: market fixes vs regulation**
`,

  mechanics: `
### ① Simon 1971: the scarce resource changed places

Herbert Simon's 1971 paper was titled “Designing Organizations for an Information-Rich World.” His reasoning was almost trivially simple: **the abundance of anything creates a scarcity of whatever that thing consumes.** What does information consume? The attention of its recipients. So the richer the information, the poorer the attention, and the more urgently attention needs to be allocated efficiently among the “overabundance of information sources that might consume it.”

In 1971 the sentence was addressed to librarians and managers. But its logic is pure scarcity logic, so it plugs straight into Stage 0.1: scarcity is not a property of a good, it is the condition of **means being insufficient relative to ends.** In 1800 a farmer's problem was too little grain. In 1950 an engineer's problem was too little information — he walked to a library to leaf through journals. In 2025 everyone's problem is too much information, while the thing that processes it — roughly 16 waking hours a day, of which perhaps three or four are capable of real concentration — has not grown by a minute.

A few orders of magnitude worth keeping in mind (all approximate): the content uploaded to the major video platforms every day runs to hundreds of thousands of hours; the total video a human being can watch in a lifetime runs to tens of thousands of hours. **Several orders of magnitude separate supply from demand.** What follows? On the content side, the marginal unit is worth close to nothing (Stage 15.3 covered zero marginal cost). On the attention side, the marginal unit becomes ever more valuable. Price is always set by the scarce side, so the whole industry's unit of account shifted from “what does a newspaper cost” to “what does a thousand impressions cost” (CPM) — it buys eyeballs, not paper.

One warning for the reader: “the attention economy” is neither a new economics nor a sign that old economics has broken. It is an old theorem with a new variable. Anyone who says “scarcity is over, economics is obsolete” has looked only at the content side.

### ② Attention is a means: allocating 16 hours

Think of your 16 hours as the 5 buckets in Stage 1.1. You hold a list of uses ranked by urgency: work or study, family, exercise, cooking and eating, friends, reading, entertainment, idling … Hour 1 goes to the most urgent use, hour 16 to the least urgent use still on the list. So **any hour is worth exactly its marginal use** — Stage 1.1's core, word for word.

Now “the feed” arrives as a new use. It competes for the same pool of 16 hours. Every extra hour it takes must push one use off the list — and by marginal logic, the use pushed off is always the one currently ranked last: maybe “read 20 pages before bed,” maybe “sleep half an hour earlier.” **The platform does not take time out of your “spare time”; it takes time from your lowest-ranked use.** That use looked unimportant beforehand, but it has a peculiar property: it is often long-term in payoff and invisible in the short run (sleep, exercise, talking to family). In piece ⑤ that property turns into a genuine theoretical problem.

In numbers. Suppose your uses carry illustrative importance scores: work 10, family 8, exercise 5, friends 4, reading 3, idling 2. Without the feed, 16 hours run down the list and the last hour lands somewhere around “idling,” worth 2. Enter the feed. Its first hour might give you a marginal satisfaction of 6 — above exercise — and of course you take it; the second hour 4; the third 3 … by the fourth hour its marginal satisfaction has fallen to 1.5, below even idling, and a purposeful you should stop. **The problem is not that you scrolled for three hours — that may be a perfectly correct allocation. The problem is why you did not stop at hour four.** The second half of this lesson is entirely about “why you did not stop.”

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">16 waking hours: where the feed “takes” time from</text><text x="70" y="52" font-size="11" fill="var(--muted)">Without the feed</text><rect x="70" y="58" width="500" height="26" rx="6" fill="var(--surface-2)" stroke="var(--line)"/><rect x="70" y="58" width="188" height="26" rx="6" fill="var(--orange)"/><rect x="258" y="58" width="94" height="26" fill="var(--orange)" opacity=".8"/><rect x="352" y="58" width="62" height="26" fill="var(--orange)" opacity=".65"/><rect x="414" y="58" width="47" height="26" fill="var(--orange)" opacity=".5"/><rect x="461" y="58" width="47" height="26" fill="var(--orange)" opacity=".38"/><rect x="508" y="58" width="62" height="26" rx="6" fill="var(--orange)" opacity=".25"/><text x="164" y="75" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="600">work 6h</text><text x="305" y="75" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="600">family 3h</text><text x="383" y="75" text-anchor="middle" font-size="10" fill="#fff" font-weight="600">exercise 2h</text><text x="437" y="75" text-anchor="middle" font-size="9.5" fill="var(--ink)">friends</text><text x="484" y="75" text-anchor="middle" font-size="9.5" fill="var(--ink)">reading</text><text x="539" y="75" text-anchor="middle" font-size="10" fill="var(--ink)">idle 2h</text><text x="70" y="118" font-size="11" fill="var(--muted)">With the feed (medium hook strength)</text><rect x="70" y="124" width="500" height="26" rx="6" fill="var(--surface-2)" stroke="var(--line)"/><rect x="70" y="124" width="188" height="26" rx="6" fill="var(--orange)"/><rect x="258" y="124" width="78" height="26" fill="var(--orange)" opacity=".8"/><rect x="336" y="124" width="47" height="26" fill="var(--orange)" opacity=".65"/><rect x="383" y="124" width="31" height="26" fill="var(--orange)" opacity=".5"/><rect x="414" y="124" width="156" height="26" rx="6" fill="var(--blue)"/><text x="164" y="141" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="600">work 6h</text><text x="297" y="141" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="600">family 2.5h</text><text x="359" y="141" text-anchor="middle" font-size="9.5" fill="#fff">exerc. 1.5</text><text x="398" y="141" text-anchor="middle" font-size="9" fill="var(--ink)">frnd</text><text x="492" y="141" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="600">the feed 5h</text><line x1="508" y1="92" x2="470" y2="118" stroke="var(--red)" stroke-width="1.5" marker-end="url(#ae-arr)"/><defs><marker id="ae-arr" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--red)"/></marker></defs><text x="70" y="184" font-size="11" fill="var(--muted)">Uses pushed off (in marginal order, least urgent first)</text><rect x="70" y="192" width="500" height="1" fill="var(--line)"/><text x="70" y="214" font-size="11.5" fill="var(--ink)">① idle 2h → 0   ② reading 1h → 0   ③ friends 1.5h → 1h   ④ exercise 2h → 1.5h   ⑤ family 3h → 2.5h</text><text x="70" y="240" font-size="11.5" fill="var(--red)" font-weight="600">The last 1.5 hours come out of “exercise” and “family” — ranked low beforehand, regretted most afterwards.</text><text x="70" y="268" font-size="11" fill="var(--orange-ink)">The first 3 hours may be a perfectly correct marginal allocation; the theoretical puzzle is hours 4 and 5.</text></svg><figcaption>The feed does not take time from “spare time”; it takes it hour by hour from your lowest-ranked use — first the one that looked least urgent, then the ones whose payoff is long-term and invisible in the moment.</figcaption></figure>

### ③ The business model of “free”: who pays, who is the product

Back to Stage 15.2's two-sided market. An ad-funded platform has two sides. On the user side the price is zero or even negative (free content, subsidized creators). On the advertiser side, payment is per impression, per click or per conversion. The platform's profit is advertiser revenue minus the cost of producing “sellable attention” — revenue shares, the recommender system, servers, moderation. Rochet and Tirole formalized this as the “two-sided market” in 2003, but the business logic is far older: the penny press of the 1830s already lived on advertising, and broadcast radio and television did nothing else. The internet merely raised the precision with which the “impression” is metered — from “an estimated 200,000 readers” to “this user dwelt on this ad for 1.7 seconds.”

A rough calculation makes “what you are worth” concrete. Take a large social platform's annual revenue divided by its active users — the industry calls it ARPU. The global average is on the order of a few tens of dollars a year; North American users are far higher, roughly two hundred dollars give or take (these are order-of-magnitude figures and move every year). If a North American user spends 40 minutes a day on the platform, that is about 240 hours a year, so **the platform earns roughly a dollar per hour of your attention.** That is the attention price on the platform's side. What is your hour worth to you? Look at your opportunity cost (Stage 1.4): if your wage is $30 an hour, then an hour of your attention fetched $1 on the platform's books — which does **not** mean you are exploited; it means the two parties value the same hour differently. You value that hour's entertainment and sociability; the platform values the ads that hour can carry. One thing, two valuations: Stage 1.2's oldest point.

But the rough sum exposes the real issue at once: **the platform optimizes the price on its side (how many ads the hour can carry), not the value on your side (how good the hour was for you).** In an ordinary market the two are tied together by the act of paying: if the product is bad, you stop buying. In a two-sided market the tie changes: you do not pay money, you pay **time** — so the platform optimizes **time spent**, and “time spent” is merely correlated with “satisfied,” not identical to it. Every argument in pieces ④ and ⑤ grows out of that gap between duration and satisfaction.

Dispose of a popular slogan while we are here: “You're not the customer, you're the product.” Half right, half wrong. The right half: the commodity being traded is indeed your attention. The wrong half: you are also a customer — you buy content with time, and you are a customer **who can return the goods any moment**: uninstalling takes three seconds. Competition among platforms for your time is brutal (Stage 15.5 told the stories of Vine, Google+, Clubhouse), which shows consumer sovereignty (Stage 6.3) still cuts on the user side. Product and customer are not either/or; you are both at once, which is exactly the definition of a two-sided market.

### ④ Advertising — information or manipulation? Kirzner vs Galbraith, Harris and Zuboff

Advertising is the revenue side of the model and the oldest quarrel about it. Put both sides in their strongest form.

**The critics, strongest version**, in three generations:

- **Galbraith, The Affluent Society (1958)**, proposed the “dependence effect”: modern production no longer satisfies pre-existing wants but manufactures them through advertising; a want created by the producer cannot then be invoked to justify the production. This is a frontal assault on consumer sovereignty — if preferences are made, then “the consumer decides” collapses into “the advertiser decides.”
- **Tristan Harris** (a former Google design ethicist, the central figure of the 2020 documentary The Social Dilemma) moved the critique from “ads manufacture wants” to “interfaces manufacture impulses”: infinite scroll, intermittent rewards, autoplay, the red badge — designs that deliberately borrow the mechanics of the slot machine. They do not tell you what is available; they route around your deliberation and grab your reflexes. His slogan was “Time Well Spent.”
- **Shoshana Zuboff, The Age of Surveillance Capitalism (2019)**, went a step further: platforms do not merely compete for attention, they extract a “behavioral surplus” from data, use it to predict and **modify** behavior, and sell your future behavior to advertisers as raw material. Galbraith for the twenty-first century, now armed with data.

**The Austrians, strongest version**, in three layers:

- **Mises, Human Action**: the tricks of advertising are available to the seller of the better product no less than to the seller of the worse one, so advertising cannot explain why the better product wins in the end; consumers buy repeatedly, and repeat purchase is merciless toward advertising that lies.
- **Kirzner, Competition and Entrepreneurship (1973), Chapter 6**: in a world of dispersed knowledge, where nobody knows what they do not know, advertising is not a split between “information” and “persuasion” — it is **the entrepreneurial act of pushing an opportunity in front of the consumer.** A product nobody knows about might as well not exist; advertising is the cost of producing its existence. You cannot price the product and “making people aware of the product” separately, any more than you can price the bread and the bakery's sign separately. So “informative ads are legitimate, persuasive ads are not” cannot stand — no one can draw that line in advance.
- **Hayek's 1961 reply to Galbraith**, “The Non Sequitur of the Dependence Effect”: nearly all higher wants — for music, literature, science — are “manufactured” by culture; nobody is born wanting Bach. If wants that are created are unworthy of satisfaction, most of civilization is unworthy. That a want is shaped by your environment does not make it not yours.

Who is right? On the **information** layer the Austrian answer is complete: advertising is mostly a discovery mechanism, and for product advertising this is not really contested — you did not know a new noodle shop opened; the ad told you. But on the **interface design** layer Kirzner's framework **does not answer** Harris. Infinite scroll does not “tell you what exists”; it alters your ability to **stop and evaluate.** Kirzner is about pushing opportunities in front of you; Harris is about removing your opportunity to examine them. Those are different things, and the Austrian literature on the second is thin to this day — a place the school needs to develop, which piece ⑤ tackles head-on.

On Zuboff, Austrians have a sharper reply: she treats “predicting behavior” as “controlling behavior,” which skips a logical step. A weather forecast predicting you will carry an umbrella tomorrow does not make you carry one. A platform predicting you might like camping gear and showing you the ad leaves you entirely free not to buy — Stage 15.4 explained that data is a record of past action, not command over future action. Zuboff's strongest point is not “control” but “asymmetry”: the platform knows vastly more than you, and the asymmetry is its business model. That is a real problem, but it is a problem of **information asymmetry and property** (Stage 9.1: whose data is it?), not evidence that consumer sovereignty is dead.

### ⑤ Is sovereignty intact? Demonstrated preference, time preference, and the piece behavioral economics adds

Now the hardest question, straight on: **you scrolled three hours last night and regret it this morning. Were those three hours your preference?**

Rothbard's 1956 “demonstrated preference” says: **the only thing we can know about a person's preferences is what they demonstrate in action.** You scrolled, so at that moment you preferred to scroll. That is Stage 1.2's methodological discipline — an economist cannot sit in a study and announce “what you really wanted was to read a book.” That is paternalism. Mises adds a line: preferences have no constancy; last night's you and this morning's you are two acting persons at two points in time whose rankings may differ. Regret merely means “this morning's you disapproves of last night's you,” not “last night's you was irrational.”

Stage 3.1's time preference adds a layer: valuing the present over the future is not a mistake — it is a category of action. A person with high time preference is not “irrational”; they simply discount steeply.

That answer is clean, but it has a gap, and behavioral economics puts its finger exactly there. Laibson's 1997 “hyperbolic discounting” model, and the mass of evidence cited by Thaler and Sunstein in Nudge (2008), point not to “people discount steeply” but to **discounting that is inconsistent**: the same person says “I'll cut back tomorrow” today and “the day after” tomorrow. That is not high time preference; that is time preference **contradicting itself across time**, which makes a person systematically break their own plans — and “plans” are exactly the vehicle of “purposeful” in Stage 2.1's action axiom. When someone repeatedly takes actions they opposed beforehand and regret afterwards, “action is preference” is formally correct but ducks the real economic question: **if one party is investing specifically in amplifying that inconsistency, can the market's feedback mechanism (Stage 6.3) still correct it?**

A few empirical results are worth remembering (all “about”): a 2020 experiment in the American Economic Review (Allcott and co-authors) paid people to deactivate a social platform for four weeks; participants' subjective well-being rose slightly, and after the experiment **their willingness to keep using it fell** — that is, after a break they re-valued the product. The same team's 2022 “Digital Addiction” study estimated that roughly three-tenths of self-reported social-media use stems from self-control problems rather than from wanting to use it. None of these numbers is precise, but they point the same way: **for a substantial share of people, after-the-fact valuation and in-the-moment action disagree, and the disagreement can be amplified by interface design.**

How should Austrians respond? The honest answer has three parts:

1. **Hold the methodological line.** Economists still may not announce anyone's “true preference.” Regret is itself a valuation demonstrated in action, as valid as the scroll; both are data, and neither is “truer.”
2. **Admit the theoretical gap.** Austrians have no theory of willpower as a scarce resource. Mises says a person acts in time, but not that a person acts among **several selves.** Here behavioral economics supplies a description of the phenomenon (Stage 11.5 noted it is strong on description, weak on explanation), and Austrians owe a praxeological account — perhaps treating “the capacity to deliberate” itself as a means that must be allocated: scarce like attention, consumable, and investable. That remains an open problem.
3. **Do not skip steps on policy.** From “some people have self-control problems” to “the state should regulate interfaces” lies the whole logic of intervention in Stage 8.1 and the public-choice problem of Stage 8.4: the regulators have self-control problems too, and their own attention business (politics needs eyeballs). The biases behavioral economics finds apply to regulators as well.

### ⑥ Remedies: market fixes vs regulation

If “duration ≠ satisfaction” is the gap, the remedy is whatever ties them back together. The market is already doing three kinds of thing:

- **Paid tiers**: ad-free video subscriptions, the paid no-ads subscription a major social network introduced in the EU from 2023, subscription messaging apps. The point of paying is not merely the absence of ads; it is that **the platform's objective changes from “time spent” to “renewal,”** and renewal requires you to think, afterwards, that it was worth it. That is price re-tying the two sides; Stage 6.3's profit-and-loss feedback is reconnected to the user side.
- **Friction tools**: the screen-time controls built into phone operating systems since 2018, third-party app blockers, greyscale displays, little tools that insert a one-second pause before an app opens. These are the market arming “this morning's you” against “last night's you” — if self-control is scarce, it too has suppliers.
- **Competition**: products that compete on “time well spent” do exist (algorithm-free timelines, subscription news, slow social apps). Most are niche — which is itself information: it says that “in-the-moment you” still wins over “afterwards you” most of the time. The market does not choose for you; it only lays the choices out.

On the regulatory side, run Stage 14.1's five-step method: what is the goal (less “involuntary” use) → what is the instrument (age thresholds, banning infinite scroll, algorithmic transparency, suing over design) → who bears the cost (users for whom no paid alternative yet exists, small platforms, the “voluntary” users caught by a blanket rule) → who collects the rent (large platforms with high compliance budgets actually benefit from barriers — Stage 8.3's old story) → does it trigger the next round of intervention. The answer is not “regulate nothing” — protecting minors from addictive design finds support in most property theories, since minors are not full contracting parties. The answer is: **every rule must answer “what does this achieve that paid tiers, friction tools and competition do not?”** The under-age social-media limits several countries introduced in 2024–25 are an experiment in progress; the data will arrive in a few years.

Back to the main line. This lesson's four beads: value is subjective — you and the platform value the same hour differently; people act purposefully — but purposes can be inconsistent across time, and that is where Austrians need to develop; prices carry knowledge — “free” strips price of its power to carry your satisfaction, and paid tiers restore it; time cannot be abolished — 16 hours is a hard constraint, and the marginal hour decides everything. Stage 16.2 asks the next question: is the recommendation algorithm that allocates those 16 hours for you a grown order or a designed machine?
`,

  demo: "attention-budget",

  analogy: `
Think of your day as a small restaurant with 16 seats. The seats are fixed; you cannot add one.

In the old days the diners were your own activities: work took 6 seats, family 3, exercise 2, friends, reading and idling one or two each. Who sat where was decided by how much each mattered to you — the last seat went to the diner you cared least about. That is Stage 1.1's marginal allocation.

Now some new diners arrive at the door, brightly dressed, **insisting they will not pay.** Short video, the feed, the group chat. They really do not pay for dinner — but behind them stand advertisers, who pay them by “how many minutes they sat in your restaurant.” So the new diners have one aim: **sit as long as possible.** They do not need you to enjoy the meal; they only need you not to get up.

Which seat do they take first? The last one, of course — “idling's” chair. Nothing wrong with that; that chair never mattered much. But they are good talkers: “stay a little longer,” “your friend just posted something,” “the next one's even better.” So they move into “reading's” chair, then “early night's” chair, then “time with family's” chair. The next morning you take stock and find that the last chairs you gave up were exactly the ones you had ranked low beforehand and miss most afterwards.

What Austrians get right in this picture: you gave up the seats; every seat given was your choice at the time; and the door is open — you can throw the new diners out any moment, and the restaurant next door is trying to poach them. What Austrians say too little about: these diners are professionally trained to keep you from standing up, and the strength it takes to stand up is, like the seats, scarce. The market's response: sell a “quiet private room” (paid tier), install “an alarm at closing time” (friction tools), and some restaurants simply do not admit this kind of diner (competition). The regulatory response is to set a “maximum minutes per diner” rule for every restaurant — it may help some people, at the cost of making the private room and the alarm redundant.
`,

  misconceptions: [
    "**“The attention economy is a new economics; scarcity is over and the old economics no longer applies.”** — Scarcity only changed objects. The content side is close to unlimited, but the attention needed to consume it is about 16 hours a day and has not grown by a minute. Simon's 1971 reasoning is pure scarcity logic: abundance of one thing creates scarcity of what it consumes. Stage 0.1's sentence “economics studies the allocation of scarce means” needs no edit.",
    "**“You're not the customer, you're the product — so platforms don't have to please you.”** — In a two-sided market you are both: you buy content with time, and you can return it in three seconds. Competition among platforms for your time is brutal, which shows consumer sovereignty still cuts on the user side. The real issue is not “not pleasing you” but that the platform optimizes duration rather than satisfaction, and the two are only correlated.",
    "**“Advertising manufactures wants, so consumer sovereignty is a fiction (Galbraith).”** — Hayek's 1961 reply: nearly all higher wants are culturally shaped; nobody is born wanting Bach; shaped does not mean not yours. Kirzner adds that in a world of dispersed knowledge, making people aware a product exists is itself entrepreneurial action, and the line between informative and persuasive ads cannot be drawn in advance. But note: that answer covers product advertising; it does not cover interface design that routes around deliberation.",
    "**“Action is preference, so three hours of scrolling proves you wanted three hours of scrolling — nothing to discuss.”** — Formally correct, but it ducks the question. Regret is also a valuation shown in action, as valid as the scroll; the time inconsistency behavioral economics documents is real, and Austrians currently lack a theory of self-control as a scarce means. The honest position: hold the methodological line against announcing “true preferences,” admit the theoretical gap, and do not jump from the gap straight to regulation.",
    "**“Since interface design is addictive, the government should just ban infinite scroll.”** — Run Stage 14.1's five steps: compliance barriers favor large platforms (Stage 8.3), regulators have their own attention business, a blanket rule hurts voluntary users, and paid tiers, friction tools and competition already supply differentiated solutions. Protecting minors has a property-theoretic basis, but every rule has to answer “what does this add beyond the market's fixes?”",
  ],

  quiz: [
    {
      q: "What was the core of Herbert Simon's 1971 reasoning?",
      options: [
        "Information technology will make scarcity disappear",
        "Abundance of anything creates scarcity of what it consumes — abundant information makes attention scarce",
        "Advertising is a tool for manipulating consumers",
        "Attention can be measured precisely like a commodity",
      ],
      answer: 1,
      explain: "Simon's argument is pure scarcity logic: information consumes its recipients' attention, so the richer the information, the scarcer the attention and the more it needs efficient allocation. It plugs straight into Stage 0.1.",
    },
    {
      q: "By Stage 1.1's marginal logic, when the feed takes one more hour of your day, where does that hour come from?",
      options: [
        "From your “spare time,” with no effect on other uses",
        "Evenly from every use",
        "From whichever use you currently rank last",
        "From your most important use (work)",
      ],
      answer: 2,
      explain: "Sixteen hours is a hard constraint, and an actor puts each hour toward the most urgent unsatisfied use, so the use pushed off is always the one currently ranked last — often the one with long-term payoff and no short-term feeling (sleep, exercise, family).",
    },
    {
      q: "What was Kirzner's 1973 answer to “is advertising information or manipulation?”",
      options: [
        "Only purely informative ads are legitimate; persuasive ads should be banned",
        "All advertising is manipulation, but the market corrects it automatically",
        "In a world of dispersed knowledge, making consumers aware an opportunity exists is itself entrepreneurial action; information and persuasion cannot be separated in advance",
        "Advertising has no economic function; it is a pure transfer",
      ],
      answer: 2,
      explain: "Competition and Entrepreneurship, Chapter 6: the product and “making people aware of the product” cannot be priced separately. But the answer covers product advertising; it does not directly address interface design that bypasses deliberation.",
    },
    {
      q: "Someone scrolled short video for three hours last night and regrets it this morning. Which statement is closest to the “honest Austrian position” this lesson argues for?",
      options: [
        "Scrolling was the preference; regret is irrational and not worth discussing",
        "Regret proves the “true preference” was not to scroll, so economists can decide on the person's behalf",
        "It shows consumer sovereignty no longer exists",
        "Methodologically, refuse to announce true preferences; theoretically, admit Austrians lack a theory of self-control as a scarce means; on policy, do not jump from the gap to regulation",
      ],
      answer: 3,
      explain: "Regret and scrolling are both valuations shown in action, neither truer; the time inconsistency behavioral economics records is real and Austrians need to develop; and “some people have self-control problems” is separated from “the state should regulate interfaces” by the whole logic of intervention and public choice.",
    },
    {
      q: "Why does this lesson treat a paid ad-free tier as a market remedy that “re-ties the two sides”?",
      options: [
        "Because it changes the platform's objective from “time spent” to “renewal,” and renewal requires the user to think afterwards that it was worth it",
        "Because it makes the platform more money",
        "Because it removes every addictive design",
        "Because regulators require platforms to offer a paid tier",
      ],
      answer: 0,
      explain: "Under the ad model the user pays in time and the platform optimizes duration; once the user pays, the platform's revenue depends on the user's after-the-fact valuation, reconnecting Stage 6.3's profit-and-loss feedback to the user side.",
    },
  ],

  further: [
    { label: "Kirzner, Competition and Entrepreneurship (1973), Chapter 6 on advertising and entrepreneurship — full text (Mises Institute)", url: "https://mises.org/library/book/competition-and-entrepreneurship" },
    { label: "Mises, Human Action, Chapter XV “The Market,” the passage on advertising — the tricks are available to good and bad products alike", url: "https://mises.org/library/book/human-action" },
    { label: "Rothbard, Toward a Reconstruction of Utility and Welfare Economics (1956) — the original statement of demonstrated preference", url: "https://mises.org/library/book/toward-reconstruction-utility-and-welfare-economics" },
    { label: "Econlib Encyclopedia: Advertising — the mainstream survey, including the information-vs-persuasion debate", url: "https://www.econlib.org/library/Enc/Advertising.html" },
    { label: "Allcott, Braghieri, Eichmeyer & Gentzkow, “The Welfare Effects of Social Media,” AER 2020 — the four-week deactivation experiment", url: "https://www.aeaweb.org/articles?id=10.1257/aer.20190658" },
  ],
};
