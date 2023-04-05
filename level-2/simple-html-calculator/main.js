let h3 = document.createElement('h3');
let result = 0;

const addBtn = document.querySelector('#add-btn').addEventListener('click', e => {
    e.preventDefault();
    let num1 = document.getElementById('add-num1').value;
    let num2 = document.getElementById('add-num2').value;
    result = parseInt(num1) + parseInt(num2);
    h3.textContent = result;
    document.body.append(h3);

});
const subBtn = document.querySelector('#sub-btn').addEventListener('click', e => {
    e.preventDefault();
    let num1 = document.getElementById('sub-num1').value;
    let num2 = document.getElementById('sub-num2').value;
    result = parseInt(num1) - parseInt(num2);
    h3.textContent = result;
    document.body.append(h3);
});
const mulBtn = document.querySelector('#mul-btn').addEventListener('click', e => {
    e.preventDefault();
    let num1 = document.getElementById('mul-num1').value;
    let num2 = document.getElementById('mul-num2').value;
    result = parseInt(num1) * parseInt(num2);
    h3.textContent = result;
    document.body.append(h3);
});