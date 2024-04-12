export {addTask, updateTask, removeTask};

import { tasks } from "./storage.js";

function addTask(text) {
  tasks.push({ text, done: false });
}

function updateTask(index, value) {
  if (typeof value === 'boolean') {
    tasks[index].done = value;
  } else {
    tasks[index].text = value;
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
}
