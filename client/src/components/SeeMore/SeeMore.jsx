import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getTalentById } from "../../actions";
import Nav from "../Home/Nav";
import Footer from "../Landing/Footer";
import { Link } from 'react-router-dom'
import { Box, useToast, Button } from '@chakra-ui/react'

export default function SeeMore() {
    const toast = useToast()
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
                <div class="flex flex-col items-center bg-light">
                    <h1 class="text-3xl font-semibold">{seemore.title}</h1>
                    <div class="w-1/2">
                        <img src={seemore.image} alt="talent_image"/>
                    </div>
                    <h4 class="text-xl font-semibold">Acerca de este servicio</h4>
                    {seemore.description}
                    <h4>Costo: ${seemore.cost}</h4>
                    {/* <h4>{seemore.user.username}</h4> */}
                    <div class="flex">
                        <button class="bg-semidark w-24 rounded-full hover:bg-semilight text-black m-4">Comprar</button>
                        <Button onClick={() =>
                                toast({
                                position: 'bottom-right',
                                render: () => (
                                <Box color='white' p={3} bg='green.500'>
                                    Agregado al carrito
                                </Box>
                                ),
                                })
                                } 
                                class="bg-semidark w-24 rounded-full hover:bg-semilight text-black m-4">Agregar al carrito</Button>
                    </div>
                    <Link to='/home'>
                    <button class="bg-semidark w-24 rounded-full hover:bg-semilight text-black m-4">Volver</button>
                    </Link>
                </div> : <p>Cargando...</p>
                }
                <Footer/>
        </div>
    )
}