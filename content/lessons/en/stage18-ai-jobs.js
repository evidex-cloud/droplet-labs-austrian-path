export default {
  id: "ai-jobs",
  stage: 18,
  order: 4,
  title: "Jobs, Wages & the Austrian Answer to Technological Unemployment",
  difficulty: "newera",
  prereqs: ["exchange-division", "price-controls"],

  oneLiner:
    "The Luddites smashing stocking frames in 1811, Ricardo changing his mind about “the machinery question” in 1821, Keynes coining “technological unemployment” in 1930, President Johnson's Automation Commission in 1964 — every generation has been sure that this time the machines would eat the jobs, and every generation afterward had more employment and higher real wages. This lesson gets the panic history right and then gives the Austrian answer: **comparative advantage holds against machines too** (Stage 1.5) — even a machine better at everything leaves you something worth doing; the labor and capital released are redeployed by entrepreneurs (Stage 6.1) toward ends that were previously unaffordable (Stage 0.1), because **ends are unlimited**; the “lump of labor” is a fallacy. Then the honest part: transition costs are real and concentrated, human capital is as specific as any machine (Stage 3.4), and adjustment requires **flexible prices and wages** — minimum wages (Stage 8.2) and licensing (Stage 8.3) turn adjustment into unemployment. We finish with a five-step analysis of UBI (Stage 14.1) and a serious reply to “this time is different: general AI substitutes for cognition itself.”",

  intuition: `
Every technology panic follows the same script, so it is worth memorizing:

**1811–16, the English Midlands.** Stocking-frame knitters around Nottingham, acting in the name of “General Ludd,” smashed wide frames; Parliament made frame-breaking a capital crime in 1812. Britain then had a few hundred thousand textile workers. A century later the industry employed more people, and cloth had become cheap enough that ordinary people owned several outfits.

**1821, Ricardo.** In the third edition of *On the Principles of Political Economy and Taxation* he added a chapter, “On Machinery,” and candidly admitted that machinery might hurt the working class **in the short run** — the first formal acknowledgment of transition costs by a classical economist. Note what he did not say: that machines cause permanent unemployment.

**1930, Keynes.** In “Economic Possibilities for our Grandchildren” he coined “technological unemployment,” meaning “unemployment due to our discovery of means of economising the use of labour outrunning the pace at which we can find new uses for labour.” He also called it “a temporary phase of maladjustment” and predicted that a century on, humanity's problem would be too much leisure.

**1964, the United States.** A group of prominent scholars sent President Johnson the “Triple Revolution” memorandum, warning that the “cybernation revolution” would make a large part of the labor force permanently surplus. The President created the National Commission on Technology, Automation, and Economic Progress; its 1966 report concluded that technology was not causing aggregate unemployment — the problem was aggregate demand — and, incidentally, recommended a guaranteed income. Over the following twenty years US employment rose by tens of millions.

**ATMs, 1970s to 2010.** Bank tellers were supposed to vanish. In fact the number of US tellers **rose slightly** over the period (from roughly half a million to a little more) — because ATMs cut the cost of running a branch, banks opened more branches, and tellers shifted into sales and customer relations. The economist James Bessen documented the case. Elevator operators, by contrast, really did disappear — and nobody concluded that elevators were a mistake.

Now it is AI's turn, and this time the argument is stronger: machines used to replace **muscle**, so people retreated to **cognition**; now machines replace cognition itself, so where is left to retreat? This lesson answers that “this time is different” head-on, rather than just reciting history.

The Austrian answer has three layers, each a tool you already own. The first is **comparative advantage** from Stage 1.5: Ricardo proved that even when one country is **absolutely** better at everything, both still gain from specialization — because the binding constraint is not “who is better” but **everyone's time is finite**. Replace “the other country” with “the machine” and the logic does not change a word: AI's compute is finite and priced; it should be used where its relative edge is greatest, and what remains — even if it could do it better than you — is still worth leaving to you. The second layer is **unlimited ends** from Stage 0.1: the “lump of labor” is a fallacy (the British economist D. F. Schloss named it in 1891) because work is not a fixed pile of tasks but people's **unsatisfied ends**, and there are always more ends than means. The third layer is the **entrepreneur** of Stage 6.1: released labor does not find new uses by itself; an entrepreneur sees “these people are cheaper now — I can use them for something I couldn't afford before.”

Then the honest part, where Austrians are more serious than many optimists: **transition costs are real, concentrated and can last a long time.** A fifty-year-old truck driver does not become a prompt engineer; his human capital is **specific capital** in the sense of Stage 3.4, like a dedicated machine tool, and it strands when the plan fails. And — this is the distinctively Austrian contribution — **whether adjustment goes smoothly depends on whether prices and wages can move.** If displaced labor can reprice itself, entrepreneurs find it new uses; if minimum wages, licensing and firing protections nail the price in place, adjustment becomes unemployment. Technology never causes permanent unemployment; **price rigidity does.**

**In this lesson we break it into six pieces:**

- **① The panic history: Luddites, Ricardo, Keynes, the 1964 Commission, ATMs**
- **② Comparative advantage holds against machines — even one better at everything**
- **③ Unlimited ends, the lump-of-labor fallacy and entrepreneurial redeployment**
- **④ The honest costs: transition, specific human capital, and how rigid prices turn adjustment into unemployment**
- **⑤ UBI through the five-step method**
- **⑥ “This time is different”: where is left to retreat once cognition is replaced?**
`,

  mechanics: `
### ① The panic history: Luddites, Ricardo, Keynes, the 1964 Commission, ATMs

Nail the facts first, because both sides usually get this history wrong — optimists tell it as “the Luddites were fools,” pessimists as “the past doesn't count.”

**The Luddites (1811–1816).** Mostly stocking knitters and cloth croppers in Nottinghamshire, Yorkshire and Lancashire, breaking wide knitting frames and shearing frames. They were not against technology as such; they objected to machines being used to make shoddy goods, cut piece rates and bypass apprenticeship. Parliament's Frame Breaking Act of 1812 made the offense capital; dozens were hanged or transported. The economic outcome: real textile prices collapsed over the following decades and textile employment rose across the nineteenth century, but **the real wages of handloom weavers as a group genuinely collapsed in the 1810s–30s** — a real, concentrated transition cost lasting twenty years.

**Ricardo (1821).** The new Chapter 31, “On Machinery,” in the third edition of the *Principles* records that he had changed his mind: the introduction of machinery “may be injurious to the interests of the class of labourers,” because it can reduce the circulating capital that employs them. But he held that machinery raises total output and opposed obstructing it — a country that shunned machines would lose in trade to one that used them. **He is the father of the transition-cost argument, not of the permanent-unemployment argument.**

**Keynes (1930).** “Technological unemployment” comes from “Economic Possibilities for our Grandchildren.” He called it a phase economies must pass through and predicted that a century later (around 2030) living standards would be four to eight times higher and the working week fifteen hours. The living-standards forecast was roughly right; the hours forecast was wrong — not because the technology failed, but because **people chose to spend higher productivity on more goods rather than more leisure.** That is itself empirical evidence for unlimited ends.

**The 1964 Automation Commission.** The background was unemployment stuck between 5.5% and 7% in 1961–63, widely blamed on “automation.” In March 1964 a group of scholars including Nobel laureates submitted the “Triple Revolution” memorandum; in August Johnson signed the act creating the National Commission on Technology, Automation, and Economic Progress. Its February 1966 report, *Technology and the American Economy*, concluded that **the pace of technological change had not accelerated beyond the economy's capacity to absorb it, and early-1960s unemployment stemmed mainly from insufficient aggregate demand, not automation.** It also recommended a guaranteed income and expanded education. US nonfarm employment rose from roughly 64 million in 1966 to roughly 130 million in 2000.

**ATMs and tellers (c. 1970–2010).** From James Bessen's *Learning by Doing* (2015): ATMs spread from the 1970s to about 400,000 machines in the US by 2010; over the same period the number of bank tellers rose slightly, from about half a million to a little more. The mechanism: an ATM cut the tellers needed per branch from about twenty to about thirteen, branches got cheaper, banks opened more of them (urban branches up roughly 40%), and tellers shifted from counting cash to selling and serving. **The machine replaced tasks, not the occupation; the occupation was redefined.** Teller numbers only began to fall in earnest after 2010 — because of mobile banking, not ATMs.

**Elevator operators.** A 1945 operators' strike paralyzed New York; after automatic elevators spread in the 1950s the occupation all but vanished within twenty years. **That was a genuine occupational extinction**, not task substitution. But nobody lost the end of “riding an elevator,” and the operators moved into other work — work that entrepreneurs created only once they had become hirable.

<figure><svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Two centuries of “the machines will eat the jobs”: after each panic, more jobs and higher real wages</text><line x1="50" y1="230" x2="600" y2="230" stroke="var(--line)" stroke-width="1.5"/><polyline points="50,210 130,200 210,185 290,165 370,140 450,110 530,80 600,60" fill="none" stroke="var(--orange)" stroke-width="3"/><text x="540" y="50" font-size="10.5" fill="var(--orange-ink)" font-weight="600">real wages (schematic)</text><g font-size="10.5" fill="var(--red)"><circle cx="90" cy="205" r="5" fill="var(--red)"/><text x="90" y="250" text-anchor="middle">1811</text><text x="90" y="264" text-anchor="middle">Luddites</text><circle cx="170" cy="192" r="5" fill="var(--red)"/><text x="170" y="250" text-anchor="middle">1821</text><text x="170" y="264" text-anchor="middle">Ricardo</text><circle cx="290" cy="165" r="5" fill="var(--red)"/><text x="290" y="250" text-anchor="middle">1930</text><text x="290" y="264" text-anchor="middle">Keynes</text><circle cx="400" cy="130" r="5" fill="var(--red)"/><text x="400" y="250" text-anchor="middle">1964</text><text x="400" y="264" text-anchor="middle">Automation Commission</text><circle cx="490" cy="95" r="5" fill="var(--red)"/><text x="490" y="250" text-anchor="middle">1990s</text><text x="490" y="264" text-anchor="middle">ATMs / PCs</text><circle cx="580" cy="65" r="5" fill="var(--red)"/><text x="580" y="250" text-anchor="middle">2023–</text><text x="580" y="264" text-anchor="middle">AI</text></g><g stroke="var(--blue)" stroke-width="2" stroke-dasharray="4 3" fill="none"><path d="M90 205 Q110 225 130 200"/><path d="M290 165 Q310 190 330 160"/></g><text x="120" y="150" font-size="10.5" fill="var(--blue)">blue dips = real, concentrated transition costs</text><text x="120" y="164" font-size="10.5" fill="var(--blue)">(handloom weavers 1810s–30s; the 1930s)</text><text x="320" y="290" text-anchor="middle" font-size="11" fill="var(--orange-ink)" font-weight="600">The upward trend is not automatic: it requires prices and wages that can move and entrepreneurs free to redeploy</text></svg><figcaption>Two centuries of panics and outcomes. Red dots are panic moments; the gold line is the long-run trend of real wages (schematic); blue dips are genuine transition costs. The upward trend presupposes flexible prices and free entry.</figcaption></figure>

### ② Comparative advantage holds against machines — even one better at everything

The strongest form of “this time is different” goes: machines used to beat people only at some tasks, so people could retreat to others; but if AI is better than people at **every** cognitive task, there is nowhere left to retreat.

That argument makes a mistake Ricardo corrected two hundred years ago: it assumes specialization is governed by **absolute advantage.** Stage 1.5 gave the core of comparative advantage: **who does what is decided not by “who is better” but by “whose opportunity cost is lower.”**

Take the Stage 1.5 style of example and replace “Portugal and England” with “AI and a person”:

- One hour of AI compute can draft 100 pages of legal documents, or read 50 medical scans.
- One hour of a person can draft 4 pages, or read 1 scan.

AI crushes the person absolutely at both — 25 times at drafting, 50 times at scans. **AI's comparative advantage is in scans; the person's is in drafting** — even though the person is 25 times worse at drafting. Why? Because every hour the AI spends drafting costs it 50 scans, while every hour the person spends drafting costs only 1 scan. **AI's time has an opportunity cost**, and that cost is highest exactly where AI is strongest.

The argument holds on one condition only: **AI compute is scarce and priced.** Stage 18.2 showed that it is — behind it stand hundreds of billions in capex, gigawatts of power and years of construction. As long as a GPU commands rent and a kilowatt-hour has a price, AI should be sent where its relative edge is greatest, and leaving the rest to people remains worthwhile — **even where AI would do that too better than they do.** Mises called this the “law of association” and pointed out that it applies to **any** two parties of unequal ability — his example was a genius and an ordinary person; logically it can just as well be a machine and a person.

The only world in which comparative advantage fails is one where AI compute is **truly free and unlimited** — then its opportunity cost is zero and it can do everything at once. But in that world scarcity itself has vanished and economics has no subject; and as long as power, chips, land and time remain scarce, that world does not arrive. **A world of “intelligence too cheap to meter” is still a world where comparative advantage holds** — only the location of people's comparative advantage moves.

### ③ Unlimited ends, the lump-of-labor fallacy and entrepreneurial redeployment

The second layer comes from Stage 0.1: economics studies the allocation of **scarce means to unlimited ends.** “Work” is not a fixed pile of tasks waiting to be divided; work is **ends not yet satisfied**, and there is no ceiling on their number. A person in 1800 did not know they wanted a dentist, a therapist, a dog groomer, a yoga instructor, a podcast editor; those occupations did not exist then — not because nobody wanted them, but because society was too poor and labor was tied up growing food. **Every technological substitution releases labor from an end that has been satisfied so that it can go serve an end that was previously unaffordable.**

The name “lump of labour fallacy” was coined by the British economist D. F. Schloss in 1891 to criticize the idea that workers doing less would leave more work for others. Its error is treating “work” as a fixed quantity. The AI version runs: “AI does 30% of the tasks, so 30% of people will be unemployed.” The correct arithmetic: **AI does 30% of the tasks, so 30% of labor time is released for things that previously fell below the priority line — provided someone organizes it.**

“Someone organizes it” is the third layer: the **entrepreneur** of Stage 6.1. Released labor does not find new uses automatically; somebody has to read the price signal. When a group's labor becomes cheaper because of AI, that is a signal: “these people can now be used for things that didn't pay before.” Entrepreneurs read it and create jobs that did not exist — nobody in the 1980s foresaw “web designer,” nobody in 2000 foresaw “short-video producer,” nobody in 2020 foresaw “prompt engineer.” **New jobs are created, not predicted** — the labor-market version of the novelty argument from Stage 18.1.

And the mechanism for **rising real wages** is: productivity rises → goods get cheaper → the same nominal wage buys more → real wages rise. It does not depend on “workers getting a share of the profits”; it depends on **competition passing productivity gains to consumers** — and workers are consumers. In 1900 an American household spent roughly 40% of its budget on food; today roughly 10%. The 30% freed up is “released ends,” and it supports tens of millions of jobs that did not exist in 1900.

### ④ The honest costs: transition, specific human capital, and how rigid prices turn adjustment into unemployment

Up to here optimists and Austrians sound similar. The divergence begins now, where Austrians are more serious than the optimists and more precise than the pessimists.

**Transition costs are real and concentrated.** Handloom weavers' real wages fell for twenty years; many Rust Belt manufacturing workers of the 1980s–2000s never regained their old wage. Aggregate data say “total employment rose,” but the people affected are not aggregates; they are particular people. Austrian methodological individualism (Stage 2.3) demands that we look at particular people rather than averages.

**Human capital is as specific as machinery.** Stage 3.4 gave Lachmann's “multiple specificity”: a machine can do a few things, neither one nor infinitely many. So can a person's skills — a truck driver, a radiologist, a translator with twenty years' experience has a finite set of uses for their human capital, and when AI takes over the most valuable use in that set, the remaining uses lose much of their value. This is **stranded human capital.** It hurts more than a stranded machine, because a machine can be scrapped and a person cannot.

**Adjustment needs prices that can move — the most distinctively Austrian sentence in this lesson.** A worker displaced by AI has two roads: be hired elsewhere at a lower price (and then learn new skills and climb back), or be unemployed. Which road depends on whether prices can move:

- **Minimum wages** (Stage 8.2): if a displaced worker's marginal product temporarily falls below the legal minimum, no entrepreneur can legally hire them. The price control does not change their output; it changes whether they can be employed.
- **Occupational licensing** (Stage 8.3): roughly a fifth to a quarter of US jobs require a license. A displaced worker who wants to become a barber, a real-estate agent or a nursing assistant may first need hundreds of hours and thousands of dollars for a credential — stretching “adjustment” from weeks to years.
- **Firing protections and labor-market rigidity**: an entrepreneur who knows hiring is hard to reverse hires less — especially in a period of rapid technological change that demands a lot of trial and error.

So the Austrian proposition is precise: **technology never causes permanent unemployment; price rigidity does.** It is no coincidence that the 1930s panic over technological unemployment coincided with the Great Depression — Stages 5.4 and 13.2 showed how the Hoover administration pressed firms to hold nominal wages up while prices fell 25%, which amounted to a surge in real wages; unemployment went from 3% to 25%. **The panic was blamed on machines; the actual cause was a price that had been nailed in place.**

### ⑤ UBI through the five-step method

Universal basic income is the most popular policy answer of the AI era; Sam Altman and others have publicly backed and funded experiments. Run it through the five-step method of Stage 14.1 — starting with its strongest form: **if AI sends productivity soaring while the gains accrue to capital owners, an unconditional cash transfer is simpler, less distorting and more respectful of individual judgment about one's own ends than a pile of bureaucratic welfare programs (cash fits subjective value theory better than goods in kind).** That is a serious argument, especially relative to existing welfare systems.

- **Step one: who pays?** UBI is not “paid by AI”; it is paid by taxes. $1,000 a month to 250 million adults is about $3 trillion a year — more than half of all US federal revenue. It means large tax increases, borrowing, or money creation.
- **Step two: incentives.** The 2024 OpenResearch experiment funded by Altman (about a thousand recipients, $1,000 a month, three years) reported a modest reduction in labor supply (about 1.3 hours a week on average), with some recipients using the time to search for better jobs or care for family. The effect is small but not zero; and a small, time-limited sample cannot be extrapolated to a universal, permanent program — the equilibrium effect when “everyone else stops too” is entirely different.
- **Step three: calculation.** A genuine virtue of UBI is that it **preserves prices** — unlike rationing in kind or price controls, it does not destroy signals. Austrians should concede this. But the financing distorts other prices: taxes change the relative price of labor and investment; money creation leads to step four.
- **Step four: Cantillon effects (Stage 4.3).** If UBI is financed by monetary expansion, the first recipients do benefit first, but the new money enters consumer-goods markets and lifts prices, diluting UBI's real purchasing power — while asset holders gain from the inflation. The gap UBI meant to narrow is widened by its own financing.
- **Step five: the counterfactual.** Without UBI, how would the AI transition go? The Austrian answer points back to ④: let prices and wages move and entry be free, and the transition is faster and more dispersed; if UBI replaces those conditions rather than supplementing them, it weakens the incentive to adjust.

The conclusion is not “UBI is wrong” but: **its value depends on what it replaces and how it is financed.** A modest, tax-financed UBI that replaces a pile of price-distorting welfare programs is one thing; a large, money-financed UBI offered as a permanent solution to “AI means people no longer need to work” is another — it amounts to repealing the law of unlimited ends and assuming humanity's wants are already satisfied to the point where all that remains is to hand out cash.

### ⑥ “This time is different”: where is left to retreat once cognition is replaced?

Finally, the strongest objection, head-on: machines replaced muscle and people retreated to cognition; now AI replaces cognition — where do people go?

The first answer is already in ②: **comparative advantage does not require people to have any “absolutely irreplaceable” domain.** As long as AI compute is scarce, its opportunity cost is highest where it is strongest, and people still have work where they are relatively least bad. That is not consolation; it is arithmetic.

The second answer is in ③: **ends are unlimited, and new ends are created in action.** Many of today's best-paid jobs did not exist in 2000; the most common jobs of 2040 probably do not exist today. The pessimistic argument silently assumes “future ends = today's ends,” which is exactly the mistake the AI planner made in Stage 18.1.

The third answer qualifies the word “cognition.” What AI replaces is **computable cognition** — the part with a distribution, learnable from a corpus (Knight's knife from Stage 18.3). Judgment, bearing, the setting of ends, on-the-spot tacit knowledge (Stage 7.2), and the part of human life that is irreducibly between persons (being cared for by a person, taught by a person, accompanied by a person) are not in “computable cognition.” The relative prices of those domains will **rise**, because their supply has not grown while everything else got cheaper.

The fourth answer is the honest one: **nobody can guarantee how long or how painful the transition will be.** Twenty years for the handloom weavers is not a number to wave away. What Austrians can guarantee is one thing: let prices move, let entry be free, let entrepreneurs experiment, and the transition will be shorter than under any other arrangement — and every attempt to “protect” the displaced by nailing prices in place stretches their transition from years to a generation.

The whole lesson in one sentence: **technology replaces tasks, not ends; comparative advantage guarantees people always have something worth doing, even against a machine better at everything; entrepreneurs steer released labor toward ends that were previously unaffordable; and whether any of that happens depends on whether prices and wages are allowed to adjust.** Stage 18.5 turns to the other end of the question: what if this technological wave is also a credit-driven capex frenzy?
`,

  demo: "automation-shift",

  analogy: `
Think of the economy as a **village of a hundred people**, and of “work” as the villagers' **ranked wish list.**

At first ninety people grow food and ten do everything else — because not growing food means starving, so food tops the list. One day a tractor arrives, and ten people can grow the whole village's food. The pessimist says: “Eighty people are unemployed!”

But the list still has eighty wishes that never made the cut before: warmer houses, children who can read, someone to fix a toothache, someone to tell stories in the evening. Those eighty people are not out of work; they are **finally free to do the things further down the list.** Who organizes them? A few villagers notice “there are eighty cheap workers now,” and open a school, build houses, start a clinic — they are the entrepreneurs.

The tractor is better than anyone at growing food; is it better at building houses too? Even if it is — there is only one tractor, and if it builds houses it cannot grow food. So it farms and people build. That is comparative advantage.

Now suppose the village chief issues two decrees: “no wage may fall below the farming wage” and “house-building requires a license.” The eighty people's output in their new jobs is temporarily too low for anyone to afford them at the old wage, and the license takes three years. They really are unemployed — **not because of the tractor, but because of the two decrees.**

Suppose instead the chief says, “We'll just give everyone a sack of grain; nobody needs to work.” Where does the grain come from? Levied from the ten farmers and the tractor. And the eighty wishes on the list? Still there — just nobody doing them.
`,

  misconceptions: [
    "**“AI will be better than people at every cognitive task, so people will have nowhere to retreat.”** — That is absolute-advantage thinking, corrected by Ricardo in 1817. Specialization is governed by comparative advantage (opportunity cost): as long as AI compute is scarce and priced, its opportunity cost is highest where it is strongest, and people keep worthwhile work where they are relatively least bad. Comparative advantage fails only when compute is truly free and unlimited — when scarcity itself has vanished.",
    "**“AI does 30% of the tasks, so 30% of people will be unemployed.”** — The lump-of-labor fallacy (Schloss, 1891). Work is not a fixed quantity but unsatisfied ends; 30% of labor time released means it can go to ends that previously fell below the line — provided entrepreneurs are free to redeploy it and prices can move.",
    "**“It worked out every time before, so it will work out this time and transition costs can be ignored.”** — Austrians do not say that. Handloom weavers' real wages collapsed for twenty years; human capital is as specific as machinery and strands; rising aggregates do not mean particular people were unharmed. Methodological individualism demands looking at particular people. The Austrian promise is only that under flexible prices the transition is shortest.",
    "**“The 1930s prove technological unemployment is real.”** — 1930s unemployment coincided with Hoover's policy of holding nominal wages up while prices fell 25%; the surge in real wages is what took unemployment from 3% to 25% (Stages 5.4, 13.2). The panic was blamed on machines; the cause was a nailed-down price.",
    "**“UBI is a welfare scheme Austrians must oppose.”** — Not necessarily. UBI preserves price signals and fits subjective value theory better than rationing in kind or price controls; a modest, tax-financed UBI replacing distorting welfare programs is a serious proposal. What Austrians oppose is a large UBI financed by monetary expansion (Cantillon effects dilute it) and sold as a permanent answer to “people no longer need to work” — which repeals the law of unlimited ends.",
  ],

  quiz: [
    {
      q: "AI can draft 100 pages or read 50 scans per hour; a person can draft 4 pages or read 1 scan. By comparative advantage, who should draft?",
      options: [
        "AI, because it is 25 times better at drafting",
        "Neither",
        "The person, because their opportunity cost of drafting (1 scan forgone) is far below AI's (50 scans forgone)",
        "It cannot be determined",
      ],
      answer: 2,
      explain: "Specialization follows opportunity cost, not absolute ability. Each hour AI drafts costs 50 scans; each hour the person drafts costs 1 — the person has the comparative advantage in drafting despite being absolutely worse.",
    },
    {
      q: "What was the central conclusion of the 1966 report of the US National Commission on Technology, Automation, and Economic Progress?",
      options: [
        "Automation would cause permanent mass unemployment",
        "The pace of technological change had not outrun the economy's ability to absorb it; early-1960s unemployment stemmed mainly from insufficient aggregate demand",
        "Further automation should be banned",
        "Machines should be taxed",
      ],
      answer: 1,
      explain: "Created amid the “Triple Revolution” panic, the Commission rejected the automation-unemployment claim; US employment then grew by tens of millions.",
    },
    {
      q: "What happened to the number of US bank tellers as ATMs spread (c. 1970–2010), and why?",
      options: [
        "It rose slightly: fewer tellers per branch made branches cheaper, banks opened more of them, and tellers moved into sales and service",
        "It fell sharply as machines replaced tellers",
        "It stayed the same",
        "It rose then collapsed",
      ],
      answer: 0,
      explain: "Bessen's case: the machine replaced tasks, not the occupation, which was redefined. Teller numbers fell only after 2010, because of mobile banking.",
    },
    {
      q: "What is the most distinctively Austrian proposition about technology and unemployment?",
      options: [
        "Technology always increases employment",
        "Technology never causes permanent unemployment; price rigidity — minimum wages, licensing, firing protections — is what turns adjustment into unemployment",
        "Technological unemployment is unavoidable",
        "Government should subsidize displaced workers' old jobs",
      ],
      answer: 1,
      explain: "If displaced workers can be hired elsewhere at a lower price, entrepreneurs find new uses; if the price is nailed down, they cannot be hired. The 1930s are the largest example.",
    },
    {
      q: "In the five-step analysis of UBI, which step depends most critically on the method of financing?",
      options: [
        "Whether it respects individual judgment about ends",
        "Whether it is simpler than in-kind welfare",
        "Its administrative cost",
        "Cantillon effects: if financed by money creation, new money lifts consumer prices and dilutes UBI's purchasing power while asset holders gain, widening the gap",
      ],
      answer: 3,
      explain: "UBI itself preserves price signals, but money-financed UBI defeats itself through Cantillon effects (Stage 4.3); a modest tax-financed version replacing distorting programs is a different animal.",
    },
  ],

  further: [
    { label: "Ricardo, Principles of Political Economy and Taxation (3rd ed. 1821), Chapter 31 “On Machinery” (Econlib full text)", url: "https://www.econlib.org/library/Ricardo/ricP.html" },
    { label: "Keynes, Economic Possibilities for our Grandchildren (1930) — origin of the phrase “technological unemployment” (hosted at Yale)", url: "https://www.econ.yale.edu/smith/econ116a/keynes1.pdf" },
    { label: "Mises, Human Action, Chapter VIII §4 “The Ricardian Law of Association” — comparative advantage in praxeological form", url: "https://mises.org/library/book/human-action" },
    { label: "Econlib Encyclopedia: Comparative Advantage", url: "https://www.econlib.org/library/Enc/ComparativeAdvantage.html" },
    { label: "James Bessen, Learning by Doing (2015) and the ATM–teller analysis (author page)", url: "https://www.bu.edu/law/profile/james-bessen/" },
  ],
};
