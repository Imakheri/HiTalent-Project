import React, { useEffect } from "react";
import Nav from "./Nav";
import TALENTS from './MOCKUPhOME'
import Footer from '../Landing/Footer'

export default function Home() {

    return(
        <div>
            <Nav/>
            {TALENTS.map(el => {
                return(
                    <div className="flex">
                        <div className="flex-row bg-dark text-center w-full">
                            <h1 className="text-white text-3xl font-semibold py-6">-{el.user.title}</h1>
                            <h3>{el.user.calificacion}</h3>
                            <p className="text-2xl font-light  p-8">"{el.user.description}"</p>
                        </div>
                    </div>
                )
            })}
            <Footer/>
        </div>
    )
}