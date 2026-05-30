import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { posts, type Post } from "@/lib/blog-data";

export const Route = createFileRoute("/blog/$id")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.id === params.id);
    if (!post) throw notFound();
    const others = posts.filter((p) => p.id !== params.id).slice(0, 3);
    return { post, others };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    return {
      meta: p
        ? [
            { title: `${p.title} — AtS Insights` },
            { name: "description", content: p.excerpt },
            { property: "og:title", content: p.title },
            { property: "og:description", content: p.excerpt },
            { property: "og:image", content: p.img },
            { property: "og:type", content: "article" },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:image", content: p.img },
          ]
        : ([{ title: "Article — AtS" }] as const),
    };
  },
  component: PostDetail,
  notFoundComponent: () => (
    <Layout>
      <div className="max-w-2xl mx-auto py-32 px-4 text-center">
        <h1 className="font-display text-5xl text-ink mb-4">Article not found</h1>
        <Link to="/blog" className="btn-primary mt-6">
          Back to insights
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

function PostDetail() {
  const { post, others } = Route.useLoaderData();
  return (
    <Layout>
      <article>
        <section className="px-4 md:px-6 pt-12 md:pt-20 pb-10">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition mb-8 reveal"
            >
              <ArrowLeft size={14} /> All insights
            </Link>
            <p className="label-mono mb-5 reveal">
              {post.tag} · {post.date} · {post.read} read
            </p>
            <h1 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] text-ink reveal">
              {post.title}
            </h1>
            <p className="mt-6 text-xl text-ink-soft leading-relaxed reveal">{post.excerpt}</p>
          </div>
        </section>

        <section className="px-4 md:px-6 pb-12">
          <div className="max-w-5xl mx-auto reveal">
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden grad-border">
              <img
                src={post.img}
                alt={post.title}
                width={1600}
                height={680}
                className="w-full h-full object-cover"
              />
              <div className="img-fade-soft" />
            </div>
          </div>
        </section>

        <section className="px-4 md:px-6 pb-20">
          <div className="max-w-3xl mx-auto space-y-6 reveal">
            {post.body.map((p: string, i: number) => (
              <p key={i} className="text-lg text-ink leading-[1.8]">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="px-4 md:px-6 pb-24">
          <div className="max-w-3xl mx-auto reveal">
            <div className="rounded-3xl glass-strong p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div>
                <p className="label-mono mb-2">Next step</p>
                <p className="font-display text-2xl md:text-3xl text-ink">
                  Talk to the engineer who wrote this.
                </p>
              </div>
              <Link to="/contact" className="btn-primary shrink-0">
                Get in touch <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </article>

      <section className="px-4 md:px-6 pb-24">
        <div className="max-w-[1280px] mx-auto">
          <p className="label-mono mb-6">More insights</p>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((o: Post) => (
              <Link
                to="/blog/$id"
                params={{ id: o.id }}
                key={o.id}
                className="group glass rounded-3xl overflow-hidden tilt-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={o.img}
                    alt={o.title}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="label-mono text-ink-soft text-[11px] mb-2">
                    {o.tag} · {o.read}
                  </p>
                  <h3 className="font-display text-xl text-ink leading-tight">{o.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
