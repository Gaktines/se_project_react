import React, {useContext, useState } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const {currentTemperatureUnit, handleToggleSwitchChange} = useContext(CurrentTemperatureUnitContext);


  return (
    <label className="toggleSwitch">
      <input
        type="checkbox"
        className="toggleSwitch__box"
        onChange={handleToggleSwitchChange}
      />
      <span className={currentTemperatureUnit === "F" ? "toggleSwitch_slider-F":"toggleSwitch_slider-C"}></span>
      <p className={`toggleSwitch_temperature-F ${currentTemperatureUnit === 'F' && "toggleSwitch__active"}`}>F</p>
      <p className={`toggleSwitch_temperature-C ${currentTemperatureUnit === 'C' && "toggleSwitch__active"}`}>C</p>
    </label>
  );
};

export default ToggleSwitch;
