import React from "react";
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav class="bg-semidark place-content-center items-center">
        <div class="flex justify-between">
            <Link to='/home'>
            <img src="https://www.vectorlogo.zone/logos/trayio/trayio-ar21.svg" alt="logo hitalent" />
            </Link>
        {/* <input class="flex self-center items-center" type="text" name="" placeholder="Ingrese su busqueda"/> */}
        </div>
        </nav>
    )
}