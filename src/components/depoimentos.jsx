import React from "react";

function Depoimentos() {
  return (
    <section id="depoimentos" className="pt-20 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-center mb-6">
        O Que Nossas Clientes Dizem
      </h1>
      <p className="text-gray-800">
        A satisfação das nossas clientes é nossa maior recompensa. Veja o que
        elas têm a dizer
      </p>
      <p className="text-gray-800">sobre nossa experiência.</p>

      <div className="bg-amber-500 p-10 max-w-6xl mx-auto text-center rounded-xl">
        <h1 className="text-4xl font-semibold mb-2 font-playfair text-white">
          Pronta para sua Transformação?
        </h1>
        <p className="mb-4 text-white font-inter text-lg pb-3">
          Junte-se às centenas de clientes satisfeitas e descubra sua melhor
          versão.
        </p>
        <button onClick={() => window.open("https://wa.me/5513988658865?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20(Essa%20mensagem%20é%20ilustrativa)")}
        className="bg-white text- text-amber-600 font-semibold px-7 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Agendar Meu Horário
        </button>
      </div>
    </section>
  );
}

export default Depoimentos;
