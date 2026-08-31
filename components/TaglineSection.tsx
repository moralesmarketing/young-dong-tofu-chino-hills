import Reveal from "@/components/Reveal";
import { business } from "@/lib/site-data";

export default function TaglineSection() {
  return (
    <section className="border-y border-[var(--surface-line)] bg-surface-raised py-12 text-center">
      <div className="section">
        <Reveal direction="up">
          <p className="mx-auto max-w-xl text-lg text-ink-soft sm:text-xl">
            We serve soondubu, banchan, and a table that never runs empty.
            Bubbling-hot stone pots, sizzling galbi, and {business.rating.yelp.count}+
            Yelp reviews from guests who keep coming back.
          </p>
        </Reveal>
        <Reveal direction="in" delay={200}>
          <a href="/menu" className="btn-ghost mt-6 inline-block">
            Browse Menu
          </a>
        </Reveal>
      </div>
    </section>
  );
}
