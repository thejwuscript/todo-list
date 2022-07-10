import Project from "./Project";

function saveProjects() {
  const projectsArray = Project.all.map(project => project.getTitle());
  localStorage.setItem("projects", JSON.stringify(projectsArray));
}

export default saveProjects;