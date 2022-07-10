import { Project } from "./Project";

function loadProjects() {
  const array = JSON.parse(localStorage.getItem("projects"));
  if (array === null) {
    Project("Exercise");
  } else {
    array.forEach(title => Project(title));
  };
};

export default loadProjects;