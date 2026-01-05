alert("javascript is connected");
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');
addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') {
      return;
    }
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';

    
        deleteButton.addEventListener('click', function() {
          li.remove();
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
  }

