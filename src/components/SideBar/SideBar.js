import React from "react";
import "./SideBar.css";
import avatar from "../../images/avatar.svg";

const SideBar = (currentUser) => {
  return (
    <div className="sideBar">
        <img className="sideBar__avatar" src={avatar} alt="avatar" placeholder=""/>
      <p className="sideBar__name">{currentUser}</p>
      <button className="sideBar__edit-button">Change profile data</button>
      <button className="sideBar__logout-button">Log out</button>
    </div>
  );
};

export default SideBar;
