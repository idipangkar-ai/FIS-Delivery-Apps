export default function Home() {
  return (
    <main className="flex-1 overflow-y-auto p-4 pb-24 bg-gray-50">
      {/* Two buttons section */}
      <section className="mb-6 grid grid-cols-2 gap-4">
        {["B2B", "B2C"].map((label) => (
          <button
            key={label}
            className="bg-blue-500 text-white py-4 rounded-full shadow-md font-bold 
                       hover:bg-blue-700 active:scale-95 transition transform 
                       shadow-blue-200"
          >
            {label}
          </button>
        ))}
      </section>

      {/* Orders list */}
      <section className="grid gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
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
