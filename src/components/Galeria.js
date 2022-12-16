import React from "react";
import "../assets/css/galeria.css";
import Allfotos from "../fotos.json";
import Heart from "./Heart";

const Galeria = () => {
  const data = Allfotos.photos;

  return (
    <div className="galeria grid-columns-5 p-3">
      {data.map((foto, i) => {
        return (
          <div key={i} className="foto">
              <Heart />
            <img src={foto.src.tiny} alt="imagen fondo"/>
          </div>
        );

      
        })}
        
    </div>
  );
};

export default Galeria;
