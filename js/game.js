let guessNumber = document.getElementById('guessNum');
let noOfguess = document.getElementById('noOfguess');
let guessNo = document.getElementById('guessNo');
let attempt = document.getElementById('attempt');
let lowHigh = document.getElementById('lowHigh');
let result = document.getElementById('result');
let submit = document.getElementById('submit');
let randomNum = parseInt(Math.random() * 100 + 1);

let prevNumber = [];
let enterNumber = 1;
let playGame = true;

let p = document.createElement('p');
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const userInput = parseInt(guessNumber.value);
        console.log(userInput);
        validNum(userInput);
        })
}


function validNum(num){
 if(isNaN(num)){
    alert("Please enter valid Number")
 } else if( num < 1){
    alert("Please enter valid Number more than 1")
 } else if( num >= 100){
    alert("Please enter valid Number more than up to 100")
 } else{
    prevNumber.push(num)
   if(enterNumber === 11){
     displayGuessNum(num)
     displayMessage(`Game over random number was ${randomNum}`);
     endGame()
   }
   else{
    displayGuessNum(num)
    checkGuessNum(num)
   }
 }
}
 function checkGuessNum(guessNum){
    if(guessNum === randomNum){
        displayMessage(`You have gussed Right Number`);
        endGame();
    } else if(guessNum < randomNum){
        displayMessage(`Number is to low`);
    } else if(guessNum > randomNum){
        displayMessage(`Number is to High`)
    }
 }
function displayGuessNum(guessNum){
   guessNumber.value = '';
   guessNo.innerHTML += `<span class="number">${guessNum}</span>`;
   enterNumber++;
   attempt.innerHTML = `<span id="attempt">${11 - enterNumber}</span>`
}
function displayMessage(message){
    lowHigh.innerHTML = `${message}`
} 

function endGame(){
    guessNumber.value = '';
    guessNumber.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start New Game</button>`
    lowHigh.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', function(e){
    randomNum = parseInt(Math.random() * 100 + 1);
    prevNumber = [];
     enterNumber = 1;
     guessNumber.innerHTML = "";
     guessNo.innerHTML = "";
     attempt.innerHTML = `${11 - enterNumber}`;
     guessNumber.removeAttribute('disabled');
     submit.removeAttribute('disabled');
     lowHigh.removeChild(p);
     playGame = true;
    console.log("new game")
    displayMessage("")
    })
}


console.log(prevNumber)

console.log(randomNum)