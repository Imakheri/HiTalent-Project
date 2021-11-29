import React from "react";


export default function TalentCard({ title, name, description, image }) {
    
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <h3>{name}</h3>
                <p>{description}</p>
                {/* <img src={image} alt="" /> */}
            </div>
        </div>
    )
}