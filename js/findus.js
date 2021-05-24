function openModuleList(n) {
    var moduleList = document.querySelectorAll(".moduleList");
    var image = document.querySelectorAll(".countryName img");
    moduleList[n].classList.toggle("show");
    image[n].classList.toggle("rotate");
}