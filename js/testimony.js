window.addEventListener("orientationchange", function() {
    location.reload();
});
var slider = document.querySelector(".testimonySlider");
var singleSlide = document.querySelectorAll(".testimonysingle");
var fSize = document.querySelector("html");
var fontS = window.getComputedStyle(fSize).getPropertyValue("font-size");
var fontSize = parseFloat(fontS);
var prev = document.querySelector("#moveleft");
var next = document.querySelector("#moveright");
var index = 1;

var firstClone = singleSlide[0].cloneNode(true);
var lastClone = singleSlide[singleSlide.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slider.append(firstClone);
slider.prepend(lastClone);

var slideWidth = singleSlide[index].clientWidth;
var slideWidth2 = (slideWidth + fontSize) / fontSize;

if (screen.width > 768) {
    slider.style.transform = `translateX(${(-slideWidth2)-slideWidth2/2}rem)`;
    prev.addEventListener("click", function() {
        index++;
        var singleSlide = document.querySelectorAll(".testimonysingle");
        if (index == singleSlide.length - 4) {
            index = 0;
        }
        slider.style.transform = `translateX(${(-slideWidth2 * index)-slideWidth2/2}rem)`;
    });

    next.addEventListener("click", function() {
        index--;
        if (index < 0) {
            index = singleSlide.length - 3;
        }
        slider.style.transform = `translateX(${(-slideWidth2 * index)-slideWidth2/2}rem)`;
    });
}
if (screen.width >= 640 && screen.width <= 768) {
    slider.style.transform = `translateX(${-slideWidth2/1.6}rem)`;
    prev.addEventListener("touchstart", function() {
        index++;
        var singleSlide = document.querySelectorAll(".testimonysingle");
        if (index == singleSlide.length - 1) {
            index = 1;
        }
        slider.style.transform = `translateX(${(-slideWidth2 * index)+slideWidth2/2.4}rem)`;
    });

    next.addEventListener("touchstart", function() {
        index--;
        var singleSlide = document.querySelectorAll(".testimonysingle");
        if (index == 0) {
            index = singleSlide.length - 2
        }
        slider.style.transform = `translateX(${(-slideWidth2 * index)+slideWidth2/2.4}rem)`;
    });
}
if (screen.width < 640) {
    slider.style.transform = `translateX(${-slideWidth2}rem)`;
    prev.addEventListener("touchstart", function() {
        index++;
        var singleSlide = document.querySelectorAll(".testimonysingle");
        if (index == singleSlide.length - 1) {
            index = 1;
        }
        slider.style.transform = `translateX(${(-slideWidth2*index)}rem)`;

    });
    next.addEventListener("touchstart", function() {
        index--;
        var singleSlide = document.querySelectorAll(".testimonysingle");
        if (index == 0) {
            index = singleSlide.length - 2
        }
        slider.style.transform = `translateX(${(-slideWidth2)}rem)`;
    });
}