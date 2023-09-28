const Item = (title, priority = 'normal', id) => {
  return `<div class="item ${priority}" data-id="${id}" draggable="true">
  <div class="task">${title}</div>
  <div class="priority-control">
    <span class="high"></span>
    <span class="normal"></span>
    <span class="low"></span>
  </div>
  <div class="remove-btn">REMOVE</div>
  </div>`;
};

export default Item;
