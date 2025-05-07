const quizData = {
  classes: {
    espadachim: {
      nome: "Espadachim",
      emoji: "⚔️",
      descricao:
        "Você é corajoso e gosta de estar na linha de frente. Espadachins são fortes, leais e adoram proteger seus aliados.",
    },
    mago: {
      nome: "Mago",
      emoji: "🔥",
      descricao:
        "Você prefere destruir à distância com sabedoria e poder. Magos são estratégicos e dominam os elementos.",
    },
    arqueiro: {
      nome: "Arqueiro",
      emoji: "🏹",
      descricao:
        "Você é preciso e gosta de eliminar seus inimigos de longe. Arqueiros são observadores e certeiros.",
    },
    gatuno: {
      nome: "Gatuno",
      emoji: "🗡️",
      descricao:
        "Você é veloz, furtivo e criativo. Gatunos resolvem tudo com astúcia e ataques rápidos.",
    },
    novico: {
      nome: "Noviço",
      emoji: "✨",
      descricao:
        "Você gosta de ajudar e curar. Noviços têm fé, compaixão e são essenciais em qualquer grupo.",
    },
    mercador: {
      nome: "Mercador",
      emoji: "💰",
      descricao:
        "Você é prático, negociante e independente. Mercadores sempre encontram uma forma de vencer — ou lucrar.",
    },
  },
  perguntas: [
    {
      pergunta: "Qual seu estilo de combate favorito?",
      respostas: {
        "Na linha de frente com espada e escudo": "espadachim",
        "Lançando feitiços de longe": "mago",
        "Atacando de arco com precisão": "arqueiro",
        "Com furtividade e velocidade": "gatuno",
        "Ajudando e curando aliados": "novico",
        "Com armadilhas e truques engenhosos": "mercador",
      },
    },
    {
      pergunta: "Em um grupo, qual papel você prefere?",
      respostas: {
        "Tanque, segurando os monstros": "espadachim",
        "Controlar o campo com magia": "mago",
        "Dar dano à distância com segurança": "arqueiro",
        "Causar dano crítico e surpreender": "gatuno",
        "Curar e dar suporte": "novico",
        "Usar habilidades que afetam o dinheiro e o loot": "mercador",
      },
    },
    {
      pergunta: "Qual sua maior qualidade como jogador?",
      respostas: {
        "Resistência e coragem": "espadachim",
        "Sabedoria e estratégia": "mago",
        "Precisão e observação": "arqueiro",
        "Agilidade e improviso": "gatuno",
        "Empatia e cooperação": "novico",
        "Autonomia e praticidade": "mercador",
      },
    },
    {
      pergunta: "Você prefere jogar...",
      respostas: {
        "Na linha de frente com o time": "espadachim",
        "Como um canhão de vidro poderoso": "mago",
        "Mantendo distância e escolhendo alvos": "arqueiro",
        "Sozinho, em velocidade": "gatuno",
        "Ajudando todo mundo a sobreviver": "novico",
        "Fazendo zeny enquanto luta": "mercador",
      },
    },
    {
      pergunta: "Se você fosse um item de Ragnarok, seria...",
      respostas: {
        "Uma espada de duas mãos": "espadachim",
        "Um cajado mágico ancestral": "mago",
        "Um arco encantado": "arqueiro",
        "Uma adaga venenosa": "gatuno",
        "Uma varinha de cura": "novico",
        "Uma carroça de itens raros": "mercador",
      },
    },
  ],
};

let currentQuestion = 0;
let scores = {};

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

function showQuestion(index) {
  const questionData = quizData.perguntas[index];
  quizContainer.innerHTML = `
    <div class="question">${questionData.pergunta}</div>
    <div class="answers">
      ${Object.entries(questionData.respostas)
        .map(
          ([text, cls]) =>
            `<button onclick="selectAnswer('${cls}')">${text}</button>`
        )
        .join("")}
    </div>
  `;
}

function selectAnswer(classe) {
  scores[classe] = (scores[classe] || 0) + 1;
  nextBtn.classList.remove("hidden");
}

function showResult() {
  const topClass = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const data = quizData.classes[topClass];
  quizContainer.innerHTML = "";
  resultContainer.innerHTML = `
  <h2>${data.emoji} ${data.nome}</h2>
  <p>${data.descricao}</p>
`;
  resultContainer.classList.remove("hidden");
  nextBtn.classList.add("hidden");
  restartBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.perguntas.length) {
    showQuestion(currentQuestion);
    nextBtn.classList.add("hidden");
  } else {
    showResult();
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  scores = {};
  resultContainer.classList.add("hidden");
  restartBtn.classList.add("hidden");
  nextBtn.classList.add("hidden");
  showQuestion(currentQuestion);
});

// Inicia o quiz
showQuestion(currentQuestion);
