
function BotonOptions({estado ,botonClick, value, funcionBorrar}){
    return(
        <div>
          {estado ?
            <button value={value} onClick={funcionBorrar}>Eliminar</button> 
            : (
            <div>
              <button value={value} onClick={botonClick}>Aprobar</button>
              <button value={value} onClick={funcionBorrar}>Eliminar</button>
            </div>
            )
          }
        </div>
    )
}

export default BotonOptions;