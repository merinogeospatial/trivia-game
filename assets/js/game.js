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
let timeUps = 0;
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
    timeUps++;
    index++;
    resultClock();
    clearInterval(timer);
}

function endResults() {
    var display =   `
                    <div class="col-9 text-center">
                    <h2> Number of correct answers: ${correctAnswers}</h2> <br>
                    <h2> Number of wrong answers: ${wrongAnswers}</h2> <br>
                    <h2> Numer of time ups: ${timeUps}</h2> <br>
                    </div>
                    `

$('#results').html(display);
}


function displayQuestions() {

    if (index === trivia.question.length){
        endResults();
    }
    else {
    startClock();


    var display =  ` <div class="col-9 text-center ">
                    <h2 id="question">${trivia.question[index]}</h2>
                    
                    <button id="answer-1" class="my-3">${trivia.a1[index]}</button>
                    
                    <button id="answer-2" class="my-3">${trivia.a2[index]}</button>
                    
                    <button id="answer-3" class="my-3">${trivia.a3[index]}</button>
                    
                    <button id="answer-4" class="my-3">${trivia.a4[index]}</button>
                    `

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
}

$('#start').click(displayQuestions);



if (userAnswer === trivia.answer[index]) {
    answerCorrect();
}



// in the display function, change it from text to html, that way the html being overwritten wouldn't
//be a problem OR
// only use text method in this jQuery