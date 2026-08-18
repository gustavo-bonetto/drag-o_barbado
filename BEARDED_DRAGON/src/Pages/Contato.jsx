import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const contactInfo = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "(11) 99999-9999",
    href: "https://wa.me/5511999999999",
    accent: "text-[#2EC66B]",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@dragao_barbado",
    href: "https://instagram.com",
    accent: "text-[#D94F9E]",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Endereço",
    value: "Rua Caves, 123 - Vinhedo/SP",
    href: "https://maps.google.com",
    accent: "text-[#D95C45]",
  },
  {
    icon: FaClock,
    label: "Atendimento",
    value: "Segunda a sábado • 09:00 às 20:00",
    href: "#",
    accent: "text-[#D6B892]",
  },
];

export default function Contato() {
  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#0D0D0D]">
      <NavBar />

      <main id="contato">
        <section id="contato" className="relative overflow-hidden bg-gradient-to-br from-[#0D0D0D] via-[#171513] to-[#2A1A14] text-white">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D6B892]/20" />
          <div className="absolute -bottom-48 -left-16 h-96 w-96 rounded-full border border-[#8B5E3C]/20" />

          <div className="relative mx-auto w-[92%] max-w-7xl py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#D6B892]" />
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#D6B892]">
                  Contato
                </span>
              </div>

              <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-tight text-[#F5F2ED] sm:text-6xl lg:text-7xl">
                Fale com a
                <span className="mt-3 block text-[#D6B892]">Dragão Barbado</span>
              </h1>

              <p className="mt-7 text-lg leading-relaxed text-stone-300">
                Agende seu horário, tire dúvidas ou envie uma mensagem para conhecer melhor nossos serviços.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-[#E3D6C2] bg-[#E9DFD0] py-12 sm:py-14 lg:py-16">
          <div className="mx-auto grid w-[92%] max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <div className="rounded-none border border-[#E3D6C2] bg-white p-8 shadow-[0_15px_35px_rgba(0,0,0,0.04)] sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#8B5E3C]">
                Informações
              </span>

              <h2 className="mt-4 text-3xl font-black text-[#2A1A14] sm:text-4xl">
                Estamos prontos para atender você.
              </h2>

              <div className="mt-8 space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href, accent }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-start gap-4 border-b border-[#EFE7DF] pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D6B892] bg-[#F5F2ED]">
                      <Icon className={`text-xl ${accent}`} />
                    </div>

                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B5E3C]">
                        {label}
                      </p>
                      <p className="mt-2 text-base leading-relaxed text-stone-600 transition-colors group-hover:text-[#2A1A14]">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="border border-[#D9C9AF] bg-[#2A1A14] p-8 text-white shadow-[0_18px_45px_rgba(42,26,20,0.18)] sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D6B892]">
                Mensagem
              </span>

              <h2 className="mt-4 text-3xl font-black text-[#F5F2ED] sm:text-4xl">
                Envie uma mensagem
              </h2>

              <form className="mt-8 space-y-4">
                <div>
                  <label htmlFor="nome" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[#D6B892]">
                    Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="Seu nome"
                    className="w-full border border-white/10 bg-[#171513] px-4 py-3 text-white placeholder:text-stone-400 focus:border-[#D6B892] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[#D6B892]">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="seuemail@email.com"
                    className="w-full border border-white/10 bg-[#171513] px-4 py-3 text-white placeholder:text-stone-400 focus:border-[#D6B892] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="mb-2 block text-sm font-semibold uppercase tracking-[0.2em] text-[#D6B892]">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    rows="5"
                    placeholder="Escreva sua mensagem..."
                    className="w-full resize-none border border-white/10 bg-[#171513] px-4 py-3 text-white placeholder:text-stone-400 focus:border-[#D6B892] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="light" className="w-full justify-center">
                    Enviar mensagem
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
