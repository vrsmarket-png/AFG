import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/site/Button";
import { submitEnquiry } from "@/lib/enquiries.functions";
import { locations } from "@/content/locations";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Allied Force Group | Discuss Your Requirements" },
      {
        name: "description",
        content:
          "Send an enquiry, call 020 7183 9055 or email sales@alliedforcegroup.com to discuss cleaning, facilities management, maintenance and security for your estate.",
      },
      { property: "og:title", content: "Contact Allied Force Group" },
      {
        property: "og:description",
        content:
          "Send an enquiry or call 020 7183 9055 to discuss facilities services for your estate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://alliedforcegroup.com/contact" },
    ],
    links: [
      { rel: "canonical", href: "https://alliedforcegroup.com/contact" },
    ],
  }),
  component: ContactPage,
});

const prepare = [
  "Number and location of the sites involved",
  "Sector and type of estate",
  "Services you need covered",
  "Any current arrangements already in place",
  "Timescales you are working to",
  "Access or clearance requirements on site",
];

const tradingOffice = locations.find((office) => office.slug === "london");

type Errors = Partial<Record<string, string>>;

function ContactPage() {
  const send = useServerFn(submitEnquiry);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const values = {
      name: String(fd.get("name") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      service: String(fd.get("service") ?? "").trim(),
      sites: String(fd.get("sites") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    const next: Errors = {};
    if (values.name.length < 2) next["name"] = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next["email"] = "Please enter a valid email address";
    if (values.message.length < 10)
      next["message"] = "Please tell us a little more about the requirement";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    try {
      await send({ data: values });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "We could not send that just now. Please call 020 7183 9055 or email sales@alliedforcegroup.com.",
      );
    }
  }

  const field =
    "mt-2 w-full rounded-xl border border-input bg-surface-raised px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-signal";
  const label = "block text-sm font-semibold text-foreground";

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Discuss your <span className="text-gradient">requirements</span>
          </>
        }
        intro="Send us the outline of your estate and we will come back with the next step. You can also call 020 7183 9055 or email sales@alliedforcegroup.com directly."
      />

      <section className="mx-auto grid max-w-[80rem] gap-5 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div className="panel p-7 sm:p-9">
          <span className="eyebrow">Enquiry</span>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Send your requirements</h2>

          {status === "sent" ? (
            <div
              role="status"
              aria-live="polite"
              className="mt-6 rounded-2xl border border-signal/40 bg-surface p-6"
            >
              <h3 className="text-lg font-semibold">Thank you — your enquiry has been received.</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We have recorded your details and will be in touch. If it is
                urgent, call 020 7183 9055.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm font-semibold text-signal hover:text-foreground"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form className="mt-6 grid gap-5" onSubmit={onSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="name">
                    Your name
                  </label>
                  <input id="name" name="name" className={field} autoComplete="name" required />
                  {errors["name"] ? (
                    <p className="mt-1.5 text-xs font-medium text-destructive">{errors["name"]}</p>
                  ) : null}
                </div>
                <div>
                  <label className={label} htmlFor="company">
                    Organisation
                  </label>
                  <input id="company" name="company" className={field} autoComplete="organization" />
                </div>
                <div>
                  <label className={label} htmlFor="email">
                    Email
                  </label>
                  <input id="email" name="email" type="email" className={field} autoComplete="email" required />
                  {errors["email"] ? (
                    <p className="mt-1.5 text-xs font-medium text-destructive">{errors["email"]}</p>
                  ) : null}
                </div>
                <div>
                  <label className={label} htmlFor="phone">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" className={field} autoComplete="tel" />
                </div>
                <div>
                  <label className={label} htmlFor="service">
                    Service needed
                  </label>
                  <input id="service" name="service" className={field} placeholder="e.g. security and cleaning" />
                </div>
                <div>
                  <label className={label} htmlFor="sites">
                    Number of sites
                  </label>
                  <input id="sites" name="sites" className={field} placeholder="e.g. 4 sites, London" />
                </div>
              </div>
              <div>
                <label className={label} htmlFor="message">
                  Details
                </label>
                <textarea id="message" name="message" rows={5} className={field} required />
                {errors["message"] ? (
                  <p className="mt-1.5 text-xs font-medium text-destructive">{errors["message"]}</p>
                ) : null}
              </div>

              {status === "error" ? (
                <p role="alert" className="text-sm font-medium text-destructive">
                  {errorMessage}
                </p>
              ) : null}

              <div>
                <Button size="lg" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send enquiry"}
                </Button>
              </div>
            </form>
          )}
        </div>

        <div className="grid gap-5">
          <a
            href="tel:+442071839055"
            className="deep-gradient block rounded-3xl p-8 shadow-[var(--shadow-panel)] transition-[filter] hover:brightness-110"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-foreground/75">
              Speak to Allied Force Group
            </div>
            <div className="mt-3 font-display text-3xl font-bold leading-none sm:text-4xl">
              020 7183 9055
            </div>
            <p className="mt-4 text-sm leading-relaxed text-signal-foreground/80">
              Tap or click to call. If we are on site, leave a number and a short
              outline and we will call you back.
            </p>
          </a>

          <div className="panel p-7">
            <span className="eyebrow">Or email us</span>
            <a
              href="mailto:sales@alliedforcegroup.com"
              className="mt-2 block break-all font-display text-lg font-bold transition-colors hover:text-signal"
            >
              sales@alliedforcegroup.com
            </a>
          </div>

          <div className="panel p-7">
            <span className="eyebrow">Before you call</span>
            <h2 className="mt-3 text-xl font-bold">What to have ready</h2>
            <ul className="mt-5 grid gap-3">
              {prepare.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-foreground/85">
                  <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded bg-signal text-[10px] font-bold text-signal-foreground">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {tradingOffice && (
            <div className="panel p-7">
              <span className="eyebrow">Trading address</span>
              <address className="mt-3 not-italic text-sm leading-relaxed text-muted-foreground">
                {tradingOffice.addressLines.map((line) => <div key={line}>{line}</div>)}
                <div>{tradingOffice.postalCode}</div>
              </address>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
