import React, { useState } from 'react';

export default function FormUser({profile, setProfile}){

    const [form, setForm] = useState({
        description: "",
        country: "",
        // language: "",
    })

    function handleSubmit(e){
        e.preventDefault(e)
        // setForm(pushProfileInfo())
        setProfile({
            
        });
    }

    function handleOnChange(e){
        e.preventDefault(e)
        setProfile({
            [e.target.name] : e.target.value
        })
        console.log(profile);
    }

    return(
        <section>
            <form className='space-y-6' onSubmit={(e) => handleSubmit(e)} onChange={(e) => handleOnChange(e)}>
                <div>
                    <h1>Sobre mi:</h1>
                    <textarea rows="5" cols="20" className='bg-semidark border-2 border-white rounded p-2' name='description'>{profile.description}</textarea>
                </div>
                <div>
                    <h1>Selecciona el pais:</h1>
                    <select className='h-10 w-full pl-2 justify-self-center self-center border-2 rounded-md border-white bg-semidark text-white placeholder-white border-opacity-70 px-3'>
                        <option country={profile.country}>{profile.country}</option>
                        <option country='Argentina'>Argentina</option>
                        <option country='Bolivia'>Bolivia</option>
                        <option country='Brasil'>Brasil</option>
                        <option country='Chile'>Chile</option>
                        <option country='Colombia'>Colombia</option>
                        <option country='Costa Rica'>Costa Rica</option>
                        <option country='Cuba'>Cuba</option>
                        <option country='Ecuador'>Ecuador</option>
                        <option country='El Salvador'>El Salvador</option>
                        <option country='Guatemala'>Guatemala</option>
                        <option country='Honduras'>Honduras</option>
                        <option country='Mexico'>Mexico</option>
                        <option country='Nicaragua'>Nicaragua</option>
                        <option country='Panama'>Panama</option>
                        <option country='Paraguay'>Paraguay</option>
                        <option country='Peru'>Peru</option>
                        <option country='Republica Dominicana'>Republica Dominicana</option>
                        <option country='Uruguay'>Uruguay</option>
                        <option country='Venezuela'>Venezuela</option>
                    </select>
                </div>
                {/* <div>
                    <h1>Selecciona un idioma:</h1>
                    <select className='h-10 w-full pl-2 justify-self-center self-center border-2 rounded-md border-white bg-semidark text-white placeholder-white border-opacity-70 px-3'>
                    <option language={profile.language}>{profile.language}</option>
                    <option language='Alemán'>Alemán 🇩🇪</option>
                    <option language='Francés'>Francés 🇫🇷</option>
                    <option language='Inglés'>Inglés 🇺🇸/🇬🇧</option>
                    <option language='Italiano'>Italiano 🇮🇹</option>
                    <option language='Japonés'>Japonés 🇯🇵</option>
                    <option language='Portugués'>Portugués 🇧🇷/🇵🇹</option>
                    </select>
                </div> */}
                <div className='flex justify-center space-x-4'>
                    <button className='btn-primary btn-colors' type='submit'>Guardar</button>
                    <button className='btn-primary btn-colors'>Cancelar</button>
                </div>
            </form>
        </section>
    )
}