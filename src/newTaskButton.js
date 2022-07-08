import taskForm from './taskForm';

function newTaskButton() {
  const button = document.createElement('button');
  button.type = "button";
  button.textContent = "Add Task"
  // Add an event handler to append a new task form, triggered by click
  button.addEventListener("click", () => {
    if (document.querySelector(".new-task-container") === null) {
      document.querySelector('.main').appendChild(taskForm());
    };
  });

  return button
}

export default newTaskButton