import axios from 'axios';
import { useEffect, useState } from 'react';
import NavAdmin from './NavAdmin';
import AdminData from './AdminData';
import NavBar from '../Talents/BarraNav/NavBar';

function AdminProfile(){

    let [data, setData] = useState({
        user: [],
        posts: [],
        review: [],
    })

    let [pestaña, setPestaña] = useState("user")

    useEffect(()=>{
        axios.get(`http://localhost:3001/admin`)
        .then(res => setData({
            user: res.data.users,
            post: res.data.posts,
            review: res.data.review
        }))
    },[pestaña])

    return(
        <div className='bg-light h-screen'>
            <NavBar />
            <div className='flex flex-col'>
                <NavAdmin setPestaña={setPestaña}/>
                <AdminData pestaña={pestaña} data={data} setData={setData}/>
            </div>
        </div>
    )
}

export default AdminProfile;