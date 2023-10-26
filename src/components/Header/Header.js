import "./Header.css";
import wtwrLogo from "../../images/wtwrLogo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({ onClick, loggedIn, onClickSignup, onClickLogin }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "short",
    date: "numeric",
  });
  const currentUser = useContext(CurrentUserContext);
  const avatar = currentUser ? currentUser.avatar : undefined;
  const showAvatar = avatar !== "" ? true : false;
 

  const name = currentUser ? currentUser.name : "";

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
        {loggedIn ? (
          <>
            <div>
              <button
                className="header__add-button"
                type="text"
                onClick={onClick}
              >
                + New Clothes
              </button>
            </div>
            <Link to="/profile">{currentUser?.name}</Link>
            <div>
              {showAvatar ? (
                <img className="header__avatar" src={avatar} alt="avatar" />
              ) : (
                <p className="avatar__placeholder">{name[0]?.toUpperCase()}</p>
              )}
            </div>
          </>
        ) : (
          <>
            {" "}
            <button
              className="header__nav_button"
              type="text"
              onClick={onClickSignup}
            >
              Sign Up
            </button>
            <button
              className="header__nav_button"
              type="text"
              onClick={onClickLogin}
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
