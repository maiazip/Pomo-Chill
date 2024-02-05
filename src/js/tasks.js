const tasksOl = document.querySelector('#createdTasks');
const taskInput = document.querySelector('#newTask');
const btnCreateTask = document.querySelector('#createTask');
const taskTemplate = document.querySelector('#taskTemplate');

renderTasksFromLocalStorage();

btnCreateTask.addEventListener('click', () => {
    const newTask = taskInput.value;
    createTask(newTask);
});

function renderTask(newTask) {
    const taskTemplateClone = taskTemplate.content.cloneNode(true);
    const newTaskElement = taskTemplateClone.querySelector('.task');
    const taskText = newTaskElement.querySelector('.taskText');

    const deleteButton = taskTemplateClone.querySelector('.btnDeleteTask');
    deleteButton.addEventListener('click', () => deleteTask(newTask.id));

    newTaskElement.id = newTask.id;
    taskText.textContent = newTask.text;

    deleteButton.addEventListener('click', () => {
        deleteTask(newTask.id);
    });

    tasksOl.appendChild(taskTemplateClone);
}

function saveTaskToLocalStorage(newTask) {
    const tasks = localStorage.getItem('tasks');
    const parsedTasks = JSON.parse(tasks) || [];

    parsedTasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(parsedTasks));
}

function renderTasksFromLocalStorage() {
    tasksOl.innerHTML ="";

    const tasks = localStorage.getItem('tasks');
    const parsedTasks = JSON.parse(tasks) || [];

    parsedTasks.forEach((task) => renderTask(task));
}

function createTask(task) {
    const newTask = {
        id: Math.random().toString(16).slice(2),
        text: task
    }

    renderTask(newTask);
    saveTaskToLocalStorage(newTask)
}

function deleteTask(taskId) {
    const taskToDelete = document.getElementById(taskId);
    taskToDelete.remove();

    const tasks = localStorage.getItem('tasks');
    const parsedTasks = JSON.parse(tasks) || [];

    const filteredTasks = parsedTasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
}