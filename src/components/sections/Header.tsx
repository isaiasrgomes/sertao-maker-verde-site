
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export const Header = ({ scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-green-sertao-700 via-green-sertao-600 to-green-sertao-700 backdrop-blur-sm z-50 shadow-lg border-b border-green-sertao-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white flex items-center">
            <div className="w-32 h-32">
              <img 
                src="/lovable-uploads/2fa9bf5d-610a-4d17-bf97-fb67f229610f.png" 
                alt="Incubadora Sertão Maker" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => handleScrollToSection('sobre')} className="text-green-sertao-100 hover:text-white transition-all duration-300 hover:scale-105">
              Sobre
            </button>
            <button onClick={() => handleScrollToSection('programas')} className="text-green-sertao-100 hover:text-white transition-all duration-300 hover:scale-105">
              Programas
            </button>
            <button onClick={() => handleScrollToSection('startups')} className="text-green-sertao-100 hover:text-white transition-all duration-300 hover:scale-105">
              Startups
            </button>
            <button onClick={() => handleScrollToSection('equipe')} className="text-green-sertao-100 hover:text-white transition-all duration-300 hover:scale-105">
              Equipe
            </button>
            <button onClick={() => handleScrollToSection('contato')} className="text-green-sertao-100 hover:text-white transition-all duration-300 hover:scale-105">
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-green-sertao-600 pt-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => handleScrollToSection('sobre')} className="text-left text-green-sertao-100 hover:text-white transition-colors">
                Sobre
              </button>
              <button onClick={() => handleScrollToSection('programas')} className="text-left text-green-sertao-100 hover:text-white transition-colors">
                Programas
              </button>
              <button onClick={() => handleScrollToSection('startups')} className="text-left text-green-sertao-100 hover:text-white transition-colors">
                Startups
              </button>
              <button onClick={() => handleScrollToSection('equipe')} className="text-left text-green-sertao-100 hover:text-white transition-colors">
                Equipe
              </button>
              <button onClick={() => handleScrollToSection('contato')} className="text-left text-green-sertao-100 hover:text-white transition-colors">
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
