import React from "react";

const CartItem = ({
  product,
  quantity,
  cost,
  onQuantityChange,
  onItemRemove
}) => {
  return (
    <div className="cart-item">
      <div className="cart-item-title">{product}</div>
      <div className="cart-item-quantity">
        <input
          type="number"
          defaultValue={quantity}
          min="1"
          onChange={e => onQuantityChange(Number(e.target.value))}
          onKeyUp={e => {
            if (e.keyCode === 13) {
              onQuantityChange(Number(e.target.value));
            }
          }}
        />
      </div>
      <button className="remove-cart-item" onClick={onItemRemove}>
        Remove
      </button>
      <div className="cart-item-unit-cost">${cost}</div>
      <div className="cart-item-total-cost">${quantity * cost}</div>
    </div>
  );
};

export default CartItem;
