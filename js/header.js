function openMenu() {
    var menumob = document.querySelector(".menuMobile");
    var section = document.querySelectorAll("section");
    var footermenu = document.querySelector(".footermain");
    var socialmob = document.querySelector(".footersocialmob");
    var ham = document.querySelector(".ham img")
    menumob.classList.toggle("d-flex");
    socialmob.classList.toggle("d-flex");
    footermenu.classList.toggle("d-none");
    for (var i = 0; i < section.length; i++) {
        section[i].classList.toggle("d-none");
    }
    if (ham.src.match("ham")) {
        ham.src = "../imgs/header/close-nav.png";

    } else {
        ham.src = "../imgs/header/ham.png";
        for (var i = 0; i < section.length; i++) {
            section[i].style.position = "initial"
        }
    }
}

function openFooterList(n) {
    var footerList = document.querySelectorAll(".footerList");
    var footerArrow = document.querySelectorAll(".footerArrow");

    for (var i = 0; i < footerList.length; i++) {
        footerList[n].classList.toggle("active");
        footerArrow[n].classList.toggle("rotate");
        return
    }
}

function openMenuList(n) {
    var menulist = document.querySelectorAll(".menuList");
    var arrow = document.querySelectorAll(".mobMenuArrow");
    for (var i = 0; i < menulist.length; i++) {
        menulist[n].classList.toggle("d-flex");
        arrow[n].classList.toggle("rotate");
        return
    }
}

if (window.innerWidth >= 900) {
    window.addEventListener("scroll", function() {
        var section = document.querySelectorAll(".showE");
        for (var i = 0; i < section.length; i++) {
            var position = section[i].getBoundingClientRect().top;
            var postrigger = window.innerHeight * 2 / 3;
            var scrollpos = window.scrollY;
            if (position >= 0 && position <= postrigger) {
                section[i].classList.add("effect");
            }
            if (scrollpos == 0) {
                section[i].classList.remove("effect");
            }
        }
    })
}