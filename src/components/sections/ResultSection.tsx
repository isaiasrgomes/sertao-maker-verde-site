
import { Download } from 'lucide-react';

export const ResultSection = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-sertao-500 to-green-sertao-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Download className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                🎉 Resultado Preliminar já Disponível!
              </h3>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Confira agora o resultado preliminar do processo seletivo da Sertão Maker
            </p>
            <a 
              href="https://drive.usercontent.google.com/download?id=16STZ3iBMG3bQvAV1gZiIWXQjCPKZPohv&export=download&authuser=7&confirm=t&uuid=777a6502-1038-4fe2-baa5-79804e9a8ae7&at=AN8xHoqLnpv7NqIqm1MeaYqXXhb5:1751417639497"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-sertao-600 to-green-sertao-700 hover:from-green-sertao-700 hover:to-green-sertao-800 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
            >
              <Download className="h-6 w-6" />
              Baixar Resultado Preliminar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
