import { collections } from "@/data/content";

export function CollectionGallery() {
  return (
    <section id="collections" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sand-600">Signature collections</p>
            <h2 className="mt-3 font-display text-3xl text-ebony sm:text-4xl">
              Couture narratives curated for every luminous moment
            </h2>
          </div>
          <a
            href="#virtual-agent"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-sand-600 hover:text-sand-500"
          >
            Request a personal edit →
          </a>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {collections.map((collection) => (
            <article
              key={collection.id}
              className="group flex h-full flex-col justify-between rounded-[2.2rem] border border-sand-200/80 bg-sand-50/60 p-8 shadow-[0_18px_40px_-28px_rgba(25,25,25,0.45)] transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {collection.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-sand-300/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sand-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl text-ebony">{collection.name}</h3>
                <p className="text-sm text-ebony/70">{collection.description}</p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                {collection.palette.map((color) => (
                  <span
                    key={color}
                    className="h-9 flex-1 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
