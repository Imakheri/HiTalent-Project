import axios from 'axios';


const LOGUEAR_USUARIO = "LOGUEAR_USUARIO";


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

