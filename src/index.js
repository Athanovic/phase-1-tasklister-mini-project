document.addEventListener("DOMContentLoaded", () => {
  // Select the form
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // CORRECT WAY: explicitly select the input
    const input = document.querySelector(
      'input[name="new-task-description"]'
    );

    const taskDescription = input.value;

    buildToDo(taskDescription);

    // Clear the input
    input.value = "";
  });

  function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const taskList = document.getElementById("tasks");
    taskList.appendChild(li);
  }
});
