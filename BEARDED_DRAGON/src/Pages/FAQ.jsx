import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import faqData from "../assets/Data/faqData";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-dragon-white text-dragon-black">
      <NavBar />

      {/* CABEÇALHO */}

      <section className="border-t border-[#3A2920] bg-dragon-black py-16 sm:py-20">
        <div className="mx-auto w-[92%] max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-dragon-beige">
            Tire suas dúvidas
          </span>

          <h1 className="mt-4 text-5xl font-black uppercase leading-tight text-dragon-white sm:text-6xl md:text-7xl">
            Perguntas
            <span className="block text-dragon-beige">
              Frequentes
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-stone-300">
            Reunimos algumas das principais dúvidas sobre a Dragão Barbado,
            nossos serviços e nossos atendimentos.
          </p>
        </div>
      </section>

      {/* PERGUNTAS */}

      <main className="mx-auto w-[92%] max-w-4xl border-x border-[#E3D6C2] bg-[#E9DFD0] px-[4%] py-12 sm:py-14">
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden border border-stone-300 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-300 hover:bg-stone-50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-dragon-brownDark sm:text-lg">
                    {item.question}
                  </span>

                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-dragon-beige
                      text-xl
                      font-light
                      text-dragon-brown
                      transition-transform
                      duration-300
                      ${isOpen ? "rotate-45" : ""}
                    `}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`
                    grid transition-all duration-300
                    ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-stone-200 px-6 py-5 leading-relaxed text-stone-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CONTATO */}

        <div className="mt-12 border border-[#3A2920] bg-gradient-to-br from-[#171513] to-[#2A1A14] p-8 text-center sm:p-10">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-dragon-beige">
            Ainda tem dúvidas?
          </span>

          <h2 className="mt-3 text-2xl font-black text-dragon-white sm:text-3xl">
            Fale com a gente
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-stone-300">
            Se sua dúvida não foi respondida, entre em contato conosco.
            Teremos prazer em ajudar.
          </p>

          <div className="mt-7">
            <Button href="/contato" variant="primary">
              Entrar em contato
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FAQ;
