// Here are the base codes for our example, if you're less than 18 you can't get in, 
// if you're older than 18, but less than 21 you can't drink, and if you're older than 21 
// 	you can do both
var age = prompt("How old are you?");

if(age<18){
	console.log("Sorry, you're a baby, get outta here.")
}


else if(age<21){
	console.log("Come on in, but you can't drink.")
}

else{
	console.log("Come on in, you can drink too!")
}

// Here are the exercises:
// If the age is negative, print an error
if(age<0){
	alert("I'm sorry, that's not in line with how time works.")
}
// If age is 21
if(age==21){
	console.log("Happy 21st Birthday!")
}
// If age is odd print your age is odd
if(age%2!==0){
	console.log("Your age is odd.")
}
//If age is perfect square, print perfect square
if(age % Math.sqrt(age) === 0) {
	console.log("Your age is a perfect square!");
}