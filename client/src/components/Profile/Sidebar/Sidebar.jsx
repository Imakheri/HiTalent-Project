import React, { useState } from "react";
import { ProfileImage } from "./ProfileImage/ProfileImage";
import { UserInfo } from "./UserInfo/UserInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

export const Sidebar = () => {
  const [sideBar, setSideBar] = useState({
    showSidebar: "hide",
  });
  const showSideBar = () => {
    setSideBar({ ...sideBar, showSidebar: "show" });
    document.body.style.overflow = "hidden";
  };
  const closeSideBar = () => {
    setSideBar({ ...sideBar, showSidebar: "hide" });
    document.body.style.overflow = "auto";
  };

  return (
    <div id="sidebar-profile" className={`${sideBar.showSidebar}`}>
      <ProfileImage />
      <UserInfo />
      <button className="sidebar-close" onClick={closeSideBar}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <button className="sidebar-button" onClick={showSideBar}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};
