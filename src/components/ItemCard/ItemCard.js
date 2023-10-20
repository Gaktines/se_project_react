import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

const ItemCard = ({
  item,
  onSelectCard,
  selectedCard,
  onCardLike,
  loggedIn,
}) => {
  const currentUser = useContext(CurrentUserContext);
  
  console.log(item);
  console.log(currentUser);

  const cardId = item._id;
  const userId = currentUser ? currentUser._id : "";
  const isLiked = item.likes.some(id => id === userId);
  const likeButtonClassName = isLiked
    ? "card__like-button card__like-button-active"
    : "card__like-button ";

  const handleLikeClick = () => {
    onCardLike({ _id: cardId, isLiked: isLiked, user: userId });
    console.log(cardId);
    console.log(isLiked);
    console.log(userId);
  };
  console.log(loggedIn);
  return (
    <div className="card">
      
      {loggedIn ? (
        <>
        <div className="card__title-block">
        <div className="card__title">{item.name}</div>
        <button
          className={likeButtonClassName}
          type="button"
          onClick={handleLikeClick}
        />
        </div>
        </>
      ) : (
        <>
        <div className="card__title-block">
        <div className="card__title">{item.name}</div>
        </div>
        </>
      )}
      <img
        src={item?.imageUrl || item?.link}
        className="card__image"
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
    </div>
  );
};

export default ItemCard;
