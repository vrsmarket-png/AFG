import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/site/Button";
import { sectors } from "@/content/sectors";
import heroEstate from "@/assets/hero-estate.jpg";
import heroLoop from "@/assets/hero-loop.mp4.asset.json";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Reveal } from "@/components/site/Reveal";
import { GroupCompanies } from "@/components/site/GroupCompanies";
import { locations } from "@/content/locations";
import sectorSecurity from "@/assets/sector-security.jpg";
import serviceHard from "@/assets/service-hard-fm.jpg";
import serviceSoft from "@/assets/service-soft-fm.jpg";
import serviceIntegrated from "@/assets/service-integrated-fm.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Allied Force Group | Security-led integrated facilities services",
      },
      {
        name: "description",
        content:
          "Allied Force Group brings security-grade discipline to cleaning, facilities management and maintenance across UK estates — one accountable team, one contract, evidence captured at the point of work.",
      },
      {
        property: "og:title",
        content: "Allied Force Group | Security-led integrated facilities services",
      },
      {
        property: "og:description",
        content:
          "Security-grade discipline applied to cleaning, facilities management and maintenance. One accountable team, one contract, evidence at the point of work.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://alliedforcegroup.com/afg-share.jpg",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://alliedforcegroup.com/afg-share.jpg",
      },
      { property: "og:url", content: "https://alliedforcegroup.com/" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/" },
      { rel: "preload", as: "image", href: heroEstate, fetchPriority: "high" },
    ],
  }),
  component: Index,
});

const primaryServices = [
  {
    slug: "integrated-fm" as const,
    tag: "01 / Integrated FM",
    title: "One contract, one team",
    copy: "Engineering, site services and security managed together, with a single point of contact, one reporting pack and a shared escalation route.",
    image: serviceIntegrated,
  },
  {
    slug: "hard-fm" as const,
    tag: "02 / Hard FM",
    title: "Mechanical, electrical & fabric",
    copy: "Planned and reactive maintenance across HVAC, power, plumbing, fabric and fire and life-safety support, recorded against the asset register.",
    image: serviceHard,
  },
  {
    slug: "soft-services" as const,
    tag: "03 / Soft services",
    title: "Cleaning, waste & presentation",
    copy: "Daily and periodic cleaning, hygiene, front of house, grounds and segregated waste handling, delivered to a written specification.",
    image: serviceSoft,
  },
  {
    slug: "security-personnel" as const,
    tag: "04 / Security",
    title: "Personnel & systems",
    copy: "Guarding, patrols, keyholding and reception security, alongside CCTV, access control and alarms. Delivery arrangements confirmed following site review.",
    image: sectorSecurity,
  },
];

const supportingServices = [
  { slug: "security-systems" as const, name: "Security systems" },
  { slug: "water-compliance" as const, name: "Water compliance" },
  { slug: "vacant-property" as const, name: "Vacant property management" },
  { slug: "sustainability-energy" as const, name: "Sustainability and energy" },
];


const principles = [
  {
    title: "Scope written down",
    copy: "Tasks, frequencies and owners are agreed in writing before mobilisation, so nobody argues about what was included.",
  },
  {
    title: "Evidence at the point of work",
    copy: "Readings, photographs and sign-off are captured on site rather than reconstructed at month end.",
  },
  {
    title: "Planned access",
    copy: "Permits, escorts and inductions are planned with your site team ahead of attendance rather than on the day.",
  },
  {
    title: "Single point of contact",
    copy: "One contact owns the conversation from mobilisation through to review, so requests do not sit in a shared inbox.",
  },
];

function Index() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroVideo
          src={heroLoop.url}
          poster={heroEstate}
          className="ken-burns absolute inset-0 size-full object-cover motion-reduce:hidden"
        />
        <img
          src={heroEstate}
          alt="Commercial estate at dusk"
          width={1920}
          height={1088}
          className="absolute inset-0 hidden size-full object-cover motion-reduce:block"
        />
        <div className="scrim absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="relative mx-auto max-w-[80rem] px-6 py-20 sm:py-28 lg:py-36">
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="pulse-dot size-1.5 rounded-full bg-signal" />
            Integrated facilities services
          </span>
          <h1 className="mt-6 max-w-[16ch] text-4xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl">
            Security-led. <span className="text-gradient">Technology-run.</span>
          </h1>
          <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-foreground/80 sm:text-lg">
            Allied Force Group brings security-grade discipline to cleaning,
            facilities management and maintenance. One accountable team, one
            contract, with evidence captured at the point of work and reported
            to you live.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
        </div>
      </section>

      {/* Assurance bar */}
      <section className="border-b border-hairline bg-surface-raised">
        <div className="mx-auto grid max-w-[80rem] divide-y divide-hairline px-6 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {[
            { label: "Coverage", value: "UK-wide" },
            { label: "Disciplines", value: "Eight service families" },
            { label: "Accountability", value: "Single point of contact" },
            { label: "Evidence", value: "Captured at the point of work" },
          ].map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 70}
              className="px-0 py-6 sm:px-6"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                {item.label}
              </div>
              <div className="mt-2 text-base font-semibold">{item.value}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <Reveal>
          <span className="eyebrow">Sectors we serve</span>
          <h2 className="mt-3 max-w-[22ch] text-3xl font-bold sm:text-5xl">
            Estates that need <span className="text-gradient">consistency</span>
          </h2>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-muted-foreground">
            We work across estates where presentation, access and accountability
            matter. Scope and delivery arrangements are confirmed following a
            site review.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
        <Link to="/sectors" className="mt-8 inline-block">
          <Button variant="outline">View all sectors</Button>
        </Link>
      </section>

      {/* Assurance strip */}
      <section className="border-y border-hairline bg-surface">
        <div className="mx-auto grid max-w-[80rem] gap-3 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              to: "/why-us" as const,
              eyebrow: "Why us",
              title: "Security-grade discipline",
              body: "Approach, quality, health and safety, technology, social value and mobilisation.",
            },
            {
              to: "/areas" as const,
              eyebrow: "Coverage",
              title: "UK-wide, region by region",
              body: "Ten regions supported under one contract and one point of contact.",
            },
            {
              to: "/policies" as const,
              eyebrow: "Governance",
              title: "Policies published",
              body: "Quality, safety, safeguarding, data protection, modern slavery and more.",
            },
            {
              to: "/careers" as const,
              eyebrow: "Careers",
              title: "Join the team",
              body: "Security, cleaning, maintenance, helpdesk and contract management roles.",
            },
          ].map((card, i) => (
            <Reveal key={card.to} delay={i * 70}>
              <Link
                to={card.to}
                className="panel lift accent-edge block h-full p-6"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                  {card.eyebrow}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>


      {/* Services */}
      <section className="wash-gradient border-y border-hairline">
        <div className="mx-auto max-w-[80rem] px-6 py-20">
          <Reveal>
            <span className="eyebrow">What we deliver</span>
            <h2 className="mt-3 max-w-[24ch] text-3xl font-bold sm:text-5xl">
              Facilities, security and compliance under one roof
            </h2>
            <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-muted-foreground">
              Security sits alongside integrated FM, hard FM and soft services
              as a primary discipline. Scope and delivery arrangements are
              confirmed following a site review.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {primaryServices.map((service, i) => (
              <Reveal key={service.title} delay={i * 80}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="panel lift group block h-full overflow-hidden"
                >
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                      {service.tag}
                    </div>
                    <h3 className="mt-3 text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.copy}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {supportingServices.map((item) => (
              <Link
                key={item.slug}
                to="/services/$slug"
                params={{ slug: item.slug }}
                className="panel px-5 py-4 text-sm font-semibold transition-colors hover:border-signal hover:text-signal"
              >
                {item.name} →
              </Link>
            ))}
          </div>

          <Link to="/services" className="mt-8 inline-block">
            <Button variant="outline">See the full service catalogue</Button>
          </Link>

        </div>
      </section>

      {/* CSTM Services */}
      <section className="mx-auto max-w-[80rem] px-6 py-20">
        <div className="panel grid gap-8 overflow-hidden p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <span className="eyebrow">Group capability</span>
            <h2 className="mt-3 max-w-[20ch] text-3xl font-bold sm:text-4xl">
              Security delivered by CSTM Services
            </h2>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-muted-foreground">
              Our security services are delivered by CSTM Services, an Allied
              Force Group company approved under the SIA Approved Contractor
              Scheme. Guarding, patrols, keyholding and alarm response are
              provided under your Allied Force Group contract, with one point of
              contact and one reporting pack.
            </p>
            <Link
              to="/services/$slug"
              params={{ slug: "security-personnel" }}
              className="mt-7 inline-block"
            >
              <Button size="lg">Security services</Button>
            </Link>
          </div>
          <img
            src={sectorSecurity}
            alt="Security officer at a commercial building reception"
            loading="lazy"
            width={1024}
            height={640}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <GroupCompanies />

      <section className="border-y border-hairline bg-surface">
        <div className="mx-auto max-w-[80rem] px-6 py-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">Global locations</span>
              <h2 className="mt-3 max-w-[24ch] text-3xl font-bold sm:text-4xl">
                London headquarters, with offices in Frankfurt and New York
              </h2>
            </div>
            <Link
              to="/locations"
              className="text-sm font-semibold text-signal transition-colors hover:text-foreground"
            >
              View all locations →
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {locations.map((office) => (
              <Link
                key={office.slug}
                to="/locations"
                className="panel p-6 transition-colors hover:border-signal"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                  {office.country}
                </div>
                <div className="mt-2 text-lg font-semibold">{office.city}</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {office.role}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-hairline bg-surface">
        <div className="mx-auto grid max-w-[80rem] gap-12 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <span className="eyebrow">How we operate</span>
            <h2 className="mt-3 max-w-[18ch] text-3xl font-bold sm:text-4xl">
              Straightforward, documented, accountable
            </h2>
            <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-muted-foreground">
              We would rather commit to less and evidence all of it. These are
              the working principles we hold to on every contract.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="panel lift accent-edge h-full p-6">
                  <span className="pulse-dot mb-4 block size-2.5 rounded-full bg-signal" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="deep-gradient">
        <div className="mx-auto flex max-w-[80rem] flex-col gap-8 px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-[20ch] text-3xl font-bold sm:text-5xl">
              Tell us what your estate needs.
            </h2>
            <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-signal-foreground/80">
              Tell us the sites, the sectors and the services in scope. Call
              020 7183 9055 or email sales@alliedforcegroup.com and we will talk
              it through.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/contact">
              <Button size="lg" className="w-full bg-surface-raised text-foreground shadow-none hover:brightness-100 hover:opacity-90 sm:w-auto">
                Discuss your requirements
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
