import React from "react";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Servicos from "../components/servicos"
import Footer from "../components/footer"
import Equipe from "../components/equipe"
import Depoimentos from "../components/depoimentos"

function Home() {
  return (
    <div className="w-full">
      <Nav />
      <Hero />
      <Servicos />
      <Equipe />
      <Depoimentos />
      <Footer />
    </div>
  );
}

export default Home;
