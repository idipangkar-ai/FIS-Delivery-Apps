export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50 text-gray-800">
      {/* Header */}
      <header className="w-full bg-white shadow-sm py-3 fixed top-0 z-50">
        <div className="flex justify-center items-center">
          <h1 className="text-lg font-bold text-blue-600 tracking-tight">
            FIS Delivery
          </h1>
        </div>
      </header>

      {/* Scrollable Body */}
      <main className="flex-1 mt-14 overflow-y-auto pb-16">
        {/* Hero */}
        <section className="text-center px-5 pt-10">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
            Fast. Reliable. <span className="text-blue-600">Delivery</span>.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Seamless deliveries, built for speed and reliability. Runs like a
            native app — powered by PWA.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium text-sm w-full max-w-xs mx-auto active:scale-95 transition">
            Get Started
          </button>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 gap-4 px-5 mt-10">
          {[
            {
              title: "Track Orders",
              desc: "Live status updates for every delivery.",
            },
            {
              title: "Instant Alerts",
              desc: "Get notified instantly on every event.",
            },
            {
              title: "Offline Ready",
              desc: "Access key features without internet.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white shadow-sm rounded-xl p-5 active:scale-[0.98] transition border border-slate-100"
            >
              <h3 className="text-base font-semibold mb-1">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer / Bottom Bar */}
      <footer className="bg-slate-900 text-slate-200 text-xs py-4 text-center">
        © {new Date().getFullYear()} FIS Delivery
      </footer>
    </div>
  );
}
