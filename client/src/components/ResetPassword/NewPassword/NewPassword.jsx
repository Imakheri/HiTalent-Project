import React, { useState } from "react";

export const NewPassword = () => {
  const pfGreen = "pfGreen";
  const red = "red-500";
  const [newPassword, setNewPassword] = useState({
    newPass: "",
    confirmPass: "",
    errorMessage: "",
    error: false,
    inputBorder: pfGreen,
  });

  const handlePasswordChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewPassword({ ...newPassword, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { confirmPass, newPass } = newPassword;
    if (newPass !== confirmPass) {
      return setNewPassword({
        ...newPassword,
        errorMessage: "Las contraseñas no coinciden",
        error: true,
        inputBorder: red,
      });
    }
    if (newPass.length < 8) {
      return setNewPassword({
        ...newPassword,
        errorMessage: "La contraseña es demasiado corta",
        error: true,
        inputBorder: red,
      });
    }
    setNewPassword({
      ...newPassword,
      errorMessage: "",
      error: false,
      inputBorder: pfGreen,
    });
    return console.log("Enviando al backend");
  };

  return (
    <div className="container mt-5 text-left">
      <h1 className="font-normal text-2xl mb-5">Cambia la contraseña</h1>
      <form onSubmit={handleSubmit}>
        {newPassword.error ? (
          <p className={`text-${red} mb-1`}>{newPassword.errorMessage}</p>
        ) : (
          ""
        )}
        <input
          className={`border border-${newPassword.inputBorder} w-full mb-5 p-2`}
          type="password"
          name="newPass"
          placeholder="Contraseña nueva"
          value={newPassword.newPass}
          onChange={handlePasswordChange}
          required
        />
        <input
          className={`border border-${newPassword.inputBorder} w-full mb-5 p-2`}
          type="password"
          name="confirmPass"
          placeholder="Confirmar contraseña nueva"
          value={newPassword.confirmPass}
          onChange={handlePasswordChange}
          required
        />
        <br />
        <button className={`w-full bg-${pfGreen} mt-2 p-3 text-xl text-white`}>
          Guardar
        </button>
      </form>
    </div>
  );
};
