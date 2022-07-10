function Project(title) {
  const getTitle = () => title;

  const project = {getTitle}
  if (Project.all === undefined) {
    Project.all = [];
  };
  Project.all.push(project);

  return project;
}

export { Project };