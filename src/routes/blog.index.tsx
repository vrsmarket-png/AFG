import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { posts, formatDate } from "@/content/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Insights | Facilities Management Articles | Allied Force Group" },
      {
        name: "description",
        content:
          "Articles on facilities management practice: planned maintenance evidence, screening, working in change windows, waste reporting and contract mobilisation.",
      },
      { property: "og:title", content: "Insights | Allied Force Group" },
      {
        property: "og:description",
        content:
          "Articles on facilities management practice, from planned maintenance evidence to contract mobilisation and review.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alliedforcegroup.com/blog" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/blog" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Facilities management, <span className="text-gradient">in practice</span>
          </>
        }
        intro="Short, practical articles on how facilities work is planned, delivered and evidenced across critical estates — written for the people who have to make it work on site."
      />

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        {featured ? (
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="panel glow-panel block overflow-hidden p-8 transition-colors hover:border-signal lg:p-10"
          >
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
              <span>Latest</span>
              <span className="text-muted-foreground">{featured.category}</span>
              <span className="text-muted-foreground">
                {formatDate(featured.date)} · {featured.readingTime}
              </span>
            </div>
            <h2 className="mt-4 max-w-[24ch] text-3xl font-bold sm:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-[64ch] text-sm leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <span className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-signal">
              Read article →
            </span>
          </Link>
        ) : null}

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="panel flex flex-col p-6 transition-colors hover:border-signal"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                {post.category}
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {formatDate(post.date)} · {post.readingTime}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
