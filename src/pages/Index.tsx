import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
