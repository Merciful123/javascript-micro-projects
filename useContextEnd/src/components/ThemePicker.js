import React from "react";

const darkTheme = {
  backgroundColor: "rgba(0,0,0,0.8)",
  color: "rgb(255,255,255)"
};

const lightTheme = {
  backgroundColor: "rgba(255,255,255)",
  color: "rgb(0,0,0,0.95)"
};

const colorTheme = {
  backgroundColor: "rgba(19,19,19,1)",
  color: "rgb(255,215,115,0.95)"
};

const ThemePicker = ({onSetTheme}) => {
  return (
    <div className="theme-picker">
      <div className="theme-btns">
        <div
          className="theme-btn light-theme"
          onClick={() => onSetTheme(lightTheme)}
        />
        <div
          className="theme-btn dark-theme"
          onClick={() => onSetTheme(darkTheme)}
        />
        <div
          className="theme-btn red-theme"
          onClick={() => onSetTheme(colorTheme)}
        />
      </div>
    </div>
  );
};

export default ThemePicker;
