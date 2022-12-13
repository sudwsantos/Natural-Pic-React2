import React from "react";
import "../assets/css/galeria.css";
import Allfotos from "../fotos.json";
import Heart from "./Heart";

const Galeria = () => {
  const data = Allfotos.photos;

  return (
    <div className="galeria grid-columns-5 p-3">
      {data.map((foto) => {
        return (
          <div className="image">
            <p>Prueba texto</p>
            <img src={foto.src.tiny} alt='imagen fondo' />
            <Heart />
          </div>
        );

      
        })}
        
    </div>
  );
};

export default Galeria;
