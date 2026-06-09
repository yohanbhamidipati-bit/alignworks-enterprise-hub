import { PageHero, BulletSection, FinalCTA, FeatureGrid, SectionHeading } from "@/components/aw-ui";

export interface ServicePageProps {
  eyebrow: string;
  hero: string;
  intro: string;
  challenges: { title: string; bullets: string[] };
  capabilities: { title: string; items: { title: string; description: string }[] };
  benefits: string[];
  process: { title: string; bullets: string[] };
}

export function ServicePage(p: ServicePageProps) {
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.hero} description={p.intro} />

      <section className="section-aw">
        <div className="container-aw grid lg:grid-cols-2 gap-16">
          <BulletSection title={p.challenges.title} bullets={p.challenges.bullets} />
          <BulletSection title={p.process.title} bullets={p.process.bullets} />
        </div>
      </section>

      <section className="section-aw border-t border-border bg-[var(--surface)]">
        <div className="container-aw">
          <SectionHeading eyebrow="Capabilities" title={p.capabilities.title} />
          <div className="mt-16"><FeatureGrid items={p.capabilities.items} /></div>
        </div>
      </section>

      <section className="section-aw">
        <div className="container-aw grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="eyebrow">Benefits</div>
            <h2 className="mt-4">Outcomes Our Clients See</h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
              {p.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-[16px] leading-[1.7] text-[var(--body)] border-t border-border pt-5">
                  <span className="mt-[10px] inline-block h-[6px] w-[6px] shrink-0 bg-[var(--navy)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}