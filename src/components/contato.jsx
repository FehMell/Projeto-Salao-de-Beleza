import React, { useEffect, useState } from "react";

const apiKey = "AIzaSyBwfIHDThqvT8T_AXYF7_d70AKMaiv6UE4";

function Contato() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const endereco = "Alameda Campinas, 728";

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        endereco
      )}&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length > 0) {
          setLocation(data.results[0].geometry.location);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section id="contato">
      <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-center mb-6 pt-20">
        Entre em contato
      </h1>
      <p className="font-inter text-center mb-2 text-gray-800">
        Estamos aqui para cuidar da sua beleza. Entre em contato conosco e
        agende sua visita
      </p>
      <p className="font-inter text-center mb-2 text-gray-800">
        ao nosso salão
      </p>
      <div className="flex justify-between pt-10 pb-40 max-w-6xl mx-auto">
        <div>
          <h2 className="font-playfair font-semibold pb-5 text-2xl text-left">
            Envie uma mensagem
          </h2>
        </div>
        <div className="w-96 h-80">
          <h2 className="font-playfair font-semibold pb-5 text-2xl text-left">
            Nossa localização
          </h2>

          {location ? (
            <iframe
              title="Mapa"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0261255143937!2d-46.657679123631816!3d-23.56750516181994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c68bf04015%3A0xd891aa2c8549b2a4!2sAlameda%20Campinas%2C%20728%20-%20Sala%201201%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001404-200!5e0!3m2!1spt-BR!2sbr!4v1758395397085!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          ) : (
            <p>Carregando mapa...</p>
          )}

          <span className="text-sm text-gray-500">
            *Endereço fictício utilizado apenas para demonstrar a integração com
            a API*
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contato;
