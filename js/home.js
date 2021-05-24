window.addEventListener("orientationchange", function() {
    location.reload();
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("singlehomeNewsmob");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

var fSize = document.querySelector("html");
var fontS = window.getComputedStyle(fSize).getPropertyValue("font-size");
var fontSize = parseFloat(fontS);

if (screen.width <= 768) {
    var homeProd = document.querySelector(".prodHomegrid");
    var slideW = 18;
    var prod = document.querySelectorAll(".singleProd");

    var clientX;
    var index = 0;
    var slideWidth = (prod[0].clientWidth + fontSize) / fontSize;
    var dot = document.querySelectorAll(".dot");
    dot[index].classList.add("active");


    homeProd.style.transform = `translateX(${slideW}rem)`;
    homeProd.addEventListener("touchstart", function(e) {
        clientX = e.touches[0].clientX;
    })
    homeProd.addEventListener('touchend', function(e) {
        var deltaX;
        for (var i = 0; i < dot.length; i++) {
            dot[i].classList.remove("active");
        }
        deltaX = e.changedTouches[0].clientX - clientX;

        if (deltaX < 0) {
            if (index >= prod.length - 1) {
                dot[index].classList.add("active");
                return
            }
            index++;
            slideW = slideW - slideWidth
            homeProd.style.transform = `translateX(${slideW}rem)`;
            dot[index].classList.add("active");

        } else if (deltaX > 0) {
            if (index == 0) {
                dot[index].classList.add("active");
                return
            }
            index--;
            slideW = slideW + slideWidth;
            homeProd.style.transform = `translateX(${slideW}rem)`;
            dot[index].classList.add("active");
        }
    });
}


if (screen.width > 768) {

    var homenews = document.querySelectorAll(".singlehomeNews");
    var newsSlider = (homenews[0].clientWidth + fontSize) / fontSize;

    homenews[3].addEventListener("mouseover", function() {
        var homeNewsGrid = document.querySelector(".homeNewsgrid");
        homeNewsGrid.style.transform = `translateX(${-newsSlider}rem)`;
        homenews[0].addEventListener("mouseover", function() {
            homeNewsGrid.style.transform = `translateX(${0}rem)`;
        });
    });


}