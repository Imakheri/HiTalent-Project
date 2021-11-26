import React from "react";
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav class="bg-semidark w-screen place-content-center">
        <div class="flex justify-start">

            <Link to='/'>
            <img src="https://www.vectorlogo.zone/logos/trayio/trayio-ar21.svg" alt="logo hitalent" />
            </Link>
        </div>
        </nav>
    )
}