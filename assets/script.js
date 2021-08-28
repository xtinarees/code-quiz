//https://codingnepal.medium.com/create-a-quiz-app-with-timer-using-html-css-javascript-f460087a88a1
//https://stackoverflow.com/questions/45449106/how-to-make-a-ul-list-of-buttons-accessible/45491521
// https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
// https://codepen.io/boopalan002/pen/yKZVGa
// https://www.w3schools.com/js/js_quiz.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
// https://www.sitepoint.com/simple-javascript-quiz/
// https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68



var questions = [
    {
        question: "How does a FOR loop start?",
        choices: ["A. for (i = 0; i <= 5; i++)", "B. for i = 1 to 5", "C. for (i <= 5; i++)", "D. for (i = 0; i <= 5)"],
        answer: "A. for (i = 0; i <= 5; i++)"
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
    },
];


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
var answers = document.querySelector(".answers");
var score = 0;
var scoreboard = document.querySelector(".scoreboard");
var displayScore = document.querySelector(".display-score");
var initials = document.querySelector(".initials");
var submitButton = document.querySelector(".submit-button");


// Activates start button
startButton.addEventListener("click", startGame);

// Activates quit button
quitButton.addEventListener("click", quitGame);

// Sets everything in motion and hides welcome text
function startGame(){
    startTimer();
    welcome.style.visibility="hidden";
    questionNumber = 0;
    createQuestions();
};


// Creates questions and choices by pulling from arrays
function createQuestions() {
    var currentQuestion = questions[questionNumber];
    if (questionNumber < questions.length) {
        questionEl.textContent = currentQuestion.question;
        buttonA.innerHTML = currentQuestion.choices[0];
        buttonB.innerHTML = currentQuestion.choices[1];
        buttonC.innerHTML = currentQuestion.choices[2];
        buttonD.innerHTML = currentQuestion.choices[3];
    }
// Activates nextQuestion function when user clicks an answer
    answers.addEventListener("click", nextQuestion);

// Checks whether user answer is correct and adds to score if it is. I know there is a cleaner way to write all this, I'll fix it later.
    buttonA.addEventListener("click", function(event){
        userAnswer = event.target.innerHTML;
        if (userAnswer === currentQuestion.answer) {
            score++
        } 
    })
// Checks whether user answer is correct and adds to score if it is
    buttonB.addEventListener("click", function(event){
        userAnswer = event.target.innerHTML;
        if (userAnswer === currentQuestion.answer) {
            score++
        }
    });
// Checks whether user answer is correct and adds to score if it is
    buttonC.addEventListener("click", function(event){
        userAnswer = event.target.innerHTML;
        if (userAnswer === currentQuestion.answer) {
            score++
        };
    })
// Checks whether user answer is correct and adds to score if it is
    buttonD.addEventListener("click", function(event){
        userAnswer = event.target.innerHTML;
        if (userAnswer === currentQuestion.answer) {
            score++
    } ;
});
};


// Triggers next question
function nextQuestion() {
    if (questionNumber < questions.length) {
        questionNumber++;
        createQuestions();
    }
    if (questionNumber === questions.length){
        showScoreboard();}
}

// Shows scoreboard, hides everything else
function showScoreboard() {
    console.log("scoreboard")
    console.log(score);
    quiz.style.visibility = "hidden";
    timerEl.style.visibility = "hidden";
    scoreboard.textContent="Your score: " + score + " questions correct";
}



// Puts initials and score in local storage
function saveScore (){
    var name = initials.value;
    var newScore = {name, score};
    localStorage.setItem("newScore", JSON.stringify(newScore));
    console.log(saveScore)
}

// Pulls initials and score from local storage and displays them on screen
function displayScores() {
    var showScores = JSON.parse(localStorage.getItem("newScore"));
    if (showScores !== null) {
        document.getElementById("display-name").innerHTML = showScores.name;
        document.getElementById("scores-display").innerHTML = showScores.score;
    } else {
        return;
    }
}

// Clicking submit button stores score and pulls previous score(s)
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveScore();
    displayScores();
});

// Clicking replay button does bla bla bla





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
    var timeLeft = 80;
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