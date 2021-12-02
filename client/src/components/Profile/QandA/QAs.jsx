import React from 'react';
import QA from './QA';

export default function Qas(){
    return(
        <div className='flex flex-row justify-around items-center bg-semidark border border-white w-11/12 h-auto m-1'>
            <QA />
            <QA />
            <QA />
        </div>
    )
}