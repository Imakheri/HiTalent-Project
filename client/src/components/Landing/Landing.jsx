import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Beneficios from "./Beneficios";
import LandingSearchbar from "./LandingSearchbar";
import Navbar from "./Navbar";
import Footer from './Footer'
import Form from "../SignIn/FormSI";

export default function Landing() {

    const [ventanaLogIn, setVentanaLogIn] = useState(false)
    
    function onModalClick(e){
        e.preventDefault()
        setVentanaLogIn(!ventanaLogIn)
    }

    return (
        <div class="bg-semilight min-h-screen select-none">
            <Navbar onModalClick={onModalClick}/>
            <div class="flex justify-around items-center content-center bg-landingImg bg-cover min-h-screen object-cover">
                {
                    ventanaLogIn ? <Form onModalClick={onModalClick}/> : console.log("falso")
                }
                <div class="flex flex-col items-center justify-between bg-dark rounded-md m-7 bg-opacity-70">
                    <LandingSearchbar/>
                    <Link to='/home'>
                        <button class="font-semibold bg-light rounded-md w-40 p-1 m-3">Home</button>
                    </Link>
                </div>
            </div>
                <Beneficios/>
                <Footer/>
        </div>
    )
}