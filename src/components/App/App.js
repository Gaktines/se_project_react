import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React, { useState, useEffect } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { sortWeatherData } from "../../utils/weatherApi";
import { getWeatherForecast } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route, useHistory } from "react-router-dom";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import {
  fetchItems,
  loadItems,
  removeItems,
  editUserProfile,
} from "../../utils/Api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { register, signin, checkToken } from "../../utils/auth";
import RegisterModal from "../../components/RegisterModal/RegisterModal";
import LoginModal from "../../components/LoginModal/LoginModal";
import { AppContext } from "../../contexts/AppContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { addCardLike, removeCardLike } from "../../utils/Api";

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
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(false);

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

  const handleSignupModal = () => {
    setActiveModal("signup");
  };

  const handleEditModal = () => {
    setActiveModal("update");
  };

  const handleLogInModal = () => {
    setActiveModal("login");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/");
  };

  const onAddItem = (values) => {
    loadItems(values)
      .then((data) => {
        setClothingItems([data.data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeleteButton = (cardElement) => {
    removeItems(cardElement)
      .then(() => {
        const newClothingItems = clothingItems.filter((cards) => {
          return cards._id !== cardElement._id;
        });
        setClothingItems(newClothingItems);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRegistration = (email, password, name, avatar) => {
    register(email, password, name, avatar)
      .then((res) => {
        console.log(res);
        setLoggedIn(true);
        setCurrentUser(res.data);
        handleCloseModal();
        
        history.push("/profile");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => 
      setLoggedIn(false));

  };

  const handleLogin = (email, password) => {
    signin(email, password)
      .then((response) => {
        return response;
      })

      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);

          checkToken(data.token)
            .then((res) => {
              setLoggedIn(true);
              setCurrentUser(res.data);
              handleCloseModal();
              
              history.push("/profile");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          return;
        }
      });
  };

  const handleLikeClick = ({ _id, isLiked, user }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is now liked
    isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        // the first argument is the card's id
        removeCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((x) => (x._id === _id ? updatedCard : x))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        // the first argument is the card's id
        addCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((x) => (x._id === _id ? updatedCard : x))
            );
          })
          .catch((err) => console.log(err));
  };

  const handleUpdate = (data) => {
    setIsLoading(true);
    editUserProfile(data)
      .then((res) => {
        setCurrentUser(res.data);
        handleCloseModal();
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!activeModal) return; // stop the effect not to add the listener if there is no active modal

    const handleEscClose = (e) => {
      // define the function inside useEffect not to lose the reference on rerendering
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      // don't forget to add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]); // watch activeModal here

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
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((data) => {
          setCurrentUser(data.data); // Set the user data in your component state
          setLoggedIn(true);
        })
        .catch(() => console.error);
    } else {
      localStorage.removeItem("jwt");
      setLoggedIn(false);
      console.log("Token not Found");
    }
  }, [loggedIn, history]);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={currentUser}>
        <AppContext.Provider value={appContextValue}>
          <div>
            <Header
              onClick={handleActiveCreateModal}
              onClickLogin={handleLogInModal}
              onClickSignup={handleSignupModal}
              loggedIn={loggedIn}
              temp={temp}
            />
            <Switch>
              <Route exact path="/">
                <Main
                  weatherTemp={temp}
                  onSelectCard={handleItemCard}
                  clothingItems={clothingItems}
                  loggedIn={loggedIn}
                  onCardLike={handleLikeClick}
                />
              </Route>
              <ProtectedRoute path="/profile">
                <Profile
                  onSelectCard={handleItemCard}
                  handleActiveCreateModal={handleActiveCreateModal}
                  clothingItems={clothingItems}
                  selectedCard={selectedCard}
                  handleLikeClick={handleLikeClick}
                  handleEditModal={handleEditModal}
                  handleLogout={handleLogout}
                  loggedIn={loggedIn}
                  onCardLike={handleLikeClick}
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
                currentUser={currentUser}
                loggedIn={loggedIn}
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
                onSubmit={handleUpdate}
                handleEditModal={handleEditModal}
                setActiveModal={setActiveModal}
                currentUser={currentUser}
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
