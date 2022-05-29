const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu(){
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu); 
closeMenuBtn.addEventListener("click", toggleMenu); 

// validación-email

const email= document.getElementById("email");
const form =document.getElementById("form");
const parrafo =document.getElementById("warnings");

form.addEventListener("submit", e=> {
  e.preventDefault()
  let warnings=""
  let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let entrar=false
  parrafo.innerHTML=""
  if (!regexEmail.test(email.Value)){
    warnings+= "El E-mail no es válido"
  }
  if (entrar){
    parrafo.innerHTML= warnings
  }else{
    parrafo.innerHTML="Enviado"
  }
})