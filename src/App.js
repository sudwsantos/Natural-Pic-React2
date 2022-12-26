import "./styles.css";
import FotosContext from "./Context/FotosContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import { useEffect, useState } from "react";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import NotFound from "./views/NotFound";

export default function App() {
  const dataJson = "/fotos.json";
  const [fotos, setFotos] = useState([]);
  const sharedData = { fotos, setFotos };

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch(dataJson);
      const data = await res.json();
      setFotos(data.photos);
    };
    dataFetch().catch(console.error);
  }, []);

  return (
    <div className="App">
      <FotosContext.Provider value={sharedData}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FotosContext.Provider>
    </div>
  );
}
