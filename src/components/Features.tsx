import React from 'react';
import { Calendar, Bell, MessageSquare, RefreshCw, Link2, BarChart2 } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Agendamento por mensagem',
      description: 'Crie e edite compromissos enviando uma mensagem natural. Sem formulários, sem cliques desnecessários.',
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'Lembretes anti-no-show',
      description: 'Envie lembretes automáticos 24h e 1h antes para você e seus clientes, reduzindo faltas em até 70%.',
      badge: 'Mais usado',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Linguagem natural & áudio',
      description: 'O Aivy entende mensagens de texto e áudio no estilo que você fala, sem precisar digitar comandos específicos.',
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Reagendamento instantâneo',
      description: 'Altere, cancele ou reagende com uma mensagem. O Aivy notifica todos os envolvidos automaticamente.',
    },
    {
      icon: <Link2 className="w-6 h-6" />,
      title: 'Sincronização de calendários',
      description: 'Integre com Google Calendar e Outlook em tempo real. Seus compromissos sempre atualizados em todos os dispositivos.',
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: 'Relatórios de presença',
      description: 'Acompanhe taxa de comparecimento, faltas e horários de pico. Dados que ajudam a otimizar sua agenda.',
      badge: 'Novo',
    },
  ];

  return (
    <section id="funcionalidades" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary/80 bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Recursos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Tudo que você precisa para dominar sua agenda
          </h2>
          <p className="text-lg text-gray-500 font-normal">
            Funcionalidades pensadas para profissionais que atendem clientes e não podem se dar ao luxo de perder tempo ou compromissos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              {feature.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  {feature.badge}
                </span>
              )}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-emerald-100 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;