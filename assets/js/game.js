let count = 10;

function decrement() {
    count--;
    $('#countdown').text(count);
    if (count === 0) {
        clearInterval(timer)
    }
}


function startClock() {
        if (count != 0){
        timer = setInterval(decrement,1000);
        console.log(count);
        }
    
        else {
        clearInterval(timer);
        console.log('time up')
        }
    }

startClock();