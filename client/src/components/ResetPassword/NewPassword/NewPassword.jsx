import React, { useState } from "react";

export const NewPassword = () => {
  const [newPassword, setNewPassword] = useState({
    newPass: "",
    confirmPass: "",
  });

  const handlePasswordChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewPassword({ ...newPassword, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {confirmPass, newPass} = newPassword;
    if(newPass === confirmPass){
        console.log("Enviando al backend....");
    }
    else {
        console.log("contrase;as no coinciden");
    }
    console.log(newPassword);
  };

  return (
    <div className="container mt-5 text-left">
      <h1 className="font-normal text-2xl mb-5">Cambia la contraseña</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border border-indigo-600 w-full mb-5 p-2"
          type="password"
          name="newPass"
          placeholder="Contraseña nueva"
          value={newPassword.newPass}
          onChange={handlePasswordChange}
          required
        />
        <input
          className="border border-indigo-600 w-full mb-5 p-2"
          type="password"
          name="confirmPass"
          placeholder="Confirmar contraseña nueva"
          value={newPassword.confirmPass}
          onChange={handlePasswordChange}
          required
        />
        <br />
        <button className="w-full bg-indigo-600 mt-2 p-3 text-xl text-white">
          Guardar
        </button>
      </form>
    </div>
  );
};
