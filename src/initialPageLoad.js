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

function initialPageLoad() {
// get the div element with id "content"
  const content = document.getElementById("content");
// append the header to the above div
  content.appendChild(createHeader());
  content.appendChild(createFooter());
// return the div
  return content;
}

export default initialPageLoad;