import Reveal from "@/components/Reveal";
import { business } from "@/lib/site-data";

export default function LocationSection() {
  return (
    <section id="location" className="py-16 md:py-20">
      <div className="section pb-12 text-center">
        <Reveal direction="up">
          <span className="eyebrow">Visit Us</span>
        </Reveal>
        <Reveal direction="up" delay={150}>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">How to Get Here</h2>
        </Reveal>
      </div>

      <div className="section grid gap-12 md:grid-cols-2">
        <Reveal direction="left">
          <div>
            <div className="space-y-1">
              {business.hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between border-b border-[var(--surface-line)] py-2 text-sm"
                >
                  <span className="font-medium text-ink">{h.day}</span>
                  <span className="text-ink-soft">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-2 text-sm text-ink-soft">
              <p>
                {business.address.line1}
                <br />
                {business.address.line2}
              </p>
              <a href={business.phoneHref} className="block font-medium text-ink hover:text-green">
                {business.phone}
              </a>
              <p>Free parking in the shopping plaza — can get busy at peak hours.</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Get Directions
              </a>
              <a href={business.yelpUrl} target="_blank" rel="noopener noreferrer" className="btn text-ink border border-[var(--surface-line)] hover:border-green hover:text-green">
                Read Reviews on Yelp
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="overflow-hidden grayscale invert">
            <iframe
              src={business.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Young Dong Tofu location map"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
