import { Task } from "./Task";
import displayTask from "./displayTask";
import newTaskButton from "./newTaskButton";


function loadProjectPage(projectTitle) {
  const main = document.querySelector('main');
  main.textContent = "";
  main.appendChild(newTaskButton());
  main.appendChild(document.createElement('hr'));

  if (Task.all) {
    const tasks = Task.all.filter(task => task.getProject() === projectTitle);
    tasks.forEach(task => main.appendChild(displayTask(task)));
  }

}

export { loadProjectPage };