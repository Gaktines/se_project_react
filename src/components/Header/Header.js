import "./Header.css";
import wtwrLogo from "../../images/wtwrLogo.svg";
import avatar from "../../images/avatar.svg";

const Header = ({ onClick }) => {
 
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={wtwrLogo} alt="logo" />
        </div>
        <div>Fountain,Co</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button className="header__add-button" type="text" onClick={onClick}>
            + New Clothes
          </button>
        </div>
        <div>George Aktines</div>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};
export default Header;
