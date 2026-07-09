import {
  ShieldCheck,
  MapPinned,
  Wallet,
  Headphones,
  Car,
  Users,
} from "lucide-react";

export default function WhyChoose() {
  const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Local Experts",
    desc: "Experienced local travel experts who help you explore every destination with confidence.",
  },
  {
    icon: MapPinned,
    title: "100% Personalized Trips",
    desc: "Every itinerary is customized according to your destination, duration and travel preferences.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    desc: "No fixed packages. Pay only for the services you choose with complete transparency.",
  },
  {
    icon: Car,
    title: "Comfortable Transportation",
    desc: "Cab, Bike, Tempo Traveller and Mini Bus options based on your travel requirements.",
  },
  {
    icon: Users,
    title: "Suitable For Everyone",
    desc: "Whether you're travelling solo, as a couple, with family or in a group, we've got you covered.",
  },
  {
    icon: Headphones,
    title: "24×7 Travel Support",
    desc: "Our team stays connected with you before, during and after your journey whenever you need assistance.",
  },
];

  return (
    <section className="bg-[#081423] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            Why Travel With GhumoBharat?
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}