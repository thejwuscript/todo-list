import displayTask from "./displayTask";
import loadTasks from "./loadTask";
import newTaskButton from "./newTaskButton";
import Task from "./Task";

function loadAllTasksPage() {
  const main = document.querySelector('main');
  main.textContent = "";
  main.appendChild(newTaskButton());
  main.appendChild(document.createElement('hr'));
  Task.all.forEach(taskobj => {
    main.appendChild(displayTask(taskobj));
  });
}



export { loadAllTasksPage };
