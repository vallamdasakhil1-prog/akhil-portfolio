import SectionHead from "./SectionHead";
import { about } from "@/data/portfolio";

export default function About() {
  const [lead, ...rest] = about;
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <SectionHead id="about-title" index="02" label="About" title="Where AI and software engineering meet." />
      <div className="mt-10 grid gap-8 md:grid-cols-12">
        <p className="font-display text-xl leading-relaxed sm:text-2xl sm:leading-relaxed md:col-span-5 md:col-start-4">{lead}</p>
        <div className="space-y-5 text-lg text-muted md:col-span-4 md:col-start-9">
          {rest.map((p) => (<p key={p}>{p}</p>))}
        </div>
      </div>
    </section>
  );
}
