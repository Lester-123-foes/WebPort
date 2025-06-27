import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <img 
              src="/profile.png" 
              alt="John Lester Ferrer Cuarto" 
              className="w-40 h-40 rounded-full mx-auto object-cover shadow-xl ring-4 ring-blue-600/20"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
            John Lester Ferrer{" "}
            <span className="text-blue-600">Cuarto</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-6">IT Student & Future Developer</p>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            22 years old • 2nd Year IT Student at Asian College Dumaguete City
            <br />
            Based in Bayawan City, Negros Oriental
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Me
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-blue-600 text-blue-600 px-8 py-3 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
