import { ArrowUpRight } from "lucide-react";
import SectionHead from "./SectionHead";
import ProjectPlate from "./ProjectPlate";
import { projects, type Project } from "@/data/portfolio";

function Stack({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap gap-y-3" aria-label={`${project.name} technologies`}>
      {project.stack.map((t) => (<li key={t} className="tag">{t}</li>))}
    </ul>
  );
}

function SourceLink({ project }: { project: Project }) {
  if (!project.github && !project.demo) {
    return <p className="text-[0.9375rem] text-muted">No public repository is linked yet.</p>;
  }
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-1">
      {project.github ? (
        <a className="link inline-flex items-center gap-1.5 font-medium" href={project.github} target="_blank" rel="noopener noreferrer">
          View {project.name} on GitHub <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      ) : null}
      {project.demo ? (
        <a className="link inline-flex items-center gap-1.5 font-medium" href={project.demo} target="_blank" rel="noopener noreferrer">
          Open {project.name} live demo <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

function Features({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3 border-t border-rule pt-5">
      {items.map((f) => (
        <li key={f} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.7rem] h-px w-4 shrink-0 bg-accent" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  );
}

function Primary({ project }: { project: Project }) {
  const id = `${project.slug}-title`;
  return (
    <article id={project.slug} aria-labelledby={id} className="scroll-mt-20">
      <div className="grid gap-x-8 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[0.9375rem] text-muted"><span className="font-display text-ink">Nº 1</span><span className="ml-3">{project.kind}</span></p>
          <h3 id={id} className="mt-3 text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">{project.name}</h3>
          <p className="mt-6 font-display text-xl leading-snug sm:text-2xl sm:leading-snug">{project.summary}</p>
          <p className="mt-5 text-muted">{project.problem}</p>
          <div className="mt-8"><Stack project={project} /></div>
          <div className="mt-8"><SourceLink project={project} /></div>
        </div>
        <ProjectPlate plate={project.plate} className="min-h-[18rem] lg:col-span-7" />
      </div>
      {project.details ? (
        <dl className="mt-12 grid gap-x-12 border-t border-ink md:grid-cols-2">
          {project.details.map((d) => (
            <div key={d.label} className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[9rem_1fr] sm:gap-4 md:grid-cols-1 xl:grid-cols-[9rem_1fr]">
              <dt className="font-display text-lg">{d.label}</dt>
              <dd className="text-muted">{d.text}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </article>
  );
}

function Secondary({ project, index, className }: { project: Project; index: number; className: string }) {
  const id = `${project.slug}-title`;
  return (
    <article id={project.slug} aria-labelledby={id} className={`scroll-mt-20 ${className}`}>
      <ProjectPlate plate={project.plate} className="min-h-[15rem]" />
      <p className="mt-6 text-[0.9375rem] text-muted"><span className="font-display text-ink">Nº {index}</span><span className="ml-3">{project.kind}</span></p>
      <h3 id={id} className="mt-2 text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1]">{project.name}</h3>
      <p className="mt-4 text-lg">{project.summary}</p>
      <p className="mt-3 text-muted">{project.problem}</p>
      {project.features ? <Features items={project.features} /> : null}
      <div className="mt-6"><Stack project={project} /></div>
      <div className="mt-6"><SourceLink project={project} /></div>
    </article>
  );
}

export default function Work() {
  const [first, second, third] = projects;
  return (
    <section id="work" aria-labelledby="work-title" className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <SectionHead
        id="work-title"
        index="01"
        label="Selected work"
        title="Three projects, each built end to end."
        lead="Academic and personal projects. None of them is a production deployment."
      />
      <div className="mt-14 space-y-20 lg:mt-20 lg:space-y-28">
        <Primary project={first} />
        <div className="grid gap-x-12 gap-y-20 lg:grid-cols-12">
          <Secondary project={second} index={2} className="lg:col-span-6" />
          <Secondary project={third} index={3} className="lg:col-span-5 lg:col-start-8 lg:mt-32" />
        </div>
      </div>
    </section>
  );
}
