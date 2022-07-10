import newTaskButton from "./newTaskButton";
import displayTask from "./displayTask";
import { Task, todaysTasks } from "./Task";

function loadTodaysTasksPage() {
  const main = document.querySelector('.main');
  main.textContent = '';

  main.appendChild(newTaskButton());
  main.appendChild(document.createElement('hr'));
  if (todaysTasks()) {
    todaysTasks().forEach( task => main.appendChild(displayTask(task)));
  }
};

export default loadTodaysTasksPage