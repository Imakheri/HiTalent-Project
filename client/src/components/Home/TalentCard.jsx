import React from "react";
import { Link } from "react-router-dom";


export default function TalentCard({ title, username, description, image, cost, id }) {
    
    return (
        <div class="flex flex-col w-80 h-96 bg-dark border-2 m-2 rounded-lg">
            <div class="flex flex-col m-3 text-white">
                <img class="w-80" src={image} alt="talent_image" />
                <h3 class="flex justify-center text-xl font-semibold">{title}</h3>
                <div class="h-auto">
                    <article>{description}</article>
                </div>
                <h6 class="flex justify-center">${cost}</h6>
                <Link to={'/talent/' + id}>
                    <div class="flex justify-center">
                        <button class="bg-semidark w-24 rounded-full hover:bg-light text-black">Ver mas</button>
                    </div>
                </Link>
                <h5 class="flex justify-end text-semilight">by username{username}</h5>
            </div>
        </div>
    )
}