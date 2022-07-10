import { format } from 'date-fns';

function Task(title, description, dueDate, priority, project) {
  if (Task.idCounter === undefined) {
    Task.idCounter = 1;
  }
  const id = Task.idCounter;
  
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getId = () => id;
  const getProject = () => project;

  const setTitle = newTitle => title = newTitle;
  const setDescription = newDescription => description = newDescription;
  const setDueDate = newDueDate => dueDate = newDueDate;
  const setPriority = newPriority => priority = newPriority;
  const setProject = newProject => project = newProject;

  
  const newTask = {getId, getTitle, getDescription, getDueDate, getPriority, getProject, setTitle, setDescription, setDueDate, setPriority, setProject};
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

function todaysTasks() {
  // return all tasks that are due today in an array


  // to get date from a task object...object.getDueDate(). String. "yyyy-MM-dd"
  // get today's date object
  const today = new Date();
  // format today's date object into a string "yyyy-MM-dd"
  const todayString = format(today, "yyyy-MM-dd");
  // filter the tasks that matches the above string --> return the array 
  return Task.all.filter( task => task.getDueDate() === todayString);
}

export { Task, todaysTasks };
