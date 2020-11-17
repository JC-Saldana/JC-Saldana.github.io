
window.addEventListener('load', function() { 
  document.getElementById("txtIndex").innerHTML = localStorage.lastname
  document.getElementById("idiomas").addEventListener("click", idioma)  
});

function idioma() {
  if (document.getElementById("txtIndex").innerHTML==txtEspañol[0]) {
    inglés()
  } else {
    español()
  }
}

function español () {
  localStorage.setItem("lastname", txtEspañol[0]);
  document.getElementById("txtIndex").innerHTML = txtEspañol[0];
  document.getElementById("txtPizza").innerHTML = txtEspañol[1];
}

function inglés () {
  localStorage.setItem("lastname", txtInglés[0]);
  document.getElementById("txtIndex").innerHTML = txtInglés[0];
  document.getElementById("txtPizza").innerHTML = txtInglés[1];
}

var txtInglés = [
  "This is me <br> I build websites <br> Want to check some?", // Texto index
  "Prueba inglés 2"  //Indefinido
]

var txtEspañol = [
  "Prueba español 1", // Texto index
  "Prueba español 2"  //Indefinido
]