const texto = "> Profesor: Alex N. Perea Lazo – Centro Educativo Nonogasta";
let i = 0;
const consola = document.querySelector(".console-effect");

function escribir() {
  if (i < texto.length) {
    consola.textContent += texto.charAt(i);
    i++;
    setTimeout(escribir, 50);
  }
}

window.addEventListener("DOMContentLoaded", escribir);