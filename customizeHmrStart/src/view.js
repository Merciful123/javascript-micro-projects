const itemTemplate = (id, task) =>
  `<div class="task">${task}<div class="rem-btn" data-id="${id}">❌</div></div>`;

export default function render(tasks, taskList) {
  const content = tasks.map(t => itemTemplate(t.id, t.task));
  taskList.innerHTML = content.join('');
}
