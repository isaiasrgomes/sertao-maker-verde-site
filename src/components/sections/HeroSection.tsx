
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-green-sertao-600 via-green-sertao-500 to-green-sertao-800 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop')`
        }}
      />
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-sertao-300/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-sertao-200/20 rounded-full blur-lg"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Cultivando o
            <span className="text-green-sertao-200 bg-gradient-to-r from-green-sertao-200 to-green-sertao-100 bg-clip-text text-transparent"> Futuro </span>
            do Sertão
          </h1>
          <p className="text-xl md:text-2xl text-green-sertao-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            A primeira incubadora de startups do sertão nordestino, transformando ideias inovadoras em negócios prósperos que impactam nossa região.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-green-sertao-700 hover:bg-green-sertao-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('programas')}
            >
              Conheça nossos programas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-green-sertao-700 backdrop-blur-sm px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('sobre')}
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
