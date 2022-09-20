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
var submitEl = document.getElementById('submit');
var nameInputEl = document.getElementById("nameInput");
var historyEl = document.getElementById('history');
var instructEl = document.getElementById('instruct')

//here are the elements for the quiz portion
var questionEl = document.getElementById('question');
var option1El = document.getElementById('option1');
var option2El = document.getElementById('option2');
var option3El = document.getElementById('option3');
var option4El = document.getElementById('option4');
var corrAnsEL = document.getElementById('corrAns')

//remove after debugging
var scoreTestEl = document.getElementById('scoreDisplayTest')

//lets set all non opening elements to hidden
resultsEl.style.display = 'none';
historyEl.style.display = 'none';
option1El.style.display = 'none';
option2El.style.display = 'none';
option3El.style.display = 'none';
option4El.style.display = 'none';
//Lets start the quiz
beginEl.addEventListener('click', start)
function start() {//when the quiz starts lets hide the title and start button
    beginQuiz();
    startTimer();
    option1El.style.display = 'flex';
    option2El.style.display = 'flex';
    option3El.style.display = 'flex';
    option4El.style.display = 'flex';
    showQuestion1();
}

function beginQuiz() {
    //reset the score if they play again
    score = 0
    titleEl.style.display = 'none';
    instructEl.style.display = 'none'
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
        if (secLeft < 1) {
            clearInterval(interval);
            timerEl.textContent = "Time's Up";
            showResults()
        }
    }, 1000);
}
//this line can come out
function scoreTracker() {
    scoreEl.textContent = score;
    scoreTestEl.textContent = score;
    // console.log(score)
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
    //lets call down the variables just in case
    var questionEl = document.getElementById('question');
    //creating unique buttons because of weird error
    var option1El = document.getElementById('option1');
    var option2El = document.getElementById('option2');
    var option3El = document.getElementById('option3');
    var option4El = document.getElementById('option4');
    //set the text to the appropriate question
    questionEl.textContent = [question1Info.question];
    option1El.textContent = [question1Info.opt1];
    option2El.textContent = [question1Info.opt2];
    option3El.textContent = [question1Info.opt3];
    option4El.textContent = [question1Info.opt4];


    //score empty array

    if (option1El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        //they got it wrong so they lose 10 seconds and the text will tell them they got it wrong
        corrAnsEL.textContent = "Wrong!";
        //this must go here so that it is included on the click of option1
        showQuestion2();
    }));
    if (option2El.addEventListener('click', function () {
        score += 5
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion2();
    }));
    if (option3El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion2();
    }));
    if (option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion2();
    }));
}
function showQuestion2() {
    var questionEl = document.getElementById('question');
    var Q2option1El = document.getElementById('option1');
    var Q2option2El = document.getElementById('option2');
    var Q2option3El = document.getElementById('option3');
    var Q2option4El = document.getElementById('option4');

    questionEl.textContent = [question2Info.question];
    Q2option1El.textContent = [question2Info.opt1];
    Q2option2El.textContent = [question2Info.opt2];
    Q2option3El.textContent = [question2Info.opt3];
    Q2option4El.textContent = [question2Info.opt4];

    if (Q2option1El.addEventListener('click', function () {
        score += 5
        console.log(score)
        // score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion3();
    }));
    if (Q2option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion3();
    }));
    if (Q2option3El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion3();
    }));
    if (Q2option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion3();
    }));
}
function showQuestion3() {
    var questionEl = document.getElementById('question');
    var Q3option1El = document.getElementById('option1');
    var Q3option2El = document.getElementById('option2');
    var Q3option3El = document.getElementById('option3');
    var Q3option4El = document.getElementById('option4');

    questionEl.textContent = [question3Info.question];
    Q3option1El.textContent = [question3Info.opt1];
    Q3option2El.textContent = [question3Info.opt2];
    Q3option3El.textContent = [question3Info.opt3];
    Q3option4El.textContent = [question3Info.opt4];

    if (Q3option1El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion4();
    }));
    if (Q3option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion4();
    }));
    if (Q3option3El.addEventListener('click', function () {
        score += 5;
        console.log(score)
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion4();
    }));
    if (Q3option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion4();
    }));
}
function showQuestion4() {
    var questionEl = document.getElementById('question');
    var Q4option1El = document.getElementById('option1');
    var Q4option2El = document.getElementById('option2');
    var Q4option3El = document.getElementById('option3');
    var Q4option4El = document.getElementById('option4');

    questionEl.textContent = [question4Info.question];
    Q4option1El.textContent = [question4Info.opt1];
    Q4option2El.textContent = [question4Info.opt2];
    Q4option3El.textContent = [question4Info.opt3];
    Q4option4El.textContent = [question4Info.opt4];

    if (Q4option1El.addEventListener('click', function () {
        score += 5
        console.log(score);
        var count = 0;
        // score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion5();
    }));
    if (Q4option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion5();
    }));
    if (Q4option3El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion5();
    }));
    if (Q4option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion5();
    }));
}
function showQuestion5() {
    var questionEl = document.getElementById('question');
    var Q5option1El = document.getElementById('option1');
    var Q5option2El = document.getElementById('option2');
    var Q5option3El = document.getElementById('option3');
    var Q5option4El = document.getElementById('option4');

    questionEl.textContent = [question5Info.question];
    Q5option1El.textContent = [question5Info.opt1];
    Q5option2El.textContent = [question5Info.opt2];
    Q5option3El.textContent = [question5Info.opt3];
    Q5option4El.textContent = [question5Info.opt4];

    if (Q5option1El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion6();
    }));
    if (Q5option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion6();
    }));
    if (Q5option3El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion6();
    }));
    if (Q5option4El.addEventListener('click', function () {
        score += 5
        console.log(score)
        // score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion6();
    }));
}
function showQuestion6() {
    var questionEl = document.getElementById('question');
    var Q6option1El = document.getElementById('option1');
    var Q6option2El = document.getElementById('option2');
    var Q6option3El = document.getElementById('option3');
    var Q6option4El = document.getElementById('option4');

    questionEl.textContent = [question6Info.question];
    Q6option1El.textContent = [question6Info.opt1];
    Q6option2El.textContent = [question6Info.opt2];
    Q6option3El.textContent = [question6Info.opt3];
    Q6option4El.textContent = [question6Info.opt4];

    if (Q6option1El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion7();
    }));
    if (Q6option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion7();
    }));
    if (Q6option3El.addEventListener('click', function () {
        score = score + 5;
        console.log(score)
        // score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion7();
    }));
    if (Q6option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion7();
    }));
}
function showQuestion7() {
    var questionEl = document.getElementById('question');
    var Q7option1El = document.getElementById('option1');
    var Q7option2El = document.getElementById('option2');
    var Q7option3El = document.getElementById('option3');
    var Q7option4El = document.getElementById('option4');

    questionEl.textContent = [question7Info.question];
    Q7option1El.textContent = [question7Info.opt1];
    Q7option2El.textContent = [question7Info.opt2];
    Q7option3El.textContent = [question7Info.opt3];
    Q7option4El.textContent = [question7Info.opt4];

    if (Q7option1El.addEventListener('click', function () {
        score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion8();
    }));
    if (Q7option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion8();
    }));
    if (Q7option3El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion8();
    }));
    if (Q7option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion8();
    }));
}
function showQuestion8() {
    var questionEl = document.getElementById('question');
    var Q8option1El = document.getElementById('option1');
    var Q8option2El = document.getElementById('option2');
    var Q8option3El = document.getElementById('option3');
    var Q8option4El = document.getElementById('option4');

    questionEl.textContent = [question8Info.question];
    Q8option1El.textContent = [question8Info.opt1];
    Q8option2El.textContent = [question8Info.opt2];
    Q8option3El.textContent = [question8Info.opt3];
    Q8option4El.textContent = [question8Info.opt4];

    if (Q8option1El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion9();
    }));
    if (Q8ption2El.addEventListener('click', function () {
        score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion9();
    }));
    if (Q8option3El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion9();
    }));
    if (Q8option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion9();
    }));
}
function showQuestion9() {
    var questionEl = document.getElementById('question');
    var Q9option1El = document.getElementById('option1');
    var Q9option2El = document.getElementById('option2');
    var Q9option3El = document.getElementById('option3');
    var Q9option4El = document.getElementById('option4');

    questionEl.textContent = [question9Info.question];
    Q9option1El.textContent = [question9Info.opt1];
    Q9option2El.textContent = [question9Info.opt2];
    Q9option3El.textContent = [question9Info.opt3];
    Q9option4El.textContent = [question9Info.opt4];
    if (Q9option1El.addEventListener('click', function () {
        score += 5;
        scoreTracker();
        corrAnsEL.textContent = "Correct";
        showQuestion10();
    }));
    if (Q9option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion10();
    }));
    if (Q9option3El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion10();
    }));
    if (Q9option4El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showQuestion10();
    }));
}
function showQuestion10() {
    var questionEl = document.getElementById('question');
    var Q10option1El = document.getElementById('option1');
    var Q10option2El = document.getElementById('option2');
    var Q10option3El = document.getElementById('option3');
    var Q10option4El = document.getElementById('option4');

    questionEl.textContent = [question10Info.question];
    Q10option1El.textContent = [question10Info.opt1];
    Q10option2El.textContent = [question10Info.opt2];
    Q10option3El.textContent = [question10Info.opt3];
    Q10option4El.textContent = [question10Info.opt4];

    if (Q10option1El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showResults();
    }));
    if (Q10option2El.addEventListener('click', function () {
        if (secLeft > 0) {
            secLeft -= 10;
        }
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
        if (secLeft > 0) {
            secLeft -= 10;
        }
        corrAnsEL.textContent = "Wrong!";
        showResults();
    }));
}

historyEl.addEventListener("click", showResults)

var historyList = document.getElementById("previousScoresList")
var scoreEl = document.getElementById('scoreDisplay');
var players = [];
function showResults() {
    //lets hide the question elements again
    questionEl.style.display = 'none';
    option1El.style.display = 'none';
    option2El.style.display = 'none';
    option3El.style.display = 'none';
    option4El.style.display = 'none';
    corrAnsEL.style.display = 'none';

    //and show the results window
    resultsEl.style.display = 'block'
    scoreEl.textContent = "Your final score is " + score;
    submitEl.addEventListener("click", storeResults);
}
if (!localStorage.getItem("myScoreLocal")) {
    var prevScores = [];
} else { var prevScores = JSON.parse(localStorage.getItem("myScoreLocal")) }
console.log(prevScores)
console.log(prevScores[2].userName)

function storeResults() {
    var myScore = {
        userName: nameInputEl.value,
        userScore: score
    }
    console.log(myScore)
    console.log(localStorage.getItem("myScoreLocal"))
    console.log(prevScores)


    prevScores.push(myScore)
    localStorage.setItem("myScoreLocal", JSON.stringify(prevScores))
    resultsEl.style.display = 'none';
    historyEl.style.display = 'flex';
    var playerName = '';
    var playerScore = '';
    for (var i = 0; i < prevScores.length; i++) {
        var playerName = (prevScores[i].userName);
        var playerScore = (prevScores[i].userScore);

        var li = document.createElement("li");
        li.textContent = playerName + ': ' + playerScore + ' points';

        historyList.appendChild(li)
    }
    // showHistory()
}
function showHistory() {
    resultsEl.style.display = 'none';
    historyEl.style.display = 'flex';
    for (var i = 0; i < prevScores.length; i++) {
        var playerName = (prevScores.userName[i]);
        var playerScore = (prevScores.userScore[i]);

        var li = document.createElement("li");
        li.textContent = playerName + ': ' + playerScore + ' points';

        historyList.appendChild(li)
    }

}

//build a function to store the player name and score
//hey put in your name here
//show the score
//store the name and score


//have a page that shows the previous records
//need to have an array/object to hold the previous players scores and names

