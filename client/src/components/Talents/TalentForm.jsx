import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../actions';
import {useNavigate } from "react-router-dom";
import NavBar from './BarraNav/NavBar';
import Footer from '../Landing/Footer';

function TalentForm(){

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let usuario = useSelector(state => state.index.user.username);
    let categories = useSelector(state => state.index.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    
    const [file, setFile]=useState(null)
    const [form, setForm] = useState({
        title: "",
        description: "",
        duration: "", 
        cost: "", 
        category: ""
    })

    //! VER EL PATH
    const [ventanaModal, setVentanaModal] = useState(false)
    

    function handleOnChange(e){
        if(e.target.name === "image"){
            console.log("IMAGEN",e.target.value)
            setFile(e.target.files[0])
        }
        else{
            setForm({
                ...form,
                [e.target.name] :  e.target.value
            })
        }
    }

    const handleOnSelect = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            category : e.target.value
        })
    }

    let filteredCategories = categories.filter(el => el.title !== form.category)
        
    const onSubmit = (e) => {
        e.preventDefault();
        setVentanaModal(true)
    }
    const changeModal = (e) => {
        e.preventDefault();
        setVentanaModal(!ventanaModal)
    }
    
    function onSubmitForm(e){
        e.preventDefault()
        let fb= new FormData()
        fb.append("username", usuario)
        fb.append("title",form.title)
        fb.append("description",form.description)
        fb.append("duration",form.duration)
        fb.append("cost",form.cost)
        fb.append("image",file)
        fb.append("category",form.category)
        axios({
            method: "post",
            url: "http://localhost:3001/post",
            data: fb,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(res => console.log(res))
          .catch(err => console.log(err));
          alert("Curso creado satisfactoriamente")
        navigate("/home");
    }

    return(
        <div >
            <NavBar/>
            <div className=" min-h-screen min-w-full">
                <form onSubmit={e => onSubmit(e)} className="grid grid-cols-4 auto-rows-min gap-2" >
                    <h1 className="col-start-1 col-end-5 justify-self-center self-center text-dark underline text-3xl font-semibold" >Crea un nuevo curso en base a tu talento!</h1>
                    <input 
                    className="h-8 row-start-2 col-start-1 col-end-3 w-80 justify-self-center self-center border-2 rounded-md border-dark border-opacity-70 text-center"
                    onChange={handleOnChange} 
                    type="text" 
                    name="title"  
                    placeholder="Nombre curso" 
                    required
                    />
                    <label class="row-start-3 col-start-1 col-end-3" >Descripcion:</label>
                    <textarea 
                        onChange={handleOnChange} 
                        className=" resize-none overflow-y-auto row-start-3 col-start-1 col-end-3 w-80 justify-self-center self-center border-2 rounded-md border-dark border-opacity-70 text-center p-8"  
                        name="description" 
                        rows="8" cols="25"  
                        placeholder="Ingrese la descripcion del curso" 
                        required
                    />
                    <label className="row-start-4 col-start-1 col-end-3">Duracion:</label>  
                    <input 
                        className="row-start-4 col-start-1 col-end-3 h-12 w-80 justify-self-center self-center border-2 rounded-md border-dark border-opacity-70 bg-light px-3"
                        onChange={handleOnChange} 
                        type="number" 
                        name="duration"  
                        placeholder="Duracion | Horas"
                        required
                    />
                    <div className="grid col-start-3 col-end-5">
                        {/* <img src="image(1).png" alt="portada" /> */}
                        <label class="" >Seleccione su imagen:</label>
                        <input 
                            className="bg-dark justify-self-center self-end " 
                            onChange={handleOnChange} 
                            type="file" 
                            name="image"
                            required
                        />
                    </div>
                    <input 
                        className="row-start-4 col-start-3 col-end-5 h-12 w-80 justify-self-center self-center border-2 rounded-md border-dark border-opacity-70 bg-light px-3"
                        onChange={handleOnChange} 
                        type="number" 
                        name="cost"  
                        placeholder="Precio | Dolares"
                        required
                    />
                    <select 
                    className="col-start-3 col-end-5 h-12 w-56 justify-self-center self-center"
                    onChange={e => handleOnSelect(e)}
                    >
                    <option>Selecciona una categoria</option>
                        {
                            !categories ? 
                            <option>Cargando</option> : 
                            (categories.map(el => {
                                return(
                                    <option key={el.id}
                                    name="category">
                                    {el.title}
                                    </option>
                                )
                            }))
                        }
                    </select>
                    <button className="col-start-1 col-end-5 bg-semidark w-32 rounded-md font-semibold m-3"> Revisar </button>
                    
                    <Link to="/home">
                    <button className="col-start-1 col-end-5 bg-semidark w-32 rounded-md font-semibold m-3"> Volver </button>
                    </Link>
                    { !ventanaModal ? console.log("") : 
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
                                <select onChange={e => handleOnSelect(e)}>
                                {
                                    form.category ? <option>{form.category}</option>
                                    : <option>Selecciona una categoria</option>}
                                {
                                    !filteredCategories ? 
                                    <option>Cargando</option> : 
                                    (filteredCategories.map(el => {
                                        return(
                                            <option key={el.id}
                                            name="category">
                                            {el.title}
                                            </option>
                                        )
                                    }))
                                }
                                </select>
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
            <Footer/>
        </div>
    )
}

export default TalentForm;