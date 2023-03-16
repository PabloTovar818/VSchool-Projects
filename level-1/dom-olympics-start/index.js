
//qualifier
var head = document.getElementById("header");
head.innerHTML = "JavaScript Made This!! <br><br><span id='header2'><span class='name'>Pablo</span> wrote the JavaScript</span>";   //used innerHTML to insert line break and span
head.style.textAlign = "center";
head.style.fontWeight = "bold";
var head2 = document.getElementById("header2");
head2.style.fontSize = "12px";

//bronze
var leftMessage = document.querySelectorAll(".left");
var rightMessage = document.querySelectorAll(".right");
leftMessage[0].textContent = "Hey lets go to the movies!";
rightMessage[0].textContent = "Sure, what movie should we watch?"
leftMessage[1].textContent = "What about the Avengers?";
rightMessage[1].textContent = "Yea that sounds great!";

var clearBtn = document.querySelector("#clear-button");
clearBtn.addEventListener("click", clearMessages);
var messageBox = document.querySelector(".messages");
function clearMessages() {
    messageBox.textContent = "";
};

//silver
var dropdown = document.querySelector("#theme-drop-down");
dropdown.addEventListener('change', changeTheme);

function changeTheme() {
    if (dropdown.value == "theme-two") {
        for (var i = 0; i < 2; i++) {
            leftMessage[i].style.backgroundColor = "red";
            rightMessage[i].style.backgroundColor = "black";
            rightMessage[i].style.color = "white";
        }
    }
    else if (dropdown.value == "theme-one") {
        for (var i = 0; i < 2; i++) {
            leftMessage[i].style.backgroundColor = "burlywood";
            rightMessage[i].style.backgroundColor = "lightblue";
            rightMessage[i].style.color = "black";
        }
    }
}

//gold
//things to keep in mind
//send button needs to insert text alternately to left and right side of messages box
//a left and right class exists to stylize messages as they are inserted
//need to keep track of which side was occupied last
var messagesBox = document.querySelector(".messages");
var inputBox = document.querySelector("#input");
var sendBtn = document.getElementById("send-btn");
sendBtn.addEventListener("click", insertMessage);

//extra credit
function insertMessage() {
    const newMessage = document.createElement("div");
    //check if any messages exist, if not create new message
    if (messagesBox.children.length < 1) {
        newMessage.classList.add("message", "left");
        newMessage.textContent = inputBox.value;
        messagesBox.append(newMessage);
    }
    else {
        //find last message in messagesBox by class .message
        var lastMessage = document.querySelectorAll(".message:last-of-type");

        //check to see if lastMessage contains either left or right class
        //assign appropriate classes to newmessage accordingly
        if (lastMessage[0].classList.contains("right")) {
            newMessage.classList.add("message", "left");
        }
        else if (lastMessage[0].classList.contains("left")){
            newMessage.classList.add("message", "right");
        }
        newMessage.textContent = inputBox.value;
        messagesBox.append(newMessage);
    }
}