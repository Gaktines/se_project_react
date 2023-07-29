import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const [link, setUrl] = useState("");
  const [weather, setWeather] = useState("hot");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, link, weather });
  };
  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
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
          maxLength="30"
          required
          value={link}
          onChange={handleUrlChange}
        ></input>
      </label>
      <p>Select the weather type:</p>
      <div>
        <div>
          <input
            type="radio"
            className="radio__hot"
            id="hot"
            value="hot"
            onChange={handleWeatherChange}
          />
          <label>Hot</label>
        </div>
        <div>
          <input
            type="radio"
            className="radio__warm"
            id="warm"
            value="warm"
            onChange={handleWeatherChange}
          />
          <label>Warm</label>
        </div>
        <div>
          <input
            type="radio"
            className="radio__cold"
            id="cold"
            value="cold"
            onChange={handleWeatherChange}
          />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
