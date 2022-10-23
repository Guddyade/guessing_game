alert("Welcome to the Number Guessing Game. Goodluck! \n");
const username = prompt("Enter your username: ");
console.log(`Welcome ${username}. Get ready to play`);
let points = -1;
let levels = 1;
let maxStage = 10;
let moveOn = false;


for (i = 2; i < maxStage; i++){
  // let randomNumber = Math.ceil(Math.random() * 2);
   let randomNumber = Math.floor(Math.random() * i) + 1;
console.log(randomNumber);
let playerGuess = parseInt(prompt(`Enter a number between 1 and ${i}`));
  if(randomNumber == playerGuess){
    console.log(`Great \n You've earned ${points + i} points \n`);
    
   console.log(`Welcome to level ${levels+i}`);
  }
  else{
    console.log(`Ouch! \n You're wrong. Do you want to start ${i-1} again? `)
     break;   
    
}
if(moveOn = !true){
      
  }}



  // if (randomNumber == playerGuess) {
  //   alert(`Correct! \n You've earned ${num + 1} point`);

    //  let randomNumber =  Math.ceil(Math.random()*3);
    //  playerGuess = prompt("Enter your number guess: ");
    //  if(randomNumber == playerGuess){
    //   alert(`Correct! \n You've earned ${num+1} point`)
    //  }
  // }
  // else if(){

  // }
//   else {
//     alert("Oops! You're out. Kindly refresh to start");
//   }
