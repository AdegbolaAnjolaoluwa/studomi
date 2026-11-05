import Nav from "@/components/Nav";
import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AskSection from "@/components/AskSection";
import Trust from "@/components/Trust";
import Faq from "@/components/Faq";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Nav />
      <main>
        <Hero />
        <FeatureStrip />
        <HowItWorks />
        <Features />
        <AskSection />
        <Trust />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
