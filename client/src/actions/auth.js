// import { types } from "../types";
// import { firebase, provider } from "../firebase/firebase-config";

// export const login = (uid, displayName) => ({
//   type: types.LOGIN,
//   payload: { uid, displayName },
// });

// export const logout = () => ({
//   type: types.LOGOUT,
// });

// export const startGoogleAuth = () => {
//   return (dispatch) => {
//     firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then(({ user }) => {
//         dispatch(login(user.uid, user.displayName));
//       })
//       .catch((e) => {
//         console.error(e);
//       });
//   };
// };

// export const startGoogleLogout = () => {
//   return async (dispatch) => {
//     await firebase.auth().signOut();
//     dispatch(logout());
//   };
// };
