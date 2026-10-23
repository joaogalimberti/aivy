import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: 'Meus clientes precisam instalar algo?',
      answer: 'Não. Essa é a grande vantagem do Aivy. Tudo acontece diretamente no WhatsApp que seus clientes já usam. Eles simplesmente recebem e respondem mensagens — sem downloads, sem cadastros, sem atrito.',
    },
    {
      question: 'Funciona com WhatsApp pessoal ou só com o Business?',
      answer: 'O Aivy funciona com qualquer número de WhatsApp, seja pessoal ou Business. Não há restrições quanto ao tipo de conta.',
    },
    {
      question: 'Posso testar antes de pagar?',
      answer: 'Sim! O plano gratuito inclui até 20 agendamentos por mês para você experimentar. Além disso, todos os planos pagos têm 7 dias de teste sem cobrar nada, sem precisar de cartão de crédito.',
    },
    {
      question: 'Como funcionam os lembretes automáticos?',
      answer: 'Os lembretes são enviados automaticamente pelo WhatsApp nos intervalos que você configurar — por padrão, 24h e 1h antes do compromisso. Seus clientes podem confirmar ou solicitar reagendamento direto na resposta, e você é notificado.',
    },
    {
      question: 'O Aivy se integra com o Google Calendar?',
      answer: 'Sim. Nos planos Profissional e Empresarial, cada agendamento feito pelo WhatsApp é sincronizado automaticamente com Google Calendar e Outlook em tempo real.',
    },
    {
      question: 'Qual a forma de pagamento?',
      answer: 'Aceitamos cartões de crédito, boleto bancário e PIX. Os planos são cobrados mensalmente ou anualmente (com 20% de desconto). Você pode cancelar a qualquer momento, sem multa.',
    },
    {
      question: 'Funciona para equipes com múltiplos atendentes?',
      answer: 'Sim. O plano Empresarial suporta múltiplos usuários e profissionais na mesma conta, com agendas separadas e painel de gestão centralizado.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary/80 bg-primary/10 px-4 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-lg text-gray-500 font-normal">
              Tire suas principais dúvidas sobre o Aivy.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'border-primary/30 shadow-sm' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex justify-between items-center w-full text-left px-6 py-4 focus:outline-none"
                >
                  <h3 className={`text-base font-semibold pr-4 ${openIndex === index ? 'text-primary' : 'text-gray-900'}`}>
                    {item.question}
                  </h3>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {openIndex === index
                      ? <Minus className="w-3.5 h-3.5" />
                      : <Plus className="w-3.5 h-3.5" />
                    }
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 mt-10">
            Tem outra dúvida?{' '}
            <a
              href="https://wa.me/?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20Aivy"
              className="text-primary font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale com a gente pelo WhatsApp →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;