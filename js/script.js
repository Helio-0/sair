function aceitar() {
  const gif = document.getElementById("meu-gif");
  const titulo = document.getElementById("titulo");
  document.querySelector(".botoes").remove();

  gif.src = "https://media.tenor.com/cXXUKHkfXHgAAAAi/cartu.gif";
  titulo.innerText = "💕 Eu sabia! 💕";

  setTimeout(() => {
    window.location.href = "pages/encontro.html";
  }, 2000);
}

function novaPosicao(min, max) {
  return Math.random() * (max - min) + min + "%";
}

let count = 0;
const frasesNao = [
  "NÃO",
  "Tem certeza?",
  "Não quer mesmo?",
  "Pensa bem...",
  "Última chance!",
  "Vai perder essa chance?",
  "Certeza mesmo?!",
  "Só clica no SIM! 😅",
];

function errar(btn) {
  btn.style.position = "absolute";
  btn.style.bottom = novaPosicao(10, 90); //eixo X
  btn.style.left = novaPosicao(10, 90); //eixo Y

  count++;
  const indice = Math.min(count, frasesNao.length - 1); //pega o minimo entre dois numeros
  btn.innerText = frasesNao[indice];

  const btnSim = document.querySelector(".btn-yes");
  btnSim.style.transform = `scale(${indice})`;
}
