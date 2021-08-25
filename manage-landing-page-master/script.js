/*************************************
 * ******** Humberger Menu ***********
 *************************************/
const humbergerBtn = document.querySelector('.humberger__btn')
const menu         = document.querySelector('.humberger')

humbergerBtn.addEventListener('click', () => {
     if(humbergerBtn.classList.contains('humberger__close')) {
          humbergerBtn.classList.remove('humberger__close');
          humbergerBtn.classList.add('humberger__open');
          menu.style.display = "flex";
     } else {
          humbergerBtn.classList.remove('humberger__open');
          humbergerBtn.classList.add('humberger__close');
          menu.style.display = "none";
     }
})





















/****************************************
 ************* Slide image **************
 ***************************************/





/****************************************
 ********* Check valid email ************
 ***************************************/

const email = document.getElementById("email");

const error = document.getElementById("error");
const form__control = document.querySelector(".form-control");

const pattern = /[a-z0-9]{3,20}@[a-z0-9]{2,20}\.[a-z]{2,10}/;

email.addEventListener("input", () => {
    checkEmail();
});

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
