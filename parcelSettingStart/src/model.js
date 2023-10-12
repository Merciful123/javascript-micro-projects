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

export const getTasks = () => tasks;
