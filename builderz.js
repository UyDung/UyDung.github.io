const slides = document.querySelectorAll(".item");
var current = 0;
const prevButton = document.querySelector(".left");
const nextButton = document.querySelector(".right");



function startSlide() {
  reset();
  slides[0].style.display = "block";
  
}


function autoLoad() {
  startSlide() ;
  setInterval(() => {
    nextSlide();
  }, 3000);
}

autoLoad();

function reset() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}

function prevSlide() {
  reset();
  if (current === 0) {
    current = slides.length;
  }
  slides[current - 1].style.display = "block";
  current--;
}

function nextSlide() {
  reset();
  if (current === slides.length - 1) {
    current = -1;
  }
  slides[current + 1].style.display = "block";
  current++;
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
// prevButton.addEventListener("click", prevCaption);
// nextButton.addEventListener("click", nextCaption);

/** ****************************************
 * ***************Caption******************
 * **************************************** */

 const captions = document.querySelectorAll('.caption');
 var current_caption = 0;


 function resetCaption() {
  for (let i = 0; i < captions.length; i++) {
    captions[i].style.display = "none";
  }
}


function startCaption() {
  resetCaption();
  captions[0].style.display = "block";
}

function autoLoadCaption() {
  startCaption() ;
  setInterval(() => {
  nextCaption();
}, 3000);

}

autoLoadCaption();

function nextCaption() {
  resetCaption();
  if (current_caption === captions.length - 1) {
    current_caption = -1;
  }
  captions[current_caption + 1].style.display  = "block";
  current_caption++;
}

function prevCaption() {
  resetCaption();
  if (current_caption === 0) {
    current_caption = captions.length;
  }

  captions[current_caption - 1].style.display = "block";
  current_caption--;
}


/* Menu */
window.onscroll = () => {
  if (window.scrollY > 50) {
    document.querySelector('.menu').classList.add('dinh_vi_menu');
  } else {
    document.querySelector('.menu').classList.remove('dinh_vi_menu');
  }
 
}


/************************
 * ****** Our team ******
 ************************/
