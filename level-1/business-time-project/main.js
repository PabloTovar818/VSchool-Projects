var sidebar = document.querySelector("#sidebar");
var sidebarContent = document.querySelector("#sidebar-content"); 
var about = document.createElement("a");

sidebar.addEventListener("click", e => {
    //sidebarContent.style = "visibility: visible;";
    about.setAttribute("rel", "#about");
    about.setAttribute("href", "about.html");
    about.textContent = "ABOUT";
    sidebarContent.append(about);
})

sidebar.addEventListener("mouseout", e => {
    sidebarContent.remove(about);
})