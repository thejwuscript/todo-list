import displayTask from "./displayTask";
import newTaskButton from "./newTaskButton";
import { Task } from "./Task";

function loadAllTasksPage() {
  const main = document.querySelector('main');
  main.textContent = "";
  main.appendChild(newTaskButton());
  main.appendChild(document.createElement('hr'));
  document.querySelector('.sidebar').firstChild.classList.add('active');
  
  if (Task.all) {
    Task.all.forEach(taskobj => main.appendChild(displayTask(taskobj)));
  }
}



export { loadAllTasksPage };
