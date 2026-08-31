import Link from "next/link";
import { business } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--surface-line)] bg-surface-raised">
      <div className="section grid gap-10 py-14 md:grid-cols-3">
        <div>
          <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-ink">
            Young Dong Tofu
          </span>
          <p className="mt-4 max-w-xs text-sm text-ink-soft">
            Sizzling soondubu, sizzling galbi, and a table full of banchan —
            Chino Hills&apos; Korean comfort-food institution.
          </p>
        </div>

        <div>
          <h3 className="eyebrow">Visit</h3>
          <p className="mt-3 text-sm text-ink-soft">
            {business.address.line1}
            <br />
            {business.address.line2}
          </p>
          <a href={business.phoneHref} className="mt-2 block text-sm font-semibold text-ink hover:text-red">
            {business.phone}
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-sm text-red hover:text-ink"
          >
            Get directions
          </a>
        </div>

        <div>
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/menu" className="text-ink-soft hover:text-ink">
                Full Menu
              </Link>
            </li>
            <li>
              <a href={business.yelpUrl} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink">
                Reviews on Yelp
              </a>
            </li>
            <li>
              <a href={business.phoneHref} className="text-ink-soft hover:text-ink">
                Call for Pickup
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--surface-line)] py-6">
        <p className="section text-xs text-ink-faint">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
