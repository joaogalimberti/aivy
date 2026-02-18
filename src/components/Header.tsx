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
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center space-x-2 text-primary font-bold text-2xl"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection('hero');
          }}
        >
          <Calendar className="h-8 w-8" />
          <span>Aivy</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#como-funciona"
            className="font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('como-funciona');
            }}
          >
            Como Funciona
          </a>
          <a
            href="#funcionalidades"
            className="font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('funcionalidades');
            }}
          >
            Funcionalidades
          </a>
          <a
            href="#planos"
            className="font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('planos');
            }}
          >
            Planos
          </a>
          <a
            href="#depoimentos"
            className="font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('depoimentos');
            }}
          >
            Depoimentos
          </a>
          <Button 
            variant="primary"
            href="#comece-agora"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('comece-agora');
            }}
          >
            Comece Agora
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#como-funciona"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('como-funciona');
              }}
            >
              Como Funciona
            </a>
            <a
              href="#funcionalidades"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('funcionalidades');
              }}
            >
              Funcionalidades
            </a>
            <a
              href="#planos"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('planos');
              }}
            >
              Planos
            </a>
            <a
              href="#depoimentos"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('depoimentos');
              }}
            >
              Depoimentos
            </a>
            <Button 
              variant="primary" 
              fullWidth
              href="#comece-agora"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('comece-agora');
              }}
            >
              Comece Agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;