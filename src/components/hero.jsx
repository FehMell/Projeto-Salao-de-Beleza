import React from "react";
import { FiCalendar } from "react-icons/fi";

function Hero() {
  return (
    // Adicione a classe full-width aqui
    <div className="full-width">
      <div className="relative w-full h-[70vh] min-h-[500px] pt-16">
        <img
          src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col justify-center h-full items-center px-8 md:px-16 text-white text-center">
          <h1 className="font-playfair font-semibold text-5xl md:text-7xl">Sua Beleza</h1>
          <h1 className="text-amber-400 font-playfair font-semibold text-5xl md:text-7xl">
            Nossa Paixão
          </h1>
          <p className="mt-8 text-lg md:text-xl max-w-2xl font-inter">
            Transforme sua beleza em nosso espaço exclusivo. Profissionais
            especializados e tratamentos personalizados para você.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="font-semibold p-3 px-6 bg-amber-500 rounded-full text-white flex items-center justify-center gap-2 hover:bg-amber-600 transform transition hover:scale-110 duration-500">
              <FiCalendar size={20} /> Agendar Horário
            </button>
            <button className="font-semibold p-3 px-6 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-black transform transition hover:scale-110 duration-500">
              Ver serviços
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;