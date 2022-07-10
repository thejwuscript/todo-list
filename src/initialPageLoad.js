import { loadAllTasksPage } from './allTasks';
import createSideBar from './sidebar';
import loadTasks from './loadTask';
import { Project } from './Project';
import loadProjects from './loadProjects';

function createLogo() {
// create a div with class "logo"
  const logo = document.createElement("div");
  logo.classList.add("logo");
// set the div's textContent to "Logo"
  logo.textContent = "Todo List";
// return the div
  return logo;
}

function createHeader() {
// create a header element with class "header"
  const header = document.createElement("header");
  header.classList.add("header");
// append the logo to the header
  header.appendChild(createLogo());
// return the header
  return header;
}

function createCopyrightInfo() {
  const span = document.createElement("span");
  span.textContent = "Copyright © 2022 thejwuscript";
  return span;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.appendChild(createCopyrightInfo());
  return footer;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  return main;
}

function initialPageLoad() {
  loadProjects();
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createFooter());
  content.appendChild(createSideBar());
  content.appendChild(createMain());
  
  loadTasks();
  loadAllTasksPage();
  
  return content;
}

export default initialPageLoad;