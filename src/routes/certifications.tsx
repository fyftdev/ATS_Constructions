import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import {
  ShieldCheck,
  Award,
  Leaf,
  HardHat,
  FileCheck,
  BadgeCheck,
  Sparkles,
  Eye,
  ImageIcon,
  type LucideIcon,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — AtS Constructions & Engineering" },
      {
        name: "description",
        content:
          "Quality, safety and sustainability credentials. ISO 9001, ISO 45001, ISO 14001, BCA Registered, BizSafe Star, BCA Green Mark.",
      },
      { property: "og:title", content: "AtS Certifications" },
      { property: "og:description", content: "Trust, formalised." },
    ],
  }),
  component: Certifications,
});

type Cert = {
  n: string;
  icon: LucideIcon;
  code: string;
  title: string;
  body: string;
  why: string;
  detail: string;
};

const certs: Cert[] = [
  {
    n: "01",
    icon: ShieldCheck,
    code: "ISO 9001",
    title: "Quality Management",
    body: "Systems and processes audited to international quality benchmarks.",
    why: "Without a documented quality system, defects and rework become invisible until handover. ISO 9001 forces every process to be written, followed and improved — so quality stops depending on individuals and starts depending on the system.",
    detail:
      "Our QMS covers tender review, design control, procurement, site execution, inspection and handover. Audited annually by an accredited certification body.",
  },
  {
    n: "02",
    icon: HardHat,
    code: "ISO 45001",
    title: "Occupational Health & Safety",
    body: "Documented safety management across every active site.",
    why: "Construction is the most dangerous industry in Singapore by incident rate. ISO 45001 is the global benchmark that proves a contractor manages risk proactively rather than reactively — a baseline owners and insurers increasingly demand.",
    detail:
      "Hazard identification, JSAs, permit-to-work, toolbox briefings and incident reporting are governed under one auditable system led by a full-time WSH officer.",
  },
  {
    n: "03",
    icon: Leaf,
    code: "ISO 14001",
    title: "Environmental Management",
    body: "Site-level environmental controls and waste reduction protocols.",
    why: "Singapore's NEA standards on noise, dust, runoff and waste are enforced strictly. ISO 14001 demonstrates that environmental compliance is engineered into the project, not retro-fitted after a complaint.",
    detail:
      "Site-level environmental management plans, waste segregation, silt control, fuel and chemical handling protocols, and quarterly internal audits.",
  },
  {
    n: "04",
    icon: BadgeCheck,
    code: "BCA",
    title: "Registered Contractor",
    body: "Singapore Building & Construction Authority registered.",
    why: "BCA registration is the legal pre-requisite to bid on most public and many private works in Singapore. Workhead and grade determine project size eligibility — without it, the conversation cannot start.",
    detail:
      "Registered across multiple workheads relevant to general building, civil and M&E. Documentation available on request for tender pre-qualification.",
  },
  {
    n: "05",
    icon: Award,
    code: "BizSafe Star",
    title: "Workplace Safety",
    body: "Highest tier WSH Council certification for safety management.",
    why: "BizSafe Star is the highest tier of Singapore's WSH Council programme — a five-step journey culminating in an externally audited OHSMS. Many MNCs will not engage contractors below Star level.",
    detail:
      "Risk assessment training, safety management implementation, internal audits and external certification — refreshed every three years.",
  },
  {
    n: "06",
    icon: FileCheck,
    code: "Green Mark",
    title: "Sustainable Building",
    body: "BCA Green Mark aligned design and procurement methodology.",
    why: "Green Mark scoring is mandatory for new buildings in Singapore. Aligning procurement, materials and M&E specification to Green Mark targets from day one is what separates a Gold-Plus project from a Certified one.",
    detail:
      "Specification of low-VOC materials, energy-efficient M&E, water fixtures and construction waste tracking — coordinated with appointed Green Mark consultants.",
  },
];

function Certifications() {
  const [active, setActive] = useState<Cert | null>(null);

  return (
    <Layout>
      <section className="px-4 md:px-6 pt-12 md:pt-20 pb-12">
        <div className="max-w-[1280px] mx-auto">
          <p className="label-mono mb-6 reveal">Trust & Compliance</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.98] max-w-5xl reveal text-ink">
            We hold ourselves to <em className="italic text-gradient">mature standards</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed reveal">
            Tap any card to read what it covers and why it matters. Certifications are a baseline —
            the daily practice behind them is the point.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-24">
        <div className="max-w-[1280px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <button
              key={c.code}
              onClick={() => setActive(c)}
              className="group reveal text-left"
              style={{ transitionDelay: `${i * 50}ms` }}
              aria-label={`Open details for ${c.code}`}
            >
              <div className="tile-highlight rounded-3xl p-7 md:p-8 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_36px_80px_-24px_oklch(0.38_0.16_28/0.55)]">
                <div className="relative flex flex-col h-full min-h-[240px]">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
                      <c.icon size={20} className="ink-on-dark" strokeWidth={1.6} />
                    </div>
                    <div className="font-mono text-xs ink-soft-on-dark">{c.n}</div>
                  </div>
                  <div className="font-mono text-xs mb-2 ink-soft-on-dark">{c.code}</div>
                  <h3 className="font-display text-2xl md:text-[1.85rem] leading-tight mb-3 ink-on-dark">
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 ink-soft-on-dark">{c.body}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium ink-on-dark">
                    Tap to view
                    <Eye size={14} />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="label-mono mb-5">A note on standards</p>
          <p className="font-display italic text-2xl md:text-4xl text-ink leading-[1.2]">
            "A certificate proves we passed an audit. The point is to pass the audit on every day we
            are <span className="text-gradient not-italic">not</span> being audited."
          </p>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl max-h-[88vh] overflow-y-auto p-0 border-0 bg-transparent shadow-none">
          {active && (
            <div className="popup-card rounded-3xl overflow-hidden">
              <div className="popup-header relative aspect-[16/9] flex flex-col items-center justify-center text-center px-6">
                <ImageIcon size={36} className="text-ink/40 mb-3" strokeWidth={1.2} />
                <p className="popup-label">Certificate Image Placeholder</p>
                <p className="font-display text-3xl text-ink/80 mt-1">{active.code}</p>
              </div>
              <div className="px-7 md:px-10 py-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl grad-border flex items-center justify-center">
                    <active.icon size={20} className="text-aurora-2" strokeWidth={1.5} />
                  </div>
                  <span className="popup-label">
                    {active.n} · {active.code}
                  </span>
                </div>
                <DialogTitle asChild>
                  <h2 className="font-display text-3xl md:text-4xl text-ink">{active.title}</h2>
                </DialogTitle>
                <DialogDescription asChild>
                  <p className="popup-body mt-3">{active.body}</p>
                </DialogDescription>

                <div className="mt-7 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={16} className="text-aurora-2" />
                      <p className="popup-label">Why this matters</p>
                    </div>
                    <p className="popup-body">{active.why}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FileCheck size={16} className="text-aurora-2" />
                      <p className="popup-label">How we hold it</p>
                    </div>
                    <p className="popup-body">{active.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
