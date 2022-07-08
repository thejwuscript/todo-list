import { format, parse } from 'date-fns';

function displayTask(taskObject) {
  const container = document.createElement('div');
  container.classList.add("task-container");

  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  const title = document.createElement('p');
  title.textContent = taskObject.getTitle();

  const dueDate = document.createElement('p');
  const dateobj = parse(taskObject.getDueDate(), "yyyy-MM-dd", new Date());
  dueDate.textContent = format(dateobj, 'MMM dd');

  container.append(checkbox, title, dueDate)

  return container;
};

export default displayTask;