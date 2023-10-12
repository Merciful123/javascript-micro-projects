export default function (obj) {
  const productCard = document.createElement('div');
  productCard.setAttribute('class', 'product');

  const nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'name');

  const costDiv = document.createElement('div');
  costDiv.setAttribute('class', 'cost');

  const quantityDiv = document.createElement('div');
  quantityDiv.setAttribute('class', 'quantity');

  const discountInpDiv = document.createElement('div');
  discountInpDiv.setAttribute('class', 'discount');

  const discInput = document.createElement('input');
  discInput.setAttribute('type', 'number');
  discInput.setAttribute('name', 'discount');
  discInput.setAttribute('min', '0');
  discInput.setAttribute('max', '100');
  discInput.setAttribute('value', '0');
  discInput.addEventListener('keyup', (e) => {
    e.preventDefault();
    obj.setDiscount = e.target.value;
  });

  discountInpDiv.append(discInput);

  const stockCost = document.createElement('div');
  stockCost.setAttribute('class', 'stock-cost');

  const stockBtn = document.createElement('button');
  stockBtn.innerText = 'Stock Cost';
  stockBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`Total Cost: $${obj.stockCost}`);
  });
  stockCost.append(stockBtn);

  const viewDescDiv = document.createElement('div');
  viewDescDiv.setAttribute('class', 'view-description');

  const viewDescBtn = document.createElement('button');
  viewDescBtn.innerText = 'Description';
  viewDescBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`Description: ${obj.getDescription}`);
  });
  viewDescDiv.append(viewDescBtn);

  const buyBtnDiv = document.createElement('div');
  buyBtnDiv.setAttribute('class', 'buy-btn');

  const buyBtn = document.createElement('button');
  buyBtn.innerText = 'Buy';
  buyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`Buying ${obj.getName}`);
  });
  if (obj.getAcceptingOrders === 'No') {
    buyBtn.setAttribute('disabled', true);
  }
  buyBtnDiv.append(buyBtn);

  nameDiv.innerText = obj.getName;
  costDiv.innerText = `$${obj.getCost}`;
  quantityDiv.innerText = `${obj.getQuantity} unit(s)`;
  productCard.append(nameDiv, costDiv, quantityDiv, discountInpDiv, stockCost, viewDescDiv, buyBtnDiv);

  return productCard;
}
