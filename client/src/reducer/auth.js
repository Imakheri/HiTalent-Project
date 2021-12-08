import { LOGIN_GOOGLE, LOGOUT }  from '../actions/auth'

const initialState = {
    usuario : null
};

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_GOOGLE:
            console.log(action.payload)
            return {
                usuario : action.payload
            }
        // case types.BASIC_AUTH:
        //     return {
        //         uid: null,
        //         displayName: action.payload.name,
        //         JWT: action.payload.JWT,
        //     };
        case LOGOUT:
            return initialState

        default: 
            return state
    }
}