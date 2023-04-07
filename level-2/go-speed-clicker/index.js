const display = document.querySelector("#display");
const clickBtn = document.querySelector("#btn");
const clearBtn = document.querySelector("#clear-btn");
let clickCount = localStorage.getItem("clicks");

clickBtn.addEventListener("click", click);
clearBtn.addEventListener("click", clear);

function click() {
    clickCount++;
    localStorage.setItem("clicks", clickCount);
    display.textContent = clickCount;
}

function clear() {
    clickCount = 0;
    localStorage.setItem("clicks", clickCount);
    display.textContent = clickCount;
}

display.textContent = clickCount;