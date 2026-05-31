import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-md flex items-center justify-center">
            <span style={{ fontFamily: '"Playfair Display", serif', fontWeight: 800 }} className="text-background text-lg">SS</span>
          </div>
          <span style={{ fontFamily: '"Playfair Display", serif', fontWeight: 800 }} className="text-xl hidden sm:inline">SS Fitness</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-accent transition-colors duration-200"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('transformation')}
            className="text-foreground hover:text-accent transition-colors duration-200"
          >
            Transformation
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-foreground hover:text-accent transition-colors duration-200"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-accent transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-sm"
          >
            Join Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-2 hover:text-accent transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('transformation')}
              className="text-left py-2 hover:text-accent transition-colors"
            >
              Transformation
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-left py-2 hover:text-accent transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-sm w-full"
            >
              Join Now
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
