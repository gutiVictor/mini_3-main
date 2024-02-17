import React, { useEffect, useState  } from 'react'
import '../Tarjeta/Tarjeta.css'
import star from '../../../public/star.svg';



const Tarjeta = () => {
    const [stays, setStays] = useState([]);
    useEffect(() => {
        fetch("/stays.json")
      

            .then((response) => response.json())
            .then(data => setStays(data))

            .catch((error) => console.error("Error Fetching data:", error));
    }, []);


    return (
        <div className='listaTarjeta'>

            {stays.map((stay, index) => (
                <div key={index} className='tarjeta_json' >
                    <img src={stay.photo} alt={stay.title} />
                    
                    <div className='datos'>
                        <p className='tipoApto'>{stay.type}</p>
                        <p className='ratingApto'> <img src={star} alt="" />{stay.rating} </p>
                    </div>

                    <div>
                        <p className='texto'>{stay.title}</p>
                    </div>

                </div>            

            ))}

        </div>
    );
};

export default Tarjeta;
