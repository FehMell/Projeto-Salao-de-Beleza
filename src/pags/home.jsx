import React from "react";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Servicos from "../components/servicos"
import Footer from "../components/footer"
import Equipe from "../components/equipe"
import Depoimentos from "../components/depoimentos"
import Contato from "../components/contato"

function Home() {
  return (
    <div className="w-full">
      <Nav />
      <Hero />
      <Servicos />
      <Equipe />
      <Depoimentos />
      <Contato />
      <Footer />
    </div>
  );
}

export default Home;
