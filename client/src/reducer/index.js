let initialState = {
    user : "",
}


function rootReducer(state = initialState, action){
    switch(action.type){
        case "LOGUEAR_USUARIO":
            return {
                ...state,
                user : action.payload
            }
        default:
            return state;
    }
}


export default rootReducer;