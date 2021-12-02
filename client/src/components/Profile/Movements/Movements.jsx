import React from 'react';
import Movement from './Movement';

export default function Movements(){
    return (
        <div className='flex flex-col items-center bg-dark border-2 text-white border-white rounded-lg w-11/12 py-4'>
            <div className='flex flex-row justify-around bg-dark border border-dark w-11/12 h-auto space-x-6 mb-2'>
                <span>Acción</span><span>Usuario</span><span>Talento</span><span>Fecha</span><span>Monto</span>
            </div>
            <Movement />
            <Movement />
            <Movement />
            <Movement />
        </div>
    )
}