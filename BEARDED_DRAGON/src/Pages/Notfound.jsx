import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";

function Notfound() {
  return (
    <div className="flex min-h-screen flex-col bg-dragon-black">
      <NavBar />

      <main className="flex flex-1 items-center justify-center border-t border-[#3A2920] px-6 py-16 sm:py-20">
        <div className="w-full max-w-3xl text-center">

          <span className="text-8xl font-black leading-none text-dragon-beige sm:text-9xl">
            404
          </span>

          <div className="mx-auto mt-6 h-1 w-16 bg-gradient-to-r from-dragon-brown to-dragon-beige" />

          <h1 className="mt-8 text-3xl font-black uppercase text-dragon-white sm:text-4xl">
            Página não encontrada
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-stone-400">
            Parece que você se perdeu pelo caminho.
            A página que você está procurando não existe ou foi movida.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/" variant="primary">
              Voltar ao início
            </Button>

            <Button href="/faq" variant="light">
              Ver perguntas frequentes
            </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Notfound;
