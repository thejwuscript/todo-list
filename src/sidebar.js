import HouseIcon from './icons/house.png';
import TodayIcon from './icons/calendar.png';
import AddProjectIcon from './icons/new-project.png';
import ExerciseIcon from './icons/warrior.png';
import { loadAllTasksPage } from './allTasks';
import loadTodaysTasksPage from './todaysTasks';

function createSideBar() {
  const sideBar = document.createElement("div");
  sideBar.classList.add("sidebar");

  const allTasks = document.createElement('span');
  allTasks.addEventListener("click", loadAllTasksPage)
  const houseIcon = new Image();
  houseIcon.src = HouseIcon;
  houseIcon.classList.add("sidebar-icon");
  allTasks.addEventListener('click', () => setActiveElement(allTasks));
  allTasks.append(houseIcon, "All Tasks");


  const today = document.createElement('span');
  const todayIcon = new Image();
  todayIcon.src = TodayIcon;
  todayIcon.classList.add("sidebar-icon");
  today.append(todayIcon, "Today");
  today.addEventListener('click', loadTodaysTasksPage);
  today.addEventListener('click', () => setActiveElement(today))


  const line = document.createElement("hr");

  const h2 = document.createElement('h2');
  h2.textContent = "Projects";

  const exercise = document.createElement("span");
  const exerciseIcon = new Image();
  exerciseIcon.src = ExerciseIcon;
  exerciseIcon.classList.add("sidebar-icon");
  exercise.addEventListener('click', () => setActiveElement(exercise))
  exercise.append(exerciseIcon, "Exercise");

  sideBar.append(allTasks, today, line, h2, addProjectButton(), exercise);
  return sideBar;
}

function addProjectForm() {
  const container = document.createElement('div');
  container.classList.add("add-project-container");

  const form = document.createElement('form');
  form.classList.add("add-project-form");
  form.autocomplete = "off";

  const textField = document.createElement('input');
  textField.setAttribute("type", "text");
  textField.id = "new-project-title";

  const buttons = document.createElement('div');
  buttons.classList.add("add-project-form-buttons");
  
  const addBtn = document.createElement('button');
  addBtn.setAttribute("type", "button");
  addBtn.textContent = "Add";

  addBtn.addEventListener("click", (e) => {
    const title = document.getElementById("new-project-title").value;
    if (title == '') {
      return
    } else {
      const newSpan = document.createElement('span');
      newSpan.textContent = title;
      container.insertAdjacentElement("afterend", newSpan);
      container.replaceWith(addProjectButton());
    }
  })

  form.addEventListener("keydown", (e) => e.key === "Enter" ? addBtn.click() : "" )


  const cancelBtn = document.createElement('button');
  cancelBtn.setAttribute("type", "button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener('click', () => {
    container.replaceWith(addProjectButton());
  })
  buttons.append(addBtn, cancelBtn);

  form.append(textField, buttons);
  container.append(form);

  return container;
}

function addProjectButton() {
  const addProject = document.createElement('span');
  addProject.addEventListener("click", (e) => {
    addProject.replaceWith(addProjectForm());
    document.getElementById("new-project-title").focus();
  })
  const addProjectIcon = new Image();
  addProjectIcon.src = AddProjectIcon;
  addProjectIcon.classList.add("sidebar-icon");
  addProject.append(addProjectIcon, "Add a project...");

  return addProject;
}

function setActiveElement(element) {
  const sideMenus = document.querySelectorAll(".sidebar span");
  sideMenus.forEach( menu => menu.classList.remove('active'));
  element.classList.add('active');
}

export default createSideBar;