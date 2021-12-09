import React, { useState } from "react";
import { useSelector } from "react-redux";
import Nav from "../Home/Nav";
import Footer from "../Landing/Footer";
import { Link } from 'react-router-dom'
import { Button } from "@chakra-ui/button";
// import { getTalentById } from "../../actions";


export default function ShoppingCart() {
const cart = useSelector(state => state.cart)
const [ state, setState ] = useState(0)
// const dispatch = useDispatch()
    let total = 0

    function resClick(e) {
        e.preventDefault()
        setState(state - 1)
    }
    function sumClick(e) {
        e.preventDefault()
        setState(state + 1)
    }
    function deleteTalent(e) {
        e.preventDefault()
        
    }
    function clearCart() {}
    return (
        <div>
            <Nav/>
            <div class='min-h-screen bg-semidark text-white m-2 rounded-md p-2'>
            <h2 class='text-3xl font-semibold'>Carrito de compras</h2>
            {cart.cart.length > 0 
            ? 
            (   <div class="flex flex-col">
                {cart?.cart?.map((e) => 
                    <div class="flex flex-row bg-dark m-3 rounded-md p-2">
                        <h3 class="m-2">{e.title}</h3>
                        <h3 class="m-2">${e.cost}.00</h3>
                        <h3 class='m-2'>Cantidad: {e.quantity}</h3>
                        <h4 class="m-2">Total: {e.quantity * e.cost}</h4>
                        {/* <button onClick={resClick}>-</button>
                        <span minValue="0" class="m-2">{state}</span>
                        <button onClick={sumClick}>+</button> */}
                        <button onClick={deleteTalent} class='font-semibold bg-purple rounded-md w-10 h-6 m-2'>X</button>
                    </div>
                )}
                <h4>Total: {total}</h4>
            </div>
            )
                : 
            ("Tu carrito se encuentra vacio")
            }
            </div>
            <Button class='w-32 bg-semidark rounded-md m-3'>Comprar</Button>
            <Link to='/home'>
            <Button class='w-32 bg-semidark rounded-md m-3'>Volver</Button>
            </Link>
            <Button onClick={clearCart} class='w-32 bg-semidark rounded-md m-3'>Vaciar carrito</Button>
            <Footer/>
        </div>
    )
}