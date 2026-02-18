import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: 'Funciona em qualquer WhatsApp?',
      answer: 'Sim, o Aivy funciona com qualquer número de WhatsApp, seja pessoal ou comercial. Não há restrições quanto ao tipo de conta.'
    },
    {
      question: 'Preciso instalar algo?',
      answer: 'Não! Essa é a beleza do Aivy. Tudo acontece diretamente dentro do seu WhatsApp, sem necessidade de instalar aplicativos adicionais ou fazer configurações complexas.'
    },
    {
      question: 'Posso testar de graça?',
      answer: 'Sim! Oferecemos um plano gratuito com até 20 agendamentos por mês, ideal para você experimentar todas as funcionalidades básicas antes de fazer um upgrade.'
    },
    {
      question: 'Como são enviados os lembretes?',
      answer: 'Os lembretes são enviados automaticamente pelo WhatsApp, nos intervalos configurados antes do evento (por exemplo, 1 dia antes, 1 hora antes, etc).'
    },
    {
      question: 'É possível integrar com outros aplicativos?',
      answer: 'Sim! Nos planos pagos, oferecemos integrações com Google Calendar, Outlook e outros aplicativos populares. No plano Empresarial, temos API disponível para integrações customizadas.'
    },
    {
      question: 'Como funciona o pagamento?',
      answer: 'Aceitamos cartões de crédito, boleto bancário e PIX. Os planos são cobrados mensalmente, com opções de desconto para pagamentos anuais.'
    }
  ];

  const [openItemIndex, setOpenItemIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-700">
            Tire suas dúvidas sobre o PingMe e como ele pode ajudar na sua organização.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {item.question}
                </h3>
                {openItemIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItemIndex === index && (
                <div className="mt-3 text-base md:text-lg text-gray-700">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;