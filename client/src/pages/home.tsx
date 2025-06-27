import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import EducationSection from "@/components/education-section";
import SkillsSection from "@/components/skills-section";
import ContactSection from "@/components/contact-section";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Scroll animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => observer.observe(el));

    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2024 John Lester Ferrer Cuarto. All rights reserved.</p>
          <p className="text-sm">Built with passion for learning and growth in the IT field.</p>
        </div>
      </footer>
    </div>
  );
}
