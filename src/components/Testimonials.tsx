import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  initials: string;
  avatarColor: string;
  quote: string;
  rating: number;
  metric?: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Camila Santos',
      role: 'Designer Gráfica · Freelancer',
      initials: 'CS',
      avatarColor: 'from-violet-500 to-purple-600',
      quote: 'Eu usava planilha e esquecia sempre. Agora o Aivy me lembra de tudo e meus clientes acham super profissional. Meu índice de faltas caiu para quase zero.',
      rating: 5,
      metric: '0% de faltas',
    },
    {
      name: 'Ricardo Oliveira',
      role: 'Consultor Financeiro',
      initials: 'RO',
      avatarColor: 'from-blue-500 to-cyan-600',
      quote: 'Gerencio mais de 30 reuniões por semana e o Aivy organizou tudo. Simplesmente mando uma mensagem e pronto — ele confirma, lembra e sincroniza.',
      rating: 5,
      metric: '30+ reuniões/semana',
    },
    {
      name: 'Fernanda Lima',
      role: 'Psicóloga · Consultório Próprio',
      initials: 'FL',
      avatarColor: 'from-rose-500 to-pink-600',
      quote: 'Meus pacientes adoram os lembretes automáticos e eu nunca mais tive problemas com faltas ou atrasos. Economizo pelo menos 1h por semana de operacional.',
      rating: 5,
      metric: '-80% no-shows',
    },
    {
      name: 'Bruno Costa',
      role: 'Desenvolvedor · Empresa de Tecnologia',
      initials: 'BC',
      avatarColor: 'from-amber-500 to-orange-600',
      quote: 'Integrei o Aivy na rotina do time e nossa produtividade melhorou muito. A API é sólida e o suporte tirou todas as nossas dúvidas rapidamente.',
      rating: 5,
      metric: 'Equipe de 8 pessoas',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="depoimentos" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary/80 bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Quem usa, não abre mão
          </h2>
          <p className="text-lg text-gray-500 font-normal">
            Profissionais reais que transformaram a gestão da agenda com o Aivy.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative rounded-2xl p-6 border cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? 'border-primary/40 bg-emerald-50/50 shadow-md shadow-primary/10 ring-1 ring-primary/20'
                  : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-md'
              }`}
            >
              {/* Quote icon */}
              <Quote className={`w-6 h-6 mb-3 ${index === currentIndex ? 'text-primary' : 'text-gray-200'}`} />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`}
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 text-sm leading-relaxed mb-5">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-bold">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
                {t.metric && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {t.metric}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-100 rounded-2xl px-8 py-5 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {testimonials.map((t, i) => (
                <div key={i} className={`w-7 h-7 rounded-full bg-gradient-to-br ${t.avatarColor} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold`}>
                  {t.initials[0]}
                </div>
              ))}
            </div>
            <span className="font-medium">+500 usuários ativos</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
            </div>
            <span className="font-semibold text-gray-900">4.9</span>
            <span className="text-gray-400">· 200+ avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;