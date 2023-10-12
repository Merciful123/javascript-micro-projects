let tasks = [];

export const addTask = task => {
  if (task.trim()) {
    tasks = [
      ...tasks,
      {
        id: new Date().getTime(),
        task,
      },
    ];
  }
};

export const removeTask = id => {
  tasks = tasks.filter(t => t.id !== Number(id)) ?? [];
};

export const getTasks = () => tasks;
