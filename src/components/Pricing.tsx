import React from 'react';
import { Check, X } from 'lucide-react';
import Button from './common/Button';

interface PricingFeature {
  name: string;
  gratuito: boolean | string;
  profissional: boolean | string;
  empresarial: boolean | string;
}

const Pricing: React.FC = () => {
  const features: PricingFeature[] = [
    {
      name: 'Agendamentos',
      gratuito: 'Até 20/mês',
      profissional: 'Ilimitado',
      empresarial: 'Ilimitado + multiusuário'
    },
    {
      name: 'Lembretes',
      gratuito: '1 por evento',
      profissional: 'Até 5 por evento',
      empresarial: 'Até 10 + personalizados'
    },
    {
      name: 'Exportações',
      gratuito: false,
      profissional: 'PDF / CSV',
      empresarial: 'API + Integrações'
    },
    {
      name: 'Suporte',
      gratuito: 'E-mail',
      profissional: 'WhatsApp Prioritário',
      answer: 'Aceitamos cartões de crédito, boleto bancário e PIX. Os planos são cobrados mensalmente, com opções de desconto para pagamentos anuais.'
    }
  ];

  return (
    <section id="planos" className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-lg text-gray-700">
            Temos opções para todos os perfis, desde uso pessoal até grandes equipes empresariais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Plano Gratuito */}
          <div className="card p-6 border border-gray-200 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Gratuito</h3>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">R$0</span>
                <span className="text-gray-500 ml-2 mb-1">/mês</span>
              </div>
              <p className="text-gray-600">
                Perfeito para começar a se organizar sem compromisso.
              </p>
            </div>
            
            <div className="space-y-4 mb-8 flex-grow">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  {feature.gratuito ? (
                    <>
                      <Check className="text-primary w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">{feature.name}</p>
                        <p className="text-sm text-gray-600">{feature.gratuito}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <X className="text-gray-400 w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-gray-500">{feature.name}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
            
            <Button variant="secondary" fullWidth>
              Começar Grátis
            </Button>
          </div>
          
          {/* Plano Profissional */}
          <div className="card p-6 border-2 border-primary shadow-lg flex flex-col h-full relative">
            <div className="absolute -top-4 right-4 bg-primary text-white text-sm py-1 px-3 rounded-full font-medium">
              🔥 POPULAR
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Profissional</h3>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">R$29,90</span>
                <span className="text-gray-500 ml-2 mb-1">/mês</span>
              </div>
              <p className="text-gray-600">
                Ideal para profissionais que precisam de uma agenda organizada.
              </p>
            </div>
            
            <div className="space-y-4 mb-8 flex-grow">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-primary w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{feature.name}</p>
                    <p className="text-sm text-gray-600">{feature.profissional}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="primary" fullWidth>
              Assinar Agora
            </Button>
          </div>
          
          {/* Plano Empresarial */}
          <div className="card p-6 border border-gray-200 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Empresarial</h3>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">R$99,90</span>
                <span className="text-gray-500 ml-2 mb-1">/mês</span>
              </div>
              <p className="text-gray-600">
                Para equipes e empresas que precisam de recursos avançados.
              </p>
            </div>
            
            <div className="space-y-4 mb-8 flex-grow">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-primary w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{feature.name}</p>
                    <p className="text-sm text-gray-600">{feature.empresarial}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="secondary" fullWidth>
              Fale com nosso time
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;