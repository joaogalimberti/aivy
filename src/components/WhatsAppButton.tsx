import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/?text=Olá!%20Quero%20testar%20o%20Aivy%20no%20meu%20WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20c05a] text-white font-semibold text-sm px-4 py-3 rounded-full shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:-translate-y-1 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-white flex-shrink-0" />
      <span className="hidden sm:block">Falar no WhatsApp</span>
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20" />
    </a>
  );
};

export default WhatsAppButton;