import { SITE, absoluteUrl } from "./site";
import { serviceFamilies } from "@/content/services";
import { sectors } from "@/content/sectors";
import { areas } from "@/content/areas";
import { legalEntityLine } from "@/content/legal";

/** Short machine-readable profile of the company, per the llms.txt convention. */
export function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(
    "> Allied Force Group is a UK facilities services provider that brings security-grade discipline to cleaning, facilities management and maintenance under a single accountable contract.",
  );
  lines.push("");
  lines.push(
    `${SITE.legalName} is the client-facing contracting entity. Security delivery is carried out by CSTM Services Ltd, a group company. Eight service families are offered: integrated facilities management, hard FM, soft services, security personnel, security systems, water compliance, vacant property management, and sustainability and energy. Sectors served include commercial, healthcare, education, logistics and industrial, public sector, vacant property, data centres and rail. Coverage is UK-wide across ten regions. Scope, frequencies and delivery arrangements for any site are confirmed following a site review. Enquiries: ${SITE.phoneDisplay} or ${SITE.email}.`,
  );
  lines.push("");
  lines.push(legalEntityLine);
  lines.push("");

  lines.push("## Services");
  lines.push("");
  for (const family of serviceFamilies) {
    lines.push(
      `- [${family.name}](${absoluteUrl(`/services/${family.slug}`)}): ${family.short}`,
    );
  }
  lines.push("");

  lines.push("## Sectors");
  lines.push("");
  for (const sector of sectors) {
    lines.push(
      `- [${sector.name}](${absoluteUrl(`/sectors/${sector.slug}`)}): ${sector.line}`,
    );
  }
  lines.push("");

  lines.push("## Coverage");
  lines.push("");
  for (const area of areas) {
    lines.push(`- [${area.name}](${absoluteUrl(`/areas/${area.slug}`)}): ${area.line}`);
  }
  lines.push("");

  lines.push("## Company");
  lines.push("");
  lines.push(`- [About](${absoluteUrl("/about")}): How Allied Force Group is organised and how work is run.`);
  lines.push(`- [Why us](${absoluteUrl("/why-us")}): Approach, quality, safety, technology, social value and mobilisation.`);
  lines.push(`- [Global locations](${absoluteUrl("/locations")}): Group office in London (headquarters).`);
  lines.push(`- [Policies](${absoluteUrl("/policies")}): Published company policies.`);
  lines.push(`- [Resources](${absoluteUrl("/resources")}): Practical facilities checklists and guides.`);
  lines.push(`- [Glossary](${absoluteUrl("/resources/fm-glossary")}): Definitions of common facilities management terms.`);
  lines.push(`- [Insights](${absoluteUrl("/blog")}): Articles on facilities, compliance and security operations.`);
  lines.push("");

  lines.push("## Contact");
  lines.push("");
  lines.push(`- Telephone: ${SITE.phoneDisplay}`);
  lines.push(`- Email: ${SITE.email}`);
  lines.push(`- [Enquiry form](${absoluteUrl("/contact")})`);
  lines.push("");

  return lines.join("\n");
}

/** Full plain-text content of the core service and sector pages. */
export function buildLlmsFullTxt(): string {
  const lines: string[] = [];

  lines.push(`# ${SITE.name} — full content`);
  lines.push("");
  lines.push(SITE.description);
  lines.push("");
  lines.push(legalEntityLine);
  lines.push("");

  lines.push("## Services");
  lines.push("");
  for (const family of serviceFamilies) {
    lines.push(`### ${family.name}`);
    lines.push(absoluteUrl(`/services/${family.slug}`));
    lines.push("");
    lines.push(family.intro);
    lines.push("");
    for (const group of family.groups) {
      lines.push(`#### ${group.title}`);
      for (const item of group.items) lines.push(`- ${item}`);
      lines.push("");
    }
    if (family.note) {
      lines.push(family.note);
      lines.push("");
    }
  }

  lines.push("## Sectors");
  lines.push("");
  for (const sector of sectors) {
    lines.push(`### ${sector.name}`);
    lines.push(absoluteUrl(`/sectors/${sector.slug}`));
    lines.push("");
    lines.push(sector.intro);
    lines.push("");
    for (const priority of sector.priorities) {
      lines.push(`- ${priority.title}: ${priority.body}`);
    }
    lines.push("");
    lines.push(`Services typically delivered: ${sector.services.join("; ")}.`);
    lines.push("");
  }

  lines.push("## UK coverage");
  lines.push("");
  for (const area of areas) {
    lines.push(`### ${area.name}`);
    lines.push(absoluteUrl(`/areas/${area.slug}`));
    lines.push("");
    lines.push(area.intro);
    lines.push(`Main centres: ${area.places.join(", ")}.`);
    lines.push("");
  }

  lines.push("## Contact");
  lines.push("");
  lines.push(`Telephone: ${SITE.phoneDisplay}`);
  lines.push(`Email: ${SITE.email}`);
  lines.push(absoluteUrl("/contact"));
  lines.push("");

  return lines.join("\n");
}
