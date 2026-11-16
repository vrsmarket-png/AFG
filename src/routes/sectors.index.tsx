import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";
import { Reveal } from "@/components/site/Reveal";
import { sectors } from "@/content/sectors";

export const Route = createFileRoute("/sectors/")({
  head: () => ({
    meta: [
      { title: "Sectors We Serve | Allied Force Group" },
      {
        name: "description",
        content:
          "Commercial, healthcare, education, logistics and industrial, public sector and vacant property estates supported with security-led facilities services.",
      },
      { property: "og:title", content: "Sectors We Serve | Allied Force Group" },
      {
        property: "og:description",
        content:
          "The estate types we support with cleaning, facilities management, maintenance and security under one contract.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alliedforcegroup.com/sectors" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/sectors" },
    ],
  }),
  component: SectorsPage,
});

function SectorsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sectors"
        title={
          <>
            Estates we <span className="text-gradient">serve</span>
          </>
        }
        intro="We work across estates where presentation, access and accountability matter. Scope and delivery arrangements are confirmed following a site review."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto">
              Discuss your requirements
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              See our services
            </Button>
          </Link>
        </div>
      </PageHero>

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <Reveal key={sector.slug} delay={(i % 3) * 80}>
              <Link
                to="/sectors/$slug"
                params={{ slug: sector.slug }}
                className="panel lift accent-edge group block h-full overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.imageAlt}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                    {sector.number} / Sector
                  </div>
                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.01em]">{sector.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {sector.line}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-signal">
                    Explore this sector →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="deep-gradient">
        <div className="mx-auto flex max-w-[80rem] flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-[24ch] text-3xl font-bold sm:text-4xl">
            Tell us about your estate.
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
