let serialNumber = 1;

function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    if (task.trim() === "") {
        alert("Please enter a task.");
        return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    var taskText = document.createTextNode(task);
    var serialSpan = document.createElement("span");
    serialSpan.classList.add("serial");
    serialSpan.textContent = serialNumber++;
    var timeSpan = document.createElement("span");
    timeSpan.classList.add("time");
    timeSpan.textContent = getCurrentDateTime();
    li.appendChild(serialSpan);
    li.appendChild(taskText);
    li.appendChild(timeSpan);
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.classList.add("delete");
    li.appendChild(deleteButton);
    ul.appendChild(li);
    input.value = "";
}

function deleteTask(event) {
    if (event.target.classList.contains("delete")) {
        var li = event.target.parentElement;
        li.remove();
    }
}

function getCurrentDateTime() {
    var now = new Date();
    var date = now.toLocaleDateString('en-US');
    var time = now.toLocaleTimeString('en-US');
    return `${date} ${time}`;
}
