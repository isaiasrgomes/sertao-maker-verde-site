
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const programs = [
  {
    title: "Pré-Incubação",
    description: "Validação de ideias e desenvolvimento de MVP para empreendedores iniciantes",
    duration: "3 meses",
    features: ["Mentoria especializada", "Workshops semanais", "Networking"]
  },
  {
    title: "Incubação",
    description: "Aceleração de negócios com foco em crescimento e escalabilidade",
    duration: "12 meses",
    features: ["Investimento seed", "Espaço de coworking", "Suporte jurídico"]
  },
  {
    title: "Mentoria",
    description: "Acompanhamento personalizado com mentores experientes do ecossistema",
    duration: "6 meses",
    features: ["Mentores especializados", "Sessões individuais", "Networking estratégico"]
  }
];

export const ProgramsSection = () => {
  return (
    <section id="programas" className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-sertao-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-sertao-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-sertao-500 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nossos <span className="text-green-sertao-600">Programas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferecemos programas estruturados para cada estágio do seu empreendimento, do conceito inicial até a expansão internacional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-gray-800 text-2xl group-hover:text-green-sertao-700 transition-colors">
                      {program.title}
                    </CardTitle>
                    <div className="text-sm font-bold text-green-sertao-700 bg-green-sertao-100 px-4 py-2 rounded-full shadow-sm">
                      {program.duration}
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-6 w-6 text-green-sertao-500 mr-4 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-green-sertao-600 to-green-sertao-700 hover:from-green-sertao-700 hover:to-green-sertao-800 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                    Inscreva-se
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
