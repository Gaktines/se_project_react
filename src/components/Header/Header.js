import "./Header.css";
import wtwrLogo from "../../images/wtwrLogo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({ onClick }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "short",
    date: "numeric",
  });
  const showAvatar = avatar !== "" ? true : false;
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);
  const name = currentUser.name;
  console.log(currentUser.name);
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={wtwrLogo} alt="logo" />
        </Link>
        <div className="header__date">{currentDate}</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button className="header__add-button" type="text" onClick={onClick}>
            + New Clothes
          </button>
        </div>
        <Link to="/profile">{currentUser?.data.name}</Link>
        <div>
          {showAvatar ? (
            <img src={avatar} alt="avatar"/>
          ) : (
            <p className="avatar__placeholder">{name[0]?.toUpperCase()}</p>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
