import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Layout } from "@/components/Layout";
import { ArrowUpRight } from "lucide-react";
import { posts, type Post } from "@/lib/blog-data";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "ATS | Insights" },
      {
        name: "description",
        content:
          "Field notes from senior engineers on construction safety, BIM, sustainability and the future of building in Singapore.",
      },
      { property: "og:title", content: "AtS Insights" },
      { property: "og:description", content: "Field notes from senior engineers." },
      { property: "og:image", content: posts[0].img },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: posts[0].img },
    ],
  }),
  component: Blog,
});

function Blog() {
  const [active, setActive] = useState<Post | null>(null);
  const shuffled = useMemo(() => {
    const arr = [...posts];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);
  const featured = shuffled[0];
  const rest = shuffled.slice(1);

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
            Insights
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.98] max-w-5xl reveal text-ink">
            FIELD NOTES FROM <em className="italic text-gradient">OUR ENGINEERS</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-ink leading-relaxed reveal">
            Tap any article to read the full piece — your place on this page is kept.
          </p>
        </div>
      </section>

      {/* FEATURED — opens popup */}
      <section className="px-4 md:px-6 pb-12">
        <div className="max-w-[1280px] mx-auto reveal">
          <button
            type="button"
            onClick={() => setActive(featured)}
            className="group block w-full text-left"
            aria-label={`Open article: ${featured.title}`}
          >
            <div className="relative rounded-3xl overflow-hidden grad-border grid lg:grid-cols-12 bg-card">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:min-h-[440px]">
                <img
                  src={featured.img}
                  alt={featured.title}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                />
                <div className="img-fade-soft" />
                <div className="absolute top-5 left-5 px-3 py-1 rounded-full glass-strong text-xs label-mono">
                  {featured.tag} · Featured
                </div>
              </div>
              <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
                <p className="label-mono text-ink-soft text-[11px] mb-4">
                  {featured.date} · {featured.read} read
                </p>
                <h2 className="font-display text-3xl md:text-5xl text-ink mb-4 leading-[1.05]">
                  {featured.title}
                </h2>
                <p className="text-ink leading-relaxed">{featured.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-aurora-2 font-medium">
                  Read article{" "}
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
                  />
                </span>
              </div>
            </div>
          </button>
        </div>
      </section>

      {/* GRID — opens popup */}
      <section className="px-4 md:px-6 pb-24">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p)}
              className="group glass rounded-3xl overflow-hidden tilt-card reveal flex flex-col text-left"
              style={{ transitionDelay: `${i * 60}ms` }}
              aria-label={`Open article: ${p.title}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={750}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-strong text-xs label-mono">
                  {p.tag}
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="label-mono text-ink-soft text-[11px] mb-3">
                  {p.date} · {p.read}
                </div>
                <h3 className="font-display text-2xl leading-tight mb-3 text-ink">{p.title}</h3>
                <p className="text-ink text-sm leading-relaxed mb-5 flex-1">{p.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm text-aurora-2 font-medium">
                  Read article <ArrowUpRight size={14} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* DETAIL DIALOG */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 border-0 bg-transparent shadow-none">
          {active && (
            <article className="popup-card rounded-3xl overflow-hidden">
              <div className="relative aspect-[21/9] overflow-hidden">
                <img src={active.img} alt={active.title} className="w-full h-full object-cover" />
                <div className="img-fade-soft" />
                <div className="absolute top-5 left-5 px-3 py-1 rounded-full glass-strong text-xs label-mono">
                  {active.tag}
                </div>
              </div>
              <div className="px-7 md:px-10 pt-8 pb-4">
                <p className="popup-label mb-4">
                  {active.date} · {active.read} read
                </p>
                <DialogTitle asChild>
                  <h2 className="font-display text-3xl md:text-5xl text-ink leading-[1.05]">
                    {active.title}
                  </h2>
                </DialogTitle>
                <DialogDescription asChild>
                  <p className="popup-body mt-4 text-base md:text-lg">{active.excerpt}</p>
                </DialogDescription>
              </div>
              <div className="px-7 md:px-10 pb-8 space-y-5">
                {active.body.map((para, i) => (
                  <p key={i} className="popup-body text-base md:text-[1.05rem]">
                    {para}
                  </p>
                ))}
              </div>
              <div className="px-7 md:px-10 pb-9">
                <Link to="/contact" className="btn-primary" onClick={() => setActive(null)}>
                  Talk to the engineer who wrote this <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
