import React from "react";
import { FaStar } from "react-icons/fa";
import { LuQuote } from "react-icons/lu";

function cardDepoimentos({ nome, mensagem, servico, img }) {
  return (
    <div className="bg-white hover:shadow-lg shadow-md p-4 w-80 rounded-md">
      <div className="">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
          </div>
          <LuQuote size={35} className="text-amber-100" />
        </div>

        <p className="italic text-gray-700 text-left pt-2"> "{mensagem}"</p>
      </div>

      <div className="flex items-center gap-3 pt-4">
        <img
          src={img}
          alt=""
          className="rounded-full w-12 h-12 object-cover flex-shrink-0"
        />
        <div className="text-left">
          <h3 className="font-semibold">{nome}</h3>
          <span className="text-gray-500 text-sm">{servico}</span>
        </div>
      </div>
    </div>
  );
}

export default cardDepoimentos;
