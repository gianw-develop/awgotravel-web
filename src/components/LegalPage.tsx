import type { ReactNode } from "react";

interface LegalSection {
  title: string;
  content: ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  effectiveDate: string;
  sections: LegalSection[];
}

export function LegalPage({ eyebrow, title, intro, effectiveDate, sections }: LegalPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-navy pb-20 pt-32 text-center text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl md:text-6xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">{intro}</p>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-10 text-sm text-slate"><strong>Effective date:</strong> {effectiveDate}</p>
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 text-2xl font-semibold text-navy">{section.title}</h2>
                <div className="space-y-4 leading-relaxed text-slate">{section.content}</div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}