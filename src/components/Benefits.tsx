import React from 'react';
import { Clock, Calendar, Award } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Illustration */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/10 rounded-full"></div>
              
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Pessoa sorrindo usando celular" 
                className="rounded-2xl shadow-lg relative z-10 max-w-full h-auto"
              />
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
            </div>
          </div>
          
          {/* Right side - Benefits */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformamos sua produtividade e organização
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              É como ter uma secretária no seu WhatsApp, 24h por dia.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Economize tempo</h3>
                  <p className="text-gray-700">
                    Chega de perder tempo com planilhas e agendas. Organize tudo com apenas uma mensagem.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Nunca mais perca um compromisso</h3>
                  <p className="text-gray-700">
                    Receba lembretes automáticos e chegue sempre no horário certo para suas reuniões.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Transmita profissionalismo</h3>
                  <p className="text-gray-700">
                    Impressione clientes e colegas com um sistema organizado de agendamento e lembretes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;