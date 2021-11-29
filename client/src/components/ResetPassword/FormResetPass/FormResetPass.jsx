import React from "react";

export const FormResetPass = ({
  handleSubmit,
  handleInputChange,
  inputValue,
}) => {
  return (
    <div className="container mt-5 text-left">
      <h1 className="font-semibold text-4xl mb-5">¿Olvidaste tu contraseña?</h1>
      <p className="my-3">
        Te enviaremos un email con instrucciones sobre cómo restablecer tu
        contraseña.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-indigo-600 w-full p-2"
          type="email"
          placeholder="nombre@ejemplo.com"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
        <br />
        <button className="w-full bg-indigo-600 mt-4 p-3 text-xl text-white">
          Enviar un email
        </button>
      </form>
    </div>
  );
};
