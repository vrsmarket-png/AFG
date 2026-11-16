import { Link } from "@tanstack/react-router";
import { serviceFamilies } from "@/content/services";
import { sectors } from "@/content/sectors";
import { legalEntityLine } from "@/content/legal";
import { locations } from "@/content/locations";
import afgLockup from "@/assets/afg-lockup-v2.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto grid max-w-[80rem] gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.85fr_1fr_1fr]">
        <div>
          <img
            src={afgLockup.url}
            alt="Allied Force Group"
            width={1994}
            height={789}
            loading="lazy"
            className="h-14 w-auto object-contain sm:h-16"
          />
          <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-muted-foreground">
            Security-led integrated facilities services: cleaning, facilities
            management, maintenance and security under one accountable contract,
            UK-wide.
          </p>
          <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Sectors
          </div>
          <ul className="mt-3 grid gap-2.5 text-sm">
            {sectors.map((sector) => (
              <li key={sector.slug}>
                <Link
                  to="/sectors/$slug"
                  params={{ slug: sector.slug }}
                  className="text-foreground/80 transition-colors hover:text-signal"
                >
                  {sector.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Services
          </div>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {serviceFamilies.map((family) => (
              <li key={family.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: family.slug }}
                  className="text-foreground/80 transition-colors hover:text-signal"
                >
                  {family.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="font-semibold text-signal transition-colors hover:text-foreground">
                All services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Company
          </div>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {[
              { label: "About", to: "/about" as const },
              { label: "Why us", to: "/why-us" as const },
              { label: "UK coverage", to: "/areas" as const },
              { label: "Global locations", to: "/locations" as const },
              { label: "Case studies", to: "/case-studies" as const },
              { label: "Projects", to: "/projects" as const },
              { label: "Insights", to: "/blog" as const },
              { label: "Resources", to: "/resources" as const },
              { label: "FM glossary", to: "/resources/fm-glossary" as const },
              { label: "Service planner", to: "/service-planner" as const },
              { label: "Careers", to: "/careers" as const },
              { label: "Policies", to: "/policies" as const },
              { label: "Contact", to: "/contact" as const },
              { label: "Privacy policy", to: "/privacy" as const },
              { label: "Terms of use", to: "/terms" as const },
              { label: "Sitemap", to: "/sitemap" as const },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-foreground/80 transition-colors hover:text-signal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Enquiries
          </div>
          <a
            href="tel:+442071839055"
            className="mt-4 block text-sm font-semibold text-foreground transition-colors hover:text-signal"
          >
            020 7183 9055
          </a>
          <a
            href="mailto:sales@alliedforcegroup.com"
            className="mt-1 block break-all text-sm text-foreground/80 transition-colors hover:text-signal"
          >
            sales@alliedforcegroup.com
          </a>
          <Link
            to="/contact"
            className="mt-3 inline-block text-sm font-semibold text-signal transition-colors hover:text-foreground"
          >
            Send an enquiry →
          </Link>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Offices
          </div>
          <ul className="mt-4 grid gap-4 text-sm">
            {locations.filter((office) => office.slug === "london").map((office) => (
              <li key={office.slug}>
                <div className="font-semibold text-foreground">
                  {office.city}
                </div>
                {office.slug === "london" && (
                  <div className="mt-0.5 text-[13px] text-muted-foreground">{office.role}</div>
                )}
                <div className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">
                  {office.addressLines[0]}, {office.postalCode}
                </div>
                <a
                  href={office.phoneHref}
                  className="mt-0.5 block text-[13px] text-foreground/80 transition-colors hover:text-signal"
                >
                  {office.phoneDisplay}
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/locations"
            className="mt-4 inline-block text-sm font-semibold text-signal transition-colors hover:text-foreground"
          >
            All locations →
          </Link>
        </div>
      </div>


      <div className="mx-auto flex max-w-[80rem] flex-col gap-3 border-t border-hairline px-6 py-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>Allied Force Group</span>
        <span>Security · Cleaning · Facilities management · Maintenance</span>
      </div>

      <div className="mx-auto max-w-[80rem] border-t border-hairline px-6 py-5">
        <p className="text-xs leading-relaxed text-muted-foreground">{legalEntityLine}</p>
      </div>
    </footer>
  );
}
