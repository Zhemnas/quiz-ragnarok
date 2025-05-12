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
let selectedOptionIndex = 0;

const quizContainer = document.getElementById("quiz-container");

function showQuestion(index) {
  const questionData = quizData.perguntas[index];
  const respostas = Object.entries(questionData.respostas);
  selectedOptionIndex = 0;

  quizContainer.innerHTML = `
    <div class="dialog-box">
      <div class="dialog-text">[Instrutor]\n${questionData.pergunta}</div>
      <ul class="dialog-options">
        ${respostas
          .map(
            ([text], i) =>
              `<li class="${
                i === 0 ? "dialog-selected" : ""
              }" data-idx="${i}">${text}</li>`
          )
          .join("")}
      </ul>
      <div style="text-align: right;">
        <button class="dialog-btn" id="ok-btn">OK</button>
        <button class="dialog-btn dialog-btn-cancel" id="cancel-btn">cancel</button>
      </div>
    </div>
  `;

  // Eventos de seleção
  const optionElements = quizContainer.querySelectorAll(".dialog-options li");
  optionElements.forEach((el, i) => {
    el.onclick = () => selectOption(i);
  });

  document.getElementById("ok-btn").onclick = () => {
    selectAnswer(respostas[selectedOptionIndex][1]);
  };
  document.getElementById("cancel-btn").onclick = () => {
    restartQuiz();
  };

  // Teclado: seta para cima/baixo e Enter
  quizContainer.onkeydown = (e) => {
    if (e.key === "ArrowDown") {
      selectedOptionIndex = (selectedOptionIndex + 1) % respostas.length;
      updateSelectedOption();
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      selectedOptionIndex =
        (selectedOptionIndex - 1 + respostas.length) % respostas.length;
      updateSelectedOption();
      e.preventDefault();
    } else if (e.key === "Enter") {
      selectAnswer(respostas[selectedOptionIndex][1]);
    }
  };
  quizContainer.tabIndex = 0;
  quizContainer.focus();
}

function updateSelectedOption() {
  const optionElements = quizContainer.querySelectorAll(".dialog-options li");
  optionElements.forEach((el, i) => {
    el.classList.toggle("dialog-selected", i === selectedOptionIndex);
  });
}

function selectOption(idx) {
  selectedOptionIndex = idx;
  updateSelectedOption();
}

function selectAnswer(classe) {
  scores[classe] = (scores[classe] || 0) + 1;
  currentQuestion++;
  if (currentQuestion < quizData.perguntas.length) {
    showQuestion(currentQuestion);
  } else {
    showResult();
  }
}

function showResult() {
  // Sequência de suspense antes do resultado final
  showSuspenseStep(0);
}

const suspenseSteps = [
  {
    text: "Excelente! Obrigado por preencher o teste. Vou verificar suas respostas e te responderei em um momento.",
    delay: 1600,
  },
  {
    text: "Certo...",
    delay: 1200,
  },
  {
    text: "Humm...",
    delay: 1200,
  },
];

function showSuspenseStep(step) {
  if (step < suspenseSteps.length) {
    quizContainer.innerHTML = `
      <div class="dialog-box">
        <div class="dialog-text">${suspenseSteps[step].text}</div>
      </div>
    `;
    setTimeout(() => showSuspenseStep(step + 1), suspenseSteps[step].delay);
  } else {
    showFinalResult();
  }
}

function showFinalResult() {
  const topClass = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const data = quizData.classes[topClass];
  quizContainer.innerHTML = `
    <div class="dialog-box">
      <div class="dialog-text">Parabéns! Sua classe é:</div>
      <div style="text-align:center; font-size:1.3rem; margin: 12px 0;">${data.emoji} <b>${data.nome}</b></div>
      <div style="margin-bottom: 18px;">${data.descricao}</div>
      <div style="text-align: right;">
        <button class="dialog-btn" id="restart-btn2">Refazer Quiz</button>
      </div>
    </div>
  `;
  document.getElementById("restart-btn2").onclick = () => restartQuiz();
}

function restartQuiz() {
  currentQuestion = 0;
  scores = {};
  showQuestion(currentQuestion);
}

// Inicia o quiz
showQuestion(currentQuestion);
