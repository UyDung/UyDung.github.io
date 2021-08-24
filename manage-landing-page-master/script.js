const slides = document.querySelectorAll(".carrers__element");
const number_element = slides.length;
var current = 0;

const reset = () => {
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.display = "flex";
    }
};

const humberger_btn = document.querySelector(".humberger__btn");
const menu = document.querySelector(".humberger");

// humberger_btn.addEventListener('click', () => {
//      if(humberger_btn.classList.contains('humberger__open')) {
//             humberger_btn.classList.remove('humberger__open');
//             humberger_btn.classList.add('humberger__close');
//             menu.style.display = "flex";
//       } else {
//             humberger_btn.classList.add('humberger__open');
//             humberger_btn.classList.remove('humberger__close');
//             menu.style.display = "none";
//       }
// })

/******************************
 *
 */

const email = document.getElementById("email");

const error = document.getElementById("error");
const form__control = document.querySelector(".form-control");

const pattern = /[a-z0-9]{3,20}@[a-z0-9]{2,20}\.[a-z]{2,10}/;

email.addEventListener('input', () => {
     checkEmail();
})

function checkEmail() {
    if (email.value.match(pattern)) {
        error.innerText = "";
        error.classList.remove("invalid");
        error.classList.add("valid");

        form__control.classList.add("valid");
        form__control.classList.remove("invalid");

    } else {
        error.innerText = "Invalid Email";
        error.classList.add("invalid");
        error.classList.remove("valid");

        form__control.classList.add("invalid");
        form__control.classList.remove("valid");
    }

    if (email.value == "") {
        error.innerText = "";
        error.classList.remove("invalid");
        error.classList.remove("valid");


        form__control.classList.remove("invalid");
        form__control.classList.remove("valid");
    }
}
