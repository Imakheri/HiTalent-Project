import { SEARCH_TALENT } from "../actions"


const initialState = {
    talents: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {

        case SEARCH_TALENT:
            return {
                ...state,
                talents: action.payload
            }





        default:
            return state
    }
}