import "./UnAuthHeader.css";
import wtwrLogo from "../../images/wtwrLogo.svg";
import avatar from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const UnAuthHeader = ({ onClick }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={wtwrLogo} alt="logo" />
        </Link>
        <div>Fountain,Co</div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button className="header__add-button" type="text" onClick={onClick}>
            + New Clothes
          </button>
        </div>
        <Link to="/signUp">Sign Up</Link>
        <Link to="/signIn">Log In</Link>
        <div>
          <img src={avatar} alt="avatar" placeholder=/>
        </div>
      </div>
    </header>
  );
};
export default UnAuthHeader;
