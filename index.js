console.log("Hello player, Welcome to Guess number game!");
let randomNumber = Math.floor(Math.random()*100);
// console.log(randomNumber)
let tryNum = 0;

while(true){
  tryNum ++;
  let guessInputNum = parseInt(prompt("enter the number which is your thinking"));
  // console.log(typeof(guessInputNum));
  if( randomNumber == guessInputNum ){
    console.log(`congratulations! You guessed the correct number`);
    console.log(`Your guessing number is: ${randomNumber}`);
    console.log(`Your score is:`, 100 - tryNum);
    console.log(`You have completed this game in ${tryNum ++} chances`);
    break
  }
  else{
    console.log("Your guessed wrong number");
    if( guessInputNum > randomNumber ){
      console.log(`original number is smaller than`, guessInputNum);
    }
    else{
      console.log(`original number is greater than`, guessInputNum);
    }
  }
}