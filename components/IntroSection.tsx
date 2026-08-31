import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function IntroSection() {
  return (
    <section className="section py-12 text-center md:py-16">
      <Reveal direction="up">
        <span className="eyebrow">In Chino Hills</span>
      </Reveal>
      <Reveal direction="up" delay={150}>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl leading-tight sm:text-4xl md:text-5xl">
          Young Dong Tofu Is a Korean Soondubu House That&apos;s Been
          Serving Chino Hills for Years
        </h2>
      </Reveal>

      <Reveal direction="in" delay={300}>
        <div className="mx-auto mt-12 inline-flex rounded-lg bg-[#fbf7f2] px-5 py-3">
          <Image
            src="/images/logo.png"
            alt="Young Dong Tofu"
            width={280}
            height={86}
            className="h-14 w-auto"
          />
        </div>
      </Reveal>

      <Reveal direction="in" delay={400}>
        <a href="/menu" className="btn-ghost mt-8 inline-block">
          View Full Menu
        </a>
      </Reveal>
    </section>
  );
}
