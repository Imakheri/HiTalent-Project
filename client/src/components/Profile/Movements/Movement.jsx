import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovebyId } from '../../../actions/index';

export default function Movement(){

    const { id } = useParams();
    // console.log(id);
    const dispatch = useDispatch();
    const movement = useSelector((state) => state.index.movement)
    
    useEffect(() => {
        dispatch(getMovebyId(id));
    },[dispatch])


    return(
        <div className='flex flex-row justify-around items-center bg-semidark border border-white w-11/12 h-auto m-1'>
            <span>{movement.type}</span>
            <span>{movement.username}</span>
            <span>{movement.talent}</span>
            <span>{movement.date}</span>
            <span>${movement.amount}</span>
        </div>
    )
}