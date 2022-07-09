import { format, parse } from 'date-fns';

function displayTask(taskObject) {
  const container = document.createElement('div');
  container.classList.add("task-container");
  container.addEventListener('click', () => showDetails(container, taskObject), {once: true})

  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";

  const title = document.createElement('p');
  title.classList.add('task-title');
  title.textContent = taskObject.getTitle();

  const dueDate = document.createElement('p');
  dueDate.classList.add('task-date');
  const dateobj = parse(taskObject.getDueDate(), "yyyy-MM-dd", new Date());
  dueDate.textContent = format(dateobj, 'MMM dd');

  container.append(checkbox, title, dueDate)

  return container;
};

function showDetails(divElement, taskObj) {
  const details = document.createElement('p');
  details.textContent = taskObj.getDescription();
  details.style.cssText = "width: 100%; padding-left: 32px; font-size: 1rem;";
  divElement.appendChild(details);
  divElement.addEventListener('click', () => hideDetails(divElement, taskObj), {once: true})
}

function hideDetails(divElement, taskObj) {
  divElement.lastChild.remove();
  divElement.addEventListener('click', () => showDetails(divElement, taskObj), {once: true});
}
export default displayTask;