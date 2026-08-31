import Image from "next/image";

export default function FullBleedBanner() {
  return (
    <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
      <Image
        src="/images/bbq-beef-ribs.jpg"
        alt="Sizzling BBQ beef ribs at Young Dong Tofu"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}
