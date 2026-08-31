import Reveal from "@/components/Reveal";

export default function SecondIntroSection() {
  return (
    <section className="section py-10 text-center md:py-14">
      <Reveal direction="up">
        <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl md:text-5xl">
          An OG Chino Hills Institution
        </h2>
      </Reveal>
      <Reveal direction="up" delay={150}>
        <p className="mx-auto mt-6 max-w-xl text-ink-soft">
          Long before soondubu was easy to find in the Inland Empire, Young
          Dong Tofu was already serving it — regulars mention coming here
          since their college years, and Yelp reviews stretch back to 2017.
          Nearly 1,000 reviews and 4.1 stars later, it&apos;s still the
          restaurant families in Chino Hills order the same dishes from,
          visit after visit. Thank you for choosing Young Dong Tofu — we
          look forward to serving you.
        </p>
      </Reveal>
    </section>
  );
}
