import { Contact } from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import HeroSection from "@/sections/HeroSection";
import Projects from "@/sections/Projects";

import { Resume } from "@/sections/Resume";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <HeroSection />
      <Services />
      <Projects />
      <Resume />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
