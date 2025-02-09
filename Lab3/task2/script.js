todoForm = document.querySelector('.todo-form')
todoInput = document.querySelector('.todo-input')
todoUL = document.querySelector('.tasks')

clearButton = document.querySelector('.todo-clear-btn');

deleteTaskButton = document.querySelectorAll('.todo-del-task');

let todoList = [];

todoForm.addEventListener('submit', (x) => {
    x.preventDefault();
    addTodo();
    updateList();
    todoInput.value = "";
})

todoUL.addEventListener('click', (x) => {
    if (x.target.classList.contains('todo-del-task')) {
        let task = x.target.closest("li");
        if (task) {
            task.remove();
        }
    }
})

clearButton.addEventListener('click', function() {
    clearList();
})


const addTodo = function() {
    let todo = todoInput.value;
    if (todo != "") {
        todoList.push(createTask(todo));
    }
}   

const createTask = function(todo) {
    let newTask = document.createElement('li');
    let newLabel = document.createElement('label');
    let newText = document.createTextNode(todo);
    let newCheckBox = document.createElement('input');
    let newInputImage = document.createElement('input');

    newInputImage.setAttribute('type', 'image');
    newInputImage.setAttribute('src', "img/icons8-garbage.svg");
    newInputImage.setAttribute('class', 'todo-del-task');

    newCheckBox.setAttribute('type', 'checkbox');
    
    newLabel.appendChild(newCheckBox);
    newLabel.appendChild(newText);
    
    newTask.appendChild(newLabel);
    newTask.appendChild(newInputImage);

    return newTask;
}

const updateList = function() {
    todoList.forEach((task) => todoUL.appendChild(task));
} 

const clearList = function() {
    todoList = [];
    todoUL.innerHTML = "";
}
