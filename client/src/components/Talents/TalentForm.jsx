import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useSelector } from 'react-redux';

function TalentForm(){

    // let usuario = useSelector(state => state.index.username);
    

    // const [categorias, setCategorias] = useState();

    // useEffect(e => {
    //     axios.get("http://localhost:3001/categories")
    //     setCategorias()
    // }, [usuario])

    // console.log("categorias",categorias)


    const [form, setForm] = useState({
        title: "",
        description: "",
        duration: "", 
        cost: "", 
        image: [],
        category: ""
    })
    console.log(form)
    //! VER EL PATH
    const [ventanaModal, setVentanaModal] = useState(false)
    

    function handleOnChange(e){
        if(e.target.name === "image"){
            setForm({
            ...form,
            [e.target.name] :  [...form.image ,e.target.value]
        })} else{
            setForm({
                ...form,
                [e.target.name] :  e.target.value
            })
        }
    }
        
    const onSubmit = (e) => {
        e.preventDefault();
        setVentanaModal(true)
    }

    const changeModal = (e) => {
        e.preventDefault();
        setVentanaModal(!ventanaModal)
    }

    // const onSubmitForm = (e) => {
    //     e.preventDefault()
    //     axios.post("http://localhost:3001/post", form)
    //     .then(res => res)
    // }

    function onSubmitForm(e){
        e.preventDefault()
        let fb= new FormData()
        // let testfb=new FormData()
        //!cambiar hernan1234 por usuario linea:9
        fb.append("username", "hernan1234")
        fb.append("title",form.title)
        fb.append("description",form.description)
        fb.append("duration",form.duration)
        fb.append("cost",form.cost)
        fb.append("image",form.image[0])
        let a = axios.post("http://localhost:3001/post", fb)
        console.log(a)
    }

    return(
        <div className="bg-semilight min-h-screen min-w-full flex items-center justify-center flex-col">
            <form onSubmit={e => onSubmit(e)} className="flex flex-col">
                <input 
                onChange={handleOnChange} 
                type="text" 
                name="title"  
                placeholder="Nombre curso" 
                />
                <textarea 
                    onChange={handleOnChange} 
                    className="bg-dark resize-none overflow-y-auto" 
                    name="description" 
                    rows="8" cols="25"  
                    placeholder="Ingrese la descripcion del curso" 
                />  
                <input 
                    onChange={handleOnChange} 
                    type="number" 
                    name="duration"  
                    placeholder="Duracion | Horas"
                />
                <input 
                    onChange={handleOnChange} 
                    type="number" 
                    name="cost"  
                    placeholder="Precio | Dolares"
                />
                <input 
                    onChange={handleOnChange} 
                    className="bg-dark" 
                    name="image"  
                    type="file" 
                    placeholder="Arrastra aqui tus imagenes"
                    //! Aca tengo que poner los tipos de archivos que admite
                    accept="image/*,.pdf"
                    multiple
                />
                <select>
                    <option>Algo</option>
                    <option>Algo2</option>
                    <option>Algo3</option>
                    <option>Algo4</option>
                    <option>Algo5</option>
                </select>
                <button> Revisar </button>
                { !ventanaModal ? console.log("No hay ventana modal") : 
                (<ReactModal
                    isOpen={ventanaModal}
                    onRequestClose={changeModal}
                    contentLabel="Example Modal"
                    // className=" absolute m-auto max-w-max inset-x-0 top-40 bg-dark border-2 border-white rounded-lg"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-90"
                  >
                    <div className="bg-semilight min-h-screen min-w-full flex items-center justify-center flex-col">
                        <form onSubmit={e => onSubmitForm(e)} className="flex flex-col">
                            <input 
                                onChange={handleOnChange} 
                                type="text" 
                                name="title"  
                                value={form.title}
                                placeholder="Nombre curso" 
                            />
                            <textarea 
                                onChange={handleOnChange} 
                                className="bg-dark resize-none overflow-y-auto" 
                                name="description" 
                                rows="8" cols="25"  
                                value={form.description}
                                placeholder="Ingrese la descripcion del curso" 
                            />  
                            <input 
                                onChange={handleOnChange} 
                                type="number" 
                                name="duration"  
                                value={form.duration}
                                placeholder="Duracion | Horas"
                            />
                            <input 
                                onChange={handleOnChange} 
                                type="number" 
                                name="cost"  
                                value={form.cost}
                                placeholder="Precio | Dolares"
                            />
                            <input 
                                onChange={handleOnChange} 
                                className="bg-dark" 
                                name="image"  
                                type="file" 
                                placeholder="Arrastra aqui tus imagenes"
                                accept="image/*,.pdf"
                                multiple
                            />
                            <Link to="/home">
                                <button>Cancelar</button>
                            </Link>
                            <button>Crear curso</button>
                        </form>
                    </div>
                </ReactModal>)
                }
            </form>
        </div>
    )
}

export default TalentForm;