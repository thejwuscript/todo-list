import newTaskButton from "./newTaskButton";
import Task from "./Task";

function loadAllTasksPage() {
  const main = document.querySelector('main');
  main.textContent = "";

  main.appendChild(newTaskButton());
  main.appendChild(document.createElement('hr'));

// call the localStorage and any that is made in the current session 
}



export { loadAllTasksPage };
