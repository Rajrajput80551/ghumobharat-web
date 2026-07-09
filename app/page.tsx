import Hero from "../components/home/Hero";
import Stats from "../components/home/stats";
import SearchSection from "../components/home/SearchSection";
import WhyChoose from "../components/home/WhyChoose";
import Destinations from "../components/home/Destinations";
import TripPlanner from "../components/home/TripPlanner";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";

export default function Home() {
  return (
    <>
      
      <Hero />
      <Stats />
      <SearchSection />
      <WhyChoose />
      <Destinations />
      <TripPlanner />
      <Testimonials />
      <FAQ />
      
    </>
  );
}