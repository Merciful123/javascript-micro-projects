import React from "react";
import preloader from "../preloader.gif";

const Spinner = () => (
  <div className="spinner">
    <img src={preloader} alt="Loading..." />
  </div>
);

export default Spinner;
