const allEmployees = document.querySelector('.all-employees');
const taskForce = document.querySelector('.task-force');
const employeeCards = document.querySelectorAll('.employee');
const { top, left } = allEmployees.getBoundingClientRect();

const createPanel = (x, y, name) => {
  const createPanel = document.createElement('div');
  createPanel.setAttribute('class', 'info-panel');
  createPanel.innerText = name;
  createPanel.style.top = `${y}px`;
  createPanel.style.left = `${x}px`;
  return createPanel;
};

const removePanel = () => document.querySelector('.info-panel')?.remove();

allEmployees.addEventListener('contextmenu', function (evt) {
  evt.preventDefault();
  removePanel();
  if (evt.target.getAttribute('class') === 'employee') {
    const name = evt.target.getAttribute('data-name');
    const infoPanel = createPanel(evt.clientX - left, evt.clientY - top, name);

    allEmployees.append(infoPanel);
  }
});

allEmployees.addEventListener('click', () => removePanel());

// Drag'n'Drop
employeeCards.forEach((el) => {
  el.addEventListener('dragstart', function (evt) {
    removePanel();
    const getId = evt.target.getAttribute('data-id');
    evt.dataTransfer.setData('text/plain', getId);
  });
});

taskForce.addEventListener('dragenter', function (evt) {
  evt.preventDefault();
  evt.currentTarget.classList.add('highlight-drop');
});

taskForce.addEventListener('dragleave', function (evt) {
  evt.preventDefault();
  evt.currentTarget.classList.remove('highlight-drop');
});

taskForce.addEventListener('drop', function (evt) {
  evt.preventDefault();
  const empId = evt.dataTransfer.getData('text/plain');
  evt.currentTarget.append(document.querySelector(`div[data-id='${empId}']`));
  evt.currentTarget.classList.remove('highlight-drop');
});

taskForce.addEventListener('dragover', function (evt) {
  evt.preventDefault();
});

allEmployees.addEventListener('dragenter', function (evt) {
  evt.preventDefault();
  evt.currentTarget.classList.add('highlight-drop');
});

allEmployees.addEventListener('dragleave', function (evt) {
  evt.preventDefault();
  evt.currentTarget.classList.remove('highlight-drop');
});

allEmployees.addEventListener('drop', function (evt) {
  evt.preventDefault();
  const empId = evt.dataTransfer.getData('text/plain');
  evt.currentTarget.append(document.querySelector(`div[data-id='${empId}']`));
  evt.currentTarget.classList.remove('highlight-drop');
});

allEmployees.addEventListener('dragover', function (evt) {
  evt.preventDefault();
});
