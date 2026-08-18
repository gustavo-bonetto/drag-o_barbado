import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Section from "../components/Section";

// Import das imagens
import eduBlackPwr from "../assets/imgs/EduBlackPwr.png";
import eduLoiro from "../assets/imgs/EduLoiro.png";
import eduMoica from "../assets/imgs/EduMoica.png";
import lula from "../assets/imgs/Lula.png";
import messi from "../assets/imgs/Messi.png";
import speed from "../assets/imgs/Speed.png";
import therock from "../assets/imgs/TheRock.png";

// Lista de Serviços / Estilos baseada nas fotos
const PRODUTOS = [
  {
    id: 1,
    nome: "Black Power Respeito",
    categoria: "Cabelo",
    preco: "R$ 59,90",
    descricao: "Volume natural, presença marcante e formato impecável para quem não tem medo de destacar o estilo.",
    imagem: eduBlackPwr
  },
  {
    id: 2,
    nome: "Loiro Platinado Executivo",
    categoria: "Luzes",
    preco: "R$ 49,90",
    descricao: "Aquele tom loiro perfeitamente penteado para impressionar na reunião ou no plenário.",
    imagem: eduLoiro
  },
  {
    id: 3,
    nome: "Barba & Corte Imponente",
    categoria: "Barba",
    preco: "R$ 45,00",
    descricao: "Barba cheia e alinhada com navalha, combinada com corte clássico e elegante.",
    imagem: eduMoica
  },
  {
    id: 4,
    nome: "Dreadlocks Rasta Style",
    categoria: "Cabelo",
    preco: "R$ 54,90",
    descricao: "Dreads trabalhados com acabamento artesanal para quem busca um visual alternativo e cheio de história.",
    imagem: lula
  },
  {
    id: 5,
    nome: "Degradê Chavoso & Luzes Coloridas",
    categoria: "Luzes",
    preco: "R$ 139,90",
    descricao: "Pintura multicolorida no topo com degradê disfarçado na régua, perfeito para acompanhar a Juliet.",
    imagem: messi
  },
  {
    id: 6,
    nome: "Corte Espetado Energético",
    categoria: "Cabelo",
    preco: "R$ 29,90",
    descricao: "Penteado arrepiado com textura em alta fixação para quem vive no ritmo máximo e sem freio.",
    imagem: speed
  },
  {
    id: 7,
    nome: "Chiquinhas Mágicas & Presilhas",
    categoria: "Cabelo",
    preco: "R$ 50,00",
    descricao: "Penteado com coques duplos e lacinhos rosas para provar que a verdadeira masculinidade também sabe ser fofa.",
    imagem: therock,
    posicao: "object-top" // Garante que o topo da cabeça com as chiquinhas apareça
  }
];

// Categorias disponíveis
const CATEGORIAS = ["Todos", "Barba", "Cabelo", "Luzes"];

function Produtos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const produtosFiltrados =
    categoriaAtiva === "Todos"
      ? PRODUTOS
      : PRODUTOS.filter((p) => p.categoria === categoriaAtiva);

  const handleComprarWhatsApp = (nomeProduto) => {
    const mensagem = encodeURIComponent(`Olá! Gostaria de agendar/encomendar o estilo: ${nomeProduto}`);
    window.open(`https://wa.me/5500000000000?text=${mensagem}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-dragon-black text-dragon-white">
      <NavBar />

      {/* Header da Página */}
      <section className="relative border-t border-[#3A2920] bg-dragon-brownDark py-12 text-center sm:py-14">
        <div className="mx-auto w-[92%] max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-dragon-beige">
            Cuidado Masculino
          </span>
          <h1 className="mt-3 text-4xl font-black uppercase text-dragon-white sm:text-5xl md:text-6xl">
            Nossos <span className="text-dragon-beige">Estilos</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-stone-300">
            Confira nosso catálogo de cortes e transformações exclusivas testadas por nossos melhores barbeiros.
          </p>
        </div>
      </section>

      {/* Seção Principal */}
      <Section dark>
        {/* Filtro por Categoria */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`rounded border px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                categoriaAtiva === cat
                  ? "border-dragon-beige bg-dragon-beige text-dragon-black shadow-md"
                  : "border-white/10 bg-black/30 text-stone-400 hover:border-dragon-beige/50 hover:text-dragon-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {produtosFiltrados.map((produto) => (
            <div
              key={produto.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-white/10 bg-black/40 transition-all duration-300 hover:border-dragon-beige/50"
            >
              {/* Imagem do Produto/Serviço */}
              <div className="relative h-64 overflow-hidden bg-dragon-brownDark/20">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    produto.posicao || "object-center"
                  }`}
                />
                <span className="absolute top-3 right-3 rounded border border-dragon-beige/30 bg-dragon-black/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-dragon-beige">
                  {produto.categoria}
                </span>
              </div>

              {/* Informações */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold text-dragon-white">{produto.nome}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">
                    {produto.descricao}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-2xl font-black text-dragon-beige">
                    {produto.preco}
                  </span>
                  <Button
                    variant="primary"
                    onClick={() => handleComprarWhatsApp(produto.nome)}
                  >
                    Encomendar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}

export default Produtos;
