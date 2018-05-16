trivia = {
    question: [
        "There's too many people on this Earth. We need a new plague.",
        "I really should have a Tweeter account.",
        "I feel God in this Chili’s tonight."

    ],
    a1: [
        "Angela",
        "Andy",
        "Michael"

    ],
    a2: [
        "Dwight",
        "Michael",
        "Creed"
    ],
    a3: [
        "Creed",
        "Kevin",
        "Angela"

    ],
    a4: [
        "Michael",
        "Dwight",
        "Pam"
    ],
    answer: [
        "Dwight",
        "Dwight",
        "Pam"
    ],
    img:[]
}






let index = 0;
var inRange = true;
let correctAnswers = 0;
let wrongAnswers = 0;
var userAnswer;


// Brings the count down from 10 to 0
function decrementGame() {
    $('#countdown').text(count);
    count--;
        if (count === 0) {
            timeUp();
            clearInterval(timer);
            console.log("Time's up!");
        }
    }

// Initializes countdown for questions
function startClock() {
    count = 10;
    timer = setInterval(decrementGame,1000);
    
}

// Brings the count down from 5 to 0
function decrementResult() {
    $('#countdown').text(resultCount); // make a countdown div to next question
   
    if (resultCount === 0) {
        clearInterval(resultTimer);
        displayQuestions();
    }
    resultCount--;
}

// Initializes countdown on results page to next question
function resultClock() {
    resultCount = 5;
    resultTimer = setInterval(decrementResult,1000);
    
}

// If user gets answer correct
function answerCorrect() {
    $('#results').html('<h1> Nice work! The answer was: ' + trivia.answer[index] + "</h1>");
    correctAnswers++;
    index++;
    resultClock();
    clearInterval(timer);

}

function answerWrong() {
    $('#results').html('<h1> Nice try! The answer was: ' + trivia.answer[index] + "</h1>");
    wrongAnswers++;
    index++;
    resultClock();
    clearInterval(timer);

}

function timeUp () {
    $('#results').html('<h1> Time is up! The answer was: ' + trivia.answer[index] + "</h1>");
    wrongAnswers++;
    index++;
    resultClock();
    clearInterval(timer);
}

function displayQuestions() {
    startClock();

    var display =  ` <div class="col-9 text-center ">
                    <h2 id="question">${trivia.question[index]}</h2>
                    <br>
                    <button id="answer-1">${trivia.a1[index]}</button>
                    <br>
                    <button id="answer-2">${trivia.a2[index]}</button>
                    <br>
                    <button id="answer-3">${trivia.a3[index]}</button>
                    <br>
                    <button id="answer-4">${trivia.a4[index]}</button>
                    <br>`

    $('#results').html(display);

    $('#answer-1, #answer-2, #answer-3, #answer-4').click(function() {
        userAnswer = $(this).text();
        //if user answer does not match answer in index, trigger wrong, else win
        if (userAnswer === trivia.answer[index]) {
            answerCorrect();
        }
        else {
            answerWrong();
        }
    })

    if (index >= trivia.question.length) {
        inRange = false;
    }

}

$('#start').click(displayQuestions);



if (userAnswer === trivia.answer[index]) {
    answerCorrect();
}



// in the display function, change it from text to html, that way the html being overwritten wouldn't
//be a problem OR
// only use text method in this jQuery