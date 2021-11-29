import React from 'react';

export default function Validate(){
    return(
        <div>
            <h2>Pulsa el botón para continuar con la confirmación de tu dirección de correo electrónico</h2>
            <button className='btn-custom btn-logout'>Validar</button>
        </div>
    )
}

// useParam /user/confirm+token

// "/user/confirm/:token" get