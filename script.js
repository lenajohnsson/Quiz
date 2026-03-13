// DOM elements
const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-btn");
const questionText = document.querySelector("#question-text");
const answerContainer = document.querySelector("#answer-container");
const currentQuestionSpan = document.querySelector("#current-question");
const totalQuestionsSpan = document.querySelector("#total-questions");
const scoreSpan = document.querySelector("#score");
const finalScoreSpan = document.querySelector("#final-score");
const maxScoreSpan = document.querySelector("#max-score");
const resultMessage = document.querySelector("#result-message");
const restartButton = document.querySelector("#restart-btn");
const progressBar = document.querySelector("#progress");

const quizQuestions = [
  {
    question: "Vilken är Sveriges största kommun till ytan?",
    answer: [
      { text: "Kiruna kommun", correct: true },
      { text: "Gällivare kommun", correct: false },
      { text: "Gotland", correct: false },
      { text: "Jokkmokks kommun", correct: false },
    ],
  },
  {
    question: "Vilken är Sveriges största sjö?",
    answer: [
      { text: "Vättern", correct: false },
      { text: "Vänern", correct: true },
      { text: "Mälaren", correct: false },
      { text: "Storsjön", correct: false },
    ],
  },
  {
    question: "Hur många landskap finns det i Sverige?",
    answer: [
      { text: "23", correct: false },
      { text: "27", correct: false },
      { text: "25", correct: true },
      { text: "29", correct: false },
    ],
  },
  {
    question: "Vilken är den mest förekommande trädsorten i Skåne?",
    answer: [
      { text: "Tall", correct: false },
      { text: "Bok", correct: true },
      { text: "Gran", correct: false },
      { text: "Björk", correct: false },
    ],
  },
  {
    question: "Hur många öar finns det i Sverige?",
    answer: [
      { text: "ca 120 000", correct: false },
      { text: "ca 200 000", correct: false },
      { text: "ca 270 000", correct: true },
      { text: "ca 180 000", correct: false },
    ],
  },
  {
    question: "Vilket är Svealands högsta berg?",
    answer: [
      { text: "Tallmossen", correct: false },
      { text: "Lustigknopp", correct: false },
      { text: "Stora Korpimäki", correct: false },
      { text: "Storvätteshågna", correct: true },
    ],
  },
  {
    question: "Hur många procent av Sveriges yta är täckt av skog?",
    answer: [
      { text: "ca 50%", correct: false },
      { text: "ca 60%", correct: false },
      { text: "ca 70%", correct: true },
      { text: "ca 80%", correct: false },
    ],
  },
  {
    question: "Vilket är Sveriges högsta vattenfall?",
    answer: [
      { text: "Njupeskär", correct: true },
      { text: "Stora Sjöfallet", correct: false },
      { text: "Tännforsen", correct: false },
      { text: "Fettjeåfallet", correct: false },
    ],
  },
  {
    question: "Hur många domkyrkor finns det i Sverige?",
    answer: [
      { text: "13", correct: false },
      { text: "15", correct: true },
      { text: "16", correct: false },
      { text: "18", correct: false },
    ],
  },
  {
    question: "Vilken är Sveriges längsta väg?",
    answer: [
      { text: "E4", correct: false },
      { text: "E20", correct: false },
      { text: "E18", correct: false },
      { text: "E45", correct: true },
    ],
  },
];
