function openCategory(n) {
    var option = document.querySelectorAll(".categoryoptions")
    option[n].classList.toggle("show");
}

function openFilterModule() {
    var filters = document.querySelector(".filters");
    var filtermain = document.querySelector(".filtersmain");
    if (screen.width <= 768) {
        filters.classList.toggle("show");
        filtermain.classList.toggle("show");
    }
}

function openCategoryrModule() {
    var category = document.querySelector(".categorylist");
    var categoryinner = document.querySelector(".categoriesinner");
    if (screen.width <= 768) {
        category.classList.toggle("show");
        categoryinner.classList.toggle("show");
    }
}