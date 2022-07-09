import { format, parse } from 'date-fns';

function displayTask(taskObject) {
  const container = document.createElement('div');
  container.classList.add("task-container");

  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  const title = document.createElement('p');
  title.classList.add('task-title');
  title.textContent = taskObject.getTitle();

  const dueDate = document.createElement('p');
  dueDate.classList.add('task-date');
  const dateobj = parse(taskObject.getDueDate(), "yyyy-MM-dd", new Date());
  dueDate.textContent = format(dateobj, 'MMM dd');

  const description = document.createElement('p');
  description.classList.add('task-description');
  description.textContent = taskObject.getDescription();
  description.hidden = true;

  container.append(checkbox, title, dueDate, description)
  container.addEventListener('click', () => description.toggleAttribute('hidden'))

  return container;
};

export default displayTask;