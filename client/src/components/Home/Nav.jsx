import React from "react";
import { Link } from 'react-router-dom'
import Dropdown from "./Dropdown";

export default function Nav() {


    function onSubmit(e) {
        e.preventDefault()
    }

    return (
        <nav class="flex flex-row justify-between bg-semidark items-center">
            <div class="flex">
                <Link to='/home'>
                <img class="flex justify-start" src="https://www.vectorlogo.zone/logos/trayio/trayio-ar21.svg" alt="logo hitalent" />
                </Link>
                <form onSubmit={onSubmit}>
                <input type="text" class="h-8 m-2" placeholder="Ingresa tu busqueda" name="" id="" />
                <input type="submit" name="" id="" />
                </form>
                <button>Publicar</button>
                <Dropdown/>
            </div>
        </nav>
    )
}