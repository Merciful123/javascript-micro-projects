import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { setQuantity, removeItem } from "../store/actions/cartActions";

const Cart = memo(() => {
  const { totalProducts, totalCost, items } = useSelector(
    state => state.cart,
    shallowEqual
  );
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-contents">
        {items &&
          items.map(item => (
            <CartItem
              key={item.code}
              {...item}
              onQuantityChange={qty =>
                qty === 0
                  ? dispatch(removeItem(item.code))
                  : dispatch(setQuantity(item.code, qty))
              }
              onItemRemove={() => dispatch(removeItem(item.code))}
            />
          ))}
      </div>
      <CartTotals totalProducts={totalProducts} totalCost={totalCost} />
    </div>
  );
});

export default Cart;
