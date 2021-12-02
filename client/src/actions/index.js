import axios from "axios";
export const SEARCH_TALENT = "SEARCH_TALENT";
export const CARGAR_USUARIO = "CARGAR_USUARIO";
export const POST_USER = "POST_USER";
export const GET_USER_TOKEN = "GET_USER_TOKEN";
export const GET_TALENT = "GET_TALENT";
export const GET_TALENT_BY_ID = "GET_TALENT_BY_ID"
export const LOGUEAR_USUARIO = "LOGUEAR_USUARIO";


export function getTalents() {
  return function (dispatch) {
    axios.get("http://localhost:3001/post")
    .then((talents) => {
      dispatch({
        type: GET_TALENT,
        payload: talents.data,
      });
    })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getTalentById(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/post/" + id)
      return dispatch ({
        type: GET_TALENT_BY_ID,
        payload: json.data
      })
    }
    catch(error) {
      console.log(error)
    }
  }
}

export function searchTalent(search) {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/talents?name=" + search)
      .then((talents) => {
        dispatch({
          type: SEARCH_TALENT,
          payload: talents.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function cargarUsuario(payload) {
  return {
    type: CARGAR_USUARIO,
    payload: payload,
  };
}

export function createUser(payload) {
  return async function (dispatch) {
    const newUser = await axios.post("http://localhost:3001/user", payload);
    return dispatch({
      type: POST_USER,
      payload: newUser,
    });
  };
}

export function getUserbyToken(token){
    return async function (dispatch){
        try{
            var json = await axios.post('http://localhost:3001/user/confirm/' + token);
            return dispatch ({
                type: GET_USER_TOKEN,
                payload: json.data
            })
        } 
        catch (error) {
            console.log(error)
        }
    }
};
