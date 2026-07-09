"use client";
import { toast } from "sonner";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);

    const sendContactWhatsApp = () => {
    
    if (!name.trim()) {
    toast.error("Please enter your Full Name.");
    return;
}

if (!phone.trim()) {
 toast.error("Please enter your Phone Number.");
  return;
}

if (!/^[0-9]{10}$/.test(phone)) {
  toast.error("Please enter a valid 10-digit Phone Number.");
  return;
}

if (email && !/^\S+@\S+\.\S+$/.test(email)) {
  toast.error("Please enter a valid Email Address.");
  return;
}

setLoading(true);

  const text = `
📩 *New Contact Inquiry*

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email || "Not Provided"}

💬 Message:
${message || "No message"}
`;

  window.open(
    `https://wa.me/918303943001?text=${encodeURIComponent(text)}`,
    "_blank"
  );
  toast.success("Opening WhatsApp...");

setTimeout(() => {
  setLoading(false);
}, 1500);
};
  return (
    <main className="bg-[#081423] min-h-screen text-white">

      {/* Hero */}

      <section className="py-28 px-6 text-center">

        <p className="uppercase tracking-[5px] text-orange-500 font-semibold">
          Contact Us
        </p>

        <h1 className="mt-6 text-6xl font-black">
          Let's Plan Your Journey
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-300 leading-9">
          Have questions about your trip? We're here to help you plan the
          perfect travel experience across India's spiritual destinations.
        </p>

      </section>

      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                      {/* Left Side */}

          <div className="space-y-8">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h2 className="text-3xl font-bold">
                Get In Touch
              </h2>

              <p className="mt-4 text-gray-300 leading-8">
                Whether you're planning a spiritual journey, family vacation,
                or customized pilgrimage, our team is ready to help.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">
                📞 Phone
              </h3>

              <a
                href="tel:+918303943001"
                className="mt-3 block text-lg text-orange-400 hover:underline"
              >
                +91 8303943001
              </a>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">
                💬 WhatsApp
              </h3>

              <a
                href="https://wa.me/918303943001"
                target="_blank"
                className="mt-3 block text-lg text-orange-400 hover:underline"
              >
                Chat on WhatsApp
              </a>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <h3 className="text-2xl font-bold">
                ✉️ Email
              </h3>

              <a
                href="mailto:rajrajput80551@gmail.com"
                className="mt-3 block text-lg text-orange-400 hover:underline"
              >
                 rajrajput80551@gmail.com
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="text-3xl font-bold">
              Send Us a Message
            </h2>

            <div className="mt-8 space-y-5">

              <input
                type="text"
               placeholder="Full Name"
               value={name}
               onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-orange-500"
                />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-orange-500"
                />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-orange-500"
                />

              <textarea
                rows={6}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-white outline-none focus:border-orange-500"
                />

              <button
                onClick={sendContactWhatsApp}
                disabled={loading}
                className="w-full rounded-xl bg-orange-500 py-4 text-lg font-semibold transition hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                {loading ? "Opening WhatsApp..." : "Send Message"}
                </button>

            </div>
        </div>

        </div>

              {/* Google Map */}

      <div className="mt-20">

        <h2 className="text-center text-4xl font-black">
          Find Us
        </h2>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">

          <iframe
            src="https://www.google.com/maps?q=Varanasi&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
          />

        </div>

      </div>

    </section>

    {/* CTA */}

    <section className="pb-24 px-6">

      <div className="max-w-6xl mx-auto rounded-3xl bg-orange-500 p-12 text-center">

        <h2 className="text-5xl font-black">
          Let's Plan Your Dream Trip
        </h2>

        <p className="mt-6 text-xl text-white/90">
          Contact GhumoBharat today and get your personalized itinerary.
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