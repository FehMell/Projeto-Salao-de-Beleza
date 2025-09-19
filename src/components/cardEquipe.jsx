import React from "react";
import { FaStar } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";

function CardEquipe({ nome, cargo, nota, experiencia, img, descricao }) {
  return (
    <div className="border border-white bg-gray-50 rounded-lg   transition flex flex-col overflow-hidden  relative">
      <div className="relative">
        <img
          src={img}
          alt=""
          className="h-80 w-full object-cover hover:scale-105 transition-transform duration-300 rounded-t-lg"
        />
        <p className="absolute top-2 right-2 bg-amber-500 text-white text-sm font-bold px-2 py-1 rounded-full shadow flex items-center gap-1">
          {" "}
          <FaStar />
          {nota}
        </p>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-2xl mb-2 font-playfair font-semibold">{nome}</h2>
        <h3 className="mb-2 leading-relaxed flex-grow text-amber-600 font-semibold flex items-center gap-1 justify-center">
          {" "}
          <LiaCertificateSolid size={19} />
          {cargo}
        </h3>
        <h3 className="mb-4 leading-relaxed flex-grow">{descricao}</h3>
        <span className="mb-6  text-gray-600">{experiencia}</span>
      </div>
    </div>
  );
}

export default CardEquipe;
