import React from "react";

export const EmailSended = ({ inputValue }) => {
  return (
    <div className="container mt-5 text-left">
      <h1 className="font-normal text-3xl mb-5">Email enviado</h1>
      <p>
        Te enviamos un email con instrucciones para restablecer la contraseña a
        <span className="font-semibold"> {inputValue}</span>. Si no lo ves en tu bandeja de entrada,
        revisa la carpeta de correo no deseado.
      </p>
    </div>
  );
};
