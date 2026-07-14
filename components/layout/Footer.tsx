import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050d17] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-4xl font-black text-white">
              Ghumo<span className="text-orange-500">Bharat</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Personalized spiritual, cultural and heritage trips across
              India with trusted local experts.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">

              <li>Home</li>
              <li>Destinations</li>
              <li>Trip Planner</li>
              <li>Gallery</li>
              <li>Contact</li>

            </ul>

          </div>
                    {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-gray-400">

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-orange-500" />
                <span>Uttar Pradesh, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span>+91 8303943001</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span>rajrajput80551@gmail.com</span>
              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Follow Us
            </h3>

            <div className="mt-6 flex gap-4">

              <a
                href="https://instagram.com/ghum0bharat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition hover:bg-orange-500 hover:border-orange-500"
              >
                <span className="text-sm font-bold tracking-wide">
  IG
                 </span>
              </a>

              <a
                href="https://wa.me/918303943001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition hover:bg-green-500 hover:border-green-500"
                >
                <MessageCircle size={22} />
              </a>

            </div>

            <p className="mt-5 text-gray-400">
              @ghum0bharat
            </p>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Ghumo Bharat. All Rights Reserved.
          </p>

          <p className="text-gray-500">
            Made with ❤️ in India
          </p>

        </div>

      </div>
    </footer>
  );
}