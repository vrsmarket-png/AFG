import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";
import { recommendPathway, type ServicePathway } from "@/lib/planner.functions";

export const Route = createFileRoute("/service-planner")({
  head: () => ({
    meta: [
      {
        title: "Service planner | Allied Force Group",
      },
      {
        name: "description",
        content:
          "Describe your estate and requirements and get a suggested Allied Force Group service pathway, with the questions we would ask before quoting.",
      },
      { property: "og:title", content: "Service planner | Allied Force Group" },
      {
        property: "og:description",
        content:
          "Describe your estate and requirements and get a suggested service pathway across facilities, engineering and security.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alliedforcegroup.com/service-planner" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/service-planner" },
    ],
  }),
  component: ServicePlannerPage,
});

const sectors = [
  "Commercial",
  "Healthcare",
  "Education",
  "Logistics and industrial",
  "Public sector",
  "Vacant property",
  "Data centres",
  "Rail",
];

type Status = "idle" | "working" | "done" | "error";

function ServicePlannerPage() {
  const run = useServerFn(recommendPathway);
  const [requirements, setRequirements] = useState("");
  const [sector, setSector] = useState("");
  const [sites, setSites] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<ServicePathway | null>(null);
  const [error, setError] = useState<string | null>(null);

  const tooShort = requirements.trim().length < 20;

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (tooShort || status === "working") return;
    setStatus("working");
    setError(null);
    setResult(null);
    try {
      const pathway = await run({
        data: {
          requirements: requirements.trim(),
          sector: sector || undefined,
          sites: sites.trim() || undefined,
        },
      });
      setResult(pathway);
      setStatus("done");
    } catch {
      setStatus("error");
      setError(
        "We could not generate a pathway just now. Call 020 7183 9055 or email sales@alliedforcegroup.com and we will talk it through.",
      );
    }
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Service planner"
        title={
          <>
            Build your <span className="text-gradient">service pathway</span>
          </>
        }
        intro="Describe your estate and what you need covered. We will suggest which Allied Force Group service families fit, what to think about, and the questions we would ask before quoting. Scope and delivery arrangements are always confirmed following a site review."
      />

      <section className="mx-auto max-w-[80rem] px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <form onSubmit={onSubmit} className="panel p-6 sm:p-8">
            <div className="grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="sector" className="text-sm font-semibold">
                  Sector (optional)
                </label>
                <select
                  id="sector"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="rounded-md border border-hairline bg-surface-raised px-3 py-2.5 text-sm"
                >
                  <option value="">Not sure / other</option>
                  {sectors.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-2">
                <label htmlFor="sites" className="text-sm font-semibold">
                  Sites in scope (optional)
                </label>
                <input
                  id="sites"
                  value={sites}
                  onChange={(e) => setSites(e.target.value)}
                  placeholder="e.g. three offices in the North West"
                  className="rounded-md border border-hairline bg-surface-raised px-3 py-2.5 text-sm"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="requirements" className="text-sm font-semibold">
                  What do you need covered?
                </label>
                <textarea
                  id="requirements"
                  required
                  rows={8}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Tell us about the buildings, the hours they operate, what is currently in place and what is not working."
                  className="rounded-md border border-hairline bg-surface-raised px-3 py-2.5 text-sm leading-relaxed"
                />
                <p className="text-xs text-muted-foreground">
                  A couple of sentences is enough. Please do not include personal
                  or confidential information.
                </p>
              </div>

              <div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={tooShort || status === "working"}
                  className="w-full sm:w-auto"
                >
                  {status === "working"
                    ? "Working on it…"
                    : "Suggest a service pathway"}
                </Button>
              </div>
            </div>
          </form>

          <div aria-live="polite" className="grid content-start gap-5">
            {status === "idle" && (
              <div className="panel p-6 text-sm leading-relaxed text-muted-foreground sm:p-8">
                Your suggested pathway will appear here. It is a starting point
                for the conversation, not a quotation or a commitment.
              </div>
            )}

            {status === "working" && (
              <div className="panel p-6 text-sm text-muted-foreground sm:p-8">
                Reading your requirements and matching them to our service
                families…
              </div>
            )}

            {status === "error" && (
              <div className="panel border-signal p-6 text-sm leading-relaxed sm:p-8">
                {error}
              </div>
            )}

            {status === "done" && result && (
              <>
                <div className="panel p-6 sm:p-8">
                  <span className="eyebrow">Suggested pathway</span>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {result.summary}
                  </p>
                </div>

                <div className="grid gap-3">
                  {result.services.map((service, i) => (
                    <Link
                      key={service.slug}
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="panel p-6 transition-colors hover:border-signal"
                    >
                      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                        {String(i + 1).padStart(2, "0")} / {service.name}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.why}
                      </p>
                    </Link>
                  ))}
                </div>

                {result.considerations.length > 0 && (
                  <div className="panel p-6 sm:p-8">
                    <h2 className="text-lg font-semibold">
                      What to think about
                    </h2>
                    <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-muted-foreground">
                      {result.considerations.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {result.questions.length > 0 && (
                  <div className="panel p-6 sm:p-8">
                    <h2 className="text-lg font-semibold">
                      What we would ask you
                    </h2>
                    <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-muted-foreground">
                      {result.questions.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="panel p-6 sm:p-8">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    This is a suggestion generated from what you described.
                    Scope and delivery arrangements are confirmed following a
                    site review.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Link to="/contact">
                      <Button className="w-full sm:w-auto">
                        Discuss your requirements
                      </Button>
                    </Link>
                    <a href="tel:+442071839055">
                      <Button variant="outline" className="w-full sm:w-auto">
                        Call 020 7183 9055
                      </Button>
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
