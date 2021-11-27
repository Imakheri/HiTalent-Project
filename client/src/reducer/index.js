import { SEARCH_TALENT, LOGUEAR_USUARIO, POST_USER } from "../actions"

const initialState = {
    user : "",
    talents: []
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
        default:
            return state
    }
}