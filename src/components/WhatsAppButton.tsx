import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="#" 
      className="fixed bottom-6 right-6 bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#128C7E] transition-colors z-40 whatsapp-pulse"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;