
window.addEventListener('load', function() { 
  document.getElementById("english").addEventListener("click", inglés) 
});

function inglés () {
  document.getElementById("txtIndex").innerHTML = txtInglés[0];
  document.getElementById("txtPizza").innerHTML = txtInglés[1];
}

var txtInglés = [
  "Prueba español 1", // Texto index
  "Prueba español 2"  //Indefinido
]