export default {
  id: "spontaneous-law",
  stage: 9,
  order: 3,
  title: "Law Can Grow Too: Common Law, Lex Mercatoria & Leoni",
  difficulty: "systems",
  prereqs: ["spontaneous-order", "why-property"],

  oneLiner:
    "Most people assume law is whatever the legislature writes down. Yet the bulk of English common law, the core of Roman law, the commercial rules medieval merchants traded under, and the arbitration customs of today's international trade were never “enacted” by any legislature — they **grew, case by case, out of the rulings in countless particular disputes.** The Italian jurist Bruno Leoni argued in 1961 that **legislation is central planning and case law is a market**: in the first, a few people decide everyone's rules at a stroke; in the second, innumerable judges “discover” rules inside concrete cases. This lesson applies Stage 7.4's spontaneous order to law — and says honestly that grown law is not automatically good law, and that Austrians have not finished arguing about that.",

  intuition: `
Try a thought experiment. You and your neighbor are in court over a tree: it stands on your land, its branches reach over his, and its leaves clog his gutter. How does the judge decide?

One way: open the code. If section 372 says “where branches cross a boundary the neighbor may cut them,” do that. But suppose the code was written in 1950, when nobody imagined that “overhanging branches” belongs to the same family of problems as “shading a solar panel” or “blocking a drone corridor.” A code is written **once**; the world keeps producing new situations — and the code either falls silent or gets forced onto them.

Another way: look for precedents. Somebody ruled in 1890 on “roots cracking the neighbor's foundation,” somebody else in 1930 on “branches darkening the neighbor's window.” The judge sets your case beside them: which does it resemble, which not? Then rules. And once ruled, your case becomes a precedent too; when someone sues in 2040 over a tree blocking a drone, they will cite you. **The rule is not written; it is accumulated one case at a time** — it has no author, and yet it grows ever finer.

That is the central distinction of Leoni's *Freedom and the Law* (1961): **law can be “made” (legislation) or “found” (judge-discovered law).** His insight was to connect this to the calculation debate of Stages 7.1 and 7.2. The difficulty facing a legislator **is the same difficulty** facing a central planner: he must know everyone's circumstances in advance to write a rule that fits everyone — and that knowledge is dispersed, local, and constantly changing (the knowledge problem of Stage 7.2). Case law works like a market: each judge handles only the dispute in front of him and needs only that dispute's local knowledge; countless local rulings stack into a body of rules that nobody designed as a whole and that nevertheless accommodates everyone's particular situation.

Hayek, in Volume 1 of *Law, Legislation and Liberty* (1973), gave the two things Greek names: **nomos** — spontaneously formed rules of just conduct, abstract, negative (they tell you what not to do rather than what to do), applying equally to all; and **thesis** — rules of organization issued for particular purposes, like a company's regulations. His complaint was that modern parliaments blend the two and dress every command in the single word “law.”

The historical part of this lesson will surprise you. **Roman law** was mostly the accumulated answers of jurists to concrete questions; **English common law** ran for centuries with almost no help from Parliament; **medieval merchants**, with no transnational government of any kind, operated a Europe-wide commercial law through fair courts and reputation; Iceland ran for over three hundred years without an executive; and today's **international commercial arbitration**, industry standards, and e-commerce dispute resolution are doing the same thing.

But the lesson must also say two less convenient things. First, “grown” is not automatically “good” — customary law once sanctioned slavery, and the common law once handed the smoke to the factory (Stage 9.2). Second, Austrians disagree substantively about how to judge whether a grown rule is good: Hayek says look at whether it survived evolution; Rothbard says look at whether it fits the axioms of property. Stage 14.3 confronts that disagreement head-on.

**In this lesson we break it into six pieces:**

- **① Leoni: legislation is central planning, case law is a market**
- **② Hayek's nomos and thesis: law precedes legislation**
- **③ The law merchant: how transnational commercial law ran without a government**
- **④ Polycentric legal orders: Iceland and Anglo-Saxon England**
- **⑤ Private law today: arbitration, standards, platform disputes and “code is law”**
- **⑥ Is grown law good law? Hayek's evolutionism vs Rothbard's natural law**
`,

  mechanics: `
### ① Leoni: legislation is central planning, case law is a market

Bruno Leoni (1913–1967) was an Italian jurist and, in the 1950s, a member of the Mont Pelerin Society alongside Mises and Hayek. *Freedom and the Law* grew out of lectures he gave in the United States in 1958 and was published in 1961. The argument has three layers.

**Layer one: the two sources of law.** The core of Roman law was not imperial decree but the accumulated *responsa* of **jurists** (jurisconsults) to concrete questions, together with the edicts of the praetors, built up generation by generation — Justinian's *Digest* (533) is a compilation of several centuries of juristic opinion. English common law is the same: judges claimed not to be “making” law but to be “finding” rules that already existed in social custom, and for centuries Parliament barely touched private law. Leoni called this **“law as a discovery process”** — the same idea as Hayek's “competition as a discovery procedure” in Stage 6.2.

**Layer two: the knowledge problem of legislation.** A code must give rules in advance for everyone in every situation. What must the legislator know? Every possible type of dispute, every party's circumstances, every consequence of the rule. That is precisely the “knowledge of the particular circumstances of time and place” that Stage 7.2 showed no central planner can have. Leoni's analogy is exact: **the legislator is to law what the planner is to prices** — both try to replace the local adjustments of countless people with the comprehensive design of a few.

**Layer three: the paradox of legal certainty.** The strongest argument for legislation is certainty: black on white, open to all. Leoni pointed out that this is **short-run certainty**: the text is certain today, but tomorrow's parliament can change it, and changes it ever more often. Genuine long-run certainty comes from case law: rules evolve slowly over centuries, and next year's rule is almost surely this year's, because nobody has the power to rewrite it overnight. His striking observation: a modern legislature passes more statutory text in a year than the entire age of the Roman jurists produced in centuries. **Productivity is not a virtue here — it means nobody can predict the rules any more.**

### ② Hayek's nomos and thesis: law precedes legislation

Hayek, in *Rules and Order* (1973), the first volume of *Law, Legislation and Liberty*, systematized Leoni's distinction and mapped it onto the cosmos/taxis pair of Stage 7.4:

- **nomos** (rules of just conduct): formed spontaneously in social interaction; **abstract** (not aimed at particular persons or events), **negative** (marking out protected domains rather than prescribing actions), **universal** (the same for all), **purpose-independent** (serving no particular goal). “Do not invade another's property,” “promises must be kept,” “harm must be compensated” — these are nomos. They underpin spontaneous order (cosmos).
- **thesis** (rules of organization, legislation): laid down by an authority for a **specific purpose**, and directive — “file your taxes by 15 April,” “speed limit 60 on this road.” They underpin organizations (taxis).

<figure><svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="160" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--blue)">Legislation (thesis): top-down, written once</text><text x="480" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--orange-ink)">Case law (nomos): bottom-up, grown case by case</text><g><rect x="70" y="40" width="180" height="34" rx="8" fill="var(--blue-soft)" stroke="var(--blue)"/><text x="160" y="62" text-anchor="middle" font-size="11" fill="var(--ink)">Parliament writes one code for all</text></g><path d="M160 74 L160 96" stroke="var(--blue)" stroke-width="2" marker-end="url(#la)"/><g><rect x="70" y="100" width="180" height="34" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="160" y="122" text-anchor="middle" font-size="11" fill="var(--ink)">Fixed text applied to every case</text></g><path d="M160 134 L160 156" stroke="var(--blue)" stroke-width="2" marker-end="url(#la)"/><g><rect x="70" y="160" width="180" height="34" rx="8" fill="var(--red-soft)" stroke="var(--red)"/><text x="160" y="182" text-anchor="middle" font-size="11" fill="var(--ink)">New situation: silence or forced fit</text></g><path d="M160 194 L160 216" stroke="var(--blue)" stroke-width="2" marker-end="url(#la)"/><g><rect x="70" y="220" width="180" height="34" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="160" y="242" text-anchor="middle" font-size="11" fill="var(--ink)">Wait for amendment (years of lag)</text></g><path d="M250 237 Q 290 237 290 130 Q 290 57 250 57" fill="none" stroke="var(--blue)" stroke-width="1.5" stroke-dasharray="4 3"/><text x="160" y="285" text-anchor="middle" font-size="10" fill="var(--muted)">legislator must foresee everything → knowledge problem</text><g><rect x="390" y="40" width="180" height="34" rx="8" fill="var(--orange-soft)" stroke="var(--orange-line)"/><text x="480" y="62" text-anchor="middle" font-size="11" fill="var(--ink)">One concrete dispute</text></g><path d="M480 74 L480 96" stroke="var(--orange)" stroke-width="2" marker-end="url(#lb)"/><g><rect x="390" y="100" width="180" height="34" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="480" y="122" text-anchor="middle" font-size="11" fill="var(--ink)">Judge rules by analogy to precedent</text></g><path d="M480 134 L480 156" stroke="var(--orange)" stroke-width="2" marker-end="url(#lb)"/><g><rect x="390" y="160" width="180" height="34" rx="8" fill="var(--green-soft)" stroke="var(--green)"/><text x="480" y="182" text-anchor="middle" font-size="11" fill="var(--ink)">Ruling becomes precedent, rule set +1</text></g><path d="M480 194 L480 216" stroke="var(--orange)" stroke-width="2" marker-end="url(#lb)"/><g><rect x="390" y="220" width="180" height="34" rx="8" fill="var(--surface-2)" stroke="var(--line)"/><text x="480" y="242" text-anchor="middle" font-size="11" fill="var(--ink)">New situation: distinguish / extend</text></g><path d="M570 237 Q 610 237 610 130 Q 610 57 570 57" fill="none" stroke="var(--orange)" stroke-width="1.5" stroke-dasharray="4 3"/><text x="480" y="285" text-anchor="middle" font-size="10" fill="var(--muted)">needs only each case's local knowledge → accumulates like a market</text><defs><marker id="la" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="var(--blue)"/></marker><marker id="lb" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="var(--orange)"/></marker></defs><text x="320" y="305" text-anchor="middle" font-size="10" fill="var(--muted)">Two loops: each turn of the left one needs a central decision; each turn of the right one needs only a local ruling</text></svg><figcaption>The legislative loop jams at “new situation → wait for amendment” because it demands centralized knowledge; every step of the case-law loop uses only local knowledge, so it adapts faster — at the price of having no single author and no single “version number.”</figcaption></figure>

Hayek's historical thesis is that **law precedes legislation.** Human societies had law — custom, rulings, precedent — for millennia before they had parliaments; legislatures are a late arrival that at first merely **declared** existing rules and only gradually usurped the power to **manufacture** them. He saw the decay of the modern “rule of law” in parliaments passing off thesis as nomos: commands for specific purposes (“support this industry,” “subsidize that group”) wearing the robe of general law — the legal form of the interventionism in Stage 8.1. His remedy in Volume 3 — separate institutions for making nomos and for making thesis — has been adopted by no country, which itself says something.

### ③ The law merchant: how transnational commercial law ran without a government

In the eleventh to thirteenth centuries, merchants from Flanders, Genoa and the Hanseatic towns converged on the **Champagne fairs** in France. They came from different kingdoms; whose law governed them? The answer: no king's — but **the merchants' own**, the lex mercatoria.

As described by Bruce Benson in *The Enterprise of Law: Justice Without the State* (1990) and in the famous 1990 paper by Milgrom, North and Weingast, it worked roughly like this:

- **Specialized courts**: fairs had merchant courts (in England, “piepowder courts,” from the dusty feet of travelling traders); the judges were merchants themselves; cases were decided fast, often within the day, by commercial custom rather than any national code.
- **Enforcement by reputation**: the courts had no police. A merchant who defied a judgment was recorded, and next time he came to the fair nobody would deal with him — in a network built on repeated trade, exclusion is far more frightening than a fine. Milgrom, North and Weingast showed game-theoretically that a credible record-keeper suffices to sustain honest dealing between strangers.
- **Rules that grew**: bills of exchange, bills of lading, insurance, partnership — much of the machinery of modern commercial law took shape case by case in these courts, and was only later “codified” by states.

An **honest footnote** belongs here. Recent legal history (notably Emily Kadens's 2012 critique) argues that “a single, uniform, transnational merchant law wholly independent of royal power” has been romanticized; many merchant courts held a lord's charter, and the rules were less uniform than the story suggests. The cautious conclusion is: **there existed private, cross-jurisdictional dispute resolution enforced by reputation, and it incubated many institutions of later commercial law.** That is enough to support Leoni's point; nothing more is needed.

### ④ Polycentric legal orders: Iceland and Anglo-Saxon England

“Polycentric” means an order in which **several providers of law coexist and people can choose among them.** Two historical cases are cited most often.

**The Icelandic Commonwealth (c. 930–1262).** As historians describe it: no king, no executive, no standing army. The country was divided among some three dozen **chieftains** (goðar), but the chieftaincy (goðorð) was **property — bought, sold, inherited, transferred** — and farmers could **choose freely** which chieftain to follow, regardless of where they lived; a chieftain who served badly lost his clients. Law was made at the national assembly (the Althing) and recited yearly by the “Lawspeaker”; courts gave judgments, but **enforcement was private**: the winning party, his chieftain and allies carried it out. David Friedman's 1979 paper used it as a historical case of “private creation and enforcement of law.” The honest part: in the thirteenth century power concentrated in a few great families, civil war broke out, and in 1262 Iceland submitted to Norway — a polycentric order **can degenerate**, and Austrians are far from finished explaining why.

**Anglo-Saxon England (c. 600–1066).** The institutions historians describe include **hundred courts** composed of local freemen; the **tithing** — ten households mutually pledged, so that if one offended the others had to produce him or pay; and **wergild** — compensation for injury or killing, scaled to the victim's status and paid to the victim and his kin, not to a state. Benson stresses that this was a system **centred on compensating victims.** After the Norman Conquest, kings progressively took fines into the royal purse (an offence breached “the king's peace,” so the fine went to the king), and crime shifted from “harm to a victim” to “offence against the king” — a turn Benson regards as decisive in legal history: **the victim went from party to witness.**

The lesson of these cases is not “back to the Middle Ages.” It is that **producing and enforcing law is not a defining function of the state; alternatives have existed**, with their own mechanisms (choice, reputation, compensation) and their own modes of failure (concentration of power, external conquest).

### ⑤ Private law today: arbitration, standards, platform disputes and “code is law”

The private production of law never stopped; it only changed names.

**International commercial arbitration.** The ICC International Court of Arbitration (Paris, founded 1923) and the American Arbitration Association (1926) handle thousands of cross-border commercial disputes a year; the parties choose their arbitrators, choose the applicable rules, keep proceedings confidential, and usually waive appeal. The 1958 New York Convention makes arbitral awards enforceable in about 170 signatory states as if they were domestic judgments — **states have recognized the force of private rulings.** Almost every large international contract chooses arbitration over courts, for the same reasons as in the age of the law merchant: expertise, speed, predictability.

**Industry standards.** The rules the internet runs on (TCP/IP, HTTP) come from the IETF's RFC documents, on the principle of “rough consensus and running code,” with no legislation whatever; ISO standards, accounting standards, and the internal arbitration of New York's diamond dealers (Lisa Bernstein's 1992 study: enforced by reputation and expulsion from the exchange) all belong to the same family.

**Platform dispute resolution.** eBay's resolution centre reportedly handles tens of millions of buyer–seller disputes a year, almost none of them through any court; Taobao once ran a “public jury” in which experienced users voted on small disputes. These are **new merchant courts**: fast, cheap, enforced by reputation (ratings, account bans), with rules iterated case by case. Stage 16.4 looks at the other side — what happens when the platform is both court and party.

**“Code is law” and its limits.** Smart contracts (Stage 17.4) write rules into programs: when the condition is met, execution is automatic, no judge required. That looks like nomos at its purest — fully abstract, automatic, blind to persons. But The DAO episode of 2016 showed the limit: a flawed contract was exploited to drain about 50 million dollars' worth of ether, the code “executed correctly,” and the community hard-forked to reverse the result — **when the code's outcome conflicts with participants' understanding of the rules, the final arbiter is still human.** Code also cannot handle situations it did not foresee (contractual incompleteness), and depends on “oracles” for off-chain facts. The accurate version of the slogan is: **code is an enforcement mechanism; law is still discovered.**

### ⑥ Is grown law good law? Hayek's evolutionism vs Rothbard's natural law

Up to here the lesson has sounded like a hymn to spontaneous law. Now the brakes: **spontaneous formation is not justification.** Customary law sanctioned slavery, duelling, and the propertylessness of married women; Stage 9.2 showed nineteenth-century courts using a “balancing test” to award the smoke to the factory. If “whatever grew is right,” we have no standpoint from which to criticize any of that. Austrians give two answers, and the difference is substantive.

**Hayek's evolutionism.** Rules are selected in competition among groups: groups that adopt better rules prosper and absorb others, and the rules spread. Judges should respect tradition, because tradition holds experience nobody can comprehend as a whole. Critics (Rothbard, Hoppe) raise two objections: **survival is not justification** — a rule may survive because it serves rulers; and Hayek himself conceded that the common law can enter “dead ends” (captured, say, by a dominant class) that require **legislation to correct** — which invites the legislator back in, just where Leoni wanted him out.

**Rothbard's natural law.** *The Ethics of Liberty* (1982) holds that the content of law can be deduced from the **axioms of property** (self-ownership and homesteading, Stage 9.1); the judge's task is not to continue custom but to apply those axioms to the case — custom has force only where it agrees with them. The advantage: a standard for judging grown rules. The cost: it requires judges to accept a set of ethical axioms first, and Stage 9.1 showed those axioms are themselves contested within the school.

**Leoni** in fact stood between the two: he argued case law is superior to legislation but conceded that case law needs an “internal standard” — he never finished the thought; he was killed in 1967.

This is not academic decoration. It determines how you read Stage 9.4 on free banking (let the market evolve fractional reserves, or forbid them on property grounds?), Stage 16.4 on platform rules (are a platform's self-made rules nomos?), and Stage 17.4 on on-chain governance (is a hard fork evolution or betrayal?). Stage 14.3 lays the Misesian, Hayekian and Rothbardian positions side by side. **The conclusion of this lesson is limited but firm: law can arise and function well without a legislator; whether what it produces is good requires a further standard — and that standard is what Austrians are still arguing about.**
`,

  demo: "law-evolution",

  analogy: `
Think of law as **a map.**

**Legislation** is an official map drawn once by the survey office: precise, authoritative, available to all. The trouble is that the city keeps growing — new roads, demolished bridges, rerouted rivers — and none of it is on the map. The office issues a new edition every few years, but between editions, following the map walks you into walls. The more “complete” the map, the harder it is to revise, because every change must pass through the whole approval chain. That is Leoni's “certain in the short run, uncertain in the long run”: **you know what the map says, but not whether tomorrow's map will contradict it.**

**Case law** is a map drawn stroke by stroke by everyone who has ever walked the city: each person draws only the stretch they walked. It starts crude, but every new walker adds detail; whoever hits a dead end marks “no through road”; whoever finds a new street adds a line. Nobody has ever seen the whole map, and yet it fits the city better than any survey-office edition — because it uses each person's knowledge of the here and now. That is Hayek's nomos: order without an author.

The law merchant is a map drawn by a band of international travellers whose routes no survey office reached; Iceland is a city that went three hundred years without a survey office; arbitration is a private guide a company hires; “code is law” is a satnav — but when it directs you into the river, you still have to decide whether to get out of the car.

The awkward question is in the picture too: **can a crowd-drawn map mark a wrong road as open, and keep it marked for centuries?** Yes. Hayek says: check whether people still walk it. Rothbard says: first define what counts as a road. That is the argument Stage 14.3 will have.
`,

  misconceptions: [
    "**“Without a legislature there is no law.”** — Roman private law, English common law, the medieval law merchant, the Icelandic Commonwealth, and today's international arbitration and industry standards all arose and operated with little or no legislative involvement. Hayek's historical thesis is that law precedes legislation: legislatures arrived late and at first merely declared existing rules.",
    "**“Case law is uncertain; only a code gives certainty.”** — Leoni showed this confuses the short run with the long run: a code's text is certain today but can be rewritten by the next parliament at will; case law evolves slowly over centuries and nobody can rewrite it overnight, so long-run expectations are more stable. The productivity of modern legislatures is precisely a source of uncertainty.",
    "**“The law merchant proves a fully stateless legal system once existed.”** — Recent legal history warns that “a uniform transnational merchant law wholly independent of royal power” may be romanticized; many merchant courts held a lord's charter. The cautious conclusion — that private, cross-jurisdictional, reputation-enforced dispute resolution existed and incubated modern commercial law — is enough to support Leoni without exaggeration.",
    "**“Rules that grew are good rules.”** — Customary law sanctioned slavery, and the common law once awarded the smoke to the factory. “Spontaneous” only means no legislator was needed, not that the rule is just. Austrians differ substantively on the standard: Hayek looks to evolutionary survival, Rothbard to conformity with the axioms of property — Stage 14.3 deals with it directly.",
    "**“Smart contracts have made ‘code is law’ real; judges are obsolete.”** — In The DAO episode of 2016 the code “correctly executed” an exploit and the community hard-forked to reverse it: when the code's result conflicts with participants' understanding of the rules, humans still decide. Code is an enforcement mechanism; it cannot handle unforeseen situations and depends on off-chain oracles; law is still discovered and interpreted.",
  ],

  quiz: [
    {
      q: "In Freedom and the Law (1961), to whom does Leoni compare the legislator?",
      options: [
        "The entrepreneur — both judge under uncertainty",
        "The central planner — both try to replace countless local adjustments with the comprehensive design of a few",
        "The merchant — both enforce rules by reputation",
        "The consumer — both choose in a market",
      ],
      answer: 1,
      explain: "Leoni's central insight links the two sources of law to the calculation debate: the legislator is to law what the planner is to prices — both face a knowledge problem of dispersed knowledge that cannot be centralized.",
    },
    {
      q: "In Hayek's Law, Legislation and Liberty, what is nomos?",
      options: [
        "Directive rules issued by parliament for a specific purpose",
        "The king's decree",
        "A company's internal regulations",
        "Spontaneously formed rules of just conduct: abstract, negative, universal, purpose-independent",
      ],
      answer: 3,
      explain: "Nomos consists of the rules of just conduct that underpin spontaneous order (cosmos); thesis consists of purposive rules that underpin organizations (taxis). Hayek's complaint is that modern parliaments pass off thesis as nomos.",
    },
    {
      q: "How were the judgments of the medieval law merchant mainly enforced?",
      options: [
        "By police sent by the various kings",
        "By excommunication from the Church",
        "By reputation: whoever defied a judgment was excluded from the fair-trading network",
        "By the merchant courts' own armies",
      ],
      answer: 2,
      explain: "Merchant courts had no coercive force; they relied on records and reputation. In a network dependent on repeated trade, exclusion is worse than a fine. Milgrom, North and Weingast (1990) modelled the mechanism game-theoretically.",
    },
    {
      q: "Among the institutions historians describe for the Icelandic Commonwealth, which best illustrates “polycentricity”?",
      options: [
        "Chieftaincies were transferable property, and farmers could freely choose which chieftain to follow regardless of location",
        "The king appointed all judges",
        "There was only one court in the country",
        "Law was enforced by the army",
      ],
      answer: 0,
      explain: "Polycentric order means several providers of law coexist and people can choose among them. Iceland's transferable goðorð and free choice of chieftain is the classic case — and its thirteenth-century collapse reminds us such orders can degenerate.",
    },
    {
      q: "What is the disagreement between Hayek's evolutionism and Rothbard's natural law about judging “grown” rules?",
      options: [
        "Hayek thinks rules do not matter; Rothbard thinks they do",
        "Hayek asks whether a rule survived evolution; Rothbard asks whether it conforms to the axioms of property",
        "Hayek supports legislation; Rothbard opposes all law",
        "There is no disagreement",
      ],
      answer: 1,
      explain: "Hayek respects traditions that survived evolution (while conceding legislation may be needed to correct dead ends); Rothbard holds that survival is not justification and that the content of law should be deduced from self-ownership and homesteading. The split shapes their views on free banking, platform rules and on-chain governance (Stage 14.3).",
    },
  ],

  further: [
    { label: "Bruno Leoni, Freedom and the Law (1961): the original statement of law as a discovery process (full text, Online Library of Liberty)", url: "https://oll.libertyfund.org/titles/leoni-freedom-and-the-law-lf-ed" },
    { label: "Hayek, Law, Legislation and Liberty, Vol. 1: Rules and Order (1973): nomos and thesis", url: "https://mises.org/library/book/law-legislation-and-liberty-volume-1-rules-and-order" },
    { label: "Bruce Benson, The Enterprise of Law: Justice Without the State (1990): the law merchant, Anglo-Saxon law and modern private law", url: "https://mises.org/library/book/enterprise-law-justice-without-state" },
    { label: "David Friedman, “Private Creation and Enforcement of Law: A Historical Case,” Journal of Legal Studies 8 (1979): the Icelandic Commonwealth", url: "https://www.daviddfriedman.com/Academic/Iceland/Iceland.html" },
    { label: "Milgrom, North & Weingast, “The Role of Institutions in the Revival of Trade: The Law Merchant, Private Judges, and the Champagne Fairs,” Economics & Politics 2 (1990)", url: "https://onlinelibrary.wiley.com/doi/10.1111/j.1468-0343.1990.tb00020.x" },
  ],
};
