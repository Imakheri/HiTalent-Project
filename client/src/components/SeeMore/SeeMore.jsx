import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getTalentById } from "../../actions";
import Nav from "../Home/Nav";
import Footer from "../Landing/Footer";

export default function SeeMore() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const seemore = useSelector((state) => state.index.moreTalent)
    console.log(seemore)
    
    useEffect(() => {
        dispatch(getTalentById(id))
    }, [dispatch, id])
    
    return (
        <div className="seemore">
            <Nav/>
                {
                    seemore ? 
                <div className="details_container">
                    <h1>{seemore.title}</h1>
                    <img class="w-32" src={seemore.image} alt="talent_image" className="talent_image" />
                    <h4>Descripcion: {seemore.description}</h4>
                    <h4>Costo: ${seemore.cost}</h4>
                    <h4>{seemore.user.username}</h4>
                    <button>Comprar</button>
                </div> : <p>Cargando...</p>
                }
                <Footer/>
        </div>
    )
}