import "./ItemCard.css";

const ItemCard = ({ x, onSelectCard }) => {
  return (
    <div>
      <div></div>
      <div className="card__title">{x.name}</div>
      <img
        src={x.link}
        className="card__image"
        alt="clothing item"
        onClick={() => onSelectCard(x)}
      />
    </div>
  );
};

export default ItemCard;
