const questions = [
    {
        question: "Which is the correct place to insert the JavaScript?",
        answers: [
            { text: "The <head> section", correct: false },
            { text: "The <footer>", correct: false },
            { text: "The <body> section", correct: true },
            { text: "The <head> and the <body> section are correct", correct: false },
        ]
    },
    {
        question: "Which is the extension for JavaScript?",
        answers: [
            { text: "index.script", correct: false },
            { text: "index.js", correct: true },
            { text: "index.jscript", correct: false },
            { text: "index.javascript", correct: false },
        ]
    },
    {
        question: "Which is the extension for Python?",
        answers: [
            { text: "game.py", correct: true },
            { text: "game.pn", correct: false },
            { text: "game.pyn", correct: false },
            { text: "game.python", correct: false },
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri Lanka", correct: false },
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
    {
        question: "Which is smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "What is the capital of washington?",
        answers: [
            { text: "Olympia", correct: true },
            { text: "Vancouver", correct: false },
            { text: "Spokane", correct: false },
            { text: "Seattle", correct: false },
        ]
    },
];

const questionElem = document.querySelector('#question');
const answerBtns = document.querySelector('#ans-btns');
const nextBtn = document.querySelector('#next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}


function showQuestion() {

    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElem.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerText = answer.text;
        btn.classList.add('btn');
        answerBtns.appendChild(btn)

        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }

        btn.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    nextBtn.style.display = 'none';

    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    if (selectBtn.dataset.correct) {
        selectBtn.style.backgroundColor = '#9aeabc';
        score++;
    } else {
        selectBtn.style.backgroundColor = '#ff9393';
    }
    Array.from(answerBtns.children).forEach(btn => {
        if (btn.dataset.correct) {
            btn.style.backgroundColor = '#9aeabc';
        }
        btn.disabled = 'true';
    })
    nextBtn.style.display = 'block';
}

function showScore() {
    resetState();
    questionElem.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = 'Play Again';
    nextBtn.style.display = 'block';
}

function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
})

startQuiz()
