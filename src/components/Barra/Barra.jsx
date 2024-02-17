import React, { useState } from "react";
import "../Barra/Barra.css";
import lupita from "../../../public/lupita_ferrer.svg";
import Modal from "../Modal/Modal";

const Barra = () => {
  const [mostrar, setMostrar] = useState(false);

  const mostrarBusqueda = () => {
    setMostrar(!mostrar); /* para contraccion  de la barra de busqueda */
  };

  const manual = (e) => {
    e.stopPropagation();
    setMostrar(!mostrar);
    }; 

  return (
    <div className="busqueda-contenedor" onClick={manual}>
      <div
        className={'busqueda ${mostrar ? "mostrar" : "" }'}
        onClick={mostrarBusqueda}
      >
        <div className="global">
          <div className="lugarBusqueda">
            <input type="text" placeholder="Búsqueda" id="Busqueda" />
          </div>

          <div className="lugarBusqueda">
            <input type="number" placeholder="Add guests" id="persona" />
          </div>

          <div className="lugarBusqueda-boton">
            <button className="busquedaBoton">
              <img src={lupita} alt="lupita" />
            </button>
          </div>
        </div>
        {mostrar && <Modal onClose={() => setMostrar(false)} />}
      </div>
    </div>
  );
};

export default Barra;
