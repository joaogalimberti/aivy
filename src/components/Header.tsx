import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import Button from './common/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' 
          : 'bg-white/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center space-x-2.5 text-gray-900 font-bold text-2xl tracking-tight group"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection('hero');
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-primary-light flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            <Calendar className="h-5 w-5" />
          </div>
          <span>Aivy</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-gray-600">
          <a
            href="#como-funciona"
            className="hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('como-funciona');
            }}
          >
            Como Funciona
          </a>
          <a
            href="#funcionalidades"
            className="hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('funcionalidades');
            }}
          >
            Recursos
          </a>
          <a
            href="#vantagens"
            className="hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('vantagens');
            }}
          >
            Vantagens
          </a>
          <a
            href="#planos"
            className="hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('planos');
            }}
          >
            Planos
          </a>
          <a
            href="#depoimentos"
            className="hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('depoimentos');
            }}
          >
            Depoimentos
          </a>
          <a
            href="#faq"
            className="hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('faq');
            }}
          >
            FAQ
          </a>
          <Button 
            variant="primary"
            href="https://wa.me/?text=Olá!%20Quero%20testar%20o%20Aivy%20no%20meu%20WhatsApp"
            className="text-sm px-5 py-2.5 shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/30"
          >
            Testar no WhatsApp
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-gray-100 bg-white/95 backdrop-blur-lg shadow-xl py-5 px-6">
          <nav className="flex flex-col space-y-4 text-base font-medium text-gray-700">
            <a
              href="#como-funciona"
              className="py-1 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('como-funciona');
              }}
            >
              Como Funciona
            </a>
            <a
              href="#funcionalidades"
              className="py-1 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('funcionalidades');
              }}
            >
              Recursos
            </a>
            <a
              href="#vantagens"
              className="py-1 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('vantagens');
              }}
            >
              Vantagens
            </a>
            <a
              href="#planos"
              className="py-1 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('planos');
              }}
            >
              Planos
            </a>
            <a
              href="#depoimentos"
              className="py-1 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('depoimentos');
              }}
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              className="py-1 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('faq');
              }}
            >
              FAQ
            </a>
            <div className="pt-2">
              <Button 
                variant="primary" 
                fullWidth
                href="https://wa.me/?text=Olá!%20Quero%20testar%20o%20Aivy%20no%20meu%20WhatsApp"
              >
                Testar no WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};


export default Header;