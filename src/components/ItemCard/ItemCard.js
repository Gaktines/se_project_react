import "./ItemCard.css";

const ItemCard = ({x}) => {
    return( 
    <div>
    <div> <img src={x.link} className='card__image' alt='clothing item'/></div>
  <div className='card__title'>{x.name}</div>
  </div>);
  }

  export default ItemCard;