import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";
import sectorSecurity from "@/assets/sector-security.jpg";
import sectorCleaning from "@/assets/sector-cleaning.jpg";
import serviceIntegrated from "@/assets/service-integrated-fm.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Capability | Allied Force Group" },
      {
        name: "description",
        content:
          "The types of estate we work on and how a typical engagement runs, from site walk and written proposal through mobilisation to scheduled review.",
      },
      { property: "og:title", content: "Projects & Capability | Allied Force Group" },
      {
        property: "og:description",
        content:
          "How an Allied Force Group engagement runs in practice across security-led, commercial and public sector estates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alliedforcegroup.com/projects" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/projects" },
    ],
  }),
  component: ProjectsPage,
});

const estates = [
  {
    name: "Security-led estates",
    image: sectorSecurity,
    alt: "Security officer at a commercial building reception",
    summary:
      "Sites where controlled access and a visible, professional presence set the standard for everything else delivered on site.",
    scope: [
      "Guarding, patrols and keyholding",
      "Reception and access management",
      "CCTV, access control and alarm support",
    ],
  },
  {
    name: "Commercial and mixed estates",
    image: serviceIntegrated,
    alt: "Integrated facilities team on a commercial estate",
    summary:
      "Offices and multi-building sites taking engineering and site services together under one contract and one reporting pack.",
    scope: [
      "Planned and reactive maintenance",
      "Cleaning, waste and front of house",
      "Coordinated helpdesk and reporting",
    ],
  },
  {
    name: "Public sector and education",
    image: sectorCleaning,
    alt: "Cleaning operative in a modern public building",
    summary:
      "Civic buildings, schools and colleges supported around opening hours, term time and site access rules.",
    scope: [
      "Daily and periodic cleaning",
      "Building fabric and grounds support",
      "Documented access and site arrangements",
    ],
  },
];

const engagement = [
  {
    step: "Site walk",
    copy: "We visit, look at the plant and the standard being achieved today, and agree what is actually in scope.",
  },
  {
    step: "Written proposal",
    copy: "Tasks, frequencies, staffing and access arrangements set out in writing, with the price attached to them.",
  },
  {
    step: "Mobilisation plan",
    copy: "Screening, inductions, schedules and helpdesk set up against an agreed start date.",
  },
  {
    step: "Scheduled review",
    copy: "Performance discussed on a set cycle, with completed work, misses and open risks on the same page.",
  },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Projects"
        title={
          <>
            The estates we <span className="text-gradient">work on</span>
          </>
        }
        intro="Client work is covered by confidentiality, so rather than publish figures we set out the types of estate we support and how an engagement runs from first visit to scheduled review."
      >
        <Link to="/contact">
          <Button size="lg">Discuss your requirements</Button>
        </Link>
      </PageHero>

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {estates.map((estate) => (
            <article key={estate.name} className="panel overflow-hidden">
              <img
                src={estate.image}
                alt={estate.alt}
                loading="lazy"
                width={1024}
                height={640}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold">{estate.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {estate.summary}
                </p>
                <ul className="mt-5 grid gap-2">
                  {estate.scope.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-foreground/85">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded bg-signal text-[10px] font-bold text-signal-foreground">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wash-gradient border-y border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-20">
          <span className="eyebrow">How an engagement runs</span>
          <h2 className="mt-3 max-w-[24ch] text-3xl font-bold sm:text-4xl">
            From first visit to scheduled review
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {engagement.map((item, i) => (
              <div key={item.step} className="panel p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Step 0{i + 1}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{item.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[80rem] flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-[26ch] text-3xl font-bold sm:text-4xl">
          Tell us about your estate.
        </h2>
        <Link to="/contact">
          <Button size="lg">Discuss your requirements</Button>
        </Link>
      </section>
    </SiteLayout>
  );
}
