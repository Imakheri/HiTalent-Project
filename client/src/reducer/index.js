import { SEARCH_TALENT, LOGUEAR_USUARIO, GET_USER_TOKEN, GET_TALENT } from "../actions"

const initialState = {
    user : '',
    register: {},
    talents: [],
    filteredTalents: [],
    token: ''
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_TALENT:
            return {
                ...state,
                talents: action.payload,
                filteredTalents: action.payload
            }
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
        case GET_USER_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}