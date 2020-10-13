//1. Write a funcion isEven() which takes a single numberic argument and returns true if the
// //number is even, and false otherwise
function isEven(userAnswer){
	if(userAnswer%2===0){
	return("true")
}else{
	return("false")
}
}

// //Shortcut
// function isEven(userAnswer){
// 	return num%2===0;
// }
//This works because it'll return true or false if it's true or false, you don't have to specify

//2. Write a function factorial() which takes a single numeric argument and 
//returns the factorial of that number

function factorial(num){
	//define a result variable
	var result= 1;
	//calculate factorial and store value in result
	for(var i=1; i<=num; i++){
		result = result *i;
	}
	//return the result variable
	return result;
}

//3. write a function kebabToSnake() which takes a single kebab-cased string argument and 
//returns the snake_cased version. Basically, replace "-" "_"

function kebabToSnake(str){
	//replace all '-' with '_'
	var newStr=str.replace(/-/g, "_");
	//return str
	return newStr
}