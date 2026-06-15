let tamanho = 18;

function aumentarTexto() {
  tamanho += 2;
  document.body.style.fontSize = tamanho + "px";
}

function diminuirTexto() {
  tamanho -= 2;
  document.body.style.fontSize = tamanho + "px";
}

function alternarModo() {
  document.body.classList.toggle("access");
}