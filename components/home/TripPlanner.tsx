"use client";
import { toast } from "sonner";
import { useState } from "react";

export default function TripPlanner() {
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState("");
  const [travelType, setTravelType] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const [duration, setDuration] = useState("");
  const [travelDate, setTravelDate] = useState("");
   const [transport, setTransport] = useState("");
   const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
   const [requirements, setRequirements] = useState<string[]>([]);
   const [customRequirement, setCustomRequirement] = useState("");
   const [fullName, setFullName] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   const [whatsapp, setWhatsapp] = useState("");
   const [message, setMessage] = useState("");
   const today = new Date().toISOString().split("T")[0];

   

const sendToWhatsApp = () => {
  if (!fullName.trim()) {
  toast.error("Please enter your Full Name.");
  return;
}

if (!phone.trim()) {
  toast.error("Please enter your Mobile Number.");
  return;
}

if (!/^[0-9]{10}$/.test(phone)) {
  toast.error("Please enter a valid 10-digit Mobile Number.");
  return;
}

if (email && !/^\S+@\S+\.\S+$/.test(email)) {
  toast.error("Please enter a valid Email Address.");
  return;
}
  const text = `
🌍 *New Trip Inquiry*

👤 Name: ${fullName}
📞 Phone: ${phone}
📧 Email: ${email}
💬 WhatsApp: ${whatsapp || "Same as Phone"}

📍 Destination: ${destination}
👥 Travel Type: ${travelType}

🧑 Adults: ${adults}
🧒 Children: ${children}
👶 Infants: ${infants}

📅 Travel Date: ${travelDate}
🕒 Duration: ${duration}
🚗 Transport: ${transport}

📌 Places:
${selectedPlaces.join(", ")}

⭐ Requirements:
${requirements.join(", ")}

📝 Custom Requirement:
${customRequirement || "None"}

💬 Message:
${message || "No additional message"}
`;

  window.open(
    `https://wa.me/918303943001?text=${encodeURIComponent(text)}`,
    "_blank"
  );
};

  const destinations = [
    "Varanasi",
    "Prayagraj",
    "Ayodhya",
    "Vindhyachal",
  ];

  const travelTypes = [
    "Solo Traveller",
    "Couple",
    "Family",
    "Friends / Group",
  ];
  const transportOptions =
  travelType === "Solo Traveller"
    ? ["Bike", "Cab"]
    : travelType === "Couple"
    ? ["Bike", "Cab"]
    : travelType === "Family"
    ? ["Cab", "Tempo Traveller"]
    : ["Cab", "Tempo Traveller", "Mini Bus"];

 const placesData: Record<string, string[]> = {
  Varanasi: [
    "Kashi Vishwanath",
    "Dashashwamedh Ghat",
    "Ganga Aarti",
    "Assi Ghat",
    "Sarnath",
    "Boat Ride",
  ],

  Prayagraj: [
    "Triveni Sangam",
    "Anand Bhavan",
    "Allahabad Fort",
    "Hanuman Mandir",
    "Khusro Bagh",
  ],

  Ayodhya: [
    "Ram Mandir",
    "Hanuman Garhi",
    "Kanak Bhawan",
    "Saryu Aarti",
    "Ram Ki Paidi",
  ],

  Vindhyachal: [
    "Vindhyavasini Temple",
    "Kali Khoh",
    "Ashtabhuja Temple",
    "Sita Kund",
    "Ganga Ghat",
  ],
};

const requirementOptions = [
  "Airport Pickup",
  "Railway Station Pickup",
  "Bus Stand Pickup",
  "Hotel Booking",
  "Local Guide",
  "Boat Ride",
  "Photography",
  "Food Tour",
  "Senior Citizen Assistance",
];
 

  return (
    <section
      id="trip-planner"
      className="bg-[#081423] py-24 px-6"
      >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Trip Planner
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Plan Your Perfect Journey
          </h2>

          <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
            Tell us your travel preferences and we'll create a completely
            personalized travel experience.
          </p>
        </div>

        {/* Progress */}
        <div className="mt-16">

          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${step * 10}%` }}
            ></div>
          </div>

          <p className="mt-3 text-center text-gray-400">
            Step {step} of 10
          </p>

        </div>

        {/* Main Card */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl">

          {/* STEP 1 */}

          {step === 1 && (
            <>
              <h3 className="text-3xl font-bold text-white">
                Choose Your Destination
              </h3>

              <p className="text-gray-400 mt-2">
                Select the destination you would like to explore.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-10">

                {destinations.map((place) => (
                  <button
                    key={place}
                    onClick={() => setDestination(place)}
                    className={`rounded-2xl p-6 text-left text-xl font-semibold transition-all duration-300 ${
                      destination === place
                        ? "bg-orange-500 text-white"
                        : "bg-white/5 border border-white/10 text-white hover:border-orange-500 hover:bg-orange-500/20"
                    }`}
                  >
                    📍 {place}
                  </button>
                ))}

              </div>

              <div className="flex justify-end mt-12">

                <button
                  disabled={!destination}
                  onClick={() => setStep(2)}
                  className={`rounded-xl px-8 py-4 text-lg font-semibold transition ${
                    destination
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Next →
                </button>

              </div>
            </>
          )}

          {/* STEP 2 */}

          {step === 2 && (
            <>
              <h3 className="text-3xl font-bold text-white">
                Select Travel Type
              </h3>

              <p className="text-gray-400 mt-2">
                Tell us who is travelling.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-10">

                {travelTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
  setTravelType(type);

  if (type === "Solo Traveller") {
    setAdults(1);
    setChildren(0);
    setInfants(0);
  }
}}
                    className={`rounded-2xl p-6 text-left text-xl font-semibold transition-all duration-300 ${
                      travelType === type
                        ? "bg-orange-500 text-white"
                        : "bg-white/5 border border-white/10 text-white hover:border-orange-500 hover:bg-orange-500/20"
                    }`}
                  >
                    {type}
                  </button>
                ))}

              </div>

              <div className="flex justify-between mt-12">

                <button
                  onClick={() => setStep(1)}
                  className="rounded-xl border border-white/20 px-8 py-4 text-white hover:border-orange-500"
                >
                  ← Back
                </button>

                <button
                  disabled={!travelType}
                  onClick={() => setStep(3)}
                  className={`rounded-xl px-8 py-4 text-lg font-semibold transition ${
                    travelType
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Next →
                </button>

              </div>
            </>
          )}

          {/* STEP 3 */}

{step === 3 && (
  <>
    <h3 className="text-3xl font-bold text-white">
      Number of Travellers
    </h3>
    {travelType === "Solo Traveller" && (
  <div className="mt-5 rounded-xl bg-orange-500/10 border border-orange-500/20 p-4">
    <p className="text-orange-400">
      Solo Traveller allows only 1 traveller.
    </p>
  </div>
)}

    <p className="text-gray-400 mt-2">
      Tell us how many people are travelling.
    </p>

    <div className="space-y-6 mt-10">

      {/* Adults */}

      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6">

        <h4 className="text-xl font-semibold text-white">
          Adults
        </h4>

        <div className="flex items-center gap-5">

          <button
  onClick={() => {
    if (travelType === "Solo Traveller") return;

    if (adults > 1) {
      setAdults(adults - 1);
    }
  }}
  className="w-10 h-10 rounded-full bg-white/10 text-white"
>
  −
</button>

          <span className="text-2xl font-bold text-white w-8 text-center">
            {adults}
          </span>

         <button
  onClick={() => {
    if (travelType === "Solo Traveller") return;

    setAdults(adults + 1);
  }}
  className="w-10 h-10 rounded-full bg-orange-500 text-white"
>
  +
</button>

        </div>

      </div>

      {/* Children */}

      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6">

        <h4 className="text-xl font-semibold text-white">
          Children
        </h4>

        <div className="flex items-center gap-5">

          <button
  onClick={() => {
    if (travelType === "Solo Traveller") return;

    if (children > 0) {
      setChildren(children - 1);
    }
  }}
  className="w-10 h-10 rounded-full bg-white/10 text-white"
>
  −
</button>

          <span className="text-2xl font-bold text-white w-8 text-center">
            {children}
          </span>

          <button
  onClick={() => {
    if (travelType === "Solo Traveller") return;

    setChildren(children + 1);
  }}
  className="w-10 h-10 rounded-full bg-orange-500 text-white"
>
  +
</button>

        </div>

      </div>

      {/* Infants */}

      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6">

        <h4 className="text-xl font-semibold text-white">
          Infants
        </h4>

        <div className="flex items-center gap-5">

          <button
  onClick={() => {
    if (travelType === "Solo Traveller") return;

    if (infants > 0) {
      setInfants(infants - 1);
    }
  }}
  className="w-10 h-10 rounded-full bg-white/10 text-white"
>
  −
</button>

          <span className="text-2xl font-bold text-white w-8 text-center">
            {infants}
          </span>

         <button
  onClick={() => {
    if (travelType === "Solo Traveller") return;

    setInfants(infants + 1);
  }}
  className="w-10 h-10 rounded-full bg-orange-500 text-white"
>
  +
</button>

        </div>

      </div>

    </div>

    <div className="flex justify-between mt-12">

      <button
        onClick={() => setStep(2)}
        className="rounded-xl border border-white/20 px-8 py-4 text-white"
      >
        ← Back
      </button>

      <button
        onClick={() => setStep(4)}
        className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white hover:bg-orange-600"
      >
        Next →
      </button>

    </div>

  </>
)}
{/* STEP 4 */}

{step === 4 && (
  <>
    <h3 className="text-3xl font-bold text-white">
      Trip Duration
    </h3>

    <p className="text-gray-400 mt-2">
      How long would you like to travel?
    </p>

    <div className="grid md:grid-cols-3 gap-6 mt-10">

      {[
        "1 Day",
        "2 Days",
        "3 Days",
        "4 Days",
        "5+ Days",
        "Custom"
      ].map((item) => (

        <button
          key={item}
          onClick={() => setDuration(item)}
          className={`rounded-2xl p-6 text-lg font-semibold transition-all

          ${
            duration === item
              ? "bg-orange-500 text-white"
              : "bg-white/5 border border-white/10 text-white hover:border-orange-500"
          }`}
        >
          {item}
        </button>

      ))}

    </div>

    <div className="flex justify-between mt-12">

      <button
        onClick={() => setStep(3)}
        className="rounded-xl border border-white/20 px-8 py-4 text-white"
      >
        ← Back
      </button>

      <button
        disabled={!duration}
        onClick={() => setStep(5)}
        className={`rounded-xl px-8 py-4 font-semibold

        ${
          duration
            ? "bg-orange-500 text-white"
            : "bg-gray-700 text-gray-400 cursor-not-allowed"
        }`}
      >
        Next →
      </button>

    </div>

  </>
)}

{/* STEP 5 */}

{step === 5 && (
  <>
    <h3 className="text-3xl font-bold text-white">
      Select Travel Date
    </h3>

    <p className="text-gray-400 mt-2">
      Choose your preferred travel date.
    </p>

    <div className="mt-10">

     <input
  type="date"
  value={travelDate}
  min={today}
  onChange={(e) => {
  if (e.target.value >= today) {
    setTravelDate(e.target.value);
  } else {
    setTravelDate("");
  }
}}
  className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none focus:border-orange-500"
/>

    </div>

    <div className="flex justify-between mt-12">

      <button
        onClick={() => setStep(4)}
        className="rounded-xl border border-white/20 px-8 py-4 text-white"
      >
        ← Back
      </button>

      <button
        disabled={!travelDate || travelDate < today}
        onClick={() => setStep(6)}
        className={`rounded-xl px-8 py-4 font-semibold

        ${
          travelDate
            ? "bg-orange-500 text-white"
            : "bg-gray-700 text-gray-400 cursor-not-allowed"
        }`}
      >
        Next →
      </button>

    </div>

  </>
)}

{/* STEP 6 */}

{step === 6 && (
  <>
    <h3 className="text-3xl font-bold text-white">
      Choose Transport
    </h3>

    <p className="text-gray-400 mt-2">
      Recommended transport based on your travel type.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      {transportOptions.map((item) => (
        <button
          key={item}
          onClick={() => setTransport(item)}
          className={`rounded-2xl p-6 text-xl font-semibold transition-all

          ${
            transport === item
              ? "bg-orange-500 text-white"
              : "bg-white/5 border border-white/10 text-white hover:border-orange-500"
          }`}
        >
          🚗 {item}
        </button>
      ))}

    </div>

    <div className="flex justify-between mt-12">

      <button
        onClick={() => setStep(5)}
        className="rounded-xl border border-white/20 px-8 py-4 text-white"
      >
        ← Back
      </button>

      <button
        disabled={!transport}
        onClick={() => setStep(7)}
        className={`rounded-xl px-8 py-4 font-semibold

        ${
          transport
            ? "bg-orange-500 text-white"
            : "bg-gray-700 text-gray-400 cursor-not-allowed"
        }`}
      >
        Next →
      </button>

    </div>
  </>
)}

{/* STEP 7 */}

{step === 7 && (
  <>
    <h3 className="text-3xl font-bold text-white">
      Places You Want To Visit
    </h3>

    <p className="text-gray-400 mt-2">
      Select the places you would like to include in your trip.
    </p>

    <div className="grid md:grid-cols-2 gap-5 mt-10">

      {(placesData[destination] || []).map((place) => (

        <label
          key={place}
          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 cursor-pointer hover:border-orange-500"
        >

          <input
            type="checkbox"
            checked={selectedPlaces.includes(place)}
            onChange={(e) => {

              if (e.target.checked) {
                setSelectedPlaces([...selectedPlaces, place]);
              } else {
                setSelectedPlaces(
                  selectedPlaces.filter((p) => p !== place)
                );
              }

            }}
            className="w-5 h-5 accent-orange-500"
          />

          <span className="text-white text-lg">
            {place}
          </span>

        </label>

      ))}

    </div>

    <div className="flex justify-between mt-12">

      <button
        onClick={() => setStep(6)}
        className="rounded-xl border border-white/20 px-8 py-4 text-white"
      >
        ← Back
      </button>

      <button
        disabled={selectedPlaces.length === 0}
        onClick={() => setStep(8)}
        className={`rounded-xl px-8 py-4 font-semibold

        ${
          selectedPlaces.length
            ? "bg-orange-500 text-white"
            : "bg-gray-700 text-gray-400 cursor-not-allowed"
        }`}
      >
        Next →
      </button>

    </div>

  </>
)}

{/* STEP 8 */}

{step === 8 && (
  <>
    <h3 className="text-3xl font-bold text-white">
      Special Requirements
    </h3>

    <p className="text-gray-400 mt-2">
      Select any additional services you need for your trip.
    </p>

    <div className="grid md:grid-cols-2 gap-5 mt-10">

      {requirementOptions.map((item) => (
        <label
          key={item}
          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 cursor-pointer transition hover:border-orange-500"
        >
          <input
            type="checkbox"
            checked={requirements.includes(item)}
            onChange={(e) => {
              if (e.target.checked) {
                setRequirements([...requirements, item]);
              } else {
                setRequirements(
                  requirements.filter((r) => r !== item)
                );
              }
            }}
            className="h-5 w-5 accent-orange-500"
          />

          <span className="text-lg text-white">
            {item}
          </span>
        </label>
      ))}

    </div>

    <div className="mt-8">
      <label className="block text-white font-medium mb-3">
        Any Other Requirement?
      </label>

      <textarea
        value={customRequirement}
        onChange={(e) => setCustomRequirement(e.target.value)}
        rows={4}
        placeholder="Write your additional requirements here..."
        className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-white placeholder:text-gray-500 outline-none focus:border-orange-500"
      />
    </div>

    <div className="flex justify-between mt-12">

      <button
        onClick={() => setStep(7)}
        className="rounded-xl border border-white/20 px-8 py-4 text-white hover:border-orange-500 transition"
      >
        ← Back
      </button>

      <button
        onClick={() => setStep(9)}
        className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-600 transition"
      >
        Next →
      </button>

    </div>

  </>
)}

{/* STEP 9 */}

{step === 9 && (
  <>
    <h3 className="text-3xl font-bold text-white">
      Trip Summary
    </h3>

    <p className="text-gray-400 mt-2">
      Please review your travel plan before submitting your inquiry.
    </p>

    <div className="mt-10 space-y-5">

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
        <p className="text-gray-400">Destination</p>
        <h4 className="text-2xl text-white font-bold">{destination}</h4>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
        <p className="text-gray-400">Travel Type</p>
        <h4 className="text-xl text-white">{travelType}</h4>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
        <p className="text-gray-400">Travellers</p>

        <h4 className="text-xl text-white mt-2">
          Adults: {adults}
        </h4>

        <h4 className="text-xl text-white">
          Children: {children}
        </h4>

        <h4 className="text-xl text-white">
          Infants: {infants}
        </h4>

      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
        <p className="text-gray-400">Duration</p>

        <h4 className="text-xl text-white">
          {duration}
        </h4>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
        <p className="text-gray-400">Travel Date</p>

        <h4 className="text-xl text-white">
          {travelDate}
        </h4>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
        <p className="text-gray-400">Transport</p>

        <h4 className="text-xl text-white">
          {transport}
        </h4>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
        <p className="text-gray-400 mb-3">
          Selected Places
        </p>

        <div className="flex flex-wrap gap-3">
          {selectedPlaces.map((place) => (
            <span
              key={place}
              className="rounded-full bg-orange-500 px-4 py-2 text-white"
            >
              {place}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
        <p className="text-gray-400 mb-3">
          Special Requirements
        </p>

        <div className="flex flex-wrap gap-3">
          {requirements.map((item) => (
            <span
              key={item}
              className="rounded-full bg-orange-500 px-4 py-2 text-white"
            >
              {item}
            </span>
          ))}
        </div>

        {customRequirement && (
          <div className="mt-5 rounded-xl bg-black/30 p-4 text-white">
            {customRequirement}
          </div>
        )}

      </div>

    </div>

    <div className="flex justify-between mt-12">

      <button
        onClick={() => setStep(8)}
        className="rounded-xl border border-white/20 px-8 py-4 text-white"
      >
        ← Back
      </button>

      <button
        onClick={() => setStep(10)}
        className="rounded-xl bg-orange-500 px-8 py-4 text-white font-semibold hover:bg-orange-600"
      >
        Continue →
      </button>

    </div>

  </>
)}

{/* STEP 10 */}

{step === 10 && (
  <>
    <h3 className="text-3xl font-bold text-white">
      Submit Your Inquiry
    </h3>

    <p className="text-gray-400 mt-2">
      Fill in your contact details. Our travel expert will contact you shortly.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="rounded-xl bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-orange-500"
      />

      <input
        type="tel"
        placeholder="Mobile Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="rounded-xl bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-orange-500"
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-xl bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-orange-500"
      />

      <input
        type="tel"
        placeholder="WhatsApp Number (Optional)"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        className="rounded-xl bg-white/5 border border-white/10 p-4 text-white outline-none focus:border-orange-500"
      />

    </div>

    <textarea
      rows={5}
      placeholder="Additional Message (Optional)"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="mt-6 w-full rounded-xl bg-white/5 border border-white/10 p-5 text-white outline-none focus:border-orange-500"
    />

    <div className="mt-6 rounded-2xl border border-orange-500/30 bg-orange-500/10 p-5">

      <h4 className="text-xl font-semibold text-orange-400">
        What happens next?
      </h4>

      <ul className="mt-4 space-y-2 text-gray-300">
        <li>✅ We'll review your travel requirements.</li>
        <li>✅ Our travel expert will contact you.</li>
        <li>✅ You'll receive a personalized itinerary.</li>
        <li>✅ No hidden charges. 100% transparent pricing.</li>
      </ul>

    </div>

    <div className="flex justify-between mt-12">

      <button
        onClick={() => setStep(9)}
        className="rounded-xl border border-white/20 px-8 py-4 text-white hover:border-orange-500 transition"
      >
        ← Back
      </button>

      <button
  onClick={sendToWhatsApp}
  className="rounded-xl bg-orange-500 px-10 py-4 text-lg font-semibold text-white hover:bg-orange-600 transition"
>
  Submit Inquiry
</button>
    </div>

  </>
)}

        </div>

      </div>
    </section>
  );
}