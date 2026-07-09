const reviews = [
  {
    name: "Rahul Sharma",
    city: "Delhi",
    rating: 5,
    review:
      "Our Varanasi trip was perfectly planned. The local guide was amazing and everything was well managed.",
  },
  {
    name: "Priya Verma",
    city: "Lucknow",
    rating: 5,
    review:
      "Very transparent pricing and excellent support throughout our Ayodhya trip. Highly recommended!",
  },
  {
    name: "Amit Singh",
    city: "Jaipur",
    rating: 5,
    review:
      "Comfortable transport, great itinerary and no hidden charges. We had an unforgettable family trip.",
  },
];
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-[#081423] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            What Our Travelers Say
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-400">
            Real experiences shared by travelers who explored India with
            GhumoBharat.
          </p>

        </div>

        {/* Reviews */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((item) => (

            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-500"
            >

              <div className="mb-6 flex">

                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-orange-500 text-orange-500"
                  />
                ))}

              </div>

              <p className="leading-8 text-gray-300">
                "{item.review}"
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">

                <h4 className="text-xl font-bold text-white">
                  {item.name}
                </h4>

                <p className="text-gray-400">
                  {item.city}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}