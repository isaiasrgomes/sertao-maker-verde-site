import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, Lightbulb, Target, Mail, Phone, MapPin, Menu, X, Filter, Search, Globe, Cpu, Leaf, GraduationCap, Smartphone, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todas');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

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
      title: "Aceleração",
      description: "Programa intensivo para startups prontas para expansão",
      duration: "6 meses",
      features: ["Capital de crescimento", "Conexão com investidores", "Mercados internacionais"]
    }
  ];

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
      icon: Globe,
      title: "Lançamento",
      description: "Entrada no mercado e escalabilidade"
    }
  ];

  const teamMembers = [
    {
      name: "Maria Silva",
      role: "Diretora Executiva",
      description: "15 anos de experiência em inovação e empreendedorismo no nordeste",
      image: "https://images.unsplash.com/photo-1494790108755-2616c4e9a9e3?w=400&h=400&fit=crop&crop=face"
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

  const filteredStartups = selectedCategory === 'todas' 
    ? allStartups 
    : allStartups.filter(startup => startup.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-green-sertao-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-green-sertao-700">
              Sertão Maker
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('sobre')} className="text-green-sertao-600 hover:text-green-sertao-700 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('programas')} className="text-green-sertao-600 hover:text-green-sertao-700 transition-colors">
                Programas
              </button>
              <button onClick={() => scrollToSection('equipe')} className="text-green-sertao-600 hover:text-green-sertao-700 transition-colors">
                Equipe
              </button>
              <button onClick={() => scrollToSection('startups')} className="text-green-sertao-600 hover:text-green-sertao-700 transition-colors">
                Startups
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-green-sertao-600 hover:text-green-sertao-700 transition-colors">
                Contato
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-green-sertao-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-green-sertao-100 pt-4">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('sobre')} className="text-left text-green-sertao-600 hover:text-green-sertao-700 transition-colors">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('programas')} className="text-left text-green-sertao-600 hover:text-green-sertao-700 transition-colors">
                  Programas
                </button>
                <button onClick={() => scrollToSection('equipe')} className="text-left text-green-sertao-600 hover:text-green-sertao-700 transition-colors">
                  Equipe
                </button>
                <button onClick={() => scrollToSection('startups')} className="text-left text-green-sertao-600 hover:text-green-sertao-700 transition-colors">
                  Startups
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-left text-green-sertao-600 hover:text-green-sertao-700 transition-colors">
                  Contato
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-sertao-50 to-white relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="container mx-auto px-4 relative">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-green-sertao-800 mb-6">
              Cultivando o
              <span className="text-green-sertao-600"> Futuro </span>
              do Sertão
            </h1>
            <p className="text-xl md:text-2xl text-green-sertao-600 mb-8 leading-relaxed">
              A primeira incubadora de startups do sertão nordestino, transformando ideias inovadoras em negócios prósperos que impactam nossa região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-green-sertao-600 hover:bg-green-sertao-700 text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection('programas')}
              >
                Conheça nossos programas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-green-sertao-600 text-green-sertao-600 hover:bg-green-sertao-50 px-8 py-3 text-lg"
                onClick={() => scrollToSection('sobre')}
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-sertao-800 mb-4">
                Sobre a Sertão Maker
              </h2>
              <p className="text-xl text-green-sertao-600 max-w-3xl mx-auto">
                Nascemos da convicção de que o sertão brasileiro tem potencial imenso para gerar inovação e empreendedorismo de impacto.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-green-sertao-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-sertao-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-green-sertao-600" />
                  </div>
                  <CardTitle className="text-green-sertao-800">Nossa Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-sertao-600 text-center">
                    Fomentar o ecossistema de inovação no sertão, conectando empreendedores, investidores e recursos para criar soluções que transformem nossa região.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-sertao-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-sertao-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-green-sertao-600" />
                  </div>
                  <CardTitle className="text-green-sertao-800">Nossa Visão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-sertao-600 text-center">
                    Ser reconhecida como o principal hub de inovação do sertão, gerando startups que solucionem os desafios regionais e globais.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-sertao-200 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-sertao-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-sertao-600" />
                  </div>
                  <CardTitle className="text-green-sertao-800">Nossos Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-sertao-600 text-center">
                    Colaboração, sustentabilidade, inovação social e valorização da cultura sertaneja como pilares do nosso trabalho.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Incubation Process */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-green-sertao-800 mb-8 text-center">
                Processo de Incubação
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {incubationProcess.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-20 h-20 bg-green-sertao-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-green-sertao-800 mb-2">{step.title}</h4>
                    <p className="text-green-sertao-600 text-sm">{step.description}</p>
                    {index < incubationProcess.length - 1 && (
                      <ArrowRight className="h-6 w-6 text-green-sertao-400 absolute top-8 -right-3 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-sertao-50 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-green-sertao-700 mb-2">50+</div>
                  <div className="text-green-sertao-600">Startups Incubadas</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-green-sertao-700 mb-2">R$ 12M</div>
                  <div className="text-green-sertao-600">Investimento Captado</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-green-sertao-700 mb-2">200+</div>
                  <div className="text-green-sertao-600">Empregos Gerados</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-green-sertao-700 mb-2">85%</div>
                  <div className="text-green-sertao-600">Taxa de Sucesso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programas" className="py-16 bg-green-sertao-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-sertao-800 mb-4">
                Nossos Programas
              </h2>
              <p className="text-xl text-green-sertao-600 max-w-3xl mx-auto">
                Oferecemos programas estruturados para cada estágio do seu empreendimento, do conceito inicial até a expansão internacional.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="bg-white border-green-sertao-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-green-sertao-800 text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-green-sertao-600 text-base">
                      {program.description}
                    </CardDescription>
                    <div className="text-sm font-semibold text-green-sertao-700 bg-green-sertao-100 px-3 py-1 rounded-full w-fit">
                      {program.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-green-sertao-600">
                          <CheckCircle className="h-5 w-5 text-green-sertao-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6 bg-green-sertao-600 hover:bg-green-sertao-700 text-white">
                      Inscreva-se
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-sertao-800 mb-4">
                Nossa Equipe
              </h2>
              <p className="text-xl text-green-sertao-600 max-w-3xl mx-auto">
                Conheça os profissionais apaixonados que lideram a transformação do ecossistema empreendedor do sertão.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-green-sertao-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-green-sertao-800 text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-green-sertao-600 font-semibold">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-sertao-600 text-sm text-center">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Startups Section */}
      <section id="startups" className="py-16 bg-green-sertao-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-sertao-800 mb-4">
                Startups Incubadas
              </h2>
              <p className="text-xl text-green-sertao-600 max-w-3xl mx-auto">
                Explore nosso portfólio de startups inovadoras que estão transformando diversos setores no sertão.
              </p>
            </div>

            {/* Filter Section */}
            <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-green-sertao-600" />
                <span className="text-green-sertao-700 font-semibold">Filtrar por categoria:</span>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-64 border-green-sertao-300">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center gap-2">
                        <category.icon className="h-4 w-4" />
                        {category.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Startups Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStartups.map((startup, index) => (
                <Card key={index} className="bg-white border-green-sertao-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{startup.logo}</div>
                        <CardTitle className="text-green-sertao-800 text-lg">{startup.name}</CardTitle>
                      </div>
                      <span className="text-xs font-semibold bg-green-sertao-100 text-green-sertao-700 px-2 py-1 rounded">
                        {startup.stage}
                      </span>
                    </div>
                    <CardDescription className="text-green-sertao-600">
                      {startup.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-sertao-500 capitalize">
                        {categories.find(cat => cat.value === startup.category)?.label || startup.category}
                      </span>
                      <Button variant="outline" size="sm" className="border-green-sertao-600 text-green-sertao-600 hover:bg-green-sertao-50">
                        Ver mais
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredStartups.length === 0 && (
              <div className="text-center py-12">
                <p className="text-green-sertao-600 text-lg">
                  Nenhuma startup encontrada para esta categoria.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-green-sertao-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-sertao-800 mb-4">
                Fale Conosco
              </h2>
              <p className="text-xl text-green-sertao-600">
                Está pronto para fazer parte da revolução empreendedora do sertão? Entre em contato conosco!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-green-sertao-200">
                <CardHeader>
                  <CardTitle className="text-green-sertao-800">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-green-sertao-600 mr-3" />
                    <span className="text-green-sertao-700">contato@sertaomaker.com.br</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-green-sertao-600 mr-3" />
                    <span className="text-green-sertao-700">(87) 9 9999-9999</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-sertao-600 mr-3 mt-1" />
                    <span className="text-green-sertao-700">
                      Rua da Inovação, 123<br />
                      Centro - Petrolina, PE<br />
                      CEP: 56300-000
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-green-sertao-200">
                <CardHeader>
                  <CardTitle className="text-green-sertao-800">Candidature-se</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-sertao-600 mb-6">
                    Tem uma ideia inovadora? Candidate-se aos nossos programas e faça parte do ecossistema Sertão Maker.
                  </p>
                  <Button className="w-full bg-green-sertao-600 hover:bg-green-sertao-700 text-white">
                    Inscrever-se nos Programas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-sertao-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Sertão Maker</h3>
                <p className="text-green-sertao-200 mb-4">
                  Cultivando o futuro do sertão através da inovação e do empreendedorismo sustentável.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Links Úteis</h4>
                <ul className="space-y-2 text-green-sertao-200">
                  <li><button onClick={() => scrollToSection('sobre')} className="hover:text-white transition-colors">Sobre</button></li>
                  <li><button onClick={() => scrollToSection('programas')} className="hover:text-white transition-colors">Programas</button></li>
                  <li><button onClick={() => scrollToSection('equipe')} className="hover:text-white transition-colors">Equipe</button></li>
                  <li><button onClick={() => scrollToSection('startups')} className="hover:text-white transition-colors">Startups</button></li>
                  <li><button onClick={() => scrollToSection('contato')} className="hover:text-white transition-colors">Contato</button></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Programas</h4>
                <ul className="space-y-2 text-green-sertao-200">
                  <li>Pré-Incubação</li>
                  <li>Incubação</li>
                  <li>Aceleração</li>
                  <li>Mentoria</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-green-sertao-700 mt-8 pt-8 text-center text-green-sertao-200">
              <p>&copy; 2024 Sertão Maker. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
