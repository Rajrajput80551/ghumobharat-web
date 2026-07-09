const destinations = [
  {
    name: "Varanasi",
    image: "/images/varanasi.jpg",
  },
  {
    name: "Prayagraj",
    image: "/images/prayagraj.jpg",
  },
  {
    name: "Ayodhya",
    image: "/images/ayodhya.jpg",
  },
  {
    name: "Vindhyachal",
    image: "/images/vindhyachal.jpg",
  },
];

export default function Destinations() {
  return (
    <section className="bg-[#081423] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Destinations
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            Popular Destinations
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Explore our most loved spiritual and cultural destinations with
            trusted local hosts.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {destinations.map((place) => (
            <div
              key={place.name}
              className="group overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">

                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">
                    {place.name}
                  </h3>

                  <span className="text-yellow-400 text-sm font-medium">
                    ⭐ 4.9
                  </span>
                </div>

                <p className="mt-5 text-gray-300 text-sm leading-6">
                  ✨ Flexible & Personalized Trips with trusted local guides.
                </p>

                <button className="mt-6 w-full rounded-xl bg-orange-500 py-3 text-white font-semibold hover:bg-orange-600 transition">
                  Explore Destination
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}