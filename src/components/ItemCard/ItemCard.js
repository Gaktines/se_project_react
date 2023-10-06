import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { removeItems } from "../../utils/Api";
import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard, selectedCard }) => {
  const currentUser = useContext(CurrentUserContext);
  const [clothingItems, setClothingItems] = useState([]);
  console.log(item);
  console.log(currentUser);
  const isOwn = item.owner === currentUser?._id;
  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;

  const handleDeleteButton = (event) => {
    console.log(selectedCard);
    removeItems(selectedCard)
      .then(() => {
        const newClothingItems = clothingItems.filter((cards) => {
          return cards.id !== selectedCard.id;
        });
        console.log(newClothingItems);
        setClothingItems(newClothingItems);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <div className="card__title">{item.name}</div>
      <img
        src={item?.imageUrl || item?.link}
        className="card__image"
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
      <button
        className={itemDeleteButtonClassName}
        onClick={handleDeleteButton}
      >
        Delete item
      </button>
    </div>
  );
};

export default ItemCard;
