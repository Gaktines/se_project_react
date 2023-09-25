import React from "react";
import "./SideBar.css";
import avatar from "../../images/avatar.svg";

const SideBar = (currentUser) => {
  return (
    <div className="sideBar">
        <img className="sideBar__avatar" src={avatar} alt="avatar" />
      <p className="sideBar__name">{currentUser}</p>
    </div>
  );
};

export default SideBar;
