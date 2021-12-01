import { SEARCH_TALENT, CARGAR_USUARIO, POST_USER, GET_USER_TOKEN, GET_TALENT, GET_TALENT_BY_ID } from "../actions"

const initialState = {
    user : [],
    talents: [],
    filteredTalents: [],
    moreTalent: [],
    token: ""
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
        case GET_TALENT_BY_ID:
            return {
                ...state,
                moreTalent: action.payload
            }
        case CARGAR_USUARIO:
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

