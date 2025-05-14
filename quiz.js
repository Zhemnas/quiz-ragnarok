const quizData = {
  classes: {
    espadachim: {
      nome: "Espadachim",
      emoji: "⚔️",
      descricao:
        "Você é corajoso, impetuoso, e decisivo - um líder natural.Espadachins são fortes, leais e estão sempre protegendo seus aliados - na linha de frente.",
    },
    mago: {
      nome: "Mago",
      emoji: "🔥",
      descricao:
        "Você é inteligente, pensativo, e prefere evitar situações sociais. Magos dominam os elementos por meio do poder que cultivam com muito estudo arcano (feito em torres isoladas).",
    },
    arqueiro: {
      nome: "Arqueiro",
      emoji: "🏹",
      descricao:
        "Você é paciente, preciso e astuto. Arqueiros observam ao longe, aguardando a hora de dar o disparo decisivo.",
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
        "Você é caridoso, empático e gosta de trabalhar em equipe. Noviços têm fé, compaixão e são essenciais (e queridos) em qualquer grupo.",
    },
    mercador: {
      nome: "Mercador",
      emoji: "💰",
      descricao:
        "Você é prático, negociante e independente. Mercadores sempre encontram uma forma de vencer — ou lucrar.",
    },
    aprendiz: {
      nome: "Super Aprendiz",
      emoji: "👼",
      descricao:
        "Você é versátil, autosuficiente e sedento por conhecimento. Super aprendizes nunca param de aprender novos truques, e estão sempre prontos para qualquer desafio.",
    },
    taekwon: {
      nome: "Taekwon",
      emoji: "🥋",
      descricao:
        "Você é disciplinado, determinado e resiliente. Taekwons treinam o corpo intensivamente para - quando necessário - estarem prontos para o combate.",
    },
    justiceiro: {
      nome: "Justiceiro",
      emoji: "💣",
      descricao:
        "Você é rebelde e incompreendido - um revolucionário. Justiceiros usam de toda a tecnologia da pólvora e armas de fogo - mesmo em uma era medieval - para destruirem tudo em seu caminho.",
    },
    ninja: {
      nome: "Ninja",
      emoji: "⛩️",
      descricao:
        "Você é calmo, respeitoso e focado. Ninjas aprendem a esconder sua presença até encontrarem o momento certo de atacar - seja com Ninjutsu, Taijutsu ou Genjutsu.",
    },
    invocador: {
      nome: "Invocador",
      emoji: "😼",
      descricao:
        "Você é divertido, bem-humorado e arisco. Invocadores utilizam as suas 'garras felinas' para pegar aquilo que é deles - seja um tesouro milenar ou uma lata de sardinha.",
    },
  },
  perguntas: [
    {
      pergunta:
        "Seja bem vindo ao teste vocacional do Ragnarök Online! Vou fazer algumas perguntas sobre a sua personalidade, e ao final, te direi qual classe tem mais a ver com você! Está pronto?",
      respostas: {
        "Sim!": "",
      },
    },
    {
      pergunta: "Com qual palavra você se identifica mais?",
      respostas: {
        Estudos: "mago aprendiz",
        Exercício: "espadachim gatuno",
        Caridade: "novico invocador",
        Violencia: "gatuno justiceiro",
      },
    },
    {
      pergunta: "O que é mais importante pra você?",
      respostas: {
        Mudança: "mago justiceiro",
        Permanência: "novico aprendiz arqueiro",
      },
    },
    {
      pergunta: "Como você se descreveria melhor?",
      respostas: {
        Consumidor: "espadachim gatuno",
        Vendedor: "mercador invocador",
        Produtor: "mago ninja",
      },
    },
    {
      pergunta: "O que é mais importante para você?",
      respostas: {
        Fama: "gatuno justiceiro",
        Prudência: "novico arqueiro",
      },
    },
    {
      pergunta: "O que é mais importante para você?",
      respostas: {
        Teoria: "mago aprendiz",
        Experiência: "espadachim taekwon justiceiro gatuno arqueiro",
      },
    },
    {
      pergunta: "O que é mais importante para você?",
      respostas: {
        "O passado": "arqueiro taekwon",
        "O presente": "mercador justiceiro",
        "O futuro": "mago ninja",
      },
    },
    {
      pergunta: "É melhor morrer com honra do que viver uma vida submissa.",
      respostas: {
        Sim: "espadachim ninja taekwon",
        Não: "mercador gatuno justiceiro",
      },
    },
    {
      pergunta: "Você se incomoda de ver alguém melhor do que você.",
      respostas: {
        Sim: "mercador taekwon",
        Não: "novico invocador",
      },
    },
    {
      pergunta: "Você tem medo de explorar lugares perigosos.",
      respostas: {
        Sim: "mago invocador aprendiz novico",
        Não: "espadachim arqueiro",
      },
    },
    {
      pergunta: "Você é um líder nato.",
      respostas: {
        Sim: "espadachim justiceiro",
        Não: "arqueiro aprendiz novico",
      },
    },
    {
      pergunta:
        "Ao explorar uma caverna, você encontrou um beco sem saída. Examinando a parede ao seu lado, você encontra uma alavanca com um aviso escrito 'Não Puxe'. Você puxa?",
      respostas: {
        Sim: "gatuno invocador",
        Não: "espadachim arqueiro",
      },
    },
    {
      pergunta: "Você às vezes vê coisas que não existem.",
      respostas: {
        Sim: "novico taekwon",
        Não: "mago ninja",
      },
    },
    {
      pergunta: "Ao cair de um penhasco, você sente como se pudesse voar.",
      respostas: {
        Sim: "ninja",
        Não: "taekwon",
      },
    },
    {
      pergunta:
        "Dinheiro fala. Eu poderia até comprar um ser humano se eu quisesse.",
      respostas: {
        Sim: "mercador justiceiro invocador",
        Não: "arqueiro ninja taekwon",
      },
    },
    {
      pergunta: "Ao manter uma rotina...",
      respostas: {
        "Me sinto como um robô.": "espadachim gatuno",
        "Me sinto seguro e satisfeito.": "novico mago aprendiz",
        "Rotina... que rotina?": "arqueiro invocador",
      },
    },
    {
      pergunta:
        "Ao passear no shopping, você encontra algo muito interessante em uma loja. O que você faz?",
      respostas: {
        "Penso se eu realmente preciso daquilo.": "arqueiro ninja",
        "Checo o preço.": "mercador taekwon",
        "Compro sem pensar duas vezes.": "invocador",
      },
    },
    {
      pergunta:
        "Você é responsável por uma tarefa que requer trabalho em equipe. O que você faz?",
      respostas: {
        "Faço sozinho, mesmo se for mais difícil.": "aprendiz justiceiro",
        "Peço ajuda aos outros.": "mercador ninja",
      },
    },
    {
      pergunta:
        "Você encontra uma garota desmaiada no meio da rua. O que você faz?",
      respostas: {
        "Levo ela até o hospital.": "novico ninja justiceiro",
        "Considero minhas prioridades antes de agir.": "arqueiro espadachim",
        "Finjo que não vi.": "mago mercador gatuno invocador",
      },
    },
    {
      pergunta:
        "Nas suas aventuras, você encontra uma 'Vestimenta Não-Identificada'. O que você faz?",
      respostas: {
        "Vejo a marca.": "mercador aprendiz",
        "Me pergunto 'será que alguém a perdeu?'": "novico",
        "Busco o dono.": "mercador taekwon",
        "Deixo onde está.": "mago ninja",
      },
    },
    {
      pergunta:
        "Você acaba falando 'mais do que deveria' no meio de uma conversa. O que você faz?",
      respostas: {
        "Finjo que era uma piada.": "gatuno invocador",
        "Mudo de assunto.": "espadachim aprendiz",
        "Analiso o que eu disse.": "mago ninja",
        "Peço desculpas sinceras.": "novico taekwon",
      },
    },
    {
      pergunta:
        "Você está em viagem com sua(seu) parceira(o). Ela(e) pede para você comprar uma lembrança que não é particularmente necessária. O que você faz?",
      respostas: {
        "Compro a lembrança para ela(e)": "espadachim justiceiro",
        "Digo 'Não'.": "mercador taekwon",
        "Prometo comprar 'na volta'.": "gatuno invocador",
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
      <div class="dialog-text">[Instrutor]</br>\n${questionData.pergunta}</div>
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
  const topClass = Object.entries(scores)
    .flatMap(([key, value]) => key.split(" ").map((k) => [k, value]))
    .reduce((acc, [key, value]) => {
      acc[key] = (acc[key] || 0) + value;
      return acc;
    }, {});

  const bestMatch = Object.entries(topClass).sort((a, b) => b[1] - a[1])[0][0];
  const classe = quizData.classes[bestMatch];

  quizContainer.innerHTML = `
    <div class="dialog-box">
      <div class="dialog-text">Parabéns! Sua classe é:</div>
      <div style="text-align:center; font-size:1.3rem; margin: 12px 0;">${classe.emoji} <b>${classe.nome}</b></div>
      <div style="margin-bottom: 18px;">${classe.descricao}
      </br></br><p>Se você gostou do quiz, que tal deixar um like nas nossas redes sociais?</p></div>
      <div style="text-align: right;">
        <button class="dialog-btn" id="social">Redes Sociais</button><button class="dialog-btn" id="restart-btn2">Refazer Quiz</button>
      </div>
    </div>
  `;
  document.getElementById("restart-btn2").onclick = () => restartQuiz();
  document.getElementById("social").onclick = () => {
    window.open("https://linktr.ee/bartzcore", "_blank");
  };
}

function restartQuiz() {
  currentQuestion = 0;
  scores = {};
  showQuestion(currentQuestion);
}

// Inicia o quiz
showQuestion(currentQuestion);
