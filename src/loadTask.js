import {Task} from "./Task";

function loadTasks() {
  let array = JSON.parse(localStorage.tasks);
  array.forEach(obj => {
    Task(obj.title, obj.description, obj.dueDate, obj.priority, obj.project, obj.completed);
  });
}

export default loadTasks;