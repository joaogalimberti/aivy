import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between pb-8 border-b border-gray-700">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-3 text-white font-bold text-2xl mb-4">
              <Calendar className="h-7 w-7" />
              <span>Aivy</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Aivy é um serviço SaaS desenvolvido para simplificar sua vida e otimizar sua produtividade.
              Tudo pelo WhatsApp, simples assim.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Produto</h3>
              <ul className="space-y-2">
                <li><a href="#funcionalidades" className="text-gray-400 hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#planos" className="text-gray-400 hover:text-white transition-colors">Planos</a></li>
                <li><a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={onOpenTerms}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Termos de uso
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenPrivacy}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Política de privacidade
                  </button>
                </li>
                <li>
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Suporte (WhatsApp)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Aivy. Todos os direitos reservados.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Contato: suporte@aivy.com.br
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;