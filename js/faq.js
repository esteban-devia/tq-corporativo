function openAnswer(n) {
    var answer = document.querySelectorAll(".answerModule");
    var question = document.querySelectorAll(".question");
    var img = document.querySelectorAll(".questionsingle img");

    answer[n].classList.toggle("show");
    question[n].classList.toggle("show");
    img[n].classList.toggle("rotate");
}