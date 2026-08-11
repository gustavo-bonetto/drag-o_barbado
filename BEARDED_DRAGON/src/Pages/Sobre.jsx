import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";

import equipe from "../assets/equipe-dragao-barbado.jpg";

const values = [
  {
    title: "União",
    description: "Acreditamos que grandes projetos são construídos através do trabalho em equipe.",
  },
  {
    title: "Respeito",
    description: "Valorizamos nossos clientes, nossa equipe e todas as pessoas que fazem parte da nossa história.",
  },
  {
    title: "Qualidade",
    description: "Buscamos sempre oferecer um serviço bem executado e uma experiência positiva para cada cliente.",
  },
  {
    title: "Comprometimento",
    description: "Levamos nosso trabalho a sério e buscamos cumprir aquilo que nos propomos a fazer.",
  },
  {
    title: "Criatividade",
    description: "Estamos sempre abertos a novas ideias e maneiras de melhorar nosso trabalho.",
  },
  {
    title: "Empreendedorismo",
    description: "Acreditamos na coragem de transformar ideias em oportunidades e construir nosso próprio caminho.",
  },
];

const team = [
  "Danilo Carneiro",
  "Leonardo Barbosa",
  "Gustavo Bonetto",
  "Davi Sanches",
  "Luiz Guilherme",
];

function Sobre() {
  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#0D0D0D]">
      <NavBar />

      <main>
        <section className="relative overflow-hidden bg-[#0D0D0D] text-white">
          <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full border border-[#D6B892]/20" />
          <div className="absolute -bottom-48 -left-20 h-96 w-96 rounded-full border border-[#8B5E3C]/20" />

          <div className="relative mx-auto grid w-[92%] max-w-7xl items-center gap-12 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-28">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D6B892]" />
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#D6B892]">
                  Nossa história
                </span>
              </div>

              <h1 className="max-w-xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-[#F5F2ED] sm:text-6xl md:text-7xl">
                Sobre a
                <span className="mt-3 block text-[#D6B892]">Dragão Barbado</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-300">
                Uma ideia que nasceu entre amigos, cresceu com união e agora se transforma em uma barbearia feita por nós, para vocês.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
              <div className="absolute -right-4 -top-4 h-24 w-24 border-r-2 border-t-2 border-[#D6B892]" />
              <div className="relative overflow-hidden bg-[#2A1A14] p-2">
                <img
                  src={equipe}
                  alt="Os cinco integrantes da equipe Men's Caves"
                  className="h-[300px] w-full object-cover object-center sm:h-[390px]"
                />
                <div className="absolute inset-2 bg-gradient-to-t from-[#0D0D0D]/85 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#D6B892]">
                    Men's Caves
                  </span>
                  <p className="mt-2 text-2xl font-black text-white sm:text-3xl">
                    Cinco amigos. Um propósito.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 h-20 w-20 border-b-2 border-l-2 border-[#8B5E3C]" />
            </div>
          </div>
        </section>

        <section id="historia" className="bg-[#F5F2ED] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid w-[92%] max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#8B5E3C]">
                De onde viemos
              </span>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#2A1A14] sm:text-5xl">
                Uma história construída em equipe.
              </h2>
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#5C3825] to-[#D6B892]" />
            </div>

            <div className="space-y-5 text-base leading-relaxed text-stone-600 sm:text-lg">
              <p>
                A <strong className="font-bold text-[#2A1A14]">Dragão Barbado</strong> nasceu da união de cinco amigos que compartilham, desde o início, a vontade de construir algo juntos.
              </p>
              <p>
                Danilo Carneiro, Leonardo Barbosa, Gustavo Bonetto, Davi Sanches e Luiz Guilherme formaram o grupo <strong className="font-bold text-[#2A1A14]">Men's Caves</strong> desde o primeiro dia em que se conheceram. Durante nossa trajetória no curso de <strong className="font-bold text-[#2A1A14]">Análise e Desenvolvimento de Sistemas no SENAI de Vinhedo</strong>, fortalecemos nossa amizade, nosso trabalho em equipe e nossa capacidade de transformar ideias em projetos.
              </p>
              <p>
                No segundo ano do curso, decidimos seguir um novo caminho e colocar o empreendedorismo em prática. Foi assim que surgiu a ideia de criar nossa própria barbearia.
              </p>
              <p>
                Depois de discutirmos e decidirmos juntos o nome, nasceu a <strong className="font-bold text-[#2A1A14]">Dragão Barbado</strong>.
              </p>
              <p>
                Hoje, estamos transformando essa ideia em realidade, levando para nossa barbearia a união, a determinação e o espírito de equipe que sempre fizeram parte dos Men's Caves.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#0D0D0D] via-[#171513] to-[#2A1A14] py-16 text-white sm:py-20 lg:py-24">
          <div className="mx-auto grid w-[92%] max-w-7xl gap-6 md:grid-cols-2">
            <article className="border border-white/10 bg-black/20 p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D6B892]">Missão</span>
              <h2 className="mt-4 text-3xl font-black text-[#F5F2ED]">Cuidar do seu estilo.</h2>
              <p className="mt-5 leading-relaxed text-stone-300">
                Oferecer aos nossos clientes uma experiência de barbearia marcada pela qualidade, pelo cuidado e pelo bom atendimento, criando um ambiente onde cada pessoa possa se sentir bem e sair satisfeita com seu estilo.
              </p>
            </article>

            <article className="border border-[#D6B892]/30 bg-[#5C3825]/30 p-8 sm:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D6B892]">Visão</span>
              <h2 className="mt-4 text-3xl font-black text-[#F5F2ED]">Crescer com identidade.</h2>
              <p className="mt-5 leading-relaxed text-stone-300">
                Tornar a <strong className="font-bold text-[#F5F2ED]">Dragão Barbado</strong> uma barbearia reconhecida pela qualidade de seus serviços, pelo atendimento e pela identidade única da marca, crescendo de forma sólida e conquistando cada vez mais clientes.
              </p>
            </article>
          </div>
        </section>

        <section id="valores" className="bg-[#F5F2ED] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto w-[92%] max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#8B5E3C]">O que nos guia</span>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#2A1A14] sm:text-5xl">Nossos valores</h2>
              <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#5C3825] to-[#D6B892]" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <article key={value.title} className="border border-stone-200 bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                  <span className="text-sm font-black tracking-[0.2em] text-[#8B5E3C]">0{index + 1}</span>
                  <h3 className="mt-5 text-2xl font-black text-[#2A1A14]">{value.title}</h3>
                  <p className="mt-3 leading-relaxed text-stone-600">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="equipe" className="bg-[#2A1A14] py-16 text-white sm:py-20 lg:py-24">
          <div className="mx-auto grid w-[92%] max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D6B892]">Equipe — Men's Caves</span>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#F5F2ED] sm:text-5xl">
                Mais do que uma equipe, uma história em movimento.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-stone-300">
                A Dragão Barbado é formada por cinco integrantes que estão juntos desde o início dessa jornada:
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {team.map((member, index) => (
                <div key={member} className="flex items-center gap-4 border border-white/10 bg-black/15 px-5 py-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#D6B892] text-xs font-black text-[#D6B892]">
                    0{index + 1}
                  </span>
                  <strong className="text-base text-[#F5F2ED]">{member}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-14 w-[92%] max-w-7xl border-t border-white/10 pt-10 text-center">
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-300 sm:text-xl">
              Mais do que uma equipe, somos os <strong className="font-bold text-[#F5F2ED]">Men's Caves</strong> — um grupo que começou com uma ideia e agora está transformando essa união em um negócio real.
            </p>
            <p className="mt-6 text-xl font-black text-[#D6B892] sm:text-2xl">
              Dragão Barbado — feita por nós, para vocês.
            </p>
            <div className="mt-8">
              <Button href="/contato" variant="light">Agendar horário</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Sobre;

//FEITO POR GUSTAVO BONETTO
