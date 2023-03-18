//main functions of this app
//1. write list item in input box
//2. click add to add list item to list of items section
//3. each item should have a delete button and edit button attached to it
//4. delete button should remove item from list
//5. edit button allows list item text content to be changed

var form = document.addItem;
var input = document.addItem.title;
var list = document.querySelector("#list");

form.addEventListener("submit", addItem)

function addItem(e) {
    e.preventDefault();
    if (input.value == "") {
        alert("No item to add!");
    }
    else {
    var newDiv = document.createElement("div");
    var newItem = document.createElement("li");
    newDiv.textContent = input.value;
    list.append(newItem);
    newItem.append(newDiv);
    createDeleteButton(newItem);
    createEditButton(newItem);
    clearInput();
    }
}

function clearInput() {
    input.value = "";
}

function createDeleteButton(item) {
    var newDeleteButton = document.createElement("button");
    newDeleteButton.textContent = "X";
    item.prepend(newDeleteButton);

    //delete list item on click
    newDeleteButton.addEventListener("click", e => {
        e.target.parentNode.remove();
    });
}

function createEditButton (item) {
    var newEditButton = document.createElement("button");
    newEditButton.textContent = "edit";
    item.prepend(newEditButton);

    //edit list item on click
    newEditButton.addEventListener("click", e => {
        var userEdit = prompt("Enter new list item name: ");
        if (userEdit == "") {
            alert("Enter valid name!");
        }
        else {
            e.target.parentNode.lastChild.textContent = userEdit;
        }
    })
}

//things to work on
//1. on click edit button change li div textcontent to an input box
//2. change edit button textcontent to save
//3. on click save change input box back into li div textcontent that equals newly typed item name