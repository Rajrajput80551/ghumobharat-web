"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can I customize my itinerary?",
    answer:
      "Yes. Every trip is completely personalized based on your destination, duration, travel style, and preferences.",
  },
  {
    question: "Do you provide hotel booking?",
    answer:
      "Yes. We can arrange hotel bookings according to your budget and requirements.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No. We believe in complete transparency. You'll only pay for the services you choose.",
  },
  {
    question: "Can I book transportation only?",
    answer:
      "Yes. You can book only transportation or combine it with other travel services.",
  },
  {
    question: "How will I receive my travel plan?",
    answer:
      "After reviewing your inquiry, our travel expert will contact you and share a personalized itinerary and quotation.",
  },
];
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#081423] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
            Find answers to the most common questions about planning your trip with GhumoBharat.
          </p>

        </div>

        {/* FAQ List */}

        <div className="mt-16 space-y-5">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >

                <span className="text-xl font-semibold text-white">
                  {item.question}
                </span>

                <span className="text-3xl text-orange-500">
                  {open === index ? "−" : "+"}
                </span>

              </button>

              {open === index && (

                <div className="border-t border-white/10 px-8 py-6">

                  <p className="leading-8 text-gray-300">
                    {item.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}