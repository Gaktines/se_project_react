import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";


const EditProfileModal = ({ handleCloseModal, isOpen, currentUser, }) => {
  const [name, setName] = useState(currentUser.name);
  const [avatar, setUrl] = useState(currentUser.avatar);

  const handleNameChange = (evt) => {
   
    setName(evt.target.value);
  };
  const handleUrlChange = (evt) => {
    console.log(evt.target.value);
    setUrl(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
  handleNameChange();
  handleUrlChange();
  };
  
  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <h2>Sign up</h2>
      <label className="modal__label">
        Name
        <input
          className="modal__input-name"
          type="text"
          name="name"
          placeholder={currentUser.name}
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        ></input>
      </label>
      <label className="modal__label">
        Avatar
        <input
          className="modal__input-link"
          type="url"
          name="avatar"
          placeholder={currentUser.avatar}
          minLength="1"
          maxLength="300"
          value={avatar}
          onChange={handleUrlChange}
        ></input>
      </label>
      <button
        className="modal__submit-button"
        type="submit"
        name="button"
        onChange={handleSubmit}
      >
        Submit Changes
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
