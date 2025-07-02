import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, Lightbulb, Target, Mail, Phone, MapPin, Menu, X, Filter, Globe, Cpu, Leaf, GraduationCap, Smartphone, Heart, Download } from 'lucide-react';
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
              <button onClick={() => scrollToSection('sobre')} className="text-green-sertao-100 hover:text-white transition-all duration-300 hover:scale-105">
                Sobre
              </button>
              <button onClick={() => scrollToSection('programas')} className="text-green-sertao-100 hover:text-white transition-all duration-300 hover:scale-105">
                Programas
              </button>
              <button onClick={() => scrollToSection('startups')} className="text-green-sertao-100 hover:text-white transition-all duration-300 hover:scale-105">
                Startups
              </button>
              <button onClick={() => scrollToSection('equipe')} className="text-green-sertao-100 hover:text-white transition-all duration-300 hover:scale-105">
                Equipe
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-green-sertao-100 hover:text-white transition-all duration-300 hover:scale-105">
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
                <button onClick={() => scrollToSection('sobre')} className="text-left text-green-sertao-100 hover:text-white transition-colors">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('programas')} className="text-left text-green-sertao-100 hover:text-white transition-colors">
                  Programas
                </button>
                <button onClick={() => scrollToSection('startups')} className="text-left text-green-sertao-100 hover:text-white transition-colors">
                  Startups
                </button>
                <button onClick={() => scrollToSection('equipe')} className="text-left text-green-sertao-100 hover:text-white transition-colors">
                  Equipe
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-left text-green-sertao-100 hover:text-white transition-colors">
                  Contato
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Programs Section */}
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

      {/* Startups Section */}
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

      {/* Team Section */}
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

      {/* Contact Section */}
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

      {/* Footer */}
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
    </div>
  );
};

export default Index;
