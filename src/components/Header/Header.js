import "./Header.css";

const Header = ({ onClick }) => {
  const wtwrLogo = require("../../images/wtwrLogo.svg");
  const avatar = require("../../images/avatar.svg");
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={wtwrLogo.default} alt="logo" />
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
          <img src={avatar.default} alt="avatar" />
        </div>
      </div>
    </header>
  );
};
export default Header;
