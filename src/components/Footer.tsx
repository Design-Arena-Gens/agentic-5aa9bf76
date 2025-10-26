export function Footer() {
  return (
    <footer className="bg-ebony text-sand-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="space-y-3">
          <p className="font-display text-2xl text-sand-100">Al Thuraya Atelier</p>
          <p className="text-sm text-sand-200/70">
            © {new Date().getFullYear()} Al Thuraya Couture. An ode to timeless abayas handcrafted in Abu Dhabi.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm uppercase tracking-[0.25em] text-sand-400 sm:text-right">
          <a href="#virtual-agent" className="hover:text-sand-200">
            Engage the virtual agent
          </a>
          <a href="#collections" className="hover:text-sand-200">
            View couture edits
          </a>
          <a href="#" className="hover:text-sand-200">
            Private client login
          </a>
        </div>
      </div>
    </footer>
  );
}
