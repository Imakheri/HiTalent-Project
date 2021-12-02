import React from 'react';
import Review from './Review';

export default function Reviews(){
    return(
        <div className='flex flex-col justify-center bg-dark border-2 text-white border-white rounded-lg w-11/12 py-4'>
            <div className='flex flex-col items-center py-2'>
                    <Review />
            </div>
        </div>
    )
}