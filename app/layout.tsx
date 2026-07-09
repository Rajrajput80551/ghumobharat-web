import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GhumoBharat | Explore India with Trusted Local Hosts",

  description:
    "Book personalized trips across India with trusted local hosts. Explore Varanasi, Ayodhya, Prayagraj, Mathura, Vrindavan and more with transparent pricing and customized itineraries.",

  keywords: [
    "GhumoBharat",
    "India Travel",
    "Varanasi Tour",
    "Ayodhya Tour",
    "Prayagraj Tour",
    "Mathura Tour",
    "Vrindavan Tour",
    "India Tour Packages",
    "Spiritual Tour India",
    "Travel Agency India",
  ],

  authors: [{ name: "GhumoBharat" }],

  creator: "GhumoBharat",

  metadataBase: new URL("https://ghumobharat.in"),

  openGraph: {
    title: "GhumoBharat",
    description:
      "Explore India with trusted local hosts and personalized travel experiences.",
    url: "https://ghumobharat.in",
    siteName: "GhumoBharat",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
  <body className="min-h-full flex flex-col">

  <Navbar />

  <main className="flex-1">
    {children}
  </main>

  <Footer />

  <Toaster
    richColors
    position="top-right"
    duration={2500}
  />

 </body>
    </html>
  );
}
