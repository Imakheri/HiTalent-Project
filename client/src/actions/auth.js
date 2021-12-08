// import { firebase, googleAuthProvider } from "../firebase/firebase-config";

// export const LOGIN_GOOGLE = 'LOGIN_GOOGLE';
// export const LOGOUT = 'LOGOUT';
// // export const UI_START_LOADING = 'UI_START_LOADING';
// // export const UI_FINISH_LOADING = 'UI_FINISH_LOADING';
// // export const BASIC_AUTH = 'BASIC_AUTH';

// // export function login(user){
// //   return{
// //     type: LOGIN_GOOGLE,
// //     payload: user
// //   }
// // }



// // export const login = (uid, displayName) => ({
// //   type: types.LOGIN,
// //   payload: { uid, displayName },
// // });

// export const logout = () => ({
//   type: LOGOUT,
// });

// // export const startGoogleAuth = () => {
// //   return (dispatch) => {
// //       googleAuthProvider
// //       .then((user) => {
// //         dispatch(login(user));
// //       })
// //       .catch((e) => {
// //         console.error(e);
// //       });
// //   };
// // };

// export const startGoogleLogout = () => {
//   return async (dispatch) => {
//     await firebase.auth().signOut();
//     dispatch(logout());
//   };
// };
