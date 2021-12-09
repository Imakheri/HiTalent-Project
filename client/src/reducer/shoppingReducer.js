import { ADD_TO_CART, REMOVE_ONE_FROM_CART, REMOVE_ALL_FROM_CART, CLEAR_CART } from "../actions/shoppingActions";
import { GET_TALENT_BY_ID } from '../actions/index'

export const shoppingInicialState = {
    cart: [],
}

export default function shoppingReducer(state = shoppingInicialState, action) {
    switch(action.type) {
        case GET_TALENT_BY_ID:
            return {
              ...state,
              product: action.payload
            };
        case ADD_TO_CART:
            // let newItem = state.cart.product?.find(item => item.id === action.payload)
            // let itemInCart = state.cart?.cart?.find((item) => item.id === newItem.id)

            // return newItem ? 
            // {
            //     ...state,
            //     cart: {...state.cart.map((item) => item.id === newItem.id ? {...item, quantity: + 1} : item )}
            // }
            // :
            // {
            //     ...state,
            //     cart: {...state.cart, newItem, quantity:1}
            // }
            let itemInCart = state.cart.find(item => item.id === action.payload.id)
            console.log('repetido',itemInCart)
            
            return itemInCart ? {
                ...state,
                cart: state.cart.map((item) => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item )
            }
            :
            {
                ...state,
                cart: [...state.cart, {...action.payload, quantity:1}]}
            // return {
            //     ...state,
            //     cart: [...state.cart, action.payload]
            // }        
            // return {
            //     ...state,
            //     cart: [...state.cart, action.payload]
            // }        
        case REMOVE_ONE_FROM_CART:
            return {

            }
        case REMOVE_ALL_FROM_CART:
             return {
                
            }
        case CLEAR_CART:
            return {
                
            }
        default:
            return state
    }
}