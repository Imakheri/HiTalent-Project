import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewbyId } from '../../../actions/index';

export default function Review(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const review = useSelector((state) => state.index.review)
    
    useEffect(() => {
        dispatch(getReviewbyId(id));
    },[dispatch])

    return(
        <div className='flex flex-row justify-around items-center bg-semidark border border-white w-11/12 h-auto m-1'>
            <p className='p-2 text-justify'>{review.first}<span className='ml-2 font-black italic'>{review.username}</span></p>
        </div>
    )
}