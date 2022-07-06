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

function initialPageLoad() {
// get the div element with id "content"
  const content = document.getElementById("content");
// append the header to the above div
  content.appendChild(createHeader());
// return the div
  return content
}

export default initialPageLoad;