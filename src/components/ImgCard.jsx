import React from "react";
import Heart from "./Heart";
import "../assets/css/galeria.css"

const ImgCard = ({ foto, changeLiked }) => {
  return (
    <div
      className="foto"
      style={{ backgroundImage: `url(${foto.src.tiny})` }}
      onClick={() => changeLiked(foto)}
    >
      <Heart filled={foto.liked} />
      {foto.alt}
    </div>
  );
};

export default ImgCard;
