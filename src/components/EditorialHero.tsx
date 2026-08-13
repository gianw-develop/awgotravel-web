import { ReactNode } from "react";

export function EditorialHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <section className="bg-navy px-5 pb-16 pt-36 text-white sm:px-8 lg:pb-24"><div className="mx-auto max-w-7xl"><p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p><h1 className="font-editorial mt-6 max-w-3xl text-5xl leading-[.98] sm:text-7xl">{title}</h1>{children && <div className="mt-7 max-w-2xl text-lg leading-8 text-white/65">{children}</div>}</div></section>;
}