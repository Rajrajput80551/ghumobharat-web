import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "@/app/data/destinations";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;

  const destination =
    destinations[slug as keyof typeof destinations];

  if (!destination) {
    notFound();
  }

  return (
    <main className="bg-[#081423] text-white min-h-screen">

      {/* Hero */}

      <section
        className="relative h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${destination.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center">

          <div className="max-w-7xl mx-auto px-6">

            <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
              {destination.subtitle}
            </p>

            <h1 className="mt-6 text-6xl font-black">
              {destination.name}
            </h1>

            <p className="mt-8 max-w-3xl text-xl text-gray-200 leading-9">
              {destination.description}
            </p>

            <div className="mt-10 flex gap-5">

              <Link
                href="/#trip-planner"
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold hover:bg-orange-600 transition"
              >
                Plan My Trip
              </Link>

              <Link
                href="/destinations"
                className="rounded-full border border-white/30 px-8 py-4 hover:bg-white hover:text-black transition"
              >
                All Destinations
              </Link>

            </div>

          </div>

        </div>

      </section>
            {/* Highlights */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-4 gap-8">

            {destination.highlights.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <p className="text-orange-500 font-semibold">
                  {item.title}
                </p>

                <h3 className="mt-4 text-2xl font-bold">
                  {item.value}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Must Visit Places */}

      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Attractions
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Must Visit Places
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {destination.places.map((place) => (

              <div
                key={place}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-orange-500 hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold">
                  {place}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* Suggested Itinerary */}

      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
              Suggested Itinerary
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Perfect Travel Plan
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold text-orange-500">
                Day 1
              </h3>

              <ul className="mt-6 space-y-3 text-gray-300 leading-8">
                <li>• Temple Darshan</li>
                <li>• Local Sightseeing</li>
                <li>• Traditional Food</li>
                <li>• Evening Experience</li>
              </ul>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold text-orange-500">
                Day 2
              </h3>

              <ul className="mt-6 space-y-3 text-gray-300 leading-8">
                <li>• Sunrise Visit</li>
                <li>• Famous Attractions</li>
                <li>• Shopping</li>
                <li>• Departure</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* Travel Tips */}

      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-10">

          <h2 className="text-4xl font-black">
            Travel Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <ul className="space-y-4 text-gray-300">
              <li>✅ Carry a valid ID proof.</li>
              <li>✅ Wear comfortable footwear.</li>
              <li>✅ Respect local customs.</li>
            </ul>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Keep some cash for local shops.</li>
              <li>✅ Reach popular places early.</li>
              <li>✅ Stay hydrated during travel.</li>
            </ul>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto rounded-3xl bg-orange-500 p-12 text-center">

          <h2 className="text-5xl font-black">
            Ready to Visit {destination.name}?
          </h2>

          <p className="mt-6 text-xl text-white/90">
            Plan your personalized journey with GhumoBharat.
          </p>

          <Link
            href="/#trip-planner"
            className="inline-block mt-10 rounded-full bg-white px-10 py-4 font-bold text-orange-500 hover:scale-105 transition"
          >
            Plan My Trip
          </Link>

        </div>

      </section>

    </main>
  );
}