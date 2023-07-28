import "./ItemCard.css";


const ItemCard = ({ item, onSelectCard, }) => {
  return (
    <div>
      <div className="card__title">{item.name}</div>
      <img
        src={item.imageUrl}
        className="card__image"
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
    </div>
  );
};

export default ItemCard;
