//variables I'll be using throughout, are located here
var secLeft = 59; //set to 59 because there is a one second delay in this starting
var score = 0; //the only penalty for a wrong answer is time, no point deduction
//make the timer

//Here I am calling down elements by ID, keeping them all here
// here are the vars that are set at the begining
var timerEl = document.getElementById('timerDisplay');
var scoreEl = document.getElementById('scoreDisplay');
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

// var allOpts = [option1El,option2El, option3El,option4El]
// console.log(allOpts)
// allOpts.style.display = "none"

// var options = document.getElementsByClassName("options")
// options.style.display = 'none';
// var allOpts = document.querySelectorAll(": scope >div")
// allOpts.style.display = "none"

//presently there is a delay with the showing question 1, and the timer starting, download issues?
// beginEl.addEventListener('click',beginQuiz)
// beginEl.addEventListener('click',startTimer)
// beginEl.addEventListener('click',showQuestion1)
beginEl.addEventListener('click',start)

//when the quiz starts lets hide the title and start button
function start (){
    beginQuiz();
    startTimer();
    showQuestion1();
}

function beginQuiz(){
    titleEl.style.display = 'none';
    beginEl.style.display = 'none';
    
}
//Lets display the questions 
//currently does not fucntion while inside function, why?
// this is the base of the timer, can add hte in penalty for wrong answers in the space where i determine the right answer and add points
function startTimer (){
    var interval = setInterval(function(){
        timerEl.textContent = ["Time: "+ secLeft];
        secLeft--;;
        //if they answer wrong remove 15
        if (secLeft === 0){
            clearInterval(interval)
        }
    },1000);
}
function scoreTracker (){
    scoreEl.textContent = score;
}


var question1Info = {
    question : "Jung",
    opt1 : "JUng",
    opt2 : "JUNg",
    opt3 : "JUNG",
    opt4 : "jung",
    opt1Answer : false,
    opt2Answer : true,
    opt3Answer : false,
    opt4Answer: false
}
var question2Info = {
    question : "Sally",
    opt1 : "SAlly",
    opt2 : "SALly",
    opt3 : "SALLy",
    opt4 : "SALLY",
    opt1Answer : false,
    opt2Answer : true,
    opt3Answer : false,
    opt4Answer: false
}

var question3Info = {
    question : "Hello",
    opt1 : "HEllo",
    opt2 : "HELlo",
    opt3 : "HELLo",
    opt4 : "HELLO",
    opt1Answer : false,
    opt2Answer : true,
    opt3Answer : false,
    opt4Answer: false
}

var question4Info = {
    question : "Jung",
    opt1 : "JUng",
    opt2 : "JUNg",
    opt3 : "JUNG",
    opt4 : "jung",
    opt1Answer : false,
    opt2Answer : true,
    opt3Answer : false,
    opt4Answer: false
}
var question5Info = {
    question : "Sally",
    opt1 : "SAlly",
    opt2 : "SALly",
    opt3 : "SALLy",
    opt4 : "SALLY",
    opt1Answer : false,
    opt2Answer : true,
    opt3Answer : false,
    opt4Answer: false
}

var question6Info = {
    question : "Hello",
    opt1 : "HEllo",
    opt2 : "HELlo",
    opt3 : "HELLo",
    opt4 : "HELLO",
    opt1Answer : false,
    opt2Answer : true,
    opt3Answer : false,
    opt4Answer: false
}

var question7Info = {
    question : "Jung",
    opt1 : "JUng",
    opt2 : "JUNg",
    opt3 : "JUNG",
    opt4 : "jung",
    opt1Answer : false,
    opt2Answer : true,
    opt3Answer : false,
    opt4Answer: false
}
var question8Info = {
    question : "Sally",
    opt1 : "SAlly",
    opt2 : "SALly",
    opt3 : "SALLy",
    opt4 : "SALLY",
    opt1Answer : false,
    opt2Answer : true,
    opt3Answer : false,
    opt4Answer: false
}

var question9Info = {
    question : "Hello",
    opt1 : "HEllo",
    opt2 : "HELlo",
    opt3 : "HELLo",
    opt4 : "HELLO",
    opt1Answer : false,
    opt2Answer : true,
    opt3Answer : false,
    opt4Answer: false
}
var question10Info = {
    question : "Jung",
    opt1 : "JUng",
    opt2 : "JUNg",
    opt3 : "JUNG",
    opt4 : "jung",
    opt1Answer : false,
    opt2Answer : true,
    opt3Answer : false,
    opt4Answer: false
}
var question11Info = {
    question : "Sally",
    opt1 : "SAlly",
    opt2 : "SALly",
    opt3 : "SALLy",
    opt4 : "SALLY",
    opt1Answer : false,
    opt2Answer : true,
    opt3Answer : false,
    opt4Answer: false
}

var question12Info = {
    question : "Hello",
    opt1 : "HEllo",
    opt2 : "HELlo",
    opt3 : "HELLo",
    opt4 : "HELLO",
    opt1Answer : false,
    opt2Answer : true,
    opt3Answer : false,
    opt4Answer: false
}

function showQuestion1 (){
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
    if (option1El.addEventListener('click',function(){
        if (secLeft>0)
        secLeft -=10
        // secLeft - 10;
        //this must go here so that it is included on the click of option1
        showQuestion2()
        // option1El.addEventListener('click',showQuestion2)
    }));
    if (option2El.addEventListener('click',function(){
        score++;
        scoreTracker()
        //this must go here so that it is included on the click of option1
        option2El.addEventListener('click',showQuestion2)
    }));
    if (option3El.addEventListener('click',function(){
        if (secLeft>0)
        secLeft = secLeft - 10;
        //this must go here so that it is included on the click of option1
        option3El.addEventListener('click',showQuestion2)
    }));
    if (option4El.addEventListener('click',function(){
        if (secLeft>0)
        secLeft = secLeft - 10;
        //this must go here so that it is included on the click of option1
        option4El.addEventListener('click',showQuestion2)
    }));
}
function showQuestion2 (){
//     var questionEl = document.getElementById('question');
// var option1El = document.getElementById('option1');
// var option2El = document.getElementById('option2');
// var option3El = document.getElementById('option3');
// var option4El = document.getElementById('option4');

    questionEl.textContent = [question2Info.question];
    option1El.textContent = [question2Info.opt1];
    option2El.textContent = [question2Info.opt2];
    option3El.textContent = [question2Info.opt3];
    option4El.textContent = [question2Info.opt4];
    // if (option1El.addEventListener('click',function(){
    //     if (secLeft>0)
    //     secLeft = secLeft - 10;
    //     //this must go here so that it is included on the click of option1
    //     option1El.addEventListener('click',showQuestion2)
    // }));
    // if (option2El.addEventListener('click',function(){
    //     score++
    //     //this must go here so that it is included on the click of option1
    //     option1El.addEventListener('click',showQuestion2)
    // }));
    // if (option3El.addEventListener('click',function(){
    //     if (secLeft>0)
    //     secLeft = secLeft - 10;
    //     //this must go here so that it is included on the click of option1
    //     option1El.addEventListener('click',showQuestion2)
    // }));
    // if (option4El.addEventListener('click',function(){
    //     if (secLeft>0)
    //     secLeft = secLeft - 10;
    //     //this must go here so that it is included on the click of option1
    //     option1El.addEventListener('click',showQuestion2)
    // }));
}

var submitEl = document.getElementById('submit')
var historyEl = document.getElementById('viewHistory');
historyEl.addEventListener("click",showResults)


console.log(questionEl)
console.log(timerEl)
function showResults (){}


//build a function to store the player name and score
//hey put in your name here
//show the score
//store the name and score


//have a page that shows the previous records
//need to have an array/object to hold the previous players scores and names

