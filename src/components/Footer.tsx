import React from 'react';
import { MessageCircle, Calendar, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container pt-16 pb-8">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 pb-12 border-b border-gray-800/70">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-emerald-400 flex items-center justify-center shadow-md shadow-primary/30">
                <Calendar className="w-4.5 h-4.5 text-white" style={{ width: '18px', height: '18px' }} />
              </div>
              <span className="text-xl font-bold tracking-tight">Aivy</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              O assistente de agendamentos no WhatsApp. Elimine faltas, organize sua agenda e impressione seus clientes — sem apps extras.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Produto</h3>
              <ul className="space-y-2.5">
                {[
                  { label: 'Como Funciona', href: '#como-funciona' },
                  { label: 'Recursos', href: '#funcionalidades' },
                  { label: 'Vantagens', href: '#vantagens' },
                  { label: 'Planos', href: '#planos' },
                  { label: 'Depoimentos', href: '#depoimentos' },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Suporte</h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#faq"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Suporte via WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:suporte@aivy.com.br"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    suporte@aivy.com.br
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2.5">
                <li>
                  <button
                    onClick={onOpenTerms}
                    className="text-gray-400 text-sm hover:text-white transition-colors text-left"
                  >
                    Termos de Uso
                  </button>
                </li>
                <li>
                  <button
                    onClick={onOpenPrivacy}
                    className="text-gray-400 text-sm hover:text-white transition-colors text-left"
                  >
                    Política de Privacidade
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Aivy. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <MessageCircle className="w-4 h-4" />
            <span>Feito com ❤️ para profissionais brasileiros</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;