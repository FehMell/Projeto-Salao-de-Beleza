import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-gray-800 text-white pt-10 pb-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 items-start">
          
          
          <div className="md:col-span-2 max-w-md text-left">
            <h2 className="text-2xl md:text-3xl font-playfair font-semibold">
              Bella <span className="text-amber-500">Vitta</span>
            </h2>
            <p className="mt-4 text-gray-300">
              Transformando sua beleza com carinho, técnica e produtos de
              qualidade premium.
            </p>
            <p className="text-gray-300">
              Mais de 5 anos cuidando da autoestima e bem-estar das nossas
              clientes.
            </p>
            <div className="py-4 flex gap-3">
              <button className="bg-amber-500 rounded-full p-2 hover:bg-amber-600 ">
                <FaInstagram size={22} />
              </button>
              <button className="bg-amber-500 rounded-full p-2 hover:bg-amber-600">
                <FaWhatsapp size={22} />
                </button>
            </div>
          </div>

         
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-amber-600">Início</a></li>
              <li><a href="#servicos" className="hover:text-amber-600">Serviços</a></li>
              <li><a href="#equipe" className="hover:text-amber-600">Equipe</a></li>
              <li><a href="#depoimentos" className="hover:text-amber-600">Depoimentos</a></li>
              <li><a href="#" className="hover:text-amber-600">Contato</a></li>
            </ul>
          </div>

          
          <div className="text-left">
            <h3 className="font-semibold mb-2 text-sm">Contato</h3>
            <div className="space-y-2 text-gray-300 text-xs">
              <p className="flex items-center gap-2">
                <IoLocationOutline size={16} /> Rua Exemplo, 123 <br />
                Vila Madalena - SP
              </p>
              <p className="flex items-center gap-2">
                <BsTelephone size={14} /> (11) 99999-9999
              </p>
              <p className="flex items-center gap-2">
                <MdOutlineMailOutline size={15} /> mell39654@gmail.com
              </p>
            </div>

            <h3 className="pb-2 pt-4 font-semibold text-sm">Horários</h3>
            <div className="text-xs">
              <p className="pb-1">Ter - Sex: 9h às 19h </p>
              <p>Sábado: 8h às 17h</p>
            </div>
          </div>

        </div>

        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            Desenvolvido por Fernanda Mell © 2025 Bella Vitta. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
