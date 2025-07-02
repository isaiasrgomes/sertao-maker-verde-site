
import { ArrowRight, Mail, Phone, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-green-sertao-600 via-green-sertao-700 to-green-sertao-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-sertao-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fale Conosco
            </h2>
            <p className="text-xl text-green-sertao-100 leading-relaxed">
              Está pronto para fazer parte da revolução empreendedora do sertão? Entre em contato conosco!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-lg border-green-sertao-500 text-white shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-green-sertao-200" />
                  </div>
                  <span className="text-green-sertao-100 text-lg">contato@sertaomaker.com.br</span>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-green-sertao-200" />
                  </div>
                  <span className="text-green-sertao-100 text-lg">(87) 9 9999-9999</span>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-green-sertao-200" />
                  </div>
                  <span className="text-green-sertao-100 text-lg leading-relaxed">
                    Rua da Inovação, 123<br />
                    Centro - Petrolina, PE<br />
                    CEP: 56300-000
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Download className="h-6 w-6 text-green-sertao-200" />
                  </div>
                  <div className="text-green-sertao-100 text-lg">
                    <p className="mb-2">Resultado preliminar já disponível!</p>
                    <a 
                      href="https://drive.usercontent.google.com/download?id=16STZ3iBMG3bQvAV1gZiIWXQjCPKZPohv&export=download&authuser=7&confirm=t&uuid=777a6502-1038-4fe2-baa5-79804e9a8ae7&at=AN8xHoqLnpv7NqIqm1MeaYqXXhb5:1751417639497"
                      className="text-green-sertao-100 hover:text-white transition-colors underline underline-offset-4"
                    >
                      Download do Resultado
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-green-sertao-500 text-white shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Candidate-se</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-sertao-100 mb-8 text-lg leading-relaxed">
                  Tem uma ideia inovadora? Candidate-se aos nossos programas e faça parte do ecossistema Sertão Maker.
                </p>
                <Button className="w-full bg-white text-green-sertao-700 hover:bg-green-sertao-50 font-semibold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Inscrever-se nos Programas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
