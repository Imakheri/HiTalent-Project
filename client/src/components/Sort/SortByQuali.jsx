// import React from "react";
// import { sortByQuali } from "../../actions";
// import { useDispatch } from 'react-redux';

// export function SortByQuali(){
//     const dispatch = useDispatch();

//     function handleSort(e){
//         e.preventDefault();
//         dispatch(sortByQuali(e.target.value))
//     };

//     return (
//         <div>
//         <label class='font-semibold'>Calificación: </label>
//         <select onChange={(e) => handleSort(e)}>
//             <option default value=''></option>
//             <option value='baja'>Baja</option>
//             <option value='alta'>Alta</option>
//         </select>
//        </div>
//     )
// };