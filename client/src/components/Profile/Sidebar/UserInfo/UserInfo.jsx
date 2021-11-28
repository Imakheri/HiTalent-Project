import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faUserEdit,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import "./UserInfo.css";

export const UserInfo = () => {
  return (
    <div id="user-info" className="mt-2 text-left">
      <h1>Nombre y Apellido</h1>
      <ul>
        <li>Nombre de Usuario {<FontAwesomeIcon icon={faEdit} />} </li>
        <li>Contraseña {<FontAwesomeIcon icon={faEdit} />}</li>
        <li>Editar Perfil {<FontAwesomeIcon icon={faUserEdit} />}</li>
        <li>Tarjetas asociadas {<FontAwesomeIcon icon={faCreditCard} />}</li>
      </ul>
      <div id="level-info" className="mt-3 rounded-full border-pfGreen-light">
        <p className="ml-2">Lv.2</p>
        <p>60 / 100</p>
        <p className="mr-2">Lv.3</p>
      </div>
    </div>
  );
};
