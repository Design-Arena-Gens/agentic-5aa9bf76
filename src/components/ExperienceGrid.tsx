const experiences = [
  {
    title: "Intuitive Conversations",
    description:
      "Understand your mood boards, translate references, and compose styling notes in Arabic, English, or French with cultural fluency.",
    highlight: "Multilingual couture concierge"
  },
  {
    title: "Precise Measurements",
    description:
      "Guided prompts help you capture exact measurements via your device, ensuring bespoke tailoring without compromise.",
    highlight: "Tailored within 1.5 cm accuracy"
  },
  {
    title: "Fabric Visualizer",
    description:
      "Preview drape dynamics, embroideries, and trims with augmented overlays designed for the Gulf climate.",
    highlight: "Try silhouettes in real-time"
  }
];

export function ExperienceGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-sand-500">Why clients adore the agent</p>
          <h2 className="font-display text-3xl leading-tight text-ebony sm:text-4xl">
            A digital couturier attuned to heritage, climate, and personal rituals.
          </h2>
          <p className="text-lg text-ebony/70">
            The agent learns from every exchange, remembering preferred fabrics, favored artisans, and the occasions that shape your calendar.
          </p>
        </div>
        <div className="grid gap-6">
          {experiences.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-sand-500/40 bg-white/70 p-6 shadow-[0_18px_35px_-24px_rgba(49,31,21,0.45)] backdrop-blur transition hover:-translate-y-1 hover:shadow-glow"
            >
              <h3 className="font-display text-2xl text-ebony">{item.title}</h3>
              <p className="mt-3 text-base text-ebony/70">{item.description}</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-sand-600">
                {item.highlight}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
