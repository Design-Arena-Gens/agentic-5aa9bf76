import { fabricStories } from "@/data/content";

export function FabricStories() {
  return (
    <section className="bg-ebony text-sand-50">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-sand-300">Fabric narratives</p>
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Textiles woven with stories of the Arabian Peninsula
            </h2>
            <p className="text-lg text-sand-100/80">
              Each textile is sourced from partner mills and hand-finished in our Abu Dhabi atelier. The agent preserves your archive of fabrics, embellishments, and preferred artisans.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            {fabricStories.map((story) => (
              <div
                key={story.title}
                className="rounded-3xl border border-sand-300/30 bg-white/5 p-6 text-center shadow-[0_20px_45px_-35px_rgba(249,239,226,0.9)]"
              >
                <span className="text-4xl">{story.icon}</span>
                <h3 className="mt-4 font-display text-xl">{story.title}</h3>
                <p className="mt-3 text-sm text-sand-100/75">{story.narrative}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
