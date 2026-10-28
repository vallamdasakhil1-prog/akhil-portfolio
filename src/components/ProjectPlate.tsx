import type { Plate } from "@/data/portfolio";

interface Props { plate: Plate; className?: string }

/** Original diagram panel for a project. These are drawings built from the project's documented structure, not screenshots. */
export default function ProjectPlate({ plate, className = "" }: Props) {
  return (
    <figure className={`card flex flex-col justify-between p-6 sm:p-8 ${className}`}>
      <ol className="flex flex-1 flex-col">
        {plate.steps.map((step, i) => (
          <li key={step.title} className="grid flex-1 grid-cols-[2.25rem_1fr] content-center items-baseline gap-x-3 border-t border-ink/25 py-4 first:border-t-0 first:pt-0 last:pb-0">
            <span aria-hidden="true" className={`font-display text-2xl ${step.highlight ? "text-accent" : "text-muted"}`}>
              {plate.numbered ? i + 1 : ""}
            </span>
            <div>
              <p className={`font-display text-xl sm:text-2xl ${step.highlight ? "text-accent" : "text-ink"}`}>{step.title}</p>
              {step.detail ? <p className="mt-1 max-w-sm text-[0.9375rem] text-muted">{step.detail}</p> : null}
            </div>
          </li>
        ))}
      </ol>
      <figcaption className="mt-8 border-t border-rule pt-3 text-sm text-muted">{plate.caption}</figcaption>
    </figure>
  );
}
