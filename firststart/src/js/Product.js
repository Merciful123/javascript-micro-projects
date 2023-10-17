class Product {
  constructor(name, cost, acceptingOrders, quantity, description) {
    this.name = name;
    this.cost = cost;
    this.acceptingOrders = acceptingOrders;
    this.quantity = quantity;
    this.description = description;
  }
  discount = 0;
  static tax = 10;
  set setDiscount(x) {
    this.discount = x;
  }
  get stockCost() {
    let stockCost = (Product.tax / 100) * this.cost + this.cost * this.quantity;
    let discAmt = (this.discount / 100) * stockCost;
    return this.discount !== 0 ? stockCost - discAmt : stockCost;
  }
}

export default Product;
