function heightfun() {
    var imgSize = document.querySelector(".sliderContent img");
    var controls = document.querySelector(".historyControls");
    var fSize = document.querySelector("html");
    var fontS = window.getComputedStyle(fSize).getPropertyValue("font-size");
    var fontSize = parseFloat(fontS);
    size = (imgSize.clientHeight) - (fontSize * 5);
    size2 = (imgSize.clientHeight) - (fontSize * 2);
    if (screen.width > 768) {
        controls.style.height = `${size}px`;
    } else {
        controls.style.height = `${size2}px`;
    }
}

window.setInterval(heightfun, 1000);

var slideIndex = 0;
var cn = 0;
var cy = 0;

showSlides(slideIndex);
currentYear(cn, cy);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function autoPlay() {
    plusSlide(1);
}

var playslider = document.querySelector("#playSlider");
var stopslider = document.querySelector("#stopSlider");
var interval;
playslider.addEventListener("click", function() {
    interval = setInterval(autoPlay, 10000);
    playslider.style.display = "none";
    stopslider.style.display = "inline";
});

stopslider.addEventListener("click", function() {
    clearInterval(interval);
    playslider.style.display = "inline";
    stopslider.style.display = "none";
});

function currentYear(n, y) {
    var year = document.querySelectorAll(".singleyear");
    var groupDots = document.querySelectorAll(".groupdots");
    var groupDotsmob = document.querySelectorAll(".groupdots-mob");
    var month = document.querySelectorAll(".monthYear");
    for (var i = 0; i < year.length; i++) {
        year[i].classList.remove("active");
        month[i].classList.remove("active");
        groupDots[i].classList.remove("active");
        groupDotsmob[i].classList.remove("active");
    }
    year[y].classList.add("active");
    month[y].classList.add("active");
    groupDots[y].classList.add("active");
    groupDotsmob[y].classList.add("active");
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("sliderContent");
    var groupDots = document.querySelectorAll(".groupdots");
    var dot = document.querySelectorAll(".singledot");
    var dotmob = document.querySelectorAll(".singledot-mob");
    var groupDotsmob = document.querySelectorAll(".groupdots-mob");
    var month = document.querySelectorAll(".monthYear");
    var year = document.querySelectorAll(".singleyear");

    if (n > slides.length - 1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.add("none");
        dot[i].classList.remove("active");
        dotmob[i].classList.remove("active");
    }
    slides[slideIndex].classList.remove("none");
    dot[slideIndex].classList.add("active");
    dotmob[slideIndex].classList.add("active");
    var groupDotsarray = [];
    var parentindex;
    for (var i = 0; i < groupDots.length; i++) {
        groupDots[i].classList.remove("active");
        groupDotsmob[i].classList.remove("active");
        year[i].classList.remove("active");
        month[i].classList.remove("active");
        var parentdesk = dot[slideIndex].parentElement;
        parentdesk.classList.add("active");
        var parent = dotmob[slideIndex].parentElement;
        parent.classList.add("active");
        parentindex = parent.className;
        groupDotsarray[i] = groupDotsmob[i].className;
    }
    var index = groupDotsarray.indexOf(parentindex);
    year[index].classList.add("active");
    month[index].classList.add("active");
}