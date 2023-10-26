import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  name,
  onClose,
  title,
  onSubmit,
  buttonText,
}) => {

  

  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__contents">
        <button className="modal__close" type="button" onClick={onClose} />
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit} className="modal__children">
          {children}
          <button className="modal__submit-button">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
