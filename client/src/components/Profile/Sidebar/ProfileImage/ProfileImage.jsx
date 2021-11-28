import React from "react";
import "./ProfileImage.css";

export const ProfileImage = () => {
  return (
    <div id="profile-img-container" className="text-center w-1/2 m-auto">
      <img
        className="rounded-full border-2 border-pfGreen"
        src="https://www.pikpng.com/pngl/b/75-756814_login-user-imagen-user-png-clipart.png"
        alt="profile"
      />
      <div className="edit-text">
        <p>Ver foto</p>
        <p>Editar foto</p>
      </div>
    </div>
  );
};
