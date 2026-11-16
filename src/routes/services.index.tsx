import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";
import { Reveal } from "@/components/site/Reveal";
import { serviceFamilies } from "@/content/services";
import { sectors } from "@/content/sectors";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Integrated FM, Hard FM, Soft Services & Security" },
      {
        name: "description",
        content:
          "Integrated FM, hard FM, soft services, security personnel and systems, water compliance, vacant property management and sustainability support, delivered UK-wide.",
      },
      { property: "og:title", content: "Facilities & Security Services | Allied Force Group" },
      {
        property: "og:description",
        content:
          "Eight service families across engineering, site services, security and compliance, delivered under one accountable contract.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alliedforcegroup.com/services" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/services" },
    ],
  }),
  component: ServicesPage,
});

const process = [
  { step: "Survey", copy: "Asset verification, condition survey and risk review across the sites in scope." },
  { step: "Mobilise", copy: "People, schedules, access arrangements and coordination set up against an agreed plan and date." },
  { step: "Operate", copy: "Delivery against the documented specification, with evidence captured at the point of work." },
  { step: "Review", copy: "Scheduled review covering open risks, missed tasks and corrective actions." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Eight service families, <span className="text-gradient">one accountable contract</span>
          </>
        }
        intro="Security, engineering, site services and compliance delivered with the same discipline. Take a single family or combine them under integrated management — the scope and delivery arrangements are confirmed following a site review either way."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto">
              Discuss your requirements
            </Button>
          </Link>
          <Link to="/sectors">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Sectors we serve
            </Button>
          </Link>
        </div>
      </PageHero>

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <Reveal>
          <span className="eyebrow">Service catalogue</span>
          <h2 className="mt-3 max-w-[24ch] text-3xl font-bold tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            What we cover
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-muted-foreground">
            Security sits alongside integrated FM, hard FM and soft services as a
            primary discipline rather than an add-on. Each family has its own page
            setting out what is included.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceFamilies.map((family, i) => (
            <Reveal key={family.slug} delay={(i % 3) * 80}>
              <Link
                to="/services/$slug"
                params={{ slug: family.slug }}
                className="panel lift accent-edge flex h-full flex-col p-6"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                  {family.number} / Service family
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.01em]">{family.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {family.short}
                </p>
                <span className="mt-5 inline-block text-sm font-semibold text-signal">
                  {family.name} detail →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wash-gradient border-y border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-20">
          <Reveal>
            <span className="eyebrow">Sectors</span>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] sm:text-4xl lg:text-5xl">
              Where we work
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, i) => (
              <Reveal key={sector.slug} delay={(i % 3) * 80}>
                <Link
                  to="/sectors/$slug"
                  params={{ slug: sector.slug }}
                  className="panel lift accent-edge block h-full p-6"
                >
                  <h3 className="text-lg font-semibold">{sector.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {sector.line}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <Reveal>
          <span className="eyebrow">How we deliver</span>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Four stages, every contract
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 80}>
              <div className="panel lift accent-edge h-full p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Stage 0{i + 1}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="deep-gradient">
        <div className="mx-auto flex max-w-[80rem] flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-[24ch] text-3xl font-bold sm:text-4xl">
              Tell us which services you need covered.
            </h2>
            <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-signal-foreground/80">
              Send your requirements through the enquiry form, call
              020 7183 9055 or email sales@alliedforcegroup.com.
            </p>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-surface-raised text-foreground shadow-none hover:brightness-100 hover:opacity-90">
              Discuss your requirements
            </Button>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
