
import { useState } from 'react';
import { Filter, Globe, Cpu, Leaf, GraduationCap, Smartphone, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const allStartups = [
  {
    name: "AgroTech Sertão",
    description: "Soluções tecnológicas para agricultura sustentável no semiárido",
    stage: "Série A",
    category: "agtech",
    logo: "🌱"
  },
  {
    name: "EduMaker",
    description: "Plataforma de educação digital para comunidades rurais",
    stage: "Seed",
    category: "edtech",
    logo: "📚"
  },
  {
    name: "SolarSertão",
    description: "Energia solar acessível para pequenos produtores",
    stage: "Pré-Seed",
    category: "energia",
    logo: "☀️"
  },
  {
    name: "HealthConnect",
    description: "Telemedicina especializada para regiões remotas do sertão",
    stage: "Seed",
    category: "saude",
    logo: "🏥"
  },
  {
    name: "FinSertão",
    description: "Soluções financeiras digitais para pequenos empreendedores",
    stage: "Série A",
    category: "fintech",
    logo: "💰"
  },
  {
    name: "EcoWaste",
    description: "Gestão inteligente de resíduos sólidos urbanos",
    stage: "Pré-Seed",
    category: "sustentabilidade",
    logo: "♻️"
  },
  {
    name: "SmartIrriga",
    description: "Sistema IoT para irrigação inteligente",
    stage: "Seed",
    category: "agtech",
    logo: "💧"
  },
  {
    name: "TechLearn",
    description: "Cursos técnicos online com certificação digital",
    stage: "Pré-Seed",
    category: "edtech",
    logo: "🎓"
  }
];

const categories = [
  { value: 'todas', label: 'Todas as categorias', icon: Globe },
  { value: 'agtech', label: 'AgTech', icon: Leaf },
  { value: 'edtech', label: 'EdTech', icon: GraduationCap },
  { value: 'fintech', label: 'FinTech', icon: Smartphone },
  { value: 'saude', label: 'Saúde', icon: Heart },
  { value: 'energia', label: 'Energia', icon: Cpu },
  { value: 'sustentabilidade', label: 'Sustentabilidade', icon: Leaf }
];

export const StartupsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('todas');

  const filteredStartups = selectedCategory === 'todas' 
    ? allStartups 
    : allStartups.filter(startup => startup.category === selectedCategory);

  return (
    <section id="startups" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Startups <span className="text-green-sertao-600">Incubadas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore nosso portfólio de startups inovadoras que estão transformando diversos setores no sertão.
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center gap-3">
              <Filter className="h-6 w-6 text-green-sertao-700" />
              <span className="text-gray-700 font-semibold text-lg">Filtrar por categoria:</span>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-64 border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-xl">
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    <div className="flex items-center gap-3">
                      <category.icon className="h-5 w-5 text-green-sertao-600" />
                      {category.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Startups Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStartups.map((startup, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl bg-gradient-to-br from-gray-100 to-gray-200 p-3 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                        {startup.logo}
                      </div>
                      <CardTitle className="text-gray-800 text-xl group-hover:text-green-sertao-700 transition-colors">
                        {startup.name}
                      </CardTitle>
                    </div>
                    <span className="text-xs font-bold bg-gradient-to-r from-green-sertao-100 to-green-sertao-200 text-green-sertao-700 px-3 py-2 rounded-full shadow-sm">
                      {startup.stage}
                    </span>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {startup.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 capitalize font-medium bg-gray-100 px-3 py-2 rounded-lg">
                      {categories.find(cat => cat.value === startup.category)?.label || startup.category}
                    </span>
                    <Button variant="outline" size="sm" className="border-green-sertao-600 text-green-sertao-600 hover:bg-green-sertao-50 hover:scale-105 transition-all duration-300 font-semibold">
                      Ver mais
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredStartups.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-xl">
                Nenhuma startup encontrada para esta categoria.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
