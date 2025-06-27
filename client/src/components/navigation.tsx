import { useState, useEffect } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      const button = document.getElementById('mobile-menu-btn');
      if (nav && button && !nav.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="text-xl font-bold text-blue-600 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            JLF Cuarto
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLocation('/login')}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <LogIn size={16} className="mr-2" />
              Login
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            id="mobile-menu-btn"
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-t border-slate-200 mt-4">
            <div className="px-6 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left hover:text-blue-600 transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left hover:text-blue-600 transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="block w-full text-left hover:text-blue-600 transition-colors duration-300"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left hover:text-blue-600 transition-colors duration-300"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left hover:text-blue-600 transition-colors duration-300"
              >
                Contact
              </button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLocation('/login')}
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <LogIn size={16} className="mr-2" />
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
