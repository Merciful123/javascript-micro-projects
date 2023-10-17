export const addTask = async task => {
  if (task.trim()) {
    try {
      const tasks = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task }),
      });
      const parsed = await tasks.json();
      return parsed;
    } catch (err) {
      return Promise.resolve([]);
    }
  }

  return Promise.resolve([]);
};

export const removeTask = async id => {
  try {
    const tasks = await fetch('/api/tasks', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    const parsed = await tasks.json();
    return parsed;
  } catch (err) {
    return Promise.resolve([]);
  }
};

export const getTasks = async () => {
  try {
    const tasks = await fetch('/api/tasks');
    const parsed = await tasks.json();
    return parsed;
  } catch (err) {
    return Promise.resolve([]);
  }
};
