import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  console.log(item);
  return (
    <div>
      <div className="card__title">{item.name}</div>
      <img
        src={item.link}
        className="card__image"
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
    </div>
  );
};

export default ItemCard;
