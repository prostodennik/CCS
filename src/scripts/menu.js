const burgerBtn = document.querySelector(".header__tablets-menu");
const body = document.body;
const menu = document.querySelector(".menu");

//Добавление/удаление overlay по кнопке burger
burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-active")
  burgerBtn.classList.toggle("header__tablets__menu-active");
  body.classList.toggle("position-lock");
});

menu.addEventListener("click", closeOverlay);

function closeOverlay() {
  menu.classList.remove("menu-active");
  burgerBtn.classList.remove("header__tablets__menu-active");
  body.classList.remove("position-lock");
}