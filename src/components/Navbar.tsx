"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { nav, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = (href: string) =>
    `relative py-3 transition-colors duration-200 hover:text-accent after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-accent after:transition-transform after:duration-200 after:origin-left ${
      active === href ? "text-accent after:scale-x-100" : "text-ink after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-page items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="py-2 font-display text-lg tracking-tight">{profile.name}</a>

        <nav aria-label="Primary" className="hidden items-center gap-8 text-[0.9375rem] lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={linkClass(item.href)} aria-current={active === item.href ? "location" : undefined}>
              {item.label}
            </a>
          ))}
          <a href={profile.resume} download className="inline-flex min-h-[40px] items-center gap-2 border border-ink px-4 transition-colors duration-200 hover:border-accent hover:text-accent">
            <Download size={15} aria-hidden="true" /> Resume
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex h-12 w-12 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-rule bg-paper px-5 pb-6 pt-2 sm:px-8 lg:hidden">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-rule">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.href ? "location" : undefined}
                  className={`block py-4 font-display text-2xl ${active === item.href ? "text-accent" : "text-ink"}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={profile.resume} download className="btn btn-secondary mt-6 w-full">
            <Download size={16} aria-hidden="true" /> Download resume
          </a>
        </nav>
      ) : null}
    </header>
  );
}
