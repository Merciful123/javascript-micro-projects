import React from "react";

const CartButton = ({ items, onClick }) => (
  <button className="btn" onClick={onClick}>
    CART
    {items > 0 ? <span className="bubble">{items}</span> : null}
  </button>
);

CartButton.defaultProps = {
  items: 0
};

export default CartButton;
