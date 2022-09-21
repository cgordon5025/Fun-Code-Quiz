var score = 0
var secLeft = 59
var interval;
var timeResetCount = 0;
//Here I am calling down elements by ID, keeping them all here
// here are the vars that are set at the begining
// Lets make all the variables

var historyList = document.getElementById("previousScoresList")
var scoreEl = document.getElementById('scoreDisplay');
var players = [];
var timerEl = document.getElementById('timerDisplay');
var titleEl = document.getElementById('title');
var beginEl = document.getElementById('begin');
var historyLink = document.getElementById('viewHistory');

var resultsEl = document.getElementById('results')
var submitEl = document.getElementById('submit');
var nameInputEl = document.getElementById("nameInput");

var historyEl = document.getElementById('history');
var instructEl = document.getElementById('instruct');
var homeButton = document.getElementById('homePage');
var clearButton = document.getElementById('clearScores');

// here are the elements for the quiz portion, repeats a lot here for each question
var questionEl = document.getElementById('question');
var corrAnsEL = document.getElementById('corrAns');

var option1El = document.getElementById('option1');
var option2El = document.getElementById('option2');
var option3El = document.getElementById('option3');
var option4El = document.getElementById('option4');

var Q2option1El = document.getElementById('Q2option1');
var Q2option2El = document.getElementById('Q2option2');
var Q2option3El = document.getElementById('Q2option3');
var Q2option4El = document.getElementById('Q2option4');

var Q3option1El = document.getElementById('Q3option1');
var Q3option2El = document.getElementById('Q3option2');
var Q3option3El = document.getElementById('Q3option3');
var Q3option4El = document.getElementById('Q3option4');

var Q4option1El = document.getElementById('Q4option1');
var Q4option2El = document.getElementById('Q4option2');
var Q4option3El = document.getElementById('Q4option3');
var Q4option4El = document.getElementById('Q4option4');

var Q5option1El = document.getElementById('Q5option1');
var Q5option2El = document.getElementById('Q5option2');
var Q5option3El = document.getElementById('Q5option3');
var Q5option4El = document.getElementById('Q5option4');

var Q6option1El = document.getElementById('Q6option1');
var Q6option2El = document.getElementById('Q6option2');
var Q6option3El = document.getElementById('Q6option3');
var Q6option4El = document.getElementById('Q6option4');

var Q7option1El = document.getElementById('Q7option1');
var Q7option2El = document.getElementById('Q7option2');
var Q7option3El = document.getElementById('Q7option3');
var Q7option4El = document.getElementById('Q7option4');

var Q8option1El = document.getElementById('Q8option1');
var Q8option2El = document.getElementById('Q8option2');
var Q8option3El = document.getElementById('Q8option3');
var Q8option4El = document.getElementById('Q8option4');

var Q9option1El = document.getElementById('Q9option1');
var Q9option2El = document.getElementById('Q9option2');
var Q9option3El = document.getElementById('Q9option3');
var Q9option4El = document.getElementById('Q9option4');

var Q10option1El = document.getElementById('Q10option1');
var Q10option2El = document.getElementById('Q10option2');
var Q10option3El = document.getElementById('Q10option3');
var Q10option4El = document.getElementById('Q10option4');


//remove after debugging
var scoreTestEl = document.getElementById('scoreDisplayTest')

//lets set all non opening elements to hidden

questionEl.style.display = 'none';
corrAnsEL.style.display = 'none';

resultsEl.style.display = 'none';
historyEl.style.display = 'none';
homeButton.style.display = 'none';
clearButton.style.display = 'none'

option1El.style.display = 'none';
option2El.style.display = 'none';
option3El.style.display = 'none';
option4El.style.display = 'none';

Q2option1El.style.display = 'none';
Q2option2El.style.display = 'none';
Q2option3El.style.display = 'none';
Q2option4El.style.display = 'none';

Q3option1El.style.display = 'none';
Q3option2El.style.display = 'none';
Q3option3El.style.display = 'none';
Q3option4El.style.display = 'none';

Q4option1El.style.display = 'none';
Q4option2El.style.display = 'none';
Q4option3El.style.display = 'none';
Q4option4El.style.display = 'none';

Q5option1El.style.display = 'none';
Q5option2El.style.display = 'none';
Q5option3El.style.display = 'none';
Q5option4El.style.display = 'none';

Q6option1El.style.display = 'none';
Q6option2El.style.display = 'none';
Q6option3El.style.display = 'none';
Q6option4El.style.display = 'none';

Q7option1El.style.display = 'none';
Q7option2El.style.display = 'none';
Q7option3El.style.display = 'none';
Q7option4El.style.display = 'none';

Q8option1El.style.display = 'none';
Q8option2El.style.display = 'none';
Q8option3El.style.display = 'none';
Q8option4El.style.display = 'none';

Q9option1El.style.display = 'none';
Q9option2El.style.display = 'none';
Q9option3El.style.display = 'none';
Q9option4El.style.display = 'none';

Q10option1El.style.display = 'none';
Q10option2El.style.display = 'none';
Q10option3El.style.display = 'none';
Q10option4El.style.display = 'none';
// hideAllQuestions()

//Lets start the quiz
beginEl.addEventListener('click', start);

//options if they go directly to the history page
historyLink.addEventListener('click', renderResults);
homeButton.addEventListener('click', homePage);
clearButton.addEventListener('click', clearScores);
function homePage() {
    beginEl.style.display = 'inline-block';
    titleEl.style.display = 'flex';
    instructEl.style.display = 'flex';
    resultsEl.style.display = 'none';
    submitEl.style.display = 'none';
    nameInputEl.style.display = 'none';
    historyEl.style.display = 'none'
    scoreEl.style.display = 'none'
    timerEl.textContent = '';
    score = 0;
    window.location.reload();
}
function start() {//when the quiz starts lets hide the title and start button
    beginQuiz();
    startTimer();
    questionEl.style.display = 'flex';
    option1El.style.display = 'flex';
    option2El.style.display = 'flex';
    option3El.style.display = 'flex';
    option4El.style.display = 'flex';
    showQuestion1();
}

function beginQuiz() {
    //reset the score if they play again
    score = 0
    timeResetCount = 0
    titleEl.style.display = 'none';
    instructEl.style.display = 'none'
    beginEl.style.display = 'none';

}
//Lets display the questions 
// this is the base of the timer, can add hte in penalty for wrong answers in the space where i determine the right answer and add points
function startTimer() {
    clearInterval(interval)
    //this will let us know if we're in the midst of a quiz or reached the end, when we reach the end we want things to reset and stop
    var interval = setInterval(function () {
        timerEl.textContent = ["Time: " + secLeft];
        secLeft--;
        //if they answer wrong remove 10
        if (secLeft < 1) {
            clearInterval(interval);
            timerEl.textContent = "Time's Up";
            showResults()
            secLeft = 59
        }
    }, 1000);
}
//Leaving this line for future debugging
function scoreTracker() {
    scoreEl.textContent = score;
    scoreTestEl.textContent = score;
    console.log(score)
}
//get rid of feedback text after set time
function feedbackTimeOut() {
    corrAnsEL.textContent = '';
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
    opt3: "function myFunction(){}",
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
    question: "How do you comment something in JavaScript?",
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
    question: "What is the event that occurs when a user clicks on an element?",
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
    question: "Which variable is named in accordance to Camel Case?",
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
    //set the text to the appropriate question
    questionEl.textContent = [question1Info.question];
    option1El.textContent = [question1Info.opt1];
    option2El.textContent = [question1Info.opt2];
    option3El.textContent = [question1Info.opt3];
    option4El.textContent = [question1Info.opt4];


    if (option1El.addEventListener('click', function () {
        secLeft -= 10;
        //they got it wrong so they lose 10 seconds and the text will tell them they got it wrong
        corrAnsEL.textContent = "Wrong!";
        //this must go here so that it is included on the click of option1
        showQuestion2();
    }));
    if (option2El.addEventListener('click', function () {
        score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion2();
    }));
    if (option3El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion2();
    }));
    if (option4El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion2();
    }));
}
function showQuestion2() {

    //lets get rid of the old ones
    option1El.style.display = 'none';
    option2El.style.display = 'none';
    option3El.style.display = 'none';
    option4El.style.display = 'none';
    Q2option1El.style.display = 'flex';
    Q2option2El.style.display = 'flex';
    Q2option3El.style.display = 'flex';
    Q2option4El.style.display = 'flex';

    questionEl.textContent = [question2Info.question];
    Q2option1El.textContent = [question2Info.opt1];
    Q2option2El.textContent = [question2Info.opt2];
    Q2option3El.textContent = [question2Info.opt3];
    Q2option4El.textContent = [question2Info.opt4];

    setTimeout(feedbackTimeOut, 2000);

    if (Q2option1El.addEventListener('click', function () {
        score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion3();
    }));
    if (Q2option2El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion3();
    }));
    if (Q2option3El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion3();
    }));
    if (Q2option4El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion3();
    }));
}
function showQuestion3() {
    Q2option1El.style.display = 'none';
    Q2option2El.style.display = 'none';
    Q2option3El.style.display = 'none';
    Q2option4El.style.display = 'none';
    Q3option1El.style.display = 'flex';
    Q3option2El.style.display = 'flex';
    Q3option3El.style.display = 'flex';
    Q3option4El.style.display = 'flex';

    questionEl.textContent = [question3Info.question];
    Q3option1El.textContent = [question3Info.opt1];
    Q3option2El.textContent = [question3Info.opt2];
    Q3option3El.textContent = [question3Info.opt3];
    Q3option4El.textContent = [question3Info.opt4];

    setTimeout(feedbackTimeOut, 2000);


    if (Q3option1El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion4();
    }));
    if (Q3option2El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion4();
    }));
    if (Q3option3El.addEventListener('click', function () {
        score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion4();
    }));
    if (Q3option4El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion4();
    }));
}
function showQuestion4() {
    Q3option1El.style.display = 'none';
    Q3option2El.style.display = 'none';
    Q3option3El.style.display = 'none';
    Q3option4El.style.display = 'none';
    Q4option1El.style.display = 'flex';
    Q4option2El.style.display = 'flex';
    Q4option3El.style.display = 'flex';
    Q4option4El.style.display = 'flex';

    questionEl.textContent = [question4Info.question];
    Q4option1El.textContent = [question4Info.opt1];
    Q4option2El.textContent = [question4Info.opt2];
    Q4option3El.textContent = [question4Info.opt3];
    Q4option4El.textContent = [question4Info.opt4];
    setTimeout(feedbackTimeOut, 2000);


    if (Q4option1El.addEventListener('click', function () {
        score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion5();
    }));
    if (Q4option2El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion5();
    }));
    if (Q4option3El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion5();
    }));
    if (Q4option4El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion5();
    }));
}
function showQuestion5() {
    Q4option1El.style.display = 'none';
    Q4option2El.style.display = 'none';
    Q4option3El.style.display = 'none';
    Q4option4El.style.display = 'none';
    Q5option1El.style.display = 'flex';
    Q5option2El.style.display = 'flex';
    Q5option3El.style.display = 'flex';
    Q5option4El.style.display = 'flex';

    questionEl.textContent = [question5Info.question];
    Q5option1El.textContent = [question5Info.opt1];
    Q5option2El.textContent = [question5Info.opt2];
    Q5option3El.textContent = [question5Info.opt3];
    Q5option4El.textContent = [question5Info.opt4];

    setTimeout(feedbackTimeOut, 2000);

    if (Q5option1El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion6();
    }));
    if (Q5option2El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion6();
    }));
    if (Q5option3El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion6();
    }));
    if (Q5option4El.addEventListener('click', function () {
        score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion6();
    }));
}
function showQuestion6() {
    Q5option1El.style.display = 'none';
    Q5option2El.style.display = 'none';
    Q5option3El.style.display = 'none';
    Q5option4El.style.display = 'none';
    Q6option1El.style.display = 'flex';
    Q6option2El.style.display = 'flex';
    Q6option3El.style.display = 'flex';
    Q6option4El.style.display = 'flex';

    questionEl.textContent = [question6Info.question];
    Q6option1El.textContent = [question6Info.opt1];
    Q6option2El.textContent = [question6Info.opt2];
    Q6option3El.textContent = [question6Info.opt3];
    Q6option4El.textContent = [question6Info.opt4];

    setTimeout(feedbackTimeOut, 2000);

    if (Q6option1El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion7();
    }));
    if (Q6option2El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion7();
    }));
    if (Q6option3El.addEventListener('click', function () {
        score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion7();
    }));
    if (Q6option4El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion7();
    }));
}
function showQuestion7() {
    Q6option1El.style.display = 'none';
    Q6option2El.style.display = 'none';
    Q6option3El.style.display = 'none';
    Q6option4El.style.display = 'none';
    Q7option1El.style.display = 'flex';
    Q7option2El.style.display = 'flex';
    Q7option3El.style.display = 'flex';
    Q7option4El.style.display = 'flex';

    questionEl.textContent = [question7Info.question];
    Q7option1El.textContent = [question7Info.opt1];
    Q7option2El.textContent = [question7Info.opt2];
    Q7option3El.textContent = [question7Info.opt3];
    Q7option4El.textContent = [question7Info.opt4];

    setTimeout(feedbackTimeOut, 2000);

    if (Q7option1El.addEventListener('click', function () {
        score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion8();
    }));
    if (Q7option2El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion8();
    }));
    if (Q7option3El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion8();
    }));
    if (Q7option4El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion8();
    }));
}
function showQuestion8() {
    Q7option1El.style.display = 'none';
    Q7option2El.style.display = 'none';
    Q7option3El.style.display = 'none';
    Q7option4El.style.display = 'none';
    Q8option1El.style.display = 'flex';
    Q8option2El.style.display = 'flex';
    Q8option3El.style.display = 'flex';
    Q8option4El.style.display = 'flex';

    questionEl.textContent = [question8Info.question];
    Q8option1El.textContent = [question8Info.opt1];
    Q8option2El.textContent = [question8Info.opt2];
    Q8option3El.textContent = [question8Info.opt3];
    Q8option4El.textContent = [question8Info.opt4];

    setTimeout(feedbackTimeOut, 2000);

    if (Q8option1El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion9();
    }));
    if (Q8option2El.addEventListener('click', function () {
        score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion9();
    }));
    if (Q8option3El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion9();
    }));
    if (Q8option4El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion9();
    }));
}
function showQuestion9() {
    Q8option1El.style.display = 'none';
    Q8option2El.style.display = 'none';
    Q8option3El.style.display = 'none';
    Q8option4El.style.display = 'none';
    Q9option1El.style.display = 'flex';
    Q9option2El.style.display = 'flex';
    Q9option3El.style.display = 'flex';
    Q9option4El.style.display = 'flex';

    questionEl.textContent = [question9Info.question];
    Q9option1El.textContent = [question9Info.opt1];
    Q9option2El.textContent = [question9Info.opt2];
    Q9option3El.textContent = [question9Info.opt3];
    Q9option4El.textContent = [question9Info.opt4];

    setTimeout(feedbackTimeOut, 2000);

    if (Q9option1El.addEventListener('click', function () {
        score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion10();
    }));
    if (Q9option2El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion10();
    }));
    if (Q9option3El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion10();
    }));
    if (Q9option4El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showQuestion10();
    }));
}
function showQuestion10() {
    Q9option1El.style.display = 'none';
    Q9option2El.style.display = 'none';
    Q9option3El.style.display = 'none';
    Q9option4El.style.display = 'none';
    Q10option1El.style.display = 'flex';
    Q10option2El.style.display = 'flex';
    Q10option3El.style.display = 'flex';
    Q10option4El.style.display = 'flex';

    questionEl.textContent = [question10Info.question];
    Q10option1El.textContent = [question10Info.opt1];
    Q10option2El.textContent = [question10Info.opt2];
    Q10option3El.textContent = [question10Info.opt3];
    Q10option4El.textContent = [question10Info.opt4];

    setTimeout(feedbackTimeOut, 2000);

    if (Q10option1El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showResults();
    }));
    if (Q10option2El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showResults();
    }));
    if (Q10option3El.addEventListener('click', function () {
        score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showResults();
    }));
    if (Q10option4El.addEventListener('click', function () {
        secLeft -= 10;
        corrAnsEL.textContent = "Wrong!";
        showResults();
    }));
}


function hideAllQuestions() {
    questionEl.style.display = 'none';
    corrAnsEL.style.display = 'none';


    option1El.style.display = 'none';
    option2El.style.display = 'none';
    option3El.style.display = 'none';
    option4El.style.display = 'none';

    Q2option1El.style.display = 'none';
    Q2option2El.style.display = 'none';
    Q2option3El.style.display = 'none';
    Q2option4El.style.display = 'none';

    Q3option1El.style.display = 'none';
    Q3option2El.style.display = 'none';
    Q3option3El.style.display = 'none';
    Q3option4El.style.display = 'none';

    Q4option1El.style.display = 'none';
    Q4option2El.style.display = 'none';
    Q4option3El.style.display = 'none';
    Q4option4El.style.display = 'none';

    Q5option1El.style.display = 'none';
    Q5option2El.style.display = 'none';
    Q5option3El.style.display = 'none';
    Q5option4El.style.display = 'none';

    Q6option1El.style.display = 'none';
    Q6option2El.style.display = 'none';
    Q6option3El.style.display = 'none';
    Q6option4El.style.display = 'none';

    Q7option1El.style.display = 'none';
    Q7option2El.style.display = 'none';
    Q7option3El.style.display = 'none';
    Q7option4El.style.display = 'none';

    Q8option1El.style.display = 'none';
    Q8option2El.style.display = 'none';
    Q8option3El.style.display = 'none';
    Q8option4El.style.display = 'none';

    Q9option1El.style.display = 'none';
    Q9option2El.style.display = 'none';
    Q9option3El.style.display = 'none';
    Q9option4El.style.display = 'none';

    Q10option1El.style.display = 'none';
    Q10option2El.style.display = 'none';
    Q10option3El.style.display = 'none';
    Q10option4El.style.display = 'none';
}
function showResults() {
    //lets hide the question elements again
    hideAllQuestions()
    showResultsEl()
    timeResetCount += 1
    //and show the results window
    scoreEl.textContent = "Your final score is " + score;

    clearInterval(interval)
    console.log(interval)
    secLeft = 0;
    timerEl.textContent = 'Quiz Complete';

    submitEl.addEventListener("click", renderResults);
}
if (!localStorage.getItem("myScoreLocal")) {
    var prevScores = [];
} else { var prevScores = JSON.parse(localStorage.getItem("myScoreLocal")) }
console.log(historyList)
console.log(prevScores)
function renderResults() {
    var myScore = {
        userName: nameInputEl.value,
        userScore: score
    }
    if (myScore.userName !== '') {
        prevScores.push(myScore)
    }
    localStorage.setItem("myScoreLocal", JSON.stringify(prevScores))

    //Switch displays
    titleEl.style.display = 'none';
    instructEl.style.display = 'none'
    beginEl.style.display = 'none';
    resultsEl.style.display = 'none';
    historyEl.style.display = 'flex';
    homeButton.style.display = 'block';
    clearButton.style.display = 'block'

    //establishing new variables
    var playerName = '';
    var playerScore = '';

    prevScores.sort((a, b) => b.userScore - a.userScore)
    for (var i = 0; i < prevScores.length; i++) {
        var playerName = (prevScores[i].userName);
        var playerScore = (prevScores[i].userScore);

        var li = document.createElement("li");
        //puts it togehter
        li.textContent = playerName + ': ' + playerScore + ' points';

        historyList.appendChild(li)
    }
}

function clearScores() {
    historyList = []
    li = []
    prevScores = []
    localStorage.removeItem("myScoreLocal")
    // renderResults()
    // showHistory()
}

//hide results elements
function hideResultsEl() {
    resultsEl.style.display = 'none';
    submitEl.style.display = 'none';
    nameInputEl.style.display = 'none';
    scoreEl.style.display = 'none'
}
//show results elements
function showResultsEl() {
    resultsEl.style.display = 'block';
    submitEl.style.display = 'flex';
    nameInputEl.style.display = 'flex';
    scoreEl.style.display = 'flex'
}
//hide history elements
function hideHistoryEl() {
    historyEl.style.display = 'none';
    homeButton.style.display = 'none';
    clearButton.style.display = 'none';
}