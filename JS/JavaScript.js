// Idioma

window.addEventListener('load', function() { 
  idiomaInicial()
  document.getElementById("idiomas").addEventListener("click", cambiarIdioma)  
});

function idiomaInicial() {
  if (localStorage.lastname == "ing") {
    español()
  } else {
    inglés()
  }
}
function cambiarIdioma() {
  if (localStorage.lastname == "ing") {
    inglés()
  } else {
    español()
  }
}

//$("#div3").html("<h3><font color='lightgreen'>A disfrutar con el Javascript</font></h3>")
//Quizás usar append
function español () {
  localStorage.setItem("lastname", "ing")
  document.getElementById("txtIndex").innerHTML = txtEspañol[0];
  document.getElementById("sureButton").innerHTML = txtEspañol[1];
}

function inglés () {
  localStorage.setItem("lastname", "esp")
  document.getElementById("txtIndex").innerHTML = txtInglés[0];
  document.getElementById("sureButton").innerHTML = txtInglés[1];
}

var txtInglés = [
  "This is me - I build Websites", // Texto index
  "View Work"  //Indefinido
]

var txtEspañol = [
  "Este soy yo - Hago páginas web", // Texto index
  "Ver Proyectos"  //Indefinido
]