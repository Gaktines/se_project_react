import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const weatherTemp = "65F";
  const [activeModal, setActiveModal] = useState("");
  const handleActiveCreateModal = () => {
    setActiveModal("create");
  };
  return (
    <div>
      <Header onClick={handleActiveCreateModal} />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm>
          <label>
            Name
            <input
              className="modal__input"
              type="text"
              name="name"
              placeholder="Name"
              minLength="1"
              maxLength="30"
              required
            ></input>
          </label>
          <label>
            Image
            <input
              className="modal__input"
              type="url"
              name="link"
              placeholder="Image URL"
              minLength="1"
              maxLength="30"
              required
            ></input>
          </label>
          <p>Select the weather type:</p>
          <div>
            <div>
              <input type="radio" className="radio__hot" id="hot" value="hot" />
              <lavbel>Hot</lavbel>
            </div>
            <div>
              <input
                type="radio"
                className="radio__warm"
                id="warm"
                value="warm"
              />
              <lavbel>Warm</lavbel>
            </div>
            <div>
              <input
                type="radio"
                className="radio__cold"
                id="cold"
                value="cold"
              />
              <lavbel>Cold</lavbel>
            </div>
          </div>
        </ModalWithForm>
      )}
    </div>
  );
}

/* 
Header
Main
Footer
ModalWithForm
ItemModal
*/

export default App;
