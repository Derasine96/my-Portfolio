import AboutMe from "@/components/about_me/about_me";
import Contact from "@/components/contact/contact";
import ProfessionalJourney from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import HeroSection from "@/components/hero_section/hero_section";
import MainNav from "@/components/main_nav/main_nav";
import Portfolio from "@/components/portfolio/portfolio";

export default function Home() {
  return (
    <div className="bg-white max-w-full min-h-screen px-8">
      <div className="relative">
        {/* Background Image */}
        <div className="bg-[url('/images/background.png')] absolute inset-0 bg-cover bg-center"></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-full">
          {/* <MainNav />
          <HeroSection />
          <AboutMe />
          <ProfessionalJourney />
          <Portfolio />
          <Contact />
          <Footer /> */}
          <MainNav />
          <div id="home"><HeroSection /></div>
          <div id="about"><AboutMe /></div>
          <div id="journey"><ProfessionalJourney /></div>
          <div id="portfolio"><Portfolio /></div>
          <div id="contact"><Contact /></div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

