function getRequest() {
    axios.get("https://api.vschool.io/pablo/todo")
        .then(response => listData(response.data))
        .catch(error => console.log(error))
}

function listData(data) {
    clearList();
    const todoList = document.querySelector("#todo-list")
    for (let i = 0; i < data.length; i++) {
        const h1 = document.createElement("h1");
        h1.textContent = data[i].title;
        todoList.appendChild(h1);
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
       .then(response => listData(response.data))
       .catch(error => console.log(error))
}

getRequest();

const form = document.todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newItem = {
        title: todoForm.title.value
    }
    postRequest(newItem);
});

const refreshButton = document.querySelector("#refresh-button").addEventListener("click", getRequest);