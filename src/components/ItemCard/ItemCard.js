import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

const ItemCard = ({
  item,
  onSelectCard,
  selectedCard,
  oncardLike,
  loggedIn,
}) => {
  const currentUser = useContext(CurrentUserContext);
  
  console.log(item);
  console.log(currentUser);

  const cardId = item._id;
  const userId = currentUser ? currentUser._id : "";
  const isLiked = item.likes.some(id => id === currentUser._id);
  const likeButtonClassName = isLiked
    ? "card__like-button"
    : "card__like-button-inactive";

  const handleLikeClick = () => {
    oncardLike({ _id: cardId, isLiked: isLiked, user: userId });
    console.log(cardId);
    console.log(isLiked);
    console.log(userId);
  };
  return (
    <div className="card">
      <div className="card__title">{item.name}</div>
      {loggedIn ? (
        <button
          className={likeButtonClassName}
          type="button"
          onClick={handleLikeClick}
        />
      ) : (
        <button className="card__like-button-hidden" />
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
