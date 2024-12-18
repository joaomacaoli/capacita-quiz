const questions = [
  {
    question: "Qual é o nome do dragão em 'O Hobbit'?",
    answers: [
      { text: "Smaug", correct: true },
      { text: "Ancalagon", correct: false },
      { text: "Glaurung", correct: false },
      { text: "Drogon", correct: false },
    ],
  },
  {
    question: "Quem foi o primeiro portador do Um Anel?",
    answers: [
      { text: "Sauron", correct: true },
      { text: "Isildur", correct: false },
      { text: "Elrond", correct: false },
      { text: "Gollum", correct: false },
    ],
  },
  {
    question: "Como Bilbo Bolsão encontrou o Um Anel?",
    answers: [
      { text: "Caiu de Gollum durante o jogo de charadas", correct: true },
      { text: "Foi presenteado por Gandalf", correct: false },
      { text: "Encontrou em Bolsão", correct: false },
      { text: "Comprou de um comerciante", correct: false },
    ],
  },
  // {
  //   question: "Quem destrói o Um Anel?",
  //   answers: [
  //     { text: "Frodo", correct: false },
  //     { text: "Sam", correct: false },
  //     { text: "Gollum", correct: true },
  //     { text: "Aragorn", correct: false },
  //   ],
  // },
  // {
  //   question: "Qual é o nome completo de Frodo?",
  //   answers: [
  //     { text: "Frodo Tûk", correct: false },
  //     { text: "Frodo Brandybuck", correct: false },
  //     { text: "Frodo Bolsão", correct: true },
  //     { text: "Frodo Gamgi", correct: false },
  //   ],
  // },
  // {
  //   question: "Qual é a montanha onde o Um Anel foi destruído?",
  //   answers: [
  //     { text: "Caradhras", correct: false },
  //     { text: "Monte da Perdição", correct: true },
  //     { text: "Montanhas Sombrias", correct: false },
  //     { text: "Monte Gundabad", correct: false },
  //   ],
  // },
  // {
  //   question: "Quem é o pai de Legolas?",
  //   answers: [
  //     { text: "Thranduil", correct: true },
  //     { text: "Elrond", correct: false },
  //     { text: "Celeborn", correct: false },
  //     { text: "Galadriel", correct: false },
  //   ],
  // },
  // {
  //   question: "Qual é o nome do cavalo de Gandalf?",
  //   answers: [
  //     { text: "Asfaloth", correct: false },
  //     { text: "Hasufel", correct: false },
  //     { text: "Scadufax", correct: true },
  //     { text: "Shadowmere", correct: false },
  //   ],
  // },
  // {
  //   question: "Qual é o nome do anão que acompanha Bilbo em 'O Hobbit'?",
  //   answers: [
  //     { text: "Gimli", correct: false },
  //     { text: "Dáin", correct: false },
  //     { text: "Thorin", correct: true },
  //     { text: "Balin", correct: false },
  //   ],
  // },
  // {
  //   question: "O que significa a inscrição no Um Anel?",
  //   answers: [
  //     { text: "Um Anel para a todos governar", correct: true },
  //     { text: "Um Anel para trazer a luz", correct: false },
  //     { text: "Um Anel para proteger os reis", correct: false },
  //     { text: "Um Anel para guiar os perdidos", correct: false },
  //   ],
  // },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function startQuiz() {
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  answersElement.innerHTML = "";

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("answer-btn");
    button.onclick = () => handleAnswerClick(answer.correct);
    answersElement.appendChild(button);
  });
}

function handleAnswerClick(isCorrect) {
  alert(isCorrect ? "Resposta correta!" : "Resposta incorreta!");
  isCorrect ? score++ : score;
  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach((button) => button.disabled = true);
  const buttonsBox = document.getElementById("answers");
  buttonsBox.classList.add("no-hover");
  nextButton.classList.remove("hide");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    questionContainer.classList.add("hide");
    scoreElement.classList.remove("hide");
    scoreElement.innerText = `Pontuação final: ${score}`;
  }
  const buttonsBox = document.getElementById("answers");
  buttonsBox.classList.remove("no-hover");
  nextButton.classList.add("hide");
});

startQuiz();
