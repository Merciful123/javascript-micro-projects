import { getShoppingList, getCompletedList } from './model';
import Item from './Item';

const shoppingListDiv = document.querySelector('.shopping-list');
const completedDiv = document.querySelector('.completed');

export const renderShoppingList = () => {
  const domNodes = getShoppingList().map(({ item, priority, id }) => {
    return Item(item, priority, id);
  });
  shoppingListDiv.innerHTML = domNodes.join('');
};

export const renderCompletedList = () => {
  const domNodes = getCompletedList().map(({ item, priority, id }) => {
    return Item(item, priority, id);
  });

  completedDiv.innerHTML = domNodes.join('');
};
