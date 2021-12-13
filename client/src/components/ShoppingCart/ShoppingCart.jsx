import React from "react";
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import Nav from "../Home/Nav";
import Footer from "../Landing/Footer";
import { Link } from 'react-router-dom'
import { Button, useToast } from "@chakra-ui/react";
import { clearItemsCart, deleteTalent } from '../../actions/shoppingActions'
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'


export default function ShoppingCart() {
const cart = useSelector(state => state.cart)
const user = useSelector(state => state.index.user)
const reducer = (a, b) => a + b;
let mercadopago = cart.cart.length > 0 ? { title: cart?.cart?.map((e) => e.title), unit_price: (cart?.cart?.map((e) => (e.cost * e.quantity))).reduce(reducer) } : 'Algo fallo en el carrito, reintente luego.';
const dispatch = useDispatch()
const toast = useToast()
let total = 0 // Voy a ir sumando los totales para mostrar en el carrito
cart?.cart?.map((item) => total += (item?.quantity * item?.cost)) // Asigno los valores a total con +=

async function handleCheckOut(e) {
    e.preventDefault();
    let payload = {carrito: []}
    
    cart.cart.length > 0 ? (cart.cart.map((e) => payload.carrito.push({
        user_id: user?.id,
        post_id: e.id,
        title: e.title,
        price: e.cost
    }))) : (alert("Llena el carrito antes de comprar"))
        
        axios.post("http://localhost:3001/orden", payload)
        .then (res => console.log(res))
        .catch (error => console.log(error))
        // dispatch(postOrder(payload))
        console.log('order payload', payload)
        console.log("MP carrito",mercadopago);
        let response = await axios.post(
            "http://localhost:3001/checkout/mercadopago/",
            mercadopago
          );
          console.log(response);
          window.location.href = response.data.init_points;
}

    function clearCart() {
        dispatch(clearItemsCart())
        toast({
            title: 'Vaciaste tu carrito',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
    }

    function onClick(payload) {
        payload.preventDefault()
        let talent = cart?.cart?.filter(item => item?.id === payload.target.value)
            dispatch(deleteTalent(talent[0]?.id))
    }


    return (
        <div class="bg-semilight">
            <Nav/>
            <Table class=' min-h-screen max-h-screen bg-light rounded-md m-auto mt-3 mb-3' variant='simple'>
                <Thead>
                    <Tr>
                    <Th>Titulo</Th>
                    <Th>Cantidad</Th>
                    <Th isNumeric>Precio</Th>
                    <Th isNumeric>Total</Th>
                    <Th></Th>
                    </Tr>
                </Thead>
            <Tbody class='flex items-center'>
                    {
                    cart?.cart?.length > 0 
                    ?
                    (cart?.cart?.map((e) =>

                    <Tr class="flex items-center">
                    <Td>{e.title}</Td>
                    <Td>{e.quantity}</Td>
                    <Td isNumeric>${e.cost}</Td>
                    <Td isNumeric>${e.quantity * e.cost}</Td>
                    <Button class="w-5 rounded-full bg-red text-white font-semibold" onClick={onClick} value={e.id}>X</Button>
                    </Tr>
                    )) 
                    : 
                    (<Td>Tu carrito se encuentra vacio</Td>)
            }
            <Tr class="font-semibold">
            <Td>Total</Td>
            <Td>${total}</Td>
            </Tr>
            </Tbody>
            <Tr class="flex flex-row justify-center items-center">
            <Button onClick={handleCheckOut} class='w-32 h-8 bg-semidark rounded-md m-3'>Comprar</Button>
            <Button onClick={clearCart} class='w-32 h-8 bg-semidark rounded-md m-3'>Vaciar carrito</Button>
            <Link to='/home'>
            <Button class='w-32 h-8 border-2 border-dark rounded-md m-3 hover:bg-semilight'>Volver</Button>
            </Link>
            </Tr>
            </Table>
            <Footer/>
        </div>
    )
}