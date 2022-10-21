alert("Welcome to Number Guessing Game \n Guess between 1 and 2");
num = 0;
let username = prompt("Enter your username: ");
let randomNumber = Math.ceil(Math.random() * 2);
console.log(randomNumber);
playerGuess = prompt("Enter your number guess: ");

for (i = 0; i < 10; i++) {
  if (randomNumber == playerGuess) {
    alert(`Correct! \n You've earned ${num + 1} point`);

    //  let randomNumber =  Math.ceil(Math.random()*3);
    //  playerGuess = prompt("Enter your number guess: ");
    //  if(randomNumber == playerGuess){
    //   alert(`Correct! \n You've earned ${num+1} point`)
    //  }
  }
  // else if(){

  // }
  else {
    alert("Oops! You're out. Kindly refresh to start");
  }
}
