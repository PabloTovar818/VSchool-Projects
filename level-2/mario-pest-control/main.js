const form = document.marioForm;
const sumArea = document.querySelector("#total");
sumArea.setAttribute("class", "center");
const h = document.createElement('h3');

let goombaTotal = 0; bobombTotal = 0; cheepTotal = 0; total = 0;

form.addEventListener("submit", e => {
    e.preventDefault();
    let goombaCount = form.goombaCount.value;
    let bobombCount = form.bobombCount.value;
    let cheepCount = form.cheepcheepCount.value;

    goombaTotal = goombaCount * 5;
    bobombTotal = bobombCount * 7;
    cheepTotal = cheepCount * 11;

    total = goombaTotal + bobombTotal + cheepTotal;
    h.textContent = `Total price: ${total}`;
    sumArea.append(h);
})