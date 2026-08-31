import Image from "next/image";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/images/hero-tofu-soup.jpg"
        alt="Sizzling soondubu soft tofu stew at Young Dong Tofu"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-black/50 to-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1160px] px-6 py-32 text-center md:px-10">
        <Reveal direction="up">
          <span className="eyebrow">Chino Hills, CA</span>
        </Reveal>
        <Reveal direction="up" delay={150}>
          <h1 className="mt-5 text-5xl leading-[1.05] font-semibold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Contemporary
            <br />
            Korean Soondubu
          </h1>
        </Reveal>

        <Reveal direction="up" delay={300}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="/menu" className="btn btn-primary">
              View Menu
            </a>
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Get Directions
            </a>
            <a href={business.phoneHref} className="btn text-white border border-white/30 hover:border-white">
              {business.phone}
            </a>
          </div>
        </Reveal>

        <Reveal direction="in" delay={600}>
          <div className="mt-16 flex flex-col items-center gap-2 text-white/70">
            <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll Down</span>
            <span className="h-10 w-px bg-white/40" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
