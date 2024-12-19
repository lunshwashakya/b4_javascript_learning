class ToDoItem {
    constructor(title) {
        this.title = title;
        this.isCompleted = false;
    }
}

let toDoList = [];

function handleFormSubmit(event){
    event.preventDefault();
    const value = document.querySelector('form input').value;
    const toDoItem = new ToDoItem(value);
    console.log({value});
    toDoList.push(toDoItem);

    renderToDoList();
}

function renderToDoList() {
    const ul = document.querySelector('ul');
    const liHTML = toDoList.map((item)=>{
        // Fixed the checked attribute syntax - it should use quotes and proper JS expression
        const li = `<li>${item.title} <input type="checkbox" ${item.isCompleted ? 'checked' : ''} /></li>`;
        return li;
    });
    ul.innerHTML = liHTML.join('');
}

document.querySelector('form button').addEventListener('click', handleFormSubmit);