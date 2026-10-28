import { nav, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-ink">
      <div className="mx-auto grid max-w-page gap-8 px-5 py-12 sm:px-8 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-5">
          <p className="font-display text-3xl">{profile.name}</p>
          <p className="mt-2 max-w-sm text-muted">{profile.tagline}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
          <ul className="space-y-1">
            {nav.map((n) => (<li key={n.href}><a className="link" href={n.href}>{n.label}</a></li>))}
          </ul>
        </nav>
        <ul className="space-y-1 md:col-span-3">
          <li><a className="link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="link" href={`mailto:${profile.email}`}>Email</a></li>
        </ul>
        <p className="border-t border-rule pt-4 text-sm text-muted md:col-span-12">&copy; {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
