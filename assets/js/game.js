let count = 10;
var resultCount = 5;

function decrementGame() {
    count--;
    $('#countdown').text(count);
    if (count === 0) {
        clearInterval(timer)
        // call results here
    }
}

function startClock() {
    if (count != 0){
    timer = setInterval(decrementGame,1000);
    }
}

function decrementResult() {
    resultCount--;
    $('#question').text(resultCount); // change div or no display
    if (resultCount === 0) {
        clearInterval(resultTimer)
        // start next question here
    }
}

function resultClock() {
    if (resultCount != 0){
    resultTimer = setInterval(decrementResult,1000);
    }
}



