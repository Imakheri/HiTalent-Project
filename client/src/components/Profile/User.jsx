import React from 'react';

export default function Profile(){
    return(
        <div className='w-60'>
            <div>
                <img className='rounded-full' src='https://codes.unidepix.com/codes/mio.png' alt='Imagen de usuario'/>
            </div>

            <div>
                <h4>Julián Rentería</h4>
                <h5>Imakheri</h5>
            </div>
            <div className='flex items-center w-full h-6 bg-dark border border-white rounded-md'>
                <div className='flex flex-row h-5 w-9/12 bg-purple rounded-md'>
                <div className='flex items-center text-xs'>Nivel 5</ div>
            </div>
            </div>
        </div>
    )
}