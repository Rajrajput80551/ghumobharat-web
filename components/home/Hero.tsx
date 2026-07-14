import Link from "next/link";
export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-36 pb-56">
        <div className="max-w-5xl text-center">

          {/* Tagline */}
          <p className="mb-5 text-lg md:text-xl font-semibold tracking-wide text-orange-400">
            Travel Like a Local. Explore with Trust.
          </p>

          {/* Heading */}
          <h1 className="text-white font-black leading-[1.08] drop-shadow-2xl text-5xl md:text-6xl lg:text-7xl">
           Ghumo Bharat
           <br />
           Explore India With Trusted Local Hosts
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-7 max-w-3xl text-lg md:text-xl text-white/90">
            Personalized Trips • Trusted Local Hosts • Transparent Pricing • No Hidden Charges
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="/#trip-planner"
              className="rounded-full bg-orange-500 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600 shadow-xl"
              >
              Plan My Trip
            </Link>

            <Link
              href="/destinations"
              className="rounded-full border-2 border-white px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
              Explore Destinations
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}