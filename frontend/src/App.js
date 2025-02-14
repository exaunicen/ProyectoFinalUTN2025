import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/layout/Header";
import Footer from "./componentes/layout/Footer";

import Home from "./pages/HomePage";
import Contacto from "./pages/ContactoPage";
import Nosotros from "./pages/NosotrosPage";
import Blog from "./pages/BlogPage";
import Anuncios from "./pages/AnunciosPage";

/* import "./App.css";*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="anuncios" element={<Anuncios />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
