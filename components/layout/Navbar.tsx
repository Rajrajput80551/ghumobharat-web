"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="relative mx-auto mt-6 flex w-[92%] max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-black/30 px-5 py-4 lg:px-10 lg:py-5 backdrop-blur-3xl shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
        {/* Logo */}

        <div className="flex items-center gap-2">
  <h1 className="text-xl sm:text-2xl lg:text-4xl font-extrabold tracking-tight text-white">
    Ghumo<span className="text-orange-500">Bharat</span>
  </h1>
</div>

        {/* Menu */}
<ul className="hidden lg:flex items-center gap-10 text-white text-lg font-medium">

  {/* Mobile Menu Button */}



  <li><Link href="/" className="hover:text-orange-400 transition">Home</Link></li>

  <li><Link href="/about" className="hover:text-orange-400 transition">About</Link></li>

  <li><Link href="/destinations" className="hover:text-orange-400 transition">Destinations</Link></li>

  <li><Link href="/gallery" className="hover:text-orange-400 transition">Gallery</Link></li>

  <li><Link href="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
</ul>

        {/* Button */}

       <div className="flex items-center gap-2">

     <Link
      href="/#trip-planner"
      className="rounded-full bg-orange-500 px-2.5 py-2 text-[11px] sm:text-sm lg:px-8 lg:py-3 lg:text-base text-white font-semibold shadow-lg transition-all duration-300 hover:bg-orange-600 hover:scale-105"
      >
      Plan My Trip
    </Link>

    <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="lg:hidden text-white"
    >
    {menuOpen ? <X size={30} /> : <Menu size={30} />}
     </button>

    </div>
         

        {/* Mobile Menu */}

{menuOpen && (
  <div className="absolute left-0 top-full mt-4 w-full rounded-3xl border border-white/10 bg-[#081423]/95 backdrop-blur-xl p-6 lg:hidden">

    <ul className="flex flex-col gap-6 text-lg text-white font-medium">

      <li>
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="hover:text-orange-400"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          className="hover:text-orange-400"
        >
          About
        </Link>
      </li>

      <li>
        <Link
          href="/destinations"
          onClick={() => setMenuOpen(false)}
          className="hover:text-orange-400"
        >
          Destinations
        </Link>
      </li>

      <li>
        <Link
          href="/gallery"
          onClick={() => setMenuOpen(false)}
          className="hover:text-orange-400"
        >
          Gallery
        </Link>
      </li>

      <li>
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="hover:text-orange-400"
        >
          Contact
        </Link>
      </li>

      {/* <button className="mt-4 rounded-full bg-orange-500 py-3 font-semibold hover:bg-orange-600">
        Plan My Trip
      </button> */}

    </ul>

  </div>
)}

      </nav>
    </header>
  );
}