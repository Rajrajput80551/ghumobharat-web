export default function AboutPage() {
  return (
    <main className="bg-[#081423] text-white">

      {/* Hero */}

      <section className="relative overflow-hidden py-32 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
            About GhumoBharat
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
            Travel Beyond
            <br />
            <span className="text-orange-500">
              Ordinary Tourism
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-xl leading-9 text-gray-300">
            GhumoBharat isn't just another travel company.
            We help travelers experience India's spiritual,
            cultural and heritage destinations through trusted
            local experts and completely personalized journeys.
          </p>

        </div>

      </section>

      {/* Story */}

      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Our Story
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Why GhumoBharat?
            </h2>

            <p className="mt-8 text-gray-300 leading-9 text-lg">
              We started GhumoBharat with one simple mission —
              to make travelling across India's spiritual and
              cultural destinations easier, transparent and
              completely personalized.
            </p>

            <p className="mt-6 text-gray-300 leading-9 text-lg">
              Instead of selling fixed travel packages, we first
              understand your requirements and then create a
              journey specially designed for you.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

            <h3 className="text-3xl font-bold">
              What Makes Us Different?
            </h3>

            <ul className="mt-8 space-y-6 text-lg text-gray-300">

              <li>✅ Completely Personalized Trips</li>

              <li>✅ No Hidden Charges</li>

              <li>✅ Trusted Local Experts</li>

              <li>✅ Comfortable Transportation</li>

              <li>✅ Spiritual & Heritage Experiences</li>

              <li>✅ 24×7 Travel Support</li>

            </ul>

          </div>

        </div>

      </section>

    </main>
  );
}
      {/* Mission & Vision */}

      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Our Mission
            </p>

            <h2 className="mt-4 text-4xl font-black">
              Making Travel Personal
            </h2>

            <p className="mt-6 text-lg leading-9 text-gray-300">
              Our mission is to create memorable journeys instead of
              selling fixed packages. Every traveler is different,
              so every itinerary should be unique.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Our Vision
            </p>

            <h2 className="mt-4 text-4xl font-black">
              India's Most Trusted Travel Partner
            </h2>

            <p className="mt-6 text-lg leading-9 text-gray-300">
              We aim to become the most trusted platform for
              spiritual, cultural and heritage tourism by
              connecting travelers with authentic local experiences.
            </p>
          </div>

        </div>
      </section>

      {/* Our Values */}

      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Our Values
            </p>

            <h2 className="mt-4 text-5xl font-black">
              What We Believe
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              {
                title: "Trust",
                desc: "Honest communication and transparent pricing."
              },
              {
                title: "Safety",
                desc: "Reliable travel arrangements for every journey."
              },
              {
                title: "Culture",
                desc: "Experience India's rich traditions like a local."
              },
              {
                title: "Personalization",
                desc: "Every trip is tailored to your preferences."
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-orange-500"
              >
                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-300">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>