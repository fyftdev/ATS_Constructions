import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ArrowUpRight, CheckCircle2, FileCheck, Sparkles } from "lucide-react";
import { services, type Service } from "@/lib/services-data";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import workWelding from "@/assets/work-welding.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AtS Constructions & Engineering" },
      {
        name: "description",
        content:
          "Eight engineering disciplines under one accountable roof: general construction, infrastructure, M&E, civil, refinery, pipeline, design and plant maintenance.",
      },
      { property: "og:title", content: "AtS Services" },
      {
        property: "og:description",
        content: "A full-stack engineering contractor for modern Singapore builds.",
      },
      { property: "og:image", content: workWelding },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: workWelding },
    ],
  }),
  component: Services,
});

function Services() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <Layout>
      <section className="px-4 md:px-6 pt-12 md:pt-20 pb-10">
        <div className="max-w-[1280px] mx-auto">
          <p className="label-mono mb-6 reveal">Services</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.98] max-w-5xl reveal text-ink">
            Eight disciplines, <em className="italic text-gradient">one accountable</em> contractor.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed reveal">
            Tap any tile to open the full scope — what we do, why it matters, and what we hand over.
          </p>
        </div>
      </section>

      {/* GRID — every tile is highlighted, click opens popup, tile persists */}
      <section className="px-4 md:px-6 pb-24">
        <div className="max-w-[1280px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(s)}
              className="group reveal text-left"
              style={{ transitionDelay: `${i * 50}ms` }}
              aria-label={`Open details for ${s.title}`}
            >
              <div className="tile-highlight rounded-3xl p-7 md:p-8 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_36px_80px_-24px_oklch(0.38_0.16_28/0.55)]">
                <div className="relative flex flex-col h-full min-h-[260px]">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
                      <s.icon size={20} className="ink-on-dark" strokeWidth={1.6} />
                    </div>
                    <div className="font-mono text-xs ink-soft-on-dark">{s.n}</div>
                  </div>
                  <h3 className="font-display text-2xl md:text-[2rem] leading-tight mb-3 ink-on-dark">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 ink-soft-on-dark">{s.short}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium ink-on-dark">
                    Read full scope
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 pb-24">
        <div className="max-w-[1280px] mx-auto reveal">
          <div className="relative rounded-3xl overflow-hidden glass-strong p-8 md:p-14 grid md:grid-cols-12 gap-6 items-center">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amber-glow/25 blur-3xl" />
            <div className="md:col-span-8 relative">
              <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-ink">
                Don't see your scope? <em className="italic text-gradient">Ask anyway.</em>
              </h2>
              <p className="mt-4 text-ink max-w-xl">
                We respond to every enquiry within one business day with a structured next step.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right relative">
              <Link to="/contact" className="btn-primary">
                Start a conversation <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DETAIL DIALOG */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl max-h-[88vh] overflow-y-auto p-0 border-0 bg-transparent shadow-none">
          {active && (
            <div className="popup-card rounded-3xl overflow-hidden">
              <div className="popup-header relative px-7 md:px-10 pt-9 pb-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl grad-border flex items-center justify-center">
                    <active.icon size={20} className="text-aurora-2" strokeWidth={1.5} />
                  </div>
                  <span className="popup-label">{active.n} · Service</span>
                </div>
                <DialogTitle asChild>
                  <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-ink">
                    {active.title}
                  </h2>
                </DialogTitle>
                <DialogDescription asChild>
                  <p className="popup-body mt-4 text-base md:text-lg">{active.intro}</p>
                </DialogDescription>
              </div>

              <div className="px-7 md:px-10 py-8 space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={16} className="text-aurora-2" />
                    <p className="popup-label">Why it matters</p>
                  </div>
                  <p className="popup-body">{active.why}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 size={16} className="text-aurora-2" />
                      <p className="popup-label">Capabilities</p>
                    </div>
                    <ul className="space-y-3">
                      {active.capabilities.map((c) => (
                        <li key={c} className="flex gap-3 popup-body text-sm">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-glow shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FileCheck size={16} className="text-aurora-2" />
                      <p className="popup-label">Deliverables</p>
                    </div>
                    <ul className="space-y-3">
                      {active.deliverables.map((c) => (
                        <li key={c} className="flex gap-3 popup-body text-sm">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-glow shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="font-display italic text-xl md:text-2xl text-ink leading-snug border-l-2 border-aurora-2 pl-5">
                  "{active.closing}"
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    to="/contact"
                    className="btn-primary justify-center"
                    onClick={() => setActive(null)}
                  >
                    Discuss this scope <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
