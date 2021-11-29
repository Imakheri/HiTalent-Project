import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/index';
import { startGoogleAuth, startFacebookAuth } from '../../actions/auth';
import ReactModal from 'react-modal';
import axios from 'axios';

export default function Register({ onModaleClick }) {
const dispatch = useDispatch();

const [modalIsOpen, setIsOpen] = useState(true);

const [input, setInput] = useState ({
    name: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    password2: '',
    birthday: ''
});

console.log("INPUT: ", input)

function handleChange(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
}
function createUser(input){
    axios.post('http://localhost:3001/user', input)
}

function auxiliar(){
    createUser(input)
    alert('¡El usuario ha sido creado correctamente!')
    setInput({
        name: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        password2: "",
        birthday: ''
    })
    setIsOpen(false)
}

function comprobacionPw(a, b){
    a === b ? 
    auxiliar() : 
    alert("Las contraseñas no coinciden")
}

function handleOnSubmit(e){
    e.preventDefault();
    comprobacionPw(input.password, input.password2)
}

const handleGoogleAuth = () => {
    dispatch(startGoogleAuth());
}

const handleFacebookAuth = () => {
    dispatch(startFacebookAuth());
}


    return(
        <ReactModal 
            isOpen={modalIsOpen}
            onRequestClose={onModaleClick}
            contentLabel="Example Modal"
            className="absolute m-auto max-w-max inset-x-0.5 top-40 bg-semidark border rounded-lg"
            overlayClassName="fixed inset-0 bg-black bg-opacity-90">
        <div className='flex justify-around bg-dark items-center w-screen text-white m-auto max-w-max inset-16 border border-dark rounded-lg'>
            <div className='flex flex-col bg-semidark bg-opacity-40 border-white border-2 rounded-lg w-80 p-8'>
                <h2 className='flex text-3xl font-extrabold mb-2'>Registro</h2>
                    <form className='flex flex-col space-y-2 mb-6 ' onSubmit={(e) => handleOnSubmit(e)}>
                        <input className='h-4 py-5 border-b-2 bg-semidark bg-opacity-0 border-white outline-none placeholder-white' placeholder='Nombre' type='text' value={input.name} name='name' onChange={(e) => handleChange(e)} required/>
                        <input className='h-4 py-5 border-b-2 bg-semidark bg-opacity-0 border-white outline-none placeholder-white' placeholder='Apellido' type='text' value={input.lastName} name='lastName' onChange={(e) => handleChange(e)} required/>
                        <input className='h-4 py-5 border-b-2 bg-semidark bg-opacity-0 border-white outline-none placeholder-white' placeholder='Correo electrónico' type='email' value={input.email} name='email' onChange={(e) => handleChange(e)} required/>
                        <input className='h-4 py-5 border-b-2 bg-semidark bg-opacity-0 border-white outline-none placeholder-white' placeholder='Nombre de usuario' type='text' value={input.username} name='username' onChange={(e) => handleChange(e)} required/>
                        <input className='h-4 py-5 border-b-2 bg-semidark bg-opacity-0 border-white outline-none placeholder-white' placeholder='Contraseña' type='password' value={input.password} name='password' onChange={(e) => handleChange(e)} required/>
                        <input className='h-4 py-5 border-b-2 bg-semidark bg-opacity-0 border-white outline-none placeholder-white' placeholder='Repite la contraseña' type='password' value={input.password2} name='password2' onChange={(e) => handleChange(e)} required/>
                        <div className='flex flex-col'>
                            <label className='mt-2'>Fecha de Nacimiento</label>
                            <input className='bg-semidark text-center hover:bg-dark transition duration-300 ease-in-out rounded-lg' type='date' value={input.birthday} name='birthday' onChange={(e) => handleChange(e)} required/>
                        </div>
                    </form>
                <div className='flex justify-center mb-2'>
                    <button className='btn-custom btn-colors' type='submit'>Registrarme</button>
                </div>      
                    </form>
                <div className='mt-2'>
                    <button className='btn-social' onClick={handleGoogleAuth}><img className='w-7 h-5 m-2' alt='Google logo'  src='http://codes.unidepix.com/img/google.svg'/>Inicia sesión con Google</button>
                    <button className='btn-social' onClick={handleFacebookAuth}><img className='w-7 h-5 m-2' alt='Facebook logo' src='http://codes.unidepix.com/img/facebook.svg'/>Inicia sesión con Facebook</button>
                </div>  
                <div className='flex justify-center content-center items-center m-4'>
                    <p className='text-sm mr-2'>¿Ya tienes cuenta?</p><button className='text-1xl font-semibold'>Iniciar sesión</button>
                </div>
            </div>
        </div>
            </ReactModal>
    )

}