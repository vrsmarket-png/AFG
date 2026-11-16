import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";

const roles = [
  {
    title: "Security officers",
    body: "Static guarding, reception security and mobile patrols on commercial, industrial and public-facing sites.",
  },
  {
    title: "Cleaning operatives and supervisors",
    body: "Daily and periodic cleaning across offices, schools, healthcare and industrial buildings.",
  },
  {
    title: "Maintenance engineers",
    body: "Mechanical, electrical, plumbing and fabric work on planned and reactive schedules.",
  },
  {
    title: "Mobile and multi-site staff",
    body: "Roles covering several sites in a region, with planned routes and written attendance records.",
  },
  {
    title: "Contract and account management",
    body: "Running contracts day to day: scope, reporting, client reviews and continuous improvement.",
  },
  {
    title: "Helpdesk and coordination",
    body: "Logging jobs, scheduling planned work and keeping clients informed of progress.",
  },
];

const whatWeOffer = [
  "Direct employment and direct payment",
  "Written assignment instructions for every posting",
  "Site induction before your first shift",
  "Training relevant to the role you are deployed in",
  "A named contact in contract management",
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Allied Force Group" },
      {
        name: "description",
        content:
          "Work with Allied Force Group: security officers, cleaning operatives, maintenance engineers, mobile staff, helpdesk and contract management roles across the UK.",
      },
      { property: "og:title", content: "Careers | Allied Force Group" },
      {
        property: "og:description",
        content:
          "Roles across security, cleaning, maintenance and contract management. Send us your details.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alliedforcegroup.com/careers" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/careers" },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Work where the standard is <span className="text-gradient">written down</span>
          </>
        }
        intro="Our people are told what good looks like before they start, not corrected afterwards. If you want clear instructions, a proper induction and a named contact behind you, we would like to hear from you."
      >
        <a href="mailto:sales@alliedforcegroup.com?subject=Careers%20enquiry">
          <Button size="lg">Send us your CV</Button>
        </a>
      </PageHero>

      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <span className="eyebrow">Roles we recruit for</span>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <article key={role.title} className="panel p-7">
              <h2 className="text-lg font-semibold">{role.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {role.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Vacancies vary by region and contract. Send your details and we will
          contact you when something suitable comes up near you.
        </p>
      </section>

      <section className="wash-gradient border-y border-hairline">
        <div className="mx-auto grid max-w-[80rem] gap-10 px-6 py-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow">What you can expect</span>
            <ul className="mt-6 grid gap-2.5">
              {whatWeOffer.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-foreground/85">
                  <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded bg-signal text-[10px] font-bold text-signal-foreground">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel p-8">
            <h2 className="text-xl font-semibold">How to apply</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Email your CV with the region you can work in and the type of role
              you are looking for. Security roles require the relevant licence
              for the work you are deployed on.
            </p>
            <a
              href="mailto:sales@alliedforcegroup.com?subject=Careers%20enquiry"
              className="mt-5 inline-block"
            >
              <Button>Email your CV</Button>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Or call{" "}
              <a
                href="tel:+442071839055"
                className="font-semibold text-signal transition-colors hover:text-foreground"
              >
                020 7183 9055
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[80rem] flex-col gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="max-w-[26ch] text-3xl font-bold sm:text-4xl">
          Looking for services rather than a role?
        </h2>
        <Link to="/contact">
          <Button size="lg" variant="outline">
            Discuss your requirements
          </Button>
        </Link>
      </section>
    </SiteLayout>
  );
}
