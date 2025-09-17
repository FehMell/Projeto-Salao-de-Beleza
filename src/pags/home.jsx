import React from "react";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Servicos from "../components/servicos"
import Footer from "../components/footer"

function Home() {
  return (
    <div className="w-full">
      <Nav />
      <Hero />
      <Servicos />
      <Footer />
    </div>
  );
}

export default Home;
