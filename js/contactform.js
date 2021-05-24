document.addEventListener('invalid', (function() {
    return function(e) {
        e.preventDefault();
        validateContactForm();
    };
})(), true);

function placeholder(n) {
    var selection = document.querySelectorAll(".placeholder");
    selection[n].classList.add("d-none");
}

function contactForm() {
    var personSelect = document.forms["clientService"]["contactPerson"].value;
    var contactType = document.forms["clientService"]["contactType"].value;
    var name = document.forms["clientService"]["name"].value;
    var lastname = document.forms["clientService"]["lastname"].value;
    var country = document.forms["clientService"]["country"].value;
    var city = document.forms["clientService"]["city"].value;
    var idtype = document.forms["clientService"]["IdType"].value;
    var idnumber = document.forms["clientService"]["IdNumber"].value;
    var phone = document.forms["clientService"]["phone"].value;
    var email = document.forms["clientService"]["email"].value;
    var description = document.forms["clientService"]["description"].value;
    var legal = document.forms["clientService"]["legal"];
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var singleinput = document.querySelectorAll(".singleinput");
    var textarea = document.querySelector(".formRow.single");
    var check = document.querySelector(".checkbox");
    var value = [personSelect, contactType, name, lastname, country, city, idtype, idnumber, phone, email]
    var invalid = 0;

    for (var i = 0; i < value.length; i++) {
        singleinput[i].classList.remove("error");
        if (value[i] === "") {
            singleinput[i].classList.add("error")
            invalid++;
        } else {
            if (i == value.length - 1) {
                if (mailformat.test(email) == false) {
                    singleinput[i].classList.add("error")
                } else {
                    singleinput[i].classList.remove("error")
                }
            }
        }
    }
    if (description === "") {
        textarea.classList.add("error");
        invalid++;
    } else {
        textarea.classList.remove("error");
    }
    if (legal.checked === false) {
        check.classList.add("error");
        invalid++;
    } else {
        check.classList.remove("error");
    }

    if (invalid > 0) {
        return false;
    } else {
        return true;
    }
}