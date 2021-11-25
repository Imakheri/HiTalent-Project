import React, { useState } from 'react';

function Form(){

    const [state, setState] = useState({
        type : 'password',
        button : 'mostrar'
    });

    function handleChange(e){
        e.preventDefault();
        state.type === 'password' ? 
        setState({type : 'text', button: 'ocultar'}) :
        setState({type : 'password', button: 'mostrar'})
    }

    function handleOnSubmit(e){
        e.preventDefault();
        alert("Ingreso exitoso")
    }

    return(
        <div className="flex bg-dark min-h-screen justify-center items-center flex-col">
                <h1 className="text-5xl">HiTalent</h1>
            <div className="flex bg-semilight h-96 justify-center items-center flex-col">
                <h2>Iniciar sesion</h2>
                <form className="text-center" onSubmit={e => handleOnSubmit(e)}>
                    <label >Usuario</label><br/>
                    <input type="text"  placeholder="Usuario" required/>
                    <div>
                        <label>Contraseña</label><br/>
                        <input type={state.type} placeholder="Contraseña" required/>
                        <input type="button" value={state.button} onClick={e => handleChange(e)}/>
                    </div>
                    <button> Ingresar </button>
                </form>
            </div>
        </div>

    )
}

export default Form;