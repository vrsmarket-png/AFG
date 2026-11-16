import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { legalEntityLine } from "@/content/legal";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Allied Force Group" },
      {
        name: "description",
        content:
          "Allied Force Group privacy policy. This page is being prepared.",
      },
      { property: "og:title", content: "Privacy Policy | Allied Force Group" },
      { property: "og:description", content: "This page is being prepared." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alliedforcegroup.com/privacy" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/privacy" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy policy" intro="This page is being prepared." />
      <section className="mx-auto max-w-[80rem] px-6 py-16">
        <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
          {legalEntityLine}
        </p>
      </section>
    </SiteLayout>
  );
}
