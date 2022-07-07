import HouseIcon from './icons/house.png';
import TodayIcon from './icons/calendar.png';
import AddProjectIcon from './icons/new-project.png';

function createSideBar() {
  const sideBar = document.createElement("div");
  sideBar.classList.add("sidebar");

  const allTasks = document.createElement('span');
  const houseIcon = new Image();
  houseIcon.src = HouseIcon;
  houseIcon.classList.add("sidebar-icon");
  allTasks.append(houseIcon, "All Tasks");

  const today = document.createElement('span');
  const todayIcon = new Image();
  todayIcon.src = TodayIcon;
  todayIcon.classList.add("sidebar-icon");
  today.append(todayIcon, "Today");

  const line = document.createElement("hr");

  const h2 = document.createElement('h2');
  h2.textContent = "Projects";

  const addProject = document.createElement('span');
  addProject.addEventListener("click", (e) => {
    addProject.replaceWith(addProjectForm());
  })
  const addProjectIcon = new Image();
  addProjectIcon.src = AddProjectIcon;
  addProjectIcon.classList.add("sidebar-icon");
  addProject.append(addProjectIcon, "Add a project...");

  sideBar.append(allTasks, today, line, h2, addProject);
  return sideBar;
}

function addProjectForm() {
  const container = document.createElement('div');
  container.classList.add("add-project-container");

  const form = document.createElement('form');
  form.classList.add("add-project-form");

  const textField = document.createElement('input');
  textField.setAttribute("type", "text");

  const buttons = document.createElement('div');
  buttons.classList.add("add-project-form-buttons");
  
  const addBtn = document.createElement('button');
  addBtn.setAttribute("type", "button");
  addBtn.textContent = "Add";

  const cancelBtn = document.createElement('button');
  cancelBtn.setAttribute("type", "button");
  cancelBtn.textContent = "Cancel";

  buttons.append(addBtn, cancelBtn);

  form.append(textField, buttons);
  container.append(form);

  return container;
}

export default createSideBar;