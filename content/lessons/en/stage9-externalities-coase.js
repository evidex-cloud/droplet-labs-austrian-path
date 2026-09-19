export default {
  id: "externalities-coase",
  stage: 9,
  order: 2,
  title: "Externalities, the Commons & Coase: The Austrian Reply",
  difficulty: "systems",
  prereqs: ["why-property"],

  oneLiner:
    "Factory smoke drifts into the neighbors' yards — the textbook case of “market failure,” and the most respectable doorway for government intervention. Pigou says: tax the smoke so the factory bears the “social cost.” Coase says: not so fast — harm runs both ways, who is imposing on whom depends on where the property right sits, and if bargaining is free any assignment of rights bargains its way to the same “efficient” outcome. Austrians say: **both of you assume someone can lay the neighbors' loss and the factory's gain on a single ruler — and Stage 1.2 already showed that ruler does not exist.** What can adjudicate is not “efficiency” but property: who was there first, and whose property was physically invaded. This lesson puts the strongest version of all three on the table.",

  intuition: `
Picture a street. At the west end stands a textile mill, built in 1985. At the east end a new housing estate went up in 2015. The mill emits a little coal smoke every day, and the laundry on the residents' balconies always comes in grey. The residents complain; the mill says: we have been here thirty years. Who is right?

**The textbook answer (Pigou):** the mill counts only its own costs (coal, wages) and leaves out the cost of the neighbors' laundry, so it produces “too much.” The fix is for government to tax each unit of smoke by the damage it does; the mill then folds the smoke into its costs and output falls back to the “social optimum.” The logic is clean and elegant, and it sits behind today's carbon taxes, emission charges and tobacco taxes. Its strength is that it concedes the market is good and merely needs “one price corrected.”

**Coase's answer (1960):** slow down. First, the harm is **reciprocal** — forbid the smoke and the mill is harmed; permit it and the residents are harmed. The question is not “how do we stop the mill hurting the residents” but “which harm, if permitted, leaves the smaller total loss?” Second, if rights are clear and bargaining is free, then **whoever the law gives the right to, the two sides bargain to the same result**: if residents own clean air, the mill pays for their tolerance (when that is cheaper than a filter); if the mill owns the right to smoke, residents pay for a filter (when that beats changing how they dry clothes). Third, bargaining in reality costs money (rounding up 500 households, holding meetings, stopping free riders), so **the law should assign the right to whichever side minimizes total cost.** With that, Coase founded law-and-economics — and made the Pigovian tax look far less necessary.

**The Austrian answer (Rothbard, 1982):** Pigou and Coase share a premise — that there exists a “social cost” in which the mill's profit and the residents' loss can be added together and compared. But cost is subjective (Stage 1.4): what is “grey laundry” worth? Only the residents know, and each of them differently. The mill's profit on one more bolt of cloth is visible; the residents' displeasure at one less clean shirt has no market price. **The ruler called “efficiency” requires interpersonal utility comparison, and interpersonal comparison cannot be done.** So Austrians pull the question back to Stage 9.1: do not ask “which harm costs less in total,” ask “**whose property was physically invaded, and who was there first?**” When the mill was built in 1985 it stood among empty fields; its smoke entered nobody's property — it **homesteaded an easement to emit**. When the estate was built into the smoke in 2015, the residents “came to the nuisance,” and the mill owes nothing. Reverse the dates and the answer reverses: if the estate came first and the mill later, the first wisp over the fence is an invasion, and residents may demand it stop — however large the mill's profit.

None of the three is a fool. Pigou saw a real problem: some costs really do stay out of prices. Coase saw a deeper one: this is a property problem, not a tax problem. Austrians take Coase's insight and reject his criterion of judgment — **because that criterion needs a number nobody has.** The demo for this lesson lets you feel it: when you play the designer of a Pigovian tax you must type in a number, and you will discover that you do not know what to type.

The lesson also covers “positive externalities” and **public goods** — lighthouses, defence, basic research — traditionally held to be things “markets cannot produce, so government must.” Coase's 1974 archival work found that British lighthouses were for a long time privately built; Hoppe questions the category of “public good” at its root. Finally we visit three real battlefields — airport noise, factory smoke, radio spectrum — and preview two contemporary variants you will meet again in Stage 16.4 and Stage 17.2: platform content moderation and Bitcoin's electricity use.

**In this lesson we break it into six pieces:**

- **① Pigou at his strongest: putting social cost into the price**
- **② Coase 1960: reciprocity, transaction costs and the “Coase theorem”**
- **③ The Austrian reply: costs are subjective, efficiency cannot adjudicate, property and first use can**
- **④ Block's critique of Coase: property decided by a judge is not property**
- **⑤ Positive externalities and public goods: lighthouses, Hoppe and free riders**
- **⑥ Real battlefields: noise, smoke, spectrum — and a preview of platforms and Bitcoin**
`,

  mechanics: `
### ① Pigou at his strongest: putting social cost into the price

Arthur Pigou gave the classic analysis of externalities in *The Economics of Welfare* (1920). Let us state it at full strength.

A factory earns a marginal profit of 100 − 2Q on each additional unit (Q is output) — profit reaches zero at Q = 50, which is the factory's own optimum. But each unit also emits smoke, and suppose the marginal damage to the neighbors is Q (the more output, the worse the air, the greater the damage of the next unit). The factory ignores that Q because it does not pay it. So:

$$
Private optimum: 100 − 2Q = 0 → Q = 50
Social optimum: 100 − 2Q = Q → Q ≈ 33.3
$$

The factory “overproduces” by about 17 units, whose profit is smaller than the damage they cause. Pigou's remedy: **tax each unit by an amount equal to marginal damage** (at the optimum, t ≈ 33.3). The factory's marginal profit becomes 100 − 2Q − 33.3, and it cuts output to 33.3 by itself. The price is “corrected,” and the market keeps running. Positive externalities work in reverse: vaccination and basic research benefit bystanders, private actors do “too little,” so subsidize.

The appeal of the framework is that it **respects the market mechanism**: no bans, no quotas, just one number changed. It is the skeleton of almost all environmental economics today — a carbon tax is a Pigovian tax. Note its hidden premise, around which every subsequent argument turns: **there exists a computable number called “marginal damage,” and somebody knows it.**

### ② Coase 1960: reciprocity, transaction costs and the “Coase theorem”

Ronald Coase, in “The Problem of Social Cost” (*Journal of Law and Economics*, 1960), attacked Pigou head-on — but not from the Austrian direction.

**First, harm is reciprocal.** Coase cited the English case *Sturges v. Bridgman* (1879): a confectioner had used his machinery for decades; a doctor built a consulting room next door, and the noise made it unusable. The traditional view is that the confectioner harmed the doctor. Coase: forbid the machinery, and the doctor harms the confectioner. **The real question is which harm, if permitted, leaves total output larger.**

**Second, with zero transaction costs the initial assignment of rights does not affect the outcome.** Using the numbers from ①: whether the law gives the right to the factory or the neighbors, if bargaining is free the final output is 33.3. Give it to the neighbors and the factory pays for the first 33.3 units of emission (where profit exceeds damage) and not for the 34th onward (where it does not). Give it to the factory and the neighbors pay it to cut from 50 to 33.3 (the damage saved exceeds the profit lost). **The assignment decides who pays whom, not how much gets produced.** George Stigler named this the “Coase theorem.”

**Third, real transaction costs are positive, so assignment matters.** Getting 500 households to agree involves free riding, hold-outs and asymmetric information; the cost can exceed the gain from bargaining (in ①, the net gain from cutting 50 to 33.3 is about 417). In that case the law should **assign the right directly to the party who would have obtained it had bargaining been possible** — the assignment that maximizes total social product; equivalently, place liability on the party who can avoid the harm most cheaply. That is the program of law-and-economics: the judge should simulate the market.

Coase's contribution is immense: he turned externalities from a tax problem into a property problem and showed that many so-called market failures are really **undefined property rights.** Austrians accept that step completely. The disagreement is over the next one.

### ③ The Austrian reply: costs are subjective, efficiency cannot adjudicate, property and first use can

Rothbard's “Law, Property Rights, and Air Pollution” (*Cato Journal*, 1982) is the systematic Austrian response. Three points carry it.

**Costs are subjective and cannot be summed.** Both ① and ② wrote “marginal damage = Q.” Whose damage is that Q? Among 500 households some have allergies, some do not care, some are about to move. Each loss exists only in each person's own valuation (Stage 1.2); without a market exchange there is no price for it (Stage 7.1). Adding them into a single number and comparing it with the factory's profit requires **interpersonal utility comparison** — which Austrians hold to be not merely hard but meaningless. So the “socially optimal output of 33.3” is not a discovered fact; it is an **assumed** number. Pigou's tax rate and Coase's “maximum total product” both rest on that assumption.

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="160" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Pigou / Coase: one ruler for “social cost”</text><text x="480" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Rothbard: who was first, who was invaded</text><line x1="40" y1="240" x2="290" y2="240" stroke="var(--line)"/><line x1="40" y1="40" x2="40" y2="240" stroke="var(--line)"/><text x="165" y="258" text-anchor="middle" font-size="10" fill="var(--muted)">output Q</text><line x1="40" y1="60" x2="265" y2="240" stroke="var(--blue)" stroke-width="2"/><text x="205" y="185" font-size="10" fill="var(--blue)">marginal profit 100−2Q</text><line x1="40" y1="240" x2="265" y2="120" stroke="var(--red)" stroke-width="2" stroke-dasharray="5 3"/><line x1="40" y1="240" x2="265" y2="170" stroke="var(--red)" stroke-width="1" stroke-dasharray="2 3" opacity=".6"/><line x1="40" y1="240" x2="265" y2="60" stroke="var(--red)" stroke-width="1" stroke-dasharray="2 3" opacity=".6"/><text x="190" y="112" font-size="10" fill="var(--red)">“marginal damage” = Q ?</text><text x="230" y="58" font-size="9" fill="var(--red)" opacity=".8">2Q?</text><text x="255" y="178" font-size="9" fill="var(--red)" opacity=".8">Q/2?</text><circle cx="163" cy="158" r="4" fill="var(--orange)"/><line x1="163" y1="158" x2="163" y2="240" stroke="var(--orange)" stroke-dasharray="3 2"/><text x="163" y="253" text-anchor="middle" font-size="9" fill="var(--orange-ink)">33.3?</text><text x="165" y="282" text-anchor="middle" font-size="10" fill="var(--muted)">where the red line sits depends on a number nobody has</text><g><rect x="350" y="50" width="250" height="34" rx="6" fill="var(--surface-2)" stroke="var(--line)"/><text x="360" y="72" font-size="11" fill="var(--ink)">1985 · mill built on empty land → homesteads a smoke easement</text></g><g><rect x="350" y="98" width="250" height="34" rx="6" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="360" y="120" font-size="11" fill="var(--orange-ink)">2015 · estate built into the smoke → “came to the nuisance”</text></g><text x="475" y="152" text-anchor="middle" font-size="11" fill="var(--muted)">—— reverse the dates ——</text><g><rect x="350" y="164" width="250" height="34" rx="6" fill="var(--surface-2)" stroke="var(--line)"/><text x="360" y="186" font-size="11" fill="var(--ink)">1985 · estate first → yards are the residents' property</text></g><g><rect x="350" y="212" width="250" height="34" rx="6" fill="var(--red-soft)" stroke="var(--red)"/><text x="360" y="234" font-size="11" fill="var(--ink)">2015 · mill built later, smoke enters → invasion, must stop</text></g><text x="475" y="282" text-anchor="middle" font-size="10" fill="var(--muted)">the ruling needs two facts: who was first + was there a physical invasion</text></svg><figcaption>Left: both the Pigovian tax and the Coasean ruling must read a value off the red “marginal damage” line, whose slope is subjective and cannot be summed. Right: Rothbard's ruling needs no number at all — only “who first” and “was there an invasion.”</figcaption></figure>

**Reciprocity erases “who invaded whom.”** Coase says harm is reciprocal; Austrians say that is physically false. Smoke travels from the factory's chimney into the residents' yards; particles cross a property boundary. The residents send nothing into the factory. “Banning the smoke harms the factory” is true, but that is the loss from **being forbidden to invade**, just as banning burglary “harms” the burglar — such a loss does not found a symmetric claim of right. The Austrian criterion is **physical invasion** (trespass, nuisance): measurable particles, decibels, vibrations entering someone else's property. “You opened a shop and took my customers,” “your building blocks my view” — nothing entered my property, so there is no invasion, however unhappy I am.

**First use sets the baseline.** So whose property was invaded? The homesteading principle of Stage 9.1 answers: **the prior user's use defines the baseline.** The mill built on empty land in 1985 sent smoke into nobody's property — Rothbard says it thereby **homesteaded a “smoke easement”** (just as one homesteads land, it homesteaded this use of the surrounding air). The estate that arrived in 2015 “came to the nuisance” and cannot demand a shutdown — but it may pay the mill to cut emissions; that is voluntary exchange. Reverse the order — residents first, mill later — and the first wisp over the fence is an invasion; residents may demand that it **stop**, not merely be compensated, whatever the mill's profit or payroll. That is what Austrians mean by “strict liability”: liability follows invasion, not a cost-benefit calculation.

The merit of this criterion is that **nobody needs to know anyone's subjective numbers**; the judge verifies two checkable facts — who was first, and whether there was a physical invasion. The weakness must be stated just as plainly: Rothbard requires proof of invasion “beyond a reasonable doubt,” which is powerful for **point-source** pollution (one chimney) and very strained for **diffuse** pollution (a million cars, the global climate) — who invaded whose particular slice of air? Austrians are far from finished on this question; Stage ∞.1 lists it among the open problems.

### ④ Block's critique of Coase: property decided by a judge is not property

Walter Block, in “Coase and Demsetz on Private Property Rights” (*Journal of Libertarian Studies*, 1977) and a 1995 follow-up in the *Review of Austrian Economics*, pushed ③ to its conclusion. A Coasean judge is told to “assign the right to the party that maximizes total product,” which means **property becomes a function of the judge's cost estimates** — your land is worth a million today; tomorrow the factory claims its profit is two million, and the judge should hand it the right to emit. Property of that kind is not property; it is a provisional licence that any higher efficiency estimate can overturn. And Stage 9.1 showed that the whole value of property lies in being **knowable in advance and independent of a referee.**

Block also identified a technical but fatal point: Coase assumes the judge can estimate each party's costs, but those costs are precisely the subjective valuations that **reveal themselves only in exchange** — if residents truly would pay two million for clean air, the only way to establish that is for them actually to pay it. A judge “simulating the market” imports the error of Lange's model from Stage 7.3 into the courtroom: **estimation substituted for exchange.**

In fairness, Coase was not deaf to such criticism. His later writing stressed “comparative institutional analysis” rather than judicial arithmetic, and he conceded that economists routinely overestimate their knowledge of costs. The distance between Austrians and Coase is much smaller than between Austrians and Pigou: both agree externalities are property problems; they disagree about **what determines property** — first use and invasion, or efficiency estimates.

### ⑤ Positive externalities and public goods: lighthouses, Hoppe and free riders

The other half of externalities is positive spillovers and **public goods**: non-rivalrous, non-excludable things (a lighthouse's beam, national defence, basic research) that anyone can use free, so nobody will pay, so the market “cannot produce them” and government must. That has been the standard argument since Samuelson (1954).

**Coase's lighthouse (1974).** Samuelson used the lighthouse as the textbook public good. Coase went to the British records and found that in the seventeenth to nineteenth centuries many English lighthouses were built and run privately, recovering costs through “light dues” charged to ships by tonnage when they entered port; only later did Trinity House absorb them. This does not make lighthouses a pure private good — critics (van Zandt 1993, Bertrand 2006) note the right to collect dues was a Crown grant and collection at ports carried compulsion. The fair conclusion: **“the market cannot do it” fails on the history, but a lighthouse wholly free of the state never appeared either.** The larger lesson is methodological: the list of public goods is not deduced from theory; it is an **empirical question**, and entrepreneurs constantly turn “non-excludable” into “excludable” — encrypted television, electronic tolling, Disney buying the land around its park to internalize the positive externality.

**Hoppe's attack at the root (1989).** In “Fallacies of the Public Goods Theory and the Production of Security,” Hoppe argued that “public/private good” is not an objective property of things but depends on **subjective valuation and technology** — the same view is a free “public good” to me and a rivalrous resource to the guesthouse next door. If the category itself is subjective, the step from “this is a public good” to “therefore the state should provide it” contains an unproven move: state provision means forcing everyone to pay, including those who do not want the good — which **again requires interpersonal utility comparison** (the loss of the coerced payer against the gain of the user). Nor does free riding disappear when the state takes over: voters' “demand” for public goods is something nobody bothers to find out at cost either (the rational ignorance of Stage 8.4). Hoppe's conclusion is not “public goods do not exist” but “public-goods theory cannot show that state provision is better.”

The general Austrian attitude to positive externalities is that **external benefits are not a problem but the normal condition** — your beautiful garden benefits the whole street; your reading makes you a better neighbor. If every spillover benefit demanded a subsidy, the list would be endless. The only real problem is **invasion**, and a positive externality invades nobody.

### ⑥ Real battlefields: noise, smoke, spectrum — and a preview of platforms and Bitcoin

**Airport noise.** Under ③ the ruling depends on timing: an airport built on suburban fields in 1960 homesteaded a noise easement; when developers built estates beside the runway after 1990, residents cannot claim damages — though they were in effect “compensated” through discounted house prices, since the noise was already in the price. Conversely, if the airport adds a new runway that pushes noise into a previously quiet existing community, that is a fresh invasion. Actual American case law took a middle road, but “coming to the nuisance” is a genuine common-law defence.

**Factory smoke.** Rothbard and the legal historian Morton Horwitz both note that nineteenth-century American courts gradually abandoned common-law strict liability for a “balancing test” — the smoke invasion was real, but the factory was “more important to the economy,” so the plaintiff lost. The Austrian reading is startling: **pollution was not a market failure but a deliberate weakening of property protection by courts during industrialization** — had the courts of 1850 kept ruling on invasion, factories would have had a powerful incentive to invent filtration long before the Environmental Protection Agency arrived in 1970. It is a contestable historical claim, but it reverses the arrow of causation.

**Radio spectrum.** Coase's 1959 paper “The Federal Communications Commission” preceded “Social Cost”: interference between stations is a property problem, so auction the spectrum rather than have a commission allocate it by “public interest”; the FCC did not actually begin auctions until 1994. Austrians take one step further — Thomas Hazlett's 1990 research showed that American courts in the 1920s were already recognizing broadcasters' rights to frequencies on a **first-use** basis (e.g. *Tribune Co. v. Oak Leaves Broadcasting*, 1926), and that the Radio Act of 1927 **interrupted** that path of spontaneously forming property, nationalized the spectrum, and handed out licences instead. Spectrum is a textbook instance of the chain in Stage 9.1: a new technology creates a new scarcity, the common law begins to grow property, and legislation displaces it. Stage 9.3 examines the difference between those two sources of law.

Two previews. **Stage 16.4:** the core claim behind platform content moderation is that “harmful content imposes costs on others” — an externality claim; the first question this lesson trains you to ask is whether there is an **invasion**. Is “seeing speech you dislike” structurally the same as “smoke drifting into your yard”? **Stage 17.2:** “Bitcoin mining burns electricity and emits carbon — a negative externality” — again an externality claim; the Austrian framework does not begin by asking “is this use of electricity worth it” (that needs interpersonal comparison) but: which power plant, into whose property, emitted what? And it notes the criterion applies identically to every electricity user — data centres, aluminium smelters, Christmas lights. **Externality arguments are powerful, and for exactly that reason they most need a criterion of judgment that does not depend on somebody knowing the social cost.**
`,

  demo: "pollution-court",

  analogy: `
Think of an externality dispute as **two flatmates, one of whom loves playing the piano in the living room.**

**Pigou's landlord** says: the playing bothers your flatmate, so I will charge a “noise fee” per hour, payable to me. But how much per hour? Is the flatmate a music lover or an insomniac? The landlord can only guess a number — and the money lands in the landlord's pocket, while the flatmate who suffered gets nothing.

**Coase's landlord** says: the noise is reciprocal — ban the piano and the pianist suffers. Let us see whose loss is larger: if the two of you could bargain for free, the pianist would buy playing hours or the flatmate would buy silence, and however I assign the right the number of hours played would come out the same. But bargaining takes time, so I will simply give the right to “whoever needs it more” — and before I can do that I have to estimate what the pianist's joy is worth and what the flatmate's quiet is worth.

**Rothbard's landlord** says: I estimate nobody's joy. I check two things: **who moved in first**, and **does the sound cross that wall.** If the pianist was here first, playing daily, and the flatmate moved in later, the flatmate “came to the noise” and should have known when signing the lease; if he wants quiet he can pay the pianist to play less — that is a deal between the two of you and I stay out of it. If the flatmate was here first and the pianist moved in later, the first note through the wall is an invasion; the flatmate may demand it stop, even if the pianist is Lang Lang.

Of the three landlords, only the third **needs to know no number inside anyone's head.** Not because he is cleverer, but because he admits he cannot know it. In the demo you play the first two landlords — and you will find the hardest step is filling in that number.
`,

  misconceptions: [
    "**“Austrians deny that externalities exist.”** — What Austrians deny is that externalities can be summed into a social cost and adjudicated on that basis, not that smoke drifts into the neighbors' yard. The Austrian treatment reduces the problem to property invasion: a physical invasion of a prior user is a tort with strict liability; no invasion (blocking a view, taking customers) is no tort.",
    "**“The Coase theorem shows that with clear property rights the market fixes pollution by itself, so Austrians and Coase are on the same side.”** — Half right. Austrians accept that externalities are property problems, but reject Coase's rule for positive transaction costs — a judge assigning rights by “maximum total product.” Block showed that makes property a function of the judge's cost estimates, and those costs are subjective and revealed only in exchange.",
    "**“A Pigovian tax is the optimal policy as long as the rate is set correctly.”** — The problem is exactly “set correctly”: marginal damage consists of countless subjective valuations, and without exchange there is no price for it, so the rate is a guess. Moreover the revenue goes to the treasury; the harmed neighbors are not compensated — the tax corrects the factory's books, not anyone's rights.",
    "**“The lighthouse proves public goods must be provided by government.”** — Coase's 1974 research shows English lighthouses were long privately built and run, recovering costs through light dues at ports. In fairness, the right to collect was a Crown grant, so it is not a “pure market” case either; but the textbook assertion that “markets cannot build lighthouses” fails on the history. Hoppe goes further: the category “public good” depends on subjective valuation and technology and cannot generate a case for state supply.",
    "**“First use means a factory built first can pollute as much as it likes forever.”** — What is homesteaded is the extent of use at the time: the mill homesteaded its 1985 level of emissions, and cannot triple its size in 2015 and push smoke into new property; and if the neighbors were there first, the mill is the invader from the first wisp. First use sets the baseline; it is not a licence to kill.",
  ],

  quiz: [
    {
      q: "A factory's marginal profit is 100 − 2Q and Pigou assumes marginal damage of Q. In Pigou's framework, what are the “socially optimal” output and tax rate, roughly?",
      options: [
        "Q = 50, tax 0",
        "Q ≈ 33.3, tax ≈ 33.3 per unit",
        "Q = 0, ban production",
        "Q = 100, subsidize the factory",
      ],
      answer: 1,
      explain: "Set 100 − 2Q = Q to get Q ≈ 33.3; the tax equals marginal damage at that point, ≈ 33.3. The Austrian question: who measured the line “marginal damage = Q”?",
    },
    {
      q: "Which of the following is NOT a claim of Coase's “The Problem of Social Cost” (1960)?",
      options: [
        "Harm is reciprocal: forbidding the smoke also harms the factory",
        "With zero transaction costs the initial assignment of rights does not affect the final allocation",
        "With positive transaction costs the law should assign rights to the party that maximizes total product",
        "Costs are subjective and cannot be compared between persons, so efficiency cannot serve as the criterion",
      ],
      answer: 3,
      explain: "The fourth statement is Rothbard's 1982 Austrian reply, not Coase's position. Coase's framework depends precisely on comparing the parties' costs.",
    },
    {
      q: "Under Rothbard's criterion, a mill was built on empty land in 1985 and a housing estate was built into its smoke in 2015. Can the residents demand a shutdown?",
      options: [
        "Yes, because residents' health outweighs the mill's profit",
        "Yes, provided there are enough residents",
        "No — the mill homesteaded a smoke easement and the residents came to the nuisance; but residents may pay the mill to reduce emissions",
        "No, because smoke is not a physical invasion",
      ],
      answer: 2,
      explain: "The prior user's use sets the baseline. When the mill was built its smoke entered nobody's property, so it homesteaded that level of emission; latecomers cannot demand a stop on grounds of invasion, only buy reductions voluntarily. Smoke is of course a physical invasion — but what it invaded at the time was unowned air.",
    },
    {
      q: "What is the core of Block's critique of Coasean adjudication?",
      options: [
        "Judges usually do not understand economics",
        "Assigning rights to the “more efficient” party makes property a function of the judge's cost estimates, and those costs are subjective and revealed only in exchange",
        "Transaction costs are in fact always zero",
        "Coase ignored the role of taxation",
      ],
      answer: 1,
      explain: "Block (1977, 1995): the value of property lies in being knowable in advance and independent of a referee; a Coasean judge “simulating the market” substitutes estimates for exchange, repeating the error of Lange's model.",
    },
    {
      q: "What is Hoppe's critique of public-goods theory?",
      options: [
        "“Public/private good” is not an objective property but depends on subjective valuation and technology, and “the state should provide it” requires interpersonal utility comparison, so it does not follow",
        "Public goods do not exist at all",
        "All public goods should be provided by private charity",
        "Lighthouses should be demolished",
      ],
      answer: 0,
      explain: "Hoppe's 1989 paper argues the category is itself subjective; even granting that something is a public good, forcing everyone to pay requires weighing payers' losses against users' gains, which is methodologically impossible. Free riding persists in the political process too.",
    },
  ],

  further: [
    { label: "Rothbard, “Law, Property Rights, and Air Pollution,” Cato Journal 2(1), 1982 — the Austrian reply in the original (reprinted by the Mises Institute)", url: "https://mises.org/library/law-property-rights-and-air-pollution" },
    { label: "Coase, “The Problem of Social Cost,” Journal of Law and Economics 3 (1960) — the founding paper of law-and-economics", url: "https://www.law.uchicago.edu/files/file/coase-problem.pdf" },
    { label: "Coase, “The Lighthouse in Economics,” Journal of Law and Economics 17 (1974)", url: "https://www.jstor.org/stable/725150" },
    { label: "Hoppe, “Fallacies of the Public Goods Theory and the Production of Security,” Journal of Libertarian Studies 9(1), 1989", url: "https://mises.org/library/fallacies-public-goods-theory-and-production-security" },
    { label: "Econlib Encyclopedia: Externalities (the mainstream statement, with Pigou and Coase)", url: "https://www.econlib.org/library/Enc/Externalities.html" },
  ],
};
