import React from "react";


export default function LandingSearchbar() {
    return (
        <div class="p-3 h-72 bg-light rounded-md m-5 flex flex-col items-center justify-around bg-opacity-70">
            <div class="flex flex-col items-center">
                <h3 class="font-semibold text-3xl">Quieres aprender algo nuevo?</h3>
                <small class="text-2xl">Busca por nuestro sitio y encuentra lo adecuado para ti</small>
            </div>
            <div>
                <form>
                    <input type="text" class="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" placeholder="Pueba con 'cocina'..."/>
                </form>
            </div>
        </div>
    )
}
