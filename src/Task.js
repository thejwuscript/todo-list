function Task(title, description, dueDate, priority) {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  
  const newTask = {getTitle, getDescription, getDueDate, getPriority}

  if (Task.all === undefined) {
    Task.all = new Array();
  };
  Task.all.push(newTask);

  return newTask;
}

export default Task;
