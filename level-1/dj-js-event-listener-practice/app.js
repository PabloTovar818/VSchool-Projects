var box = document.getElementById("box");
box.addEventListener("mousemove", onHover);
box.addEventListener("mouseleave", onExit);
box.addEventListener("mousedown", onClick);
box.addEventListener("mouseup", onRelease);
box.addEventListener("dblclick", onDoubleClick);
box.addEventListener("wheel", onWheel);

var keyboard = document.querySelector("#keyboard");
keyboard.addEventListener("keydown", e => {
    switch(e.key) {
        case "r":
            box.style.backgroundColor = "red";
            break;
        case "b":
            box.style.backgroundColor = "blue";
            break;
        case "y":
            box.style.backgroundColor = "yellow";
            break;
        case "g":
            box.style.backgroundColor = "green";
            break;
        case "o":
            box.style.backgroundColor = "orange";
            break;
    }
})

function onHover() {
    box.style.backgroundColor = "blue";
}

function onExit() {
    box.style.backgroundColor = "black";
}

function onClick() {
    box.style.backgroundColor = "red";
}

function onRelease() {
    box.style.backgroundColor = "yellow";
}

function onDoubleClick() {
    box.style.backgroundColor = "green";
}

function onWheel() {
    box.style.backgroundColor = "orange";
}