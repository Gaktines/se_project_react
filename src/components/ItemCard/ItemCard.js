import "./ItemCard.css";

const ItemCard = ({ x , onSelectCard}) => {
  return (
    <div>
      <div>
        <img src={x.link} className="card__image" alt="clothing item" onClick={onSelectCard}/>
      </div>
      <div className="card__title">{x.name}</div>
    </div>
  );
};

export default ItemCard;
