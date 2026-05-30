import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft, ArrowUpRight, CheckCircle2, FileCheck } from "lucide-react";
import { services } from "@/lib/services-data";
import workWelding from "@/assets/work-welding.webp";

export const Route = createFileRoute("/services/$id")({
  loader: ({ params }) => {
    const service = services.find((s) => s.id === params.id);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    return {
      meta: s
        ? [
            { title: `${s.title} — AtS Services` },
            { name: "description", content: s.short },
            { property: "og:title", content: `${s.title} — AtS` },
            { property: "og:description", content: s.short },
            { property: "og:image", content: workWelding },
            { name: "twitter:card", content: "summary_large_image" },
          ]
        : ([{ title: "Service — AtS" }] as const),
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <Layout>
      <div className="max-w-2xl mx-auto py-32 px-4 text-center">
        <h1 className="font-display text-5xl text-ink mb-4">Service not found</h1>
        <Link to="/services" className="btn-primary mt-6">
          Back to services
        </Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ error, reset }) => (
    <Layout>
      <div className="max-w-2xl mx-auto py-32 px-4 text-center">
        <p className="text-ink-soft">{error.message}</p>
        <button onClick={reset} className="btn-primary mt-6">
          Try again
        </button>
      </div>
    </Layout>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  return (
    <Layout>
      <section className="px-4 md:px-6 pt-12 md:pt-20 pb-10">
        <div className="max-w-[1100px] mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition mb-8 reveal"
          >
            <ArrowLeft size={14} /> All services
          </Link>
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl grad-border flex items-center justify-center">
                  <service.icon size={20} className="text-aurora-2" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-xs text-aurora-2">{service.n} · Service</span>
              </div>
              <h1 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1.0] text-ink">
                {service.title}
              </h1>
              <p className="mt-6 text-xl text-ink-soft leading-relaxed">{service.intro}</p>
            </div>
            <div className="lg:col-span-4 reveal">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden grad-border">
                <img
                  src={workWelding}
                  alt={service.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
                <div className="img-fade-soft" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-20">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-6 reveal">
          <div className="glass-strong rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle2 size={18} className="text-aurora-2" />
              <p className="label-mono">Capabilities</p>
            </div>
            <ul className="space-y-4">
              {service.capabilities.map((c: string) => (
                <li key={c} className="flex gap-3 text-ink-soft">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-glow shrink-0" />
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-strong rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-5">
              <FileCheck size={18} className="text-aurora-2" />
              <p className="label-mono">Deliverables</p>
            </div>
            <ul className="space-y-4">
              {service.deliverables.map((c: string) => (
                <li key={c} className="flex gap-3 text-ink-soft">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-glow shrink-0" />
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-20">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="font-display italic text-2xl md:text-4xl text-ink leading-[1.2]">
            "{service.closing}"
          </p>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-24">
        <div className="max-w-[1100px] mx-auto reveal">
          <div className="relative rounded-3xl overflow-hidden glass-strong p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="label-mono mb-3">Next step</p>
              <h2 className="font-display text-3xl md:text-4xl text-ink">
                Discuss your scope with a senior engineer.
              </h2>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
