class Product {
  constructor(name, cost, acceptingOrders, quantity, description) {
    this.name = name;
    this.cost = cost;
    this.acceptingOrders = acceptingOrders;
    this.quantity = quantity;
    this.description = description;
  }
  stockCost() {
    return this.cost * this.quantity;
  }
  getDesc() {
    return this.description;
  }
  render() {
    const productCard = document.createElement('div');
    productCard.setAttribute('class', 'product');

    const nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'name');

    const costDiv = document.createElement('div');
    costDiv.setAttribute('class', 'cost');

    const quantityDiv = document.createElement('div');
    quantityDiv.setAttribute('class', 'quantity');

    const stockCost = document.createElement('div');
    stockCost.setAttribute('class', 'stock-cost');

    const stockBtn = document.createElement('button');
    stockBtn.innerText = 'Stock Cost';
    stockBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let fetchCost = this.stockCost();
      alert(`Total Cost: $${fetchCost}`);
    });
    stockCost.append(stockBtn);

    const viewDescDiv = document.createElement('div');
    viewDescDiv.setAttribute('class', 'view-description');

    const viewDescBtn = document.createElement('button');
    viewDescBtn.innerText = 'Description';
    viewDescBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let fetchDesc = this.getDesc();
      alert(`Description: ${fetchDesc}`);
    });
    viewDescDiv.append(viewDescBtn);

    const buyBtnDiv = document.createElement('div');
    buyBtnDiv.setAttribute('class', 'buy-btn');

    const buyBtn = document.createElement('button');
    buyBtn.innerText = 'Buy';
    buyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert(`Buying ${this.name}`);
    });
    if (this.quantity > 0 && this.acceptingOrders === 'No') {
      buyBtn.setAttribute('disabled', true);
    }
    buyBtnDiv.append(buyBtn);

    nameDiv.innerText = this.name;
    costDiv.innerText = `$${this.cost}`;
    quantityDiv.innerText = `${this.quantity} unit(s)`;
    productCard.append(nameDiv, costDiv, quantityDiv, stockCost, viewDescDiv, buyBtnDiv);

    return productCard;
  }
}

export default Product;
