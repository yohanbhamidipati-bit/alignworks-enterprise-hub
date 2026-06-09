import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/aw-ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ALIGNWORKS — Let's Start the Conversation" },
      { name: "description", content: "Connect with ALIGNWORKS to discuss technology, AI, cybersecurity, compliance, and modernization objectives." },
      { property: "og:title", content: "Contact ALIGNWORKS" },
      { property: "og:description", content: "Book an initial discovery call." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const SERVICES = ["Agentic AI", "AI Development", "Cybersecurity", "Cyber Compliance", "IV&V", "Testing Services", "Digital Transformation", "Other"];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Start the Conversation"
        description="Tell us about your objectives. A senior ALIGNWORKS consultant will respond within one business day."
      />

      <section className="section-aw">
        <div className="container-aw grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <form className="grid gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Name" name="name" required />
                <Field label="Organization" name="organization" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold tracking-wider uppercase text-foreground mb-2">Service Interest</label>
                <select className="w-full h-[52px] px-4 border border-border rounded-[6px] bg-background focus:outline-none focus:border-foreground text-[15px]">
                  {SERVICES.map((s) => (<option key={s}>{s}</option>))}
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-semibold tracking-wider uppercase text-foreground mb-2">Message</label>
                <textarea rows={6} maxLength={2000} className="w-full px-4 py-3 border border-border rounded-[6px] bg-background focus:outline-none focus:border-foreground text-[15px] resize-y" />
              </div>
              <div>
                <button type="submit" className="h-[52px] px-8 bg-foreground text-background text-[14px] font-medium tracking-wide rounded-[6px] hover:bg-[var(--navy)] transition-colors">
                  Book an Initial Discovery Call
                </button>
              </div>
            </form>
          </div>
          <aside className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-border space-y-10">
            <Info label="Email" value="hello@alignworks.com" />
            <Info label="Phone" value="+1 (202) 555-0142" />
            <Info label="Office" value={"1700 K Street NW\nWashington, DC 20006"} />
            <Info label="Business Hours" value={"Monday – Friday\n8:00 AM – 6:00 PM ET"} />
            <Info label="Response Time" value="Initial response within one business day." />
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[13px] font-semibold tracking-wider uppercase text-foreground mb-2">{label}{required && <span className="text-[var(--navy)]"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} maxLength={255} className="w-full h-[52px] px-4 border border-border rounded-[6px] bg-background focus:outline-none focus:border-foreground text-[15px]" />
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="eyebrow">{label}</div>
      <p className="mt-3 text-[17px] text-foreground whitespace-pre-line">{value}</p>
    </div>
  );
}