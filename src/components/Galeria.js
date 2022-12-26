import React from "react";
import "../assets/css/galeria.css";
import { useContext } from "react";
import FotosContext from "../Context/FotosContext";
import ImgCard from "./ImgCard";

export default function Home() {
  const { fotos, setFotos } = useContext(FotosContext);

  const changeLiked = (foto) => {
    foto.liked = !foto.liked;
    setFotos([...fotos]);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos &&
        fotos.map((foto) => {
          return (
            <ImgCard key={foto.id} foto={foto} changeLiked={changeLiked} />
          );
        })}
    </div>
  );
}
