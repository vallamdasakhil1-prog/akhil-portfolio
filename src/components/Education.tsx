import SectionHead from "./SectionHead";
import { credentials, qualifications } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <SectionHead
        id="education-title"
        index="04"
        label="Education"
        title="Academic history, current degree first."
      />

      <ol className="mt-12 space-y-5">
        {qualifications.map((q) => {
          const current = q.status === "current";
          return (
            <li key={q.id} className={`card grid gap-x-8 gap-y-4 border-l-2 p-6 md:grid-cols-12 md:p-8 ${current ? "border-l-accent" : "border-l-rule"}`}>
              <p className="text-[0.9375rem] md:col-span-3">
                <span className={`inline-flex items-center gap-2 ${current ? "text-accent" : "text-muted"}`}>
                  <span aria-hidden="true" className={`h-2.5 w-2.5 border ${current ? "border-accent bg-accent" : "border-muted"}`} />
                  {q.statusLabel}
                </span>
              </p>
              <div className="md:col-span-5">
                <h3 className="text-2xl leading-tight sm:text-3xl">{q.institution}</h3>
                <p className="mt-2 text-lg">{q.qualification}</p>
                {q.stream ? <p className="text-lg text-muted">{q.stream}</p> : null}
                {q.notes ? (
                  <ul className="mt-3 text-[0.9375rem] text-muted">
                    {q.notes.map((n) => (<li key={n}>{n}</li>))}
                  </ul>
                ) : null}
              </div>
              <div className="md:col-span-3 md:col-start-10 md:text-right">
                <p className="text-[0.9375rem] text-muted">{q.scoreLabel}</p>
                <p className={`font-display text-4xl sm:text-5xl ${current ? "text-accent" : "text-ink"}`}>{q.score}</p>
                {q.scoreNote ? <p className="mt-1 text-[0.9375rem] text-muted">{q.scoreNote}</p> : null}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-12 grid gap-x-8 gap-y-4 border-t border-ink pt-8 md:grid-cols-12">
        <h3 className="font-display text-xl md:col-span-3">Certifications and contests</h3>
        <ul className="space-y-3 text-lg md:col-span-8 md:col-start-4">
          {credentials.map((c) => (<li key={c}>{c}</li>))}
        </ul>
      </div>
      <p className="mt-8 text-[0.9375rem] text-muted md:ml-[calc(25%+0.5rem)]">I have no professional employment to list yet.</p>
    </section>
  );
}
