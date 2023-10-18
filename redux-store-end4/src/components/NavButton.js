import React from "react";

const NavButton = ({ label, onClick }) => (
  <button className="btn" onClick={onClick}>
    {label.toUpperCase()}
  </button>
);

export default NavButton;
