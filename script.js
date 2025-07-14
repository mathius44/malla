// script.js
const cursos = {
  mate1: "Matemática I: Cálculo diferencial. Prerrequisito: ninguno.",
  fis1: "Física I: Cinemática. Prerrequisito: Matemática I."
};

function mostrarInfo(codigo) {
  const modal = document.getElementById("info-curso");
  modal.innerHTML = cursos[codigo];
  modal.classList.remove("oculto");
}

