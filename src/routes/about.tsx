import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowUpRight } from "lucide-react";
import team from "@/assets/about-team.webp";
import workSupervisor from "@/assets/work-supervisor.webp";
import workElectrical from "@/assets/work-electrical.webp";
import workBuilding from "@/assets/about.webp";
import fieldOilGas from "@/assets/field-oil-gas.webp";
import fieldPetrochemical from "@/assets/field-petrochemical.webp";
import fieldSpecialty from "@/assets/field-specialty-chemical.webp";
import fieldEnergy from "@/assets/field-energy.webp";
import fieldPower from "@/assets/field-power.webp";
import fieldGreen from "@/assets/field-green.webp";
import fieldConstruction from "@/assets/field-construction.webp";
import fieldManpower from "@/assets/field-manpower.webp";

const fields = [
  {
    title: "Oil & Gas",
    body: "Upstream, midstream and downstream — from wellhead to refinery.",
    img: fieldOilGas,
  },
  {
    title: "Petrochemical",
    body: "Crackers, polymer trains and feedstock units built to spec.",
    img: fieldPetrochemical,
  },
  {
    title: "Specialty Chemical",
    body: "Tight-tolerance reactors, jacketed piping and clean utilities.",
    img: fieldSpecialty,
  },
  {
    title: "Energy",
    body: "LNG terminals, tank farms and energy storage infrastructure.",
    img: fieldEnergy,
  },
  {
    title: "Power Generation",
    body: "Conventional and combined-cycle plants, turbines and BOP.",
    img: fieldPower,
  },
  {
    title: "Green Energy",
    body: "Solar, wind and hydrogen-ready infrastructure for the transition.",
    img: fieldGreen,
  },
  {
    title: "Construction",
    body: "Commercial, industrial and infrastructure builds from ground to fit-out.",
    img: fieldConstruction,
  },
  {
    title: "Skilled Manpower Supply",
    body: "Branded AtS crews — welders, fitters, riggers and supervisors on demand.",
    img: fieldManpower,
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AtS Constructions & Engineering" },
      {
        name: "description",
        content:
          "AtS is a Singapore engineering firm built on senior judgement, safety-first culture, and accountable, owner-led delivery.",
      },
      { property: "og:title", content: "About AtS Constructions & Engineering" },
      {
        property: "og:description",
        content: "Senior engineering DNA. Singapore-led delivery. Owner-led, safety-first.",
      },
      { property: "og:image", content: team },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: team },
    ],
  }),
  component: About,
});

const writeups = [
  {
    label: "Our craft",
    title: "Engineering as a discipline of patience.",
    body: "We build slowly enough to build correctly. Every weld is photographed, every concrete pour logged, every drawing reviewed by a senior before it leaves the table. Patience is not a luxury on our sites — it is the method.",
  },
  {
    label: "Our crews",
    title: "Site teams trained to think, not just lift.",
    body: "Our crews are full-time, paid above market and trained continuously. The yellow helmets you see on an AtS site are not subcontracted strangers — they are people who can read a drawing, flag a defect, and stop the line if it does not look right.",
  },
  {
    label: "Our supervisors",
    title: "White helmets that earn their colour.",
    body: "An AtS supervisor has spent at least a decade on tools before they wear the white hat. They lead by walking, not by emailing — present at the first pour, the last commissioning test, and every uncomfortable conversation in between.",
  },
  {
    label: "Our promise",
    title: "Accountability with a single name on it.",
    body: "From the first conversation to the final handover, the same senior engineer carries your project. There is no junior re-bid, no after-sale silence. If something is not right, you know who to call — and they will already be on the way.",
  },
];

function About() {
  return (
    <Layout>
      <section className="px-4 md:px-6 pt-12 md:pt-20 pb-12">
        <div className="max-w-[1280px] mx-auto">
          <p className="blueprint-header-strip inline-flex items-center gap-3 px-5 py-2.5 mb-6 reveal">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span
                className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full"
                style={{ background: "linear-gradient(135deg, #b45309, #d97706)" }}
              />
              <span
                className="relative inline-flex h-2.5 w-2.5 rounded-full"
                style={{ background: "linear-gradient(135deg, #b45309, #d97706)" }}
              />
            </span>
            About AtS
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.98] max-w-5xl reveal text-ink">
            A FIRM BUILT ON <em className="italic text-gradient">SENIOR ENGINEERING</em> JUDGEMENT
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink-soft leading-relaxed reveal">
            AtS Constructions & Engineering was started by senior engineers who wanted to deliver
            work without the friction of legacy hierarchy — and without the corner-cutting of
            low-cost contracting.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-20">
        <div className="max-w-[1280px] mx-auto reveal">
          <div className="relative rounded-3xl overflow-hidden grad-border">
            <img
              src={team}
              alt="AtS construction crew working on a Singapore site at dusk"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="img-fade-soft" />
          </div>
        </div>
      </section>

      {/* WRITEUPS */}
      <section className="px-4 md:px-6 pb-24">
        <div className="max-w-[1280px] mx-auto space-y-16 md:space-y-24">
          {writeups.map((w, i) => (
            <div
              key={w.label}
              className={`grid lg:grid-cols-12 gap-8 md:gap-12 items-start reveal`}
            >
              <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <p className="blueprint-header-strip inline-flex items-center gap-3 px-5 py-2.5 mb-4">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span
                      className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full"
                      style={{ background: "linear-gradient(135deg, #b45309, #d97706)" }}
                    />
                    <span
                      className="relative inline-flex h-2.5 w-2.5 rounded-full"
                      style={{ background: "linear-gradient(135deg, #b45309, #d97706)" }}
                    />
                  </span>
                  {w.label}
                </p>
                <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">
                  {w.title}
                </h2>
              </div>
              <div
                className={`lg:col-span-7 lg:col-start-6 ${i % 2 === 1 ? "lg:col-start-1 lg:order-1" : ""}`}
              >
                <p className="text-lg md:text-xl text-ink-soft leading-relaxed">{w.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THREE CONSECUTIVE IMAGES ROW */}
      <section className="px-4 md:px-6 pb-20">
        {/* CHANGED: grid-cols-1 (mobile), sm:grid-cols-2 (tablet), lg:grid-cols-3 (desktop) */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {[workSupervisor, workElectrical, workBuilding].map((src, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-3xl overflow-hidden grad-border">
              <img
                src={src}
                alt="AtS crew on site"
                loading="lazy"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
              <div className="img-fade-soft" />
            </div>
          ))}
        </div>
      </section>

      {/* FIELD OF WORK */}
      <section className="px-4 md:px-6 pb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="max-w-3xl mb-12 reveal">
            <p className="blueprint-header-strip inline-flex items-center gap-3 px-5 py-2.5 mb-5">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span
                  className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full"
                  style={{ background: "linear-gradient(135deg, #b45309, #d97706)" }}
                />
                <span
                  className="relative inline-flex h-2.5 w-2.5 rounded-full"
                  style={{ background: "linear-gradient(135deg, #b45309, #d97706)" }}
                />
              </span>
              Field of work
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] text-ink">
              SECTORS WE <em className="italic text-gradient">BUILD FOR</em>
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              From hydrocarbons to the energy transition — eight industries that demand the same
              discipline we bring to every site.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {fields.map((f, i) => (
              <div
                key={f.title}
                className="group reveal glass rounded-3xl overflow-hidden flex flex-col tilt-card"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="img-fade-soft" />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="font-display text-xl md:text-2xl text-ink mb-2">{f.title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="font-display text-4xl md:text-5xl text-ink">Want to work with us?</h2>
          <p className="mt-4 text-ink-soft">
            Tell us about the build. We'll respond personally within one business day.
          </p>
          <Link to="/contact" className="btn-primary mt-8 inline-flex">
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
