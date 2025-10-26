export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ebony text-sand-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(215,163,93,0.25),_transparent_60%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 sm:px-10 lg:flex-row lg:items-center lg:py-32">
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-sand-400/40 px-4 py-1 text-sm uppercase tracking-[0.3em] text-sand-300">
            Al Thuraya Atelier
          </span>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Bespoke abayas crafted by intuition, guided by our virtual stylist agent.
          </h1>
          <p className="max-w-xl text-lg text-sand-200/90">
            Converse with an intelligent concierge who understands heritage silhouettes, contemporary couture, and the nuances that make an abaya distinctly yours.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="#virtual-agent"
              className="rounded-full bg-sand-400 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ebony transition hover:bg-sand-300"
            >
              Meet the agent
            </a>
            <a
              href="#collections"
              className="rounded-full border border-sand-200 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-sand-100 transition hover:bg-sand-100 hover:text-ebony"
            >
              Explore couture edits
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-sand-300/30 bg-gradient-to-br from-sand-100/20 via-transparent to-sand-500/10 shadow-glow">
            <div className="absolute inset-0 bg-[url('/images/abaya-pattern.svg')] bg-cover bg-center opacity-40 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ebony/30 to-ebony/80" />
            <div className="absolute bottom-6 left-6 right-6 space-y-3 rounded-3xl bg-ebony/75 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.4em] text-sand-200/70">Signature appointment</p>
              <p className="font-display text-2xl leading-tight text-sand-50">
                “Let us compose an abaya that mirrors the dusk skyline above the desert.”
              </p>
              <div className="flex items-center gap-3 text-sm text-sand-200/70">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sand-300/50 bg-ebony/40 font-semibold">
                  AT
                </span>
                <div>
                  <p className="font-semibold text-sand-100">Al Thuraya Virtual Couturier</p>
                  <p>Responds in under 2 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
