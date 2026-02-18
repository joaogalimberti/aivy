import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LegalModal from './components/LegalModal';

const legalContent = {
  terms: (
    <div className="space-y-4 text-sm sm:text-base">
      <p>Bem-vindo à Aivy. Ao utilizar nossos serviços, você concorda com os seguintes termos:</p>
      <h3 className="font-bold text-gray-900 mt-4">1. Uso do Serviço</h3>
      <p>A Aivy fornece um assistente de agendamento via WhatsApp. Você é responsável por manter a segurança de sua conta e por todas as atividades que ocorrem nela.</p>
      <h3 className="font-bold text-gray-900 mt-4">2. Privacidade e Dados</h3>
      <p>Respeitamos sua privacidade. Seus dados são processados de acordo com nossa Política de Privacidade para fornecer e melhorar nossos serviços.</p>
      <h3 className="font-bold text-gray-900 mt-4">3. Limitação de Responsabilidade</h3>
      <p>A Aivy não se responsabiliza por eventuais falhas de comunicação no WhatsApp ou erros de agendamento decorrentes de uso inadequado da ferramenta.</p>
      <p className="pt-4 text-gray-400">Última atualização: Fevereiro de 2024</p>
    </div>
  ),
  privacy: (
    <div className="space-y-4 text-sm sm:text-base">
      <p>Sua privacidade é importante para nós. Esta política descreve como coletamos e usamos seus dados:</p>
      <h3 className="font-bold text-gray-900 mt-4">1. Coleta de Informações</h3>
      <p>Coletamos informações necessárias para o agendamento, como nome e número de telefone, fornecidos voluntariamente através do WhatsApp.</p>
      <h3 className="font-bold text-gray-900 mt-4">2. Uso dos Dados</h3>
      <p>Os dados coletados são utilizados exclusivamente para o funcionamento do assistente Aivy e para melhorar a experiência do usuário.</p>
      <h3 className="font-bold text-gray-900 mt-4">3. Compartilhamento</h3>
      <p>Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins de marketing.</p>
      <p className="pt-4 text-gray-400">Última atualização: Fevereiro de 2024</p>
    </div>
  )
};

function App() {
  const [activeModal, setActiveModal] = React.useState<'terms' | 'privacy' | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll('.section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Demo />
        <Features />
        <Benefits />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer
        onOpenTerms={() => setActiveModal('terms')}
        onOpenPrivacy={() => setActiveModal('privacy')}
      />
      <WhatsAppButton />

      <LegalModal
        isOpen={activeModal !== null}
        onClose={() => setActiveModal(null)}
        title={activeModal === 'terms' ? 'Termos de Uso' : 'Política de Privacidade'}
        content={activeModal ? legalContent[activeModal] : null}
      />
    </div>
  );
}

export default App;