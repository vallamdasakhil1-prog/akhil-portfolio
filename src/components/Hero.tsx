import { Download } from "lucide-react";
import { pipeline, profile } from "@/data/portfolio";

const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as React.CSSProperties;

/** Original diagram: the path of one alert through the AI SOC Assistant, taken from its README. */
function PipelineFigure() {
  return (
    <figure aria-labelledby="fig-caption" className="card p-6 sm:p-8">
      <ol className="relative">
        {pipeline.map((step, i) => (
          <li
            key={step.title}
            className={`step-in relative flex gap-4 pb-5 last:pb-0 ${step.highlight ? "" : "text-muted"}`}
            style={delay(0.7 + i * 0.07)}
          >
            {i < pipeline.length - 1 ? <span aria-hidden="true" className="absolute left-[5px] top-4 h-full w-px bg-ink/30" /> : null}
            <span aria-hidden="true" className={`relative mt-1.5 h-[11px] w-[11px] shrink-0 border ${step.highlight ? "border-accent bg-accent" : "border-ink bg-tint"}`} />
            <div className={step.highlight ? "-mt-0.5 -ml-1 flex-1 border border-accent bg-paper px-4 py-3" : ""}>
              <p className={step.highlight ? "font-display text-xl text-accent" : "text-[0.9375rem] text-ink"}>{step.title}</p>
              {step.detail ? <p className="text-[0.9375rem] text-muted">{step.detail}</p> : null}
            </div>
          </li>
        ))}
      </ol>
      <figcaption id="fig-caption" className="mt-6 border-t border-rule pt-3 text-sm text-muted">
        Diagram. The path of one alert through AI SOC Assistant, as described in the project README.
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-page px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:px-10">
      <p className="flex flex-wrap justify-between gap-x-8 gap-y-1 border-b border-rule pb-4 text-[0.9375rem] text-muted">
        <span>{profile.name}</span>
        <span>{profile.title}</span>
        <span>{profile.location}</span>
      </p>

      <h1 id="hero-title" className="mt-10 text-[clamp(2.4rem,6.1vw,5.2rem)] leading-[1.02] tracking-[-0.025em] lg:mt-16">
        {profile.headline.map((line, i) => (
          <span key={line} className="block overflow-hidden pb-[0.14em]">
            <span className="line-rise" style={delay(i * 0.12)}>{line}</span>
          </span>
        ))}
      </h1>

      <div className="mt-10 grid gap-x-8 gap-y-12 lg:mt-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-display text-xl leading-snug sm:text-2xl sm:leading-snug">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-primary">Explore selected work</a>
            <a href="#contact" className="btn btn-secondary">Contact me</a>
          </div>
          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-1 text-[0.9375rem]">
            <li><a className="link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li>
              <a className="link inline-flex items-center gap-1.5" href={profile.resume} download>
                <Download size={14} aria-hidden="true" /> Resume (PDF)
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <PipelineFigure />
        </div>
      </div>
    </section>
  );
}
