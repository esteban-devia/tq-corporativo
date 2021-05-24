function heightfun() {
    var imgSize = document.querySelector(".sliderimg img");
    var controls = document.querySelector(".CredoSlideMain");
    size = (imgSize.clientHeight) - 1;
    size2 = (imgSize.clientHeight) - 1;
    if (screen.width > 768) {
        controls.style.height = `${size}px`;
    } else {
        controls.style.height = `${size2}px`;
    }
}

window.setInterval(heightfun, 1000);

var slideIndex = 0;
var numbers;
showSlides(slideIndex);

function plusSlide(n) {
    var plus = n;
    showSlides(slideIndex += n, plus);
}

function showSlides(n, plus) {
    var slides = document.querySelectorAll(".sliderimg");
    var span = document.querySelectorAll(".number");

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.add("none");
        if (n == slides.length) {
            slideIndex = 0
            slides[slideIndex].classList.remove("none");
        }
        if (n < 0) {
            slideIndex = slides.length - 1;
        }
    }
    slides[slideIndex].classList.remove("none");

    if (plus !== -1) {
        if (n == 0) {
            span[0].classList.add("active");
        }
        if (n >= 0 && n <= 2) {
            numbers = [1, 2, 3, 4];
            for (var i = 0; i < span.length; i++) {
                span[i].innerHTML = "0" + numbers[i]
            }
        }
        if (n > 0) {
            span[0].classList.remove("active");
            span[1].classList.add("active");
        }
        if (n > 1) {
            for (var i = 0; i < span.length; i++) {
                numbers[i] = numbers[i] + 1;
                span[i].innerHTML = numbers[i];
                if (numbers[i] < 10) {
                    span[i].innerHTML = "0" + numbers[i];
                }
                if (numbers[i] >= slides.length) {
                    numbers[i + 1] = 0;
                }
            }
        }

    }
    if (plus == -1) {
        for (var i = 0; i < span.length; i++) {
            if (numbers[i] == 0 || numbers[i] > slides.length) {
                numbers[i] = slides.length;
            }
            if (numbers[i] == 1) {
                numbers[i] = slides.length + 1;
            }
            numbers[i] = numbers[i] - 1;
            span[i].innerHTML = numbers[i];
            if (numbers[i] < 10) {
                span[i].innerHTML = "0" + numbers[i];
            }
        }
    }
}