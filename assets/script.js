//https://codingnepal.medium.com/create-a-quiz-app-with-timer-using-html-css-javascript-f460087a88a1
//https://stackoverflow.com/questions/45449106/how-to-make-a-ul-list-of-buttons-accessible/45491521
// https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
// https://codepen.io/boopalan002/pen/yKZVGa
// https://www.w3schools.com/js/js_quiz.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators



var questions = [
    {
        question: "How does a FOR loop start?",
        choices: ["A. for (i = 0; i <= 5; i++)", "B. for i = 1 to 5", "C. for (i <= 5; i++)", "D. for (i = 0; i <= 5)"],
        answer: "A. for (i = 0; i <= 5; i++)",
    },{
        question: "Commonly used data types DO NOT include:",
        choices: ["A. strings", "B. booleans", "C. alerts", "D. numbers"],
        answer: "C. alerts",
    },{
        question: "Which of the following function of Array object returns a string representing the array and its elements?",
        choices: ["A. toSource()", "B. sort()", "C. splice()", "D.toString()"],
        answer: "D.toString()",
    },{
        question: "What does DOM stand for?",
        choices: ["A. Document Object Model", "B. Dogs Owls Moths", "C. Do Over Meat", "D. Dig Out Man"],
        answer: "A. Document Object Model",
    },{
        question: "Who is the Lord of the Code?",
        choices: ["A. Not me", "B. Not me", "C. Not me", "D. Me"],
        answer: "D. Me",
    }
];

console.log(questions[0].question);


var welcome = document.querySelector(".welcome");
var startButton = document.querySelector(".start-button");
var quitButton = document.querySelector(".quit-button");
var quiz = document.querySelector(".quiz");
var timerEl = document.querySelector(".timer-text");
var answers = document.querySelector(".answers");
var questionEl = document.querySelector(".questions");
var buttonA = document.querySelector(".buttonA");
var buttonB = document.querySelector(".buttonB");
var buttonC = document.querySelector(".buttonC");
var buttonD = document.querySelector(".buttonD");
var questionNumber = 0;
var answers = document.querySelector(".answers")



// Starts the game when user clicks start button
startButton.addEventListener("click", startGame);

// 
quitButton.addEventListener("click", quitGame);

// Sets everything in motion and hides welcome text
function startGame(){
    startTimer();
    document.getElementsByClassName("welcome")[0].style.visibility="hidden";
    questionNumber = 0;
    createQuestions(questionNumber);
}


// Creates questions and answers by pulling from arrays
function createQuestions(questionNumber) {
    if (questionNumber < questions.length) {
        questionEl.textContent = questions[questionNumber].question;
        buttonA.textContent = questions[questionNumber].choices[0];
        buttonB.textContent = questions[questionNumber].choices[1];
        buttonC.textContent = questions[questionNumber].choices[2];
        buttonD.textContent = questions[questionNumber].choices[3];
    }



}



// Text appears when user loses game by running out of time
function loseGame() {
    quiz.textContent = "You ran out of time! You really don't have what it takes to be The Lord of the Code. Refresh the page and try again, but be quick this time."
}

// Text appears when user clicks quit button
function quitGame() {
    welcome.textContent = "What? You're not even gonna try? Come on. Refresh the page and try."
}



// Controls the timer
function startTimer() {
    var timeLeft = 10;
    var timeInterval = setInterval(function(){
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else {
            timerEl.textContent = "";
            loseGame();
            clearInterval(timeInterval);
        }
    }, 1000) 
}

