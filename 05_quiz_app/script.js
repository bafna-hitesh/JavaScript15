const quizData = [
  {
    question: "How old is JavaScript",
    a: "26",
    b: "39",
    c: "29",
    d: "35",
    correct: "a",
  },
  {
    question: "What was the most favourite laungage in 2021",
    a: "Java",
    b: "Golang",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Current version of JavaScript",
    a: "ES2017",
    b: "ES2015",
    c: "ES2020",
    d: "ES2019",
    correct: "c",
  },
  {
    question: "How many Data types in JavaScript",
    a: "3",
    b: "5",
    c: "8",
    d: "7",
    correct: "c",
  },
  {
    question: "Which JavaScript engine most famous",
    a: "V8",
    b: "SpiderMonkey",
    c: "JavaScriptCore ",
    d: "Chakra",
    correct: "a",
  },
];

const questionText = document.getElementById("question-text");
const submitBtn = document.getElementById("submit-btn");
const answerEle = document.querySelectorAll(".answer");
const a = document.getElementById("a-op");
const b = document.getElementById("b-op");
const c = document.getElementById("c-op");
const d = document.getElementById("d-op");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];

  questionText.innerText = currentQuizData.question;
  a.innerText = currentQuizData.a;
  b.innerText = currentQuizData.b;
  c.innerText = currentQuizData.c;
  d.innerText = currentQuizData.d;
}

const result = (userAns) => {
  const currentQuizData = quizData[currentQuestion];
  userAns === currentQuizData.correct ? score++ : score--;
  return score;
};

function getAnswer() {
  answerEle.forEach((answerEl) => {
    if (answerEl.checked) {
      return result(answerEl.id);
    }
    answerEl.checked = false;
  });

  // return alert("Select Your Anser⚠️");
}

submitBtn.addEventListener("click", () => {
  getAnswer();
  // console.log(score);

  currentQuestion++;
  currentQuestion < quizData.length
    ? loadQuiz()
    : alert(`You Finish the Quiz, Your Score:${score}`);
});
