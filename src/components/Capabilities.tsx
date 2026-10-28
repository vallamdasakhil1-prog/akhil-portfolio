import SectionHead from "./SectionHead";
import { capabilities } from "@/data/portfolio";

export default function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <SectionHead
        id="capabilities-title"
        index="03"
        label="Capabilities"
        title="What I work with."
        lead="Skills from my resume and the projects above. Items marked studying are still being learned."
      />
      <dl className="mt-12 md:ml-[calc(25%+0.5rem)]">
        {capabilities.map((group) => (
          <div key={group.title} className="grid gap-x-8 gap-y-3 border-t border-rule py-6 first:border-ink lg:grid-cols-[14rem_1fr]">
            <dt className="font-display text-xl">{group.title}</dt>
            <dd>
              <ul className="flex flex-wrap gap-y-3">
                {group.items.map((item) => (<li key={item} className="tag">{item}</li>))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
