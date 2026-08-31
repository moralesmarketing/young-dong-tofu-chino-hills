import Reveal from "@/components/Reveal";
import { business } from "@/lib/site-data";

export default function WalkInSection() {
  return (
    <section className="border-y border-[var(--surface-line)] bg-surface-raised py-16 text-center">
      <div className="section">
        <Reveal direction="up">
          <span className="eyebrow">Walk-Ins Welcome</span>
        </Reveal>
        <Reveal direction="up" delay={150}>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">Just Walk In</h2>
        </Reveal>
        <Reveal direction="up" delay={250}>
          <p className="mx-auto mt-6 max-w-md text-ink-soft">
            Young Dong Tofu is first come, first served — just walk in.
            Expect a short wait during peak lunch and dinner hours. Calling
            ahead for pickup? We&apos;ve got you covered.
          </p>
        </Reveal>
        <Reveal direction="in" delay={350}>
          <a href={business.phoneHref} className="btn btn-primary mt-8 inline-flex">
            Call {business.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
