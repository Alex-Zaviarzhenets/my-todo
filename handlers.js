export { handleAdd, handleItemAction, handleToggle, handleKeydown, handleBlur };

import { saveTasks } from "./storage.js";
import { form, ul } from "./elements.js";
import { startEdit, endEdit, showTasks } from "./dom.js";
import { addTask, removeTask, updateTask } from "./crud.js";

function handleAdd(e) {
  e.preventDefault();
  if (input.value === '') return;
  addTask(input.value);
  showTasks();
  form.reset();
  saveTasks();
}

function handleItemAction(e) {
  if (e.target.matches('button')) {
    const li = e.target.parentNode;
    const index = Array.from(ul.children).indexOf(li);
    removeTask(index);
    showTasks();
    saveTasks();
  } else if (e.target.matches('span:not([contenteditable])')) {
    startEdit(e.target);
  }
}

function handleToggle(e) {
  if (!e.target.matches('input')) return;
  const li = e.target.parentNode;
  const index = Array.from(ul.children).indexOf(li);
  const checked = e.target.checked;
  updateTask(index, checked);
  saveTasks();
}

function handleKeydown(e) {
  if (e.target.matches('span') && e.key === 'Enter' ) {
    e.preventDefault();

    const span = e.target;
    
    endEdit(e.target, span.innerText);
  }
}

function handleBlur(e) {
  if (e.target.matches('span[contenteditable]')) endEdit(e.target, false);
}

