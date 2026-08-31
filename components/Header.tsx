import Link from "next/link";
import { business } from "@/lib/site-data";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#favorites", label: "Fan Favorites" },
  { href: "/#location", label: "Location" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--surface-line)] bg-surface/95 backdrop-blur">
      <div className="section flex items-center justify-between py-4">
        <Link href="/" className="flex shrink-0 flex-col leading-none">
          <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
            Young Dong Tofu
          </span>
          <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-red">
            Chino Hills, CA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-red"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={business.phoneHref} className="hidden text-sm font-semibold text-ink sm:block">
            {business.phone}
          </a>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Get Directions
          </a>
        </div>
      </div>
    </header>
  );
}
