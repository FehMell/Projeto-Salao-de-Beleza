import React from "react";

function Nav() {
  return (
    <div className="w-full bg-gray-50 p-4 fixed top-0 left-0 z-50">

      <nav className="flex items-center justify-between w-full px-4 md:px-8">
        <div>
          <a href="/" className="text-2xl md:text-3xl font-playfair font-semibold">
            Bella <span className="text-amber-500">Vitta </span>
          </a>
        </div>

        <div>
          <ul className="flex space-x-6 md:space-x-8 text-gray-800 font-semibold">
            <li className="hover:text-amber-500"> <a href="#inicio">Ínicio</a> </li>
            <li className="hover:text-amber-500"> <a href="#servicos">Serviços</a> </li>
            <li className="hover:text-amber-500"> <a href="#equipe">Equipe</a> </li>
            <li className="hover:text-amber-500"> <a href="#depoimentos">Depoimentos</a> </li>
            <li className="hover:text-amber-500"> <a href="">Contato</a> </li>
          </ul>
        </div>

        <button onClick={() => window.open("https://wa.me/5513988658865?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20(Essa%20mensagem%20é%20ilustrativa)")}
        className="bg-amber-500 text-white rounded-full px-5 py-2 text-base font-medium hover:bg-amber-600 transform hover:scale-110 duration-500">
          Agendar
        </button>
      </nav>
    </div>
  );
}

export default Nav;