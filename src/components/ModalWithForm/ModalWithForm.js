import "./ModalWithForm.css";

const ModalWithForm = ({ children, name, onClose, title = "New Garment", buttonText= "Add Garment" }) => {
  return (
    <div className={`modal modal_type_${name}`}>
        <div className="modal__contents">
            <button type="button" onClick={onClose}></button>
            <h2>{title}</h2>
      <form>{children}</form>
      <button type="submit">{buttonText}</button>
      </div>
    </div>
  );
};

export default ModalWithForm;
