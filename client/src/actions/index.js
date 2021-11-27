import axios from 'axios'

export const SEARCH_TALENT = 'SEARCH_TALENT'


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