
interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-40 h-40 mr-4">
                  <img 
                    src="/lovable-uploads/2fa9bf5d-610a-4d17-bf97-fb67f229610f.png" 
                    alt="Incubadora Sertão Maker" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Cultivando o futuro do sertão através da inovação e do empreendedorismo sustentável.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-xl">Links Úteis</h4>
              <ul className="space-y-3 text-gray-300">
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-white transition-colors hover:translate-x-1 transform duration-300">Sobre</button></li>
                <li><button onClick={() => scrollToSection('programas')} className="hover:text-white transition-colors hover:translate-x-1 transform duration-300">Programas</button></li>
                <li><button onClick={() => scrollToSection('startups')} className="hover:text-white transition-colors hover:translate-x-1 transform duration-300">Startups</button></li>
                <li><button onClick={() => scrollToSection('equipe')} className="hover:text-white transition-colors hover:translate-x-1 transform duration-300">Equipe</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="hover:text-white transition-colors hover:translate-x-1 transform duration-300">Contato</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-xl">Programas</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors">Pré-Incubação</li>
                <li className="hover:text-white transition-colors">Incubação</li>
                <li className="hover:text-white transition-colors">Mentoria</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
            <p className="text-lg">&copy; 2024 Sertão Maker. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
