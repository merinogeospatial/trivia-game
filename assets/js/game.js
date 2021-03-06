trivia = {
    question: [
        "There's too many people on this Earth. We need a new plague.",
        "I really should have a Tweeter account.",
        "I feel God in this Chili’s tonight.",
        "Hug it out, bitch. That is what men say to each other, after a fight. They hug it out, and doing so, the just... let it go. And walk away. And they're done. Not a good idea to say that to a woman however. I have found. It doesn't translate.",
        "Every little boy fantasizes about his fairy-tale wedding.",
        'No, I disagree. “R” is one of the most menacing of sounds. That’s why they call it murder not ‘muckduck’.',
        "(To Michael) Wow. How many Filet-O-Fish sandwiches did you eat?",
        'And I would text back, "BTB": bring that booty.',
        "I am beyonce, always.",
        "But on Pretzel Day? Well, I like Pretzel Day.",
        "Well you take the first letter of each name, assign it a number, add 'em all up, and shove it up your butt!",
        "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice."

    ],
    a1: [
        "Angela",
        "Andy",
        "Michael",
        "Darryl",
        "Andy",
        "Phyllis",
        "Ryan",
        "Michael",
        "Michael",
        "Michael",
        "Dwight",
        "Dwight"
    ],
    a2: [
        "Dwight",
        "Michael",
        "Creed",
        "Ryan",
        "Michael",
        "Jan",
        "Pam",
        "Darryl",
        "Kelly",
        "Stanley",
        "Kevin",
        "Michael"
    ],
    a3: [
        "Creed",
        "Kevin",
        "Angela",
        "Michael",
        "Jim",
        "Jim",
        "David Wallace",
        "Kevin",
        "Oscar",
        "Kevin",
        "Stanley",
        "Creed"
    ],
    a4: [
        "Michael",
        "Dwight",
        "Pam",
        "Creed",
        "Todd Packer",
        "Dwight",
        "Jim",
        "Todd Packer",
        "Meredith",
        "Toby",
        "Andy",
        "Roy"
    ],
    answer: [
        "Dwight",
        "Dwight",
        "Pam",
        "Michael",
        "Andy",
        "Dwight",
        "Ryan",
        "Darryl",
        "Michael",
        "Stanley",
        "Stanley",
        "Michael"
    ],
    img:[
        'https://media.giphy.com/media/8VrtCswiLDNnO/giphy.gif',
        'https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif',
        'https://media.giphy.com/media/SW3PNayoSGXao/giphy.gif',
        ]
}



let index = 0;
var inRange = true;
let correctAnswers = 0;
let wrongAnswers = 0;
let timeUps = 0;
var userAnswer;


// Brings the count down from 10 to 0
function decrementGame() {
    $('#countdown').text('Time remaining: '+  count);
    count--;
        if (count === 0) {
            timeUp();
            clearInterval(timer);
            console.log("Time's up!");
        }
    }

// Initializes countdown for questions
function startClock() {
    count = 15;
    timer = setInterval(decrementGame,1000);
    
}

// Brings the count down from 5 to 0
function decrementResult() {
    $('#countdown').text('Time till next question: ' + resultCount); // make a countdown div to next question
   
    if (resultCount === 0) {
        clearInterval(resultTimer);
        displayQuestions();
    }
    resultCount--;
}

// Initializes countdown on results page to next question
function resultClock() {
    resultCount = 10;
    resultTimer = setInterval(decrementResult,1000);
    
}

// If user gets answer correct
function answerCorrect() {
    newImg = $('<img>');
    newImg.attr('src',trivia.img[0]);
    $('#results').html('<h1> Nice work! The answer was: ' + trivia.answer[index] + "</h1>");
    $('.gif').append(newImg);

    correctAnswers++;
    index++;
    resultClock();
    clearInterval(timer);

}

function answerWrong() {
    newImg = $('<img>');
    newImg.attr('src',trivia.img[1]);
    $('#results').html('<h1> Nice try! The answer was: ' + trivia.answer[index] + "</h1>");
    $('.gif').append(newImg);

    wrongAnswers++;
    index++;
    resultClock();
    clearInterval(timer);

}

function timeUp () {
    newImg = $('<img>');
    newImg.attr('src',trivia.img[2]);
    $('#results').html('<h1> Time is up! The answer was: ' + trivia.answer[index] + "</h1>");
    $('.gif').append(newImg);

    timeUps++;
    index++;
    resultClock();
    clearInterval(timer);
}

function endResults() {
    var display =   `
                    <div class="col-9 text-center">
                    <h2 class="mt-3"> Number of correct answers: ${correctAnswers}</h2> <br>
                    <h2> Number of wrong answers: ${wrongAnswers}</h2> <br>
                    <h2> Numer of time ups: ${timeUps}</h2> <br>
                    </div>
                    `
    newButton = $('<button>').text("Start Over?");
    $('.gif').append(newButton);
    $(newButton).on ('click', restartGame);

$('#results').html(display);
}

function restartGame() {
    correctAnswers = 0;
    wrongAnswers = 0;
    timeUps = 0;
    index = 0;
    displayQuestions();
}

function displayQuestions() {
    $('.gif').empty();

    if (index === trivia.question.length){
        endResults();
    }
    else {
    startClock();


    var display =  ` <div class="col-9 text-center ">
                    <h2 id="question">${trivia.question[index]}</h2>
                    
                    <button id="answer-1" class="btn btn-dark btn-lg m-3">${trivia.a1[index]}</button>
                    
                    <button id="answer-2" class="btn btn-dark btn-lg m-3">${trivia.a2[index]}</button>
                    
                    <button id="answer-3" class="btn btn-dark btn-lg m-3">${trivia.a3[index]}</button>
                    
                    <button id="answer-4" class="btn btn-dark btn-lg m-3">${trivia.a4[index]}</button>
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
