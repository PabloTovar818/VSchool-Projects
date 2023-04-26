axios.get("https://api.vschool.io/pablo/todo")
    .then(response => {
        for (let i = 0; i < response.data.length; i++) {
            const h1 = document.createElement("h1");
            const p = document.createElement("p");
            h1.textContent = response.data[i].title;
            p.textContent = response.data[i].description;
            document.body.appendChild(h1);
            document.body.appendChild(p);
        }
    })
    .catch(error => {
        console.log(error);
    })