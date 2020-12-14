
// Al cargar

$(inicio)
function inicio() {
  idiomaInicial()
  document.getElementById("idiomas").addEventListener("click", cambiarIdioma)  
}

// Idiomas

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

function español () {
  localStorage.setItem("lastname", "ing")
  $("#txtIndex").html(txtEspañol[0])
  $("#sureButton").html(txtEspañol[1])
}

function inglés () {
  localStorage.setItem("lastname", "esp")
  $("#txtIndex").html(txtInglés[0])
  $("#sureButton").html(txtInglés[1])
}

var txtInglés = [
  "This is me - I build Websites", // Texto index
  "View Work"  //Indefinido
]

var txtEspañol = [
  "Este soy yo - Hago páginas web", // Texto index
  "Ver Proyectos"  //Indefinido
]