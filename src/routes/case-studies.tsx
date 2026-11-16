import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";
import { Reveal } from "@/components/site/Reveal";
import { caseStudies } from "@/content/caseStudies";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | Allied Force Group" },
      {
        name: "description",
        content:
          "Security-led facilities work across logistics, commercial, healthcare and education estates: what was in scope, how it was delivered and what the client saw.",
      },
      { property: "og:title", content: "Case Studies | Allied Force Group" },
      {
        property: "og:description",
        content:
          "Examples of Allied Force Group contracts across logistics, commercial, healthcare and education estates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alliedforcegroup.com/case-studies" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/case-studies" },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Case studies"
        title={
          <>
            Work we can <span className="text-gradient">show you</span>
          </>
        }
        intro="Four contracts across logistics, commercial, healthcare and education estates. Each one sets out the brief, what sat inside the scope and what the client sees in reporting."
      >
        <Link to="/contact">
          <Button size="lg">Discuss your requirements</Button>
        </Link>
      </PageHero>

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={(index % 2) * 90} className="h-full">
            <article className="panel lift accent-edge group flex h-full flex-col overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/80 backdrop-blur">
                  {String(index + 1).padStart(2, "0")} · {study.sector}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {study.client} · {study.location}
                </div>
                <h2 className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">
                  {study.headline}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {study.brief}
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                      Scope
                    </div>
                    <ul className="mt-3 grid gap-2">
                      {study.scope.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-foreground/85">
                          <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded bg-signal text-[10px] font-bold text-signal-foreground">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                      What the client sees
                    </div>
                    <ul className="mt-3 grid gap-2">
                      {study.outcome.map((item) => (
                        <li
                          key={item}
                          className="border-l border-hairline pl-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {study.testimonial ? (
                  <figure className="mt-7 rounded-xl border border-hairline bg-surface p-5">
                    <blockquote className="text-sm leading-relaxed text-foreground/90">
                      “{study.testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {study.testimonial.name} · {study.testimonial.role}
                    </figcaption>
                  </figure>
                ) : null}
              </div>
            </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Client names, locations and quotes shown here are illustrative pending
          written approval from each client.
        </p>
      </section>

      <section className="deep-gradient border-y border-hairline">
        <div className="mx-auto flex max-w-[80rem] flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-[24ch] text-3xl font-bold sm:text-4xl">
              Bring us your most demanding site first.
            </h2>
            <p className="mt-3 max-w-[52ch] text-sm leading-relaxed opacity-85">
              We will walk the site, write the scope down and price against it.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact">
              <Button size="lg">Discuss your requirements</Button>
            </Link>
            <a href="tel:+442071839055">
              <Button size="lg" variant="outline">
                Call 020 7183 9055
              </Button>
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
