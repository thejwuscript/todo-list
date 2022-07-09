function Task(title, description, dueDate, priority) {
  if (Task.idCounter === undefined) {
    Task.idCounter = 1;
  }
  const id = Task.idCounter;
  
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getId = () => id;

  const setTitle = newTitle => title = newTitle;
  const setDescription = newDescription => description = newDescription;
  const setDueDate = newDueDate => dueDate = newDueDate;
  const setPriority = newPriority => priority = newPriority;

  
  const newTask = {getId, getTitle, getDescription, getDueDate, getPriority, setTitle, setDescription, setDueDate, setPriority};
  pushTask(newTask);
  Task.idCounter += 1;

  return newTask;
}

function pushTask(taskObj) {
  if (Task.all === undefined) {
    Task.all = [];
  }
  Task.all.push(taskObj);
}

export default Task;
