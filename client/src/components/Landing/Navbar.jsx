import React from "react";
import { Link } from "react-router-dom";
import pfImage from '../../assets/logo8-removebg-preview.png'


export default function Navbar({ onModalClick, onModaleClick }) {

    return (
        <nav class="bg-semidark place-content-center items-center">
        <div class="flex items-center justify-between">
            <Link to='/'>
            <img
            src="https://codes.unidepix.com/img/hi.png" alt="logo hitalent" width='160px' alt='hitalent logo'/>
            </Link>
            <div>
                <button onClick={onModalClick} class="m-4 font-semibold">Ingreso</button>
                <button  onClick={onModaleClick} class="m-2 bg-transparent hover:bg-semilight  font-semibold hover:text-black py-2 px-4 border border-dark hover:border-semilight rounded p-0">Registro</button>
            </div>
        </div>
        </nav>
    )
}