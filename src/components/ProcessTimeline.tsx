import { processTimeline } from "@/data/content";

export function ProcessTimeline() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-sand-600">Couture ritual</p>
        <h2 className="font-display text-3xl text-ebony sm:text-4xl">
          A journey choreographed around you
        </h2>
        <p className="text-base text-ebony/70">
          Guided by the agent, each stage honors time-honored ateliers while embracing intelligent precision.
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {processTimeline.map((phase) => (
          <div
            key={phase.step}
            className="relative rounded-[2rem] border border-sand-200/70 bg-white/80 p-8 shadow-[0_22px_40px_-35px_rgba(49,31,21,0.5)]"
          >
            <span className="absolute -top-5 left-8 rounded-full border border-sand-300 bg-sand-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sand-600">
              {phase.step}
            </span>
            <h3 className="mt-6 font-display text-2xl text-ebony">{phase.title}</h3>
            <p className="mt-4 text-sm text-ebony/70">{phase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
