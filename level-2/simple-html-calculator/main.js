let h3 = document.createElement('h3');
let num1 = document.myForm.addContainer.addNum1.value;
console.log(num1);

const addBtn = document.querySelector('#add-btn').addEventListener('click', e => {
    e.preventDefault();
    let num1 = document.getElementsByName('add-num2').value;
    let num2 = document.getElementsByName('add-num2').value;

    let result = num1 + num2;
    h3.textContent = result;
    document.body.append(h3);

});
const subBtn = document.querySelector('#sub-btn');
const mulBtn = document.querySelector('#mul-btn');