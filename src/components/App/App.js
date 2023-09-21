import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { sortWeatherData } from "../../utils/weatherApi";
import { getWeatherForecast } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import { fetchItems, loadItems, removeItems } from "../../utils/Api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { register, signIn, checkToken } from "../../auth";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import LoginModal from "../../components/LoginModal/LoginModal";
import { AppContext } from "../AppContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const appContextValue = { state: { loggedIn, userData } };

  const handleItemCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };
  const handleActiveCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const onAddItem = (values) => {
    console.log(values);
    loadItems(values)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error.status);
      });
  };

  const handleDeleteButton = (cardElement) => {
    removeItems(cardElement)
      .then(() => {
        const newClothingItems = clothingItems.filter((cards) => {
          return cards.id !== cardElement.id;
        });
        setClothingItems(newClothingItems);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegisteration = () => {
    const { email, password, name, avatar } = this.state;
    register(email, password, name, avatar);
    this.setState({
      loggedIn: true,
    });
    setUserData;
    setCurrentUser();
    handleCloseModal();
  };

  const handleLogin = (email, password) => {
    signIn(email, password)
      .then((response) => response.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
          return data;
        } else {
          return;
        }
      });
  };

  useEffect(() => {
    fetchItems()
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

  useEffect(() => {
    checkToken().then((jwt) => {
      if (localStorage.getItem(jwt)) {
        console.log("Token Found: " + localStorage.getItem(jwt));
      } else {
        console.log("Token not Found");
      }
    });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div>
        <Header onClick={handleActiveCreateModal} temp={temp} />
        <Switch>
          <CurrentUserContext.Provider value={currentUser} loggedIn={this.state.loggedIn}>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleItemCard}
                clothingItems={clothingItems}
              />
            </Route>
          </CurrentUserContext.Provider>
          <AppContext.Provider value={appContextValue}>
            <ProtectedRoute path="/profile">
              <Profile
                onSelectCard={handleItemCard}
                handleActiveCreateModal={handleActiveCreateModal}
                clothingItems={clothingItems}
              />
            </ProtectedRoute>
          </AppContext.Provider>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            handleDeleteButton={handleDeleteButton}
          />
        )}
        {activeModal === "create" && (
          <RegisterModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            handleRegisteration={handleRegisteration}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "login"}
            handleLogin={handleLogin}
          />
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
