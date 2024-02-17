import React from 'react';
import './App.css';
import Barra from './components/Barra/Barra';
import Tarjeta from './components/Tarjeta/Tarjeta';




function App() {

  return (

    <>
      <div className='todo'>
        <div className='contenedor'>

          <div className='cajaLogo'>
            <img className='logo' src="logo.png" alt=" Logo Win" />
          </div>

          <div className='barraBusqueda'>
            <Barra />
          </div>


        </div>


        <div className='contenedor2'>

          <h3 className='titulo'>Stays in Finland</h3>

          <Tarjeta />



        </div>





      </div>

      <div className='pie'>
        <h6>created by Victor - retos Funval.io</h6>
      </div>


    </>
  );
}

export default App;
