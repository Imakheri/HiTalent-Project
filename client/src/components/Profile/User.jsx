import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserbyId, PROXY } from '../../actions';
import defaultImage from '../../assets/profile_default.png'
import {useState} from "react"
import axios from "axios"
import FormUser from '../Profile/FormUser';
//import { Box, Image, Button } from '@chakra-ui/react';

export default function Profile({modal}){

    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.index.profile)
    console.log(user);
    const [profile, setProfile] = useState({
        description: `${user.resume}`,
        language: `${user.language}`,
        country: `${user.country}`,
        editable: false,
    })
    
    useEffect(() => {
        dispatch(getUserbyId(id));
    },[modal, profile])

    function handleOnClick(e){
        e.preventDefault();
        modal(true);
    }

    function editProfile(e){
        setProfile({
            ...profile,
            editable: true
        });
        
    }

    return(
        <div>
        {!user ? (<h2>Cargando...</h2>) : (
        <div className='flex flex-col items-center py-10 px-8 bg-dark border-2 text-white border-white rounded-lg space-y-6 '>
            <div>
                <div>
                    <img className='rounded-full border-4 border-semilight w-72' src={user.image? user.image : defaultImage} alt={user.username}/>
                </div>
                <div className='flex opacity-30 relative bottom-14 left-40 justify-center items-center w-12 h-12 bg-gray rounded-full shadow-xl hover:opacity-100 duration-70'>
                    <button  onClick={(e) => handleOnClick(e)}><img width='44px' heigth='44px' src='https://codes.unidepix.com/img/photo.svg' alt='Photo icon' /></button>
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <h4 className='text-2xl font-medium italic underline'>{user.fullName}</h4>
                <h5 className='text-xl text-gray'>{user.username}</h5>
            </div>

            <div className='flex flex-col justify-start space-y-6'>

             <div>
                <p className='font-semibold text-lg'>Usuario desde:</p>
                <p> {user.createdAt.slice(0, 10)}</p>
            </div>
            {profile.editable ? (<FormUser profile={profile} setProfile={setProfile} />) : (
                <div>
                    <div className='flex justify-center pb-6'>
                        <button onClick={(e) => editProfile(e)} className='btn-custom btn-colors border border-semilight w-11/12'>Editar perfil</button>
                    </div>

                    <div className='pb-4'>
                        <p className='font-bold text-lg pb-2'>Sobre mi: </p>
                        <p>{user.resume}</p>
                    </div>

                    <div className='pb-4'>
                        <p className='font-bold text-lg pb-2'>Pais: </p>
                        <p>{user.country}</p>
                    </div>

                    <div>
                        <p className='font-bold text-lg pb-2'>Idiomas: </p>
                        <p>{user.language}</p>
                    </div>

                </div>
                    )}
            </div>
        </div>
        )}
        </div>
    )
}