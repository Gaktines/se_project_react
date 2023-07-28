import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { sortWeatherData } from "../../utils/weatherApi";
import { getWeatherForecast } from "../../utils/weatherApi";
import {CurrentTemperatureUnitContext} from "../../contexts/CurrentTemperatureUnitContext";
import {Switch, Route} from "react-router-dom";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import parsedCards from "../ClothesSection/ClothesSection";
import { deleteItems, getItems, postItems} from "../../utils/Api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  
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

  const onAddItem = (values) => {
    console.log(values);
    postItems(values).then((data) => {
      setClothingItems([data, ...clothingItems]);
      handleCloseModal();
    }).catch((error) => {
      console.error(error.status);;
    });
  }

  const handleDeleteButton = (cardElement) => {
    deleteItems(cardElement).then(() => {
      const newClothingItems = clothingItems.filter((cards) => {
        return cards.id !== cardElement;
      });
      setClothingItems(newClothingItems);
      handleCloseModal();
    }).catch((err) => {
      console.log(err);
   });
  }
  
  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 
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
      <Switch>
      <Route exact path="/">
      <Main weatherTemp={temp} onSelectCard={handleItemCard} clothingItems={clothingItems}/>
      </Route>
      <Route path="/profile">
      <Profile 
      onSelectCard={handleItemCard} 
      handleActiveCreateModal={handleActiveCreateModal}
      parsedCards={parsedCards}  
      />
      </Route>
      </Switch>
      <Footer />
      {activeModal === "create" && (
        <AddItemModal handleCloseModal={handleCloseModal} isOpen={activeModal === "create"} onAddItem={onAddItem} />
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} handleDeleteButton ={handleDeleteButton}/>
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
