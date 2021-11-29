import { SEARCH_TALENT, LOGUEAR_USUARIO, POST_USER, GET_USER_TOKEN } from "../actions"

const initialState = {
    user : "",
    talents: [],
    token: ""
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SEARCH_TALENT:
            return {
                ...state,
                talents: action.payload
            }
        case LOGUEAR_USUARIO:
            return {
                ...state,
                user : action.payload
            }
        case POST_USER:
            return {
                ...state
            }
        case GET_USER_TOKEN:
            return {
                ...state,
                token: action.payload
            }    
        default:
            return state
    }
}