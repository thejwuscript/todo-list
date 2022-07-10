import {Task} from './Task';

function saveTasks() {
  let array = Task.all.map( obj => ({
    title: obj.getTitle(),
    dueDate: obj.getDueDate(),
    priority: obj.getPriority(),
    description: obj.getDescription(),
    project: obj.getProject(),
    completed: obj.completed
  }));
  localStorage.setItem("tasks", JSON.stringify(array))
}

export default saveTasks;