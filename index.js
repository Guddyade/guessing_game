alert("Welcome to the Number Guessing Game. Goodluck! \n");
const username = prompt("Enter your username: ");

console.log(`Welcome ${username}. Get ready to play`);
let points = -1;
let levels = 1;
let maxStage = 11;
let moveOn = "";


for (i = 2; i <= maxStage; i++){
  console.log(`Welcome to level ${points+i}`);
  let randomNumber = Math.ceil(Math.random() * i);
   // let randomNumber = Math.floor(Math.random() * i) + 1;
// console.log(randomNumber);
  
let playerGuess = parseInt(prompt(`Enter a number between 1 and ${i}`));
  
  if(randomNumber == playerGuess){
    console.log(`Great \n You've earned ${points + i} points \n`);   
  }
  else{
    console.log(`Ouch! \n You ended at level ${i-1}.`)
  prompt("\n Wanna start again? Type 'YES' if so")
}}




// if(!moveOn){
//    continue;   
//   }
// else{
//   break;
// }

//  if(moveOn == "yes"){
//    continue;   
//   }
// else{
//   break;