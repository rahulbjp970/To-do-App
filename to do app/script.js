// Get references to the DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Event listener to add task when the "Add" button is clicked
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        addTask(taskText);
        taskInput.value = ''; // Clear input field after adding
    }
});

// Event listener to add task when the "Enter" key is pressed
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const taskText = taskInput.value.trim();
        
        if (taskText) {
            addTask(taskText);
            taskInput.value = ''; // Clear input field after adding
        }
    }
});

// Function to add a new task to the list
function addTask(taskText) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    
    // Task content
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="task-buttons">
            <button class="complete-btn">✔️</button>
            <button class="delete-btn">❌</button>
        </div>
    `;
    
    // Add event listener for task completion
    const completeButton = li.querySelector('.complete-btn');
    completeButton.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Add event listener for task deletion
    const deleteButton = li.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    // Append the new task to the list
    taskList.appendChild(li);
}
