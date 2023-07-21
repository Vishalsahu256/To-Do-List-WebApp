function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        var task = document.createElement("li");
        task.textContent = taskInput.value;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            task.parentNode.removeChild(task);
        });

        task.appendChild(deleteButton);

        taskList.appendChild(task);
        taskInput.value = "";
    }
}