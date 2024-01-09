
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var newTask = document.createElement("li");
        newTask.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Remove</button>';
        newTask.style.backgroundColor = getRandomColor();
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function removeTask(button) {
    button.parentNode.remove();
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}