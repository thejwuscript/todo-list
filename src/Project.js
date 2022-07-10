import saveProjects from "./saveProjects";

function Project(title) {
  const getTitle = () => title;

  const destroy = () => {
    Project.all.splice(Project.all.indexOf(this), 1);
    saveProjects();
    Task.all = Task.all.filter(task => task.getProject() !== this.title);
    saveTasks();
  };

  const project = {getTitle, destroy}

  if (Project.all === undefined) {
    Project.all = [];
  };
  Project.all.push(project);

  return project;
}



export { Project };