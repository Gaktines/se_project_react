import "./ItemModal.css";




const ItemModal = ({ selectedCard, onClose, handleDeleteButton, currentUser }) => {
// Checking if the current user is the owner of the current clothing item
console.log(selectedCard);
console.log(currentUser);
const isOwn = selectedCard.owner === currentUser?.data._id;

// Creating a variable which you'll then set in `className` for the delete button
const modalDeleteClassName = (
 `modal__delete ${isOwn ? 'modal__delete_visible' : 'modal__delete_hidden'}`
);

  return (
    <div className={"modal"}>
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__info">
          <div className="modal__title">{selectedCard.name}</div>
          <div className="modal__weather-type">
            Weather: {selectedCard.weather}
          </div>
          <button
            className={modalDeleteClassName}
            type="button"
            onClick={() => handleDeleteButton(selectedCard)}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
