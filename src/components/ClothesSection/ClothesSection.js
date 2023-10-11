import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";


const ClothesSection = ({
  onSelectCard,
  handleActiveCreateModal,
  clothingItems,
  selectedCard, 
  setSelectedCard
}, currentUser) => {
  
  
  
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
