import React from "react";
import { RiTimer2Line } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

function Card({ title, descricao, preco, tempo, img }) {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition flex flex-col overflow-hidden">
     
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300 rounded-t-lg"
        />
        <p className="absolute top-2 right-2 bg-amber-500 text-white text-sm font-bold px-2 py-1 rounded-full shadow">
          {preco}
        </p>
      </div>

     
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl mb-2 font-playfair font-semibold">{title}</h2>
        <p className="mb-4 leading-relaxed flex-grow">{descricao}</p>
        <span className="mb-6  text-gray-600 text-left flex justify-between"> 
            <div className="flex items-center gap-1">
                <RiTimer2Line /> {tempo}
            </div>
            <div className="flex items-center gap-1">
             <FaStar color= "orange"/> <FaStar color= "orange"/> <FaStar color= "orange"/> <FaStar color= "orange" /> <FaStar color= "orange" />
            </div>

        </span>

        <button onClick={() => window.open("https://wa.me/13988658865?text=Olá!%20Esta%20mensagem%20é%20ilustrativa,%20apenas%20testando%20o%20botão.")}
        className="rounded-xl w-full py-3.5 bg-amber-500 text-white font-inter font-semibold hover:bg-amber-600 transition">
          Agendar Serviço
        </button>
      </div>
     
    </div>
  );
}

export default Card;
