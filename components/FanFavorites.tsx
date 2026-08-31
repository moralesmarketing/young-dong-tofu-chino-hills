import Image from "next/image";
import Reveal from "@/components/Reveal";
import { fanFavorites, business } from "@/lib/site-data";

const tagClass: Record<string, string> = {
  "Most Mentioned": "badge-red",
  Signature: "badge-gold",
  "Fan Favorite": "badge-green",
  "Menu Favorite": "badge-green",
};

export default function FanFavorites() {
  return (
    <section id="favorites" className="relative py-24 md:py-32">
      <div className="page-header !pb-16">
        <Reveal direction="up">
          <span className="eyebrow">Fan Favorites</span>
        </Reveal>
        <Reveal direction="up" delay={150}>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">What Chino Hills Orders Most</h2>
        </Reveal>
        <Reveal direction="up" delay={250}>
          <p className="mx-auto mt-6 max-w-md text-ink-soft">
            Cross-checked against {business.rating.yelp.count} Yelp reviews and
            their Popular Dishes rankings.
          </p>
        </Reveal>
      </div>

      <div className="section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fanFavorites.map((dish, i) => (
          <Reveal key={dish.name} direction="up" delay={(i % 3) * 120}>
            <div className="group overflow-hidden border border-[var(--surface-line)] bg-surface-raised">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className={`badge ${tagClass[dish.tag] ?? "badge-red"} absolute left-4 top-4`}>
                  {dish.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{dish.name}</h3>
                  {dish.korean && <span className="text-sm text-ink-faint">{dish.korean}</span>}
                </div>
                <p className="mt-2 text-sm text-ink-soft">{dish.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
