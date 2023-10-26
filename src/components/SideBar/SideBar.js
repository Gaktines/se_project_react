import React, { useContext } from "react";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ handleEditModal, handleLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  const name = currentUser ? currentUser.name : "";
  const avatar = currentUser ? currentUser.avatar : undefined;
  const showAvatar = avatar !== "" ? true : false;
 
  return (
    <div className="sideBar">
      <div>
        {showAvatar ? (
          <img className="sideBar__avatar" src={avatar} alt="avatar" />
        ) : (
          <p className="avatar__placeholder">{name[0]?.toUpperCase()}</p>
        )}
      </div>
      <p className="sideBar__name">{currentUser?.name}</p>
      <div className="sideBar__buttons">
        <button className="sideBar__edit-button" onClick={handleEditModal}>
          Change profile data
        </button>
        <button className="sideBar__logout-button" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
