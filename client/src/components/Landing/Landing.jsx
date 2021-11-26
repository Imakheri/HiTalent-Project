import React from "react";
import { Link } from 'react-router-dom'
import Beneficios from "./Beneficios";
import LandingSearchbar from "./LandingSearchbar";
import Navbar from "./Navbar";
import Footer from './Footer'

export default function Landing() {
    return (
        <div class="bg-semilight min-h-screen select-none">
            <Navbar/>
            <div class="flex justify-around items-center content-center bg-landingImg bg-cover min-h-screen object-cover">
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