export default {
  id: "economics-of-state",
  stage: 8,
  order: 4,
  title: "The Economics of the State: Public Choice, War & Welfare",
  difficulty: "systems",
  prereqs: ["intervention-logic"],

  oneLiner:
    "The previous three lessons analysed what intervention **does**; this one asks a more basic question: **who are the intervenors, and why do they do it?** Mainstream policy analysis assumes a benevolent, omniscient “social planner.” The public choice school (Buchanan and Tullock, 1962) removes that assumption and analyses politics with the same tools used for markets — self-interest, incentives, constraints: voters are rationally ignorant, bureaus maximise budgets, lobbyists buy concentrated benefits and spread the costs over everyone. Austrians are allies of public choice but not the same thing: Mises's Bureaucracy (1944) shows that even if every bureaucrat were a saint, **an organisation without profit and loss cannot calculate**. The lesson also covers the state as the territorial monopolist of ultimate decision-making, the historical link between war and inflation, the incentive effects of the welfare state, and Hoppe's highly controversial critique of democracy — together with its critics.",

  intuition: `
Imagine two kinds of shop.

The first is an ordinary shop: if it is too dear you don't buy, if it is bad you go elsewhere, and if the owner loses money he closes. Every decision is graded by the profit and loss of Stage 6.3.

The second shop has three odd rules: **you must pay** (whether or not you buy); **you cannot switch shops** (unless you move to another country); **the owner never loses money** (the money is taken from you by force). It is called “the state.”

For a long time economics analysed only the first shop and treated the second as a “repairman” needing no analysis: when the market goes wrong, the government fixes it. **The entire contribution of public choice compresses into one sentence: the people in the second shop are the same kind of people as those in the first.** They do not become selfless and omniscient by walking into a government building. Politicians want re-election, bureaucrats want bigger budgets, lobbyists want rules that favour them — and the incentive structure those three face leads them, most of the time, to decisions that harm the whole, even when no one intends harm.

One number tells the story. Suppose a sugar-protection scheme makes 300 million consumers each pay about 10 more per year for sugar — 3 billion in total; of that, roughly 2 billion flows to a few thousand growers and processors and 1 billion evaporates in distortion (the deadweight loss of Stage 8.3). **The policy is a net loss to society. Will it pass?** Almost certainly. For any single consumer, studying sugar policy, writing to a legislator, or organising a protest to save 10 costs far more than 10 — so they **rationally choose ignorance**; the few thousand growers, each receiving hundreds of thousands a year, have every reason to hire lobbyists, fund campaigns, and organise the whole industry. **Concentrated benefits beat dispersed costs, every time.**

This is not a conspiracy theory; it is the arithmetic of incentives. And it explains the fuel of Stage 8.1's spiral: every intervention creates a set of concentrated beneficiaries who become the political force for keeping and escalating it.

Austrians add two contributions of their own. First, Mises pointed out as early as 1944 that the problem is not only incentives but **calculation**: a government agency, even staffed entirely by good people, has no profit and loss to tell it whether it is doing the right thing, so it can only run on rules and budgets — bureaucracy is not a character flaw of bureaucrats but the necessary form of an organisation without prices. Second, Rothbard and Hoppe pressed a question public choice rarely asks: **what is the state, exactly?** Their answer — an organisation that monopolises ultimate decision-making and taxation over a territory, the “judge in its own case” — turns “government failure” from a technical problem into a structural one.

The tools of this lesson become a fixed step in Stage 14.1's five-step method (“who benefits? who pays? who lobbied?”), and they will be needed in Stage 17.3 on central bank digital currencies: when an institution that monopolises money also acquires the ability to watch every transaction, what does public choice predict it will do?

**In this lesson we break it into five pieces:**

- **① Public choice: politics without romance**
- **② The Austrian supplement: Mises's Bureaucracy and the organisation that cannot calculate**
- **③ What the state is: the territorial monopolist of ultimate decision-making**
- **④ War, inflation and the welfare state: the two engines of state growth**
- **⑤ Hoppe's critique of democracy: a controversial thesis, and its critics**
`,

  mechanics: `
### ① Public choice: politics without romance

In *The Calculus of Consent* (1962) James Buchanan and Gordon Tullock did something radical for the time: **they carried the behavioural assumptions economists use for markets — self-interest, rationality, responsiveness to incentives — unchanged into the political arena.** Buchanan later called it “politics without romance.” Four core ideas:

**Rational ignorance (Downs, 1957).** The chance that one vote decides an election is near zero, while understanding a policy's true consequences takes dozens of hours. So the rational voter chooses not to know — not from stupidity, but because the return on knowing is so low. Political competition therefore revolves around what is **visible, simple and emotional** (the “seen” of Stage 1.4), not around economic consequences.

**Concentrated benefits, dispersed costs (Olson, 1965).** In *The Logic of Collective Action* Mancur Olson showed that small groups with concentrated interests organise more easily than large groups with diffuse ones. In numbers:

$$
A programme: tax 10 million taxpayers 10 each (cost 100 million)
Subsidise 1,000 firms 60,000 each (benefit 60 million)
Net social value = 60 million − 100 million = −40 million
Each taxpayer's motive to oppose: 10; each firm's motive to support: 60,000
→ It passes
$$

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Concentrated benefits vs dispersed costs: why a negative-value programme passes</text><text x="150" y="50" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--blue)">10 million taxpayers · each loses 10</text><g fill="var(--blue)" opacity=".55"><rect x="60" y="62" width="14" height="8" rx="1"/><rect x="78" y="62" width="14" height="8" rx="1"/><rect x="96" y="62" width="14" height="8" rx="1"/><rect x="114" y="62" width="14" height="8" rx="1"/><rect x="132" y="62" width="14" height="8" rx="1"/><rect x="150" y="62" width="14" height="8" rx="1"/><rect x="168" y="62" width="14" height="8" rx="1"/><rect x="186" y="62" width="14" height="8" rx="1"/><rect x="204" y="62" width="14" height="8" rx="1"/><rect x="222" y="62" width="14" height="8" rx="1"/><rect x="60" y="74" width="14" height="8" rx="1"/><rect x="78" y="74" width="14" height="8" rx="1"/><rect x="96" y="74" width="14" height="8" rx="1"/><rect x="114" y="74" width="14" height="8" rx="1"/><rect x="132" y="74" width="14" height="8" rx="1"/><rect x="150" y="74" width="14" height="8" rx="1"/><rect x="168" y="74" width="14" height="8" rx="1"/><rect x="186" y="74" width="14" height="8" rx="1"/><rect x="204" y="74" width="14" height="8" rx="1"/><rect x="222" y="74" width="14" height="8" rx="1"/><rect x="60" y="86" width="14" height="8" rx="1"/><rect x="78" y="86" width="14" height="8" rx="1"/><rect x="96" y="86" width="14" height="8" rx="1"/><rect x="114" y="86" width="14" height="8" rx="1"/><rect x="132" y="86" width="14" height="8" rx="1"/><rect x="150" y="86" width="14" height="8" rx="1"/><rect x="168" y="86" width="14" height="8" rx="1"/><rect x="186" y="86" width="14" height="8" rx="1"/><rect x="204" y="86" width="14" height="8" rx="1"/><rect x="222" y="86" width="14" height="8" rx="1"/><rect x="60" y="98" width="14" height="8" rx="1"/><rect x="78" y="98" width="14" height="8" rx="1"/><rect x="96" y="98" width="14" height="8" rx="1"/><rect x="114" y="98" width="14" height="8" rx="1"/><rect x="132" y="98" width="14" height="8" rx="1"/><rect x="150" y="98" width="14" height="8" rx="1"/><rect x="168" y="98" width="14" height="8" rx="1"/><rect x="186" y="98" width="14" height="8" rx="1"/><rect x="204" y="98" width="14" height="8" rx="1"/><rect x="222" y="98" width="14" height="8" rx="1"/><rect x="60" y="110" width="14" height="8" rx="1"/><rect x="78" y="110" width="14" height="8" rx="1"/><rect x="96" y="110" width="14" height="8" rx="1"/><rect x="114" y="110" width="14" height="8" rx="1"/><rect x="132" y="110" width="14" height="8" rx="1"/><rect x="150" y="110" width="14" height="8" rx="1"/><rect x="168" y="110" width="14" height="8" rx="1"/><rect x="186" y="110" width="14" height="8" rx="1"/><rect x="204" y="110" width="14" height="8" rx="1"/><rect x="222" y="110" width="14" height="8" rx="1"/><rect x="60" y="122" width="14" height="8" rx="1"/><rect x="78" y="122" width="14" height="8" rx="1"/><rect x="96" y="122" width="14" height="8" rx="1"/><rect x="114" y="122" width="14" height="8" rx="1"/><rect x="132" y="122" width="14" height="8" rx="1"/><rect x="150" y="122" width="14" height="8" rx="1"/><rect x="168" y="122" width="14" height="8" rx="1"/><rect x="186" y="122" width="14" height="8" rx="1"/><rect x="204" y="122" width="14" height="8" rx="1"/><rect x="222" y="122" width="14" height="8" rx="1"/><rect x="60" y="134" width="14" height="8" rx="1"/><rect x="78" y="134" width="14" height="8" rx="1"/><rect x="96" y="134" width="14" height="8" rx="1"/><rect x="114" y="134" width="14" height="8" rx="1"/><rect x="132" y="134" width="14" height="8" rx="1"/><rect x="150" y="134" width="14" height="8" rx="1"/><rect x="168" y="134" width="14" height="8" rx="1"/><rect x="186" y="134" width="14" height="8" rx="1"/><rect x="204" y="134" width="14" height="8" rx="1"/><rect x="222" y="134" width="14" height="8" rx="1"/><rect x="60" y="146" width="14" height="8" rx="1"/><rect x="78" y="146" width="14" height="8" rx="1"/><rect x="96" y="146" width="14" height="8" rx="1"/><rect x="114" y="146" width="14" height="8" rx="1"/><rect x="132" y="146" width="14" height="8" rx="1"/><rect x="150" y="146" width="14" height="8" rx="1"/><rect x="168" y="146" width="14" height="8" rx="1"/><rect x="186" y="146" width="14" height="8" rx="1"/><rect x="204" y="146" width="14" height="8" rx="1"/><rect x="222" y="146" width="14" height="8" rx="1"/><rect x="60" y="158" width="14" height="8" rx="1"/><rect x="78" y="158" width="14" height="8" rx="1"/><rect x="96" y="158" width="14" height="8" rx="1"/><rect x="114" y="158" width="14" height="8" rx="1"/><rect x="132" y="158" width="14" height="8" rx="1"/><rect x="150" y="158" width="14" height="8" rx="1"/><rect x="168" y="158" width="14" height="8" rx="1"/><rect x="186" y="158" width="14" height="8" rx="1"/><rect x="204" y="158" width="14" height="8" rx="1"/><rect x="222" y="158" width="14" height="8" rx="1"/><rect x="60" y="170" width="14" height="8" rx="1"/><rect x="78" y="170" width="14" height="8" rx="1"/><rect x="96" y="170" width="14" height="8" rx="1"/><rect x="114" y="170" width="14" height="8" rx="1"/><rect x="132" y="170" width="14" height="8" rx="1"/><rect x="150" y="170" width="14" height="8" rx="1"/><rect x="168" y="170" width="14" height="8" rx="1"/><rect x="186" y="170" width="14" height="8" rx="1"/><rect x="204" y="170" width="14" height="8" rx="1"/><rect x="222" y="170" width="14" height="8" rx="1"/></g><text x="150" y="200" text-anchor="middle" font-size="11" fill="var(--muted)">each square = 100,000 people</text><text x="150" y="218" text-anchor="middle" font-size="11" fill="var(--ink)" font-weight="600">total cost 100 million</text><text x="150" y="240" text-anchor="middle" font-size="10.5" fill="var(--red)">motive to oppose: 10 each → rational ignorance</text><text x="490" y="50" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--orange-ink)">1,000 firms · each gains 60,000</text><rect x="400" y="62" width="180" height="120" rx="8" fill="var(--orange)" opacity=".85"/><text x="490" y="118" text-anchor="middle" font-size="14" font-weight="700" fill="#fff">60 million</text><text x="490" y="138" text-anchor="middle" font-size="10.5" fill="#fff">(40 of the 100 million evaporates)</text><text x="490" y="200" text-anchor="middle" font-size="11" fill="var(--ink)" font-weight="600">total benefit 60 million</text><text x="490" y="218" text-anchor="middle" font-size="11" fill="var(--red)" font-weight="600">net social value: −40 million</text><text x="490" y="240" text-anchor="middle" font-size="10.5" fill="var(--green)">motive to support: 60,000 each → hire lobbyists</text><line x1="250" y1="130" x2="390" y2="130" stroke="var(--muted)" stroke-width="2" marker-end="url(#es-a)"/><text x="320" y="122" text-anchor="middle" font-size="10.5" fill="var(--muted)">coerced transfer</text><text x="320" y="280" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">Who has the stronger motive to organise, lobby and vote? — that decides the outcome, not the sign of the net value</text><defs><marker id="es-a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--muted)"/></marker></defs></svg><figcaption>A negative-value programme passes anyway: ten million people on the left each lose 10 and nobody cares; a thousand firms on the right each gain 60,000 and everybody cares. The U.S. sugar quota, ethanol mandates, and almost every tariff look like this.</figcaption></figure>

**Logrolling.** Three districts each have a project worth +10 to its own district and −6 to each of the other two (net −2 per project). Voted on separately, each project loses 2 to 1. But if the three legislators agree “you vote for mine, I vote for yours,” all three pass as a bundle — each district ends up with +10 − 6 − 6 = −2, **all three districts are worse off, and every legislator goes home announcing “I brought a project to our district.”** That is why omnibus spending bills are stuffed with local projects.

**Rent-seeking (Tullock, 1967; named by Krueger, 1974).** When the government can hand out a privilege worth 60 million, firms will spend money competing for it — lobbying, donations, lawyers, PR. Tullock's insight is that **this spending is itself a social loss**, because it redirects entrepreneurial alertness (Stage 6.1) from “discover what consumers want” to “discover what the government can give.” In the limit, total spending on the contest can approach the full value of the privilege — a 60 million subsidy attracts close to 60 million in lobbying, and both ends are waste.

The conclusion of public choice is not “politicians are bad,” but: **under this incentive structure, good people systematically produce bad policy.** Nor is it anti-democratic — Buchanan spent the second half of his career studying which constitutional rules could constrain these incentives (the doorway to the institutional analysis of Stage 9).

### ② The Austrian supplement: Mises's Bureaucracy and the organisation that cannot calculate

Austrians and public choice share methodological individualism (Stage 2.3) and a scepticism toward the “benevolent planner”; the two literatures have cited each other for decades (Buchanan was deeply influenced by Mises and Hayek and late in life described his method as close to the Austrians'). But three differences are worth stating:

**First, method.** Public choice uses neoclassical maximisation: voters maximise utility, bureaus maximise budgets (Niskanen, 1971), politicians maximise votes, and the model is solved for equilibrium. Austrians use praxeology: political action is purposeful action too, but its purposes are plural (power, prestige, ideas, money) and cannot be compressed into a differentiable function. Austrians therefore give more weight to **the role of ideas** — Mises insisted that in the long run rule rests on public opinion's acceptance, not on incentives alone; that is why Austrians rank changing ideas (writing, teaching) above designing incentives (Stage 14.2).

**Second, the level of the problem.** Public choice says the bureaucrat **does not want** to do the right thing (misaligned incentives). Mises, in *Bureaucracy* (1944), says something deeper: **even if he wanted to, he could not know what the right thing is.** The reason is the calculation problem of Stage 7.1:

- A firm's manager can delegate, because every division shares a common yardstick — profit and loss. A profitable branch is doing something right; a loss-making one, something wrong; headquarters need not know the details.
- A government agency has no such yardstick. How much the tax office “earns” says nothing about whether it is doing well; how much the police “lose” says nothing about whether they are doing badly. **Without prices there is no way to put an organisation's output and its inputs in the same unit and compare them.**
- So the agency can only be managed by **rules and budgets**: every action needs a regulation, every expenditure an approval, and subordinates cannot decide for themselves because there is no objective standard for judging their decisions. Mises's conclusion: all the features of bureaucracy — rigidity, red tape, unaccountability, the drive to avoid error rather than to achieve — are not personality flaws of bureaucrats but **the necessary form of an organisation that cannot calculate.** Put an entrepreneur inside it and he will become a bureaucrat too.

One corollary: **“run government like a business” is an empty phrase.** A business can be run like a business because it faces customers who can refuse to pay; an organisation that can tax will never have real profit and loss, however it is “reformed.”

**Third, normative stance.** Most public-choice scholars are constitutionalists: they believe the right rules can tame politics. Austrians disagree among themselves — from Hayekian constitutional liberalism to the Rothbard–Hoppe rejection of the state as such (Stage 14.3 lays out that fault line).

Niskanen's **budget-maximising model** (1971) deserves separate mention, because it turns Mises's insight into an operational prediction: an agency head (whose salary, power and prestige grow with the budget) facing a legislature that does not know the agency's true costs will push the budget as high as the legislature is willing to pay — well above the “optimal” size. Year-end spending sprees, perpetual “understaffing,” ever-widening missions are all predictions of this model. The demo's second panel lets you play the agency yourself.

### ③ What the state is: the territorial monopolist of ultimate decision-making

Public choice analyses incentives **inside** the state and usually does not ask what the state itself is. Rothbard, in *Anatomy of the State* (1974), gave a definition that Hoppe later sharpened:

**The state is an organisation that holds, over a given territory, a monopoly of ultimate decision-making (the last word in adjudication) and of taxation (obtaining revenue by coercion).**

Three implications:

- **It is the judge in its own case.** If you have a dispute with the government, the adjudicator is the government's court. Any private organisation holding that position would instantly be recognised as having a conflict of interest.
- **Its revenue does not come from voluntary exchange.** Rothbard follows Oppenheimer's “political means”: the state is the organisation of the political means. This does not deny that the state provides services (courts, roads, defence); it says that the **prices** of those services are not set by users' voluntary payment, so there is no way to know whether they are worth what they cost — back to section ②.
- **The logic of monopoly applies to it.** Stage 6.4 argued that Austrians do not fear market “bigness,” because with free entry bigness is temporary. But the state's monopoly is a **protected** monopoly — entry is forbidden by law. Every prediction economics makes about protected monopolies (higher prices, lower quality, insensitivity to consumer wants) applies.

Bastiat gave a shorter definition in 1848: the state is the great fiction by which everyone tries to live at the expense of everyone else.

Here Austrians part ways: **Mises and Hayek** accept a minimal state providing law and defence and define the problem as “how to constrain it”; **Rothbard and Hoppe** hold that the structural flaw of “judge in its own case” cannot be constrained, and that law and security should be supplied by competing private agencies (Stage 9.3 on how law can “grow”). This is a real, unresolved internal debate; Stage 14.3 presents both sides fairly.

### ④ War, inflation and the welfare state: the two engines of state growth

Stage 8.1 introduced Higgs's ratchet: the state expands in crises and does not fully contract afterwards. The greatest crises are wars, and the relationship between war and money is one of the central threads of Austrian historical analysis.

**War and inflation.** War needs money, and direct taxation makes the population feel the cost immediately. Three ways out: borrowing, requisition, printing. The Austrian observation: **fiat money (Stage 4.5) and central banks make the third route nearly frictionless.** Rothbard's argument in *A History of Money and Banking in the United States*: the Federal Reserve was founded in 1913, the U.S. entered the First World War four years later, and the war was financed largely by Fed credit expansion; the Second World War likewise; and Vietnam-era spending was the immediate backdrop to Nixon closing the gold window in 1971. Inflation is an **invisible war tax** — and the Cantillon effects of Stage 4.3 decide who pays more (fixed-income earners, savers) and who pays less (government contractors, the first recipients of new money).

Rothbard also coined “war collectivism” (1972): the War Industries Board, price controls and labour arbitration of 1917–18 became the blueprint for the New Deal — **war is the laboratory of intervention.** Higgs's *Crisis and Leviathan* (1987) traces the thread through the Cold War.

**The welfare state.** Its growth follows a different logic from war's: the mechanism of section ①. Every benefit creates a concentrated set of beneficiaries and an agency to administer it, and neither ever volunteers to shrink. Austrian analysis does not stop at the fiscal cost but asks about **incentives and time preference** (Stage 3.1):

- **Implicit marginal tax rates.** As income rises, benefits phase out one by one; a low earner may lose 70 in benefits for every extra 100 earned — an effective tax rate higher than the top earner's. This is not theory: “benefit cliff” studies in many countries find such ranges.
- **Rising time preference.** Hoppe's argument: the welfare state partially takes over the functions of saving, family and mutual aid — the **intertemporal** arrangements — and thereby weakens the motive and the means for providing for one's own future; it rewards the present and penalises accumulation. This is a theoretical inference, hard to measure directly, but it follows the same logic as Stage 17.2's discussion of hard money and time preference.
- **Crowding out of mutual aid.** In the late nineteenth and early twentieth centuries Britain and America had vast networks of friendly societies, fraternal insurance and church relief; after state welfare expanded, most disappeared. This is Stage 8.3's “market alternative crowded out,” applied to welfare.

**Steelman the welfare state first**: its defenders say a safety net lets people take risks (start firms, change jobs), reduces extreme poverty and social unrest, and is explicitly demanded by democratic electorates — a voluntary collective choice. The Austrian reply is not “no safety net,” but: (a) the **form** matters enormously — direct cash transfers (binary intervention) are far more honest than price controls and industry protection (triangular); (b) “voters demand it” is precisely what section ① analyses — concentrated beneficiaries demand, dispersed payers are rationally ignorant; (c) the history of mutual aid shows that a safety net need not be supplied by a monopolist.

### ⑤ Hoppe's critique of democracy: a controversial thesis, and its critics

Hans-Hermann Hoppe's *Democracy: The God That Failed* (2001) is among the most contested books inside the Austrian tradition. Its central argument must be stated accurately, not reduced to a slogan.

**The thesis.** Treat government as an asset. Under **monarchy** the asset is “privately owned”: the king holds it and expects to pass it to his heirs, so he has an incentive to preserve its long-run value — not to over-tax, not to destroy the tax base, not to fight ruinous wars (in Stage 3.1's terms, a lower time preference). Under **democracy** the asset is “publicly owned”: the ruler is a temporary caretaker with a term of a few years, who cannot sell the state or bequeath it, and so has an incentive to **extract as much as possible during his term** — more spending, more debt, costs pushed into the future (a higher time preference). Hoppe predicts that the shift from monarchy to democracy (roughly after 1918) should be accompanied by systematic rises in taxation, debt, inflation, the intensity of war and the volume of legislation. He reads the historical record (tax rates in nineteenth-century monarchical Europe typically in single digits; above 40% in twentieth-century democracies) as supporting this.

Hoppe does not advocate restoring monarchy — his conclusion is that both are inferior to a “natural order” (a private-law society). And he stresses the argument is **comparative**: not that kings are good, but that democracy does not solve the ruler's incentive problem as is usually assumed.

**The critics.** The thesis has drawn serious criticism from inside and outside the Austrian school, and readers should know it:

- **Empirical rebuttal.** Democracies outperformed non-democracies in the twentieth century on property-rights protection, growth and life expectancy; Amartya Sen observed that no functioning democracy has suffered a major famine; democracies rarely fight one another (the “democratic peace”). Hoppe's rising tax rates can be explained by rising productivity, urbanisation and genuine voter demand for public goods, not necessarily by worsened incentives.
- **Idealised monarchy.** Historical monarchs also fought ruinous wars (the Thirty Years' War, the Napoleonic Wars), defaulted (the Spanish crown, repeatedly) and debased coinage (medieval clipping). “Low monarchical time preference” holds in theory but was unstable in history.
- **Rebuttals from within public choice.** Donald Wittman (1995) argued that political markets also have competition and reputation mechanisms and that democratic failure is exaggerated; Bryan Caplan (2007) argued from the other direction that the problem is voters' **rational irrationality** — holding beliefs that feel good while the costs fall on others — not the ownership structure Hoppe identifies.
- **Normative and cultural controversy.** Passages in the book's later chapters on immigration and culture drew wide moral criticism, and many Austrian scholars have explicitly distanced themselves from them. The economic argument and those passages are logically separable and should be judged separately.

**This course's position**: Hoppe's thesis is an **analytical hypothesis** worth taking seriously — using time preference, a core Austrian tool, to explain state behaviour is valuable in itself; but its empirical support is mixed, its comparison group (monarchy) is idealised, and its policy conclusion is a minority view within the school. Stage 14.3 places this fault line on the map of Misesians, Hayekians and Rothbardians.

The whole lesson in one sentence: **analyse the state as you would any acting person — ask about its incentives, its knowledge, its constraints; assume neither benevolence nor malice.** When Stage 17.3 shows a monetary monopolist seeking the power to watch every transaction, you will know which questions to ask.
`,

  demo: "incentive-map",

  analogy: `
Think of a society as an **apartment building with 1,000 households**, with the service charge split among all of them.

One day the 5 households on the top floor propose a scenic elevator that stops only at their floor: cost 1 million, or 1,000 per household. Each of the 5 stands to gain well over 100,000 in renovation and commuting value — so they knock on every door, prepare slides, speak at the owners' meeting, and bring in a neutral “elevator safety expert” to testify. And the other 995 households? Study the elevator proposal, attend three meetings, and argue with neighbours to save 1,000? Most say “forget it.” **The proposal passes. 995 households each lose 1,000; 5 each gain over 100,000.**

The next year the building's management company (which holds the budget and is evaluated on “number of services delivered”) discovers the elevator needs a full-time attendant, an annual inspection regime and a user manual — the budget rises 20%. Nobody can say whether management is doing “well” or “badly,” because unlike a restaurant, you cannot switch to a different one.

The third year a dispute breaks out next door; management declares an “emergency” and adds a temporary security charge. When the dispute ends, the charge is not cancelled — only renamed.

There are no villains in this building. The 5 are rational, the 995 are rational, management is rational. **The result is the combined force of rational people under the wrong incentives.** Public choice, Mises's bureaucracy, and Higgs's ratchet are the three staircases of this building.
`,

  misconceptions: [
    "**“Public choice says politicians are all bad people.”** — The opposite: it assumes politicians and bureaucrats are **ordinary people** who respond to incentives like anyone in business. The conclusion is that under this incentive structure (rational ignorance, concentrated benefits, budget maximisation) good people systematically produce bad policy. Buchanan spent the second half of his career studying which constitutional rules could improve the incentives, not condemning anyone.",
    "**“Austrian economics and public choice are the same thing.”** — Allies, but different. Public choice uses maximisation and equilibrium models; Austrians use praxeology and stress the role of ideas. More importantly, Mises's *Bureaucracy* identifies a problem public choice rarely discusses: a bureau with perfect incentives still **cannot calculate** — without profit and loss there is no yardstick for its output.",
    "**“Run government like a business and the problem is solved.”** — A business can be run like one because customers can refuse to pay, which is what gives profit and loss meaning. An organisation that can tax has no real profit and loss however it is “reformed”; it can only be run by rules and budgets, and bureaucracy is the necessary form of such an organisation, not a question of management quality.",
    "**“Hoppe proved monarchy is better than democracy.”** — His argument is comparative: democracy does not solve the ruler's incentive problem as usually assumed, and his conclusion is that both are inferior to a private-law society. The empirical support is mixed, monarchy is idealised in his account, and critics (Sen, Wittman, Caplan, and many Austrians) have raised serious objections. This course presents it as a contested hypothesis.",
    "**“The welfare state is a voluntary collective choice by voters, so the Austrian critique does not apply.”** — “Voters demand it” is exactly what public choice analyses: concentrated beneficiaries and the administering agencies demand actively, while dispersed payers are rationally ignorant. The Austrian reply is not “no safety net” but a distinction of form (cash transfers are more honest than industry protection) and the observation that crowded-out mutual aid shows a safety net need not come from a monopolist.",
  ],

  quiz: [
    {
      q: "A programme taxes 10 million taxpayers 10 each and subsidises 1,000 firms 60,000 each. By public-choice analysis, its most likely fate is:",
      options: [
        "Rejected, because net social value is −40 million",
        "Passed, because each firm has a 60,000 motive to lobby while each taxpayer has only a 10 motive to oppose",
        "Passed, because it has a net social benefit",
        "Rejected, because taxpayers outnumber firms",
      ],
      answer: 1,
      explain: "**Concentrated benefits beat dispersed costs**: taxpayers are rationally ignorant (learning costs far more than 10), while firms have ample motive to organise and lobby. Whether net value is negative does not decide the outcome; who has the stronger motive to act does.",
    },
    {
      q: "What is the central claim of Mises's Bureaucracy (1944)?",
      options: [
        "Bureaucrats are naturally lazy and need stronger incentives",
        "An organisation without profit and loss cannot judge whether its output is worth its input, so it can only run on rules and budgets — bureaucracy is the necessary form of such an organisation",
        "Government should be run entirely on the business model",
        "Bureaus are more efficient than firms because they do not pursue profit",
      ],
      answer: 1,
      explain: "It is the calculation problem of Stage 7.1 at the level of the organisation: a firm can delegate because profit is a shared yardstick; an agency has none, so everything needs a rule. The problem lies not in the people but in the absence of prices.",
    },
    {
      q: "How do Rothbard and Hoppe define the state?",
      options: [
        "A voluntary association that provides public goods",
        "The joint enterprise of all citizens",
        "An organisation that monopolises ultimate decision-making and taxation over a territory",
        "A management body composed of the most capable people",
      ],
      answer: 2,
      explain: "Key implications: the state is the judge in its own case; its revenue does not come from voluntary exchange; every economic prediction about protected monopolies applies. Austrians genuinely disagree about whether it can be constrained.",
    },
    {
      q: "What link do Austrians see between fiat money, central banks and war?",
      options: [
        "Fiat money and central banks make financing war by credit expansion nearly frictionless, and inflation becomes an invisible war tax",
        "None; wars are financed entirely by taxation",
        "Central banks always oppose war",
        "War is easier to finance under a gold standard",
      ],
      answer: 0,
      explain: "Direct taxation makes people feel the cost of war immediately; printing does not. The Fed was founded in 1913 and the U.S. entered the First World War four years later; Vietnam spending was the backdrop to closing the gold window in 1971. Cantillon effects decide who pays the hidden tax.",
    },
    {
      q: "Which of the following is **not** a serious criticism of Hoppe's critique of democracy?",
      options: [
        "Democracies outperform non-democracies on property-rights protection, growth and famine avoidance",
        "Historical monarchs also fought ruinous wars, defaulted and debased coinage, so “low monarchical time preference” is unstable",
        "Caplan locates the problem in voters' rational irrationality rather than in the ownership structure",
        "Hoppe's argument uses the Austrian concept of time preference and is therefore methodologically wrong",
      ],
      answer: 3,
      explain: "Using time preference to analyse state behaviour is exactly what makes the argument valuable, not a flaw. The real criticisms are empirical (Sen), historical (idealised monarchy), and from within public choice (Wittman, Caplan).",
    },
  ],

  further: [
    { label: "Buchanan & Tullock, The Calculus of Consent (1962), full text (Liberty Fund / Econlib)", url: "https://www.econlib.org/library/Buchanan/buchCv3.html" },
    { label: "Mises, Bureaucracy (1944), full text (Mises Institute)", url: "https://mises.org/library/book/bureaucracy" },
    { label: "Rothbard, Anatomy of the State (1974), full text (Mises Institute)", url: "https://mises.org/library/book/anatomy-state" },
    { label: "Econlib Encyclopedia: Rent Seeking (David Henderson) — Tullock's and Krueger's concept", url: "https://www.econlib.org/library/Enc/RentSeeking.html" },
    { label: "Econlib Encyclopedia: Public Choice (William Shughart)", url: "https://www.econlib.org/library/Enc/PublicChoice.html" },
  ],
};
