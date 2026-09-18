/* =========================================================
   PORTAL PARA OUTRA DIMENSÃO — script.js
   Todos os elementos são acessados com document.getElementById()
   ========================================================= */


/* ---------------------------------------------------------
   PARTE 1 — CENÁRIO
   Um laço de repetição cria as estrelas e as partículas,
   cada uma com posição e tamanho sorteados.
   --------------------------------------------------------- */

const ceu = document.getElementById("ceu");

for (let i = 0; i < 70; i++) {
  const estrela = document.createElement("div");
  estrela.className = "estrela";

  const tamanho = Math.random() * 2 + 1;           // entre 1px e 3px
  estrela.style.width = tamanho + "px";
  estrela.style.height = tamanho + "px";
  estrela.style.left = Math.random() * 100 + "%";  // posição horizontal
  estrela.style.top = Math.random() * 100 + "%";   // posição vertical
  estrela.style.animationDelay = Math.random() * 3 + "s";

  ceu.appendChild(estrela);
}

const particulas = document.getElementById("particulas");

for (let i = 0; i < 25; i++) {
  const particula = document.createElement("div");
  particula.className = "particula";

  particula.style.left = Math.random() * 100 + "%";
  particula.style.animationDelay = Math.random() * 7 + "s";

  particulas.appendChild(particula);
}


/* ---------------------------------------------------------
   PARTE 2 — EVENTO 1: INVESTIGAR O PORTAL
   --------------------------------------------------------- */

const btnInvestigar = document.getElementById("btnInvestigar");

btnInvestigar.addEventListener("click", investigarPortal);

function investigarPortal() {
  // O portal reage: a classe "ativado" faz ele pulsar e brilhar (ver style.css)
  document.getElementById("portal").classList.add("ativado");

  // O título muda para indicar que algo aconteceu
  document.getElementById("tituloPrincipal").textContent = "Portal Reagindo ao Contato";

  // O botão some, porque sua função já foi cumprida
  btnInvestigar.classList.add("escondido");

  // As três mensagens aparecem em sequência, com 1 segundo de diferença
  setTimeout(mostrarMensagem1, 1000);
  setTimeout(mostrarMensagem2, 2200);
  setTimeout(mostrarMensagem3, 3400);
}

function mostrarMensagem1() {
  document.getElementById("msg1").classList.remove("escondido");
}

function mostrarMensagem2() {
  document.getElementById("msg2").classList.remove("escondido");
}

function mostrarMensagem3() {
  document.getElementById("msg3").classList.remove("escondido");
  // Junto com a pergunta final, aparecem os botões de decisão
  document.getElementById("cena3").classList.remove("escondido");
}


/* ---------------------------------------------------------
   PARTE 3 — EVENTO 2: A DECISÃO (atravessar ou voltar)
   --------------------------------------------------------- */

const btnAtravessar = document.getElementById("btnAtravessar");
const btnVoltar = document.getElementById("btnVoltar");

btnVoltar.addEventListener("click", desistir);

function desistir() {
  const aviso = document.getElementById("msgVoltar");
  aviso.textContent = "Você deu dois passos para trás. O portal esperou. Ele tem muito tempo.";
  aviso.classList.remove("escondido");
}

btnAtravessar.addEventListener("click", atravessar);

function atravessar() {
  // Uma única linha muda o visual de toda a página:
  // a classe "dimensao" no <body> troca fundo, cores, lua e partículas
  document.getElementById("corpo").classList.add("dimensao");

  // Esconde as cenas anteriores
  document.getElementById("cena1").classList.add("escondido");
  document.getElementById("cena2").classList.add("escondido");
  document.getElementById("cena3").classList.add("escondido");

  // Mostra a cena da nova dimensão
  document.getElementById("cena4").classList.remove("escondido");

  // Muda também o título da aba do navegador
  document.getElementById("tituloAba").textContent = "Dimensão Púrpura";
}


/* ---------------------------------------------------------
   PARTE 4 — EVENTO 3: DESCOBRIR O DESTINO (sorteio)
   --------------------------------------------------------- */

// Lista de destinos possíveis
const destinos = [
  {
    nome: "📚 Biblioteca Infinita",
    texto: "Corredores de livros que nunca terminam. Um deles conta a sua vida — mas as últimas páginas ainda estão sendo escritas."
  },
  {
    nome: "🪐 Planeta Esquecido",
    texto: "Um mundo inteiro que ninguém mais lembra de ter visitado. As pegadas na poeira são suas, de uma viagem que você não fez ainda."
  },
  {
    nome: "🌳 Floresta Flutuante",
    texto: "As árvores crescem para cima e para baixo ao mesmo tempo. Aqui as raízes tocam as nuvens e as folhas ouvem o que você pensa."
  },
  {
    nome: "🏙️ Cidade das Sombras",
    texto: "As sombras chegaram primeiro e construíram tudo. Elas foram gentis: deixaram uma janela acesa esperando você."
  },
  {
    nome: "🌊 Oceano Celestial",
    texto: "Um mar suspenso entre estrelas. As ondas não molham, mas levam embora aquilo que você estava carregando sem perceber."
  }
];

// Variável que conta quantas explorações o usuário fez
let exploracoes = 0;

const btnDestino = document.getElementById("btnDestino");

btnDestino.addEventListener("click", sortearDestino);

function sortearDestino() {
  // Sorteia um número de 0 até a quantidade de destinos - 1
  const sorteado = Math.floor(Math.random() * destinos.length);

  // Escreve o destino sorteado na tela
  document.getElementById("nomeDestino").textContent = destinos[sorteado].nome;
  document.getElementById("textoDestino").textContent = destinos[sorteado].texto;
  document.getElementById("cartaoDestino").classList.remove("escondido");

  // Atualiza o contador
  exploracoes = exploracoes + 1;
  document.getElementById("contador").textContent =
    "EXPLORAÇÕES REALIZADAS: " + exploracoes;

  // A partir da segunda vez, o botão convida a tentar de novo
  btnDestino.textContent = "EXPLORAR OUTRO DESTINO";
}