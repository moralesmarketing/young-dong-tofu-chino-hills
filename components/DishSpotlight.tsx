import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function DishSpotlight() {
  return (
    <section className="section py-12 md:py-16">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal direction="left">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/hot-stone-bibimbap.jpg"
              alt="Hot stone bibimbap at Young Dong Tofu"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal direction="up">
            <span className="eyebrow">The Most Popular</span>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">Hot Stone Bibimbap</h2>
          </Reveal>
          <Reveal direction="up" delay={250}>
            <p className="mt-6 max-w-md text-ink-soft">
              Rice, egg, and vegetables served sizzling in a stone pot that
              keeps crisping the rice underneath as you eat. Regulars order
              it by name — one reviewer highly recommends the hot stone
              squid bibimbap alongside the galbi and seafood tofu soup.
            </p>
          </Reveal>
          <Reveal direction="up" delay={350}>
            <a href="/menu#special" className="btn-ghost mt-6 inline-block">
              Learn More
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
