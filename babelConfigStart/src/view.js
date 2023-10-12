const itemTemplate = (id, task) => `<div class="task">${task}</div>`;

export default function render(tasks, taskList) {
  const content = tasks.map(t => itemTemplate(t.id, t.task));
  taskList.innerHTML = content.join('');
}
