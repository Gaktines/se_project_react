import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { removeItems } from "../../utils/Api";
import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard, selectedCard, oncardLike, loggedIn }) => {
  const currentUser = useContext(CurrentUserContext);
  const [clothingItems, setClothingItems] = useState([]);
  console.log(item);
  console.log(currentUser);
  const isOwn = item.owner === currentUser?._id;
  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;
  const cardId = item._id;
const userId = currentUser ? currentUser.data._id : "";
const isLiked = item.likes.some((id) => id === currentUser?.data._id);
const likeButtonClassName = isLiked? "card__like-button"
: "card__like-button-inactive";

  const handleDeleteButton = (event) => {
    console.log(selectedCard);
    removeItems(selectedCard)
      .then(() => {
        const newClothingItems = clothingItems.filter((cards) => {
          return cards._id !== selectedCard._id;
        });
        console.log(newClothingItems);
        setClothingItems(newClothingItems);
      })
      .catch((e) => {
        console.error(e);
      });
  };
const handleLikeClick = () => {
oncardLike({_id: cardId, isLiked: isLiked, user: userId});
console.log(cardId);
console.log(isLiked);
console.log(userId);
};
  return (
    <div>
      <div className="card__title">{item.name}</div>
      {loggedIn ?
      (<button
        className={likeButtonClassName}
        type="button"
        onClick={handleLikeClick}
        />)
      :
    (<button 
      className="card__like-button-hidden"
    />)}
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
