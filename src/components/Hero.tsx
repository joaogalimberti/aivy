import React, { useEffect, useState } from 'react';
import Button from './common/Button';
import { Check, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const headlines = [
    "Agende seus compromissos no WhatsApp.",
    "Nunca mais esqueça uma reunião.",
    "Receba lembretes automáticos.",
    "Organize sua agenda com IA."
  ];

  // Chat animation sequence
  useEffect(() => {
    const sequence = [
      { delay: 1000, action: () => setVisibleMessages(1) },
      { delay: 2500, action: () => setShowTyping(true) },
      { delay: 3500, action: () => { setShowTyping(false); setVisibleMessages(2); } },
      { delay: 5000, action: () => setVisibleMessages(3) },
      { delay: 6500, action: () => setVisibleMessages(4) }
    ];

    const timers = sequence.map(({ delay, action }) => 
      setTimeout(action, delay)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  // Dynamic headline rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(interval);
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
        { delay: 500, action: () => setVisibleMessages(1) },
        { delay: 1500, action: () => setShowTyping(true) },
        { delay: 2500, action: () => { setShowTyping(false); setVisibleMessages(2); } },
        { delay: 4000, action: () => setVisibleMessages(3) },
        { delay: 5500, action: () => setVisibleMessages(4) }
      ];

      sequence.forEach(({ delay, action }) => {
        setTimeout(action, delay);
      });
    }, 100);
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Enhanced Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="organic-blob blob-1"></div>
        <div className="organic-blob blob-2"></div>
        <div className="organic-blob blob-3"></div>
        <div className="organic-blob blob-4"></div>
        <div className="organic-blob blob-5"></div>
        <div className="organic-blob blob-6"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="hero-content-animate">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent min-h-[200px] md:min-h-[240px] lg:min-h-[280px]">
                <span className="block mb-2">Seu novo assistente</span>
                <span className="block mb-2">pessoal no WhatsApp.</span>
                <div className="dynamic-headline-container">
                  {headlines.map((headline, index) => (
                    <span
                      key={index}
                      className={`dynamic-headline ${
                        index === currentHeadlineIndex ? 'active' : ''
                      }`}
                    >
                      {headline}
                    </span>
                  ))}
                </div>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-fadeIn">
                Transforme seu WhatsApp em uma ferramenta de produtividade com IA que entende sua linguagem natural.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-center lg:justify-start animate-slideInLeft">
                  <div className="bg-primary/10 rounded-full p-1 mr-3">
                    <Check className="text-primary w-5 h-5" />
                  </div>
                  <p className="text-gray-700 font-medium">Agendamentos ilimitados (Plano PRO)</p>
                </div>
                <div className="flex items-center justify-center lg:justify-start animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                  <div className="bg-primary/10 rounded-full p-1 mr-3">
                    <Check className="text-primary w-5 h-5" />
                  </div>
                  <p className="text-gray-700 font-medium">Lembretes automáticos inteligentes</p>
                </div>
                <div className="flex items-center justify-center lg:justify-start animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                  <div className="bg-primary/10 rounded-full p-1 mr-3">
                    <Check className="text-primary w-5 h-5" />
                  </div>
                  <p className="text-gray-700 font-medium">IA que entende sua linguagem</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="primary"
                  href="https://wa.me/?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Aivy"
                  className="text-base md:text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 pulse-button"
                >
                  Começar Agora
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleScrollToDemo}
                  className="text-base md:text-lg px-8 py-4 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover-lift"
                >
                  Ver como funciona
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Content - Enhanced 3D iPhone with Tooltip */}
          <div className="lg:w-1/2 flex justify-center items-center relative">
            <div 
              className="phone-container relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={restartChatAnimation}
            >
              {/* Tooltip */}
              {showTooltip && (
                <div className="tooltip">
                  <div className="tooltip-content">
                    Veja como é fácil agendar
                  </div>
                  <div className="tooltip-arrow"></div>
                </div>
              )}

              {/* 3D iPhone Frame */}
              <div className="iphone-frame">
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
                            <Calendar className="w-6 h-6" />
                          </div>
                          <div className="contact-details">
                            <h3>Aivy</h3>
                            <span className="status">online</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Chat Area */}
                      <div className="chat-area">
                        <div className="messages-container">
                          {/* User Message */}
                          {visibleMessages >= 1 && (
                            <div className="message user-message message-animate">
                              <div className="message-bubble user-bubble">
                                <p>Marca pra mim uma reunião dia 10 às 14h</p>
                                <span className="message-time">10:25 ✓✓</span>
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
                                <p>Perfeito! Agendei sua reunião para 10/06 às 14h.</p>
                                <span className="message-time">10:25</span>
                              </div>
                            </div>
                          )}
                          
                          {/* Bot Response 2 */}
                          {visibleMessages >= 3 && (
                            <div className="message bot-message message-animate">
                              <div className="message-bubble bot-bubble">
                                <p>Você receberá lembretes automaticamente:</p>
                                <p>• 1 dia antes</p>
                                <p>• 1 hora antes</p>
                                <span className="message-time">10:25</span>
                              </div>
                            </div>
                          )}
                          
                          {/* Bot Response 3 */}
                          {visibleMessages >= 4 && (
                            <div className="message bot-message message-animate">
                              <div className="message-bubble bot-bubble">
                                <p>Precisa de mais alguma coisa?</p>
                                <span className="message-time">10:26</span>
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