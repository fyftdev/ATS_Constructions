import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import sketchPassion from "@/assets/sketch-passion.webp";
import sketchTeamwork from "@/assets/sketch-teamwork.webp";
import sketchExcellence from "@/assets/sketch-excellence.webp";
import sketchLeadership from "@/assets/sketch-leadership.webp";
import hero from "@/assets/hero-refinery.webp";
import workBuilding from "@/assets/work-building.webp";
import workPipeline from "@/assets/work-pipeline.webp";
import workSupervisor from "@/assets/work-supervisor.webp";
import workWelding from "@/assets/work-welding.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AtS Constructions & Engineering — Engineered to Endure | Singapore" },
      {
        name: "description",
        content:
          "Singapore engineering firm specialising in refineries, pipelines, commercial spaces and apartments. Senior-led delivery, safety-first, built to last.",
      },
      {
        name: "keywords",
        content:
          "construction Singapore, refinery EPCC, pipeline engineering, commercial construction, residential builder, AtS engineering",
      },
      { property: "og:title", content: "AtS Constructions & Engineering" },
      {
        property: "og:description",
        content:
          "Singapore-based construction and engineering with senior oversight on every site.",
      },
      { property: "og:image", content: hero },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    sketch: sketchPassion,
    title: "Passion",
    body: "We bring relentless passion for customer satisfaction — engineering every site to the highest safety and quality standards.",
  },
  {
    sketch: sketchTeamwork,
    title: "Teamwork",
    body: "We move as one crew. Engineers, supervisors and tradesmen pulling in the same direction — because no weld, pour or handover is ever a solo act.",
  },
  {
    sketch: sketchExcellence,
    title: "Excellence",
    body: "We strive to excel in every possible aspect — meeting and exceeding obligations, expectations, and timelines.",
  },
  {
    sketch: sketchLeadership,
    title: "Leadership",
    body: "We are determined to lead AtS to its vision through our people — owner-led teams that set the standard on every site.",
  },
];

const stats = [
  ["12", "Disciplines under one roof"],
  ["48hr", "Engineering response window"],
  ["100%", "Senior oversight on every site"],
  ["0", "Lost-time incidents target"],
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative px-4 md:px-6">
        <div className="max-w-[1280px] mx-auto pt-12 md:pt-20 pb-32 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 reveal">
            <div className="blueprint-header-strip inline-flex items-center gap-3 px-5 py-2.5 mb-8">
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
              Singapore · Constructions &amp; Engineering
            </div>
            <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.96] tracking-tight text-ink">
              WE ENGINEER
              <br />
              WHAT <em className="italic text-gradient">ENDURES</em>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-ink-soft leading-relaxed">
              From refineries to residences, AtS builds the infrastructure of modern Singapore with
              the patience of a craftsman and the rigour of an engineer. One team. One standard.
              Every site.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/services" className="btn-primary">
                Explore Services <ArrowUpRight size={16} />
              </Link>
              <Link to="/contact" className="btn-ghost">
                Start a Project
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 reveal">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden grad-border">
              <img
                src={hero}
                alt="AtS engineers inspecting a refinery installation at golden hour"
                width={900}
                height={1100}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="img-fade-soft" />
              <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full grad-border glass-strong flex items-center justify-center text-center font-display text-xs leading-tight rotate-12">
                Senior
                <br />
                led
                <br />
                delivery
              </div>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="max-w-[1280px] mx-auto -mt-12 reveal">
          <div className="glass-strong rounded-3xl px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(([n, l]) => (
              <div key={l} className="border-r border-ink/10 last:border-r-0 pr-4 last:pr-0">
                <div className="font-display text-4xl md:text-5xl text-gradient">{n}</div>
                <div className="mt-1 text-xs md:text-sm text-ink-soft leading-snug">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WRITEUP — On the Ground */}
      <section className="px-4 md:px-6 py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 reveal">
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
              On the ground
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.02] text-ink">
              WORK THAT <em className="italic text-gradient">BEGINS AT DAWN</em>
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Long before drawings become buildings, our crews are on site — checking torque,
              verifying levels, walking the perimeter. The standards we hold are the standards our
              supervisors enforce in person, in the heat and the rain.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Every helmet on an AtS site carries our mark, and every mark carries the same promise:
              it will be done correctly, or it will be done again.
            </p>
          </div>
          <div className="lg:col-span-7 reveal">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden grad-border">
                <img
                  src={workBuilding}
                  alt="AtS crew on a half-built residential tower in Singapore"
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="w-full h-full object-cover"
                />
                <div className="img-fade-soft" />
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden grad-border">
                  <img
                    src={workSupervisor}
                    alt="AtS site supervisor in white helmet"
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden grad-border">
                  <img
                    src={workWelding}
                    alt="AtS welder with branded yellow helmet"
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WRITEUP — How we choose work */}
      <section className="px-4 md:px-6 py-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 lg:order-1 reveal">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden grad-border">
              <img
                src={workPipeline}
                alt="AtS crew welding a pipeline weld on a Singapore worksite"
                loading="lazy"
                width={1600}
                height={1000}
                className="w-full h-full object-cover"
              />
              <div className="img-fade-soft" />
            </div>
          </div>
          <div className="lg:col-span-5 lg:order-2 reveal">
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
              How we choose work
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.02] text-ink">
              WE SAY NO <em className="italic text-gradient">OFTEN</em>
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              We take on what we can supervise personally. That means fewer concurrent sites, more
              senior hours per project, and a quote that is built on what the work actually requires
              — not on what the schedule needs it to be.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              The result is a portfolio you may call modest in number, and rigorous in standard.
            </p>
          </div>
        </div>
      </section>

      {/* WHY ATS - PILLARS */}
      <section className="px-4 md:px-6 py-24 relative">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
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
              The AtS standard
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.02] text-ink uppercase tracking-tight">
              Achieving Timelines <em className="italic text-gradient">Safely.</em>
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              More than an acronym — it's the discipline behind every AtS site. We deliver on
              schedule without ever trading away the safety of our people or the integrity of the
              build. Four values keep us honest to that promise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="glass rounded-3xl p-7 tilt-card reveal flex flex-col"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-br from-ink/[0.03] to-aurora-2/[0.04] mb-6 overflow-hidden flex items-center justify-center">
                  <img
                    src={p.sketch}
                    alt={`${p.title} sketch`}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="w-[88%] h-[88%] object-contain opacity-90 mix-blend-multiply dark:mix-blend-screen dark:invert"
                  />
                </div>
                <h3 className="font-display text-2xl mb-3 text-ink">{p.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto text-center reveal">
          <p className="blueprint-header-strip inline-flex items-center gap-3 px-5 py-2.5 mb-8">
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
            A note from our founders
          </p>
          <blockquote className="font-display text-[clamp(1.75rem,4.5vw,3.75rem)] leading-[1.12] text-ink">
            "Buildings outlive their builders. We design every joint and every beam knowing it will
            be inspected — most importantly, by{" "}
            <span className="text-gradient not-italic">time</span>."
          </blockquote>
          <div className="mt-10 inline-flex items-center gap-4">
            <div className="h-px w-12 bg-aurora-2/40" />
            <p className="blueprint-header-strip inline-flex items-center gap-3 px-5 py-2.5">
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
              The AtS Founders
            </p>
            <div className="h-px w-12 bg-aurora-2/40" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 pb-20">
        <div className="max-w-[1280px] mx-auto reveal">
          <div className="relative rounded-3xl overflow-hidden glass-strong p-8 md:p-16">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-glow/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-aurora-2/20 blur-3xl" />
            <div className="relative grid md:grid-cols-12 gap-6 md:gap-8 items-end">
              <div className="md:col-span-8">
                <p className="label-mono mb-5">Ready when you are</p>
                <h2 className="font-display text-3xl md:text-6xl leading-[1.02] text-ink">
                  Have a build in mind?
                  <br />
                  <em className="italic text-gradient">Let's engineer it.</em>
                </h2>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link to="/contact" className="btn-primary">
                  Request a consultation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
