import React from "react";
import { Link } from "react-router-dom";


export default function TalentCard({ title, name, description, image, id, cost }) {
    
    return (
        <div class="flex flex-col w-60 h-96 border-2 m-2">
            <div class="flex flex-col m-3">
                {id}
                <img src={image} alt="" />
                <h2>{title}</h2>
                <h3>{name}</h3>
                <p>{description}</p>
                <h6>${cost}</h6>
                <Link to='/talent/idtalent'>
                    <button>Mas info</button>
                </Link>
            </div>
        </div>
    )
}