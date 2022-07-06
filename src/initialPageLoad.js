import HouseIcon from './icons/house.png';
import TodayIcon from './icons/calendar.png';

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

function createSideBar() {
  const sideBar = document.createElement("div");
  sideBar.classList.add("sidebar");

  const allTasks = document.createElement('a');
  allTasks.href = "";
  const houseIcon = new Image();
  houseIcon.src = HouseIcon;
  houseIcon.classList.add("sidebar-icon");
  allTasks.append(houseIcon, "All Tasks");

  const today = document.createElement('a');
  today.href = "";
  const todayIcon = new Image();
  todayIcon.src = TodayIcon;
  todayIcon.classList.add("sidebar-icon");
  today.append(todayIcon, "Today");

  const line = document.createElement("hr");

  const h2 = document.createElement('h2');
  h2.textContent = "Projects";

  sideBar.append(allTasks, today, line, h2);
  return sideBar;
}

function initialPageLoad() {
// get the div element with id "content"
  const content = document.getElementById("content");
// append header, footer, sidebar, main to the above div
  content.appendChild(createHeader());
  content.appendChild(createFooter());
  content.appendChild(createSideBar());
// return the div
  return content;
}

export default initialPageLoad;