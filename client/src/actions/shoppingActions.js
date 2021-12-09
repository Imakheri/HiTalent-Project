// import { getTalentById } from "."

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART'
export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'


export function addToCart(payload) {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: REMOVE_ALL_FROM_CART,
        payload
    }
}