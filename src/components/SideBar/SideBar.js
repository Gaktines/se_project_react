import React, { useContext } from "react";
import "./SideBar.css";
import avatar from "../../images/avatar.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({handleEditModal, handleLogout}) => {

 
  const showAvatar = avatar !== "" ? true : false;
  const currentUser = useContext(CurrentUserContext);

  const name = currentUser ? currentUser.data.name : "";
  console.log(name);

  
  return (
    <div className="sideBar">
      <div>
      {showAvatar ? (
            <img src={avatar} alt="avatar"/>
          ) : (
            <p className="avatar__placeholder">{name[0]?.toUpperCase()}</p>
          )}
      </div>
      <p className="sideBar__name">{currentUser?.data.name}</p>
      <div className="sideBar__buttons">
        <button className="sideBar__edit-button" onClick={handleEditModal}>Change profile data</button>
        <button className="sideBar__logout-button" onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
};

export default SideBar;
