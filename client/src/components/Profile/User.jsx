import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserbyId } from '../../actions';
import defaultImage from '../../assets/profile_default.png'
import {useState} from "react"
import axios from "axios"

export default function Profile(){
    const { id } = useParams();
    
    const dispatch = useDispatch();
    const user = useSelector((state) => state.index.profile)
    const[file,setFile]=useState(null)
    const [previewSource,setPreviewSource]=useState()
    var flag=false

    useEffect(() => {
        console.log("estoy en el useffect")
        dispatch(getUserbyId(id));
    },[dispatch, id,flag])

    function  handleSubmit(e) {
        let fb=new FormData()
        fb.append("username",user.username)
        fb.append("image",file)
        axios({
            method: "put",
            url: "http://localhost:3001/user",
            data: fb,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(res => console.log(res))
        .catch(err => console.log(err));
        dispatch(getUserbyId(id));
        setPreviewSource(null)

    }
    function  previewFile(file) {
        const reader=new FileReader()
        reader.readAsDataURL(file)
        setPreviewSource(reader.result)
    
    }
    function  handleFile(e) {
        setFile(e.target.files[0])
        previewFile(e.target.files[0])
    }
    return(
        <div>
        {!user ? (<h2>Cargando...</h2>) : (
        <div className='flex flex-col items-center py-10 px-8 bg-dark border-2 text-white border-white rounded-lg space-y-6'>
            <div>
                <img className='rounded-full border-4 border-semilight w-72' src={user.image? user.image : defaultImage} alt={user.username}/>
            </div>
            <button onClick={handleSubmit}>agregar imagen</button>
            <label>imagen de perfil</label>
            <input  
                                onChange={handleFile} 
                                type="file" 
                                name="image"
                                required />
            {previewSource&&<img scr={previewSource} style={{height:"150px"}}/>}
            <div className='flex flex-col w-full'>
                <h4 className='text-2xl font-medium italic underline'>{user.fullName}</h4>
                <h5 className='text-xl text-gray'>{user.username}</h5>
            </div>
            {/* <div className='flex items-center w-full h-6 bg-dark border border-white rounded-md'>
                <div className='flex flex-row items-center h-5 w-9/12 bg-purple rounded-md'>
                    <div className='flex justify-center text-xs ml-2 font-medium'>
                        Nivel 5
                    </ div>
                </div>
            </div> */}
            <div>
                <p>Usuario desde: {user.createdAt}</p>
            </div>
            <div className='flex flex-col justify-start space-y-6'>
                <div>
                    <p>{user.country}</p>
                </div>
                <div>
                    <p>{user.id}</p>
                </div>
                <div>
                    <h5 className='font-medium'>Idiomas:</h5>
                    <p>Español 	&#127466;&#127480;, Inglés &#127482;&#127480;, Japonés &#127471;&#127477;</p>
                </div>
                <h5 className='font-medium'>Métodos financieros asociados:</h5>
                <div className='flex'>
                    <button><img className='h-6 bg-semilight rounded border-2 border-semilight mr-2' alt='Facebook logo' src='http://codes.unidepix.com/img/card.png'/></button>
                    <button><img className='h-6 bg-semilight rounded border-2 border-semilight mr-2' alt='Paypal logo' src='https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg'/></button>
                    <button><img className='h-6 bg-semilight rounded border-2 border-semilight mr-2' alt='MercadoPago logo' src='http://codes.unidepix.com/img/mercadopago.png'/></button>    
                </div>
                    <h5 className='font-medium'>Redes sociales:</h5>
                <div>
                    <button><img className='w-7 h-7 mr-2' alt='Facebook logo' src='http://codes.unidepix.com/img/facebook.svg'/></button>
                    {/* {!user.social ? '' : (<button><img className='w-7 h-7 mr-2' alt='Facebook logo' src='http://codes.unidepix.com/img/facebook.svg'/></button>)} */}
                    <button><img className='w-7 h-7 mr-2' alt='Google logo' src='http://codes.unidepix.com/img/google.svg'/></button>
                </div>
            </div>
        </div>
        )}
        </div>
    )
}