import Row from './Row';

const totalQuantity = document.querySelector('.total-quantity');
const totalCost = document.querySelector('.total-cost');
const itemRows = document.querySelector('.item-rows');

export const renderTotals = (cart) => {
  const cost = cart
    .reduce((prev, item) => prev + item.cost * item.quantity, 0)
    .toPrecision(6);
  const quantity = cart.reduce((prev, item) => prev + item.quantity, 0);

  totalQuantity.innerText = quantity;
  totalCost.innerText = cost;
};

export const renderRows = (rows) => {
  const domNodes = rows.map(({ product, quantity, cost }) =>
    Row(product, quantity, cost.toPrecision(6))
  );

  itemRows.innerHTML = domNodes.join('');
};
