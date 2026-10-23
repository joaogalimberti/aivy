import React from 'react';
import { TrendingDown, CalendarCheck, Star } from 'lucide-react';

const Benefits: React.FC = () => {
  const stats = [
    { value: '70%', label: 'menos faltas com lembretes automáticos' },
    { value: '2min', label: 'tempo médio para agendar pelo WhatsApp' },
    { value: '4.9★', label: 'avaliação média nas lojas' },
  ];

  return (
    <section id="vantagens" className="section bg-gray-950 text-white overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/30 via-gray-950 to-gray-950 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side - Content */}
          <div className="lg:w-1/2">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-900/40 border border-emerald-800/50 px-4 py-1.5 rounded-full mb-6">
              Por que Aivy?
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-5 leading-tight">
              Como ter uma secretária de agenda no seu WhatsApp,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                24h por dia.
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Para profissionais autônomos, clínicas, consultórios e qualquer negócio que dependa de agendamentos — o Aivy elimina o trabalho manual e o problema das faltas.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-900/50 border border-emerald-800/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingDown className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Chega de "esqueci" e no-shows</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Lembretes automáticos mandados pelo WhatsApp reduzem drasticamente faltas. Seus clientes recebem e confirmam sem sair do app.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-900/50 border border-emerald-800/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CalendarCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Sua agenda sempre atualizada e sincronizada</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Cada agendamento feito pelo WhatsApp aparece automaticamente no Google Calendar ou Outlook. Zero retrabalho.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-900/50 border border-emerald-800/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Star className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Profissionalismo que seus clientes percebem</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Confirmações automáticas e lembretes na hora certa passam imagem de seriedade e organização sem esforço da sua parte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-900/70 border border-gray-800/80 rounded-2xl px-8 py-6 flex items-center gap-6 hover:border-emerald-800/60 transition-colors"
                >
                  <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 min-w-[90px]">
                    {stat.value}
                  </span>
                  <span className="text-gray-300 text-base leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-emerald-900/20 border border-emerald-800/30 rounded-2xl p-6">
              <blockquote className="text-gray-300 text-base italic leading-relaxed">
                "Desde que comecei a usar o Aivy, minha taxa de faltas caiu de 25% para menos de 5%. Meus clientes adoram receber o lembrete direto no WhatsApp."
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-bold text-sm">
                  F
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Fernanda Lima</p>
                  <p className="text-gray-500 text-xs">Psicóloga · usuária desde 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;