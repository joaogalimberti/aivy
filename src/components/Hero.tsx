import React, { useEffect, useState } from 'react';
import Button from './common/Button';
import { Check, Calendar, ArrowRight, ShieldCheck, Zap, Users, MessageSquare } from 'lucide-react';

const Hero: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Chat animation sequence
  useEffect(() => {
    const sequence = [
      { delay: 800, action: () => setVisibleMessages(1) },
      { delay: 2000, action: () => setShowTyping(true) },
      { delay: 3200, action: () => { setShowTyping(false); setVisibleMessages(2); } },
      { delay: 4600, action: () => setVisibleMessages(3) },
      { delay: 6000, action: () => setVisibleMessages(4) }
    ];

    const timers = sequence.map(({ delay, action }) => 
      setTimeout(action, delay)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleScrollToDemo = () => {
    const demoSection = document.getElementById('como-funciona');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const restartChatAnimation = () => {
    setVisibleMessages(0);
    setShowTyping(false);
    
    setTimeout(() => {
      const sequence = [
        { delay: 400, action: () => setVisibleMessages(1) },
        { delay: 1400, action: () => setShowTyping(true) },
        { delay: 2400, action: () => { setShowTyping(false); setVisibleMessages(2); } },
        { delay: 3800, action: () => setVisibleMessages(3) },
        { delay: 5200, action: () => setVisibleMessages(4) }
      ];

      sequence.forEach(({ delay, action }) => {
        setTimeout(action, delay);
      });
    }, 100);
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative bg-gradient-to-b from-emerald-50/40 via-white to-white">
      {/* Subtle modern background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-primary/10 via-emerald-100/30 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="hero-content-animate max-w-xl mx-auto lg:mx-0">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span>O assistente de agendamentos no WhatsApp</span>
              </div>
              
              {/* Main Headline - Fixed, No overlap */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-6">
                Sua agenda organizada no WhatsApp.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-500 to-teal-600 block mt-1">
                  Sem atrito. Sem faltas.
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-normal">
                Gerencie compromissos, envie lembretes automáticos anti-no-show e sincronize com seu calendário sem exigir que você ou seus clientes instalem nada.
              </p>
              
              {/* Feature Pills */}
              <div className="space-y-3.5 mb-8 text-left inline-block">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 text-primary-dark rounded-full p-1 flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-700 stroke-[2.5]" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    Lembretes automáticos 24h e 1h antes (redução drástica de faltas)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 text-primary-dark rounded-full p-1 flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-700 stroke-[2.5]" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    Integração com Google Calendar e Outlook em tempo real
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 text-primary-dark rounded-full p-1 flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-700 stroke-[2.5]" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    Comandos em linguagem natural e por áudio no WhatsApp
                  </span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  href="https://wa.me/?text=Olá!%20Quero%20testar%20o%20Aivy%20no%20meu%20WhatsApp"
                  className="text-base font-semibold px-8 py-3.5 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Testar Grátis no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleScrollToDemo}
                  className="text-base font-semibold px-6 py-3.5 border-gray-200 text-gray-700 hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all"
                >
                  Ver Demonstração
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-emerald-600" />
                  <span>Configuração em 1 minuto</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Sem necessidade de cartão</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span>+15.000 agendamentos</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - 3D iPhone with Interactive Preview */}
          <div className="lg:w-1/2 flex justify-center items-center relative">
            <div 
              className="phone-container relative cursor-pointer"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={restartChatAnimation}
              title="Clique para reiniciar a animação"
            >
              {/* Tooltip */}
              {showTooltip && (
                <div className="tooltip">
                  <div className="tooltip-content">
                    Clique para reiniciar a conversa
                  </div>
                  <div className="tooltip-arrow"></div>
                </div>
              )}

              {/* 3D iPhone Frame */}
              <div className="iphone-frame shadow-2xl">
                {/* iPhone body */}
                <div className="iphone-body">
                  {/* Screen */}
                  <div className="iphone-screen">
                    {/* Dynamic Island */}
                    <div className="dynamic-island"></div>
                    
                    {/* WhatsApp Interface */}
                    <div className="whatsapp-interface">
                      {/* Header */}
                      <div className="whatsapp-header">
                        <div className="contact-info">
                          <div className="avatar">
                            <Calendar className="w-5 h-5 text-emerald-700" />
                          </div>
                          <div className="contact-details">
                            <h3>Aivy Assistente</h3>
                            <span className="status">● online agora</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Chat Area */}
                      <div className="chat-area">
                        <div className="messages-container text-xs sm:text-sm">
                          {/* User Message */}
                          {visibleMessages >= 1 && (
                            <div className="message user-message message-animate">
                              <div className="message-bubble user-bubble">
                                <p>Aivy, marca uma reunião com a Dra. Mariana na quinta às 15h</p>
                                <span className="message-time">14:32 ✓✓</span>
                              </div>
                            </div>
                          )}
                          
                          {/* Typing Indicator */}
                          {showTyping && (
                            <div className="message bot-message">
                              <div className="typing-indicator">
                                <div className="typing-dots">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {/* Bot Response 1 */}
                          {visibleMessages >= 2 && (
                            <div className="message bot-message message-animate">
                              <div className="message-bubble bot-bubble">
                                <p className="font-semibold text-emerald-800 mb-1">Agendado com sucesso! ✅</p>
                                <div className="bg-emerald-50/80 rounded-lg p-2.5 my-1.5 border border-emerald-200/60 text-[11px] leading-relaxed">
                                  <p className="font-bold text-gray-800">📋 Reunião com Dra. Mariana</p>
                                  <p className="text-gray-600">🗓️ Quinta-feira, 15:00 - 16:00</p>
                                  <p className="text-gray-600">🔄 Sincronizado no Google Calendar</p>
                                </div>
                                <span className="message-time">14:32</span>
                              </div>
                            </div>
                          )}
                          
                          {/* Bot Response 2 */}
                          {visibleMessages >= 3 && (
                            <div className="message bot-message message-animate">
                              <div className="message-bubble bot-bubble">
                                <p>Configurei os lembretes automáticos:</p>
                                <p className="text-gray-600 mt-1">• 24h antes para você e Dra. Mariana</p>
                                <p className="text-gray-600">• 1h antes com confirmação de presença</p>
                                <span className="message-time">14:32</span>
                              </div>
                            </div>
                          )}
                          
                          {/* Bot Response 3 */}
                          {visibleMessages >= 4 && (
                            <div className="message bot-message message-animate">
                              <div className="message-bubble bot-bubble">
                                <p>Deseja adicionar o link do Google Meet ou alguma anotação?</p>
                                <span className="message-time">14:33</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* iPhone side buttons */}
                <div className="side-button volume-up"></div>
                <div className="side-button volume-down"></div>
                <div className="side-button power"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;