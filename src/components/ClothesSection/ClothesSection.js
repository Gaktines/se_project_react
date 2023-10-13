import React, { useContext } from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ClothesSection = ({
  onSelectCard,
  handleActiveCreateModal,
  clothingItems,
  selectedCard, 
  setSelectedCard
},) => {
  
  
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);
  const parsedCards = clothingItems.filter((item) => {
    console.log(item.owner, currentUser?._id);
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
          {parsedCards.map((x) => (
            <ItemCard
              item={x}
              key={x.id}
              onSelectCard={onSelectCard}
              selectedCard={selectedCard}
              onClick={() => {
                setSelectedCard(x)
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClothesSection;
