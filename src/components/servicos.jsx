import React from "react";
import Card from "./card"; 

const products = [
  {
    title: "Corte + Escova",
    id: 1,
    descricao: "Corte personalizado com escova modeladora profissional",
    preco: "R$ 120",
    tempo: "1h30min",
    img: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg",
  },
  {
    title: "Coloração Premium",
    id: 2,
    descricao: "Coloração completa com produtos de alta qualidade",
    preco: "R$ 280",
    tempo: "3h",
    img: "https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg",
  },
  {
    title: "Tratamento Capilar",
    id: 3,
    descricao: "Hidratação profunda e reconstrução capilar",
    preco: "R$ 180",
    tempo: "2h",
    img: "https://images.pexels.com/photos/10427813/pexels-photo-10427813.jpeg",
  },
  {
    title: "Limpeza de Pele",
    id: 4,
    descricao: "Limpeza profunda com extração e hidratação",
    preco: "R$ 150",
    tempo: "1h30min",
    img: "https://images.pexels.com/photos/10573258/pexels-photo-10573258.jpeg",
  },
  {
    title: "Massagem relaxante",
    id: 5,
    descricao: "Massagem corporal com óleos essenciais",
    preco: "R$ 200",
    tempo: "1h",
    img: "https://images.pexels.com/photos/8312867/pexels-photo-8312867.jpeg",
  },
  {
    title: "Manicure + Pedicure",
    id: 6,
    descricao: "Cuidado completo para mãos e pés",
    preco: "R$ 80",
    tempo: "1h30",
    img: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg",
  },
];

function Servicos() {
  return (
    <section className="w-screen bg-gray-50 px-4 md:px-16 py-16">
      <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-center mb-6">
        Nossos Serviços
      </h1>
      <p className="font-inter text-center mb-2">
        Oferecemos uma gama completa de serviços de beleza com produtos premium
      </p>
      <p className="font-inter text-center mb-10">
        e técnicas inovadoras para realçar sua beleza natural.
      </p>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-6xl">
  {products.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      descricao={item.descricao}
      preco={item.preco}
      tempo={item.tempo}
      img={item.img}
    />
  ))}
</div>
    </section>
  );
}

export default Servicos;
