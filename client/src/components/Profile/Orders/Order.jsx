import React from 'react';
import { Link }  from 'react-router-dom';

export default function Order(){
    return (
        <section className='flex flex-row justify-around items-center bg-semidark border border-white w-11/12 h-10 m-1'>
            <span>Arnold33</span>
            <span>Guitarra</span>
            <Link to='/order'><button className='btn-primary btn-colors'>Ver pedido</button></Link>
            <Link to='/order'><button className='btn-primary btn-colors'>Comunicate</button></Link>
        </section>
    )
}