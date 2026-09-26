---
id: data-new-oil
prereqs: hayek-knowledge, heterogeneous-capital
demo: data-vs-knowledge
---

# Is Data the New Oil? The Knowledge Problem 2.0

## @hook
In 2017 The Economist's cover declared that the world's most valuable resource is no longer oil but data. Behind the slogan is a complete argument: whoever has the most data has the best algorithms, hence the best product, hence the most users, hence still more data — a self-reinforcing loop that ends with the whole economy inside a few companies' servers. Austrians hear two old things: what Hayek said in 1945 about “knowledge” never being data ([[hayek-knowledge|Stage 7.2]]), and what Mises said in 1920 about “calculation” never being possible from data alone ([[mises-1920|Stage 7.1]]). This lesson steelmans “data is the new oil,” then draws three distinctions — **data ≠ information ≠ knowledge**, data as a **heterogeneous, specific capital good** ([[heterogeneous-capital|Stage 3.4]]), and the fact that however much data you have **you still need prices to calculate** — and then concedes honestly that data really is moving the boundaries of firms, and that the Austrian theory of privacy and data property is unfinished.

## @intuition
Start with a real failure. Zillow is America's largest real-estate site: decades of transaction records, valuation models for over a hundred million homes, the browsing behavior of tens of millions of people a day. By the “data is the new oil” logic it should be the institution that understands house prices best in the world. In 2018 it began using that data to buy houses directly and resell them (Zillow Offers). In November 2021 it shut the business down, wrote down about $500 million of inventory and laid off roughly a quarter of its staff, explaining that **it could not forecast house prices accurately enough.** Over the same period, thousands of local agents — no models, only local experience — kept buying and selling houses.

The story does not say data is useless (Zillow's valuation tool remains its core product). It says **data, information and knowledge are three different things**, and the “new oil” slogan blends them into one.

The Economist's argument is strong on its own terms. Data is like oil: a raw material that must be “refined” (algorithms, compute) to have value; more is better, because model performance rises with data; it has economies of scale, because collection has high fixed and near-zero marginal cost; and it has network effects, because more users mean more data, a better product, more users. So data is a **capital good** — and one that grows with use. Hence, the argument goes, antitrust should treat data as “infrastructure,” force it to be shared, or hand ownership of it back to individuals.

The Austrian attitude has three layers.

**First, concession.** Data really is a capital good — a record of past action which, once processed, raises the productivity of future production. That is fully consistent with Menger's higher-order goods ([[diamonds-water|Stage 1.1]]): data's value is imputed back from the value of the final product it helps make.

**Second, distinction.** The heart of Hayek's 1945 “The Use of Knowledge in Society” is not merely that information is dispersed but that **one kind of knowledge is not information at all**: knowledge of the particular circumstances of time and place, tacit knowledge, judgment about new situations — none of it can be written into a database, because it does not exist until it is used. Zillow has data on every house, but not what the local agent knows: “this street gets roadworks next month,” “this seller is desperate to move out of state,” “the school in this district just changed principals.” Data is a **record of the past**; knowledge is an **interpretation of the present.** When the world stays still, the record is enough; when the world changes, the record becomes a burden — in the spring of 2020 every demand model trained on historical data failed at once, while supermarket managers could see from the shelves that they needed more toilet paper.

**Third, back to calculation.** Even a firm with all the world's data faces Mises's 1920 problem ([[mises-1920|Stage 7.1]]): data tells you *what people did*, not *whether it was worth it*. To decide whether a logistics route should open or a data center should be built, you must reduce heterogeneous inputs to comparable numbers — prices — and prices only come from market exchange. Amazon calculates internally with market prices too; all its data did not spare it the judgment failure of the Fire Phone (2014, a write-down of about $170 million). This is what we call the **knowledge problem 2.0**: big data has not solved the calculation problem; it has only made the illusion that it has been solved more convincing. [[bigdata-planning|Stage 7.5]] discussed Alibaba's 2017 claim that big data makes planning possible; [[ai-central-planning|Stage 18.1]] asks the same of AI.

We also have to deal with data property and privacy ([[why-property|Stage 9.1]]): who owns “your click on a website”? Austrians have no unified answer, and regulation like GDPR, seen through the five-step method of [[five-step-analysis|Stage 14.1]], often produces the opposite of its intent. Finally we concede: data really is moving Coase's boundaries of the firm ([[externalities-coase|Stage 9.2]]) — some firms are bigger for genuine efficiency reasons.

**In this lesson we break it into six pieces:**

- **① Steelman first: the complete “data is the new oil” argument**
- **② Data ≠ information ≠ knowledge: Hayek's three distinctions**
- **③ Data as a heterogeneous, specific capital good: value imputed from use**
- **④ The knowledge problem 2.0: however much data, you still calculate with prices**
- **⑤ Data property, privacy and GDPR: through the five-step method**
- **⑥ What Austrians should concede: data really is moving the boundaries of the firm**

## @mechanics
### ① Steelman first: the complete “data is the new oil” argument

The phrase is usually credited to the British mathematician Clive Humby (2006; he designed Tesco's loyalty-card system). The Economist's May 2017 cover essay turned it into a policy argument in five steps:

1. **Data is a factor of production.** Recommendation engines, ad targeting, fraud detection, speech recognition, self-driving — each performs better with more and better training data. Data is their raw material as oil is the raw material for plastics and fuel.
2. **Data has economies of scale.** Collecting and storing it has high fixed cost and near-zero marginal cost; training a model is expensive, serving one more user nearly free. So big firms' cost per unit of data is far below small firms'.
3. **Data has network effects.** More users → more data → better models → better products → more users. This is the indirect network effect of [[network-effects|Stage 15.1]] with “data” inserted as the middle link.
4. **Data is excludable in use.** Technically it can be copied without limit, but in practice the behavioral data one company collects is unavailable to others — it is **de facto exclusive**, hence de facto scarce. That is what makes it like oil rather than air.
5. **Therefore data concentrates.** The four points together imply that the first mover's advantage reinforces itself, markets tend toward a few “data giants,” and traditional antitrust (prices, shares) cannot catch this concentration because the services are free. Conclusion: regulate data as infrastructure — mandatory sharing, portability, or individual property rights in data.

The argument has a core Austrians accept entirely: **data is a capital good** — a record of past action that, processed, raises the productivity of future production, with value imputed from the final product it helps make ([[diamonds-water|Stage 1.1]]). What Austrians reject is each step of the inference from “capital good” to “new oil” to “inevitable concentration.” We take them in turn.

### ② Data ≠ information ≠ knowledge: Hayek's three distinctions

When [[hayek-knowledge|Stage 7.2]] covered Hayek's 1945 essay, the emphasis was on “knowledge is dispersed.” This lesson uses a deeper layer of the same essay: **there are different kinds of knowledge, and the most important kind is not data.**

Separate the three words:

- **Data**: a record of a past event. “User 4471 clicked product A at 14:07 on March 2 and stayed 12 seconds.” It is raw material; by itself it says nothing.
- **Information**: data organized and given context. “38% of users who click A go on to buy B.” This is the refined oil — the layer where The Economist locates most of the value.
- **Knowledge**: **understanding** of the present situation and the ability to act on it. “These users are buying B because an influencer recommended it last week and the fad will fade next week.” “This supplier's delivery is unreliable because their old plant manager just retired.” “Houses in this district aren't moving because the school is being merged.”

Hayek's “knowledge of the particular circumstances of time and place” and Michael Polanyi's “tacit knowledge” ([[hayek-knowledge|Stage 7.2]]: what you know but cannot say) both belong to the third layer, and they have three features that make them **in principle** impossible to load into a database:

**First, context.** The same datum means opposite things in different contexts. “Sales up 30%” could be rising demand, a competitor's stock-out, or a big customer's last order before liquidating. Telling which is not a matter of more sales data but of knowing what happened on this street.

**Second, tacitness.** An experienced buyer glances at a supplier's warehouse and knows whether they will survive the year — and cannot say why, so it cannot become a trainable label. Polanyi's line: we know more than we can tell. A database holds only the part we can tell.

**Third, novelty.** Data records the past, while entrepreneurial profit ([[entrepreneur-alertness|Stages 6.1]] and 6.3) comes from judgment about **what has not yet happened.** When the world stays still, the past is the best predictor of the future — and the data giant wins. When the world changes — a new taste, a pandemic, a new technology, a new competitor — the record is not only useless but a drag: the model keeps predicting yesterday's world. In March 2020 nearly every retail demand model trained on history collapsed simultaneously; supermarket managers, watching shelves and listening to complaints, knew what to order weeks before the models did. That is not a failure of model quality; **any** model built on the past must behave this way in the face of genuine novelty.

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Data → information → knowledge: what a database can hold shrinks; what the market relies on grows</text><polygon points="60,260 580,260 470,190 170,190" fill="var(--blue-soft)" stroke="var(--blue)" stroke-width="1.5"/><polygon points="170,190 470,190 400,120 240,120" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><polygon points="240,120 400,120 320,50" fill="var(--orange-soft)" stroke="var(--orange)" stroke-width="2"/><text x="320" y="232" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Data: records of past events</text><text x="320" y="250" text-anchor="middle" font-size="10.5" fill="var(--muted)">“user 4471 clicked A, stayed 12 s” · abundant, cheap, copyable · where the giants' edge lies</text><text x="320" y="152" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Information: organized data with context</text><text x="320" y="172" text-anchor="middle" font-size="10.5" fill="var(--muted)">“38% of A-clickers buy B” · the refined “oil”</text><text x="320" y="88" text-anchor="middle" font-size="12" font-weight="700" fill="var(--orange-ink)">Knowledge</text><text x="320" y="104" text-anchor="middle" font-size="10" fill="var(--orange-ink)">time and place · tacit · novelty</text><line x1="590" y1="260" x2="590" y2="50" stroke="var(--line)" stroke-width="1" stroke-dasharray="3 3"/><text x="605" y="255" font-size="10" fill="var(--blue)" transform="rotate(-90 605 255)">what a database can hold</text><line x1="40" y1="260" x2="40" y2="50" stroke="var(--line)" stroke-width="1" stroke-dasharray="3 3"/><text x="30" y="255" font-size="10" fill="var(--orange-ink)" transform="rotate(-90 30 255)">what the market process runs on</text><text x="520" y="70" text-anchor="middle" font-size="10" fill="var(--red)" font-weight="600">when the world changes,</text><text x="520" y="84" text-anchor="middle" font-size="10" fill="var(--red)" font-weight="600">the base becomes a burden</text><text x="520" y="98" text-anchor="middle" font-size="10" fill="var(--red)" font-weight="600">and only the top works</text><text x="120" y="70" text-anchor="middle" font-size="10" fill="var(--green)" font-weight="600">when the world stays still,</text><text x="120" y="84" text-anchor="middle" font-size="10" fill="var(--green)" font-weight="600">the base predicts the future</text><text x="120" y="98" text-anchor="middle" font-size="10" fill="var(--green)" font-weight="600">→ the data giant wins</text></svg><figcaption>“Data is the new oil” describes the bottom two layers. Hayek's 1945 “knowledge” is the small block at the top: unrecordable, context-bound, facing novelty — and that is exactly where profit comes from.</figcaption></figure>

Put the three layers together in numbers. A recommender with 10 million historical purchase records predicts “what the next user will buy” with about 70% accuracy; a small shopkeeper going by observation manages about 55%. In stable times the recommender wins by 15 points — the part The Economist gets right. Now a new taste appears (an influencer, a rainstorm, a holiday) and preferences shift: the shopkeeper rearranges the shelves the next day and is back above 50%; the recommender must wait for new data to “dilute” 10 million old records, which may take weeks, during which accuracy drops to 30%. **The more data, the more inertia.** The demo lets you adjust both parameters and watch the two hit-rate curves cross.

### ③ Data as a heterogeneous, specific capital good: value imputed from use

Now apply the tools of [[heterogeneous-capital|Stage 3.4]] to “data is a capital good.” Lachmann's capital theory has two key words: **heterogeneity** (capital is not a homogeneous lump of “K”; each item has limited uses) and **complementarity** (an item's value depends on what other capital it can work with). Data is the textbook case of both:

- **Data is specific.** Netflix's DVD-rental data was of limited use for streaming recommendations; taxi trip data is of little use for self-driving; a ten-year-old social graph is nearly worthless for today's ad targeting. Data **depreciates** like a machine, and fast — a record of “what the user searched yesterday” loses most of its value within a week.
- **Data is a complement.** Without algorithms, compute, engineers and **a product that can monetize it**, data is a pile of disks. Conversely, the same data with different complements is worth wildly different amounts. That is why “forced data sharing” helps small firms far less than imagined: what they lack is usually not data but the entire complementary bundle.
- **Data's value is imputed from its use.** Menger's imputation ([[diamonds-water|Stage 1.1]]) applies word for word: a datum is worth whatever the final product it helps make is worth — and consumers decide that. Google's search data is valuable because advertisers pay for search ads; if people stopped searching tomorrow (and asked an AI instead), the same data would lose much of its value. **Data has no “intrinsic” value, just as oil had none before the internal-combustion engine.**

This also explains Zillow's failure: its data had been accumulated for the use “display valuations,” with a website and advertising as complements; repurposing the same pile for “buy houses with real money” required entirely different complements — local judgment, repair capacity, physical inspection of individual houses — which it did not have. **Heterogeneous capital cannot be repurposed at will, and neither can data.**

Austrians see one layer more than the mainstream here. The mainstream writes data as an aggregate “D” in a production function, just as it writes capital as “K” (the aggregation problem of [[aggregates-limits|Stage 10.2]]); once written that way, “more data is better” and “data concentration means monopoly” become automatic mathematical conclusions. Admit heterogeneity and specificity, and the question becomes: **what can this particular pile of data complement, in which use, depreciating how fast** — the answer differs by firm, and there is no universal “data = moat.”

### ④ The knowledge problem 2.0: however much data, you still calculate with prices

Back to the calculation debate. Mises's 1920 argument ([[mises-1920|Stage 7.1]]): to judge whether a production plan creates or destroys value, heterogeneous inputs and outputs must be reduced to comparable numbers; those numbers can only be **market prices**, and market prices can only arise from real exchange under private property. Hayek in 1945 added that even with prices, the knowledge planning requires is dispersed and tacit. Lange's reply ([[lange-market-socialism|Stage 7.3]]) was “a computer can solve it”; today's version is “big data can solve it” — [[bigdata-planning|Stage 7.5]] discussed the 2017 claim by Alibaba's founder that with big data a planned economy might become possible.

The Austrian answer has two steps, neither of which depends on “not enough data.”

**Step one: data answers “what was done,” prices answer “whether it was worth it.”** A firm holding every consumer's behavioral data still does not know where to build a new data center or whether a new logistics route is worth opening — because those judgments require comparing the **relative scarcity** of electricity, land, engineers' time and capital, and such comparisons are only possible through prices. Every Amazon division is accounted for at market prices; all its data only tells it more about what consumers want, not whether a project is worth doing — the Fire Phone (2014, about $170 million written down), Amazon Restaurants and the physical bookstores were all misjudgments by the company with the most data. Google+ likewise: Google held at least as much user data as Facebook, and Google+ limped from 2011 to its 2019 shutdown. **Data does not replace judgment, because judgment faces what has not yet happened.**

**Step two: big data is itself a product of the price system.** A recommender learns consumers' choices **at prices**; ad optimization maximizes conversion **at prices**; behind every “user bought A” record is a price. Remove the price system and data no longer reflects relative scarcity, only “what people want” — and wants, unconstrained, are unlimited. That is the root cause of the failure of Lange's model in [[lange-market-socialism|Stage 7.3]]: without real exchange, “simulated prices” carry no knowledge. A central body planning with big data would find its data going stale from day one, because the source of the data — people's real choices at real prices — is what it has switched off. [[ai-central-planning|Stage 18.1]] extends this to AI.

So the precise statement of the knowledge problem 2.0 is: **big data shrinks the problem at the “information” layer, does not touch the “knowledge” layer, and depends entirely on the existence of the “calculation” layer.** It makes the planner look more as if the problem were solved — which is exactly what makes it more dangerous.

### ⑤ Data property, privacy and GDPR: through the five-step method

If data is a capital good, who owns it? This is a genuine hard case for the property theory of [[why-property|Stage 9.1]], and Austrians have no single answer.

Rothbard's position in *The Ethics of Liberty*: **there is no free-standing “right to privacy,” only property rights.** If someone sees you on the street they have not violated you; if you click on a website and the site records your click — and its terms of service say it will — that is a contract, and the record belongs to whichever party the contract assigns it to. On this logic, ownership of user data should be settled by **contract**, not by uniform legislation. Its strength is clarity; its weakness is that almost nobody reads terms of service, so “consent” is in practice a formality. Another Austrian strand (influenced by Hoppe) asks: since data arises from **the user's action**, should it default to the person who generated it absent a contract? That question remains open. A third voice — Jaron Lanier's *Who Owns the Future?* (2013), Posner and Weyl's *Radical Markets* (2018) — argues “data as labor” that should be paid for; that is outside the Austrian school, but Austrians should take it seriously: if data has value and no price, that is precisely a market with a missing price.

Candidly: **the Austrian theory of data property is incomplete.** Property theory rests on scarcity and conflict ([[why-property|Stage 9.1]]), while data is copyable and non-rival with only “de facto exclusivity in use” — it sits between scarce goods and ideas (the intellectual-property question of [[zero-marginal-cost|Stage 15.3]]), and neither theory fits it fully. An open problem for [[open-problems|Stage ∞.1]].

An incomplete theory does not prevent examining a specific law with the five-step method of [[five-step-analysis|Stage 14.1]]. The EU's General Data Protection Regulation (GDPR, in force May 2018):

1. **Who acts, pursuing what?** Legislators sought to “return control of data to individuals and constrain the giants.”
2. **Direct (seen) consequences?** Pop-ups, consent forms, data portability, large fines (those on Meta and Amazon have run from hundreds of millions to over a billion euros).
3. **Indirect (unseen) consequences?** Compliance is a fixed cost: a rounding error for Google, life or death for a twenty-person firm. Research (such as Johnson, Shriver and Goldberg's 2023 paper in *Management Science*) found that after GDPR the number of ad-tech vendors used by European websites fell by roughly 15%, with the remaining share concentrating in the largest few. “Consent fatigue” has users clicking “accept” on everything, so the control exists in name only.
4. **How do incentives change?** Giants gain a reason to lobby for stricter rules (the “raising rivals' costs” of [[platforms-winner|Stage 15.2]]); startups route around Europe.
5. **Conclusion?** A law intended to “constrain the giants” tends, in a domain where compliance is a high fixed cost, to **entrench the giants.** That does not make privacy unimportant; it means the cost of replacing contract and competition with uniform state rules is systematically underestimated.

### ⑥ What Austrians should concede: data really is moving the boundaries of the firm

Finally, what data has **genuinely** changed, stated fairly.

Coase asked in 1937: if markets are so good, why do firms exist? The answer is **transaction costs**: some things are cheaper to direct inside a firm than to negotiate on the market again and again. The firm's boundary lies where “the cost of internal direction = the cost of market transaction” ([[externalities-coase|Stage 9.2]] covered Coase). Data lowers both costs, but by different amounts:

- Where **internal coordination costs fall more**, firms grow. Amazon's logistics network is the example: real-time inventory, route optimization and demand forecasting make “do your own warehousing and delivery” cheaper than “outsource to dozens of carriers” — not a network effect but **real operating efficiency**, which Austrians should recognize as market-earned scale ([[monopoly-question|Stage 6.4]]). Walmart did the same with data-driven supply chains in the 1990s.
- Where **market transaction costs fall more**, firms shrink. Platforms let an individual take jobs without joining any company (ride-hailing, freelance marketplaces, the creator economy of [[creator-economy|Stage 16.3]]) — here data dismantles firms rather than entrenching them.

So “data leads to concentration” is at best incomplete: data is simultaneously making bigger firms and smaller firms, and the outcome depends on how much each of the two transaction costs falls in each industry — something the market process must discover rather than a metaphor assert.

One more concession: Austrian capital theory ([[time-preference|Stage 3]].x) was written for machines, plants and inventories; for a capital good that is **free to copy, fast to depreciate, highly complementary and of unclear ownership**, Austrians do not yet have a mature analysis. Lachmann's framework is the right starting point, but the work is undone.

The lesson in one sentence: **data is a capital good but not the new oil — it is a record of the past rather than knowledge of the present, a specific, complementary, fast-depreciating asset rather than a homogeneous “D”; it answers “what was done” but not “was it worth it,” so however much of it you hold you cannot escape the calculation problem; data property is unfinished Austrian theory, and GDPR's lesson is that uniform state rules tend to entrench those they meant to constrain; data really is moving the boundaries of firms, in both directions.** [[ai-central-planning|Stage 18.1]] applies the same three distinctions — data, information, knowledge — to “can AI central-plan?”, the ultimate test of the debate.

## @analogy
Think of “data vs knowledge” as two **weather forecasters.**

The first works at the meteorological office, with a century of records, satellites and a supercomputer. In a normal year, his forecasts beat anyone's — the part The Economist gets right: more data means better prediction of **recurring** patterns.

The second is an old farmer in the hills, with no instruments, only sixty years on this plot of land. In a normal year her forecasts are worse than the office's. But she knows things the office does not: the wind in this valley shifts before rain; a cloud coming through that western pass will not reach this side; spring is early this year because the stream thawed sooner than usual. That is **knowledge of time and place** — things she cannot articulate, write down or upload.

Now the climate changes — or simply one year brings weather nobody has seen. The office's model keeps forecasting a century's “normal” and is wrong for weeks; the farmer changes her planting plan on day three, because she is looking at the sky in front of her, not the sky in the records. **The more data, the more inertia; the closer knowledge is to the present, the faster the adjustment.**

The real economy is not one forecaster at work but millions of farmers and dozens of meteorological offices at once — and, crucially, they pass judgments to one another through one thing: **prices.** When many farmers decide at the same time to plant more of a crop, its futures price moves, and the office reads from the price that “someone knows something I don't.” Remove the prices and keep only the office, and you get not a smarter system but one that is the last to know when the climate changes. That is the knowledge problem 2.0: big data is a better meteorological office; it has not become the farmer, and still less has it become the price.

## @misconceptions
- **“More data means better predictions, so the firm with the most data must win.”** — True only for recurring patterns. Data records the past; when novelty arrives (a new taste, a pandemic, a new technology) more data means more inertia, and the model keeps predicting yesterday's world. Zillow had the most housing data and still shut its buying business for “inability to forecast prices”; Google+ had more user data than Facebook and closed after eight years.
- **“Data is a homogeneous resource like oil, measurable by ‘how much.’”** — Data is a heterogeneous, specific, complementary, fast-depreciating capital good ([[heterogeneous-capital|Stage 3.4]]): DVD-rental data is of little use for streaming, a ten-year-old social graph nearly worthless today; without algorithms, compute and a monetizable product it is a pile of disks. Its value is imputed from use; it has no “intrinsic” value.
- **“With big data, central planning becomes feasible.”** — Data answers “what did people do,” prices answer “was it worth it.” Deciding whether to build a data center requires comparing the relative scarcity of power, land and engineers' time, which only prices can do. And data is itself a product of the price system — people's real choices at real prices. Switch prices off and the data goes stale from day one; the reason Lange's model failed has not changed.
- **“Austrians oppose all privacy protection.”** — Austrians oppose replacing contract and competition with uniform state rules, not privacy itself. Rothbard grounds privacy in property and contract; Austrians disagree about the default ownership of data and admit the theory is unfinished. The critique of GDPR rests on its consequences: fixed compliance costs entrenched the giants it meant to constrain.
- **“Data only makes firms bigger and markets more concentrated.”** — Data lowers both internal coordination costs and market transaction costs (Coase). Where the former falls more, firms grow (Amazon logistics); where the latter falls more, firms shrink (freelancers and creators on platforms). The direction depends on the industry and must be discovered by the market process.

## @quiz
1. Zillow had decades of housing data and valuation models, yet shut its house-flipping business in 2021. What does this best illustrate?
   - [ ] Data has no value
   - [x] Data is a record of the past, not judgment about the present; repurposing data gathered for “displaying valuations” to “buying houses with real money” needed entirely different complements and local knowledge
   - [ ] House prices are unpredictable, so agents cannot work either
   - [ ] Zillow did not have enough data
   > Hayek's “knowledge of time and place” meets Lachmann's “heterogeneous, specific capital”: data is a capital good but cannot be repurposed at will, and the tacit knowledge needed to judge an individual house does not fit in a database.

2. By Hayek's distinctions, which of the following is “knowledge” rather than “data” or “information”?
   - [ ] User 4471 clicked product A at 14:07
   - [ ] 38% of users who click A then buy B
   - [x] These users are buying B because an influencer recommended it last week and the fad will fade next week
   - [ ] The server logs total 10 TB
   > The first two are data and information (organized data). The third is an interpretation of the present that depends on context and judgment about novelty — “knowledge of time and place,” and exactly where profit comes from.

3. Why has big data “not solved the calculation problem”?
   - [ ] Because storage is too expensive
   - [x] Because data answers “what people did,” while judging whether a production plan is worthwhile requires comparing the relative scarcity of inputs, which only market prices can do; and data itself is a record of choices made at real prices
   - [ ] Because big-data firms refuse to share data
   - [ ] Because computers are too slow
   > This is Mises's 1920 argument in contemporary form: Amazon accounts internally at market prices; switch off the price system and data goes stale from day one. [[ai-central-planning|Stage 18.1]] asks the same of AI.

4. Through the five-step method, what is the “unseen consequence” of GDPR that Austrians point to?
   - [ ] Users gained complete control over their data
   - [x] Compliance is a fixed cost, trivial for giants and existential for small firms; research found fewer ad-tech vendors and share concentrating in the largest — the law entrenched what it meant to constrain
   - [ ] The European internet got faster
   - [ ] The giants went bankrupt from fines
   > A case of the “raising rivals' costs” of [[taxes-regulation|Stage 8.3]] and the state moat of [[platforms-winner|Stage 15.2]]: intended to constrain the giants, it entrenched them, because compliance is a fixed cost.

5. What should Austrians concede that data has “really” changed?
   - [ ] Data has made prices unnecessary
   - [x] Data lowers both internal coordination costs and market transaction costs, so it creates both bigger firms (Amazon logistics) and smaller ones (freelancers on platforms) — Coase's boundary of the firm moves in both directions
   - [ ] Data has proven central planning feasible
   - [ ] Data makes all firms smaller
   > Coase's 1937 boundary is set by comparing two transaction costs. Data lowers both; the direction differs by industry and must be discovered by the market process — “data leads to concentration” is at best incomplete.

## @further
- [Hayek, “The Use of Knowledge in Society” (1945) — the original source of the distinctions among kinds of knowledge (Econlib)](https://www.econlib.org/library/Essays/hykKnw.html)
- [Mises, “Economic Calculation in the Socialist Commonwealth” (1920) — the original calculation argument (Mises Institute)](https://mises.org/library/book/economic-calculation-socialist-commonwealth)
- [Lachmann, Capital and Its Structure (1956) — heterogeneity and complementarity of capital (Mises Institute)](https://mises.org/library/book/capital-and-its-structure)
- [Rothbard, The Ethics of Liberty, Ch. 16 “Knowledge, True and False” — privacy and property rights (Mises Institute)](https://mises.org/library/book/ethics-liberty)
- [The Economist, “The world's most valuable resource is no longer oil, but data” (May 2017) — the opposing case in its own words](https://www.economist.com/leaders/2017/05/06/the-worlds-most-valuable-resource-is-no-longer-oil-but-data)
