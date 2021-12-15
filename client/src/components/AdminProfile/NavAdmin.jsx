import React from "react";

export default function NavAdmin({setPestaña}){

    const onClick = (e) => {
        e.preventDefault();
        setPestaña(e.target.value)
    }

    return(
        <nav>
            <button onClick={e => onClick(e)} value="user">Usuarios</button>
            <button onClick={e => onClick(e)} value="post">Publicaciones</button>
            <button onClick={e => onClick(e)} value="review">Reviews</button>
        </nav>
    )
}