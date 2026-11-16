import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";
import { policies } from "@/content/policies";

export const Route = createFileRoute("/policies/")({
  head: () => ({
    meta: [
      { title: "Policies and Governance | Allied Force Group" },
      {
        name: "description",
        content:
          "Our published policies: quality, health and safety, environment, safeguarding, data protection, modern slavery, whistleblowing, anti-bribery and more.",
      },
      { property: "og:title", content: "Policies and Governance | Allied Force Group" },
      {
        property: "og:description",
        content:
          "The written commitments behind how Allied Force Group delivers work on client sites.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alliedforcegroup.com/policies" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/policies" },
    ],
  }),
  component: PoliciesPage,
});

function PoliciesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Governance"
        title={
          <>
            Policies you can <span className="text-gradient">read</span>
          </>
        }
        intro="Procurement teams ask for these before anything else, so they are published here rather than promised on request. Each statement applies to our people and to subcontractors working under our contracts."
      >
        <Link to="/contact">
          <Button size="lg">Request signed copies</Button>
        </Link>
      </PageHero>

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy) => (
            <Link
              key={policy.slug}
              to="/policies/$slug"
              params={{ slug: policy.slug }}
              className="panel p-7 transition-colors hover:border-signal"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                {policy.number} / Policy
              </div>
              <h2 className="mt-3 text-lg font-semibold">{policy.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {policy.summary}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-signal">
                Read policy →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
