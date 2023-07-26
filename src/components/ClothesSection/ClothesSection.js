import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

    

const ClothesSection = ({ onSelectCard, handleActiveCreateModal }) => {
    const parsedCards = defaultClothingItems.filter((item) => {
        return item.weather;
      });
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

            <ItemCard item={x} key={x?.id || x?._id} onSelectCard={onSelectCard} />
            
          ))}
        </div>
    </div>
  </section>;
};

export default ClothesSection;