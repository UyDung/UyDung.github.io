const task_1 = document.getElementById("task_1");
const task_2 = document.getElementById("task_2");
const task_3 = document.getElementById("task_3");

const task_one = document.getElementById("task_one");
const task_two = document.getElementById("task_two");
const task_three = document.getElementById("task_three");




function reset() {
  task_one.classList.remove("active");
  task_two.classList.remove("active");
  task_three.classList.remove("active");
}

task_1.addEventListener("click", () => {
  reset();
  task_one.classList.add("active");

});

task_2.addEventListener("click", () => {
  reset();
  task_two.classList.add("active");
});

task_3.addEventListener("click", () => {
  reset();
  task_three.classList.add("active");
});

const questions = document.querySelectorAll('.item');

for(let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', ()=> {
    if(questions[i].querySelector('.answer').style.display === 'block') {
     
      questions[i].querySelector('.answer').style.display = 'none';
    } else {
      questions[i].querySelector('.answer').style.display = 'block';
    }
    
  })
}




// Check valid email

const formSubmit = () => {
  const email = document.getElementById('email').value; 
  
}

const checkEmail = () => {
   const pattern = /[a-zA-Z0-9]{5,30}@([a-zA-Z0-9]{2,30})\.[a-zA-Z0-9]{2,30}/;
  // const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
  const email = document.getElementById('email').value; 
  const span = document.querySelector('.email');
  
  const form_control = document.getElementById('form-control');
  const valid_email = document.getElementById('valid_email');
  const invalid_email = document.getElementById('invalid_email');


  if(email == null) {
    form_control.classList.remove('valid__email');
    form_control.classList.remove('invalid__email');
  }

  if(email.match(pattern)) { 
    form_control.classList.add('valid__email');
    form_control.classList.remove('invalid__email');
  } else {
    form_control.classList.add('invalid__email');
    form_control.classList.remove('valid__email');
  }

 
}

 