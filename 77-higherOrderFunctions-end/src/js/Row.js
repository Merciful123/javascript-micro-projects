export default (product, quantity, cost) => `<div class="cart-row">
<div class="item">${product}</div>
<div class="quantity">${quantity}</div>
<div class="cost">${cost}</div>
</div>`;
