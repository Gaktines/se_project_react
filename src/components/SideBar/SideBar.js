import React, { useContext, useState } from "react";
import  {useHistory}  from "react-router-dom";
import "./SideBar.css";
import avatar from "../../images/avatar.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = (handleProfileEditModal) => {
  const [loggedIn, setLoggedIn] = useState(true);
 
  const showAvatar = avatar !== "" ? true : false;
  const history = useHistory();
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);
  const name = currentUser ? currentUser.name : "";
  console.log(name);

  const logout = () => {
    setLoggedIn(false);
    history.push("/");
  }
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
        <button className="sideBar__edit-button" onClick={handleProfileEditModal}>Change profile data</button>
        <button className="sideBar__logout-button" onClick={logout}>Log out</button>
      </div>
    </div>
  );
};

export default SideBar;
