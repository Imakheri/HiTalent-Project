import React from "react";
import { ProfileContent } from "./ProfileContent/ProfileContent";
import { Sidebar } from "./Sidebar/Sidebar";

export const Profile = () => {
  return (
    <div className="container mt-5">
      <Sidebar />
      <ProfileContent />
    </div>
  );
};
