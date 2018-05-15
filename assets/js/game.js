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
    resultClock();
    clearInterval(timer);

}

function answerWrong() {
    $('#results').html('<h1> Nice try! The answer was: ' + trivia.answer[index] + "</h1>");
    wrongAnswers++;
    resultClock();
    clearInterval(timer);

}

function timeUp () {
    $('#results').html('<h1> Time is up! The answer was: ' + trivia.answer[index] + "</h1>");
    wrongAnswers++;
    resultClock();
    clearInterval(timer);
}

function displayQuestions() {
    // startClock();
    $('#question').text(trivia.question[index]);
    $('#answer-1').text(trivia.a1[index]);
    $('#answer-2').text(trivia.a2[index]);
    $('#answer-3').text(trivia.a3[index]);
    $('#answer-4').text(trivia.a4[index]);
    index++;

    if (index >= trivia.question.length) {
        inRange = false;
    }
}

function gameOn() {

    $('#start').remove();
    startClock();
    $('#question').text(trivia.question[0]);
    $('#answer-1').text(trivia.a1[0]);
    $('#answer-2').text(trivia.a2[0]);
    $('#answer-3').text(trivia.a3[0]);
    $('#answer-4').text(trivia.a4[0]);
    index = 1;
    // setTimeout(displayQuestions,10000);
    // setTimeout(startClock,10000)


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

}


$('#start').click(gameOn);



if (userAnswer === trivia.answer[index]) {
    answerCorrect();
}



