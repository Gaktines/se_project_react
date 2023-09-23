import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({
  onSelectCard,
  handleActiveCreateModal,
  clothingItems,
}, item, currentUser) => {
  const isOwn = item.owner._id === currentUser._id;
  const parsedCards = clothingItems.filter((item) => {
    return item.weather;
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
          { isOwn ? parsedCards.map((x) => (
            <ItemCard
              item={x}
              key={x.id}
              onSelectCard={onSelectCard}
            />
          )):""}
        </div>
      </div>
    </section>
  );
};

export default ClothesSection;
