const xoa = document
  .querySelector("#deleted")
  .addEventListener("click", () =>
    document.querySelector(".delete").classList.add("delete-btn")
  );


  window.onscroll= () => {
      if (window.scrollY > 100) {
        document.querySelector('.menu').classList.add('menu-dark');
      } else {
        document.querySelector('.menu').classList.remove('menu-dark');
      }
  }