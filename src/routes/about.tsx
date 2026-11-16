import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";
import { locations } from "@/content/locations";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Allied Force Group | Facilities Support for Critical Estates" },
      {
        name: "description",
        content:
          "Who we are: a security-led facilities services provider, built around written scope and evidenced delivery.",
      },
      { property: "og:title", content: "About Allied Force Group" },
      {
        property: "og:description",
        content:
          "A facilities support provider built around documented scope, planned access and evidence-led delivery.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alliedforcegroup.com/about" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/about" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    tag: "01",
    title: "Evidence-led delivery",
    copy: "We work to commitments that carry an owner, a timescale and a record, so progress can be reviewed rather than taken on trust.",
  },
  {
    tag: "02",
    title: "One accountable team",
    copy: "Engineering and site services sit under a single point of contact, so issues do not fall between suppliers.",
  },
  {
    tag: "03",
    title: "Planned access and clearance",
    copy: "Screening, inductions and site-specific access requirements are agreed with the client and arranged ahead of attendance.",
  },
  {
    tag: "04",
    title: "Security-grade discipline",
    copy: "Screening, licensing and incident reporting standards from security are applied across every service we deliver.",
  },
];

const organisation = [
  { name: "Operations", role: "Day-to-day delivery and site supervision" },
  { name: "Engineering", role: "Mechanical and electrical maintenance leadership" },
  { name: "Compliance", role: "Documentation, screening and safe systems of work" },
  { name: "Mobilisation", role: "Survey, transfer and contract start-up" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Built around <span className="text-gradient">accountability</span>
          </>
        }
        intro="Allied Force Group brings security-grade discipline to cleaning, facilities management and maintenance UK-wide. We bring these services together under one contract so clients hold one conversation rather than several."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto">
              Discuss your requirements
            </Button>
          </Link>
          <Link to="/sectors">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View the sectors we serve
            </Button>
          </Link>
        </div>
      </PageHero>

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Our approach</span>
            <h2 className="mt-3 max-w-[18ch] text-3xl font-bold sm:text-4xl">
              Four principles we do not trade away
            </h2>
            <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-muted-foreground">
              These are the standards our contracts are written against and the
              lines our reviews are measured on.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.tag} className="panel p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                  {value.tag}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wash-gradient border-y border-hairline">
        <div className="mx-auto grid max-w-[80rem] gap-10 px-6 py-20 lg:grid-cols-2">
          <div>
            <span className="eyebrow">What we are for</span>
            <h2 className="mt-3 max-w-[22ch] text-3xl font-bold sm:text-4xl">
              Facilities support that behaves like part of your operation
            </h2>
          </div>
          <div className="grid content-start gap-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Most facilities problems are not technical. They are questions of
              scope, access and record-keeping: who was supposed to do what, when
              they were allowed on site, and whether anyone can prove it happened.
            </p>
            <p>
              We work the other way round. Scope is documented before
              mobilisation, access is planned ahead of attendance, and evidence
              is captured while the work is being done.
            </p>
            <p>
              That approach came from critical environments, where a missed step
              has consequences beyond a late report. It applies just as well to a
              commercial estate.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <span className="eyebrow">How we are organised</span>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          A single point of contact, not a shared inbox
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {organisation.map((item) => (
            <div
              key={item.name}
              className="panel p-6 transition-colors hover:border-signal"
            >
              <div className="text-base font-semibold">{item.name}</div>
              <p className="mt-2 text-sm text-muted-foreground">{item.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wash-gradient border-t border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-20">
          <span className="eyebrow">Where we operate</span>
          <h2 className="mt-3 max-w-[24ch] text-3xl font-bold sm:text-4xl">
            London headquarters, offices in Germany and the United States
          </h2>
          <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
            Allied Force Group Ltd contracts from London and supports sites
            UK-wide, with group offices in Frankfurt and New York acting as the
            point of contact for enquiries in those regions. Scope and local
            delivery arrangements are confirmed following a site review.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {locations.map((office) => (
              <Link
                key={office.slug}
                to="/locations"
                className="panel p-6 transition-colors hover:border-signal"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                  {office.country}
                </div>
                <div className="mt-2 text-base font-semibold">{office.city}</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {office.role}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
