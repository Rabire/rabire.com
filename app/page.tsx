import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projects-section";
import StackSection from "@/components/stack-section";
import Testimonial from "@/components/testimonial";

// TODO: add scroll effects

export default function Home() {
  return (
    <main className="space-y-20 md:space-y-40">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <CtaSection />

      <ProjectsSection />

      <StackSection />

      <ContactSection />

      <Testimonial />

      <Footer />
    </main>
  );
}
