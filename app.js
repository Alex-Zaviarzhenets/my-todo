import { showTasks } from "./dom.js";
import { form, ul } from "./elements.js";
import { handleAdd, handleItemAction, handleToggle, handleKeydown, handleBlur } from "./handlers.js";
import { loadTasks } from "./storage.js";

form.onsubmit = handleAdd;
ul.onclick = handleItemAction;
ul.onchange = handleToggle;
ul.onkeydown = handleKeydown;
ul.addEventListener('focusout', handleBlur)

loadTasks();
showTasks();


