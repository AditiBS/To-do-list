let taskCount = 0;

document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const label = document.createElement("span");
  label.className = "task-label";
  label.textContent = taskText;

  checkbox.addEventListener("change", function () {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    li.remove();
    updateTaskCount(-1);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
  updateTaskCount(1);
}

function updateTaskCount(change) {
  taskCount += change;
  document.getElementById("taskCount").textContent = `Total tasks: ${taskCount}`;
}

