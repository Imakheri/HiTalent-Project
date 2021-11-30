import React from 'react';

import User from './User';

export default function Profile(){
    return(
        <div className='flex flex-col items-center py-10 bg-dark max-w-xs border text-white border-dark rounded-lg'>
            <User />
            
        </div>
    )
}