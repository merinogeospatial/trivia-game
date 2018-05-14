trivia = {
    question: [
        "There's too many people on this Earth. We need a new plague.",
        "I really should have a Tweeter account."

    ],
    a1: [
        "Angela",
        "Andy"

    ],
    a2: [
        "Dwight",
        "Michael"

    ],
    a3: [
        "Creed",
        "Kevin"

    ],
    a4: [
        "Michael",
        "Dwight"
    ]
}


let count = 10;
var resultCount = 5;

// Brings the count down from 10 to 0
function decrementGame() {
    count--;
    $('#countdown').text(count);
    if (count === 0) {
        clearInterval(timer)
        // call results here
    }
}

// Initializes countdown for questions
function startClock() {
    if (count != 0){
    timer = setInterval(decrementGame,1000);
    }
}

// Brings the count down from 5 to 0
function decrementResult() {
    resultCount--;
    $('#question').text(resultCount); // make a countdown div to next question
    if (resultCount === 0) {
        clearInterval(resultTimer)
        // start next question here
    }
}

// Initializes countdown on results page to next question
function resultClock() {
    if (resultCount != 0){
    resultTimer = setInterval(decrementResult,1000);
    }
}


$('#question').text(trivia.question[0]);
$('#answer-1').text(trivia.a1[0]);
$('#answer-2').text(trivia.a2[0]);
$('#answer-3').text(trivia.a3[0]);
$('#answer-4').text(trivia.a4[0]);
