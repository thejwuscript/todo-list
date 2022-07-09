function Task(title, description, dueDate, priority) {
  if (Task.idCounter === undefined) {
    Task.idCounter = 0;
  }
  const id = Task.idCounter;
  
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getId = () => id;
  
  const newTask = {getId, getTitle, getDescription, getDueDate, getPriority};

  Task.idCounter += 1;

  return newTask;
}

export default Task;
