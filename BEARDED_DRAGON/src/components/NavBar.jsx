import React, { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#3A2920] bg-gradient-to-r from-[#0D0D0D] via-[#171513] to-[#2A1A14] shadow-[0_5px_25px_rgba(0,0,0,0.3)]">
      <div className="mx-auto flex min-h-[78px] w-[92%] max-w-7xl items-center justify-between">

        {/* LOGO */}

        <a
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <div
            className="
              flex
              h-11
              w-11
              rotate-[-3deg]
              items-center
              justify-center
              border-2
              border-[#D6B892]
              text-sm
              font-black
              tracking-wider
              text-[#D6B892]
            "
          >
            DB
          </div>

          <div className="flex flex-col leading-none">
            <strong className="text-[17px] font-extrabold tracking-[0.15em] text-[#F5F2ED]">
              DRAGÃO
            </strong>

            <span className="mt-1 text-[9px] tracking-[0.4em] text-[#D6B892]">
              BARBADO
            </span>
          </div>
        </a>

        {/* BOTÃO MOBILE */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            flex
            h-10
            w-10
            flex-col
            items-center
            justify-center
            border
            border-[#5C3825]
            md:hidden
          "
          aria-label="Abrir menu"
        >
          <span
            className={`
              h-0.5
              w-5
              bg-[#D6B892]
              transition-transform
              duration-300
              ${menuOpen ? "translate-y-[6px] rotate-45" : ""}
            `}
          />

          <span
            className={`
              my-1
              h-0.5
              w-5
              bg-[#D6B892]
              transition-opacity
              duration-300
              ${menuOpen ? "opacity-0" : ""}
            `}
          />

          <span
            className={`
              h-0.5
              w-5
              bg-[#D6B892]
              transition-transform
              duration-300
              ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}
            `}
          />
        </button>

        {/* MENU DESKTOP / MOBILE */}

        <nav
          className={`
            absolute
            left-0
            top-[78px]
            w-full
            border-b
            border-[#3A2920]
            bg-gradient-to-br
            from-[#0D0D0D]
            to-[#2A1A14]
            px-[4%]
            py-6

            md:static
            md:flex
            md:w-auto
            md:items-center
            md:border-0
            md:bg-transparent
            md:p-0

            ${
              menuOpen
                ? "flex flex-col gap-5"
                : "hidden md:flex md:gap-8"
            }
          `}
        >
          <a
            href="/"
            onClick={closeMenu}
            className="
              relative
              py-2
              text-sm
              font-semibold
              text-[#D7D3CF]
              transition-colors
              duration-300
              hover:text-[#D6B892]
            "
          >
            Início
          </a>

          <a
            href="/sobre"
            onClick={closeMenu}
            className="
              relative
              py-2
              text-sm
              font-semibold
              text-[#D7D3CF]
              transition-colors
              duration-300
              hover:text-[#D6B892]
            "
          >
            Sobre
          </a>

          <a
            href="/produtos"
            onClick={closeMenu}
            className="
              relative
              py-2
              text-sm
              font-semibold
              text-[#D7D3CF]
              transition-colors
              duration-300
              hover:text-[#D6B892]
            "
          >
            Produtos
          </a>

          <a
            href="/faq"
            onClick={closeMenu}
            className="
              relative
              py-2
              text-sm
              font-semibold
              text-[#D7D3CF]
              transition-colors
              duration-300
              hover:text-[#D6B892]
            "
          >
            FAQ
          </a>

          <a
            href="/contato"
            onClick={(event) => {
              closeMenu();
              if (window.location.pathname === "/") {
                event.preventDefault();
                const target = document.getElementById("contato");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }
            }}
            className="
              relative
              py-2
              text-sm
              font-semibold
              text-[#D7D3CF]
              transition-colors
              duration-300
              hover:text-[#D6B892]
            "
          >
            Contato
          </a>

          <a
            href="/notfound"
            onClick={closeMenu}
            className="
              inline-flex
              items-center
              justify-center
              border
              border-[#D6B892]
              bg-[#6B4226]
              px-5
              py-2.5
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              hover:bg-[#D6B892]
              hover:text-[#0D0D0D]
            "
          >
            Agendar horário
          </a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
