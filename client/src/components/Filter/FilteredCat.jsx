import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { filteredCat, getCategories } from "../../actions";


export function FilteredCat(){
    const dispatch= useDispatch();
    
        useEffect(() => {
            dispatch(getCategories())
        }, [dispatch])

    let categories = useSelector(state => state.index.categories)

    function handleCatFilter(e){
        e.preventDefault();
        dispatch(filteredCat(e.target.value));
    };

    return (
         <div>
             <span>Categorias: </span>
             <select onChange= {(e) => handleCatFilter(e)}>
             <option value='todas'>Todas</option>
             {categories.map(el => {
                 return(
                    <option value={el.title} key={el.id}>{el.title}</option>
                 )
             })}
                    </select>
                </div>
           )
       };
       
    /* <option value='Programación y Tecnologias'>Programación y Tecnologias</option>
    <option value='Arte'>Arte</option>
    <option value='Botánica'>Botánica</option>
    <option value='Cocina'>Cocina</option>
    <option value='Negocios'>Negocios</option>
    <option value='Deporte'>Deporte</option>
    <option value='Música y Audio'>Música y Audio</option>
    <option value='Ilustración, Video y Fotografia'>Ilustración, Video y Fotografia</option>
    <option value='Marketing'>Marketing</option>
    <option value='Escritura y Traducción'>Escritura y Traducción</option>
    <option value='Idioma'>Idioma</option>
    <option value='Baile'>Baile</option>
    <option value='Historia y Cultura'>Historia y Cultura</option>
    <option value='Educación'>Educación</option>
    <option value='Mantenimiento del hogar'>Mantenimiento del hogar</option> */