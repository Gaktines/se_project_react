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
import { register, signin, checkToken } from "../../auth";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import LoginModal from "../../components/LoginModal/LoginModal";
import { AppContext } from "../AppContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import UnAuthHeader from "../UnAuthHeader/UnAuthHeader";
import EditProfileModal from "../EditProfileModal/EditProfileModal";


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

  const handleSignupModal= () => {
    setActiveModal("signup");
  };

  const handleLogInModal = () => {
    setActiveModal("login");
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

  const handleRegistration = (email, password, name, avatar) => {
    register(email, password, name, avatar)
    .then(() => {
          setLoggedIn(true);
      setUserData();
      setCurrentUser();
      handleCloseModal();
    })
    .catch((error) => {
      console.error(error);
      // Handle registration error here
    });
    setLoggedIn(true);
    };
  
  

  const handleLogin = (email, password) => {
    signin(email, password)
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          localStorage.setItem("jwt", data.token);
          return data;
        } else {
          return;
        }
      });
  };

  const handleUpdate = (name, avatar) => {

  }

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
    const token = localStorage.getItem('jwt');
    if (token) {
      checkToken(token);
    } else {
        console.log("Token not Found");
      }
    }, []);
  

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={currentUser} >
        <AppContext.Provider value={appContextValue}>
          <div>
            {loggedIn ? (
              <Header onClick={handleActiveCreateModal} temp={temp} />
            ) : (
              <UnAuthHeader onClick={handleActiveCreateModal} onClickLogin={handleLogInModal} onClickSignup={handleSignupModal} temp={temp} />
            )}
            <Switch>
              <Route exact path="/">
                <Main
                  weatherTemp={temp}
                  onSelectCard={handleItemCard}
                  clothingItems={clothingItems}
                />
              </Route>
              <ProtectedRoute path="/profile">
                <Profile
                  onSelectCard={handleItemCard}
                  handleActiveCreateModal={handleActiveCreateModal}
                  clothingItems={clothingItems}
                />
              </ProtectedRoute>
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
            {activeModal === "signup" && (
              <RegisterModal
                handleCloseModal={handleCloseModal}
                isOpen={activeModal === "create"}
                handleRegistration={handleRegistration}
                setActiveModal={setActiveModal}
              />
            )}
            {activeModal === "login" && (
              <LoginModal
                handleCloseModal={handleCloseModal}
                isOpen={activeModal === "login"}
                handleLogin={handleLogin}
                onClickLogin={handleLogInModal}
                setActiveModal={setActiveModal}
              />
            )}
            {activeModal === "update" && (
              <EditProfileModal
                handleCloseModal={handleCloseModal}
                isOpen={activeModal === "update"}
                handleUpdate={handleUpdate}
                onClickSignup={handleSignupModal}
              />
            )}
          </div>
        </AppContext.Provider>
      </CurrentUserContext.Provider>
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
