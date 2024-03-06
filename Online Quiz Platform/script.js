// Sample quiz data
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Rome", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    // Add more quiz questions...
];

let currentQuiz = 0;
let score = 0;

// Function to generate quiz HTML
function generateQuiz() {
    const quizSection = document.getElementById("quizSection");

    quizData.forEach((quiz, index) => {
        const quizElement = document.createElement("div");
        quizElement.classList.add("quiz");

        quizElement.innerHTML = `
            <div class="quiz-question">${quiz.question}</div>
            <div class="quiz-options">
                ${quiz.options.map(option => `<div class="quiz-option">${option}</div>`).join('')}
            </div>
            <button class="quiz-submit">Submit Answer</button>
        `;

        quizSection.appendChild(quizElement);

        const submitButton = quizElement.querySelector('.quiz-submit');
        submitButton.addEventListener('click', () => checkAnswer(index));
    });

    // Show the first quiz
    const firstQuiz = document.querySelector('.quiz');
    firstQuiz.classList.add('hidden');
}

// Function to check answer
function checkAnswer(quizIndex) {
    const selectedOption = document.querySelector(`#quizSection .quiz:nth-child(${quizIndex + 1}) .quiz-option.selected`);
    if (!selectedOption) return;

    const selectedAnswer = selectedOption.innerText;
    const correctAnswer = quizData[quizIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        showNextQuiz();
    } else {
        showResult();
    }
}

// Function to show next quiz
function showNextQuiz() {
    const currentQuizElement = document.querySelector(`#quizSection .quiz:nth-child(${currentQuiz})`);
    currentQuizElement.classList.add('hidden');

    const nextQuizElement = document.querySelector(`#quizSection .quiz:nth-child(${currentQuiz + 1})`);
    nextQuizElement.classList.remove('hidden');
}

// Function to show result
function showResult() {
    const quizSection = document.getElementById("quizSection");
    quizSection.classList.add('hidden');

    const resultSection = document.getElementById("resultSection");
    resultSection.classList.remove('hidden');

    const scoreElement = document.getElementById("score");
    scoreElement.innerText = `${score} / ${quizData.length}`;

    const retryButton = document.getElementById("retryButton");
    retryButton.addEventListener('click', () => {
        location.reload();
    });
}

// Call generateQuiz function when the page loads
window.onload = generateQuiz;
