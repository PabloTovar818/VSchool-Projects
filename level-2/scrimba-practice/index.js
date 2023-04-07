let display = document.querySelector("#time-display");

getTime();      //immediately grabs time instead of waiting 1 second before displaying
setInterval(getTime, 1000);     //continously grabs time every second

function getTime() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if (hour < 10) {
        hour = `0${hour}`;
    }
    if (min < 10) {
        min = `0${min}`;
    }
    if (sec < 10) {
        sec = `0${sec}`;
    }

    display.textContent = `${hour}:${min}:${sec}`;
}