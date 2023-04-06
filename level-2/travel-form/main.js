const form = document.travelForm;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let age = form.age.value;
    let gender = form.gender.value;
    let location = form.dropdown.value;
    let diet = form.diet;
    let dietChecked = [];

    for (var i = 0;  i < diet.length; i++) {
        if (diet[i].checked) {
            dietChecked.push(diet[i].value);
        }
    }
    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nTraveling to: ${location}\nDietary Restrictions: ${dietChecked}`);
})