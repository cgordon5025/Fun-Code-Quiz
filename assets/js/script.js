//variables I'll be using throughout, are located here
var secLeft = 59; //set to 59 because there is a one second delay in this starting
var score = 0; //the only penalty for a wrong answer is time, no point deduction
//make the timer

//Here I am calling down elements by ID, keeping them all here
// here are the vars that are set at the begining
var timerEl = document.getElementById('timerDisplay');
var titleEl = document.getElementById('title');
var beginEl = document.getElementById('begin');
var historyLink = document.getElementById('viewHistory');
var historyEl = document.getElementById('scoreHistory')
var resultsEl = document.getElementById('results')

//here are the elements for the quiz portion
var questionEl = document.getElementById('question');
var option1El = document.getElementById('option1');
var option2El = document.getElementById('option2');
var option3El = document.getElementById('option3');
var option4El = document.getElementById('option4');

//lets set all non opening elements to hidden
resultsEl.style.display = 'none';
option1El.style.display = 'none';
option2El.style.display = 'none';
option3El.style.display = 'none';
option4El.style.display = 'none';
//Lets start the quiz
beginEl.addEventListener('click', start)
function start() {//when the quiz starts lets hide the title and start button
    beginQuiz();
    startTimer();
    showQuestion1();
}

function beginQuiz() {
    titleEl.style.display = 'none';
    beginEl.style.display = 'none';

}
//Lets display the questions 
//currently does not fucntion while inside function, why?
// this is the base of the timer, can add hte in penalty for wrong answers in the space where i determine the right answer and add points
function startTimer() {
    var interval = setInterval(function () {
        timerEl.textContent = ["Time: " + secLeft];
        secLeft--;;
        //if they answer wrong remove 15
        if (secLeft === 0) {
            clearInterval(interval)
        }
    }, 1000);
}
function scoreTracker() {
    scoreEl.textContent = score;
}

//these questions aren't very good, I'm bad at coming up with questions
var question1Info = {
    question: "Where do you put your JavaScript file in a HTML file?",
    opt1: "Head",
    opt2: "Head and Body",
    opt3: "Body",
    opt4: "Other",
    opt1Answer: false,
    opt2Answer: true,
    opt3Answer: false,
    opt4Answer: false
}
var question2Info = {
    question: "What are the two items in a object?",
    opt1: "key and value",
    opt2: "value and title",
    opt3: "name and value",
    opt4: "key and title",
    opt1Answer: true,
    opt2Answer: false,
    opt3Answer: false,
    opt4Answer: false
}

var question3Info = {
    question: "Which is the correct way to declare a function?",
    opt1: "Function = myFunction(){}",
    opt2: "var myFunction",
    opt3: "function myFunction()",
    opt4: "myFunction()",
    opt1Answer: false,
    opt2Answer: false,
    opt3Answer: true,
    opt4Answer: false
}

var question4Info = {
    question: "How do you call a function?",
    opt1: "myFunction()",
    opt2: "myFunction",
    opt3: "call myFunction()",
    opt4: "call var myFunction",
    opt1Answer: true,
    opt2Answer: false,
    opt3Answer: false,
    opt4Answer: false
}
var question5Info = {
    question: "Which is NOT a valid operator in JavaScript?",
    opt1: "+",
    opt2: "=",
    opt3: "*",
    opt4: "@",
    opt1Answer: false,
    opt2Answer: false,
    opt3Answer: false,
    opt4Answer: true
}

var question6Info = {
    question: "Which is NOT a type of loop?",
    opt1: "For",
    opt2: "If",
    opt3: "During",
    opt4: "While",
    opt1Answer: false,
    opt2Answer: false,
    opt3Answer: true,
    opt4Answer: false
}

var question7Info = {
    question: "How do you comment somehting in JavaScript?",
    opt1: "//This is a comment",
    opt2: "<!-- This is a comment-->",
    opt3: "/*This is a comment*/",
    opt4: "'This is a comment''",
    opt1Answer: true,
    opt2Answer: false,
    opt3Answer: false,
    opt4Answer: false
}
var question8Info = {
    question: "Which is the correct way to write an array?",
    opt1: "myArray = {'A','B','C'}",
    opt2: "myArray = ['A','B','C']",
    opt3: "myArray = ('A','B','C')",
    opt4: "myArray = 'A','B','C'",
    opt1Answer: false,
    opt2Answer: true,
    opt3Answer: false,
    opt4Answer: false
}

var question9Info = {
    question: "What is the event thta occurs when a user clicks on an element?",
    opt1: "onclick",
    opt2: "mouseover",
    opt3: "mousemove",
    opt4: "mouseout",
    opt1Answer: true,
    opt2Answer: false,
    opt3Answer: false,
    opt4Answer: false
}
var question10Info = {
    question: "Which variable is named in accordance to Camel Casw?",
    opt1: "myvariable",
    opt2: "MyVariable",
    opt3: "myVariable",
    opt4: "MYVARIABLE",
    opt1Answer: false,
    opt2Answer: false,
    opt3Answer: true,
    opt4Answer: false
}

function showQuestion1() {
    var questionEl = document.getElementById('question');
    var option1El = document.getElementById('option1');
    var option2El = document.getElementById('option2');
    var option3El = document.getElementById('option3');
    var option4El = document.getElementById('option4');

    questionEl.textContent = [question1Info.question];
    option1El.textContent = [question1Info.opt1];
    option2El.textContent = [question1Info.opt2];
    option3El.textContent = [question1Info.opt3];
    option4El.textContent = [question1Info.opt4];
    if (option1El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        //this must go here so that it is included on the click of option1
        showQuestion2();
        // option1El.addEventListener('click',showQuestion2)
    }));
    if (option2El.addEventListener('click', function () {
        score++;
        scoreTracker();
        showQuestion2();
    }));
    if (option3El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion2();
    }));
    if (option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion2();
    }));
}
function showQuestion2() {
    var questionEl = document.getElementById('question');
    var option1El = document.getElementById('option1');
    var option2El = document.getElementById('option2');
    var option3El = document.getElementById('option3');
    var option4El = document.getElementById('option4');

    questionEl.textContent = [question2Info.question];
    option1El.textContent = [question2Info.opt1];
    option2El.textContent = [question2Info.opt2];
    option3El.textContent = [question2Info.opt3];
    option4El.textContent = [question2Info.opt4];
    if (option1El.addEventListener('click', function () {
        score++;
        scoreTracker();
        //this must go here so that it is included on the click of option1
        showQuestion3();
    }));
    if (option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion3();
    }));
    if (option3El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion3();
    }));
    if (option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion3();
    }));
}
function showQuestion3() {
    var questionEl = document.getElementById('question');
    var option1El = document.getElementById('option1');
    var option2El = document.getElementById('option2');
    var option3El = document.getElementById('option3');
    var option4El = document.getElementById('option4');

    questionEl.textContent = [question3Info.question];
    option1El.textContent = [question3Info.opt1];
    option2El.textContent = [question3Info.opt2];
    option3El.textContent = [question3Info.opt3];
    option4El.textContent = [question3Info.opt4];
    if (option1El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        //this must go here so that it is included on the click of option1
        showQuestion4();
    }));
    if (option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion4();
    }));
    if (option3El.addEventListener('click', function () {

        score++;
        scoreTracker();
        showQuestion4();
    }));
    if (option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion4();
    }));
}
function showQuestion4() {
    var questionEl = document.getElementById('question');
    var option1El = document.getElementById('option1');
    var option2El = document.getElementById('option2');
    var option3El = document.getElementById('option3');
    var option4El = document.getElementById('option4');

    questionEl.textContent = [question4Info.question];
    option1El.textContent = [question4Info.opt1];
    option2El.textContent = [question4Info.opt2];
    option3El.textContent = [question4Info.opt3];
    option4El.textContent = [question4Info.opt4];
    if (option1El.addEventListener('click', function () {
        score++;
        scoreTracker();
        //this must go here so that it is included on the click of option1
        showQuestion5();
    }));
    if (option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion5();
    }));
    if (option3El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion5();
    }));
    if (option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion5();
    }));
}
function showQuestion5() {
    var questionEl = document.getElementById('question');
    var option1El = document.getElementById('option1');
    var option2El = document.getElementById('option2');
    var option3El = document.getElementById('option3');
    var option4El = document.getElementById('option4');

    questionEl.textContent = [question5Info.question];
    option1El.textContent = [question5Info.opt1];
    option2El.textContent = [question5Info.opt2];
    option3El.textContent = [question5Info.opt3];
    option4El.textContent = [question5Info.opt4];
    if (option1El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        //this must go here so that it is included on the click of option1
        showQuestion6();
    }));
    if (option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion6();
    }));
    if (option3El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion6();
    }));
    if (option4El.addEventListener('click', function () {
        score++;
        scoreTracker();

        showQuestion6();
    }));
}
function showQuestion6() {
    var questionEl = document.getElementById('question');
    var option1El = document.getElementById('option1');
    var option2El = document.getElementById('option2');
    var option3El = document.getElementById('option3');
    var option4El = document.getElementById('option4');

    questionEl.textContent = [question6Info.question];
    option1El.textContent = [question6Info.opt1];
    option2El.textContent = [question6Info.opt2];
    option3El.textContent = [question6Info.opt3];
    option4El.textContent = [question6Info.opt4];
    if (option1El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        //this must go here so that it is included on the click of option1
        showQuestion7();
    }));
    if (option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion7();
    }));
    if (option3El.addEventListener('click', function () {
        score++;
        scoreTracker();
        showQuestion7();
    }));
    if (option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion7();
    }));
}
function showQuestion7() {
    var questionEl = document.getElementById('question');
    var option1El = document.getElementById('option1');
    var option2El = document.getElementById('option2');
    var option3El = document.getElementById('option3');
    var option4El = document.getElementById('option4');

    questionEl.textContent = [question7Info.question];
    option1El.textContent = [question7Info.opt1];
    option2El.textContent = [question7Info.opt2];
    option3El.textContent = [question7Info.opt3];
    option4El.textContent = [question7Info.opt4];
    if (option1El.addEventListener('click', function () {
        score++;
        scoreTracker();
        //this must go here so that it is included on the click of option1
        showQuestion8();
    }));
    if (option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion8();
    }));
    if (option3El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion8();
    }));
    if (option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion8();
    }));
}
function showQuestion8() {
    var questionEl = document.getElementById('question');
    var option1El = document.getElementById('option1');
    var option2El = document.getElementById('option2');
    var option3El = document.getElementById('option3');
    var option4El = document.getElementById('option4');

    questionEl.textContent = [question8Info.question];
    option1El.textContent = [question8Info.opt1];
    option2El.textContent = [question8Info.opt2];
    option3El.textContent = [question8Info.opt3];
    option4El.textContent = [question8Info.opt4];
    if (option1El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        //this must go here so that it is included on the click of option1
        showQuestion9();
    }));
    if (option2El.addEventListener('click', function () {
        score++;
        scoreTracker();

        showQuestion9();
    }));
    if (option3El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion9();
    }));
    if (option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion9();
    }));
}
function showQuestion9() {
    var questionEl = document.getElementById('question');
    var option1El = document.getElementById('option1');
    var option2El = document.getElementById('option2');
    var option3El = document.getElementById('option3');
    var option4El = document.getElementById('option4');

    questionEl.textContent = [question9Info.question];
    option1El.textContent = [question9Info.opt1];
    option2El.textContent = [question9Info.opt2];
    option3El.textContent = [question9Info.opt3];
    option4El.textContent = [question9Info.opt4];
    if (option1El.addEventListener('click', function () {
        score++;
        scoreTracker();
        //this must go here so that it is included on the click of option1
        showQuestion10();
    }));
    if (option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion10();
    }));
    if (option3El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion10();
    }));
    if (option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showQuestion10();
    }));
}
function showQuestion10() {
    var questionEl = document.getElementById('question');
    var option1El = document.getElementById('option1');
    var option2El = document.getElementById('option2');
    var option3El = document.getElementById('option3');
    var option4El = document.getElementById('option4');

    questionEl.textContent = [question10Info.question];
    option1El.textContent = [question10Info.opt1];
    option2El.textContent = [question10Info.opt2];
    option3El.textContent = [question10Info.opt3];
    option4El.textContent = [question10Info.opt4];
    if (option1El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        //this must go here so that it is included on the click of option1
        showResults();
    }));
    if (option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showResults();
    }));
    if (option3El.addEventListener('click', function () {
        score++;
        scoreTracker();
        showResults();
    }));
    if (option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            sec -= 10;
        }
        showResults();
    }));
}
var submitEl = document.getElementById('submit')
var historyEl = document.getElementById('viewHistory');
historyEl.addEventListener("click", showResults)


var scoreEl = document.getElementById('scoreDisplay');

function showResults() {
    resultsEl.style.display = 'flex'
    scoreEl.textContent = "Your final score is " + scoreTracker;

}


//build a function to store the player name and score
//hey put in your name here
//show the score
//store the name and score


//have a page that shows the previous records
//need to have an array/object to hold the previous players scores and names

