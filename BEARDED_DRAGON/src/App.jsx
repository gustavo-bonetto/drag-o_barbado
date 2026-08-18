import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";
import Produtos from "./Pages/Produtos";
import FAQ from "./Pages/FAQ";
import Notfound from "./Pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/notfound" element={<Notfound />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
