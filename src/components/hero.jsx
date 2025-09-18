import React from "react";
import { FiCalendar } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";


function Hero() {
  return (
    <section className="w-screen relative h-[70vh] min-h-[500px] pt-16">
    
      <img
        src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
     
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      
      <div className="relative z-10 flex flex-col justify-center h-full items-center px-4 md:px-16 text-white text-center">
        <p className="text-white bg-amber-400 rounded-full backdrop-blur-md bg-opacity-20 p-2 font-semibold text-sm flex items-center gap-1 border border-amber-400/30 mb-8 mt-10"> <LiaCertificateSolid size = {22} className="text-amber-400" /> Salão Premium de Beleza</p>
        <h1 className="font-playfair font-semibold text-5xl md:text-7xl">
          Sua Beleza
        </h1>
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
        <div  className="flex items-center gap-20 py-20">
          <div>
          <h2 className="text-amber-400 text-4xl font-bold">500+</h2>
          <p className="py-2 text-sm text-gray-50">Clientes satisfeitos</p>
          </div>
          <div>
            <h2 className="text-amber-400 text-4xl font-bold flex items-center gap-1"> <FaRegStar /> 4.9</h2>
            <p className="py-2 text-sm text-gray-50"> Avaliação Média</p>
          </div>
          <div>
            <h2 className="text-amber-400 text-4xl font-bold">5</h2>
            <p className="py-2 text-sm text-gray-50">Anos de Experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
