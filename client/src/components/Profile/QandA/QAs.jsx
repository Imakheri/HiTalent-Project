import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQAbyId } from '../../../actions/index';

export default function Qas(){

    const { id } = useParams();
    const dispatch = useDispatch();
    const qa = useSelector((state) => state.index.qa)
    
    useEffect(() => {
        dispatch(getQAbyId(id));
    },[dispatch])

    return(
        <div className='flex flex-col items-center bg-dark border-2 text-white border-white rounded-lg w-11/12 py-4'>
            <div className='flex flex-row justify-center items-center  bg-semidark text-white w-11/12 h-auto m-1'>
                <div className='flex flex-row justify-between items-center border w-full p-1'>
                    <div>
                        <input type='checkbox' /><span>Pregunta 1</span>
                    </div>
                    <span className='ml-2 italic'>{qa.username}</span>
                    <button className='btn-custom btn-colors'>Responder</button>
                </div>
            </div>
            <div className='flex justify-center items-center bg-semidark w-11/12 rounded'>
                <textarea className='w-full rounded bg-semidark text-white placeholder-light' placeholder='Añade tu respuesta aquí...' />
                <button className='btn-quaternary btn-colors mx-2'>Enviar</button>
            </div>
        </div>
    )
}