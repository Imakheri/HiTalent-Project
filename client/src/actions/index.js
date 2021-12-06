import axios from "axios";
export const SEARCH_TALENT = "SEARCH_TALENT";
export const CARGAR_USUARIO = "CARGAR_USUARIO";
export const POST_USER = "POST_USER";
export const GET_USER_TOKEN = "GET_USER_TOKEN";
export const GET_TALENT = "GET_TALENT";
export const GET_USER_ID = 'GET_USER_ID';
export const GET_ORDER_ID = 'GET_ORDER_ID';
export const GET_REVIEW_ID = 'GET_REVIEW_ID';
export const GET_MOVE_ID = 'GET_MOVE_ID';
export const GET_QA_ID = 'GET_QA_ID';
export const GET_TALENT_BY_ID = "GET_TALENT_BY_ID"
export const LOGUEAR_USUARIO = "LOGUEAR_USUARIO";
export const PUT_ANSWER = 'PUT_ANSWER';
export const GET_CATEGORIES = "GET_CATEGORIES";
export const POST_QUESTION = "POST_QUESTION";
export const SORT_BY_PRICE = 'SORT_BY_PRICE';

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
      .get("http://localhost:3001/post/title/" + search)
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

export function getUserbyId(id){
  return async function (dispatch){
    try {
      var user = await axios.get("http://localhost:3001/user/" + id);
      return dispatch({
        type: GET_USER_ID,
        payload: user.data
      })
    } catch (error) {
      console.log(error);
    }
  };
}

export function getOrderbyId(id){
  return async function (dispatch){
    try {
      var order = await axios.get("http://localhost:3001/user/" + id); //Aquí hay que cambiarle
      // console.log(order)
      return dispatch({
        type: GET_ORDER_ID,
        payload: order.data
      })
    } catch (error) {
      console.log(error);
    }
  };
}

export function getReviewbyId(id){
  return async function (dispatch){
    try {
      var review = await axios.get("http://localhost:3001/review/all/" + id); //el id es el del usuario(perfil)
      return dispatch({
        type: GET_REVIEW_ID,
        payload: review.data
      })
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserofReviewbyId(id){
  return async function (dispatch){
    try {
      var review = await axios.get("http://localhost:3001/review/" + id);
      return dispatch({
        type: GET_REVIEW_ID,
        payload: review.data
      })
    } catch (error) {
      console.log(error);
    }
  };
}

export function getMovebyId(id){
  return async function (dispatch){
    try {
      var movement = await axios.get("http://localhost:3001/user/" + id); 
      // console.log(movement)
      return dispatch({
        type: GET_MOVE_ID,
        payload: movement.data
      })
    } catch (error) {
      console.log(error);
    }
  };
}

export function getQAbyId(idUser){
  return async function (dispatch){
    try {
      var qa = await axios.get("http://localhost:3001/question/all/" + idUser); 
      return dispatch({
        type: GET_QA_ID,
        payload: qa.data
      })
    } catch (error) {
      console.log(error);
    }
  };
}


export function createAnswer(answer, id){
  return async function (dispatch){
    try {
      var info = await axios.put('http://localhost:3001/question/' + id, {answer});
      console.log(info.data)
      return dispatch ({
        type: PUT_ANSWER,
        payload: info.data
      })
    } catch (error) {
      console.log(error);
    }
  }; 
}

export function postQuestion() {
  return async function (dispatch) {
    const question = await axios.post("http://localhost:3001/question")
    return dispatch({
      type: POST_QUESTION,
      payload: question.data
    })
  }
}

export function getCategories() {
  return async function (dispatch) {
    const allCategories = await axios.get("http://localhost:3001/categories");
    return dispatch({
      type: GET_CATEGORIES,
      payload: allCategories.data,
    });
  };
}

export function sortByPrice(order) {
  return {
    type: SORT_BY_PRICE,
    payload: order
  }
}