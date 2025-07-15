const taskForm = document.getElementById("task-form");
const taskTableBody = document.querySelector("#task-table tbody");

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskInput = document.getElementById("task-input");
    const taskDate = document.getElementById("task-date");

    if (taskInput.value.trim() === "") return;

    addTask(taskInput.value, taskDate.value);

    taskInput.value = "";
    taskDate.value = "";
});

function addTask(taskText, taskDateTime) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${taskText}</td>
        <td>${taskDateTime}</td>
        <td>
            <button class="complete" onclick="markComplete(this)">✔</button>
            <button class="edit" onclick="editTask(this)">✏️</button>
            <button class="delete" onclick="deleteTask(this)">🗑</button>
        </td>
    `;

    taskTableBody.appendChild(row);
}

function markComplete(button) {
    const row = button.closest("tr");
    row.classList.toggle("completed-task");
}

function editTask(button) {
    const row = button.closest("tr");
    const taskCell = row.cells[0];
    const newTask = prompt("Edit your task:", taskCell.textContent);
    if (newTask) {
        taskCell.textContent = newTask;
    }
}

function deleteTask(button) {
    const row = button.closest("tr");
    row.remove();
}
