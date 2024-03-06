// Quiz data
const quizzes = [
    {
        name: "Math Quiz",
        questions: [
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5", "6"],
                correctAnswer: "4"
            },
            // Add more questions...
        ]
    },
    // Add more quizzes...
];

// Function to display quizzes on the index page
function displayQuizzes() {
    const quizList = document.getElementById("quizList");
    quizzes.forEach((quiz, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="quiz.html?quizIndex=${index}">${quiz.name}</a>`;
        quizList.appendChild(li);
    });
}

// Display quizzes when the page loads
window.onload = displayQuizzes;
