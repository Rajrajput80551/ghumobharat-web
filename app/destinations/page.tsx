import Link from "next/link";

const destinations = [
  {
    name: "Varanasi",
    image: "/images/varanasi.jpg",
    slug: "varanasi",
    description:
      "Experience the spiritual heart of India with ancient temples, Ganga Aarti and timeless culture.",
  },
  {
    name: "Prayagraj",
    image: "/images/prayagraj.jpg",
    slug: "prayagraj",
    description:
      "Visit the holy Triveni Sangam, historical monuments and sacred pilgrimage sites.",
  },
  {
    name: "Ayodhya",
    image: "/images/ayodhya.jpg",
    slug: "ayodhya",
    description:
      "Explore the birthplace of Lord Ram and immerse yourself in its rich heritage.",
  },
  {
    name: "Vindhyachal",
    image: "/images/vindhyachal.jpg",
    slug: "vindhyachal",
    description:
      "Discover one of India's most sacred Shakti Peeths surrounded by natural beauty.",
  },
];

export default function DestinationsPage() {
  return (
    <main className="bg-[#081423] min-h-screen text-white">

      {/* Hero */}

      <section className="py-28 px-6 text-center">

        <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
          Destinations
        </p>

        <h1 className="mt-6 text-6xl font-black">
          Explore Incredible India
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-300 leading-9">
          Discover spiritual, cultural and heritage destinations with
          personalized travel experiences crafted specially for you.
        </p>

      </section>

      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            {destinations.map((place) => (
  <div
    key={place.slug}
    className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-500"
  >
    <div className="overflow-hidden">
      <img
        src={place.image}
        alt={place.name}
        className="h-72 w-full object-cover transition duration-500 hover:scale-110"
      />
    </div>

    <div className="p-8">

      <h2 className="text-3xl font-bold">
        {place.name}
      </h2>

      <p className="mt-5 text-gray-300 leading-8">
        {place.description}
      </p>

      <Link
        href={`/destinations/${place.slug}`}
        className="mt-8 inline-flex rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
      >
        Explore Destination →
      </Link>

    </div>

  </div>
))}

        </div>
      </section>

    </main>
  );
}
       