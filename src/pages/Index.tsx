import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import Callouts from "@/components/Callouts";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Callouts />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
