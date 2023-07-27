import React from "react";
import "./SideBar.css";
import avatar from "../../images/avatar.svg";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div>
        <img className="sideBar__avatar" src={avatar} alt="avatar" />
      </div>
      <p className="sideBar__name">George Aktines</p>
    </div>
  );
};

export default SideBar;
