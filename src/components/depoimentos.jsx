import React from "react";
import CardDepoimentos from "./cardDepoimentos";

const depoimentos = [
  {
    id: 1,
    nome: "Carla Mendes",
    servico: "Coloração premium",
    mensagem:
      "Amei o resultado! A Marina é uma artista, meu cabelo ficou exatamente como eu sonhava",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    id: 2,
    nome: "Fernanda Lima",
    servico: "Limpeza de pele",
    mensagem:
      "Atendimento impecável! Minha pele nunca esteve tão bonita e saudável.",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },

  {
    id: 3,
    nome: "Beatriz Santos",
    servico: "Corte + Escova",
    mensagem:
      "Ambiente acolhedor e profissionais super qualificados. Recomendo!",
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
  },
];

function Depoimentos() {
  return (
    <section id="depoimentos" className="pt-20 bg-gray-50 pb-20">
      <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-center mb-6">
        O Que Nossas Clientes Dizem
      </h1>
      <p className="text-gray-800">
        A satisfação das nossas clientes é nossa maior recompensa. Veja o que
        elas têm a dizer
      </p>
      <p className="text-gray-800">sobre nossa experiência.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto pb-12 pt-20">
        {depoimentos.map((depoimento) => (
          <CardDepoimentos
            key={depoimento.id}
            nome={depoimento.nome}
            servico={depoimento.servico}
            mensagem={depoimento.mensagem}
            img={depoimento.img}
          />
        ))}
      </div>

      <div className="bg-amber-500 p-10 max-w-6xl mx-auto text-center rounded-xl">
        <h1 className="text-4xl font-semibold mb-2 font-playfair text-white">
          Pronta para sua Transformação?
        </h1>
        <p className="mb-4 text-white font-inter text-lg pb-3">
          Junte-se às centenas de clientes satisfeitas e descubra sua melhor
          versão.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://wa.me/5513988658865?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20(Essa%20mensagem%20é%20ilustrativa)"
            )
          }
          className="bg-white text-amber-600 font-semibold px-7 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Agendar Meu Horário
        </button>
      </div>
    </section>
  );
}

export default Depoimentos;
