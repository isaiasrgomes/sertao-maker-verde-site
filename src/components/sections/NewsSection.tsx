
import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Newspaper, Users, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const NewsSection = () => {
  const [activeTab, setActiveTab] = useState('todas');

  const newsItems = [
    {
      id: 1,
      type: 'noticia',
      title: 'Sertão Maker inaugura novo espaço de coworking',
      description: 'Nossa incubadora amplia suas instalações com um moderno espaço de coworking equipado com tecnologia de ponta para startups.',
      date: '2024-01-15',
      category: 'Infraestrutura',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      type: 'evento',
      title: 'Demo Day 2024 - Apresentação das Startups',
      description: 'Venha conhecer as startups incubadas e suas soluções inovadoras para o sertão nordestino.',
      date: '2024-02-20',
      category: 'Evento',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      type: 'processo',
      title: 'Processo Seletivo 2024 - Abertas as Inscrições',
      description: 'Estão abertas as inscrições para o processo seletivo de startups da turma 2024. Inscreva sua ideia!',
      date: '2024-01-30',
      category: 'Processo Seletivo',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop'
    }
  ];

  const tabs = [
    { id: 'todas', label: 'Todas', icon: Newspaper },
    { id: 'noticia', label: 'Notícias', icon: FileText },
    { id: 'evento', label: 'Eventos', icon: Users },
    { id: 'processo', label: 'Processos Seletivos', icon: Calendar }
  ];

  const filteredNews = activeTab === 'todas' 
    ? newsItems 
    : newsItems.filter(item => item.type === activeTab);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'noticia': return 'bg-blue-500';
      case 'evento': return 'bg-green-sertao-500';
      case 'processo': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="noticias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notícias e Eventos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fique por dentro das últimas novidades, eventos e oportunidades da nossa incubadora
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-green-sertao-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-green-sertao-50 hover:text-green-sertao-600'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 w-3 h-3 rounded-full ${getTypeColor(item.type)}`}></div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </CardDescription>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-green-sertao-600 hover:text-green-sertao-700 group"
                  >
                    Ler mais
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Quer receber nossas novidades em primeira mão?
            </p>
            <Button 
              size="lg"
              className="bg-green-sertao-600 hover:bg-green-sertao-700 text-white px-8 py-4"
            >
              Inscrever-se na Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
