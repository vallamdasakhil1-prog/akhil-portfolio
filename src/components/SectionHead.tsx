interface Props { id: string; index: string; label: string; title: string; lead?: string }

/** Numbered section opener: the index and label sit in the left margin, the title carries the section. */
export default function SectionHead({ id, index, label, title, lead }: Props) {
  return (
    <header className="grid gap-x-8 gap-y-5 border-t border-ink pt-5 md:grid-cols-12">
      <p className="text-[0.9375rem] text-muted md:col-span-3">
        <span className="font-display text-ink">{index}</span>
        <span className="ml-3">{label}</span>
      </p>
      <div className="md:col-span-9">
        <h2 id={id} className="max-w-3xl text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08]">{title}</h2>
        {lead ? <p className="mt-5 max-w-xl text-lg text-muted">{lead}</p> : null}
      </div>
    </header>
  );
}
