if (localStorage.getItem('todos') == null) {
    localStorage.setItem('todos', JSON.stringify([]));
}

populateDocument();

document
    .getElementById("addTodo")
    .addEventListener('submit', function (event) {
        event.preventDefault();
        const todos = JSON.parse(localStorage.getItem('todos'));
        todos.push({ label: event.target.todo.value, deleted: false });
        localStorage.setItem('todos', JSON.stringify(todos));
        event.target.todo.value = '';
        populateDocument();
    });

function populateDocument() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    var el_todos = document.getElementById('todos');
    el_todos.innerHTML = '';
    todos.forEach(function (todo, index) {
        if (todo.deleted == false) {
            var el_todo = document.createElement('li');
            el_todo.setAttribute('class', 'todo');
            var el_input = document.createElement('input');
            var el_btn = document.createElement('button');
            el_input.setAttribute('class', 'todoField');
            el_input.setAttribute('name', 'todo');
            el_input.setAttribute('type', 'text');
            el_input.setAttribute('data-id', index);
            el_input.setAttribute('onchange', 'onChange('+index+')');
            el_input.value = todo.label;
            el_btn.setAttribute('class', 'btn');
            el_btn.setAttribute('onclick', 'onDelete('+index+')')
            el_btn.innerHTML = 'X';
            el_todo.appendChild(el_input);
            el_todo.appendChild(el_btn);
            el_todos.appendChild(el_todo);
        }
    });
}

function onChange(id) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos[id].label = el_input.value;
    localStorage.setItem('todos', JSON.stringify(todos));
}

function onDelete(id) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    todos[id].deleted = true;
    localStorage.setItem('todos', JSON.stringify(todos));
    populateDocument();
}

function onReset() {
    if (confirm("Voulez-vous réinitialiser la todo list ?")) {
        localStorage.setItem('todos', JSON.stringify([]));
        populateDocument();
    }
}
