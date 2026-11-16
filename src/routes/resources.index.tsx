import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";
import { resources } from "@/content/resources";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Resources | Facilities Guides and Checklists | Allied Force Group" },
      {
        name: "description",
        content:
          "Practical facilities guides and checklists: contract mobilisation, site audits, water compliance records, security handovers, cleaning specifications and statutory planning.",
      },
      { property: "og:title", content: "Resources | Allied Force Group" },
      {
        property: "og:description",
        content:
          "Free guides and checklists for facilities, cleaning, security and compliance teams.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alliedforcegroup.com/resources" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/resources" },
    ],
  }),
  component: ResourcesIndex,
});

function ResourcesIndex() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Guides and <span className="text-gradient">checklists</span>
          </>
        }
        intro="The working documents we use on our own contracts, published so you can use them on yours. No sign-up, no gated download — read them here or print the page."
      >
        <Link to="/contact">
          <Button size="lg">Discuss your requirements</Button>
        </Link>
      </PageHero>

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Link
              key={resource.slug}
              to="/resources/$slug"
              params={{ slug: resource.slug }}
              className="panel flex flex-col p-7 transition-colors hover:border-signal"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                {resource.number} / {resource.kind}
              </div>
              <h2 className="mt-3 text-lg font-semibold leading-snug">
                {resource.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {resource.summary}
              </p>
              <span className="mt-5 inline-block text-sm font-semibold text-signal">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
