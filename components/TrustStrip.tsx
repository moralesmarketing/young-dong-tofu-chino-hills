import { business } from "@/lib/site-data";

export default function TrustStrip() {
  return (
    <section className="border-y border-[var(--surface-line)] bg-surface-raised py-6">
      <div className="section flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.1em] text-ink-soft">
        {business.amenities.map((a) => (
          <span key={a} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red" />
            {a}
          </span>
        ))}
      </div>
    </section>
  );
}
