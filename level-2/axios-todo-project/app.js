function getRequest() {
    axios.get("https://api.vschool.io/pablo/todo")
        .then(response => listData(response.data))
        .catch(error => console.log(error))
}

function listData(data) {
    clearList();
    const todoList = document.querySelector("#todo-list")
    for (let i = 0; i < data.length; i++) {
        const list = document.createElement("li");
        const checkbox = document.createElement("input");
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const desc = document.createElement("p");
        const identifier = document.createElement("p");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("onchange", "checkboxChanged(this)");
        list.setAttribute(`id`, `item${i}`);

        if (data[i].completed) {
            div.setAttribute("class", "completed");
            checkbox.defaultChecked = true;
        }

        h1.textContent = data[i].title;
        desc.textContent =  `Description: ${data[i].description}`;
        identifier.textContent = `ID: ${data[i]._id}`;
        todoList.appendChild(list);
        list.appendChild(checkbox);
        list.appendChild(div);
        div.appendChild(h1);
        div.appendChild(desc);
        div.appendChild(identifier);
    }
}

function clearList() {
    const el = document.querySelector("#todo-list");
    while(el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

function postRequest(value) {
    axios.post("https://api.vschool.io/pablo/todo", value)
       .then(response => getRequest())
       .catch(error => console.log(error))
}

function deleteRequest() {
    const id = todoForm.identifier.value;
    axios.delete(`https://api.vschool.io/pablo/todo/${id}`)
        .then(response => getRequest())
        .catch(error => console.log(error))
}

function putRequest(id, edits) {
    axios.put(`https://api.vschool.io/pablo/todo/${id}`, edits)
        .then(response => getRequest())
        .catch(error => console.log(error))
}

function clearInputs() {
    todoForm.title.value = "";
    todoForm.description.value = "";
    todoForm.identifier.value = "";
}

function checkboxChanged(checkbox) {
    let text = checkbox.nextSibling.childNodes[2].textContent;
    let id = text.slice(4);
    
    if (checkbox.checked) {
        checkbox.nextSibling.setAttribute("class", "completed");
        const edits = {
            completed: true
        }
        putRequest(id, edits);
    }
    else {
        const edits = {
            completed: false
        }
        putRequest(id, edits);
    }
}

getRequest();

const form = document.todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newItem = {
        title: todoForm.title.value,
        description: todoForm.description.value
    }
    postRequest(newItem);
});

const refreshButton = document.querySelector("#refresh-button").addEventListener("click", getRequest);
const deleteButton = document.querySelector('#delete-button').addEventListener("click", deleteRequest);
const editButton = document.querySelector('#put-button').addEventListener("click", (e) => {
    let changes = {};
    if (todoForm.title.value === "") {
        changes = {
            description: todoForm.description.value
        }
    }
    else if (todoForm.description.value === "") {
        changes = {
            title: todoForm.title.value
        }
    }
    else {
        console.log("firing else")
        changes = {
            title: todoForm.title.value,
            description: todoForm.description.value
        }
    }
    const todoId = todoForm.identifier.value;
    putRequest(todoId, changes);
});