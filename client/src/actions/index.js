import axios from 'axios'

export const SEARCH_TALENT = 'SEARCH_TALENT'
export const LOGUEAR_USUARIO = "LOGUEAR_USUARIO";
export const POST_USER = 'POST_USER';
  
export function searchTalent(search) {
    return function(dispatch) {
        axios.get('http://localhost:3001/talents?name=' + search)
        .then((talents) =>{
            dispatch({
                type: SEARCH_TALENT,
                payload: talents.data
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export function loguearUsuario(){
    return async function(dispatch){
        try{
            let usuario = await axios.get('http://localhost:3001/usuario');
            return dispatch({
                type: LOGUEAR_USUARIO,
                payload: usuario.data
                })

        } catch(error){
            console.log("Error al requerir el usuario: ",error);
        }
    } 
}

export function createUser(payload){
    return async function(dispatch){  
      const newUser = await axios.post('http://localhost:3001/user', payload)
        return dispatch({
          type: POST_USER,
          payload: newUser
    })
}}
