import React from "react";

function Espaco(){
    return(
        <section id ="espaco">
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold pt-20">
              Conheça nosso espaço de
            </h1>
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold pb-5">
              Atendimento
            </h1>
            <p className="font-inter mb-2 text-gray-800">
              Um espaço projetado para oferecer conforto aos nossos clientes, equipado com os últimos
            </p>
            <p className="font-inter mb-10 text-gray-800">
              recursos em tecnologia
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-2 max-w-6xl mx-auto">
                <img 
                  className="shadow-lg max-w-[360px] h-64 object-cover"
                  src="https://images.pexels.com/photos/7518731/pexels-photo-7518731.jpeg"  
                  alt="Barbearia 1" 
                />
                <img 
                  className="shadow-lg max-w-[360px] h-64 object-cover"
                  src="https://images.pexels.com/photos/7518700/pexels-photo-7518700.jpeg?_gl=1*nt0mn1*_ga*NTY3NzA3OTA1LjE3NTgyMTE3MTU.*_ga_8JE65Q40S6*czE3NTg3NDMyNDYkbzUkZzEkdDE3NTg3NDQ0OTQkajQyJGwwJGgw"  
                  alt="Barbearia 2" 
                />
                <img 
                  className="shadow-lg max-w-[360px] h-64 object-cover"
                  src="https://images.pexels.com/photos/7518736/pexels-photo-7518736.jpeg"  
                  alt="Barbearia 3" 
                />
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-2 max-w-6xl mx-auto mt-2 pb-20">
                <img 
                    className="shadow-lg max-w-[180px] h-64 object-cover"
                    src="https://images.pexels.com/photos/7518742/pexels-photo-7518742.jpeg"
                    alt="Barbearia 4" 
                />
                <img 
                    className="shadow-lg max-w-[400px] h-64 object-cover" 
                    src="https://images.pexels.com/photos/7518729/pexels-photo-7518729.jpeg"
                    alt="Barbearia 5" 
                />
                <img 
                    className="max-w-[170px] h-64 object-cover"
                    src="https://images.pexels.com/photos/7518741/pexels-photo-7518741.jpeg"
                    alt="Barbearia 6" 
                />
                <img 
                    className="max-w-[170px] h-64 object-cover"
                    src="https://images.pexels.com/photos/7518744/pexels-photo-7518744.jpeg"
                    alt="Barbearia 7" 
                />
                <img 
                    className="max-w-[170px] h-64 object-cover"
                    src="https://images.pexels.com/photos/7518760/pexels-photo-7518760.jpeg?_gl=1*1jovzu4*_ga*NTY3NzA3OTA1LjE3NTgyMTE3MTU.*_ga_8JE65Q40S6*czE3NTg3NDMyNDYkbzUkZzEkdDE3NTg3NDY5NTUkajQ2JGwwJGgw"
                    alt="Barbearia 8" 
                />
            </div>
        </section>
    );
}
export default Espaco;