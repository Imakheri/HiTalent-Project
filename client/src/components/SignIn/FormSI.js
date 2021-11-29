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

function Form({ onModalClick }){

    let dispatch = useDispatch()

    const [userLogin, setUserLogin] = useState({
        usuario : "",
        contraseña : "",
        mantenerSesion: false
    })

    const [state, setState] = useState({
        type : 'password',
        button : 'mostrar'
    });

    //Busqueda dentro del mockup
    let logginUser = usuarios.find(e => e.user.username === userLogin.usuario)
    

    if(logginUser){
        let exito = logginUser.user.password === userLogin.contraseña
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
            dispatch(loguearUsuario()) 
        // : alert("Contraseña Incorrecta"))
    }

    function handleSession(e){
        setUserLogin({
            ...useState,
            mantenerSesion: !userLogin.mantenerSesion
        })
    }

    const [modalIsOpen, setIsOpen] = useState(true);

    return(
        <ReactModal 
            isOpen={modalIsOpen}
            onRequestClose={onModalClick}
            contentLabel="Example Modal"
            className=" absolute m-auto max-w-max inset-16 bg-semidark border border-dark rounded-lg"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50">
            <div className="flex h-96 items-center flex-col text-white">
                <h2 className="text-3xl my-2 font-semibold">Iniciar sesion</h2>
                <form className="text-center" onSubmit={e => handleOnSubmit(e)}>
                    <input name="usuario" 
                    type="text"  
                    placeholder="Usuario / Email" 
                    onChange={e => handleOnChange(e)} 
                    required
                    className="h-8 bg-semidark border border-semilight rounded m-4"
                    />
                    <div>
                        <input name="contraseña" 
                        type={state.type} 
                        placeholder="Contraseña" 
                        onChange={e => handleOnChange(e)} 
                        required
                        className="h-8 w-4/5 bg-semidark border border-semilight rounded"
                        />
                        <button onClick={e => handleChange(e)}>
                        { state.type === 'password' ? <Visibility/> : <VisibilityOff/>}
                        </button>
                        <br/>
                    </div>
                    <label>Mantener la sesion iniciada</label>
                    <input onChange={handleSession} value="" type="checkbox"/>
                    <br/>
                    <Link to="/passwordRecovery" className="text-color-blue-200">Olvide mi contraseña</Link>
                    <div className='flex justify-center'>
                        <button className='btn-custom btn-colors justify-center mb-2'> Ingresar </button>
                    </div>
                </form>
                <button onClick={onModalClick} className="btn-custom btn-colors justify-center">Cancelar</button>
            </div>
        </ReactModal>
    )
}

export default Form;


