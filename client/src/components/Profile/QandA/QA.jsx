import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getQAbyId } from '../../../actions/index';

export default function Review(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const qa = useSelector((state) => state.index.qa)
    
    useEffect(() => {
        dispatch(getQAbyId(id));
    },[dispatch])

    return(
        <div className='flex flex-row justify-around items-center bg-semidark border border-white w-11/12 h-auto m-1'>
            <p className='p-2 text-justify'>{qa.first}<span className='ml-2 font-black italic'>{qa.username}</span></p>
        </div>
    )
}