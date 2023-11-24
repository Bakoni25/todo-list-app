document.addEventListener('DOMContentLoaded', function () {
    // Load tasks from localStorage
    loadTasks();

    // Event listener for 'Add' button
    document.querySelector('button').addEventListener('click', addTask);
});

function addTask() {
    // Get input value
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new task
        const task = document.createElement('li');
        task.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;

        // Append task to the task list
        document.getElementById('taskList').appendChild(task);

        // Save tasks to localStorage
        saveTasks();

        // Clear input
        taskInput.value = '';
    }
}

function removeTask(button) {
    // Remove the task from the task list
    const task = button.parentNode;
    task.parentNode.removeChild(task);

    // Save tasks to localStorage
    saveTasks();
}

function saveTasks() {
    // Save tasks to localStorage
    const tasks = document.getElementById('taskList').innerHTML;
    localStorage.setItem('tasks', tasks);
}

function loadTasks() {
    // Load tasks from localStorage
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
        document.getElementById('taskList').innerHTML = tasks;
    }
}
