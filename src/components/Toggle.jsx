import React from "react";

const Toggle = ({ isOn, handleToggle, onLabel = "ON", offLabel = "OFF" }) => {
  return (
    <div
      role="button"
      aria-pressed={isOn}
      className={`toggle-switch ${isOn ? "on" : "off"}`}
      onClick={handleToggle}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      <span className="toggle-label">{isOn ? onLabel : offLabel}</span>
      <span className="toggle-knob" aria-hidden="true" />
    </div>
  );
};

export default Toggle;
