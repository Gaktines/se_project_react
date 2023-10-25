import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [weather, setWeather] = useState("hot");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };
  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText={"Add Garment"}
    >
      <label className="modal__label">
        Name
        <input
          className="modal__input-name"
          type="text"
          name="name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          required
          value={name}
          onChange={handleNameChange}
        ></input>
      </label>
      <label className="modal__label">
        Image
        <input
          className="modal__input-link"
          type="url"
          name="link"
          placeholder="Image URL"
          minLength="1"
          maxLength="300"
          required
          value={imageUrl}
          onChange={handleUrlChange}
        ></input>
      </label>
      <p>Select the weather type:</p>
      <div>
        <div>
        <label>
          <input
            type="radio"
            className="radio__hot"
            id="hot"
            value="hot"
            name="radio__button"
            onChange={handleWeatherChange}
          />
          Hot</label>
        </div>
        <div>
        <label>
          <input
            type="radio"
            className="radio__warm"
            id="warm"
            value="warm"
            name="radio__button"
            onChange={handleWeatherChange}
          />
          Warm</label>
        </div>
        <div>
        <label>
          <input
            type="radio"
            className="radio__cold"
            id="cold"
            value="cold"
            name="radio__button"
            onChange={handleWeatherChange}
          />
          Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
