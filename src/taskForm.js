import Task from './Task';
import displayTask from './displayTask';

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

  const dueDate = document.createElement("input");
  dueDate.type = "date";
  dueDate.id = "duedate";
  dueDate.name = "due_date";
  dueDate.min = new Date().toLocaleString().split(',')[0];
  dueDate.setAttribute("max", "1/1/3001");

  const priority = document.createElement("select");
  priority.name = "priority";

  const datePlaceholder = document.createElement("option");
  datePlaceholder.value = "";
  datePlaceholder.disabled = true;
  datePlaceholder.selected = true;
  datePlaceholder.hidden = true;
  datePlaceholder.textContent = "Priority";

  const none = document.createElement("option");
  none.value = "none";
  none.textContent = "None";

  const high = document.createElement("option");
  high.value = "high";
  high.textContent = "High";

  const low = document.createElement("option");
  low.value = "low";
  low.textContent = "Low";

  priority.append(datePlaceholder, none, high, low)
  topDiv.append(title, dueDate, priority);
  
  const description = document.createElement("input");
  description.type = "textarea";
  description.id = "description";
  description.name = "description";
  description.placeholder = "Description";

  const buttonsContainer = document.createElement("div");

  const addBtn = document.createElement("button");
  addBtn.type = "button";
  addBtn.textContent = "Add";
  // add an event listener to create a task object
  addBtn.addEventListener('click', () => {
    const newTask = Task(title.value, description.value, dueDate.value, priority.value);
    // Display newTask...but need to convert it to an element
    document.querySelector('.main').appendChild(displayTask(newTask));
    formContainer.remove();
  })
  

  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener('click', () => formContainer.remove());

  buttonsContainer.append(addBtn, cancelBtn);

  form.append(topDiv, description, buttonsContainer);
  formContainer.appendChild(form);

  return formContainer;
}

export default taskForm;