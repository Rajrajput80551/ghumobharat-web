import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  title: "Ghumo Bharat | Explore India with Trusted Local Hosts",

  description:
    "Book personalized trips across India with trusted local hosts. Explore Varanasi, Ayodhya, Prayagraj, Mathura, Vrindavan and more with transparent pricing and customized itineraries.",

  keywords: [
  "Ghumo Bharat",
  "GhumoBharat",
  "ghumo bharat",
  "ghumobharat",
  "Ghumo Bharat Travel",
  "Ghumo Bharat Tours",
  "Ghumo Bharat India",
  "India Travel",
  "Varanasi Tour",
  "Ayodhya Tour",
  "Prayagraj Tour",
  "Mathura Tour",
  "Vrindavan Tour",
  "Kashi Tour",
  "Spiritual Tour India",
  "India Tour Packages",
  "Travel Agency India",
  "Tour Guide India",
  "Religious Tour India",
],

  authors: [{ name: "GhumoBharat" }],

  creator: "GhumoBharat",
  applicationName: "Ghumo Bharat",

  metadataBase: new URL("https://www.ghumo-bharat.com"),

 openGraph: {
  title: "Ghumo Bharat",
  description:
    "Explore India with trusted local hosts and personalized travel experiences.",
  url: "https://www.ghumo-bharat.com",
  siteName: "Ghumo Bharat",
  type: "website",

  images: [
    {
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Ghumo Bharat",
    },
  ],
},
alternates: {
 canonical: "https://www.ghumo-bharat.com",
},
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Ghumo Bharat",
  url: "https://www.ghumo-bharat.com",
  logo: "https://www.ghumo-bharat.com/images/logo.png",
  telephone: "+91-8303943001",
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
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(organizationSchema),
  }}
  />

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
  <GoogleAnalytics gaId="G-C0DD3DY3SP" />

 </body>
    </html>
  );
}
