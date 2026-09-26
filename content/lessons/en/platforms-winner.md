---
id: platforms-winner
prereqs: network-effects, monopoly-question
demo: platform-tipping
---

# Platforms, Two-Sided Markets & 'Winner-Take-All': The Monopoly Charge Revisited

## @hook
Google handles about nine in ten searches, Apple takes up to 30% in its App Store, Meta bought Instagram and WhatsApp, Amazon is both the marketplace and a seller in it — and for a decade antitrust agencies everywhere have been suing platforms. The theory behind the charge: **network effects make platforms winner-take-all, a winner cannot be dislodged, therefore competition is dead.** This lesson steelmans two-sided-market theory and the cases, then brings in the tools of [[competition-process|Stages 6.2]] and 6.4: competition is a process not a state, consumer sovereignty is the only test, and the list of “unassailable” networks that fell is long. Then it names what Austrians **should** worry about — not size, but **moats dug by the state**: intellectual property, regulatory capture, licensing, and the rules platforms lobby for that conveniently raise their rivals' costs.

## @intuition
Start with some pricing that looks illogical. A free newspaper: readers pay nothing, advertisers pay everything. A credit card: the cardholder pays nothing and gets cash back, the merchant pays 2–3% per transaction. An app store: users download for free, developers hand over up to 30%. A ride-hailing platform: early riders get discounts, early drivers get bonuses, and the platform loses money. If you apply the [[price-formation|Stage 1.3]] template — one good, one group of buyers, one group of sellers — every one of these prices is wrong: whoever uses more should pay more.

In 2003 Jean Tirole and Jean-Charles Rochet gave this pricing a name: the **two-sided market.** A platform is not selling a good; it is matching two groups who need each other. Its pricing problem is not “how much to charge” but “**which side to charge**” — because the more people on one side, the more the other side wants to come. Charge little or nothing to the price-sensitive side, charge the side that gains most from the other's presence, and the network turns. This is the commercial form of the indirect network effect of [[network-effects|Stage 15.1]], and a good part of Tirole's 2014 Nobel was awarded for it.

The theory is elegant, and antitrust agencies picked it up quickly — pointing the other way. If both sides of a platform enjoy network effects, then once a platform wins, users will not leave (their friends are there) and sellers will not leave (the buyers are there): the winner takes all. It can then raise its commission, rank its own products first, spend billions buying any startup that might threaten it, and spend tens of billions buying the “default search engine” slot. That is the logic of the big American and European cases of the last decade, which ② walks through.

What do Austrians say? First, what they do **not** say: not that big firms are always innocent, not that the market always self-corrects, and not that network effects fail to raise entry barriers — [[network-effects|Stage 15.1]] just conceded that they do. Austrians say three more specific things.

**First, get the test right.** [[monopoly-question|Stage 6.4]] taught that share, size and margins are not evidence of monopoly; the only tests are **whether consumers are being served better** (the consumer sovereignty of [[profit-loss|Stage 6.3]]) and **whether the door to entry has been locked by law.** Measured with that ruler, many winner-take-all charges deform: a “monopolist” that cuts its price to zero every year and keeps adding features is a very odd monopolist.

**Second, read the whole history.** “Network effects make it unassailable” was said of MySpace, Nokia, BlackBerry, Internet Explorer and Yahoo — every one of which fell, and fell fast. That is not coincidence; it is the **competition-as-process** of [[competition-process|Stage 6.2]]: a leader's position has to be won again every day.

**Third, worry about the right thing.** Austrians do worry about one kind of moat — the kind **dug by the state.** Patents and copyrights, thousand-page compliance regimes, industries you need a license to enter, and the rules platforms themselves lobby for — “for safety,” “for privacy” — that happen to be unaffordable for smaller rivals ([[taxes-regulation|Stage 8.3]]). Such moats are not maintained by consumers' votes and are not washed away by better products. Antitrust agencies rarely sue over them, because they are dug by the same system the agencies belong to.

Finally, we will lay out the strongest anti-platform arguments honestly: data moats, bought defaults, “kill zone” acquisitions. They have force, and here Austrians need to develop their theory rather than repeat “the market will sort it out.”

**In this lesson we break it into six pieces:**

- **① Two-sided markets: Rochet–Tirole and “which side to charge”**
- **② The indictments: Google, Apple, Meta, Amazon and the EU's DMA**
- **③ The Austrian reply I: competition is a process — the list of the “unassailable”**
- **④ The Austrian reply II: switching costs are subjective, multi-homing is normal**
- **⑤ What Austrians should really worry about: state moats and “raising rivals' costs”**
- **⑥ The strongest opposing case, and where Austrian theory needs work**

## @mechanics
### ① Two-sided markets: Rochet–Tirole and “which side to charge”

The core of Rochet and Tirole's 2003 paper “Platform Competition in Two-Sided Markets” is one sentence: **in a two-sided market, the price structure matters, not just the price level.** Let the platform charge side A a price pA and side B a price pB, with total p = pA + pB. In an ordinary market only p matters — who nominally pays is irrelevant, since it gets passed through. In a two-sided market, moving the same p from “half each” to “A free, B pays all” changes the volume of transactions entirely, because the number of people on side A directly determines whether side B shows up.

In numbers: a dating app where men are price-sensitive, women more so, and where more women make men more willing to join. Charge both sides $10 and perhaps 1,000 of each come. Make it free for women and $20 for men, and perhaps 5,000 women and 4,000 men come — revenue goes from $20,000 to $80,000, and everyone is happier because there are more matches. **The platform's entrepreneurial job is to discover that structure** — the alertness of [[entrepreneur-alertness|Stage 6.1]] applied to pricing. It is also why the U.S. Supreme Court accepted two-sided analysis in *Ohio v. American Express* (2018): to judge whether a platform harms competition you must look at both sides together, not only at the merchant fee.

David Evans and Richard Schmalensee extended this to multi-sided platforms in *Matchmakers* (2016) and drew a conclusion vital for antitrust: **platform pricing looks predatory (below cost on one side) and looks exploitative (far above cost on the other), yet both may simply be the structure needed to make the network turn.** Measure a two-sided market with a one-sided ruler and you will almost certainly “find” a violation.

<figure><svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" font-family="Inter, system-ui, sans-serif"><text x="320" y="22" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">A two-sided platform's price structure: which side pays decides whether the network turns</text><rect x="30" y="80" width="150" height="110" rx="10" fill="var(--blue-soft)" stroke="var(--blue)" stroke-width="1.5"/><text x="105" y="108" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Side A: users / readers</text><text x="105" y="130" text-anchor="middle" font-size="11" fill="var(--muted)">price-sensitive</text><text x="105" y="150" text-anchor="middle" font-size="11" fill="var(--muted)">more of them → B wants in</text><text x="105" y="176" text-anchor="middle" font-size="12" font-weight="700" fill="var(--blue)">pA ≈ 0 (or subsidized)</text><rect x="245" y="70" width="150" height="130" rx="10" fill="var(--orange-soft)" stroke="var(--orange)" stroke-width="2"/><text x="320" y="100" text-anchor="middle" font-size="13" font-weight="700" fill="var(--orange-ink)">Platform</text><text x="320" y="122" text-anchor="middle" font-size="11" fill="var(--muted)">matches, cuts transaction costs</text><text x="320" y="142" text-anchor="middle" font-size="11" fill="var(--muted)">entrepreneurial job:</text><text x="320" y="160" text-anchor="middle" font-size="11" fill="var(--muted)">discover the price structure</text><text x="320" y="186" text-anchor="middle" font-size="11" font-weight="600" fill="var(--ink)">total p = pA + pB</text><rect x="460" y="80" width="150" height="110" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/><text x="535" y="108" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Side B: merchants / advertisers</text><text x="535" y="130" text-anchor="middle" font-size="11" fill="var(--muted)">gain most from A's numbers</text><text x="535" y="150" text-anchor="middle" font-size="11" fill="var(--muted)">less price-sensitive</text><text x="535" y="176" text-anchor="middle" font-size="12" font-weight="700" fill="var(--orange-ink)">pB carries the load</text><path d="M180,120 C215,120 215,120 245,120" stroke="var(--green)" stroke-width="2" fill="none" marker-end="url(#pw-a)"/><path d="M460,150 C425,150 425,150 395,150" stroke="var(--green)" stroke-width="2" fill="none" marker-end="url(#pw-a)"/><defs><marker id="pw-a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--green)"/></marker></defs><path d="M105,190 C105,240 535,240 535,190" stroke="var(--red)" stroke-width="1.5" fill="none" stroke-dasharray="5 4"/><text x="320" y="252" text-anchor="middle" font-size="11" fill="var(--red)" font-weight="600">Cross-side network effect: more A → B comes → more A. A one-sided ruler (price = marginal cost) reads “making the network turn” as “predation + exploitation”</text></svg><figcaption>Free newspapers, credit-card cash back and the app store's 30% are one structure: charge the side that gains most and is least price-sensitive, and let the other side be as large as possible. The structure is discovered by entrepreneurs, not derived from cost.</figcaption></figure>

### ② The indictments: Google, Apple, Meta, Amazon and the EU's DMA

Now the major cases of the last decade. A note on wording: what follows are **allegations** and **first-instance rulings**; many are still under appeal or in the remedies phase, and their status at the time of writing may not be final.

- **Google Search (U.S. Department of Justice v. Google, filed 2020).** The heart of the case was not “the share is big” but that Google paid Apple, Samsung and browser makers enormous sums (court documents put 2021 payments at about $26 billion) for the “default search engine” slot, thereby **locking up distribution by contract.** In August 2024 a federal district court ruled at first instance that Google had maintained a monopoly in general search in violation of Section 2 of the Sherman Act; the 2025 remedies ruling reportedly declined to order a Chrome divestiture, instead restricting exclusive contracts and requiring some search-data sharing. Appeals are possible. In a separate 2025 ruling on advertising technology, a court also found Google had unlawfully monopolized parts of the ad-tech stack.
- **Apple's App Store.** The charge: apps reach an iPhone only through the App Store, Apple takes up to 30% on digital goods, and developers were barred from telling users “it's cheaper on the web” (anti-steering). *Epic v. Apple* (first instance 2021) did **not** find Apple to be a monopolist under federal antitrust law, but found the anti-steering rule violated California's unfair-competition statute. The EU took a different route with the Digital Markets Act (DMA, adopted 2022), which names Apple, Google, Meta, Amazon, Microsoft and ByteDance as “gatekeepers” and requires third-party app stores and bans self-preferencing; the first DMA fines against Apple were reportedly issued in 2025.
- **Meta's acquisitions.** The U.S. Federal Trade Commission sued in 2020, alleging that buying Instagram (2012) and WhatsApp (2014) was “buying potential rivals” to maintain a social-network monopoly — “it is better to buy than compete” came from an internal Zuckerberg email. The case went to trial in 2025 and, as reported, the district court rejected the FTC's claims, citing effective competition from TikTok and YouTube among other reasons. That outcome is itself evidence for ③ — but read it as a ruling that could still change.
- **Amazon.** The FTC sued in 2023, alleging Amazon punishes third-party sellers who price lower elsewhere (anti-discounting) and ties the “Buy Box” to using Amazon's own logistics — referee and player at once. Trial is scheduled around 2027.
- **The EU's precedents.** Google Shopping: a fine of about €2.4 billion in 2017 (upheld by the EU's top court in 2024); Android: about €4.3 billion in 2018. The common charge is “self-preferencing”: ranking your own products first, or pre-installing your own apps as defaults.

Compressed into its **strongest** form: network effects give the platform accumulated users on both sides; switching costs are high for users and merchants alike; the platform can therefore (a) raise commissions without losing anyone, (b) rank its own products first, (c) lock up distribution with default contracts, and (d) buy any rival that might grow. Each of the four might have a business rationale on its own; together they form a **self-sustaining monopoly structure** — and one in which consumers never see a price tag, because the price of a free service is data and attention ([[attention-economy|Stage 16.1]]).

### ③ The Austrian reply I: competition is a process — the list of the “unassailable”

[[competition-process|Stage 6.2]] covered Hayek's 1946 essay “The Meaning of Competition”: competition is not a **state** (many small firms, homogeneous products, price equal to marginal cost) but a **discovery** process — discovering who does it best, what is wanted, which road works. By the state standard, every winner looks like a monopolist; by the process standard, a winner's position is a single frame of a film, to be replaced by the next frame.

History supplies a list, every entry once declared “too network-locked to dislodge”:

- **MySpace**: bought by News Corp in 2005 for about $580 million, the world's largest social site in 2006–2008; sold in 2011 for about $35 million.
- **Nokia**: around 40% of the world's handsets in 2007, with Symbian's largest developer ecosystem; the phone business sold to Microsoft in 2013 for about €5.4 billion, written off by Microsoft two years later.
- **BlackBerry**: about half of U.S. smartphones in 2009, near-total dominance in the enterprise; under 1% share by 2016.
- **Internet Explorer**: roughly 95% of browsers around 2003, sued by the DOJ, fined by the EU; today discontinued — beaten not by a ruling but by Firefox and Chrome.
- **Yahoo**: valued at over $100 billion in 2000, the internet's portal and default starting point; its core business sold to Verizon in 2017 for about $4.5 billion.

Add Friendster, Orkut, AOL, Netscape, Palm, and Motorola before Nokia … **none was broken up by antitrust; each was replaced by a better product.** The list does not say “today's giants will surely fall.” It says: **the premise “network effects = unassailable” has never once held up empirically.** Each time a regulator declared a platform “permanently dominant,” its share was often already slipping — when the FTC sued Meta in 2020, TikTok was exploding among American teenagers; when a court found Google's search monopoly in 2024, AI chat tools were becoming search's first real substitute in over a decade.

The Austrian argument here is not “so do nothing.” It is the logic of [[monopoly-question|Stage 6.4]]: **as long as the door to entry is not locked by law, market share is something that has to be won again every day.** The only way a leader keeps its position is by continuing to do better than every potential entrant — which is exactly what consumers want.

### ④ The Austrian reply II: switching costs are subjective, multi-homing is normal

“Users face high switching costs” is the key premise of every platform case. Austrians take it apart with the opportunity cost of [[opportunity-cost|Stage 1.4]]: **the switching cost is what each person estimates for themselves; it is not a property of the network.**

For a creator with 100,000 Instagram followers, the cost of switching is enormous; for someone who only looks at friends' photos, it is near zero. A platform's users are never a monolith but a **continuum** from “can't leave” to “could leave any time” — and networks always unravel from the low end of that continuum, from the marginal user, as [[network-effects|Stage 15.1]] explained. What TikTok took first were the teenagers who had never invested much in Instagram anyway.

More important still is **multi-homing**: users and merchants can be on several platforms at once. Drivers keep Uber and Lyft open side by side and take whichever ride comes; sellers list on Amazon, Shopify, eBay and their own site; advertising budgets flow among Google, Meta, Amazon and TikTok by return; a phone carries five social apps. Once multi-homing is cheap enough, “winner-take-all” becomes “winner-takes-a-bit-more” — because either side can try a new platform without abandoning the old one, which largely dissolves the entrant's cold-start problem (the tipping point of [[network-effects|Stage 15.1]]). The demo has a “multi-homing cost” slider; you will find it is the single most decisive parameter for whether a platform market can tip again.

Finally, the **consumer-sovereignty test** ([[profit-loss|Stage 6.3]]). A true monopolist restricts output and raises price. Look at what the accused platforms did while under prosecution: Google Search stayed free and kept adding features; Amazon Prime kept extending delivery coverage; Apple cut its commission for small developers to 15% (from 2020); Meta's ad prices are set by auction, and auction prices fell as a rival (TikTok) entered. The pattern Armentano documented in [[monopoly-question|Stage 6.4]] reappears: **the firms prosecuted are usually those competing most successfully, not those harming consumers most.**

### ⑤ What Austrians should really worry about: state moats and “raising rivals' costs”

At this point a reader might assume the Austrian conclusion is “platforms are fine.” It is not. The Austrian conclusion is: **the problem is elsewhere, and it is worse than the one the antitrust agencies are looking at.**

[[monopoly-question|Stage 6.4]]'s definition: monopoly = a state-granted exclusive privilege. Apply that definition to the platform economy and several real moats appear:

- **Intellectual property.** Patents and copyrights are legally granted exclusive rights ([[why-property|Stage 9.1]] covered the disagreement among Austrians about them). Platforms' core algorithms, interfaces, even “one-click ordering” have been patent-protected; for a would-be maker of a compatible product, the first barrier is often not engineering but legal fees.
- **Compliance costs.** The EU's General Data Protection Regulation (GDPR, in force 2018) runs to hundreds of pages; compliance is a rounding error for Google and a matter of life and death for a twenty-person startup. Some studies find that concentration in Europe's ad-tech market **rose** after GDPR took effect — the biggest beneficiaries were exactly the firms it targeted. [[data-new-oil|Stage 15.4]] re-examines this with the five-step method.
- **Licensing.** Taxi medallions protected cab companies for decades (the [[monopoly-question|Stage 6.4]] case); today's payment licenses, banking charters, content licenses and proposed “safety licenses” for AI models all turn entry into something you apply to the state for.
- **Liability immunity.** Section 230 of the U.S. Communications Decency Act (1996) shields platforms from most legal liability for user content. One camp sees it as a necessary, neutral rule that matters even more to small platforms; another sees it as a **privilege** that offline publishers and distributors do not fully enjoy. Austrians hold both views; what they share is this: **any line drawn by law between “who is immune and who is not” is a moat dug by the state rather than by consumers**, and deserves inspection with the same ruler.

The decisive mechanism is the one from [[taxes-regulation|Stage 8.3]]: **incumbents lobby to raise rivals' costs.** Salop and Scheffman named the strategy in 1983: you need not be cheaper than your rival, only make your rival's costs higher than yours. Many rules big platforms publicly support — strict privacy compliance, content-moderation duties, age verification, AI-safety licensing — each has a legitimate rationale, and each happens to be affordable for a giant and unaffordable for a startup. It is a textbook case of the public choice of [[economics-of-state|Stage 8.4]]: concentrated benefits (a few giants), dispersed costs (countless rivals never born), so the rule passes. **This is the most dangerous form network effects can take — a market-won position, cemented by law.** And antitrust agencies rarely prosecute it, because the door was opened by the legislature itself.

### ⑥ The strongest opposing case, and where Austrian theory needs work

In fairness, the three most powerful anti-platform arguments come last, together with a clear statement of where Austrians do not yet have an answer.

**First, data moats.** The data a platform gathers from users every day makes its product better; a better product brings more users; more users bring more data. The loop needs no help from the law. The Austrian reply is the subject of [[data-new-oil|Stage 15.4]]: data is not knowledge, and the examples of Google+ and Zillow show that the firm with the most data can still stumble before something new. But candidly, **that reply explains why a data moat is not permanent; it does not say how long it lasts** — and “how long” matters to the consumer standing outside the door.

**Second, bought defaults.** Google spends tens of billions a year for the “default search engine” slot; that is not a state grant but a private contract. Austrians generally hold that voluntary contracts should not be banned: Apple may sell the default slot on its devices to the highest bidder, just as a supermarket sells its best shelf space. But the other side points out: **when nearly every distribution channel in a market is bought up by the same firm, the line between “voluntary contract” and “locking the door” blurs.** This is a question Austrians have not fully worked through — the Rothbardian “no coercion, no monopoly” is too tidy here.

**Third, “kill zone” acquisitions.** Kamepalli, Rajan and Zingales argued in a 2020 paper that when a giant can acquire or clone any new rival, venture capital avoids the tracks “too close to the giant,” so many competitors that would have existed are never born. That is an **unseen** loss ([[opportunity-cost|Stage 1.4]]), the kind Austrians are usually best at seeing. The Austrian reply has two layers: acquisitions are often a founder's only exit, so banning them reduces startup formation; and cloning is itself competition. Yet Austrians genuinely lack a theory of **how far potential competitors are deterred** — Kirzner's alertness is about seeing an opportunity, not about seeing it and standing down because a giant is present.

**Where Austrian theory needs development** can be listed directly: (1) a theory of when **contractual barriers** (default contracts, exclusivity deals) become equivalent to state barriers; (2) a statement about the **time scale of the process** — “it will eventually be replaced” is not an answer for today's consumers; (3) a formal place for **multi-homing cost** in competition theory — it may deserve to replace “share” as the indicator of whether a platform market is contestable. All three are open problems for [[open-problems|Stage ∞.1]].

The lesson in one sentence: **a two-sided market's price structure is discovered by entrepreneurs, not evidence of monopoly; “unassailable” networks never really were, switching costs are subjective, multi-homing is normal and consumer sovereignty is the only test; the moats Austrians should fear are the ones granted by the state and lobbied for by incumbents; and on data moats, bought defaults and kill zones, Austrians need theory rather than slogans.** [[platform-governance|Stage 16.4]] asks how platforms as private property may govern speech; [[stablecoins-cbdc|Stage 17.3]] shows what happens to this analysis when platforms start issuing money (stablecoins).

## @analogy
Think of a platform market as a town's **marketplace.**

The old market (the incumbent platform) sits in the central square. Stallholders set up there (side B) because the shoppers come there (side A); the shoppers come because the stallholders are there. The market is free for shoppers and charges stallholders a pitch fee — the two-sided price structure, and nothing suspicious about it: charge the side that gains most from the foot traffic.

Now someone opens a new market on the east side (the entrant): cleaner, cheaper pitches, a roof against the rain. Can it take off? What matters is not mainly how good it is, but two things. **First, can stallholders trade in both?** If a stallholder can be at the old market in the morning and the new one in the afternoon (low multi-homing cost), the new market has stalls on day one, shoppers wander over to look, and the old market's “winner-take-all” turns overnight into “winner-takes-a-bit-more.” If stallholders must choose one (high multi-homing cost), the new market has to survive a cold start — no stalls so no shoppers, no shoppers so no stalls — the tipping point of [[network-effects|Stage 15.1]], which takes an entrepreneur subsidizing pitches and paying people to browse.

**Second, and decisively: does opening on the east-side plot require the old market's consent?** If the town decrees “one market only,” or requires a “market operator's license” that takes three years and twenty reviews, or if the old market's owner has lobbied through a rule that “every market must maintain a professional fire brigade and a compliance department” — then no matter how good the new market is, it never opens. The old market's position is now maintained not by shoppers and stallholders voting daily but by a piece of paper. **That is what Austrians mean by monopoly.**

Antitrust agencies tend to stare at the first thing — the old market is too big, the pitch fees too high, its own stalls get the best spots — and look straight past the second, because the second door was opened in the very building they work in.

## @misconceptions
- **“A platform that is free on one side and expensive on the other is predating on one and exploiting the other.”** — That is a one-sided ruler applied to a two-sided market. Free newspapers, credit-card cash back and app-store commissions share one structure: charge the side that gains most from the other's numbers and is least price-sensitive, and let the other side grow. The structure is discovered by entrepreneurs, and the U.S. Supreme Court accepted the analysis in American Express (2018).
- **“Network effects make the winner unassailable, so it must be broken up.”** — MySpace, Nokia, BlackBerry, IE and Yahoo were each declared unassailable; each fell, and none was broken up. Competition is a process: a leader's position must be won again every day. What Austrians deny is not “the bar is high” but “the door is locked.”
- **“Users face huge switching costs, so they are locked in.”** — Switching costs are subjective and differ by person: the creator with 100,000 followers cannot leave, the casual browser leaves any time. Networks unravel from the marginal user. And multi-homing (using several platforms at once) lets either side try a new platform without abandoning the old — the key variable for whether a platform market can tip again.
- **“Austrians think there is nothing wrong with the platform economy.”** — On the contrary: Austrians think the problem is worse than what antitrust agencies see, just elsewhere — intellectual property, compliance costs, licensing, liability immunity, and rules incumbents lobby for that raise rivals' costs. These moats are not maintained by consumer votes and are not washed away by better products.
- **“If there is no government coercion, there can be no monopoly problem.”** — That is the too-tidy version inside the school. When nearly every distribution channel is bought up by one firm under private contract, or when venture capital avoids a whole track because a giant is present, the line between “voluntary contract” and “locked door” blurs. Austrians need theory on contractual barriers, the process's time scale and kill zones, not slogans.

## @quiz
1. What is the core insight of Rochet–Tirole two-sided-market theory?
   - [ ] Platforms should charge both sides the same price
   - [x] In a two-sided market the price structure (which side pays) matters as much as the price level, because one side's numbers decide whether the other side comes
   - [ ] Platform prices should equal marginal cost
   - [ ] All platform profit comes from network effects
   > Move the same total price from “half each” to “one side free, the other pays all” and transaction volume can change completely. Discovering that structure is the platform's entrepreneurial job.

2. What was the heart of the DOJ's case against Google Search (filed 2020, first-instance ruling 2024)?
   - [ ] Google's search share was too large
   - [ ] Google charged too much
   - [x] Google paid enormous sums to buy the “default search engine” slot, locking up distribution by contract
   - [ ] Google acquired too many rivals
   > The case turned on exclusive default contracts (court documents put 2021 payments at about $26 billion), not on share itself. It is also the “contractual barrier” problem where Austrians admit their theory needs work.

3. Which of the following is a platform moat Austrians think one should **really** worry about?
   - [ ] The platform has too many users
   - [ ] The platform is free on one side
   - [x] Compliance rules the incumbent lobbied for that happen to be unaffordable for small rivals
   - [ ] The platform's product is better than its rivals'
   > This is the “raising rivals' costs” strategy (Salop and Scheffman 1983) combined with public choice: concentrated benefits, dispersed costs, and once the rule passes a market-won position is cemented by law — monopoly in the Austrian sense.

4. Why is multi-homing cost the key variable for whether a platform market can tip again?
   - [ ] Because it determines the platform's margin
   - [x] Because when multi-homing is cheap, users and merchants can try a new platform without abandoning the old one, largely dissolving the entrant's cold-start problem
   - [ ] Because antitrust law bans multi-homing
   - [ ] Because it has nothing to do with network effects
   > Drivers running Uber and Lyft together, sellers on Amazon and Shopify at once, turn “winner-take-all” into “winner-takes-a-bit-more” — the entrant no longer has to cross the [[network-effects|Stage 15.1]] tipping point first.

5. What is the limitation of the Austrian reply to “data moats”?
   - [ ] Austrians deny that data has value
   - [x] The reply explains why a data moat is not permanent but not how long it lasts — and “how long” matters to consumers kept outside
   - [ ] Austrians think data moats are created by government
   - [ ] Austrians have no reply at all
   > [[data-new-oil|Stage 15.4]] shows data is not knowledge and that the firm with the most data can still stumble; but “it will eventually be replaced” is not an answer for today's consumers. That is where Austrians need a theory of the process's time scale.

## @further
- [Rochet & Tirole, “Platform Competition in Two-Sided Markets” (JEEA 2003) — the founding paper of two-sided-market theory](https://academic.oup.com/jeea/article/1/4/990/2280902)
- [Hayek, “The Meaning of Competition” (1946) — competition as a process (Mises Institute)](https://mises.org/library/book/individualism-and-economic-order)
- [Dominick Armentano, Antitrust and Monopoly (1982) — the case-by-case record of antitrust (Mises Institute)](https://mises.org/library/book/antitrust-and-monopoly-anatomy-policy-failure)
- [Thomas DiLorenzo, “The Origins of Antitrust: An Interest-Group Perspective” (1985) — antitrust law itself as rent-seeking](https://mises.org/library/origins-antitrust-interest-group-perspective)
- [Liebowitz & Margolis, Winners, Losers & Microsoft (1999) — the evidence on leadership changes in software markets](https://www.utdallas.edu/~liebowit/book/book.html)
