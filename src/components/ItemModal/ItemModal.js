import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, handleDeleteButton }) => {
  return (
    <div className={"modal"}>
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <img className="modal__image" src={selectedCard.link} alt={selectedCard.name} />
        <div className="modal__info">
          <div className="modal__title">{selectedCard.name}</div>
          <div className="modal__weather-type">
            Weather: {selectedCard.weather}
          </div>
          <button
          className="modal__delete"
          type="button"
          onClick={handleDeleteButton}
        >Delete Item</button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
