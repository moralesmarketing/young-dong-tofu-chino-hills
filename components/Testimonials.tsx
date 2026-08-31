import { testimonials, business } from "@/lib/site-data";

const Star = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-ink">
    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.2 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.2 6.1-.6z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="bg-surface py-24">
      <div className="page-header !py-0 !pb-16">
        <span className="eyebrow">What Guests Are Saying</span>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          {business.rating.yelp.count}+ Reviews, {business.rating.yelp.score} Stars
        </h2>
      </div>

      <div className="section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.author} className="flex flex-col bg-surface-raised p-8">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5">
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">{t.author}</p>
              <p className="text-xs text-ink-faint">
                {t.location} · {t.date}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
