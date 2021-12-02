import React from 'react';
import RESEÑAS from './MOCKUP';

function Reseñas(){

    let positivas = RESEÑAS.filter(e=> e.user.calificacion > 4)


    return(
        <div>
            {positivas.map(el => {
                return(
                    <div className="flex">
                        <img className="max-h-64 w-md" alt='Imagenes sobre el curso' src={el.user.curso.imagen}/>
                        <div className="flex-row bg-dark text-center w-full">
                            <h1 className="text-white text-3xl font-semibold py-6">{el.user.username}</h1>
                            <p className="text-2xl font-light  p-8">{el.user.reseña}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Reseñas;