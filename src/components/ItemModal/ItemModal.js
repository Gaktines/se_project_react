const ItemModal = (selectedCard, onClose) => {
    console.log(selectedCard);
    return(
        
<div>
  <div className={"modal"}>
    <div className="modal__contents"></div>
    <button type="button" onClick={onClose}></button>
    <img className="modal__image" src={selectedCard.link} alt="Item Card"/>
    <div className="modal__title">{selectedCard.name}</div>
    <div className="modal__weather-type">Weather: {selectedCard.weather}</div>
  </div>
</div>
    );
}

export default ItemModal;

