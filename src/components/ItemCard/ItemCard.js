import React, {useContext} from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  const currentUser = useContext(CurrentUserContext);
  console.log(item);
  console.log(currentUser);
  const isOwn = item.owner === currentUser?._id;
  const itemDeleteButtonClassName = (
    `item__delete-button ${isOwn ? 'item__delete-button_visible' : 'item__delete-button_hidden'}`
  );
  return (
    <div>
      <div className="card__title">{item.name}</div>
      <img
        src={item?.imageUrl || item?.link}
        className="card__image"
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
      <button className={itemDeleteButtonClassName}>Delete item</button>
    </div>
  );
};

export default ItemCard;
