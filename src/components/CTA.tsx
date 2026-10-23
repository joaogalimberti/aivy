import React from 'react';
import Button from './common/Button';
import { ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';

const CTA: React.FC = () => {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="comece-agora" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-700/50 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Comece hoje mesmo
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Sua agenda organizada.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-teal-400">
              Seus clientes presentes.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
            Junte-se a centenas de profissionais que já eliminaram as faltas e o caos de agenda — sem precisar de nenhum app extra.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              variant="primary"
              href="https://wa.me/?text=Olá!%20Quero%20começar%20a%20usar%20o%20Aivy%20agora"
              className="text-base font-bold px-8 py-4 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 flex items-center gap-2 transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              Testar Grátis no WhatsApp
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              variant="outline-white"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('planos');
              }}
              className="text-base font-semibold px-7 py-4"
            >
              Ver Planos
            </Button>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>7 dias grátis · sem cartão</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Configuração em 1 minuto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;