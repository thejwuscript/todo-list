import { Task } from "./Task";

function loadTasks() {
  if (localStorage.tasks && localStorage.tasks.length > 0) {
    let array = JSON.parse(localStorage.tasks);
    array.forEach(obj => {
      Task(obj.title, obj.description, obj.dueDate, obj.priority, obj.project, obj.completed);
    });
  }
}

export default loadTasks;