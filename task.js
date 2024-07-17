const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push({ text: task, completed: false });
        renderTasks();
        taskInput.value = '';
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
            <span class="task-text">${task.text}</span>
            <div class="task-actions">
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        if (task.completed) {
            taskElement.classList.add('completed');
        }
        taskElement.querySelector('.complete-btn').addEventListener('click', () => {
            task.completed = !task.completed;
            renderTasks();
        });
        taskElement.querySelector('.delete-btn').addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });
        taskList.appendChild(taskElement);
    });
}

renderTasks();