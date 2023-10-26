import React, { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ClothesSection = ({
  onSelectCard,
  handleActiveCreateModal,
  clothingItems,
  selectedCard,
  setSelectedCard,
  loggedIn,
  onCardLike,
}) => {
  const currentUser = useContext(CurrentUserContext);
console.log(clothingItems);
  const parsedCards = clothingItems.filter((item) => {
    const isOwn = item.owner === currentUser?._id;
    return isOwn;
  });

  return (
    <section className="clothesSection">
      <div className="clothesSection__header">
        <div className="clothesSection__title">Your items:</div>
        <button
          className="clothesSection__add-button"
          type="text"
          onClick={handleActiveCreateModal}
        >
          + New
        </button>
      </div>
      <div className="clothesSection__cards">
        <div className="clothesSection__card-items">
          {parsedCards.map((x) => {
            return (
              <ItemCard
                item={x}
                key={x._id}
                onCardLike={onCardLike}
                onSelectCard={onSelectCard}
                selectedCard={selectedCard}
                onClick={() => {
                  setSelectedCard(x);
                }}
                loggedIn={loggedIn}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClothesSection;
