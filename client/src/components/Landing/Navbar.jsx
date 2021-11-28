import React from "react";
import { Link } from "react-router-dom";


export default function Navbar({onModalClick}) {

    return (
        <nav class="bg-semidark place-content-center items-center">
        <div class="flex justify-between">

            <Link to='/'>
            <img src="https://www.vectorlogo.zone/logos/trayio/trayio-ar21.svg" alt="logo hitalent" />
            </Link>

            <div>
                
                <button onClick={onModalClick} class="m-2 p-0 font-semibold">Ingreso</button>

                <Link to='/register'>
                <button  class="m-2 bg-transparent hover:bg-semilight text-black font-semibold hover:text-white py-2 px-4 border border-dark hover:border-semilight rounded p-0">Registro</button>
                </Link>
            </div>
        </div>
        </nav>
    )
}