import Reveal from "@/components/Reveal";

export default function BrandDivider() {
  return (
    <div className="bg-surface py-10">
      <Reveal direction="in">
        <div className="flex items-center justify-center gap-6">
          <span className="divider-line w-24" />
          <h2 className="text-xl tracking-[0.15em] text-ink sm:text-2xl">
            YOUNG DONG TOFU
          </h2>
          <span className="divider-line w-24" />
        </div>
      </Reveal>
    </div>
  );
}
