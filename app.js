

//Game Values
let min = 1,
    max = Math.floor(Math.random() * 45),
    winningNum = 2;
    guessesLeft = 3;

// UI
const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.getElementById('guess-btn');
const guessInput = document.getElementById('guess-input');
const message = document.querySelector('.message');
const playAgainBtn = document.getElementById('play-again');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    if(isNaN(guess)|| guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max} `, `red`);
    }

    // Check is winning
    if(guess === winningNum){
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        setMessage(`${winningNum} is correct`, `green`);
    } else{
        guessInput.style.borderColor = 'red';
        guessesLeft--;
        setMessage(`${guess} is incorrect. Try again. ${guessesLeft} guesses left.`, 'red');
        
        if(guessesLeft < 1){
            guessInput.disabled = true;
            guessBtn.disabled = true;
            guessBtn.style.borderColor = 'red';
            setMessage(`Game over. You lost. ${guessesLeft} guesses left. The winning number was: ${winningNum}`, 'red');
            playAgain();
        }
       

        
         
    }

});

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function playAgain(){
    playAgainBtn.style.display = 'block';
    playAgainBtn.addEventListener('click', function(){
        guessesLeft = 3;
        guessInput.disabled = false;
        guessInput.style.borderColor = '#333';
        guessBtn.disabled = false;
        guessBtn.style.borderColor = '#333';
        playAgainBtn.style.display = 'none';
        setTimeout(setMessage(`Playing again!`, '#333'), 300);
        winningNum = Math.floor(Math.random() * max);
        max = Math.floor(Math.random() * 45);
        maxNum.textContent = max;
        
        console.log(guessesLeft);
    });

}