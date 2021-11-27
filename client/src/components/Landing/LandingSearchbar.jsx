import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { searchTalent } from "../../actions";

export default function LandingSearchbar() {

    const [ search, setSearch ] = useState('')
    const dispatch = useDispatch()

    function onSubmit(e) {
        e.preventDefault()
        dispatch(searchTalent(search))
    }
    function onChange(e) {
        e.preventDefault()
        setSearch(e.target.value)
    }
    function deleteInput(e) {
        e.preventDefault()
        setSearch('')
    }
    function changeHidden(e) {
        e.preventDefault()
        e.target.hidden = ''
    }
    return (
        <div class="p-3 h-72 bg-light rounded-md m-5 flex flex-col items-center justify-around bg-opacity-70">
            <div class="flex flex-col items-center">
                <h3 class="font-semibold text-3xl">Quieres aprender algo nuevo?</h3>
                <small class="text-2xl">Busca por nuestro sitio y encuentra lo adecuado para ti</small>
            </div>
            <form onSubmit={onSubmit}>
                <div class=" bg-gray-200">
                    <div class="container  flex justify-center items-center px-4 sm:px-6 lg:px-8">
                        <div class="relative"> 
                            <input onChange={onChange} value={search} required="true" type="text" class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Prueba con 'cocinar'"/>
                            <div class="absolute top-4 right-3">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <button onClick={deleteInput} onChange={changeHidden} hidden="hidden">X</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}