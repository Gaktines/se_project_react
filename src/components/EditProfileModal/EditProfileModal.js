import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";

const EditProfileModal = ({
  handleCloseModal,
  isOpen,
  onSubmit,
  currentUser,
  isLoading,
}) => {
  const [name, setName] = useState(currentUser.name);
  const [avatar, setUrl] = useState(currentUser.avatar);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name: name, avatar: avatar });
  };

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Submitting Changes..." : "Submit Changes"}
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
      
    </ModalWithForm>
  );
};

export default EditProfileModal;
