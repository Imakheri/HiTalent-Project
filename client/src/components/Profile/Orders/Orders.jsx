import React from 'react';
import Order from './Order';

export default function Orders(){
    return(
        <div className='flex flex-col justify-center bg-dark border-2 text-white border-white rounded-lg w-11/12 py-4'>
            <div className='flex flex-col items-center py-2'>
                    <Order />
                    <Order />
                    <Order />
            </div>
        </div>
    )
}