import React, { useState } from 'react';
//MockUP
import usuarios from './DataFormSI';
//
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import { loguearUsuario } from '../../actions/index'
import { useDispatch } from "react-redux";
import { startFacebookAuth, startGoogleAuth } from '../../actions/auth';

function Form({ onModalClick }){

    let dispatch = useDispatch()

    const [userLogin, setUserLogin] = useState({
        username : "",
        password : "",
        mantenerSesion: false
    })

    const [state, setState] = useState({
        type : 'password',
        button : 'mostrar'
    });

    //Busqueda dentro del mockup
    let logginUser = usuarios.find(e => e.user.username === userLogin.username)
    

    if(logginUser){
        let exito = logginUser.user.password === userLogin.password
    }
    //

    function handleOnChange(e){
        setUserLogin({
            ...userLogin,
            [e.target.name] : e.target.value
        })
    }

    function handleChange(e){
        e.preventDefault();
        state.type === 'password' ? 
        setState({type : 'text', button: 'ocultar'}) :
        setState({type : 'password', button: 'mostrar'})
    }

    //Comprobacion de usuario 
    function handleOnSubmit(e){
        e.preventDefault();     
        // COMPROBACION DE USUARIO Y CONTRASEÑA
        // !logginUser ? alert("Usuario no registrado") : 
        // (userLogin.contraseña === logginUser.user.password ?
        //
            dispatch(loguearUsuario(userLogin)) 
        // : alert("Contraseña Incorrecta"))
    }

    function handleSession(e){
        setUserLogin({
            ...useState,
            mantenerSesion: !userLogin.mantenerSesion
        })
    }

    const [modalIsOpen, setIsOpen] = useState(true);

    const handleGoogleAuth = () => {
        dispatch(startGoogleAuth());
    }

    const handleFacebookAuth = () => {
        dispatch(startFacebookAuth());
    }

    return(
        <ReactModal 
            isOpen={modalIsOpen}
            onRequestClose={onModalClick}
            contentLabel="Example Modal"
            className=" absolute m-auto max-w-max inset-x-0 top-40 bg-dark border-2 border-white rounded-lg"
            overlayClassName="fixed inset-0 bg-black bg-opacity-90">
            <div className="flex h-96 items-center flex-col bg-semidark bg-opacity-40 text-white w-96 space-y-4">
                <h2 className="text-3xl my-2 font-semibold">Iniciar sesion</h2>
                <form className="text-center space-y-4" onSubmit={e => handleOnSubmit(e)}>
                    <div className='flex flex-col space-y-4'>
                        <div className='w-full rounded'>
                        <input name="username" 
                        type="text"  
                        placeholder="Usuario / Email" 
                        onChange={e => handleOnChange(e)} 
                        required
                        className="h-8 w-11/12 bg-semidark bg-opacity-0 border-b-2 focus:outline-none placeholder-white"
                        />
                        </div>
                        <div className='w-full rounded'>
                            <input name="password" 
                            type={state.type} 
                            placeholder="Contraseña" 
                            onChange={e => handleOnChange(e)} 
                            required
                            className="h-8 w-4/5 bg-semidark bg-opacity-0 border-b-2 focus:outline-none placeholder-white"
                            />
                            <button className='border-b-2 border-white'onClick={e => handleChange(e)}>
                            { state.type === 'password' ? <Visibility/> : <VisibilityOff/>}
                            </button>
                            <br/>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <label>Recuérdame</label>
                        <input className='ml-2' onChange={handleSession} value="" type="checkbox"/>
                        <Link to="/passwordRecovery" className="ml-14">Olvide mi contraseña</Link>
                    </div>
                    <div className='flex'>
                        <button className='btn-custom btn-colors mb-2 mr-2'>Ingresar</button>
                        <button onClick={onModalClick} className="btn-custom btn-colors ml-2">Cancelar</button>
                    </div>
                </form>
                <div className='flex flex-col space-y-4'>
                    <button className='btn-social' onClick={handleGoogleAuth}><img className='w-7 h-7 mr-2' alt='Google logo'  src='http://codes.unidepix.com/img/google.svg'/>Inicia sesión con Google</button>
                    <button className='btn-social' onClick={handleFacebookAuth}><img className='w-7 h-7 mr-2' alt='Facebook logo' src='http://codes.unidepix.com/img/facebook.svg'/>Inicia sesión con Facebook</button>
                </div>
                <div className='flex justify-center content-center items-center m-4'>
                    <p className='text-sm mr-2'>¿No tienes cuenta?</p><button className='text-1xl font-semibold'>¡Registrate ahora!</button>
                </div>
            </div>
        </ReactModal>
    )
}

export default Form;


