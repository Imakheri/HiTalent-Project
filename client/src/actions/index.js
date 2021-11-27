import axios from 'axios';

export function createUser(payload){
    return async function(){
        const newUser = await axios.post('http://localhost:3001/user', payload)
        return newUser;
    }
}