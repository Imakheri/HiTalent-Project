/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from '../Landing/Navbar'
import linkedIn from '../../assets/linkedin-icon.svg'
import gitHub from '../../assets/github-icon.svg'
import Footer from '../Landing/Footer'

export default function AboutUs() {
    let creators = [
        {
            name: "Bautista Pugnaloni",
            Linkedin: "",
            GitHub: "https://github.com/BPugna",
            image: "https://avatars.githubusercontent.com/u/73837548?v=4",
            place: "Argentina"
        },
        {
            name: "Bruno Herrera",
            Linkedin: "",
            GitHub: "https://github.com/Lambda1158",
            image: "https://avatars.githubusercontent.com/u/80788930?v=4",
            place: "Argentina"
        },
        {
            name: "Federico Ramos",
            Linkedin: "",
            GitHub: "https://github.com/Fede-Ramos",
            image: "https://avatars.githubusercontent.com/u/87664281?v=4",
            place: "Argentina"
        },
        {
            name: "Franco Oropel",
            Linkedin: "",
            GitHub: "https://github.com/F-ranco",
            image: "https://avatars.githubusercontent.com/u/87246426?v=4",
            place: "Argentina"
        },
        {
            name:"Julian Renteria",
            Linkedin: "",
            GitHub: "https://github.com/Imakheri",
            image: "https://avatars.githubusercontent.com/u/78008281?v=4",
            place: "Mexico"
        },
        {
            name:"Santiago Carrizo",
            Linkedin: "",
            GitHub: "https://github.com/zantica",
            image: "",
            place: "Argentina"
        }
    ]
    return (
        <div class="bg-semilight">
            <Navbar/>
            <h1 class="flex justify-center font-semibold text-4xl">Quienes somos?</h1>
            <p class="text-lg m-3">Estudiantes prontos a terminar el bootcamp de Soy Henry, del cual adquirimos las habilidades necesarias para realizar este proyecto grupal, aplicando todos los conocimientos y mas.</p>
            <div class="grid grid-cols-2">

            <div class="grid col-start-1 col-end-2 m-10 bg-light rounded-md">

                {creators.map((creator) =>

                <div class="flex m-3 border-2 border-dark p-3">
                    <img class="w-20 rounded-full" src={creator.image} alt="" />
                    <h3 class="font-semibold">{creator.name}</h3>
                    <h4>{creator.place}</h4>
                    <a class="text-dark font-medium" href={creator.Linkedin} target="_blank"><img class="w-12" src={linkedIn} alt="logo-linkedin" /></a>
                    <a class="text-dark font-medium" href={creator.GitHub} target="_blank"><img class="w-12" src={gitHub} alt="gitHub-logo" /></a>
                </div>
                )}
            </div>
            </div>
        <Footer/>
        </div>
    )
}