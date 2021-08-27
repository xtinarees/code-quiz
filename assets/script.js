//https://codingnepal.medium.com/create-a-quiz-app-with-timer-using-html-css-javascript-f460087a88a1
//https://stackoverflow.com/questions/45449106/how-to-make-a-ul-list-of-buttons-accessible/45491521
// https://www.codingnepalweb.com/quiz-app-with-timer-javascript/
// https://codepen.io/boopalan002/pen/yKZVGa
// https://www.w3schools.com/js/js_quiz.asp


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
]

console.log(questions);