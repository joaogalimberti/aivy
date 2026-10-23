import React, { useState, useEffect, useRef } from 'react';
import { Send, Check, CheckCheck, Calendar } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read';
  isTyping?: boolean;
}

const Demo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messageIdCounter, setMessageIdCounter] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const simulateTyping = (callback: () => void, delay: number = 2000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const addMessage = (text: string, isUser: boolean, status: 'sent' | 'delivered' | 'read' = 'sent') => {
    const newMessage: Message = {
      id: messageIdCounter,
      text,
      isUser,
      timestamp: getCurrentTime(),
      status: isUser ? status : undefined
    };
    
    setMessages(prev => [...prev, newMessage]);
    setMessageIdCounter(prev => prev + 1);
    
    // Update message status for user messages
    if (isUser) {
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg
        ));
      }, 500);
      
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === newMessage.id ? { ...msg, status: 'read' } : msg
        ));
      }, 1000);
    }
  };

  const generateBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('reunião') || lowerMessage.includes('meeting') || lowerMessage.includes('encontro')) {
      return `Perfeito! Agendei sua reunião conforme solicitado.

Você receberá lembretes automaticamente:
• 1 dia antes
• 1 hora antes
• 15 minutos antes

Precisa de mais alguma coisa?`;
    } else if (lowerMessage.includes('lembrete') || lowerMessage.includes('lembrar')) {
      return `Entendi! Criei um lembrete para você.

Vou te avisar no horário certo para que você não esqueça.

Posso ajudar com mais alguma coisa?`;
    } else if (lowerMessage.includes('cancelar') || lowerMessage.includes('desmarcar')) {
      return `Sem problemas! Cancelei o compromisso solicitado.

Todos os lembretes relacionados também foram removidos.

Há mais alguma coisa que posso fazer por você?`;
    } else if (lowerMessage.includes('agenda') || lowerMessage.includes('compromissos')) {
      return `Aqui está sua agenda:

📅 Hoje:
• 14:00 - Reunião de equipe
• 16:30 - Call com cliente

📅 Amanhã:
• 09:00 - Apresentação do projeto

Posso ajudar com mais alguma coisa?`;
    } else {
      return `Pronto! Anotei sua mensagem.

Como seu assistente de agenda no WhatsApp, posso te ajudar a:
• Marcar reuniões e atendimentos
• Enviar lembretes automáticos
• Consultar e organizar sua agenda
• Cancelar ou reagendar compromissos

Qual compromisso você gostaria de marcar agora?`;
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addMessage(userMessage, true);
    setInputValue('');

    // Simulate bot response
    simulateTyping(() => {
      const botResponse = generateBotResponse(userMessage);
      addMessage(botResponse, false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const exampleMessages = [
    "Agenda o João na terça às 10h",
    "Me lembra da consulta amanhã às 8h",
    "Cancela a reunião de sexta",
    "Quais são meus compromissos dessa semana?"
  ];

  const handleExampleClick = (example: string) => {
    setInputValue(example);
    inputRef.current?.focus();
  };

  return (
    <section id="como-funciona" className="section bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="demo-blob demo-blob-1"></div>
        <div className="demo-blob demo-blob-2"></div>
        <div className="demo-blob demo-blob-3"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary/80 bg-primary/10 px-4 py-1.5 rounded-full mb-4">
            Demonstração ao vivo
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Experimente como é simples agendar
          </h2>
          <p className="text-lg text-gray-500 font-normal">
            Digite uma tarefa ou compromisso abaixo. O Aivy responde como faria pelo WhatsApp de verdade.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* WhatsApp Mockup */}
          <div className="whatsapp-mockup">
            {/* Header */}
            <div className="whatsapp-header">
              <div className="flex items-center">
                <div className="avatar-container">
                  <div className="avatar">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="online-indicator"></div>
                </div>
                <div className="contact-info">
                  <h3 className="contact-name">Aivy Assistente</h3>
                  <p className="contact-status">online</p>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="messages-area">
              <div className="messages-container">
                {messages.length === 0 && (
                  <div className="welcome-message">
                    <div className="welcome-bubble">
                      <p>👋 Olá! Sou o Aivy, seu assistente de agendamentos.</p>
                      <p>Manda o compromisso que quer organizar e já resolvo pra você!</p>
                      <span className="message-time">{getCurrentTime()}</span>
                    </div>
                  </div>
                )}

                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`message ${message.isUser ? 'user-message' : 'bot-message'} message-animate`}
                  >
                    <div className={`message-bubble ${message.isUser ? 'user-bubble' : 'bot-bubble'}`}>
                      <p className="message-text">{message.text}</p>
                      <div className="message-footer">
                        <span className="message-time">{message.timestamp}</span>
                        {message.isUser && (
                          <div className="message-status">
                            {message.status === 'sent' && <Check className="w-4 h-4 text-gray-400" />}
                            {message.status === 'delivered' && <CheckCheck className="w-4 h-4 text-gray-400" />}
                            {message.status === 'read' && <CheckCheck className="w-4 h-4 text-blue-500" />}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
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

                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="demo-input-container">
            <div className="demo-input-wrapper">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua tarefa aqui... (ex: Marca uma reunião dia 15 às 10h)"
                className="demo-input"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="send-button"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Example Messages */}
          <div className="example-messages">
            <p className="example-title">✨ Tente esses exemplos:</p>
            <div className="example-buttons">
              {exampleMessages.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="example-button"
                  disabled={isTyping}
                >
                  "{example}"
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;