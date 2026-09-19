export default {
  id: "algorithms-order",
  stage: 16,
  order: 2,
  title: "Recommendation Algorithms & Spontaneous Order: Discovery Procedure or Manipulation Machine?",
  difficulty: "newera",
  prereqs: ["spontaneous-order", "hayek-knowledge"],

  oneLiner:
    "Open any feed. The order you see was arranged by nobody — and not by nobody either. Stage 7.4 split order into “designed” (taxis) and “grown” (cosmos), and a recommendation feed straddles the line: **the ranking rule is designed by the platform; the content being ranked, and its valuations, grew out of hundreds of millions of actions.** This lesson uses Stage 6.2's discovery procedure to ask what the feed discovers, Stage 7.2's knowledge problem to ask what the platform knows, and Stage 1.2's demonstrated preference to ask whether “watched” equals “wanted.” It lays out the filter-bubble and polarization debate (the evidence is mixed, and we say so), gives the Austrian answer — competition among ranking rules — and names a chapter Austrian theory has not yet written: the feed rewrites the preferences it measures.",

  intuition: `
In 1968 Hayek gave a lecture in Kiel titled “Competition as a Discovery Procedure.” His point: we need competition precisely because **before competition nobody knows the answer** — whose product is better, which method is cheaper, what consumers actually want. If the answer were known in advance, central planning would do. Competition is not a race toward a known goal; it is a procedure for discovering what the goal is.

Now put that sentence next to a recommendation feed. A short-video platform has to decide, for each of hundreds of millions of users, “what plays next,” out of tens of millions of clips. Nobody knows the answer — the user does not know either, until the clip appears. What the platform does is: try one, watch how many seconds you stay, whether you like it, whether you swipe away, update its estimate, try the next one. **That is a discovery procedure** — one that runs in milliseconds with hundreds of millions of participants. Seen this way, saying the feed “manipulates” you is like saying the market “manipulates” the price of bread. It is only discovering what you stop for.

But slow down. In Stage 7.4 Hayek also taught us a distinction: **cosmos** (grown order, designed by no one — language, markets, common law) versus **taxis** (made order, built by someone for a purpose — a firm, an army, a plan). Which is a feed? Both. **What is being ranked** — tens of millions of clips and hundreds of millions of reactions to them — is cosmos; no one planned it. **The ranking rule itself** — “maximize time spent,” “maximize meaningful interactions” — is taxis, written by a few hundred engineers inside one company to hit a measurable target. So a feed is **a spontaneous order inside a designed container.** The shape of the container decides what grows inside.

That distinction produces the three main courses of this lesson:

First, **what does it discover?** It discovers “what you stop for,” not “what you think, on reflection, was worth watching.” The two correlate; they are not the same — Stage 16.1 already pried that gap open. Stage 1.2's demonstrated preference has to be used honestly here: you watched, so you watched — that is action; but regret is action too, and both are data.

Second, **what does the platform know?** Stage 7.2's knowledge problem says the central planner cannot obtain knowledge that is dispersed, tacit and constantly changing. The platform looks like a counterexample: it has a record of every click. But what it has is **a trace of past actions**, not your purposes, your situation, or why you opened the app tonight. Stage 15.4 put it this way: data is not knowledge; data is the fossil of knowledge.

Third, **does it push people toward extremes?** That is the worry Cass Sunstein has pressed since 2001: the algorithm feeds you what you like, you get locked in an echo chamber of like-minded voices, society polarizes. The worry has a strongest version and a stack of experiments that disagree with one another — we will put both on the table rather than pick only the half that flatters Austrians.

Then the Austrian answer. If the ranking rule is taxis, the remedy for a bad taxis is not a better central rule but **several rules competing**: chronological, “for you,” subscriptions only, algorithms users pick themselves (one newer protocol has turned an “algorithm marketplace” into a product). Push Hayek's discovery procedure **up one level**: discover not only what you want to watch, but which rule you want deciding what you watch.

And an honest tail. The feed does not merely measure your preferences; it **shapes** them — what you watched decides what you will stop for next time. Austrians have a theory of how preferences are demonstrated but no theory of how they are rewritten by the market process itself. Stage 16.5 draws that reflexivity as a price chart using GameStop; Stage 18.6 asks whether the questions change shape when the things being ranked are no longer videos but bids between AI agents.

**In this lesson we break it into six pieces:**

- **① Is a feed designed or grown? Taxis and cosmos**
- **② The feed as a discovery procedure: what it finds, and what it cannot**
- **③ The platform's knowledge problem: data is not knowledge**
- **④ Filter bubbles and polarization: Sunstein's strongest case, and the mixed evidence**
- **⑤ Competition among ranking rules: the Austrian answer**
- **⑥ Where the theory needs work: the feed rewrites the preferences it measures**
`,

  mechanics: `
### ① Is a feed designed or grown? Taxis and cosmos

In Chapter 2 of Rules and Order (1973), the first volume of Law, Legislation and Liberty, Hayek drew the line sharply. **Taxis** is “made order”: it has a maker, a purpose, and every part can be placed by the maker — an army, a factory, a blueprint. **Cosmos** is “grown order”: no maker, no single purpose, a pattern that emerges when countless people pursue their own ends while following certain rules — language, markets, customary law, money (Stage 4.1). A cosmos can be so complex that no single mind can hold it whole; a taxis is limited by what its designer can understand.

A recommendation feed has three layers, each belonging to a different kind of order:

- **The content layer**: tens of millions of clips, posts, articles. No one planned them; they are the result of tens of millions of creators (Stage 16.3) each judging “what is worth making.” **Cosmos.**
- **The reaction layer**: hundreds of millions of users dwelling, liking, commenting, swiping. No one planned them. **Cosmos.**
- **The ranking layer**: a function that takes the two layers above as input and outputs “the next item for this user.” It has an identifiable designer (the platform) and an explicit target (a measurable metric: time spent, interactions, subscription conversions, “meaningful social interactions” …). **Taxis.**

So the right answer to “is a feed a spontaneous order?” is neither yes nor no. It is: **a spontaneous order inside a designed container.** The structure is not new in human history — a marketplace is the same: where the stalls go, when the gates open, what the stall fee is are set by the market's manager (taxis), while what is sold, at what price, to whom, grows (cosmos). The only differences are scale and precision: the market manager rearranges stalls once a year; the ranking function rearranges them every millisecond, differently for every person.

“The container decides the shape” has a direct corollary: **no ranking rule can be neutral.** “Newest first” is a rule, and it favors whoever posts most. “Most engagement” favors content that provokes. “Most watch time” favors long content and suspense. “Diversity-weighted” favors whatever the platform thinks you ought to broaden into. No rule is “non-intervention” — just as no stall layout is “no layout.” So asking “does the algorithm interfere with the natural flow of information?” is the wrong question: **there is no natural feed**, only different orders grown under different rules. The meaningful questions are: which rule, chosen by whom, and can it be swapped.

<figure><svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Three layers of a feed: two grown (cosmos), one designed (taxis)</text><rect x="30" y="50" width="170" height="92" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="115" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="var(--orange-ink)">Content · cosmos</text><text x="115" y="92" text-anchor="middle" font-size="10.5" fill="var(--ink)">tens of millions of creators</text><text x="115" y="108" text-anchor="middle" font-size="10.5" fill="var(--ink)">each judging “what is worth making”</text><text x="115" y="126" text-anchor="middle" font-size="10" fill="var(--muted)">planned by no one</text><rect x="30" y="180" width="170" height="92" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="115" y="202" text-anchor="middle" font-size="12" font-weight="700" fill="var(--orange-ink)">Reactions · cosmos</text><text x="115" y="222" text-anchor="middle" font-size="10.5" fill="var(--ink)">dwell, like, swipe — by millions</text><text x="115" y="238" text-anchor="middle" font-size="10.5" fill="var(--ink)">= in-the-moment demonstrated preference</text><text x="115" y="256" text-anchor="middle" font-size="10" fill="var(--muted)">planned by no one</text><rect x="250" y="110" width="170" height="100" rx="8" fill="var(--blue-soft)" stroke="var(--blue)"/><text x="335" y="132" text-anchor="middle" font-size="12" font-weight="700" fill="var(--blue)">Ranking rule · taxis</text><text x="335" y="152" text-anchor="middle" font-size="10.5" fill="var(--ink)">one function, one target</text><text x="335" y="168" text-anchor="middle" font-size="10.5" fill="var(--ink)">“maximize time spent”</text><text x="335" y="184" text-anchor="middle" font-size="10.5" fill="var(--ink)">“maximize meaningful interactions”</text><text x="335" y="200" text-anchor="middle" font-size="10" fill="var(--muted)">designed by the platform; swappable</text><line x1="200" y1="96" x2="250" y2="140" stroke="var(--muted)" stroke-width="1.5" marker-end="url(#ao-a)"/><line x1="200" y1="226" x2="250" y2="182" stroke="var(--muted)" stroke-width="1.5" marker-end="url(#ao-a)"/><defs><marker id="ao-a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--muted)"/></marker><marker id="ao-r" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--red)"/></marker></defs><rect x="470" y="120" width="140" height="80" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="540" y="144" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">The feed you see</text><text x="540" y="164" text-anchor="middle" font-size="10.5" fill="var(--ink)">next · and next</text><text x="540" y="182" text-anchor="middle" font-size="10" fill="var(--muted)">order grown under the rule</text><line x1="420" y1="160" x2="470" y2="160" stroke="var(--muted)" stroke-width="1.5" marker-end="url(#ao-a)"/><path d="M540,200 C540,300 200,300 140,272" fill="none" stroke="var(--red)" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#ao-r)"/><text x="360" y="300" text-anchor="middle" font-size="10.5" fill="var(--red)" font-weight="600">Reflexivity: what you watched changes what you stop for next time (⑥)</text></svg><figcaption>Content and reactions are grown; the ranking rule is designed; the feed is a spontaneous order inside a designed container. The red dashed line is the link Austrian theory has not yet written: the output loops back to rewrite the input.</figcaption></figure>

### ② The feed as a discovery procedure: what it finds, and what it cannot

Back to Stage 6.2. Hayek called competition a discovery procedure because it reveals **facts nobody knew in advance** — including preferences consumers themselves did not know they had. A recommender is the most literal implementation of that sentence ever built: millions of “try this” experiments per second, each updating an estimate of you from your reaction. An example from around 2012: a major video platform switched its objective from “clicks” to “watch time,” because clicks rewarded clickbait while watch time at least required that you did not leave immediately; later it added satisfaction surveys as a correction. That is a discovery procedure **correcting its own measure** — each correction prompted by discovering that the old measure was “discovering” the wrong thing.

So give it full credit first. The feed genuinely discovers things nobody knew: a creator of obscure crafts would never, by subscriptions alone, reach the thirty thousand kindred spirits scattered across the globe; the recommender finds them. Stage 1.5's division of labor and Stage 16.3's long tail both depend on this discovery procedure. Anyone who says “the internet before algorithms was better” should recall from Stage 15.5 how the hand-curated portals died.

Now say what it does **not** discover. It discovers **in-the-moment action** — how many seconds you stayed, what you tapped. It does not and cannot discover **after-the-fact valuation** — whether, after closing the app, you thought the hour was worth it. Stage 1.2's demonstrated preference must be applied honestly here: Rothbard said we can infer preference only from action and may never announce anyone's “true preference.” The same discipline binds the platform: it may not infer “you want this” from “you stayed 40 seconds” — only “you did not swipe away for 40 seconds.” **Those are two different sentences.** The first is about purposes; the second is about reflexes. And the ranking function always optimizes the second, because only the second can be measured.

One concrete number exposes the gap. Suppose item A holds you for an average of 45 seconds, and afterwards you rate it 3 out of 10 (“another wasted minute”); item B holds you for 20 seconds and you rate it 8 out of 10 (“learned something”). A watch-time ranker puts A ahead of B — and **it is right**, judged by what it was built to discover. The fault is not in the discovery procedure; it is in the shape of the container: the objective says “time,” and time merely correlates with satisfaction. This observation and piece ⑤ of Stage 16.1 are two sides of one thing: there, the user's time inconsistency; here, the platform's measurement bias. Multiply them and you have the complete mechanism of “scrolled three hours, regretted it.”

### ③ The platform's knowledge problem: data is not knowledge

Stage 7.2's core: the economic problem is not “how to allocate known resources” but “how to use knowledge that is dispersed across countless minds and can never be centralized” — knowledge of particular time and place, tacit knowledge, changing knowledge. Central planning fails not because planners are stupid but because they **structurally cannot obtain** that knowledge.

A recommender looks like a challenge to that argument: it has every one of your clicks. Stages 7.5 and 15.4 handled the general version of the challenge; here are three points specific to feeds:

- **It holds traces of action, not reasons for action.** You opened the app tonight perhaps to relax, perhaps to find a specific tutorial, perhaps because you cannot sleep, perhaps because you are waiting for someone. The same 40-second dwell is four different things in four situations. The platform sees 40 seconds. That is exactly Hayek's “knowledge of the particular circumstances of time and place” — it is in your head, now, and it will never be written to any log.
- **Its estimate of you always lags you.** Your enthusiasm for a topic last week may have faded this week; the recommender still serves last week's you. Mises said preferences have no constancy, and for the platform that is a technical curse: the object it models changes while it is being modeled.
- **Its measure gets gamed.** Once “watch time” is the target, creators create for watch time (cliffhangers, padding, “wait for the end”). Goodhart's law: a measure that becomes a target ceases to be a good measure. That is not a bug in the algorithm; it is what happens whenever a taxis tries to meter a cosmos — Stage 10.2 said precisely the same about GDP.

So the platform is a **central planner at reduced scale.** It is far stronger than Gosplan ever was — it has price-like real-time feedback (a dwell is a “buy,” a swipe is a “no”), something the Soviet planners never had. But it still sees only the shadows of actions, not the actions. That explains a familiar experience: you “tell” the algorithm you do not want a category of content (you tap “not interested”) and a while later it comes back — because what you “say” and what you “dwell on” disagree, and the function believes only the latter.

### ④ Filter bubbles and polarization: Sunstein's strongest case, and the mixed evidence

Now the loudest charge. Its strongest form first.

From Republic.com (2001) to #Republic (2017), Cass Sunstein has argued that democracy needs two things: **unplanned encounters** (views you did not seek out but met anyway) and **shared experiences** (things everyone knows about). Traditional media — the newspaper, the evening news — supplied both by accident, because leafing through a paper walks you past pages you did not want. Personalized recommendation abolishes both: everyone gets a “Daily Me” (Nicholas Negroponte's 1995 phrase), seeing only what they want. Eli Pariser called it the **filter bubble** in 2011. Sunstein adds a layer of social psychology: like-minded people who deliberate together drift toward more extreme positions (group polarization). Hence: personalization → bubbles → polarization → the foundations of democratic deliberation collapse. It is a logically complete argument with experimental psychology behind it.

Now the evidence. It is messier than either side's publicity, and we list it as it is (all “about,” and every item is contested):

- A 2015 study in Science of a large social network found the algorithm did reduce the cross-cutting content users saw, but by **less than users' own choices of friends and clicks did** — the bubble is mostly blown by people themselves, with the algorithm assisting.
- A 2017 study of US political polarization found it rising fastest among **people over 65, the group least likely to use the internet.** If algorithms were the main driver, that pattern is hard to explain.
- A 2018 experiment paid people to follow accounts from the opposing camp; participants (one side especially) **became more extreme** — “unplanned encounters” do not necessarily lead to tolerance.
- A 2021 experiment in the American Economic Review found the opposite: subscribing people to counter-attitudinal news outlets **reduced** affective hostility toward the other side.
- A 2022 study conducted by a platform on itself found its algorithm amplified right-of-center political content in six of seven countries — the algorithm is not neutral (consistent with piece ①), but the direction of amplification was not always the one commentators assumed.
- A set of large experiments published in Science and Nature in 2023 (run in cooperation with the platform, on real users during the 2020 US election) found that switching users to **a pure chronological feed** reduced their time on the platform, **increased** the share of political and untrustworthy content they saw, and **did not measurably change** their polarization over three months; removing reshares did not either.
- On video-platform “rabbit holes” (the algorithm walking people step by step toward extremes), a 2021 large-sample analysis found no such trajectory for the great majority of users; consumers of extreme content mostly **arrived from off-site with prior preferences.**

Put together, the honest conclusion is three sentences: **(a) algorithms are not neutral; they do change what people see; (b) their causal effect on polarization is, in the most rigorous evidence so far, small or undetectable; (c) people's own choices — of friends, sources, topics — matter more than the algorithm.** What does this mean for Sunstein? His premise (bubbles exist) partly holds; his conclusion (algorithms cause polarization) is currently under-supported. And for Austrians it is no victory to celebrate, because (c) says exactly this: **people are using demonstrated preference to lock themselves into bubbles** — a problem about people, not only about algorithms, and “people chose the bubble themselves” is not rendered harmless by being voluntary.

### ⑤ Competition among ranking rules: the Austrian answer

If the ranking rule is taxis and no rule is neutral, what do you do about a bad one? The mainstream instinct is **find a better rule** — a regulator or an ethics board defines “a healthy feed.” The Austrian instinct is Stage 6.2: **let rules compete**; push the discovery procedure up one level — discover not only what you want to watch but which rule you want deciding what you watch.

This is not a fantasy; the market is already doing it:

- **Rule options inside platforms.** A photo-sharing app removed its chronological feed in 2016 and restored it as an option in 2022; the major video platform has always offered “Subscriptions” and “Home” as parallel entrances; a social platform open-sourced part of its ranking algorithm in 2023. The EU's Digital Services Act (adopted 2022) requires very large platforms to offer at least one ranking option **not based on profiling** — a law compelling “at least two rules,” which Stage 14.1 can process: it does increase choice, at a compliance cost that falls harder on small platforms.
- **Algorithm marketplaces at the protocol layer.** A decentralized social protocol opened to the public in 2023 pulled “the feed” out of the platform and made it an independent service that third parties can write and users can subscribe to — “cats only,” “ranked by scientists,” “friends of friends,” and anyone can write a rule and offer it. That is **turning taxis into a commodity** and letting the cosmos select among them. It is still small, but it is the purest market answer to this lesson's question.
- **Federated networks.** Federated networks on open protocols (Stage 16.4 covers them in detail) default to chronological timelines and leave “algorithm or not” to each server's operator.

Competition will not produce “the best rule wins” — because **there is no rule best for everyone**, a direct corollary of Stage 1.2's subjective value: some want surprise, some want focus, some want to keep up with friends, some want to learn. A market in rules, like a market in bread, grows diversity rather than convergence.

The limits of the Austrian answer must also be stated. First, rule options work only if **users actually switch** — and Stage 16.1 showed that “in-the-moment you” tends to stay on the default. Defaults are enormous power; behavioral economics is right about that — so “can switch” and “will switch” are separated by a distance across which market remedies do not work automatically. Second, network effects (Stage 15.1) make “switch platforms” expensive, so rule competition is realistic only **inside** platforms or **at the protocol layer.** Third, rule competition cannot solve (c) from piece ④: if people choose bubbles, more rules just give them more ways to choose bubbles. The Austrian reply can only be: that is the price of freedom, and choosing rules on people's behalf costs more — a value judgment, which should be stated as one rather than dressed up as an economic conclusion.

### ⑥ Where the theory needs work: the feed rewrites the preferences it measures

Finally, the red dashed line. Standard economics — Austrians included — treats preferences as **given**: acting persons bring their value scales to the market, and the market discovers and satisfies them. Hayek's discovery procedure discovers what is “already there, just unknown.”

But a recommendation feed has a property a marketplace lacks: **its output is directly its next round's input.** What you watched changes what you will stop for next time; the platform serves more of what you stopped for; you stop more often. A year later, your “preferences” are partly a product of that loop. That is not a discovery procedure; it is a **manufacturing procedure** — or more precisely, it is both at once, and you cannot tell which part was discovered and which was made.

What has Austrian theory said about this? Fragments. Mises said preferences have no constancy, but not how they change. Buchanan's short 1982 essay “Order Defined in the Process of Its Emergence” argued that the “goodness” of a market order cannot be judged against pre-given preferences, because preferences themselves form in the process — the closest step, but undeveloped. Lachmann's work on **expectations** says expectations are shaped by the process, but he meant entrepreneurs' expectations, not consumers' tastes. **On “how the market process rewrites the preferences it serves,” Austrians have no worked-out theory.** That is a real gap, not a strawman of the mainstream — the mainstream does not have one either; behavioral economics has descriptions (“preference shaping,” “habit formation”) but likewise no theory of how it operates inside a market process.

Why does it matter more for Austrians? Because the school's normative conclusions — consumer sovereignty, “the market satisfied people's preferences” — depend on the preferences being **people's own.** If a feed can rewrite three-tenths of a person's preferences in a year, then “the market satisfied his preferences” is three-tenths circular. Hayek's reply to Galbraith (Stage 16.1, piece ④: shaped wants are still yours) still holds here, but it is a philosophical reply, not an economic theory — it does not tell us the **mechanism, speed or direction** of the shaping.

One possible direction: treat “the capacity to reflect” as itself a scarce means, treat “after-the-fact valuation” as a data source alongside “in-the-moment action,” and ask which institutions (rule competition, paid tiers, friction tools, the right of exit) narrow the disagreement between the two. That is still economics — it concerns the allocation of scarce means — only the scarce thing is now “the ability not to be wholly determined by one's own past actions.” Stage 16.5 draws this reflexivity as a price curve using GameStop; Stage ∞.1 lists it among the school's open problems.
`,

  demo: "feed-sim",

  analogy: `
Picture a city's **open-air market**: a hundred stalls, tens of thousands of shoppers.

What the stalls sell, at what price, to whom — nobody plans it; it grows (cosmos). But the market has an office, and the office decides how the stalls are arranged: by order of arrival (chronological), by last week's sales (engagement ranking), or with different kinds of stalls deliberately interleaved (diversity-weighted). The office's rule is designed (taxis). It sells nothing itself, but it decides what you see first.

The “by last week's sales” market is the liveliest — fried snacks and lottery tickets crowd the entrance, and someone calls to you every three steps. You do stop, and you do buy. The office's report looks wonderful: average dwell time at a record high. But at home you think: I came to buy vegetables.

The office's defense: I only arranged things by your actions — wherever you stopped, I put more of that up front; this is the most honest discovery procedure there is. The defense is right, and it is wrong. Right: nobody knows better than the office where people will stop. Wrong: “stopped” and “wanted to buy” are not the same thing, and the report can only record the first. Worse, after a year of fried snacks at the entrance, the city's people **like fried snacks more than they used to** — the market did not only discover tastes; it manufactured them.

The Austrian answer is not “let City Hall dictate the stall layout.” It is: let the market offer several layouts, let shoppers pick, let rival markets use other layouts to poach them. That answer is good most of the time, but it rests on two premises: that shoppers will actually switch (many cannot be bothered), and that switching markets is not too expensive (if all your friends are at this one, it is). As for tastes being manufactured, the Austrian toolkit is not yet enough — it is good at explaining how a market discovers what you want, and not yet good at explaining how a market changes what you want.
`,

  misconceptions: [
    "**“A recommendation algorithm is a spontaneous order, so Austrians should defend it unconditionally.”** — A feed straddles two orders: content and reactions are cosmos, the ranking rule is taxis. Defending what grew is not defending the designed container. The Austrian stance toward a taxis has always been: make them compete, not accept any one unconditionally.",
    "**“The algorithm only discovered what you wanted to watch; complaining about it is complaining about yourself.”** — It discovered “you did not swipe away for 40 seconds,” not “you wanted this.” One sentence is about reflexes, the other about purposes. The discipline of demonstrated preference binds the platform too: dwell time cannot license inferences about ends. Measurement bias (the platform's side) times time inconsistency (the user's side, Stage 16.1) is the full mechanism of “scrolled and regretted.”",
    "**“Algorithms lock people in filter bubbles and are the main cause of polarization.”** — The most rigorous evidence to date (the 2023 large-scale experiments run with the platform) found switching to a chronological feed did not measurably change polarization; polarization rose fastest among the oldest, least-online group; and bubbles built by people's own choices of friends and sources are larger than those built by algorithms. Algorithms are not neutral, but the charge of “main cause” is under-supported — and “people chose the bubble themselves” is not harmless just because it is voluntary.",
    "**“There is a better ranking rule, and a regulator can define it.”** — No rule is best for everyone; that follows directly from subjective value: some want surprise, some focus, some friends. Any single rule favors some kind of content. The Austrian answer is competing rules (in-platform options, protocol-layer algorithm marketplaces, federated networks), with its limits stated honestly: users may not actually switch, and network effects make switching platforms expensive.",
    "**“Austrians already have a complete theory of what feeds do to people.”** — They do not. Austrians can explain how a feed discovers preferences, not how it rewrites them — the reflexivity of output becoming input is a genuine theoretical gap. Buchanan's 1982 essay and Lachmann's theory of expectations are only starting points. This is not a strawman of the mainstream, which has no such theory either; but Austrian normative conclusions (consumer sovereignty) depend more than anyone's on preferences being people's own, so the gap matters more here.",
  ],

  quiz: [
    {
      q: "Under Hayek's taxis / cosmos distinction, which layer of a recommendation feed is “designed”?",
      options: [
        "The tens of millions of content items",
        "The dwells and likes of hundreds of millions of users",
        "The ranking rule (the objective function)",
        "All three layers are grown",
      ],
      answer: 2,
      explain: "The content and reaction layers are planned by no one — cosmos; the ranking rule has an identifiable designer and a measurable target — taxis. A feed is a spontaneous order inside a designed container, which is why no rule is neutral.",
    },
    {
      q: "According to this lesson, what does the feed, as a discovery procedure, discover — and what does it not?",
      options: [
        "It discovers your reflective valuation but not your immediate reaction",
        "It discovers everything, because it has all the data",
        "It discovers nothing, because an algorithm is not a market",
        "It discovers what you stop for in the moment, but not whether you thought afterwards that it was worth it",
      ],
      answer: 3,
      explain: "Millions of experiments per second discover traces of action (dwell, likes); after-the-fact valuation cannot be measured. “Stayed 40 seconds” and “wanted this” are different sentences, and the ranker can optimize only the first.",
    },
    {
      q: "What did the most rigorous evidence so far on algorithms and polarization (the 2023 large-scale experiments with the platform) find?",
      options: [
        "Switching to a chronological feed significantly reduced polarization",
        "Switching to a chronological feed reduced time spent and increased the share of political and untrustworthy content, but did not measurably change polarization over three months",
        "The algorithm is the sole cause of polarization",
        "The algorithm has no effect on what users see",
      ],
      answer: 1,
      explain: "The evidence is mixed: algorithms are not neutral (they change what people see), but their causal effect on polarization is small or undetectable; people's own choices of friends and sources matter more. Sunstein's premise partly holds; his conclusion is under-supported.",
    },
    {
      q: "What is the Austrian answer to “no ranking rule is neutral,” and what are its main limits?",
      options: [
        "Let rules compete (in-platform options, protocol-layer algorithm marketplaces, federated networks); the limits are that users may not actually switch, network effects make switching platforms expensive, and it cannot solve people choosing bubbles themselves",
        "Let a regulator define a healthy rule; the limit is that regulators are not smart enough",
        "Abolish all ranking and use only chronological feeds; the limit is that timelines are boring",
        "There is no answer, because algorithms are not an economic question",
      ],
      answer: 0,
      explain: "Push the discovery procedure up one level: discover not only what you want to watch but which rule you want. No rule is best for everyone (a corollary of subjective value), so the answer is diversity, not convergence — but the power of defaults and network effects are real frictions.",
    },
    {
      q: "What is the “place where Austrian theory needs development” this lesson identifies?",
      options: [
        "Austrians have no theory of spontaneous order",
        "Austrians deny that algorithms can discover preferences",
        "Austrians have no worked-out theory of how the market process rewrites the preferences it serves (reflexivity)",
        "Austrians think data is knowledge",
      ],
      answer: 2,
      explain: "A feed's output is directly its next input; a year later your preferences are partly a product of that loop. Austrian normative conclusions (consumer sovereignty) rest on preferences being people's own, so this gap matters more to Austrians than to anyone. Buchanan 1982 and Lachmann's expectations are only starting points.",
    },
  ],

  further: [
    { label: "Hayek, Law, Legislation and Liberty, Vol. 1: Rules and Order (1973), Chapter 2 “Cosmos and Taxis”", url: "https://mises.org/library/book/law-legislation-and-liberty-volume-1-rules-and-order" },
    { label: "Hayek, “Competition as a Discovery Procedure” (1968 lecture; English translation in QJAE, 2002)", url: "https://mises.org/library/competition-discovery-procedure-0" },
    { label: "Hayek, “The Use of Knowledge in Society” (1945) — the original text behind the platform's knowledge problem (Econlib)", url: "https://www.econlib.org/library/Essays/hykKnw.html" },
    { label: "Guess et al., “How do social media feed algorithms affect attitudes and behavior in an election campaign?”, Science 2023 — the chronological-feed experiment", url: "https://www.science.org/doi/10.1126/science.abp9364" },
    { label: "Bakshy, Messing & Adamic, “Exposure to ideologically diverse news and opinion on Facebook”, Science 2015 — individual choice vs the algorithm", url: "https://www.science.org/doi/10.1126/science.aaa1160" },
  ],
};
