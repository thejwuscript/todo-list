import saveProjects from "./saveProjects";
import { Task } from "./Task";
import saveTasks from "./saveTasks";

function Project(title) {
  const getTitle = () => title;

  const destroy = function() {
    Project.all.splice(Project.all.indexOf(this), 1);
    saveProjects();

    if (Task.all) {
      Task.all = Task.all.filter(task => task.getProject() !== title);
      saveTasks();
    }
   
  };

  const project = {getTitle, destroy}

  if (Project.all === undefined) {
    Project.all = [];
  };
  Project.all.push(project);

  return project;
}



export { Project };