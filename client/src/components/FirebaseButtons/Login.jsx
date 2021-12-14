import { auth, provider } from '../../firebase/firebase-config';

function Login(){


  function loguearGoogle(){
    auth
  .signInWithPopup(provider)
  .then((result) => {
    let credential = result.credential;
    console.log("USUARIO LOGUEADO CON GOOGLE :", credential)
    // ...
  }).catch((error) => {
    console.log("USUARIO no LOGUEADO CON GOOGLE :(")
    // ...
  });

}

//TODO CON ESTO ELIMINO EL USUARIO ACTUAL DE FIREBASE EN -FIREBASE-
function eliminarUsuario(){
  let user = auth.currentUser;
    user.delete().then((res) => {
      console.log("USUARIO ELIMINADO", res)
    }).catch((error) => {
      console.log("error; ", error)
    });
}


  return(
    <div>
      <button onClick={loguearGoogle}>LOGUEAR CON GOOGLE</button>
    </div>
  )
}

export default Login;
