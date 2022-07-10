import HouseIcon from './icons/house.png';
import TodayIcon from './icons/calendar.png';
import AddProjectIcon from './icons/new-project.png';
import ExerciseIcon from './icons/warrior.png';
import { loadAllTasksPage } from './allTasks';
import loadTodaysTasksPage from './todaysTasks';
import {Project} from './Project';

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

  const projectNodes = Project.all.map(project => {
    const projectSpan = document.createElement("span");
    if (project.getTitle() === "Exercise") {
      const exerciseIcon = new Image();
      exerciseIcon.src = ExerciseIcon;
      exerciseIcon.classList.add("sidebar-icon");
      projectSpan.addEventListener('click', () => setActiveElement(projectSpan))
      projectSpan.append(exerciseIcon, project.getTitle());
    } else {
      projectSpan.textContent = project.getTitle();
      projectSpan.addEventListener('click', () => setActiveElement(projectSpan));
    };
    return projectSpan;
  })
  sideBar.append(allTasks, today, line, h2, addProjectButton(), ...projectNodes);

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
      const newProject = Project(title);
      // Update saved project to local storage
      saveProjects();
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