const galleryImages = [
  "/images/image01.jpg",
  "/images/image4.jpg",
  "/images/image3.jpg",
  "/images/image2.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/ayodhya.jpg",
  "/images/varanasi.jpg",
];

export default function GalleryPage() {
  return (
    <main className="bg-[#081423] min-h-screen text-white">

      {/* Hero */}

      <section className="py-28 px-6 text-center">

        <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
          Gallery
        </p>

        <h1 className="mt-6 text-6xl font-black">
          Travel Memories
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-300 leading-9">
          Explore beautiful moments, sacred destinations and unforgettable
          travel experiences with GhumoBharat.
        </p>

      </section>

      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (

          <div
            key={index}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >

            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
            />

          </div>

        ))}

        </div>

      </section>

      {/* CTA */}

      <section className="pb-24 px-6">

        <div className="max-w-6xl mx-auto rounded-3xl bg-orange-500 p-12 text-center">

          <h2 className="text-5xl font-black">
            Ready for Your Next Journey?
          </h2>

          <p className="mt-6 text-xl text-white/90">
            Explore India's most beautiful destinations with GhumoBharat.
          </p>

          <a
            href="/#trip-planner"
            className="inline-block mt-10 rounded-full bg-white px-10 py-4 font-bold text-orange-500 transition hover:scale-105"
          >
            Plan My Trip
          </a>

        </div>

      </section>

    </main>
  );
}