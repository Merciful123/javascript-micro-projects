import data from './data.json';
import Row from './Row';
const productsDiv = document.querySelector('#products');

const renderRows = function (items) {
  const domNodes = items
    .map(({ product, cost, totalCost = 'N/A' }) =>
      Row(product, cost, totalCost)
    )
    .join('');

  productsDiv.innerHTML = domNodes;
};

const totalCost = function (tax, shipping, cost) {
  return (Number(tax) / 100) * Number(cost) + Number(cost) + Number(shipping);
};

// smartphones and catfood are taxed at 12%
// televisions are taxed at 18%
// Default shipping rates (if absent in dataset): Pet food (2.5), Smartphones (5), Televisions (15)
