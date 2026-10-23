import React, { useState } from 'react';
import { Check, X, Zap } from 'lucide-react';
import Button from './common/Button';

type Plan = 'mensal' | 'anual';

const Pricing: React.FC = () => {
  const [billing, setBilling] = useState<Plan>('mensal');

  const plans = [
    {
      name: 'Gratuito',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'Para testar e sentir o poder do Aivy.',
      cta: 'Começar Grátis',
      ctaVariant: 'secondary' as const,
      highlight: false,
      features: [
        { text: 'Até 20 agendamentos/mês', included: true },
        { text: '1 lembrete por compromisso', included: true },
        { text: 'Suporte por e-mail', included: true },
        { text: 'Exportação de agenda', included: false },
        { text: 'Sincronização de calendário', included: false },
        { text: 'Relatórios de presença', included: false },
      ],
    },
    {
      name: 'Profissional',
      monthlyPrice: 29.9,
      yearlyPrice: 23.9,
      description: 'Para profissionais que vivem de agendamentos.',
      cta: 'Assinar Agora',
      ctaVariant: 'primary' as const,
      highlight: true,
      badge: '🔥 Mais popular',
      features: [
        { text: 'Agendamentos ilimitados', included: true },
        { text: 'Até 5 lembretes por compromisso', included: true },
        { text: 'Suporte via WhatsApp prioritário', included: true },
        { text: 'Exportação PDF e CSV', included: true },
        { text: 'Sincronização com Google Calendar', included: true },
        { text: 'Relatórios de presença', included: false },
      ],
    },
    {
      name: 'Empresarial',
      monthlyPrice: 99.9,
      yearlyPrice: 79.9,
      description: 'Para equipes e negócios com múltiplos profissionais.',
      cta: 'Fale com o Time',
      ctaVariant: 'secondary' as const,
      highlight: false,
      features: [
        { text: 'Agendamentos ilimitados + multiusuário', included: true },
        { text: 'Até 10 lembretes personalizados', included: true },
        { text: 'Gerente de conta dedicado', included: true },
        { text: 'Exportação + API REST', included: true },
        { text: 'Sync com Google, Outlook e iCloud', included: true },
        { text: 'Relatórios avançados de presença', included: true },
      ],
    },
  ];

  const formatPrice = (price: number) =>
    price === 0 ? 'Grátis' : `R$${price.toFixed(2).replace('.', ',')}`;

  return (
    <section id="planos" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary/80 bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Planos
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Simples e transparente. Sem surpresas.
          </h2>
          <p className="text-lg text-gray-500 font-normal">
            Escolha o plano que se encaixa no seu ritmo. Mude de plano quando quiser.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className={`text-sm font-semibold ${billing === 'mensal' ? 'text-gray-900' : 'text-gray-400'}`}>Mensal</span>
          <button
            onClick={() => setBilling(billing === 'mensal' ? 'anual' : 'mensal')}
            className={`relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${billing === 'anual' ? 'bg-primary' : 'bg-gray-300'}`}
          >
            <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${billing === 'anual' ? 'translate-x-6' : ''}`} />
          </button>
          <span className={`text-sm font-semibold ${billing === 'anual' ? 'text-gray-900' : 'text-gray-400'}`}>
            Anual
            <span className="ml-1.5 text-xs text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">-20%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 ${
                plan.highlight
                  ? 'bg-gray-900 text-white shadow-2xl shadow-gray-900/20 border border-gray-800 scale-[1.02]'
                  : 'bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-primary to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md shadow-primary/30">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{plan.description}</p>
                <div className="flex items-end gap-1">
                  {plan.monthlyPrice === 0 ? (
                    <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>Grátis</span>
                  ) : (
                    <>
                      <span className={`text-sm font-medium mb-1.5 ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>R$</span>
                      <span className={`text-4xl font-extrabold leading-none ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                        {(billing === 'anual' ? plan.yearlyPrice : plan.monthlyPrice).toFixed(2).replace('.', ',')}
                      </span>
                      <span className={`text-sm mb-1.5 ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>/mês</span>
                    </>
                  )}
                </div>
                {billing === 'anual' && plan.monthlyPrice > 0 && (
                  <p className={`text-xs mt-1 ${plan.highlight ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    Cobrado anualmente · economize R${((plan.monthlyPrice - plan.yearlyPrice) * 12).toFixed(0)}/ano
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? 'bg-primary/20' : 'bg-emerald-50'}`}>
                        <Check className={`w-3 h-3 stroke-[2.5] ${plan.highlight ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      </div>
                    ) : (
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? 'bg-gray-800' : 'bg-gray-100'}`}>
                        <X className={`w-3 h-3 ${plan.highlight ? 'text-gray-600' : 'text-gray-400'}`} />
                      </div>
                    )}
                    <span className={`text-sm ${!feature.included ? (plan.highlight ? 'text-gray-600 line-through' : 'text-gray-400 line-through') : (plan.highlight ? 'text-gray-200' : 'text-gray-700')}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? 'primary' : 'secondary'}
                fullWidth
                href={plan.name === 'Gratuito' || plan.name === 'Profissional'
                  ? 'https://wa.me/?text=Olá!%20Quero%20assinar%20o%20plano%20' + encodeURIComponent(plan.name)
                  : 'https://wa.me/?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20plano%20Empresarial'
                }
                className={`font-semibold ${plan.highlight ? 'shadow-lg shadow-primary/30' : ''}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8 flex items-center justify-center gap-2">
          <Zap className="w-4 h-4 text-primary" />
          Todos os planos incluem 7 dias gratuitos · cancele quando quiser
        </p>
      </div>
    </section>
  );
};

export default Pricing;