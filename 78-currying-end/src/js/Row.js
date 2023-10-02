export default (product, cost, totalCost) => `<div class="product">
<div class="name">${product}</div>
<div class="cost">Cost: <strong>$${cost}</strong></div>
<div class="total">
  Total Cost (Incl. taxes & shipping): <strong>$${totalCost}</strong>
</div>
</div>`;
