import Link from "next/link";
import Image from "next/image";
import { business } from "@/lib/site-data";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#favorites", label: "Fan Favorites" },
  { href: "/#location", label: "Location" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section flex items-center justify-between py-5">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="Young Dong Tofu"
            width={280}
            height={86}
            priority
            className="h-12 w-auto brightness-0 invert"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.15em] text-white/85 transition-colors hover:text-green"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={business.phoneHref} className="hidden text-sm font-medium text-white sm:block">
            {business.phone}
          </a>
          <a href="/menu" className="btn btn-primary">
            View Menu
          </a>
        </div>
      </div>
    </header>
  );
}
