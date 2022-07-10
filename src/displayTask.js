import { format, parse } from 'date-fns';
import saveTasks from './saveTasks';
import {Task} from './Task';
import taskForm from './taskForm';

function displayTask(taskObject) {
  const container = document.createElement('div');
  container.classList.add("task-container");
  container.style.position = "relative";

  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      taskObject.completed = true;
      saveTasks();
      completedTask(container);
    } else {
      taskObject.completed = false;
      saveTasks();
      container.querySelector('hr.strikethrough').remove();
      container.classList.remove('completed');
      title.addEventListener('click', toggleDescriptionVisibility);
    }
  })

  const title = document.createElement('p');
  title.classList.add('task-title');
  title.textContent = taskObject.getTitle();
  title.addEventListener('click', toggleDescriptionVisibility);

  const dueDate = document.createElement('p');
  dueDate.classList.add('task-date');
  const dateobj = parse(taskObject.getDueDate(), "yyyy-MM-dd", new Date());
  dueDate.textContent = format(dateobj, 'MMM dd');

  const editBtn = document.createElement('button');
  editBtn.type = "button";
  editBtn.classList.add("edit-button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener('click', () => {
    container.replaceWith(taskForm(taskObject));
  })
  
  const delBtn = document.createElement('button');
  delBtn.type = "button";
  delBtn.classList.add("delete-button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener('click', () => {
    Task.all.splice(Task.all.indexOf(taskObject), 1);
    saveTasks();
    container.remove();
  })

  const description = document.createElement('p');
  description.classList.add('task-description');
  description.textContent = taskObject.getDescription();
  description.hidden = true;

  if (taskObject.completed) {
    checkbox.checked = true;
    completedTask(container);
  }

  container.append(checkbox, title, dueDate, editBtn, delBtn, description)

  return container;
};

function completedTask(container) {
  // Add a class to the container to indicate it's completed
  container.classList.add('completed');
  const strike = document.createElement('hr')
  strike.classList.add("strikethrough");
  container.appendChild(strike);
  // Remove event listener that toggles visibility of description
  if (container.querySelector('p.task-title')) {
    container.querySelector('p.task-title').removeEventListener('click', toggleDescriptionVisibility);
  }
}

function toggleDescriptionVisibility(event) {
  const description = event.target.parentNode.querySelector('.task-description');
  description.toggleAttribute('hidden');
}

export default displayTask;