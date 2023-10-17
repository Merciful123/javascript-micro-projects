// Write your code here...
import Product from './Product';
import RenderProduct from './RenderProduct';

const products = document.querySelector('.products');
const nameInp = document.querySelector('input[name=name]');
const costInp = document.querySelector('input[name=cost]');
const acceptingOrdersInp = document.querySelector('select[name=acceptingOrders]');
const quantityInp = document.querySelector('input[name=quantity]');
const descriptionInp = document.querySelector('textarea[name=description]');
const addBtn = document.querySelector('#addBtn');

const getFormContents = () => {
  if (nameInp.value !== '' && costInp.value > 0 && quantityInp.value > 0 && descriptionInp.value !== '') {
    return [nameInp.value, costInp.value, acceptingOrdersInp.value, quantityInp.value, descriptionInp.value];
  } else {
    return false;
  }
};

const clearForm = () => {
  nameInp.value = descriptionInp.value = '';
  acceptingOrdersInp.value = 'Yes';
  costInp.value = quantityInp.value = 0;
};

addBtn.addEventListener('click', function () {
  const getProduct = getFormContents();
  if (getProduct) {
    const createProduct = new Product(...getProduct);
    products.append(RenderProduct(createProduct));
  }

  clearForm();
});
