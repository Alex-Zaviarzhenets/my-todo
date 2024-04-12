export { showTasks, startEdit, endEdit, createLi };

import { updateTask } from "./crud.js";
import { ul } from "./elements.js";
import { saveTasks, tasks } from "./storage.js";

function showTasks() {
  ul.innerHTML = tasks.map(createLi).join('');
}

function startEdit(span) {
  span.contentEditable = true;
  span.dataset.text = span.innerText;
  span.focus();
}

function endEdit(span, save) {
  if (save) {
    const li = span.parentNode;
    const index = Array.from(ul.children).indexOf(li);

    updateTask(index, span.innerText);
    saveTasks();
  } else {
    span.innerText = span.dataset.text;
  }

  delete span.dataset.text;
  span.removeAttribute('contenteditable');
}

function createLi(task) {
  return `
    <li>
      <input type="checkbox" ${task.done ? 'checked' : ''}>
      <span>${task.text}</span>
      <button>×</button>
    </li>
  `;
}
