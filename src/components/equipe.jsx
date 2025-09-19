import React from "react";
import CardEquipe from "./cardEquipe";


const funcionarios = [
    {
        id: 1,
        nome: "Marina Silva",
        cargo: "Colorista Expert",
        descricao: "Especialista em coloração e técnicas avançadas de cabelo",
        experiencia: "8 anos de experiência",
        nota: "4.9",
        img: "https://images.pexels.com/photos/8638548/pexels-photo-8638548.jpeg",
      
    },

    {
        id: 2,
        nome: "Ana Carolina",
        cargo: "Estética Facial",
        descricao: "Especializada em tratamentos faciais e rejuvenescimento",
        experiencia: "6 anos de experiência",
        nota: "4.8",
        img: "https://images.pexels.com/photos/32508308/pexels-photo-32508308.jpeg",
    },

    {
        id: 3,
        nome: "Christian Goes",
        cargo: "Hair Stylist",
        descricao: "Expert em cortes modernos e penteados para eventos",
        experiencia: "5 anos de experiência",
        nota: "5.0",
        img: "https://images.pexels.com/photos/32936116/pexels-photo-32936116.jpeg",
    },

]

function Equipe(){
    return(
        <section id ="equipe" className="bg-white">
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-center mb-6 pt-20">Nossa Equipe</h1>
            <p className="font-inter text-center mb-2 text-gray-800"> Profissionais altamente qualificados e apaixonados por beleza, prontos para</p>
            <p className="font-inter text-center mb-2 text-gray-800">proporcionar a melhor experiência para você.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-6xl py-10">
                {funcionarios.map((funcionario) =>(
                <CardEquipe 
                key = {funcionario.id}
                nome = {funcionario.nome}
                cargo = {funcionario.cargo}
                descricao = {funcionario.descricao}
                experiencia = {funcionario.experiencia}
                nota = {funcionario.nota}
                img = {funcionario.img}
                />
                
                ))}
            </div>

           
            
        </section>
    );
}

export default Equipe;