<script>
    function addTask() {
        var newTaskInput = document.getElementById("newTask");
        var newTasksList = document.getElementById("newTasks");

        // Get the value from the input
        var taskText = newTaskInput.value;

        // Check if the input is not empty
        if (taskText.trim() !== "") {
            // Create a new list item
            var li = document.createElement("li");
            li.textContent = taskText;

            // Create a delete button for the task
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.onclick = function () {
                // Remove the task when the delete button is clicked
                li.remove();
            };

            // Append the delete button to the list item
            li.appendChild(deleteButton);

            // Append the new task to the list
            newTasksList.appendChild(li);

            // Clear the input field after adding the task
            newTaskInput.value = "";
        }
    }
</script>

<div class='container'>
    <h1>Todo List</h1>
    <div class='layout'>
        <div>
            <h2>NEW</h2>
            <input type="text" id="newTask" placeholder="Add a new task">
            <button onclick="addTask()">Add Task</button>
            <ul id="newTasks"></ul>
        </div>
        <div>
            <h2>COMPLETED</h2>
            <ul id="completedTasks"></ul>
        </div>
    </div>
</div>

<style>
    .container {
        width: 1000px;
        background-color: #00ffff;
        border: 2px solid #ddd;
        border-radius: 5px;
        padding: 20px;
        box-sizing: border-box;
    }

    h1 {
        text-align: center;
        color: #333;
    }

    .layout {
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 20px;
        margin-top: 20px;
    }

    h2 {
        color: #333;
        margin-bottom: 10px;
        text-align: center;
    }

    input[type="text"] {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        box-sizing: border-box;
    }

    button {
        background-color: #4caf50;
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        border-radius: 3px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 3px;
        padding: 10px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li button {
        background-color: #e74c3c;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 3px;
    }

    #completedTasks {
        background-color: #d1fbd0;
    }
</style>