---
id: monopoly-question
prereqs: competition-process
demo: monopoly-lens
---

# The Monopoly Question: Why Austrians Don't Fear 'Big'

## @hook
“Monopoly” is the most abused word in economics: a company reaches 70% of a market, the newspapers call it a monopolist, and the demand goes up to break it apart. Austrians ask a different question: **how did it get to 70%?** If through a government license, a tariff, a law that forbids others from entering — that is a monopoly, and the only kind that means anything. If by being cheaper, being better, and being re-elected by consumers every day — then it is not a monopoly; it is the **winner** of a competition, liable to be replaced by the next winner at any moment. This lesson first states the mainstream theory of monopoly at full strength, then explains why Rothbard, Kirzner and Armentano think “market monopoly” cannot stand up logically — and admits candidly that Austrians themselves (Mises versus Rothbard) have an unfinished argument here.

## @intuition
You have heard the story: a company crushes every rival, then raises prices at will, and consumers have nowhere to go. The textbook gives it a tidy mathematical form — the monopolist restricts output to the point where “marginal revenue equals marginal cost,” the price sits above the competitive level, and a slice of value that could have been created vanishes: the **deadweight loss**. The whole case for antitrust law rests on that diagram: the government must either break the firm up or regulate its price.

The diagram is logically correct. Austrians do not dispute its mathematics. They ask three more basic questions.

**First: how do you know which price is the “competitive price”?** The textbook says “marginal cost.” But in the real world, whose marginal cost? Every firm's costs differ ([[competition-process|Stage 6.2]] showed that cost is one of the things competition exists to discover); and if every firm priced at marginal cost, who would pay for research, factories, and failed experiments? Without an observable “competitive price,” you cannot say a price is “above the competitive price” — **the concept of a “monopoly price” needs a ruler that does not exist.** This is the core argument of Chapter 10 of Rothbard's *Man, Economy, and State*.

**Second: how did the firm get big?** There are two utterly different ways. One is **consumer votes** ([[profit-loss|Stage 6.3]]): it is cheap, good and fast, and people pushed it up with their money; that position must be won again every day, and the moment a newcomer does better, the firm goes the way of Blockbuster. The other is **state grant**: licenses, patents, tariffs, franchises, “certificates of need” — the law forbids others to enter. The Austrian definition: **monopoly = an exclusive privilege granted by the state**; nothing else earns the name. That definition is not an Austrian invention — it is the original meaning of “monopoly” in seventeenth-century English common law (a royal grant of the sole right to sell salt, for instance); economists later swapped it for “market share.”

**Third: what happens after the breakup?** If a firm grew large by consumer votes, breaking it up cancels the votes consumers cast — they all chose it precisely because it served them best. Dominick Armentano, in *Antitrust and Monopoly* (1982), re-examined the most famous American antitrust cases one by one, and concluded that **in the cases he studied, the defendants were almost all cutting prices, expanding output and innovating during the very period they were prosecuted** — antitrust law punished not firms that harmed consumers, but firms that competed too successfully.

This lesson does not say “big companies are always innocent.” The Austrian position is more precise: **“big” is not evidence; “is entry free?” is the test.** And candidly: Austrians do not have a unified answer to whether a “monopoly price” can exist on a free market — Mises thought it could (under specific conditions); Rothbard thought the concept could not even be defined. Block ⑤ covers that dispute, and [[internal-debates|Stage 14.3]] places it in the wider map of Austrian internal debates.

The tool from this lesson comes back repeatedly: in [[taxes-regulation|Stage 8.3]] on licensing you will see it is simply “state-granted monopoly”; in [[platforms-winner|Stage 15.2]] on platform “winner-take-all” you will hold the “is entry free?” ruler against Google, Amazon and WeChat; in [[bitcoin-regression|Stage 17]] on Bitcoin you will meet a new version of the question — does concentration of mining hashpower count as monopoly?

**In this lesson we break it into five pieces:**

- **① The steelman: neoclassical monopoly theory and the case for antitrust**
- **② Rothbard: no competitive benchmark, no identifiable “monopoly price”; monopoly = state-granted privilege**
- **③ Kirzner and contestable markets: resource monopoly versus entrepreneurial position**
- **④ Armentano's cases: Standard Oil, ALCOA, IBM, Microsoft**
- **⑤ The internal dispute and today's test: Mises vs Rothbard, big ≠ bad, consumer benefit as the criterion**

## @mechanics
### ① The steelman: neoclassical monopoly theory and the case for antitrust

First, the other side at full strength. The neoclassical theory of monopoly runs like this:

- Under perfect competition firms are price-takers; price is driven to marginal cost (P = MC), output is maximal, and consumer surplus is maximal.
- A monopolist faces the entire downward-sloping demand curve. To sell one more unit it must not only accept a lower price on that unit but lower the price on **every** unit — so its **marginal revenue** (MR) lies below the price.
- Profit maximization requires MR = MC. Since MR < P, the monopolist stops where P > MC: **output below the competitive level, price above it.**
- For the output that was cut, consumers' willingness to pay exceeded the cost of production — those trades could have happened and did not. The lost value is the **deadweight loss**.

In numbers. Let demand be \(P = 100 - Q\) and marginal cost a constant 20:

$$
\begin{aligned}
\text{Competition:}\quad & P = \text{MC} \;\rightarrow\; 100 - Q = 20 \;\rightarrow\; Q = 80,\ P = 20 \\
& \text{consumer surplus} = \tfrac{1}{2} \times 80 \times 80 = 3{,}200 \\[6pt]
\text{Monopoly:}\quad & \text{MR} = 100 - 2Q = 20 \;\rightarrow\; Q = 40,\ P = 60 \\
& \text{profit} = (60 - 20) \times 40 = 1{,}600 \\[6pt]
& \text{consumer surplus under monopoly} = \tfrac{1}{2} \times 40 \times 40 = 800 \\
& \text{deadweight loss} = \tfrac{1}{2} \times 40 \times 40 = 800
\end{aligned}
$$

<figure><svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">The textbook monopoly diagram: P = 100 − Q, MC = 20</text><line x1="80" y1="280" x2="600" y2="280" stroke="var(--line)" stroke-width="1.5"/><line x1="80" y1="40" x2="80" y2="280" stroke="var(--line)" stroke-width="1.5"/><text x="600" y="298" text-anchor="end" font-size="10" fill="var(--muted)">quantity Q</text><text x="76" y="40" text-anchor="end" font-size="10" fill="var(--muted)">price P</text><polygon points="288,136 288,232 496,232" fill="var(--red-soft)" stroke="var(--red)" stroke-width="1" stroke-dasharray="3 2"/><rect x="80" y="136" width="208" height="96" fill="var(--orange-soft)" opacity=".8"/><polygon points="80,40 80,136 288,136" fill="var(--blue-soft)" opacity=".8"/><line x1="80" y1="40" x2="600" y2="280" stroke="var(--blue)" stroke-width="2.5"/><text x="560" y="255" font-size="10.5" fill="var(--blue)" font-weight="600">demand P = 100 − Q</text><line x1="80" y1="40" x2="340" y2="280" stroke="var(--blue)" stroke-width="1.5" stroke-dasharray="5 3"/><text x="300" y="262" font-size="10" fill="var(--blue)">MR = 100 − 2Q</text><line x1="80" y1="232" x2="600" y2="232" stroke="var(--green)" stroke-width="2.5"/><text x="560" y="226" font-size="10.5" fill="var(--green)" font-weight="600">MC = 20</text><line x1="288" y1="136" x2="288" y2="280" stroke="var(--muted)" stroke-dasharray="3 3"/><line x1="80" y1="136" x2="288" y2="136" stroke="var(--muted)" stroke-dasharray="3 3"/><circle cx="288" cy="136" r="4" fill="var(--orange)"/><text x="288" y="296" text-anchor="middle" font-size="10" fill="var(--ink)">Q = 40</text><text x="74" y="140" text-anchor="end" font-size="10" fill="var(--ink)">60</text><text x="74" y="236" text-anchor="end" font-size="10" fill="var(--ink)">20</text><circle cx="496" cy="232" r="4" fill="var(--green)"/><text x="496" y="296" text-anchor="middle" font-size="10" fill="var(--ink)">Q = 80</text><text x="184" y="190" text-anchor="middle" font-size="11" font-weight="700" fill="var(--orange-ink)">monopoly profit 1,600</text><text x="150" y="100" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--blue)">consumer surplus 800</text><text x="350" y="205" text-anchor="middle" font-size="11" font-weight="700" fill="var(--red)">deadweight loss 800</text><text x="320" y="316" text-anchor="middle" font-size="10.5" fill="var(--muted)">The Austrian question: that flat “MC = 20” line — where does it come from in the real world? Whose cost? Observed by whom?</text></svg><figcaption>The neoclassical monopoly diagram is logically sound under its assumptions: output cut from 80 to 40, price raised from 20 to 60, the red triangle a social loss. The Austrian criticism is aimed not at the geometry but at whether the “competitive benchmark line” actually exists.</figcaption></figure>

From this follows the case for antitrust: since monopoly causes a deadweight loss of 800, government should restore competition — break the firm up (one into many), block mergers, ban “exclusionary conduct” (predatory pricing, tying, exclusive dealing), or regulate the price directly. The Sherman Act of 1890, the Clayton Act of 1914 and EU competition law are all children of this logic.

The theory contains a genuine insight: **a seller who can keep every entrant out really can harm consumers by restricting output to raise price.** Austrians accept that entirely. The disagreement is: **can such a seller exist on a free market? And where one does exist, who is keeping the entrants out?**

### ② Rothbard: no competitive benchmark, no identifiable “monopoly price”; monopoly = state-granted privilege

In Chapter 10 of *Man, Economy, and State* (1962) Rothbard pulled the rug out. He did not argue “monopoly prices are bad”; he argued that **on a free market the concept of a “monopoly price” cannot be defined.** Three steps:

**Step one: every seller “restricts output.”** The diagram says the monopolist “cuts output from 80 to 40.” But every seller — down to the smallest bakery — decides “how much to produce” and stops where “one more would lose money.” A bakery that bakes 200 loaves a day rather than 300 is also “restricting.” To call some output a “restriction” you must first know the “unrestricted” output — and that number exists only in the perfect-competition model, which, as [[competition-process|Stage 6.2]] showed, describes a world that does not exist.

**Step two: “marginal cost” is not an observable benchmark.** In the diagram MC = 20 is a flat line anyone can see. In the real world costs are each firm's own, change over time, and embody judgments about the future ([[entrepreneur-alertness|Stage 6.1]]). Moreover, if firms priced at marginal cost, any firm with fixed costs would lose money (the marginal cost of copying software is zero — [[zero-marginal-cost|Stage 15.3]]). So the test “P > MC means monopoly” would convict nearly every firm in existence.

**Step three: only one kind of monopoly can therefore be clearly defined.** Rothbard returns to the word's original meaning — in *Darcy v. Allein* (1603) an English court struck down the Queen's grant to Darcy of the sole right to sell playing cards, and from then on “monopoly” in common law meant **an exclusive privilege granted to someone by the state.** That definition is operational and observable: open the statute book and look for a clause saying “only X may do this.” Licenses, patents, tariff quotas, franchises, import permits, occupational entry rules — **these are monopolies, and every one of them can produce exactly the harm in the textbook diagram**, because they really do keep entrants out.

Rothbard's conclusion is therefore sharp: **antitrust law is aimed at the wrong target.** It stares at market share (a number with no meaning on a free market) while ignoring the real monopolies — the privileges government itself issues. More ironically still, antitrust law often becomes a rent-seeking tool: incumbents use it to attack more successful rivals (the public-choice lens of [[economics-of-state|Stage 8.4]]).

### ③ Kirzner and contestable markets: resource monopoly versus entrepreneurial position

In Chapter 3 of *Competition and Entrepreneurship* Kirzner added a refinement. He distinguishes two situations:

- **Resource monopoly**: someone owns the **entire supply** of a resource — the world's only spring of a particular mineral water, say. This is the only monopoly that makes sense on a free market: others would like to enter, but cannot conjure a second spring. Kirzner concedes it can yield a “monopoly rent” to the owner. But notice how rare it is — almost every resource has substitutes (another mineral water, tap water, beer), and competition among substitutes is the entrepreneurial process itself.
- **Entrepreneurial position**: a firm is the **only** seller of some product — not because others cannot, but because others **have not yet**. It invented the product, or does it better than anyone. That is **not a monopoly**, because entry is free: every dollar of its profit is an invitation to other entrepreneurs ([[profit-loss|Stage 6.3]]), and every day its position exists it is winning a discovery race.

This distinction received an unexpected echo from inside mainstream economics in 1982: William Baumol, John Panzar and Robert Willig proposed the theory of **contestable markets** — as long as entry and exit are cheap enough, even a market with **one** firm will not see a price above the competitive level, because potential entrants will “hit and run”: enter when the price is high, grab the profit, and leave when the price falls. **What disciplines a firm is not the number of existing rivals but the freedom of potential rivals to enter.** That is almost exactly Kirzner's point restated in neoclassical language.

Combining the two lines, the Austrian test of a large firm is not “how big is it,” “what share does it hold,” or “how high is its profit,” but **two questions**:
1. Does it own the entire supply of an irreplaceable resource? (Almost never.)
2. Is entry free — is there a law keeping potential rivals out? (If not, its position is being tested every day.)

### ④ Armentano's cases: Standard Oil, ALCOA, IBM, Microsoft

From theory to history. In *Antitrust and Monopoly: Anatomy of a Policy Failure* (1982), Armentano re-tried the landmark cases of American antitrust one by one. What follows is his reading — and note that we say “he argued,” because these cases remain contested.

**Standard Oil (broken up in 1911).** The textbook story is that Rockefeller crushed rivals with predatory pricing and then raised prices as a monopolist. Armentano pointed to the facts that refined kerosene prices **fell steeply and continuously** during Standard's rise (the figures he cites run from about 30 cents a gallon around 1870 to about 8 cents around 1885), and that by the time of the 1911 suit its share had already fallen from roughly 90% in the 1880s to about 65% — **more than a hundred new rivals were entering.** He argued that nothing in the court record showed Standard had ever restricted output to raise prices after gaining its share; it was broken up because it was too efficient.

**ALCOA (1945).** The most explicit case. Judge Learned Hand acknowledged in his opinion that ALCOA had committed no unlawful exclusionary act, yet found it guilty because it had “**anticipated every increase in demand and met it with new capacity**” — in other words, its offense was **expanding too fast and pricing too low, leaving no room for rivals.** Armentano argued this was antitrust logic exposing itself: the conduct punished was exactly what consumers most want firms to do.

**IBM (1969–1982).** The Justice Department sued IBM for monopolizing mainframe computers; the case ran thirteen years and generated tens of millions of pages, and in 1982 the Department itself dropped it as “without merit.” During those thirteen years the personal-computer market grew from nothing, and IBM's “monopoly” was dismantled by the market while it was still on trial. Armentano argued the case shows that antitrust can never keep pace with the discovery procedure.

**Microsoft (1998–2001).** Microsoft was accused of bundling Internet Explorer with Windows to squeeze out Netscape. The Austrian argument at the time (Armentano, and an open letter from a group of economists) was that bundling a free browser was a **gift** to consumers, not a harm; that entry was not blocked by any law; and that the verdict on who “won the browser war” belonged to users. History then took its course: Microsoft's browser share was taken by Firefox and Chrome, and the operating system's importance was diluted by smartphones — **once again, the market completed the “breakup” before the litigation ended.**

Armentano's summary: in the cases he examined, **none** demonstrated that the defendant restricted output and raised prices to consumers' detriment under free entry; on the contrary, defendants were almost all cutting prices, expanding and innovating, while plaintiffs were often failed competitors. Austrians should admit this conclusion is disputed — critics say he selected his cases and ignored long-run exclusionary effects — but it at least poses a question antitrust must answer: **are you punishing conduct that harms consumers, or conduct that competes too well?**

### ⑤ The internal dispute and today's test: Mises vs Rothbard, big ≠ bad, consumer benefit as the criterion

Now the unfinished argument. **Mises himself did not accept Rothbard's claim that “monopoly price” is undefinable.** In Chapter XVI of *Human Action*, Mises retained the concept: if a seller (or cartel) controls the entire supply of a good, and demand for that good is sufficiently inelastic, then by restricting output it can earn more net revenue than at the “competitive price” — and a monopoly price then exists, **even with no government involved.** Mises thought this rare on a free market (it requires control of total supply and the absence of substitutes) but logically possible.

Rothbard's reply: Mises's definition still needs a “competitive price” as its reference point, and that reference point cannot be observed on a free market — every seller picks a point on the demand curve, and there is no way to say which point is “competitive” and which “monopolistic.” So Rothbard discarded the whole concept and kept only one definition: state-granted privilege.

The dispute is unresolved to this day. Kirzner stands roughly in the middle: he accepts “resource monopoly” as meaningful (closer to Mises) but stresses that it is extremely rare and requires no antitrust law to handle (closer to Rothbard). [[internal-debates|Stage 14.3]] places this in the full map of Austrian internal disagreements. **Our suggestion: do not rush to pick a side; memorize the test** — was this firm's position voted in by consumers, or fenced in by law?

The ruler in use today:

- **Platforms ([[platforms-winner|Stage 15.2]]).** Google holds about 90% of search; nearly everyone in China uses WeChat — are they monopolies? Apply the test: is there a law forbidding anyone from building a search engine or a messaging app? No. Is their position tested every day? Yes — every single search can go elsewhere. Network effects ([[network-effects|Stage 15.1]]) genuinely raise the bar for entrants, a contemporary problem Austrians must take seriously; but a high bar is not a locked door (TikTok went from zero to a billion users in a few years).
- **Licensing ([[taxes-regulation|Stage 8.3]]).** Taxi medallions, occupational licenses, certificates of need — these are the structures in the textbook diagram that can restrict output and raise price, because entry is forbidden by law. Austrians hold that if antitrust fire is to be opened at all, it should be aimed here first.
- **Patents.** Another point of Austrian disagreement: a patent is a state-granted exclusive right (formally a monopoly), but its defenders argue it rewards innovation. Some Austrians (Rothbard, Kinsella) favor abolition; others favor retaining and shortening. We note only that it fits the definition of “state-granted privilege” and therefore deserves the same ruler.

The lesson in one sentence: **big is not a crime, share is not evidence, profit is not proof; the only test is whether entry is free and consumers benefit — and on a free market, the only thing that can lock the door is the law.**

## @analogy
Think of an industry as a **bridge across a city's river.**

One bridge was built by a company with its own money, and it charges a toll. It is the only bridge on the river, so it looks like a “monopoly.” But notice: **the riverbanks are open.** Anyone may build another bridge upstream or down, run a ferry, or pave a detour. The company knows this, so it sets its toll just low enough that nobody thinks a second bridge is worth building — in other words, **its price is disciplined by bridges that do not yet exist.** That is a contestable market, and Kirzner's “entrepreneurial position”: it is the only bridge today because it built first and built well, not because others may not build.

The other bridge is entirely different. The city council issued a charter: “For fifty years only this bridge may carry traffic on this stretch of river; any other shall be demolished.” Now the company can raise the toll to whatever residents will bear — not because its bridge is better, but because **the riverbanks have been fenced off.** This is the textbook monopolist: restricted output, higher price, deadweight loss, all present. And its shield is not its bridge; it is the charter.

The tragedy of antitrust is that it takes its ruler to the first bridge (“you are the only bridge on the river — 100% share — break it up!”) while ignoring the charter in the second company's hand — because the government signed that charter itself.

One layer further: what happens if the first company really does overcharge? Someone builds a second bridge, and the first company must cut its toll or go bankrupt — **the market completes the “breakup” on its own**, and far faster than any court (the IBM case ran thirteen years; the personal computer made the mainframe “monopoly” irrelevant in under ten).

This picture recurs later: the licenses of [[taxes-regulation|Stage 8.3]] are charters; whether the platforms of [[platforms-winner|Stage 15.2]] are the first bridge or the second depends on whether anyone has fenced the banks; and the Bitcoin mining pools of [[bitcoin-regression|Stage 17]] are a strange bridge indeed — their “share” is recomputed every ten minutes, and the banks are open to anyone with electricity and chips.

## @misconceptions
- **“High market share means monopoly.”** — Share is the result of competition, not its absence. Under free entry, a high share means consumers voted the firm up with their money, and they re-vote every day. The Austrian definition of monopoly is a state-granted exclusive privilege: open the statute book and look for a line saying “only X may do this.”
- **“Austrians deny that monopoly can harm consumers.”** — Austrians fully accept that a seller who can keep every entrant out can restrict output and raise price. The disagreement is over who can keep entrants out — on a free market almost nobody (substitutes, potential entrants, creative destruction), but the law can. So Austrians aim their fire at licenses, tariffs and charters, not at market share.
- **“Price above marginal cost shows market power.”** — By that standard every firm with fixed costs is a monopolist, software firms with zero marginal cost most of all ([[zero-marginal-cost|Stage 15.3]]). Marginal cost is not a flat line anyone can see; it is each firm's own, judgment-laden, ever-changing number — the “competitive price” benchmark cannot be observed on a free market.
- **“Austrians speak with one voice on monopoly.”** — The opposite. Mises kept the concept of a “monopoly price” (control of total supply plus inelastic demand); Rothbard discarded it as undefinable; Kirzner sits in the middle, accepting “resource monopoly” but stressing its rarity. This is a live internal Austrian dispute ([[internal-debates|Stage 14.3]]).
- **“Armentano proved antitrust was wrong in every case.”** — Armentano “argued” that in the cases he studied the defendants were mostly cutting prices, expanding and innovating, and the plaintiffs were often failed rivals; that conclusion is contested, and critics point to case selection and long-run exclusionary effects. Austrians should treat it as a powerful challenge, not a proven theorem.

## @quiz
1. Demand is P = 100 − Q and marginal cost is 20. On neoclassical theory, what output and price does the monopolist choose?
   - [ ] Q = 80, P = 20
   - [ ] Q = 50, P = 50
   - [x] Q = 40, P = 60
   - [ ] Q = 100, P = 0
   > MR = 100 − 2Q = MC = 20 → Q = 40; substituting into demand gives P = 60; profit (60−20)×40 = 1,600, deadweight loss ½×40×40 = 800. Austrians do not question this geometry; they question whether the “MC = 20 competitive benchmark line” is observable in the real world.

2. What is Rothbard's core reason for holding that a “monopoly price” cannot be defined on a free market?
   - [ ] Because monopolists conceal their prices
   - [x] Because every seller decides its output, and calling one output a “restriction” requires an observable “competitive output” that exists only in the perfect-competition model
   - [ ] Because price always equals marginal cost
   - [ ] Because consumers do not care about prices
   > A bakery that bakes 200 loaves instead of 300 is also “restricting.” To call an output a restriction you must know the unrestricted output — and that number comes from a world that does not exist ([[competition-process|Stage 6.2]]). So Rothbard keeps only one definable monopoly: state-granted exclusive privilege.

3. On what conclusion do contestable-market theory (Baumol et al., 1982) and Kirzner's “entrepreneurial position” agree?
   - [x] What disciplines a firm's pricing is not the number of existing rivals but the freedom of potential rivals to enter
   - [ ] There is competition only when the number of firms is large enough
   - [ ] Governments should regulate the prices of all sole sellers
   - [ ] Network effects necessarily produce monopoly
   > If entry and exit are cheap enough, even a single firm dares not price above the competitive level, or potential entrants will “hit and run.” That is Kirzner's point exactly: the sole seller is no monopolist as long as others “have not yet” rather than “cannot” enter.

4. What was Armentano's reading of the 1945 ALCOA case?
   - [ ] ALCOA was found guilty because it raised aluminum prices
   - [x] ALCOA was found guilty because it anticipated demand growth and met it with new capacity — i.e., it expanded too fast and priced too low to leave room for rivals
   - [ ] The ALCOA case was eventually dropped
   - [ ] ALCOA monopolized aluminum through a government charter
   > Judge Hand acknowledged ALCOA had committed no unlawful exclusionary act, yet found it guilty for “embracing every new opportunity.” Armentano argued this exposes antitrust logic: the conduct punished is exactly what consumers most want. Note this is “he argued” — the case remains contested.

5. What is the Austrian internal disagreement about whether a “monopoly price” can exist on a free market?
   - [ ] Mises and Rothbard both held that it cannot
   - [ ] Rothbard held it is common; Mises held it cannot exist
   - [ ] Kirzner held that all large firms are monopolists
   - [x] Mises held it can exist with control of total supply plus inelastic demand; Rothbard held the concept is undefinable and discarded it
   > An unfinished Austrian argument: Chapter XVI of Human Action retains the monopoly-price concept; Chapter 10 of Man, Economy, and State holds it requires an unobservable competitive benchmark and keeps only the “state-granted privilege” definition. Kirzner sits between them ([[internal-debates|Stage 14.3]]).

## @further
- [Rothbard, Man, Economy, and State, Chapter 10, “Monopoly and Competition” — the original argument that a monopoly price cannot be defined](https://mises.org/library/book/man-economy-and-state-power-and-market)
- [Mises, Human Action, Chapter XVI, “Prices,” Section 6, “Monopoly Prices” — Mises's own theory of monopoly price](https://mises.org/library/book/human-action)
- [Dominick Armentano, Antitrust and Monopoly: Anatomy of a Policy Failure (1982; 2nd ed. 1990) — the case-by-case re-examination](https://mises.org/library/book/antitrust-and-monopoly-anatomy-policy-failure)
- [Kirzner, Competition and Entrepreneurship (1973), Chapter 3 — resource monopoly versus entrepreneurial position](https://mises.org/library/book/competition-and-entrepreneurship)
- [Econlib Concise Encyclopedia: Antitrust — including contestable-market theory and the Chicago revision of antitrust](https://www.econlib.org/library/Enc/Antitrust.html)
