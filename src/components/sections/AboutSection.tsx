
import { ArrowRight, Target, Lightbulb, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const incubationProcess = [
  {
    icon: Lightbulb,
    title: "Ideação",
    description: "Desenvolvimento e validação da ideia de negócio"
  },
  {
    icon: Users,
    title: "Mentoria",
    description: "Acompanhamento especializado com mentores experientes"
  },
  {
    icon: Target,
    title: "Desenvolvimento",
    description: "Criação do MVP e refinamento do produto"
  },
  {
    icon: Target,
    title: "Lançamento",
    description: "Entrada no mercado e escalabilidade"
  }
];

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre a <span className="text-green-sertao-600">Sertão Maker</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nascemos da convicção de que o sertão brasileiro tem potencial imenso para gerar inovação e empreendedorismo de impacto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-sertao-500 to-green-sertao-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-gray-800 text-2xl">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Fomentar o ecossistema de inovação no sertão, conectando empreendedores, investidores e recursos para criar soluções que transformem nossa região.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-sertao-500 to-green-sertao-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-gray-800 text-2xl">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Ser reconhecida como o principal hub de inovação do sertão, gerando startups que solucionem os desafios regionais e globais.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-sertao-500 to-green-sertao-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-gray-800 text-2xl">Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Colaboração, sustentabilidade, inovação social e valorização da cultura sertaneja como pilares do nosso trabalho.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Incubation Process */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Processo de <span className="text-green-sertao-600">Incubação</span>
            </h3>
            <div className="bg-gradient-to-r from-green-sertao-600 via-green-sertao-500 to-green-sertao-600 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-4 gap-8">
                {incubationProcess.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-12 w-12 text-green-sertao-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
                    <p className="text-green-sertao-100 text-sm leading-relaxed">{step.description}</p>
                    {index < incubationProcess.length - 1 && (
                      <ArrowRight className="h-8 w-8 text-green-sertao-200 absolute top-10 -right-4 hidden md:block animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
