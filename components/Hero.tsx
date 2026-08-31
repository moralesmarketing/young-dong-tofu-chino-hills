import Image from "next/image";
import { business } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Image
        src="/images/hero-tofu-soup.jpg"
        alt="Sizzling soondubu soft tofu stew at Young Dong Tofu"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-surface" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/55 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-4 py-24 sm:px-6 md:px-10">
        <div className="max-w-xl">
          <span className="eyebrow !text-white">Chino Hills&apos; Soondubu Institution</span>
          <h1 className="mt-4 text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Sizzling Tofu,
            <br />
            Served Like Home.
          </h1>
          <p className="mt-6 max-w-md text-lg text-white/85">
            A Chino Hills mainstay for years — bubbling-hot soondubu, sizzling
            BBQ short ribs, and a table full of banchan they keep refilling
            without you asking.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/menu" className="btn btn-primary">
              View Menu
            </a>
            <a href={business.phoneHref} className="btn text-white border border-white/40 hover:border-white">
              Call for Pickup
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                {business.rating.yelp.score}
              </span>
              <span>
                ★ Yelp
                <br />
                {business.rating.yelp.count} reviews
              </span>
            </div>
            <div className="h-8 w-px bg-white/30" />
            <div className="flex items-center gap-2">
              <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                A
              </span>
              <span>
                Health Score
                <br />
                Chino Hills County
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
