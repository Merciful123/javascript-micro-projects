import render from './view';
import { addTask, getTasks, removeTask } from './model';

const addTaskInput = document.querySelector('#add-task-input');
const taskList = document.querySelector('.task-list');

addTaskInput.addEventListener('keyup', async evt => {
  evt.preventDefault();
  if (evt.key === 'Enter') {
    const newTask = evt.target.value;
    if (newTask) {
      const tasks = await addTask(newTask);
      evt.target.value = '';
      render(tasks, taskList);
    }
  }
});

taskList.addEventListener('click', async evt => {
  if (evt.target.classList.contains('rem-btn')) {
    const id = evt.target.getAttribute('data-id');
    const tasks = await removeTask(id);
    render(tasks, taskList);
  }
});

(async () => {
  const tasks = await getTasks();
  render(tasks, taskList);
})();
