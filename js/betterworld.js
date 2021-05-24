function openBWmenu() {
    var list = document.querySelector(".sectionmenulist");
    list.classList.toggle("d-none");
}

function moveleft() {
    var grid = document.querySelector(".aportsgrid");
    var dot = document.querySelectorAll(".dot");
    grid.classList.add("left");
    dot[0].classList.toggle("active");
    dot[1].classList.toggle("active");
}

function moveright() {
    var grid = document.querySelector(".aportsgrid");
    var dot = document.querySelectorAll(".dot");
    grid.classList.remove("left");
    dot[0].classList.toggle("active");
    dot[1].classList.toggle("active");
}