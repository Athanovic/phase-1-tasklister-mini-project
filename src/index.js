document.addEventListener("DOMContentLoaded", () => {
  // Select the form
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Select the input properly
    const input = document.querySelector('input[name="new-task-description"]');
    if (!input) return; // Safety check for tests

    // Get the value
    const taskDescription = input.value;

    // Add the task to the list
    buildToDo(taskDescription);

    // Clear the input
    input.value = "";
  });

  // Function to create and append a task
  function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const taskList = document.getElementById("tasks");
    if (taskList) {
      taskList.appendChild(li);
    }
  }
});