import React, { useContext, useState } from "react";
import  {useHistory}  from "react-router-dom";
import "./SideBar.css";
import avatar from "../../images/avatar.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = () => {
  const [activeModal, setActiveModal] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const history = useHistory();
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);

  const openProfileEditModal = () => {
    setActiveModal("edit");
  };

  const closeProfileEditModal = () => {
    setActiveModal("");
  }

  const logout = () => {
    setLoggedIn(false);
    history.push("/");
  }
  return (
    <div className="sideBar">
      <img
        className="sideBar__avatar"
        src={avatar}
        alt="avatar"
        placeholder=""
      />
      <p className="sideBar__name">{currentUser?.name}</p>
      <div className="sideBar__buttons">
        <button className="sideBar__edit-button" onClick={openProfileEditModal}>Change profile data</button>
        <button className="sideBar__logout-button" onClick={logout}>Log out</button>
      </div>
    </div>
  );
};

export default SideBar;
