import React from 'react';
import Button from './common/Button';

const CTA: React.FC = () => {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="comece-agora" className="py-24 bg-primary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Pronto para nunca mais esquecer um compromisso?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Transforme seu WhatsApp em uma ferramenta de produtividade e organização.
            Comece agora mesmo, sem complicações!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="white"
              href="https://wa.me/?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Aivy"
              className="text-primary hover:bg-gray-100"
            >
              Quero o Aivy no Meu WhatsApp
            </Button>

            <Button
              variant="outline-white"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('planos');
              }}
            >
              Ver Planos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;