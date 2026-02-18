import React from 'react';
import { Calendar, Bell, Brain, CreditCard as Edit, FileText, Layers } from 'lucide-react';
import FeatureCard from './common/FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Calendar className="w-10 h-10 text-primary" />,
      title: 'Agendamento Fácil',
      description: 'Crie agendamentos com linguagem natural diretamente no WhatsApp, sem formulários complexos.'
    },
    {
      icon: <Bell className="w-10 h-10 text-primary" />,
      title: 'Lembretes Inteligentes',
      description: 'Receba lembretes automáticos antes dos seus compromissos, evitando esquecimentos.'
    },
    {
      icon: <Brain className="w-10 h-10 text-primary" />,
      title: 'IA Inteligente',
      description: 'Nossa IA entende sua linguagem natural e interpreta suas necessidades de agendamento.'
    },
    {
      icon: <Edit className="w-10 h-10 text-primary" />,
      title: 'Edição Rápida',
      description: 'Altere ou cancele agendamentos com comandos simples, sem complicações.'
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: 'Exportação de Agenda',
      description: 'Exporte seus compromissos para Google Calendar, Outlook ou outros apps de calendário.'
    },
    {
      icon: <Layers className="w-10 h-10 text-primary" />,
      title: 'Integrações Futuras',
      description: 'Em breve, integração com ferramentas populares como Zoom, Meet e ferramentas de produtividade.'
    }
  ];

  return (
    <section id="funcionalidades" className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funcionalidades que simplificam sua vida
          </h2>
          <p className="text-lg text-gray-700">
            Conheça os recursos que tornam o Aivy seu assistente perfeito para gerenciar agendamentos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;