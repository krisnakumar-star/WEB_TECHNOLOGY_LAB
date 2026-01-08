function addTask() {
  const text = taskInput.value;
  if (!text) return;

  const task = document.createElement("div");
  task.className = "task";
  task.draggable = true;
  task.id = Date.now();
  task.ondragstart = drag;
  task.innerHTML = text + "<br><small>" + new Date().toDateString() + "</small>";

  document.querySelector(".column").appendChild(task);
  taskInput.value = "";
}

function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("id", e.target.id);
}

function drop(e) {
  e.preventDefault();
  const task = document.getElementById(e.dataTransfer.getData("id"));
  e.target.appendChild(task);

  if (e.target.id === "completed") {
    task.classList.add("completed");
    alert("Task Completed Successfully");
  }
}
