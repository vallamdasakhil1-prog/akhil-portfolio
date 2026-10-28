import { ArrowUpRight } from "lucide-react";
import SectionHead from "./SectionHead";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const rows: { label: string; node: React.ReactNode }[] = [
    { label: "Phone", node: <a className="link" href={profile.phoneHref}>{profile.phone}</a> },
    {
      label: "GitHub",
      node: <a className="link inline-flex items-center gap-1" href={profile.github} target="_blank" rel="noopener noreferrer">github.com/vallamdasakhil1-prog <ArrowUpRight size={16} aria-hidden="true" /></a>,
    },
    {
      label: "LinkedIn",
      node: <a className="link inline-flex items-center gap-1" href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/vallamdas-akhil <ArrowUpRight size={16} aria-hidden="true" /></a>,
    },
    { label: "Location", node: <span>{profile.location}</span> },
  ];
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <SectionHead
        id="contact-title"
        index="05"
        label="Contact"
        title="I am looking for software engineering and AI internships."
        lead="If you are hiring, or want to build something together, send me an email."
      />
      <div className="mt-12 md:ml-[calc(25%+0.5rem)]">
        <a
          href={`mailto:${profile.email}`}
          className="inline-block max-w-full break-words border-b border-ink py-2 font-display text-[clamp(1.5rem,4.8vw,3.5rem)] leading-tight transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          {profile.email}
        </a>
        <dl className="mt-12">
          {rows.map((r) => (
            <div key={r.label} className="grid gap-1 border-t border-rule py-4 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-4">
              <dt className="text-muted">{r.label}</dt>
              <dd className="break-words">{r.node}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
