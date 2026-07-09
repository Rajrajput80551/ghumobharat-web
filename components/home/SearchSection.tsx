export default function SearchSection() {
  return (
    <section className="relative -mt-20 bg-[#081423] pt-44 pb-24 px-6 z-10">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="text-orange-500 font-semibold tracking-widest uppercase">
            Start Planning
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
            Find Your Perfect Destination
          </h2>

          <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
            Search your favourite destination and let GhumoBharat create
            a personalized travel experience with trusted local hosts.
          </p>

        </div>

        {/* Search */}

        <div className="mt-14 max-w-3xl mx-auto">

          <input
            type="text"
            placeholder="Where do you want to travel?"
            className="w-full rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-8 py-6 text-lg text-white outline-none placeholder:text-gray-400 focus:border-orange-500"
          />

        </div>

        {/* Cities */}

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          {[
            "Varanasi",
            "Prayagraj",
            "Ayodhya",
            "Vindhyachal",
          ].map((city) => (

            <button
              key={city}
              className="rounded-full border border-white/10 bg-white/5 px-7 py-3 text-white transition hover:bg-orange-500 hover:border-orange-500"
            >
              {city}
            </button>

          ))}

        </div>

        <p className="mt-10 text-center text-gray-400">
          More destinations coming soon...
        </p>

      </div>

    </section>
  );
}