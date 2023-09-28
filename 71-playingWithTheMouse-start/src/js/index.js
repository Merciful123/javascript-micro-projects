const allEmployees = document.querySelector('.all-employees');
const taskForce = document.querySelector('.task-force');
const employeeCards = document.querySelectorAll('.employee');
const { top, left } = allEmployees.getBoundingClientRect();

const createPanel = (x, y, name) => {
  const createPnl = document.createElement('div');
  createPnl.setAttribute('class', 'info-panel');
  createPnl.innerText = name;
  createPnl.style.top = `${y}px`;
  createPnl.style.left = `${x}px`;

  return createPnl;
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

allEmployees.addEventListener('click', removePanel);
