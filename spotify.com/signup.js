
var input = document.querySelector('input');

input.setAttribute('borderColor', 'red');

function checkData(e) {
  let tmp = e.target.value;
  if (tmp === "") {
    input.classList.add('input_mouseout');

   
  } else {
    input.classList.remove("input_mouseout");

  }
}
