//First, let's figure out our logic. 
//We want to create our secret number, ask user for guess, and check guess

//let's set the number first
var secretNumber =4;

//Now ask user for guess

var guess = prompt("Guess a number");

//Now we want to check if guess is right

// if(guess===secretNumber) {
// 	alert("You got it right!");
// }

//Now this didn't work, because it stored the user's answer as a string, not a number

//So we'll change it to this: 

//Number(guess)

if(Number(guess)===secretNumber) {
	alert("You got it right!");
}


//That worked! now otherwise, you got it wrong

// else{
// 	alert("Wrong!")
// }


//But really we want to check if it's higher, lower, and spit out a dif message

else if(Number(guess)> secretNumber) {
	alert("Too high! Guess again")
}

else {
	alert("Too low! Guess again");
}

// var stringGuess = prompt("Guess a number");
// var guess = Number(stringGuess)
//Here's an improvement we could've made at the top: instead of having to type Nubler(guess) 
//more than once, do it up top. 
//CONSOLIDATED, WITH THE IMPROVEMENT, CONCLUSION: 
// var secretNumber =4;
// var stringGuess = prompt("Guess a number");
// var guess = Number(stringGuess);

// if(guess===secretNumber) {
// 	alert("You got it right!");
// }
// else if (guess> secretNumber) {
// 	alert("Too high! Guess again");
// }

// else {
// 	alert("Too low! Guess again");
// }