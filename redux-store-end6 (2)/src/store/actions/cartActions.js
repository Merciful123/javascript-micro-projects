export const addToCart = product => {
  return {
    type: "ADD_TO_CART",
    product
  };
};

export const setQuantity = (code, quantity) => {
  return {
    type: "SET_QUANTITY",
    code,
    quantity
  };
};

export const removeItem = code => {
  return {
    type: "REMOVE_ITEM",
    code
  };
};
