import {Task} from './Task';
import displayTask from './displayTask';
import { format } from 'date-fns';
import saveTasks from './saveTasks';

function taskForm(task) {
  const formContainer = document.createElement("div");
  formContainer.classList.add("new-task-container");

  const form = document.createElement("form");

  const topDiv = document.createElement("div");

  const title = document.createElement("input");
  title.type = "text";
  title.id = "tasktitle";
  title.name = "task_title";
  title.placeholder = "Title";
  title.required = true;
  title.minLength = "5";
  title.value = task ? task.getTitle() : "";

  const dueDate = document.createElement("input");
  dueDate.type = "date";
  dueDate.id = "duedate";
  dueDate.name = "due_date";
  dueDate.min = format(new Date(), "yyyy-MM-dd");
  dueDate.max = "3001-01-01";
  dueDate.value = task ? task.getDueDate() : "";

  const priority = document.createElement("select");
  priority.name = "priority";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.hidden = true;
  placeholder.textContent = "Priority";

  const none = document.createElement("option");
  none.value = "none";
  none.textContent = "None";

  const high = document.createElement("option");
  high.value = "high";
  high.textContent = "High";

  const low = document.createElement("option");
  low.value = "low";
  low.textContent = "Low";

  if (task && task.getPriority()) {
    const priorityValue = [none, high, low].filter( elem => elem.value === task.getPriority())
    priorityValue[0].selected = true;
  }

  priority.append(placeholder, none, high, low)
  topDiv.append(title, dueDate, priority);
  
  const description = document.createElement("input");
  description.type = "textarea";
  description.id = "description";
  description.name = "description";
  description.placeholder = "Description";
  description.value = task ? task.getDescription() : "";

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons");

  const addBtn = document.createElement("button");
  addBtn.type = "submit";
  addBtn.textContent = task ? "Update" : "Add";

  const project = document.createElement("p");
  project.style.display = "none";
  const node = document.querySelector(".sidebar span.project.active");
  if (node) {
    project.textContent = node.firstChild.textContent ||  node.childNodes[1].textContent;
  } else {
    project.textContent = "";
  }
  
  form.addEventListener('submit', (e) => {
    if (task) {
      task.setTitle(title.value);
      task.setDueDate(dueDate.value);
      task.setPriority(priority.value);
      task.setDescription(description.value);
      saveTasks();
      formContainer.replaceWith(displayTask(task));
    } else {
      const newTask = Task(title.value, description.value, dueDate.value, priority.value, project.textContent);
      document.querySelector('.main').appendChild(displayTask(newTask));
      saveTasks();
      formContainer.remove();
    }
  })
  
  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener('click', () => {
    if (task) {
      formContainer.replaceWith(displayTask(task))
    } else {
      formContainer.remove();
    };
  });

  buttonsContainer.append(addBtn, cancelBtn);

  form.append(topDiv, description, buttonsContainer, project);
  formContainer.appendChild(form);

  return formContainer;
}

export default taskForm;