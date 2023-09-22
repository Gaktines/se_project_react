import "./UnAuthHeader.css";
import wtwrLogo from "../../images/wtwrLogo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const UnAuthHeader = ({ onClick }) => {
    const currentDate = new Date().toLocaleString("default", {
        month: "long",
        date: "numeric",
    });
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
        <Link to="/signUp">Sign Up</Link>
        <Link to="/signIn">Log In</Link>
      </div>
    </header>
  );
};
export default UnAuthHeader;
