
function BotonOptions({estado ,botonClick, value, funcionBorrar, name}){
    return(
        <div>
          {estado ?
            <button value={value} onClick={funcionBorrar}>Eliminar</button> 
            : (
            <div>
              <button className="mr-3" value={value} onClick={botonClick}>Aprobar</button>
              <button className="ml-3" value={value} onClick={funcionBorrar}>Eliminar</button>
            </div>
            )
          }
        </div>
    )
}

export default BotonOptions;