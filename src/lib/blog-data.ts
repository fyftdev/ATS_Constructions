import bRefinery from "@/assets/blog-refinery.webp";
import bSafety from "@/assets/blog-safety.webp";
import bSustain from "@/assets/blog-sustain.webp";
import bBim from "@/assets/blog-bim.webp";
import bDrawings from "@/assets/blog-drawings.webp";
import bHighrise from "@/assets/blog-highrise.jpeg";
import bConcrete from "@/assets/blog-concrete.webp";
import bHandover from "@/assets/blog-handover.webp";

export type Post = {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  img: string;
  body: string[];
};

export const posts: Post[] = [
  {
    id: "refinery-turnaround-playbook",
    tag: "Refinery",
    title: "Inside an AtS Refinery Turnaround",
    excerpt: "How a planned shutdown is choreographed hour by hour, weld by weld.",
    date: "May 2026",
    read: "6 min",
    img: bRefinery,
    body: [
      "A refinery turnaround is the most expensive few weeks of the year. Every hour of unplanned downtime carries a six- or seven-figure cost, and every weld carried out under shutdown conditions must survive five years of process service before the next opportunity to touch it.",
      "Our turnaround playbook starts ninety days out. Scope is frozen, isometrics reissued, spool fabrication moves into the shop, and shift rosters are built against a critical path that knows exactly which tie-in unlocks which downstream activity.",
      "On the day of shutdown, the first eight hours are pure choreography — depressurise, purge, blind, hand over. By hour twenty-four, our crews are walking the deck with cut-lists in hand and welders on standby. Every hot work permit is signed by a senior, every spool is tracked by tag number, and every NDT result lands in the same dossier before the line goes back into service.",
      "The discipline that makes this work is unsexy: pre-fab in the shop, rehearse on paper, and never let the field invent something the engineering room has not signed.",
    ],
  },
  {
    id: "structural-fabrication-shop-vs-site",
    tag: "Fabrication",
    title: "Shop vs Site: Why We Push Fabrication Off the Critical Path",
    excerpt: "Every weld done in the shop is a weld your erection crew does not wait for.",
    date: "Apr 2026",
    read: "5 min",
    img: bBim,
    body: [
      "On any structural steel package, the cheapest weld is the one done in a controlled shop and the most expensive is the one done at thirty metres in the rain. The discipline of pushing fabrication off the critical path is what separates a tidy erection sequence from a chaotic one.",
      "Our fabrication yard takes the engineer's drawings and turns them into ready-to-bolt members: cut, drilled, welded, blasted, primed and tagged. By the time the truck rolls onto site, the crane operator knows the lift weight, the rigger knows the pick points, and the supervisor knows exactly where each piece goes.",
      "The savings compound. Better weld quality because the welder is seated, dry and inspected. Faster erection because there is nothing to fit on site. Fewer surprises because the trial-fit happened in the yard, not at altitude. And a cleaner handover because every piece carries a traceable mark.",
      "We treat the fabrication shop as part of the construction programme — not a separate procurement line. That is the only way the numbers actually work.",
    ],
  },
  {
    id: "pipe-spool-fabrication-discipline",
    tag: "Piping",
    title: "Pipe Spool Fabrication: The Discipline Behind a Quiet Tie-In",
    excerpt: "Hundreds of spools, one tie-in window. Here is how we make it boring.",
    date: "Apr 2026",
    read: "5 min",
    img: bDrawings,
    body: [
      "A tie-in window on a live plant is measured in hours, not days. By the time the line is blinded and ready, the only acceptable answer is for our crews to walk in with pipe spools that fit on the first attempt — not the third.",
      "Every spool that leaves our shop has been cut from the same isometric the client signed, welded to a qualified procedure, tested to pressure, painted and tagged with the same line number the field crew will look for. The weld map travels with the spool. The NDT reports travel with the weld map. The dispatch manifest reconciles to the iso index before the truck loads.",
      "The on-site choreography is the easy part once the shop has done its job: lift, align, bolt, torque, sign. No grinding, no re-beveling, no walking back to the welder to ask why the angle is wrong.",
      "Done well, spool fabrication is the most boring part of a shutdown. Done poorly, it is the part that overruns and explains itself in the post-mortem.",
    ],
  },
  {
    id: "construction-safety-2026",
    tag: "Safety",
    title: "Construction Safety in 2026: Five Habits That Actually Hold",
    excerpt: "Operating principles every site needs — refinery, civil or commercial.",
    date: "Mar 2026",
    read: "5 min",
    img: bSafety,
    body: [
      "Safety on a construction or refinery site is not a programme. It is a habit, repeated across thousands of small decisions, made by people who are tired and behind schedule. The job of a safety culture is to make the right decision the easy one — even on the worst day of the week.",
      "Five principles we hold to: (1) Stop work authority belongs to every helmet on site, not just the white ones. (2) Every incident — including near-misses — is recorded, regardless of severity. (3) Tools, harnesses and PPE are paid for by the firm, never by the worker. (4) Toolbox talks happen daily, not weekly. (5) The site walk happens before the morning meeting, not after.",
      "Stop work authority is the hardest of the five. It only works if the first time someone uses it, they are publicly thanked rather than quietly resented. We make a point of reviewing every stoppage in the next morning's briefing — never to second-guess, always to learn.",
      "Near-miss reporting only becomes useful when the volume of reports goes up, not down. A site that reports zero near-misses is not a safe site; it is a site where nobody is talking.",
      "These are not aspirational. They are operational. A safety culture that exists only in the manual is a liability disguised as an asset.",
    ],
  },
  {
    id: "scaffolding-the-silent-critical-path",
    tag: "Construction",
    title: "Scaffolding: The Silent Critical Path of Every Refinery Job",
    excerpt: "Access dictates schedule. Get the scaffold right and the rest follows.",
    date: "Feb 2026",
    read: "5 min",
    img: bSustain,
    body: [
      "On any refinery or industrial construction project, scaffolding is the discipline nobody talks about until it is missing. Welders cannot weld without access. Inspectors cannot inspect without access. The line cannot go back into service without one final lap of the platform — and the scaffold has to still be standing.",
      "We treat scaffolding as a planning discipline, not a reactive one. Erection sequences are drawn against the work-front map, dismantle sequences are agreed before the last tier goes up, and every level is tagged, inspected and signed by a competent supervisor before a single boot lands on it.",
      "The savings are invisible until you remove them. A scaffold that arrives a day late costs a shift of welders. A scaffold that comes down a day early costs a re-erect. A scaffold that fails inspection costs everyone above it.",
      "Done well, scaffolding is the quietest trade on site. Done poorly, it is the one that explains every other delay.",
    ],
  },
  {
    id: "high-rise-sequencing-singapore",
    tag: "Construction",
    title: "High-Rise Sequencing: What Tower Cranes Teach You About Schedule",
    excerpt: "On a vertical site, the crane hook is the bottleneck. Plan around it or fall behind.",
    date: "Feb 2026",
    read: "5 min",
    img: bHighrise,
    body: [
      "On a Singapore high-rise, the tower crane is the slowest, most expensive resource on the project — and every trade on site is, whether they admit it or not, queueing for the hook. Concrete crews need rebar lifts. Steel crews need erection picks. Façade crews need panel hoists. Whoever wins the lift schedule wins the day.",
      "Our approach is to plan the crane day in 15-minute slots, the night before, against a published lift list. Each lift carries a tag number, a weight, a rigging spec and an owner. If the slot is missed, it does not roll forward — it gets re-bid the next morning. That single rule keeps trades honest and keeps the hook turning.",
      "The second discipline is the laydown yard. A high-rise without a disciplined ground-level laydown becomes a vertical traffic jam. We mark out lift bays, pre-rig loads on the ground, and never let a crew lift unrigged steel — the time saved on the deck pays for the foreman who runs the yard, three times over.",
      "Schedule on a tower is won and lost in metres of crane travel, not in hours of overtime. The earlier you accept that, the earlier the building tops out.",
    ],
  },
  {
    id: "concrete-pour-discipline",
    tag: "Construction",
    title: "The Concrete Pour: Why the First Hour Decides the Whole Slab",
    excerpt: "A pour is a one-shot operation. The plan is set before the truck arrives.",
    date: "Jan 2026",
    read: "4 min",
    img: bConcrete,
    body: [
      "A concrete pour is the closest thing a construction site has to a live broadcast. The clock starts when the first truck rolls onto the gate and stops when the last cubic metre is screeded — and there is no way to pause, no way to rewind, and no way to fix a cold joint after the fact.",
      "Our pour discipline is built on three checks before the first chute opens: rebar is signed off, formwork is signed off, and the weather is signed off. Miss any of the three and the trucks are turned away, no matter what the schedule says. The cost of a turned-away pour is real; the cost of pouring into bad formwork is worse.",
      "Once the pour starts, the foreman is the only person allowed to talk to the pump operator. Crews work in fixed bays, vibrators stay in their zones, screeders follow at a measured distance behind the boom. A pour that looks chaotic from the gate is a pour that will crack from the kerb.",
      "Concrete is unforgiving. The crews who respect that finish their slabs early and clean. The crews who do not, learn the lesson on the next demolition contract.",
    ],
  },
  {
    id: "construction-handover-checklist",
    tag: "Construction",
    title: "The Handover Walk: How a Project Actually Ends",
    excerpt:
      "A project is not finished when the punch list closes — it is finished when the client signs.",
    date: "Jan 2026",
    read: "5 min",
    img: bHandover,
    body: [
      "Every construction project has two endings: the one the programme says, and the one the client accepts. Closing the gap between those two dates is the quietest, most expensive part of the job — and the part most teams under-plan.",
      "We treat handover as a six-week sprint, not a final-day event. The snag list is opened at 90% completion, not at practical completion. Subcontractors are kept on payroll for two weeks past their last activity, on standby. The commissioning engineer walks the building once a week, with the client, recording defects against a shared photo log that nobody can argue with later.",
      "On the day of the walk, the building is clean. Not construction-clean — actually clean. Floors swept, surfaces wiped, signage in place, manuals indexed in a folder the facilities team can open without asking. The first impression of a finished building is the impression that sticks.",
      "A handover is not a ceremony. It is a transfer of responsibility — and the team that took it seriously from week one is the team that gets called back for the next phase.",
    ],
  },
];
