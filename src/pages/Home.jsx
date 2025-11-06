export default function Home() {
  return (
    <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
      <section className="mb-6">
        <div className="bg-blue-500 text-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold">Welcome to FIS Delivery</h2>
          <p className="text-sm mt-1 opacity-90">
            Fast, reliable, and smart delivery solutions.
          </p>
        </div>
      </section>

      <section className="grid gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-medium text-gray-800">Order #{i}</h3>
            <p className="text-sm text-gray-500 mt-1">
              Expected delivery: Tomorrow
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
