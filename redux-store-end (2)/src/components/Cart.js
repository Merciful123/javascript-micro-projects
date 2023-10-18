import React from "react";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const Cart = () => {
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-contents">
        <CartItem product="Fancy Robotic Sushi Maker" cost={200} quantity={2} />
      </div>
      <CartTotals totalProducts={2} totalCost={400} />
    </div>
  );
};

export default Cart;
