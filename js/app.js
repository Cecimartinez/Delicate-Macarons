const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu(){
  menu.classList.toggle("menu_opened");
}
// al hacer click se ejecuta la function
openMenuBtn.addEventListener("click", toggleMenu); 
closeMenuBtn.addEventListener("click", toggleMenu); 