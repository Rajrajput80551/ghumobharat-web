export default function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Happy Travelers",
    },
    {
      number: "4",
      title: "Cities Covered",
    },
    {
      number: "100%",
      title: "Transparent Pricing",
    },
    {
      number: "24×7",
      title: "Support",
    },
  ];

  return (
    <section className="relative -mt-32 z-20 px-6 pb-16">
      <div className="mx-auto max-w-6xl">

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/8 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

          <div className="grid grid-cols-2 md:grid-cols-4">

            {stats.map((item, index) => (
              <div
                key={item.title}
                className={`py-7 md:py-9 text-center transition-all duration-300 hover:bg-white/5 ${
                  index !== stats.length - 1
                    ? "border-r border-white/10"
                    : ""
                }`}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                  {item.number}
                </h2>

                <p className="mt-2 text-sm md:text-base text-gray-300">
                  {item.title}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}