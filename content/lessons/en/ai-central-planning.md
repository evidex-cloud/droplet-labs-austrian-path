---
id: ai-central-planning
prereqs: bigdata-planning, mises-1920, hayek-knowledge
demo: ai-planner-sandbox
---

# Can AI Central-Plan? The Ultimate Test of the Calculation Debate

## @hook
Large language models write code, read filings and forecast demand; hyperscale data centers swallow roughly hundreds of billions of dollars a year in capital spending; sensors sit in every warehouse, port and pocket. So a century-old question is reborn a fourth time: **if the planner is no longer a bureaucrat with an abacus but an AI that has read everything humans wrote and can see every transaction, does Mises's 1920 argument still hold?** This lesson first states the strongest case for “AI planning” — Lange's equations finally have their computer — and then answers layer by layer: the prices an AI needs are produced by the very exchanges it would abolish ([[mises-1920|Stage 7.1]]); it compresses knowledge that has **already been articulated**, while markets mobilize knowledge that is tacit, local and **not yet in existence** ([[hayek-knowledge|Stage 7.2]]); new products and new preferences are created in action, not observed; AI genuinely pushes the boundary of the firm outward — a real concession; and “alignment” is itself a knowledge problem: **whose ends?** We close by drawing the line between AI that **augments** markets and AI that **replaces** them.

## @intuition
Start by making the other side as strong as it can be.

In 1967 Oskar Lange wrote the famous line: were he to rewrite his 1936 essay today, he would simply say “put the simultaneous equations on an electronic computer and we shall obtain the solution in less than a second.” His computer ran on punch cards. Today a single AI accelerator performs hundreds of trillions of floating-point operations per second; one cloud company spends on the order of a hundred billion dollars a year on capital equipment; a large language model has read most of the public internet. In 2017 Jack Ma told an audience that with big data, a planned economy would become feasible; a body of Chinese writing on “AI planning” has since systematized the idea; in the West, socialist theorists (Cockshott and Cottrell; Phillips and Rozworski's *The People's Republic of Walmart*, 2019) argue that Walmart and Amazon already plan hundreds of billions of dollars of activity internally without markets — so just socialize them. And from the opposite political direction, Silicon Valley arrives at the same place: Sam Altman-style claims that “AI will make everything cheap,” that intelligence will become “too cheap to meter.” That sounds like a victory for markets, but listen carefully: it too assumes a sufficiently clever system that can **work out for everyone** what to produce, how much, and for whom.

The job of this lesson is not to sneer at any of that. It is to take every tool you picked up in [[mises-1920|Stage 7]] and test whether it still bites under the strongest possible assumption — that the planner is an AI. The answer: **most of it still bites, a little has to be conceded, and the concessions are the most interesting part.**

Here is a first intuition. Suppose you train a model on every transaction, every inventory record and every sensor reading on earth up to 2006. It learns the 2006 economy perfectly. Now ask it: how many iPhones should be produced in 2007? It cannot answer — not for lack of compute, but because **the iPhone is not in the data**, and neither is anyone's preference for “a phone, a camera and a browser fused into one slab of glass.” That preference was discovered only after the product existed and people held it. A planner projects the old world forward; an entrepreneur bets on a new one. That is the judgment of [[entrepreneur-alertness|Stage 6.1]] and the novelty argument you already met in [[bigdata-planning|Stage 7.5]] — and AI makes it sharper, not weaker.

A second intuition. Suppose the AI planner really does take over the whole economy and abolishes exchange. The next morning it opens its training data and finds that the data **have stopped updating**. Every price it ever learned was the outcome of someone who owned something haggling with someone else who owned something. No private means of production, no exchange; no exchange, no prices; no prices, none of the input that made the AI look so clever. **An AI that abolishes the market abolishes its own food supply.** That is Mises's 1920 argument in modern dress, and it depends neither on compute nor on how smart the AI is.

But Austrians have to be honest too. [[bigdata-planning|Stage 7.5]] already admitted that better data push the Coasean boundary of the firm outward — firms can be bigger, inventories thinner. AI pushes further: one model can do the scheduling that used to take a company hundreds of analysts. **Inside the firm, AI really is a better planner.** That is not a failure of the market; it is a product of it. Firms can calculate because they are bathed in outside prices.

A last intuition, and the newest piece of this lesson: “alignment.” Every discussion of AI planning quietly assumes we know what the system should optimize. But economics has said since [[what-economics-studies|Stage 0.1]] that **ends are subjective, plural and in conflict.** Telling an AI to “maximize social welfare” means telling it to decide, on everyone's behalf, what welfare is. That is not an engineering problem. It is the old problem in a new coat: **whose ends?**

**In this lesson we break it into six pieces:**

- **① The strongest version: from Lange's computer to “AI planning”**
- **② The calculation reply: prices are products of exchange; an AI that abolishes exchange abolishes its own input**
- **③ The knowledge reply: LLMs compress what has already been said**
- **④ Novelty: preferences and products are created in action**
- **⑤ The real concession: AI plans better inside firms, and the Coasean boundary moves out**
- **⑥ Alignment is a knowledge problem; and the line between market-augmenting and market-replacing AI**

## @mechanics
### ① The strongest version: from Lange's computer to “AI planning”

The calculation debate has already been reborn three times: Mises versus the socialists in 1920 ([[mises-1920|Stage 7.1]]), Lange versus Hayek in 1936–40 ([[lange-market-socialism|Stage 7.3]]), and big data in the 2010s ([[bigdata-planning|Stage 7.5]]). The fourth incarnation brings three genuinely new things, and each deserves to be stated precisely, because each **does** change the force of some part of the old argument:

- **Compute.** Lange's 1967 vision of solving the equations “in less than a second” is, arithmetically, done. A single data center performs more multiplications in a day than humanity had done in total before 1990. The layer of the old argument that said “too many equations to solve” (Hayek mentioned it in passing in 1940; it was never the main point) is simply dead.
- **Sensing.** Barcodes, RFID, phone location, point-of-sale terminals, satellite imagery. A planner no longer depends on factories reporting their output — it can “see” the shelves. The old objection that “reported data will lie” (the soft budget constraint of [[lange-market-socialism|Stage 7.3]]) is half-neutralized: physical quantities can now be observed, even though what they are *worth* still cannot.
- **Compression and generation.** A large language model compresses almost the entire body of public text into something that can be questioned. It can write demand-forecasting code, read ten thousand annual reports, simulate a consumer's reaction. The layer of the old argument that said “knowledge is scattered across a billion minds and cannot be centralized” seems, for the first time, to have met a real opponent.

Stack the three and the strongest version reads: **a system that has read everything, sees everything and can compute anything replaces the market — which gropes toward allocation through trial, waste and bankruptcy — and issues the allocation directly.** Chinese discussions of “AI planning” emphasize national data platforms and the industrial internet; *The People's Republic of Walmart* emphasizes that Walmart already allocates hundreds of billions of dollars internally without a market; the Silicon Valley “too cheap to meter” story emphasizes that once the marginal cost of intelligence goes to zero, scarcity gets “solved.” All three share a premise: **allocation is a computational problem, and computation is becoming free.**

The Austrian reply is not that computation does not matter. It is that **allocation was never mainly a computational problem.** Let us take it apart layer by layer.

### ② The calculation reply: prices are products of exchange; an AI that abolishes exchange abolishes its own input

Return to the precise form of Mises's 1920 argument in [[mises-1920|Stage 7.1]]. It was never “the planner cannot do the sums.” It was: **rational allocation requires a common unit in which heterogeneous means can be compared; that unit is the money price; money prices for means of production can only arise from exchange of means of production; and exchange presupposes that someone owns them.** Abolish private ownership of the means of production → no market for them → no prices for them → no economic calculation. It is a chain of logic, and nowhere on the chain is there a link called “compute.”

Where does AI enter that chain? It is a **calculating engine**, sitting at the position “after prices exist.” Give it prices and it computes astonishing things; withhold prices and all it can return is the [[mises-1920|Stage 7.1]] list of physical quantities with no common denominator — ten thousand tons of steel, three thousand engineer-hours, five hundred machines — followed by the question: which of these two production lines is more economical? Without prices, “economical” has no definition.

Someone will object: the AI can **estimate** shadow prices, the way Lange's trial-and-error method did — raise the price where there is shortage, lower it where there is surplus. [[lange-market-socialism|Stage 7.3]] covered the trouble with that road; the AI version adds a more interesting one: **estimate from what data?** Today's LLMs “understand” prices because the training corpus contains decades of market prices, financial statements and contracts — every one of them the sediment of **haggling between private owners**. The moment the planner takes over and abolishes exchange, the training data freeze at the moment of takeover. In year one the old prices still roughly work; by year five, technology has changed, deposits have depleted, the population has aged, the old prices grow ever less relevant and new ones have nowhere to come from. **It is driving on a map that no longer updates.**

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">The AI planner's input loop: abolish exchange and you cut your own data source</text><g><rect x="30" y="60" width="150" height="54" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="105" y="82" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">Privately owned means</text><text x="105" y="100" text-anchor="middle" font-size="10.5" fill="var(--muted)">someone owns, someone bears loss</text></g><g><rect x="245" y="60" width="150" height="54" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="320" y="82" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">Exchange and haggling</text><text x="320" y="100" text-anchor="middle" font-size="10.5" fill="var(--muted)">billions of times a day</text></g><g><rect x="460" y="60" width="150" height="54" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="535" y="82" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">Money prices</text><text x="535" y="100" text-anchor="middle" font-size="10.5" fill="var(--muted)">common unit, calculable</text></g><path d="M180 87 L245 87" stroke="var(--orange)" stroke-width="2" marker-end="url(#b1)"/><path d="M395 87 L460 87" stroke="var(--orange)" stroke-width="2" marker-end="url(#b1)"/><defs><marker id="b1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="var(--orange)"/></marker><marker id="b2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="var(--blue)"/></marker></defs><g><rect x="245" y="180" width="150" height="54" rx="8" fill="var(--blue-soft)" stroke="var(--blue)"/><text x="320" y="202" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink)">AI planner</text><text x="320" y="220" text-anchor="middle" font-size="10.5" fill="var(--muted)">trained on prices, computes allocation</text></g><path d="M535 114 L535 207 L395 207" fill="none" stroke="var(--blue)" stroke-width="2" marker-end="url(#b2)"/><text x="450" y="250" font-size="10.5" fill="var(--blue)">training data = past prices</text><path d="M245 207 L105 207 L105 114" fill="none" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 4"/><text x="40" y="250" font-size="10.5" fill="var(--red)">“take over, abolish ownership”</text><text x="40" y="264" font-size="10.5" fill="var(--red)">→ first link cut</text><text x="320" y="288" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">Cut the first link and links two and three stop producing new data; the AI is left with a stale map</text></svg><figcaption>Mises 1920, AI edition: prices come from exchange between owners; the AI is a consumer of prices, not a producer. Market-replacing AI exhausts its own input.</figcaption></figure>

In numbers. Take a toy economy with 6 goods. The AI planner learned every price over 100 years of markets and allocates with 1% error. In year one after takeover the error is still about 1% — the old prices still serve. In year three a new raw material appears (say a battery chemistry); it has no price in the old data, so the AI guesses from “similar things,” misses by 20%, and three downstream industries inherit the miss. By year ten, not one price in its tables was generated during those ten years. That is exactly what the “novelty shock” button in this lesson's demo is built to show you.

### ③ The knowledge reply: LLMs compress what has already been said

Hayek's 1945 argument in [[hayek-knowledge|Stage 7.2]] was never about computation; it was about **knowledge**. Most economically relevant knowledge is “knowledge of the particular circumstances of time and place” — this machine sounds odd today, this customer says he wants A but really wants B, nobody walks down this street when it rains. It is scattered across a billion minds, and **most of it has never been written down** — much of it cannot be (what Michael Polanyi in 1966 called tacit knowledge: “we know more than we can tell”).

What is a large language model? An extraordinarily efficient compression of **what has been written down.** That is what makes it genuinely remarkable, and it is also exactly where its edge lies. Three kinds of knowledge, three very different performances:

- **Articulated knowledge** (textbooks, code, contracts, filings): the LLM is excellent, often beyond the average expert. On this layer Hayek did underestimate what could be centralized — he did not foresee that “put all written knowledge in one box” would actually be done.
- **Tacit knowledge** (the craftsman's feel, the salesperson's read of a client, the corner shop's sense of its neighborhood): the LLM reaches only the parts that were indirectly described. More important, **this knowledge is not static; it is updated by action every day** — that odd sound in the machine started this morning and is in no corpus anywhere.
- **Knowledge that does not yet exist**: what will be fashionable next year, how a new material performs in a new use, what a never-seen market will pay for a never-seen product. This knowledge is not **discovered**; it is **created** — by people who take risks to try things. It is not in the corpus because it is not anywhere.

The heart of Hayek's argument was not “too much knowledge to compute” but “**using knowledge requires its holder to decide on the spot**, and prices let those holders coordinate without understanding the whole.” LLMs changed the cost of centralizing the first kind of knowledge, barely touched the second, and did nothing to the third. **And profit and loss in an economy come overwhelmingly from the second and third.** [[data-new-oil|Stage 15.4]] said “data is not knowledge.” Add one more line here: **a corpus is not action.**

A footnote that is really a demonstration. LLM “hallucination” — confident generation where there is no basis — is not a bug in this story; it is an exhibit. Asked about something outside its training distribution, a model produces **something that looks like knowledge.** A planner that allocates resources on such output is not planning; it is dreaming, and it cannot easily tell the difference. [[ai-judgment|Stage 18.3]] returns to this.

### ④ Novelty: preferences and products are created in action

This layer comes from [[entrepreneur-alertness|Stage 6.1]]. It is the deepest of the three and the easiest to overlook in the AI version.

Mainstream economics treats preferences as **given**: consumers have utility functions, markets satisfy them, and in principle a planner could too. Austrians since Menger have not seen it that way: a person's valuation of a thing exists only once that thing **can be chosen.** In 2006 nobody “preferred the iPhone” — not because the preference was hidden, but because it **did not exist yet.** It was created in 2007 when the product appeared and people held it. Mises says the entrepreneur “anticipates” the future; more exactly, the entrepreneur **proposes** a future, and consumers vote with money on whether it stands.

The AI planner has a natural comeback: “I can generate new product ideas and simulate consumer reactions.” The first half is true — the cost of generating ideas is collapsing ([[ai-judgment|Stage 18.3]] asks what that means for entrepreneurs). The second half is where the trouble is: **a simulated consumer has only old preferences.** You can have a model role-play ten thousand consumers scoring a new product, but it plays the consumers in the corpus, with the preferences in the corpus. What real consumers do when they meet a real new product can be learned in exactly one way: build it, price it, see who buys. That is Hayek's “competition as a discovery procedure” of [[competition-process|Stage 6.2]] — **what is discovered did not exist before the discovery, so no model can compute it in advance.**

Put a number on it. Suppose the AI planner allocates the old world with 99% accuracy, but 5% of each year's output consists of “things that did not exist last year” (new products, new uses, new tastes), and that 5% grows within five years into 25% of the economy. On that 5% the planner's error rate is not 1%; it is close to guessing. Five years on, a quarter of the economy it manages consists of things it never knew would exist, and on that quarter every step is extrapolation from “similar things.” **The market does not need to know that 5% in advance — it only needs to let ten thousand entrepreneurs each bet on one, and let consumers kill nine thousand nine hundred of them.**

### ⑤ The real concession: AI plans better inside firms, and the Coasean boundary moves out

Now the Austrians must concede, and concede for real.

Coase asked in 1937: if markets are so good, why don't firms use them internally instead of giving orders? Answer: using the market has transaction costs (search, bargaining, monitoring), and the firm draws its boundary where “the cost of organizing internally equals the cost of a market transaction.” [[bigdata-planning|Stage 7.5]] already granted that information technology lowered the cost of internal organization, so firms grew. AI amplifies that effect by an order of magnitude:

- A retailer that once needed hundreds of buyers restocking by feel now runs one model forecasting demand and moving stock for every store.
- A multinational manufacturer whose supply chain was coordinated in quarterly meetings can now re-plan by the hour.
- The decision “outsource this or do it ourselves” once took weeks of negotiation; the cost of drafting contracts, comparing bids and checking compliance is falling.

The conclusion is that **the Coasean boundary will keep moving outward**: some activities once coordinated by markets will be pulled inside firms and planned with AI. This is real, observable, and something Austrians should welcome — because it does not violate [[mises-1920|Stage 7.1]]. The reason was given in [[bigdata-planning|Stage 7.5]]: **firms plan inside the price system.** Walmart's model knows what a case of detergent in the Dallas warehouse is “worth” because it has outside purchase prices, retail prices, freight rates and rents — all market prices. Remove them and the model collapses instantly into a list of physical quantities.

Peter Klein's 1996 paper “Economic Calculation and the Limits of Organization” states it most precisely: **the limit on how large a firm can grow is not managerial capacity; it is whether its internal activities still have outside prices to refer to.** When a firm grows so large that one of its internal inputs **no longer has an outside market** (it is the only producer and the only user), it loses the ability to calculate for that activity — it becomes, for that activity, a small socialism. AI cannot fix that, because what it needs is precisely the outside price that has vanished.

So the exact statement of the concession is: **AI moves the boundary between firm and market; it does not abolish the boundary; and the far side of the boundary must still be a market, or the planning on the near side has nothing to calculate with.** The demo's toggle “planner gets live prices from a market” draws that line: flip it on and the planner's error vanishes — not because it got smarter, but because it got its input back.

### ⑥ Alignment is a knowledge problem; and the line between market-augmenting and market-replacing AI

**Alignment** is the AI field's term for making a system's behavior match our intentions. In the context of “AI planning” it exposes a problem that was planted in [[what-economics-studies|Stage 0.1]]: **who is “we,” and what is the “intention”?**

Economics begins from the fact that ends are subjective, incommensurable across people, and frequently in conflict ([[subjective-value|Stage 1.2]]). A system that allocates for an entire economy must have an objective function — “maximize GDP,” “maximize happiness,” “minimize inequality.” Each choice is a value judgment made **on everyone's behalf**: GDP does not count the afternoon you spent with your child; who measures “happiness”; along which dimension is “equality” defined? No quantity of data dissolves this, because data can only tell you what people **chose in the past among the options they had**, never how their ends **ought** to be summed — Arrow's impossibility theorem of 1951 proves the same thing by a different road. The market's answer is disarmingly simple: **don't sum.** Each person chooses with their own money, at their own margin, by their own ranking; prices convey only “how much others would give up for this” and never rule on whose ends are nobler. That is the core of the spontaneous order of [[spontaneous-order|Stage 7.4]]: order does not need a shared purpose.

So “alignment,” applied to economic allocation, has an Austrian translation: **the alignment problem is the knowledge problem's value-side twin.** You not only lack everyone's means and constraints (Hayek); you also lack, and have no right to prescribe, everyone's ends (Mises's subjectivism). Telling a system to “align with human values,” when “humans” are billions of conflicting ends, is a sentence with no unique solution.

Which brings us to the most practical distinction in this lesson. **There are two ways to use AI:**

- **Market-replacing**: substitute the model's output for prices and exchange, and issue allocations directly. This road hits the four walls of ②, ③, ④ and ⑥, and the harder it pushes, the faster it exhausts its input.
- **Market-augmenting**: give the model to **participants** as a tool — to discover prices faster, forecast demand more accurately at given prices, match supply and demand more cheaply, write contracts at lower cost. On this road AI is a capital good ([[ai-capital-good|Stage 18.2]]); it makes the discovery procedure of [[competition-process|Stage 6.2]] run faster and gets the local knowledge of [[hayek-knowledge|Stage 7.2]] into prices sooner. Today's dynamic pricing, demand forecasting, recommendation systems and automated market-making almost all live here.

The difference is not technical. It lies in **who owns the resources, who bears the loss, and whether prices are still being generated.** The same model placed inside a firm to schedule inventory at market prices is augmentation; placed over an economy that has abolished prices to issue orders to everyone is replacement. [[agent-economies|Stage 18.6]] traces this line through algorithmic pricing and AI agents; [[ai-judgment|Stage 18.3]] traces it through judgment.

The whole lesson in one sentence: **AI is the most powerful calculator and the largest library in history, but the allocation problem was never about arithmetic or shelving. It is about whose exchanges generate prices, whose actions update knowledge, who bears the risk of creating what is new, and who sets the ends.** None of those four “whos” is a model.

## @analogy
Think of the economy as a **city under constant reconstruction**, and of prices as **the city's map.**

An AI planner is a driver handed the most detailed map ever made: every street, every traffic light, every shop's opening hours. As long as the city stays put, it drives better than anyone. But this city has one peculiarity: **the map is drawn by millions of residents opening doors, closing doors, moving house and starting shops every day.** The driver's first decision is “for efficiency, residents may no longer open shops on their own; I will arrange everything.” From that moment, nobody adds anything to the map. In week one the map is still accurate; in year one, new roads are missing; by year five it is navigating, with total confidence and an old map, through a city it no longer recognizes. It did not get dumber. It **switched off the mapmakers.**

Now suppose the same driver is instead every resident's satnav — you say where you want to go, it finds the fastest route, and it draws the road you took back onto the shared map in real time. The city flows better than ever. That is the difference between market-augmenting and market-replacing AI: **not how clever the driver is, but whether anyone is still drawing the map.**

And the alignment problem is this: millions of people in this city want to go to millions of different places. Ask the driver to decide for everyone “where we should all go,” and it must first decide for everyone what counts as a place worth going to — which is not something navigation can settle. [[what-economics-studies|Stage 0.1]] said it at the start: ends belong to each person.

## @misconceptions
- **“Mises said planners can't do the math; now the math is cheap, so he was wrong.”** — Mises's 1920 argument was never about arithmetic but about **inputs**: prices for means of production can only arise from exchange between private owners. AI consumes prices; it does not produce them. Abolish exchange and unlimited compute can only process a frozen table of old prices. “Too many equations” was Lange's later paraphrase, never the Austrian core.
- **“LLMs have read all human knowledge, so Hayek's dispersed knowledge has been centralized.”** — LLMs compress knowledge that was **written down**. Hayek's knowledge of time and place is mostly never written and is updated by action every day, and profit and loss come mostly from that and from knowledge that **does not yet exist** (new products, new preferences). A corpus is not action.
- **“Walmart and Amazon plan hundreds of billions internally without markets, so planning works — just socialize them.”** — They plan **inside** the price system: purchase prices, retail prices, freight and rent are outside market prices, and their models calculate with them. Socialize them and abolish the outside market, and the models collapse into quantity lists with no common unit. AI moves the Coasean boundary; it does not remove it.
- **“Austrians reject every use of AI in allocating resources.”** — No. This lesson separates market-replacing from market-augmenting AI. Handing models to participants (demand forecasting, dynamic pricing, matching, automated market-making) speeds up the discovery procedure and gets local knowledge into prices faster. What Austrians reject is substituting model output **for** prices and exchange.
- **“Just align the AI to ‘human values’ and it can allocate for society.”** — “Human values” are billions of conflicting, incommensurable ends with no unique way to sum them (Arrow proved as much by another route in 1951). Alignment is the value-side twin of the knowledge problem: you lack not only everyone's means but any authority over everyone's ends. The market's answer is not to sum — let each person choose at their own margin.

## @quiz
1. An AI planner takes over the economy and abolishes private ownership and exchange of the means of production. On the AI version of Mises's 1920 argument, what is its most fundamental difficulty?
   - [ ] Not enough compute for so many equations
   - [x] The prices it was trained on came from exchange between owners; once exchange is abolished, new prices have nowhere to come from, leaving a table of stale ones
   - [ ] Workers will slack off
   - [ ] It cannot read sensor data
   > Mises's argument is about **inputs**, not compute: prices for producer goods arise only from their exchange. AI consumes prices; market-replacing AI exhausts its own input.

2. Which kind of knowledge is hardest for a large language model to reach, yet is where market profit mostly comes from?
   - [ ] Articulated knowledge in textbooks and contracts
   - [ ] Data in public financial statements
   - [x] Tacit, local knowledge updated daily by action, plus knowledge of products and preferences that do not yet exist
   - [ ] Programming-language syntax
   > LLMs excel at compressing what was written down; Hayek's knowledge of time and place is mostly unwritten and constantly updated, and novelty is in no corpus until it is created.

3. “AI makes firms plan better internally and pushes the Coasean boundary outward.” What is the precise Austrian qualification of this concession?
   - [ ] It shows markets can be replaced step by step
   - [x] Firms plan inside the outside price system; a moving boundary is not a vanishing one, and the far side must still be a market or internal planning has nothing to calculate with
   - [ ] It holds only for small firms
   - [ ] It has nothing to do with the calculation debate
   > Klein (1996): the limit on firm size is whether internal activities still have outside prices to refer to — exactly the input AI needs.

4. Why do Austrians call “let AI maximize social welfare to allocate resources” the value-side version of the knowledge problem?
   - [ ] Because welfare data are too big to store
   - [x] Because ends are subjective, plural and conflicting with no uniquely correct way to sum them; any objective function is a value ruling on everyone's behalf
   - [ ] Because AI is not smart enough
   - [ ] Because governments would refuse
   > From [[what-economics-studies|Stage 0.1]]'s subjective ends to Arrow's theorem, the question is always “whose ends?” The market's answer is not to sum; prices only convey what others would give up.

5. Which of the following is market-augmenting rather than market-replacing AI?
   - [ ] Abolishing prices and having a model issue nationwide allocation orders
   - [x] A retailer using a model to forecast store-level demand at market prices and move inventory accordingly
   - [ ] Using model output to replace all wage bargaining
   - [ ] Having a model decide what consumers “really” need and distribute accordingly
   > The line is drawn by who owns the resources, who bears losses and whether prices are still being generated. Forecasting and scheduling at market prices is a participant's tool that speeds the discovery procedure.

## @further
- [Mises, Economic Calculation in the Socialist Commonwealth (1920), full text (Mises Institute)](https://mises.org/library/book/economic-calculation-socialist-commonwealth)
- [Hayek, The Use of Knowledge in Society (1945), full text (Econlib)](https://www.econlib.org/library/Essays/hykKnw.html)
- [Peter G. Klein, Economic Calculation and the Limits of Organization (1996) — the classic paper on firm boundaries and calculation](https://mises.org/library/economic-calculation-and-limits-organization)
- [Econlib Encyclopedia: Socialism (Robert Heilbroner) — includes the calculation debate and Lange's computer claim](https://www.econlib.org/library/Enc/Socialism.html)
- [Cato Institute research on artificial intelligence and economic policy](https://www.cato.org/research/artificial-intelligence)
