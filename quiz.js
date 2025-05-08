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
      pergunta: "Com qual palavra você se identifica mais?",
      respostas: {
        Estudos: "mago",
        Exercício: "espadachim gatuno",
        Caridade: "novico",
        Violencia: "gatuno",
      },
    },
    {
      pergunta: "O que é mais importante pra você?",
      respostas: {
        Mudança: "mago",
        Permanência: "novico",
      },
    },
    {
      pergunta: "Como você se descreveria melhor?",
      respostas: {
        Consumidor: "novico espadachim gatuno",
        Vendedor: "mercador",
        Produtor: "mago",
      },
    },
    {
      pergunta: "O que é mais importante para você?",
      respostas: {
        Fama: "gatuno",
        Prudência: "novico",
      },
    },
    {
      pergunta: "O que é mais importante para você?",
      respostas: {
        Teoria: "mago",
        Experiência: "espadachim",
      },
    },
    {
      pergunta: "O que é mais importante para você?",
      respostas: {
        "O passado": "arqueiro",
        "O presente": "mercador gatuno",
        "O futuro": "mago",
      },
    },
    {
      pergunta: "É melhor morrer com honra do que viver uma vida submissa.",
      respostas: {
        Sim: "espadachim",
        Não: "mercador gatuno",
      },
    },
    {
      pergunta: "Você se incomoda de ver alguém melhor do que você.",
      respostas: {
        Sim: "mercador",
        Não: "novico",
      },
    },
    {
      pergunta: "Você tem medo de explorar lugares perigosos.",
      respostas: {
        Sim: "mago",
        Não: "espadachim",
      },
    },
    {
      pergunta: "Você é um líder nato.",
      respostas: {
        Sim: "espadachim",
        Não: "arqueiro",
      },
    },
    {
      pergunta:
        "Ao explorar uma caverna, você encontrou um beco sem saída. Examinando a parede ao seu lado, você encontra uma alavanca com um aviso escrito 'Não Puxe'. Você puxa?",
      respostas: {
        Sim: "gatuno",
        Não: "espadachim",
      },
    },
    {
      pergunta: "Você às vezes vê coisas que não existem.",
      respostas: {
        Sim: "novico",
        Não: "mago",
      },
    },
    {
      pergunta: "Ao cair de um penhasco, você sente como se pudesse voar.",
      respostas: {
        Sim: "novico",
        Não: "mago",
      },
    },
    {
      pergunta:
        "Dinheiro fala. Eu poderia até comprar um ser humano se eu quisesse.",
      respostas: {
        Sim: "mercador",
        Não: "arqueiro",
      },
    },
    {
      pergunta: "Ao manter uma rotina...",
      respostas: {
        "Me sinto como um robô.": "espadachim gatuno",
        "Me sinto seguro e satisfeito.": "novico mago",
        "Rotina... que rotina?": "arqueiro mercador",
      },
    },
    {
      pergunta:
        "Ao passear no shopping, você encontra algo muito interessante em uma loja. O que você faz?",
      respostas: {
        "Penso se eu realmente preciso daquilo.": "arqueiro",
        "Checo o preço.": "mercador",
        "Compro sem pensar duas vezes.": "gatuno",
      },
    },
    {
      pergunta:
        "Você é responsável por uma tarefa que requer trabalho em equipe. O que você faz?",
      respostas: {
        "Faço sozinho, mesmo se for mais difícil.": "mago",
        "Peço ajuda aos outros.": "mercador",
      },
    },
    {
      pergunta:
        "Você encontra uma garota desmaiada no meio da rua. O que você faz?",
      respostas: {
        "Levo ela até o hospital.": "novico",
        "Considero minhas prioridades antes de agir.": "arqueiro espadachim",
        "Finjo que não vi.": "mago mercador gatuno",
      },
    },
    {
      pergunta:
        "Nas suas aventuras, você encontra uma 'Vestimenta Não-Identificada'. O que você faz?",
      respostas: {
        "Vejo a marca.": "mercador",
        "Me pergunto 'será que alguém a perdeu?'": "novico",
        "Busco o dono.": "mercador",
        "Deixo onde está.": "mago",
      },
    },
    {
      pergunta:
        "Você acaba falando 'mais do que deveria' no meio de uma conversa. O que você faz?",
      respostas: {
        "Finjo que era uma piada.": "gatuno",
        "Mudo de assunto.": "espadachim",
        "Analiso o que eu disse.": "mago",
        "Peço desculpas sinceras.": "novico",
      },
    },
    {
      pergunta:
        "Você está em viagem com sua(seu) parceira(o). Ela(e) pede para você comprar uma lembrança que não é particularmente necessária. O que você faz?",
      respostas: {
        "Compro a lembrança para ela(e)": "espadachim",
        "Digo 'Não'.": "mercador",
        "Prometo comprar 'na volta'.": "gatuno",
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
