import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

const LoginModal = ({
  handleCloseModal,
  isOpen,
  setActiveModal,
  handleLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
    handleCloseModal();
  };

  const onClickSignup = () => {
    setActiveModal("signup");
  };
  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <h2>Log in</h2>
      <label className="modal__label">
        Email
        <input
          className="modal__email"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        ></input>
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__password"
          type="text"
          name="password"
          placeholder="Password"
          minLength="1"
          maxLength="8"
          required
          value={password}
          onChange={handlePasswordChange}
        ></input>
      </label>
      <div className="modal__button-container">
        <button
          className="modal__submit-button"
          type="submit"
          name="button"
          onChange={handleSubmit}
        >
          Login
        </button>
        <button
          className="modal__submit-register-button"
          type="button"
          name="button"
          onClick={onClickSignup}
        >
          or Register
        </button>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
