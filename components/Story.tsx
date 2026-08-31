export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(172,51,35,0.08),transparent_60%)]" />
      <div className="section relative max-w-2xl text-center mx-auto">
        <span className="eyebrow">Our Story</span>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          An OG Chino Hills Institution
        </h2>
        <div className="divider mt-6" />

        <blockquote className="mt-10 font-[family-name:var(--font-display)] text-2xl italic leading-relaxed text-ink sm:text-3xl">
          &ldquo;Consistent food quality and great service over many years.
          My go-to for Korean food.&rdquo;
        </blockquote>

        <p className="mx-auto mt-8 max-w-md text-ink-soft">
          Long before soondubu was easy to find in the Inland Empire, Young
          Dong Tofu was already serving it — regulars mention coming here
          since their college years, and Yelp reviews stretch back to 2017.
          Nearly 1,000 reviews and 4.1 stars later, it&apos;s still the
          restaurant families in Chino Hills order the same dishes from,
          visit after visit.
        </p>
      </div>
    </section>
  );
}
