import "../assets/css/galeria.css";
import { useContext } from "react";
import FotosContext from "../Context/FotosContext";

export default function Favoritos() {
  const { fotos } = useContext(FotosContext);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div>
        {fotos &&
          fotos
            .filter((foto) => foto.liked)
            .map((foto) => {
              return (
                <div>
                  <img key={foto.id} src={foto.src.tiny} alt={foto.alt} />
                </div>
              );
            })}
      </div>
    </div>
  );
}
