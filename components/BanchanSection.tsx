import Image from "next/image";

const banchan = [
  "Kimchi",
  "Seaweed salad",
  "Bean sprouts",
  "Spicy cucumbers",
  "Seasoned radish",
  "Sautéed zucchini",
];

export default function BanchanSection() {
  return (
    <section className="bg-surface-raised py-24">
      <div className="section grid items-center gap-12 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[var(--surface-line)]">
          <Image
            src="/images/banchan-spread.jpg"
            alt="A full table of banchan side dishes and stone-pot bibimbap at Young Dong Tofu"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="eyebrow">Banchan, Done Right</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">A Table Full of Sides</h2>
          <div className="mt-6 h-px w-16 bg-gradient-to-r from-transparent via-red to-transparent" />

          <p className="mt-6 text-ink-soft">
            Every meal comes with a full spread of banchan, and reviewers
            consistently call out how generous the refills are — &ldquo;they
            bring you seconds without you even asking.&rdquo; The cucumbers
            and seaweed salad are regulars&apos; favorites, and hot buckwheat
            tea gets refilled right alongside them.
          </p>

          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-ink-soft">
            {banchan.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
