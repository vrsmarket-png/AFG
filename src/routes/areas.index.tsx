import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";
import { areas } from "@/content/areas";
import { UkCoverageMap } from "@/components/site/UkCoverageMap";

export const Route = createFileRoute("/areas/")({
  head: () => ({
    meta: [
      { title: "UK Coverage | Allied Force Group" },
      {
        name: "description",
        content:
          "Security-led cleaning, facilities management and maintenance delivered UK-wide, from Greater London to Scotland. Coverage for your sites confirmed following a site review.",
      },
      { property: "og:title", content: "UK Coverage | Allied Force Group" },
      {
        property: "og:description",
        content:
          "Where we work: ten UK regions supported under one contract and one point of contact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alliedforcegroup.com/areas" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/areas" },
    ],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Coverage"
        title={
          <>
            Where we <span className="text-gradient">work</span>
          </>
        }
        intro="We support estates UK-wide under one contract and one point of contact. Attendance patterns, travel and local arrangements are confirmed for your sites following a site review."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto">
              Discuss your requirements
            </Button>
          </Link>
          <a href="tel:+442071839055">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Call 020 7183 9055
            </Button>
          </a>
        </div>
      </PageHero>

      <section className="border-t border-hairline bg-surface">
        <div className="mx-auto max-w-[80rem] px-6 py-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
            Coverage map
          </div>
          <h2 className="mt-3 max-w-[22ch] text-3xl font-bold sm:text-4xl">
            Ten regions, one contract
          </h2>
          <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
            Hover or select a region to see where we work and the main centres
            within it. The map is illustrative; coverage for your sites is
            confirmed following a site review.
          </p>
          <div className="mt-12">
            <UkCoverageMap />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.slug}
              to="/areas/$slug"
              params={{ slug: area.slug }}
              className="panel p-7 transition-colors hover:border-signal"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                {area.number} / Region
              </div>
              <h2 className="mt-3 text-xl font-semibold">{area.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {area.line}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-signal">
                Coverage detail →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="deep-gradient">
        <div className="mx-auto flex max-w-[80rem] flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-[26ch] text-3xl font-bold sm:text-4xl">
            Multiple sites in more than one region?
          </h2>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-surface-raised text-foreground shadow-none hover:brightness-100 hover:opacity-90"
            >
              Discuss your requirements
            </Button>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
