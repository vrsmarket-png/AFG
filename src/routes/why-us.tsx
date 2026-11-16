import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";
import { pillars } from "@/content/why";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Allied Force Group | Security-led delivery" },
      {
        name: "description",
        content:
          "Our approach, quality assurance, health and safety, technology, social value and mobilisation — how security-grade discipline is applied across every service we deliver.",
      },
      { property: "og:title", content: "Why Allied Force Group | Security-led delivery" },
      {
        property: "og:description",
        content:
          "One accountable team, a written scope and evidence captured at the point of work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alliedforcegroup.com/why-us" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/why-us" },
    ],
  }),
  component: WhyUsPage,
});

function WhyUsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Why Allied Force Group"
        title={
          <>
            Discipline you can <span className="text-gradient">check</span>
          </>
        }
        intro="Security teaches habits that most facilities contracts lack: written instructions, controlled access, and a record of what happened. We apply those habits to cleaning, maintenance and engineering as well."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto">
              Discuss your requirements
            </Button>
          </Link>
          <Link to="/policies">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Read our policies
            </Button>
          </Link>
        </div>
      </PageHero>

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.id} id={pillar.id} className="panel p-8 scroll-mt-24">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                {pillar.number}
              </div>
              <h2 className="mt-3 text-2xl font-semibold">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.line}
              </p>
              <ul className="mt-5 grid gap-2.5">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-foreground/85">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded bg-signal text-[10px] font-bold text-signal-foreground">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="wash-gradient border-y border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-16">
          <span className="eyebrow">Approvals</span>
          <h2 className="mt-3 max-w-[26ch] text-3xl font-bold sm:text-4xl">
            Security delivered by CSTM Services
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-muted-foreground">
            Our security services are delivered by CSTM Services, an Allied Force
            Group company approved under the SIA Approved Contractor Scheme.
            Guarding, patrols, keyholding and alarm response are provided under
            your Allied Force Group contract, with one point of contact and one
            reporting pack.
          </p>
          <Link to="/services/$slug" params={{ slug: "security-personnel" }} className="mt-7 inline-block">
            <Button size="lg">Security services</Button>
          </Link>
        </div>
      </section>

      <section className="deep-gradient">
        <div className="mx-auto flex max-w-[80rem] flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-[26ch] text-3xl font-bold sm:text-4xl">
            Put us in front of your most demanding site.
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
