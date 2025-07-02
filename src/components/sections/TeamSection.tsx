
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const teamMembers = [
  {
    name: "Maria Silva",
    role: "Diretora Executiva",
    description: "15 anos de experiência em inovação e empreendedorismo no nordeste",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "João Santos",
    role: "Diretor de Investimentos",
    description: "Ex-executivo de venture capital com foco em startups de impacto social",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Ana Costa",
    role: "Gerente de Programas",
    description: "Especialista em aceleração de negócios e desenvolvimento de ecossistemas",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Carlos Oliveira",
    role: "Mentor Sênior",
    description: "Empreendedor serial com 3 exits bem-sucedidos em startups de tecnologia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  }
];

export const TeamSection = () => {
  return (
    <section id="equipe" className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-sertao-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-sertao-300 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Nossa <span className="text-green-sertao-600">Equipe</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conheça os profissionais apaixonados que lideram a transformação do ecossistema empreendedor do sertão.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-b from-white to-gray-50">
                <CardHeader className="text-center pb-4">
                  <div className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-gray-200 group-hover:ring-green-sertao-300 transition-all duration-300 shadow-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-gray-800 text-xl group-hover:text-green-sertao-700 transition-colors mb-2">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-green-sertao-600 font-semibold text-base">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
