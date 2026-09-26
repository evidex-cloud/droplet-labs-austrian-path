---
id: ai-judgment
prereqs: entrepreneur-alertness, action-axiom
demo: risk-vs-uncertainty
---

# AI & Entrepreneurship: Can Judgment Be Automated?

## @hook
A model can price an insurance contract, forecast tomorrow's sales, and find an overlooked combination in ten thousand patents. So what is left for the entrepreneur? This lesson cuts the question with a knife forged in 1921: Frank Knight's **risk** versus **uncertainty** ([[action-axiom|Stages 2.1]], 6.1). Risk is computable — there is a historical distribution, probabilities can be estimated, and AI beats humans here. Uncertainty is not — there is no distribution, only **judgment**, followed by **bearing the consequences with your own resources.** Foss and Klein define entrepreneurship as “judgment about committing owned resources to a novel plan under uncertainty” — which requires **ownership** and **ends**, and tools have neither. So-called “AI agents” do not act; they execute their principals' plans (praxeology: only humans act). AI does change the entrepreneur's situation — cheaper experiments, more entrants ([[creator-economy|Stage 16.3]]), faster imitation ([[competition-process|Stage 6.2]]), thinner profits — and that makes the **manager-versus-entrepreneur** distinction sharper than it has ever been.

## @intuition
Look at four things that all go by the name “making a decision”:

1. An insurer prices a standard auto policy.
2. A retailer forecasts how much milk one store will sell tomorrow.
3. A company decides whether to launch a product line nobody has ever made.
4. A person decides whether to quit a job to do something that has no market price and no precedent.

AI already does the first two better than people. They share one feature: **many similar things have happened before.** There is a historical distribution, so a probability can be computed. Accident rates, milk sales — these are **risk**, in the sense of Knight's *Risk, Uncertainty and Profit* (1921). Risk can be insured, hedged, or handed to an algorithm.

The last two are different. Nobody has made that product line, so there is no such thing as its “probability of success” — not a low probability, but **no probability at all**, because there is no history to sample from. This is Knight's **uncertainty.** Facing uncertainty you cannot compute; you can only judge: pull together everything you know, place a bet, and **bear it with your own resources.** Mises says in *Human Action* that the entrepreneurial function is to act under uncertainty; Knight says profit is precisely the reward for bearing uncertainty — if everything could be computed, competition would compute the profit away ([[profit-loss|Stage 6.3]]).

Now put that knife to AI: **what AI is good at is exactly the computable half.** It is the most powerful pattern recognizer in history; wherever there is a distribution, it computes faster and more accurately than people. It can even extend Kirzner's **alertness** ([[entrepreneur-alertness|Stage 6.1]]) — spotting an arbitrage nobody noticed in ten thousand documents is, at bottom, pattern matching. But **judgment**? The definition of judgment contains two things a model does not have: **ownership** (whose resources are being bet?) and **ends** (bet for what?).

“But can't AI agents place orders, negotiate and carry out tasks on their own?” They can. But that is not action. Praxeology ([[action-axiom|Stage 2.1]]) says on page one that action is the **purposeful** employment of means. An agent's “purpose” is set by its principal; its “resources” belong to its principal; when it errs, **the principal loses.** It is an extremely elaborate means — in the same logical category as an automatic loom: the loom does not “decide” what to weave; it executes the weaver's plan. The name “AI agent” invites you to mistake it for an actor. It is a **delegated tool.** The distinction is not pedantry: it decides who bears the loss, and bearing loss is the entire mechanism by which markets correct themselves.

AI does change the entrepreneur's situation, substantially. Building a prototype in three days instead of three months means cheaper experiments and more entrants — [[creator-economy|Stage 16.3]] called the creator economy “entrepreneurship democratized,” and AI pushes that into every industry. But the other side of the same coin: **imitation is faster too.** What you build, a rival can copy in three days; Hayek's “competition as a discovery procedure” ([[competition-process|Stage 6.2]]) runs faster, and the window of profit shrinks. When computable things are handled by algorithms and copyable things are copied instantly, one scarce thing remains: **judgment that bets where there is no precedent, and the ownership that answers for it.**

That sharpens an old distinction: **manager versus entrepreneur.** The manager optimizes within a given plan — computable, and AI excels at it. The entrepreneur decides the plan itself — not computable, and AI cannot do it for you, because it does not have your ends and will not lose your money.

**In this lesson we break it into five pieces:**

- **① Knight's knife: risk vs uncertainty, and why it decides the whole question**
- **② What AI can do: compute risk, extend alertness**
- **③ What AI cannot do: judgment requires ownership and ends**
- **④ Do “AI agents” act? The praxeological answer**
- **⑤ How AI changes the entrepreneur's situation: cheaper experiments, faster imitation, thinner profits**

## @mechanics
### ① Knight's knife: risk vs uncertainty, and why it decides the whole question

Frank Knight's *Risk, Uncertainty and Profit* (1921) drew a distinction that has been cited constantly and misread constantly:

- **Risk**: the outcome is unknown, but **the distribution of outcomes is known** or can be estimated — dice, accident rates, mortality at a given age. Risk can be **measured**, and so it can be **insured**: bundle ten thousand similar risks and the law of large numbers makes the total predictable.
- **Uncertainty**: the outcome is unknown, and **no distribution exists** — because the situation is new and there is no sufficiently similar history to sample. Will a product nobody has made find buyers? There is no number called its “success rate” — not because it is small, but because it is undefined.

Knight's key proposition: **profit comes from uncertainty, not from risk.** The price of risk is computed by competition and folded into costs — an insurance premium is the price of risk; if everything were risk, the entrepreneur's return would be competed down to zero. Only where there is no distribution can someone earn more than cost by judging correctly. Mises said the same thing in different words in *Human Action*: the entrepreneurial function is to “act under uncertainty,” and profit and loss measure whether the anticipation was right ([[profit-loss|Stage 6.3]]).

Why does this one cut decide the whole “can AI replace the entrepreneur” question? Because **AI's entire capability rests on distributions.** What a model learns from training data is patterns; its output on a new input is “within the distribution I have seen, what usually corresponds to the thing most like this input?” Where a distribution exists, that is a superpower. Where none exists, it is a hallucination. **Risk is the model's home ground; uncertainty is its blind spot** — not because the model is too small, but because uncertainty is by definition “no learnable distribution.”

A worked example. An insurer has ten million auto policies in its history; a model estimates one customer's annual accident probability to three decimals and prices the policy at $900. That is risk. The same insurer considers pricing coverage for a fleet of driverless taxis — circa 2025, such fleets have a few years of operating history in a few cities from a few companies, while the technology changes yearly and so does the law. There is no distribution to sample. $900 or $9,000? That is judgment; get it wrong and the company pays. **AI can help you compute the known part precisely, but it cannot decide for you how much to stake on the unknown part — because when the stake is lost, it is not the AI that pays.**

### ② What AI can do: compute risk, extend alertness

Give AI its full due first, because its due is large.

**Computing risk.** Wherever a decision has a historical distribution, models are taking over fast: credit approval, demand forecasting, inventory replenishment, ad bidding, routing, price-driven scheduling. These used to be “managerial judgment”; increasingly they look like “computation that can be outsourced.” [[ai-central-planning|Stage 18.1]] called AI “a better planner inside the price system”; this is its counterpart at the level of the entrepreneur: **within a given plan, at given prices, a model optimizes better than a person.**

**Extending alertness.** Kirzner's *Competition and Entrepreneurship* (1973) defined entrepreneurship as **alertness** — noticing opportunities others have missed: the same good priced differently in two markets, two existing things that together would satisfy an unmet want. A large part of alertness is **pattern recognition**: finding an overlooked combination in a mass of information that already exists. That is precisely what AI does well. A model can scan ten thousand patents for combinable technologies, compare prices across hundreds of cities for arbitrage, read every forum for a complaint that recurs and nobody solves. **Kirznerian “discovery of existing opportunities” is something AI can dramatically amplify.**

But note a boundary Kirzner himself acknowledged: alertness discovers what **already exists but has not been noticed** — a price gap that was “already there.” It does not create anything new. When the opportunity is not “an overlooked existing combination” but “a market that does not yet exist,” alertness is not enough; judgment is needed. This is the divergence between Kirzner and the Mises–Knight–Foss–Klein line in [[entrepreneur-alertness|Stage 6.1]], and AI turns it into a practical dividing line: **AI can extend alertness, because alertness works on existing information; AI cannot replace judgment, because judgment works on what does not yet exist.**

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Knight's knife: decisions split by “is there a learnable distribution?”</text><line x1="320" y1="44" x2="320" y2="250" stroke="var(--ink)" stroke-width="2" stroke-dasharray="6 4"/><rect x="40" y="50" width="260" height="200" rx="10" fill="var(--blue-soft)" stroke="var(--blue)"/><text x="170" y="74" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--blue)">Risk: distribution → computable</text><g font-size="11" fill="var(--ink)"><text x="56" y="100">· price a standard insurance policy</text><text x="56" y="120">· forecast tomorrow's sales at given prices</text><text x="56" y="140">· credit approval, restocking</text><text x="56" y="160">· spot a price gap between cities (alertness)</text><text x="56" y="180">· find combinable items in 10,000 patents</text></g><text x="170" y="212" text-anchor="middle" font-size="11" font-weight="600" fill="var(--blue)">The tool's home ground: pattern recognition</text><text x="170" y="232" text-anchor="middle" font-size="10.5" fill="var(--muted)">reward competed into cost → no profit</text><rect x="340" y="50" width="260" height="200" rx="10" fill="var(--orange-soft)" stroke="var(--orange)"/><text x="470" y="74" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--orange-ink)">Uncertainty: no distribution → judgment</text><g font-size="11" fill="var(--ink)"><text x="356" y="100">· launch a product line nobody has made</text><text x="356" y="120">· enter a market nobody has priced</text><text x="356" y="140">· set a premium on a brand-new technology</text><text x="356" y="160">· decide what the company is to become</text><text x="356" y="180">· stake your own resources and wait</text></g><text x="470" y="212" text-anchor="middle" font-size="11" font-weight="600" fill="var(--orange-ink)">The owner's territory: judgment + bearing</text><text x="470" y="232" text-anchor="middle" font-size="10.5" fill="var(--muted)">profit and loss arise only on this side</text><text x="320" y="278" text-anchor="middle" font-size="11" fill="var(--ink)" font-weight="600">AI keeps enlarging the left side and squeezing its profits — which makes the right side the only scarce thing left</text></svg><figcaption>Knight's (1921) distinction applied to AI: on the left, computable risk with a historical distribution — the tool's home ground; on the right, uncertainty with no distribution, which can only be judged and borne — the owner's territory. Profit arises only on the right.</figcaption></figure>

### ③ What AI cannot do: judgment requires ownership and ends

Nicolai Foss and Peter Klein's *Organizing Entrepreneurial Judgment* (2012) systematized the Mises–Knight line: **entrepreneurship = judgment = the decision, under uncertainty, to commit one's own heterogeneous resources to a particular plan, and to bear the consequences.** Three elements sit inside that definition, and a tool has none of them:

- **Ends.** Judgment is made *for* something. An entrepreneur enters a market because they want something — profit, influence, proof that a thing can be done. A tool has no ends; it has an objective function that was set for it, and an objective function is a (usually crude) proxy for the principal's ends. [[what-economics-studies|Stages 0.1]] and 2.1 established that ends are the starting point of action, and only humans have them.
- **Ownership.** Judgment has to be backed by **one's own** resources, or it is merely advice. Foss and Klein stress that judgment cannot be hired: you can hire a manager to execute your judgment, but you cannot hire someone to “judge” for you, because the moment they bear the consequences with their own resources they have become the entrepreneur. A tool owns nothing.
- **Bearing.** When judgment is wrong, the loss lands on the judge. That is the core of the market feedback system in [[profit-loss|Stage 6.3]]: losses pull resources out of mistaken plans and hand them to people who judge better. Something that cannot lose is not in that feedback loop.

Put the three together and ask what “delegating judgment to AI” would mean. Suppose a firm lets a model decide whether to enter a new market; the model says “enter,” the firm does, and loses $200 million. Who bears it? The shareholders. What did the model “bear”? Nothing — it has no resources to lose and no ends to be disappointed. So **praxeologically, the firm did not “hand judgment to AI”; it made its own judgment using a new tool, and the content of that judgment was “I trust this model.”** Responsibility did not move; it was merely draped in a technical costume. The second panel of this lesson's demo draws exactly that: whoever you “delegate” to, the loss arrow always points at the owner.

A footnote picking up the “hallucination” point from [[ai-central-planning|Stage 18.1]]: faced with a question outside its training distribution, a model does not say “I have no distribution”; it generates **something that looks like an answer.** On the risk side that is a minor flaw; on the uncertainty side it is fatal — because uncertainty is by definition “outside the distribution,” and that is exactly where the model's most confident errors occur. An entrepreneur who mistakes a hallucination for judgment has mistaken Knight's right side for his left. **A model does not know what it does not know, and “knowing what you don't know” is precisely where judgment begins.**

### ④ Do “AI agents” act? The praxeological answer

In 2024–25 “AI agent” became the word of the moment: systems that browse, place orders, write code, negotiate and call other tools on their own. They look as if they are “acting.” What does praxeology ([[action-axiom|Stage 2.1]]) say?

Mises's definition of action: **the purposeful employment of means to attain ends.** Where do ends come from? From the actor's valuation — the judgment that some state of affairs is better than the present one. Where does an agent's “end” come from? From whoever wrote the prompt, from the company that deployed it, from the engineer who set its reward function. Its end is **given**, not valued. Its “resources” — API budget, account balance, compute — belong to the principal. Its “success” is defined by the principal. **It is a means, not an actor**; the actor is the person using it, just as the weaver acts and the loom does not.

This does not deny the agent's complexity. An automatic loom's “plan” is a few hundred motions; an AI agent's may run to tens of thousands of steps and change course with its environment. But complexity does not change the logical category: **a longer causal chain is still a causal chain that starts from a human end.** With every wave of automation someone has said “the machine is deciding” — from steam engines to program trading — and praxeology has answered the same way each time: the machine executes a person's decision; the decision has merely been written into the machine.

The distinction has an intensely practical consequence: **the attribution of responsibility and loss.** If agents “act” in markets, who pays when they err? Praxeology's answer is clean: the principal. The agent's error is the principal's error of judgment — the judgment “I trusted this tool with this task.” [[agent-economies|Stage 18.6]] on agent economies will show more and more agent-to-agent transactions, but behind every agent stands a person who staked their own resources, or the agent would have nothing to trade with. **Agents speed up the market process; they do not increase the number of actors.**

### ⑤ How AI changes the entrepreneur's situation: cheaper experiments, faster imitation, thinner profits

Having said what AI cannot do, here is what it genuinely changes — and it changes a lot.

**Experiments get cheaper.** Validating a startup idea used to take three months and a team; now one person with a few models can build a prototype, write the copy and analyze the first round of user interviews in three days. That directly lowers the **cost of trial and error** in judgment. [[creator-economy|Stage 16.3]] called the creator economy “entrepreneurship democratized” — one person doing what a company used to do; AI pushes that effect from content into software, design, consulting and research. The result: **more entrants.**

**Imitation gets faster.** The reverse of the same coin: your product, your copy, your feature can be reproduced by a rival with the same tools in three days. [[competition-process|Stage 6.2]] gave Hayek's “competition as a discovery procedure” — competition is valuable because it discovers what nobody knew in advance; AI makes “copying after discovery” almost instantaneous. **Profit windows shrink from years to months**, and many “moats” get filled in.

**Profits get thinner — and concentrate in one place.** Combine the two: wherever something is computable and copyable, its profit is competed away fast — exactly Knight's prediction that the return to risk goes to zero. Where does the remaining profit concentrate? In what is **not computable and not copyable**: a judgment only you hold (this market is worth entering), a bet only you are willing to bear (with your own money and time), tacit knowledge only you have accumulated ([[hayek-knowledge|Stage 7.2]]), trust nobody can clone.

That sharpens the **manager-versus-entrepreneur** distinction to its finest edge yet. Mises distinguished them in *Human Action*: the manager optimizes locally within the framework the entrepreneur set, guided by profit-and-loss feedback — computable; the entrepreneur decides the framework itself — what to invest in and what not to, which market to enter, how much uncertainty to bear. **AI is taking over the managerial function at scale, while making the entrepreneurial function scarcer and more valuable.** The entrepreneur's real question is no longer “can I compute this?” — the tool can — but “where it cannot be computed, do I stake myself?”

An honest Austrian addendum. The Foss–Klein theory of judgment was developed mostly in the context of the **firm**, and it says relatively little about how far judgment can be decomposed and partly outsourced. AI forces that question: if 90% of the inputs to a judgment can be prepared by a tool, is the remaining 10% still judgment? The Austrian answer is yes — because that 10% is precisely the “do I stake it?” step, which is indivisible and can only be taken by an owner — but the answer needs finer theory behind it, and that is one of the problems on the list in [[open-problems|Stage ∞.1]].

The whole lesson in one sentence: **AI takes over computable risk and extends alertness over existing information, but cannot reach judgment, which requires ownership and ends; so-called “AI agents” are delegated means, not actors; and by making experiments cheaper, imitation faster and profits thinner, AI turns human judgment into the last scarce good in the market.** [[agent-economies|Stage 18.6]] pushes that conclusion out to the whole market: when every participant uses tools, what stays scarce is human ends.

## @analogy
Think of the entrepreneur as the **leader of an expedition**, and AI as the **best guide in history.**

The guide has read every existing map, every weather record, every earlier party's journal. Wherever you want to go, **if someone has been there**, it knows the shortest route, the likeliest hour for rain, the stretch where 70% of travelers slip. That is risk — there is a distribution, and the guide computes it better than anyone. The leader should hand all of that over.

But the point of an expedition is to **go where nobody has been.** There the map is blank; the guide has no data, and it can only “extrapolate” from the mountains it has seen — and an extrapolated route looks exactly like a real one (that is the hallucination). In the blank space there is only one question: **does the leader take the party in?** What goes in is the leader's party, the leader's supplies, the leader's name. The guide loses nothing if the route is wrong — it has no party.

An “AI agent” is a guide that can walk on its own — it can go buy supplies, book transport, scout a stretch of trail. But every step it takes is on the leader's instruction, every coin it spends is the leader's coin, and every wrong turn is the leader's loss. **It is the leader's legs, not a second leader.**

And the better the guide, the cheaper the expedition, the more parties set out, and the faster others follow your footprints. So in the age of guides, one scarce thing remains: **the person who decides in the blank space.**

## @misconceptions
- **“AI forecasts demand, sets prices and spots opportunities, so it is already doing the entrepreneur's job.”** — It does Knight's **risk** side: the part with a historical distribution. The entrepreneurial function — judgment — lives on the **uncertainty** side: no distribution, only a bet with one's own resources and the bearing of consequences. The return to risk is competed into cost; profit arises only on the uncertainty side.
- **“AI agents place orders, negotiate and execute on their own, so they are ‘acting.’”** — Praxeology defines action as the purposeful employment of means. An agent's ends are given by its principal, its resources belong to the principal, and its losses are the principal's. It is a means on a long causal chain, in the same logical category as an automatic loom. Agents speed up the market process; they do not add actors.
- **“Hand the decision to AI and you hand over the responsibility.”** — Responsibility cannot be transferred, only draped. A model has no resources to lose and no ends to disappoint; the loss always lands on the owner. “Do what the model says” is itself the owner's judgment: I trust this tool with this task.
- **“Kirzner's alertness and Mises's judgment are the same thing, and AI can replace both.”** — Alertness works on **existing but unnoticed** information (price gaps, combinable existing technologies), and AI amplifies it enormously. Judgment works on **what does not yet exist** (new markets, new products) and needs ownership and ends. AI turns the divergence between the two lines in [[entrepreneur-alertness|Stage 6.1]] into a practical dividing line.
- **“AI makes starting a business easier, so there will be more profit.”** — Cheaper experiments mean more entrants; faster imitation means shorter profit windows. Profit on the computable, copyable part is competed away quickly; what remains concentrates in uncomputable, uncopyable judgment and bearing. AI makes entrepreneurship scarcer, not more common — what it makes common is the manager's toolkit.

## @quiz
1. On Knight's 1921 distinction, which of these is “uncertainty” rather than “risk”?
   - [ ] Pricing a standard auto insurance policy
   - [ ] Forecasting tomorrow's milk sales at one store
   - [x] Deciding to enter a new market nobody has priced, with no precedent
   - [ ] Estimating mortality at a given age
   > Risk has a historical distribution and is computable; uncertainty has none — not a small probability, an undefined one. Profit arises only on the uncertainty side.

2. Which three elements of Foss and Klein's “judgment” does a tool lack?
   - [ ] Speed, accuracy, scale
   - [x] Ends, ownership, bearing the consequences
   - [ ] Data, compute, algorithms
   - [ ] Alertness, imitation, entry
   > Judgment = committing one's own resources to a plan under uncertainty and bearing the outcome. A tool has no ends (only a set objective), owns nothing, and cannot lose.

3. A firm lets a model decide to enter a new market and loses $200 million. How does praxeology see “who bears it”?
   - [ ] The model, since it made the decision
   - [ ] Nobody, since the decision was automated
   - [x] The shareholders; the firm in fact made its own judgment with a new tool — the judgment being “I trust this model”
   - [ ] The regulator
   > Responsibility cannot be transferred to something with no resources and no ends. “Follow the model” is itself the owner's judgment.

4. Which best describes AI's effect on Kirznerian alertness?
   - [ ] AI replaces alertness entirely
   - [x] AI greatly amplifies alertness, because alertness works on existing but unnoticed information — pattern recognition's home ground
   - [ ] AI is unrelated to alertness
   - [ ] AI makes alertness unimportant
   > Finding combinable items in ten thousand patents or comparing price gaps is discovering opportunities that were “already there” — AI excels. What it cannot reach is judgment about what does not yet exist.

5. AI makes experiments cheaper and imitation faster. What is the net effect on profit?
   - [ ] All profits rise
   - [x] Profit on computable, copyable parts is competed away fast; profit concentrates in uncomputable, uncopyable judgment and bearing
   - [ ] Profit disappears
   - [ ] Profit transfers to model companies
   > Exactly Knight's prediction: the return to risk goes to zero and profit comes from uncertainty. AI spreads the manager's function and makes the entrepreneur's scarcer.

## @further
- [Frank Knight, Risk, Uncertainty and Profit (1921), full text (Econlib)](https://www.econlib.org/library/Knight/knRUP.html)
- [Mises, Human Action, Chapters XIV–XV — entrepreneur, manager and uncertainty](https://mises.org/library/book/human-action)
- [Kirzner, Competition and Entrepreneurship (1973) — the source on alertness](https://mises.org/library/book/competition-and-entrepreneurship)
- [Peter Klein, The Capitalist and the Entrepreneur (2010) — Austrian essays on judgment, ownership and the firm (Mises Institute full text)](https://mises.org/library/book/capitalist-and-entrepreneur-essays-organizations-and-markets)
- [Peter G. Klein's articles on entrepreneurial judgment (Mises Institute author page)](https://mises.org/profile/peter-g-klein)
