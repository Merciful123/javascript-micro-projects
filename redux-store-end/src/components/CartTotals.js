import React from "react";

const CartTotals = ({ totalProducts, totalCost }) => {
  return (
    <div className="cart-totals">
      <div className="ct-total-quantity">{totalProducts}</div>
      <div className="ct-total-cost">${totalCost}</div>
    </div>
  );
};

export default CartTotals;
