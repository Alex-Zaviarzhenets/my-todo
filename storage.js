export {loadTasks, saveTasks, tasks};

const tasks = [];

function loadTasks() {
  const loadedTasks = localStorage.getItem('tasks');
  if (loadedTasks) {
    tasks.push(...JSON.parse(loadedTasks));
  }
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


