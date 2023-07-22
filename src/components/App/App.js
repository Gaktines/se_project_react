import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { sortWeatherData } from "../../utils/weatherApi";
import { getWeatherForecast } from "../../utils/weatherApi";
import {CurrentTemperatureUnitContext} from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleItemCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
const handleToggleSwitchChange = () => {
  if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
  if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
}
  const handleActiveCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeatherForecast()
      .then((data) => {
        const temperature = sortWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleToggleSwitchChange}}>
    <div>
      <Header onClick={handleActiveCreateModal} temp={temp} />
      <Main weatherTemp={temp} onSelectCard={handleItemCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm onClose={handleCloseModal}>
          <label className="modal__label">
            Name
            <input
              className="modal__input-name"
              type="text"
              name="name"
              placeholder="Name"
              minLength="1"
              maxLength="30"
              required
            ></input>
          </label>
          <label className="modal__label">
            Image
            <input
              className="modal__input-link"
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
              <label>Hot</label>
            </div>
            <div>
              <input
                type="radio"
                className="radio__warm"
                id="warm"
                value="warm"
              />
              <label>Warm</label>
            </div>
            <div>
              <input
                type="radio"
                className="radio__cold"
                id="cold"
                value="cold"
              />
              <label>Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
    </CurrentTemperatureUnitContext.Provider>
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
