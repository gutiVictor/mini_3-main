import React, { useRef, useEffect } from "react";
import "./Modal.css";
import lupa from "../../../public/lupa.svg";

const Modal = ({ onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      
      if (modalRef.current && !modalRef.current.contains(e.target) && e.target.className !== "busquedaBoton-Modal") {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    console.log("Closing modal");
    
    return () => {
      document.removeEventListener("click", handleClickOutside);
    
    };
  }, [onClose]);

  return (
    <div className="contenedorModal">
    
      <div className="containerModal" >
        <div className="modalglobal">
          <div className="modallugarBusqueda-ciudad">
            <input type="text" placeholder="Add location" id="Busqueda" onMouseDown={e => e.stopPropagation()} />
          </div>

          <div className="modallugarBusqueda-personas">
            <input type="number" placeholder="Add guests" id="persona" onMouseDown={e => e.stopPropagation()} />
          </div>

          <div className="modallugarBusqueda-modal">
            <button className="busquedaBoton-Modal">
              <img src={lupa} alt="lupa" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
